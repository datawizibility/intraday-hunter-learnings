# 2022-01-22 — Teaching: How to Calculate Option Premium (option price calculator walkthrough)

Educational notes only — not SEBI advice. Your risk rules win.

**Corpus note:** archive session, **Saturday 2022-01-22** — he confirms the day himself on camera
(*"अब मैं शनिवार के दिन वीडियो बना रहा हूं"*). The **first OPTIONS-pricing session in the corpus**:
every earlier note teaches a chart, a level, a psychology rule or an overlay indicator; this one teaches
the **price of a derivative**. It belongs to the early-2022 indicator cluster the corpus already tracks
(**SuperTrend 2022-01-15 → Option premium 2022-01-22 → VWAP+SuperTrend 2022-01-29**), and this note
fills the slot the timeline had marked as unprocessed. It sits chronologically between
`2022-01-16` (viewer chart audits) and `2022-01-23`.

## Teaching
**Video:** HOW TO CALCULATE OPTION PREMIUM — Intraday Hunter — session, 22 JAN 2022
**URL:** https://www.youtube.com/watch?v=lsB9-AhjeEs
**Transcript:** Hindi ASR of `lsB9-AhjeEs` — `transcripts/2022-01-22-teaching-lsB9-AhjeEs.md` (374 ASR lines, ~16 min)

### Core idea
- **The session is a screen-share of two websites and one worked example.** No candle, no chart, no
  level, no stop-loss. He opens a public **option price calculator**, types four inputs, and reads the
  the premium the calculator returns. Then he uses it *forward* — if the index goes there, my premium
  becomes this much.
- **He states the session's scope in one line:** *"आज का दोबारा सेशन लर्निंग पर रहने वाले हैं"* — and
  frames the deliverable as *"और आज हम जानेंगे कि इस प्रकार हम ऑप्शन का प्रीमियम कैलकुलेट कर सकते हैं"*
  with *"सिंपल लैंग्वेज में हुई बारे में बातें करें"* — the plain-language version, deliberately.
- ⭐ **The precondition he puts before options trading at all** (stated in the second minute, with no
  hedge): *"आपको पता होना चाहिए कि ऑप्शन जब यह जब ऑप्शन तो इंटेक्स का प्राइस एक जगह से दूसरी जगह चला
  जाएगा तब आप ऑप्शन का परिणाम क्या हुआ … जब तक आपको यह पता नहीं है तब तक आपको आपको ऑप्शन में ट्रेंड
  नहीं करना चाहिए"* Knowing how the premium will *re-price* when the index moves is a **gate on trading
  options**, not a nice-to-have.
- **The model is never named and never explained.** He never says Black-Scholes, never mentions a
  theoretical premium, and calls the whole thing *"उसमें कोई ज्यादा इसमें साइंस लगी भी नहीं आपको जस्ट जो
  चीज नजर आ रही है उसको डाल है"* — no science required, put in what you can see. The calculator is
  treated as a **black box with four input fields**.
- **The teaching is timeless; every number in it is January-2022 and day-specific** (see below). He is
  teaching the *method of reading a pricing calculator*, not a market view.

### The tool and the procedure (as taught)
- **Find it on Google.** He gives the search terms rather than a URL: *"सबसे पहले आपको क्या करना है
  Google पर जाना है और सच लगाना है बिंदी पोर्शन कैलकुलेटर एप"* and then a second search
  *"एनएफसी ऑफ शिनचेन"* for what he calls the official site — *"यह इंडिया के ऑफिशियल वेबसाइट है उस पर
  आपको क्लिक कर देना है"*. ⚠️ Both search strings are ASR-garbled (see fidelity section).
- **The four input fields, in his order:** *"सपोर्ट प्राइस आपको नजर आ रहा होगा दूसरा एक्सपर्टाइज और
  तीसरा वोलाटैलिटी और रीड मोर टाइम टो एक्सपीरियंस यह फोटो खींच से तो आपको डालनी होगी तब आपको ऑप्शन का
  प्रीमियम मिल जाएगा"* — i.e. **spot price → strike price → volatility → time to expiry → premium.**
- **The promise of the tool, in his words:** *"अगर आपको एक का समझ में आ गया तो बाकी अब निकाल पाओगे"* —
  learn one (index) and the rest (individual stocks) follow by the same procedure.
- **A second site supplies the live price.** He tells viewers to read the current **spot/closing price**
  and later the **IV** off a broker site, heard as *"फिर और आपको जीरोधा की वेबसाइट पर जाओगे तो यह आपको
  नजर आ रहा होगा"* — the calculator only computes; the *inputs* come from the live tape.

### The live-vs-closed rule (an input, not a formula)
- ⭐ **Which price goes in the spot-price box depends on whether the market is open.** *"अगर आप मार्केट रनिंग
  में अगर आप ऑप्शन प्रीमियम कैलकुलेटर करें तो जो भी प्राइस चल रहा होगा उसको लेना है अगर आप मार्केट को
  धो रहे हों चुकी है तो जो भी आपका पोस्ट प्राइस होगा उसको लेना है"*
- He explains what that closing price is: *"जो मैं पोस्ट प्राइस ऑफ़ होता है मार्किट के बंद होने के बाद
  हमें प्राइस मिलता है"* — and re-states the warning because he says people mix the two up:
  *"जो मार्किट क्लोज हो जाए तब पोस्ट मार्केट में पोस्ट प्राइस उठाना है"*.
- **A worked instance of the mix-up's cost:** doing the calculation on a Saturday, he uses **Friday's**
  closing values — *"माननीय फ्राइडे को डाल रहे हो तो से याद रख देना कि हो गया"* — because on a
  non-trading day there is no running price to put in.

### Days-to-expiry — and the roll
- ⭐ **The contract has a clock, and the clock is an input.** He flags how many days are left at the
  moment of calculation (*"अब मैं शनिवार के दिन वीडियो बना रहा हूं तो अभी कितने दिन रह गए … ऑलमोस्ट
  सिक्स … रहेंगे"*), and separately that the same calculation done on a different day must carry **that
  day's** remaining-days count: *"आपको कितने दिन रखने से … आपको एक्चुअल में जो प्राइस होगा वह आपको मिल
  जाएगा"*.
- **The operational form of the same point, later in the session:** when he runs the "what if it reaches
  there" question, the *time remaining at that moment* has to be re-entered, not the number from today —
  *"अगर मान ली थी वह यह वह लेट्यूस समय क्या होगी … आप उसके अकॉर्डिंग रेगुलेटर इस पर कर देना है"*
  (⚠️ the token he uses for this is ASR-uncertain; the instruction is clear).

### The two live inputs — spot price and IV
- ⭐ **This is the session's most durable line.** In the second half he narrows the whole method to two
  fields that must be kept updated: *"दो चीजों को आपको चेंज करते रहना है वर्क की अपना स्ट्राइक प्राइस हम
  रहेगा और इस फ्री डेट टाइम टो उस पर सिमरेला डेल्टा वगैरह यह ऑटोमेटिक कैलकुलेट करता रहेगा"*
  ⚠️ — the sentence is ASR-garbled, but read against the surrounding passages the sense is: **the strike
  is fixed once you have chosen it; the spot price and the IV are the two you keep re-entering; the
  calculator derives the rest (time to expiry, delta and similar) itself.** Recorded as heard, with the
  reading labelled.
- **And the IV must be the IV *of the strike you are actually holding*:** *"अगर आप भी चेंज हो गया किसी
  और स्ट्राइक पर दो आपने ले रखी है उसको आए भी तो आपको यहां पर डालना होगा"*.
- ⭐ **IV is not a constant — it is a moving input.** *"जो यह बोला टिप्स है यह चेंज होती रहती है रनिंग
  मार्किट में"* — and when the option's own price moves, the IV that produced it has moved too:
  *"ऑप्शन इंद्रमणि हो जाएगा टुटदा न हो जाएगा तब जो आपकी आई है वह चेंज हो जाएगी तो आप इसको ट्रैक करते
  रहना होगा"*. The instruction is explicit: **keep tracking it.**
- He also tells viewers to keep watching it *against* their position — *"मार्किट थोड़ा सी आई विल चेंज
  होगा तो आपको धीरे-धीरे हुआ था चेक करते रहना है"* — i.e. re-run the calculation as the tape changes.

### Call and put are priced separately — the skew
- ⭐ **A genuinely technical statement, given plainly: the call's IV and the put's IV are not the same
  number.** *"जो कूट ऑप्शन की अलग होती है और कॉल ऑप्शन की अलग होते वह क्यों है उसमें आप आज नहीं जाएंगे
  फिर बाद में कभी डिस्कस करेंगे क्योंकि और काफी लंबा हो जाए"* — he states the fact and **defers the
  reason** (the session is already long).
- **The practical consequence:** whoever prices a call must enter the call side's IV, and whoever prices
  a put the put side's — *"जो आप आइबी डाल दे वगैरह पोल की डाल रही हूं तो इस साइड का उठाना है … अगर आप
  फुट का ऑप्शन का फिल्म कैलकुलेट कर रहे हो तो कोई साइड वाली उठाने होंगे"* ⚠️ — the *filming/reading*
  tokens are ASR-uncertain; the instruction (use the IV of the side you are pricing, and calculate call
  and put separately) is consistent with the passage above and with the call/put IV statement.
- **His fix when the calculator's number and the market's number disagree:** go into the call/put entry
  separately rather than reading a combined figure — *"यह जो प्राय यह गलत है तो आपको जब खोलकर कैलकुलेट
  करने अथवा पोल में चाहिए"* ⚠️.

### Using it in real life — the premium as a forecast
The last third of the video is the payoff: he stops explaining the calculator and uses it.
- **He re-loads a call, and says why:** *"मैंने क्या किया जो वह ना डिलीट थी उसको मैंने कॉल का जो
  क्वालिटी थी उसको मैंने फिर से डाल दिया है … अगर मार्किट अपसेट जा रहा है तो हम कल की बात करें तो यह
  आपको आसानी से समझा जाएगा इसलिए मैंने कॉल को फिर से लिया है"* — the call chosen because the market
  was moving up, i.e. the example is tuned to the day's direction.
- ⭐ **The core use-case, stated as a question-to-the-calculator:** *"अगर यह अपॉइंटमेंट कर देता है यहां से
  अब हमारा सपोर्ट परिचय है 37 576 66 चला जाता है तब हमारा ऑप्शन का भीम क्या होगा"* — if the spot
  travels from here to there, **what does the option become worth?** The calculator exists to answer
  that, in advance.
- **The worked answer, in the quote's own numbers:** *"आपको 510 नजर आ रहा था वह 567 नजर आने लगेगा ऑप्शन
  प्राइस"* — the premium is re-read after moving the spot input, and the move in the option is the point
  of the exercise. ⚠️ All digits are ASR-uncertain; see below.
- He states the general form of that result too — **the spot moves, the premium moves with it** —
  *"आप सपोर्ट प्राइस छत पर चला गया बिल पॉइंट इनक्रीज हो गया सपोर्ट प्राइस तो जो आपको ऑप्शन प्राइस
  इंक्रीज होगा"*.

### The IV sensitivity demonstration
- **He changes only the IV and re-runs the calculator, to show how much of the premium is volatility.**
  *"मैंने आएगी वह किया है 1.3 इनक्रीज की है तो जो विक्रम है जो आपको पॉइंट नजर आ आ रहे हैं लेकिन उसके
  अंदर ऐड हो जाएंगे"* — the read: **raise IV by ~1.3 and the premium gains roughly 28 points**
  (⚠️ the point figure is heard as *"विक्रम … 28"* / *"289"* in two passes and is **not** adopted).
- **He then lowers the IV and the premium falls** — and quantifies it: *"यह वेब ने 513 उसे हो गया … अब
  हमारी दही यह कम हो जाएगी तो जब आप ही कम होगी तो यह क्रीम इतनी सेल हो जाएगा … कितना का यह 494 हो
  जाएगा"* ⚠️ — **the two passes do not balance in the audio** (the up-case heard as *"28"*/ *"289"*
  points, the down-case read as *"494"* against the *"513"* just before it). Both figures are recorded
  as heard; **neither is adopted and no difference is computed from them.**
- ⭐ **The reason he gives for why this matters — the low-IV regime:** *"जब वह लाडली बेगम होगी तो मार्किट
  मुमेंट धीरे-धीरे करेगा या साइड वे रहेगा मार्केट"* — when IV is low, the market moves slowly or stays
  sideways — *"दबाव ऑप्शन सैलरी उसको प्रॉफिट होगा"* — and the pressure is the **option seller's profit**.
  He then restates the mechanical link: *"आइबी कम हो जाता है आइए कम होने के कारण जो आपको ऑप्शन का
  परिणाम है वह धीरे कम होने लगता है"* — **IV falls ⇒ your premium quietly bleeds.**
- **His closing sensitivity rule, per unit of IV:** *"अगर आपकी क्वालिटी 11 विक्रम हो जाती है - वन हो
  जाती है तो आपको इतना ट्यून डिक्रीज हो जाएगा अगर एक इनक्रीज हो जाती है वन प्वाइंट छह तो आपको इतना
  यह इनक्रीज हो जाएगा"* ⚠️ — the shape is readable (**one unit of IV ≈ a small fixed move in the
  premium**), the numbers are corrupt and are **not** adopted.

### What he explicitly leaves out
- **The Greeks. Deferred by name, in one sentence:** *"इसको मैं आज के सेक्शन में नहीं रखेंगे फिर कभी
  देखेंगे"* — preceded by his own one-line roles for two of them, heard as **theta for time** and
  **delta for direction**: *"यह सेट यह तो टाइम के लिए … थे डायरेक्शन के लिए गांव होता है"* ⚠️.
- **Why the call IV and the put IV differ** — deferred in the same way (*"फिर बाद में कभी डिस्कस करेंगे"*).
- **And, notably, the entire risk apparatus.** No stop-loss, no position size, no risk–reward, no trade
  count, no timeframe — none of it appears anywhere in the session (see Evolution).
- **His own closing offer, which is the only process element in the video:**
  *"अगर इसमें कुछ भी आपको ऐसा लगा कि अभी भी आपको समझ नहीं आया है मुझे फीडबैक दे सकते हैं"* — feedback,
  and he will re-explain.

### Numbers / levels — ASR fidelity
- ⚠️ **The instrument is NEVER named.** He says only *"इंटेक्स का प्राइस"* (the index price) and
  *"दोबारा सेशन"*. **Nifty, Bank Nifty, Sensex are all absent from the audio.** A 37,5xx spot with a
  37,500 strike points to a large-value index, but **nothing is asserted** — the instrument is
  unresolved and is not guessed here.
- ⚠️ **Spot price, heard inconsistently — three readings.** *"अभी के लिए क्या प्राइस धारा 375 376"*;
  the Zerodha read *"यह आपको नजर आ रहा होगा 33576"*; the later reference *"अब हमारा सपोर्ट परिचय है
  37 576"*. **37,576 and 33,576 cannot both be right.** Reproduced as heard, **not reconciled**, and
  **not repaired** to a single value.
- ⚠️ **Strike: heard as 37,500** (*"37500 उठा लेते हैं"*, *"37500 बी"*, *"37500 भी वाली"*, *"237 500
  वाला"*). Used because he says he *took* that strike — recorded as heard.
- ⚠️ **Volatility input: heard as *"टेन परसेंट"* (10 %)**, with the aside *"देखना होगा दरवाजे नॉर्मली टेन
  परसेंट ही रहता है"* (i.e. it normally sits at 10). A second IV value appears late in the move-example
  as *"17 पॉइंट 59"* (*"आपको इसकी आईडी डालने से 17 पॉइंट 59"*) — **both are recorded as heard; neither
  is adopted.** ⚠️ The token he uses for this input (*"दरवाजे"*, *"टेंपो से टू"*) is ASR-uncertain, and
  the 10 % figure is corroborated by the sensitivity demo only in order of magnitude.
- ⚠️ **Time to expiry: *"ऑलमोस्ट सिक्स"* / *"छह दिन"* (~6 days)**, and separately *"छह दिन टूट कर
  देंगे"*. Rather than reconciled with the calendar, it is **recorded as heard and left unresolved**.
- ⚠️ **The calculator's own output premium is NOT recoverable.** The first read is *"मासूमों पॉइंट 85"*;
  the second pass yields *"तो यह आएगा इसका 273 पॉइंट"*, *"97201"*, *"302"*, *"इसका है 1.5"*, *"वीक में
  दो डिफरेंस रहता है"*, *"नियर बाय"*. **No single premium figure is trustworthy.** Nothing routed.
- ⚠️ **The spot-move levels in the worked example are fragments, not levels.** *"अब हमारा सपोर्ट परिचय है
  37 576"* followed by *"66 चला जाता है"* (a move to something heard as *…666*), the target hypothesis
  *"यह 744 चला जाए"*, and the premium pair *"510 … 567"*. All **recorded as heard, none adopted**.
- ⚠️ **The IV-sensitivity figures conflict and are unusable:** *"1.3 इनक्रीज"* → *"28"*/*"289"* points;
  IV down → *"494"*; per-unit IV → *"वन प्वाइंट छह"*, *"11 विक्रम"*. **Unusable; not reconstructed.**
- ⚠️ **The two Google search strings are garbled:** *"बिंदी पोर्शन कैलकुलेटर एप"* (plainly a mangled
  "option price calculator app") and *"एनएफसी ऑफ शिनचेन"* / *"एनएससी ऑप्शन"*. He calls the second one
  *"इंडिया के ऑफिशियल वेबसाइट"* — an exchange site — but **the exact site is not asserted here**;
  reproduce as heard only.
- ⚠️ **Recurring ASR substitutions to read the note with** (all labelled readings, not transcript
  facts): *"सपोर्ट प्राइस"* = the spot-price field; *"ऑप्शन सैलरी"* = option seller; *"कूट ऑप्शन"* =
  put option; *"फुट"*, *"फिल्म"* = futures; *"रिग्रेट"*, *"लाइट"*, *"क्वालिटी"* = the volatility figure;
  *"बोला टिप्स"* = volatility; *"आइबी"*, *"आई"*, *"एबी"* = IV; *"वर्ल्ड कीजिए"*, *"वेट करना है"* = wait;
  *"ट्रेंड नहीं करना है"* = do not trade.
- ✅ **Reliable, because said as rules (no digits involved):** the four inputs in order; running market ⇒
  live price, closed market ⇒ the closing price; the strike is fixed while spot and IV are re-entered;
  IV must be tracked and must belong to the strike you hold; call IV ≠ put IV; the call and the put must
  be calculated separately; deferral of the Greeks; the closing feedback offer.
- ✅ **Reliable, as a mechanism (his numbers not required):** **IV up ⇒ premium up; IV down ⇒ premium
  down, and low IV accompanies slow/range-bound markets with the seller collecting.**
- **Nothing was routed to `levels-log/`.** This session carries no chart and no index level: its only
  numbers are calculator inputs and premium outputs, all ASR-uncertain. **0 rows routed.**

### Evolution vs earlier
- 🔵 **NEW (category) — the first OPTIONS-PRICING session in the corpus.** Every processed note before
  this one is about the **underlying's chart** — volume profile (`2021-12-11`), psychology
  (`2021-12-18`), style (`2021-12-25`), Gann levels (`2022-01-01`), SuperTrend entries (`2022-01-15`),
  audience chart audits (`2022-01-16`). Here the traded object is a **derivative**, and the subject is
  its **price**, not its setup. The corpus' first non-chart lesson.
- 🔵 **NEW — the fair-value gap as an ENTRY GATE.** *"अगर आपको ज्यादा डिफरेंस मिले तो फिर आपको ट्रेंड
  नहीं करना है"*, with the seller's motive given: *"जो ऑप्शन सैलरी है वह आपको … आपको हाईवे देर
  है उसको आपको थोड़ा सा वेट करना है वह आपको नियर बाय मिले तो फिर आपको इसमें ऐड कर सकते हैं"*. A
  filter based on the **price you are paying versus the price it is worth** — no earlier session gates
  an entry on value; they gate on levels, indicators, momentum or stock selection.
- 🔵 **NEW — IV as a live, continuously re-entered input.** *"यह चेंज होती रहती है रनिंग मार्किट में …
  आप इसको ट्रैक करते रहना होगा"*. Nothing earlier in the corpus treats volatility as an input at all,
  let alone as a number that must be re-read through the session. **The first "keep a live input
  updated" instruction in the corpus** — a different discipline from keeping a chart clean.
- 🔵 **NEW — call IV ≠ put IV, stated outright.** *"जो कूट ऑप्शन की अलग होती है और कॉल ऑप्शन की अलग
  होते"*. Stated as a fact, with the reason explicitly deferred — so the corpus now contains the
  skew *observation* without the skew *explanation*.
- 🔵 **NEW — the spot-vs-futures adjustment.** The calculator is spot-based; the futures price differs,
  and he tells the viewer to enter the futures value and re-read: *"अब यह जो आपको फुट का प्राइस मिल रहा
  है यह थोड़ा सा रूम हो गया … आपको के प्राइस में जाना"* ⚠️. The corpus' first acknowledgement that the
  quoted price and the *tradable* price are not the same number.
- 🔵 **NEW — time-to-expiry as a shrinking input, and the roll.** Days-to-expiry is entered, re-entered
  as the day changes, and re-entered a third time for the *hypothetical future moment* of the target.
  The first **clock inside a calculation** in the corpus (2022-01-15's clock was a trading-window rule
  — no trades after 2:00 PM — a different object).
- 🔵 **NEW — the Greeks enter the corpus, by name only, and are postponed.** He gives theta to time and
  delta to direction in one breath and then says *"इसको मैं आज के सेक्शन में नहीं रखेंगे फिर कभी
  देखेंगे"*. First appearance as a **named deferral** rather than a teaching.
- 🟡 **REFINED — the calculator lineage.** `2022-01-01` introduced the corpus' **first mechanical
  level-generator** (Gann / Square of Nine: one price in, entry/target/stop out). This session repeats
  the **same lesson shape** — a free external tool, typed inputs, read outputs, no model explained — but
  the output is no longer a level, it is a **valuation**. Same pedagogy, new object; the second entry in
  the early-2022 tool cluster.
- 🟡 **REFINED — no science required becomes the tool lesson's selling point.** *"उसमें कोई ज्यादा
  इसमें साइंस लगी भी नहीं आपको जस्ट जो चीज नजर आ रही है उसको डाल है"*. `2022-01-01` framed its
  calculator honestly too — not a professional's system, only a proper stop-loss for a beginner — while
  here the framing is simply that the tool is easy. Two sessions in a row where the tool's virtue is
  *low difficulty*, not edge.
- 🟡 **REFINED — the derivative is now explicitly a FUNCTION of the underlying.** The session's whole
  logic is *index price in → premium out*. `2022-01-16` required the trader to **read a correlated
  instrument** before committing (Nifty vs Wipro) — a discretionary cross-check. Here the linkage is
  **arithmetic and mechanical**: the option's value *is* the index's move, run through four fields.
  The corpus now holds both versions of "one instrument is not enough".
- 🟢 **STABLE — the session is branded as learning, not as a signal.** *"आज का दोबारा सेशन लर्निंग पर
  रहने वाले हैं"* — matches `2021-12-25` (work your own way) and `2022-01-16`'s instruction to keep
  attention on learning. No call, no level, no view is given in the entire video.
- 🟢 **STABLE — the entry-discipline instinct, transposed to price.** *"ज्यादा डिफरेंस मिले तो फिर आपको
  ट्रेंड नहीं करना है"* sits with `2021-12-18`'s anti-regret rule and the ban on forced/recovery trades:
  **no trade is a legitimate outcome.** Same instinct, applied to what the option costs instead of to
  what the chart says.
- 🟢 **STABLE — the calculator itself returns later in the corpus' own lineage.** The early-2022
  indicator cluster (`2022-01-15` → this session → `2022-01-29` VWAP+SuperTrend) is exactly the drift
  `2021-12-25` → `2022-01-01` → `2022-01-15` had already been showing: **one more tool per session.**
  ⚠️ **Recorded, not averaged** — three weeks before the corpus' February reversal (`2022-02-19` price
  action vs indicators; `2022-03-06` *"clear the chart"*).
- ⚠️ **TENSION (dated, unresolved) — a full session on options with ZERO risk apparatus.** No stop-loss,
  no quantity, no risk–reward, no trade count, no timeframe, no "not 100 %" line — in a video about the
  instrument with the fastest financial decay in retail trading. `2021-12-18` (1–2 trades/day, R:R,
  recovery-trade ban), `2022-01-01` (one target only), `2022-01-15` (stop sized to the instrument's
  range, instrument-range contrast, no trades after 2:00 PM) and `2022-01-16` (every audit assumes a
  written stop) all carry one; **this session carries none.** The rock of the corpus so far is absent
  from the one lesson that most needs it. **Both dated positions stand; not averaged; for Amit.**
- 📌 **Era marker.** Second tool-of-the-era session processed, and the corpus' first **derivatives**
  note. It documents how the early-2022 period taught *pricing mechanics* while the framework sessions
  three days earlier taught *structure and stop placement* — two separate curricula running in the same
  month, which is exactly what the timeline already suspected about the indicator cluster.

### Keep permanently
1. **Know what the premium becomes before you trade the option.** If you cannot say what your option
   will be worth when the index moves from here to there, **you should not be trading options** — that
   is the session's own precondition, not an inference.
2. **Four inputs, in this order: spot → strike → volatility → days to expiry.** Everything else is the
   calculator's job.
3. **Match the price to the market's state.** Running market ⇒ the live price. Closed market ⇒ the
   closing price. Feeding the wrong one is the beginner's first error with this tool.
4. **Only two fields move; keep changing them.** The strike is fixed once chosen; the **spot price** and
   the **IV** are re-entered as the tape changes. Everything else the calculator derives.
5. **Use the IV of the strike you actually hold.** An IV borrowed from another strike prices a
   different contract.
6. **Call IV and put IV are different numbers.** Price the call with the call's IV and the put with the
   put's — never one IV for both sides.
7. **IV is a moving input, not a setting.** It changes during the session; the premium changes with it.
   Track it, or your calculation is stale before you act on it.
8. **A large gap between your calculated premium and the market's quote is a reason NOT to trade.** When
   the seller is asking well above the value, wait — and if the quote comes back near your number, the
   position becomes addable.
9. **Time is an input, and it is always shrinking.** Re-enter the remaining days (and the remaining days
   at the *future* moment you are asking about), not the number you typed this morning.
10. **IV falling is the quiet loss.** Falling IV with a sideways/slow market is the seller's profit and
    the buyer's bleed — risk IV down, not IV up, as much as direction.
11. **Ask a pricing tool questions, not opinions.** *If the index reaches X, what is my premium?* —
    answered in advance, that is the whole use-case: you get to refuse a trade *before* taking it.
12. **Watch the derivation you're not ready for.** He names theta (time) and delta (direction) and
    postpones them explicitly — using a calculator you don't fully understand is acceptable as long as
    you know which parts you are trusting and which you are not.

### Day-specific only (don't overfit)
- **The whole worked example is January-2022 and day-specific.** The spot (~37,5xx), the strike 37,500,
  the IV ~10, the days-to-expiry ~6 and every premium figure belong to that week's tape; he says so by
  framing it as one day's calculation (*"माननीय फ्राइडे को डाल रहे हो"*).
- **The instrument is never named** — no Nifty, no Bank Nifty, no Sensex in the audio. The session's
  teaching does not depend on which index it was; do not attach an instrument to it.
- **The spot value is heard two contradictory ways (37,576 / 33,576).** Neither is carried; **not
  repaired.**
- **The premium figures heard in this session** (the *"510"* → *"567"* pair, *"273"*, *"494"*,
  *"28"*, *"1.5"*, *"वन प्वाइंट छह"*, *"17 पॉइंट 59"*, *"744"*) **are ASR-uncertain and must not be
  carried anywhere** — not into a levels-log, not into a calculator example, not into a note for another
  date.
- **The IV sensitivity magnitudes are not reusable numbers.** Keep the *direction* (IV up ⇒ premium up,
  IV down ⇒ premium down, low IV ⇒ slow market/seller's profit); discard the digits.
- **The site names are unresolved.** The session is a lesson about *using a public pricing calculator*;
  do not record which exchange page or broker page the numbers came from.
- **No level, no stop, no target, no instrument — nothing was routed to `levels-log/`** from this
  session, by construction.
