import Link from "next/link";
import { businessNotice, storeInfo } from "@/data/store";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function BusinessDaysSection() {
  return (
    <section id="business-days" className="px-5 py-12 md:px-10 md:py-18">
      <div className="mx-auto w-full max-w-6xl rounded-lg border border-[#e8d8ce] bg-[#fffaf3] p-6 md:p-9 shadow-sm">
        <SectionTitle
          title="営業日について"
          description="営業日や販売商品、売り切れ情報はInstagramにて随時更新しております。ご来店前に最新の投稿をご確認ください。"
        />
        <div className="mt-6 rounded-lg border border-[#ead1ca] bg-[#fff6ee] p-6">
          <p className="text-base font-medium text-[#3f2d28]">{businessNotice.statusLabel}</p>
          <p className="mt-2 text-lg font-medium text-[#3f2d28]">{businessNotice.detail}</p>
          <p className="mt-2 text-base text-[#7a5548]">数量限定での販売のため、売り切れ次第終了となります。</p>
          <p className="mt-4 text-base text-[#7a5548]">{businessNotice.caution}</p>
          <Link
            href={storeInfo.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex rounded-lg bg-[#7a5548] px-5 py-3 text-base font-medium text-[#fffaf3]"
          >
            Instagramで営業日を見る
          </Link>
        </div>
      </div>
    </section>
  );
}
