"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { dictionary } from "@/lib/use-locale";

export default function ProductsPage() {
  const locale = useLocale() as "ar" | "en";
  const t = dictionary[locale];

  const categories = [
    {
      name: locale === "ar" ? "التصوير الطبي" : "Medical Imaging", brand: "Mindray", img: "/images/home_slider/1.jpg",
      items: locale === "ar" ? ["Cardiologia", "General Imaging", "OB/GYN", "POC", "Radiology"] : ["Cardiology", "General Imaging", "OB/GYN", "POC", "Radiology"],
    },
    {
      name: locale === "ar" ? "أجهزة المراقبة" : "Patient Monitoring", brand: "Mindray", img: "/images/gallery/patient_monitoring_systems/1.jpg",
      items: locale === "ar" ? ["أجهزة مراقبة", "أنظمة مركزية"] : ["Patient Monitors", "Central Station"],
    },
    {
      name: locale === "ar" ? "الأشعة" : "X-Ray Systems", brand: "JPI", img: "/images/gallery/x_ray/1.jpg",
      items: locale === "ar" ? ["أشعة رقمية", "أشعة متنقلة"] : ["Digital X-Ray", "Mobile X-Ray"],
    },
    {
      name: locale === "ar" ? "التخدير والتنفس" : "Anesthesia & Ventilators", brand: "Mindray", img: "/images/gallery/anesthesia_machines/1.jpg",
      items: locale === "ar" ? ["أجهزة تخدير", "أجهزة تنفس"] : ["Anesthesia Machines", "Ventilators"],
    },
    {
      name: locale === "ar" ? "الأثاث الطبي" : "Medical Furniture", brand: locale === "ar" ? "متنوع" : "Various", img: "/images/gallery/furniture/hospital_bed/1.jpg",
      items: locale === "ar" ? ["أسرة مستشفيات", "عربات", "خزائن"] : ["Hospital Beds", "Trolleys", "Cabinets"],
    },
    {
      name: locale === "ar" ? "الحاضنات" : "Incubators & Warmers", brand: locale === "ar" ? "متنوع" : "Various", img: "/images/gallery/incubator_and_warmer/1.jpg",
      items: locale === "ar" ? ["حاضنات", "مدافئ"] : ["Incubators", "Warmers"],
    },
  ];

  const L = locale === "ar" ? "" : "en";

  return (
    <div className="flex min-h-screen flex-col bg-white" dir={locale === "ar" ? "rtl" : "ltr"}>
      <Nav />
      <main>
        <section className="relative pt-32 pb-20 bg-[#0B293B] overflow-hidden">
          <div className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-[#C8A44E]/5 blur-[100px]" />
          <div className="mx-auto max-w-7xl px-6 text-center relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C8A44E] mb-4">{t.productsTitle}</p>
            <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-white leading-tight mb-4">{t.productsHero}</h1>
            <p className="text-base text-white/50 max-w-xl mx-auto">{t.productsSub}</p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="space-y-4">
              {categories.map((cat) => (
                <details key={cat.name} className="group rounded-xl border border-[#0A5C7E]/10 open:border-[#C8A44E]/30 open:shadow-md transition-all duration-300 overflow-hidden">
                  <summary className="flex items-center gap-4 p-5 cursor-pointer hover:bg-[#0A5C7E]/[0.02] transition-colors list-none">
                    <div className="w-14 h-14 rounded-lg bg-[#0A5C7E]/5 overflow-hidden shrink-0">
                      <img src={cat.img} alt="" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-[#0B293B]">{cat.name}</h3>
                      <p className="text-xs text-[#0A5C7E]/40">{cat.brand} — {cat.items.length} {locale === "ar" ? "أصناف" : "items"}</p>
                    </div>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#0A5C7E]/30 group-open:rotate-90 transition-transform duration-200 shrink-0"><path d="M9 18l6-6-6-6"/></svg>
                  </summary>
                  <div className="px-5 pb-5 pt-3 border-t border-[#0A5C7E]/5">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-3">
                      {cat.items.map((item: string) => (
                        <Link key={item} href={`/${L}/contact`} className="flex items-center gap-2 rounded-lg bg-[#0A5C7E]/5 px-3.5 py-2.5 text-xs text-[#0A5C7E]/70 hover:bg-[#C8A44E]/10 hover:text-[#C8A44E] transition-all duration-200">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={locale === "ar" ? "rotate-180" : ""}><path d="M9 18l6-6-6-6"/></svg>
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

        <section className="py-24 bg-[#0B293B]">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">{t.productsNotFound}</h2>
            <p className="text-sm text-white/50 mb-8">{t.productsNotFoundSub}</p>
            <Link href={`/${L}/contact`} className="inline-flex items-center gap-2 rounded-full bg-[#C8A44E] px-7 py-3 text-sm font-semibold text-[#0B293B] hover:bg-[#C8A44E]/90 active:scale-[0.97] transition-all duration-200 shadow-lg shadow-[#C8A44E]/20">
              {t.productsCta}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
