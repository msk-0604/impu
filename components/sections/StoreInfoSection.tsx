import Link from "next/link";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { storeInfo } from "@/data/store";

export function StoreInfoSection() {
  return (
    <section id="access" className="px-5 py-12 md:px-10 md:py-18">
      <div className="mx-auto grid w-full max-w-6xl gap-6 rounded-3xl border border-[#dbc7b3] bg-[#fdf8f2] p-6 md:grid-cols-2 md:p-9">
        <div>
          <SectionTitle title="店舗情報" description="初めての方でも迷わず来店いただける情報をまとめています。" />
          <dl className="mt-6 space-y-3 text-sm text-[#4f3d31]">
            <div>
              <dt className="font-semibold text-[#2f241d]">住所</dt>
              <dd>{storeInfo.address}</dd>
            </div>
            <div>
              <dt className="font-semibold text-[#2f241d]">営業時間</dt>
              <dd>{storeInfo.businessHours}</dd>
            </div>
            <div>
              <dt className="font-semibold text-[#2f241d]">電話</dt>
              <dd>{storeInfo.phone}</dd>
            </div>
            <div>
              <dt className="font-semibold text-[#2f241d]">アクセス</dt>
              <dd>{storeInfo.station}</dd>
            </div>
          </dl>
        </div>
        <div className="flex flex-col justify-center rounded-2xl bg-[#e8d8c8] p-5">
          <p className="text-sm leading-7 text-[#554236]">
            ご来店前に営業日・売り切れ情報をご確認いただくことで、安心してお越しいただけます。
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href={storeInfo.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#4a3528] px-5 py-3 text-sm font-medium text-[#fffaf6]"
            >
              アクセス
            </Link>
            <Link
              href={storeInfo.instagram}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#6f5441] px-5 py-3 text-sm font-medium text-[#4c392d]"
            >
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
