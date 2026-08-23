/**
 * Sync vault markdown → web/public/data/vault.json
 * Source of truth: daily/ (sessions), teaching/ (Sunday/concepts),
 * playbook/TRADING-BIBLE.md (durable rules from BOTH).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WEB_ROOT = path.resolve(__dirname, '..');
const VAULT_ROOT = path.resolve(WEB_ROOT, '..');
const OUT_DIR = path.join(WEB_ROOT, 'public', 'data');
const OUT_FILE = path.join(OUT_DIR, 'vault.json');

function readUtf8(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function extractMetaField(section, label) {
  const re = new RegExp(`\\*\\*${label}:\\*\\*\\s*(.+)`, 'i');
  const m = section.match(re);
  return m ? m[1].trim() : null;
}

function extractSubsection(section, heading) {
  for (const level of ['###', '##']) {
    const re = new RegExp(
      `${level}\\s+${heading}\\s*\\n([\\s\\S]*?)(?=\\n#{2,3}\\s+|$)`,
      'i',
    );
    const m = section.match(re);
    if (m) return m[1].trim();
  }
  return '';
}

function parseMarkdownTable(block) {
  const lines = block
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l.startsWith('|'));
  if (lines.length < 2) return [];

  const splitRow = (line) =>
    line
      .replace(/^\|/, '')
      .replace(/\|$/, '')
      .split('|')
      .map((c) => c.trim());

  const headers = splitRow(lines[0]).map((h) => h.toLowerCase());
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    if (/^\|?\s*:?-{3,}/.test(lines[i])) continue;
    const cells = splitRow(lines[i]);
    if (cells.every((c) => !c)) continue;
    const obj = {};
    headers.forEach((h, idx) => {
      obj[h || `col${idx}`] = cells[idx] ?? '';
    });
    rows.push(obj);
  }
  return rows;
}

function parseKeepPermanently(text) {
  if (!text) return [];
  const stripMd = (s) => s.replace(/\*\*/g, '').trim();
  const items = [];
  for (const line of text.split('\n')) {
    const m = line.match(/^\s*\d+\.\s+(.+)/);
    if (m) items.push(stripMd(m[1]));
    else {
      const bullet = line.match(/^\s*[-*]\s+(.+)/);
      if (bullet) items.push(stripMd(bullet[1]));
    }
  }
  return items;
}

function parsePlanByOpen(text) {
  const rows = parseMarkdownTable(text);
  return rows
    .map((r) => ({
      open: r.open || r['open'] || Object.values(r)[0] || '',
      plan: r.plan || Object.values(r)[1] || '',
    }))
    .filter((r) => r.open || r.plan);
}

function parseLevelsTable(text) {
  const rows = parseMarkdownTable(text);
  return rows
    .map((r) => ({
      index: r.index || '',
      resistance: r.resistance || r.level || '',
      support: r.support || r.role || '',
      extra: r.why || r.context || '',
    }))
    .filter((r) => r.index);
}

function sectionBetween(markdown, startRe, endRe) {
  const start = markdown.search(startRe);
  if (start === -1) return '';
  const from = markdown.slice(start);
  const endMatch = from.slice(1).search(endRe);
  if (endMatch === -1) return from.trim();
  return from.slice(0, endMatch + 1).trim();
}

/** First matching ## section among alternatives (order = preference). */
function firstSection(markdown, startPatterns) {
  for (const startRe of startPatterns) {
    const section = sectionBetween(markdown, startRe, /^##\s+/m);
    if (section) return section;
  }
  return '';
}

function summarize(text, maxLen = 220) {
  const cleaned = text
    .replace(/^#+\s+.*/gm, '')
    .replace(/\*\*/g, '')
    .replace(/\|.*\|/g, '')
    .replace(/\n+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (cleaned.length <= maxLen) return cleaned;
  return `${cleaned.slice(0, maxLen - 1).trim()}…`;
}

function parseDailyNote(filePath, fileName) {
  const raw = readUtf8(filePath);
  const dateMatch =
    fileName.match(/(\d{4}-\d{2}-\d{2})/) ||
    raw.match(/^#\s+(\d{4}-\d{2}-\d{2})/m);
  const date = dateMatch ? dateMatch[1] : fileName.replace(/\.md$/, '');

  const titleMatch = raw.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1].trim() : date;

  // Dual-track (IH pre / Live) preferred; legacy Pre-market / Post-market still supported.
  const pre = firstSection(raw, [
    /^##\s+IH\s+pre\b/im,
    /^##\s+Pre-market/im,
  ]);
  const post = firstSection(raw, [
    /^##\s+Live\s*\/\s*IH\s+post\b/im,
    /^##\s+Live\b/im,
    /^##\s+Post-market/im,
  ]);
  const vaultPre = firstSection(raw, [/^##\s+Vault\s+pre\b/im]);
  const vaultVsIh = firstSection(raw, [/^##\s+Vault\s+vs\s+IH\b/im]);

  const keepSource =
    extractSubsection(post, 'Keep permanently') ||
    extractSubsection(raw, 'Keep permanently(?:\\s*\\(playbook candidates\\))?') ||
    '';

  const planSource =
    extractSubsection(pre, 'Plan by open') ||
    extractSubsection(vaultPre, 'Plan by open') ||
    extractSubsection(raw, 'Plan by open') ||
    '';

  const levelsSource =
    extractSubsection(pre, 'Levels mentioned') ||
    extractSubsection(vaultPre, 'Levels watched') ||
    extractSubsection(raw, 'Key levels(?:\\s*\\(day-specific\\))?') ||
    extractSubsection(raw, 'Levels mentioned') ||
    '';

  const biasHeading = 'Bias & structure(?:\\s*\\([^)]*\\))?';
  const biasSource =
    extractSubsection(pre, biasHeading) ||
    extractSubsection(vaultPre, biasHeading) ||
    extractSubsection(raw, biasHeading) ||
    '';

  const whatHappenedHeading = 'What happened / what he did(?:\\s*\\([^)]*\\))?';

  return {
    id: date,
    date,
    fileName,
    kind: 'daily',
    weekly: false,
    title,
    summary: summarize(
      biasSource ||
        extractSubsection(post, whatHappenedHeading) ||
        raw,
    ),
    vaultPre: vaultPre
      ? {
          raw: vaultPre,
          bias: extractSubsection(vaultPre, biasHeading),
          planByOpen: parsePlanByOpen(
            extractSubsection(vaultPre, 'Plan by open') || '',
          ),
        }
      : null,
    pre: {
      raw: pre,
      video: extractMetaField(pre, 'Video'),
      url: extractMetaField(pre, 'URL'),
      duration: extractMetaField(pre, 'Duration'),
      bias: biasSource,
      planByOpen: parsePlanByOpen(planSource),
      levels: parseLevelsTable(levelsSource),
    },
    post: {
      raw: post,
      video: extractMetaField(post, 'Video'),
      url: extractMetaField(post, 'URL'),
      duration: extractMetaField(post, 'Duration'),
      whatHappened: extractSubsection(post, whatHappenedHeading),
      processLessons: extractSubsection(post, 'Process lessons'),
      keepPermanently: parseKeepPermanently(keepSource),
    },
    vaultVsIh: vaultVsIh ? { raw: vaultVsIh } : null,
    keepPermanently: parseKeepPermanently(keepSource),
    raw,
  };
}

function parseTeachingNote(filePath, fileName) {
  const raw = readUtf8(filePath);
  const weekly = /weekly/i.test(fileName) || /weekly/i.test(raw.slice(0, 200));
  const dateMatch =
    fileName.match(/(\d{4}-\d{2}-\d{2})/) ||
    raw.match(/^#\s+(\d{4}-\d{2}-\d{2})/m);
  const date = dateMatch ? dateMatch[1] : fileName.replace(/\.md$/, '');

  const titleMatch = raw.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1].trim() : date;

  const teachingSec = sectionBetween(raw, /^##\s+Teaching/im, /^##\s+/m);
  const body =
    teachingSec ||
    raw.replace(/^#\s+.+\n?/, '').trim();

  const keepSource =
    extractSubsection(raw, 'Keep permanently(?:\\s*\\(playbook candidates\\))?') ||
    '';

  const coreIdea =
    extractSubsection(raw, 'Core idea') ||
    extractSubsection(raw, 'Bias & structure') ||
    extractSubsection(raw, 'Psychology / inventory examples(?:\\s*\\(week review style\\))?') ||
    '';

  const slug = fileName.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-?/, '') || 'lesson';

  return {
    id: `${date}-teaching-${slug}`,
    date,
    fileName,
    kind: 'teaching',
    weekly,
    title,
    summary: summarize(coreIdea || body || raw),
    video: extractMetaField(body, 'Video') || extractMetaField(raw, 'Video'),
    url: extractMetaField(body, 'URL') || extractMetaField(raw, 'URL'),
    duration: extractMetaField(body, 'Duration') || extractMetaField(raw, 'Duration'),
    coreIdea,
    keepPermanently: parseKeepPermanently(keepSource),
    raw,
  };
}

function parseLevelsLog(filePath) {
  if (!fs.existsSync(filePath)) return [];
  const raw = readUtf8(filePath);
  const rows = parseMarkdownTable(raw);
  return rows
    .map((r) => ({
      date: r.date || '',
      index: r.index || '',
      level: r.level || '',
      context: r.context || '',
      source: r.source || '',
    }))
    .filter((r) => r.date && r.index);
}

function extractMorningCard(bible) {
  const m = bible.match(/##\s+14\.\s+Quick morning card[\s\S]*?```([\s\S]*?)```/);
  return m ? m[1].trim() : '';
}

function extractDecisionMatrix(bible) {
  const section = sectionBetween(
    bible,
    /^##\s+4\.\s+Open-type decision matrix/im,
    /^##\s+5\./m,
  );
  const tableMatch = section.match(/\| Inventory[\s\S]*?(?=\n###|\n##|$)/);
  if (!tableMatch) return { headers: [], rows: [], rawSection: section };

  const tableRows = parseMarkdownTable(tableMatch[0]);
  const headers = Object.keys(tableRows[0] || {}).filter((h) => h !== 'inventory');
  return {
    headers: ['inventory', ...headers],
    rows: tableRows,
    rawSection: section,
  };
}

function listMarkdown(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md') && f.toLowerCase() !== 'readme.md')
    .sort();
}

function main() {
  const dailyDir = path.join(VAULT_ROOT, 'daily');
  const teachingDir = path.join(VAULT_ROOT, 'teaching');
  const biblePath = path.join(VAULT_ROOT, 'playbook', 'TRADING-BIBLE.md');
  const levelsPath = path.join(VAULT_ROOT, 'levels-log', 'README.md');

  const days = listMarkdown(dailyDir).map((f) =>
    parseDailyNote(path.join(dailyDir, f), f),
  );
  days.sort((a, b) => a.date.localeCompare(b.date));

  const teachings = listMarkdown(teachingDir).map((f) =>
    parseTeachingNote(path.join(teachingDir, f), f),
  );
  teachings.sort((a, b) => a.date.localeCompare(b.date));

  const bibleMarkdown = fs.existsSync(biblePath) ? readUtf8(biblePath) : '';
  const levels = parseLevelsLog(levelsPath);

  const latestTrading = days.length ? days[days.length - 1].date : null;
  const latestTeaching = teachings.length
    ? teachings[teachings.length - 1].date
    : null;

  const vault = {
    generatedAt: new Date().toISOString(),
    sourceWindow: {
      dayCount: days.length,
      teachingCount: teachings.length,
      weeklyCount: teachings.filter((t) => t.weekly).length,
      latestDate: [latestTrading, latestTeaching].filter(Boolean).sort().pop() || null,
      latestTradingDate: latestTrading,
      latestTeachingDate: latestTeaching,
    },
    days,
    teachings,
    bible: {
      markdown: bibleMarkdown,
      morningCard: extractMorningCard(bibleMarkdown),
      decisionMatrix: extractDecisionMatrix(bibleMarkdown),
      permanentRules: parseMarkdownTable(
        sectionBetween(
          bibleMarkdown,
          /^##\s+12\.\s+Permanent rules ledger/im,
          /^##\s+13\./m,
        ),
      ),
      fedBy: ['daily/', 'teaching/'],
    },
    levels,
  };

  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(OUT_FILE, JSON.stringify(vault, null, 2), 'utf8');
  console.log(
    `Synced ${days.length} daily + ${teachings.length} teaching → ${path.relative(WEB_ROOT, OUT_FILE)}`,
  );
}

main();
