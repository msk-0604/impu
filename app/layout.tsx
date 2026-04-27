import type { Metadata } from "next";
import { Geist_Mono, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://impu-mocha.vercel.app"),
  title: "Impulsion｜焼き菓子専門店",
  description: "京都の焼き菓子専門店Impulsion。営業日や商品情報はInstagramで随時更新中。",
  openGraph: {
    title: "Impulsion｜焼き菓子専門店",
    description: "京都の焼き菓子専門店Impulsion。営業日や商品情報はInstagramで随時更新中。",
    images: ["/images/hero-sweets.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
