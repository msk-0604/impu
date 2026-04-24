import Link from "next/link";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { storeInfo } from "@/data/store";

export function TodayStatusSection() {
  return (
    <section className="px-5 py-6 md:px-10 md:py-8">
      <div className="mx-auto w-full max-w-6xl rounded-3xl border border-[#dbc7b3] bg-[#fdf8f2] p-5 md:p-7">
        <SectionTitle eyebrow="TODAY STATUS" title="今日の営業状況" />
        <div className="mt-5 rounded-2xl bg-[#eadbcd] p-5 md:p-6">
          <p className="text-base font-semibold text-[#2f241d]">本日営業しています</p>
          <p className="mt-1 text-lg font-semibold text-[#2f241d]">11:00〜18:00</p>
          <p className="mt-1 text-sm text-[#554236]">売り切れ次第終了</p>
          <p className="mt-3 text-xs text-[#6a5547]">最新情報はInstagramをご確認ください。</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="#business-days"
              className="rounded-full bg-[#4a3528] px-5 py-3 text-sm font-medium text-[#fffaf6] transition hover:opacity-90"
            >
              営業日を見る
            </Link>
            <Link
              href={storeInfo.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#6f5441] px-5 py-3 text-sm font-medium text-[#4c392d] transition hover:bg-[#eadacb]"
            >
              アクセスを見る
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
