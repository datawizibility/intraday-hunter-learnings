# Teaching Evolution — how the Intraday Hunter process changed over time

> **Why this file exists.** `TRADING-BIBLE.md` was built almost entirely from *recent*
> (2026) daily notes, so it reads as a snapshot, not a history. The "Sunday Special"
> teaching corpus runs from **2021 → 2026** (191 videos). Processing it **chronologically**
> lets us see not just what the process IS, but **how it CHANGED** — which ideas are
> stable bedrock, which were refined, and which were quietly dropped.
>
> That distinction matters: an idea taught in 2022 and still taught in 2026 has survived
> four years of live markets. An idea that appeared once and vanished is a hypothesis.

---

## How to read this file

Each entry is one dated teaching note. Record an evolution note **only when there is
something real to record** — a new concept, a changed rule, a contradiction, or a
refinement. Do not manufacture change where the teaching simply repeats itself.

**Signal types:**
| Mark | Meaning |
|---|---|
| 🟢 **STABLE** | same idea taught again, unchanged — evidence it survived live markets |
| 🔵 **NEW** | first appearance of a concept |
| 🟡 **REFINED** | the idea developed — a condition, exception or mechanism was added |
| 🔴 **CONTRADICTS** | a direct conflict with an earlier teaching — flag it, do not silently pick a side |
| ⚪ **DROPPED** | previously taught, not mentioned again across many later videos |

**Rule:** never resolve a contradiction by preference. Record both, date them, and let
Amit adjudicate — it may be a genuine change of mind, or a half-remembered rule.

---

## Timeline

### 2021–2022 — the foundation era
The corpus opens here. Format is long-form single-concept Hindi sessions, ~10–20 min.

**2022-01-30 — How to Find Stop-Loss in the Market (Sunday Special Part 1)** 🔵 NEW
`rz5tQaWLfgo` · note: `teaching/2022-01-30-stoploss-identification.md`

The earliest video processed. Establishes what later becomes the spine of the whole system:

- 🔵 **The market cannot move without stop-losses.** Momentum is *fuelled by stops* — not by
  opinion, news or indicators alone.
- 🔵 **The stop-loss you hunt is always someone else's.** Sellers want the top, buyers want
  the bottom; that habit is what *parks* the stops you later trade against. This makes
  stop-loss identification a **psychology** problem before it is a chart problem.
- 🔵 **Support/resistance is the first control** — swing **low** = support, swing **high** =
  resistance; SL reading is always relative to those references.
- 🔵 **⭐ A breakout above resistance may be *only* the sellers' stop-losses above it.** A
  print made of stops has **no participation behind it** — so it reverses. This is the
  single most load-bearing idea found so far.
- 🔵 **Stops are consumed in order** — after one side's pool is taken, ask which pool is
  *still* available, not which one just went.
- 🔵 **Queue lines are SL pools** — retest-waiters hold entries and stops on one line.
- 🔵 **Scope stated: INTRADAY only** (he explicitly excluded positional in this session).
- 📌 **Honest gap:** the Hindi ASR yielded **no usable levels** — two numeric strings were
  corruption of "Nifty / Bank Nifty". The charts were Jan-2022 and are day-specific.

> **Evolution note (2026-09-18):** the "reversal gate" reasoning already present in the
> Sep-2026 daily notes (*"did buyers arrive? if not, are seller SLs still available?"*) is
> **the same mechanism** taught here in Jan 2022 — the 2026 version is the *trading*
> framing, this is the *identification* framing. **Not a change of mind; a change of lens.**
> That is strong evidence the SL-pool thesis is bedrock rather than fashion.

---

### 2026 — the live-application era
Daily pre/live notes (56) dominate; teaching notes were sparse until this rebuild began.

**2026-08-09 — Demand & Supply / SL zones** 🟡 REFINED
`teaching/2026-08-09-demand-supply-sl-zones.md`
- Same SL-pool logic, now expressed through **demand/supply zones** rather than swing
  highs/lows. Language moved from *structure* to *zone*.

**2026-09-13 — The Power of an Edge** 🟡 REFINED
`teaching/2026-09-13-power-of-an-edge.md`
- Adds the **expectation half**: an edge is never 100%, every setup contains a loss branch,
  and chasing the loss-proof version destroys the edge.
- Adds the **reversal gate** as an explicit decision procedure, and the observation that
  **available stop-losses decide the opening** — the market prints the open that takes the
  pool it intends to take.
- 🟡 **Refinement vs 2022:** 2022 established *where* stops sit; 2026 adds *how to trade*
  that knowledge and *how to size expectations* around it.

---

## Open questions for Amit to adjudicate
1. **Levels are missing from the 2021–2022 corpus** (ASR quality). If levels matter to the
   method, early videos may need manual level extraction from the visuals, not the audio.
2. Named clusters already spotted and awaiting chronological processing:
   stop-loss hunting (**6 videos**: #1, 2, 3, 21, 25, 36), Support & Resistance Master
   Course, Price Action vs Indicators, operator/market traps, Retracement & Reversal,
   Trading Psychology, Chart Rules, Option Trading.
3. The corpus likely contains **contradictions by construction** (a 2021 view vs a 2026
   view). The 🔴 mark exists for exactly that — do not average them.

---

## Progress

| | |
|---|---|
| Corpus size | **191 videos** |
| Processed | **1** |
| Remaining | **190** |
| Method | chronological, one at a time — `ih_teaching/process_ih_teaching.py --next` |
| Status file | `ih_teaching/manifest.json` |
