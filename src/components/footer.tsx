"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Envelope, MapPin, CaretRight } from "@phosphor-icons/react";

export default function Footer() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "ar";
  const isRtl = locale === "ar";

  const links = [
    { key: "home", label: isRtl ? "الرئيسية" : "Home", href: `/${locale}` },
    { key: "about", label: isRtl ? "من نحن" : "About", href: `/${locale}/about` },
    { key: "products", label: isRtl ? "المنتجات" : "Products", href: `/${locale}/products` },
    { key: "services", label: isRtl ? "الخدمات" : "Services", href: `/${locale}/services` },
    { key: "contact", label: isRtl ? "اتصل بنا" : "Contact", href: `/${locale}/contact` },
  ];

  const products = [
    isRtl ? "التصوير الطبي" : "Medical Imaging",
    isRtl ? "أجهزة المراقبة" : "Patient Monitoring",
    isRtl ? "الأشعة" : "X-Ray Systems",
    isRtl ? "التخدير والتنفس" : "Anesthesia",
    isRtl ? "الأثاث الطبي" : "Medical Furniture",
  ];

  return (
    <footer className="relative bg-sayun-950 text-white/70" dir={isRtl ? "rtl" : "ltr"}>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 pt-24 pb-12">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className={`lg:col-span-1 ${isRtl ? "text-right" : "text-left"}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white font-extrabold text-lg">
                S
              </div>
              <div>
                <p className="text-lg font-bold text-white leading-none">
                  Sayun <span className="text-gold-400">Medical</span>
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/50 max-w-xs">
              {isRtl
                ? "مؤسسة سيئون للأجهزة والمعدات الطبية — شريكك الموثوق في الرعاية الصحية منذ 1998"
                : "Sayun Corporation for Medical Appliances — Your trusted partner in healthcare since 1998."}
            </p>
          </div>

          <div className={`${isRtl ? "text-right" : "text-left"}`}>
            <h4 className="text-sm font-semibold text-white mb-5 tracking-wide uppercase">
              {isRtl ? "روابط سريعة" : "Quick Links"}
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/50 hover:text-gold-400 transition-colors duration-200"
                  >
                    <CaretRight
                      size={12}
                      className={`text-gold-400/50 group-hover:text-gold-400 transition-all duration-200 ${isRtl ? "rotate-180" : ""}`}
                      weight="bold"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${isRtl ? "text-right" : "text-left"}`}>
            <h4 className="text-sm font-semibold text-white mb-5 tracking-wide uppercase">
              {isRtl ? "منتجاتنا" : "Our Products"}
            </h4>
            <ul className="space-y-3">
              {products.map((p) => (
                <li key={p}>
                  <span className="text-sm text-white/50">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${isRtl ? "text-right" : "text-left"}`}>
            <h4 className="text-sm font-semibold text-white mb-5 tracking-wide uppercase">
              {isRtl ? "اتصل بنا" : "Contact Us"}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-gold-400 shrink-0" weight="fill" />
                <span className="text-sm text-white/50">
                  {isRtl ? "شارع التحرير، صنعاء، اليمن" : "Al-Tahreer St, Sana'a, Yemen"}
                </span>
              </li>
              <li>
                <a href="tel:00967777033002" className="inline-flex items-center gap-3 text-sm text-white/50 hover:text-gold-400 transition-colors">
                  <Phone size={16} className="text-gold-400 shrink-0" weight="fill" />
                  00967-777-033-002
                </a>
              </li>
              <li>
                <a href="tel:009671274839" className="inline-flex items-center gap-3 text-sm text-white/50 hover:text-gold-400 transition-colors">
                  <Phone size={16} className="text-gold-400 shrink-0" weight="fill" />
                  00967-01-274839
                </a>
              </li>
              <li>
                <a href="mailto:info@sayunmedical.com" className="inline-flex items-center gap-3 text-sm text-white/50 hover:text-gold-400 transition-colors">
                  <Envelope size={16} className="text-gold-400 shrink-0" weight="fill" />
                  info@sayunmedical.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>
            &copy; {new Date().getFullYear()} Sayun Medical Corporation. {isRtl ? "جميع الحقوق محفوظة." : "All rights reserved."}
          </p>
          <p>
            {isRtl ? "تصميم وتطوير" : "Designed & Built with"} <span className="text-gold-400/50">✦</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
