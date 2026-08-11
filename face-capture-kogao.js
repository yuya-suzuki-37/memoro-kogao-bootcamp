// ===================================================================
// 顔写真キャプチャ（小顔）— MediaPipe FaceLandmarker を CDN 動的ロードし、
//   写真1枚 → 478点 → analyzeKogao で小顔シグナル（左右差・エラ張り・輪郭）。
//   face診断(Memoro/face/app.js)のロード方式を流用。すべて端末内処理・無料。
// ===================================================================
import { analyzeKogaoFromResult } from './analyze-kogao.js';

const VISION = 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.9';
const FACE_MODEL = 'https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task';

let faceLandmarker = null;
export async function ensureFace(onProgress){
  if (faceLandmarker) return;
  onProgress && onProgress('AIモデルを準備しています…（初回のみ数秒）');
  const vision = await import(`${VISION}/vision_bundle.mjs`);
  const fileset = await vision.FilesetResolver.forVisionTasks(`${VISION}/wasm`);
  faceLandmarker = await vision.FaceLandmarker.createFromOptions(fileset, {
    baseOptions:{ modelAssetPath:FACE_MODEL }, runningMode:'IMAGE', numFaces:1,
    outputFaceBlendshapes:true, outputFacialTransformationMatrixes:true,
  });
}

// HEIC(iPhone写真) 遅延ロード
let _heic = null;
function getHeic(){ if (!_heic) _heic = import('https://cdn.jsdelivr.net/npm/heic-to/+esm'); return _heic; }

async function fileToBlob(file){
  const isHeic = /\.hei[cf]$/i.test(file.name || '') || /image\/(heic|heif)/i.test(file.type || '');
  if (isHeic){
    const mod = await getHeic();
    const heicTo = mod.heicTo || (mod.default && mod.default.heicTo);
    return await heicTo({ blob:file, type:'image/jpeg', quality:0.92 });
  }
  return file;
}

function blobToImage(blob){
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.onload  = () => { URL.revokeObjectURL(url); resolve(img); };
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('この画像は読み込めませんでした。JPEG/PNGでお試しください。')); };
    img.src = url;
  });
}

// file → { signals, preview(dataURL) }
export async function analyzePhoto(file, onProgress){
  await ensureFace(onProgress);
  onProgress && onProgress('お顔を読み取っています…');
  const blob = await fileToBlob(file);
  const img  = await blobToImage(blob);
  const maxW = 640, sc = Math.min(1, maxW / img.width);
  const W = Math.round(img.width * sc), H = Math.round(img.height * sc);
  const cv = document.createElement('canvas');
  cv.width = W; cv.height = H;
  const ctx = cv.getContext('2d', { willReadFrequently:true });
  ctx.drawImage(img, 0, 0, W, H);
  const result = faceLandmarker.detect(cv);
  const signals = analyzeKogaoFromResult(result, W, H);
  return { signals, preview: cv.toDataURL('image/jpeg', 0.85) };
}
