// ===================================================================
// PROGRESS STORE（小顔30日）— 進捗・診断結果・履歴を localStorage に保存。
//   端末内のみ（サーバー送信なし）。posture-30day の progress-store を流用し、
//   「最新の診断結果(problemKeys)の保存/復元」を追加（再訪時に問診し直さず継続）。
// ===================================================================
const LS_PROGRESS = 'memoro_kogao30_progress_v1';
const LS_HISTORY  = 'memoro_kogao30_history_v1';
const LS_DX       = 'memoro_kogao30_dx_v1';

// ---------- 進捗（Day完了） ----------
function getProgress(){
  try { return JSON.parse(localStorage.getItem(LS_PROGRESS) || 'null') || { done:{}, startedAt:null }; }
  catch(e){ return { done:{}, startedAt:null }; }
}
function saveProgress(p){ try { localStorage.setItem(LS_PROGRESS, JSON.stringify(p)); } catch(e){} }
function isDayDone(day){ return !!getProgress().done[day]; }
function toggleDay(day){
  const p = getProgress();
  if (p.done[day]) delete p.done[day];
  else { p.done[day] = new Date().toISOString(); if (!p.startedAt) p.startedAt = p.done[day]; }
  saveProgress(p);
  return !!p.done[day];
}
function getDoneCount(){ return Object.keys(getProgress().done).length; }
function getStreak(){
  // 連続完了日数（Day1から途切れず何日続いたか）
  const done = getProgress().done; let n = 0;
  for (let d = 1; d <= 30; d++){ if (done[d]) n++; else break; }
  return n;
}
function resetProgress(){ try { localStorage.removeItem(LS_PROGRESS); } catch(e){} }

// ---------- 最新の診断結果（problemKeys等）＝再訪時の30日復元用 ----------
function saveDx(dx){ try { localStorage.setItem(LS_DX, JSON.stringify({ at:new Date().toISOString(), ...dx })); } catch(e){} }
function getDx(){ try { return JSON.parse(localStorage.getItem(LS_DX) || 'null'); } catch(e){ return null; } }
function clearDx(){ try { localStorage.removeItem(LS_DX); } catch(e){} }

// ---------- 診断履歴（Before/After） ----------
function getHistory(){ try { return JSON.parse(localStorage.getItem(LS_HISTORY) || '[]'); } catch(e){ return []; } }
function addHistory(rec){
  const list = getHistory();
  list.push({ at:new Date().toISOString(), ...rec });
  try { localStorage.setItem(LS_HISTORY, JSON.stringify(list)); } catch(e){}
  return list;
}
function getBeforeAfter(){
  const list = getHistory();
  if (!list.length) return null;
  return { first:list[0], last:list[list.length-1], count:list.length };
}
function clearHistory(){ try { localStorage.removeItem(LS_HISTORY); } catch(e){} }

// ---------- 挙式日・カウントダウン（継続エンジン） ----------
const LS_WEDDING = 'memoro_kogao30_wedding_v1';
function saveWeddingDate(iso){ try { localStorage.setItem(LS_WEDDING, iso); } catch(e){} }
function getWeddingDate(){ try { return localStorage.getItem(LS_WEDDING) || null; } catch(e){ return null; } }
function getDaysUntilWedding(){
  const d = getWeddingDate(); if (!d) return null;
  return Math.ceil((new Date(d + 'T00:00:00') - new Date()) / 86400000);
}

// ---------- Before/After 写真（端末内・dataURL・圧縮済みを渡すこと） ----------
const LS_PHOTOS = 'memoro_kogao30_photos_v1';
function getPhotos(){ try { return JSON.parse(localStorage.getItem(LS_PHOTOS) || '{}'); } catch(e){ return {}; } }
function savePhoto(key, dataURL){ const p = getPhotos(); p[key] = { at:new Date().toISOString(), img:dataURL }; try { localStorage.setItem(LS_PHOTOS, JSON.stringify(p)); } catch(e){} }
function getPhoto(key){ return getPhotos()[key] || null; }

// ---------- 生活習慣チェック（日ごと・種目カウント外・満足度UP） ----------
const HABIT_KEYS = ['sleep','salt','cool','nose'];   // 仰向け寝/塩分管理/温冷/鼻呼吸
const LS_HABITS = 'memoro_kogao30_habits_v1';
function getHabits(){ try { return JSON.parse(localStorage.getItem(LS_HABITS) || '{}'); } catch(e){ return {}; } }
function toggleHabit(day, key){
  const h = getHabits(), dk = 'd' + day; h[dk] = h[dk] || {};
  h[dk][key] = !h[dk][key];
  try { localStorage.setItem(LS_HABITS, JSON.stringify(h)); } catch(e){}
  return h[dk][key];
}
function isHabitDone(day, key){ const d = getHabits()['d' + day]; return !!(d && d[key]); }
function getHabitPerfectDays(){ const h = getHabits(); let n = 0; Object.values(h).forEach(d => { if (HABIT_KEYS.every(k => d[k])) n++; }); return n; }

export {
  getProgress, isDayDone, toggleDay, getDoneCount, getStreak, resetProgress,
  saveDx, getDx, clearDx,
  getHistory, addHistory, getBeforeAfter, clearHistory,
  saveWeddingDate, getWeddingDate, getDaysUntilWedding,
  savePhoto, getPhoto, getPhotos,
  HABIT_KEYS, toggleHabit, isHabitDone, getHabitPerfectDays,
};
