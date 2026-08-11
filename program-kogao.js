// ===================================================================
// 30日プログラム生成（小顔）— posture-30day の program.js を流用
//  4週: W1リセット(むくみ導入) / W2習慣 / W3強化 / W4仕上げ(式当日へ)
//  毎日: 朝ケア(むくみ) + 夜ケア(こわばり/姿勢/表情筋)。単調回避=最少使用ピック。
//  レスト日は設けず、W1を軽量化（続けやすさ優先・むくみは毎日流すのが有効）。
// ===================================================================
import { buildPool, buildAnchors } from './prescription-kogao.js';
import { DB_KOGAO } from './db-kogao.js';

export function weekTheme(day){
  if (day <= 7)  return { phase:1, week:1, label:'W1 リセット期', focus:'むくみを流して"軽くなった"を実感' };
  if (day <= 14) return { phase:2, week:2, label:'W2 習慣期',   focus:'毎日の型を定着させる' };
  if (day <= 21) return { phase:3, week:3, label:'W3 強化期',   focus:'種目を増やし強度アップ' };
  return             { phase:4, week:4, label:'W4 仕上げ期', focus:'式・前撮り当日へコンディション調整' };
}

// 使用回数が少ない種目を優先（アンカーは0.5倍で優先されやすく）。直近と被らせない。
function pickLeastUsed(list, usage, count, anchors, excludeIds){
  const score = ex => (usage[ex.id] || 0) * (anchors.has(ex.id) ? 0.5 : 1);
  const sorted = list
    .filter(ex => !excludeIds.includes(ex.id))
    .sort((a, b) => {
      const s = score(a) - score(b);
      if (s !== 0) return s;
      return (anchors.has(a.id) ? 0 : 1) - (anchors.has(b.id) ? 0 : 1);
    });
  const picked = sorted.slice(0, count);
  if (picked.length < count) {
    list.filter(ex => !picked.includes(ex)).forEach(ex => { if (picked.length < count) picked.push(ex); });
  }
  return picked;
}

// 問題キー配列 → 30日分の {day, week, label, focus, morning[], night[]}
//  🔴 夜ケア＝「表情筋トレ(facetrain)を主役」に固定。ほぐし/姿勢/エラは補助で少量。
//     朝ケア＝むくみ流し(即効・鏡でチェック)。鈴木指示「表情筋トレをメインに」を反映。
export function build30Day(problemKeys){
  const pool = buildPool(problemKeys);
  const anchors = buildAnchors(problemKeys);
  // 夜プールを「表情筋トレ」と「その他(ほぐし/姿勢/エラ)」に分離
  let nightTrain = pool.night.filter(e => e.category === 'facetrain');
  const nightOther = pool.night.filter(e => e.category !== 'facetrain');
  // 表情筋トレが夜プールに無い問題キーのフォールバック（全DBの表情筋トレで下支え）
  if (nightTrain.length === 0) nightTrain = DB_KOGAO.filter(e => e.category === 'facetrain');
  const mUse = {}, tUse = {}, oUse = {};
  const days = [];

  for (let day = 1; day <= 30; day++){
    const wk = weekTheme(day);
    const prev = days[days.length - 1];
    const prevIds = prev ? [...prev.morning, ...prev.night].map(e => e.id) : [];

    // 朝(むくみ即効): W1は1種目、W2以降は2種目
    const mCount = wk.phase === 1 ? 1 : 2;
    // 夜=表情筋トレ主役: W1-2は1種目、W3-4は2種目（強度アップ）
    const trainCount = wk.phase <= 2 ? 1 : 2;
    // 夜=補助のほぐし/姿勢: W1は0、W2以降は1種目
    const otherCount = wk.phase === 1 ? 0 : 1;

    const morning = pickLeastUsed(pool.morning, mUse, mCount, anchors, prevIds);
    const train   = pickLeastUsed(nightTrain, tUse, trainCount, anchors, prevIds);
    const other   = otherCount > 0
      ? pickLeastUsed(nightOther, oUse, otherCount, anchors, [...prevIds, ...train.map(e => e.id)])
      : [];
    const night = [...train, ...other];   // 表情筋トレを先頭＝主役に

    morning.forEach(e => mUse[e.id] = (mUse[e.id] || 0) + 1);
    train.forEach(e => tUse[e.id] = (tUse[e.id] || 0) + 1);
    other.forEach(e => oUse[e.id] = (oUse[e.id] || 0) + 1);

    days.push({ day, week: wk.week, phase: wk.phase, label: wk.label, focus: wk.focus, morning, night });
  }
  return days;
}

// 今日の1日分だけ欲しい場合
export function pickTodayMenu(problemKeys, day = 1){
  return build30Day(problemKeys)[day - 1];
}
