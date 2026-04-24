import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { usageScenes } from "@/data/store";

export function UsageScenesSection() {
  return (
    <section className="px-5 py-12 md:px-10 md:py-18">
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle eyebrow="FOR YOUR SWEET MOMENTS" title="甘い時間を、贈る日にも、自分の日にも。" />
        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          {usageScenes.map((scene) => (
            <article
              key={scene.id}
              className="overflow-hidden rounded-2xl border border-[#dbc7b3] bg-[#fdf8f2] shadow-[0_14px_32px_rgba(58,38,25,0.08)]"
            >
              <div className="relative h-44">
                <Image src={scene.image} alt={scene.title} fill className="object-cover" />
              </div>
              <div className="space-y-2 p-5">
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
