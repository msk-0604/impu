import Link from "next/link";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { NewsItem } from "@/lib/microcms";
import { storeInfo } from "@/data/store";

type InstagramSectionProps = {
  news: NewsItem[];
};

export function InstagramSection({ news }: InstagramSectionProps) {
  return (
    <section id="instagram" className="px-5 py-12 md:px-10 md:py-18">
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle
          eyebrow="INSTAGRAM"
          title="最新投稿とお知らせ"
          description="Instagram運用に加えて、営業・売り切れ・お知らせをこのページにも反映します。"
        />
        <div className="mt-7 grid gap-5 md:grid-cols-2">
          <div className="rounded-[24px] border border-[#e8d8ce] bg-[#fffaf3] p-5 shadow-[0_12px_28px_rgba(58,38,25,0.1)]">
            <p className="text-xs tracking-[0.16em] text-[#7a5548] uppercase">Latest updates</p>
            <ul className="mt-3 space-y-2">
              {news.map((item) => (
                <li key={item.id} className="rounded-xl border border-[#ead1ca] bg-[#fff6ee] px-3 py-2 text-sm text-[#554236]">
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-between rounded-[24px] border border-[#ead1ca] bg-[linear-gradient(135deg,#f7eadc_0%,#ead1ca_100%)] p-5">
            <div>
              <p className="text-xs tracking-[0.16em] text-[#7a5548] uppercase">Official instagram</p>
              <p className="mt-2 text-sm leading-7 text-[#554236]">
                新作、当日ラインナップ、売り切れ情報を投稿しています。
              </p>
            </div>
            <Link
              href={storeInfo.instagram}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex w-fit rounded-full bg-[#4a3528] px-5 py-3 text-sm font-medium text-[#fffaf6] transition hover:opacity-90"
            >
              Instagramを見る
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
