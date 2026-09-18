# Teaching Corpus — rebuild progress

Rebuilding the **191-video "Sunday Special" teaching corpus** in **chronological order**
so the evolution of the process can be seen over time. The bible was previously built almost
only from recent daily notes; this is the other half.

**See [`playbook/EVOLUTION.md`](../playbook/EVOLUTION.md) for the concept timeline.**

| | |
|---|---|
| Corpus | **191 videos** |
| Processed | **1** |
| Remaining | **190** |
| Span | 2022-01-30 → 2026-09-13 (4.6 years) |
| Method | chronological, one at a time |

## By year
| Year | Videos |
|---|---|
| 2022 | 39 |
| 2023 | 32 |
| 2024 | 57 |
| 2025 | 30 |
| 2026 | 21 |

## Processed so far
- `20220130` **HOW TO FIND STOPLOSS IN STOCK MARKET | PRICE ACTION TRADING** — [`rz5tQaWLfgo`](https://www.youtube.com/watch?v=rz5tQaWLfgo)

## Next up (chronological)
1. `20220206` **HOW TO FIND STOPLOSS IN STOCK MARKET | PRICE ACTION TRADING**
2. `20220213` **How To Trade in  Stock Market Using Stoploss**
3. `20220219` **PRICE ACTION VS INDICATORS | REALITY OF INTRADAY STOCK MARKET**
4. `20220220` **IMPACT OF NEWS ON STOCK MARKET | HARSH REALITY BEHIND**
5. `20220227` **Price Action Trading Masterclass By Intraday Hunter**
6. `20220306` **How to Draw Support and Resistance Levels For Intraday Trading**
7. `20220320` **How To Trade with Psychology Levels | Intraday Trading Psychology By I**
8. `20220402` **Why Price Action Not Work in Live Stock Market | Intraday Psychology B**

## ⚠️ 12 videos could not be dated
These are **parked at the end** and flagged rather than guessed, so they cannot silently
corrupt the chronology:

- `447jPTMmXdQ` Breakout or Breakdown? Master Support & Resistance Strength
- `8PL4DB9U_M4` Stock Market में रिट्रेसमेंट या रिवर्सल से कैसे बढ़ाएं PROFIT?
- `B0nQv4uZo5k` NA
- `DHMxl-xWff0` Revenge Trading: Stock Market में हार के बाद बदला? ये सबसे बड़ी गलती ह
- `I5JQIU5p8ck` NA
- `Nlw85C_wufs` SL Hunting का पूरा खेल! Operators कैसे आपकी Position Hunt करते हैं?
- `fRFseZ3vKOM` Stock Market में मास्टर माइंड:  ट्रेडर कैसे काम करते हैं
- `j4KAX1XcIqE` Best Time To Trade In Intraday Trading | Intraday Hunter
- `m79HfFq8ibY` What Happens to the Market When SL Is Hit or Created?
- `o1cU-YPL9pc` SL Hunting और Entry Rules: Market में Entry का सही Time | By Intraday 
- `p_7bmZYaF2o` Stock Market Charts पढ़ने का आसान तरीका: SL Hunting के साथ Success!
- `vf2GwtMy5sY` Golden Rules of Trading: हर Trade को फायदे में बदलें! By Intraday Hunt

## Automation
A daily cron (`IH Teaching Corpus — chronological rebuild`, 09:30 IST) processes the next
3 unprocessed videos: transcript → teaching note → GitHub + Drive → evolution entry.
Run it by hand any time:

```bash
HV=/data/data/com.termux/files/usr/lib/hermes-agent/app/venv/bin/python
cd ~/tmpsearch/ih_teaching
$HV process_ih_teaching.py --status      # where are we
$HV process_ih_teaching.py --next        # fetch the next one
$HV process_ih_teaching.py --mark <id>   # mark done after the note is pushed
```
