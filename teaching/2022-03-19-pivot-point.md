# 2022-03-19 — Teaching: Pivot Point Intraday Trading Strategy (pivot + 0.5 fib + two-candle entry)

Educational notes only — not SEBI advice. Your risk rules win.

## Teaching
**Video:** Pivot Point Intraday Trading Strategy By Intraday Hunter — 19 MAR 2022
**URL:** https://www.youtube.com/watch?v=ii7uHN17ysY
**Transcript:** Hindi ASR of `ii7uHN17ysY` — `transcripts/2022-03-19-teaching-ii7uHN17ysY.md`

### Core idea
- The session opens with an anti-course, anti-dependency pitch and then builds a chart from scratch: *"तो आज हम एक ग्रेडिंग के लिए सिस्टम बनाने वाले हैं"* ⚠️ — ASR garbles *ग्रेडिंग*, read plainly as the English **today we build a system for trading** (flagged reading, not a quote).
- The reason given for building it yourself: *"आप किसी भी सोशल मीडिया से अगर आपको कोर्स ले रहे हो तो"* — buying a course from social media hands you a worse system than you can build, and leaves you dependent on someone else's quality. His remedy is *"आप अपना सिस्टम बनाएं अपने कंफर्ट जोन के अंदर"*, and he tells the viewer to modify what he gives rather than copy it.
- The whole clip is a **chart-configured setup walked over a recorded tape**, not a live call: pivot-point (and other) overlays are added, settings trimmed, and the entry is narrated on past candles. It is a **degrees-of-freedom** session — he shows one trade he says *"बहुत अच्छा काम कर रहा है"* and repeatedly tells the learner to backtest it themselves.
- He explicitly flags that he will use the same tool one way and its mirror the other way — *"मैं कभी तुम्हें इस प्रकार यूज करूंगा और कभी मैं इसका बिल्कुल उल्टा करूंगा"* — so the tool is not the edge; the *read* is.

### The chart he builds
- **Platform and timeframe:** *"तो देखिए यहां पर मैं ट्रेडिंग उनकी वेबसाइट का यूज करूंगा जो मर्जी यूज करना चाहते हैं आप यूज कर सकती हो 5 मिनट का"* ⚠️ — ASR *ट्रेडिंग उनकी वेबसाइट* reads as **TradingView** (flagged reading, not a quote); and *"5 मिनट का मैने टाइम फ्रेम यूज की है"* — a **5-minute** chart, stated twice.
- **Pivot point first:** *"पहले हम इंडिकेटर सेक्शन में जाएंगे और पॉइंट को लगा लेते हैं"* — the pivot indicator goes on, then its settings are cut and the price section is trimmed: *"देखिए यह वाली प्राइस में हटा दिए ताकि आपको अच्छी सी सपोर्ट रेजिस्टेंस नजर आए"* — i.e. remove those prices so you can see clean support / resistance. Removing lines is optional and he says so.
- **A second, unnamed indicator:** *"मैं यहां पर दूसरा इंडिकेट लगाने वाला हूं एवरी स्मॉल लेटर"* ⚠️ — ASR *एवरी स्मॉल लेटर* is **not resolvable** from the audio alone (candidate readings: *every small candle* / *every small letter* — a small-candle overlay is the plausible one, since the whole entry rule is later traded off small green candles). **Flagged; no setting of it is changed** — he states he left it at defaults.
- **Fibonacci retracement tool:** *"मैं यहां पर फिबोनाची टूल का भी यूज करने वालों"* with a trimmed setting: *"वो मैंने 0.5 पॉइंट 141 को रखा है बाकी सभी को मैंने हटा दिया"* ⚠️ — the spoken pair is **0.5 and 1.41** (the corpus elsewhere works a **0.61** rung); the `141` token is an unattached fragment and is **not reconstructed** here. He keeps **two rungs** and deletes the rest.
- Net chart: **pivot + one small-candle indicator + two Fibonacci retracement rungs on a 5-minute chart.** No VWAP, no SuperTrend, no volume/futures requirement appear anywhere in this clip (see *Evolution vs earlier*).

### The entry rule - two ways (fib reaction, then two-candle)
- **Both directions are stated as a colour rule:** *"जब ग्रीन कैंडल होता है या जैसे आपको यह वाला नजर आ रहा है यह वाला जब ग्रीन कैंडल नजर आया"* — green candle → buy side; the mirror sentence: *"तो इसमें मैं क्या करूं आप लोगों से शेयर जाऊंगा अगर वही में मुझे रेंडर नजर आएगा तो मैं क्या करूंगा यह से लोअर जाऊंगा"* ⚠️ — ASR mangles this badly (*शेयर / रेंडर / लोअर* do not resolve); read plainly as **green → buy, red → sell** (flagged reading, not a quote).
- **Method 1 — trade the Fibonacci reaction, not the break:** *"यहां पर आप दो तरीके से स्ट्रेट कर सकते हो पहले तो आफ बना चित्तौड़ का यूज कर सकते हो इस लवर पॉइंट को आप कंसीडर करके हाईएस्ट प्वाइंट तक जाओगे"* ⚠️ — ASR *आफ बना चित्तौड़* reads as the English **0.5 Fibonacci** and *लवर पॉइंट* as the English **lower point** (flagged readings, not quotes). Anchor the fib from the low to the highest point of the move.
- **Act only where a reaction prints:** *"यहां पर आपको दो लेवल मैंने बताया पॉइंट फाइव और पॉइंट 6 उन दोनों लेवल पर जहां पर आप और इंजेक्शन देखने को मिले वहां पर अपडेट कर सकते हो"* — of the two rungs (**0.5** and **0.6**), use the one where the market shows a reaction; if the reaction is taken and price comes back to the point, update the level there.
- **A level with real support beats a drawn ratio:** *"आफ गुना शीट का यूज मत करना क्योंकि जब आपको क्यूट पॉइंट का सपोर्ट मिलेगा तो वह सबसे अच्छा होगा"* ⚠️ — ASR *आफ गुना शीट* reads as the English **0.5 fib** and *क्यूट पॉइंट* as the English **pivot point** (flagged readings, not quotes) — i.e. when price sits on genuine pivot support, do not substitute a fib line for it.
- **Do not buy the breakout print:** *"यहां पर मार्केट बैक टू बैक ग्रीन चैनल बना तो यहां पर भाग गया तो यहां पर आपको कभी भी बाय नहीं करना चाहिए"* — after back-to-back green candles the market has already run; the trade is the **retracement back to the level**, not the green run itself.
- **Method 2 — the simplest form:** *"आपने सेट अप को बिल्कुल सिंपल रखना चाहते तो आप यह कर सकते हो"*, then wait for the pullback and count candles: *"बैक टू बैक आपको देखना है कि फाइव मिनट्स के दो कैंडल आपको कहां पर गर्मी है"* ⚠️ — ASR *गर्मी* reads as the English **green** (flagged reading, not a quote); two consecutive 5-minute green candles end the pullback, and *"यहां पर आपको दो कैंडल ग्रीन मिल गए उसके बाद थर्ड चैनल मैं आपको एंट्री कर सकती है"* — **entry on the third candle**.
- **The close matters:** *"क्या देखना है कि आपको यह पॉइंट में फाइव मिनट का चैनल क्लोजिंग मिलना चाहिए जब आप रीड करो तो"* — read the 5-minute **closing** of the candle, then wait for the retracement before entering.

### Risk rules - the trade count and the 1:2
- **Hard cap per setup:** *"मिनिमम एक है और ज्यादा से ज्यादा दो कर सकते हो इससे ज्यादा ट्रेड सेट अप के अंदर आपको नहीं कर है"* — **minimum one, maximum two trades inside one setup**; more than two is refused.
- **The count is tied to risk-reward:** *"अगर आप वन बाय वन यूज करें तो केवल आपको एक लीड करें अगर वन बाय टू कर रहे हो तो आप दो ट्रेड ले सकते हो"* — a **1:1** setup earns only **one** trade; a **1:2** setup earns **two**. (The ASR's *"रिस्क 120"* in the preceding fragment is the spoken **risk 1:2** — see the fidelity section.)
- **Stop-loss is placed at the level, and the clock can veto the trade:** *"मार्किंग यह का स्टॉपलॉस सेट किया वैसे भी दो बज चुके थे मार्केट में"* — he sets the stop and then notes it was already **past 2 o'clock**, i.e. too late in the day to be worth taking (the 2 PM last-entry clock).
- **Simplify, and expect it to behave live:** *"सेट अप को जितना सिंपल और सिंपलीफाई करके आप देखोगे उतना ही अच्छा आपके लिए आपके साथ काम करेगा"*, and *"अगर वह काम करेगा तू जो लाइव मार्केट उसमें भी काम करेगा"* — a rule that only works on the recorded tape is not a rule.

### Numbers / levels — ASR fidelity
- **`levels-log/` rows routed: 0** (honest zero). **No price of any instrument is spoken anywhere in the clip** — every digit is a setting, a ratio, a timeframe, a count or a garble. Nothing qualifies for routing, and nothing is manufactured.
- **Full digit inventory** (every `[0-9]+` in the spoken text; the `m:ss` timestamps in the left column are excluded):
  - `5` — **TIMEFRAME** (5-minute chart; *"फाइव मिनट्स के दो कैंडल"*). ×2 contexts.
  - `0.5` — **Fibonacci RATIO** (a kept fib rung), not a price.
  - `141` — **garbled fragment** (*"0.5 पॉइंट 141"*); unattached, not reconstructed. ⚠️
  - `2016` — **garbled fragment** (*"2016 में 4.5 में"*); no reachable meaning in context. ⚠️
  - `4.5` — **garbled fragment**, same run as above. ⚠️
  - `6` — **Fibonacci RATIO** (the 0.6 rung, spoken as *"पॉइंट 6"*), not a price.
  - `15` — **garbled fragment** (*"वेट करना 15 बैक"*); unattached. ⚠️
  - `2.5` — **garbled fragment** (*"या तो 2.5 का"*); possibly a timeframe or a ratio, but the sentence is broken. ⚠️
  - `1%` — **percentage-like token**, ×2 (*"पॉइंट्स 1%"*); unattached to any instrument and not a price. ⚠️
  - `120` — **garbled fragment** of the spoken **risk 1:2** (*"वह आपके रिस्क 120"* → the following sentence says 1:1 / 1:2). It is a **risk-reward ratio**, not a price. ⚠️
  - `2` — **COUNT**, ×2 (*"बैक टू बैक 2 ग्रैंड"*, *"2 बैक टू बैक गर्मी का टाइम"*) = two candles.
  - The **2 o'clock** limit is spoken as the word *दो*, not a digit; classified as a **CLOCK**.
  - **₹ illustration: none** — no rupee amount is spoken (contrast with the `2022-01-15` clip's ₹3 line and the `2022-01-01` clip's ₹10/₹5).
- **Is any index named?** grep of the transcript returns **निफ्टी: 0 · बैंक: 4 · सेंसेक्स: 0 · सेन्सेक्स: 0**. The four `बैंक` hits are ASR mis-renderings of the Hindi **बाय** (buy) in three places, and one fragment *"बैंक मिट्टी में"* ⚠️ which reads as the English **Bank Nifty** (flagged reading, not a quote) — near the end he tells the learner to backtest beyond that one instrument: *"आपको बैड टेस्ट करना है और अलग-अलग स्टॉक और इंडेक्स में देखना है"*. **No index is cleanly named, and none is priced.**
- **Other ASR garble reproduced as spoken** (never corrected inside a quote): *"एवरी स्मॉल लेटर"* (unresolvable indicator), *"आफ बना चित्तौड़"* / *"आफ गुना शीट"* (0.5 fib), *"इंजेक्शन"* (entry/indication), *"गर्मी"* (green), *"जैकसन"* / *"चित्तौड़ का"* (unresolved), *"रिप्लेसमेंट"* (retracement), *"प्रिंट पॉइंट"* (pivot point).

### Evolution vs earlier
- 🔵 **NEW — the pivot point enters the corpus as an on-chart tool.** Before this clip the only mentions of the word Pivot in `EVOLUTION.md` are (a) the forward flag inside `**2022-01-15 — SuperTrend Intraday Strategy (two-SuperTrend confirmation system)**`, which predicted Pivot as a later trusted indicator, and (b) `**2022-01-09 — How To Find Chart Patterns In Live Market (the pattern catalogue)**`, where pivot means a *pattern-internal* swing, not an indicator. Neither is a taught pivot-point session; this is the first.
- 🔵 **NEW — the Fibonacci retracement tool with an explicit rung pair (0.5 / 0.6).** The earlier mechanical level-generator was `**2022-01-01 — Gann Square of Nine Intraday Trading Strategy for Beginners**` (type one price, get entry/target/SL). Here the level is hand-anchored from the low to the highest point and only **two rungs** are kept — a different mechanism from the Gann calculator, and the corpus's first time he trades a *retracement rung* with a reaction filter.
- 🟡 **REFINED — confidence-by-agreement becomes confidence-by-candle-sequence.** `**2022-01-15 — SuperTrend Intraday Strategy...**` and `**2022-01-29 — VWAP + SuperTrend Intraday Strategy (the systems update)**` required two *indicator* lines to agree before a trade. Here the same idea is carried by the chart itself: after the pullback, **two back-to-back green 5-minute candles** must agree, and the entry is the candle after them. Same structure, cheaper tooling.
- 🟡 **REFINED — the two-trade cap is now a function of risk-reward.** `2022-01-15` capped the day at two trades bluntly; `2022-01-29` made the count outcome-conditional (SL opens a second chance, target closes the day). This session makes the count **R:R-conditional**: 1:1 → one trade, 1:2 → two. Third distinct formulation of the same cap.
- 🟢 **STABLE — trade the retracement, not the break.** *"यहां पर आपको कभी भी बाय नहीं करना चाहिए"* after back-to-back green candles restates the *enter on the fold-and-break / retest, not the break* rule of `**2022-01-16 — Intraday Trading Mistakes Every Trader Make (viewer chart audits)**` and matches the one-style discipline of `**2022-03-06 — How to Draw Support and Resistance Levels**` (work the level's break *or* its failure, never both).
- 🟢 **STABLE — backtest before you trust, and backtest wide.** Running since `**2022-01-01 — Gann Square of Nine Intraday Trading Strategy for Beginners**`: here *"आपको बैड टेस्ट करना है और अलग-अलग स्टॉक और इंडेक्स में देखना है"* — same instruction as the *back-test 100 charts* rule of `2022-01-09`, now with an explicit many-instruments requirement.
- 🟢 **STABLE — simplify, and build your own.** *"सेट अप को जितना सिंपल और"* continues the *keep trading simple* line of `**2022-02-19 — Price Action vs Indicators | Reality of Intraday Stock Market**` (there stated as method neutrality), and *"जब तक आप अपने ऊपर काम नहीं करोगे तब तक"* continues the *your own effort, don't depend on others* line from `**2021-12-25 — How to Become Professional in Trading (beginner → pro)**`.
- 🔴 **CONTRADICTS (in form, recorded — not averaged) — the indicator trajectory reverses course again, one week after being told to clear the chart.** `2022-03-06` was the *clear the chart — remove indicators (SuperTrend and similar overlays)* session; this session **adds three overlays** (pivot + a small-candle indicator + Fibonacci) to the same 5-minute chart. This is the sharpest statement of the standing TENSION logged at `2022-01-15`, `2022-01-29` and `2022-02-19`. Both dates stand, un-averaged.
- ⚪ **NOT RESTATED (absence, not a drop) — VWAP, SuperTrend, futures/volume and the 09:08 pre-bell read are simply absent here.** `2022-01-29`'s chart (VWAP + two SuperTrends, Bank Nifty **futures** because a spot index carries no volume) does not reappear; this is a plain spot-price 5-minute chart. Absence only — no later date retires those tools (SuperTrend returns in the processed corpus at **2025-04-20**).

### Keep permanently
1. **Trade the retracement, never the breakout print.** After back-to-back green candles the move has already happened; the trade is price coming back to the level you marked, not the run itself.
2. **Let two candles confirm the pullback has ended.** Two consecutive candles in your direction end the retracement; the entry is the candle after the two — not the first sign of strength.
3. **A retracement rung is a level only where the market reacts.** Mark two rungs and act at the one that shows a reaction; a rung with no reaction behind it is just a line.
4. **A genuine level beats a drawn ratio.** When price is sitting on real support, do not substitute a Fibonacci line for it — the level the market built outranks the one you drew.
5. **Cap trades per setup, and let risk-reward set the number.** Minimum one, maximum two inside a single setup; a 1:1 setup earns one trade, a 1:2 setup earns two.
6. **Read the close of your timeframe's candle.** The trigger is a *closed* candle at the level, not an intrabar touch.
7. **Keep the clock.** No fresh setup after 2 PM — a stop that is protective but a trade that is already late is not worth taking.
8. **Simplify the setup until it is boring.** The simpler and more transparent the rule, the better it works with you; complexity is where the errors hide.
9. **Backtest wide, not once.** Test the setup across many stocks and indices, not one instrument — proof in one place is not proof.
10. **Build your own system inside your own comfort zone and own the confidence.** Do not buy courses, do not follow others' signals, and do not expect a teacher's confidence to transfer — *"जब तक आप अपने ऊपर काम नहीं करोगे तब तक"*.

### Day-specific only (don't overfit)
- The **chart configuration** is what he had on screen on 2022-03-19: a 5-minute chart, a **pivot-point** indicator, an unnamed small-candle indicator, and **Fibonacci rungs set to 0.5** (plus the ASR's garbled `141` fragment). The rung numbers, the indicator choice and the 5-minute frame are his configuration, not a law — the durable part is *level + reaction + two-candle confirmation + a capped trade count*.
- The **two-candle confirmation trigger** is demonstrated on **his recorded tape**; the number *two* is his chosen confirmation count and can be changed — the principle is that the pullback must be visibly ended before entry.
- The `0.5` / `0.6` pair and the `2.5`, `15`, `1%`, `2016` and `4.5` fragments are **that session's chart and ASR noise**; they carry no generalisable meaning and are **not** rescued into numbers here (see the fidelity section).
- **No price, target or stop value is named for any instrument**, so there is **nothing to carry into `levels-log/`** — an honest zero, not a gap. The only instrument-ish token, *"बैंक मिट्टी"*, is an ASR garble and is **not** used as a level source.
- **Do not read this session as a licence to stack indicators.** The corpus reverses that direction (2022-02-19; 2022-03-06) and this clip is itself evidence of the back-and-forth — see the CONTRADICTS line above.
