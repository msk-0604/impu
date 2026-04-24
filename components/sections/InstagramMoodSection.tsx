import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { instagramMoodItems } from "@/data/store";

export function InstagramMoodSection() {
  return (
    <section className="px-5 py-12 md:px-10 md:py-18">
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle
          eyebrow="INSTAGRAM STYLE"
          title="Instagramの雰囲気を、そのまま公式サイトへ。"
          description="季節のお菓子、営業日、売り切れ情報まで。Instagramで流れてしまう情報を、見やすく整理します。"
        />
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {instagramMoodItems.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-[24px] border border-[#e8d8ce] bg-[#fffaf3] shadow-[0_12px_28px_rgba(63,45,40,0.08)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(63,45,40,0.12)]"
            >
              <div className="relative aspect-square">
                <Image src={item.image} alt={item.title} fill className="object-cover transition duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="space-y-1 p-4">
                <p className="text-xs tracking-[0.16em] text-[#7a5548] uppercase">{item.title}</p>
                <p className="text-xs leading-6 text-[#7a5548] md:text-sm">{item.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
