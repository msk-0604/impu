import Image from "next/image";
import { products } from "@/data/store";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function ProductsSection() {
  return (
    <section className="px-5 py-12 md:px-10 md:py-18">
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle
          eyebrow="TODAY'S LINEUP"
          title="商品紹介"
          description="マカロン・焼き菓子・ケーキを中心に、季節に合わせたラインナップをご用意しています。"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {products.map((product) => (
            <article key={product.id} className="overflow-hidden rounded-2xl bg-[#fdf8f2] shadow-[0_16px_38px_rgba(58,38,25,0.12)]">
              <div className="relative h-52">
                <Image src={product.image} alt={product.name} fill className="object-cover" />
              </div>
              <div className="space-y-2 p-5">
                <h3 className="text-lg font-semibold text-[#2f241d]">{product.name}</h3>
                <p className="text-sm leading-7 text-[#59483b]">{product.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
