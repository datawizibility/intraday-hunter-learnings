# ⚠️ `ih_teaching/manifest.json` was LOST — 2026-11-01 device migration

**Status:** the working directory `/data/data/com.termux/files/home/tmpsearch/ih_teaching/` was
**not restored** by the 2026-11-01 device migration (the migration archive carried
`skills/ config cron memories sessions scripts` only). Lost with it:

| artefact | state | replacement |
|---|---|---|
| `ih_teaching/manifest.json` (235 rows, source of truth) | **LOST** | `EVOLUTION.md` § `## Progress` is now the pointer of record |
| `ih_teaching/process_ih_teaching.py` (`--next` / `--status` / `--mark`) | **LOST** | `scripts/find_next_teaching.py` (new) |
| `ih_teaching/EVOLUTION.md` (local mirror) | **LOST** | re-fetch from the repo root (`EVOLUTION.md`) |
| `ih_teaching/transcripts/*.txt` cache + VTT cache | **LOST** | re-fetched on demand |
| `_vq*.py`, `_push_*.py`, `_evo_*.py`, `_log_*.py` helper scripts | **LOST** | rebuilt in the 2022-01-09/22/23 batch (see *Recovery recipe*) |

## Where the state actually lives (nothing was lost in the corpus itself)

The **corpus and its content are intact** — they live in the repo and in Drive, not on the device:

- repo `datawizibility/intraday-hunter-learnings` — `teaching/` **199** notes, `transcripts/` **320**
  files, root `EVOLUTION.md` (**1,446,721 B** after the 2026-11-01 batch), `levels-log/`,
  `playbook/TRADING-BIBLE.md`.
- Drive — Summaries **201**, Transcripts **286**.
- Command Center `n8n` tab — 614 rows; the `Teaching #NNN` counter reads **#185**.

## Recovery recipe (proven 2026-11-01)

1. **Recreate the working dir** — `/data/data/com.termux/files/home/tmpsearch/ih_teaching/{notes,transcripts}`.
   ⚠️ create it *before* any `cd`; a `cd` into a missing dir fails and the shell reports a misleading
   `exit 126`.
2. **Do NOT trust `--next` semantics.** Without the manifest, derive the next video from **upload date**:
   run `scripts/find_next_teaching.py` (below) — it diffs the channel uploads playlist against the
   repo's `transcripts/` filenames (which carry the video id).
3. **⚠️ The back-catalogue ordering is NOT guaranteed complete.** The 2026-11-01 batch found
   **`2022-01-09 h2PMw2aO5Rc` public, captioned and unprocessed** while the Progress pointer said
   `2022-01-22`. Always sort remaining candidates by **upload date** and re-check the earliest — never
   only follow the pointer.
4. **Transcript route when YouTube blocks captions** (both `youtube-transcript-api` and yt-dlp's
   timedtext returned **HTTP 429** for every video on 2026-11-01): fetch through an Invidious proxy —
   `GET https://<instance>/api/v1/captions/<id>` → pick the `Hindi (auto-generated)` track → GET its
   url → parse the VTT. Working instance that day: `yt.chocolatemoo53.com`. See
   `gettr.py`-style flow in the batch helper scripts.
5. **Re-fetch the remote timeline** — `contents/EVOLUTION.md` returns `size` + `sha` with an **empty
   `content`** (file > 1 MB): read the text from `git/blobs/<sha>`.
6. **Push, then re-verify** with the Contents API (never the raw URL — it is CDN-cached).

## Rebuilding the manifest properly (still OPEN)

The 235 rows = 196 indexed rows (195-entry Sunday Special playlist + 1 removed) + 39
`channel-backcatalogue` uploads recovered by the 2026-10-31 channel scan. Rebuilding it from scratch
requires re-running that scan and re-deriving the teaching/not-teaching filter — **not attempted here**,
because a wrong filter would silently change the corpus.

**Until it is rebuilt, this is the pointer of record:**

```
Processed 190 / Remaining 30 / Next 2022-01-29 FiAkzCtIjP8 (VWAP + SUPERTREND INTRADAY STRATEGY)
```

⚠️ The **30 remaining rows are unverified** — the 2022-01-09 hole proves the list had at least one
omission. Treat every run as *"verify the earliest unprocessed upload date, then process"*.
