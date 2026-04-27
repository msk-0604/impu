"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const navItems = [
  { href: "#top", label: "TOP" },
  { href: "#product", label: "GRAND MENU" },
  { href: "#shop", label: "SHOP" },
  { href: "#concept", label: "ABOUT" },
  { href: "#contact", label: "CONTACT" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#top");
  const sectionIds = useMemo(() => navItems.map((item) => item.href.replace("#", "")), []);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const id = visible[0].target.id;
          setActiveHref(`#${id}`);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.15, 0.4, 0.7],
      },
    );

    sectionElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e8d8ce] bg-[#fffaf3]/92 shadow-[0_6px_20px_rgba(63,45,40,0.04)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-10">
        <Link href="/" className="font-serif text-xl text-[#3f2d28]">
          Impulsion
        </Link>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#ead1ca] bg-[#fff6ee] text-[#7a5548] md:hidden"
          aria-label="メニューを開閉"
          aria-expanded={isOpen}
        >
          <span className="text-lg leading-none">{isOpen ? "×" : "≡"}</span>
        </button>
        <nav className="hidden items-center gap-2 overflow-x-auto md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={activeHref === item.href ? "page" : undefined}
              className={`rounded-full border px-4 py-2 text-[11px] font-medium tracking-[0.08em] whitespace-nowrap transition ${
                activeHref === item.href
                  ? "border-[#7a5548] bg-[#7a5548] text-[#fffaf3]"
                  : "border-[#ead1ca] bg-[#fff6ee] text-[#7a5548] hover:bg-[#f7eadc]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      {isOpen ? (
        <nav className="border-t border-[#e8d8ce] bg-[#fffaf3] px-5 py-3 md:hidden">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                aria-current={activeHref === item.href ? "page" : undefined}
                className={`rounded-xl border px-3 py-3 text-center text-xs font-medium tracking-[0.06em] ${
                  activeHref === item.href
                    ? "border-[#7a5548] bg-[#7a5548] text-[#fffaf3]"
                    : "border-[#ead1ca] bg-[#fff6ee] text-[#7a5548]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
