# Trading Bible — Intraday Hunter process

**Purpose:** one durable reference distilled from `daily/` notes. Use it to trade with a checklist, and later to encode a rules engine / bot.

**Not:** day-specific levels, exact quantities, or copied “signals.”  
**Source window:** Jul 19 teaching + Jul 20–24 + Jul 27–31 + Aug 2 weekly + Aug 3, 2026 (update when new “Keep permanently” lessons appear).

**Disclaimer:** Educational synthesis only. Channel is not SEBI-registered. Your capital, broker rules, and risk limits override everything here.

---

## 1. Core philosophy (non-negotiable)

1. **Choose the game first:** investing vs positional vs **intraday**. Don’t mix timeframes mid-trade.
2. **Market = buyers + sellers.** Everything else is noise until you infer who is still holding inventory.
3. **Root value:** plan the session from **likely inventory** + **open type** (flat / gap-up / gap-down), not from a single indicator.
4. **Direction thesis first;** first entry need not be perfect — re-entries allowed with smaller size if thesis holds.
5. **Multi-index confirmation:** Bank Nifty, Nifty, Sensex — don’t overhold a story that only one index is telling.
6. **Options buying:** prefer **accuracy + sensible RR (~1:1)** over tiny SL + fantasy targets (time decay fights you).
7. **Personalize risk math, not “SL hunting.”** Market hits clustered retail stops; it isn’t hunting *you*.
8. **Zero-sum / inventory pressure (conceptual):** index-option dynamics need *someone’s* clustered stops. After an upside stretch there are often **fewer useful stops above**, so soft opens more often pressure **yesterday’s buyers** (stops below). This refines *why* soft opens target buyers after upside — educational framing only.

---

## 2. Pre-session checklist (human + bot inputs)

Fill these **before** 9:15. A bot needs the same fields as structured inputs.

| Field | Values | Notes |
|-------|--------|-------|
| `regime` | `clear_buyers` / `clear_sellers` / `mixed` / `unclear` | From prior day structure |
| `inventory` | `buyers_sitting` / `sellers_sitting` / `cleared` / `unknown` | Holiday/recovery often → cleared |
| `prior_day_shape` | `strong_up` / `strong_down` / `range` / `rejection_bounce_loop` | |
| `companion_bias` | `aligned_up` / `aligned_down` / `diverging` | Nifty vs Sensex vs BN |
| `is_expiry` | `bn_nifty_weekly` / `sensex_weekly` / `none` | Book sooner on expiry |
| `levels.R1/R2/S1/S2` | numbers per index | From pre video / your chart — day-specific |
| `max_loss_pts` | number | Pre-defined; no storytelling |
| `target_pts` | number | Often ~1× risk for options |
| `allow_trade` | bool | False if sideways grind / no plan |

**Hard stop:** if `inventory == unknown` **and** open is messy → default to **follow active regime**, or **no trade**. Never invent a counter-trade for excitement.

---

## 3. Inventory rules (how to label the day)

### Buyers likely sitting when
- Multi-day / continuous buying, then soft next open
- **Second day** of constructive upside after a flush (traders start taking risk) — soft open can target those buyers (Jul 19 teaching)
- BN holds a round number while Nifty/Sensex stay constructive after sellers were stopped
- Prior gap-up rejection day but companions still hold (unclear → follow cover, don’t force short)
- **Not** the same as a sudden bounce from deep negative with little follow-through — that often leaves **few** buyers to hunt

### Sellers likely sitting when
- Continuous selling then sharp recovery (sellers may be trapped / averaging)
- Bounce after deep negative backdrop where fresh buyers were scarce

### Inventory often cleared when
- Holiday + recovery → don’t assume short inventory still sitting
- Sharp sell → sudden buy joy → retail buyers exit; leftover buyers may be gone
- Prior day ran **both sides** hard (gap-down then recover) → overnight holds uncommon (Jul 21)
- Late-day momentum **failed** after a sell → many shorts don’t hold overnight (Jul 23)
- Buyers already in **deep profit** into a holiday/close → don’t force them as hunt targets (Jul 20 pre)

### Unclear when
- Slow selling, no momentum, repeated rejection↔bounce in a small range
- Both sides around same price — **open decides**

---

## 4. Open-type decision matrix (bot core)

Map `inventory` × `open_type` → `bias`. This is the heart of a future bot.

| Inventory | Gap-up (solid) | Mild gap-up / flat | Flat / gap-down | Large gap-down | Huge runaway gap-up |
|-----------|----------------|--------------------|-----------------|----------------|---------------------|
| **Buyers sitting** | **BUY** with market (don’t target buyers) | **SELL** target buyers | **SELL** target buyers | Often **BUY** / follow (don’t hunt buyers into panic) | **NO TRADE** / avoid chase |
| **Sellers sitting** | Temptation trap → often **SELL** late buyers (not free long) | Case-by-case; trap if fake up then resume | Sellers useful if gap large enough | **SELL** / follow | Avoid if sellers forced to run |
| **Cleared / holiday** | Temptation trap risk → **SELL** late FOMO | Careful | No clean plan often | Follow market | Avoid |
| **Unclear / mixed** | **BUY** if recovery/cover regime | **Follow** what’s already happening | **Follow** or no plan | Follow | Avoid |
| **Range / shrinking momentum** | **BUY** if open momentum confirms | Wait for first tape | **NO PLAN** on small gap-down | **SELL** only if buyers still sitting | Avoid |

### Gap size nuance
- **Light gap-up** can be treated as **flat** (Aug 3 pre).
- **Large gap-up** after multi-day buyers: expect **shallow** Friday/short-term booking, not necessarily deep long liquidation — distinguish **slow light rejection** vs **fast large selling**.
- **Huge green runaway** when you wanted to sell buyers → **stay away**.
- **Huge gap-down / news** → structure **reset**; wait first tape (recovery vs continuous runaway) instead of forcing yesterday’s map (Jul 20).

### When gap-up = BUY with market vs SELL (resolve the conflict)
| Situation | Gap-up default | Why |
|-----------|----------------|-----|
| **Buyers sitting** + solid gap-up (incl. ATH / strong continuation) | **BUY** with market | Buyers already in profit — little left to hunt above; ride continuation |
| Soft / flat / mild gap after buyers sat on upside | **SELL** target buyers | Fewer stops above after upside; pressure yesterday’s buyer SLs below (user + Jul matrix) |
| Buyers sat on **normal** continuation (not ATH / not explosive special momentum) + **some** gap-up | Can still **SELL** (IH Aug 4-style) | Stops to hunt sit under yesterday’s buyers; little useful inventory above |
| Cleared inventory / holiday / FOMO crowd after green day (temptation) | Often **SELL** late buyers | Crowd buys the gap; trap risk (Jul 19 teaching, Jul 27) |
| Sellers sitting / multi-day sell regime | Gap-up can still be **SELL** (trap / resume) | Not free long — bounce then resume (Jul 24) |
| Unclear / both-side prior day | Follow open; solid gap-up → **BUY** | No held inventory to invent against (Jul 21) |

**Rule of thumb:** “Don’t target buyers on solid gap-up” and “target buyers after upside” are not opposites — the first is about **solid continuation gap-up**; the second is about **soft opens** (or temptation traps) when resting buyer inventory exists.

---

## 5. Entry rules

### Allowed
1. Bias from §4 matches open.
2. First open momentum / tape agrees (especially on range days — don’t force before tape speaks).
3. Invalidation level defined (e.g. Nifty through X kills thesis).
4. Size: first ticket **smaller**; add only if thesis holds.
5. Prefer setups where **companions don’t violently oppose** the trade.
6. When leaders sprint too fast to enter, use the **lagging index** pause/rejection as the entry cue (Jul 24).

### Forbidden
1. Counter-trade invented because inventory is unclear.
2. Chase huge one-sided gap when matrix says avoid.
3. Enter without `max_loss_pts`.
4. Average a losing hope trade after continuous move against you.

### Rejection quality filter (gap-up longs)
| Observation | Read | Action |
|-------------|------|--------|
| Light, slow rejection after solid gap-up | Weak Friday / short-term booking | Long thesis can stay valid |
| Fast, large selling at open | Real liquidation / range warning | Don’t force longs; cut or skip |
| Continuous pause after start | Late buyers get filled; edge dies | Prefer continuous move; stall = danger |

---

## 6. Multi-index confirmation

| Situation | Rule |
|-----------|------|
| All three align | Extension / larger target allowed |
| Only BN works; Nifty/Sensex lag | Take **known** target; don’t invent path |
| Companions break against you | Stress / invalidate; tighten or exit |
| One index huge gap, others quiet | Trap / temptation setup more likely |

**Bot rule:** `extend_target = true` only if `companion_bias == aligned_*` with trade direction.

---

## 7. Trade management & exits

### Exit when ANY is true
1. `max_loss_pts` hit — no story.
2. Continuous selling/buying against thesis + companions join.
3. Mapped path ends (e.g. normal BN target ~done) and further path is **unknown**.
4. Candles shrink near round number + trap risk rises while you are short.
5. Expiry session + premium crush risk (especially puts on green bounce).
6. Decent profit + tape turns sideways/slow — book average target; don’t wait for a “big” day.
7. Thesis was flush-then-cover buy and market **sells through** your hold assumption.
8. After a sharp sell, **tiny green candles** start printing while random late sellers pile in — reverse/SL-hunt risk rises; bank known target (Jul 24).
9. Continuous adverse move with **no retrace** against you on a “recovery” thesis → runaway path; take the planned loss (Jul 20).

### Hold while
- Thesis alive, loss within limit, companions not confirming the kill.
- Continuous momentum without inviting late counter-entries.

### Re-entry
- Allowed if direction thesis still valid and first exit was process (not revenge).
- Smaller size than first.

---

## 8. Risk, sizing, RR (options)

| Rule | Spec |
|------|------|
| Default RR | ~**1:1** (accuracy via root reading) |
| Acceptable stretch | e.g. 1:2 if process supports — not 1:10 fantasies |
| Forbidden fantasy | Tiny SL + huge target in option buying |
| First size | Reduced |
| Scale-in | Only with thesis intact |
| Expiry | Prefer earlier booking |
| Daily stop | Respect personal loss limit; missing a day is fine |

---

## 9. Psychology (human layer — soft rules for bot)

Encode only as **warnings**, not hard entries:

- Market tempts losers to average after small gap against them — that temptation is often the trade.
- Fast candles near round numbers pull reluctant buyers; later sideways can flush them.
- Don’t personalize clustered SL hits.
- Process over P&L: if situation isn’t understood, skip; consistency compounds when it clicks.
- Wrong trade + accelerating adverse move = cut; don’t “think” a dead thesis back to life.

---

## 10. No-trade conditions (bot should return `FLAT`)

- `allow_trade == false`
- Sideways grind / shrinking momentum and open doesn’t unlock a branch
- Small gap-down on messy range day with “no plan yet”
- Huge runaway gap against the only plan you had
- Inventory unknown **and** you refuse to follow regime
- After booking: path unclear — wait for **new opportunity**, don’t force a second idea

---

## 11. Bot-ready state machine (implementation sketch)

```
PRE → classify inventory + levels + risk
OPEN → measure gap_type (huge_up | solid_up | mild_up | flat | gap_down | large_down)
DECIDE → bias = matrix[inventory][gap_type]  // BUY | SELL | FLAT
CONFIRM → check multi-index + rejection_quality
ENTER → size = base * first_ticket_factor; set stop/target
MANAGE → if continuous_adverse OR companions_kill OR path_unknown → EXIT
          if target_hit OR expiry_pressure OR sideways_after_profit → EXIT
IDLE → wait for new opportunity (no revenge)
```

### Suggested input features (later code)
- Overnight gap % / points vs prior close and vs R/S
- First N minutes: range, direction, sell/buy aggression (speed + size of adverse move)
- Cross-index correlation / lag score
- Time-to-expiry flag
- Session P&L and daily stop remaining

### Suggested outputs
- `bias`, `confidence` (aligned indices ↑), `entry_ok`, `stop`, `target`, `reason_codes[]`

### Do **not** hardcode from notes
- Exact lot sizes (1170 / 1365 / etc.)
- Exact point targets (720–740) as universal constants
- Exact round numbers from one week (e.g. 57,000) as eternal levels

---

## 12. Permanent rules ledger (from daily “Keep permanently”)

| # | Rule | Seen |
|---|------|------|
| P1 | Segment clarity before setups | weekly |
| P2 | Root = inventory + open-type branches | weekly + all days |
| P3 | Options: accuracy + ~1:1 RR | weekly |
| P4 | Direction > perfect first entry; controlled re-entries | weekly |
| P5 | Cross-check Nifty / Sensex / BN | weekly + lives |
| P6 | Holiday/recovery clears inventory; gap-up can be temptation trap | 07-27 |
| P7 | One index alone → don’t overhold for confirmation forever | 07-27, 08-03 |
| P8 | Soft open + buyers sitting → sell-the-buyers default | 07-28, 07-30 |
| P9 | Pre-define loss if breakout continues against you | 07-28 |
| P10 | Expiry → book sooner | 07-28, 07-30 |
| P11 | Unclear inventory → follow active regime | 07-29 |
| P12 | Gap size changes risk even when bias is buy | 07-29 |
| P13 | Sideways after decent profit → exit | 07-29, 07-30 |
| P14 | Avoid runaway gap-up chases | 07-30 |
| P15 | Range: large open sell = range warning | 07-31 |
| P16 | Flush-then-cover needs hold; sell-through → exit | 07-31 |
| P17 | Personalize risk math, not SL hunting | 07-31 |
| P18 | Gap-up + multi-day buyers: light rejection ≠ thesis kill | 08-03 |
| P19 | Edge needs continuous momentum; stall invites late buyers | 08-03 |
| P20 | Book when you leave the mapped path | 08-03 |
| P21 | Closed-chart psychology can invert same-shape plans | 07-19 teaching |
| P22 | Crowd FOMO gap-up after green ≠ free long | 07-19 |
| P23 | Buyer-hunt after upside needs buyers who actually sat | 07-19, user refinement |
| P24 | Soft open after upside often presses yesterday’s buyer SLs (fewer stops above) | 07-19 + user |
| P25 | Huge news gap-down resets structure; wait first tape | 07-20 |
| P26 | Both-side prior day → cleared hold inventory; follow open | 07-21 |
| P27 | Continuous one-way no-retrace → follow; book on stall | 07-22, 08-03 |
| P28 | Thin/confident overnight shorts → bounce is entry, not cascade | 07-23 |
| P29 | Multi-day sell: don’t seller-hunt; sell the resume after bounce | 07-24 |
| P30 | Enter off lagging index when leaders sprint | 07-24 |
| P31 | Tiny green candles after sharp sell = turn risk | 07-24 |

---

## 13. How to maintain this bible

After each new `daily/YYYY-MM-DD.md`:

1. If a **Keep permanently** item is new → add a row to §12 and adjust §4/§5/§7 if needed.
2. Never promote **day-specific** levels or sizes into this file.
3. If a rule conflicts with an older one, prefer the clearer process rule and note the date in the ledger.
4. Optional: append one line to `playbook/changelog.md` (create when needed).

---

## 14. Quick morning card (print / pin)

```
1. Inventory today: buyers / sellers / cleared / unclear?
2. Buyers actually sat after upside — or cleared / thin?
3. Companions aligned?
4. Expiry?
5. Open type → matrix bias? (solid gap-up buy-with vs soft-open sell-buyers)
6. Rejection quality (if gap-up)?
7. Stop / target set?
8. If unclear path after target → FLAT and wait.
```

---

*Last distilled: 2026-08-04 from notes through Jul 19–24 backfill + Jul 27–31 + Aug 2–3.*
