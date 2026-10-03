# 2023-12-10 — Teaching: Edge In Algo Trading

Educational notes only — not SEBI advice. Your risk rules win.

## Teaching
**Video:** Edge In Algo Trading By Intraday Hunter — Sunday session, 10 DEC 2023
**URL:** https://www.youtube.com/watch?v=g4QrGusiN5s
**Transcript:** Hindi ASR of `g4QrGusiN5s` (4,237 words, ~16:49) — `transcripts/2023-12-10-teaching-g4QrGusiN5s.md`

### Core idea
- **Algo is the current era of the edge.** He walks the *migration of the edge*: first the person with **information/news** made money; then the one with **chart skill**; then the one with a **candlestick** read (*"कैंडल स्टिक का जिसको अंदाजा ज्यादा रहता था वो चार्ट वालों से भी ज्यादा पैसा बना पाता था"*); then **breakout/breakdown, support/resistance, indicators**; and now *"आज के दिन हम एल्गो तक पहुंच चुके हैं."* ⭐ **Each era's skill was an edge until everyone had it.**
- ⭐ **What algo actually buys you: discipline, not intelligence.** The core promise is *"हम थोड़ा मशीन की तरह काम कर सकते हैं"* — *"जो आपने रूल बना रखे हैं वो एल्गो तोड़ने नहीं देगा."* The market is getting more volatile *"और ऐसे वोलेटाइल मार्केट में जो हम रूल बनाते हैं वो तोड़ देते हैं"* — the machine cannot break them.
- ⭐ **The canonical example:** with **no algo**, a loss running toward **₹1 lakh** gets "managed" — *"अभी तो ये कैंडल बना है, अभी तो रेजिस्टेंस के आसपास है"* — and the loss grows. With the rule *"1 लाख से ऊपर नहीं जाना चाहिए, 1 लाख पे अपना लॉस कट जाना चाहिए"*, it cuts. The discipline is the product.
- ⚠️ **Algo is not automatically better.** Manual has a real benefit he names: **a moment to judge.** *"ब्रेकआउट हुआ है … लेकिन यह जो मोमेंटम है यह इतना क्लियर नहीं है — तो आप वेट कर सकते हो, ट्रेड नहीं करोगे, या … सेल का भी ट्रेड कर सकते हो."* A raw breakout rule would have bought anyway.

### What big money does with algo (the part retail never sees)
- **The old way:** to move the market with big quantity you **hired professionals** — *"हमें बड़ी क्वांटिटी में लगाना होगा … आपको सोचना नहीं है, केवल एग्जीक्यूशन के लिए [भी रखना पड़ता था]."* **Now the algo does the execution.** *"करंट टाइम में वो काम एल्गो कर देता है."*
- ⭐ **Position concealment:** a big buyer does not want his intent visible — *"मैं यह नहीं चाहता कि मार्केट के अंदर मेरा पोज़िशन रिवील हो जाए … मार्केट डेप्थ में भी नहीं लाना चाहता."* ⇒ he works **market orders**, and the algo is told: order flow that *is* visible in depth gets filled first; the hidden flow is absorbed inside a **price range** with a **capital cap** — *"इतना कैपिटल लगना चाहिए … तब तक मैं प्राइस कंट्रोल करने की कोशिश करूंगा."*
- ⭐ **Two size classes of algo user** (a size taxonomy, both directional):
  1. **Heavy quantity — can rotate the market, but only opportunistically:** *"मार्केट को घुमा तो सकता है लेकिन वो टेस्ट करता है — अगर उसे प्रॉफिट हो जाए, एसएल [वगैरह] मिल जाए तो प्रॉफिट बना लेगा, अदरवाइज़ मार्केट उसे कंट्रोल नहीं हो रहा तो लॉस लेके निकलेगा."*
  2. **Extra-heavy quantity — will rotate it regardless:** *"उसे पता है कि मैं तो घुमा के रहूंगा, मार्केट जो मर्जी आ जाए, कितना भी क्वांटिटी आ जाए, मेरे पास अच्छा कैपिटल है."*

### The central new rule — small algos work AWAY from the level, big algos work AT it
- ⭐ **Small/moderate algo (can move the market, not overwhelmingly):** *"जब भी अपना एल्गो लगाते हैं … कोई भी राउंड नंबर होगा, कोई भी इंपोर्टेंट नंबर होगा, या कोई भी ब्रेकआउट या ब्रेकडाउन होने वाला होगा — **उससे कुछ दूर पहले ही** अपना एल्गो लगाने की कोशिश करेंगे। **वो एग्जैक्टली [उस लेवल पर] काम नहीं करेंगे.**"* Concretely: *"47,200 के ज्यादा आसपास नहीं जाने देंगे — **30 से 40 पॉइंट, 50 पॉइंट पहले ही** मार्केट को घुमाना शुरू कर देंगे, कि देखने वाले को लगे कि बाय करने वाले हैं."*
- ⭐ **Big-capital algo:** *"वो हमेशा **ब्रेकआउट और ब्रेकडाउन के बाद** काम करता है"*, **or** it works an **exact level via option selling**: *"कोई ऐसी कंडीशन होती है जहाँ पे ऑप्शन सेलिंग होता है … एक पर्टिकुलर स्ट्राइक प्राइस होता है."* If he has **written 47,500**, *"वो [मार्केट को] उसके ऊपर जाने ही नहीं देगा"* — heavy quantity + a written strike ⇒ a **pinned range**.
- ⭐ **Usable read:** *"मार्केट में अगर आपको कोई रेंज नज़र आ रहा है जहाँ पे एग्जैक्टली मार्केट ऊपर या नीचे नहीं जाने दे रहा — तो वहाँ कहीं ना कहीं एक बड़ा एल्गो लगा हुआ है."* And: **small algos ≈ 30–40 pts away from the level** ⇒ *"47,500 आसपास आ रहा है तो मेरा जो रेजिस्टेंस मिलेगा लगभग **47,465** के आसपास … वहाँ पे छोटा एल्गो काम कर सकता है."*
- ⭐ **The consequence for a late mover:** if price has already turned **before** the breakout, a small algo may profit but *"बड़े लेवल का बेनिफिट नहीं देखने को मिलेगा."* The market **continues** only if (a) an algo triggered **after** breakout/breakdown, or (b) a big algo is holding an **exact level** for option selling.
- ⚠️ **Even the biggest has a limit:** *"हर जगह किसी का तो लॉस हो ही सकता है, चाहे कितना भी बड़ी क्वांटिटी लेकर बैठा हो — लेकिन एक लिमिट तक वो आपके अकॉर्डिंग कोशिश करेगा कि वो लेवल ना टूटे."*

### The personal-algo edge he actually uses (option selling)
- ⭐ **The instant call→put switch.** *"अगर मैंने कहीं पर कॉल राइट कर रखा है और मैं चाहता हूं कि जब मेरा एसएल हिट हो, तुरंत के तुरंत वहाँ पे पुट सेल हो जाना चाहिए."* Reason — option selling is **time consumption**: *"मोस्ट ऑफ द टाइम जो हमारा फोकस होता है … ऑप्शन सेलिंग में टाइम को कंज्यूम करना होता है."*
- ⭐ **Why manual cannot do it:** as the market breaks out the call premium has already risen; by the time a human switches, *"ये जो प्राइस था मेरा मिस हो गया"* ⇒ **slippage**, and the stop is now much bigger. The algo cuts the call and writes the put *"इसी सेकंड में"* ⇒ **no slippage.**
- ⭐ **The auto re-strike logic:** on a **₹10** premium setup, if the SL hits, the algo re-scans strikes for a put premium *"10 12 15 के आसपास"* and writes it automatically — something *"मैनुअल … नहीं जा पाएंगे"*.
- **Also:** algo manages the other Greeks and **eats time** — *"अगर आप सही से, ठीक-ठाक कैपिटल है तो अपना पर्सनल एल्गो बना सकते हो."*

### Where algo would have saved him (honest example)
- ⭐ *"यहाँ पर हमें ऑलमोस्ट टारगेट मिल चुका था — अगर हम एल्गो में काम कर रहे होते तो यहाँ पे अपना टारगेट हिट होकर काम चल जाता. लेकिन … **हमने यहाँ पे लालच कर लिया** कि काफी दिनों से मार्केट गिरा नहीं है, 500 का लेवल आसपास है, मार्केट गिर जाएगा — और मार्केट घूम गया, तो जहाँ हमें टारगेट मिलना था वहाँ पे हम लॉस मिल गया."* ⇒ the manual **greed override** turned a target into a loss.

### Practical advice (as spoken)
- Beginners must **try algo once**, *"स्पेशली अगर आप ऑप्शन सेलर हैं."* Rule quality is the whole game: *"जो रूल बनाने पड़ते हैं वो बहुत ही **स्ट्रिक्ट** होने होंगे."*
- If you keep a manual override, keep it **minimal** — *"कोशिश करोगे लगभग आप एल्गो के ऊपर ही छोड़ दो; थोड़ा बहुत अगर अपने लिए रखना चाहते हो तो उतना ही रखो"* (for exceptional situations only). *"अदरवाइज़ जब हम लर्निंग कर रहे होते हैं … पैसा बनाना आसान नहीं होता, दूसरा हम सही से डिसिप्लिन नहीं रख पाते."*
- ⚠️ Do not fall for the **ego trap**: *"कभी-कभी अपना जो ईगो होता है ना वो बहुत बड़ा हो जाता है — कि जो एल्गो से ट्रेडिंग करता है और जो मैनुअल ट्रेडिंग करता है, [कौन] बड़ा हो जाता है. देखिए बड़ा-छोटा कुछ नहीं होता."* Neither is superior; they trade different things (discipline vs judgement).

### Numbers / levels — ASR fidelity
⚠️ Levels are Dec-2023 **Bank-Nifty-plausible chart levels** (index **not named**), spoken once and ASR-fragile.

| Spoken (ASR) | Read as | Status |
|---|---|---|
| *"47 200 इंपोर्टेंट नंबर हो चुका है करंट टाइम में"* | **47,200** — an "important number" the market has built | **spoken, plausible** |
| *"47 500 का लेवल … उसके ऊपर वो जाने ही नहीं देगा … उसने वो 47500 का राइट कर रखा है"* | **47,500** — a **written strike** / round number; the option-seller's exact level | **spoken, plausible** |
| *"47000 के नीचे रखा"* | **47,000** — held below while the small algo pushed | **spoken, plausible** |
| *"लगभग 47 465 के आसपास तो वो एक ऐसा लेवल है जो 30 से 40 पॉइंट दूर है"* | **≈47,465** — the *inferred* small-algo level (30–40 pts under 47,500) | **spoken; his own derivation, not a chart level** |
| *"1 लाख से ऊपर नहीं जाना चाहिए"* | **₹1,00,000** — a **hypothetical** loss-cap example | **spoken; illustrative only** |
| *"₹10 वाला प्रीमियम … 10 12 15 के आसपास … 20 वाले"* | option premia **₹10 / ₹12 / ₹15 / ₹20** | **spoken; illustrative, not a live quote** |
| *"500 का लेवल आसपास है"* (his greed note) | *"500"* = **the tail of a round level** (e.g. 47,500) — **not** a standalone figure | **spoken, ambiguous** |

- **No quantity, no lot size, no actual strike list, no rupee P&L, and NO trade outcome narrated** — the session is method-only.
- ⚠️ ASR damage logged: *"एलग/एगो/अलगो"* = **एल्गो (algo)**; *"पोशन"* = पोज़िशन; *"कंज्यूम"* = consume; *"एज"* = edge. The strike *"47 500"* is the only instrument-shaped figure and is plausible for Dec-2023 Bank Nifty.
- ⚠️ **No `levels-log/` row** — no live trade level is stated for a dated market; the numbers above are teaching illustrations.

### Evolution vs earlier
- 🔵 **NEW — the EDGE-MIGRATION timeline, with algo as the current era.** *"जिसके पास इंफॉर्मेशन सही होता था उसके पास एक एज रहता था … फिर चार्ट … फिर कैंडल स्टिक … आज एल्गो तक पहुंच चुके हैं."* 2023-11-18 said *"knowledge is commoditised, implementation is the edge"* — today **names the era and the tool**: information → chart → candlestick → indicators → **algo**. ⭐ First explicit history of the edge in the corpus.
- 🔵 **NEW — the SIZE TAXONOMY of algo users, and where each places its algo.** *"एल्गो दो तरह के ट्रेडर लगाते हैं."* ⭐ The durable morsel: **small/moderate algo works 30–40 points AWAY from the level; the big algo works AT the exact level (written strike) or AFTER the breakout.** Nothing earlier distinguishes *where in the price grid* different sizes position. (Sharpest new tool of the session.)
- 🔵 **NEW — the PINNED-RANGE TELL as an algo read.** *"अगर मार्केट कोई रेंज में ऊपर या नीचे नहीं जाने दे रहा, तो वहाँ कहीं ना कहीं एक बड़ा एल्गो लगा हुआ है."* 2023-11-26 described a two-sided pinned expiry range as a *writer* effect; today turns the pin into a **detectable footprint of a big algo** (an operator analogue).
- 🔵 **NEW — POSITION CONCEALMENT via market orders.** *"मैं यह नहीं चाहता कि मेरा पोज़िशन रिवील हो जाए … मार्केट डेप्थ में भी नहीं लाना चाहता."* 2023-11-26 explained *why* the operator needs your opposite; this explains *how* he buys big without showing it.
- 🔵 **NEW — the INSTANT call→put switch, and why option selling needs it.** *"जब मेरा एसएल हिट हो, तुरंत के तुरंत वहाँ पे पुट सेल हो जाना चाहिए"*, because *"ऑप्शन सेलिंग में टाइम को कंज्यूम करना होता है."* 2022-09-17 / 2023-03-12 / 2023-11-26 taught **writer** mechanics and a two-sided pin, but no entry/exit **switch rule** for the seller. ⭐ First stated option-seller switch, with **no-slippage** as the reason.
- 🟢 **STABLE — discipline is the mechanism, and the loss must stay inside a limit.** The algo's value is *"रूल तोड़ने नहीं देगा"* — the **enforcement** half of 2023-11-26's *"his loss must stay inside a limit"* and 2023-10-01's discipline chain.
- 🟢 **STABLE — round / important numbers are the levels the crowd and the machines both use.** *"कोई भी राउंड नंबर होगा, कोई भी इंपोर्टेंट नंबर होगा"* (2023-09-24, 2023-10-15, 2023-11-18, 2023-12-02).
- 🟢 **STABLE — greed turns a target into a loss.** *"हमने लालच कर लिया … जहाँ हमें टारगेट मिलना था वहाँ पे हम लॉस मिल गया"* (2023-10-01's *book the target, never chase the bigger one*).
- 🟡 **REFINED — manual vs machine gets a fair comparison.** Earlier sessions treat discipline/loss-limits as purely human problems; today splits the work: **algo owns enforcement, manual owns judgement on unclear momentum** (*"मोमेंटम इतना क्लियर नहीं है — तो आप वेट कर सकते हो"*). ⭐ First note that the human's remaining edge is **the option to not trade**.
- ⚪ **Absent (absence, NOT retraction):** the corpus's level/psychology apparatus (buyer-vs-seller pools, the closing-price gates) is barely used — the session is about *who places orders where*, not *what the crowd feels*.
- 🔴 **CONTRADICTS: none asserted.** ⚠️ One caution (not a contradiction): *"एल्गो [हमें] एक एज मिल रहा है"* vs 2023-11-18's *"knowledge is commoditised"* — but algo is **implementation**, not knowledge, so the two are consistent as written.

### Keep permanently
1. **The edge migrates.** Information → chart → candlestick → indicators → algo. Whatever everyone has is no longer an edge; find the next skill, do not defend the last one.
2. **Algo buys DISCIPLINE, not intelligence** — it cannot break the rules you wrote, which is exactly what a volatile market makes humans do.
3. **Write the loss cap as a rule** (e.g. *"₹1 lakh pe loss cut"*): without it you "manage" the loss with fresh stories (*"abhi to ye candle bana hai, abhi to resistance ke aas-paas hai"*) and it compounds.
4. **Manual's real advantage is the option to NOT trade** — the machine fires on the rule; a human can say *"momentum is not clear, I wait."* Keep manual overrides minimal and for unclear-tape cases only.
5. **Small/moderate algo sits 30–40 points AWAY from the level; the big algo sits AT the level or works AFTER the breakout.** Where price turns reveals which size is at work.
6. **A pinned range is a footprint:** if the market refuses to break a level up *or* down, a big algo is defending an exact level (usually a written strike) — trade the range or stand aside, do not fight it.
7. **An exact level is often a written strike:** *"47,500 का राइट कर रखा है"* ⇒ he will not let it cross. Your level reading must ask *"whose strike is this?"*
8. **Big money hides size** — it works market orders so its position never appears in the depth; never assume the visible book is the real intent.
9. **For an option seller, the call→put switch must be instant and automated** — option selling is time consumption, and a manual switch mid-breakout pays slippage that ruins the stop. Auto-pick the replacement strike by premium (e.g. ~₹10–15).
10. **Greed, not a wrong read, converts a target into a loss** (*"target mil chuka tha … लालच कर लिया"*) — if the setup's target is reached, the algo (or the rule) books it.
11. **Neither algo nor manual is "bigger"** — the ego contest between them is the actual problem; each owns a different job.

### Day-specific only (don't overfit)
- The chart figures — **47,000 / 47,200 / 47,500 / ≈47,465** — are Dec-2023 Bank-Nifty-plausible and **day-specific**; the index is never named.
- The **₹1 lakh cap** and the **₹10–20 premium** points are **illustrations**, not his live parameters; no live trade, position or outcome is narrated in this session.
- *"47,465 = 30–40 points below 47,500"* is **his own derivation** of where a small algo sits — a heuristic, not a measured level.
