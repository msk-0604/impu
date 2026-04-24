import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { usageScenes } from "@/data/store";

export function UsageScenesSection() {
  return (
    <section className="px-5 py-12 md:px-10 md:py-18">
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle eyebrow="FOR YOUR SWEET MOMENTS" title="甘い時間を、贈る日にも、自分の日にも。" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {usageScenes.map((scene) => (
            <article
              key={scene.id}
              className="overflow-hidden rounded-[24px] border border-[#e8d8ce] bg-[#fffaf3] shadow-[0_10px_24px_rgba(63,45,40,0.06)]"
            >
              <div className="relative h-48">
                <Image src={scene.image} alt={scene.title} fill className="object-cover" />
              </div>
              <div className="space-y-2 p-6">
                <h3 className="font-serif text-xl text-[#3f2d28]">{scene.title}</h3>
                <p className="text-sm leading-7 text-[#7a5548]">{scene.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
