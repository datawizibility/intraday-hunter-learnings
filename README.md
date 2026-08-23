# Intraday Hunter Learnings

Personal knowledge vault built from [Intraday Hunter](https://www.youtube.com/@IntradayHunter) videos.

**Purpose:** extract reusable trading process (structure, levels logic, risk, psychology) — not copy signals.

## Structure

| Path | Purpose |
|------|---------|
| `daily/` | Weekday notes — **Vault/Agent pre** first, then IH pre/post paste, compare + outcome (`templates/daily-note.md`) |
| `teaching/` | Sunday / concept videos (experience sharing) |
| `playbook/` | Durable rules — `TRADING-BIBLE.md` fed by **daily + teaching** |
| `levels-log/` | Nifty / Bank Nifty / Sensex levels mentioned |
| `mistakes/` | Process errors & psychology notes |
| `templates/` | Note templates |
| `web/` | Local learning app (day log, teachings, quizzes, decision trainer) |

## Learning app

Browse notes, train the open-type matrix, and quiz yourself.

**Hosted (GitHub Pages):** https://datawizibility.github.io/intraday-hunter-learnings/  
(deploys automatically on push to `main` via `.github/workflows/deploy-pages.yml`)

**Local:**

```bash
cd web
npm install
npm run dev
```

`npm run sync` regenerates `web/public/data/vault.json` from markdown. Dev/build run sync automatically.

**Note:** GitHub Pages for a *private* repo needs GitHub Pro (or make the repo public). The site URL pattern is always `https://<user>.github.io/<repo>/`.

Channel is not SEBI-registered. Treat notes as education; your risk rules win.
