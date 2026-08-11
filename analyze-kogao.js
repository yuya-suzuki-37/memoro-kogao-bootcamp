// ===================================================================
// 顔シグナル抽出（小顔）— face/analyzer.js の extractFace(478点) を流用。
//  役割は「補助・スクリーニング」。断定しない（景表法・faceの方針を踏襲）。
//  取るもの: ①左右差(どちら側が張るか) ②エラ張り傾向 ③輪郭タイプ(参考)
//  🔴閾値は暫定。実データ or 合成キャリブレーション手法で後較正する前提。
// ===================================================================
import { extractFace } from './analyzer-face.js';

const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
const deg = r => r * 180 / Math.PI;
// 点Pでの A-P-B 内角（度）。ロール正規化済みの等方lmで呼ぶ。
const angleAt = (A, P, B) => {
  const ax = A.x - P.x, ay = A.y - P.y, bx = B.x - P.x, by = B.y - P.y;
  const d = ax * bx + ay * by, na = Math.hypot(ax, ay) || 1e-6, nb = Math.hypot(bx, by) || 1e-6;
  return deg(Math.acos(clamp(d / (na * nb), -1, 1)));
};

// MediaPipe FaceLandmarker の結果から直接（UI用）
export function analyzeKogaoFromResult(result, imgW, imgH){
  const r = extractFace(result, imgW, imgH);
  if (!r.ok) return { ok:false, reason:r.reason };
  return analyzeKogao(r);
}

// extractFace の戻り値からシグナル算出（テスト・再利用しやすいよう分離）
export function analyzeKogao(r){
  const { features:f, quality:q, lm } = r;

  // 顔の向きが強いと左右差は信頼できない（yaw/pitch）
  const poseBad = (q.yawDeg != null && q.yawDeg > 12) || (q.pitchDeg != null && q.pitchDeg > 12);

  // --- 中心線x（鼻筋: 鼻根168・鼻下2・鼻先1） ---
  const cx = (lm[168].x + lm[2].x + lm[1].x) / 3;

  // --- 左右のエラの張り出し（中心からの水平距離。jawL=172 / jawR=397） ---
  const dxL = Math.abs(lm[172].x - cx);
  const dxR = Math.abs(lm[397].x - cx);
  const widthAsym = (dxR - dxL) / (((dxR + dxL) / 2) || 1e-6);   // + = 右が張り出す

  // --- 左右のエラ角（小さい=角ばる=張っている。analyzerと同じ点） ---
  const angL = angleAt(lm[150], lm[172], lm[132]);
  const angR = angleAt(lm[379], lm[397], lm[361]);
  const angleAsym = (angL - angR) / (((angL + angR) / 2) || 1e-6); // + = 右の角が小=右が張る

  // --- 総合左右差（幅0.6・角0.4）→ side & level ---
  const asym = widthAsym * 0.6 + angleAsym * 0.4;
  let side = null, asymLevel = 0;
  if (!poseBad){
    asymLevel = clamp(Math.abs(asym) / 0.10, 0, 1);  // 差10%で最大
    if (asymLevel >= 0.4) side = asym > 0 ? 'L' : 'R';   // 合成較正: lm[172/397]は画像基準→被写体の左右に反転
  }

  // --- 両側エラ張り傾向（gonialAngle小 or jawWidth大）。骨格の可能性ありで断定しない ---
  const gonial = f.gonialAngle;
  const gonialLevel = clamp((161 - gonial) / 13, 0, 1);          // 合成較正2026-08-10: エラ張り群149.3/細い群162.9（中点≈156）
  const jawLevel    = clamp((f.jawWidth - 0.74) / 0.08, 0, 1);   // 合成較正: エラ張り群0.814/細い群0.728
  const masseterLevel = clamp(Math.max(gonialLevel, jawLevel * 0.8), 0, 1) * (poseBad ? 0.5 : 1);

  return {
    ok:true, poseBad, quality:q,
    signals:{
      asymmetry:{
        level: asymLevel, side,
        note: side ? `${side==='R'?'右':'左'}側のエラ周りがやや張って見えます（鏡でもご確認を）`
                   : '左右差は目立ちません',
      },
      masseter:{
        level: masseterLevel,
        note: masseterLevel >= 0.5 ? 'エラ周りに張りの傾向があります' : '',
      },
    },
    contour: classifyContour(f),
  };
}

// 輪郭タイプ（参考のみ・良し悪しではない）
function classifyContour(f){
  const a = f.faceAspect, g = f.gonialAngle;
  let type = 'egg', label = 'たまご型（バランス）';
  if (a < 0.82 && g < 153){ type = 'base';  label = 'ベース型（エラが目立ちやすい）'; }  // 合成較正: gonial実測146-163
  else if (a < 0.82)       { type = 'round'; label = '丸顔タイプ'; }
  else if (a > 0.92)       { type = 'long';  label = '面長タイプ'; }
  return { type, label, note:'※輪郭は骨格による個性です。良し悪しではありません' };
}
