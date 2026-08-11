// ===================================================================
// 小顔30日ツール — メインコントローラ
//   intro → 顔写真(任意・左右差チェック) → 問診9問 → 診断 → 結果(重点＋生活＋30日)
//   表記方針: 数値を出さず傾向表現・免責は結果と同一ビューに常時可視（景表法）。
// ===================================================================
import { QUESTIONS, KEY_LABEL } from './questions-kogao.js';
import { diagnoseKogao } from './diagnose-kogao.js';
import { render30DayKogao } from './program-ui-kogao.js';
import { analyzePhoto } from './face-capture-kogao.js';
import { saveDx, getDx, addHistory } from './progress-store.js';

const $ = s => document.querySelector(s);
const state = { answers:{}, idx:0, face:null, facePreview:null };

function show(name){
  ['intro','face','quiz','result'].forEach(n => { const el = $('#' + n); if (el) el.hidden = (n !== name); });
  window.scrollTo({ top:0, behavior:'smooth' });
}

// ===================================================================
// STEP 1: 顔写真（任意）
// ===================================================================
function startFace(){
  // 顔診断から引き継いだ場合は、その結果を表示して顔写真アップをスキップ
  if (state.fromDx && state.face && state.face.ok) { renderFaceHandoff(); return; }
  state.face = null; state.facePreview = null;
  $('#face').innerHTML = `
    <div class="face-step reveal">
      <div class="section-head">
        <span class="num">STEP 1 / 2 ・ 任意</span>
        <h2>お顔の写真（スキップOK）</h2>
        <p>正面のお顔写真を1枚アップすると、左右差もチェックしてケアに反映します。写真なしで質問だけでも診断できます。</p>
      </div>
      <label class="drop" id="face-drop" for="face-file">
        <span class="drop-illust">📷</span>
        <h3>顔写真をアップ</h3>
        <span class="hint">正面・明るめ・前髪は上げると精度UP</span>
        <span class="drop-cta">写真を選ぶ</span>
        <input type="file" id="face-file" accept="image/*,.heic,.heif">
      </label>
      <div class="face-loader" id="face-loader" hidden><div class="spinner"></div><p id="face-loader-text">読み込み中…</p></div>
      <div class="face-read" id="face-read" hidden></div>
      <div class="btn-row">
        <button class="btn" id="face-next">質問に進む →</button>
      </div>
      <p class="hero-note">写真はこの端末内だけで処理され、どこにも送信されません</p>
    </div>`;

  const input = $('#face-file');
  input.addEventListener('change', e => { const f = e.target.files && e.target.files[0]; if (f) handleFacePhoto(f); });
  // ドラッグ&ドロップ
  const drop = $('#face-drop');
  ['dragenter','dragover'].forEach(ev => drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.add('drag'); }));
  ['dragleave','drop'].forEach(ev => drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.remove('drag'); }));
  drop.addEventListener('drop', e => { const f = e.dataTransfer.files && e.dataTransfer.files[0]; if (f) handleFacePhoto(f); });

  $('#face-next').addEventListener('click', startQuiz);
  show('face');
}

async function handleFacePhoto(file){
  const loader = $('#face-loader'), loaderText = $('#face-loader-text'), read = $('#face-read');
  read.hidden = true; loader.hidden = false;
  try {
    const { signals, preview } = await analyzePhoto(file, t => { loaderText.textContent = t; });
    loader.hidden = true;
    if (!signals.ok){
      read.hidden = false;
      read.className = 'face-read warn';
      read.innerHTML = `<p>${signals.reason || '顔をうまく読み取れませんでした。'}</p><p class="face-read-sub">写真なしでも質問から診断できます。このまま「質問に進む」でOKです。</p>`;
      state.face = null;
      return;
    }
    state.face = signals; state.facePreview = preview;
    const a = signals.signals.asymmetry, m = signals.signals.masseter;
    read.hidden = false;
    read.className = 'face-read ok';
    read.innerHTML = `
      <div class="face-read-grid">
        <img class="face-read-img" src="${preview}" alt="">
        <div class="face-read-body">
          <span class="face-read-kicker">✓ お顔を読み取りました</span>
          <p>${a.note}</p>
          ${m.level >= 0.4 ? `<p>${m.note}</p>` : ''}
          <p class="face-read-contour">輪郭：${signals.contour.label}</p>
        </div>
      </div>
      <p class="face-read-sub">この結果は診断に反映されます。続けて質問にお答えください。</p>`;
    $('#face-next').textContent = '質問に進む →（左右差を反映）';
  } catch(err){
    loader.hidden = true;
    read.hidden = false;
    read.className = 'face-read warn';
    read.innerHTML = `<p>${err.message || '写真を読み込めませんでした。'}</p><p class="face-read-sub">写真なしでも質問から診断できます。</p>`;
    state.face = null;
  }
}

// ===================================================================
// STEP 2: 問診
// ===================================================================
function startQuiz(){ state.answers = {}; state.idx = 0; show('quiz'); renderQuestion(); }

function renderQuestion(){
  const Q = QUESTIONS[state.idx];
  const total = QUESTIONS.length;
  const chosen = state.answers[Q.id];
  const pct = Math.round((state.idx) / total * 100);
  $('#quiz').innerHTML = `
    <div class="quiz-card reveal">
      <div class="quiz-progress">
        <div class="quiz-progress-top"><span>Q${state.idx + 1} / ${total}</span>${state.idx>0?'<button class="quiz-back" id="q-back">← 戻る</button>':''}</div>
        <div class="quiz-progress-bar"><i style="width:${pct}%"></i></div>
      </div>
      <h2 class="quiz-q">${Q.q}</h2>
      ${Q.help ? `<p class="quiz-help">${Q.help}</p>` : ''}
      <div class="quiz-options">
        ${Q.options.map((o, i) => `
          <button class="quiz-opt ${chosen===i?'sel':''}" data-i="${i}">
            <span class="quiz-opt-label">${o.label}</span>
            ${o.note ? `<span class="quiz-opt-note">${o.note}</span>` : ''}
          </button>`).join('')}
      </div>
    </div>`;
  $('#quiz').querySelectorAll('.quiz-opt').forEach(btn => btn.addEventListener('click', () => choose(+btn.dataset.i)));
  const back = $('#q-back');
  if (back) back.addEventListener('click', () => { state.idx = Math.max(0, state.idx - 1); renderQuestion(); });
}

function choose(i){
  const Q = QUESTIONS[state.idx];
  state.answers[Q.id] = i;
  if (state.idx < QUESTIONS.length - 1){ state.idx++; renderQuestion(); }
  else finishQuiz();
}

function finishQuiz(){
  const dx = diagnoseKogao(state.answers, state.face);
  saveDx({ ...dx, answers:state.answers });
  addHistory({ problemKeys:dx.problemKeys, primary:dx.primary });
  renderResult(dx);
}

// ===================================================================
// 結果
// ===================================================================
const DISCLAIMER =
  'これは写真・問診によるセルフチェックと、日々のケアのご提案です。医学的な診断・治療ではありません。' +
  '骨格そのものは変わりませんが、むくみ・こわばり・姿勢・表情筋のケアで“見え方”を整えることを目的としています。変化には個人差があります。';

function renderResult(dx){
  const primary = (dx.primary || []).filter(k => k !== 'general');
  const chips = (primary.length ? primary : ['general']).map(k => `<span class="dx-chip">${KEY_LABEL[k] || k}</span>`).join('');
  const lead = primary.length
    ? `${primary.map(k => KEY_LABEL[k]).join('・')} を中心に、朝と夜のケアで整えていきましょう。`
    : 'まずは土台のケアから。朝の巡りと夜のリラックスで、すっきり印象へ。';

  const faceHTML = (dx.faceUsed && dx.contour && state.face) ? `
    <div class="face-read ok" style="margin-top:16px">
      <div class="face-read-grid">
        ${state.facePreview ? `<img class="face-read-img" src="${state.facePreview}" alt="">` : ''}
        <div class="face-read-body">
          <span class="face-read-kicker">お顔から読み取れたこと</span>
          <p>${state.face.signals.asymmetry.note}</p>
          <p class="face-read-contour">輪郭：${dx.contour.label}<br><small>${dx.contour.note}</small></p>
        </div>
      </div>
    </div>` : '';

  const lifePlan = (dx.lifePlan || []).map(p => `
    <div class="life-item"><span class="life-ico">${p.icon}</span><div><h4>${p.title}</h4><p>${p.text}</p></div></div>`).join('');

  $('#result').innerHTML = `
    <div class="reveal">
      <section class="result-hero">
        <p class="announce">YOUR KOGAO CARE</p>
        <h2 class="type-name">あなたの重点ケア</h2>
        <div class="dx-chips">${chips}</div>
        <p class="type-desc">${lead}</p>
      </section>
      ${faceHTML}
      <div class="life-plan">
        <div class="section-head" style="margin-top:34px"><span class="num">DAILY HABITS</span><h2>毎日の心がけ</h2></div>
        <div class="life-list">${lifePlan}</div>
      </div>
      <div id="program-30day"></div>
      <div class="disclaimer">${DISCLAIMER}</div>
      <div class="btn-row"><button class="btn-ghost" id="btn-restart">もう一度診断する</button></div>
    </div>`;

  render30DayKogao(dx, $('#program-30day'));
  $('#btn-restart').addEventListener('click', startFace);
  show('result');
}

// ===================================================================
// 顔診断からの引き継ぎ（?dx=）— 顔診断ツールが渡した測定結果を受け取る
// ===================================================================
function parseFaceDx(){
  const dx = new URLSearchParams(location.search).get('dx');
  if (!dx) return;
  try {
    const sig = JSON.parse(b64urlDecode(dx));
    if (sig && sig.ok && sig.signals) {
      state.face = sig;
      state.fromDx = true;
      if (sig.preview) state.facePreview = sig.preview;
    }
  } catch (e) { console.warn('[kogao] 顔診断データの読み込みに失敗', e); }
}
function b64urlDecode(s){
  const b64 = s.replace(/-/g, '+').replace(/_/g, '/');
  return decodeURIComponent(Array.prototype.map.call(atob(b64), c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
}
function renderFaceHandoff(){
  const a = state.face.signals.asymmetry, m = state.face.signals.masseter;
  $('#face').innerHTML = `
    <div class="face-step reveal">
      <div class="section-head">
        <span class="num">STEP 1 / 2 ・ 顔診断 連携済み</span>
        <h2>顔診断の結果を受け取りました</h2>
        <p>顔診断で拝見したお顔の状態を、このあとの30日メニューに反映します。写真の撮り直しは不要です。</p>
      </div>
      <div class="face-read ok">
        <div class="face-read-grid">
          ${state.facePreview ? `<img class="face-read-img" src="${state.facePreview}" alt="">` : ''}
          <div class="face-read-body">
            <span class="face-read-kicker">✓ 顔診断から引き継ぎ</span>
            <p>${a.note}</p>
            ${m.level >= 0.4 ? `<p>${m.note}</p>` : ''}
            <p class="face-read-contour">輪郭：${state.face.contour.label}</p>
          </div>
        </div>
      </div>
      <div class="btn-row"><button class="btn" id="face-next">質問に進む →</button></div>
      <p class="hero-note">この結果は30日メニューの個別化に使われます</p>
    </div>`;
  $('#face-next').addEventListener('click', startQuiz);
  show('face');
}

// ===================================================================
// init
// ===================================================================
function init(){
  parseFaceDx();   // 顔診断から来た場合は結果を先に取り込む
  const start = $('#btn-start');
  if (start) start.addEventListener('click', startFace);
  const saved = getDx();
  const cont = $('#btn-continue');
  if (saved && saved.problemKeys && cont){
    cont.hidden = false;
    cont.addEventListener('click', () => renderResult(saved));
  }
}
init();
