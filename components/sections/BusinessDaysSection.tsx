import { businessCalendar, businessNotice } from "@/data/store";
import { SectionTitle } from "@/components/ui/SectionTitle";

const statusClassName = {
  open: "bg-[#d9ecdf] text-[#26573a]",
  closed: "bg-[#e8e0d8] text-[#62574e]",
  soldout: "bg-[#f3ddd2] text-[#8f3f30]",
};

const statusLabel = {
  open: "営業",
  closed: "休業",
  soldout: "売切",
};

export function BusinessDaysSection() {
  return (
    <section id="business-days" className="px-5 py-12 md:px-10 md:py-18">
      <div className="mx-auto w-full max-w-6xl rounded-3xl border border-[#dbc7b3] bg-[#fdf8f2] p-5 md:p-8">
        <SectionTitle
          eyebrow="OPEN TODAY?"
          title="本日営業しています"
          description="売り切れ次第終了のため、来店前にこのページの営業情報をご確認ください。"
        />
        <div className="mt-6 flex flex-col gap-4 rounded-2xl bg-[#e7d6c5] p-5">
          <p className="text-sm font-medium text-[#46362c]">{businessNotice.statusLabel}</p>
          <p className="text-2xl font-semibold text-[#2f241d]">{businessNotice.detail}</p>
          <p className="text-xs text-[#665244]">{businessNotice.caution}</p>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-[#dbc7b3]">
          <table className="w-full border-collapse">
            <tbody>
              {businessCalendar.map((day) => (
                <tr key={day.date} className="border-b border-[#e8d9cb] last:border-none">
                  <td className="px-4 py-3 text-sm font-medium text-[#45352b] md:px-5">{day.date}</td>
                  <td className="px-4 py-3 md:px-5">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClassName[day.status]}`}>
                      {statusLabel[day.status]}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-[#665244] md:px-5 md:text-sm">{day.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
