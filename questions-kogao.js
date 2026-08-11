// ===================================================================
// 問診（小顔）— 効果ファースト9問。各選択肢が問題キーに重みを与える。
//  方針: 問診が診断の主役（顔写真は補助）。花嫁向け・やさしい言葉。
//  q4は左右の噛みぐせ→masseter_L/R（顔写真が無くても部位個別化が効く）。
//  q9は挙式までの期間（countdown・プログラム強度用。問題キーには効かない）。
// ===================================================================
export const QUESTIONS = [
  {
    id:'q1_main', q:'いちばん気になるのはどこですか？',
    help:'あなたの"いちばん叶えたい"を教えてください',
    options:[
      { label:'フェイスラインのもたつき',   weights:{ mukumi:2, doubleChin:1 } },
      { label:'エラの張り',                 weights:{ masseter:3 } },
      { label:'顔の左右差',                 weights:{ asymmetry:2, masseter:1 } },
      { label:'頬のたるみ・ほうれい線',     weights:{ expression:3 } },
      { label:'とにかく全体をすっきり',     weights:{ mukumi:1, general:1 } },
    ],
  },
  {
    id:'q2_mukumi', q:'朝、顔のむくみを感じますか？',
    options:[
      { label:'よく感じる（特に朝）', weights:{ mukumi:3 } },
      { label:'ときどき',            weights:{ mukumi:1 } },
      { label:'あまり感じない',      weights:{} },
    ],
  },
  {
    id:'q3_clench', q:'食いしばり・歯ぎしりの自覚はありますか？',
    help:'朝あごが疲れている／歯の跡がつく人も「ある」に',
    options:[
      { label:'ある／朝あごが疲れている', weights:{ masseter:3 } },
      { label:'ときどき',               weights:{ masseter:1 } },
      { label:'ない',                   weights:{} },
    ],
  },
  {
    id:'q4_chew', q:'食べるとき、左右どちらでよく噛みますか？',
    help:'噛みぐせは顔の左右差の大きな原因です',
    options:[
      { label:'右で噛むことが多い',   weights:{ masseter_R:3, asymmetry:1 } },
      { label:'左で噛むことが多い',   weights:{ masseter_L:3, asymmetry:1 } },
      { label:'両方バランスよく',     weights:{} },
      { label:'わからない',           weights:{}, note:'顔写真があれば左右差を見ます' },
    ],
  },
  {
    id:'q5_screen', q:'スマホ・パソコンを見る時間は？',
    options:[
      { label:'1日6時間以上', weights:{ posture:3, doubleChin:1 } },
      { label:'3〜6時間',     weights:{ posture:1 } },
      { label:'3時間未満',    weights:{} },
    ],
  },
  {
    id:'q6_posture', q:'猫背・スマホ首の自覚はありますか？',
    options:[
      { label:'ある',       weights:{ posture:3, doubleChin:1 } },
      { label:'ときどき',   weights:{ posture:1 } },
      { label:'ない',       weights:{} },
    ],
  },
  {
    id:'q7_chin', q:'顎の下（二重あご）は気になりますか？',
    options:[
      { label:'正面でも気になる',   weights:{ doubleChin:3, posture:1 } },
      { label:'下を向くと気になる', weights:{ doubleChin:1 } },
      { label:'気にならない',       weights:{} },
    ],
  },
  {
    id:'q8_lifestyle', q:'塩分の多い食事・お酒・水分不足はありますか？',
    help:'むくみの生活習慣をチェックします',
    options:[
      { label:'よくある',     weights:{ mukumi:2 }, lifestyle:'hydration' },
      { label:'ときどき',     weights:{ mukumi:1 } },
      { label:'あまりない',   weights:{} },
    ],
  },
  {
    id:'q9_countdown', q:'挙式・前撮りまでの期間は？', meta:'countdown',
    help:'期間に合わせてケアの強さを調整します',
    options:[
      { label:'30日以内',        value:'sprint' },
      { label:'1〜3か月',        value:'standard' },
      { label:'3か月以上・未定', value:'relaxed' },
    ],
  },
];

// 問題キー→やさしい表示名（結果画面用）
export const KEY_LABEL = {
  mukumi:'むくみ', masseter:'エラの張り', masseter_L:'左の張り', masseter_R:'右の張り',
  posture:'姿勢', doubleChin:'二重あご', expression:'表情筋', asymmetry:'左右差', general:'土台ケア',
};
