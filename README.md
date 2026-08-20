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

GitHub Pages pubblica da branch **`main`**, cartella **`/docs`**.

Dopo modifiche al sito:

```bash
git add docs/
git commit -m "…"
git push origin main
```

Verifica su https://wainex.it/ (propagazione DNS/Pages: di solito 1–2 minuti).

## Naming

- **Waynex** — nome prodotto e copy del sito
- **wainex.it** — dominio e email (`support@wainex.it`)
- **voyager** — solo nome tecnico del package Flutter in `app/`; non usare sul sito

Controllo rapido prima del push:

```bash
rg -i voyager docs/
```

(deve restare vuoto)
