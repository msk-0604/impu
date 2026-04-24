import Link from "next/link";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { storeInfo } from "@/data/store";

export function OnlineShopSection() {
  return (
    <section id="online-shop" className="px-5 py-12 md:px-10 md:py-18">
      <div className="mx-auto w-full max-w-6xl rounded-[26px] border border-[#e8d8ce] bg-[#fffaf3] p-6 md:p-9">
        <SectionTitle
          eyebrow="ONLINE SHOP"
          title="ご自宅でも、Impulsionの甘さを。"
          description="焼き菓子ギフトや季節の詰め合わせを、オンラインでもご案内予定です。"
        />
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={storeInfo.instagram}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#7a5548] px-5 py-3 text-sm font-medium text-[#fffaf3]"
          >
            Instagramを見る
          </Link>
          <Link
            href="#shop"
            className="rounded-full border border-[#ead1ca] bg-[#fff6ee] px-5 py-3 text-sm font-medium text-[#7a5548]"
          >
            店舗情報を見る
          </Link>
        </div>
      </div>
    </section>
  );
}
