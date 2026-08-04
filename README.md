# Intraday Hunter Learnings

Personal knowledge vault built from [Intraday Hunter](https://www.youtube.com/@IntradayHunter) videos.

**Purpose:** extract reusable trading process (structure, levels logic, risk, psychology) — not copy signals.

## Structure

| Path | Purpose |
|------|---------|
| `daily/` | One note per video |
| `playbook/` | Durable rules — start with `playbook/TRADING-BIBLE.md` |
| `levels-log/` | Nifty / Bank Nifty / Sensex levels mentioned |
| `mistakes/` | Process errors & psychology notes |
| `weekly/` | Weekend pattern synthesis |
| `templates/` | Note templates |
| `web/` | Local learning app (quizzes, day log, decision trainer) |

## Learning app

Browse notes, train the open-type matrix, and quiz yourself:

```bash
cd web
npm install
npm run dev
```

`npm run sync` regenerates `web/public/data/vault.json` from markdown. Dev/build run sync automatically.

Channel is not SEBI-registered. Treat notes as education; your risk rules win.
