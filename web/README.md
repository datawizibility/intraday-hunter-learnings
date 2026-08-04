# Learning web app

Local SPA that reads the vault via a sync step (markdown stays the source of truth).

## Setup

```bash
cd web
npm install
npm run dev
```

Open the URL Vite prints (default http://localhost:5173).

## Scripts

| Script | What it does |
|--------|----------------|
| `npm run sync` | Globs `../daily/*.md`, reads bible + levels-log → `public/data/vault.json` |
| `npm run dev` | Syncs, then starts Vite |
| `npm run build` | Syncs, then production build to `dist/` |
| `npm run preview` | Preview the production build |

## Pages

- **Today** — latest daily note + morning checklist
- **Day log** — all daily/weekly notes
- **Playbook** — rendered `TRADING-BIBLE.md`
- **Decision trainer** — inventory × open matrix
- **Quiz** — self-grading questions (progress in `localStorage`)
- **Levels** — levels-log table

Educational UI only — not SEBI advice.
