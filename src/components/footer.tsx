"use client";

import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";

export default function Footer() {
  const locale = useLocale();
  const isRtl = locale === "ar";

  const links = [
    { label: locale === "ar" ? "الرئيسية" : "Home", href: "/" as const },
    { label: locale === "ar" ? "من نحن" : "About", href: "/about" as const },
    { label: locale === "ar" ? "المنتجات" : "Products", href: "/products" as const },
    { label: locale === "ar" ? "الخدمات" : "Services", href: "/services" as const },
    { label: locale === "ar" ? "اتصل بنا" : "Contact", href: "/contact" as const },
  ];

  const prodList = locale === "ar"
    ? ["أجهزة التصوير الطبي", "أجهزة المراقبة", "أنظمة الأشعة", "التخدير والتنفس", "الأثاث الطبي", "الحاضنات"]
    : ["Medical Imaging", "Patient Monitoring", "X-Ray Systems", "Anesthesia", "Medical Furniture", "Incubators"];

  return (
    <footer className="relative bg-navy-900 text-white/50" dir={isRtl ? "rtl" : "ltr"}>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-0">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-cyan-500/10 text-cyan-500 font-bold text-base">S</div>
              <div>
                <p className="text-base font-semibold text-white">Sayun <span className="text-cyan-500">Medical</span></p>
                <p className="text-[10px] text-white/30 tracking-[0.12em] uppercase">Corporation</p>
              </div>
            </div>
            <p className="text-sm text-white/30 leading-relaxed max-w-xs mb-7">
              {locale === "ar"
                ? "مؤسسة سيئون للأجهزة والمعدات الطبية — شريكك الموثوق في الرعاية الصحية منذ 1998."
                : "Sayun Corporation for Medical Appliances — Your trusted partner in healthcare since 1998."}
            </p>
            <div className="flex items-center gap-2.5">
              {[
                { icon: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z", href: "https://wa.me/967777033002", label: "WhatsApp" },
                { icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z/polyline points=22,6 12,13 2,6", href: "mailto:info@sayunmedical.com", label: "Email" },
                { icon: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z", href: "tel:00967777033002", label: "Phone" },
                { icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z", href: "https://facebook.com/sayunmedical", label: "Facebook" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-cyan-500/15 flex items-center justify-center transition-all duration-300 group">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                    className="text-white/30 group-hover:text-cyan-500 transition-colors duration-300">
                    {s.icon.includes("polyline") ? (
                      <>
                        <path d={s.icon.split("/polyline")[0]} />
                        <polyline points={s.icon.split("=")[1]} />
                      </>
                    ) : s.label === "WhatsApp" ? (
                      <path fill="currentColor" d={s.icon} />
                    ) : (
                      <path d={s.icon} />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white/60 mb-6 uppercase tracking-[0.15em]">
              {locale === "ar" ? "روابط سريعة" : "Quick Links"}
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/30 hover:text-cyan-500 transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white/60 mb-6 uppercase tracking-[0.15em]">
              {locale === "ar" ? "منتجاتنا" : "Products"}
            </h4>
            <ul className="space-y-3">
              {prodList.map((p) => (
                <li key={p} className="text-sm text-white/30">{p}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white/60 mb-6 uppercase tracking-[0.15em]">
              {locale === "ar" ? "اتصل بنا" : "Contact"}
            </h4>
            <ul className="space-y-4 text-sm text-white/30">
              <li className="flex items-start gap-3">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0 mt-0.5 text-cyan-500/50"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                {locale === "ar" ? "شارع التحرير، صنعاء، اليمن" : "Al-Tahreer St, Sana'a, Yemen"}
              </li>
              <li className="flex items-center gap-3">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0 text-cyan-500/50"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                <a href="tel:00967777033002" className="hover:text-cyan-500 transition-colors">00967-777-033-002</a>
              </li>
              <li className="flex items-center gap-3">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0 text-cyan-500/50"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <a href="mailto:info@sayunmedical.com" className="hover:text-cyan-500 transition-colors">info@sayunmedical.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/15 pb-10">
          <p>&copy; {new Date().getFullYear()} Sayun Medical Corporation. {locale === "ar" ? "جميع الحقوق محفوظة." : "All rights reserved."}</p>
          <p>{locale === "ar" ? "تصميم وتطوير" : "Designed & Built"} <span className="text-cyan-500/50 mx-1">&hearts;</span></p>
        </div>
      </div>
    </footer>
  );
}
