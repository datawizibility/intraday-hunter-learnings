# 2022-01-01 — Teaching: Gann Square of Nine Intraday Trading Strategy for Beginners

Educational notes only — not SEBI advice. Your risk rules win.

**Corpus note:** recovered back-catalogue session (`source: channel-backcatalogue`, public, 923s,
channel `/videos` scan 2026-10-31) — **not** in the indexed "Sunday Special" playlist. It sits
between `2021-12-25` and `2022-01-30`, i.e. in the **pre-framework, tool-led** phase: before
stop-loss hunting exists in his teaching. A New Year session.

## Teaching
**Video:** GANN SQUARE OF NINE INTRADAY TRADING STRATEGY FOR BEGINNERS — New Year session, 01 JAN 2022
**URL:** https://www.youtube.com/watch?v=fO00Vw4vZyU
**Transcript:** Hindi ASR of `fO00Vw4vZyU` — `transcripts/2022-01-01-teaching-fO00Vw4vZyU.md`

### Core idea
- The whole session is **one free web tool**: search *"Gann calculator"* (he promises the link in
  the description), type **one price** into it, and it returns **entry / target / next target /
  stop-loss**.
- The input is the stock's **pre-open / opening price**, read *before* the bell — he says the prices
  are visible around **09:08**.
- The rule set is deliberately tiny: **trade only if price actually reaches the printed entry**,
  **take only the first target**, **never set the "next target"**, one stop-loss.
- He runs a **10-day backtest on screen**, reports a target hit on each day, and then tells the
  learner to run the same test themselves — *"until you backtest, how will you know whether a
  system is working?"*
- He adds one improvement and one filter: **convert the calculator's 1:1 into 1:2** (half the stop,
  full target), and **take only the side the broad market supports**.
- Framing is honest and narrow: he does **not** claim this makes anyone professional. The promise is
  *"if you are starting out, or your stop-loss is poor, this gives you a proper stop-loss."*

### The tool and the loop (his exact procedure)
1. **Google → "Gann calculator"** — a free browser calculator. He does **not** explain the Square of
   Nine mathematics at all; the session treats it as a black box that converts one price into levels.
2. **Choose the stock.** Only **high-momentum / high-appetite names** — the ones that actually move.
   He names an archetype of the opposite (a large, low-range, all-day-slow name — ASR *"आईटीसी
   वाले"*) and asks the obvious question: *"if it doesn't move, where will the profit come
   from?"* More movement = more points available.
3. **Avoid circuit-risk stocks** — *"सर्किट वगैरह लग जाए फिर आपको प्रॉब्लम होगी"*. A name that can
   lock at a circuit removes the exit.
4. **Universe:** keep it to index names — ASR *"निफ्टी नेक्स्ट कर देख लेना"* — and don't wander far
   beyond them.
5. **Read the price before the open** — around **09:08**, when pre-open / opening indications are on
   the screen.
6. **Feed that price into the calculator** → it prints buy-above entry, target, next target, stop-loss.
7. **Wait for the price to arrive.** If price never touches the entry, there is **no trade**. The tool
   decides the level; the market decides whether you get filled.

### One target, never two (the rule he presses hardest)
- Take the **first target** only. The "next target" the calculator prints must **not** be placed as an
  order.
- His reason, as spoken: with the next target set, *"कभी आपका अचीव हुआ कभी नहीं होगा"* — sometimes it
  fills, sometimes it doesn't. Two targets turn a completed trade into a coin-toss. **One target plus
  one stop-loss, and once the target is hit nothing further is done on that name.**
- Same instinct as the 2021-12-18 **anti-regret rule** (the exit is judged by your own pre-decided
  number, not the market's maximum) — here expressed as an **order-entry rule**, not a psychology rule.

### The 1:1 → 1:2 improvement (his own edit to the tool)
- The calculator hands back a symmetric package: ASR *"₹10 का … साइड"* and *"₹10 का टारगेट"* — i.e.
  **₹10 stop-loss / ₹10 target, risk–reward 1:1**.
- His improvement: keep the ₹10 target but move the stop to **₹5** → *"रिश्तों की [रिस्क–रिवॉर्ड]
  वन व टू हो जाएगा"*, **1:2**.
- Trade-off he states openly: a tighter stop means **more stop-loss hits**, but overall profit is
  larger because the winners pay twice. His claim is that this keeps the system's profitability while
  improving the arithmetic.
- He invites modification — but only **after** the base version has been followed first ("follow it
  once, then change it").

### The market-side filter
- Before choosing a side, read the broad market: **if the market is positive, read the positive
  side**; in a weak tape, expect the negative side — ASR *"मार्केट अगर पॉजिटिव से यह तो हम पॉजिटिव
  साइड ही पढ़ लें"*, and the mirror for a negative market.
- The consequence he draws: **the system still has to be followed** — the filter changes *which side*
  you take, it does not license improvisation.

### "Don't keep changing it" (the discipline half)
- *"आपको सिस्टम बना लिया है उसको फॉलो करते रहना होगा"* — once the system is built, keep following it.
  Do one thing today and another tomorrow and the system is dead, and the tool carries the blame.
- If you dislike it: follow the base version continuously **first**, and change only if it genuinely
  is not producing profit.
- He closes by promising to **keep updating this system** and to bring further systems later —
  "we will keep this one and keep updating it." A method can be **maintained**, not only adopted or
  abandoned.

### Numbers / levels — ASR fidelity
- ⚠️ **Every price in this session is unusable.** The Hindi ASR mangles all of them: reference
  *"1887 पॉइंट 35"* / *"18 साल बाढ़ में 525"*; targets `1972`, `1992 पॉइंट 18`, `1872 पॉइंट 49`,
  `1882`, `1896`, `1838`, `1848`; stops *"18 विस्तार सी"* / *"18 साल बाढ़ में पॉइंट"*. Digits invert
  between readings and the same string is re-rendered differently each time it recurs. **No level from
  this session is adopted and nothing was routed to `levels-log/`.**
- ⚠️ The worked example is a **Jan-2022 chart and is day-specific by construction** — even with clean
  digits it would not be teaching content.
- ✅ **The only reliable figures are the two he says as words, not digits:** the symmetric package
  **₹10 stop / ₹10 target (1:1)**, and his improvement **₹5 stop / ₹10 target (1:2)**. These are the
  numbers worth keeping.
- ✅ Also reliable: the **10-day backtest** claim ("10 days, target hit each time") and the **~09:08**
  pre-open read time.
- ⚠️ The tool's own name sits at the edge of ASR: the audio gives *"गंध केलकुलेटर"* and *"डब्लू डी
  गेम्स कैलकुलेटर"*. The **title** says **Gann**; the audio is consistent with **Gann calculator /
  W. D. Gann calculator**. Recorded as the title states — and **the underlying Square-of-Nine
  mathematics is never explained in the session, so nothing about it is asserted here.**
- ⚠️ *"निफ्टी नेक्स्ट"* is read as **Nifty Next 50**. That is a plausible **reading of a garbled
  string, labelled as a reading**, not a quote.
- ⚠️ The instrument/stock on the worked example is **never named intelligibly** — the audio gives
  only price fragments. The example stock is therefore **unknown**, and no attempt is made to guess it.

### Evolution vs earlier
- 🔵 **NEW — the first MECHANICAL level-generator in the corpus.** 2021-12-11 (volume profile),
  2021-12-18 (psychology) and 2021-12-25 (style) contain no procedure that *outputs* an entry, target
  and stop from an input price. This session is the first: the trader's job collapses to stock
  selection, price-reading before the bell, and order discipline.
- 🔵 **NEW — stock selection as an explicit filter.** Nothing earlier names a universe or a momentum
  requirement. Here: moving names only, **no low-range names, no circuit-risk names, index names only**.
- 🔵 **NEW — the one-target rule.** New as a *mechanism* (never place the "next target"), but
  **🟢 STABLE in spirit** — it is the 2021-12-18 anti-regret principle re-expressed as order entry.
- 🔵 **NEW — the market-side filter** (positive tape → positive side). First time broad-market direction
  is stated as a gate on *which side* of a setup to take.
- 🔵 **NEW — the 1:1 → 1:2 edit, and with it the first risk–reward ARITHMETIC worked in the open.**
  Dating note: 2021-12-18 already listed risk–reward inside the "ultimate solution", so the *concept*
  is not new — the *worked number pair* is.
- 🟢 **STABLE — "follow your own system, don't keep switching."** 2021-12-25 defined professional as
  the man who follows his own system; this session says the same operationally ("once built, keep
  following it") and adds the failure mode: switching rules kills the tool, not the market.
- 🟢 **STABLE — backtest before you trust.** 2021-12-11 told the learner to test a tool across 3–5
  sessions, never one; here he insists on backtesting and tells the learner to redo his own 10-day test.
- ⚠️ **TENSION (dated, unresolved) — the indicator question.** 2021-12-25 asked for **fewer studies**
  on the chart; 2022-02-19 will push further toward price action over indicators. This session makes an
  **external calculator** the entire method — an indicator by any ordinary definition. It is *not* a
  contradiction of 2021-12-25's other line (on that same date he called a fixed
  indicator-in/indicator-out system "a very good trading style"), so **both positions stand as of their
  dates**. Recorded, not averaged.
- ⚪ **CANDIDATE — DROPPED (flagged, NOT asserted).** Gann / Square-of-Nine does **not** reappear in any
  of the 184 notes processed to date. The only later mention is **2022-11-20**, where an external
  trader's profile is *inferred* to match W. D. Gann — and that note explicitly labels it an inference.
  Treat this as a **tool of the era**: one of a cluster of early-2022 indicator strategies (SuperTrend
  **2022-01-15**, VWAP+SuperTrend **2022-01-29** — both still unprocessed) that his later teaching
  leaves behind. **Not declared dropped until that cluster is processed.**
- 📌 **Era marker.** This is the *second* recovered back-catalogue note, and it extends the pattern:
  between 2021-12-11 and 2022-01-30 the teaching is **tools and behaviour**, not yet stop-loss hunting.
  The Sunday Special series (from 2022-01-30) is where the SL-pool framework begins. This session
  belongs to the **pre-framework, tool-led** phase.

### Keep permanently
1. **Pre-open level-setting beats in-market improvisation:** read the reference price before the bell
   (~09:08), compute the day's levels, then execute **only if price arrives** at the printed entry.
2. **Trade only high-movement names** — no low-range, no circuit-risk, index names only; profit needs
   points, and a stock that does not move has none.
3. **One target, one stop.** Never place the calculator's "next target": two targets make the outcome a
   coin-toss and the trade never completes cleanly.
4. **Judge the exit by your own number**, not the market's maximum — the anti-regret rule, applied at
   order-entry time.
5. **Backtest before you trust.** His 10-day run is not evidence for you; run your own test on your own
   names, over several sessions — never one.
6. **Know your risk–reward in numbers**, and consider a **1:2 build (half the stop, full target)** if a
   tool hands you 1:1 — accepting more stop-outs for a larger average win.
7. **Take the side the broad market supports** — filter the setup by the tape instead of fighting it.
8. **Follow one system continuously.** Changing rules a day at a time destroys the system and the tool
   gets the blame; change only after the base version has genuinely failed.
9. **A tool gives levels, not a profession.** He refused the "you'll become professional" claim — the
   honest promise of a tool is a *defined stop-loss* for a beginner.
10. **Keep the process, update the parameters.** He said explicitly he would keep this system and keep
    updating it — a method can be **maintained**, rather than replaced wholesale every time it wobbles.

### Day-specific only (don't overfit)
- All chart prices in this session are **Jan-2022, ASR-corrupted, and not adopted anywhere**.
- Square-of-Nine levels are **stock- and day-specific by construction** — they cannot be carried forward
  into a trading bible.
- The 10-day backtest is a **claim about his chart set on his dates**, not a tested edge; treat it as a
  prompt to test, never as a result.
- The levels are also **tool/broker-dependent** — the same reference price can print differently in a
  different calculator, so nothing here is a portable level.
