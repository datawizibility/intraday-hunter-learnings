# Trading Bible — Intraday Hunter process

**Purpose:** one durable reference distilled from **weekday `daily/` notes and Sunday `teaching/` lessons**. Use it to trade with a checklist, and later to encode a rules engine / bot.

**Not:** day-specific levels, exact quantities, or copied “signals.”  
**Source window:** Jul 19 teaching + Jul 20–24 + Jul 27–31 + Aug 2 weekly + Aug 3–7 + Aug 9 D/S teaching + Aug 10–14 + Aug 17–21, 2026 (update when new “Keep permanently” lessons appear).  
**Note:** Sunday videos are experience-sharing — their permanent lines belong here alongside daily process lessons.

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
- **Day-2** of selling after a prior positive/gap-up stretch — traders gain confidence to sell (Aug 6); contrast with thin **day-1** shorts

### Sellers often thin / not worth hunting when
- **First** sharp sell day after a strong positive / gap-up trend — retail can’t size much; those who sold often **book targets** and leave (Aug 5)
- Don’t invent a seller-hunt on the next gap-up when inventory is thin — prefer sell-with if gap continues with **only buyers**

### Inventory often cleared when
- Holiday + recovery → don’t assume short inventory still sitting
- Sharp sell → sudden buy joy → retail buyers exit; leftover buyers may be gone
- Prior day ran **both sides** hard (gap-down then recover) → overnight holds uncommon (Jul 21)
- Late-day momentum **failed** after a sell → many shorts don’t hold overnight (Jul 23)
- Buyers already in **deep profit** into a holiday/close → don’t force them as hunt targets (Jul 20 pre)

### Unclear when
- Slow selling, no momentum, repeated rejection↔bounce in a small range
- Both sides around same price — **open decides**

### After positional SLs are exhausted (next-zone lens)
- Don’t stop at “who sat.” Ask **where demand/supply will be high next** (round numbers, breakouts, breakdowns) — that’s where the next SL pool forms (Aug 9 teaching).
- Support-take surges and confirm BO/BD raise participation (people size up) even if the move itself isn’t huge — often harvested later / next session.

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
| Soft / flat / mild gap after buyers sat on upside | **SELL** target buyers | Fewer stops above after upside; pressure yesterday’s buyer SLs below (user + Jul matrix) — **nuance:** non-explosive hold-up / gradual positive may need **decent GD** instead; flat/GU → buy-with (Aug 7) |
| Buyers sat on **normal** continuation (not ATH / not explosive special momentum) + gap-up / flat / normal gap-down | Can still **SELL** (Aug 4) | Stops to hunt sit under yesterday’s buyers; little useful inventory above; **ignore large gap-down** |
| **Exact round-number support** hold across indices (no holiday between) + gap-up | **SELL** buyers, but wait **closing-price breakdown** | Buyers sat at exact support; they cut only after prior close breaks (Aug 4 vs Aug 3) |
| Holiday-in-between + prior **retrace close** + solid gap-up | **BUY** with market | Risk-off holiday thins/changes inventory map; don’t force buyer-hunt on gap-up (Aug 3) |
| Cleared inventory / holiday / FOMO crowd after green day (temptation) | Often **SELL** late buyers | Crowd buys the gap; trap risk (Jul 19 teaching, Jul 27) |
| Sellers sitting / multi-day sell regime | Gap-up can still be **SELL** (trap / resume) | Not free long — bounce then resume (Jul 24) |
| **Day-1** sell after positive/gap-up + next gap-up (thin shorts) | Often **SELL** (don’t hunt thin sellers) | If continuation = **only buyers** → sell more likely (Aug 5) |
| **Day-2** sell after that stretch + flat/gap-up | **BUY** day-2 sellers | Sellers now sit; hunt them — expect **fast** upside, not huge grind (Aug 6) |
| **Hold-up buyers** after constructive positive (not explosive) | Flat / gap-up → **BUY** with market; need **decent gap-down** (farther from RN better) to **SELL** buyers | Soft open alone ≠ automatic sell — GD must be enough to hunt (Aug 7) |
| **Sellers already flushed** by prior support-bounce momentum | Flat / GD → **SELL** with; solid gap-up → **BUY** with / target leftover sellers | Flat can’t sustainably go up (only buyers if RN/CP cross) (Aug 10) |
| Unclear / both-side prior day | Follow open; solid gap-up → **BUY** | No held inventory to invent against (Jul 21) |

**Rule of thumb:** “Don’t target buyers on solid gap-up” and “target buyers after upside” are not opposites — check **holiday / retrace-close vs exact round-number hold**, then **open type**. Same gap-up shape can be buy-with (Aug 3) or sell-buyers-after-CP-breakdown (Aug 4). After a first sell into an uptrend, also check **day-1 thin shorts vs day-2 sellers** before choosing hunt vs sell-with (Aug 5–6). After a hold-up buy day, require **decent GD** to hunt buyers — flat/GU often flips to buy-with (Aug 7). After sellers are flushed by a support-bounce, flat/GD prefers sell-with (Aug 10).

---

## 5. Entry rules

### Allowed
1. Bias from §4 matches open.
2. First open momentum / tape agrees (especially on range days — don’t force before tape speaks).
3. Invalidation level defined (e.g. Nifty through X kills thesis).
4. Size: first ticket **smaller**; add only if thesis holds.
5. Prefer setups where **companions don’t violently oppose** the trade.
6. When leaders sprint too fast to enter, use the **lagging index** pause/rejection as the entry cue (Jul 24).
7. Sell-the-buyers after gap-up: prefer wait for **closing-price breakdown** before expecting buyer SL cascade (Aug 4).
8. Light gap-up **buy** of day-2 sellers: prefer a slight **dip / retracement** entry; skip if the dip is sudden large selling (Aug 6).
9. Light GD **buyer-hunt**: a slight bounce can be **bait to average** — don’t treat it as thesis kill if CP still holds (Aug 7).
10. Flat-open sell after flushed sellers: small **60–70 pt** breakout can be allowed then enter; prefer **no breakout**; entry from upper area → larger target room than a straight dump (Aug 10).
11. **Closing-price breakdown** is the extension gate for sell-the-buyers: no CP break → no extended target (Aug 21).

### Forbidden
1. Counter-trade invented because inventory is unclear.
2. Chase huge one-sided gap when matrix says avoid.
3. Enter without `max_loss_pts`.
4. Average a losing hope trade after continuous move against you.
5. Blanket sell on every soft open after hold-up buyers — need enough GD / RN distance to hunt (Aug 7).

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
| Put thesis and **BN leads higher** | **Cut** — don’t hold for a bigger loss hoping (Aug 4) |
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
10. Put book: **Bank Nifty rising** against thesis → cut; Nifty/Sensex alone bouncing is secondary to BN lead (Aug 4).
11. Puts with heavy BN size: if BN approaches a major **round number**, breakout risk rises — tighten / respect that focus (Aug 5).
12. After a prior-day **loss**, when a good profit is available → **book**; don’t stretch for a maximum day (Aug 5).
13. Hunting sellers with **tight SLs** → expect **sharp/fast** upside; don’t hold for huge momentum fantasies (Aug 6).
14. While **both** buyers and sellers still participate, profit is safer; when tape becomes **one-sided only** → protect / exit risk rises (Aug 5).
15. Strong multi-index sell from an **upper-area** entry → expand target; book **before round number** while momentum still pays (Aug 7, Aug 10).
16. **No closing-price breakdown** after a sell entry → market likely sideways; cut per limit, don’t hold for a bigger loss (Aug 21).

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
| Expiry / slow-momentum risk | Cut size (e.g. reduce on weekly expiry) — Aug 17 |

---

## 9. Psychology (human layer — soft rules for bot)

Encode only as **warnings**, not hard entries:

- Market tempts losers to average after small gap against them — that temptation is often the trade.
- Fast candles near round numbers pull reluctant buyers; later sideways can flush them.
- Don’t personalize clustered SL hits.
- Process over P&L: if situation isn’t understood, skip; consistency compounds when it clicks.
- Wrong trade + accelerating adverse move = cut; don’t “think” a dead thesis back to life.
- Don’t force 100% conviction on one trade; long-term process > single-ticket heroics (Aug 6).
- Process cuts stay correct even if later tape would have worked — don’t rewrite rules with hindsight (Aug 5 on Aug 4 cut).
- Mistakes are more forgivable **in profit** than **in loss** — never “fix” a losing hope trade (Aug 6).
- **Correct bias + no confirmation = small loss; that’s discipline, not failure** (Aug 21).

---

## 10. No-trade conditions (bot should return `FLAT`)

- `allow_trade == false`
- Sideways grind / shrinking momentum and open doesn’t unlock a branch
- Small gap-down on messy range day with “no plan yet”
- Huge runaway gap against the only plan you had
- Inventory unknown **and** you refuse to follow regime
- After booking: path unclear — wait for **new opportunity**, don’t force a second idea
- No-trend / no-momentum day with no clean open plan → **FLAT** or follow-market only (Aug 19)

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
| P32 | Normal (non-ATH) upside → buyers are targets; ignore large gap-down | 08-04 |
| P33 | Holiday+retrace-close gap-up = buy-with; exact RN hold + gap-up = sell after CP breakdown | 08-03 vs 08-04 |
| P34 | Puts: BN leading higher → cut; don’t hold bigger loss | 08-04 |
| P35 | Day-1 sell after uptrend → thin sellers; don’t hunt; gap-up + only buyers → sell | 08-05 |
| P36 | Day-2 sellers sit → flat/gap-up buy them; expect fast upside, not huge grind | 08-06 |
| P37 | Puts + heavy BN: round-number approach = breakout risk focus | 08-05 |
| P38 | After loss day, book when good profit available — don’t demand max day | 08-05 |
| P39 | Both sides still in → profit safer; one-sided tape → protect | 08-05 |
| P40 | Light gap-up buy of sellers: prefer dip/retrace entry | 08-06 |
| P41 | Hold-up buyers: decent GD (far from RN) to sell them; flat/GU → buy with market | 08-07 |
| P42 | Light GD bounce after buyers sat can be bait-to-average — watch CP as put risk | 08-07 |
| P43 | After sellers flushed by support-bounce: flat/GD sell with; gap-up buy with | 08-10 |
| P44 | Flat-open sell: prefer no breakout; small 60–70 pt breakout ok then enter; upper entry → bigger target | 08-10 |
| P45 | Book before RN while strong multi-index momentum continues | 08-10 |
| P46 | After positional SLs exhausted, next momentum prefers highest D/S zones (RN / BO / BD) | 08-09 teaching |
| P47 | Fake BO/BD often raises participation then reverses — don’t only follow “who is sitting” | 08-09 teaching |
| P48 | Charts normally don’t repeat — flat→dump then sharp recovery with thin inventory can trap sellers → flip | 08-12 |
| P49 | Big / runaway GU after flushed sellers → often **no plan** (trap); mild GU may keep sell | 08-12 |
| P50 | Fear near decided target is OK — don’t convert fear into early exit; early profit-cuts become habit | 08-13 |
| P51 | Loss → cut at limit; profit → wait decided target; weak momentum + expiry + long time → partial book beats zero-zero | 08-13 |
| P52 | Separate direction risk from entry risk; measured risk required; cut at limit if direction wrong | 08-14 |
| P53 | Low-momentum same-price inventory: GU → buy; flat/GD → sell (thin sellers above hold); prefer real gap over flat | 08-14 |
| P54 | Breakdown→sharp retrace trap: stay while inside loss limit / structure OK; BN-only + companions sideways + long time → book | 08-14 |
| P55 | Strong momentum after long trend → follow; don’t wait for retracement | 08-17 |
| P56 | Cut size on weekly-expiry / slow-momentum risk | 08-17 |
| P57 | Double bottom after fast down-move = trap (keep sellers out), not reversal | 08-17 |
| P58 | Breakdown-then-recovery → breakout crowd trapped → follow market (buy) | 08-18 |
| P59 | No-trend/no-momentum → only follow market intraday; don’t force/hold | 08-19 |
| P60 | Option-writer flushing: who gets flushed first sets the next side (put writers flushed → call side works) | 08-20 |
| P61 | Open trades pay better but punish undisciplined traders fast (5-10 min) | 08-20 |
| P62 | Breakout close without momentum = trap → sell the gap-up temptation | 08-21 |
| P63 | No closing-price breakdown = no extended target; cut per limit | 08-21 |
| P64 | Sideways/choppy kills the edge even when the bias is correct | 08-21 |

---

## 13. How to maintain this bible

After each new `daily/YYYY-MM-DD.md` **or** `teaching/YYYY-MM-DD-….md`:

1. If a **Keep permanently** item is new → add a row to §12 and adjust §4/§5/§7 if needed.
2. Prefer teaching notes for psychology / inventory *why*; prefer daily notes for open-type *execution* examples — both can mint rules.
3. Never promote **day-specific** levels or sizes into this file.
4. If a rule conflicts with an older one, prefer the clearer process rule and note the date in the ledger.
5. Optional: append one line to `playbook/changelog.md` (create when needed).

---

## 14. Quick morning card (print / pin)

```
1. Inventory today: buyers / sellers / cleared / unclear?
2. Buyers actually sat after upside — or cleared / thin?
3. Day-1 thin shorts vs day-2 sellers (if prior sell into uptrend)? Sellers already flushed by support-bounce?
4. After positional SLs done → where is next high D/S (RN / BO / BD)?
5. Companions aligned?
6. Expiry?
7. Open type → matrix bias? (holiday/retrace vs exact RN hold; hold-up buyers need decent GD to hunt / flat-GU buy-with; flushed sellers → flat sell / GU buy-with; day-1 vs day-2; chart-repeat dump trap?)
8. Rejection quality / CP breakdown (if gap-up sell)? Dip/retrace (if light gap-up buy)? GD bounce = bait average? Big GU = no plan?
9. Stop / target set? (tight-SL hunts → expect fast move; upper-entry sells → bigger target; book before RN; expiry → sooner / partial OK)
10. If BN leads against put thesis → CUT. Round-number BN on puts → watch. Fear near target ≠ early exit. Direction risk ≠ entry risk — hold inside loss limit through traps. BN-only + companions sideways + long time → book. No CP breakdown → cut per limit.
```

---

*Last distilled: 2026-08-21 from notes through Jul 19–24 backfill + Jul 27–31 + Aug 2–7 + Aug 9 D/S teaching + Aug 10–14 + Aug 17–21.*
