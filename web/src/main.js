import { marked } from 'marked';
import './style.css';
import {
  INVENTORY_OPTIONS,
  OPEN_OPTIONS,
  decide,
  matrixRows,
} from './matrix.js';

marked.setOptions({ gfm: true, breaks: false });

const QUIZ_KEY = 'ih-learning-quiz-v1';
const CHECKLIST_KEY = 'ih-morning-checklist-v1';

const state = {
  vault: null,
  quizzes: null,
  route: { name: 'home' },
  selectedDayId: null,
  selectedTeachingId: null,
  quiz: {
    index: 0,
    answered: null,
    order: [],
  },
};

function $(sel, root = document) {
  return root.querySelector(sel);
}

function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

function escapeHtml(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function md(markdown) {
  return marked.parse(markdown || '');
}

function loadQuizProgress() {
  try {
    return JSON.parse(localStorage.getItem(QUIZ_KEY) || '{}');
  } catch {
    return {};
  }
}

function saveQuizProgress(data) {
  localStorage.setItem(QUIZ_KEY, JSON.stringify(data));
}

function parseRoute() {
  const hash = location.hash.replace(/^#/, '') || 'home';
  const [name, ...rest] = hash.split('/');
  if (name === 'day' && rest[0]) {
    return { name: 'days', dayId: decodeURIComponent(rest[0]) };
  }
  if (name === 'teaching' && rest[0]) {
    return { name: 'teachings', teachingId: decodeURIComponent(rest[0]) };
  }
  return { name: name || 'home', dayId: null, teachingId: null };
}

function navigate(hash) {
  location.hash = hash;
}

function latestDaily(vault) {
  const dailies = (vault.days || []).filter((d) => d.kind !== 'teaching' && !d.weekly);
  return dailies.length ? dailies[dailies.length - 1] : null;
}

function teachingsList(vault) {
  return [...(vault.teachings || [])].sort((a, b) => b.date.localeCompare(a.date));
}

function morningLines(vault) {
  const card = vault.bible.morningCard || '';
  return card
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);
}

function renderShell() {
  const app = $('#app');
  app.innerHTML = `
    <header class="site-header">
      <div class="header-inner">
        <div class="brand">
          <div class="brand-name">Intraday Hunter</div>
          <div class="brand-tag">Learning Lab</div>
        </div>
        <div class="disclaimer-pill">Educational only · Not SEBI advice · Your risk rules win</div>
      </div>
      <nav class="nav" aria-label="Primary">
        <button type="button" data-route="home">Today</button>
        <button type="button" data-route="days">Day log</button>
        <button type="button" data-route="teachings">Teachings</button>
        <button type="button" data-route="playbook">Playbook</button>
        <button type="button" data-route="trainer">Decision trainer</button>
        <button type="button" data-route="quiz">Quiz</button>
        <button type="button" data-route="levels">Levels</button>
      </nav>
    </header>
    <main id="view"></main>
    <footer class="site-footer">
      Process education from personal vault notes. Channel is not SEBI-registered.
      Do not treat this UI as trading advice or live signals.
    </footer>
  `;

  app.querySelectorAll('.nav button').forEach((btn) => {
    btn.addEventListener('click', () => navigate(btn.dataset.route));
  });
}

function setActiveNav(name) {
  document.querySelectorAll('.nav button').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.route === name);
  });
}

function renderHome(view) {
  const day = latestDaily(state.vault);
  const lines = morningLines(state.vault);
  const checked = JSON.parse(localStorage.getItem(CHECKLIST_KEY) || '{}');
  const keep = day?.keepPermanently || [];

  view.innerHTML = `
    <section class="hero">
      <h1>Learn the process, not the signal.</h1>
      <p class="lede">
        Weekday sessions for execution reps; Sunday teachings for the experience behind the matrix.
        Both feed the playbook — then train and quiz so it sticks.
      </p>
    </section>
    <div class="grid-2">
      <article class="panel">
        <h2>Latest session · ${escapeHtml(day?.date || '—')}</h2>
        <p class="muted">${escapeHtml(day?.title || '')}</p>
        <p>${escapeHtml(day?.summary || 'No daily notes yet.')}</p>
        <div class="chip-row">
          <span class="chip">Daily</span>
          ${(keep || []).slice(0, 3).map((k) => `<span class="chip copper">${escapeHtml(k.slice(0, 72))}${k.length > 72 ? '…' : ''}</span>`).join('')}
        </div>
        <div class="actions">
          <button class="btn" type="button" data-go="day/${encodeURIComponent(day?.id || '')}">Open day</button>
          <button class="btn ghost" type="button" data-go="teachings">Sunday teachings</button>
          <button class="btn ghost" type="button" data-go="trainer">Train matrix</button>
        </div>
      </article>
      <article class="panel">
        <h2>Morning card</h2>
        <p class="muted">From TRADING-BIBLE §14 — check before 9:15.</p>
        <ul class="checklist" id="morning-list">
          ${lines
            .map((line, i) => {
              const id = `m${i}`;
              return `<li>
                <input type="checkbox" id="${id}" data-check="${id}" ${checked[id] ? 'checked' : ''} />
                <label for="${id}">${escapeHtml(line.replace(/^\d+\.\s*/, ''))}</label>
              </li>`;
            })
            .join('')}
        </ul>
      </article>
    </div>
  `;

  view.querySelectorAll('[data-go]').forEach((btn) => {
    btn.addEventListener('click', () => navigate(btn.dataset.go));
  });
  view.querySelectorAll('[data-check]').forEach((input) => {
    input.addEventListener('change', () => {
      const next = JSON.parse(localStorage.getItem(CHECKLIST_KEY) || '{}');
      next[input.dataset.check] = input.checked;
      localStorage.setItem(CHECKLIST_KEY, JSON.stringify(next));
    });
  });
}

function renderDays(view, dayId) {
  const days = [...(state.vault.days || [])].reverse();
  const selected =
    days.find((d) => d.id === dayId) ||
    days.find((d) => d.id === state.selectedDayId) ||
    days[0];
  state.selectedDayId = selected?.id || null;

  view.innerHTML = `
    <section class="hero">
      <h1>Day log</h1>
      <p class="lede">Mon–Fri pre + live notes — plan-by-open branches and keep-permanently chips. Sunday lessons live under Teachings.</p>
    </section>
    <div class="split-day">
      <div class="day-list" id="day-list"></div>
      <div class="day-detail" id="day-detail"></div>
    </div>
  `;

  const list = $('#day-list', view);
  days.forEach((d) => {
    const item = el(`
      <button type="button" class="day-item ${d.id === selected?.id ? 'active' : ''}">
        <div class="date">${escapeHtml(d.date)}</div>
        <div class="muted">${escapeHtml(d.title)}</div>
        <div class="chip-row">
          ${(d.keepPermanently || []).slice(0, 2).map((k) => `<span class="chip">${escapeHtml(k.slice(0, 48))}${k.length > 48 ? '…' : ''}</span>`).join('')}
        </div>
      </button>
    `);
    item.addEventListener('click', () => navigate(`day/${encodeURIComponent(d.id)}`));
    list.appendChild(item);
  });

  const detail = $('#day-detail', view);
  if (!selected) {
    detail.innerHTML = `<p class="empty">No notes found. Add files under daily/ and run npm run sync.</p>`;
    return;
  }

  const planRows = (selected.pre?.planByOpen || [])
    .map((r) => `<tr><td>${escapeHtml(r.open)}</td><td>${escapeHtml(r.plan)}</td></tr>`)
    .join('');

  detail.innerHTML = `
    <article class="panel">
      <h2>${escapeHtml(selected.title)}</h2>
      <p class="muted">${escapeHtml(selected.summary)}</p>
      <div class="chip-row">
        ${(selected.keepPermanently || []).map((k) => `<span class="chip copper">${escapeHtml(k)}</span>`).join('') || '<span class="muted">No keep-permanently items</span>'}
      </div>
    </article>
    ${
      planRows
        ? `<article class="panel"><h3>Plan by open</h3>
           <table class="levels-table"><thead><tr><th>Open</th><th>Plan</th></tr></thead>
           <tbody>${planRows}</tbody></table></article>`
        : ''
    }
    ${
      selected.pre?.raw
        ? `<article class="panel"><h3>Pre-market</h3><div class="md-body">${md(selected.pre.raw.replace(/^##\s+Pre-market[^\n]*\n?/i, '### Pre-market\n'))}</div>
           ${selected.pre.url ? `<p><a href="${escapeHtml(selected.pre.url)}" target="_blank" rel="noopener">Pre video</a></p>` : ''}
           </article>`
        : ''
    }
    ${
      selected.post?.raw
        ? `<article class="panel"><h3>Post-market</h3><div class="md-body">${md(selected.post.raw.replace(/^##\s+Post-market[^\n]*\n?/i, '### Post-market\n'))}</div>
           ${selected.post.url ? `<p><a href="${escapeHtml(selected.post.url)}" target="_blank" rel="noopener">Post / live video</a></p>` : ''}
           </article>`
        : ''
    }
  `;
}

function renderTeachings(view, teachingId) {
  const teachings = teachingsList(state.vault);
  const selected =
    teachings.find((t) => t.id === teachingId) ||
    teachings.find((t) => t.id === state.selectedTeachingId) ||
    teachings[0];
  state.selectedTeachingId = selected?.id || null;

  view.innerHTML = `
    <section class="hero">
      <h1>Teachings</h1>
      <p class="lede">Sunday / concept videos — the experience behind the matrix. Keep-permanently lines still promote into the playbook with daily notes.</p>
    </section>
    <div class="split-day">
      <div class="day-list" id="teaching-list"></div>
      <div class="day-detail" id="teaching-detail"></div>
    </div>
  `;

  const list = $('#teaching-list', view);
  teachings.forEach((t) => {
    const item = el(`
      <button type="button" class="day-item ${t.id === selected?.id ? 'active' : ''}">
        <div class="date">${escapeHtml(t.date)}${t.weekly ? ' · weekly' : ' · teaching'}</div>
        <div class="muted">${escapeHtml(t.title)}</div>
        <div class="chip-row">
          <span class="chip teaching">${t.weekly ? 'Weekly' : 'Sunday'}</span>
          ${(t.keepPermanently || []).slice(0, 2).map((k) => `<span class="chip">${escapeHtml(k.slice(0, 48))}${k.length > 48 ? '…' : ''}</span>`).join('')}
        </div>
      </button>
    `);
    item.addEventListener('click', () => navigate(`teaching/${encodeURIComponent(t.id)}`));
    list.appendChild(item);
  });

  const detail = $('#teaching-detail', view);
  if (!selected) {
    detail.innerHTML = `<p class="empty">No teaching notes yet. Add files under teaching/ and run npm run sync.</p>`;
    return;
  }

  detail.innerHTML = `
    <article class="panel">
      <h2>${escapeHtml(selected.title)}</h2>
      <p class="muted">${escapeHtml(selected.summary)}</p>
      <div class="chip-row">
        <span class="chip teaching">${selected.weekly ? 'Weekly review' : 'Teaching'}</span>
        ${(selected.keepPermanently || []).map((k) => `<span class="chip copper">${escapeHtml(k)}</span>`).join('') || '<span class="muted">No keep-permanently items</span>'}
      </div>
      ${selected.url ? `<p><a href="${escapeHtml(selected.url)}" target="_blank" rel="noopener">Watch video</a>${selected.duration ? ` · ${escapeHtml(selected.duration)}` : ''}</p>` : ''}
      <p class="muted" style="margin-top:0.75rem">Feeds playbook: promote new keep-permanently lines into TRADING-BIBLE.md (same as daily).</p>
    </article>
    <article class="panel">
      <h3>Full note</h3>
      <div class="md-body">${md(selected.raw)}</div>
    </article>
  `;
}

function renderPlaybook(view) {
  const markdown = state.vault.bible.markdown || '_Trading bible not found._';
  const headings = [...markdown.matchAll(/^##\s+(.+)$/gm)].map((m) => m[1]);

  view.innerHTML = `
    <section class="hero">
      <h1>Master playbook</h1>
      <p class="lede">TRADING-BIBLE.md — durable rules distilled from <strong>weekday sessions and Sunday teachings</strong>. Encode this later; don’t skip the experience layer.</p>
    </section>
    <div class="toc">
      ${headings
        .map((h, i) => {
          const id = `sec-${i}`;
          return `<a href="#playbook/${id}" data-sec="${id}">${escapeHtml(h)}</a>`;
        })
        .join('')}
    </div>
    <article class="panel md-body" id="bible-body">${md(markdown)}</article>
  `;

  // Anchor h2s for TOC
  $('#bible-body', view).querySelectorAll('h2').forEach((h2, i) => {
    h2.id = `sec-${i}`;
  });

  view.querySelectorAll('[data-sec]').forEach((a) => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById(a.dataset.sec);
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function renderTrainer(view) {
  const rows = matrixRows();
  let inventory = 'buyers_sitting';
  let openType = 'flat_down';

  const paint = () => {
    const result = decide(inventory, openType);
    const resultBox = $('#bias-box', view);
    resultBox.className = `bias-result ${result.cssClass}`;
    resultBox.innerHTML = `
      <div class="muted">Matrix bias</div>
      <div class="bias">${result.bias}</div>
      <p>${escapeHtml(result.explanation)}</p>
    `;

    view.querySelectorAll('.matrix-table td[data-cell]').forEach((td) => {
      const [inv, open] = td.dataset.cell.split('|');
      td.classList.toggle('hl', inv === inventory && open === openType);
    });
  };

  view.innerHTML = `
    <section class="hero">
      <h1>Decision trainer</h1>
      <p class="lede">Pick inventory × open type. Bias comes from bible §4 — the heart of a future rules engine.</p>
    </section>
    <div class="grid-2">
      <article class="panel">
        <div class="trainer-controls">
          <div class="field">
            <label for="inv">Inventory</label>
            <select id="inv">
              ${INVENTORY_OPTIONS.map((o) => `<option value="${o.value}">${escapeHtml(o.label)}</option>`).join('')}
            </select>
          </div>
          <div class="field">
            <label for="open">Open type</label>
            <select id="open">
              ${OPEN_OPTIONS.map((o) => `<option value="${o.value}">${escapeHtml(o.label)}</option>`).join('')}
            </select>
          </div>
        </div>
        <div id="bias-box" class="bias-result flat"></div>
      </article>
      <article class="panel">
        <h2>Full matrix</h2>
        <p class="muted">Highlight tracks your selection.</p>
        <table class="matrix-table">
          <thead>
            <tr>
              <th>Inventory</th>
              ${OPEN_OPTIONS.map((o) => `<th>${escapeHtml(o.label)}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${rows
              .map(
                (r) => `<tr>
                <th>${escapeHtml(r.inventory)}</th>
                ${r.cells
                  .map(
                    (c) =>
                      `<td data-cell="${c.inventory}|${c.open}">${escapeHtml(c.bias)}</td>`,
                  )
                  .join('')}
              </tr>`,
              )
              .join('')}
          </tbody>
        </table>
      </article>
    </div>
  `;

  $('#inv', view).value = inventory;
  $('#open', view).value = openType;
  $('#inv', view).addEventListener('change', (e) => {
    inventory = e.target.value;
    paint();
  });
  $('#open', view).addEventListener('change', (e) => {
    openType = e.target.value;
    paint();
  });
  paint();
}

function ensureQuizOrder() {
  const questions = state.quizzes.questions;
  if (!state.quiz.order.length) {
    state.quiz.order = questions.map((_, i) => i);
  }
}

function quizStats() {
  const progress = loadQuizProgress();
  const total = state.quizzes.questions.length;
  const answeredIds = Object.keys(progress.answers || {});
  const correct = answeredIds.filter((id) => progress.answers[id]?.correct).length;
  return { total, answered: answeredIds.length, correct, progress };
}

function renderQuiz(view) {
  ensureQuizOrder();
  const { total, answered, correct, progress } = quizStats();
  const qIndex = state.quiz.order[state.quiz.index] ?? 0;
  const q = state.quizzes.questions[qIndex];
  const prior = progress.answers?.[q.id];
  const selected = state.quiz.answered;
  const showResult = selected !== null || prior;

  view.innerHTML = `
    <section class="hero">
      <h1>Quiz mode</h1>
      <p class="lede">Self-grading drills from the bible and day replays. Progress stays in localStorage.</p>
    </section>
    <div class="quiz-meta">
      <div class="score-badge">${correct} / ${total} correct · ${answered} attempted</div>
      <div class="progress-bar" aria-hidden="true"><span style="width:${Math.round((answered / total) * 100)}%"></span></div>
      <button class="btn ghost" type="button" id="reset-quiz">Reset progress</button>
    </div>
    <article class="panel">
      <div class="chip-row">
        <span class="chip">${escapeHtml(q.type)}</span>
        <span class="chip copper">Q ${state.quiz.index + 1} / ${total}</span>
      </div>
      <h2 style="margin-top:0.85rem">${escapeHtml(q.prompt)}</h2>
      <div class="choices" id="choices"></div>
      <div id="explain"></div>
      <div class="actions">
        <button class="btn ghost" type="button" id="prev-q" ${state.quiz.index === 0 ? 'disabled' : ''}>Previous</button>
        <button class="btn" type="button" id="next-q">${state.quiz.index === total - 1 ? 'Finish' : 'Next'}</button>
      </div>
    </article>
  `;

  const choicesEl = $('#choices', view);
  q.choices.forEach((choice, i) => {
    const btn = el(`<button type="button" class="choice">${escapeHtml(choice)}</button>`);
    if (showResult) {
      if (i === q.correctAnswer) btn.classList.add('correct');
      if ((selected ?? prior?.choice) === i && i !== q.correctAnswer) btn.classList.add('wrong');
      btn.disabled = true;
    }
    btn.addEventListener('click', () => {
      if (state.quiz.answered !== null) return;
      state.quiz.answered = i;
      const isCorrect = i === q.correctAnswer;
      const nextProgress = loadQuizProgress();
      nextProgress.answers = nextProgress.answers || {};
      nextProgress.answers[q.id] = { choice: i, correct: isCorrect, at: new Date().toISOString() };
      saveQuizProgress(nextProgress);
      render();
    });
    choicesEl.appendChild(btn);
  });

  if (showResult) {
    const pick = selected ?? prior?.choice;
    const ok = pick === q.correctAnswer;
    $('#explain', view).innerHTML = `
      <div class="explanation">
        <strong>${ok ? 'Correct' : 'Not quite'}.</strong>
        ${escapeHtml(q.explanation)}
        <div class="refs">Sources: ${(q.sourceRefs || []).map(escapeHtml).join(' · ')}</div>
      </div>
    `;
  }

  $('#prev-q', view).addEventListener('click', () => {
    state.quiz.index = Math.max(0, state.quiz.index - 1);
    state.quiz.answered = null;
    render();
  });
  $('#next-q', view).addEventListener('click', () => {
    if (state.quiz.index >= total - 1) {
      state.quiz.index = 0;
    } else {
      state.quiz.index += 1;
    }
    state.quiz.answered = null;
    render();
  });
  $('#reset-quiz', view).addEventListener('click', () => {
    localStorage.removeItem(QUIZ_KEY);
    state.quiz = { index: 0, answered: null, order: state.quizzes.questions.map((_, i) => i) };
    render();
  });
}

function renderLevels(view) {
  const levels = state.vault.levels || [];
  const dates = [...new Set(levels.map((l) => l.date))];
  const indices = [...new Set(levels.map((l) => l.index))];

  view.innerHTML = `
    <section class="hero">
      <h1>Levels log</h1>
      <p class="lede">Day-specific R/S from notes — useful context, not eternal constants (bible §11).</p>
    </section>
    <div class="filters">
      <select id="filter-date">
        <option value="">All dates</option>
        ${dates.map((d) => `<option value="${escapeHtml(d)}">${escapeHtml(d)}</option>`).join('')}
      </select>
      <select id="filter-index">
        <option value="">All indices</option>
        ${indices.map((d) => `<option value="${escapeHtml(d)}">${escapeHtml(d)}</option>`).join('')}
      </select>
    </div>
    <article class="panel" style="overflow-x:auto">
      <table class="levels-table" id="levels-table">
        <thead>
          <tr><th>Date</th><th>Index</th><th>Level</th><th>Context</th><th>Source</th></tr>
        </thead>
        <tbody></tbody>
      </table>
    </article>
  `;

  const paint = () => {
    const date = $('#filter-date', view).value;
    const index = $('#filter-index', view).value;
    const rows = levels.filter(
      (l) => (!date || l.date === date) && (!index || l.index === index),
    );
    const tbody = $('#levels-table tbody', view);
    tbody.innerHTML = rows.length
      ? rows
          .map(
            (l) => `<tr>
            <td>${escapeHtml(l.date)}</td>
            <td>${escapeHtml(l.index)}</td>
            <td>${escapeHtml(l.level)}</td>
            <td>${escapeHtml(l.context)}</td>
            <td>${escapeHtml(l.source)}</td>
          </tr>`,
          )
          .join('')
      : `<tr><td colspan="5" class="muted">No levels match.</td></tr>`;
  };

  $('#filter-date', view).addEventListener('change', paint);
  $('#filter-index', view).addEventListener('change', paint);
  paint();
}

function render() {
  state.route = parseRoute();
  if (state.route.dayId) state.selectedDayId = state.route.dayId;
  if (state.route.teachingId) state.selectedTeachingId = state.route.teachingId;
  const view = $('#view');
  const name = state.route.name;

  switch (name) {
    case 'days':
    case 'day':
      setActiveNav('days');
      renderDays(view, state.route.dayId || state.selectedDayId);
      break;
    case 'teachings':
    case 'teaching':
      setActiveNav('teachings');
      renderTeachings(view, state.route.teachingId || state.selectedTeachingId);
      break;
    case 'playbook':
      setActiveNav('playbook');
      renderPlaybook(view);
      break;
    case 'trainer':
      setActiveNav('trainer');
      renderTrainer(view);
      break;
    case 'quiz':
      setActiveNav('quiz');
      renderQuiz(view);
      break;
    case 'levels':
      setActiveNav('levels');
      renderLevels(view);
      break;
    case 'home':
    default:
      setActiveNav('home');
      renderHome(view);
      break;
  }
}

async function boot() {
  renderShell();
  const view = $('#view');
  view.innerHTML = `<div class="loading">Loading vault…</div>`;

  try {
    const [vaultRes, quizRes] = await Promise.all([
      fetch('/data/vault.json'),
      fetch('/data/quizzes.json'),
    ]);
    if (!vaultRes.ok) throw new Error('vault.json missing — run npm run sync');
    if (!quizRes.ok) throw new Error('quizzes.json missing');
    state.vault = await vaultRes.json();
    state.quizzes = await quizRes.json();
    window.addEventListener('hashchange', render);
    render();
  } catch (err) {
    view.innerHTML = `<div class="panel"><h2>Could not load data</h2><p class="muted">${escapeHtml(err.message)}</p>
      <p>From <code>web/</code> run <code>npm run sync</code> then <code>npm run dev</code>.</p></div>`;
  }
}

boot();
