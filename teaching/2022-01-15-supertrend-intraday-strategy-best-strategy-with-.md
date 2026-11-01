# 2022-01-15 — Teaching: SuperTrend Intraday Strategy (two-SuperTrend confirmation system)

Educational notes only — not SEBI advice. Your risk rules win.

**Corpus note:** recovered back-catalogue session (`source: channel-backcatalogue`, public, 1533s,
channel `/videos` scan 2026-10-31) — **not** in the indexed "Sunday Special" playlist. It sits
between `2022-01-01` (Gann calculator) and `2022-01-30` (Sunday Special Part 1), i.e. in the
**pre-framework, tool-led** phase. The first *dedicated SuperTrend strategy* session in the corpus.

## Teaching
**Video:** SuperTrend Intraday Strategy | Best Strategy with Entry and Exit Signals — session, 15 JAN 2022
**URL:** https://www.youtube.com/watch?v=-pyqGEzEJw0
**Transcript:** Hindi ASR of `-pyqGEzEJw0` — `transcripts/2022-01-15-teaching--pyqGEzEJw0.md`

### Core idea
- **One SuperTrend is not a system — two are.** He adds a **second SuperTrend** to the chart with
  different settings, and the trade only exists when **both read the same colour**: both green → buy,
  both red → sell. One signal alone is noise; agreement is the edge.
- **SuperTrend's look is trivial and he says so** — green line under price = uptrend, red line above
  price = downtrend, *"यह तो सभी को पता है"*. Because everyone can read it, the profit cannot come
  from the line; it has to come from **how you construct entry, stop-loss and exit around it**.
- Everything in the session is spent on exactly those three things — **entry, stop-loss, exit** — plus
  the regimes where the tool fails.
- He states the tool's two failures **up front, unprompted**: it is **not 100%** ("some days loss, some
  days profit — the loss smaller, the profit larger"), and it is **useless in a sideways market**
  (repeated false signals, double losses).
- A second of the session is a long, explicit **anti-course / anti-paid-strategy argument**: the simple
  things are the ones being sold for money, a 100% system does not exist and never will, learning is
  free if you give it your own time, and pay only for someone's *time* — never for a simple rule.

### Setup — the two-SuperTrend construct
1. **Indicator section → search "SuperTrend"** in whatever software you use → add it. You get the
   familiar line under/over price, coloured green / red.
2. **Go into its settings and change the parameters.** As heard: **period/length 13** and
   **factor/multiplier 2**. ⚠️ *The exact parameter pair is ASR-uncertain — recorded as heard, not
   adopted (see the ASR-fidelity section).*
3. **Add a SECOND SuperTrend** — again via the indicator section — with a *different* configuration,
   on a **second timeframe**. Two lines with the same settings would agree trivially and prove nothing.
4. You now have **two SuperTrends on the chart**, and the session is entirely about trading the moments
   where they **agree**.

### Entry — the agreement rule
- **Enter only when both signals have flipped the same way.** Both green → buy. Both red → sell.
- **If only one has flipped, do nothing and wait.** His chart walk-through is precisely this: one line
  is already green and holding, the second sits *below* the price / refuses to change — he waits. When
  the second one finally flips, **both are the same colour and that candle is the entry**.
- Consequence: entries are **rarer and later** than a single-SuperTrend entry. That is the trade-off
  he is buying — fewer, cleaner trades instead of every flip the indicator prints.

### Stop-loss — two accepted methods (plus a volatility calibration)
**Method 1 — structure (the signal candle).** Place the stop just beyond the extreme of the candle on
which the signal changed: for a sell, **above that candle's high**; mirror for a buy. He stresses this
is the *minimum*-thought version and takes seconds.

**Method 2 — sized to the expected move (risk–reward-driven).** Estimate how far the position can
realistically run on this setup; the stop is placed so that the **risk–reward is respectable**. He
gives a worked case: if the setup can plausibly pay ₹X, do not risk the same-sized number — set the stop
so the ratio works. ⚠️ He states a **minimum risk–reward in the region of 1:2–1:3**; the ASR does not
resolve which figure is his floor and which his stretch. Recorded as spoken, **not adopted as a rule**.

**Method 3 (his fallback) — pivot off support/resistance.** If the structure stop is not obvious, place
the stop beyond the nearest **support/resistance** instead. If you cannot do even that, **trade a
smaller quantity** — the position size absorbs what your stop cannot.

**The calibration warning (the most useful sentence in the stop discussion):** a fixed tiny stop does
not work. *"₹3 वाला सिस्टम सुपर ट्रेंड में काम नहीं करेगा"* — a ₹3 stop on this system will not work.
The stop must be sized to **what the instrument actually moves in a day**. His comparison: Bank Nifty
used to travel **300–400 points a day** and now often does far less; ordinary stocks typically move only
**10–15–20 points**. So the same number cannot be the stop on a Bank Nifty position and on a stock.

### Exit — pick ONE method and never mix them
He gives two legitimate exits and one absolute rule about them.

1. **Signal exit.** Stay in for as far as the move runs and exit **when the SuperTrend signal flips**.
   *"जब यह सिग्नल चेंज हो जाए तब आपको एग्ज़िट लेना है — simple."*
2. **Target exit.** Decide a **target in advance** at a fixed multiple of the stop; when it prints,
   **exit the entire quantity**. No trailing, no partials as he describes it here.

**The rule:** *"ऐसा मत करना कि एक दिन आप इस सिग्नल पर एग्ज़िट ले रहे हो, एक दिन अपने टारगेट से ले रहे
हो — तो ऐसा करोगे तो मार खाओगे।"* Mixing the two exits across days is how a working system is turned
into losses. His instruction: choose one, **follow it continuously for a month**, and only then judge it.

### The two failure modes he names himself
| Failure | What he says | His fix |
|---|---|---|
| **Not 100%** | It will not profit every day. Losses are unavoidable — *"कॉस्ट तो देने ही होंगे"*. | Accept the loss branch; the arithmetic (bigger wins than losses) is the edge, not a perfect record. Anyone claiming 100% either does not exist or will not tell you. |
| **Sideways market** | In a range the indicator flips repeatedly and hands you signal after signal — he says it will *"बार-बार सिग्नल देता है"* and the trader swings between small win and small loss. | **Do not trade a range.** The strategy is a *trend*-capture strategy; if the market is sideways, stand aside. He also ties this to over-trading: the more you trade, the more chances to be wrong. |

### The four hard operating rules (his summary at the end)
These are the rules he repeats as "keep these in mind":

1. **Maximum two trades a day.** *"दो ट्रेड से ज्यादा नहीं लेना है."* After two, stop — even if a third
   perfect signal appears.
2. **No trading after 2:00 PM.** *"दो बजे के बाद ट्रेड नहीं करना."* His reason: late-session momentum
   has already gone / the tape goes sideways, so the strategy's premise is absent.
3. **No trading in the first 10–15 minutes** (the opening candles). The first candles are the noisiest
   and flip the signal immediately; let the opening settle before acting.
4. **Do not try to capture every move.** You are trading the orders the system gives you, not every
   swing in the middle — chasing the middle is how the account gets churned.

He also states the **expiry-day / 2 p.m. decay** caution as something to be careful with
(*"एक्सपायरी वाले दिन … दो बजे के बाद"*), and notes that running this framework in **futures vs options**
behaves differently — the option-premium decay can work against you. ⚠️ Both statements are ASR-fuzzy;
they are recorded as cautions, not as rules.

### Journal it — the tracking instruction
- *"आप अकाउंट करते रहना कितनी बार प्रॉफिट हुआ, कितनी बार लॉस."* Count, trade by trade, how many times
  the stop was hit and how many times the target was hit.
- **Backtest first, and backtest it yourself.** He runs a short backtest on screen; he then insists the
  learner reproduce it, because *"जब तक आप खुद बैकटेस्ट नहीं करोगे, कॉन्फिडेंस कैसे आएगा?"* — a system
  only becomes usable once *you* have the record, not once someone shows you theirs.
- He explicitly invites feedback and says he will **update the system** as problems surface, and that
  more versions are coming.

### Trading as a business (the anti-course passage)
- **Simple things are what people charge for.** He lists the going rates mockingly (₹50, ₹1, a
  "batch") and says: if ₹1 buys you a strategy, you did not buy an edge — you bought a rule everyone
  can Google.
- **Learning is free; time is not.** Paying someone **for their time / for genuine guidance** is
  legitimate — *"टाइम का पैसा लेना चाहिए क्योंकि टाइम दोबारा नहीं होने वाला"*. Paying for something
  simple and public is not.
- **His own stance:** he states he will never charge, never sell a batch, and if a "100%" system is ever
  offered to him he would tell you it does not exist.
- **Learn from everyone, work your own way.** *"लर्निंग सभी से लेनी है, लेकिन काम अपने अकॉर्डिंग करना
  है."* Take others' material as the **base**, then build your own layer on top — do not outsource the
  whole structure.
- **Do not depend on someone else's signal.** *"जब तक आप दूसरों के ऊपर डिपेंड करते रहोगे, तब तक कुछ ठीक
  नहीं पाओगे."*
- **Treat trading as a business**, with the full attention a business gets — *"यह कोई खेल नहीं है … पूरा
  बिज़नेस है, बिज़नेस की तरह देखिए."*
- **Learning takes time**: weeks to six months to a year, sometimes years — like a college course, the
  use only appears later. And **system-hopping is the thing that kills it**: *"बार-बार सिस्टम चेंज
  करोगे … वह काम नहीं करेगा."*

### Numbers / levels — ASR fidelity
- ⚠️ **Parameter pair — ASR-uncertain.** Heard as **period/length 13** and **factor 2**. The audio is
  muddled around this passage (*"टाइम … थर्टीन … लेंथ … उर्दू फैक्टर … टू"*). **Recorded as heard; not
  adopted.** The structural fact that *is* clear: **two SuperTrends, different settings, both must agree.**
- ⚠️ **Risk–reward figure — ASR-uncertain.** He gives a minimum in the region of **1:2 to 1:3**
  (`"103"` / `"मुंबई टू"` in ASR). Which is his floor is unresolved. **Not adopted.**
- ⚠️ **The Bank Nifty backtest numbers are ASR-fragments:** heard as *"38 370 से 3840"* — read as
  **≈38,370 → ≈38,840, a move of roughly 470 points**, on a chart from the week around the session. This
  is a **plausible reading, not a quote**, and it is **not routed to `levels-log/`**. The chart dates
  (`"11 को"`) are likewise unresolved.
- ⚠️ The **expiry-date fragment** (`"थर्टीन की एक्सपायरी 30jan"`) is corrupt and is **not**
  reconstructed into an expiry calendar.
- ✅ **Reliable, because he says them as rules not digits:** **maximum 2 trades/day**, **no trades after
  2:00 PM**, **no trades in the first 10–15 minutes**, **"₹3 वाला सिस्टम नहीं चलेगा"** (a tiny fixed
  stop fails), and the instrument-range contrast **"Bank Nifty 300–400 points a day, stocks 10–15–20"**.
- ✅ The **stop-loss illustration figures** (₹3 / ₹10) are used as *examples of size*, not as market
  levels, and are reproduced as such.
- ⚠️ The worked entry/exit days are **Jan-2022 charts and day-specific by construction** — nothing
  adopted, nothing carried forward.

### Evolution vs earlier
- 🔵 **NEW — the first dedicated SuperTrend strategy in the corpus, and the first
  CONFIDENCE-BY-AGREEMENT pattern.** 2021-12-25 had only *named* SuperTrend as one of the starter
  indicator pile to be trimmed; nothing before this session builds a strategy on it. The genuinely new
  idea class is structural: **filter a signal by requiring a second, independent reading to agree** —
  not by a price level, not by a chart read.
- 🔵 **NEW — the first NUMERIC time-window rules in the corpus.** *No trade after 2:00 PM* and *no trade
  in the first 10–15 minutes*. Earlier notes have a qualitative version only — 2021-12-18's *"enter only
  when your market time has come"* — with no clock attached. **This session attaches the clock.** (First
  re-appearance: `2022-02-06`.)
- 🔵 **NEW — stop-loss calibrated to the INSTRUMENT'S normal range.** *"₹3 वाला सिस्टम सुपर ट्रेंड में
  काम नहीं करेगा."* A stop is no longer purely structural or arithmetic; it must be sized to the
  tick-range the instrument actually travels (Bank Nifty vs an ordinary stock). Nothing earlier in the
  corpus carries this.
- 🟡 **REFINED — risk–reward becomes a *derivation*, not just a number.** 2021-12-18 listed risk–reward
  inside the "ultimate solution"; **2022-01-01** worked a 1:1 → 1:2 edit; **this session** derives the
  stop *from how far the position can run*. The ratio is now an output of the setup, not a sticker.
- 🔵 **NEW — the "one exit method, never mixed" rule**, with an explicit consequence (*"मार खाओगे"*).
  New as a mechanism — but **🟢 STABLE in principle**: 2021-12-25 already taught that the damage lies in
  the **switching** (its one-timeframe rule: the same indicator showing buy on 5-min and sell on 3-min
  is the trader's error, not the tool's).
- 🟢 **STABLE — the trade-count cap.** 2021-12-18 already gave *"one or two trades a day"*; here it is
  restated as a hard **maximum two**, with *"after two, stop"*.
- 🟢 **STABLE — "not 100%".** 2021-12-11 (*"रहेगी सौ परसेंट कुछ नहीं होता"*), again in the 2022-01-01
  session, and again here, now attached to a *specific indicator* rather than to trading in general.
- 🟢 **STABLE — backtest before you trust.** Third session in a row. 2021-12-11 (3–5 sessions, never
  one) → 2022-01-01 (redo my 10-day test) → 2022-01-15 (backtest yourself, confidence comes from *your*
  practice).
- 🟢 **STABLE — follow one system continuously; don't keep changing it.** 2021-12-25 ("professional =
  follows his own system") → 2022-01-01 ("once built, keep following") → here (*"बार-बार सिस्टम चेंज
  करोगे … वह काम नहीं करेगा"*, plus a **follow-the-chosen-method-for-one-month** test period).
- 🟢 **STABLE — the journal / count-your-outcomes instruction.** Consistent with the accounting
  discipline implied in earlier sessions; stated here explicitly as *count the stop-hits and the
  target-hits*.
- 🔵 **NEW (corpus-level) — the sideways regime named as the tool's failure state**, with the rule
  "don't trade a range". No earlier processed note names the *regime* as the gate; earlier sessions
  reason from levels and participants.
- ⚠️ **TENSION — the indicator trajectory, now visibly bending the other way (dated, unresolved).**
  2021-12-25 asked for **fewer studies** on the chart; 2022-01-01 added **one** external calculator;
  this session stacks **two** SuperTrends. The corpus is, across three weeks, drifting *toward* machine
  signals — and the very next processed sessions reverse it: **2022-02-19** is *Price Action vs
  Indicators*, and **2022-03-06** instructs explicitly: *"Clear the chart — remove indicators (supertrend
  and similar overlays) so only price is visible."* **Both directions stand; recorded, not averaged.**
  Note also the counter-line *inside this same session*: don't depend on others, use your own mind.
- ↔️ **FORWARD FLAG (do not resolve) — the strategy disappears and later returns, changed.** SuperTrend
  is **removed from his chart within ~7 weeks** (2022-03-06) and, in the processed corpus, **comes back
  only on 2025-04-20**, as one of *"the 3 most trusted indicators"* — the **second** of three
  (MA → SuperTrend → Pivot) and specified there as **length 21, factor 2**. ⚠️ So the **same tool returns
  with a different parameter (21 vs the ~13 heard here) and a different job** (a trend-capture component
  in a three-tool stack, rather than a two-line confirmation system). **Both versions dated; neither
  corrected by preference.** Also note 2025-05-18 / 2025-08-03 / 2025-08-24 record the indicator
  toolkit going **absent again** without retraction.
- ⚪ **NOT DROPPED — verified.** SuperTrend recurs repeatedly (2022-03-06, 2025-04-20, 2025-05-18,
  2025-08-03, 2025-08-24). It is **absent from his teaching for long stretches**, but absence ≠
  retraction, and it is **not** marked dropped here.
- 📌 **Era marker.** This is the *third* recovered back-catalogue note and the clearest example yet of
  the **early-2022 indicator cluster** (Gann 2022-01-01 → SuperTrend 2022-01-15 → Option premium
  2022-01-22 → VWAP+SuperTrend 2022-01-29). The Sunday Special / stop-loss-hunting framework starts
  **2022-01-30** — one week after this session. Read this as **the last stretch before the pivot**.

### Keep permanently
1. **Confirmation by agreement:** one indicator reading is noise; the trade exists when **two
   independent readings agree**. Accept that entries get later and rarer — that is the price of the filter.
2. **Pick ONE exit method (signal exit *or* pre-set target) and never mix them across days.** Mixing
   exits is what converts a working system into losses; give the chosen method a continuous run before
   judging it.
3. **Hard trade cap: a maximum of two trades a day.** After two, the day is over even if a perfect
   signal prints.
4. **Respect the clock: no trades in the first 10–15 minutes, none after 2:00 PM.** The open is noise;
   the late tape has no momentum for a trend strategy.
5. **Know the tool's failure regime.** This is a *trend* strategy — in a sideways market it hands you
   signal after signal and small loss after small loss. Stand aside in a range; do not fade your own tool.
6. **Size the stop from the instrument's normal daily range, not from a round number.** A tiny fixed
   stop (his ₹3) fails; Bank Nifty and an ordinary stock cannot share a stop.
7. **Journal every trade: count stop-hits vs target-hits.** A system is not real until *you* have its
   record in your own hand.
8. **Everything trades with a loss branch.** Losses are a cost of business, not evidence the system is
   broken; nobody has, or will sell you, a 100% system.
9. **Follow one system for a continuous stretch (he says a month) before editing it** — and treat
   system-hopping as the primary cause of failure, not the market.
10. **Learn from everyone; build your own layer.** Take others' material as a base, never outsource the
    whole structure, and never become dependent on someone else's signal. Pay for someone's *time* if
    you must — not for a rule that is already public.

### Day-specific only (don't overfit)
- The **Bank Nifty backtest figures (~38,370 → ~38,840)**, the Jan-2022 chart days and the expiry
  fragment are **day-specific and ASR-uncertain**; nothing was routed to `levels-log/`.
- The **parameter pair (13 / ×2)** and the **risk–reward figure (1:2–1:3)** are recorded as heard and
  **must not be carried forward as rules** — and note the later 2025-04-20 session uses **21 / ×2** for
  the same indicator. The correct long-run answer is *"test your own parameter set"*.
- The **2:00 PM / first-15-minutes windows** are session-timing rules tied to the NSE intraday tape of
  that era; re-validate before reusing.
- The expiry-day caution is date-bound and the ASR does not resolve the date.
