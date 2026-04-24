import { SectionTitle } from "@/components/ui/SectionTitle";

const demoValuePoints = [
  "営業日を一目で確認",
  "売り切れ情報を分かりやすく案内",
  "Instagramでは流れてしまう情報を整理",
  "スマホからアクセス・Instagramまで迷わず移動",
];

export function DemoValueSection() {
  return (
    <section className="px-5 py-12 md:px-10 md:py-18">
      <div className="mx-auto w-full max-w-6xl rounded-[26px] border border-[#e8d8ce] bg-[#f7eadc] p-6 md:p-9">
        <SectionTitle
          eyebrow="GUIDE FOR YOUR VISIT"
          title="はじめての来店を、もっとやさしく。"
          description="Instagramの世界観はそのままに、来店前に知りたい情報を公式サイトとして整えます。"
        />
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {demoValuePoints.map((point) => (
            <li
              key={point}
              className="rounded-xl border border-[#d7c3ae] bg-[#fdf8f2] px-4 py-3 text-sm leading-7 text-[#4f3d31]"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
