import Image from "next/image";
import Link from "next/link";
import { heroCopy, storeInfo } from "@/data/store";

export function HeroSection() {
  return (
    <section className="px-5 pt-5 pb-10 md:px-10 md:pt-9">
      <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-[28px] border border-[#e8d8ce] bg-[#fffaf3] shadow-[0_22px_54px_rgba(63,45,40,0.12)]">
        <div className="relative h-[530px] md:h-[620px]">
          <Image
            src="/images/hero-sweets.svg"
            alt="Impulsion の焼き菓子とケーキ"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fffaf3]/95 via-[#fffaf3]/62 to-[#fffaf3]/22" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
            <div className="max-w-xl space-y-5">
              <p className="text-xs tracking-[0.24em] text-[#7a5548] uppercase">Patisserie Impulsion</p>
              <h1 className="font-serif text-3xl leading-tight text-[#3f2d28] md:text-5xl">{heroCopy.catch}</h1>
              <p className="text-sm leading-7 text-[#7a5548] md:text-base">{heroCopy.sub}</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="#today-open"
                  className="rounded-full bg-[#7a5548] px-6 py-3 text-sm font-medium text-[#fffaf3] transition hover:opacity-90"
                >
                  本日の営業を見る
                </Link>
                <Link
                  href={storeInfo.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#7a5548] bg-[#fffaf3]/90 px-6 py-3 text-sm font-medium text-[#7a5548] transition hover:bg-[#fff3e9]"
                >
                  Instagramを見る
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
