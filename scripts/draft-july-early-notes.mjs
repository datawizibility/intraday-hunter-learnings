/**
 * Build draft daily notes for Jul 1-17 from transcripts.
 * Extracts plan keywords + level-like numbers; human polish applied after.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DATES = [
  '2026-07-01',
  '2026-07-02',
  '2026-07-03',
  '2026-07-06',
  '2026-07-07',
  '2026-07-08',
  '2026-07-09',
  '2026-07-10',
  '2026-07-13',
  '2026-07-14',
  '2026-07-15',
  '2026-07-16',
  '2026-07-17',
];

const URLS = {
  '2026-07-01': { pre: 'https://www.youtube.com/watch?v=yVFhGqGCjMc', post: 'https://www.youtube.com/watch?v=Jj9yec-QDvI' },
  '2026-07-02': { pre: 'https://www.youtube.com/watch?v=kW5phlWuMKM', post: 'https://www.youtube.com/watch?v=WhfVxV0h5bo' },
  '2026-07-03': { pre: 'https://www.youtube.com/watch?v=2vO3onLbhPc', post: 'https://www.youtube.com/watch?v=BvkCsOgkigI' },
  '2026-07-06': { pre: 'https://www.youtube.com/watch?v=F9APQ4MnAcA', post: 'https://www.youtube.com/watch?v=ohxweLy3H2Q' },
  '2026-07-07': { pre: 'https://www.youtube.com/watch?v=P3dFob-ZHtw', post: 'https://www.youtube.com/watch?v=pEXtxlA1u-k' },
  '2026-07-08': { pre: 'https://www.youtube.com/watch?v=DTd4Mtz1ppg', post: 'https://www.youtube.com/watch?v=4oV5tP8nzv4' },
  '2026-07-09': { pre: 'https://www.youtube.com/watch?v=_y-hk-sl-aQ', post: 'https://www.youtube.com/watch?v=n1wA3JVP7sk' },
  '2026-07-10': { pre: 'https://www.youtube.com/watch?v=LoT91UMHeVo', post: 'https://www.youtube.com/watch?v=sImrqns7fBo' },
  '2026-07-13': { pre: 'https://www.youtube.com/watch?v=qjz6uAM81Jg', post: 'https://www.youtube.com/watch?v=OvqxvtVbZFU' },
  '2026-07-14': { pre: 'https://www.youtube.com/watch?v=xssPyxt65Mc', post: 'https://www.youtube.com/watch?v=DuaQYSrYK2U' },
  '2026-07-15': { pre: 'https://www.youtube.com/watch?v=40j_l5DtwS4', post: 'https://www.youtube.com/watch?v=ciQ19XPXoXk' },
  '2026-07-16': { pre: 'https://www.youtube.com/watch?v=1uB29qR9V0A', post: 'https://www.youtube.com/watch?v=ojc_NGulszU' },
  '2026-07-17': { pre: 'https://www.youtube.com/watch?v=hGWenJz7Us4', post: 'https://www.youtube.com/watch?v=xTwmjkvkrQQ' },
};

function body(text) {
  return text
    .split('\n')
    .filter((l) => l.includes('|'))
    .map((l) => l.split('|').slice(1).join('|').trim())
    .join(' ');
}

function extractLevels(text) {
  // Capture clusters like 57680 57820 or 24,480
  const nums = [...text.matchAll(/\b(\d{2}[,.]?\d{3}|\d{5,6})\b/g)].map((m) =>
    m[1].replace(/,/g, ''),
  );
  const uniq = [...new Set(nums)].slice(0, 12);
  return uniq;
}

function summarizePlan(preText) {
  const t = preText.toLowerCase();
  const rows = [];
  const buy =
    t.includes('बाइंग') ||
    t.includes('buying') ||
    t.includes('कॉल') ||
    (t.includes('साथ') && t.includes('गैप अप'));
  const sell =
    t.includes('सेलिंग') ||
    t.includes('selling') ||
    t.includes('टारगेट बना') ||
    t.includes('बायर को');

  if (t.includes('गैप अप') || t.includes('gap up') || t.includes('गैपअप')) {
    if (t.includes('टारगेट') && (t.includes('बायर') || t.includes('buyer'))) {
      rows.push(['Gap-up', 'Often **sell** / target buyers (or follow if he says don’t hunt into profit) — see bias']);
    } else if (buy) {
      rows.push(['Gap-up', 'Follow → **buy** setups']);
    } else {
      rows.push(['Gap-up', 'See bias — open-dependent']);
    }
  }
  if (t.includes('फ्लैट') || t.includes('flat')) {
    rows.push(['Flat', sell && !buy ? 'Identify **sell** setups' : buy ? 'Identify **buy** setups' : 'Follow open / tape']);
  }
  if (t.includes('गैप डाउन') || t.includes('गैपडाउन') || t.includes('gap down')) {
    rows.push(['Gap-down', sell ? 'Identify **sell** setups / follow' : 'Follow market; ignore huge gap-down if said']);
  }
  if (t.includes('बड़े गैप') || t.includes('इग्नोर')) {
    rows.push(['Large gap-down', '**Ignore** / no force (if stated)']);
  }
  if (!rows.length) rows.push(['(open)', 'See transcript — ASR plan unclear']);
  return rows;
}

function biasBullets(preText) {
  const bullets = [];
  const t = preText;
  if (/साइडवेज|sideways|रेंज/i.test(t)) bullets.push('Prior structure includes sideways / range context.');
  if (/पॉजिटिव|positive|ऊपर/i.test(t)) bullets.push('Positive / upside momentum discussed.');
  if (/नेगेटिव|negative|सेल/i.test(t)) bullets.push('Selling / negative pressure discussed.');
  if (/बायर|buyer/i.test(t)) bullets.push('Buyers may be sitting — inventory plan hinges on open type.');
  if (/सेलर|seller/i.test(t)) bullets.push('Sellers may be sitting / relevant to open plan.');
  if (/एक्सपायरी|expiry/i.test(t)) bullets.push('Expiry day context mentioned.');
  if (!bullets.length) bullets.push('See pre transcript for inventory + structure (ASR).');
  return bullets.slice(0, 5);
}

function postSummary(postText) {
  const t = postText.toLowerCase();
  const lines = [];
  if (/गैप अप|gap up/.test(t)) lines.push('Opened with **gap-up** context.');
  if (/गैप डाउन|गैपडाउन|gap down/.test(t)) lines.push('Opened with **gap-down** context.');
  if (/फ्लैट|flat/.test(t)) lines.push('Opened near **flat**.');
  if (/कॉल|call/.test(t)) lines.push('Worked **calls** / buy side in the session.');
  if (/पुट|put/.test(t)) lines.push('Worked **puts** / sell side in the session.');
  if (/बुकिंग|book|प्रॉफिट/.test(t)) lines.push('Took profit / booked when path or target was enough.');
  if (/लॉस|loss|कट/.test(t)) lines.push('Managed / cut risk when thesis broke (or discussed loss handling).');
  if (!lines.length) lines.push('See post transcript for live execution (ASR).');
  return lines.slice(0, 6);
}

function keepItems(preText, postText) {
  const items = [];
  const all = (preText + ' ' + postText).toLowerCase();
  if (/टारगेट.*बायर|बायर.*टारगेट/.test(all)) {
    items.push('Inventory of sitting buyers + open type decides whether to hunt or ride.');
  }
  if (/बड़े गैप|इग्नोर/.test(all)) {
    items.push('Huge gap can reset the prior map — don’t force yesterday’s plan.');
  }
  if (/निफ्टी|ससेक्स|sensex|bank/.test(all)) {
    items.push('Cross-check companions; don’t overhold a one-index story.');
  }
  if (/एक्सपायरी|expiry/.test(all)) {
    items.push('On expiry, prefer earlier booking / tighter path.');
  }
  if (items.length < 2) {
    items.push('Direction thesis first; exit when mapped path ends or continuous adverse move.');
  }
  return items.slice(0, 3);
}

for (const date of DATES) {
  const prePath = path.join(ROOT, 'transcripts', `${date}-pre.md`);
  const postPath = path.join(ROOT, 'transcripts', `${date}-post.md`);
  const preRaw = fs.readFileSync(prePath, 'utf8');
  const postRaw = fs.readFileSync(postPath, 'utf8');
  const preBody = body(preRaw);
  const postBody = body(postRaw);
  const urls = URLS[date];
  const levels = extractLevels(preBody);
  const plan = summarizePlan(preBody);
  const bias = biasBullets(preBody);
  const what = postSummary(postBody);
  const keep = keepItems(preBody, postBody);

  // crude level table: pair consecutive nums as R then S guesses — mark ASR
  let levelTable = '| Index | Resistance | Support |\n|-------|------------|---------|\n| (ASR) | see transcript number clusters | treat digits carefully |\n';
  if (levels.length >= 4) {
    levelTable = `| Index | Levels heard (ASR — verify) |\n|-------|------------------------------|\n| Mixed | ${levels.slice(0, 8).join(' / ')} |\n`;
  }

  const md = `# ${date} — Pre + Post market

## Pre-market
**Video:** Prediction For ${date.slice(8)} JULY 2026  
**URL:** ${urls.pre}  
**Duration:** (see YouTube)  
**Transcript:** \`transcripts/${date}-pre.md\`

### Bias & structure
${bias.map((b) => `- ${b}`).join('\n')}

### Plan by open
| Open | Plan |
|------|------|
${plan.map(([o, p]) => `| ${o} | ${p} |`).join('\n')}

### Levels mentioned
${levelTable}
\*Hindi ASR; trailing digits often wrong — verify on chart.

---

## Post-market (live)
**Video:** Live Bank Nifty Option Trading  
**URL:** ${urls.post}  
**Duration:** (see YouTube)  
**Transcript:** \`transcripts/${date}-post.md\`

### What happened / what he did
${what.map((w) => `- ${w}`).join('\n')}

### Process lessons
- Match live open to pre inventory map; don’t invent a counter-trade.
- Book when known path is done; cut when continuous adverse + companions join.

### Keep permanently
${keep.map((k, i) => `${i + 1}. ${k}`).join('\n')}

### Day-specific only
- Exact sizes/strikes and ASR levels are session-specific.
`;

  fs.writeFileSync(path.join(ROOT, 'daily', `${date}.md`), md, 'utf8');
  console.log('wrote', date);
}
