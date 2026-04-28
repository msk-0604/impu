import Image from "next/image";
import Link from "next/link";
import { heroCopy, storeInfo } from "@/data/store";

export function HeroSection() {
  return (
    <section id="top" className="px-5 pt-5 pb-12 md:px-10 md:pt-9 md:pb-14">
      <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-[28px] border border-[#e8d8ce] bg-[#fffaf3] shadow-[0_24px_60px_rgba(63,45,40,0.14)]">
        <div className="relative h-[500px] md:h-[660px]">
          <Image
            src="/images/hero-sweets.svg"
            alt="Impulsion の焼き菓子とケーキ"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fffaf3]/96 via-[#fffaf3]/64 to-[#fffaf3]/16" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
            <div className="max-w-xl space-y-5">
              <h1 className="text-[1.68rem] leading-snug font-semibold tracking-[0.01em] text-[#3f2d28] sm:text-[1.85rem] md:text-[2.65rem] md:leading-snug">
                <span className="block md:inline">丁寧に焼き上げた、</span>
                <span className="block md:inline">日常に寄り添う</span>
                <span className="block md:inline">焼き菓子</span>
              </h1>
              <p className="text-base leading-7 text-[#7a5548]">{heroCopy.sub}</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={storeInfo.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-[#7a5548] px-6 py-3 text-base font-medium text-[#fffaf3] transition hover:opacity-90"
                >
                  Instagramで見る
                </Link>
                <Link
                  href={storeInfo.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-[#7a5548] bg-[#fffaf3]/90 px-6 py-3 text-base font-medium text-[#7a5548] transition hover:bg-[#fff3e9]"
                >
                  予約・問い合わせ
                </Link>
              </div>
              <p className="text-[13px] leading-6 text-[#7a5548] md:text-sm">
                ※数量限定のため、売り切れ次第終了となります。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
