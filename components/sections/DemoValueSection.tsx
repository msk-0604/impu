import { SectionTitle } from "@/components/ui/SectionTitle";
import Link from "next/link";
import { storeInfo } from "@/data/store";

export function DemoValueSection() {
  return (
    <section id="contact" className="px-5 py-12 md:px-10 md:py-18">
      <div className="mx-auto w-full max-w-6xl rounded-lg border border-[#e8d8ce] bg-[#f7eadc] p-6 md:p-9 shadow-sm">
        <SectionTitle
          title="お問い合わせ"
          description="商品のご予約や営業に関するお問い合わせは、InstagramのDMよりお気軽にご連絡ください。"
        />
        <p className="mt-3 text-base text-[#7a5548]">※お電話での対応は行っておりません。</p>
        <Link
          href={storeInfo.instagram}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex rounded-lg bg-[#7a5548] px-5 py-3 text-base font-medium text-[#fffaf3]"
        >
          Instagramで問い合わせる
        </Link>
      </div>
    </section>
  );
}
