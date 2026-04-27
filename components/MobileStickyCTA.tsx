import Link from "next/link";
import { storeInfo } from "@/data/store";

export function MobileStickyCTA() {
  return (
    <div className="fixed right-0 bottom-0 left-0 z-40 border-t border-[#e8d8ce] bg-[#fffaf3]/95 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-8px_20px_rgba(63,45,40,0.06)] backdrop-blur md:hidden">
      <div className="mx-auto max-w-2xl">
        <Link
          href={storeInfo.instagram}
          target="_blank"
          rel="noreferrer"
          className="block w-full rounded-lg bg-[#3f2d28] px-4 py-4 text-center text-base font-semibold text-[#fffaf3]"
        >
          Instagramで問い合わせ
        </Link>
      </div>
    </div>
  );
}
