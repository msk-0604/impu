import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { brandStory } from "@/data/store";

export function BrandStorySection() {
  return (
    <section id="concept" className="px-5 py-14 md:px-10 md:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-8 rounded-[28px] border border-[#e8d8ce] bg-[#fffaf3] p-5 md:grid-cols-[1.2fr_1fr] md:p-8">
        <div className="relative h-64 overflow-hidden rounded-[24px] md:h-full md:min-h-[340px]">
          <Image src={brandStory.image} alt="Impulsionのブランドストーリーイメージ" fill className="object-cover" />
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <SectionTitle eyebrow="BRAND STORY" title={brandStory.title} />
          <p className="max-w-md text-sm leading-8 text-[#7a5548] md:text-base">{brandStory.text}</p>
        </div>
      </div>
    </section>
  );
}
