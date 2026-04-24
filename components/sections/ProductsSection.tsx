import Image from "next/image";
import { products } from "@/data/store";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function ProductsSection() {
  return (
    <section id="product" className="px-5 py-12 md:px-10 md:py-18">
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle
          eyebrow="GRAND MENU"
          title="焼きたてと、季節の甘さ。"
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-[24px] border border-[#efe2d8] bg-[#fffaf3] shadow-[0_8px_18px_rgba(63,45,40,0.05)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_28px_rgba(63,45,40,0.1)]"
            >
              <div className="relative aspect-square">
                <Image src={product.image} alt={product.name} fill className="object-cover transition duration-500 group-hover:scale-[1.03]" />
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
