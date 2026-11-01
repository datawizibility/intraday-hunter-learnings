#!/usr/bin/env python3
"""find_next_teaching.py — replacement for the lost process_ih_teaching.py --next.

Diffs the Intraday Hunter channel uploads playlist against the repo's transcripts/ filenames
(which carry the video id) and prints the EARLIEST unprocessed PUBLIC teaching-looking videos,
ordered by real upload date.

Usage:
  HV=/data/data/com.termux/files/usr/lib/hermes-agent/app/venv/bin/python
  $HV find_next_teaching.py                 # next 5 candidates
  $HV find_next_teaching.py --n 3

Requires: yt-dlp on PATH, a GitHub token at $GH_TOKEN or the default path below.
"""
import argparse, json, os, re, subprocess, urllib.request

TOKEN_PATH = os.environ.get('GH_TOKEN_FILE',
                            '/data/data/com.termux/files/home/.hermes/secrets/github_token.txt')
OWNER, REPO = 'datawizibility', 'intraday-hunter-learnings'
# Sunday Special playlist — DO NOT use the uploads playlist id (UU…) for the corpus list
PLAYLIST = os.environ.get('IH_PLAYLIST', 'PLcbK387FUOqab1UXSFecGQYkDAcuhjFSE')
UPLOADS = 'UUJq6I2JomkH1V9Arzv9VKyg'
DAILY_PAT = re.compile(r'Prediction For|Live Bank Nifty Option Trading', re.I)


def gh(url):
    tok = open(TOKEN_PATH).read().strip()
    r = urllib.request.Request(url, headers={'Authorization': 'token ' + tok,
                                             'User-Agent': 'hermes'})
    return json.load(urllib.request.urlopen(r, timeout=120))


def done_ids():
    ids = set()
    for e in gh(f'https://api.github.com/repos/{OWNER}/{REPO}/contents/transcripts?ref=main'):
        m = re.search(r'teaching-([A-Za-z0-9_-]{11})\.md$', e['name'])
        if m:
            ids.add(m.group(1))
    # legacy transcripts without the id in the filename (e.g. 2022-01-30-teaching-stoploss-identification.md)
    for e in gh(f'https://api.github.com/repos/{OWNER}/{REPO}/contents/teaching?ref=main'):
        pass
    return ids


def ytdlp(args):
    return subprocess.run(['yt-dlp', '--no-warnings'] + args,
                          capture_output=True, text=True, timeout=900).stdout


def playlist_ids(pl):
    out = ytdlp(['--flat-playlist', '--print', '%(id)s|%(title)s',
                 f'https://www.youtube.com/playlist?list={pl}'])
    rows = []
    for ln in out.splitlines():
        if '|' in ln:
            vid, title = ln.split('|', 1)
            rows.append((vid.strip(), title.strip()))
    return rows


def upload_date(vid):
    out = ytdlp(['--skip-download', '--print', '%(upload_date)s|%(availability)s',
                 f'https://www.youtube.com/watch?v={vid}'])
    ln = out.strip().splitlines()[-1] if out.strip() else ''
    parts = ln.split('|')
    if len(parts) == 2:
        return parts[0], parts[1]
    return '', 'unknown'


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--n', type=int, default=5)
    ap.add_argument('--scan-cap', type=int, default=40,
                    help='how many oldest candidates to date-resolve (each costs one yt-dlp call)')
    args = ap.parse_args()

    done = done_ids()
    pl = {v for v, _ in playlist_ids(PLAYLIST)}
    print(f'done teaching ids in repo: {len(done)}   sunday-special playlist: {len(pl)}')

    cand = []
    for vid, title in playlist_ids(UPLOADS):
        if vid in pl or vid in done or DAILY_PAT.search(title) or title == 'NA':
            continue
        cand.append((vid, title))
    # the uploads playlist is chronological NEWEST-FIRST, so the oldest work sits at the end —
    # reverse it and the remaining (old) candidates come first, which is what "next" means.
    cand.reverse()
    print(f'candidates not in the playlist and not processed: {len(cand)}'
          f'  (date-resolving the oldest {min(args.scan_cap, len(cand))})')

    dated = []
    for vid, title in cand[:args.scan_cap]:
        d, avail = upload_date(vid)
        dated.append((d or '99999999', vid, title, avail))
        print(f'  {d or "??"}  {vid}  {avail:<11} {title[:70]}')
    dated.sort()
    print('\n--- NEXT (earliest unprocessed, public) ---')
    shown = 0
    for d, vid, title, avail in dated:
        if avail != 'public':
            print(f'  SKIP {d} {vid} ({avail}) {title[:60]}')
            continue
        iso = f'{d[:4]}-{d[4:6]}-{d[6:]}' if len(d) == 8 else '????-??-??'
        print(f'  {iso}  {vid}  {title}')
        shown += 1
        if shown >= args.n:
            break


if __name__ == '__main__':
    main()
