"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "products", href: "/products" },
  { key: "services", href: "/services" },
  { key: "contact", href: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "ar";
  const isRtl = locale === "ar";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
        scrolled
          ? "bg-white/90 backdrop-blur-2xl shadow-[0_1px_0_rgba(0,0,0,0.05)]"
          : "bg-transparent"
      }`}
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href={locale === "ar" ? "/ar" : "/en"} className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sayun-700 text-white font-extrabold text-lg transition-transform duration-500 group-hover:scale-105">
              S
            </div>
            <div className={`${isRtl ? "text-right" : "text-left"}`}>
              <p className="text-sm font-bold tracking-tight text-sayun-900 leading-none">
                Sayun <span className="text-gold-400">Medical</span>
              </p>
              <p className="text-[10px] text-sayun-500 tracking-wide uppercase">
                Corporation
              </p>
            </div>
          </Link>

          <nav className={`hidden lg:flex items-center ${isRtl ? "gap-1" : "gap-1"}`}>
            {navItems.map((item) => {
              const href = `/${locale}${item.href === "/" ? "" : item.href}`;
              const isActive = pathname === href;
              return (
                <Link
                  key={item.key}
                  href={href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive
                      ? "text-sayun-700 bg-sayun-50"
                      : "text-sayun-600 hover:text-sayun-700 hover:bg-sayun-50/50"
                  }`}
                >
                  {item.key === "home" ? (isRtl ? "الرئيسية" : "Home") : 
                   item.key === "about" ? (isRtl ? "من نحن" : "About") :
                   item.key === "products" ? (isRtl ? "المنتجات" : "Products") :
                   item.key === "services" ? (isRtl ? "الخدمات" : "Services") :
                   item.key === "contact" ? (isRtl ? "اتصل بنا" : "Contact") : item.key}
                </Link>
              );
            })}
            <div className={`${isRtl ? "mr-2" : "ml-2"} h-6 w-px bg-sayun-200`} />
            <Link
              href={`/${locale === "ar" ? "en" : "ar"}`}
              className="px-3 py-2 text-xs font-semibold text-sayun-500 hover:text-sayun-700 transition-colors uppercase tracking-wider"
            >
              {isRtl ? "EN" : "عربي"}
            </Link>
          </nav>

          <Link
            href={`/${locale}/contact`}
            className="hidden lg:inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-2.5 text-sm font-semibold text-white hover:bg-gold-500 transition-all duration-300 shadow-lg shadow-gold-400/20 hover:shadow-gold-400/30 active:scale-[0.97]"
          >
            {isRtl ? "تواصل معنا" : "Get in Touch"}
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden relative z-50 flex h-10 w-10 items-center justify-center rounded-xl bg-white/80 backdrop-blur-sm border border-sayun-100"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`block h-0.5 w-5 bg-sayun-700 rounded-full transition-all duration-300 ${open ? "rotate-45 translate-y-[5px]" : ""}`} />
              <span className={`block h-0.5 w-5 bg-sayun-700 rounded-full transition-all duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-sayun-700 rounded-full transition-all duration-300 ${open ? "-rotate-45 -translate-y-[5px]" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-sayun-950/95 backdrop-blur-3xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {navItems.map((item, i) => {
            const href = `/${locale}${item.href === "/" ? "" : item.href}`;
            return (
              <Link
                key={item.key}
                href={href}
                onClick={() => setOpen(false)}
                className="text-4xl font-light text-white/80 hover:text-white transition-all duration-500 hover:scale-105"
                style={{
                  transitionDelay: `${i * 60}ms`,
                  transform: open ? "translateY(0) scale(1)" : "translateY(40px) scale(0.9)",
                  opacity: open ? 1 : 0,
                }}
              >
                {item.key === "home" ? (isRtl ? "الرئيسية" : "Home") : 
                 item.key === "about" ? (isRtl ? "من نحن" : "About") :
                 item.key === "products" ? (isRtl ? "المنتجات" : "Products") :
                 item.key === "services" ? (isRtl ? "الخدمات" : "Services") :
                 item.key === "contact" ? (isRtl ? "اتصل بنا" : "Contact") : item.key}
              </Link>
            );
          })}
          <div className="mt-8 flex gap-6">
            <Link
              href={`/${locale === "ar" ? "en" : "ar"}`}
              className="rounded-full border border-white/20 px-8 py-3 text-sm font-medium text-white/70 hover:text-white hover:border-white/40 transition-all"
            >
              {isRtl ? "English" : "العربية"}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
