import Image from "next/image";
import { products } from "@/data/store";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function ProductsSection() {
  return (
    <section className="px-5 py-12 md:px-10 md:py-18">
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle
          eyebrow="SWEETS COLLECTION"
          title="焼きたてと、季節の甘さ。"
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-[24px] border border-[#e8d8ce] bg-[#fffaf3] shadow-[0_14px_30px_rgba(63,45,40,0.08)]"
            >
              <div className="relative aspect-square">
                <Image src={product.image} alt={product.name} fill className="object-cover" />
              </div>
              <div className="space-y-2 p-5">
                <p className="text-[11px] tracking-[0.18em] text-[#7a5548] uppercase">{product.label}</p>
                <h3 className="text-lg font-semibold text-[#3f2d28]">{product.name}</h3>
                <p className="text-sm leading-7 text-[#7a5548]">{product.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
