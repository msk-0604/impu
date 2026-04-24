import { SectionTitle } from "@/components/ui/SectionTitle";
import { assurancePoints } from "@/data/store";

export function AssuranceSection() {
  return (
    <section className="px-5 py-12 md:px-10 md:py-18">
      <div className="mx-auto w-full max-w-6xl rounded-3xl bg-[#eadbcd] p-6 md:p-9">
        <SectionTitle
          eyebrow="FOR FIRST VISIT"
          title="初めてでも安心してご来店ください"
          description="気軽に立ち寄れる雰囲気づくりを大切にしています。用途に合わせたご提案も可能です。"
        />
        <ul className="mt-6 space-y-3">
          {assurancePoints.map((point) => (
            <li
              key={point}
              className="rounded-xl border border-[#d9c6b3] bg-[#fdf8f2] px-4 py-3 text-sm leading-7 text-[#4f3d31]"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
