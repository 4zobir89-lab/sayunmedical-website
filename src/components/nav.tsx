"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";

export default function Nav() {
  const locale = useLocale();
  const isRtl = locale === "ar";
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const t = (key: string) => {
    const dict: Record<string, Record<string, string>> = {
      ar: { home: "الرئيسية", about: "من نحن", products: "المنتجات", services: "الخدمات", contact: "اتصل بنا", btn: "تواصل معنا" },
      en: { home: "Home", about: "About", products: "Products", services: "Services", contact: "Contact", btn: "Get in Touch" },
    };
    return dict[locale]?.[key] || key;
  };

  const L = locale === "ar" ? "en" : "ar";
  const items = [
    { key: "home", href: `/${locale === "ar" ? "" : "en"}` },
    { key: "about", href: `/${locale === "ar" ? "" : "en"}/about` },
    { key: "products", href: `/${locale === "ar" ? "" : "en"}/products` },
    { key: "services", href: `/${locale === "ar" ? "" : "en"}/services` },
    { key: "contact", href: `/${locale === "ar" ? "" : "en"}/contact` },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]" : "bg-transparent"
      }`}
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 h-20">
        <Link
          href={items[0].href}
          className="flex items-center gap-3 group shrink-0"
        >
          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0A5C7E] text-white font-bold text-sm group-hover:bg-[#0A5C7E]/90 transition-colors">
            S
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-[#0A5C7E] leading-tight">Sayun <span className="text-[#C8A44E]">Medical</span></p>
            <p className="text-[10px] text-[#0A5C7E]/50 tracking-widest uppercase">Corporation</p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {items.slice(0, -1).map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                  ? "text-[#0A5C7E] bg-[#0A5C7E]/5"
                  : "text-[#0A5C7E]/70 hover:text-[#0A5C7E] hover:bg-[#0A5C7E]/5"
              }`}
            >
              {t(item.key)}
            </Link>
          ))}
          <div className="h-5 w-px bg-[#0A5C7E]/10 mx-2" />
          <Link
            href={`/${L === "en" ? "en" : ""}`}
            className="px-3 py-1.5 text-xs font-semibold text-[#0A5C7E]/50 hover:text-[#0A5C7E] uppercase tracking-wider transition-colors"
          >
            {locale === "ar" ? "EN" : "عربي"}
          </Link>
        </nav>

        <Link
          href={items[4].href}
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-[#C8A44E] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#C8A44E]/90 active:scale-[0.97] transition-all duration-200 shadow-lg shadow-[#C8A44E]/20"
        >
          {t("btn")}
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden relative z-50 flex h-10 w-10 items-center justify-center rounded-xl bg-white/80 backdrop-blur-sm border border-[#0A5C7E]/10"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block h-0.5 w-5 bg-[#0A5C7E] rounded-full transition-all duration-300 ${open ? "rotate-45 translate-y-[5px]" : ""}`} />
            <span className={`block h-0.5 w-5 bg-[#0A5C7E] rounded-full transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-[#0A5C7E] rounded-full transition-all duration-300 ${open ? "-rotate-45 -translate-y-[5px]" : ""}`} />
          </div>
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-[#0B293B]/98 backdrop-blur-2xl transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-6">
          {items.map((item, i) => (
            <Link
              key={item.key}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-4xl font-light text-white/70 hover:text-white transition-all duration-300 hover:scale-105"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {t(item.key)}
            </Link>
          ))}
          <div className="mt-8">
            <Link
              href={`/${L}`}
              onClick={() => setOpen(false)}
              className="rounded-full border border-white/20 px-8 py-3 text-sm font-medium text-white/70 hover:text-white hover:border-white/40 transition-all"
            >
              {locale === "ar" ? "English" : "العربية"}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
