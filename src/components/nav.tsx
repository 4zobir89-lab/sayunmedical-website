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
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
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

  if (!mounted) return null;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "pt-2" : "pt-4 md:pt-6"
        }`}
        dir={isRtl ? "rtl" : "ltr"}
      >
        <div className={`mx-auto transition-all duration-500 ${
          scrolled ? "max-w-7xl" : "max-w-7xl"
        } px-4`}>
          <div className={`flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? "glass-nav h-14 rounded-2xl px-4 shadow-lg shadow-black/5"
              : "h-20 px-0"
          }`}>
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-navy-900 text-white font-bold text-sm group-hover:bg-cyan-500 transition-all duration-300">
                S
              </div>
              <div className="hidden sm:block">
                <p className={`text-sm font-semibold leading-tight transition-colors duration-300 ${
                  scrolled ? "text-navy-900" : "text-white"
                }`}>
                  Sayun <span className="text-cyan-500">Medical</span>
                </p>
                <p className={`text-[10px] tracking-[0.12em] uppercase transition-colors duration-300 ${
                  scrolled ? "text-navy-600/50" : "text-white/40"
                }`}>
                  Corporation
                </p>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {items.slice(0, -1).map((item) => (
                <Link key={item.key} href={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                    isActive(item.href)
                      ? scrolled ? "text-navy-900 bg-cyan-50" : "text-white bg-white/10"
                      : scrolled ? "text-navy-700/70 hover:text-navy-900 hover:bg-cyan-50/50" : "text-white/60 hover:text-white hover:bg-white/10"
                  }`}>
                  {t[locale][item.key]}
                </Link>
              ))}
              <div className={`h-5 w-px mx-2 transition-colors duration-300 ${
                scrolled ? "bg-navy-200/30" : "bg-white/15"
              }`} />
              <button onClick={switchLocale}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] transition-colors cursor-pointer ${
                  scrolled ? "text-navy-500 hover:text-navy-900" : "text-white/50 hover:text-white"
                }`}>
                {locale === "ar" ? "EN" : "عربي"}
              </button>
            </nav>

            <Link href="/contact"
              className={`hidden lg:inline-flex items-center gap-2 rounded-xl px-5 py-2 text-sm font-semibold transition-all duration-300 btn-press ${
                scrolled
                  ? "bg-cyan-500 text-white hover:bg-cyan-400 shadow-sm"
                  : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
              }`}>
              {t[locale].btn}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d={locale === "ar" ? "M19 12H5M12 19l-7-7 7-7" : "M5 12h14M12 5l7 7-7 7"} />
              </svg>
            </Link>

            <button onClick={() => setOpen(!open)}
              className={`lg:hidden relative z-50 flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ${
                scrolled
                  ? "bg-navy-50 border border-navy-200/30"
                  : "bg-white/10 border border-white/10"
              }`}>
              <div className="flex flex-col gap-1.5">
                <span className={`block h-0.5 rounded-full transition-all duration-300 ${
                  open ? "rotate-45 translate-y-[5px] w-5" : "w-5"
                } ${scrolled ? "bg-navy-800" : "bg-white"}`} />
                <span className={`block h-0.5 rounded-full transition-all duration-300 ${
                  open ? "opacity-0 w-5" : "w-4"
                } ${scrolled ? "bg-navy-800" : "bg-white"}`} />
                <span className={`block h-0.5 rounded-full transition-all duration-300 ${
                  open ? "-rotate-45 -translate-y-[5px] w-5" : "w-5"
                } ${scrolled ? "bg-navy-800" : "bg-white"}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 transition-all duration-500 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}>
        <div className={`absolute inset-0 transition-all duration-500 ${
          open ? "backdrop-blur-3xl bg-navy-900/98" : "backdrop-blur-0 bg-navy-900/0"
        }`} />
        <div className="relative z-10 flex h-full flex-col items-center justify-center gap-8 px-6">
          {items.map((item, i) => (
            <Link key={item.key} href={item.href} onClick={() => setOpen(false)}
              className={`text-4xl md:text-5xl font-light text-white/70 hover:text-white transition-all duration-500 hover:scale-105 ${
                open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}>
              {t[locale][item.key]}
            </Link>
          ))}
          <button onClick={switchLocale}
            className={`mt-4 rounded-full border border-white/20 px-8 py-3 text-sm font-medium text-white/70 hover:text-white hover:border-white/40 transition-all duration-500 ${
              open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: `${items.length * 60}ms` }}>
            {locale === "ar" ? "English" : "العربية"}
          </button>
        </div>
      </div>
    </>
  );
}
