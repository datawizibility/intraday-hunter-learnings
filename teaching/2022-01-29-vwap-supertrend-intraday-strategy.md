# 2022-01-29 — Teaching: VWAP + SuperTrend Intraday Strategy (the systems update)

Educational notes only — not SEBI advice. Your risk rules win.

## Teaching
**Video:** VWAP + SUPERTREND INTRADAY STRATEGY BY INTRADAY HUNTER — 29 JAN 2022
**URL:** https://www.youtube.com/watch?v=FiAkzCtIjP8
**Transcript:** Hindi ASR of `FiAkzCtIjP8` — `transcripts/2022-01-29-teaching-FiAkzCtIjP8.md`

### Core idea
- This is an **update of the 2022-01-15 two-SuperTrend system**, made because of viewer questions: keep both SuperTrends, **add VWAP as a third filter**, and shift the chart from **3 minutes to 5 minutes**. *"तो जो आपको ऑलरेडी एक सिस्टम बना के दिया गया था सुपर"* — the earlier system was handed over already; this session changes three of its settings.
- The finished setup = **two SuperTrends (13 / factor 2 and 13 / factor 4) + VWAP** on a **Bank Nifty futures** chart. *"तो अब पूरा सेटअप हमारा कंप्लीट हो गया है"*.
- A trade exists only at the **first colour change** of the session: both SuperTrends flip **and** price crosses to the correct side of VWAP. When both lines are already green/green or red/red, there is no entry.
- **Trade ladder:** hit the **stop-loss** → a **second entry is allowed**; hit the **target** → **only one trade** on that setup. If **both** the first and the second entry hit SL, **no trade the next trading day** in this setup.
- He then walks a **10-day backtest (starting 14 January)** day by day. He counts outcomes but **names no price level at any point** — the whole session is settings + rules + "here an entry would form, a good target would come".

### The system — settings as he set them on screen
| Component | Setting | Note |
|---|---|---|
| Chart | **Bank Nifty futures** | *"यहां पे मैंने यहां पे बैंक निफ्टी का फ्यूचर का चार्ट लगा रखा है"* — futures, because of volume |
| Timeframe | **5 minutes** (was 3 minutes) | *"उसमें मैंने 3 मिनट्स का टाइम फ्रेम यूज किया था इसमें आपको क्या करना है फाइव मिनट्स का टाइम फ्रेम यूज करना है"* |
| SuperTrend 1 | length **13**, factor **2** | *"तो पहले आपको मैंने लेंथ क्या किया है यहां पे सेट 13 किया है और फैक्टर कितना सेट कर दिया है टू कर दिया है"* |
| SuperTrend 2 | factor **4** (length untouched) | *"उसके बाद जो नेक्स्ट सुपर ट्रेंड है उसमें आपको न करना है लेंथ को और जो फैक्टर है उसको कर देना है फोर"* |
| Filter | **VWAP** (volume-weighted average price) | added this session, described as *"बहुत ही अच्छा इंडिकेटर है"* |
| Scope | indices **and** stocks | *"इसको आप इंडेक्स में भी यूज कर सकते हो और इसको आप स्टॉक्स में भी यूज कर सकते हो"* |

- **Why futures and not spot:** *"क्योंकि अगर मैं सपोर्ट चार्ट को यूज करूंगा तो उसके अंदर वॉल्यूम नहीं होगा और अगर वॉल्यूम नहीं होगा तो उसमें वी वेब नजर नहीं आएगा"* — the VWAP line needs volume, so the instrument must be one that carries volume.
- **The free-content observation** (his own words, unprompted): *"क्योंकि अगर आप अगर मैं आपसे कुछ पैसे ले लेता तो आप बड़ा ध्यान से सुनते इन चीजों को लेकिन अगर आपको मैं यहां पे ऐसे ही प्रोवाइड कर रहा हूं तो आप इन चीजों को थोड़ा ध्यान से नहीं करते"* — settings get skimmed when nothing was paid for them, and then the live market creates the problem. He asks for questions instead: *"अगर आपको कुछ भी समझ नहीं आता है तो आपको क्वेश्चन पूछ लेना है"*.

### Entry rules (both sides)
- **Sell side:** both SuperTrends turn **red** and price trades **below VWAP** — *"दोनों सिग्नल पहली बार चेंज हो जाएं और दूसरा प्राइस व वेब के नीचे आ जाए तो आपको यहां पे सेलिंग साइट की ट्रेड ले लेनी है"*; the 5-minute candle must **close** there — *"जब दोनों के सिग्नल रेड में हो जाएं और वी वेप के नीचे प्राइस अगर फ्लक्स एशन करने लग जाए यह कैंडल क्लोज आपको मिल जाएगी 5 मिनट्स की तो आपको यहां पे सेलिंग साइड की ट्रेड लेना है"*.
- **Buy side:** both SuperTrends turn **green** and price trades **above VWAP** — *"जब यह सिग्नल चेंज हो जाएं और दूसरा प्राइस है जो वी वेप के ऊपर आ जाए तब आपको यहां पे बाइंग साइड की एंट्री ले लेनी है"*.
- **The restatement of the old core** (unchanged from the earlier version): *"जब दोनों ग्रीन हो तो आपको क्या करना है बाय करना है जब दोनों रेड सिग्नल दे तब आपको क्या करना है सेल करना है"*.
- **The first-time-only clause:** *"आपको ट्रेड कहां ना है जहां पे पहली बार सुपर ट्रेंड अपनी सिग्नल को चेंज कर रहा है"* — a chart that is already green/green and stays green gives no trade; the session's morning read is *"तो आपको मॉर्निंग में चार्ट को देखना है और यह देखना है कि पहली बार सुपर ट्रेंड कहां पर अपना सिग्नल चेंज कर रहा है"*.
- **Entry price = the candle's extreme:** *"जब दोनों ग्रीन हो गए तब आपको एंट्री यहां करनी है क्योंकि जब ये कैंडल क्लोज होगा तब इसका हाई पे आपको एंट्री मिलेगी"* — entry on the high (buy) / low (sell) of the closing candle.

### Risk rules — the two-trade ladder
1. **Stop-loss hit → second entry allowed.** *"जब स्टॉप लॉस हिट हो जाए तो आपकी सेकंड एंट्री बन जाती है"*.
2. **Target achieved → only one trade.** *"जब आपको स्टॉप लॉस मिल जाए ट्रेड में तो आपको दो ट्रेड लेनी है जब आपको टारगेट मिल जाए तो केवल आपको एक ट्रेड करनी है"*.
3. **Two SL hits in one day → no entry the next trading day.** *"तो आपके दोनों ही स्टॉप लॉस हिट हो गए तो आपको नेक्स्ट फर्द ट्रेडिंग इसमें नहीं करनी"*.
- These three numbers are stated as **rules of the setup**, not as options — he repeats them immediately before the backtest so the walk-through can be scored against them.

### The 10-day backtest (starting 14 January)
- *"मैं आपके लिए 10 डेज का बैक टेस्ट कर रहा हूं इससे ज्यादा भी आप कर सकते हैं"* and *"तो सबसे पहले मैं इसका 14 जनवरी को मैं शुरू कर रहा हूं बैक टेस्ट"*.
- Day results as he narrates them — **no day has a price attached**:
  - Several days: *"यहां पर आपको ट्रेड नहीं करना था"* — signals already aligned, so **no entry**; then later in the same day an entry that *"एक अच्छा टारगेट मिल जाता"*.
  - One day: first entry runs into SL → second entry gives *"एक अच्छा प्रॉफिट"*.
  - One day: first entry's SL hit **and** the second entry's SL hit → the next trading day is skipped by rule 3.
  - One day (red/green mix): *"जब दोनों ग्रीन हो गए तब आपको एंट्री यहां करनी है"* → entry at the candle high → *"बहुत ही अच्छे पॉइंट आपको यहां पे मिले"*.
- **Counting discipline is part of the exercise:** *"काउंट करते रहना कितना प्रॉफिट हुआ कितना लॉस हुआ कितनी बार स्टॉप लॉस हिट हुआ"*.
- Closing instruction: *"इस सिस्टम को आप बैक टेस्ट कीजिए अपने अकॉर्डिंग इसको ट्रेड कीजिए और मुझे बताइए कैसा लगा"* — he will update the system again in a later video.

### Numbers / levels — ASR fidelity
- **`levels-log/` rows routed: 0** (honest zero). Every digit spoken in the clip is a **setting, a timeframe, a day count or a date** — none is a price:
  - `13` / `2` / `4` = SuperTrend length and the two factors; `5` = minutes (new timeframe); `3` = minutes (the superseded timeframe); `10` = backtest days; `14 जनवरी` = the backtest's start date.
- **Bank Nifty is named but never priced.** The instrument appears only in the *setup* sentence (*"यहां पे मैंने यहां पे बैंक निफ्टी का फ्यूचर का चार्ट लगा रखा है"*); no level, no target and no stop value is given anywhere in the clip. Nothing can be routed.
- **ASR garbling, reproduced as spoken** (never corrected inside a quote):
  - *"वी वेप"* / *"वी वेब"* / *"व वेप"* / *"व वेब"* / *"वी वफ"* — five spellings, all the same **VWAP** line.
  - *"सपोर्ट चार्ट"* — read as **spot chart** (the contrast he is drawing is spot-vs-futures volume). ⚠️ Flagged reading, not a quote.
  - *"फ्लक्स एशन"* — read as **fluctuation**; the sentence still carries its meaning (price trading below VWAP).
  - *"नेक्स्ट फर्द ट्रेडिंग"* — the ASR's rendering of **next (further) trading day**. ⚠️ Flagged reading; the rule itself is unambiguous.
- No number in this clip is truncated in a way that needs completion, and **no digit is ever overwritten by scale inference**.

### Evolution vs earlier
- 🟡 **REFINED — a direct update of `**2022-01-15 — SuperTrend Intraday Strategy (two-SuperTrend confirmation system)**`.** Same two-line agreement core (*"जब दोनों ग्रीन हो तो आपको क्या करना है बाय करना है"* is the same instruction as 01-15's *"जब दोनों सिग्नल हो जाएँ"*), but three settings move: **3-min → 5-min**, a **third filter (VWAP)** is stacked on, and the parameter pair is re-stated explicitly (**13 / factor 2**, second line **factor 4**). The 2022-01-15 entry recorded the pair as ASR-uncertain; this session states it again, so the pair is now **heard twice**.
- 🔵 **NEW — VWAP enters the corpus as a live filter.** The only earlier use of the word in `EVOLUTION.md` is a **forward reference** in the `**2022-01-01 — Gann Square of Nine…**` entry, which already predicted *"VWAP+SuperTrend 2022-01-29"* as part of the early-2022 indicator cluster. This is that session: the first time a volume-weighted price line is used as a **regime gate** (a trade needs BOTH indicator agreement **and** the correct side of VWAP).
- 🔵 **NEW — the stop/target asymmetry rule.** 2022-01-15 capped trades at **two per day** as a blunt count. Here the count becomes **outcome-conditional**: an SL opens a second chance, a target closes the day to one trade, and two SLs shut the setup for the next session. That is a **daily loss circuit**, and it is the first in the corpus.
- 🟢 **STABLE — entry only at the first signal change** (2022-01-15's *wait for the second line to flip*), now hardened with the "already green/green ⇒ no trade" reading of the morning chart.
- 🟢 **STABLE — backtest before you trust** (third session running: 2022-01-01, 2022-01-15, here) and **🟢 STABLE — count your outcomes** (*"काउंट करते रहना कितना प्रॉफिट हुआ कितना लॉस हुआ"*, matching the earlier *"कितनी बार प्रॉफिट, कितनी बार लॉस"*).
- 🟢 **STABLE — a tool is handed over with its settings spelled out**, continuing the 2021-12-11 **Volume Profile** pre-Sunday-Special tool-lesson thread.
- ⚠️ **TENSION (dated, unresolved) — the indicator trajectory, restated.** 2022-01-15's entry already flagged the drift **toward** machine signals (2021-12-25 *trim the studies* → 2022-01-01 *one calculator* → 2022-01-15 *two SuperTrends*) and noted that the **next processed sessions reverse it** (2022-02-19 *Price Action vs Indicators*, 2022-03-06 *"clear the chart — remove indicators"*). This session **adds a third overlay** (VWAP) to the same chart — i.e. the drift continues one more step before the reversal. **Recorded, not averaged.**
- ↔️ **FORWARD FLAG (do not resolve) — the same family returns changed.** The 2022-01-15 entry notes SuperTrend is off his chart by ~2022-03-06 and returns in **2025-04-20** at **length 21, factor 2** — a different parameter and a different job (a component of a three-tool stack) from this session's 13/2 + 13/4 agreement pair.

### Keep permanently
1. **A filter is only a filter until it agrees with the others** — this system needs SuperTrend #1, SuperTrend #2 **and** VWAP all pointing the same way before a trade exists; agreement, not any single signal, is the setup.
2. **Trade the first signal change of the session, not the state of the chart.** A chart that is already aligned carries no entry — the trade lives at the *change*.
3. **Match the timeframe to the job, and say which one you moved.** This session moves 3-min → 5-min *and says why it is being changed* — a setting you cannot date is a setting you will drift away from.
4. **The indicator must be readable on the instrument you trade.** VWAP needs volume; a spot index does not carry it. Check the data the tool needs before blaming the tool.
5. **Let the stop-loss buy you a second chance, and let the target take it away.** SL hit → second entry allowed; target hit → one trade only. The count follows the outcome, not a fixed daily number.
6. **Two stop-outs in a day shut the setup for the next session.** A mechanical daily circuit removes the "get it back tomorrow morning" trade before it is taken.
7. **Backtest with a scoreboard, not with an impression** — walk day by day and count profit, loss and SL hits; an impression of "it works" is not a backtest.
8. **Write the settings down when you hand a system over** — and if you receive one for free, treat the settings with the attention you would pay for; missed settings become live-market problems.
9. **Ask the question instead of guessing** — *"अगर आपको कुछ भी समझ नहीं आता है तो आपको क्वेश्चन पूछ लेना है"*; an unclear rule that reaches the live market costs money.
10. **A system gets updated, not replaced.** The earlier two-SuperTrend idea survives intact inside this version — changes are additions (VWAP) and adjustments (timeframe), not a rewrite.

### Day-specific only (don't overfit)
- The instrument and settings here are **what he had on screen on 2022-01-29**: Bank Nifty **futures**, 5-minute, SuperTrend 13/2 + 13/4, plus VWAP. The general lesson is *agreement + first change + a daily circuit*; the parameter numbers are his chart configuration and are **not** portable as law.
- The **10-day backtest (from 14 January 2022)** is a 2022 tape. No price, target or stop value is named, so there is **nothing to carry into `levels-log/`** — and this is an honest zero, not a gap.
- Do **not** read this session as a recommendation to put three overlays on a chart — the corpus itself reverses this direction within weeks (2022-02-19, 2022-03-06). See the TENSION line above.
