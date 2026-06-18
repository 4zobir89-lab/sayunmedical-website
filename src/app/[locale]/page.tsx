"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { dictionary } from "@/lib/use-locale";

export default function HomePage() {
  const locale = useLocale() as "ar" | "en";
  const t = dictionary[locale];
  const L = locale === "ar" ? "" : "en";
  const products = [
    { name: locale === "ar" ? "التصوير الطبي" : "Medical Imaging", brand: "Mindray", img: "/images/home_slider/1.jpg" },
    { name: locale === "ar" ? "أجهزة المراقبة" : "Patient Monitoring", brand: "Mindray", img: "/images/gallery/patient_monitoring_systems/1.jpg" },
    { name: locale === "ar" ? "أنظمة الأشعة" : "X-Ray Systems", brand: "JPI", img: "/images/gallery/x_ray/1.jpg" },
    { name: locale === "ar" ? "التخدير والتنفس" : "Anesthesia & Ventilators", brand: "Mindray", img: "/images/gallery/anesthesia_machines/1.jpg" },
    { name: locale === "ar" ? "الأثاث الطبي" : "Medical Furniture", brand: "Various", img: "/images/gallery/furniture/hospital_bed/1.jpg" },
    { name: locale === "ar" ? "الحاضنات" : "Incubators & Warmers", brand: "Various", img: "/images/gallery/incubator_and_warmer/1.jpg" },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white" dir={locale === "ar" ? "rtl" : "ltr"}>
      <Nav />

      <main>
        <Hero locale={locale} t={t} L={L} />

        {/* STATS */}
        <section className="relative z-20 -mt-10">
          <div className="mx-auto max-w-5xl px-6">
            <div className="rounded-xl bg-white shadow-lg border border-navy-200/10 overflow-hidden">
              <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-navy-200/10">
                {t.stats.map((s: { label: string; value: string }) => (
                  <div key={s.label} className="flex flex-col items-center justify-center py-8 md:py-10 px-2 text-center">
                    <span className="text-2xl md:text-3xl font-bold text-navy-800">{s.value}</span>
                    <span className="text-[10px] text-navy-500/60 mt-1.5 font-medium uppercase tracking-wider">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="py-28 md:py-36">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-2 gap-14 md:gap-20 items-center">
              <div className={locale === "ar" ? "order-2 lg:order-1" : ""}>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-500 mb-4">{t.whoEyebrow}</p>
                <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-navy-900 leading-tight mb-6">{t.whoTitle}</h2>
                <p className="text-base text-navy-600/70 leading-relaxed mb-8">{t.whoDesc}</p>
                <div className="flex flex-wrap gap-3">
                  {t.whoTags.map((tag: string) => (
                    <span key={tag} className="inline-flex items-center gap-2 rounded-md bg-cyan-50 px-4 py-2 text-xs font-medium text-navy-700">
                      <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-500" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className={`${locale === "ar" ? "order-1 lg:order-2" : ""}`}>
                <img src="/images/7.jpg" alt="Sayun Medical" className="w-full aspect-[4/3] object-cover rounded-xl" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="py-28 md:py-36 bg-gray-50/80">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-xl mx-auto mb-14">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-500 mb-4">{t.prodEyebrow}</p>
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-navy-900 leading-tight mb-4">{t.prodTitle}</h2>
              <p className="text-sm text-navy-500/60">{t.prodDesc}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {products.map((p) => (
                <Link key={p.name} href={`/${L}/products`}
                  className="group rounded-xl bg-white border border-navy-200/20 hover:border-cyan-500/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 overflow-hidden">
                  <div className="aspect-[16/9] bg-gray-100 overflow-hidden">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                  </div>
                  <div className="p-5">
                    <h3 className="text-sm font-semibold text-navy-900 mb-0.5">{p.name}</h3>
                    <p className="text-xs text-cyan-500 font-medium">{p.brand}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href={`/${L}/products`}
                className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-8 py-3.5 text-sm font-semibold text-white hover:bg-navy-800 btn-press transition-all duration-200">
                {t.prodViewAll}
              </Link>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-28 md:py-36">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-xl mx-auto mb-14">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-500 mb-4">{t.svcEyebrow}</p>
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-navy-900 leading-tight mb-4">{t.svcTitle}</h2>
              <p className="text-sm text-navy-500/60">{t.svcDesc}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-xl overflow-hidden bg-navy-200/20">
              {t.svcItems.map((svc: { title: string; desc: string }) => (
                <div key={svc.title} className="bg-white p-8 md:p-10 transition-all duration-200 hover:bg-cyan-50/50">
                  <div className="w-10 h-10 rounded-md bg-cyan-50 flex items-center justify-center mb-5">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#13B5EA" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <h3 className="text-base font-semibold text-navy-900 mb-2">{svc.title}</h3>
                  <p className="text-sm text-navy-500/60 leading-relaxed">{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PARTNERS */}
        <section className="py-16 bg-gray-50/80 border-t border-navy-200/10 border-b">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-navy-400 mb-8">{t.partnersTitle}</p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {["Mindray", "JPI", "EMED", "KENLIF", "TMW"].map((name) => (
                <span key={name} className="text-lg font-bold tracking-tight text-navy-300/30 hover:text-navy-400/50 transition-colors duration-200">{name}</span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-28 md:py-36 overflow-hidden bg-navy-900">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-cyan-500/5 blur-[150px]" />
          <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
            <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-bold text-white leading-tight mb-4">{t.ctaTitle}</h2>
            <p className="text-base text-white/45 mb-8 max-w-md mx-auto">{t.ctaSub}</p>
            <Link href={`/${L}/contact`}
              className="inline-flex items-center gap-3 rounded-full bg-cyan-500 px-10 py-4 text-base font-semibold text-white hover:bg-cyan-400 btn-press transition-all duration-200 shadow-lg shadow-cyan-500/20">
              {t.ctaBtn}
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
