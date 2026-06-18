"use client";

import Link from "next/link";
import { useLocale } from "next-intl";

export default function Footer() {
  const locale = useLocale();
  const isRtl = locale === "ar";

  const t: Record<string, Record<string, string>> = {
    ar: { about: "عن سيئون", quick: "روابط سريعة", products: "منتجاتنا", contact: "اتصل بنا", rights: "جميع الحقوق محفوظة." },
    en: { about: "About Sayun", quick: "Quick Links", products: "Our Products", contact: "Contact Us", rights: "All rights reserved." },
  };

  const links = [
    { label: locale === "ar" ? "الرئيسية" : "Home", href: `/${locale === "ar" ? "" : "en"}` },
    { label: locale === "ar" ? "من نحن" : "About", href: `/${locale === "ar" ? "" : "en"}/about` },
    { label: locale === "ar" ? "المنتجات" : "Products", href: `/${locale === "ar" ? "" : "en"}/products` },
    { label: locale === "ar" ? "الخدمات" : "Services", href: `/${locale === "ar" ? "" : "en"}/services` },
    { label: locale === "ar" ? "اتصل بنا" : "Contact", href: `/${locale === "ar" ? "" : "en"}/contact` },
  ];

  const products = locale === "ar"
    ? ["أجهزة التصوير الطبي", "أجهزة المراقبة", "أنظمة الأشعة", "التخدير والتنفس", "الأثاث الطبي"]
    : ["Medical Imaging", "Patient Monitoring", "X-Ray Systems", "Anesthesia", "Medical Furniture"];

  return (
    <footer className="relative bg-navy-900 text-white/50" dir={isRtl ? "rtl" : "ltr"}>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-500 font-bold text-sm">S</div>
              <p className="text-base font-semibold text-white">Sayun <span className="text-cyan-500">Medical</span></p>
            </div>
            <p className="text-sm text-white/35 leading-relaxed max-w-xs">
              {locale === "ar"
                ? "مؤسسة سيئون للأجهزة والمعدات الطبية — شريكك الموثوق في الرعاية الصحية منذ 1998."
                : "Sayun Corporation for Medical Appliances — Your trusted partner in healthcare since 1998."}
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-white/60 mb-5 uppercase tracking-[0.12em]">{t[locale].quick}</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/35 hover:text-cyan-500 transition-colors duration-200">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-white/60 mb-5 uppercase tracking-[0.12em]">{t[locale].products}</h4>
            <ul className="space-y-3">
              {products.map((p) => <li key={p}><span className="text-sm text-white/35">{p}</span></li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-white/60 mb-5 uppercase tracking-[0.12em]">{t[locale].contact}</h4>
            <ul className="space-y-3 text-sm text-white/35">
              <li>{locale === "ar" ? "شارع التحرير، صنعاء، اليمن" : "Al-Tahreer St, Sana'a, Yemen"}</li>
              <li><a href="tel:00967777033002" className="hover:text-cyan-500 transition-colors">00967-777-033-002</a></li>
              <li><a href="tel:009671274839" className="hover:text-cyan-500 transition-colors">00967-01-274839</a></li>
              <li><a href="mailto:info@sayunmedical.com" className="hover:text-cyan-500 transition-colors">info@sayunmedical.com</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/20">
          <p>&copy; {new Date().getFullYear()} Sayun Medical Corporation. {t[locale].rights}</p>
        </div>
      </div>
    </footer>
  );
}
