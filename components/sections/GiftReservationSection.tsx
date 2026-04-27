import Link from "next/link";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { storeInfo } from "@/data/store";

export function GiftReservationSection() {
  return (
    <section id="gift-reservation" className="px-5 py-12 md:px-10 md:py-18">
      <div className="mx-auto w-full max-w-6xl rounded-lg border border-[#e8d8ce] bg-[#fffaf3] p-6 md:p-9 shadow-sm">
        <SectionTitle
          title="ギフト・ご予約について"
          description="焼き菓子の詰め合わせやギフトのご相談はInstagramのDMより承っております。"
        />
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
