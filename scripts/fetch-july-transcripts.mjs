/**
 * Retry missing July transcripts with yt-dlp + long sleeps (avoid 429).
 */
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const MANIFEST = path.join(__dirname, 'july-missing-manifest.txt');
const RAW = path.join(ROOT, 'transcripts', '_raw');
const OUT = path.join(ROOT, 'transcripts');
const YTDLP =
  'C:\\Users\\Amit Rathi\\AppData\\Local\\Programs\\Python\\Python311\\Scripts\\yt-dlp.exe';

fs.mkdirSync(RAW, { recursive: true });
const sleep = (ms) => Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);

function parseManifest() {
  return fs
    .readFileSync(MANIFEST, 'utf8')
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith('#'))
    .map((l) => {
      const [date, kind, role, url, ...titleParts] = l.split('|');
      return { date, kind, role, url, title: titleParts.join('|') };
    });
}

function outName(item) {
  if (item.kind === 'teaching') {
    const slug = item.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
      .slice(0, 40);
    return `${item.date}-teaching-${slug}.md`;
  }
  return `${item.date}-${item.role}.md`;
}

function vttToLines(vtt) {
  const lines = [];
  for (const block of vtt.replace(/\r/g, '').split(/\n\n+/)) {
    const parts = block.split('\n').filter(Boolean);
    const timeLine = parts.find((p) => p.includes('-->'));
    if (!timeLine) continue;
    const start = timeLine.split('-->')[0].trim();
    const m = start.match(/(?:(\d+):)?(\d{2}):(\d{2})\.(\d+)/);
    if (!m) continue;
    const totalSec = Number(m[1] || 0) * 3600 + Number(m[2]) * 60 + Number(m[3]);
    const stamp =
      totalSec >= 60
        ? `${Math.floor(totalSec / 60)}:${String(totalSec % 60).padStart(2, '0')}`
        : `0:${String(totalSec).padStart(2, '0')}`;
    const text = parts
      .filter((p) => p !== timeLine && !/^\d+$/.test(p) && !p.startsWith('WEBVTT'))
      .join(' ')
      .replace(/<[^>]+>/g, '')
      .replace(/\s+/g, ' ')
      .trim();
    if (text) lines.push(`${stamp} | ${text}`);
  }
  const deduped = [];
  for (const line of lines) {
    const body = line.split(' | ').slice(1).join(' | ');
    const prev = deduped[deduped.length - 1];
    if (prev && prev.split(' | ').slice(1).join(' | ') === body) continue;
    deduped.push(line);
  }
  return deduped;
}

function fetchOne(item) {
  const name = outName(item);
  if (fs.existsSync(path.join(OUT, name))) {
    console.log('SKIP exists', name);
    return name;
  }
  const outTmpl = path.join(RAW, `${item.date}-${item.role}.%(ext)s`);
  // clean prior partials for this key
  for (const f of fs.readdirSync(RAW)) {
    if (f.startsWith(`${item.date}-${item.role}.`)) fs.unlinkSync(path.join(RAW, f));
  }
  const args = [
    '--skip-download',
    '--write-auto-sub',
    '--sub-langs',
    'hi.*,hi,en.*,en',
    '--sleep-requests',
    '2',
    '--sleep-subtitles',
    '3',
    '-o',
    outTmpl,
    item.url,
  ];
  let lastErr = '';
  for (let attempt = 1; attempt <= 4; attempt++) {
    const res = spawnSync(YTDLP, args, { encoding: 'utf8', timeout: 180000 });
    const candidates = fs
      .readdirSync(RAW)
      .filter((f) => f.startsWith(`${item.date}-${item.role}.`) && f.endsWith('.vtt'));
    if (candidates.length) {
      candidates.sort((a, b) => (a.includes('.hi') ? 0 : 1) - (b.includes('.hi') ? 0 : 1));
      const lines = vttToLines(fs.readFileSync(path.join(RAW, candidates[0]), 'utf8'));
      const header = `# Transcript: ${item.title} (${item.role})\n# URL: ${item.url}\n# Note: Auto-captions (ASR); levels can be slightly off.\n\n`;
      fs.writeFileSync(path.join(OUT, name), header + lines.join('\n') + '\n', 'utf8');
      console.log('OK', name, lines.length);
      return name;
    }
    lastErr = (res.stderr || '').slice(-300);
    console.error('RETRY', attempt, item.date, item.role, lastErr.slice(-120));
    sleep(20000 * attempt);
  }
  console.error('FAIL', item.date, item.role);
  return null;
}

const items = parseManifest();
const results = [];
for (const item of items) {
  results.push({ ...item, file: fetchOne(item) });
  sleep(12000);
}
fs.writeFileSync(path.join(__dirname, 'july-fetch-results.json'), JSON.stringify(results, null, 2));
console.log('Done', results.filter((r) => r.file).length, '/', results.length);
