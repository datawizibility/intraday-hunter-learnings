# 2021-12-11 — Teaching: Volume Profile Indicator Explained | Price Action Trading

Educational notes only — not SEBI advice. Your risk rules win.

**Corpus note:** this is the **earliest video in the corpus** — it was not in the indexed
"Sunday Special" playlist. It was recovered by a channel-wide scan on 2026-10-31
(`source: channel-backcatalogue`, public, 1440s). Chronologically it now sits **before**
`2022-01-30` — i.e. before the stop-loss-hunting framework that later became the spine.

## Teaching
**Video:** VOLUME PROFILE INDICATOR EXPLAINED | PRICE ACTION TRADING — session, 11 DEC 2021 (archive video, transcript read in full)
**URL:** https://www.youtube.com/watch?v=mw9kXMUlwQg
**Transcript:** Hindi ASR of `mw9kXMUlwQg` — `transcripts/2021-12-11-teaching-mw9kXMUlwQg.md`

### Core idea
- **Volume profile is volume measured by PRICE, not by time.** A normal volume pane answers
  "how much traded in this 5-minute candle"; the profile answers "how much traded *at this
  price*". The price where the most volume traded becomes the heaviest line on the profile.
- **That heavy band is support/resistance — and it is a BAND, not a line.** Size cannot be
  filled at one limit price, so a large participant accumulates across a **price range**;
  the range where he did that is what he defends, and it is what price later respects.
- **Support/resistance is not drawn, it is deposited.** His framing: an institution holding
  size inside a price zone has to leave that zone gradually, so the zone behaves as an edge
  until its size is exhausted — that is why price reacts there.
- **Index charts have no volume ⇒ use the futures chart.** Nifty / Bank Nifty *spot* show no
  volume, so the indicator draws nothing useful on them; he loads the **Bank Nifty futures**
  chart for intraday index work, and a stock's own chart for stock work.
- **The band is a probability aid, not a certainty.** Used together with normal
  support/resistance (the price where candles keep reversing) it lifts the confidence of the
  trade — he explicitly warns that nothing is 100%, and tells the learner to test it on
  **3–5 days**, never one.

### How he installs it (setup, as spoken)
- Trading software → the indicator column → click **Fixed-Range Volume Profile**, then drag
  the drawing from the chart's start point to the end point of the range being studied →
  a support/resistance profile is drawn.
- The indicator is available on free charting (TradingView free tier) and in the broker's
  trading software (Zerodha and similar). If it is not visible, it is added from the
  indicator/study menu.
- For **stocks** it can be applied directly on the stock's chart; for **intraday index**
  trading the futures chart is required (see the no-volume problem above).

### What the profile actually tells you (as he defines it)
- *"वॉल्यूम प्रोफाइल अब एक पर्टिकुलर प्राइस पर कितना वॉल्यूम प्रैंक हुआ है"* — the profile
  is the volume **traded at a particular price**; the longest line is the price that saw the
  most trading.
- The longest line is the price of maximum acceptance. He names it loosely — ASR renders it
  *"पावर कंट्रोल"* / *"पियो"* (i.e. the POC / point-of-control idea). **The name is garbled;
  the meaning — heaviest traded price — is not.**
- Difference he states plainly: **plain volume = volume per time** (which 5-minute candle had
  the most), **volume profile = volume per price**. The two answer different questions.
- Because the heaviest trading happened there, that price is where buyers and sellers agreed
  — which is exactly why it later acts as a reference level.

### Why the band, not the line, is the level
- A large buyer taking 10,000 / 20,000 quantity **cannot** be filled at a single limit price;
  he buys some quantity, price slips, he buys more, price slips again, he keeps buying — the
  average fills spread across a range.
- The consequence: the zone where those fills sit is where his position lives. If price
  returns there, he does not get out at the exact line — the zone as a whole is his exit
  area, and price respects the **zone**.
- Practical read he gives: **price opening just above the band ⇒ the band is support ⇒ look
  for buy-side positions; price sitting below the band ⇒ the band is resistance ⇒ look for
  sell-side positions.** *"इससे जस्ट ऊपर ओपन होगा तो मैं बायसाइकिल पोर्शन बनाना चाहिए और इसे
  नीचे रहता है तो में फ्लाइट की पोर्शन बनाना चाहिए"* (ASR: "bicycle position" = buy-side
  position, "flight position" = sell-side position).
- **The line itself is not a hard order level.** *"सपोर्ट रेजिस्टेंस कोई वह नहीं है कि पीछे से
  बनकर आते हैं वह क्या है कि किसी पर्टिकुलर का इंटरेस्ट"* — S/R does not come into being by
  being drawn; it comes from someone's **interest (position) sitting in a price zone**. Draw
  the band, then let normal price action confirm it.
- How he states the index/no-volume problem: *"अगर आप स्पोर्ट्स लगाएंगे तो यहां पर पिंपल
  वॉल्यूम नहीं होता बैंक निफ्टी को सपोर्ट चार्ट में वॉल्यूम नहीं नजर आता है"*, and the fix:
  *"अगर आपको बैंक निफ्टी में लगाना है तो सबसे पहले आप बैंक निफ्टी फ्यूचर चार्ट को लगा लीजिए"*.
- Direction read from the band: *"तो यही सपोर्ट की तरह काम करेगा अगर यह नीचे की तरफ स्ट्रैट
  कर रहा है यह रेजिस्टेंस की तरह काम करेगा"* — above the band = support, below the band =
  resistance.

### Which range do you draw? (intraday range selection)
- **Same-day profile:** the session running from the day's first candle to now — usable while
  the day is still building.
- **When the day has already run / is exhausted**, the day's own profile is of little use
  (*"आलरेडी बहुत ज्यादा खून है"* — the move is already spent) — then switch to the
  **previous day's** profile, and if needed the **day before that**.
- **If even the previous day's candles are clustered** (a tight, compressed day), extend the
  drawing across the multi-day range that contains the actual move — the band of the wider
  range is the one that works.
- **Gaps are handled by waiting, not by guessing:** on a gap-down open, do **not** treat the
  nearest support as the entry. Let price cross/clear the lower band, then take the trade on
  the **retest** of the cleared band (mirror logic for a gap-up). His words describe letting
  the level break first and taking the position only after the retest confirms.
- The whole point of the exercise is to know *whether the S/R he is about to use will
  actually work* — the profile is used as a confirmation filter on top of normal chart
  support/resistance, not as a replacement for it.

### Probability, not certainty (his explicit caution)
- *"रहेगी सौ परसेंट कुछ नहीं होता लेकिन आपको प्रॉपर्टी आईएस जाती है"* — nothing is 100%;
  what improves is the probability, and with the probability the reward also improves.
- Self-test asked of the learner: *"आपको लगाकर दो या तीन से चार दिन सेक्रेट चार दिन 5 दिन
  जहां मर्जी आप टेस्ट कर सकते हो"* — apply it for 2–4 (up to 5) days and judge the feedback
  yourself; do not conclude from one day.
- He also promises follow-ups (a dedicated support/resistance video "next Saturday", and
  another video for using it when the profile is unreadable) — a sign the S/R method itself
  was still being taught piece by piece at this point.

### Numbers / levels — ASR fidelity
- **No index level, strike or target from this session is usable.** The digit strings the
  ASR produced — `1820`, `150 के ऊपर 150`, `370 72 A37`, `409`, `518`, `122`, `125`, `30 1962`
  — are unlabelled and mutually inconsistent; the surrounding sentences are corrupt and the
  screen values cannot be reconstructed. **Nothing goes to `levels-log/`.**
- The quantity/premium figures `10,000`, `20,000`, `₹500`, `400 की रेंज` are spoken as an
  *illustration of how a large buyer accumulates across a range* — they are not levels, not
  a size prescription and not a live trade.
- **Trade outcome:** he refers to a profitable trade taken near a profile band ("last time I
  booked profit here"), but **no figure, entry, exit or date survives the ASR** — recorded as
  qualitative only, not as a verified outcome. No P&L claim is reproduced.
- The chart was a December-2021 Bank Nifty futures session; **every level on screen is
  day-specific** and is deliberately not carried forward.

### Evolution vs earlier
- **🔵 NEW — this is the new chronological first entry of the corpus** (11 DEC 2021). It
  predates `2022-01-30`, so nothing earlier exists to compare against; the whole note is
  baseline material.
- 🔵 **NEW:** volume-by-price (volume profile) as the mechanism behind support and resistance.
- 🔵 **NEW:** the *zone vs line* distinction — a band is a level because size was accumulated
  across a range, not because a line was drawn.
- 🔵 **NEW:** the index-has-no-volume problem and the futures-chart workaround for intraday
  index work.
- 🔵 **NEW (method stance):** "nothing is 100% — the profile raises probability and reward" —
  the earliest statement in the corpus that an edge is probabilistic. The later 2022-era
  teaching states the same principle at the level of the whole system (see the 2026-09-13
  edge session); here it is stated about a *single indicator*, a year earlier.
- ⚠️ **Not yet present at this date** (worth remembering when reading 2022–2023 entries as
  "the beginning"): no stop-loss hunting, no stop-loss pools, no operator framing, no
  pre-defined trade count, no risk–reward rule. Those arrive with the Sunday Special series
  from 2022-01-30 onwards. **This session is a tool lesson, not yet a process.**

### Keep permanently
1. **Volume profile measures volume by PRICE; a volume pane measures it by TIME.** Use the
   profile when the question is "where did the market do business", not "when".
2. **A price band, not a line, is the level** — large size is filled across a range, and the
   range is what gets defended.
3. **Support/resistance exists because a position sits there**, not because a line was drawn.
   If you cannot say whose position is in the zone, treat the level as unconfirmed.
4. **On indices, open the FUTURES chart** (Nifty / Bank Nifty) before applying the profile —
   the spot index has no volume and the indicator is blind there.
5. **Price above the band = support, price below the band = resistance** — use the side to
   decide whether to build a buy-side or a sell-side position.
6. **Draw the range deliberately:** same-day profile while the day is fresh; previous day (and
   the day before) once the day is spent; extend the range when the last day was compressed.
7. **On a gap, wait for the break and the retest** — do not buy the nearest support into a
   gap-down open.
8. **Use the profile as a confirmation filter on top of normal price action**, never as a
   replacement for the chart's own support/resistance.
9. **Nothing is 100%** — the profile improves probability and reward; size and discipline
   still carry the risk.
10. **Test any new tool over 3–5 sessions, never one** — one day cannot tell you whether the
    level works.

### Day-specific only (don't overfit)
- The December-2021 Bank Nifty futures bands, the illustrated quantities (10,000 / 20,000)
  and the narrated profitable trade belong to that week's chart and are **not** carried
  forward as levels or as a sizing example.
- The specific platform menus (TradingView study name, broker software) are era-specific UI
  details; the *method* (volume by price, futures chart, band + confirmation) is what is kept.
