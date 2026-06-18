"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { dictionary } from "@/lib/use-locale";

export default function ProductsPage() {
  const locale = useLocale() as "ar" | "en";
  const t = dictionary[locale];
  const L = locale === "ar" ? "" : "en";

  const categories = [
    { name: locale === "ar" ? "التصوير الطبي" : "Medical Imaging", brand: "Mindray", img: "/images/home_slider/1.jpg",
      items: locale === "ar" ? ["Cardiologia", "General Imaging", "OB/GYN", "POC", "Radiology"] : ["Cardiology", "General Imaging", "OB/GYN", "POC", "Radiology"] },
    { name: locale === "ar" ? "أجهزة المراقبة" : "Patient Monitoring", brand: "Mindray", img: "/images/gallery/patient_monitoring_systems/1.jpg",
      items: locale === "ar" ? ["أجهزة مراقبة", "أنظمة مركزية"] : ["Patient Monitors", "Central Station"] },
    { name: locale === "ar" ? "أنظمة الأشعة" : "X-Ray Systems", brand: "JPI", img: "/images/gallery/x_ray/1.jpg",
      items: locale === "ar" ? ["أشعة رقمية", "أشعة متنقلة"] : ["Digital X-Ray", "Mobile X-Ray"] },
    { name: locale === "ar" ? "التخدير والتنفس" : "Anesthesia & Ventilators", brand: "Mindray", img: "/images/gallery/anesthesia_machines/1.jpg",
      items: locale === "ar" ? ["أجهزة تخدير", "أجهزة تنفس"] : ["Anesthesia Machines", "Ventilators"] },
    { name: locale === "ar" ? "الأثاث الطبي" : "Medical Furniture", brand: locale === "ar" ? "متنوع" : "Various", img: "/images/gallery/furniture/hospital_bed/1.jpg",
      items: locale === "ar" ? ["أسرة مستشفيات", "عربات طبية", "خزائن"] : ["Hospital Beds", "Medical Trolleys", "Cabinets"] },
    { name: locale === "ar" ? "الحاضنات والمدافئ" : "Incubators & Warmers", brand: locale === "ar" ? "متنوع" : "Various", img: "/images/gallery/incubator_and_warmer/1.jpg",
      items: locale === "ar" ? ["حاضنات أطفال", "مدافئ"] : ["Infant Incubators", "Patient Warmers"] },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white" dir={locale === "ar" ? "rtl" : "ltr"}>
      <Nav />
      <main>
        <section className="relative pt-32 pb-20 bg-navy-900 overflow-hidden">
          <div className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-cyan-500/5 blur-[100px]" />
          <div className="mx-auto max-w-7xl px-6 text-center relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-500 mb-4">{t.productsTitle}</p>
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-tight mb-4">{t.productsHero}</h1>
            <p className="text-base text-white/45 max-w-xl mx-auto">{t.productsSub}</p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="relative mb-10 max-w-md">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-300/50"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
              <input type="text" placeholder={t.productsSearch}
                className="w-full rounded-lg border border-navy-200/20 pl-10 pr-4 py-3 text-sm text-navy-900 placeholder:text-navy-300/50 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/10 transition-all duration-200" />
            </div>
            <div className="space-y-3">
              {categories.map((cat) => (
                <details key={cat.name} className="group rounded-lg border border-navy-200/20 open:border-cyan-500/30 open:shadow-sm transition-all duration-200 overflow-hidden">
                  <summary className="flex items-center gap-4 p-5 cursor-pointer hover:bg-cyan-50/30 transition-colors list-none">
                    <div className="w-14 h-14 rounded-md bg-gray-100 overflow-hidden shrink-0">
                      <img src={cat.img} alt="" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-navy-900">{cat.name}</h3>
                      <p className="text-xs text-navy-400">{cat.brand} — {cat.items.length} {locale === "ar" ? "أصناف" : "items"}</p>
                    </div>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-navy-300/50 group-open:rotate-90 transition-transform duration-200 shrink-0"><path d="M9 18l6-6-6-6"/></svg>
                  </summary>
                  <div className="px-5 pb-5 pt-3 border-t border-navy-200/10">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-3">
                      {cat.items.map((item: string) => (
                        <Link key={item} href={`/${L}/contact`} className="flex items-center gap-2 rounded-md bg-cyan-50/50 px-3.5 py-2.5 text-xs text-navy-700 hover:bg-cyan-50 hover:text-cyan-700 transition-all duration-200">
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-navy-900">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">{t.productsNotFound}</h2>
            <p className="text-sm text-white/45 mb-8">{t.productsNotFoundSub}</p>
            <Link href={`/${L}/contact`} className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-7 py-3 text-sm font-semibold text-white hover:bg-cyan-400 active:scale-[0.97] transition-all duration-200 shadow-md">
              {t.productsCta}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
