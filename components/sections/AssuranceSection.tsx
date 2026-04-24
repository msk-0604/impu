import { SectionTitle } from "@/components/ui/SectionTitle";
import { firstVisitPoints } from "@/data/store";

export function AssuranceSection() {
  return (
    <section className="px-5 py-12 md:px-10 md:py-18">
      <div className="mx-auto w-full max-w-6xl rounded-3xl bg-[#eadbcd] p-6 md:p-9">
        <SectionTitle
          eyebrow="FOR FIRST VISIT"
          title="初めての方へ"
          description="はじめての方でも迷わず来店できるよう、営業日・商品・アクセスを分かりやすくまとめています。"
        />
        <ul className="mt-6 space-y-3">
          {firstVisitPoints.map((point) => (
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
