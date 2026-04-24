import Image from "next/image";
import Link from "next/link";
import { heroCopy, storeInfo } from "@/data/store";

export function HeroSection() {
  return (
    <section className="px-5 pt-6 pb-10 md:px-10 md:pt-10">
      <div className="mx-auto grid w-full max-w-6xl gap-8 overflow-hidden rounded-3xl bg-[#efe1d3] p-5 md:grid-cols-2 md:p-10">
        <div className="relative h-72 overflow-hidden rounded-2xl md:h-full">
          <Image
            src="/images/hero-cake.svg"
            alt="Impulsion の焼き菓子とケーキ"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col justify-center gap-6">
          <p className="text-xs tracking-[0.22em] text-[#7f6550]">PÂTISSERIE IMPULSION</p>
          <h1 className="text-3xl leading-tight font-semibold text-[#2f241d] md:text-5xl">
            {heroCopy.catch}
          </h1>
          <p className="text-sm leading-7 text-[#574438] md:text-base">{heroCopy.sub}</p>
          <div className="flex flex-wrap gap-3">
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
              アクセス
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
