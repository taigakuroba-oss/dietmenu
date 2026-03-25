"use client";

import { useState, useEffect, useCallback } from "react";
import { allowedFoods, forbiddenFoods, mealPlan } from "@/data/diet";
import { cardioExercises, weeklyCardioSchedule } from "@/data/cardio";
import { strengthExercises, weeklyStrengthSchedule } from "@/data/strength";
import { stretchExercises, warmupRoutine, cooldownRoutine } from "@/data/stretching";
import { dailySchedule, weeklyPlan } from "@/data/schedule";
import {
  getUserName,
  setUserName,
  getRecords,
  saveRecord,
  exportRecords,
  importRecords,
  type DailyRecord,
} from "@/lib/storage";

// =============================================
// Navigation
// =============================================
const sections = [
  { id: "overview", label: "概要", icon: "🏠" },
  { id: "diet", label: "食事", icon: "🍽️" },
  { id: "cardio", label: "有酸素", icon: "🏃" },
  { id: "strength", label: "筋トレ", icon: "💪" },
  { id: "stretch", label: "ストレッチ", icon: "🧘" },
  { id: "schedule", label: "スケジュール", icon: "📅" },
  { id: "record", label: "記録", icon: "📊" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <h1 className="text-lg font-bold text-emerald-700">
              Diet & Fitness
            </h1>
            {/* Desktop nav */}
            <nav className="hidden md:flex gap-1">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`nav-link ${activeSection === s.id ? "nav-link-active" : ""}`}
                >
                  <span className="mr-1">{s.icon}</span>
                  {s.label}
                </a>
              ))}
            </nav>
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          {/* Mobile nav */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-3 grid grid-cols-4 gap-1">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`nav-link text-center text-xs ${activeSection === s.id ? "nav-link-active" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="text-lg">{s.icon}</div>
                  {s.label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>

      <main className="pt-16 pb-20 max-w-7xl mx-auto px-4">
        <OverviewSection />
        <DietSection />
        <CardioSection />
        <StrengthSection />
        <StretchSection />
        <ScheduleSection />
        <RecordSection />
      </main>

      <footer className="bg-emerald-800 text-white py-6 text-center text-sm">
        <p>Diet & Fitness Tracker - 20kg減量プログラム</p>
        <p className="text-emerald-300 mt-1">健康的に、確実に、リバウンドなく。</p>
      </footer>
    </>
  );
}

// =============================================
// 概要セクション
// =============================================
function OverviewSection() {
  return (
    <section id="overview" className="py-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-emerald-700 mb-4">
          年間 -20kg 達成プログラム
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          食事管理を土台に、有酸素運動と筋トレを組み合わせた科学的アプローチ。
          リバウンドしない体を作る12ヶ月プログラム。
        </p>
      </div>

      {/* Phase cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {[mealPlan.phase1, mealPlan.phase2, mealPlan.phase3, mealPlan.phase4].map((phase, i) => (
          <div key={i} className="card border-t-4 border-emerald-500">
            <h3 className="font-bold text-emerald-700 mb-2 text-sm">{phase.name}</h3>
            <p className="text-2xl font-extrabold text-emerald-600 mb-1">{phase.targetLoss}</p>
            <p className="text-sm text-gray-500">{phase.calories}</p>
            <p className="text-xs text-gray-400 mt-1">PFC比率: {phase.pfc}</p>
          </div>
        ))}
      </div>

      {/* 3 Pillars */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="card text-center">
          <div className="text-4xl mb-3">🍽️</div>
          <h3 className="font-bold text-lg mb-2">食事管理（80%）</h3>
          <p className="text-sm text-gray-600">
            摂取カロリーのコントロールが最重要。タンパク質を十分に摂り、
            加工食品と砂糖を排除。PFCバランスを意識する。
          </p>
        </div>
        <div className="card text-center">
          <div className="text-4xl mb-3">🏃</div>
          <h3 className="font-bold text-lg mb-2">有酸素運動（15%）</h3>
          <p className="text-sm text-gray-600">
            週150分からスタートし、最終的に300分/週へ。
            脂肪燃焼と心肺機能向上。12種類のメニューから選択。
          </p>
        </div>
        <div className="card text-center">
          <div className="text-4xl mb-3">💪</div>
          <h3 className="font-bold text-lg mb-2">筋トレ（5%）</h3>
          <p className="text-sm text-gray-600">
            週2〜3回の筋力トレーニングで基礎代謝UP。
            筋肉量を維持してリバウンドを防ぐ。
          </p>
        </div>
      </div>
    </section>
  );
}

// =============================================
// 食事セクション
// =============================================
function DietSection() {
  const [tab, setTab] = useState<"ok" | "ng" | "plan">("ok");

  return (
    <section id="diet" className="py-10">
      <h2 className="section-title">🍽️ 食事メニュー</h2>

      <div className="flex gap-2 mb-6 flex-wrap">
        <button onClick={() => setTab("ok")} className={`px-4 py-2 rounded-lg font-medium text-sm ${tab === "ok" ? "bg-emerald-600 text-white" : "bg-gray-100 hover:bg-gray-200"}`}>
          食べてOK
        </button>
        <button onClick={() => setTab("ng")} className={`px-4 py-2 rounded-lg font-medium text-sm ${tab === "ng" ? "bg-red-600 text-white" : "bg-gray-100 hover:bg-gray-200"}`}>
          避けるべき食品
        </button>
        <button onClick={() => setTab("plan")} className={`px-4 py-2 rounded-lg font-medium text-sm ${tab === "plan" ? "bg-amber-600 text-white" : "bg-gray-100 hover:bg-gray-200"}`}>
          フェーズ別食事プラン
        </button>
      </div>

      {tab === "ok" && (
        <div className="space-y-6">
          {allowedFoods.map((cat, i) => (
            <div key={i} className="card">
              <h3 className="font-bold text-emerald-700 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                {cat.category}
              </h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {cat.items.map((item, j) => (
                  <div key={j} className="flex justify-between items-start p-2 bg-emerald-50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.detail}</p>
                    </div>
                    {item.calories && (
                      <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full whitespace-nowrap ml-2">
                        {item.calories}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === "ng" && (
        <div className="space-y-6">
          {forbiddenFoods.map((cat, i) => (
            <div key={i} className="card border-l-4 border-red-400">
              <h3 className="font-bold text-red-700 mb-3">{cat.category}</h3>
              <div className="space-y-2">
                {cat.items.map((item, j) => (
                  <div key={j} className="p-2 bg-red-50 rounded-lg">
                    <p className="font-medium text-sm text-red-800">❌ {item.name}</p>
                    <p className="text-xs text-gray-600 mt-0.5">{item.reason}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === "plan" && (
        <div className="space-y-6">
          {[mealPlan.phase1, mealPlan.phase2, mealPlan.phase3, mealPlan.phase4].map((phase, i) => (
            <div key={i} className="card">
              <h3 className="font-bold text-emerald-700 mb-1">{phase.name}</h3>
              <div className="flex gap-3 mb-3 text-xs text-gray-500">
                <span>{phase.targetLoss}</span>
                <span>{phase.calories}</span>
                <span>{phase.pfc}</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {Object.entries(phase.meals).map(([key, val]) => {
                  const labels: Record<string, string> = { breakfast: "朝食", lunch: "昼食", dinner: "夕食", snack: "間食" };
                  const icons: Record<string, string> = { breakfast: "🌅", lunch: "☀️", dinner: "🌙", snack: "🍎" };
                  return (
                    <div key={key} className="p-3 bg-gray-50 rounded-lg">
                      <p className="font-medium text-sm mb-1">{icons[key]} {labels[key]}</p>
                      <p className="text-xs text-gray-600">{val}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

// =============================================
// 有酸素運動セクション
// =============================================
function CardioSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="cardio" className="py-10">
      <h2 className="section-title">🏃 有酸素運動メニュー（12種類）</h2>

      {/* Weekly schedule by phase */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {Object.values(weeklyCardioSchedule).map((phase, i) => (
          <div key={i} className="card bg-gradient-to-b from-emerald-50 to-white">
            <h4 className="font-bold text-xs text-emerald-700 mb-1">{phase.name}</h4>
            <p className="text-xl font-extrabold text-emerald-600">{phase.totalMinutes}</p>
            <p className="text-xs text-gray-500">{phase.schedule}</p>
            <div className="mt-2 flex flex-wrap gap-1">
              {phase.recommended.map((r, j) => (
                <span key={j} className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">{r}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Exercise cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardioExercises.map((ex) => (
          <div key={ex.id} className="card cursor-pointer" onClick={() => setExpandedId(expandedId === ex.id ? null : ex.id)}>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold">{ex.name}</h3>
              <span className={ex.intensity === "低" ? "badge-low" : ex.intensity === "中" ? "badge-mid" : "badge-high"}>
                {ex.intensity}強度
              </span>
            </div>
            <div className="flex gap-3 text-xs text-gray-500 mb-2">
              <span>{ex.calories}</span>
              <span>{ex.duration}</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">{ex.description}</p>
            {expandedId === ex.id && (
              <div className="mt-3 pt-3 border-t space-y-2">
                <p className="text-xs text-gray-500">心拍数ゾーン: {ex.heartRateZone}</p>
                <p className="text-xs text-gray-500">推奨フェーズ: {ex.phase}</p>
                <div>
                  <p className="text-xs font-semibold mb-1">ポイント:</p>
                  <ul className="text-xs text-gray-600 space-y-0.5">
                    {ex.tips.map((t, i) => <li key={i}>・{t}</li>)}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// =============================================
// 筋トレセクション
// =============================================
function StrengthSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="strength" className="py-10">
      <h2 className="section-title">💪 筋トレメニュー（12種類）</h2>

      {/* Phase schedule */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {Object.values(weeklyStrengthSchedule).map((phase, i) => (
          <div key={i} className="card bg-gradient-to-b from-blue-50 to-white">
            <h4 className="font-bold text-xs text-blue-700 mb-1">{phase.name}</h4>
            <p className="text-xl font-extrabold text-blue-600">{phase.frequency}</p>
            <p className="text-xs text-gray-500 mb-2">{phase.note}</p>
            <div className="flex flex-wrap gap-1">
              {phase.menu.map((m, j) => (
                <span key={j} className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{m}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Exercise cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {strengthExercises.map((ex) => (
          <div key={ex.id} className="card cursor-pointer" onClick={() => setExpandedId(expandedId === ex.id ? null : ex.id)}>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold">{ex.name}</h3>
              <span className={ex.intensity === "初級" ? "badge-low" : ex.intensity === "中級" ? "badge-mid" : "badge-high"}>
                {ex.intensity}
              </span>
            </div>
            <p className="text-xs text-gray-500 mb-1">{ex.targetMuscle}</p>
            <div className="flex gap-3 text-xs text-gray-500 mb-2">
              <span>{ex.sets} × {ex.reps}</span>
              <span>休憩 {ex.rest}</span>
            </div>
            <p className="text-sm text-gray-600">{ex.description}</p>
            {expandedId === ex.id && (
              <div className="mt-3 pt-3 border-t space-y-2">
                <p className="text-xs text-gray-500">器具: {ex.equipment}</p>
                <div>
                  <p className="text-xs font-semibold mb-1">ポイント:</p>
                  <ul className="text-xs text-gray-600 space-y-0.5">
                    {ex.tips.map((t, i) => <li key={i}>・{t}</li>)}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// =============================================
// ストレッチセクション
// =============================================
function StretchSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="stretch" className="py-10">
      <h2 className="section-title">🧘 ストレッチメニュー（12種類）</h2>

      {/* Routines */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="card border-l-4 border-orange-400">
          <h3 className="font-bold text-orange-700 mb-3">🔥 ウォームアップルーティン（運動前 約10分）</h3>
          <ol className="space-y-1">
            {warmupRoutine.map((item, i) => (
              <li key={i} className="text-sm flex items-start gap-2">
                <span className="bg-orange-100 text-orange-700 w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold flex-shrink-0">{i + 1}</span>
                {item}
              </li>
            ))}
          </ol>
        </div>
        <div className="card border-l-4 border-blue-400">
          <h3 className="font-bold text-blue-700 mb-3">❄️ クールダウンルーティン（運動後 約10分）</h3>
          <ol className="space-y-1">
            {cooldownRoutine.map((item, i) => (
              <li key={i} className="text-sm flex items-start gap-2">
                <span className="bg-blue-100 text-blue-700 w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold flex-shrink-0">{i + 1}</span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Stretch cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stretchExercises.map((ex) => (
          <div key={ex.id} className="card cursor-pointer" onClick={() => setExpandedId(expandedId === ex.id ? null : ex.id)}>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-sm">{ex.name}</h3>
              <span className={ex.type === "ウォームアップ" ? "badge-warmup" : ex.type === "クールダウン" ? "badge-cooldown" : "badge-both"}>
                {ex.type}
              </span>
            </div>
            <p className="text-xs text-gray-500 mb-1">{ex.targetArea}</p>
            <p className="text-xs text-gray-500 mb-2">{ex.duration}</p>
            <p className="text-sm text-gray-600">{ex.description}</p>
            {expandedId === ex.id && (
              <div className="mt-3 pt-3 border-t">
                <p className="text-xs font-semibold mb-1">やり方:</p>
                <ol className="text-xs text-gray-600 space-y-1">
                  {ex.steps.map((s, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="font-bold text-emerald-600">{i + 1}.</span>
                      {s}
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// =============================================
// スケジュールセクション
// =============================================
function ScheduleSection() {
  const dayNames: Record<string, string> = {
    monday: "月曜", tuesday: "火曜", wednesday: "水曜",
    thursday: "木曜", friday: "金曜", saturday: "土曜", sunday: "日曜",
  };

  return (
    <section id="schedule" className="py-10">
      <h2 className="section-title">📅 理想の1日スケジュール（If-Thenルール）</h2>

      {/* Weekly overview */}
      <div className="card mb-8">
        <h3 className="font-bold text-emerald-700 mb-3">週間プラン</h3>
        <div className="grid grid-cols-7 gap-1 md:gap-2">
          {Object.entries(weeklyPlan).map(([day, plan]) => (
            <div key={day} className={`text-center p-2 rounded-lg text-xs ${plan.strength ? "bg-blue-100" : plan.cardio ? "bg-emerald-100" : "bg-gray-100"}`}>
              <p className="font-bold">{dayNames[day]}</p>
              <div className="flex justify-center gap-1 my-1">
                {plan.cardio && <span className="w-2 h-2 bg-emerald-500 rounded-full" title="有酸素" />}
                {plan.strength && <span className="w-2 h-2 bg-blue-500 rounded-full" title="筋トレ" />}
                {!plan.cardio && !plan.strength && <span className="w-2 h-2 bg-gray-400 rounded-full" title="休息" />}
              </div>
              <p className="text-[10px] md:text-xs text-gray-600 leading-tight">{plan.focus}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-4 mt-3 text-xs text-gray-500">
          <span className="flex items-center gap-1"><span className="w-2 h-2 bg-emerald-500 rounded-full" />有酸素</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 bg-blue-500 rounded-full" />筋トレ</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 bg-gray-400 rounded-full" />休息</span>
        </div>
      </div>

      {/* Daily schedule with If-Then rules */}
      <div className="space-y-4">
        {dailySchedule.map((item, i) => (
          <div key={i} className="card">
            <div className="flex items-start gap-4">
              <div className="text-center flex-shrink-0">
                <p className="text-2xl font-extrabold text-emerald-600">{item.time}</p>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1">{item.activity}</h3>
                <p className="text-sm text-gray-600 mb-3">{item.detail}</p>
                <div className="space-y-2">
                  {item.ifThenRules.map((rule, j) => (
                    <div key={j} className="if-then-card">
                      <p className="text-xs">
                        <span className="font-bold text-amber-700">IF </span>
                        <span className="text-gray-700">{rule.condition}</span>
                      </p>
                      <p className="text-xs mt-0.5">
                        <span className="font-bold text-emerald-700">THEN </span>
                        <span className="text-gray-700">{rule.action}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// =============================================
// 記録・シェアセクション
// =============================================
function RecordSection() {
  const [name, setName] = useState("");
  const [records, setRecords] = useState<DailyRecord[]>([]);
  const [shareCode, setShareCode] = useState("");
  const [importCode, setImportCode] = useState("");
  const [importMsg, setImportMsg] = useState("");
  const [todayRecord, setTodayRecord] = useState<DailyRecord>({
    date: new Date().toISOString().split("T")[0],
    weight: undefined,
    meals: { breakfast: false, lunch: false, dinner: false },
    exercise: { cardio: false, strength: false, stretch: false },
    cardioMinutes: 0,
    water: 0,
    sleep: 0,
    memo: "",
    userName: "",
  });

  useEffect(() => {
    const savedName = getUserName();
    if (savedName) {
      setName(savedName);
      setTodayRecord((prev) => ({ ...prev, userName: savedName }));
    }
    setRecords(getRecords());
  }, []);

  const handleNameSave = useCallback(() => {
    setUserName(name);
    setTodayRecord((prev) => ({ ...prev, userName: name }));
  }, [name]);

  const handleSave = useCallback(() => {
    const rec = { ...todayRecord, userName: name };
    saveRecord(rec);
    setRecords(getRecords());
  }, [todayRecord, name]);

  const handleExport = useCallback(() => {
    setShareCode(exportRecords());
  }, []);

  const handleImport = useCallback(() => {
    if (importRecords(importCode)) {
      setImportMsg("インポート成功！");
      setRecords(getRecords());
    } else {
      setImportMsg("インポート失敗。コードを確認してください。");
    }
  }, [importCode]);

  const myRecords = records.filter((r) => r.userName === name);
  const friendRecords = records.filter((r) => r.userName !== name && r.userName);

  return (
    <section id="record" className="py-10">
      <h2 className="section-title">📊 記録 & シェア</h2>

      {/* User name */}
      <div className="card mb-6">
        <h3 className="font-bold mb-2">あなたの名前</h3>
        <div className="flex gap-2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 border rounded-lg px-3 py-2 text-sm"
            placeholder="名前を入力"
          />
          <button onClick={handleNameSave} className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700">
            保存
          </button>
        </div>
      </div>

      {/* Today's record */}
      <div className="card mb-6">
        <h3 className="font-bold mb-4">今日の記録 ({todayRecord.date})</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium block mb-1">体重 (kg)</label>
            <input
              type="number"
              step="0.1"
              value={todayRecord.weight || ""}
              onChange={(e) => setTodayRecord({ ...todayRecord, weight: e.target.value ? Number(e.target.value) : undefined })}
              className="w-full border rounded-lg px-3 py-2 text-sm"
              placeholder="例: 75.5"
            />
          </div>
          <div>
            <label className="text-sm font-medium block mb-1">有酸素運動 (分)</label>
            <input
              type="number"
              value={todayRecord.cardioMinutes || ""}
              onChange={(e) => setTodayRecord({ ...todayRecord, cardioMinutes: Number(e.target.value) })}
              className="w-full border rounded-lg px-3 py-2 text-sm"
              placeholder="例: 40"
            />
          </div>
          <div>
            <label className="text-sm font-medium block mb-1">水分摂取量 (リットル)</label>
            <input
              type="number"
              step="0.1"
              value={todayRecord.water || ""}
              onChange={(e) => setTodayRecord({ ...todayRecord, water: Number(e.target.value) })}
              className="w-full border rounded-lg px-3 py-2 text-sm"
              placeholder="例: 2.0"
            />
          </div>
          <div>
            <label className="text-sm font-medium block mb-1">睡眠時間 (時間)</label>
            <input
              type="number"
              step="0.5"
              value={todayRecord.sleep || ""}
              onChange={(e) => setTodayRecord({ ...todayRecord, sleep: Number(e.target.value) })}
              className="w-full border rounded-lg px-3 py-2 text-sm"
              placeholder="例: 7.5"
            />
          </div>
        </div>

        {/* Checkboxes */}
        <div className="mt-4 space-y-3">
          <div>
            <p className="text-sm font-medium mb-2">食事チェック</p>
            <div className="flex gap-4">
              {(["breakfast", "lunch", "dinner"] as const).map((meal) => {
                const labels = { breakfast: "朝食", lunch: "昼食", dinner: "夕食" };
                return (
                  <label key={meal} className="flex items-center gap-1 text-sm">
                    <input
                      type="checkbox"
                      checked={todayRecord.meals[meal]}
                      onChange={(e) => setTodayRecord({ ...todayRecord, meals: { ...todayRecord.meals, [meal]: e.target.checked } })}
                      className="w-4 h-4 text-emerald-600"
                    />
                    {labels[meal]}
                  </label>
                );
              })}
            </div>
          </div>
          <div>
            <p className="text-sm font-medium mb-2">運動チェック</p>
            <div className="flex gap-4">
              {(["cardio", "strength", "stretch"] as const).map((ex) => {
                const labels = { cardio: "有酸素", strength: "筋トレ", stretch: "ストレッチ" };
                return (
                  <label key={ex} className="flex items-center gap-1 text-sm">
                    <input
                      type="checkbox"
                      checked={todayRecord.exercise[ex]}
                      onChange={(e) => setTodayRecord({ ...todayRecord, exercise: { ...todayRecord.exercise, [ex]: e.target.checked } })}
                      className="w-4 h-4 text-emerald-600"
                    />
                    {labels[ex]}
                  </label>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-4">
          <label className="text-sm font-medium block mb-1">メモ</label>
          <textarea
            value={todayRecord.memo}
            onChange={(e) => setTodayRecord({ ...todayRecord, memo: e.target.value })}
            className="w-full border rounded-lg px-3 py-2 text-sm"
            rows={2}
            placeholder="今日の感想や気づき..."
          />
        </div>

        <button onClick={handleSave} className="mt-4 w-full bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700">
          記録を保存
        </button>
      </div>

      {/* Records history */}
      {myRecords.length > 0 && (
        <div className="card mb-6">
          <h3 className="font-bold mb-3">あなたの記録</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="pb-2 pr-3">日付</th>
                  <th className="pb-2 pr-3">体重</th>
                  <th className="pb-2 pr-3">有酸素</th>
                  <th className="pb-2 pr-3">食事</th>
                  <th className="pb-2">運動</th>
                </tr>
              </thead>
              <tbody>
                {myRecords.slice().reverse().slice(0, 14).map((r, i) => (
                  <tr key={i} className="border-b last:border-0">
                    <td className="py-2 pr-3 whitespace-nowrap">{r.date}</td>
                    <td className="py-2 pr-3">{r.weight ? `${r.weight}kg` : "-"}</td>
                    <td className="py-2 pr-3">{r.cardioMinutes}分</td>
                    <td className="py-2 pr-3">
                      {r.meals.breakfast && "朝"}{r.meals.lunch && " 昼"}{r.meals.dinner && " 夕"}
                    </td>
                    <td className="py-2">
                      {r.exercise.cardio && "🏃"}{r.exercise.strength && "💪"}{r.exercise.stretch && "🧘"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Friend records */}
      {friendRecords.length > 0 && (
        <div className="card mb-6">
          <h3 className="font-bold mb-3">友達の記録</h3>
          {Array.from(new Set(friendRecords.map((r) => r.userName))).map((friend) => (
            <div key={friend} className="mb-4 last:mb-0">
              <p className="text-sm font-medium text-emerald-700 mb-1">{friend}</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b text-left">
                      <th className="pb-1 pr-3 text-xs">日付</th>
                      <th className="pb-1 pr-3 text-xs">体重</th>
                      <th className="pb-1 pr-3 text-xs">有酸素</th>
                      <th className="pb-1 text-xs">運動</th>
                    </tr>
                  </thead>
                  <tbody>
                    {friendRecords.filter((r) => r.userName === friend).slice().reverse().slice(0, 7).map((r, i) => (
                      <tr key={i} className="border-b last:border-0">
                        <td className="py-1 pr-3 text-xs">{r.date}</td>
                        <td className="py-1 pr-3 text-xs">{r.weight ? `${r.weight}kg` : "-"}</td>
                        <td className="py-1 pr-3 text-xs">{r.cardioMinutes}分</td>
                        <td className="py-1 text-xs">
                          {r.exercise.cardio && "🏃"}{r.exercise.strength && "💪"}{r.exercise.stretch && "🧘"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Share */}
      <div className="card">
        <h3 className="font-bold mb-3">記録のシェア</h3>
        <p className="text-sm text-gray-600 mb-3">
          エクスポートしたコードを友達に送り、友達はインポートすることでお互いの記録を見られます。
        </p>
        <div className="space-y-4">
          <div>
            <button onClick={handleExport} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
              記録をエクスポート
            </button>
            {shareCode && (
              <div className="mt-2">
                <textarea
                  readOnly
                  value={shareCode}
                  className="w-full border rounded-lg px-3 py-2 text-xs font-mono bg-gray-50"
                  rows={3}
                  onClick={(e) => (e.target as HTMLTextAreaElement).select()}
                />
                <p className="text-xs text-gray-500 mt-1">上のコードをコピーして友達に送ってください</p>
              </div>
            )}
          </div>
          <div>
            <p className="text-sm font-medium mb-2">友達のコードをインポート</p>
            <div className="flex gap-2">
              <input
                type="text"
                value={importCode}
                onChange={(e) => setImportCode(e.target.value)}
                className="flex-1 border rounded-lg px-3 py-2 text-sm"
                placeholder="友達から受け取ったコードを貼り付け"
              />
              <button onClick={handleImport} className="bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-amber-700">
                インポート
              </button>
            </div>
            {importMsg && <p className={`text-xs mt-1 ${importMsg.includes("成功") ? "text-emerald-600" : "text-red-600"}`}>{importMsg}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
