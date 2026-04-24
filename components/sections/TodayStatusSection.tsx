import Link from "next/link";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { storeInfo } from "@/data/store";

export function TodayStatusSection() {
  return (
    <section id="today-open" className="px-5 py-6 md:px-10 md:py-8">
      <div className="mx-auto w-full max-w-6xl rounded-[26px] border border-[#e8d8ce] bg-[#fffaf3] p-5 md:p-7">
        <SectionTitle eyebrow="TODAY'S OPEN STATUS" title="本日の営業" />
        <div className="mt-5 rounded-[24px] border border-[#ead1ca] bg-[linear-gradient(135deg,#fffaf3_0%,#f7eadc_100%)] p-6 md:p-7">
          <span className="inline-flex rounded-full border border-[#ead1ca] bg-[#fff] px-4 py-1 text-[11px] tracking-[0.18em] text-[#7a5548] uppercase">
            Open
          </span>
          <p className="mt-4 font-serif text-3xl leading-tight text-[#3f2d28] md:text-4xl">11:00〜18:00</p>
          <p className="mt-2 text-sm text-[#7a5548]">売り切れ次第終了</p>
          <p className="mt-4 text-xs text-[#7a5548]">ご来店前にInstagramの最新投稿もご確認ください。</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="#business-days"
              className="rounded-full bg-[#7a5548] px-5 py-3 text-sm font-medium text-[#fffaf3] transition hover:opacity-90"
            >
              営業日を見る
            </Link>
            <Link
              href={storeInfo.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#ead1ca] bg-[#fffaf3] px-5 py-3 text-sm font-medium text-[#7a5548] transition hover:bg-[#fff1e6]"
            >
              アクセスを見る
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
