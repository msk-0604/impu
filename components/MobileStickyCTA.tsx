import Link from "next/link";
import { storeInfo } from "@/data/store";

export function MobileStickyCTA() {
  return (
    <div className="fixed right-0 bottom-0 left-0 z-40 border-t border-[#e8d8ce] bg-[#fffaf3]/95 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-8px_20px_rgba(63,45,40,0.06)] backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-2xl grid-cols-3 gap-2">
        <Link href="#business-days" className="rounded-full bg-[#7a5548] px-3 py-3 text-center text-xs font-semibold text-[#fffaf3]">
          営業日
        </Link>
        <Link
          href={storeInfo.mapUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[#ead1ca] bg-[#fff6ee] px-3 py-3 text-center text-xs font-semibold text-[#7a5548]"
        >
          アクセス
        </Link>
        <Link
          href="#instagram"
          className="rounded-full border border-[#ead1ca] bg-[#fff6ee] px-3 py-3 text-center text-xs font-semibold text-[#7a5548]"
        >
          Instagram
        </Link>
      </div>
    </div>
  );
}
