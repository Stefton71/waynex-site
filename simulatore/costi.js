(function () {
  const PASS_HASH =
    "4a089e248400cc7c47d7a48a1c7118cf7125453d34a9e080d1106f8d8ad6a76d";
  const SESSION_KEY = "waynex-costi-ok-v2";

  const EUR_PER_USD = 0.86;
  const VAT = 0.22;
  const APPLE_DEV = (99 * EUR_PER_USD) / 12;
  const MAX_LIST = 8.99;
  const PHOTO_USD = 0.007;
  const TEXT_USD = 0.032;
  const PHOTO_FREE = 1000;
  const TEXT_FREE = 5000;
  const PHOTO_CAP = 400;
  const TEXT_CAP = 100;

  const USAGE = {
    typical: { photos: 40, text: 8, label: "un viaggio al mese" },
    heavy: { photos: 150, text: 30, label: "uso intenso" },
    worst: { photos: 400, text: 100, label: "tutti al massimo" },
  };

  function inTuaTasca(listino, commissione) {
    return (listino / (1 + VAT)) * (1 - commissione);
  }

  function costoGoogle(eventi, gratis, dollari) {
    return Math.max(0, eventi - gratis) * dollari * EUR_PER_USD;
  }

  function euro(n) {
    const s = Math.abs(n).toLocaleString("it-IT", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return n < 0 ? "−" + s + " €" : s + " €";
  }

  async function sha256Hex(text) {
    const buf = await crypto.subtle.digest(
      "SHA-256",
      new TextEncoder().encode(text),
    );
    return Array.from(new Uint8Array(buf))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  }

  function unlock() {
    document.getElementById("gate").hidden = true;
    document.getElementById("app").hidden = false;
    render();
  }

  async function tryUnlock(password) {
    const hash = await sha256Hex(password);
    if (hash !== PASS_HASH) return false;
    sessionStorage.setItem(SESSION_KEY, "1");
    unlock();
    return true;
  }

  function render() {
    const maxUsers = Number(document.getElementById("maxUsers").value);
    const plusUsers = Number(document.getElementById("plusUsers").value);
    const usageKey = document.getElementById("usage").value;
    const plusList = Number(document.getElementById("plusPrice").value);
    const commission = Number(document.getElementById("appleCut").value);
    const stress = document.getElementById("stress").checked;
    const usage = USAGE[usageKey];
    const photosEach = stress ? PHOTO_CAP : usage.photos;
    const textEach = stress ? TEXT_CAP : usage.text;

    const daPlus = inTuaTasca(plusList, commission);
    const daMax = inTuaTasca(MAX_LIST, commission);
    const google =
      costoGoogle(maxUsers * photosEach, PHOTO_FREE, PHOTO_USD) +
      costoGoogle(maxUsers * textEach, TEXT_FREE, TEXT_USD);
    const entrate = plusUsers * daPlus + maxUsers * daMax;
    const inTasca = entrate - google - APPLE_DEV;
    const googleUnMaxPieno =
      PHOTO_CAP * PHOTO_USD * EUR_PER_USD + TEXT_CAP * TEXT_USD * EUR_PER_USD;
    const daPlusOggi = inTuaTasca(2.99, commission);
    const extraPlus = (daPlus - daPlusOggi) * plusUsers;
    const churnOk =
      daPlus > 0 ? Math.round((1 - daPlusOggi / daPlus) * 100) : 0;
    const freeUntil = Math.floor(PHOTO_FREE / Math.max(photosEach, 1));

    const banner = document.getElementById("verdict");
    banner.className = "costi-verdict " + (inTasca >= 0 ? "ok" : "bad");
    banner.innerHTML =
      "<strong>" +
      (inTasca >= 0
        ? "Ti restano " + euro(inTasca)
        : "Sei in perdita di " + euro(Math.abs(inTasca))) +
      "</strong><p>" +
      plusUsers +
      " Plus a " +
      plusList.toFixed(2).replace(".", ",") +
      " € e " +
      maxUsers +
      " Max a 8,99 €. Dopo IVA e Apple entrano " +
      euro(entrate) +
      ". Google chiede " +
      euro(google) +
      ". Account sviluppatore ≈ " +
      euro(APPLE_DEV) +
      ".</p>";

    document.getElementById("statIn").textContent = euro(entrate);
    document.getElementById("statGoogle").textContent = euro(google);
    document.getElementById("statOut").textContent = euro(inTasca);
    document.getElementById("statOut").className =
      "costi-stat-value " + (inTasca >= 0 ? "ok" : "bad");

    document.getElementById("freeNote").textContent =
      "Con " +
      photosEach +
      " foto a testa, Google non fa pagare le prime 1.000 foto dell’account: i primi " +
      freeUntil +
      " Max sono quasi a costo zero sulle copertine.";

    const plusEuro = plusList.toFixed(2).replace(".", ",") + " €";
    document.getElementById("cellPlusPay").textContent = plusEuro;
    document.getElementById("cellPlusNet").textContent = euro(daPlus);
    document.getElementById("cellMaxNet").textContent = euro(daMax);
    document.getElementById("cellPlusGoogleUse").textContent = "0,00 €";
    document.getElementById("cellMaxGoogleUse").textContent = euro(
      photosEach * PHOTO_USD * EUR_PER_USD + textEach * TEXT_USD * EUR_PER_USD,
    );
    document.getElementById("cellPlusGoogleMax").textContent = "0,00 €";
    document.getElementById("cellMaxGoogleMax").textContent =
      euro(googleUnMaxPieno);
    document.getElementById("cellPlusKeep").textContent = euro(daPlus);
    document.getElementById("cellMaxKeep").textContent = euro(
      daMax - googleUnMaxPieno,
    );

    const plusNote = document.getElementById("plusNote");
    if (plusList !== 2.99) {
      plusNote.innerHTML =
        "<strong>Plus a " +
        plusEuro +
        " invece di 2,99 €</strong><p>Su " +
        plusUsers +
        " Plus, in tasca arrivano " +
        euro(extraPlus) +
        " in più al mese. Potresti perdere circa il " +
        churnOk +
        "% dei Plus e restare pari. 3,99 € è il gradino più pulito; 4,99 € avvicina troppo Max.</p>";
    } else {
      plusNote.innerHTML =
        "<strong>Plus a 2,99 € è basso</strong><p>Watch, PDF e collaborazione a 2,99 € sono un affare per il cliente. Prova 3,99 €: Google non cambia, cambia solo quanto ti arriva da Plus.</p>";
    }

    const scala = [10, 50, 100, 250, 500];
    const values = scala.map((m) => {
      const g =
        costoGoogle(m * photosEach, PHOTO_FREE, PHOTO_USD) +
        costoGoogle(m * textEach, TEXT_FREE, TEXT_USD);
      return plusUsers * daPlus + m * daMax - g - APPLE_DEV;
    });
    drawChart(scala, values);
    document.getElementById("chartCaption").textContent =
      "In orizzontale: numero di Max. In verticale: euro che ti restano. I Plus restano " +
      plusUsers +
      ". Uso foto: " +
      (stress ? "tutti al massimo (400)" : usage.label) +
      ".";
  }

  function drawChart(cats, values) {
    const svg = document.getElementById("chart");
    const w = 640;
    const h = 220;
    const pad = { l: 52, r: 16, t: 16, b: 36 };
    const innerW = w - pad.l - pad.r;
    const innerH = h - pad.t - pad.b;
    const min = Math.min(0, ...values);
    const max = Math.max(0, ...values);
    const span = max - min || 1;
    const x = (i) => pad.l + (i / (cats.length - 1)) * innerW;
    const y = (v) => pad.t + innerH - ((v - min) / span) * innerH;
    const pts = values.map((v, i) => x(i) + "," + y(v)).join(" ");
    const area =
      pad.l +
      "," +
      y(0) +
      " " +
      pts +
      " " +
      x(cats.length - 1) +
      "," +
      y(0);
    const labels = cats
      .map(
        (c, i) =>
          '<text x="' +
          x(i) +
          '" y="' +
          (h - 10) +
          '" text-anchor="middle">' +
          c +
          "</text>",
      )
      .join("");
    svg.setAttribute("viewBox", "0 0 " + w + " " + h);
    svg.innerHTML =
      '<polyline class="zero" points="' +
      pad.l +
      "," +
      y(0) +
      " " +
      (w - pad.r) +
      "," +
      y(0) +
      '" /><polygon class="fill" points="' +
      area +
      '" /><polyline class="line" points="' +
      pts +
      '" />' +
      values
        .map(
          (v, i) =>
            '<circle cx="' + x(i) + '" cy="' + y(v) + '" r="4" />',
        )
        .join("") +
      labels;
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (sessionStorage.getItem(SESSION_KEY) === "1") unlock();

    document.getElementById("gate-form").addEventListener("submit", async (e) => {
      e.preventDefault();
      const input = document.getElementById("password");
      const err = document.getElementById("gate-error");
      const ok = await tryUnlock(input.value);
      err.hidden = ok;
      if (!ok) input.focus();
    });

    document.getElementById("logout").addEventListener("click", () => {
      sessionStorage.removeItem(SESSION_KEY);
      document.getElementById("app").hidden = true;
      document.getElementById("gate").hidden = false;
      document.getElementById("password").value = "";
    });

    ["maxUsers", "plusUsers", "usage", "plusPrice", "appleCut", "stress"].forEach(
      (id) => {
        document.getElementById(id).addEventListener("change", render);
      },
    );
  });
})();
