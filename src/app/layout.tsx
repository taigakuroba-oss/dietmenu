import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diet & Fitness Tracker | 20kg減量プログラム",
  description: "年間20kg減量を目指すダイエット＆フィットネスプログラム。食事管理・有酸素運動・筋トレ・ストレッチメニューを完全網羅。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
