"use client";

import { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { Link } from "@/i18n/routing";

export default function Nav() {
  const locale = useLocale();
  const isRtl = locale === "ar";
  const fullPath = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const t: Record<string, Record<string, string>> = {
    ar: { home: "الرئيسية", about: "من نحن", products: "المنتجات", services: "الخدمات", contact: "اتصل بنا", btn: "تواصل معنا" },
    en: { home: "Home", about: "About", products: "Products", services: "Services", contact: "Contact", btn: "Get in Touch" },
  };

  const items = [
    { key: "home", href: "/" as const },
    { key: "about", href: "/about" as const },
    { key: "products", href: "/products" as const },
    { key: "services", href: "/services" as const },
    { key: "contact", href: "/contact" as const },
  ];

  const langSwitchHref = (() => {
    if (locale === "ar") return `/en${fullPath}`;
    const withoutEn = fullPath.replace(/^\/en/, "");
    return withoutEn || "/";
  })();

  const switchLocale = () => {
    setOpen(false);
    window.location.href = langSwitchHref;
  };

  const isActive = (href: string) => {
    if (href === "/") return fullPath === "/" || fullPath === "/en";
    return fullPath.endsWith(href) || fullPath === `/en${href}`;
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]" : "bg-transparent"
      }`}
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 h-20">
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-navy-800 text-white font-bold text-sm group-hover:bg-cyan-500 transition-colors duration-200">S</div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-navy-900 leading-tight">Sayun <span className="text-cyan-500">Medical</span></p>
            <p className="text-[10px] text-navy-600/50 tracking-[0.12em] uppercase">Corporation</p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {items.slice(0, -1).map((item) => (
            <Link key={item.key} href={item.href}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive(item.href)
                  ? "text-navy-900 bg-cyan-50" : "text-navy-700/70 hover:text-navy-900 hover:bg-cyan-50/50"
              }`}>
              {t[locale][item.key]}
            </Link>
          ))}
          <div className="h-5 w-px bg-navy-200/30 mx-2" />
          <button onClick={switchLocale}
            className="px-3 py-1.5 text-xs font-semibold text-navy-500 hover:text-navy-900 uppercase tracking-[0.12em] transition-colors cursor-pointer">
            {locale === "ar" ? "EN" : "عربي"}
          </button>
        </nav>

        <Link href="/contact"
          className="hidden lg:inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-cyan-400 btn-press transition-all duration-200 shadow-sm">
          {t[locale].btn}
        </Link>

        <button onClick={() => setOpen(!open)}
          className="lg:hidden relative z-50 flex h-10 w-10 items-center justify-center rounded-lg bg-white/80 backdrop-blur-sm border border-navy-200/30">
          <div className="flex flex-col gap-1.5">
            <span className={`block h-0.5 w-5 bg-navy-800 rounded-full transition-all duration-300 ${open ? "rotate-45 translate-y-[5px]" : ""}`} />
            <span className={`block h-0.5 w-5 bg-navy-800 rounded-full transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-navy-800 rounded-full transition-all duration-300 ${open ? "-rotate-45 -translate-y-[5px]" : ""}`} />
          </div>
        </button>
      </div>

      <div className={`fixed inset-0 z-40 bg-navy-900/98 backdrop-blur-2xl transition-all duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="flex h-full flex-col items-center justify-center gap-6">
          {items.map((item, i) => (
            <Link key={item.key} href={item.href} onClick={() => setOpen(false)}
              className="text-4xl font-light text-white/70 hover:text-white transition-all duration-200 hover:scale-105"
              style={{ transitionDelay: `${i * 50}ms` }}>
              {t[locale][item.key]}
            </Link>
          ))}
          <button onClick={switchLocale}
            className="mt-8 rounded-full border border-white/20 px-8 py-3 text-sm font-medium text-white/70 hover:text-white hover:border-white/40 transition-all cursor-pointer">
            {locale === "ar" ? "English" : "العربية"}
          </button>
        </div>
      </div>
    </header>
  );
}
