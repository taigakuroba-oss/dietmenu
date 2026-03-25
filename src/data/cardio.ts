// =============================================
// 有酸素運動メニュー 12種類
// =============================================

export interface ExerciseItem {
  id: string;
  name: string;
  intensity: "低" | "中" | "高";
  calories: string;
  duration: string;
  description: string;
  tips: string[];
  phase: string;
  heartRateZone: string;
}

export const cardioExercises: ExerciseItem[] = [
  {
    id: "c1",
    name: "ウォーキング（早歩き）",
    intensity: "低",
    calories: "約200kcal/40分",
    duration: "30〜60分",
    description: "時速6〜7kmの早歩き。運動初心者が最初に取り組むべき基本メニュー。",
    tips: ["腕を大きく振る", "かかとから着地しつま先で蹴る", "背筋を伸ばし目線は前方", "坂道を取り入れると負荷UP"],
    phase: "Phase 1〜4（常にベース）",
    heartRateZone: "最大心拍数の50〜60%",
  },
  {
    id: "c2",
    name: "ジョギング",
    intensity: "中",
    calories: "約350kcal/30分",
    duration: "20〜40分",
    description: "会話ができる程度のペースで走る。脂肪燃焼効率が最も高い。",
    tips: ["最初は歩き→走りを交互に", "呼吸は自然なリズムで", "着地は足裏全体で", "週3回から開始"],
    phase: "Phase 1後半〜",
    heartRateZone: "最大心拍数の60〜70%",
  },
  {
    id: "c3",
    name: "サイクリング（自転車）",
    intensity: "中",
    calories: "約300kcal/30分",
    duration: "30〜60分",
    description: "膝への負担が少なく、長時間続けやすい。通勤にも取り入れ可能。",
    tips: ["サドルの高さを適切に調整", "ケイデンス80〜90rpmを意識", "ギアは軽めから", "ヘルメット着用必須"],
    phase: "Phase 1〜4",
    heartRateZone: "最大心拍数の60〜75%",
  },
  {
    id: "c4",
    name: "水泳（クロール）",
    intensity: "高",
    calories: "約500kcal/30分",
    duration: "20〜40分",
    description: "全身運動で消費カロリーが非常に高い。関節への負担ゼロ。",
    tips: ["息継ぎを片側だけにしない", "キックは小さく速く", "最初は25m×休憩を繰り返す", "週1〜2回が理想"],
    phase: "Phase 2〜",
    heartRateZone: "最大心拍数の70〜85%",
  },
  {
    id: "c5",
    name: "縄跳び",
    intensity: "高",
    calories: "約400kcal/20分",
    duration: "10〜20分（インターバル形式）",
    description: "短時間で高い消費カロリー。場所を選ばず道具も安い。",
    tips: ["1分跳び→30秒休憩を繰り返す", "つま先で軽く跳ぶ", "脇を締めて手首で回す", "二重跳びで強度UP"],
    phase: "Phase 2〜",
    heartRateZone: "最大心拍数の75〜90%",
  },
  {
    id: "c6",
    name: "HIIT（高強度インターバル）",
    intensity: "高",
    calories: "約400kcal/20分",
    duration: "15〜25分",
    description: "20秒全力→10秒休憩を繰り返す。アフターバーン効果で運動後もカロリー消費が続く。",
    tips: ["バーピー・ジャンプスクワット等を組み合わせ", "フォーム崩れたら即休憩", "週2回まで（回復重要）", "空腹時は避ける"],
    phase: "Phase 2後半〜",
    heartRateZone: "最大心拍数の80〜95%",
  },
  {
    id: "c7",
    name: "踏み台昇降",
    intensity: "低",
    calories: "約200kcal/30分",
    duration: "20〜40分",
    description: "自宅で天候に関係なくできる有酸素運動。テレビを見ながら可能。",
    tips: ["台の高さは10〜20cm", "背筋を伸ばし腕を振る", "左右交互にリードする脚を変える", "音楽に合わせるとモチベUP"],
    phase: "Phase 1〜4",
    heartRateZone: "最大心拍数の50〜65%",
  },
  {
    id: "c8",
    name: "エリプティカル（クロストレーナー）",
    intensity: "中",
    calories: "約350kcal/30分",
    duration: "20〜40分",
    description: "ジムの定番マシン。膝への衝撃がゼロで全身運動。",
    tips: ["負荷レベルは5〜8程度", "ハンドルを持ち上半身も使う", "逆回転で異なる筋肉を刺激", "傾斜をつけてお尻も鍛える"],
    phase: "Phase 1〜4",
    heartRateZone: "最大心拍数の60〜75%",
  },
  {
    id: "c9",
    name: "ダンスエクササイズ",
    intensity: "中",
    calories: "約300kcal/30分",
    duration: "20〜40分",
    description: "楽しみながらカロリー消費。YouTubeの動画を使えば自宅でもOK。",
    tips: ["好きな音楽ジャンルを選ぶ", "動きの正確さより楽しさ重視", "シューズは室内用を", "週2〜3回で継続しやすい"],
    phase: "Phase 1〜4",
    heartRateZone: "最大心拍数の60〜80%",
  },
  {
    id: "c10",
    name: "ローイングマシン",
    intensity: "中",
    calories: "約350kcal/30分",
    duration: "15〜30分",
    description: "全身の84%の筋肉を使う最強の有酸素運動。背中の引き締め効果大。",
    tips: ["脚→体幹→腕の順で引く", "戻すときはゆっくり", "背中を丸めない", "ストロークレートは24〜30/分"],
    phase: "Phase 2〜",
    heartRateZone: "最大心拍数の65〜80%",
  },
  {
    id: "c11",
    name: "ハイキング",
    intensity: "中",
    calories: "約400kcal/60分",
    duration: "60〜120分",
    description: "自然の中で歩くことでストレス解消効果も大。週末のアクティビティに最適。",
    tips: ["トレッキングポール使用推奨", "水分は1時間あたり500ml", "登りはゆっくり、下りは慎重に", "GPS・地図アプリ必携"],
    phase: "Phase 1〜4",
    heartRateZone: "最大心拍数の55〜75%",
  },
  {
    id: "c12",
    name: "アクアウォーキング",
    intensity: "低",
    calories: "約250kcal/30分",
    duration: "30〜45分",
    description: "水中歩行。水の抵抗で陸上の2倍のカロリー消費。膝・腰に優しい。",
    tips: ["胸の高さの水深で行う", "大股でゆっくり歩く", "腕も水中で大きく動かす", "横歩き・後ろ歩きも取り入れる"],
    phase: "Phase 1〜4",
    heartRateZone: "最大心拍数の50〜65%",
  },
];

export const weeklyCardioSchedule = {
  phase1: {
    name: "Phase 1（1〜3ヶ月目）",
    totalMinutes: "150分/週",
    schedule: "週3〜4日 × 40〜50分",
    recommended: ["ウォーキング", "踏み台昇降", "サイクリング"],
  },
  phase2: {
    name: "Phase 2（4〜6ヶ月目）",
    totalMinutes: "200分/週",
    schedule: "週4〜5日 × 40〜50分",
    recommended: ["ジョギング", "ダンスエクササイズ", "水泳"],
  },
  phase3: {
    name: "Phase 3（7〜9ヶ月目）",
    totalMinutes: "250〜300分/週",
    schedule: "週5〜6日 × 40〜60分",
    recommended: ["ジョギング", "HIIT", "ローイング", "縄跳び"],
  },
  phase4: {
    name: "Phase 4（10〜12ヶ月目）",
    totalMinutes: "200〜300分/週（維持）",
    schedule: "週4〜5日 × 40〜60分",
    recommended: ["好きな運動を自由に組み合わせ"],
  },
};
