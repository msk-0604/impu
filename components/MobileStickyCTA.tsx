import Link from "next/link";
import { storeInfo } from "@/data/store";

export function MobileStickyCTA() {
  return (
    <div className="fixed right-0 bottom-0 left-0 z-40 border-t border-[#cdb8a4] bg-[#f7eee5]/95 p-3 backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-2xl grid-cols-3 gap-2">
        <Link href="#business-days" className="rounded-full bg-[#4a3528] px-3 py-2 text-center text-xs font-semibold text-[#fffaf6]">
          営業日
        </Link>
        <Link
          href={storeInfo.mapUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[#6f5441] px-3 py-2 text-center text-xs font-semibold text-[#4c392d]"
        >
          アクセス
        </Link>
        <Link
          href="#instagram"
          className="rounded-full border border-[#6f5441] px-3 py-2 text-center text-xs font-semibold text-[#4c392d]"
        >
          Instagram
        </Link>
      </div>
    </div>
  );
}
