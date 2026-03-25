// =============================================
// ローカルストレージ管理 & シェア機能
// =============================================

export interface DailyRecord {
  date: string;
  weight?: number;
  meals: { breakfast: boolean; lunch: boolean; dinner: boolean };
  exercise: { cardio: boolean; strength: boolean; stretch: boolean };
  cardioMinutes: number;
  water: number;
  sleep: number;
  memo: string;
  userName: string;
}

const STORAGE_KEY = "diet-fitness-records";
const USER_KEY = "diet-fitness-user";

export function getUserName(): string {
  if (typeof window === "undefined") return "";
  return localStorage.getItem(USER_KEY) || "";
}

export function setUserName(name: string): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(USER_KEY, name);
}

export function getRecords(): DailyRecord[] {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveRecord(record: DailyRecord): void {
  if (typeof window === "undefined") return;
  const records = getRecords();
  const idx = records.findIndex((r) => r.date === record.date && r.userName === record.userName);
  if (idx >= 0) {
    records[idx] = record;
  } else {
    records.push(record);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}

export function exportRecords(): string {
  const records = getRecords();
  return btoa(encodeURIComponent(JSON.stringify(records)));
}

export function importRecords(encoded: string): boolean {
  try {
    const decoded = JSON.parse(decodeURIComponent(atob(encoded)));
    if (!Array.isArray(decoded)) return false;
    const existing = getRecords();
    const merged = [...existing];
    for (const rec of decoded) {
      const idx = merged.findIndex((r) => r.date === rec.date && r.userName === rec.userName);
      if (idx >= 0) {
        merged[idx] = rec;
      } else {
        merged.push(rec);
      }
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
    return true;
  } catch {
    return false;
  }
}
