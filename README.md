# Sito Waynex (wainex.it)

Cartella **`docs/`** = unica sorgente del sito pubblico.

| Cosa | Dove |
|------|------|
| Homepage IT | `/` → `index.html` |
| Homepage EN | `/en/` → `en/index.html` |
| Privacy / Termini | `privacy/`, `terms/`, `en/privacy/`, `en/terms/` |
| Schermate app | `screenshots/`, `en/screenshots/` |
| Simulatore costi (interno) | `simulatore/` |
| Dominio custom | `CNAME` → `wainex.it` |

## Deploy

**Sorgente locale:** cartella `docs/` in questo repo (monorepo app + sito).

**Pubblicazione live:** [wainex.it](https://wainex.it) è servito dal repo pubblico **[Stefton71/waynex-site](https://github.com/Stefton71/waynex-site)** (branch `main`, root `/`), **non** da `Stefton71/waynex` — GitHub Pages non è disponibile sul repo privato dell’app.

Dopo modifiche al sito:

```bash
# 1. committa in waynex (sorgente)
git add docs/
git commit -m "…"

# 2. copia su waynex-site e pubblica
rsync -av --exclude='.git' docs/ /path/to/waynex-site/
cd /path/to/waynex-site
git add -A && git commit -m "…" && git push origin main
```

Verifica su https://wainex.it/ (propagazione Pages: di solito 1–2 minuti). Hard refresh se vedi cache vecchia.

## Naming

- **Waynex** — nome prodotto e copy del sito
- **wainex.it** — dominio e email (`support@wainex.it`)
- **voyager** — solo nome tecnico del package Flutter in `app/`; non usare sul sito

Controllo rapido prima del push:

```bash
rg -i voyager docs/
```

(deve restare vuoto)
