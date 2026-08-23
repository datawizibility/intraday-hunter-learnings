# Daily note template

Educational notes only — not SEBI advice. Your risk rules win.

## Dual-track workflow

1. **Vault / Agent pre** — write first from charts + Trading Bible + recent days (before any IH paste).
2. Later paste **IH pre** and **IH post / live**.
3. Fill **Trade outcome**, **Vault vs IH (learnings)**, and **Keep permanently**.
4. Sync the web app: `cd web && npm run sync`.

**Trade outcome is required** on every daily note (win / loss / cut / booked / no trade).

### Sync headings (web app)

`npm run sync` accepts **either** style:

| Role | Dual-track (preferred) | Legacy |
|------|------------------------|--------|
| Agent pre | `## Vault pre (agent)` | — |
| Structured pre | `## IH pre` | `## Pre-market` |
| Live / post | `## Live / IH post` | `## Post-market` / `## Post-market (live)` |
| Compare | `## Vault vs IH (learnings)` | — |

Prefer dual-track for new days. Put `### Keep permanently` under Live/post (or as `## Keep permanently`) so playbook chips sync.

---

# YYYY-MM-DD (Day)

## Vault pre (agent)
- Bias / plan by open type
- Levels watched
- Risk notes

## IH pre
_(paste later)_

**Video:**  
**Transcript:** `transcripts/YYYY-MM-DD-pre.md`

### Bias & structure
-

### Plan by open
| Open | Plan |
|------|------|
| | |

### Levels mentioned
| Index | Resistance | Support |
|-------|------------|---------|
| Bank Nifty | | |
| Sensex | | |
| Nifty | | |

## Live / IH post
_(paste later)_

**Video:**  
**Transcript:** `transcripts/YYYY-MM-DD-post.md`

### What happened / what he did
-

### Trade outcome (IH)
_(fill after post)_
- (win / loss / cut / booked / no trade — **required**)

### Keep permanently
1.
2.
3.

## Vault vs IH (learnings)
- Where agent matched IH
- Where agent differed
- What chart actually did
- My takeaway

## Levels
| Index | Level | Role | Why |
|-------|-------|------|-----|
| Nifty | | | |
| Bank Nifty | | | |
| Sensex | | | |

## Day-specific only (don't overfit)
-

---

*Note: Trade outcome section is required on each daily note (win / loss / cut / booked / no trade).*
