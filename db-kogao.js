// ===================================================================
// 小顔ケア 種目DB(kogao) - @japan.no1チャンネル110種をエビデンス厳選
//   1330種目->area別Workflow統合->表情筋トレ主軸・地雷除外・出典/禁忌付き
//   根拠: _knowledge/evidence.md + チャンネル解説(美容整体)
//   isTraining=表情筋トレ / evidence.lv A機序 B研究 C経験則 / 断定しない(景表法)
//   illust=部位別に既存27枚を割当(design-board統一)。無い部位はonerrorで絵文字
// ===================================================================

export const KOGAO_PROBLEMS = {
  mukumi:{name:'むくみ',desc:'水分がたまってフェイスラインがぼやける'},
  masseter:{name:'エラの張り',desc:'食いしばりで咬筋がこわばる'},
  masseter_L:{name:'左の張り',desc:'左が張って左右差が出ている'},
  masseter_R:{name:'右の張り',desc:'右が張って左右差が出ている'},
  posture:{name:'姿勢',desc:'スマホ首・猫背でフェイスラインが崩れる'},
  doubleChin:{name:'二重あご',desc:'顎下がもたついて見える'},
  expression:{name:'表情筋のゆるみ',desc:'頬のハリ低下・ほうれい線が気になる'},
  asymmetry:{name:'左右差',desc:'噛みぐせなどで顔の左右が非対称'},
  general:{name:'ベースケア',desc:'全員向けの土台ケア'},
};

export const DB_KOGAO = [
 {
  "id": "kg_ch_1",
  "name": "耳回し（後ろ回し）",
  "targetProblems": [
   "mukumi"
  ],
  "category": "lymph",
  "slot": "朝",
  "region": "center",
  "intensity": 1,
  "duration": "左右各20回",
  "illust": "ex-ear.png",
  "muscle": "耳周囲リンパ・血管",
  "isTraining": false,
  "purpose": "耳まわりの血流・リンパを一時的に促し、むくみを軽くして顔まわりがすっきり見える印象づくり",
  "how": [
   "耳全体を指でつまみ、後ろ方向に大きくゆっくり回す。左右各20回。前回しは避ける。"
  ],
  "why": "耳介周囲の血流・リンパ流を一時的に促進（効果は一過性で戻る）",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "強く引っ張りすぎない。痛みがあれば中止。複数動画で前回しはNGと注意あり＝後ろ回し推奨。ピアス穴・耳の炎症時は避ける"
 },
 {
  "id": "kg_ch_2",
  "name": "耳の3方向引っ張り（斜め上・真横・斜め下）",
  "targetProblems": [
   "doubleChin",
   "masseter"
  ],
  "category": "masseter",
  "slot": "朝",
  "region": "center",
  "intensity": 1,
  "duration": "各方向10回",
  "illust": "ex-ear.png",
  "muscle": "側頭筋膜（付着部のこわばり）",
  "isTraining": false,
  "purpose": "耳・側頭部のこわばりをゆるめ、こめかみ〜フェイスラインが引き上がった印象に整える（一時的な見え方）",
  "how": [
   "耳を「斜め上・真横・斜め下」の3方向へ、それぞれ心地よい強さで引っ張る。各10回。"
  ],
  "why": "経験則。ほぐしによる一時的なこわばり軽減で、筋・骨格が変わるわけではない",
  "evidence": {
   "lv": "C",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "急に強く引かない。耳やピアス穴に炎症・痛みがある時は行わない"
 },
 {
  "id": "kg_ch_3",
  "name": "耳ピースはさみ上下マッサージ",
  "targetProblems": [
   "mukumi"
  ],
  "category": "lymph",
  "slot": "朝",
  "region": "center",
  "intensity": 1,
  "duration": "約20回",
  "illust": "ex-ear.png",
  "muscle": "耳下腺・耳前後リンパ",
  "isTraining": false,
  "purpose": "耳の前後（耳下腺・表在リンパ）の巡りを促し、むくみの一時的な軽減・血色感アップ",
  "how": [
   "人差し指と中指で耳を挟み（ピース）、耳の前後を上下にすべらせてマッサージする。約20回。"
  ],
  "why": "耳前後の表在リンパ・血流を一時的に促す（一過性）",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "肌をこすりすぎない。摩擦を避けるため乾いた強擦はしない。痛みが出たら弱める"
 },
 {
  "id": "kg_ch_4",
  "name": "耳の後ろ・裏のリンパ節ほぐし",
  "targetProblems": [
   "mukumi"
  ],
  "category": "lymph",
  "slot": "朝",
  "region": "center",
  "intensity": 1,
  "duration": "10〜20回",
  "illust": "ex-ear.png",
  "muscle": "耳後リンパ節",
  "isTraining": false,
  "purpose": "耳後ろのリンパ節を刺激し、顔・首まわりのむくみを一時的にすっきり見せる",
  "how": [
   "耳の後ろのくぼみ（リンパ節）を指の腹で優しく押し、そのまま首筋へ流す。10〜20回。"
  ],
  "why": "耳後リンパ節への機械的刺激で排液を一時的に促進（機序は妥当だが持続はしない）",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "ゴシゴシ強くこすらず優しく。リンパ節が腫れている・押して強い痛みがある時は行わない"
 },
 {
  "id": "kg_ch_5",
  "name": "耳たぶ回し＋側頭部ゆるめ",
  "targetProblems": [
   "expression",
   "masseter"
  ],
  "category": "masseter",
  "slot": "夜",
  "region": "center",
  "intensity": 1,
  "duration": "左右各10回",
  "illust": "ex-ear.png",
  "muscle": "側頭筋",
  "isTraining": false,
  "purpose": "側頭部の筋膜や食いしばりの緊張をゆるめ、こわばりを和らげて表情が軽く見える印象に整える（見え方レベル）",
  "how": [
   "耳たぶをつまんで後ろ回しに回し、そのまま側頭部を手のひらで軽く引き上げてゆるめる。左右各10回。"
  ],
  "why": "側頭筋・筋膜の緊張をゆるめる整体的アプローチ。見え方の変化にとどまる",
  "evidence": {
   "lv": "C",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "側頭部を強く圧迫しすぎない。頭痛・めまいがある時は避ける"
 },
 {
  "id": "kg_ch_6",
  "name": "眼輪筋の開閉トレーニング",
  "targetProblems": [
   "expression"
  ],
  "category": "facetrain",
  "slot": "夜",
  "region": "center",
  "intensity": 2,
  "duration": "5秒キープ×10回",
  "illust": "ex-e1.png",
  "muscle": "眼輪筋",
  "isTraining": true,
  "purpose": "目もとが引き締まった印象・ハリのある見え方（たるみ消失や小顔化を保証するものではない）",
  "how": [
   "目をギュッと閉じて5秒キープし、パッと大きく見開いて5秒キープする。眼球は押さえない。"
  ],
  "why": "顔の表情筋トレで頬のボリュームが増した小規模RCT（JAMA Dermatol 2018）を目もとに外挿。",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "眼球は絶対に押さない。コンタクト使用中は外して行う。"
 },
 {
  "id": "kg_ch_7",
  "name": "下まぶた分離トレーニング",
  "targetProblems": [
   "expression"
  ],
  "category": "facetrain",
  "slot": "夜",
  "region": "center",
  "intensity": 2,
  "duration": "20回",
  "illust": "ex-e1.png",
  "muscle": "眼輪筋（下部・下眼瞼）",
  "isTraining": true,
  "purpose": "下まぶたのハリ・引き上がった印象",
  "how": [
   "頬骨に指を軽く添えて頬が一緒に上がらないよう固定し、下まぶただけで遠くを見るように目を細める→ゆるめるを繰り返す。"
  ],
  "why": "眼輪筋下部の分離収縮。表情筋トレの機序（JAMA Dermatol 2018）に準拠。",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "皮膚は引っぱらず指は軽く添えるだけ（強く引くと色素沈着・くま悪化のリスク）。"
 },
 {
  "id": "kg_ch_8",
  "name": "眼瞼挙筋トレーニング（おでこ固定）",
  "targetProblems": [
   "expression"
  ],
  "category": "facetrain",
  "slot": "夜",
  "region": "center",
  "intensity": 2,
  "duration": "10〜20回",
  "illust": "ex-fhlymph.png",
  "muscle": "眼瞼挙筋",
  "isTraining": true,
  "purpose": "額に頼らず目を開く癖付け・目の開きが軽い印象（額の横ジワ予防にも）",
  "how": [
   "眉とおでこが動かないよう指で押さえ、額の力を使わずまぶただけで大きく開く→戻すを繰り返す。"
  ],
  "why": "額（前頭筋）に頼らず開瞼する癖付け。目もと専用の研究は乏しく経験則寄りだが、額の横ジワ予防の観点でも合理的。",
  "evidence": {
   "lv": "C",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "額を動かして代償しないよう固定する。加齢性・腱膜性の本当の眼瞼下垂は筋トレでは改善しないため医療機関へ。"
 },
 {
  "id": "kg_ch_9",
  "name": "目もとのリンパ流し（むくみ流し）",
  "targetProblems": [
   "expression",
   "mukumi"
  ],
  "category": "lymph",
  "slot": "朝",
  "region": "center",
  "intensity": 1,
  "duration": "10回",
  "illust": "ex-eyelymph.png",
  "muscle": "",
  "isTraining": false,
  "purpose": "朝のむくみ・目もとの重さの一時的な軽減",
  "how": [
   "目頭から目の下→目尻→こめかみ→耳の前へ、触れるか触れないかの優しい圧で一方向にゆっくり流す。"
  ],
  "why": "静脈・リンパ還流の一時的促進。持続的なたるみ改善の根拠は弱い。",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "目もとの皮膚は非常に薄い。擦る・引っぱると色素沈着やくま悪化につながるため撫でる程度に。"
 },
 {
  "id": "kg_ch_10",
  "name": "ホットアイ（手のひら温め）",
  "targetProblems": [
   "expression",
   "mukumi"
  ],
  "category": "lymph",
  "slot": "朝",
  "region": "center",
  "intensity": 1,
  "duration": "20〜30秒",
  "illust": "ex-eyecool.png",
  "muscle": "",
  "isTraining": false,
  "purpose": "目もとの血行を促しこわばりをゆるめる（すっきりした見え方）",
  "how": [
   "両手をこすり合わせて温め、目を閉じた上にそっと当てて温める。眼球は圧迫しない。"
  ],
  "why": "温熱で血流・筋の柔軟性が一時的に向上。むくみ・疲れ目の緩和は経験則寄り。",
  "evidence": {
   "lv": "C",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "眼球は圧迫しない。低温やけどに注意。"
 },
 {
  "id": "kg_ch_11",
  "name": "大頬骨筋トレ（口角引き上げキープ）",
  "targetProblems": [
   "expression"
  ],
  "category": "facetrain",
  "slot": "夜",
  "region": "center",
  "intensity": 2,
  "duration": "10〜20秒キープ×3〜5回",
  "illust": "ex-corner.png",
  "muscle": "大頬骨筋",
  "isTraining": true,
  "purpose": "頬が引き上がった印象・口元のハリ感（一時的な見え方レベル）",
  "how": [
   "口角を目尻方向（斜め上）へ引き上げ、頬の一番高い部分が持ち上がるのを意識して10〜20秒キープ。ゆるめて繰り返す。やりにくければ指で軽く補助する。"
  ],
  "why": "表情筋の反復収縮が中顔面のハリ感に寄与しうる（JAMA Dermatol 2018の顔面エクササイズ研究）",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "額や首に力を入れず頬だけを動かす。痛みが出たら中止。"
 },
 {
  "id": "kg_ch_12",
  "name": "頬ふくらませ運動（空気で内側から）",
  "targetProblems": [
   "expression"
  ],
  "category": "facetrain",
  "slot": "夜",
  "region": "center",
  "intensity": 2,
  "duration": "10〜20回",
  "illust": "ex-balloon.png",
  "muscle": "頬筋",
  "isTraining": true,
  "purpose": "頬の内側からのハリ・弾力の印象",
  "how": [
   "口を閉じて頬に空気をたっぷり含み、パンパンに膨らませて数秒キープ→ゆっくり吐く。左右・上下に空気を移してもよい。"
  ],
  "why": "頬筋の等尺性収縮を促す表情筋トレ。効果は主に印象・ハリレベル",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "息を強く止めすぎない。高血圧・めまいのある人は無理に力まない。"
 },
 {
  "id": "kg_ch_13",
  "name": "母音の口トレ（あ・い・う・え・お）",
  "targetProblems": [
   "expression"
  ],
  "category": "facetrain",
  "slot": "夜",
  "region": "center",
  "intensity": 2,
  "duration": "2〜3セット",
  "illust": "ex-iu.png",
  "muscle": "表情筋全体（大頬骨筋・口輪筋・頬筋ほか）",
  "isTraining": true,
  "purpose": "表情筋を大きく動かし、こわばりのない動きやすい状態にする（表情・ハリの印象）",
  "how": [
   "「あ・い・う・え・お」を口を大きく動かして1音ずつはっきり作り、各3〜5秒キープしながらゆっくり繰り返す。"
  ],
  "why": "広い可動域での表情筋運動。エビデンスは印象・主観改善レベル",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "「い」で口角を無理に強く横・下へ引かない（力みすぎ注意）。"
 },
 {
  "id": "kg_ch_14",
  "name": "頬骨下〜耳・こめかみ流し",
  "targetProblems": [
   "expression",
   "mukumi"
  ],
  "category": "lymph",
  "slot": "朝",
  "region": "center",
  "intensity": 1,
  "duration": "左右各5〜10回",
  "illust": "ex-ear.png",
  "muscle": "",
  "isTraining": false,
  "purpose": "むくみの一時的な軽減・すっきりした印象",
  "how": [
   "頬骨の下に指または手のひらの付け根を当て、耳の前〜こめかみ方向へ軽くなでるように流す。左右行う。"
  ],
  "why": "用手リンパドレナージュはむくみを一時的に軽減しうる（効果は持続しない）",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "強くこすらない・引っぱらない（摩擦による色素沈着・刺激に注意）。滑りが悪ければクリームを使う。"
 },
 {
  "id": "kg_ch_15",
  "name": "SMAS筋膜の手のひらリフト",
  "targetProblems": [
   "expression"
  ],
  "category": "lymph",
  "slot": "夜",
  "region": "center",
  "intensity": 1,
  "duration": "10〜20秒キープ×左右",
  "illust": "ex-relax.png",
  "muscle": "SMAS筋膜（表在性筋膜）・中顔面",
  "isTraining": false,
  "purpose": "一時的に引き上がった見え方",
  "how": [
   "手のひら全体で頬を覆い、耳の上・斜め45度方向へやさしく引き上げて10〜20秒キープし、ゆっくり離す。左右。"
  ],
  "why": "皮膚・筋膜を一時的に動かすケア。持続的なリフトの根拠は乏しく見え方レベル",
  "evidence": {
   "lv": "C",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "皮膚を強く引っぱらない。骨格やたるみが恒久的に変わるものではない。"
 },
 {
  "id": "kg_ch_16",
  "name": "あご引き（チンタック）",
  "targetProblems": [
   "doubleChin",
   "posture"
  ],
  "category": "facetrain",
  "slot": "夜",
  "region": "center",
  "intensity": 2,
  "duration": "5秒キープ×10回",
  "illust": "ex-tch.png",
  "muscle": "頸部深層屈筋群（深層頸屈筋）",
  "isTraining": true,
  "purpose": "前に出やすい頭の位置を整え、あご下〜首前がすっきり見える印象づくり（姿勢のクセへのアプローチ）",
  "how": [
   "背すじを伸ばし、あごを軽く引いて頭を後ろへ平行移動させる（二重あごを作るイメージ）。5秒キープして戻す。"
  ],
  "why": "深層頸屈筋を働かせ前方頭位（ストレートネック傾向）の姿勢にアプローチ。機序は妥当だが臨床研究は限定的",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "首・肩・腕に痛みやしびれがある場合は中止。反動をつけずゆっくり。頸椎に持病がある人は無理をしない"
 },
 {
  "id": "kg_ch_17",
  "name": "広頸筋エクササイズ（上向き「イー／ウー」）",
  "targetProblems": [
   "doubleChin",
   "expression",
   "posture"
  ],
  "category": "facetrain",
  "slot": "夜",
  "region": "center",
  "intensity": 2,
  "duration": "10回×左右",
  "illust": "ex-iu.png",
  "muscle": "広頸筋（platysma）",
  "isTraining": true,
  "purpose": "首の前面をゆるめて動かし、首の縦ジワ・フェイスラインが引き締まって見える印象をサポート",
  "how": [
   "鎖骨の上に手を置いて軽く固定し、斜め上を向いて首の前面を伸ばした状態で「イー」または「ウー」の口をつくる。左右行う。"
  ],
  "why": "表情筋トレの一種。JAMA Dermatol 2018で顔の運動が外観評価を改善。ただし広頸筋単独の効果研究は限定的",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "上を向くと手のしびれが出る人・頸椎症の人は角度を浅く。首を反らしすぎない"
 },
 {
  "id": "kg_ch_18",
  "name": "首の等尺トレ（後頭部で押し合い）",
  "targetProblems": [
   "posture"
  ],
  "category": "facetrain",
  "slot": "夜",
  "region": "center",
  "intensity": 2,
  "duration": "5秒×3回",
  "illust": "ex-p1.png",
  "muscle": "頸部後面筋群（頸板状筋など）",
  "isTraining": true,
  "purpose": "頭を支える首の筋肉に働きかけ、姿勢が整った印象へ（前方頭位のクセへのアプローチ）",
  "how": [
   "後頭部で両手を組み、頭は後ろへ・手は前へと軽い力で押し合って数秒キープする。反動はつけない。"
  ],
  "why": "頸部姿勢筋への等尺性刺激。機序は妥当だが美容面の研究は限定的",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "強く押し合わず軽い抵抗で。首に痛みが出たら中止。反動禁止"
 },
 {
  "id": "kg_ch_19",
  "name": "胸鎖乳突筋ほぐし（やさしく）",
  "targetProblems": [
   "mukumi",
   "posture"
  ],
  "category": "lymph",
  "slot": "夜",
  "region": "center",
  "intensity": 1,
  "duration": "10〜20回×左右",
  "illust": "ex-scm.png",
  "muscle": "胸鎖乳突筋",
  "isTraining": false,
  "purpose": "首すじのこわばり感の緩和と、むくみの一時的な軽さ・首元すっきりの印象",
  "how": [
   "横を向くと浮き出る首すじの筋肉（胸鎖乳突筋）を、耳の下から鎖骨に向けて上から下へ優しくつまんでほぐす。左右。"
  ],
  "why": "筋のこわばり緩和や巡りへの一時的な体感が中心（経験則ベース）",
  "evidence": {
   "lv": "C",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "🔴頸動脈・迷走神経が近いため強く押さない・グリグリしない。優しくつまむ程度で、左右の首すじを同時に強く押さえない"
 },
 {
  "id": "kg_ch_20",
  "name": "首〜鎖骨リンパ流し",
  "targetProblems": [
   "mukumi"
  ],
  "category": "lymph",
  "slot": "朝",
  "region": "center",
  "intensity": 1,
  "duration": "10回×左右",
  "illust": "ex-decolte.png",
  "muscle": "",
  "isTraining": false,
  "purpose": "首から鎖骨への巡りを促し、むくみの一時的な軽減・首元すっきりの印象",
  "how": [
   "首を軽く傾け、耳の下から鎖骨に向けて手のひらで優しくなで下ろす。仕上げに鎖骨のくぼみを軽くほぐす。左右。"
  ],
  "why": "リンパ・静脈還流を促してむくみは一時的に軽減（効果は一時的）",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "リンパは強い圧をかけず、なでる程度で優しく行う"
 },
 {
  "id": "kg_ch_21",
  "name": "首の横倒しストレッチ（肩下げ）",
  "targetProblems": [
   "posture"
  ],
  "category": "posture",
  "slot": "夜",
  "region": "center",
  "intensity": 1,
  "duration": "10秒×左右",
  "illust": "ex-p1.png",
  "muscle": "胸鎖乳突筋・僧帽筋上部（首側面）",
  "isTraining": false,
  "purpose": "首側面をゆるめてこり感を和らげ、首を長く見せる印象づくり",
  "how": [
   "首を横に倒し、倒した側と反対の肩をぐっと下げて首すじを伸ばす。5〜10秒キープして左右行う。"
  ],
  "why": "頸部側屈の柔軟性向上とこり感の緩和（経験則）",
  "evidence": {
   "lv": "C",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "痛みのない範囲でゆっくり。反動をつけない"
 },
 {
  "id": "kg_ch_22",
  "name": "側頭筋リリース（耳上を引き上げ）",
  "targetProblems": [
   "doubleChin",
   "expression",
   "masseter"
  ],
  "category": "masseter",
  "slot": "夜",
  "region": "center",
  "intensity": 1,
  "duration": "左右各20秒",
  "illust": "ex-temporal.png",
  "muscle": "側頭筋",
  "isTraining": false,
  "purpose": "側頭部のこわばりをゆるめ、フェイスラインが引き上がった印象に整える（一時的な見え方）",
  "how": [
   "耳の上に手のひらの付け根を当て、頭皮ごと上・後ろへ引き上げるように小さく円を描く。左右各20秒。"
  ],
  "why": "側頭筋（咀嚼筋）をゆるめる筋膜リリース。効果は一時的な見え方で経験則ベース、骨格は変わらない。",
  "evidence": {
   "lv": "C",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "こぶしで強くグリグリこすらない（頭皮・髪を傷める）。痛気持ちいい範囲で行う。"
 },
 {
  "id": "kg_ch_23",
  "name": "帽状腱膜ほぐし（頭皮全体を動かす）",
  "targetProblems": [
   "expression"
  ],
  "category": "lymph",
  "slot": "夜",
  "region": "center",
  "intensity": 1,
  "duration": "20回",
  "illust": "ex-scalp.png",
  "muscle": "帽状腱膜（前頭筋・後頭筋）",
  "isTraining": false,
  "purpose": "頭皮の動きを出し、顔まわりのハリ・引き上がった印象をサポート（一時的）",
  "how": [
   "両手の指の腹を頭全体に置き、頭皮を前後左右に大きく動かす。頭頂へ軽く寄せるように剥がす。爪は立てない。"
  ],
  "why": "頭皮の可動性を出す筋膜リリース。見え方レベルの経験則で、骨格や皮膚そのものは変わらない。",
  "evidence": {
   "lv": "C",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "爪を立てず指の腹で行う。前頭筋は\"ゆるめる\"のが目的。眉を上げて前頭筋を鍛える動きは額のシワを悪化させるため行わない。"
 },
 {
  "id": "kg_ch_24",
  "name": "後頭部・首の付け根ほぐし",
  "targetProblems": [
   "general"
  ],
  "category": "posture",
  "slot": "夜",
  "region": "center",
  "intensity": 1,
  "duration": "10カウント",
  "illust": "ex-scm.png",
  "muscle": "後頭下筋群・後頭筋",
  "isTraining": false,
  "purpose": "頭と首の境目の緊張をゆるめ、こりによる重い・下がった印象をやわらげる",
  "how": [
   "首の後ろの付け根から後頭部に指を当て、頭の重みを預けるように全体をゆるめる。"
  ],
  "why": "後頭下筋群のこりをゆるめる。こり緩和は妥当だが、顔の見え方への効果は経験則レベル。",
  "evidence": {
   "lv": "C",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "強く押し込みすぎない。首に痛み・しびれがある場合は行わない。"
 },
 {
  "id": "kg_ch_25",
  "name": "頭皮タッピング（血流促進）",
  "targetProblems": [
   "masseter",
   "mukumi"
  ],
  "category": "masseter",
  "slot": "朝",
  "region": "center",
  "intensity": 1,
  "duration": "約20カウント",
  "illust": "ex-scalp.png",
  "muscle": "頭皮全体（帽状腱膜）",
  "isTraining": false,
  "purpose": "頭皮の血流を促し、血色・透明感のある印象に整える（一時的）",
  "how": [
   "指の腹で頭全体（前頭部・頭頂部・側頭部・後頭部）をトントンと軽くタッピングする。"
  ],
  "why": "機械的刺激で局所の血流が一時的に増える（限定研究）。顔の印象変化は一時的で、若返り効果ではない。",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "爪を立てない。強く叩きすぎない。"
 },
 {
  "id": "kg_ch_26",
  "name": "耳まわりほぐし・耳回し",
  "targetProblems": [
   "mukumi"
  ],
  "category": "lymph",
  "slot": "朝",
  "region": "center",
  "intensity": 1,
  "duration": "20カウント",
  "illust": "ex-ear.png",
  "muscle": "",
  "isTraining": false,
  "purpose": "耳まわりの血流・リンパを促し、むくみによる重い印象を一時的にやわらげる",
  "how": [
   "耳を軽くつまんで上・横・下に引っ張り、そのまま後ろ方向へゆっくり回す。"
  ],
  "why": "耳周囲の血流・リンパを一時的に促進（限定的エビデンス）。むくみ軽減は一時的。",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "強く引っ張りすぎない。痛みが出たら中止する。"
 },
 {
  "id": "kg_ch_27",
  "name": "額を押さえて目を開く（眼輪筋トレ）",
  "targetProblems": [
   "expression"
  ],
  "category": "facetrain",
  "slot": "夜",
  "region": "center",
  "intensity": 2,
  "duration": "目線上下10往復／開閉10回",
  "illust": "ex-fhlymph.png",
  "muscle": "眼輪筋（前頭筋は抑制）",
  "isTraining": true,
  "purpose": "額に頼らずまぶたを動かす感覚を養い、おでこに横ジワを寄せにくい表情のクセづけ（予防・見え方レベル）",
  "how": [
   "おでこに手を当てて動かないよう固定し、額の力を使わずに目線を上下に動かす、またはまぶたをゆっくり開け閉めする。左右各10回。"
  ],
  "why": "前頭筋の過活動が額の横ジワの一因→額を使わず目を開く再教育。表情筋運動の限定研究(JAMA Dermatol 2018)あり",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "額に力を入れない／眼球は絶対に押さない／目周りの皮膚を擦る・引っぱるのはNG（色素沈着・くま悪化）"
 },
 {
  "id": "kg_ch_28",
  "name": "目ぱっちりキープ（開眼保持）",
  "targetProblems": [
   "expression"
  ],
  "category": "facetrain",
  "slot": "夜",
  "region": "center",
  "intensity": 2,
  "duration": "20カウント×2〜3",
  "illust": "ex-e1.png",
  "muscle": "眼輪筋・上眼瞼挙筋",
  "isTraining": true,
  "purpose": "目を見開いた表情を保ち、目もとがぱっちり見える印象づくり（見え方レベル）",
  "how": [
   "おでこを手で軽く押さえて固定し、額にシワを寄せずに目を大きく開いてキープする。"
  ],
  "why": "開瞼保持で眼輪筋・上眼瞼挙筋を等尺性に使う。表情筋トレの限定的エビデンス",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "おでこにシワを寄せて吊り上げない・眉を強く上げ続けない（額の横ジワの原因になる）"
 },
 {
  "id": "kg_ch_29",
  "name": "前頭筋リリース（おでこほぐし）",
  "targetProblems": [
   "expression"
  ],
  "category": "lymph",
  "slot": "夜",
  "region": "center",
  "intensity": 1,
  "duration": "20カウント",
  "illust": "ex-fhlymph.png",
  "muscle": "前頭筋・帽状腱膜",
  "isTraining": false,
  "purpose": "こわばった額をゆるめ、ハリ・引き上がった印象と表情のこわばり緩和（一時的）",
  "how": [
   "指の腹や猫の手で、眉の上から生え際へ前頭筋を上方向にゆるめる。皮膚をこすらず骨から筋肉を動かすイメージで。"
  ],
  "why": "筋膜・皮膚の一時的な柔軟性向上。持続効果は乏しく主に見え方",
  "evidence": {
   "lv": "C",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "強いグリグリ圧迫はNG／乾燥時はクリームで滑りを確保して皮膚を擦らない"
 },
 {
  "id": "kg_ch_30",
  "name": "生え際・帽状腱膜リリース",
  "targetProblems": [
   "expression"
  ],
  "category": "lymph",
  "slot": "夜",
  "region": "center",
  "intensity": 1,
  "duration": "20カウント",
  "illust": "ex-scalp.png",
  "muscle": "帽状腱膜・前頭筋腱膜",
  "isTraining": false,
  "purpose": "額〜頭皮のつっぱり感をゆるめ、額の引き上がった印象（一時的）",
  "how": [
   "両手で生え際〜頭皮をつかみ、頭頂方向へ引き上げながらゆっくり動かす。深呼吸を合わせる。"
  ],
  "why": "帽状腱膜〜前頭筋のつっぱり緩和。効果は一時的・経験則ベース",
  "evidence": {
   "lv": "C",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "髪や頭皮を強く引っぱりすぎない"
 },
 {
  "id": "kg_ch_31",
  "name": "おでこ流し（むくみ・血流）",
  "targetProblems": [
   "mukumi"
  ],
  "category": "lymph",
  "slot": "朝",
  "region": "center",
  "intensity": 1,
  "duration": "10回",
  "illust": "ex-fhlymph.png",
  "muscle": "前頭筋",
  "isTraining": false,
  "purpose": "朝の額のむくみ・血色感を一時的に整える（見え方レベル）",
  "how": [
   "眉の上から生え際、または額の中央からこめかみへ、手のひらや指で上・外側へ流す。"
  ],
  "why": "用手的な流しでむくみを一時的に軽減する報告あり（持続はしない）",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "強い圧でこすらない（摩擦・色素沈着に注意）"
 },
 {
  "id": "kg_ch_32",
  "name": "口角引き上げキープ",
  "targetProblems": [
   "asymmetry",
   "expression"
  ],
  "category": "facetrain",
  "slot": "夜",
  "region": "center",
  "intensity": 2,
  "duration": "約20秒キープ×3〜5回",
  "illust": "ex-corner.png",
  "muscle": "口角挙筋・大頬骨筋",
  "isTraining": true,
  "purpose": "口角が引き上がった印象・口元のハリを出しやすくする（見え方レベル）",
  "how": [
   "口角を斜め上へキュッと引き上げ、約20秒キープしてゆるめる。上げにくい側は指で軽く補助し、左右差があれば下がっている側を多めに行う。"
  ],
  "why": "口角挙筋群を反復収縮。表情筋トレは限定的研究（JAMA Dermatol 2018）で頬のハリ改善報告あり",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "頬骨まで強く持ち上げると逆にほうれい線が出やすいので口角中心に。力み過ぎない。"
 },
 {
  "id": "kg_ch_33",
  "name": "口すぼめキープ（口輪筋トレ）",
  "targetProblems": [
   "expression"
  ],
  "category": "facetrain",
  "slot": "夜",
  "region": "center",
  "intensity": 2,
  "duration": "10〜20秒キープ×5回",
  "illust": "ex-iu.png",
  "muscle": "口輪筋",
  "isTraining": true,
  "purpose": "口元が締まった印象・ほうれい線が目立ちにくい見え方をサポート",
  "how": [
   "唇を前に尖らせて「ウー」の形を作り10〜20秒キープしてゆるめる。慣れたら尖らせたまま上下・左右にゆっくり動かす。"
  ],
  "why": "口輪筋を等尺性収縮。表情筋トレの限定研究に基づく機序",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "顎や首に力を入れない。歯を食いしばらない。"
 },
 {
  "id": "kg_ch_34",
  "name": "あいうえお発音体操",
  "targetProblems": [
   "expression"
  ],
  "category": "facetrain",
  "slot": "朝",
  "region": "center",
  "intensity": 2,
  "duration": "10回",
  "illust": "ex-iu.png",
  "muscle": "口輪筋・表情筋群",
  "isTraining": true,
  "purpose": "口周りの表情筋を大きく動かし、こわばりを減らしてハリのある印象に",
  "how": [
   "口を大きく開けて「あ・い・う・え・お」を一音ずつ大げさにゆっくり形づくる。10回ほど繰り返す。"
  ],
  "why": "複数の表情筋を最大可動域で動かす。表情筋トレの限定研究に準拠",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "顎関節に痛みが出る場合は口の開きを小さくする。"
 },
 {
  "id": "kg_ch_35",
  "name": "舌回し（ベロ回し）",
  "targetProblems": [
   "expression"
  ],
  "category": "facetrain",
  "slot": "朝",
  "region": "center",
  "intensity": 2,
  "duration": "各方向10〜20回",
  "illust": "ex-roll.png",
  "muscle": "口輪筋・頬筋（内側から）",
  "isTraining": true,
  "purpose": "口周りの筋肉を内側から動かし、ハリ・口元の印象づくり（唾液分泌も促す）",
  "how": [
   "口を閉じ、舌先で歯茎の外周をなぞるように大きく回す。時計回り・反時計回りを各10〜20回。"
  ],
  "why": "口輪筋・頬筋を内側から反復刺激。機序は妥当だがシワへの効果研究は限定的",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "顎関節に痛み・違和感が出たら回数を減らすか中止。"
 },
 {
  "id": "kg_ch_36",
  "name": "モディオラス（口角結節）ゆるめ",
  "targetProblems": [
   "expression"
  ],
  "category": "lymph",
  "slot": "夜",
  "region": "center",
  "intensity": 1,
  "duration": "左右各約20秒",
  "illust": "ex-corner.png",
  "muscle": "モディオラス・口角下制筋",
  "isTraining": false,
  "purpose": "口角まわりのこわばりをゆるめ、口角が上がりやすい状態に整える（一時的・見え方レベル）",
  "how": [
   "口角のやや外側にある少し硬い部分を、指の腹で優しく小さな円を描くようにほぐす（約20秒）。口角を下へ引く筋は鍛えず、ゆるめるだけにとどめる。"
  ],
  "why": "筋緊張をゆるめる整体・筋膜系。効果は一時的で経験則寄り",
  "evidence": {
   "lv": "C",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "強く擦る・グリグリ強圧しない（刺激・色素沈着の恐れ）。口角下制筋は鍛えない（口角が下がる方向のため）。"
 },
 {
  "id": "kg_ch_37",
  "name": "口元→耳のリンパ流し",
  "targetProblems": [
   "expression",
   "mukumi"
  ],
  "category": "lymph",
  "slot": "朝",
  "region": "center",
  "intensity": 1,
  "duration": "約10回",
  "illust": "ex-ear.png",
  "muscle": "",
  "isTraining": false,
  "purpose": "一時的なむくみを流し、口元まわりのすっきりした見え方をサポート",
  "how": [
   "口横に指の腹を当て、頬から耳の前へ向かって優しく流す。約10回繰り返す。"
  ],
  "why": "リンパドレナージュは一時的なむくみ軽減の限定的報告。持続的な小顔化ではない",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "強い圧でこすらない。肌を引っぱらない。"
 },
 {
  "id": "kg_ch_38",
  "name": "舌の吸盤トレ（舌を上顎に押し付けキープ）",
  "targetProblems": [
   "doubleChin",
   "expression"
  ],
  "category": "facetrain",
  "slot": "夜",
  "region": "center",
  "intensity": 2,
  "duration": "5〜10秒キープ×3〜5回",
  "illust": "ex-palate.png",
  "muscle": "舌骨上筋群（顎舌骨筋・オトガイ舌骨筋・顎二腹筋前腹）",
  "isTraining": true,
  "purpose": "あご下の筋肉を働かせ、低位舌を整えて引き締まった印象・ハリを目指す",
  "how": [
   "舌全体を上顎（前歯の少し後ろのスポット）にベタッと吸い付け、上へ押し上げた状態を5〜10秒キープする。口は軽く閉じたまま。"
  ],
  "why": "舌骨上筋群の等尺性収縮・低位舌改善は解剖学的に妥当",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "舌先を無理に強く押し付けない。顎や首に余計な力を入れすぎない"
 },
 {
  "id": "kg_ch_39",
  "name": "天井を向いて大きく開口キープ",
  "targetProblems": [
   "doubleChin",
   "expression"
  ],
  "category": "facetrain",
  "slot": "夜",
  "region": "center",
  "intensity": 2,
  "duration": "10秒キープ×3回",
  "illust": "ex-ceiling.png",
  "muscle": "舌骨上筋群・顎二腹筋",
  "isTraining": true,
  "purpose": "あご下〜首前の筋肉を使い、フェイスラインの見え方・ハリを目指す",
  "how": [
   "背すじを伸ばして天井を見上げ、「あー」と口を大きく開けたまま10秒キープする。あご下が伸びて張るのを感じる。"
  ],
  "why": "開口筋・舌骨上筋群の賦活は機序妥当（顔面運動の限定研究）",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "首を反らせすぎない。頸椎症・めまいがある人は控えめにゆっくり行う"
 },
 {
  "id": "kg_ch_40",
  "name": "あいうえお大口体操",
  "targetProblems": [
   "doubleChin",
   "expression",
   "posture"
  ],
  "category": "facetrain",
  "slot": "夜",
  "region": "center",
  "intensity": 2,
  "duration": "5〜10回",
  "illust": "ex-iu.png",
  "muscle": "広頸筋・口周りの表情筋",
  "isTraining": true,
  "purpose": "あご下〜首前の広頸筋を動かし、ハリのある印象へ",
  "how": [
   "口を最大限に大きく動かして「あ・い・う・え・お」とはっきり発音する。首に筋（広頸筋）が浮き出る程度を目安に。"
  ],
  "why": "表情筋・広頸筋の反復収縮（顔面筋運動の限定的エビデンス）",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "顎関節に痛みが出るほど大きく開けない。顎関節症の人は控えめに"
 },
 {
  "id": "kg_ch_41",
  "name": "チンタック（顎引き・頸部深層筋）",
  "targetProblems": [
   "doubleChin",
   "posture"
  ],
  "category": "facetrain",
  "slot": "夜",
  "region": "center",
  "intensity": 2,
  "duration": "5秒キープ×5回",
  "illust": "ex-tch.png",
  "muscle": "頸部深層屈筋（頸長筋など）",
  "isTraining": true,
  "purpose": "頭が前に出た姿勢（頭部前方位）を整え、あご下・フェイスラインの見え方を改善",
  "how": [
   "背すじを伸ばし、顎をまっすぐ後ろに引いて軽く二重あごを作るようにキープする（頭を後ろへスライドさせる）。"
  ],
  "why": "頸部深層屈筋の賦活による頭部前方位の是正は理学療法の知見",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "息を止めない。首に痛みが出る場合は可動域を小さくゆっくり行う"
 },
 {
  "id": "kg_ch_42",
  "name": "顎下→鎖骨リンパ流し",
  "targetProblems": [
   "doubleChin",
   "mukumi",
   "posture"
  ],
  "category": "lymph",
  "slot": "朝",
  "region": "center",
  "intensity": 1,
  "duration": "左右各10回",
  "illust": "ex-decolte.png",
  "muscle": "広頸筋／顎下リンパ",
  "isTraining": false,
  "purpose": "顎下のむくみを一時的に流し、フェイスラインをすっきり見せる",
  "how": [
   "顎の下に指の腹を当て、顎先から耳の下、そこから鎖骨へ向かって軽い力でスーッと流す。左右交互に。"
  ],
  "why": "リンパ・静脈還流の促進によるむくみの一時的軽減",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "強く圧迫しない。顎下腺や首の動脈を強く押さない。皮膚を擦りすぎない（摩擦・色素沈着に注意）"
 },
 {
  "id": "kg_ch_43",
  "name": "顎下（舌骨まわり）のやさしいほぐし",
  "targetProblems": [
   "doubleChin"
  ],
  "category": "lymph",
  "slot": "夜",
  "region": "center",
  "intensity": 1,
  "duration": "20秒ほど",
  "illust": "ex-palate.png",
  "muscle": "舌骨筋群",
  "isTraining": false,
  "purpose": "顎下のこわばりを一時的にゆるめ、見え方を整える",
  "how": [
   "顎の下の柔らかい部分を指の腹で軽くつまむ・押さえる程度にとどめ、舌を上顎につけたまま優しくほぐす。"
  ],
  "why": "筋・筋膜の一時的な弛緩（見え方レベル。恒久的変化の根拠は弱い）",
  "evidence": {
   "lv": "C",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "グリグリ強く圧迫するマッサージはしない。痛気持ちいい程度で優しく"
 },
 {
  "id": "kg_ch_44",
  "name": "こめかみ引き上げ＋目の開閉",
  "targetProblems": [
   "expression",
   "masseter"
  ],
  "category": "facetrain",
  "slot": "夜",
  "region": "center",
  "intensity": 2,
  "duration": "10〜20回",
  "illust": "ex-temporal.png",
  "muscle": "眼輪筋（＋側頭筋）",
  "isTraining": true,
  "purpose": "目もとが引き上がった印象・目元のハリの印象",
  "how": [
   "こめかみに手のひらを当てて斜め上へ引き上げ、その状態で目を大きく開ける・閉じる（または細める）を繰り返す。"
  ],
  "why": "眼輪筋の反復収縮による表情筋トレ。JAMA Dermatol 2018で表情筋運動の見た目改善の示唆あり",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "しっかりこめかみを上げながら行う。目の周りの皮膚は強くこすらない"
 },
 {
  "id": "kg_ch_45",
  "name": "こめかみ引き上げ＋口の動き（あ・ウ）",
  "targetProblems": [
   "doubleChin",
   "expression",
   "masseter"
  ],
  "category": "facetrain",
  "slot": "夜",
  "region": "center",
  "intensity": 2,
  "duration": "10〜20回",
  "illust": "ex-temporal.png",
  "muscle": "口輪筋（＋側頭筋）",
  "isTraining": true,
  "purpose": "口もと・フェイスラインが引き上がった印象",
  "how": [
   "側頭部に手のひらの付け根を当て斜め後ろへ引き上げたまま、「あ」と大きく口を開ける、または口を尖らせて左右に動かすを繰り返す。"
  ],
  "why": "口輪筋など口周り表情筋の反復収縮。表情筋トレの機序として妥当",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "こめかみは強くこすらず軽く引き上げる。額にシワを寄せない。目の周りの皮膚は擦らない"
 },
 {
  "id": "kg_ch_46",
  "name": "側頭筋リリース（円ほぐし）",
  "targetProblems": [
   "doubleChin",
   "masseter"
  ],
  "category": "masseter",
  "slot": "夜",
  "region": "center",
  "intensity": 1,
  "duration": "20〜30秒",
  "illust": "ex-temporal.png",
  "muscle": "側頭筋",
  "isTraining": false,
  "purpose": "食いしばりで硬くなった側頭筋のこわばりをゆるめ、フェイスラインの見え方をすっきりさせる",
  "how": [
   "こめかみ〜側頭部に手のひら（または猫の手）を当て、円を描くようにほぐす。奥歯を軽く噛んで盛り上がる部分を重点的に。"
  ],
  "why": "咀嚼筋（側頭筋）の緊張緩和は機序として妥当。ただし小顔効果の持続的な根拠は乏しい",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "痛気持ちいい程度の力で。強いグリグリ圧迫はしない"
 },
 {
  "id": "kg_ch_47",
  "name": "こめかみ後方引き上げ（キープ）",
  "targetProblems": [
   "doubleChin",
   "expression",
   "masseter"
  ],
  "category": "lymph",
  "slot": "夜",
  "region": "center",
  "intensity": 1,
  "duration": "15〜20回",
  "illust": "ex-temporal.png",
  "muscle": "側頭筋膜",
  "isTraining": false,
  "purpose": "目尻・フェイスラインが一時的に引き上がった見え方",
  "how": [
   "こめかみ全体を手のひらで包み、斜め後ろ（後頭部方向）・上方向へぐっと引き上げてキープする。目尻やフェイスラインが一緒に上がるのを確認。"
  ],
  "why": "手で皮膚・筋膜を引き上げる一時的な見え方。骨格が変わるわけではなく持続効果の根拠は乏しい",
  "evidence": {
   "lv": "C",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "皮膚を強くこすらない"
 },
 {
  "id": "kg_ch_48",
  "name": "こめかみ→耳への水分流し",
  "targetProblems": [
   "expression",
   "mukumi"
  ],
  "category": "lymph",
  "slot": "朝",
  "region": "center",
  "intensity": 1,
  "duration": "20回",
  "illust": "ex-temporal.png",
  "muscle": "",
  "isTraining": false,
  "purpose": "目もとに溜まった水分・むくみの一時的な軽減、朝のすっきり感",
  "how": [
   "目尻の少し上のこめかみを圧迫し、目元の水分を横（耳の方向）へ誘導するように後ろ回しでほぐす。"
  ],
  "why": "圧迫による水分の一時的な移動。むくみ軽減は一時的で持続はしない",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "目の周りの皮膚を強くこすらない（色素沈着・くま悪化に注意）"
 },
 {
  "id": "kg_ch_49",
  "name": "小鼻の引き締めトレーニング",
  "targetProblems": [
   "expression"
  ],
  "category": "facetrain",
  "slot": "夜",
  "region": "center",
  "intensity": 2,
  "duration": "10回",
  "illust": "ex-nose.png",
  "muscle": "鼻筋（鼻翼を閉じる筋）",
  "isTraining": true,
  "purpose": "鼻まわりの筋肉を意識して動かし、引き締まった印象をめざす（変化は一時的・見え方レベル）",
  "how": [
   "小鼻を左右から指で軽く押さえ、鼻から息を吸いながら小鼻の上を内側に引き締める→力を抜くを繰り返す。"
  ],
  "why": "表情筋を反復収縮させる運動。顔面筋トレの張り改善報告(JAMA Dermatol 2018)はあるが鼻単独の実証は乏しい",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "強く押さえ過ぎない。鼻炎などで鼻呼吸がつらい時は無理をしない"
 },
 {
  "id": "kg_ch_50",
  "name": "ウの口で小鼻ぱたぱた",
  "targetProblems": [
   "expression"
  ],
  "category": "facetrain",
  "slot": "夜",
  "region": "center",
  "intensity": 2,
  "duration": "10〜20回",
  "illust": "ex-nose.png",
  "muscle": "鼻翼を動かす筋（鼻筋・上唇鼻翼挙筋）",
  "isTraining": true,
  "purpose": "普段動かしにくい小鼻まわりの筋肉を動かし、いきいきした表情の印象づくり",
  "how": [
   "「ウ」の形に口をすぼめたまま、小鼻を開く→閉じるをリズミカルに繰り返す。"
  ],
  "why": "鼻翼の随意運動。表情筋を動かす機序は妥当だが鼻の形状を変える根拠はない",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "力み過ぎず軽い動作で。毎日行ってよい"
 },
 {
  "id": "kg_ch_51",
  "name": "小鼻横〜鼻筋の引き上げほぐし",
  "targetProblems": [
   "expression",
   "mukumi"
  ],
  "category": "lymph",
  "slot": "夜",
  "region": "center",
  "intensity": 1,
  "duration": "左右10回程度",
  "illust": "ex-nose.png",
  "muscle": "上唇鼻翼挙筋周辺",
  "isTraining": false,
  "purpose": "鼻まわりの血流をうながし、すっきりした見え方を一時的にサポート",
  "how": [
   "指の腹を小鼻の横に当て、鼻筋の脇に沿って下から上へ縦方向にやさしくほぐす。左右10回程度。"
  ],
  "why": "手技によるほぐしは経験則。持続的な形状変化の根拠はない",
  "evidence": {
   "lv": "C",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "肌を強くこすらない（摩擦は色素沈着の一因）。滑りが悪い時は乳液などを使う"
 },
 {
  "id": "kg_ch_52",
  "name": "鼻の根元（眉間の下）ほぐし",
  "targetProblems": [
   "mukumi"
  ],
  "category": "lymph",
  "slot": "夜",
  "region": "center",
  "intensity": 1,
  "duration": "20回程度",
  "illust": "ex-nose.png",
  "muscle": "鼻根部",
  "isTraining": false,
  "purpose": "鼻筋・眉間まわりの血流ケアと、こわばった印象のリセット",
  "how": [
   "鼻の付け根（目と目の間）を親指と人差し指で軽くつまみ、上下・横に小さく動かしてほぐす。20回程度。"
  ],
  "why": "血流促進は経験則レベル。鼻を高くしたり骨格を変える効果はない",
  "evidence": {
   "lv": "C",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "目の際は擦らない・引っぱらない（色素沈着・くまの悪化予防）。目に近いので必ずやさしく"
 },
 {
  "id": "kg_ch_53",
  "name": "鼻横のむくみ流し",
  "targetProblems": [
   "expression",
   "mukumi"
  ],
  "category": "lymph",
  "slot": "朝",
  "region": "center",
  "intensity": 1,
  "duration": "左右各10回",
  "illust": "ex-nose.png",
  "muscle": "",
  "isTraining": false,
  "purpose": "朝のむくみを一時的に流し、鼻まわりをすっきり見せる（一時的）",
  "how": [
   "指の腹を小鼻の横に当て、頬から耳の方へ軽く流す。左右各10回。"
  ],
  "why": "余分な水分の一時的な移動は機序として妥当。効果は一時的で持続しない",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "爪を立てて強くこすらない（刺激・色素沈着の予防）。指の腹でやさしく"
 },
 {
  "id": "kg_ch_54",
  "name": "鎖骨リンパの出口を開く（静脈角リリース）",
  "targetProblems": [
   "mukumi"
  ],
  "category": "lymph",
  "slot": "朝",
  "region": "center",
  "intensity": 1,
  "duration": "左右各20回",
  "illust": "ex-decolte.png",
  "muscle": "リンパ（静脈角）",
  "isTraining": false,
  "purpose": "リンパの最終出口を開き、顔まわりの水分がめぐりやすい状態づくり（むくみの一時的な軽さ）",
  "how": [
   "鎖骨の上のくぼみに指3本を当て、内側から外へゆっくり押し流す。左右行う。軽くトントンと叩くだけでもよい。他のむくみケアの前の準備として行う。"
  ],
  "why": "鎖骨部は全身リンパが静脈へ戻る最終出口（静脈角）。ここを開くと流れの一時的改善が見込める。",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "首の付け根は血管・神経・リンパが集まる部位。強く押さず優しく。妊娠中・甲状腺やリンパに疾患がある場合は行わない。"
 },
 {
  "id": "kg_ch_55",
  "name": "鎖骨はさみこすり（ピース）",
  "targetProblems": [
   "mukumi"
  ],
  "category": "lymph",
  "slot": "朝",
  "region": "center",
  "intensity": 1,
  "duration": "左右各20回",
  "illust": "ex-decolte.png",
  "muscle": "リンパ（デコルテ）",
  "isTraining": false,
  "purpose": "デコルテ・首のむくみを一時的に流し、首元がすっきり見える印象に",
  "how": [
   "人差し指と中指でピースを作り鎖骨を上下から挟み、内側から外へ横方向に軽くこする。左右行う。"
  ],
  "why": "皮膚表層のリンパ・水分を軽い刺激で外側へ誘導。むくみの一時的軽減レベル。",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "痛いほど強くこすらない。肌の摩擦を避け、優しく短時間で。"
 },
 {
  "id": "kg_ch_56",
  "name": "鎖骨下ほぐし",
  "targetProblems": [
   "mukumi",
   "posture"
  ],
  "category": "posture",
  "slot": "夜",
  "region": "center",
  "intensity": 1,
  "duration": "左右各20回",
  "illust": "ex-decolte.png",
  "muscle": "鎖骨下筋・鎖骨下リンパ",
  "isTraining": false,
  "purpose": "巻き肩で硬くなりがちな胸の前をゆるめ、姿勢由来の詰まり感をやわらげる",
  "how": [
   "鎖骨のすぐ下のくぼみ（鎖骨下）を指の腹で軽く円を描くようにほぐす。巻き肩の人は硬くなりやすい。左右行う。"
  ],
  "why": "巻き肩・猫背で硬くなる鎖骨下をゆるめる。見え方・こり感レベルの経験則。",
  "evidence": {
   "lv": "C",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "強い圧でグリグリ押さない。痛み・しびれが出たら中止。"
 },
 {
  "id": "kg_ch_57",
  "name": "鎖骨くぼみ押さえ 首倒し",
  "targetProblems": [
   "doubleChin",
   "posture"
  ],
  "category": "posture",
  "slot": "夜",
  "region": "center",
  "intensity": 1,
  "duration": "左右各20秒",
  "illust": "ex-decolte.png",
  "muscle": "広頸筋・首まわり（ストレッチ）",
  "isTraining": false,
  "purpose": "首すじを伸ばし、あご下〜首のラインがすっきり見える印象づくり",
  "how": [
   "鎖骨の上のくぼみに指を軽く当てて押さえ、深呼吸しながら首を左右にゆっくり倒す。"
  ],
  "why": "首側面のストレッチと出口刺激の組合せ。首すじの伸び・リラックス。",
  "evidence": {
   "lv": "C",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "首を無理に倒さない。めまい・しびれ・痛みが出たら中止。"
 },
 {
  "id": "kg_ch_58",
  "name": "鎖骨まわし（肩回し＋深呼吸）",
  "targetProblems": [
   "mukumi",
   "posture"
  ],
  "category": "posture",
  "slot": "夜",
  "region": "center",
  "intensity": 1,
  "duration": "左右各10回",
  "illust": "ex-decolte.png",
  "muscle": "肩・胸まわり（血流・リンパ）",
  "isTraining": false,
  "purpose": "首肩の巡りを促し、顔色・すっきり感の印象づくり",
  "how": [
   "鎖骨の下を軽く押さえながら、深呼吸に合わせて肩を大きく後ろへゆっくり回す。左右行う。"
  ],
  "why": "肩の可動と深呼吸で胸郭・鎖骨まわりの巡りを促す経験則。",
  "evidence": {
   "lv": "C",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "肩・首に痛みや既往がある場合は無理に回さない。"
 },
 {
  "id": "kg_ch_59",
  "name": "あご下・舌出しキープ",
  "targetProblems": [
   "doubleChin",
   "expression"
  ],
  "category": "facetrain",
  "slot": "夜",
  "region": "center",
  "intensity": 2,
  "duration": "左右各10秒×2〜3セット",
  "illust": "ex-palate.png",
  "muscle": "舌筋・舌骨上筋群",
  "isTraining": true,
  "purpose": "顎下（二重あご）まわりを使い、フェイスラインがすっきり見える印象へ",
  "how": [
   "口角から舌を斜め下へ長く突き出し、視線も同じ方向へ向けて10秒キープ。左右行う。上（鼻方向）へ伸ばすバージョンを加えてもよい。"
  ],
  "why": "舌骨上筋群を動員。機序は妥当だがヒト実証は限定的",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "首や顎に痛みが出たら中止。反動をつけず無理に伸ばしすぎない。"
 },
 {
  "id": "kg_ch_60",
  "name": "舌上げ＋あご引きキープ",
  "targetProblems": [
   "doubleChin",
   "posture"
  ],
  "category": "facetrain",
  "slot": "夜",
  "region": "center",
  "intensity": 2,
  "duration": "10秒×3回",
  "illust": "ex-palate.png",
  "muscle": "舌骨上筋群・オトガイ舌骨筋",
  "isTraining": true,
  "purpose": "舌を正しい位置に置き、フェイスラインが引き上がった印象・姿勢づくり",
  "how": [
   "舌全体を上あご（前歯の少し後ろ）にベタッとつけ、その状態で軽くあごを引いて10秒キープする。"
  ],
  "why": "正しい舌位置（MFT）は舌骨上筋群を使う。機序B",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "あごを引きすぎて首を強く圧迫しない。呼吸は止めない。"
 },
 {
  "id": "kg_ch_61",
  "name": "あごまっすぐ開閉（顎関節ケア）",
  "targetProblems": [
   "asymmetry",
   "masseter"
  ],
  "category": "facetrain",
  "slot": "夜",
  "region": "center",
  "intensity": 2,
  "duration": "ゆっくり開閉10回",
  "illust": "ex-ceiling.png",
  "muscle": "開口筋群（顎二腹筋ほか）",
  "isTraining": true,
  "purpose": "顎の開け閉めの左右差や食いしばりのこわばりを整え、開けやすくする",
  "how": [
   "両耳の前の顎関節に指を軽く添え、あごが左右にずれないよう鏡を見ながら、まっすぐゆっくり口を開け閉めする。"
  ],
  "why": "顎関節の使い方を整える経験則。咬筋を鍛えるものではない",
  "evidence": {
   "lv": "C",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "顎関節に痛み・強いカクカク音（クリック）がある人・顎関節症の人は行わない。無理な大開口はしない。顎を回す・下顎を突き出す動きは負担になるため避ける。"
 },
 {
  "id": "kg_ch_62",
  "name": "咬筋（エラ）ゆるめ",
  "targetProblems": [
   "masseter"
  ],
  "category": "masseter",
  "slot": "夜",
  "region": "center",
  "intensity": 1,
  "duration": "左右各10〜20秒",
  "illust": "ex-m1.png",
  "muscle": "咬筋",
  "isTraining": false,
  "purpose": "食いしばりによる咬筋のこわばりを一時的にやわらげ、エラまわりがすっきりした印象へ",
  "how": [
   "エラの咬筋（噛むと硬くなる部分）に指を添え、優しく円を描くようにほぐす。歯は食いしばらず口の力を抜いて行う。"
  ],
  "why": "咬筋の過緊張緩和は妥当。骨格・エラの大きさ自体は変わらない",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "強くグリグリ押さない（優しく）。咬筋を“鍛える”とエラが張って見えるため、ほぐす目的にとどめる。痛みが出たら中止。"
 },
 {
  "id": "kg_ch_63",
  "name": "あご下→耳のリンパ流し",
  "targetProblems": [
   "doubleChin",
   "mukumi"
  ],
  "category": "lymph",
  "slot": "朝",
  "region": "center",
  "intensity": 1,
  "duration": "左右各10〜20回",
  "illust": "ex-ear.png",
  "muscle": "（顎下リンパ）",
  "isTraining": false,
  "purpose": "顎下・フェイスラインのむくみを一時的に軽減し、すっきりした印象へ",
  "how": [
   "人差し指を軽く曲げ、あご先から耳の下へフェイスラインに沿って、肌をこすらず軽く流す。両側同時に行う。"
  ],
  "why": "リンパ・むくみ流しは効果が一時的",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "肌を強くこすらない（摩擦は色素沈着・肌負担の原因）。力は軽く。"
 },
 {
  "id": "kg_ch_64",
  "name": "あご先・梅干しジワ対策（オトガイ筋リラックス）",
  "targetProblems": [
   "expression"
  ],
  "category": "facetrain",
  "slot": "夜",
  "region": "center",
  "intensity": 2,
  "duration": "5〜10回",
  "illust": "ex-relax.png",
  "muscle": "口角挙筋（頬）／オトガイ筋",
  "isTraining": true,
  "purpose": "あご先に余計な力を入れず、梅干しジワが出にくい表情の癖づけ",
  "how": [
   "笑うときあご先に力が入り梅干しジワが出る人向け。頬（口角）の筋肉を軽くつまみ、その頬の筋肉だけを使って口角を上げて笑う練習をする。"
  ],
  "why": "表情の癖づけ。経験則ベース",
  "evidence": {
   "lv": "C",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "あご先に力を入れない。強くつままない。"
 },
 {
  "id": "kg_ch_65",
  "name": "側頭部引き上げ＋口角・頬アップ",
  "targetProblems": [
   "expression",
   "masseter"
  ],
  "category": "facetrain",
  "slot": "夜",
  "region": "center",
  "intensity": 2,
  "duration": "10回×左右",
  "illust": "ex-corner.png",
  "muscle": "大頬骨筋・側頭筋",
  "isTraining": true,
  "purpose": "頬・口角まわりの表情筋を使い、引き上がった印象・ハリのある見え方をめざす（一時的な見え方レベル）",
  "how": [
   "手のひらの付け根で耳の上（側頭部）を上方向へ支えるように引き上げ、その状態で口角と頬をゆっくり引き上げてキープする。左右各10回ほど。"
  ],
  "why": "顔面エクササイズの無作為化研究で筋活動・見た目の変化が報告（JAMA Dermatol 2018）。効果は緩やかで継続が前提",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "目の下は皮膚が薄いので強くこすらない・引っぱらない（色素沈着・くま悪化）。頬を上げる際に目を細めすぎない（目尻のシワ）"
 },
 {
  "id": "kg_ch_66",
  "name": "側頭部引き上げ＋大きく開口（あ〜）",
  "targetProblems": [
   "doubleChin",
   "expression",
   "masseter"
  ],
  "category": "facetrain",
  "slot": "夜",
  "region": "center",
  "intensity": 2,
  "duration": "20回",
  "illust": "ex-temporal.png",
  "muscle": "側頭筋・口周り",
  "isTraining": true,
  "purpose": "側頭部と口周りを動かしてこわばりをほぐし、フェイスラインが引き締まった印象をめざす",
  "how": [
   "耳の上の側頭部を軽く引き上げながら、口を「あ」「グ」とリズミカルに大きく開閉する。20回ほど。"
  ],
  "why": "口周りを大きく動かす体操。筋を動かす機序はあるが、リフト効果の直接エビデンスは限定的",
  "evidence": {
   "lv": "C",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "顎関節に痛み・カクつきがある人は控えめに（顎関節症の悪化防止）。無理に大きく開けない"
 },
 {
  "id": "kg_ch_67",
  "name": "側頭筋リリース（引き上げ）",
  "targetProblems": [
   "doubleChin",
   "expression",
   "masseter"
  ],
  "category": "masseter",
  "slot": "夜",
  "region": "center",
  "intensity": 1,
  "duration": "20カウント",
  "illust": "ex-temporal.png",
  "muscle": "側頭筋",
  "isTraining": false,
  "purpose": "側頭部の筋・筋膜のこわばりを一時的にゆるめ、フェイスラインが引き上がった印象を出す",
  "how": [
   "耳の上に手のひらの付け根または握り拳を当て、円を描くように軽くほぐしながら頭頂方向へ引き上げる。20カウント。"
  ],
  "why": "緊張した側頭筋・筋膜を一時的に弛緩させる経験則。持続的なリフトや骨格変化の根拠は乏しい",
  "evidence": {
   "lv": "C",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "硬い人は軽い圧から。強いグリグリ圧迫は避ける（痛み・炎症・色素沈着の恐れ）。頭痛時は中止"
 },
 {
  "id": "kg_ch_68",
  "name": "側頭筋の圧迫回し（後ろ回し）",
  "targetProblems": [
   "doubleChin",
   "expression",
   "masseter"
  ],
  "category": "masseter",
  "slot": "夜",
  "region": "center",
  "intensity": 1,
  "duration": "15〜20回",
  "illust": "ex-temporal.png",
  "muscle": "側頭筋",
  "isTraining": false,
  "purpose": "側頭部をゆるめ、フェイスラインまわりの一時的な引き上げ感・見え方を出す",
  "how": [
   "耳の上を手のひら全体でグッと圧迫し、皮膚ごと後ろ方向へゆっくり回す。15〜20回。"
  ],
  "why": "筋膜リリース系の経験則。見え方・こわばり緩和が中心で、構造的な変化ではない",
  "evidence": {
   "lv": "C",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "必ず後ろ回し（下方向へ皮膚を引き下げない）。強圧・長時間は避ける"
 },
 {
  "id": "kg_ch_69",
  "name": "側頭筋引き上げ＋高速まばたき",
  "targetProblems": [
   "expression",
   "masseter",
   "mukumi"
  ],
  "category": "lymph",
  "slot": "朝",
  "region": "center",
  "intensity": 1,
  "duration": "20回",
  "illust": "ex-temporal.png",
  "muscle": "側頭筋・眼輪筋",
  "isTraining": false,
  "purpose": "目まわりの血流・循環を促し、朝のむくみやまぶたの重さを一時的に軽くする",
  "how": [
   "側頭部を斜め上へ軽く引き上げながら、目元に触れずに高速でまばたきを20回ほどする。"
  ],
  "why": "まばたき（眼輪筋ポンプ）と軽い圧で末梢循環を促す。むくみ軽減は一時的",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "目の周りをこすらない・引っぱらない（色素沈着・くま悪化）。まぶたに直接触れない"
 },
 {
  "id": "kg_ch_70",
  "name": "口すぼめ「う」＋唇上下（口まわり表情筋トレ）",
  "targetProblems": [
   "doubleChin",
   "expression"
  ],
  "category": "facetrain",
  "slot": "夜",
  "region": "center",
  "intensity": 2,
  "duration": "10回×1〜2セット",
  "illust": "ex-iu.png",
  "muscle": "口輪筋（口まわり）",
  "isTraining": true,
  "purpose": "口元〜フェイスラインが引き締まった印象・ハリ感（一時的〜見え方レベル／個人差あり）",
  "how": [
   "耳を軽く斜め上に引き上げた状態で、口を強くすぼめて『う』の形を作り、続けて上唇・下唇を上下にしっかり動かす。5〜10回くり返す。"
  ],
  "why": "表情筋の反復収縮。顔の運動で外見が変わりうるかは小規模研究(JAMA Dermatol 2018)で限定的に示唆される程度",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "額にシワを寄せない。耳は軽く引く程度にとどめる。骨格そのものは変わらず、効果は一時的・個人差がある"
 },
 {
  "id": "kg_ch_71",
  "name": "フェイスライン・リンパ流し（顎→耳→鎖骨）",
  "targetProblems": [
   "doubleChin",
   "mukumi"
  ],
  "category": "lymph",
  "slot": "朝",
  "region": "center",
  "intensity": 1,
  "duration": "左右各10回",
  "illust": "ex-decolte.png",
  "muscle": "",
  "isTraining": false,
  "purpose": "朝のむくみ・顔のパンパン感を一時的に軽くし、輪郭をすっきり見せる",
  "how": [
   "指の腹または手のひらで、顎先・顎下から耳の下へ、さらに首すじを通って鎖骨まで軽い圧でなで流す。左右各10回。"
  ],
  "why": "リンパ・静脈還流を促し、むくみが一時的に軽減する（効果は一過性）",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "強く擦らない・皮膚を引っぱりすぎない（摩擦や色素沈着の負担になるため）"
 },
 {
  "id": "kg_ch_72",
  "name": "フェイスライン引き上げマッサージ（顎下→こめかみ）",
  "targetProblems": [
   "doubleChin",
   "expression",
   "masseter"
  ],
  "category": "posture",
  "slot": "夜",
  "region": "center",
  "intensity": 1,
  "duration": "左右20回ほど",
  "illust": "ex-temporal.png",
  "muscle": "側頭筋・大頬骨筋（周辺）",
  "isTraining": false,
  "purpose": "フェイスラインが一時的に引き上がった印象（見え方レベル）",
  "how": [
   "手のひらを顎下〜口角の横に当て、こめかみ方向へゆっくり引き上げる。やりにくければ首を軽く横に倒して片側ずつ行う。左右20回ほど。"
  ],
  "why": "手で引き上げる刺激は主に一時的な見え方の変化で、持続的なリフト効果の根拠は乏しい",
  "evidence": {
   "lv": "C",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "皮膚をこすって伸ばさない。強い力は不要。目のまわりは触らない"
 },
 {
  "id": "kg_ch_73",
  "name": "SMAS筋膜リリース（フェイスライン剥がし）",
  "targetProblems": [
   "doubleChin",
   "expression"
  ],
  "category": "lymph",
  "slot": "夜",
  "region": "center",
  "intensity": 1,
  "duration": "約30秒",
  "illust": "ex-relax.png",
  "muscle": "SMAS筋膜",
  "isTraining": false,
  "purpose": "輪郭まわりが一時的にすっきりした印象（見え方レベル）",
  "how": [
   "頬のSMAS筋膜を手のひらで斜め上へ引き上げ、その状態を保ったまま親指と人差し指で顎先からフェイスラインに沿って軽くほぐす。左右行う。"
  ],
  "why": "筋膜への徒手刺激が輪郭を持続的に変える根拠は乏しく、見え方レベルの変化が中心",
  "evidence": {
   "lv": "C",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "強く剥がす・グリグリ圧迫はしない。皮膚を過度に引っぱらず、目のまわりは避ける"
 },
 {
  "id": "kg_ch_74",
  "name": "あいうえお体操（表情筋トレ）",
  "targetProblems": [
   "expression"
  ],
  "category": "facetrain",
  "slot": "夜",
  "region": "center",
  "intensity": 2,
  "duration": "各5回（約30秒）",
  "illust": "ex-iu.png",
  "muscle": "表情筋（口輪筋・頬筋ほか）",
  "isTraining": true,
  "purpose": "口元・頬の筋肉を動かし、ハリのある引き締まった印象へ",
  "how": [
   "「あ・い・う・え・お」と口を大きく動かし、各形を1〜2秒キープ。声は出しても無音でもOK。"
  ],
  "why": "表情筋トレは顔の見た目改善の小規模研究あり（JAMA Dermatol 2018）",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "痛みや顎の違和感が出たら中止。無理に大きく開けすぎない"
 },
 {
  "id": "kg_ch_75",
  "name": "顔全体のリンパ流し（顎下→耳→鎖骨）",
  "targetProblems": [
   "doubleChin",
   "mukumi"
  ],
  "category": "lymph",
  "slot": "朝",
  "region": "center",
  "intensity": 1,
  "duration": "各5〜10回",
  "illust": "ex-decolte.png",
  "muscle": "",
  "isTraining": false,
  "purpose": "朝のむくみを一時的に流し、すっきりした印象に",
  "how": [
   "手のひらや指の腹で、顎下→耳の下→耳の前後→首の前→鎖骨の順に、一方向へ優しく流す。"
  ],
  "why": "用手的リンパドレナージュはむくみを一時的に軽減",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "擦らず軽い圧で（強い摩擦は色素沈着の一因）。首は強く押さない"
 },
 {
  "id": "kg_ch_76",
  "name": "顔の血行促進マッサージ（円を描く）",
  "targetProblems": [
   "expression",
   "mukumi"
  ],
  "category": "lymph",
  "slot": "朝",
  "region": "center",
  "intensity": 1,
  "duration": "30秒程度",
  "illust": "ex-cheek.png",
  "muscle": "",
  "isTraining": false,
  "purpose": "血行を促し、むくみ・くすんだ印象の一時的な軽減",
  "how": [
   "顔を手のひらで包み、頬〜こめかみを円を描くように優しく押し流す。目のキワは避け、その周囲をなでる程度に。"
  ],
  "why": "マッサージで皮膚血流が一時的に増える（一時的効果）",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "目の周り・目の下は擦らない（色素沈着・くま悪化の恐れ）"
 },
 {
  "id": "kg_ch_77",
  "name": "頬・SMASの引き上げホールド",
  "targetProblems": [
   "doubleChin",
   "expression"
  ],
  "category": "lymph",
  "slot": "夜",
  "region": "center",
  "intensity": 1,
  "duration": "左右各10〜20秒",
  "illust": "ex-cheek.png",
  "muscle": "SMAS（表在性筋膜）",
  "isTraining": false,
  "purpose": "フェイスラインが引き上がった一時的な印象づくり",
  "how": [
   "手のひら全体で頬を覆い、斜め上へゆっくり引き上げて10〜20秒キープ。離すときもゆっくり。両側行う。"
  ],
  "why": "引き上げによる見た目変化は一時的・経験則レベル",
  "evidence": {
   "lv": "C",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "強く引っぱらない（皮膚を伸ばすと色素沈着・たるみ悪化の恐れ）。骨格そのものは変わらない"
 },
 {
  "id": "kg_ch_78",
  "name": "顔全体を包んで筋膜をゆるめる（仕上げ）",
  "targetProblems": [
   "general"
  ],
  "category": "lymph",
  "slot": "夜",
  "region": "center",
  "intensity": 1,
  "duration": "20回",
  "illust": "ex-relax.png",
  "muscle": "筋膜",
  "isTraining": false,
  "purpose": "こわばりをゆるめ、なめらかで整った見え方に",
  "how": [
   "顔全体を手のひらで包み、力を抜いて上下・左右へ皮膚ごと優しく揺らすように動かす。"
  ],
  "why": "筋膜リリースの顔への効果は経験則レベル",
  "evidence": {
   "lv": "C",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "優しく行う。強いグリグリ圧迫はしない"
 },
 {
  "id": "kg_ch_79",
  "name": "眼瞼挙筋トレ（目ぱっちり運動）",
  "targetProblems": [
   "expression"
  ],
  "category": "facetrain",
  "slot": "夜",
  "region": "center",
  "intensity": 2,
  "duration": "20回",
  "illust": "ex-e1.png",
  "muscle": "眼瞼挙筋",
  "isTraining": true,
  "purpose": "まぶたを持ち上げる筋肉を使い、目もとが開いてぱっちりした印象に",
  "how": [
   "眉に人差し指の腹を軽く添えて額が動かないよう固定し、その状態で目を大きく見開いて2〜3秒キープ→ゆるめる。"
  ],
  "why": "表情筋の反復収縮による賦活（顔面筋トレの効果を示すJAMA2018等）",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "額のシワを寄せて眉ごと上げない（前頭筋の代償＝額ジワ悪化を防ぐため指で固定）。目の乾き・痛みが出たら中止。"
 },
 {
  "id": "kg_ch_80",
  "name": "皺眉筋つまみほぐし",
  "targetProblems": [
   "expression"
  ],
  "category": "lymph",
  "slot": "夜",
  "region": "center",
  "intensity": 1,
  "duration": "20秒",
  "illust": "ex-fhlymph.png",
  "muscle": "皺眉筋",
  "isTraining": false,
  "purpose": "眉間・眉まわりのこわばりをゆるめ、目もとがすっきりした印象に",
  "how": [
   "眉頭から眉尻まで、眉の筋肉を親指と人差し指でやさしくつまんで軽く持ち上げ、位置をずらしながらゆるめる。"
  ],
  "why": "筋・筋膜のほぐしは見え方レベル（機序C〜B・一時的）",
  "evidence": {
   "lv": "C",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "強く引っぱる・こする・全力で剥がすのはNG（目もとの皮膚は薄く色素沈着やくま悪化の恐れ）。"
 },
 {
  "id": "kg_ch_81",
  "name": "眉の骨際プッシュ＆流し",
  "targetProblems": [
   "expression",
   "mukumi"
  ],
  "category": "lymph",
  "slot": "朝",
  "region": "center",
  "intensity": 1,
  "duration": "30秒",
  "illust": "ex-cheeklymph.png",
  "muscle": "眼窩上縁（骨の際）",
  "isTraining": false,
  "purpose": "朝のまぶたのむくみやどんより感を一時的にすっきりさせる",
  "how": [
   "眉に沿った骨の際のくぼみを親指の腹でゆっくり押し、位置をずらしながら数回。最後に眉頭から眉尻・こめかみへ軽く流す。"
  ],
  "why": "水分（むくみ）・血行の一時的な移動（機序B・効果は一過性）",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "こすらず「押す・流す」だけ。眼球は押さない。下まぶたのキワは擦らない。"
 },
 {
  "id": "kg_ch_82",
  "name": "眉下リフト",
  "targetProblems": [
   "expression"
  ],
  "category": "lymph",
  "slot": "夜",
  "region": "center",
  "intensity": 1,
  "duration": "10回",
  "illust": "ex-e1.png",
  "muscle": "眼輪筋・眉下（ROOF）",
  "isTraining": false,
  "purpose": "眉下のもたつきを引き上げ、まぶたが持ち上がった印象に",
  "how": [
   "眉の下の骨の際に人差し指と中指の腹を当て、眉ごと上方向へゆっくり持ち上げて2〜3秒キープ→戻す。"
  ],
  "why": "物理的な引き上げは見え方レベル・一時的（機序C／骨格は変わらない）",
  "evidence": {
   "lv": "C",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "眼球を押さない。強い圧はかけない。効果は一時的で骨格が変わるものではない。"
 },
 {
  "id": "kg_ch_83",
  "name": "咬筋（こうきん）ほぐし",
  "targetProblems": [
   "doubleChin",
   "masseter"
  ],
  "category": "masseter",
  "slot": "夜",
  "region": "center",
  "intensity": 1,
  "duration": "左右各30秒",
  "illust": "ex-m1.png",
  "muscle": "咬筋",
  "isTraining": false,
  "purpose": "食いしばりで硬く張った咬筋の緊張をゆるめ、エラの張った印象をやわらげてフェイスラインをすっきり見せる（骨格そのものは変わりません）",
  "how": [
   "奥歯を軽く噛むとエラにボコッと出る筋肉（咬筋）に指の腹をあて、優しく円を描くように30秒ほぐす。左右行う。"
  ],
  "why": "咬筋の緊張・こわばりの緩和という機序は妥当。ただしエラ幅の変化は一時的で個人差が大きい",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "強くグリグリ圧迫し続けない（内出血・かえって張る原因）。骨格性のエラや咬筋肥大が強い場合は幅は変わらない。左右差がある人は硬い側を少し重点的に。耳の上の側頭筋も合わせてほぐすとよい"
 },
 {
  "id": "kg_ch_84",
  "name": "顎関節ゆるめ＋左右対称の口開閉",
  "targetProblems": [
   "asymmetry",
   "masseter"
  ],
  "category": "masseter",
  "slot": "夜",
  "region": "center",
  "intensity": 1,
  "duration": "約20回",
  "illust": "ex-ceiling.png",
  "muscle": "咬筋・顎関節（咀嚼筋）",
  "isTraining": false,
  "purpose": "咬筋をゆるめながら顎の左右均等な動きを促し、顔の歪んだ印象・左右差の見え方を整える",
  "how": [
   "咬筋や耳の前のくぼみ（顎関節）を指の腹で軽く押さえ、口が左右に歪まないようまっすぐ大きく20回ほど開け閉めする。"
  ],
  "why": "顎の左右対称運動による見え方改善は経験則レベル",
  "evidence": {
   "lv": "C",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "口を開くとカクッと鳴る・痛む人（顎関節症の疑い）は行わない。強く押さえない"
 },
 {
  "id": "kg_ch_85",
  "name": "エラ裏・耳下のリンパ流し",
  "targetProblems": [
   "masseter",
   "mukumi"
  ],
  "category": "lymph",
  "slot": "朝",
  "region": "center",
  "intensity": 1,
  "duration": "左右各20回",
  "illust": "ex-ear.png",
  "muscle": "",
  "isTraining": false,
  "purpose": "顎まわりに溜まった水分・むくみの一時的な軽減で、朝の顔をすっきり見せる",
  "how": [
   "耳の下から顎のエラの後ろ、首筋に沿って、指の腹で軽くさすり下ろす。片側20回ほど。"
  ],
  "why": "リンパ・むくみへのアプローチは一時的な効果で、持続はしない",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "力を入れすぎない。首を強く圧迫しない"
 },
 {
  "id": "kg_ch_86",
  "name": "エラ角下の押し上げ（顎二腹筋）",
  "targetProblems": [
   "doubleChin",
   "masseter"
  ],
  "category": "masseter",
  "slot": "夜",
  "region": "center",
  "intensity": 1,
  "duration": "左右10秒ずつ",
  "illust": "ex-m1.png",
  "muscle": "顎二腹筋",
  "isTraining": false,
  "purpose": "顎下のこわばりをゆるめ、フェイスライン下部・二重あごまわりの見え方を整える",
  "how": [
   "エラの角のすぐ下に親指をあて、フェイスラインを持ち上げるように上方向へゆっくり押し込む。両側同時に。"
  ],
  "why": "整体的な圧による見え方の変化は経験則レベル",
  "evidence": {
   "lv": "C",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "指が入らない・強い痛みがある人は無理をしない。ストレートネックや顎関節に痛みがある人は避ける"
 },
 {
  "id": "kg_ch_87",
  "name": "耳剥がし×ウの口",
  "targetProblems": [
   "expression",
   "masseter"
  ],
  "category": "facetrain",
  "slot": "夜",
  "region": "center",
  "intensity": 2,
  "duration": "ウの口 約20回",
  "illust": "ex-ear.png",
  "muscle": "口輪筋（＋側頭筋リリース）",
  "isTraining": true,
  "purpose": "口元・頬を動かしてハリのある印象に。側頭部のこわばりもゆるめる",
  "how": [
   "耳を斜め上へやさしく引っ張って側頭部をゆるめた状態で、口を「ウ」の形にすぼめる動きを繰り返す。"
  ],
  "why": "表情筋の反復運動（JAMA2018で頬のハリ改善の報告）＋側頭部リリース",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "剥がしは強く引っ張らない。目の周りは擦らない。痛みの出ない範囲で"
 },
 {
  "id": "kg_ch_88",
  "name": "耳たたみ後ろ回し",
  "targetProblems": [
   "doubleChin",
   "masseter"
  ],
  "category": "masseter",
  "slot": "夜",
  "region": "center",
  "intensity": 1,
  "duration": "後ろ回し 各10回",
  "illust": "ex-ear.png",
  "muscle": "側頭筋・耳介まわり",
  "isTraining": false,
  "purpose": "耳・側頭部のこわばりをゆるめ、フェイスラインがすっきり見える印象に（一時的）",
  "how": [
   "耳を餃子のように前へ半分に折りたたみ、そのまま後ろ方向へ大きく円を描くように回す。"
  ],
  "why": "整体・ほぐしの経験則（見え方レベル）",
  "evidence": {
   "lv": "C",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "🔴必ず後ろ回し（前回しはたるみ方向に働くため避ける）。痛いほど強く折らない"
 },
 {
  "id": "kg_ch_89",
  "name": "耳周り円ほぐし",
  "targetProblems": [
   "expression",
   "mukumi"
  ],
  "category": "lymph",
  "slot": "朝",
  "region": "center",
  "intensity": 1,
  "duration": "各10回（約20秒）",
  "illust": "ex-cheeklymph.png",
  "muscle": "",
  "isTraining": false,
  "purpose": "耳周りの血行を促し、むくみを一時的に流してすっきりした印象に",
  "how": [
   "指の腹で耳の周囲を円を描くようにやさしくほぐす。親指を耳穴に軽く添えて上へ引き上げてもよい。"
  ],
  "why": "血行・リンパ促進によるむくみの一時的軽減（限定的研究）",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "強くグリグリ圧迫しない（摩擦・色素沈着に注意）。爪を立てない"
 },
 {
  "id": "kg_ch_90",
  "name": "耳の上・側頭部ほぐし",
  "targetProblems": [
   "expression",
   "masseter"
  ],
  "category": "masseter",
  "slot": "夜",
  "region": "center",
  "intensity": 1,
  "duration": "上方向へ 約20カウント",
  "illust": "ex-ear.png",
  "muscle": "側頭筋",
  "isTraining": false,
  "purpose": "側頭部をゆるめて引き上がった印象・こめかみ〜頬の見え方をサポート",
  "how": [
   "耳の上のこめかみあたりを手のひらの付け根で上方向へやさしく押し上げるようにゆるめる。"
  ],
  "why": "側頭筋（咀嚼筋群）の緊張をゆるめる機序（見え方レベル）",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "強圧迫を避け優しく。『鍛える』のではなくゆるめる意識（咬筋を強く鍛えるとエラ張りにつながるため避ける）"
 },
 {
  "id": "kg_ch_91",
  "name": "耳〜鎖骨リンパ流し",
  "targetProblems": [
   "mukumi"
  ],
  "category": "lymph",
  "slot": "朝",
  "region": "center",
  "intensity": 1,
  "duration": "各3〜5回（片側10秒目安）",
  "illust": "ex-decolte.png",
  "muscle": "",
  "isTraining": false,
  "purpose": "顔にたまった水分・老廃物を鎖骨へ流し、むくみを一時的に軽減した印象に",
  "how": [
   "耳の前→耳の上→耳の後ろ→首すじ→鎖骨の順に、手のひらでやさしくなで下ろしてリンパを流す。"
  ],
  "why": "リンパドレナージュによるむくみの一時的軽減（限定的研究）",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "優しくなでる程度に。首（頸動脈まわり）は強く圧迫しない"
 },
 {
  "id": "kg_ch_92",
  "name": "鎖骨リンパ流し（排出口を開く）",
  "targetProblems": [
   "mukumi"
  ],
  "category": "lymph",
  "slot": "朝",
  "region": "center",
  "intensity": 1,
  "duration": "20カウント×左右",
  "illust": "ex-decolte.png",
  "muscle": "",
  "isTraining": false,
  "purpose": "顔から流すリンパの排出口を開く準備。むくみが流れやすい状態に整える",
  "how": [
   "指でピースを作って鎖骨を挟み、内側から外側へ（または軽く円を描くように）優しく流し、リンパの排出口を開く。"
  ],
  "why": "鎖骨リンパ本幹の排出口を開き顔からの還流を促す（効果は一時的）",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "強く押さない・こすらない。あくまで優しく行う"
 },
 {
  "id": "kg_ch_93",
  "name": "フェイスライン〜鎖骨の老廃物流し",
  "targetProblems": [
   "doubleChin",
   "mukumi"
  ],
  "category": "lymph",
  "slot": "朝",
  "region": "center",
  "intensity": 1,
  "duration": "20カウント×左右",
  "illust": "ex-decolte.png",
  "muscle": "",
  "isTraining": false,
  "purpose": "顔にたまったむくみ・老廃物を鎖骨へ流し、むくみの一時的軽減とすっきりした見え方",
  "how": [
   "指の腹で、こめかみ・耳の前後から首筋を通って鎖骨まで、顔の老廃物を一気に流し落とす。左右行う。"
  ],
  "why": "顔の間質液・リンパを鎖骨へ誘導しむくみを一時的に軽減",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "絶対に強くこすらない。皮膚を引っぱらず、優しく確実に流す"
 },
 {
  "id": "kg_ch_94",
  "name": "顎下リンパ流し",
  "targetProblems": [
   "doubleChin",
   "mukumi"
  ],
  "category": "lymph",
  "slot": "朝",
  "region": "center",
  "intensity": 1,
  "duration": "左右各10回",
  "illust": "ex-relax.png",
  "muscle": "",
  "isTraining": false,
  "purpose": "顎下のむくみを一時的に軽減し、フェイスラインがすっきり見える印象に",
  "how": [
   "顎の裏から耳の下（耳下腺）・顎下リンパ節へ向けて、左右とも指で優しく押し流す。"
  ],
  "why": "顎下・耳下腺リンパ節へ誘導し顎下のむくみを一時的に軽減",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "強押し・グリグリ圧迫はNG。優しく流す"
 },
 {
  "id": "kg_ch_95",
  "name": "目周囲のやさしいリンパドレナージュ",
  "targetProblems": [
   "mukumi"
  ],
  "category": "lymph",
  "slot": "朝",
  "region": "center",
  "intensity": 1,
  "duration": "数回（やさしく）",
  "illust": "ex-e1.png",
  "muscle": "",
  "isTraining": false,
  "purpose": "目の下のむくみ・滞りを一時的に和らげ、明るい印象に見せる",
  "how": [
   "目頭→目の下→こめかみの順に、指の腹で羽のようなソフトタッチで優しく流す。"
  ],
  "why": "眼周囲の微小循環を促し目の下のむくみを一時的に軽減",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "🔴目周囲は皮膚が薄く毛細リンパ管も繊細。擦る・引っぱるは絶対NG（色素沈着・くま悪化の恐れ）。羽のようなソフトタッチで数回まで"
 },
 {
  "id": "kg_ch_96",
  "name": "後頭筋ほぐし（円マッサージ）",
  "targetProblems": [
   "expression"
  ],
  "category": "lymph",
  "slot": "夜",
  "region": "center",
  "intensity": 1,
  "duration": "約20回",
  "illust": "ex-p1.png",
  "muscle": "後頭筋",
  "isTraining": false,
  "purpose": "頭皮のこわばりをゆるめ、顔まわりが引き上がった印象に",
  "how": [
   "後頭部全体を両手で包み、後頭骨の上の後頭筋を指の腹で小さく円を描くようにゆっくりほぐす。爪を立てず、痛気持ちいい程度で。"
  ],
  "why": "後頭筋は帽状腱膜を介し前頭筋とつながり、頭皮リリースで一時的な引き上げ印象。骨格・顔の大きさは変わらない",
  "evidence": {
   "lv": "C",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "爪を立てず指の腹で行う。強圧のグリグリ揉みは避ける"
 },
 {
  "id": "kg_ch_97",
  "name": "後頭下筋群の押圧（生え際のくぼみ）",
  "targetProblems": [
   "general"
  ],
  "category": "posture",
  "slot": "夜",
  "region": "center",
  "intensity": 1,
  "duration": "左右各20カウント",
  "illust": "ex-scalp.png",
  "muscle": "後頭下筋群",
  "isTraining": false,
  "purpose": "首・後頭部の緊張をゆるめ、目の疲れ感やめぐりをすっきりさせる",
  "how": [
   "後頭部の生え際、中央から左右に少しずれたくぼみに親指を当て、頭の重みを預けてゆっくり押しほぐす。"
  ],
  "why": "後頭下筋群の緊張緩和は緊張型頭痛・眼精疲労と関連し機序は妥当。小顔化の根拠ではない",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "生え際中央の深いくぼみ（延髄付近）は強く押さない。神経・血管があるため痛気持ちいい程度に。めまいを感じたら中止"
 },
 {
  "id": "kg_ch_98",
  "name": "後頭部下の押圧＋上向き",
  "targetProblems": [
   "general"
  ],
  "category": "posture",
  "slot": "朝",
  "region": "center",
  "intensity": 1,
  "duration": "左右各20カウント",
  "illust": "ex-p1.png",
  "muscle": "後頭下筋群",
  "isTraining": false,
  "purpose": "首後ろのこわばりをゆるめ、めぐり・スッキリ感をサポート",
  "how": [
   "握りこぶし（ナックル）を後頭部のすぐ下の生え際に当てて支え、そのままゆっくり上を向く動きを繰り返す。"
  ],
  "why": "首後ろの可動を出すモビライゼーション。めぐり感・スッキリ感は一時的なもの",
  "evidence": {
   "lv": "C",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "首を反らしすぎない。めまい・しびれが出たら中止。頸椎に不安がある人は無理をしない"
 },
 {
  "id": "kg_ch_99",
  "name": "後頭部〜首の後ろストレッチ",
  "targetProblems": [
   "general"
  ],
  "category": "posture",
  "slot": "夜",
  "region": "center",
  "intensity": 1,
  "duration": "約20カウント",
  "illust": "ex-p1.png",
  "muscle": "後頭下筋群（首後ろ）",
  "isTraining": false,
  "purpose": "首後ろ〜後頭部をゆるめ、頭・首まわりの軽い印象に",
  "how": [
   "後頭部で両手を軽く組み、首をゆっくり前に倒して首の後ろ〜後頭部の下を心地よく伸ばす。"
  ],
  "why": "筋膜ストレッチによる見え方レベルの変化。骨格や顔の大きさは不変",
  "evidence": {
   "lv": "C",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "反動をつけず、痛みのない範囲でゆっくり行う"
 },
 {
  "id": "kg_ch_100",
  "name": "頬骨を支えて口を大きく開閉",
  "targetProblems": [
   "expression"
  ],
  "category": "facetrain",
  "slot": "夜",
  "region": "center",
  "intensity": 2,
  "duration": "10〜15回",
  "illust": "ex-cheek.png",
  "muscle": "大頬骨筋・口まわりの表情筋",
  "isTraining": true,
  "purpose": "頬・口まわりの筋肉を動かして働かせ、引き上がった印象を出す",
  "how": [
   "親指を頬骨の下に当て、残りの指を耳の裏に添える。親指で頬骨を軽く引き上げた状態で、口をゆっくり大きく開け閉めする。"
  ],
  "why": "支えながら能動的に動かす軽い表情筋運動。効果は控えめで経験則レベル",
  "evidence": {
   "lv": "C",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "顎に力を入れて噛みしめない（咬筋の負担・エラ張り回避）。ゆっくり動かす。"
 },
 {
  "id": "kg_ch_101",
  "name": "頬骨リフト（手根で引き上げキープ）",
  "targetProblems": [
   "doubleChin",
   "expression",
   "masseter"
  ],
  "category": "masseter",
  "slot": "夜",
  "region": "center",
  "intensity": 1,
  "duration": "20秒キープ×2〜3",
  "illust": "ex-cheek.png",
  "muscle": "大頬骨筋まわり（手技で圧・引き上げ）",
  "isTraining": false,
  "purpose": "頬が引き上がった印象・フェイスラインの見え方を一時的に整える",
  "how": [
   "手のひらの付け根（手根）を頬骨に当て、下から上へ引き上げて約20秒キープ。首を下に傾ける、または反対の指を側頭部に添えて一緒に持ち上げると効きやすい。"
  ],
  "why": "皮膚・筋膜を一時的に持ち上げる手技。恒久的リフトや骨格変化の根拠は乏しい",
  "evidence": {
   "lv": "C",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "頬骨は骨格なので形・位置は変わらない。痛いほど押し込まない。"
 },
 {
  "id": "kg_ch_102",
  "name": "低い側の頬骨押し上げ（左右差ケア）",
  "targetProblems": [
   "asymmetry",
   "expression",
   "mukumi"
  ],
  "category": "lymph",
  "slot": "夜",
  "region": "center",
  "intensity": 1,
  "duration": "各10〜20回",
  "illust": "ex-cheek.png",
  "muscle": "",
  "isTraining": false,
  "purpose": "顔の左右差の見え方を一時的に整える",
  "how": [
   "猫の手をつくり、高さが低い側の頬骨に当てて下から上へゆっくり引き上げる。気になる側だけ多めに行う。"
  ],
  "why": "むくみや筋膜の偏りを一時的にならす程度。骨の左右差そのものは変わらない",
  "evidence": {
   "lv": "C",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "強くグリグリこすらない。低い側中心に軽い圧で。"
 },
 {
  "id": "kg_ch_103",
  "name": "頬骨ラインのリンパ流し（目の下）",
  "targetProblems": [
   "expression",
   "mukumi"
  ],
  "category": "lymph",
  "slot": "朝",
  "region": "center",
  "intensity": 1,
  "duration": "20カウント程度",
  "illust": "ex-eyelymph.png",
  "muscle": "",
  "isTraining": false,
  "purpose": "むくみ・老廃物の一時的な軽減、目もとの巡りの印象アップ",
  "how": [
   "頬骨のライン（骨の上）に沿って指の腹で内側から外・こめかみへ軽く流す。目の下の皮膚には触れず、頬骨の上だけをなでる。"
  ],
  "why": "体液を一時的に動かすことでのむくみ軽減は限定的な支持あり（持続しない）",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "🔴目の下・目周りは擦らない/引っぱらない（色素沈着・くま悪化）。強圧禁止、頬骨の上を軽く流す程度に。"
 },
 {
  "id": "kg_ch_104",
  "name": "頬骨を左右から締める（見え方の引き締め）",
  "targetProblems": [
   "expression",
   "mukumi"
  ],
  "category": "lymph",
  "slot": "夜",
  "region": "center",
  "intensity": 1,
  "duration": "10カウント×2",
  "illust": "ex-cheek.png",
  "muscle": "",
  "isTraining": false,
  "purpose": "頬骨まわりの一時的に引き締まった見え方",
  "how": [
   "両手の手根を頬骨の外側に当て、内側へ軽く寄せるように数秒キープ。反対の手を耳の裏に添えて支えてもよい。"
  ],
  "why": "周囲のむくみ・筋膜の一時的変化にとどまる経験則",
  "evidence": {
   "lv": "C",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "🔴骨格は手技で変わらず「矯正」ではない。強い圧迫・痛む力は避ける。"
 },
 {
  "id": "kg_ch_105",
  "name": "下まぶた眼輪筋トレ（まぶしい目）",
  "targetProblems": [
   "expression"
  ],
  "category": "facetrain",
  "slot": "夜",
  "region": "center",
  "intensity": 2,
  "duration": "5秒キープ×5回",
  "illust": "ex-e1.png",
  "muscle": "眼輪筋（下部）",
  "isTraining": true,
  "purpose": "目の下がハリのある印象・引き上がった見え方をねらう表情筋トレ",
  "how": [
   "下まぶたに指を軽く添えて抵抗をかけ、まぶしい目をつくるように下まぶただけを上へ引き上げて数秒キープ→ゆるめるを反復。おでこや眉で上げないのがコツ。"
  ],
  "why": "眼輪筋下部の反復収縮。JAMA Dermatol 2018で表情筋運動が中顔面のハリに寄与と報告",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "目元はこすらない・強く押さない（色素沈着・くま悪化を防ぐ）。眼球は圧迫しない"
 },
 {
  "id": "kg_ch_106",
  "name": "口角アップトレ（いー・ほ）",
  "targetProblems": [
   "asymmetry",
   "expression"
  ],
  "category": "facetrain",
  "slot": "夜",
  "region": "center",
  "intensity": 2,
  "duration": "10回",
  "illust": "ex-corner.png",
  "muscle": "大頬骨筋・口角挙筋",
  "isTraining": true,
  "purpose": "口角が上がった印象・ほうれい線が目立ちにくい見え方",
  "how": [
   "「いー」または「ほ」の口をつくり、頬を持ち上げるように口角を上げてキープ→ゆるめるを繰り返す。鏡で左右差を見ながら行う。"
  ],
  "why": "大頬骨筋・口角挙筋の随意収縮による表情筋トレ（機序妥当）",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "力み過ぎず、動かすのは口元だけを意識"
 },
 {
  "id": "kg_ch_107",
  "name": "舌の上顎押し当て（舌トレ）",
  "targetProblems": [
   "doubleChin"
  ],
  "category": "facetrain",
  "slot": "夜",
  "region": "center",
  "intensity": 2,
  "duration": "10秒キープ×3回",
  "illust": "ex-palate.png",
  "muscle": "舌骨上筋群",
  "isTraining": true,
  "purpose": "あご下〜口元が引き締まった印象・二重あごの見え方対策",
  "how": [
   "舌全体を上あごにベタッと押し当て、そのまま強めに押し込んで数秒キープ。落ちベロを正しい位置に戻すイメージ。"
  ],
  "why": "舌骨上筋群と舌位の保持。オトガイ下の支持に関与",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "顎に力を入れて食いしばらない"
 },
 {
  "id": "kg_ch_108",
  "name": "まぶた見開きトレ",
  "targetProblems": [
   "expression"
  ],
  "category": "facetrain",
  "slot": "夜",
  "region": "center",
  "intensity": 2,
  "duration": "10回",
  "illust": "ex-e1.png",
  "muscle": "眼瞼挙筋",
  "isTraining": true,
  "purpose": "目がぱっちり開いた印象・上まぶたの軽い見え方",
  "how": [
   "眉を指で軽く押さえて前頭筋を使わせないようにし、まぶたの力だけで目を大きく見開く→ゆるめるを反復。"
  ],
  "why": "眼瞼挙筋の随意収縮。前頭筋の代償を抑える技法で経験則寄り",
  "evidence": {
   "lv": "C",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "額（前頭筋）で引き上げない。額ジワ予防のため必ず眉を押さえて行う"
 },
 {
  "id": "kg_ch_109",
  "name": "耳下〜鎖骨リンパ流し",
  "targetProblems": [
   "doubleChin",
   "expression",
   "mukumi"
  ],
  "category": "lymph",
  "slot": "朝",
  "region": "center",
  "intensity": 1,
  "duration": "左右各10回",
  "illust": "ex-ear.png",
  "muscle": "",
  "isTraining": false,
  "purpose": "顔まわり・フェイスラインのむくみを一時的にすっきり見せる",
  "how": [
   "耳の下から鎖骨に向けて指の腹で優しく撫で下ろす。仕上げに頬→耳前→鎖骨へ軽く流す。"
  ],
  "why": "用手リンパドレナージュ。むくみ軽減は一時的で持続性は乏しい",
  "evidence": {
   "lv": "B",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "強くこすらない（表層リンパは低圧で流れる。摩擦は色素沈着の原因）"
 },
 {
  "id": "kg_ch_110",
  "name": "側頭部・頭皮ほぐし",
  "targetProblems": [
   "doubleChin",
   "expression",
   "masseter"
  ],
  "category": "masseter",
  "slot": "夜",
  "region": "center",
  "intensity": 1,
  "duration": "20カウント",
  "illust": "ex-scalp.png",
  "muscle": "側頭筋・帽状腱膜",
  "isTraining": false,
  "purpose": "こめかみ〜フェイスラインが一時的に引き上がって見える印象づくり",
  "how": [
   "耳の上の側頭部を手のひらで押さえ、皮膚ごと上・後ろへ動かしてほぐす。ピースで耳を挟んで上へ引き上げてもよい。"
  ],
  "why": "側頭筋・帽状腱膜の徒手弛緩。効果は見え方レベル",
  "evidence": {
   "lv": "C",
   "src": "@japan.no1(美容整体ch)",
   "url": ""
  },
  "caution": "痛いほど強く押さない。爪で頭皮を傷つけない"
 }
];


export const KOGAO_CATEGORY = {
  facetrain:{name:'表情筋トレ',icon:'💪',slot:'夜'},
  lymph:{name:'むくみ・巡り',icon:'💧',slot:'朝'},
  posture:{name:'姿勢・首',icon:'🧍‍♀️',slot:'夜'},
  masseter:{name:'エラ・こわばり',icon:'🤲',slot:'夜'},
};
