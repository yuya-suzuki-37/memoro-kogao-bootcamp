// ===================================================================
// 統合診断（小顔）— 問診回答 ＋ 顔シグナル → 問題キー配列 → build30Day へ。
//  問診が主役・顔写真は補助。general(土台)は常に配列に入れる（共通ベース）。
//  生活習慣プランも同時に出す（毎日ケア＋日常の心がけ）。
// ===================================================================
import { QUESTIONS } from './questions-kogao.js';

const ALL_KEYS = ['mukumi','masseter','masseter_L','masseter_R','posture','doubleChin','expression','asymmetry'];

// answers: { q1_main:選択index, q2_mukumi:index, ... }
// faceSignals: analyzeKogao() の戻り（無ければ null）
export function diagnoseKogao(answers, faceSignals = null){
  const score = Object.fromEntries(ALL_KEYS.map(k => [k, 0]));
  let countdown = 'standard';
  const lifestyle = new Set();

  // ---- 問診の重み集計 ----
  QUESTIONS.forEach(Q => {
    const ai = answers[Q.id];
    if (ai == null) return;
    const opt = Q.options[ai];
    if (!opt) return;
    if (Q.meta === 'countdown'){ countdown = opt.value || 'standard'; return; }
    if (opt.weights) for (const [k, v] of Object.entries(opt.weights)) score[k] = (score[k] || 0) + v;
    if (opt.lifestyle) lifestyle.add(opt.lifestyle);
  });

  // ---- 顔シグナルを反映（品質OKのときだけ・補助的に加点） ----
  const faceUsed = !!(faceSignals && faceSignals.ok && !faceSignals.poseBad);
  if (faceUsed){
    const a = faceSignals.signals.asymmetry;
    if (a.side === 'R'){ score.masseter_R += 2 * a.level; score.asymmetry += 1.5 * a.level; }
    if (a.side === 'L'){ score.masseter_L += 2 * a.level; score.asymmetry += 1.5 * a.level; }
    const m = faceSignals.signals.masseter;
    if (m.level > 0) score.masseter += 1.5 * m.level;
  }

  // ---- 相関の補強 ----
  if (score.masseter_L > 0 || score.masseter_R > 0) score.masseter += 1; // 片側重点でも両側の基本ケアは入れる
  if (score.masseter_L > 0 && score.masseter_R > 0) score.asymmetry += 1; // 両側申告は左右差ケアも

  // ---- 問題キー配列（閾値以上を降順） ＋ general（土台は常に） ----
  const TH = 1.0;
  const ranked = ALL_KEYS.filter(k => score[k] >= TH).sort((x, y) => score[y] - score[x]);
  const problemKeys = ranked.length ? [...ranked, 'general'] : ['mukumi','general']; // 無回答時のフォールバック
  const primary = ranked.slice(0, 3);   // 重点（結果画面のハイライト用）

  return {
    problemKeys,
    primary,
    scores: score,
    countdown,
    faceUsed,
    contour: faceUsed ? faceSignals.contour : null,
    lifePlan: buildLifePlan(score, lifestyle),
  };
}

// 生活習慣プラン（毎日の心がけ・スコアに応じて出し分け）
function buildLifePlan(score, lifestyle){
  const plan = [];
  if (score.mukumi >= 1 || lifestyle.has('hydration'))
    plan.push({ icon:'💧', title:'水分と塩分', text:'水をこまめに（1日1.2〜1.5L目安）／塩分・寝る前の飲みすぎに注意。むくみの一番の近道です' });
  if (score.masseter >= 1 || score.masseter_L >= 1 || score.masseter_R >= 1)
    plan.push({ icon:'🦷', title:'食いしばりを手放す', text:'日中は「歯を離す」を意識。気づいたら上下の歯を2〜3mm離すだけでOK' });
  if (score.posture >= 1)
    plan.push({ icon:'📱', title:'スマホの高さ', text:'画面を目の高さに。1時間に1度は肩を後ろに回して姿勢をリセット' });
  if (score.doubleChin >= 1)
    plan.push({ icon:'🧍‍♀️', title:'下向き時間を減らす', text:'うつむき姿勢は顎下をもたつかせます。あごを軽く引く意識を習慣に' });
  if (score.expression >= 1)
    plan.push({ icon:'😊', title:'よく笑う・大きく話す', text:'表情筋は使うほど保てます。会話や笑顔で頬を動かしましょう' });
  // 最低1つは出す
  if (!plan.length)
    plan.push({ icon:'💧', title:'水分と巡り', text:'水をこまめに摂り、朝は鎖骨・首を流して1日をスタート' });
  return plan;
}
