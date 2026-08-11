// ===================================================================
// 処方（小顔）— 問題キー配列 → 朝/夜のスロット別 種目プール
//  posture-30day の prescription-matrix を小顔用に流用（course→slot/部位に置換）
// ===================================================================
import { DB_KOGAO } from './db-kogao.js';

export const BY_ID = Object.fromEntries(DB_KOGAO.map(e => [e.id, e]));

// 問題キー1つに該当する種目
function poolFor(problemKey){
  return DB_KOGAO.filter(e => e.targetProblems.includes(problemKey));
}

// 問題キー配列 → 朝/夜プール（重複排除・出現順を保持＝優先度）
function buildPool(problemKeys){
  const morning = new Map(), night = new Map();
  const add = ex => {
    const m = (ex.slot === '朝') ? morning : night;
    if (!m.has(ex.id)) m.set(ex.id, ex);
  };
  // 指定キーの順に追加（先頭キーほど優先）
  problemKeys.forEach(k => poolFor(k).forEach(add));
  // general（全員ベース）で下支え
  poolFor('general').forEach(add);
  // 最低数を確保（朝2・夜3）。足りなければ同スロット全体から補完
  if (morning.size < 2) DB_KOGAO.filter(e => e.slot === '朝').forEach(add);
  if (night.size   < 3) DB_KOGAO.filter(e => e.slot === '夜').forEach(add);
  return { morning: [...morning.values()], night: [...night.values()] };
}

// アンカー：各問題の代表種目（先頭）を優先処方
function buildAnchors(problemKeys){
  const set = new Set();
  problemKeys.forEach(k => { const p = poolFor(k); if (p[0]) set.add(p[0].id); });
  return set;
}

// プール統計（UI表示・デバッグ用）
function getPoolStats(problemKeys){
  const p = buildPool(problemKeys);
  return { morning: p.morning.length, night: p.night.length, total: p.morning.length + p.night.length };
}

export { poolFor, buildPool, buildAnchors, getPoolStats };
