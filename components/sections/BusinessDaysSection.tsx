import { businessCalendar, businessNotice } from "@/data/store";
import { SectionTitle } from "@/components/ui/SectionTitle";

const statusClassName = {
  open: "bg-[#f7eadc] text-[#7a5548]",
  closed: "bg-[#f1efed] text-[#8d8681]",
  soldout: "bg-[#f4dfda] text-[#8e5144]",
};

const statusLabel = {
  open: "OPEN",
  closed: "休業日",
  soldout: "売切",
};

export function BusinessDaysSection() {
  return (
    <section id="business-days" className="px-5 py-12 md:px-10 md:py-18">
      <div className="mx-auto w-full max-w-6xl rounded-[26px] border border-[#e8d8ce] bg-[#fffaf3] p-5 md:p-8">
        <SectionTitle
          eyebrow="BUSINESS CALENDAR"
          title="営業カレンダー"
          description="売り切れ次第終了のため、最新の営業情報をご確認ください。"
        />
        <div className="mt-6 flex flex-col gap-3 rounded-[22px] border border-[#ead1ca] bg-[linear-gradient(135deg,#fffaf3_0%,#fff2e8_100%)] p-6">
          <p className="text-xs tracking-[0.16em] text-[#7a5548] uppercase">{businessNotice.statusLabel}</p>
          <p className="font-serif text-2xl text-[#3f2d28]">{businessNotice.detail}</p>
          <p className="text-xs text-[#7a5548]">{businessNotice.caution}</p>
        </div>
        <div className="mt-6 flex gap-3 overflow-x-auto pb-1">
          {businessCalendar.map((day) => (
            <article
              key={day.date}
              className="min-w-[220px] rounded-2xl border border-[#e8d8ce] bg-[#fff] p-4 shadow-[0_8px_18px_rgba(63,45,40,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_26px_rgba(63,45,40,0.1)]"
            >
              <p className="text-sm font-medium text-[#3f2d28]">{day.date}</p>
              <span className={`mt-2 inline-flex rounded-full px-3 py-1 text-[11px] font-semibold ${statusClassName[day.status]}`}>
                {statusLabel[day.status]}
              </span>
              <p className="mt-3 text-xs leading-6 text-[#7a5548]">{day.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
