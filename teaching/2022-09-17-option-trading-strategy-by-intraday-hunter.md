# 2022-09-17 — Teaching: Option Trading Strategy (the intraday option-SELLING setup)

Educational notes only — not SEBI advice. Your risk rules win.

## Teaching
**Video:** OPTION TRADING STRATEGY BY INTRADAY HUNTER — Sunday session, 17 SEP 2022
**URL:** https://www.youtube.com/watch?v=jlrdNMNJlcs
**Transcript:** Hindi ASR of `jlrdNMNJlcs` — `transcripts/2022-09-17-teaching-jlrdNMNJlcs.md` (3682 words)

### Core idea
- This is the corpus's first **full option-WRITING (selling) setup** — and he chooses the SELL side for a
  **mindset** reason, not a probability reason: *"इससे भी बड़ी बात होती है माइंड सेट की."*
- **The asymmetry of knowing your number.** On the **selling** side he knows the maximum he can make
  (the premium decays; *"ज्यादा से ज्यादा क्या करेगा — ज़ीरो हो जाएगा"*), but does not know how far the
  market can run against him. So the mind is **relaxed in profit and alert in loss** — and alertness is
  what actually cuts a losing position. *"यही वो माइंडसेट होता है जिसके कारण पैसा बनता है."*
- **On the buying side the same coin lands the other way.** Buying ₹100 of premium: you cannot lose more,
  but you also do not know if it goes to ₹200, ₹300 or ₹800 — so you cut at ₹200 and it goes to ₹800
  (regret). Next day you refuse to book at ₹200 in revenge for yesterday's regret — and the premium comes
  back to ₹100 and turns negative (bigger regret). The ruined mindset then produces *"एक एक्स्ट्रा ट्रेड"*
  and a larger loss. **The problem with buying is not the payout, it is that you never know your number.**
- **Intraday, not positional, for selling** — positional writing can be a very large loss because the
  market gaps up / gaps down (*"पोज़िशनल में ऑप्शन सेलिंग में बहुत बड़ा लॉस हो सकता है"*).

### The setup, as taught
| # | Rule | His words (ASR) |
|---|------|-----------------|
| 1 | **15-minute timeframe** | *"15 मिनट का टाइम फ्रेम लगा लेना है"* |
| 2 | **Trade window 10:00 → 15:00** | after 15:00 you may keep a running winner; if it has come back to ~zero / is against you, cut it |
| 3 | **Read the 10:00 AM candle** | green candle = **buy side**; red candle = **sell side** |
| 4 | **Trigger = crossing that candle's HIGH** (either colour) | green-candle high crossed → **write a PUT** (bullish); red-candle high crossed → **write a CALL** (bearish) |
| 5 | **Strike: far OTM, 600–700 points** (up to ~800) from the index | *"मिनिमम आपको 600 से 700 … दूर का ऑप्शन लेना है"* |
| 6 | **Premium ≈ ₹200 band** | keep the premium in that band rather than hunting a cheap strike |
| 7 | **SL = 200 index points against you** | *"इसका होगा इंडेक्स के अंदर 200 पॉइंट"* → cut, do not adjust |
| 8 | **Target = the decay.** Hold while the position runs your way; the theta of the hours the market spends sideways *is* the profit | *"ये जो थीटा आपको मिला है ऑप्शन का, ये आपका पैसा हो जाएगा"* |
| 9 | **Chart/level check before writing** | he re-states the SL-availability logic: where no chart (level) is available, no stop-loss is available either — *"अगर साइड कोई चार्ट अवेलेबल नहीं है तो इसका मतलब है कि यहां कोई स्टॉप लॉस अवेलेबल नहीं है"* |
| 10 | **Prefer the same-expiry chart**; else 1–3 days of chart | *"एक या दो दिन का चार्ट … तीन दिन का भी … लेकिन एक्सपायरी पास होना चाहिए"* |

### Expiry hygiene (three separate rules)
- **Do not sell the running (same-week) expiry.** *"एक्सपायरी के दिन ऑप्शन सेलिंग से बच के रहना"* — sell the
  **next week's** series instead. *"जो उसी वीक की एक्सपायरी, उसमें आपको कम नहीं करना है."*
- **Better to stay away on Wednesday** (expiry day). The belief that expiry day pays most is exactly the
  belief that gets a beginner carried out.
- **Never sell a cheap premium** (₹10–15 / ₹20 / ₹40). They jump to ₹80 and *"वहां वह काट नहीं पाते"* — you
  cannot cut what has doubled on no read.

### The discipline the setup is built on
- He demonstrates that writing a put *would* have paid on a chart where the level check failed — and says
  not to take it anyway: *"पैसा बनाना नहीं है, पैसा एक डिसिप्लिन से पैसा बनाना है."*
- Backtest offline, then live: *"थोड़ा सा बैक टेस्ट करते रहना है … फिर लाइव मार्केट में देखो."* He reports a
  ~one-month test with few large losses, and warns that a 2–3-SL losing streak inside a week is normal.
- Capital: writing is a capital product — *"कैपिटल के साथ ऑप्शन सेलिंग किया जाता है"*; ₹5,000 works for buying,
  not for this. Hedging lowers margin but the capital should still be there.
- Accuracy: buying needs a ~100-point-accurate read to be worth anything; writing uses a **200-point**
  band — the wider tolerance is the point of the product.

### Numbers / levels — ASR fidelity
- ⚠️ **`"600 से 7800"`** (mid-session) is **corrupt** — every other restatement is *"600 से 700"* (with 800
  as an upper mention), and that is how it is recorded. Do **not** quote 7,800 from this session.
- ⚠️ **`"6700"`** in the "keep it around …" sentence is **unresolved** (unit and object unnamed). Recorded as
  heard; not used as a strike, level or distance.
- ⚠️ **`39958`, `866`, `984`, `864`** are chart prints from an unnamed instrument in a backtest slide. They
  are reproduced as spoken and are **NOT** levels — nothing here is routed to `levels-log/`.
- ⚠️ `"प्रेमियों"` / `"आउट ऑफ डी मणि"` are ASR for *premium* / *out-of-the-money*; `"असल"` and `"SLP"` are
  *SL*; `"ऑल सूट / कोर्स आउट"` is *call short / ... out* and stays unresolved.
- ✅ Reliable figures: **15-minute** timeframe, **10:00** candle, **10:00–15:00** window, **600–700** points
  OTM, **₹200** premium band, **200-point** index SL, **one-month** backtest.
- **Day-specific:** the chart examples, the ~1-month test window, and every strike. The strikes of
  Sept-2022 are archive data.

### Evolution vs earlier
- 🔵 **NEW (load-bearing)** — ⭐ **the mindset-asymmetry argument for choosing the SELL side**: bounded
  profit / unbounded loss is *preferred* because it makes the trader alert exactly where alertness pays.
  Every earlier option session (2022-05-08, 2022-07-02) argued from capital, probability or player skill;
  this is the first that selects a segment on **which side the mind behaves correctly on**.
- 🔵 **NEW** — ⭐ **the first mechanical intraday WRITING template in the corpus**: 15-min + 10:00 candle
  colour + high-cross trigger + OTM 600–700 + 200-point index SL + hold-to-decay. It is the first entry
  rule in this corpus that does not require reading who is sitting where.
- 🔵 **NEW** — ⭐ **expiry hygiene as three explicit rules** (never sell the running expiry; avoid Wednesday;
  never sell a cheap premium). 2022-06-05 described the *big premium seller* as the expiry-day
  counterparty; this session is the writer's own rulebook for not becoming him.
- 🟡 **REFINED** — 2022-05-08's option session was **buyer-side money management** (loss-first capital
  sizing, 10–20-minute time-accuracy, *the cheap strike is a different risk, not a discount*). This session
  **inverts the side** and prices the sale: no ₹1 lakh derivation, no 10–20-minute clock, a **200-point**
  tolerance instead of 100. The earlier rule survives as a rule about the *buying* product.
  ⚠️ Note the object is identical and the advice is opposite in direction — 2022-05-08: *do not buy the
  cheap strike*; 2022-09-17: *do not SELL the cheap premium*. **Both stand; they are different sides of the
  same trade.** Not averaged, not resolved.
- 🟢 **STABLE** — ⭐ 2022-07-02's **zero-promise asymmetry**: *"मैं तो ज़ीरो के लिए लिया था, जब तक ज़ीरो नहीं
  होगा तब तक मैं निकलने वाला नहीं"* is right on the loss side and fatal on the profit side. This session is
  the **mirror**: on the sell side the profit is *defined* as decaying to zero, so the exit discipline the
  hero-zero buyer lacked is built into the product. Strongest cross-confirmation of that idea so far.
- 🟢 **STABLE** — ⭐ **the SL-availability check returns** (2022-01-30 → 2022-06-18 → here): the trade needs a
  chart/level in the direction's path, and no level means no stop-loss to deliver the move. Sixth-plus
  appearance of the spine, unchanged.
- 🟢 **STABLE** — **no read, no trade** (2022-06-04's justify-the-print) restated as the discipline that
  refuses a trade that would have paid; **capital = capacity, not certainty** (2022-06-18 → 2022-09-04) in
  its writing-capital form; **practice/implementation beats watching** (2022-07-02's watch-vs-trade).
- ⚠️ **TENSION RECORDED — NOT resolved:** the trigger taught here is **time-and-candle mechanical**
  (10:00 candle, high cross) rather than a participant read, which sits closer to the template-approach the
  corpus rejected in 2022-02-19 (*indicators/S-R alone can lose*) and 2022-06-05 (*learning only S/R,
  trendline or indicators will not get you there*) than to the read-the-other-mind line of 2022-04-23 →
  2022-06-05. It is cushioned by the level check (rule 9) and by the "discipline over money" demonstration,
  and he explicitly invites the viewer to make the template *unique* and to change the timeframe — but as
  spoken this is the corpus's **first mechanical entry template**. **Both dates stand; for Amit to
  adjudicate.**
- ⚠️ **CROSS-CHECK (not a contradiction):** 2022-09-04 forbade *rolling a losing option position into the
  next series*. This session's *sell the next week's expiry* is a **choice made at entry**, not a rollover
  of a loss — same words, different acts. Both stand.
- 📌 **Pairing with 2026:** the 2026 dailies run a **200-point Bank Nifty option-selling discipline** with an
  explicit line-in-the-sand; this Sep-2022 session is that discipline's origin document — with the SL, the
  OTM distance and the expiry hygiene already present four years earlier.

> **Evolution verdict:** the corpus's option thread finally gets its **sell-side doctrine**, and the reason
> given is behavioural rather than statistical: choose the side on which the mind is alert in loss. ⭐ Durable
> adds: **the mindset asymmetry**, **the 10:00-candle writing template**, and **the three expiry-hygiene
> rules**. ⚠️ One tension opened (mechanical trigger vs participant read) and one cross-check recorded
> (cheap premium: buy vs sell) — neither averaged, both dated.

### Keep permanently
1. **Choose the side of the trade on which your mind behaves correctly.** Selling = capped profit, unknown
   loss → you are alert in loss and relaxed in profit; that is why he makes money writing and not buying.
2. **Know your number before you enter.** A product whose maximum profit you cannot state is a product
   whose exit you will fumble — the regret-cut-revenge loop starts there.
3. **Option WRITING is intraday, not positional.** Overnight gaps are the one loss a writer cannot manage
   with a 200-point band.
4. **The 10:00 candle decides the side; the cross of its high is the trigger.** Green → write a put;
   red → write a call. (Corpus tension noted: this is a mechanical template — keep the level check with it.)
5. **Write 600–700 points out of the money and keep the premium around the ₹200 band** — the far OTM strike
   buys the read tolerance that makes writing usable.
6. **SL is 200 index points, and it is a cut, not an adjustment.** Have the number written before the entry.
7. **Never sell the running expiry, and stay away from expiry day itself** — sell the next week's series.
8. **Never sell a cheap premium (₹10–40).** It doubles to ₹80 on no read and you cannot cut it.
9. **If the level is not there, there is no trade — even when it would have paid.** *"पैसा बनाना नहीं है,
   पैसा एक डिसिप्लिन से पैसा बनाना है."*
10. **Backtest first, expect losing streaks.** Two or three SL hits in a row inside a week is the normal
    texture of this product, not evidence the setup is broken.

### Day-specific only (don't overfit)
- Every strike, chart print and the ~one-month backtest window belong to Sept 2022 and are **archive data**;
  nothing from this session was routed to `levels-log/`.
- The specific strike distances (600/700/800) and the ₹200 premium band are Sept-2022 index-scale values —
  the *structure* (far OTM + SL at 200 index points) is the durable part, not the numbers.
- The Wednesday/expiry avoidance is a **writer's risk rule for a weekly-expiry market** — re-derive it if the
  expiry calendar changes.
