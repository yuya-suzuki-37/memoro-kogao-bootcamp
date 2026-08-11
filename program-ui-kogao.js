// ===================================================================
// 30日プログラム UI（小顔）— diagnose結果 → build30Day → Memoroデザインで描画。
//   ・式当日カウントダウン（継続エンジン）／式映えゴール
//   ・進捗バー＋連続日数／📸Before/After（変化の可視化）／✅生活習慣チェック枠
//   ・Week1〜4タブ／Day1〜30カレンダー／Day詳細（朝は"即効"強調・出典/禁忌表示）
// ===================================================================
import { build30Day } from './program-kogao.js';
import { KOGAO_CATEGORY } from './db-kogao.js';
import { KEY_LABEL } from './questions-kogao.js';
import {
  isDayDone, toggleDay, getDoneCount, getStreak,
  getDaysUntilWedding, saveWeddingDate,
  HABIT_KEYS, toggleHabit, isHabitDone, getHabitPerfectDays,
  savePhoto, getPhoto,
} from './progress-store.js';

const BRIDAL_GOALS = {
  mukumi:     'フェイスラインがすっきりして、正面カットが小顔印象に',
  masseter:   'エラの張りがやわらいで、輪郭がやさしい印象に',
  masseter_L: '左右のエラのバランスが整って見える',
  masseter_R: '左右のエラのバランスが整って見える',
  posture:    '首がすっと伸びて、ドレスのデコルテラインが映える',
  doubleChin: 'あご下が引き締まって、見上げ・正面カットがきれいに',
  expression: '頬が上がって、笑顔の写真がより華やかに',
  asymmetry:  '左右のバランスが整って、どの角度からも自然な印象に',
  general:    'いまのすっきり感をキープして、写真映えを底上げ',
};

const PHASE_INFO = {
  1:{ en:'RESET',  name:'リセット期', days:'DAY 1–7',   desc:'むくみを流して「軽くなった」を実感する最初の1週間。朝の巡りケアから始めます。' },
  2:{ en:'HABIT',  name:'習慣期',     days:'DAY 8–14',  desc:'朝のむくみケアと夜の表情筋・こわばりケアを、毎日の"型"として定着させます。' },
  3:{ en:'BOOST',  name:'強化期',     days:'DAY 15–21', desc:'種目を増やし、表情筋を使ってフェイスラインを引き上げていく1週間。' },
  4:{ en:'FINISH', name:'仕上げ期',   days:'DAY 22–30', desc:'式・前撮り当日に向けて、ベストな状態へ整える最後の期間。' },
};

const HABIT_LABEL = { sleep:'🛏 仰向け寝', salt:'🧂 塩分ひかえめ', cool:'❄️ 朝の温冷', nose:'👃 鼻呼吸' };

const catLabel = ex => (KOGAO_CATEGORY[ex.category] && KOGAO_CATEGORY[ex.category].name) || 'ケア';
const slotClass = ex => ex.slot === '朝' ? 'morning' : 'night';
const illustSrc = ex => ex.illust ? `illust/${ex.illust}` : null;

function estimateMinutes(d){
  const n = (d.morning ? d.morning.length : 0) + (d.night ? d.night.length : 0);
  return n >= 5 ? '約5分' : n >= 4 ? '約4分' : '約3分';
}
const todayKey = () => { try { return new Date().toDateString(); } catch(e){ return 'today'; } };

// 顔写真を端末内で圧縮（localStorage節約・外部送信なし）
function compressImage(file, cb){
  const img = new Image(), url = URL.createObjectURL(file);
  img.onload = () => {
    URL.revokeObjectURL(url);
    const max = 420, sc = Math.min(1, max / img.width);
    const c = document.createElement('canvas');
    c.width = Math.round(img.width * sc); c.height = Math.round(img.height * sc);
    c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
    cb(c.toDataURL('image/jpeg', 0.7));
  };
  img.onerror = () => { URL.revokeObjectURL(url); };
  img.src = url;
}

export function render30DayKogao(dx, mountEl){
  if (!mountEl) return;
  const problemKeys = (dx && dx.problemKeys) || ['general'];
  const primary = ((dx && dx.primary) || []).filter(k => k !== 'general');
  const program = build30Day(problemKeys);
  let curPhase = 1;

  const goalItems = primary.filter(k => BRIDAL_GOALS[k])
    .map(k => `<li><span class="p30-goal-tag">${KEY_LABEL[k] || ''}</span><span class="p30-goal-text">${BRIDAL_GOALS[k]}</span></li>`)
    .join('');

  mountEl.innerHTML = `
  <div class="section-head" style="margin-top:44px">
    <span class="num">YOUR 30-DAY PLAN</span>
    <h2>あなたの30日プログラム</h2>
    <p>診断結果から、いまのあなたに必要なケアを30日分に組みました。1日およそ3〜5分・道具なしでOKです。</p>
  </div>

  <div class="p30-countdown" id="p30-countdown"></div>

  ${goalItems ? `
  <div class="p30-goals">
    <span class="p30-goals-kicker">この30日でめざす“式映え”</span>
    <ul class="p30-goals-list">${goalItems}</ul>
    <p class="p30-goals-note">※ 変化には個人差があります。毎日の積み重ねで、写真の“見え方”を整えていくプログラムです。</p>
  </div>` : ''}

  <div class="p30-progress" id="p30-progress"></div>
  <div class="p30-beforeafter" id="p30-beforeafter"></div>
  <div class="p30-habits" id="p30-habits"></div>

  <div class="p30-phases">
    ${[1,2,3,4].map(ph => `
      <button class="p30-phase-tab ${ph===1?'active':''}" data-phase="${ph}">
        <span class="pt-en">${PHASE_INFO[ph].en}</span>
        <span class="pt-ja">${PHASE_INFO[ph].name}</span>
        <span class="pt-days">${PHASE_INFO[ph].days}</span>
      </button>`).join('')}
  </div>

  <div class="p30-phase-desc" id="p30-phase-desc">${PHASE_INFO[1].desc}</div>
  <div class="p30-days" id="p30-days"></div>
  <div class="p30-detail" id="p30-detail" hidden></div>
  `;

  const daysEl     = mountEl.querySelector('#p30-days');
  const descEl     = mountEl.querySelector('#p30-phase-desc');
  const detailEl   = mountEl.querySelector('#p30-detail');
  const progressEl = mountEl.querySelector('#p30-progress');
  const cdEl       = mountEl.querySelector('#p30-countdown');
  const baEl       = mountEl.querySelector('#p30-beforeafter');
  const habitsEl   = mountEl.querySelector('#p30-habits');

  // ---- 式当日カウントダウン（継続エンジン） ----
  function renderCountdown(){
    const days = getDaysUntilWedding();
    if (days != null && days >= 0){
      cdEl.innerHTML = `
        <div class="cd-box">
          <span class="cd-label">💍 式・前撮りまで</span>
          <div class="cd-big">あと <b>${days}</b> 日</div>
          <button class="cd-edit" id="cd-edit">日付を変更</button>
        </div>`;
      cdEl.querySelector('#cd-edit').addEventListener('click', () => { saveWeddingDate(''); renderCountdown(); });
    } else {
      cdEl.innerHTML = `
        <div class="cd-box cd-set">
          <span class="cd-label">💍 式・前撮りの日を入れると、毎日カウントダウン</span>
          <div class="cd-input-row"><input type="date" id="cd-input"><button class="cd-save" id="cd-save">設定</button></div>
        </div>`;
      cdEl.querySelector('#cd-save').addEventListener('click', () => {
        const v = cdEl.querySelector('#cd-input').value;
        if (v){ saveWeddingDate(v); renderCountdown(); }
      });
    }
  }

  // ---- 進捗バー＋連続日数 ----
  function renderProgressBar(){
    const done = getDoneCount(), streak = getStreak();
    const pct = Math.round(done / 30 * 100);
    progressEl.innerHTML = `
      <div class="p30-progress-top">
        <span class="p30-progress-label">30日の進み具合${streak>=2?` ・ <b>${streak}日連続</b>🔥`:''}</span>
        <span class="p30-progress-count"><b>${done}</b> / 30 日</span>
      </div>
      <div class="p30-progress-bar"><i style="width:${pct}%"></i></div>
      ${done >= 30 ? '<p class="p30-progress-done">🎉 30日おつかれさまでした！ 前撮り・当日の写真を楽しんで。</p>' : ''}`;
  }

  // ---- 📸 Before / After（変化の可視化・端末内） ----
  function renderBeforeAfter(){
    const before = getPhoto('before'), after = getPhoto('after');
    const slot = (key, ph) => {
      const p = getPhoto(key);
      return p
        ? `<div class="ba-slot"><img src="${p.img}" alt=""><button class="ba-redo" data-ba-redo="${key}">撮り直す</button><span class="ba-cap">${ph}</span></div>`
        : `<div class="ba-slot"><label class="ba-add"><span class="ba-plus">＋</span><span>${ph}の写真</span><input type="file" accept="image/*" data-ba="${key}" hidden></label><span class="ba-cap">${ph}</span></div>`;
    };
    baEl.innerHTML = `
      <div class="p30-ba-box">
        <div class="p30-ba-head"><span>📸 Before / After</span><span class="p30-ba-note">正面のお顔で30日の変化を残そう（端末内だけ）</span></div>
        <div class="p30-ba-grid">${slot('before','Before（今）')}${slot('after','After（30日後）')}</div>
        ${before && after ? '<p class="p30-ba-done">✨ 2枚そろいました。並べて見比べてみましょう。</p>' : ''}
      </div>`;
    baEl.querySelectorAll('input[data-ba]').forEach(inp => inp.addEventListener('change', e => {
      const f = e.target.files && e.target.files[0]; if (!f) return;
      compressImage(f, url => { savePhoto(e.target.dataset.ba, url); renderBeforeAfter(); });
    }));
    baEl.querySelectorAll('[data-ba-redo]').forEach(btn => btn.addEventListener('click', () => {
      savePhoto(btn.dataset.baRedo, ''); renderBeforeAfter();
    }));
  }

  // ---- ✅ 生活習慣チェック枠（種目カウント外） ----
  function renderHabits(){
    const dk = todayKey(), perfect = getHabitPerfectDays();
    habitsEl.innerHTML = `
      <div class="p30-habits-box">
        <div class="p30-habits-head"><span>✅ 今日の生活習慣</span><span class="p30-habits-count">${perfect}日 コンプリート</span></div>
        <div class="p30-habits-grid">
          ${HABIT_KEYS.map(k => `<button class="habit-btn ${isHabitDone(dk,k)?'on':''}" data-habit="${k}">${HABIT_LABEL[k]}</button>`).join('')}
        </div>
        <p class="p30-habits-note">種目とは別枠の"心がけ"。むくみ・寝ジワ予防に効きます（※効果には個人差）</p>
      </div>`;
    habitsEl.querySelectorAll('.habit-btn').forEach(b => b.addEventListener('click', () => {
      toggleHabit(dk, b.dataset.habit); renderHabits();
    }));
  }

  function renderDays(phase){
    const days = program.filter(d => d.phase === phase);
    daysEl.innerHTML = days.map(d => {
      const names = [...d.morning, ...d.night].map(e => e.name).slice(0, 3).join('・');
      return `
      <button class="p30-day ${isDayDone(d.day)?'is-done':''}" data-day="${d.day}">
        ${isDayDone(d.day) ? '<span class="p30-day-check">✓</span>' : ''}
        <span class="p30-day-badge">DAY</span>
        <span class="p30-day-num">${d.day}</span>
        <span class="p30-day-theme">☀${d.morning.length}・🌙${d.night.length}</span>
        <span class="p30-day-items">${names}</span>
        <span class="p30-day-time">${estimateMinutes(d)}</span>
      </button>`;
    }).join('');
  }

  function exCard(ex){
    const src = illustSrc(ex), icon = (KOGAO_CATEGORY[ex.category] && KOGAO_CATEGORY[ex.category].icon) || '✨';
    const illust = src
      ? `<img src="${src}" alt="" onerror="this.outerHTML='<span class=&quot;p30-ex-emoji&quot;>${icon}</span>'">`
      : `<span class="p30-ex-emoji">${icon}</span>`;
    return `
      <div class="p30-ex ${slotClass(ex)}">
        <div class="p30-ex-illust">${illust}</div>
        <div class="p30-ex-body">
          <span class="p30-ex-cat">${catLabel(ex)}</span>
          <h4>${ex.name}</h4>
          <div class="p30-ex-meta"><span>⏱ ${ex.duration || ''}</span></div>
          <p class="p30-ex-purpose">${ex.purpose || ''}</p>
          ${(ex.how && ex.how.length) ? `<ol class="p30-ex-how">${ex.how.map(s => `<li>${s}</li>`).join('')}</ol>` : ''}
          ${ex.cues ? `<div class="p30-ex-cues"><span class="do">◎ ${ex.cues.do || ''}</span><span class="dont">× ${ex.cues.dont || ''}</span></div>` : ''}
          ${ex.evidence ? `<p class="p30-ex-evi">🔬 エビデンス <b>${ex.evidence.lv}</b>${ex.evidence.src ? ` ・ ${ex.evidence.src}` : ''}</p>` : ''}
          ${ex.caution ? `<p class="p30-ex-caution">⚠️ ${ex.caution}</p>` : ''}
        </div>
      </div>`;
  }

  function renderDetail(day){
    const d = program.find(x => x.day === day);
    if (!d){ detailEl.hidden = true; return; }
    const done = isDayDone(day);
    detailEl.innerHTML = `
      <div class="p30-detail-head">
        <div>
          <span class="p30-detail-kicker">${PHASE_INFO[d.phase].name} · DAY ${d.day} ・ ${estimateMinutes(d)}</span>
          <h3>今日のケア</h3>
        </div>
        <button class="p30-detail-close" aria-label="閉じる">×</button>
      </div>
      <div class="p30-slot"><span class="p30-slot-label morning">☀ 朝のケア（むくみ・巡り）</span><span class="p30-slot-tip">💧 やってすぐ鏡でチェック（むくみは"当日"実感しやすい）</span></div>
      <div class="p30-ex-list">${d.morning.map(exCard).join('')}</div>
      <div class="p30-slot"><span class="p30-slot-label night">🌙 夜のケア（表情筋・姿勢・エラ）</span></div>
      <div class="p30-ex-list">${d.night.map(exCard).join('')}</div>
      <button class="p30-done-btn ${done?'done':''}" data-done-day="${day}">
        ${done ? '✓ 完了しました（取り消す）' : 'この日のケアを完了にする'}
      </button>`;
    detailEl.hidden = false;
    detailEl.querySelector('.p30-detail-close').addEventListener('click', () => { detailEl.hidden = true; });
    detailEl.querySelector('.p30-done-btn').addEventListener('click', () => {
      toggleDay(day); renderProgressBar(); renderDays(curPhase); renderDetail(day);
    });
    detailEl.scrollIntoView({ behavior:'smooth', block:'nearest' });
  }

  mountEl.querySelectorAll('.p30-phase-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      curPhase = +tab.dataset.phase;
      mountEl.querySelectorAll('.p30-phase-tab').forEach(t => t.classList.toggle('active', t === tab));
      descEl.textContent = PHASE_INFO[curPhase].desc;
      renderDays(curPhase);
      detailEl.hidden = true;
    });
  });

  daysEl.addEventListener('click', e => {
    const btn = e.target.closest('.p30-day');
    if (btn) renderDetail(+btn.dataset.day);
  });

  renderCountdown();
  renderProgressBar();
  renderBeforeAfter();
  renderHabits();
  renderDays(1);
}
