// ============ ¡Hola! 西语启航 —— 核心逻辑 v2 ============
// v2 新增：记忆库（间隔复习+错题本）、每日解锁与每日任务、口语表达训练、小作文

// ---------- 常量 ----------
const STORE_KEY = 'espanolApp_v1';
const DAILY_GOAL = 50;
const INTERVALS = [0, 1, 2, 4, 7, 15]; // 记忆盒各等级的复习间隔（天）

// ---------- 状态存取 ----------
const defaultState = () => ({
  xp: 0,
  streak: 0,
  lastDay: '',
  todayDate: '',
  todayXP: 0,
  startDate: '',      // 开始学习日期（每日解锁基准）
  freeMode: false,    // 自由模式：解锁全部课程
  srs: {},            // 单词 -> { b: 记忆盒等级 0~5, due: 下次复习日期 }
  mistakes: [],       // 错题本 [{id, q, opts, a, say, count, last}]
  lessonsDone: [],
  essaysDone: [],     // 已通过的作文题 id
  drafts: {},         // 作文草稿 promptId -> text
  conjCorrect: 0,
  sentCorrect: 0,
  speakCount: 0,
  qaCount: 0,
  dialogCount: 0,
  listenCount: 0,
  contextCorrect: 0,
  readingsDone: [],
  reviewCount: 0,
  matchGames: 0,
  catDate: '',        // 每日分类 XP 记录日期
  cats: {},           // 当日各分类 XP（用于每日任务打勾）
  bonusDate: '',      // 当日全任务奖励是否已发
  coins: 0,           // 金币（可花费）
  coinsEarned: 0,     // 累计获得金币
  xpSinceDrop: 0,     // 距上次零食掉落的 XP 累计
  inv: {},            // 背包 itemId -> 数量
  pet: { name: 'Paco', growth: 0, hunger: 70, mood: 70, lastDay: '', pats: 0, patsDate: '' },
  ach: [],
  ghToken: '', ghUser: '', ghGistId: '',   // GitHub 云同步
});

let state = loadState();

function loadState() {
  let s = defaultState();
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) s = Object.assign(defaultState(), JSON.parse(raw));
  } catch (e) { /* 数据损坏则重置 */ }
  // v1 -> v2 迁移：srs 原来是 单词->数字
  const today = todayStr();
  for (const k in s.srs) {
    if (typeof s.srs[k] === 'number') s.srs[k] = { b: s.srs[k], due: today };
  }
  if (!s.startDate) s.startDate = today;
  if (!s.pet) s.pet = defaultState().pet;
  if (!s.inv) s.inv = {};
  return s;
}
function saveState() {
  localStorage.setItem(STORE_KEY, JSON.stringify(state));
  if (typeof cloudPushDebounced === 'function') cloudPushDebounced();
}

function todayStr() { return new Date().toISOString().slice(0, 10); }
function addDaysStr(n) { return new Date(Date.now() + n * 86400000).toISOString().slice(0, 10); }

function masteredCount(s) {
  return Object.values((s || state).srs).filter(e => (e.b !== undefined ? e.b : e) >= 3).length;
}
function totalWords() { return DECKS.reduce((n, d) => n + d.words.length, 0); }

function dayIndex() {
  const diff = Math.floor((new Date(todayStr()) - new Date(state.startDate)) / 86400000);
  return Math.max(1, diff + 1);
}
// 每日解锁：第1天开放3课，之后每天+2课；始终保证有下一课可学
function unlockedLessonCount() {
  if (state.freeMode) return LESSONS.length;
  return Math.min(LESSONS.length, Math.max(3 + (dayIndex() - 1) * 2, state.lessonsDone.length + 1));
}

// ---------- 经验值 / 连击 / 每日任务 / 成就 ----------
// 宠物心情 ≥80 时给学习加成（#7 联动）
function petXpFactor() {
  return (state.pet && state.pet.mood >= 80) ? 1.2 : 1;
}
function addXP(n, reason, cat) {
  // 宠物心情好 → XP +20% 加成
  const base = n;
  const factor = petXpFactor();
  n = Math.round(base * factor);
  const bonus = n - base;

  state.xp += n;
  const today = todayStr();
  if (state.todayDate !== today) { state.todayDate = today; state.todayXP = 0; }
  state.todayXP += n;

  // 金币与零食掉落（宠物系统）
  state.coins += n;
  state.coinsEarned = (state.coinsEarned || 0) + n;
  state.xpSinceDrop = (state.xpSinceDrop || 0) + n;
  if (state.xpSinceDrop >= 30) {
    state.xpSinceDrop -= 30;
    const dropId = ['galleta', 'galleta', 'leche', 'lana'][Math.floor(Math.random() * 4)];
    state.inv[dropId] = (state.inv[dropId] || 0) + 1;
    const it = PET_ITEMS.find(x => x.id === dropId);
    toast(`🎁 学习掉落：${it.icon} ${it.name} ×1（去宠物页喂 ${state.pet.name}）`, true);
  }

  if (cat) {
    if (state.catDate !== today) { state.catDate = today; state.cats = {}; }
    state.cats[cat] = (state.cats[cat] || 0) + n;
  }

  if (state.lastDay !== today) {
    const yest = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    state.streak = (state.lastDay === yest) ? state.streak + 1 : 1;
    state.lastDay = today;
    if (state.streak > 1) toast(`🔥 连续学习 ${state.streak} 天！`, true);
  }

  toast(`+${n} XP${reason ? ' · ' + reason : ''}${bonus > 0 ? ` 🦙心情加成+${bonus}` : ''}`);
  checkDailyBonus();
  checkAchievements();
  saveState();
  renderHeader();
  renderHome();
}

function dailyTasks() {
  const tasks = [
    { cat: 'review', icon: '🗃️', label: '记忆库复习', need: 6, tab: 'review' },
    { cat: 'vocab', icon: '🃏', label: '词汇学习', need: 16, tab: 'vocab' },
    { cat: 'grammar', icon: '📖', label: '语法与句型', need: 15, tab: 'grammar' },
    { cat: 'tense', icon: '⏳', label: '时态变位', need: 12, tab: 'tense' },
    { cat: 'speak', icon: '🎤', label: '口语表达', need: 10, tab: 'speak' },
  ];
  if (dayIndex() % 3 === 1) tasks.push({ cat: 'write', icon: '✍️', label: '小作文（每3天）', need: 20, tab: 'write' });
  return tasks;
}
function catXP(cat) {
  return state.catDate === todayStr() ? (state.cats[cat] || 0) : 0;
}
function checkDailyBonus() {
  const today = todayStr();
  if (state.bonusDate === today) return;
  if (dailyTasks().every(t => catXP(t.cat) >= t.need)) {
    state.bonusDate = today;
    state.xp += 15;
    state.todayXP += 15;
    state.coins += 15;
    state.inv.carne = (state.inv.carne || 0) + 1;
    toast('🎁 今日任务全部完成：+15 XP、+15 金币、🍖 肉肉 ×1！', true);
  }
}

function checkAchievements() {
  ACHIEVEMENTS.forEach(a => {
    if (!state.ach.includes(a.id) && a.cond(state)) {
      state.ach.push(a.id);
      toast(`${a.icon} 解锁成就：${a.name}`, true);
    }
  });
}

function currentLevel() {
  let lv = LEVELS[0], next = null;
  for (let i = 0; i < LEVELS.length; i++) {
    if (state.xp >= LEVELS[i].xp) { lv = LEVELS[i]; next = LEVELS[i + 1] || null; }
  }
  return { lv, next, idx: LEVELS.indexOf(lv) + 1 };
}

// ---------- Toast ----------
function toast(msg, gold) {
  const box = document.getElementById('toasts');
  const el = document.createElement('div');
  el.className = 'toast' + (gold ? ' gold' : '');
  el.textContent = msg;
  box.appendChild(el);
  setTimeout(() => el.remove(), 2600);
}

// ---------- 语音合成 / 识别 ----------
let esVoice = null;
function pickVoice() {
  const voices = speechSynthesis.getVoices();
  esVoice = voices.find(v => v.lang === 'es-ES') || voices.find(v => v.lang.startsWith('es')) || null;
}
if ('speechSynthesis' in window) {
  pickVoice();
  speechSynthesis.onvoiceschanged = pickVoice;
}
function speak(text) {
  if (!('speechSynthesis' in window)) { toast('当前浏览器不支持语音朗读'); return; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'es-ES';
  if (esVoice) u.voice = esVoice;
  u.rate = 0.85;
  speechSynthesis.speak(u);
}
// 慢速朗读（听力用）
function speakSlow(text) {
  if (!('speechSynthesis' in window)) { toast('当前浏览器不支持语音朗读'); return; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'es-ES';
  if (esVoice) u.voice = esVoice;
  u.rate = 0.55;
  speechSynthesis.speak(u);
}
// 按顺序朗读多句（用于整段对话），不互相打断
function speakSeq(texts) {
  if (!('speechSynthesis' in window)) { toast('当前浏览器不支持语音朗读'); return; }
  speechSynthesis.cancel();
  texts.forEach(t => {
    const u = new SpeechSynthesisUtterance(t);
    u.lang = 'es-ES';
    if (esVoice) u.voice = esVoice;
    u.rate = 0.85;
    speechSynthesis.speak(u);
  });
}

const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
let activeRecog = null;
// 识别一段西语：onResult(候选文本数组)，onStatus(消息, 是否结束)
function recognizeOnce(onResult, onStatus) {
  if (!SR) { onStatus('⚠️ 当前浏览器不支持语音识别，请用文字输入', true); return null; }
  if (activeRecog) { activeRecog.abort(); activeRecog = null; }
  const recog = new SR();
  activeRecog = recog;
  recog.lang = 'es-ES';
  recog.interimResults = false;
  recog.maxAlternatives = 3;
  onStatus('🎙️ 正在聆听，请开口说…', false);
  recog.onresult = e => onResult(Array.from(e.results[0]).map(r => r.transcript));
  recog.onerror = e => onStatus(`⚠️ 识别失败（${e.error === 'not-allowed' ? '请允许浏览器使用麦克风' : e.error === 'no-speech' ? '没有听到声音' : e.error}）`, true);
  recog.onend = () => { if (activeRecog === recog) activeRecog = null; onStatus('', true); };
  recog.start();
  return recog;
}

// ---------- 工具 ----------
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
// 把文本安全嵌入 内联 onclick 的单引号 JS 字符串（先转义反斜杠/单引号，再做 HTML 属性转义）
function jsAttr(s) {
  return String(s)
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\r?\n/g, ' ')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
// 阅读生词高亮：在原始文本上分段处理，转义非匹配段、把生词包成可点击（高亮全部出现，长词优先，Unicode 词边界）
function glossHighlight(text, glossary) {
  if (!glossary || !glossary.length) return esc(text);
  const words = glossary.map(g => g[0]).filter(Boolean).sort((a, b) => b.length - a.length);
  const pat = words.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
  let re;
  try { re = new RegExp('(?<![\\p{L}\\p{M}])(' + pat + ')(?![\\p{L}\\p{M}])', 'giu'); }
  catch (e) { re = new RegExp('(' + pat + ')', 'gi'); } // 兼容不支持后行断言的旧引擎
  let out = '', last = 0, m;
  while ((m = re.exec(text)) !== null) {
    out += esc(text.slice(last, m.index));
    out += `<span class="gloss" onclick="speak('${jsAttr(m[0])}')">${esc(m[0])}</span>`;
    last = m.index + m[0].length;
    if (re.lastIndex === m.index) re.lastIndex++;
  }
  out += esc(text.slice(last));
  return out;
}
function normalizeEs(s) {
  // 去重音，但保留 U+0303（ñ 的波浪线）
  return s.toLowerCase()
    .normalize('NFD').replace(/[̀-̂̄-ͯ]/g, '')
    .normalize('NFC')
    .replace(/[¿?¡!.,;:'"()]/g, '')
    .replace(/\s+/g, ' ').trim();
}
function levenshtein(a, b) {
  const m = a.length, n = b.length;
  if (!m) return n; if (!n) return m;
  const dp = Array.from({ length: m + 1 }, (_, i) => [i, ...Array(n).fill(0)]);
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return dp[m][n];
}
function similarity(a, b) {
  a = normalizeEs(a); b = normalizeEs(b);
  const maxLen = Math.max(a.length, b.length) || 1;
  return Math.round((1 - levenshtein(a, b) / maxLen) * 100);
}
function wordCount(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}
// 动词某时态的六个变位（现在完成时 = haber + 分词；条件式 = 将来时词干 + ía）
function conj(v, tId) {
  if (tId === 'perfecto') return HABER.map(h => h + ' ' + v.part);
  if (tId === 'condicional') {
    const stem = v.futuro[0].slice(0, -1);
    return COND_END.map(e => stem + e);
  }
  return v[tId];
}

// ---------- 错题本 / 记忆盒 ----------
function addMistake(entry) {
  const found = state.mistakes.find(m => m.id === entry.id);
  const today = todayStr();
  if (found) { found.count++; found.last = today; }
  else {
    state.mistakes.push(Object.assign({ count: 1, last: today }, entry));
    if (state.mistakes.length > 120) state.mistakes.shift();
  }
  saveState();
}
function dueWords() {
  const today = todayStr();
  const all = DECKS.flatMap(d => d.words);
  return Object.keys(state.srs)
    .filter(es => { const e = state.srs[es]; return e.b < 5 && e.due <= today; })
    .map(es => all.find(w => w.es === es))
    .filter(Boolean);
}
function srsUp(es) {
  const e = state.srs[es] || { b: 0, due: todayStr() };
  e.b = Math.min(5, e.b + 1);
  e.due = addDaysStr(INTERVALS[Math.min(e.b, INTERVALS.length - 1)]);
  state.srs[es] = e;
}
function srsDown(es) {
  state.srs[es] = { b: 0, due: todayStr() };
}

// ---------- 顶栏 & 导航 ----------
function renderHeader() {
  const { lv, idx } = currentLevel();
  document.getElementById('stat-day').textContent = `📅 第 ${dayIndex()} 天`;
  document.getElementById('stat-streak').textContent = `🔥 ${state.streak} 天`;
  document.getElementById('stat-xp').textContent = `⭐ ${state.xp} XP`;
  document.getElementById('stat-coins').textContent = `🪙 ${state.coins}`;
  document.getElementById('stat-level').textContent = `Lv.${idx} ${lv.name}`;
}

function switchTab(id) {
  document.querySelectorAll('nav button').forEach(b => b.classList.toggle('active', b.dataset.tab === id));
  document.querySelectorAll('section.tab').forEach(s => s.classList.toggle('active', s.id === 'tab-' + id));
  window.scrollTo({ top: 0 });
}
document.querySelectorAll('nav button').forEach(b => b.addEventListener('click', () => switchTab(b.dataset.tab)));

// ============================================================
// 首页（每日任务 + 今日更新）
// ============================================================
function renderHome() {
  const el = document.getElementById('tab-home');
  const { lv, next, idx } = currentLevel();
  const doneToday = state.todayDate === todayStr() ? state.todayXP : 0;
  const goalPct = Math.min(100, Math.round(doneToday / DAILY_GOAL * 100));
  const lvPct = next ? Math.round((state.xp - lv.xp) / (next.xp - lv.xp) * 100) : 100;
  const allWords = DECKS.flatMap(d => d.words);
  const wod = allWords[Math.floor(Date.now() / 86400000) % allWords.length];
  const day = dayIndex();
  const unlocked = unlockedLessonCount();
  const nextLesson = LESSONS.slice(0, unlocked).find(l => !state.lessonsDone.includes(l.id));
  const due = dueWords().length;
  const tasks = dailyTasks();
  const allDone = tasks.every(t => catXP(t.cat) >= t.need);

  el.innerHTML = `
    <div class="hero">
      <div class="card">
        <h2>📅 第 ${day} 天 · 今日任务 ${allDone ? '✅ 全部完成！' : ''}</h2>
        <p class="muted">完成全部任务额外 +15 XP。语言是靠每天积累出来的！</p>
        ${tasks.map(t => {
          const got = Math.min(catXP(t.cat), t.need);
          const ok = got >= t.need;
          return `
          <div class="task-row" onclick="switchTab('${t.tab}')">
            <span class="ic">${t.icon}</span>
            <span class="lb">${t.label}</span>
            <div class="bar green" style="flex:1;height:9px"><div style="width:${Math.round(got / t.need * 100)}%"></div></div>
            <span class="st ${ok ? 'ok' : ''}">${ok ? '✅' : got + '/' + t.need}</span>
          </div>`;
        }).join('')}
        <div style="margin:12px 0 4px" class="bar"><div style="width:${goalPct}%"></div></div>
        <p class="muted">今日 <b>${doneToday}</b> / ${DAILY_GOAL} XP ${goalPct >= 100 ? '🎯 目标达成' : ''}</p>
      </div>
      <div class="card">
        <h2>🏅 等级：Lv.${idx} ${lv.name}</h2>
        <p class="muted">${next ? `距离下一级「${next.name}」还差 ${next.xp - state.xp} XP` : '已达最高等级！'}</p>
        <div style="margin:10px 0" class="bar"><div style="width:${lvPct}%"></div></div>
        <h3>✨ 今日更新</h3>
        <p class="muted" style="line-height:1.9">
          📖 语法已解锁 <b>${unlocked}</b>/${LESSONS.length} 课${nextLesson ? `，今日推荐：<a href="javascript:void(0)" onclick="switchTab('grammar');openLesson('${nextLesson.id}')" style="color:var(--red);font-weight:700">${esc(nextLesson.title)}</a>` : '，全部学完！'}<br>
          🗃️ 记忆库有 <b>${due}</b> 个到期单词、<b>${state.mistakes.length}</b> 道错题待复习<br>
          ${day % 3 === 1 ? `✍️ 今天是写作日：<a href="javascript:void(0)" onclick="switchTab('write');openPrompt('${WRITING_PROMPTS[Math.floor((day - 1) / 3) % WRITING_PROMPTS.length].id}')" style="color:var(--red);font-weight:700">${esc(WRITING_PROMPTS[Math.floor((day - 1) / 3) % WRITING_PROMPTS.length].title)}</a>` : `✍️ 距下个写作日还有 ${(3 - ((day - 1) % 3)) % 3 || 3} 天（也可随时去写作页练习）`}
        </p>
        <h3>📌 每日一词</h3>
        <div class="example-row">
          <button class="speak-btn" onclick="speak('${esc(wod.es)}')">🔊</button>
          <span class="es">${esc(wod.es)}</span>
          <span class="zh">${esc(wod.zh)}</span>
        </div>
      </div>
    </div>
    <div class="card">
      <h2>🚀 学习模块</h2>
      <div class="quick-links">
        <div class="quick-link" onclick="switchTab('pron')"><span class="ic">🗣️</span>发音入门</div>
        <div class="quick-link" onclick="switchTab('vocab')"><span class="ic">🃏</span>词汇卡片</div>
        <div class="quick-link" onclick="switchTab('grammar')"><span class="ic">📖</span>语法课程</div>
        <div class="quick-link" onclick="switchTab('tense')"><span class="ic">⏳</span>时态训练</div>
        <div class="quick-link" onclick="switchTab('sentence')"><span class="ic">🧱</span>句型拼句</div>
        <div class="quick-link" onclick="switchTab('speak')"><span class="ic">🎤</span>口语表达</div>
        <div class="quick-link" onclick="switchTab('write')"><span class="ic">✍️</span>小作文</div>
        <div class="quick-link" onclick="switchTab('review')"><span class="ic">🗃️</span>记忆库</div>
      </div>
    </div>`;
}

// ============================================================
// 发音
// ============================================================
let pronQuizIdx = 0;
function renderPron() {
  const el = document.getElementById('tab-pron');
  const letters = ALPHABET.map(([L, name]) =>
    `<div class="letter-chip" onclick="speak('${name}')" title="${name}">${L}</div>`).join('');
  const rules = PRON_RULES.map(r => `
    <div class="card">
      <h2>${esc(r.title)}</h2>
      ${r.items.map(it => `
        <div class="pron-row">
          <span class="sym">${esc(it.s)}</span>
          <span class="tip">${esc(it.tip)}</span>
          <span class="w">${esc(it.word)}</span>
          <button class="speak-btn" onclick="speak('${esc(it.word)}')">🔊</button>
        </div>`).join('')}
    </div>`).join('');

  el.innerHTML = `
    <div class="card">
      <h2>🔤 字母表（点击听读音）</h2>
      <p class="muted" style="margin-bottom:10px">西班牙语拼读非常规则：会读字母组合 = 会读所有单词！</p>
      <div class="letters">${letters}</div>
    </div>
    ${rules}
    <div class="card">
      <h2>👂 听音辨词小游戏</h2>
      <p class="muted">听发音，选出正确的拼写（每题 +2 XP，答错进入记忆库）</p>
      <div id="pron-quiz"></div>
    </div>`;
  renderPronQuiz();
}

function renderPronQuiz() {
  const box = document.getElementById('pron-quiz');
  const item = PRON_QUIZ[pronQuizIdx % PRON_QUIZ.length];
  const opts = shuffle(item.opts);
  box.innerHTML = `
    <div style="margin:12px 0">
      <button class="btn yellow" onclick="speak('${esc(item.word)}')">🔊 播放发音</button>
    </div>
    ${opts.map(o => `<button class="quiz-opt" data-v="${esc(o)}">${esc(o)}</button>`).join('')}
    <div class="feedback" id="pron-fb"></div>`;
  box.querySelectorAll('.quiz-opt').forEach(btn => btn.addEventListener('click', () => {
    const ok = btn.dataset.v === item.word;
    box.querySelectorAll('.quiz-opt').forEach(b => {
      b.disabled = true;
      if (b.dataset.v === item.word) b.classList.add('correct');
    });
    const fb = document.getElementById('pron-fb');
    if (ok) {
      fb.className = 'feedback ok'; fb.textContent = '✅ ¡Muy bien! 答对了';
      addXP(2, '听音辨词', 'vocab');
    } else {
      btn.classList.add('wrong');
      fb.className = 'feedback bad'; fb.textContent = `❌ 正确拼写是 ${item.word}`;
      addMistake({ id: 'p:' + item.word, q: '听音辨词：哪个是你听到的单词？', opts: item.opts, a: item.word, say: item.word });
    }
    setTimeout(() => { pronQuizIdx++; renderPronQuiz(); }, 1400);
  }));
}

// ============================================================
// 词汇：卡片 / 测验 / 配对
// ============================================================
let vocabSession = null;

function renderVocab() {
  const el = document.getElementById('tab-vocab');
  const deckMastered = d => d.words.filter(w => (state.srs[w.es] || { b: 0 }).b >= 3).length;
  el.innerHTML = `
    <div class="card">
      <h2>🃏 词汇库（共 ${totalWords()} 词，按《现代西班牙语》一~三册整理）</h2>
      <p class="muted">记忆盒算法：认识升级、不认识重来，3 级即掌握；到期单词会出现在记忆库等你复习。建议按册顺序推进。</p>
    </div>
    ${VOCAB_BOOKS.map(bk => {
      const decks = DECKS.filter(d => d.book === bk.book);
      const tot = decks.reduce((n, d) => n + d.words.length, 0);
      const mast = decks.reduce((n, d) => n + deckMastered(d), 0);
      return `
      <div class="card" style="padding:12px 18px;margin-bottom:10px">
        <h2>${bk.icon} ${esc(bk.name)} <span class="muted" style="font-weight:400;font-size:0.85rem">${decks.length} 包 ｜ ${mast}/${tot} 已掌握</span></h2>
        <p class="muted" style="margin-top:4px;font-size:0.85rem">${esc(bk.tip)}</p>
        <div class="bar green" style="margin-top:8px;height:8px"><div style="width:${tot ? Math.round(mast / tot * 100) : 0}%"></div></div>
      </div>
      <div class="grid cols4" style="margin-bottom:18px">
        ${decks.map(d => {
          const mastered = deckMastered(d);
          return `
          <div class="deck-card" onclick="openDeck('${d.id}')">
            <div class="ic">${d.icon}</div>
            <div class="nm">${esc(d.name)}</div>
            <div class="muted">${mastered}/${d.words.length} 已掌握</div>
            <div class="bar green" style="margin-top:8px;height:8px"><div style="width:${Math.round(mastered / d.words.length * 100)}%"></div></div>
          </div>`;
        }).join('')}
      </div>`;
    }).join('')}`;
}

function openDeck(id) {
  const deck = DECKS.find(d => d.id === id);
  const el = document.getElementById('tab-vocab');
  el.innerHTML = `
    <span class="back-link" onclick="renderVocab()">← 返回词汇包</span>
    <div class="card">
      <h2>${deck.icon} ${esc(deck.name)}（${deck.words.length} 词）</h2>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:10px">
        <button class="btn" onclick="startFlash('${id}')">🃏 卡片学习</button>
        <button class="btn yellow" onclick="startVocabQuiz('${id}')">✏️ 选择测验</button>
        <button class="btn green" onclick="startMatch('${id}')">🧩 配对游戏</button>
      </div>
    </div>
    <div class="card">
      <h2>词汇列表</h2>
      ${deck.words.map(w => `
        <div class="example-row">
          <button class="speak-btn" onclick="speak('${esc(w.es)}')">🔊</button>
          <span class="es">${esc(w.es)}</span>
          ${(state.srs[w.es] || { b: 0 }).b >= 3 ? '<span title="已掌握">✅</span>' : ''}
          <span class="zh">${esc(w.zh)}</span>
        </div>`).join('')}
    </div>`;
}

// --- 卡片学习 ---
function startFlash(id) {
  const deck = DECKS.find(d => d.id === id);
  const queue = deck.words.slice().sort((a, b) => (state.srs[a.es] || { b: 0 }).b - (state.srs[b.es] || { b: 0 }).b);
  vocabSession = { deck, queue, i: 0, known: 0 };
  renderFlash();
}

function renderFlash() {
  const s = vocabSession;
  const el = document.getElementById('tab-vocab');
  if (s.i >= s.queue.length) {
    el.innerHTML = `
      <div class="card" style="text-align:center">
        <h2>🎉 本轮完成！</h2>
        <p style="margin:10px 0">认识 <b>${s.known}</b> / ${s.queue.length} 个单词</p>
        <p class="muted">不认识的单词已放回记忆盒，到期后会出现在记忆库</p>
        <div style="margin-top:14px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
          <button class="btn" onclick="startFlash('${s.deck.id}')">再来一轮</button>
          <button class="btn secondary" onclick="openDeck('${s.deck.id}')">返回</button>
        </div>
      </div>`;
    return;
  }
  const w = s.queue[s.i];
  const box = (state.srs[w.es] || { b: 0 }).b;
  el.innerHTML = `
    <span class="back-link" onclick="openDeck('${s.deck.id}')">← 退出学习</span>
    <div class="card" style="background:transparent;border:none;box-shadow:none;padding:0">
      <p class="muted" style="text-align:center;margin-bottom:10px">${s.i + 1} / ${s.queue.length} ｜ 记忆盒等级 ${box}/5 ${box >= 3 ? '✅已掌握' : ''}</p>
      <div class="flash-stage">
        <div class="flashcard" id="fcard" onclick="this.classList.toggle('flipped')">
          <div class="inner">
            <div class="face front">
              <div class="word">${esc(w.es)}</div>
              <button class="speak-btn" onclick="event.stopPropagation();speak('${esc(w.es)}')">🔊</button>
              <div class="hint">点击卡片翻面查看释义</div>
            </div>
            <div class="face back">
              <div class="zh">${esc(w.zh)}</div>
              ${w.ex ? `<div class="ex">${esc(w.ex)}<br>${esc(w.exZh || '')}</div>` : ''}
            </div>
          </div>
        </div>
        <div style="display:flex;gap:12px">
          <button class="btn secondary" onclick="flashAnswer(false)">🤔 不认识</button>
          <button class="btn green" onclick="flashAnswer(true)">😄 认识</button>
        </div>
      </div>
    </div>`;
  speak(w.es);
}

function flashAnswer(known) {
  const s = vocabSession;
  const w = s.queue[s.i];
  const before = (state.srs[w.es] || { b: 0 }).b;
  if (known) {
    srsUp(w.es);
    s.known++;
    addXP(2, '词汇复习', 'vocab');
    if (before < 3 && state.srs[w.es].b === 3) toast(`📗 已掌握「${w.es}」！`, true);
  } else {
    srsDown(w.es);
    saveState();
  }
  s.i++;
  renderFlash();
}

// --- 选择测验 ---
let quizSession = null;
function startVocabQuiz(id) {
  const deck = DECKS.find(d => d.id === id);
  const qs = shuffle(deck.words).slice(0, Math.min(8, deck.words.length)).map(w => {
    const dir = Math.random() < 0.5 ? 'es2zh' : 'zh2es';
    const others = shuffle(deck.words.filter(x => x.es !== w.es)).slice(0, 3);
    const opts = shuffle([w, ...others]);
    return { w, dir, opts };
  });
  quizSession = { deck, qs, i: 0, correct: 0 };
  renderVocabQuiz();
}

function renderVocabQuiz() {
  const s = quizSession;
  const el = document.getElementById('tab-vocab');
  if (s.i >= s.qs.length) {
    el.innerHTML = `
      <div class="card" style="text-align:center">
        <h2>${s.correct === s.qs.length ? '🏆 全对！¡Perfecto!' : '📝 测验结束'}</h2>
        <p style="margin:10px 0">答对 <b>${s.correct}</b> / ${s.qs.length} 题</p>
        <div style="margin-top:14px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
          <button class="btn" onclick="startVocabQuiz('${s.deck.id}')">再测一次</button>
          <button class="btn secondary" onclick="openDeck('${s.deck.id}')">返回</button>
        </div>
      </div>`;
    return;
  }
  const q = s.qs[s.i];
  const prompt = q.dir === 'es2zh' ? q.w.es : q.w.zh;
  el.innerHTML = `
    <span class="back-link" onclick="openDeck('${s.deck.id}')">← 退出测验</span>
    <div class="card">
      <p class="muted">第 ${s.i + 1} / ${s.qs.length} 题</p>
      <h2 style="margin:10px 0">「${esc(prompt)}」${q.dir === 'es2zh' ? '的意思是？' : '用西语怎么说？'}
        ${q.dir === 'es2zh' ? `<button class="speak-btn" onclick="speak('${esc(q.w.es)}')">🔊</button>` : ''}
      </h2>
      ${q.opts.map(o => {
        const label = q.dir === 'es2zh' ? o.zh : o.es;
        return `<button class="quiz-opt" data-es="${esc(o.es)}">${esc(label)}</button>`;
      }).join('')}
      <div class="feedback" id="vq-fb"></div>
    </div>`;
  el.querySelectorAll('.quiz-opt').forEach(btn => btn.addEventListener('click', () => {
    const ok = btn.dataset.es === q.w.es;
    el.querySelectorAll('.quiz-opt').forEach(b => {
      b.disabled = true;
      if (b.dataset.es === q.w.es) b.classList.add('correct');
    });
    const fb = document.getElementById('vq-fb');
    if (ok) {
      s.correct++;
      fb.className = 'feedback ok'; fb.textContent = '✅ ¡Correcto!';
      addXP(3, '词汇测验', 'vocab');
    } else {
      btn.classList.add('wrong');
      fb.className = 'feedback bad'; fb.textContent = `❌ 正确答案：${q.dir === 'es2zh' ? q.w.zh : q.w.es}`;
      if (q.dir === 'es2zh') {
        addMistake({ id: 'v:' + q.w.es, q: `「${q.w.es}」的意思是？`, opts: q.opts.map(o => o.zh), a: q.w.zh, say: q.w.es });
      } else {
        addMistake({ id: 'v:' + q.w.es, q: `「${q.w.zh}」用西语怎么说？`, opts: q.opts.map(o => o.es), a: q.w.es, say: q.w.es });
      }
      srsDown(q.w.es);
    }
    speak(q.w.es);
    setTimeout(() => { s.i++; renderVocabQuiz(); }, 1400);
  }));
}

// --- 配对游戏 ---
let matchState = null;
function startMatch(id) {
  const deck = DECKS.find(d => d.id === id);
  const pairs = shuffle(deck.words).slice(0, 6);
  const chips = shuffle([
    ...pairs.map(w => ({ key: w.es, label: w.es, side: 'es' })),
    ...pairs.map(w => ({ key: w.es, label: w.zh, side: 'zh' })),
  ]);
  matchState = { deck, chips, sel: null, left: pairs.length, moves: 0 };
  renderMatch();
}

function renderMatch() {
  const m = matchState;
  const el = document.getElementById('tab-vocab');
  el.innerHTML = `
    <span class="back-link" onclick="openDeck('${m.deck.id}')">← 退出游戏</span>
    <div class="card">
      <h2>🧩 配对游戏：点击配对西语和中文</h2>
      <p class="muted">剩余 ${m.left} 对 ｜ 已点击 ${m.moves} 次（完成 +10 XP）</p>
      <div class="match-grid" style="margin-top:12px">
        ${m.chips.map((c, i) => `
          <button class="match-chip ${c.done ? 'done' : ''} ${m.sel === i ? 'sel' : ''}" data-i="${i}" ${c.done ? 'disabled' : ''}>${esc(c.label)}</button>`).join('')}
      </div>
      ${m.left === 0 ? `
        <div style="text-align:center;margin-top:14px">
          <h2>🎉 全部配对成功！共点击 ${m.moves} 次</h2>
          <div style="margin-top:10px"><button class="btn" onclick="startMatch('${m.deck.id}')">再来一局</button></div>
        </div>` : ''}
    </div>`;
  el.querySelectorAll('.match-chip:not(.done)').forEach(btn => btn.addEventListener('click', () => {
    const i = +btn.dataset.i;
    const c = m.chips[i];
    if (m.sel === null) { m.sel = i; renderMatch(); return; }
    if (m.sel === i) { m.sel = null; renderMatch(); return; }
    const prev = m.chips[m.sel];
    m.moves++;
    if (prev.key === c.key && prev.side !== c.side) {
      prev.done = c.done = true;
      m.left--;
      m.sel = null;
      speak(c.key);
      if (m.left === 0) {
        state.matchGames++;
        addXP(10, '配对游戏完成', 'vocab');
      }
      renderMatch();
    } else {
      m.sel = null;
      renderMatch();
    }
  }));
}

// ============================================================
// 语法课程（三册分组 + 每日解锁 + 知识点总览）
// ============================================================
let grammarView = 'list'; // list | syllabus
function setGrammarView(v) { grammarView = v; renderGrammar(); }

function renderGrammar() {
  const el = document.getElementById('tab-grammar');
  const unlocked = unlockedLessonCount();
  const rec = LESSONS.slice(0, unlocked).find(l => !state.lessonsDone.includes(l.id));
  const header = `
    <div class="card">
      <h2>📖 语法课程（${state.lessonsDone.length}/${LESSONS.length} 已完成 ｜ 已解锁 ${unlocked} 课）</h2>
      <div class="tense-tabs" style="margin-top:10px">
        <button class="${grammarView === 'list' ? 'active' : ''}" onclick="setGrammarView('list')">📖 课程列表</button>
        <button class="${grammarView === 'syllabus' ? 'active' : ''}" onclick="setGrammarView('syllabus')">📚 知识点总览</button>
      </div>
      <p class="muted" style="margin-top:8px">按《现代西班牙语》一~三册编排，每天自动解锁 2 节新课；每课全对通关 +15 XP。
      ${state.freeMode ? '（自由模式已开启，全部课程可学）' : '想一次看全部？可在成就页开启自由模式。'}</p>
      <div class="bar green" style="margin-top:10px"><div style="width:${Math.round(state.lessonsDone.length / LESSONS.length * 100)}%"></div></div>
    </div>`;

  if (grammarView === 'syllabus') {
    el.innerHTML = header + renderSyllabus(unlocked);
    return;
  }

  el.innerHTML = header + BOOK_SYLLABUS.map(bk => {
    const items = LESSONS.map((l, i) => ({ l, i })).filter(x => x.l.book === bk.book);
    const done = items.filter(x => state.lessonsDone.includes(x.l.id)).length;
    return `
    <div class="card" style="padding:12px 18px;margin-bottom:10px">
      <h2>${bk.icon} ${esc(bk.name)} <span class="muted" style="font-weight:400;font-size:0.85rem">${done}/${items.length} 已完成</span></h2>
    </div>
    ${items.map(({ l, i }) => {
      const locked = i >= unlocked;
      const isRec = rec && rec.id === l.id;
      if (locked) {
        return `
        <div class="lesson-item locked">
          <span class="ic">🔒</span>
          <span class="tt">第 ${i + 1} 课 · ${esc(l.title)}</span>
          <span class="muted">第 ${Math.ceil((i + 1 - 3) / 2) + 1} 天解锁</span>
        </div>`;
      }
      return `
      <div class="lesson-item ${isRec ? 'recommend' : ''}" onclick="openLesson('${l.id}')">
        <span class="ic">${l.icon}</span>
        <span class="tt">第 ${i + 1} 课 · ${esc(l.title)} ${isRec ? '<span class="rec-tag">今日推荐</span>' : ''}</span>
        ${state.lessonsDone.includes(l.id) ? '<span class="done-mark">✅ 已完成</span>' : '<span class="muted">开始 →</span>'}
      </div>`;
    }).join('')}`;
  }).join('');
}

function renderSyllabus(unlocked) {
  return BOOK_SYLLABUS.map(bk => `
    <div class="card">
      <h2>${bk.icon} ${esc(bk.name)}</h2>
      ${bk.cats.map(cat => `
        <h3>${esc(cat.c)}</h3>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin:6px 0 10px">
          ${cat.pts.map(pt => {
            if (!pt.id) return `<span class="idea-chip" style="cursor:default">${esc(pt.t)}</span>`;
            const idx = LESSONS.findIndex(l => l.id === pt.id);
            const locked = idx >= unlocked;
            const done = state.lessonsDone.includes(pt.id);
            const mark = locked ? '🔒' : done ? '✅' : '📖';
            const click = locked ? `toast('🔒 该课尚未解锁，每天自动解锁 2 课')` : `openLesson('${pt.id}')`;
            return `<span class="idea-chip" onclick="${click}">${mark} ${esc(pt.t)}</span>`;
          }).join('')}
        </div>`).join('')}
    </div>`).join('');
}

let lessonQuiz = null;
function openLesson(id) {
  const l = LESSONS.find(x => x.id === id);
  const el = document.getElementById('tab-grammar');
  el.innerHTML = `
    <span class="back-link" onclick="renderGrammar()">← 返回课程列表</span>
    <div class="card">
      <h2>${l.icon} ${esc(l.title)}</h2>
      ${l.sections.map(sec => `
        <h3>${esc(sec.h)}</h3>
        <p style="font-size:0.95rem;line-height:1.7">${sec.body}</p>
        ${(sec.examples || []).map(ex => `
          <div class="example-row">
            <button class="speak-btn" onclick="speak('${esc(ex.es.replace(/[()（）]/g, ''))}')">🔊</button>
            <span class="es">${esc(ex.es)}</span>
            <span class="zh">${esc(ex.zh)}</span>
          </div>`).join('')}`).join('')}
    </div>
    <div class="card">
      <h2>✏️ 课后小测（全对通关，答错进记忆库）</h2>
      <div id="lesson-quiz"></div>
    </div>`;
  // 题池打乱抽取最多 5 道（#6：题库扩充后随机抽题，避免背答案）
  const picked = shuffle(l.quiz).slice(0, Math.min(5, l.quiz.length));
  lessonQuiz = { l, quiz: picked, i: 0, correct: 0 };
  renderLessonQuiz();
}

function renderLessonQuiz() {
  const s = lessonQuiz;
  const box = document.getElementById('lesson-quiz');
  if (s.i >= s.quiz.length) {
    const passed = s.correct === s.quiz.length;
    if (passed && !state.lessonsDone.includes(s.l.id)) {
      state.lessonsDone.push(s.l.id);
      addXP(15, '语法课通关', 'grammar');
    }
    box.innerHTML = `
      <div style="text-align:center">
        <h2 style="margin:10px 0">${passed ? '🎉 全对通关！¡Excelente!' : `答对 ${s.correct}/${s.quiz.length}，再试一次吧`}</h2>
        ${passed ? recommendAfterLesson(s.l) : ''}
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:10px">
          ${passed ? '' : `<button class="btn" onclick="openLesson('${s.l.id}')">重新学习</button>`}
          <button class="btn ${passed ? '' : 'secondary'}" onclick="renderGrammar()">返回课程列表</button>
        </div>
      </div>`;
    return;
  }
  const q = s.quiz[s.i];
  box.innerHTML = `
    <p class="muted">第 ${s.i + 1} / ${s.quiz.length} 题（题库随机抽题）</p>
    <h3 style="margin:8px 0">${esc(q.q)}</h3>
    ${q.opts.map((o, oi) => `<button class="quiz-opt" data-i="${oi}">${esc(o)}</button>`).join('')}
    <div class="feedback" id="lq-fb"></div>`;
  box.querySelectorAll('.quiz-opt').forEach(btn => btn.addEventListener('click', () => {
    const ok = +btn.dataset.i === q.a;
    box.querySelectorAll('.quiz-opt').forEach(b => {
      b.disabled = true;
      if (+b.dataset.i === q.a) b.classList.add('correct');
    });
    const fb = document.getElementById('lq-fb');
    if (ok) {
      s.correct++;
      fb.className = 'feedback ok';
      fb.textContent = '✅ ¡Correcto!' + (q.why ? ' ' + q.why : '');
      addXP(3, '语法测验', 'grammar');
    } else {
      btn.classList.add('wrong');
      fb.className = 'feedback bad';
      fb.textContent = '❌ ' + (q.why || `正确答案：${q.opts[q.a]}`);
      addMistake({ id: `g:${s.l.id}:${esc(q.q).slice(0, 20)}`, q: q.q, opts: q.opts, a: q.opts[q.a] });
    }
    setTimeout(() => { s.i++; renderLessonQuiz(); }, 1600);
  }));
}

// #8 学完某课后推荐关联练习
const LESSON_LINKS = {
  l5: { tab: 'tense', label: '去「时态」练 ser 的变位' },
  l6: { tab: 'tense', label: '去「时态」对比 ser / estar' },
  l7: { tab: 'tense', label: '去「时态」练规则动词现在时' },
  l8: { tab: 'tense', label: '去「时态」练 tener / ir / hacer' },
  l10: { tab: 'speak', label: '去「口语」用 gustar 说说你的喜好' },
  l22: { tab: 'tense', label: '去「时态」练两种过去时' },
  l24: { tab: 'tense', label: '去「时态」练将来时' },
  l25: { tab: 'speak', label: '去「口语」的对话「问时间」练一练' },
  l42: { tab: 'tense', label: '去「时态」练条件式变位' },
  l43: { tab: 'tense', label: '去「时态」练虚拟式变位' },
  l49: { tab: 'read', label: '去「阅读」看含条件句的短文' },
};
function recommendAfterLesson(l) {
  const link = LESSON_LINKS[l.id];
  const parts = [];
  if (link) parts.push(`<button class="btn yellow small" onclick="switchTab('${link.tab}')">🔗 ${esc(link.label)}</button>`);
  parts.push(`<button class="btn small secondary" onclick="switchTab('tense');setTenseMode('context')">🎯 用「语境填空」巩固时态</button>`);
  return `<p class="muted" style="margin:8px 0">趁热打铁 →</p><div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">${parts.join('')}</div>`;
}

// ============================================================
// 时态训练（5 个时态 × 15 个动词）
// ============================================================
let tenseId = 'presente';
let tenseMode = 'study';
let conjQ = null;

function renderTense() {
  const el = document.getElementById('tab-tense');
  const t = TENSES.find(x => x.id === tenseId);
  const ctx = tenseMode === 'context';
  el.innerHTML = `
    <div class="card">
      <h2>⏳ 时态训练（${TENSES.length} 个时态 × ${VERBS.length} 个动词）</h2>
      ${ctx ? '' : `
      <div class="tense-tabs">
        ${TENSES.map(x => `<button class="${x.id === tenseId ? 'active' : ''}" onclick="setTense('${x.id}')">${x.icon} ${x.name}</button>`).join('')}
      </div>
      <p class="muted">${t.icon} <b>${t.name}</b>：${t.zh}</p>`}
      <div class="tense-tabs" style="margin-top:12px">
        <button class="${tenseMode === 'study' ? 'active' : ''}" onclick="setTenseMode('study')">📖 变位表</button>
        <button class="${tenseMode === 'choice' ? 'active' : ''}" onclick="setTenseMode('choice')">🎯 选择练习</button>
        <button class="${tenseMode === 'type' ? 'active' : ''}" onclick="setTenseMode('type')">⌨️ 拼写练习</button>
        <button class="${ctx ? 'active' : ''}" onclick="setTenseMode('context')">📝 语境填空</button>
      </div>
      ${ctx ? '<p class="muted" style="margin-top:8px">在真实句子里选对时态与变位——混合所有时态，最接近实战。答对 +4 XP。</p>' : ''}
    </div>
    <div id="tense-body"></div>`;
  if (tenseMode === 'study') renderConjTables();
  else if (tenseMode === 'context') renderContextFill();
  else renderConjDrill();
}

// #3 语境填空
let ctxQ = null;
function newCtxQ() { ctxQ = CONTEXT_FILL[Math.floor(Math.random() * CONTEXT_FILL.length)]; }
function renderContextFill() {
  const body = document.getElementById('tense-body');
  if (!ctxQ) newCtxQ();
  const q = ctxQ;
  const opts = shuffle(q.opts.slice());
  const sentence = esc(q.s).replace('___', '<b style="color:var(--orange)">______</b>');
  body.innerHTML = `
    <div class="card">
      <p class="muted">已答对 ${state.contextCorrect || 0} 题 ｜ 提示：${esc(q.tip)}</p>
      <h2 style="margin:12px 0;line-height:1.6">${sentence}</h2>
      <p class="muted">动词原形：<b>${esc(q.inf)}</b> ｜ 句意：${esc(q.zh)}</p>
      <div style="margin-top:10px">
        ${opts.map(o => `<button class="quiz-opt" data-v="${esc(o)}">${esc(o)}</button>`).join('')}
      </div>
      <div class="feedback" id="ctx-fb"></div>
    </div>`;
  body.querySelectorAll('.quiz-opt').forEach(btn => btn.addEventListener('click', () => {
    const ok = btn.dataset.v === q.a;
    body.querySelectorAll('.quiz-opt').forEach(b => {
      b.disabled = true;
      if (b.dataset.v === q.a) b.classList.add('correct');
    });
    const fb = document.getElementById('ctx-fb');
    if (ok) {
      state.contextCorrect = (state.contextCorrect || 0) + 1;
      fb.className = 'feedback ok';
      fb.textContent = `✅ ${q.s.replace('___', q.a)}`;
      addXP(4, '语境填空', 'tense');
    } else {
      btn.classList.add('wrong');
      fb.className = 'feedback bad';
      fb.textContent = `❌ 正确：${q.a}（${q.tip}）`;
      addMistake({ id: 'ctx:' + q.s, q: `${q.s}（${q.inf}）`, opts: q.opts, a: q.a });
    }
    speak(q.s.replace('___', q.a));
    setTimeout(() => { newCtxQ(); renderContextFill(); }, 1800);
  }));
}
function setTense(id) { tenseId = id; conjQ = null; renderTense(); }
function setTenseMode(m) { tenseMode = m; conjQ = null; renderTense(); }

function renderConjTables() {
  const body = document.getElementById('tense-body');
  body.innerHTML = `
    <div class="grid cols3">
      ${VERBS.map(v => `
        <div class="card" style="margin-bottom:0">
          <h2>${esc(v.inf)} <span class="muted" style="font-weight:400">${esc(v.zh)} · ${esc(v.tag)}</span>
            <button class="speak-btn" onclick="speak('${esc(v.inf)}')">🔊</button></h2>
          <table class="conj">
            ${PRONOUNS.map((p, i) => `
              <tr><th>${esc(p)}</th><td class="form" style="cursor:pointer" onclick="speak('${esc(conj(v, tenseId)[i])}')">${esc(conj(v, tenseId)[i])} 🔉</td></tr>`).join('')}
          </table>
        </div>`).join('')}
    </div>`;
}

function newConjQ() {
  const v = VERBS[Math.floor(Math.random() * VERBS.length)];
  const pi = Math.floor(Math.random() * 6);
  return { v, pi, answer: conj(v, tenseId)[pi] };
}

function conjMistake(q, opts) {
  const t = TENSES.find(x => x.id === tenseId);
  addMistake({
    id: `c:${q.v.inf}:${tenseId}:${q.pi}`,
    q: `${PRONOUNS[q.pi]}（${PRONOUNS_ZH[q.pi]}）+ ${q.v.inf}（${q.v.zh}，${t.name}）= ?`,
    opts, a: q.answer, say: q.answer,
  });
}

function renderConjDrill() {
  const body = document.getElementById('tense-body');
  if (!conjQ) conjQ = newConjQ();
  const q = conjQ;
  const t = TENSES.find(x => x.id === tenseId);

  if (tenseMode === 'choice') {
    const wrongs = shuffle(conj(q.v, tenseId).filter(f => f !== q.answer)).slice(0, 3);
    const opts = shuffle([q.answer, ...wrongs]);
    body.innerHTML = `
      <div class="card">
        <p class="muted">${t.name} ｜ 每题 +3 XP ｜ 已答对 ${state.conjCorrect} 题</p>
        <h2 style="margin:12px 0">
          <span style="color:var(--orange)">${esc(PRONOUNS[q.pi])}</span>（${PRONOUNS_ZH[q.pi]}）
          + <b>${esc(q.v.inf)}</b>（${esc(q.v.zh)}）= ?
        </h2>
        ${opts.map(o => `<button class="quiz-opt" data-v="${esc(o)}">${esc(o)}</button>`).join('')}
        <div class="feedback" id="cj-fb"></div>
      </div>`;
    body.querySelectorAll('.quiz-opt').forEach(btn => btn.addEventListener('click', () => {
      const ok = btn.dataset.v === q.answer;
      body.querySelectorAll('.quiz-opt').forEach(b => {
        b.disabled = true;
        if (b.dataset.v === q.answer) b.classList.add('correct');
      });
      const fb = document.getElementById('cj-fb');
      if (ok) {
        state.conjCorrect++;
        fb.className = 'feedback ok'; fb.textContent = '✅ ¡Correcto!';
        addXP(3, '动词变位', 'tense');
      } else {
        btn.classList.add('wrong');
        fb.className = 'feedback bad'; fb.textContent = `❌ 正确答案：${q.answer}`;
        conjMistake(q, opts);
      }
      speak(q.answer);
      setTimeout(() => { conjQ = newConjQ(); renderConjDrill(); }, 1300);
    }));
  } else {
    body.innerHTML = `
      <div class="card">
        <p class="muted">${t.name} ｜ 每题 +4 XP ｜ 已答对 ${state.conjCorrect} 题</p>
        <h2 style="margin:12px 0">
          <span style="color:var(--orange)">${esc(PRONOUNS[q.pi])}</span>（${PRONOUNS_ZH[q.pi]}）
          + <b>${esc(q.v.inf)}</b>（${esc(q.v.zh)}）= ?
        </h2>
        <input class="answer" id="cj-input" autocomplete="off" placeholder="输入变位形式后回车" />
        <div class="accent-keys">
          ${['á', 'é', 'í', 'ó', 'ú', 'ñ'].map(c => `<button onclick="insertChar('cj-input','${c}')">${c}</button>`).join('')}
        </div>
        <div style="margin-top:12px">
          <button class="btn" onclick="checkTyped()">检查</button>
          <button class="btn secondary" onclick="conjQ=newConjQ();renderConjDrill()">跳过</button>
        </div>
        <div class="feedback" id="cj-fb"></div>
      </div>`;
    const input = document.getElementById('cj-input');
    input.focus();
    input.addEventListener('keydown', e => { if (e.key === 'Enter') checkTyped(); });
  }
}

function insertChar(inputId, c) {
  const input = document.getElementById(inputId);
  input.value += c;
  input.focus();
}

function checkTyped() {
  const q = conjQ;
  const input = document.getElementById('cj-input');
  const fb = document.getElementById('cj-fb');
  const val = input.value.trim().toLowerCase();
  if (!val) return;
  if (val === q.answer) {
    state.conjCorrect++;
    fb.className = 'feedback ok'; fb.textContent = '✅ ¡Perfecto! 拼写完全正确';
    addXP(4, '变位拼写', 'tense');
    speak(q.answer);
    setTimeout(() => { conjQ = newConjQ(); renderConjDrill(); }, 1200);
  } else if (normalizeEs(val) === normalizeEs(q.answer)) {
    fb.className = 'feedback bad'; fb.textContent = `⚠️ 差一点！注意重音符号：${q.answer}`;
  } else {
    fb.className = 'feedback bad'; fb.textContent = `❌ 正确答案：${q.answer}`;
    const wrongs = shuffle(conj(q.v, tenseId).filter(f => f !== q.answer)).slice(0, 3);
    conjMistake(q, shuffle([q.answer, ...wrongs]));
    speak(q.answer);
    setTimeout(() => { conjQ = newConjQ(); renderConjDrill(); }, 1600);
  }
}

// ============================================================
// 句型拼句
// ============================================================
let sentQ = null;

function newSentence() {
  const sent = SENTENCES[Math.floor(Math.random() * SENTENCES.length)];
  const words = sent.es.split(' ');
  let pool = shuffle(words);
  if (words.length > 2) {
    let guard = 0;
    while (pool.join(' ') === words.join(' ') && guard++ < 10) pool = shuffle(words);
  }
  sentQ = { sent, words, pool: pool.map((w, i) => ({ w, id: i, used: false })), picked: [] };
}

function renderSentence() {
  const el = document.getElementById('tab-sentence');
  if (!sentQ) newSentence();
  const q = sentQ;
  el.innerHTML = `
    <div class="card">
      <h2>🧱 句型拼句（拼对 +5 XP，已拼对 ${state.sentCorrect} 句）</h2>
      <p class="muted" style="margin:6px 0 12px">把打乱的单词点回正确顺序，翻译：<b>${esc(q.sent.zh)}</b></p>
      <div class="chip-answer" id="sent-answer">
        ${q.picked.map((p, i) => `<button class="word-chip" onclick="unpickWord(${i})">${esc(p.w)}</button>`).join('') || '<span class="muted" style="align-self:center">点击下方单词组成句子…</span>'}
      </div>
      <div class="chip-pool">
        ${q.pool.map((p, i) => p.used ? '' : `<button class="word-chip" onclick="pickWord(${i})">${esc(p.w)}</button>`).join('')}
      </div>
      <div style="margin-top:16px;display:flex;gap:10px;flex-wrap:wrap">
        <button class="btn" onclick="checkSentence()" ${q.picked.length !== q.words.length ? 'disabled' : ''}>检查</button>
        <button class="btn secondary" onclick="newSentence();renderSentence()">换一句</button>
        <button class="btn yellow" onclick="speak('${esc(q.sent.es)}')">🔊 听整句</button>
      </div>
      <div class="feedback" id="sent-fb"></div>
    </div>`;
}

function pickWord(i) {
  sentQ.pool[i].used = true;
  sentQ.picked.push(sentQ.pool[i]);
  renderSentence();
}
function unpickWord(i) {
  const p = sentQ.picked.splice(i, 1)[0];
  sentQ.pool[p.id].used = false;
  renderSentence();
}
function checkSentence() {
  const q = sentQ;
  const fb = document.getElementById('sent-fb');
  const guess = q.picked.map(p => p.w).join(' ');
  if (guess === q.sent.es) {
    state.sentCorrect++;
    fb.className = 'feedback ok';
    fb.textContent = `✅ ¡Muy bien! ${q.sent.es} —— ${q.sent.zh}`;
    addXP(5, '句子拼对', 'grammar');
    speak(q.sent.es);
    setTimeout(() => { newSentence(); renderSentence(); }, 1800);
  } else {
    fb.className = 'feedback bad';
    fb.textContent = '❌ 顺序不对，再想想～（点击已选单词可以放回）';
    // 生成两个错误语序，收进错题本
    const wrongs = [];
    let guard = 0;
    while (wrongs.length < 2 && guard++ < 20) {
      const cand = shuffle(q.words).join(' ');
      if (cand !== q.sent.es && !wrongs.includes(cand)) wrongs.push(cand);
    }
    if (wrongs.length === 2) {
      addMistake({ id: 's:' + q.sent.es, q: `哪个语序正确？（${q.sent.zh}）`, opts: [q.sent.es, ...wrongs], a: q.sent.es, say: q.sent.es });
    }
    saveState();
  }
}

// ============================================================
// 口语表达（跟读 / 情景问答 / 看中文说 / 自由表达）
// ============================================================
let speakMode = 'read';
let qaIdx = 0, trIdx = 0, topicIdx = 0;

function setSpeakMode(m) { speakMode = m; renderSpeak(); }

function renderSpeak() {
  const el = document.getElementById('tab-speak');
  const header = `
    <div class="card">
      <h2>🎤 口语表达训练</h2>
      <div class="tense-tabs" style="margin-top:10px">
        <button class="${speakMode === 'read' ? 'active' : ''}" onclick="setSpeakMode('read')">🔁 场景跟读</button>
        <button class="${speakMode === 'dialog' ? 'active' : ''}" onclick="setSpeakMode('dialog')">🎭 情景对话</button>
        <button class="${speakMode === 'qa' ? 'active' : ''}" onclick="setSpeakMode('qa')">💬 情景问答</button>
        <button class="${speakMode === 'tr' ? 'active' : ''}" onclick="setSpeakMode('tr')">🔄 看中文说西语</button>
        <button class="${speakMode === 'topic' ? 'active' : ''}" onclick="setSpeakMode('topic')">🗣️ 自由表达</button>
      </div>
      <p class="muted" style="margin-top:8px">已跟读 ${state.speakCount} 次 ｜ 问答通过 ${state.qaCount} 次 ｜ 对话达标 ${state.dialogCount || 0} 句
      ${SR ? '' : '<br>⚠️ 当前浏览器不支持语音识别，建议使用 Chrome / Edge；所有模式都支持文字输入作答。'}</p>
    </div>`;
  let body = '';
  if (speakMode === 'read') body = renderSpeakRead();
  else if (speakMode === 'dialog') body = renderSpeakDialog();
  else if (speakMode === 'qa') body = renderSpeakQA();
  else if (speakMode === 'tr') body = renderSpeakTr();
  else body = renderSpeakTopic();
  el.innerHTML = header + body;
  if (speakMode === 'qa') speak(QA_ITEMS[qaIdx % QA_ITEMS.length].q);
}

// --- 模式1：场景跟读 ---
function renderSpeakRead() {
  return SPEAK_SCENES.map(sc => `
    <div class="card">
      <h2>${sc.icon} ${esc(sc.name)}</h2>
      ${sc.phrases.map((p, i) => `
        <div class="phrase-card">
          <div class="top">
            <button class="speak-btn" onclick="speak('${esc(p.es)}')">🔊</button>
            <span class="es">${esc(p.es)}</span>
            ${SR ? `<button class="mic-btn" id="mic-${sc.id}-${i}" onclick="startRecog('${sc.id}', ${i})">🎤</button>` : ''}
          </div>
          <div class="zh">${esc(p.zh)}</div>
          <div class="speak-result" id="res-${sc.id}-${i}"></div>
        </div>`).join('')}
    </div>`).join('');
}

function startRecog(sceneId, i) {
  const scene = SPEAK_SCENES.find(s => s.id === sceneId);
  const target = scene.phrases[i].es;
  const micBtn = document.getElementById(`mic-${sceneId}-${i}`);
  const resEl = document.getElementById(`res-${sceneId}-${i}`);
  micBtn.classList.add('listening');
  recognizeOnce(alts => {
    let best = { text: alts[0] || '', score: 0 };
    alts.forEach(t => {
      const sc = similarity(t, target);
      if (sc > best.score) best = { text: t, score: sc };
    });
    let cls = 'score-bad', msg = '再试一次，先多听几遍标准发音～';
    if (best.score >= 80) { cls = 'score-good'; msg = '¡Excelente! 发音很棒！'; }
    else if (best.score >= 55) { cls = 'score-mid'; msg = '不错！注意听清每个音节再模仿。'; }
    resEl.innerHTML = `识别到：「${esc(best.text)}」 · 相似度 <span class="${cls}">${best.score} 分</span> ${msg}`;
    if (best.score >= 80) {
      state.speakCount++;
      addXP(5, '口语跟读', 'speak');
    } else saveState();
  }, (msg, ended) => {
    if (msg) resEl.innerHTML = `<span class="muted">${msg}</span>`;
    if (ended) micBtn.classList.remove('listening');
  });
}

// --- 模式2：情景问答 ---
function renderSpeakQA() {
  const item = QA_ITEMS[qaIdx % QA_ITEMS.length];
  return `
    <div class="card">
      <h2>💬 情景问答（第 ${qaIdx % QA_ITEMS.length + 1}/${QA_ITEMS.length} 题，回答有效 +6 XP）</h2>
      <p class="muted">听问题，用西语回答自己的真实情况。想不出来可以先看参考回答再说一遍。</p>
      <div class="example-row" style="margin-top:12px">
        <button class="speak-btn" onclick="speak('${esc(item.q)}')">🔊</button>
        <span class="es" style="font-size:1.15rem">${esc(item.q)}</span>
        <span class="zh">${esc(item.zh)}</span>
      </div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:14px;align-items:center">
        ${SR ? `<button class="mic-btn" id="qa-mic" style="width:44px;height:44px;font-size:1.3rem" onclick="qaMic()">🎤</button>` : ''}
        <input class="answer" id="qa-input" autocomplete="off" placeholder="或用文字输入回答…" style="flex:1;min-width:200px" />
        <button class="btn" onclick="qaCheckText()">提交</button>
      </div>
      <div class="accent-keys">
        ${['á', 'é', 'í', 'ó', 'ú', 'ñ', '¿', '¡'].map(c => `<button onclick="insertChar('qa-input','${c}')">${c}</button>`).join('')}
      </div>
      <div class="speak-result" id="qa-res" style="margin-top:12px"></div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:14px">
        <button class="btn secondary" onclick="qaShowSample()">💡 看参考回答</button>
        <button class="btn yellow" onclick="qaIdx++;renderSpeak()">下一题 →</button>
      </div>
      <div id="qa-sample" style="display:none;margin-top:10px" class="sample-box">
        <b>参考回答：</b>${esc(item.sample)}
        <button class="speak-btn" onclick="speak('${esc(item.sample)}')">🔊</button>
        <div class="muted">${esc(item.sampleZh)}（换成你自己的信息说一遍！）</div>
      </div>
    </div>`;
}

function qaEvaluate(text) {
  if (!text.trim()) return;
  const item = QA_ITEMS[qaIdx % QA_ITEMS.length];
  const norm = ' ' + normalizeEs(text) + ' ';
  const hit = item.accept.some(k => norm.includes(k.trim()));
  const res = document.getElementById('qa-res');
  if (hit) {
    state.qaCount++;
    res.innerHTML = `你的回答：「${esc(text)}」 <span class="score-good">✅ 回答有效！¡Muy bien!</span>`;
    addXP(6, '情景问答', 'speak');
  } else {
    res.innerHTML = `你的回答：「${esc(text)}」 <span class="score-mid">🤔 似乎没用到常见句型，看看参考回答再试一次？</span>`;
    saveState();
  }
}
function qaMic() {
  const mic = document.getElementById('qa-mic');
  const res = document.getElementById('qa-res');
  mic.classList.add('listening');
  recognizeOnce(alts => qaEvaluate(alts[0] || ''), (msg, ended) => {
    if (msg) res.innerHTML = `<span class="muted">${msg}</span>`;
    if (ended) mic.classList.remove('listening');
  });
}
function qaCheckText() { qaEvaluate(document.getElementById('qa-input').value); }
function qaShowSample() {
  const b = document.getElementById('qa-sample');
  b.style.display = b.style.display === 'none' ? 'block' : 'none';
}

// --- 模式3：看中文说西语 ---
function renderSpeakTr() {
  const item = SPEAK_TRANSLATE[trIdx % SPEAK_TRANSLATE.length];
  return `
    <div class="card">
      <h2>🔄 看中文说西语（第 ${trIdx % SPEAK_TRANSLATE.length + 1}/${SPEAK_TRANSLATE.length} 句，相似度 ≥70 得 +5 XP）</h2>
      <p style="font-size:1.3rem;font-weight:700;margin:14px 0">「${esc(item.zh)}」</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center">
        ${SR ? `<button class="mic-btn" id="tr-mic" style="width:44px;height:44px;font-size:1.3rem" onclick="trMic()">🎤</button>` : ''}
        <input class="answer" id="tr-input" autocomplete="off" placeholder="或用文字输入西语…" style="flex:1;min-width:200px" />
        <button class="btn" onclick="trCheckText()">提交</button>
      </div>
      <div class="accent-keys">
        ${['á', 'é', 'í', 'ó', 'ú', 'ñ', '¿', '¡'].map(c => `<button onclick="insertChar('tr-input','${c}')">${c}</button>`).join('')}
      </div>
      <div class="speak-result" id="tr-res" style="margin-top:12px"></div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:14px">
        <button class="btn secondary" onclick="trShowAnswer()">💡 看答案并朗读</button>
        <button class="btn yellow" onclick="trIdx++;renderSpeak()">下一句 →</button>
      </div>
      <div id="tr-answer" style="display:none;margin-top:10px" class="sample-box"></div>
    </div>`;
}
function trEvaluate(text) {
  if (!text.trim()) return;
  const item = SPEAK_TRANSLATE[trIdx % SPEAK_TRANSLATE.length];
  const score = similarity(text, item.es);
  const res = document.getElementById('tr-res');
  let cls = 'score-bad', msg = '差距有点大，看看答案再练～';
  if (score >= 70) { cls = 'score-good'; msg = '¡Muy bien! 表达正确！'; }
  else if (score >= 45) { cls = 'score-mid'; msg = '接近了！对照答案找找差别。'; }
  res.innerHTML = `你说的：「${esc(text)}」 · 相似度 <span class="${cls}">${score} 分</span> ${msg}`;
  if (score >= 70) {
    state.speakCount++;
    addXP(5, '中译西表达', 'speak');
  } else saveState();
}
function trMic() {
  const mic = document.getElementById('tr-mic');
  const res = document.getElementById('tr-res');
  const item = SPEAK_TRANSLATE[trIdx % SPEAK_TRANSLATE.length];
  mic.classList.add('listening');
  recognizeOnce(alts => {
    let best = alts[0] || '';
    let bestScore = -1;
    alts.forEach(t => { const sc = similarity(t, item.es); if (sc > bestScore) { bestScore = sc; best = t; } });
    trEvaluate(best);
  }, (msg, ended) => {
    if (msg) res.innerHTML = `<span class="muted">${msg}</span>`;
    if (ended) mic.classList.remove('listening');
  });
}
function trCheckText() { trEvaluate(document.getElementById('tr-input').value); }
function trShowAnswer() {
  const item = SPEAK_TRANSLATE[trIdx % SPEAK_TRANSLATE.length];
  const b = document.getElementById('tr-answer');
  b.innerHTML = `<b>答案：</b>${esc(item.es)} <button class="speak-btn" onclick="speak('${esc(item.es)}')">🔊</button>`;
  b.style.display = 'block';
  speak(item.es);
}

// --- 模式4：自由表达 ---
function renderSpeakTopic() {
  const item = SPEAK_TOPICS[topicIdx % SPEAK_TOPICS.length];
  return `
    <div class="card">
      <h2>🗣️ 自由表达：${esc(item.t)}（${esc(item.zh)}）</h2>
      <p class="muted">围绕话题连续说（或写）至少 <b>${item.min}</b> 个单词，达标 +8 XP。参考句型（点击可听发音）：</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin:10px 0">
        ${item.ideas.map(i => `<span class="idea-chip" onclick="speak('${esc(i.replace(/\.\.\./g, ''))}')">${esc(i)} 🔉</span>`).join('')}
      </div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:flex-start;margin-top:8px">
        ${SR ? `<button class="mic-btn" id="topic-mic" style="width:44px;height:44px;font-size:1.3rem" onclick="topicMic()">🎤</button>` : ''}
        <textarea class="essay" id="topic-input" rows="3" placeholder="或在这里用西语写下你的表达…" style="flex:1;min-width:220px"></textarea>
      </div>
      <div class="accent-keys">
        ${['á', 'é', 'í', 'ó', 'ú', 'ñ', '¿', '¡'].map(c => `<button onclick="insertChar('topic-input','${c}')">${c}</button>`).join('')}
      </div>
      <div style="margin-top:10px;display:flex;gap:10px;flex-wrap:wrap">
        <button class="btn" onclick="topicCheckText()">提交</button>
        <button class="btn yellow" onclick="topicIdx++;renderSpeak()">换个话题 →</button>
      </div>
      <div class="speak-result" id="topic-res" style="margin-top:12px"></div>
    </div>`;
}
function topicEvaluate(text) {
  if (!text.trim()) return;
  const item = SPEAK_TOPICS[topicIdx % SPEAK_TOPICS.length];
  const n = wordCount(text);
  const res = document.getElementById('topic-res');
  if (n >= item.min) {
    state.speakCount++;
    res.innerHTML = `你的表达（${n} 词）：「${esc(text)}」<br><span class="score-good">✅ 达标！坚持开口/动笔就是最好的练习。</span>`;
    addXP(8, '自由表达', 'speak');
  } else {
    res.innerHTML = `你的表达（${n} 词）：「${esc(text)}」<br><span class="score-mid">还差 ${item.min - n} 个词，试着多说两句（用上参考句型）。</span>`;
    saveState();
  }
}
function topicMic() {
  const mic = document.getElementById('topic-mic');
  const res = document.getElementById('topic-res');
  mic.classList.add('listening');
  recognizeOnce(alts => {
    const t = alts[0] || '';
    const input = document.getElementById('topic-input');
    input.value = (input.value ? input.value + ' ' : '') + t;
    topicEvaluate(input.value);
  }, (msg, ended) => {
    if (msg) res.innerHTML = `<span class="muted">${msg}</span>`;
    if (ended) mic.classList.remove('listening');
  });
}
function topicCheckText() { topicEvaluate(document.getElementById('topic-input').value); }

// --- 模式5：情景对话（角色扮演，现西课文风格） ---
let dialogIdx = 0;
function setDialog(i) { dialogIdx = i; renderSpeak(); }

function renderSpeakDialog() {
  const d = DIALOGUES[dialogIdx % DIALOGUES.length];
  return `
    <div class="card">
      <h2>🎭 情景对话：你来扮演 <b style="color:var(--orange)">${d.userRole}</b> 角色（每句达标 +4 XP）</h2>
      <p class="muted">例句取材《现代西班牙语》经典课文句型。先听整段，再逐句扮演你的角色（点 🎤 跟读打分）。</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin:10px 0">
        ${DIALOGUES.map((x, i) => `<span class="idea-chip" style="${i === dialogIdx % DIALOGUES.length ? 'border-color:var(--orange);background:#fff4e0' : ''}" onclick="setDialog(${i})">${x.icon} ${esc(x.name)}</span>`).join('')}
      </div>
      <div style="margin:6px 0 14px">
        <button class="btn yellow" onclick="speakSeq(${esc(JSON.stringify(d.lines.map(l => l.es)))})">▶️ 听整段对话</button>
      </div>
      ${d.lines.map((l, i) => {
        const mine = l.who === d.userRole;
        return `
        <div class="phrase-card" style="${mine ? 'border-color:var(--yellow);background:#fffdf4' : ''}">
          <div class="top">
            <span style="font-weight:800;color:${mine ? 'var(--orange)' : 'var(--ink-soft)'};width:26px">${l.who}${mine ? '⭐' : ''}</span>
            <button class="speak-btn" onclick="speak('${esc(l.es)}')">🔊</button>
            <span class="es">${esc(l.es)}</span>
            ${mine && SR ? `<button class="mic-btn" id="dlg-mic-${i}" onclick="dialogMic(${i})">🎤</button>` : ''}
          </div>
          <div class="zh">${esc(l.zh)}</div>
          <div class="speak-result" id="dlg-res-${i}"></div>
        </div>`;
      }).join('')}
    </div>`;
}

function dialogMic(i) {
  const d = DIALOGUES[dialogIdx % DIALOGUES.length];
  const target = d.lines[i].es;
  const micBtn = document.getElementById(`dlg-mic-${i}`);
  const resEl = document.getElementById(`dlg-res-${i}`);
  micBtn.classList.add('listening');
  recognizeOnce(alts => {
    let best = { text: alts[0] || '', score: 0 };
    alts.forEach(t => {
      const sc = similarity(t, target);
      if (sc > best.score) best = { text: t, score: sc };
    });
    let cls = 'score-bad', msg = '再听一遍原句，模仿语调重试～';
    if (best.score >= 75) { cls = 'score-good'; msg = '¡Perfecto! 入戏了！'; }
    else if (best.score >= 50) { cls = 'score-mid'; msg = '接近了，注意连读。'; }
    resEl.innerHTML = `识别到：「${esc(best.text)}」 · 相似度 <span class="${cls}">${best.score} 分</span> ${msg}`;
    if (best.score >= 75) {
      state.dialogCount = (state.dialogCount || 0) + 1;
      addXP(4, '对话扮演', 'speak');
    } else saveState();
  }, (msg, ended) => {
    if (msg) resEl.innerHTML = `<span class="muted">${msg}</span>`;
    if (ended) micBtn.classList.remove('listening');
  });
}

// ============================================================
// 小作文
// ============================================================
function renderWrite() {
  const el = document.getElementById('tab-write');
  el.innerHTML = `
    <div class="card">
      <h2>✍️ 小作文（已通过 ${state.essaysDone.length}/${WRITING_PROMPTS.length} 篇）</h2>
      <p class="muted">每篇有字数和句型要求，提交后自动批改；首次通过 +20 XP，重写通过 +8 XP。写完再对照范文，进步最快！</p>
    </div>
    <div class="grid cols4">
      ${WRITING_PROMPTS.map(p => `
        <div class="deck-card" onclick="openPrompt('${p.id}')">
          <div class="ic">${p.icon}</div>
          <div class="nm">${esc(p.title)}</div>
          <div class="muted">${esc(p.es)}</div>
          ${state.essaysDone.includes(p.id) ? '<div class="done-mark" style="margin-top:6px">✅ 已通过</div>' : `<div class="muted" style="margin-top:6px">≥${p.minWords} 词</div>`}
        </div>`).join('')}
    </div>`;
}

let curPrompt = null;
function openPrompt(id) {
  curPrompt = WRITING_PROMPTS.find(p => p.id === id);
  const p = curPrompt;
  const el = document.getElementById('tab-write');
  const draft = state.drafts[id] || '';
  el.innerHTML = `
    <span class="back-link" onclick="renderWrite()">← 返回题目列表</span>
    <div class="card">
      <h2>${p.icon} ${esc(p.title)} · <i>${esc(p.es)}</i></h2>
      <h3>📋 写作要求</h3>
      <ul style="font-size:0.92rem;line-height:1.9;padding-left:20px">
        <li>不少于 <b>${p.minWords}</b> 个单词</li>
        ${p.must.map(m => `<li>${esc(m.label)}</li>`).join('')}
      </ul>
      <h3>💡 可以用上这些表达</h3>
      ${p.helps.map(h => `
        <div class="example-row">
          <button class="speak-btn" onclick="speak('${esc(h.es.replace(/\.\.\./g, ''))}')">🔊</button>
          <span class="es">${esc(h.es)}</span>
          <span class="zh">${esc(h.zh)}</span>
        </div>`).join('')}
    </div>
    <div class="card">
      <h3>你的作文（自动保存草稿 ｜ 当前 <span id="essay-wc">${wordCount(draft)}</span> 词）</h3>
      <textarea class="essay" id="essay-input" rows="8" placeholder="在这里用西班牙语写…">${esc(draft)}</textarea>
      <div class="accent-keys">
        ${['á', 'é', 'í', 'ó', 'ú', 'ñ', '¿', '¡'].map(c => `<button onclick="insertChar('essay-input','${c}')">${c}</button>`).join('')}
      </div>
      <div style="margin-top:12px;display:flex;gap:10px;flex-wrap:wrap">
        <button class="btn" onclick="checkEssay()">📝 检查并提交</button>
        <button class="btn secondary" onclick="toggleSample()">📖 看范文</button>
      </div>
      <div id="essay-result" style="margin-top:12px"></div>
      <div id="essay-sample" style="display:none;margin-top:12px" class="sample-box">
        <b>范文：</b><button class="speak-btn" onclick="speak('${esc(p.sample.es)}')">🔊</button>
        <p style="margin:8px 0;font-style:italic">${esc(p.sample.es)}</p>
        <p class="muted">${esc(p.sample.zh)}</p>
      </div>
    </div>`;
  const input = document.getElementById('essay-input');
  input.addEventListener('input', () => {
    state.drafts[id] = input.value;
    document.getElementById('essay-wc').textContent = wordCount(input.value);
    saveState();
  });
}

function checkEssay() {
  const p = curPrompt;
  const text = document.getElementById('essay-input').value;
  const norm = normalizeEs(text);
  const n = wordCount(text);
  const checks = [
    { label: `不少于 ${p.minWords} 个单词（当前 ${n} 词）`, ok: n >= p.minWords },
    ...p.must.map(m => ({ label: m.label, ok: new RegExp(m.re, 'i').test(norm) })),
  ];
  const passed = checks.every(c => c.ok);
  const resEl = document.getElementById('essay-result');
  resEl.innerHTML = `
    ${checks.map(c => `<div class="check-item ${c.ok ? 'check-ok' : 'check-bad'}">${c.ok ? '✅' : '❌'} ${esc(c.label)}</div>`).join('')}
    <div class="feedback ${passed ? 'ok' : 'bad'}" style="margin-top:10px">
      ${passed ? '🎉 全部达标！¡Enhorabuena! 对照范文看看还能怎么提升吧。' : '还有未达标项，补充后再提交～'}
    </div>`;
  if (passed) {
    const first = !state.essaysDone.includes(p.id);
    if (first) state.essaysDone.push(p.id);
    addXP(first ? 20 : 8, first ? '首次通过作文' : '作文重写通过', 'write');
    document.getElementById('essay-sample').style.display = 'block';
  } else {
    saveState();
  }
}
function toggleSample() {
  const b = document.getElementById('essay-sample');
  b.style.display = b.style.display === 'none' ? 'block' : 'none';
}

// ============================================================
// 记忆库（到期单词 + 错题本）
// ============================================================
let reviewSession = null;

function renderReview() {
  const el = document.getElementById('tab-review');
  const due = dueWords();
  const learned = Object.keys(state.srs).length;
  el.innerHTML = `
    <div class="card">
      <h2>🗃️ 记忆库</h2>
      <p class="muted">学过的单词按遗忘曲线（1 / 2 / 4 / 7 / 15 天）自动回流到这里；各模块答错的题会收进错题本，答对即出库。已累计复习 <b>${state.reviewCount}</b> 次。</p>
    </div>
    <div class="hero">
      <div class="card">
        <h2>📗 到期单词 <span class="big-num" style="font-size:1.6rem">${due.length}</span></h2>
        <p class="muted">已接触 ${learned} 词 ｜ 已掌握 ${masteredCount()} 词。到期不复习会越积越多哦～</p>
        <div style="margin-top:12px">
          <button class="btn green" onclick="startWordReview()" ${due.length ? '' : 'disabled'}>${due.length ? '开始复习（每词 +2 XP）' : '暂无到期单词 ✅'}</button>
        </div>
      </div>
      <div class="card">
        <h2>📕 错题本 <span class="big-num" style="font-size:1.6rem">${state.mistakes.length}</span></h2>
        <p class="muted">${state.mistakes.length ? '最常错：' + state.mistakes.slice().sort((a, b) => b.count - a.count).slice(0, 3).map(m => `「${esc(m.a)}」×${m.count}`).join('、') : '目前没有错题，太棒了！'}</p>
        <div style="margin-top:12px">
          <button class="btn" onclick="startMistakeReview()" ${state.mistakes.length ? '' : 'disabled'}>${state.mistakes.length ? '复习错题（每题 +3 XP）' : '错题本是空的 ✅'}</button>
        </div>
      </div>
    </div>
    ${state.mistakes.length ? `
    <div class="card">
      <h2>最近错题</h2>
      ${state.mistakes.slice(-6).reverse().map(m => `
        <div class="example-row">
          <span class="es" style="font-size:0.9rem">${esc(m.q)}</span>
          <span class="zh">答案：${esc(m.a)} ｜ 错 ${m.count} 次</span>
        </div>`).join('')}
    </div>` : ''}`;
}

function startWordReview() {
  const words = shuffle(dueWords()).slice(0, 15);
  reviewSession = { items: words.map(w => ({ kind: 'word', w })), i: 0, correct: 0 };
  renderReviewQ();
}
function startMistakeReview() {
  const ms = shuffle(state.mistakes).slice(0, 15);
  reviewSession = { items: ms.map(m => ({ kind: 'mistake', m })), i: 0, correct: 0 };
  renderReviewQ();
}

function renderReviewQ() {
  const s = reviewSession;
  const el = document.getElementById('tab-review');
  if (s.i >= s.items.length) {
    el.innerHTML = `
      <div class="card" style="text-align:center">
        <h2>🎉 复习完成！</h2>
        <p style="margin:10px 0">答对 <b>${s.correct}</b> / ${s.items.length}</p>
        <p class="muted">答对的错题已移出错题本；单词按记忆曲线安排下次复习</p>
        <div style="margin-top:14px"><button class="btn" onclick="renderReview()">返回记忆库</button></div>
      </div>`;
    return;
  }
  const item = s.items[s.i];
  let q, opts, answer, say, sub = '';
  if (item.kind === 'word') {
    const all = DECKS.flatMap(d => d.words);
    const dir = Math.random() < 0.5 ? 'es2zh' : 'zh2es';
    const others = shuffle(all.filter(x => x.es !== item.w.es)).slice(0, 3);
    if (dir === 'es2zh') {
      q = `「${item.w.es}」的意思是？`;
      opts = shuffle([item.w.zh, ...others.map(o => o.zh)]);
      answer = item.w.zh;
    } else {
      q = `「${item.w.zh}」用西语怎么说？`;
      opts = shuffle([item.w.es, ...others.map(o => o.es)]);
      answer = item.w.es;
    }
    say = item.w.es;
    sub = `记忆盒等级 ${(state.srs[item.w.es] || { b: 0 }).b}/5`;
  } else {
    q = item.m.q;
    opts = shuffle(item.m.opts.slice());
    answer = item.m.a;
    say = item.m.say;
    sub = `已错 ${item.m.count} 次`;
  }
  el.innerHTML = `
    <span class="back-link" onclick="renderReview()">← 退出复习</span>
    <div class="card">
      <p class="muted">${s.i + 1} / ${s.items.length} ｜ ${sub}</p>
      <h2 style="margin:10px 0">${esc(q)} ${say ? `<button class="speak-btn" onclick="speak('${esc(say)}')">🔊</button>` : ''}</h2>
      ${opts.map(o => `<button class="quiz-opt" data-v="${esc(o)}">${esc(o)}</button>`).join('')}
      <div class="feedback" id="rv-fb"></div>
    </div>`;
  el.querySelectorAll('.quiz-opt').forEach(btn => btn.addEventListener('click', () => {
    const ok = btn.dataset.v === answer;
    el.querySelectorAll('.quiz-opt').forEach(b => {
      b.disabled = true;
      if (b.dataset.v === answer) b.classList.add('correct');
    });
    const fb = document.getElementById('rv-fb');
    if (ok) {
      s.correct++;
      state.reviewCount++;
      fb.className = 'feedback ok'; fb.textContent = '✅ ¡Correcto!';
      if (item.kind === 'word') {
        srsUp(item.w.es);
        addXP(2, '单词复习', 'review');
      } else {
        const idx = state.mistakes.findIndex(m => m.id === item.m.id);
        if (idx >= 0) state.mistakes.splice(idx, 1);
        addXP(3, '错题攻克', 'review');
      }
    } else {
      btn.classList.add('wrong');
      fb.className = 'feedback bad'; fb.textContent = `❌ 正确答案：${answer}`;
      if (item.kind === 'word') srsDown(item.w.es);
      else item.m.count++;
      saveState();
    }
    if (say) speak(say);
    setTimeout(() => { s.i++; renderReviewQ(); }, 1400);
  }));
}

// ============================================================
// #2 听力训练
// ============================================================
let listenMode = 'comp';   // comp（听力理解） | dict（听写）
let listenIdx = 0, dictIdx = 0;
function setListenMode(m) { listenMode = m; renderListen(); }

function renderListen() {
  const el = document.getElementById('tab-listen');
  const header = `
    <div class="card">
      <h2>👂 听力训练（已答对 ${state.listenCount || 0} 次）</h2>
      <div class="tense-tabs" style="margin-top:10px">
        <button class="${listenMode === 'comp' ? 'active' : ''}" onclick="setListenMode('comp')">🎧 听力理解</button>
        <button class="${listenMode === 'dict' ? 'active' : ''}" onclick="setListenMode('dict')">✍️ 听写句子</button>
      </div>
      <p class="muted" style="margin-top:8px">点 ▶️ 播放（可反复听、可调慢速），再作答。${'speechSynthesis' in window ? '' : '⚠️ 当前浏览器不支持语音合成。'}</p>
    </div>`;
  el.innerHTML = header + (listenMode === 'comp' ? renderListenComp() : renderListenDict());
  if (listenMode === 'comp') bindListenComp();
}

function renderListenComp() {
  const item = LISTEN_COMPREHENSION[listenIdx % LISTEN_COMPREHENSION.length];
  const opts = shuffle(item.opts.slice());
  return `
    <div class="card" id="lc-box">
      <p class="muted">${esc(item.level)} ｜ 第 ${listenIdx % LISTEN_COMPREHENSION.length + 1}/${LISTEN_COMPREHENSION.length} 段</p>
      <div style="margin:12px 0;display:flex;gap:10px;flex-wrap:wrap">
        <button class="btn yellow" onclick="speakSeq(${esc(JSON.stringify(item.audio))})">▶️ 播放</button>
        <button class="btn secondary" onclick="speakSlow('${esc(item.script)}')">🐢 慢速重听</button>
      </div>
      <h3 style="margin:10px 0">${esc(item.q)}</h3>
      ${opts.map(o => `<button class="quiz-opt" data-v="${esc(o)}">${esc(o)}</button>`).join('')}
      <div class="feedback" id="lc-fb"></div>
      <div id="lc-script" class="sample-box" style="display:none;margin-top:12px">
        <b>原文：</b>${esc(item.script)}<br><span class="muted">${esc(item.scriptZh)}</span>
      </div>
      <div style="margin-top:14px"><button class="btn" onclick="listenIdx++;renderListen()">下一段 →</button></div>
    </div>`;
}
function bindListenComp() {
  const item = LISTEN_COMPREHENSION[listenIdx % LISTEN_COMPREHENSION.length];
  const box = document.getElementById('lc-box');
  if (!box) return;
  box.querySelectorAll('.quiz-opt').forEach(btn => btn.addEventListener('click', () => {
    const ok = btn.dataset.v === item.a;
    box.querySelectorAll('.quiz-opt').forEach(b => { b.disabled = true; if (b.dataset.v === item.a) b.classList.add('correct'); });
    const fb = document.getElementById('lc-fb');
    if (ok) {
      state.listenCount = (state.listenCount || 0) + 1;
      fb.className = 'feedback ok'; fb.textContent = '✅ ¡Correcto!';
      addXP(5, '听力理解', 'listen');
    } else {
      btn.classList.add('wrong');
      fb.className = 'feedback bad'; fb.textContent = `❌ 正确答案：${item.a}`;
      addMistake({ id: 'lc:' + item.id, q: item.q, opts: item.opts, a: item.a });
    }
    document.getElementById('lc-script').style.display = 'block';
  }));
}

function renderListenDict() {
  const item = SENTENCES[dictIdx % SENTENCES.length];
  return `
    <div class="card">
      <p class="muted">第 ${dictIdx % SENTENCES.length + 1}/${SENTENCES.length} 句 ｜ 听写：把听到的西语句子写下来（相似度 ≥80 得 +5 XP）</p>
      <div style="margin:12px 0;display:flex;gap:10px;flex-wrap:wrap">
        <button class="btn yellow" onclick="speak('${esc(item.es)}')">▶️ 播放</button>
        <button class="btn secondary" onclick="speakSlow('${esc(item.es)}')">🐢 慢速</button>
      </div>
      <textarea class="essay" id="dict-input" rows="2" placeholder="在这里写下你听到的句子…"></textarea>
      <div class="accent-keys">
        ${['á', 'é', 'í', 'ó', 'ú', 'ñ', '¿', '¡'].map(c => `<button onclick="insertChar('dict-input','${c}')">${c}</button>`).join('')}
      </div>
      <div style="margin-top:10px;display:flex;gap:10px;flex-wrap:wrap">
        <button class="btn" onclick="checkDict()">对照检查</button>
        <button class="btn yellow" onclick="dictIdx++;renderListen()">下一句 →</button>
      </div>
      <div class="speak-result" id="dict-res" style="margin-top:12px"></div>
    </div>`;
}
function checkDict() {
  const item = SENTENCES[dictIdx % SENTENCES.length];
  const val = document.getElementById('dict-input').value;
  if (!val.trim()) return;
  const score = similarity(val, item.es);
  const res = document.getElementById('dict-res');
  let cls = 'score-bad', msg = '再听几遍，注意每个词～';
  if (score >= 80) { cls = 'score-good'; msg = '¡Muy bien! 听写正确！'; }
  else if (score >= 55) { cls = 'score-mid'; msg = '接近了，对照答案看差别。'; }
  res.innerHTML = `你写的：「${esc(val)}」<br>正确答案：<b>${esc(item.es)}</b>（${esc(item.zh)}）<br>相似度 <span class="${cls}">${score} 分</span> ${msg}`;
  if (score >= 80) { state.listenCount = (state.listenCount || 0) + 1; addXP(5, '听写', 'listen'); }
  else saveState();
}

// ============================================================
// #5 阅读训练
// ============================================================
let readingId = null;
function renderRead() {
  const el = document.getElementById('tab-read');
  if (readingId) { renderReadingDetail(); return; }
  const byBook = {};
  READINGS.forEach(r => { (byBook[r.book] = byBook[r.book] || []).push(r); });
  el.innerHTML = `
    <div class="card">
      <h2>📰 阅读训练（已读 ${(state.readingsDone || []).length}/${READINGS.length} 篇）</h2>
      <p class="muted">配合《现代西班牙语》一~三册及<b>进阶（第四册）</b>课文主题与语法进度编写的<b>原创短文</b>（非教材原文），配理解题和生词表；生词可点击听发音。<b>进阶篇篇幅更长、语法更难（B1–C1）</b>。读完做对全部理解题 +12 XP。</p>
    </div>
    ${[1, 2, 3, 4].map(b => byBook[b] ? `
      <div class="card" style="padding:12px 18px;margin-bottom:10px">
        <h2>${['📕 第一册','📗 第二册','📘 第三册','📙 第四册 · 进阶'][b-1]}</h2>
      </div>
      <div class="grid cols3" style="margin-bottom:16px">
        ${byBook[b].map(r => `
          <div class="deck-card" onclick="openReading('${r.id}')">
            <div class="ic">📖</div>
            <div class="nm">${esc(r.title)}</div>
            <div class="muted">${esc(r.titleZh)}</div>
            ${r.align ? `<div class="muted" style="font-size:0.72rem;margin-top:4px;line-height:1.4">${esc(r.align)}</div>` : ''}
            ${(state.readingsDone || []).includes(r.id) ? '<div class="done-mark" style="margin-top:6px">✅ 已完成</div>' : ''}
          </div>`).join('')}
      </div>` : '').join('')}`;
}
function openReading(id) { readingId = id; renderReadingDetail(); }
function toggleTransl(btn) {
  const p = document.getElementById('read-transl');
  if (!p) return;
  const show = p.style.display === 'none';
  p.style.display = show ? 'block' : 'none';
  btn.textContent = show ? '🇨🇳 隐藏中文翻译' : '🇨🇳 显示中文翻译';
}

let readingQuiz = null;
function renderReadingDetail() {
  const r = READINGS.find(x => x.id === readingId);
  const el = document.getElementById('tab-read');
  // 点词高亮：把生词包成可点击
  const html = glossHighlight(r.text, r.glossary);
  el.innerHTML = `
    <span class="back-link" onclick="readingId=null;renderRead()">← 返回阅读列表</span>
    <div class="card">
      <h2>${esc(r.title)} <span class="muted" style="font-weight:400;font-size:0.9rem">${esc(r.titleZh)}</span>
        <button class="speak-btn" onclick="speak('${jsAttr(r.text)}')">🔊</button></h2>
      ${r.align ? `<p class="muted" style="font-size:0.82rem;margin-top:4px">📎 ${esc(r.align)}</p>` : ''}
      <p style="font-size:1.05rem;line-height:2;margin-top:10px">${html}</p>
      ${r.textZh ? `
        <button class="btn small secondary" style="margin-top:6px" onclick="toggleTransl(this)">🇨🇳 显示中文翻译</button>
        <p id="read-transl" style="display:none;font-size:0.96rem;line-height:1.9;margin-top:10px;color:var(--ink);background:#faf3e6;border:1px solid var(--line);border-radius:10px;padding:12px 14px">${esc(r.textZh)}</p>` : ''}
      <h3>📒 生词</h3>
      ${r.glossary.map(([w, zh]) => `
        <div class="example-row">
          <button class="speak-btn" onclick="speak('${jsAttr(w)}')">🔊</button>
          <span class="es">${esc(w)}</span><span class="zh">${esc(zh)}</span>
        </div>`).join('')}
    </div>
    <div class="card">
      <h2>✏️ 阅读理解</h2>
      <div id="read-quiz"></div>
    </div>`;
  readingQuiz = { r, i: 0, correct: 0 };
  renderReadQuiz();
}
function renderReadQuiz() {
  const s = readingQuiz;
  const box = document.getElementById('read-quiz');
  if (s.i >= s.r.questions.length) {
    const passed = s.correct === s.r.questions.length;
    if (passed && !(state.readingsDone || []).includes(s.r.id)) {
      state.readingsDone = state.readingsDone || [];
      state.readingsDone.push(s.r.id);
      addXP(12, '阅读理解通关', 'grammar');
    }
    box.innerHTML = `
      <div style="text-align:center">
        <h2 style="margin:10px 0">${passed ? '🎉 全部答对！¡Muy bien!' : `答对 ${s.correct}/${s.r.questions.length}`}</h2>
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:10px">
          ${passed ? '' : `<button class="btn" onclick="openReading('${s.r.id}')">再读一遍</button>`}
          <button class="btn secondary" onclick="readingId=null;renderRead()">返回列表</button>
        </div>
      </div>`;
    return;
  }
  const q = s.r.questions[s.i];
  const opts = shuffle(q.opts.slice());
  box.innerHTML = `
    <p class="muted">第 ${s.i + 1} / ${s.r.questions.length} 题</p>
    <h3 style="margin:8px 0">${esc(q.q)}</h3>
    ${opts.map(o => `<button class="quiz-opt" data-v="${esc(o)}">${esc(o)}</button>`).join('')}
    <div class="feedback" id="rq-fb"></div>`;
  box.querySelectorAll('.quiz-opt').forEach(btn => btn.addEventListener('click', () => {
    const ok = btn.dataset.v === q.a;
    box.querySelectorAll('.quiz-opt').forEach(b => { b.disabled = true; if (b.dataset.v === q.a) b.classList.add('correct'); });
    const fb = document.getElementById('rq-fb');
    if (ok) { s.correct++; fb.className = 'feedback ok'; fb.textContent = '✅ ¡Correcto!'; addXP(3, '阅读理解', 'grammar'); }
    else {
      btn.classList.add('wrong'); fb.className = 'feedback bad'; fb.textContent = `❌ 正确答案：${q.a}`;
      addMistake({ id: `rd:${s.r.id}:${s.i}`, q: q.q, opts: q.opts, a: q.a });
    }
    setTimeout(() => { s.i++; renderReadQuiz(); }, 1500);
  }));
}

// ============================================================
// 宠物养成：西语小羊驼
// ============================================================
// 形象图片：放在 assets/pet/ 下按约定命名；缺图自动回退 emoji
let petSide = false;         // false=正面, true=侧面
let petAction = null;        // 'eat' | 'play' | 'pat' 互动动作临时切换
let petActionTimer = null;
function petImgError(img, emoji, fallback) {
  // 动作图缺失 → 退回阶段图；阶段图也缺失 → 退回 emoji
  if (fallback) {
    img.onerror = () => petImgError(img, emoji, '');
    img.src = fallback;
    return;
  }
  const d = document.createElement('div');
  d.className = 'pet-emoji';
  d.textContent = emoji;
  img.replaceWith(d);
}
function petVisual(cur) {
  const idx = PET_STAGES.indexOf(cur) + 1;
  const stageFile = `assets/pet/stage${idx}${petSide ? '_side' : '_front'}.png`;
  const file = petAction ? `assets/pet/act_${petAction}.png` : stageFile;
  const fallback = petAction ? stageFile : '';
  return `<img class="pet-img" src="${file}" alt="${esc(cur.name)}" onerror="petImgError(this,'${cur.emoji}','${fallback}')">`;
}
function showPetAction(name) {
  petAction = name;
  renderPet();
  clearTimeout(petActionTimer);
  petActionTimer = setTimeout(() => { petAction = null; renderPet(); }, 1600);
}
function togglePetSide() { petSide = !petSide; renderPet(); }
function greetPet() {
  if (petAction) return;
  speak('¡Hola!');
  showPetAction('hola');
}

function petStage(g) {
  let cur = PET_STAGES[0], next = null;
  for (let i = 0; i < PET_STAGES.length; i++) {
    if (g >= PET_STAGES[i].g) { cur = PET_STAGES[i]; next = PET_STAGES[i + 1] || null; }
  }
  return { cur, next };
}

// 每天扣减饱食度与心情（离开越久掉得越多）
function petDailyTick() {
  const p = state.pet;
  const today = todayStr();
  if (!p.lastDay) { p.lastDay = today; saveState(); return; }
  const days = Math.max(0, Math.floor((new Date(today) - new Date(p.lastDay)) / 86400000));
  if (days > 0) {
    p.hunger = Math.max(0, p.hunger - 15 * days);
    p.mood = Math.max(0, p.mood - 12 * days);
    p.lastDay = today;
    saveState();
  }
}

function petMessage() {
  const p = state.pet;
  const { cur } = petStage(p.growth);
  if (cur.g === 0) return '……蛋里传来轻轻的动静。多喂食多陪伴，帮它破壳吧！';
  if (p.hunger < 30) return `${state.pet.name}：Tengo hambre…（好饿……喂我点东西吧）`;
  if (p.mood < 30) return `${state.pet.name}：Estoy aburrido…（好无聊……陪我玩玩具吧）`;
  if (p.hunger >= 70 && p.mood >= 70) return `${state.pet.name}：¡Estoy muy feliz! （超开心！继续学习给我赚零食吧～）`;
  return `${state.pet.name}：¡Hola, amigo!（你好呀，朋友！）`;
}

function renderPet() {
  const el = document.getElementById('tab-pet');
  const p = state.pet;
  const { cur, next } = petStage(p.growth);
  const growPct = next ? Math.round((p.growth - cur.g) / (next.g - cur.g) * 100) : 100;
  const snacks = PET_ITEMS.filter(i => i.type === 'snack');
  const toys = PET_ITEMS.filter(i => i.type === 'toy');
  const patsLeft = p.patsDate === todayStr() ? Math.max(0, 3 - p.pats) : 3;

  const invHtml = PET_ITEMS.filter(i => (state.inv[i.id] || 0) > 0).map(i => `
    <div class="deck-card" style="cursor:default">
      <div class="ic">${i.icon}</div>
      <div class="nm">${i.name} ×${state.inv[i.id]}</div>
      <div class="muted" style="font-size:0.78rem">${i.type === 'snack' ? `饱食+${i.hunger}` : `心情+${i.mood}`} · 成长+${i.growth}</div>
      <button class="btn small green" style="margin-top:8px" onclick="useItem('${i.id}')">${i.type === 'snack' ? '🍽️ 喂食' : '🎾 一起玩'}</button>
    </div>`).join('');

  el.innerHTML = `
    <div class="hero">
      <div class="card" style="text-align:center">
        <div class="pet-stage-view" onclick="greetPet()" title="点我打个招呼" style="cursor:pointer">${petVisual(cur)}</div>
        <div style="margin:4px 0">
          <button class="btn small secondary" onclick="togglePetSide()">${petSide ? '↩️ 看正面' : '🔄 看侧面'}</button>
          <span class="muted" style="font-size:0.78rem;margin-left:6px">👆 点羊驼打招呼</span>
        </div>
        <h2 style="margin-top:6px">${esc(p.name)} · ${cur.name}
          <button class="btn small secondary" onclick="renamePet()">✏️ 改名</button>
        </h2>
        <p class="muted" style="margin:8px 0">${esc(cur.tip)}</p>
        <div class="pet-bubble">${esc(petMessage())}</div>
        <div style="text-align:left;margin-top:14px">
          <p style="font-size:0.88rem;margin:6px 0">🍚 饱食度 ${p.hunger}/100</p>
          <div class="bar green"><div style="width:${p.hunger}%"></div></div>
          <p style="font-size:0.88rem;margin:10px 0 6px">💛 心情 ${p.mood}/100</p>
          <div class="bar"><div style="width:${p.mood}%"></div></div>
          <p style="font-size:0.88rem;margin:10px 0 6px">🌱 成长值 ${p.growth}${next ? ` / 下一阶段「${next.name}」还差 ${next.g - p.growth}` : '（已满级！）'}</p>
          <div class="bar" style="background:#e0d2bc"><div style="width:${growPct}%;background:#2c4a63"></div></div>
        </div>
        <div style="margin-top:14px">
          <button class="btn yellow" onclick="patPet()" ${patsLeft ? '' : 'disabled'}>🤚 摸摸头（今日剩 ${patsLeft} 次）</button>
        </div>
      </div>
      <div class="card">
        <h2>🎒 背包</h2>
        <p class="muted">学习获得 XP 会同步获得 🪙 金币；每攒 30 XP 掉落随机零食；完成每日全部任务送 🍖。</p>
        <div class="grid cols4" style="margin-top:10px">
          ${invHtml || '<p class="muted">背包空空的～去商店买点零食，或继续学习等掉落！</p>'}
        </div>
      </div>
    </div>
    <div class="card">
      <h2>🛒 羊驼商店（我的金币：🪙 ${state.coins}）</h2>
      <h3>🍪 零食（喂食增加饱食度和成长）</h3>
      <div class="grid cols4" style="margin-top:8px">
        ${snacks.map(i => `
          <div class="deck-card" style="cursor:default">
            <div class="ic">${i.icon}</div>
            <div class="nm">${i.name}</div>
            <div class="muted" style="font-size:0.78rem">饱食+${i.hunger} 心情+${i.mood} 成长+${i.growth}</div>
            <button class="btn small" style="margin-top:8px" onclick="buyItem('${i.id}')" ${state.coins < i.price ? 'disabled' : ''}>🪙 ${i.price} 购买</button>
          </div>`).join('')}
      </div>
      <h3 style="margin-top:16px">🧸 玩具（陪玩增加心情和成长）</h3>
      <div class="grid cols4" style="margin-top:8px">
        ${toys.map(i => `
          <div class="deck-card" style="cursor:default">
            <div class="ic">${i.icon}</div>
            <div class="nm">${i.name}</div>
            <div class="muted" style="font-size:0.78rem">心情+${i.mood} 成长+${i.growth}</div>
            <button class="btn small" style="margin-top:8px" onclick="buyItem('${i.id}')" ${state.coins < i.price ? 'disabled' : ''}>🪙 ${i.price} 购买</button>
          </div>`).join('')}
      </div>
    </div>
    <div class="card">
      <h2>🐾 成长阶段</h2>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">
        ${PET_STAGES.map(s => `
          <span class="idea-chip" style="cursor:default;${p.growth >= s.g ? 'border-color:var(--green);background:var(--green-soft)' : 'opacity:0.55'}">
            ${s.emoji} ${s.name}（${s.g}）${p.growth >= s.g ? '✅' : ''}
          </span>`).join('')}
      </div>
    </div>`;
}

function buyItem(id) {
  const it = PET_ITEMS.find(x => x.id === id);
  if (state.coins < it.price) { toast('🪙 金币不足，去学习赚金币吧！'); return; }
  state.coins -= it.price;
  state.inv[id] = (state.inv[id] || 0) + 1;
  toast(`已购买 ${it.icon} ${it.name} ×1`);
  saveState();
  renderHeader();
  renderPet();
}

function useItem(id) {
  const it = PET_ITEMS.find(x => x.id === id);
  if (!(state.inv[id] > 0)) return;
  const p = state.pet;
  if (it.type === 'snack' && p.hunger >= 100) { toast(`${p.name} 吃饱啦，等会儿再喂吧～`); return; }
  state.inv[id]--;
  if (state.inv[id] <= 0) delete state.inv[id];
  const stageBefore = petStage(p.growth).cur;
  p.hunger = Math.min(100, p.hunger + it.hunger);
  p.mood = Math.min(100, p.mood + it.mood);
  p.growth += it.growth;
  const stageAfter = petStage(p.growth).cur;
  toast(`${it.icon} ${p.name}：${it.say}`);
  speak(it.say);
  const leveledUp = stageAfter.g > stageBefore.g;
  if (leveledUp) {
    toast(`🎉 ${p.name} 成长为「${stageAfter.emoji} ${stageAfter.name}」！`, true);
  }
  checkAchievements();
  saveState();
  showPetAction(leveledUp ? 'lvlup' : (it.type === 'snack' ? 'eat' : 'play'));
}

function patPet() {
  const p = state.pet;
  const today = todayStr();
  if (p.patsDate !== today) { p.patsDate = today; p.pats = 0; }
  if (p.pats >= 3) { toast('今天摸够啦，明天再来～'); return; }
  p.pats++;
  p.mood = Math.min(100, p.mood + 3);
  p.growth += 1;
  toast(`🤍 ${p.name}：Mmm… ¡qué gusto!（好舒服～）`);
  saveState();
  showPetAction('pat');
}

function renamePet() {
  const name = prompt('给你的羊驼取个西语名字吧（如 Paco, Luna, Churro）：', state.pet.name);
  if (name && name.trim()) {
    state.pet.name = name.trim().slice(0, 12);
    saveState();
    renderPet();
    toast(`✅ 它现在叫 ${state.pet.name} 啦！`);
  }
}

// ============================================================
// 成就 & 设置
// ============================================================
function renderAch() {
  const el = document.getElementById('tab-ach');
  el.innerHTML = `
    <div class="card">
      <h2>🏆 学习统计（第 ${dayIndex()} 天）</h2>
      <div class="grid cols4" style="margin-top:10px;text-align:center">
        <div><div class="big-num">${state.xp}</div><div class="muted">累计 XP</div></div>
        <div><div class="big-num">${state.streak}</div><div class="muted">连续天数</div></div>
        <div><div class="big-num">${masteredCount()}</div><div class="muted">掌握单词</div></div>
        <div><div class="big-num">${state.lessonsDone.length}/${LESSONS.length}</div><div class="muted">语法课</div></div>
        <div><div class="big-num">${state.conjCorrect}</div><div class="muted">变位答对</div></div>
        <div><div class="big-num">${state.sentCorrect}</div><div class="muted">句子拼对</div></div>
        <div><div class="big-num">${state.speakCount + state.qaCount}</div><div class="muted">口语表达</div></div>
        <div><div class="big-num">${state.essaysDone.length}</div><div class="muted">作文通过</div></div>
        <div><div class="big-num">${state.reviewCount}</div><div class="muted">记忆库复习</div></div>
        <div><div class="big-num">${state.mistakes.length}</div><div class="muted">待攻克错题</div></div>
        <div><div class="big-num">${state.matchGames}</div><div class="muted">配对游戏</div></div>
        <div><div class="big-num">${Object.keys(state.srs).length}</div><div class="muted">接触单词</div></div>
      </div>
    </div>
    <div class="card">
      <h2>🎖️ 成就徽章（${state.ach.length}/${ACHIEVEMENTS.length}）</h2>
      <div class="grid cols4" style="margin-top:10px">
        ${ACHIEVEMENTS.map(a => `
          <div class="badge ${state.ach.includes(a.id) ? 'unlocked' : 'locked'}">
            <div class="ic">${a.icon}</div>
            <div class="nm">${esc(a.name)}</div>
            <div class="ds">${esc(a.desc)}</div>
          </div>`).join('')}
      </div>
    </div>
    <div class="card">
      <h2>☁️ 跨设备同步（iPad / 电脑 / 手机）</h2>
      <p class="muted" style="line-height:1.8">进度默认只存在本机浏览器。想在多设备联动，有两种方式：<br>
        <b>① 文件备份</b>：随时导出为文件，在另一台设备导入即可。<br>
        <b>② GitHub 自动同步</b>：粘贴一次 GitHub 令牌（只需 gist 权限），之后打开就自动云端合并，换设备零操作。</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin:12px 0">
        <button class="btn small" onclick="exportProgress()">⬇️ 导出进度文件</button>
        <label class="btn small secondary" style="cursor:pointer">⬆️ 导入进度文件
          <input type="file" accept="application/json" style="display:none" onchange="importProgress(this)">
        </label>
      </div>
      <div style="border-top:1px solid var(--line);padding-top:12px;margin-top:4px">
        <p style="font-size:0.9rem;font-weight:600">GitHub 云同步 ${state.ghUser ? `· 已连接：${esc(state.ghUser)} ✅` : ''}</p>
        <p class="muted" style="font-size:0.82rem">令牌只保存在本机、绝不上传代码。<a href="https://github.com/settings/tokens/new?scopes=gist&description=espanol-sync" target="_blank" style="color:var(--red)">点此创建令牌（勾选 gist）→</a></p>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px;align-items:center">
          <input class="answer" id="gh-token" style="flex:1;min-width:200px" placeholder="粘贴 GitHub 令牌 (ghp_...)" value="">
          <button class="btn small" onclick="connectGithub()">🔗 连接并同步</button>
          ${state.ghUser ? '<button class="btn small secondary" onclick="disconnectGithub()">断开</button>' : ''}
        </div>
        ${state.ghUser ? `<button class="btn small green" style="margin-top:8px" onclick="cloudSync(true)">🔄 立即同步</button> <span class="muted" id="gh-status"></span>` : '<span class="muted" id="gh-status"></span>'}
      </div>
    </div>
    <div class="card">
      <h2>⚙️ 设置</h2>
      <p style="margin:10px 0">
        <button class="btn small ${state.freeMode ? 'green' : 'secondary'}" onclick="toggleFreeMode()">
          ${state.freeMode ? '✅ 自由模式已开启（全部课程解锁）' : '🔓 开启自由模式（跳过每日解锁）'}
        </button>
      </p>
      <p class="muted">学习进度保存在本机浏览器中。<button class="btn small secondary" onclick="resetAll()">清空全部进度</button></p>
    </div>`;
}

// ============================================================
// #1 进度备份 / 导入 / GitHub 云同步
// ============================================================
function exportProgress() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `espanol-progreso-${todayStr()}.json`;
  a.click();
  URL.revokeObjectURL(url);
  toast('✅ 进度已导出，可在其他设备导入');
}
function importProgress(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      if (typeof data.xp !== 'number') throw 0;
      state = mergeProgress(state, data);
      saveState();
      renderAll();
      toast('✅ 进度已导入并合并');
    } catch (err) { toast('❌ 文件格式不对，导入失败'); }
  };
  reader.readAsText(file);
}
// 合并两份进度：取"学得更多"的一方，不覆盖
function mergeProgress(local, remote) {
  const m = Object.assign({}, local);
  m.xp = Math.max(local.xp || 0, remote.xp || 0);
  m.coins = Math.max(local.coins || 0, remote.coins || 0);
  m.coinsEarned = Math.max(local.coinsEarned || 0, remote.coinsEarned || 0);
  m.streak = Math.max(local.streak || 0, remote.streak || 0);
  m.startDate = (local.startDate < remote.startDate ? local.startDate : remote.startDate) || todayStr();
  ['conjCorrect', 'sentCorrect', 'speakCount', 'qaCount', 'dialogCount', 'listenCount', 'contextCorrect', 'reviewCount', 'matchGames'].forEach(k => {
    m[k] = Math.max(local[k] || 0, remote[k] || 0);
  });
  const uni = (a, b) => Array.from(new Set([...(a || []), ...(b || [])]));
  m.lessonsDone = uni(local.lessonsDone, remote.lessonsDone);
  m.essaysDone = uni(local.essaysDone, remote.essaysDone);
  m.readingsDone = uni(local.readingsDone, remote.readingsDone);
  m.ach = uni(local.ach, remote.ach);
  // srs：每词取记忆盒等级较高者
  m.srs = Object.assign({}, remote.srs, local.srs);
  for (const k in (remote.srs || {})) {
    const lb = (local.srs && local.srs[k]) ? local.srs[k].b : -1;
    const rb = remote.srs[k].b;
    if (rb > lb) m.srs[k] = remote.srs[k];
  }
  m.drafts = Object.assign({}, remote.drafts, local.drafts);
  m.inv = local.inv; // 背包以本地为准
  // 宠物取成长值较高的一方整体
  m.pet = ((local.pet && local.pet.growth) || 0) >= ((remote.pet && remote.pet.growth) || 0) ? local.pet : remote.pet;
  return m;
}

// --- GitHub Gist 云同步 ---
const GIST_FILE = 'espanol_progreso.json';
async function ghFetch(path, opt) {
  opt = opt || {};
  opt.headers = Object.assign({ Authorization: 'token ' + state.ghToken, Accept: 'application/vnd.github+json' }, opt.headers || {});
  return fetch('https://api.github.com' + path, opt);
}
function setGhStatus(msg) { const e = document.getElementById('gh-status'); if (e) e.textContent = msg; }

async function connectGithub() {
  const token = (document.getElementById('gh-token').value || '').trim();
  if (!token) { toast('请先粘贴令牌'); return; }
  state.ghToken = token;
  setGhStatus('连接中…');
  try {
    const r = await ghFetch('/user');
    if (!r.ok) throw new Error('令牌无效（' + r.status + '）');
    const u = await r.json();
    state.ghUser = u.login;
    saveState();
    toast('✅ 已连接 GitHub：' + u.login);
    await cloudSync(true);
    renderAch();
  } catch (e) {
    state.ghToken = '';
    setGhStatus('❌ ' + e.message);
    toast('❌ 连接失败：' + e.message);
  }
}
function disconnectGithub() {
  state.ghToken = ''; state.ghUser = ''; state.ghGistId = '';
  saveState(); renderAch();
  toast('已断开 GitHub 同步');
}
async function ensureGist() {
  if (state.ghGistId) return state.ghGistId;
  // 在已有 gists 中查找
  const r = await ghFetch('/gists?per_page=100');
  const list = await r.json();
  const found = Array.isArray(list) && list.find(g => g.files && g.files[GIST_FILE]);
  if (found) { state.ghGistId = found.id; return found.id; }
  // 新建私密 gist
  const cr = await ghFetch('/gists', {
    method: 'POST',
    body: JSON.stringify({ description: 'espanol 西语启航学习进度', public: false, files: { [GIST_FILE]: { content: JSON.stringify(state) } } }),
  });
  const g = await cr.json();
  state.ghGistId = g.id;
  return g.id;
}
async function cloudSync(showToast) {
  if (!state.ghToken) return;
  setGhStatus('同步中…');
  try {
    const id = await ensureGist();
    // 拉取远端并合并
    const r = await ghFetch('/gists/' + id);
    const g = await r.json();
    const content = g.files && g.files[GIST_FILE] && g.files[GIST_FILE].content;
    if (content) {
      try { state = mergeProgress(state, JSON.parse(content)); } catch (e) {}
    }
    // 回写合并结果
    await ghFetch('/gists/' + id, {
      method: 'PATCH',
      body: JSON.stringify({ files: { [GIST_FILE]: { content: JSON.stringify(state) } } }),
    });
    saveState();
    renderAll();
    setGhStatus('✅ 已同步 ' + new Date().toLocaleTimeString());
    if (showToast) toast('☁️ 云端同步完成');
  } catch (e) {
    setGhStatus('❌ 同步失败：' + e.message);
    if (showToast) toast('❌ 同步失败：' + e.message);
  }
}
// 打开 App 时自动同步 + 保存时防抖推送
let cloudPushTimer = null;
function cloudInit() { if (state.ghToken) cloudSync(false); }
function cloudPushDebounced() {
  if (!state.ghToken || !state.ghGistId) return;
  clearTimeout(cloudPushTimer);
  cloudPushTimer = setTimeout(async () => {
    try {
      await ghFetch('/gists/' + state.ghGistId, {
        method: 'PATCH',
        body: JSON.stringify({ files: { [GIST_FILE]: { content: JSON.stringify(state) } } }),
      });
    } catch (e) {}
  }, 3000);
}

function toggleFreeMode() {
  state.freeMode = !state.freeMode;
  saveState();
  renderAch();
  renderGrammar();
  toast(state.freeMode ? '🔓 自由模式已开启' : '📅 已恢复每日解锁模式');
}

function resetAll() {
  if (!confirm('确定要清空全部学习进度吗？此操作不可恢复。')) return;
  localStorage.removeItem(STORE_KEY);
  state = defaultState();
  state.startDate = todayStr();
  renderAll();
  toast('已重置全部进度');
}

// ============================================================
// 初始化
// ============================================================
function renderAll() {
  renderHeader();
  renderHome();
  renderPron();
  renderVocab();
  renderGrammar();
  renderTense();
  renderSentence();
  renderSpeak();
  renderListen();
  renderRead();
  renderWrite();
  renderReview();
  renderPet();
  renderAch();
}

// 切换到这些页时刷新（数据可能已变化）
[['ach', renderAch], ['home', renderHome], ['vocab', renderVocab], ['grammar', renderGrammar],
 ['review', renderReview], ['write', renderWrite], ['pet', renderPet],
 ['listen', renderListen], ['read', renderRead]].forEach(([tab, fn]) => {
  const b = document.querySelector(`nav button[data-tab="${tab}"]`);
  if (b) b.addEventListener('click', fn);
});

petDailyTick();
renderAll();
checkAchievements();
saveState();
cloudInit();
// PWA：注册 service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
