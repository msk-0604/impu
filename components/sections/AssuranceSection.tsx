import { SectionTitle } from "@/components/ui/SectionTitle";
import { firstVisitPoints } from "@/data/store";

export function AssuranceSection() {
  return (
    <section className="px-5 py-12 md:px-10 md:py-18">
      <div className="mx-auto w-full max-w-6xl rounded-[26px] border border-[#e8d8ce] bg-[#fffaf3] p-6 md:p-9">
        <SectionTitle
          eyebrow="FOR FIRST VISIT"
          title="初めての方へ"
          description="はじめての方でも迷わず来店できるよう、営業日・商品・アクセスを分かりやすくまとめています。"
        />
        <ul className="mt-6 space-y-3">
          {firstVisitPoints.map((point) => (
            <li
              key={point}
              className="rounded-2xl border border-[#e8d8ce] bg-[#fff6ee] px-4 py-3 text-sm leading-7 text-[#7a5548]"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
