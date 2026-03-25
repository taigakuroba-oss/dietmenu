// =============================================
// If-Then ルール付き 1日のスケジュール
// =============================================

export interface ScheduleItem {
  time: string;
  activity: string;
  detail: string;
  ifThenRules: { condition: string; action: string }[];
}

export const dailySchedule: ScheduleItem[] = [
  {
    time: "6:00",
    activity: "起床・水分補給",
    detail: "コップ1杯の常温水を飲む。体重を計測して記録する。",
    ifThenRules: [
      { condition: "目覚ましが鳴ったら", action: "すぐにカーテンを開けて日光を浴びる（体内時計リセット）" },
      { condition: "二度寝したくなったら", action: "ベッドの上で10秒ストレッチしてから立ち上がる" },
    ],
  },
  {
    time: "6:15",
    activity: "朝の運動（有酸素）",
    detail: "空腹時の有酸素運動は脂肪燃焼効率が高い。ウォーキングまたは軽いジョギング30〜40分。",
    ifThenRules: [
      { condition: "雨が降っていたら", action: "踏み台昇降またはYouTubeのダンスエクササイズに切り替え" },
      { condition: "体が重い・だるいと感じたら", action: "ウォーキングのみにして、強度を下げる" },
      { condition: "運動着に着替えたら", action: "必ずウォームアップストレッチ5分を行ってから開始" },
    ],
  },
  {
    time: "7:00",
    activity: "朝食",
    detail: "オートミール30g + プロテイン + フルーツ少量。タンパク質は20g以上摂る。",
    ifThenRules: [
      { condition: "時間がないときは", action: "プロテインシェイク + バナナだけでもOK" },
      { condition: "食欲がないときは", action: "ギリシャヨーグルト + ナッツだけでも食べる" },
    ],
  },
  {
    time: "10:00",
    activity: "間食（必要な場合）",
    detail: "お腹が空いたら無理に我慢しない。準備しておいたOK間食を摂る。",
    ifThenRules: [
      { condition: "お腹が空いたら", action: "まず水を1杯飲んで5分待つ。それでも空いていたらゆで卵orナッツ" },
      { condition: "甘いものが欲しくなったら", action: "高カカオチョコ1〜2片で対応" },
      { condition: "コンビニに行きたくなったら", action: "サラダチキンかゆで卵を買うと決めてから行く" },
    ],
  },
  {
    time: "12:00",
    activity: "昼食",
    detail: "タンパク質（手のひら1枚分） + 炭水化物（こぶし1個分） + 野菜たっぷり",
    ifThenRules: [
      { condition: "外食になったら", action: "定食屋でご飯少なめ + 焼き魚定食 or 鶏肉メニューを選ぶ" },
      { condition: "弁当を買うなら", action: "幕の内弁当よりサラダ+チキン+おにぎり1個の組み合わせ" },
      { condition: "食べすぎたと感じたら", action: "夕食で炭水化物を半分にして調整（1日トータルで考える）" },
    ],
  },
  {
    time: "15:00",
    activity: "間食（必要な場合）",
    detail: "午後の空腹対策。夕食までのエネルギー補給。",
    ifThenRules: [
      { condition: "会議のお菓子が回ってきたら", action: "「ありがとう」と受け取り、デスクに置いて後で1個だけ食べる" },
      { condition: "自販機の前に来たら", action: "水またはブラックコーヒーを選ぶ" },
    ],
  },
  {
    time: "18:00",
    activity: "筋トレ（週2〜3回の日）",
    detail: "ウォームアップ10分 → 筋トレ30〜40分 → クールダウン10分",
    ifThenRules: [
      { condition: "ジムに着いたら", action: "まずウォームアップストレッチを必ず行う" },
      { condition: "仕事で疲れていたら", action: "セット数を2セットに減らしてもいいから必ずやる" },
      { condition: "筋トレの日でないなら", action: "30分のウォーキングまたは軽い有酸素を行う" },
      { condition: "筋トレが終わったら", action: "30分以内にプロテインを飲む → クールダウンストレッチ" },
    ],
  },
  {
    time: "19:30",
    activity: "夕食",
    detail: "タンパク質メイン + 野菜たっぷり + 炭水化物は控えめ or なし",
    ifThenRules: [
      { condition: "20時を過ぎたら", action: "炭水化物は抜き、タンパク質+野菜スープのみにする" },
      { condition: "飲み会に誘われたら", action: "焼き鳥（塩）・刺身・枝豆を中心に。ビールは最初の1杯だけ→ハイボール" },
      { condition: "どうしてもラーメンが食べたくなったら", action: "翌日の朝食を軽めにし、スープは残す" },
    ],
  },
  {
    time: "21:00",
    activity: "リラックスタイム",
    detail: "入浴・ストレッチ・読書など。ブルーライトを控える。",
    ifThenRules: [
      { condition: "お風呂から上がったら", action: "軽いストレッチ5分（スパイナルツイスト等）を行う" },
      { condition: "スマホを見たくなったら", action: "ナイトモードにして30分以内にする" },
      { condition: "小腹が空いたら", action: "ハーブティーまたは白湯を飲む。固形物は食べない" },
    ],
  },
  {
    time: "22:30",
    activity: "就寝",
    detail: "7〜8時間の睡眠確保。睡眠不足はグレリン（食欲ホルモン）を増やし太る原因に。",
    ifThenRules: [
      { condition: "ベッドに入ったら", action: "3回深呼吸して体をリラックスさせる" },
      { condition: "眠れないときは", action: "起きて温かい飲み物を飲み、15分経ったら再度横になる" },
    ],
  },
];

export const weeklyPlan = {
  monday: { cardio: true, strength: true, focus: "下半身筋トレ + ウォーキング30分" },
  tuesday: { cardio: true, strength: false, focus: "有酸素運動（ジョギング or サイクリング）40分" },
  wednesday: { cardio: false, strength: false, focus: "完全休養日（ストレッチのみOK）" },
  thursday: { cardio: true, strength: true, focus: "上半身筋トレ + ウォーキング30分" },
  friday: { cardio: true, strength: false, focus: "有酸素運動（好きな種目）40分" },
  saturday: { cardio: true, strength: false, focus: "長めの有酸素（ハイキング/サイクリング）60分" },
  sunday: { cardio: false, strength: false, focus: "アクティブレスト（散歩・軽いストレッチ）" },
};
