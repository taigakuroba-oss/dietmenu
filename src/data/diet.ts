// =============================================
// 食事メニューデータ
// =============================================

export interface FoodItem {
  name: string;
  detail: string;
  calories?: string;
}

export const allowedFoods: { category: string; items: FoodItem[] }[] = [
  {
    category: "タンパク質（毎食手のひら1枚分）",
    items: [
      { name: "鶏むね肉（皮なし）", detail: "高タンパク・低脂質の王道。100gあたり約110kcal", calories: "110kcal/100g" },
      { name: "ささみ", detail: "鶏むね以上に低脂質。サラダやスープに最適", calories: "105kcal/100g" },
      { name: "鮭・サーモン", detail: "良質な脂質（オメガ3）を含む。週2〜3回推奨", calories: "130kcal/100g" },
      { name: "まぐろ赤身", detail: "高タンパクで鉄分も豊富", calories: "125kcal/100g" },
      { name: "サバ（水煮缶）", detail: "オメガ3豊富。手軽にタンパク質を摂れる", calories: "150kcal/100g" },
      { name: "卵（1日2〜3個）", detail: "完全栄養食。ゆで卵が最も手軽", calories: "80kcal/1個" },
      { name: "木綿豆腐", detail: "植物性タンパク質。カルシウムも豊富", calories: "72kcal/100g" },
      { name: "納豆", detail: "発酵食品で腸活にも効果的。1日1パック", calories: "100kcal/1パック" },
      { name: "無脂肪ギリシャヨーグルト", detail: "タンパク質が通常の2倍。間食にも最適", calories: "60kcal/100g" },
      { name: "エビ・イカ・タコ", detail: "超低カロリー高タンパク。タウリン豊富", calories: "80kcal/100g" },
    ],
  },
  {
    category: "炭水化物（こぶし1個分/食）",
    items: [
      { name: "玄米", detail: "白米より食物繊維3倍・GI値が低い", calories: "165kcal/茶碗1杯" },
      { name: "オートミール", detail: "朝食に最適。30gを水やスープで。β-グルカンが豊富", calories: "114kcal/30g" },
      { name: "さつまいも", detail: "低GIで腹持ち抜群。間食にも", calories: "130kcal/100g" },
      { name: "全粒粉パン", detail: "白いパンより食物繊維・ビタミンB群が豊富", calories: "約120kcal/1枚" },
      { name: "そば（十割そば推奨）", detail: "低GI。ルチンが血管を強くする", calories: "270kcal/1人前" },
    ],
  },
  {
    category: "野菜・きのこ・海藻（毎食両手いっぱい）",
    items: [
      { name: "ブロッコリー", detail: "ビタミンC・食物繊維・スルフォラファン。筋トレ民の味方", calories: "33kcal/100g" },
      { name: "ほうれん草", detail: "鉄分・葉酸が豊富。茹でてお浸しに", calories: "20kcal/100g" },
      { name: "トマト", detail: "リコピンが抗酸化作用。生でもスープでも", calories: "19kcal/100g" },
      { name: "きのこ類全般", detail: "ほぼゼロカロリーで食物繊維豊富。嵩増しに最適", calories: "15kcal/100g" },
      { name: "海藻（わかめ・もずく）", detail: "ミネラル豊富・ほぼノーカロリー。味噌汁に必須", calories: "5kcal/100g" },
      { name: "キャベツ", detail: "食物繊維で満腹感。生で食前に食べると効果的", calories: "23kcal/100g" },
      { name: "アボカド（1/2個/日）", detail: "良質な脂質とカリウム。食べ過ぎ注意", calories: "90kcal/半個" },
    ],
  },
  {
    category: "良質な脂質（1日大さじ1〜2杯）",
    items: [
      { name: "オリーブオイル", detail: "オレイン酸が豊富。加熱調理にも", calories: "約110kcal/大さじ1" },
      { name: "MCTオイル", detail: "中鎖脂肪酸。エネルギーに変換されやすい", calories: "約120kcal/大さじ1" },
      { name: "ナッツ類（素焼き）", detail: "アーモンド・くるみ。1日25g程度", calories: "約150kcal/25g" },
    ],
  },
  {
    category: "OK間食",
    items: [
      { name: "プロテインバー/シェイク", detail: "タンパク質20g以上のものを選ぶ", calories: "約150kcal" },
      { name: "ゆで卵", detail: "手軽に持ち運べる完全栄養食", calories: "80kcal/1個" },
      { name: "素焼きナッツ（25g）", detail: "小袋を常備。噛むことで満腹感UP", calories: "150kcal" },
      { name: "ギリシャヨーグルト", detail: "ハチミツ少量またはベリーを添えて", calories: "60kcal/100g" },
      { name: "あたりめ/するめ", detail: "噛み応えでドカ食い防止", calories: "50kcal/20g" },
      { name: "高カカオチョコ（85%以上）", detail: "1日2〜3片まで。ポリフェノール摂取", calories: "30kcal/1片" },
    ],
  },
];

export const forbiddenFoods: { category: string; items: { name: string; reason: string }[] }[] = [
  {
    category: "避けるべき飲み物",
    items: [
      { name: "砂糖入り飲料（コーラ・ジュース等）", reason: "500mlで角砂糖15個分。血糖値が急上昇し脂肪蓄積を促進" },
      { name: "カフェオレ・フラペチーノ系", reason: "1杯300〜500kcal。間食として非常に高カロリー" },
      { name: "アルコール（週1杯以上）", reason: "脂肪燃焼を止め、食欲増進。飲むなら蒸留酒を少量" },
      { name: "エナジードリンク", reason: "砂糖大量。カフェイン過剰で睡眠の質が低下" },
    ],
  },
  {
    category: "避けるべき食べ物",
    items: [
      { name: "白砂糖・菓子パン", reason: "血糖値スパイクで脂肪蓄積→すぐに空腹に" },
      { name: "ポテトチップス・スナック菓子", reason: "脂質+糖質+塩分の三重苦。中毒性が高い" },
      { name: "揚げ物（フライ・天ぷら）", reason: "衣が油を吸い、カロリー2〜3倍に。週1回以下に" },
      { name: "白米の大盛り", reason: "血糖値急上昇。茶碗半分〜1杯を玄米で" },
      { name: "加工肉（ソーセージ・ベーコン）", reason: "脂質過多・添加物多数。どうしてもの場合は少量" },
      { name: "カップ麺・インスタント食品", reason: "塩分過多・栄養素ほぼゼロ。むくみの原因" },
      { name: "マーガリン・ショートニング", reason: "トランス脂肪酸。心血管リスクを上げる" },
      { name: "アイスクリーム", reason: "糖質+脂質のダブルパンチ。どうしてもならアイスバー1本" },
      { name: "市販ドレッシング", reason: "糖質と油が多い。オリーブオイル+レモン汁で代用" },
    ],
  },
];

export const mealPlan = {
  phase1: {
    name: "Phase 1: 基盤構築期（1〜3ヶ月目）",
    targetLoss: "目標: -6〜8kg",
    calories: "1日1,600〜1,800kcal",
    pfc: "P:30% F:25% C:45%",
    meals: {
      breakfast: "オートミール30g + プロテイン + バナナ半分 + ナッツ少量（約400kcal）",
      lunch: "玄米茶碗半分 + 鶏むね肉120g + サラダ大盛り + 味噌汁（約550kcal）",
      dinner: "鮭orささみ120g + 野菜たっぷりスープ + 納豆or豆腐（約450kcal）",
      snack: "ギリシャヨーグルト or プロテイン or ゆで卵（約150kcal）",
    },
  },
  phase2: {
    name: "Phase 2: 加速期（4〜6ヶ月目）",
    targetLoss: "目標: さらに-6〜8kg（累計-12〜16kg）",
    calories: "1日1,400〜1,600kcal",
    pfc: "P:35% F:25% C:40%",
    meals: {
      breakfast: "オートミール30g + プロテイン + ベリー少量（約350kcal）",
      lunch: "玄米茶碗半分 + タンパク質150g + 野菜大盛り（約500kcal）",
      dinner: "魚or鶏肉120g + 温野菜 + 海藻スープ（約400kcal）",
      snack: "プロテイン or あたりめ（約100kcal）",
    },
  },
  phase3: {
    name: "Phase 3: 仕上げ期（7〜9ヶ月目）",
    targetLoss: "目標: さらに-4〜6kg（累計-16〜22kg）",
    calories: "1日1,400〜1,500kcal",
    pfc: "P:35% F:25% C:40%",
    meals: {
      breakfast: "オートミール30g + プロテイン（約300kcal）",
      lunch: "玄米少量 + タンパク質150g + 野菜スープ（約450kcal）",
      dinner: "タンパク質120g + サラダ + 味噌汁（約400kcal）",
      snack: "プロテイン（約100kcal）",
    },
  },
  phase4: {
    name: "Phase 4: 維持・定着期（10〜12ヶ月目）",
    targetLoss: "目標: 体重維持＋体脂肪率改善",
    calories: "1日1,600〜1,800kcal（徐々に戻す）",
    pfc: "P:30% F:25% C:45%",
    meals: {
      breakfast: "Phase1と同様（好みに合わせて調整OK）",
      lunch: "バランス重視。外食もルール内ならOK",
      dinner: "タンパク質メイン + 野菜中心",
      snack: "週2回程度のご褒美デザートもOK（200kcal以内）",
    },
  },
};
