(function () {
  const ALIASES = { grabriele: "gabriele" };
  const SESSION_KEY = "waynex-costi-dek-v1";

  const textDecoder = new TextDecoder();

  function b64ToBytes(value) {
    const bin = atob(value);
    const out = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }

  function bytesToB64(bytes) {
    let s = "";
    bytes.forEach((b) => {
      s += String.fromCharCode(b);
    });
    return btoa(s);
  }

  async function deriveKek(password, saltB64, iterations) {
    const baseKey = await crypto.subtle.importKey(
      "raw",
      new TextEncoder().encode(password),
      "PBKDF2",
      false,
      ["deriveKey"],
    );
    return crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt: b64ToBytes(saltB64),
        iterations,
        hash: "SHA-256",
      },
      baseKey,
      { name: "AES-GCM", length: 256 },
      false,
      ["decrypt"],
    );
  }

  async function decryptAesGcm(key, part) {
    const data = b64ToBytes(part.data);
    const tag = b64ToBytes(part.tag);
    const combined = new Uint8Array(data.length + tag.length);
    combined.set(data);
    combined.set(tag, data.length);
    return crypto.subtle.decrypt(
      { name: "AES-GCM", iv: b64ToBytes(part.iv) },
      key,
      combined,
    );
  }

  async function importDek(raw) {
    return crypto.subtle.importKey("raw", raw, "AES-GCM", false, ["decrypt"]);
  }

  async function unlockWithDek(dekRaw, vault) {
    const dek = await importDek(dekRaw);
    const plain = await decryptAesGcm(dek, vault.payload);
    const payload = JSON.parse(textDecoder.decode(plain));
    const app = document.getElementById("app");
    app.innerHTML = payload.html;
    app.hidden = false;
    document.getElementById("gate").hidden = true;
    const script = document.createElement("script");
    script.textContent = payload.js;
    document.body.appendChild(script);
    if (typeof window.initCosti === "function") window.initCosti();
  }

  async function tryPassword(username, password, vault) {
    const key = (username || "").trim().toLowerCase();
    const user = ALIASES[key] || key;
    const record = vault.users[user];
    if (!record) return false;
    try {
      const kek = await deriveKek(password, record.salt, record.iterations);
      const dekRaw = new Uint8Array(await decryptAesGcm(kek, record));
      sessionStorage.setItem(SESSION_KEY, bytesToB64(dekRaw));
      await unlockWithDek(dekRaw, vault);
      return true;
    } catch (_) {
      return false;
    }
  }

  document.addEventListener("DOMContentLoaded", async () => {
    const vault = await fetch("vault.json", { cache: "no-store" }).then((r) =>
      r.json(),
    );
    const saved = sessionStorage.getItem(SESSION_KEY);
    if (saved) {
      try {
        await unlockWithDek(b64ToBytes(saved), vault);
      } catch (_) {
        sessionStorage.removeItem(SESSION_KEY);
      }
    }

    document.getElementById("gate-form").addEventListener("submit", async (e) => {
      e.preventDefault();
      const err = document.getElementById("gate-error");
      const ok = await tryPassword(
        document.getElementById("username").value,
        document.getElementById("password").value,
        vault,
      );
      err.hidden = ok;
      if (!ok) document.getElementById("password").focus();
    });

    document.getElementById("logout").addEventListener("click", () => {
      sessionStorage.removeItem(SESSION_KEY);
      document.getElementById("app").hidden = true;
      document.getElementById("app").innerHTML = "";
      document.getElementById("gate").hidden = false;
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
      location.reload();
    });
  });
})();
