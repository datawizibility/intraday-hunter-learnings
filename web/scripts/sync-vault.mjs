/**
 * Sync vault markdown → web/public/data/vault.json
 * Source of truth stays in the repo root (daily/, playbook/, levels-log/).
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
  // Prefer ### then fall back to ## (weekly notes use ## Keep permanently)
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
  return rows.map((r) => ({
    open: r.open || r['open'] || Object.values(r)[0] || '',
    plan: r.plan || Object.values(r)[1] || '',
  })).filter((r) => r.open || r.plan);
}

function parseLevelsTable(text) {
  const rows = parseMarkdownTable(text);
  return rows.map((r) => ({
    index: r.index || '',
    resistance: r.resistance || r.level || '',
    support: r.support || r.role || '',
    extra: r.why || r.context || '',
  })).filter((r) => r.index);
}

function sectionBetween(markdown, startRe, endRe) {
  const start = markdown.search(startRe);
  if (start === -1) return '';
  const from = markdown.slice(start);
  const endMatch = from.slice(1).search(endRe);
  if (endMatch === -1) return from.trim();
  return from.slice(0, endMatch + 1).trim();
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
  const weekly = /weekly/i.test(fileName);
  const dateMatch =
    fileName.match(/(\d{4}-\d{2}-\d{2})/) ||
    raw.match(/^#\s+(\d{4}-\d{2}-\d{2})/m);
  const date = dateMatch ? dateMatch[1] : fileName.replace(/\.md$/, '');

  const titleMatch = raw.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1].trim() : date;

  const pre = sectionBetween(raw, /^##\s+Pre-market/im, /^##\s+/m);
  const post = sectionBetween(raw, /^##\s+Post-market/im, /^##\s+/m);

  // Weekly notes often lack Pre/Post — treat whole body as content
  const bodyFallback = weekly && !pre && !post
    ? raw.replace(/^#\s+.+\n?/, '').trim()
    : '';

  const keepSource =
    extractSubsection(post, 'Keep permanently') ||
    extractSubsection(raw, 'Keep permanently(?:\\s*\\(playbook candidates\\))?') ||
    '';

  const planSource =
    extractSubsection(pre, 'Plan by open') ||
    extractSubsection(raw, 'Plan by open') ||
    '';

  const levelsSource =
    extractSubsection(pre, 'Levels mentioned') ||
    extractSubsection(raw, 'Key levels(?:\\s*\\(day-specific\\))?') ||
    extractSubsection(raw, 'Levels mentioned') ||
    '';

  const biasSource =
    extractSubsection(pre, 'Bias & structure') ||
    extractSubsection(raw, 'Bias & structure') ||
    '';

  return {
    id: date + (weekly ? '-weekly' : ''),
    date,
    fileName,
    weekly,
    title,
    summary: summarize(
      biasSource ||
        extractSubsection(post, 'What happened / what he did') ||
        bodyFallback ||
        raw,
    ),
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
      whatHappened: extractSubsection(post, 'What happened / what he did'),
      processLessons: extractSubsection(post, 'Process lessons'),
      keepPermanently: parseKeepPermanently(keepSource),
    },
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

function main() {
  const dailyDir = path.join(VAULT_ROOT, 'daily');
  const biblePath = path.join(VAULT_ROOT, 'playbook', 'TRADING-BIBLE.md');
  const levelsPath = path.join(VAULT_ROOT, 'levels-log', 'README.md');

  const dailyFiles = fs
    .readdirSync(dailyDir)
    .filter((f) => f.endsWith('.md'))
    .sort();

  const days = dailyFiles.map((f) =>
    parseDailyNote(path.join(dailyDir, f), f),
  );
  days.sort((a, b) => a.date.localeCompare(b.date) || Number(a.weekly) - Number(b.weekly));

  const bibleMarkdown = fs.existsSync(biblePath) ? readUtf8(biblePath) : '';
  const levels = parseLevelsLog(levelsPath);

  const vault = {
    generatedAt: new Date().toISOString(),
    sourceWindow: {
      dayCount: days.filter((d) => !d.weekly).length,
      weeklyCount: days.filter((d) => d.weekly).length,
      latestDate: days.length ? days[days.length - 1].date : null,
    },
    days,
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
    },
    levels,
  };

  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(OUT_FILE, JSON.stringify(vault, null, 2), 'utf8');
  console.log(
    `Synced ${days.length} notes → ${path.relative(WEB_ROOT, OUT_FILE)}`,
  );
}

main();
