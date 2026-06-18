"use client";

import Link from "next/link";
import { useLocale } from "next-intl";

export default function Footer() {
  const locale = useLocale();
  const isRtl = locale === "ar";

  const t: Record<string, Record<string, string>> = {
    ar: { about: "عن سيئون", quick: "روابط سريعة", products: "منتجاتنا", contact: "اتصل بنا", rights: "جميع الحقوق محفوظة.", built: "تصميم وتطوير" },
    en: { about: "About Sayun", quick: "Quick Links", products: "Our Products", contact: "Contact Us", rights: "All rights reserved.", built: "Designed & Built with" },
  };

  const links = [
    { key: "home", label: locale === "ar" ? "الرئيسية" : "Home", href: `/${locale === "ar" ? "" : "en"}` },
    { key: "about", label: locale === "ar" ? "من نحن" : "About", href: `/${locale === "ar" ? "" : "en"}/about` },
    { key: "products", label: locale === "ar" ? "المنتجات" : "Products", href: `/${locale === "ar" ? "" : "en"}/products` },
    { key: "services", label: locale === "ar" ? "الخدمات" : "Services", href: `/${locale === "ar" ? "" : "en"}/services` },
    { key: "contact", label: locale === "ar" ? "اتصل بنا" : "Contact", href: `/${locale === "ar" ? "" : "en"}/contact` },
  ];

  const products = locale === "ar"
    ? ["التصوير الطبي", "أجهزة المراقبة", "الأشعة", "التخدير والتنفس", "الأثاث الطبي"]
    : ["Medical Imaging", "Patient Monitoring", "X-Ray", "Anesthesia", "Medical Furniture"];

  return (
    <footer className="relative bg-[#0B293B] text-white/60" dir={isRtl ? "rtl" : "ltr"}>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C8A44E]/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-white font-bold text-sm">S</div>
              <p className="text-base font-semibold text-white">Sayun <span className="text-[#C8A44E]">Medical</span></p>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              {locale === "ar"
                ? "مؤسسة سيئون للأجهزة والمعدات الطبية — شريكك الموثوق في الرعاية الصحية منذ 1998"
                : "Sayun Corporation for Medical Appliances — Your trusted partner in healthcare since 1998."}
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-white/80 mb-5 uppercase tracking-widest">{t[locale].quick}</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.key}>
                  <Link href={link.href} className="text-sm text-white/40 hover:text-[#C8A44E] transition-colors duration-200">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-white/80 mb-5 uppercase tracking-widest">{t[locale].products}</h4>
            <ul className="space-y-3">
              {products.map((p) => (
                <li key={p}><span className="text-sm text-white/40">{p}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-white/80 mb-5 uppercase tracking-widest">{t[locale].contact}</h4>
            <ul className="space-y-3 text-sm text-white/40">
              <li>{locale === "ar" ? "شارع التحرير، صنعاء، اليمن" : "Al-Tahreer St, Sana'a, Yemen"}</li>
              <li><a href="tel:00967777033002" className="hover:text-[#C8A44E] transition-colors">00967-777-033-002</a></li>
              <li><a href="tel:009671274839" className="hover:text-[#C8A44E] transition-colors">00967-01-274839</a></li>
              <li><a href="mailto:info@sayunmedical.com" className="hover:text-[#C8A44E] transition-colors">info@sayunmedical.com</a></li>
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
