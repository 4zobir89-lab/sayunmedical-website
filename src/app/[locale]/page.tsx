"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { dictionary } from "@/lib/use-locale";

export default function HomePage() {
  const locale = useLocale() as "ar" | "en";
  const t = dictionary[locale];

  const products = [
    { name: locale === "ar" ? "التصوير الطبي" : "Medical Imaging", brand: "Mindray", img: "/images/home_slider/1.jpg" },
    { name: locale === "ar" ? "أجهزة المراقبة" : "Patient Monitoring", brand: "Mindray", img: "/images/gallery/patient_monitoring_systems/1.jpg" },
    { name: locale === "ar" ? "الأشعة" : "X-Ray Systems", brand: "JPI", img: "/images/gallery/x_ray/1.jpg" },
    { name: locale === "ar" ? "التخدير والتنفس" : "Anesthesia", brand: "Mindray", img: "/images/gallery/anesthesia_machines/1.jpg" },
    { name: locale === "ar" ? "الأثاث الطبي" : "Medical Furniture", brand: locale === "ar" ? "متنوع" : "Various", img: "/images/gallery/furniture/hospital_bed/1.jpg" },
    { name: locale === "ar" ? "الحاضنات" : "Incubators", brand: locale === "ar" ? "متنوع" : "Various", img: "/images/gallery/incubator_and_warmer/1.jpg" },
  ];

  const services = t.svcItems;
  const partners = ["Mindray", "JPI", "EMED", "KENLIF", "TMW"];

  return (
    <div className="flex min-h-screen flex-col bg-white" dir={locale === "ar" ? "rtl" : "ltr"}>
      <Nav />

      <main>
        {/* HERO */}
        <section className="relative min-h-[90dvh] flex items-center overflow-hidden bg-[#0B293B]">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-[#C8A44E]/5 blur-[120px]" />
            <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#0A5C7E]/20 blur-[120px]" />
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24 w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className={locale === "ar" ? "order-2 lg:order-1" : ""}>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#C8A44E]/20 bg-[#C8A44E]/5 px-4 py-1.5 text-xs font-medium text-[#C8A44E] mb-6">
                  <span className="flex h-1.5 w-1.5 rounded-full bg-[#C8A44E] animate-pulse" />
                  {t.heroBadge}
                </div>
                <h1 className="text-[clamp(2rem,5vw,4.5rem)] font-bold tracking-tight text-white leading-[1.05] mb-5">
                  {t.heroTitle}
                </h1>
                <p className="text-base sm:text-lg text-white/50 leading-relaxed max-w-lg mb-8">
                  {t.heroSub}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={`/${locale === "ar" ? "" : "en"}/contact`}
                    className="inline-flex items-center gap-2 rounded-full bg-[#C8A44E] px-7 py-3 text-sm font-semibold text-[#0B293B] hover:bg-[#C8A44E]/90 active:scale-[0.97] transition-all duration-200 shadow-xl shadow-[#C8A44E]/20"
                  >
                    {t.heroCta}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={locale === "ar" ? "rotate-180" : ""}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                  <Link
                    href={`/${locale === "ar" ? "" : "en"}/about`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3 text-sm font-medium text-white/70 hover:bg-white/5 hover:text-white transition-all duration-200"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8" fill="currentColor"/></svg>
                    {t.heroTour}
                  </Link>
                </div>
              </div>
              <div className={`${locale === "ar" ? "order-1 lg:order-2" : ""} relative`}>
                <img
                  src="/images/home_slider/1.jpg"
                  alt="Sayun Medical Equipment"
                  className="w-full aspect-[4/3] object-cover rounded-2xl shadow-2xl"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="relative z-20 -mt-10">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-[#0A5C7E]/10 rounded-2xl bg-white shadow-xl border border-[#0A5C7E]/5 overflow-hidden">
              {t.stats.map((s: { label: string; value: string }) => (
                <div key={s.label} className="flex flex-col items-center justify-center py-8 px-2 text-center">
                  <span className="text-2xl md:text-3xl font-bold text-[#0A5C7E]">{s.value}</span>
                  <span className="text-[10px] text-[#0A5C7E]/50 mt-1 font-medium uppercase tracking-wider">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div className={locale === "ar" ? "order-2 lg:order-1" : ""}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C8A44E] mb-4">{t.whoEyebrow}</p>
                <h2 className="text-[clamp(1.8rem,3.5vw,3.2rem)] font-bold text-[#0B293B] leading-tight mb-6">{t.whoTitle}</h2>
                <p className="text-base text-[#0A5C7E]/60 leading-relaxed mb-8">{t.whoDesc}</p>
                <div className="flex flex-wrap gap-3">
                  {t.whoTags.map((tag: string) => (
                    <span key={tag} className="inline-flex items-center gap-2 rounded-full bg-[#0A5C7E]/5 px-4 py-2 text-xs font-medium text-[#0A5C7E]">
                      <span className="flex h-1.5 w-1.5 rounded-full bg-[#C8A44E]" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className={`${locale === "ar" ? "order-1 lg:order-2" : ""} relative`}>
                <img src="/images/7.jpg" alt="Sayun Medical Team" className="w-full aspect-[4/3] object-cover rounded-2xl" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                <div className="absolute -bottom-5 -right-5 w-36 h-36 rounded-xl bg-[#C8A44E]/10 border border-[#C8A44E]/20" />
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="py-28 bg-[#0A5C7E]/[0.03]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-xl mx-auto mb-14">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C8A44E] mb-4">{t.prodEyebrow}</p>
              <h2 className="text-[clamp(1.8rem,3vw,3rem)] font-bold text-[#0B293B] leading-tight mb-4">{t.prodTitle}</h2>
              <p className="text-sm text-[#0A5C7E]/60">{t.prodDesc}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {products.map((p) => (
                <Link
                  key={p.name}
                  href={`/${locale === "ar" ? "" : "en"}/products`}
                  className="group relative rounded-xl bg-white p-5 border border-[#0A5C7E]/10 hover:border-[#C8A44E]/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 overflow-hidden"
                >
                  <div className="aspect-[16/9] rounded-lg bg-[#0A5C7E]/5 mb-4 overflow-hidden">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                  </div>
                  <h3 className="text-sm font-semibold text-[#0B293B] mb-0.5">{p.name}</h3>
                  <p className="text-xs text-[#C8A44E]">{p.brand}</p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href={`/${locale === "ar" ? "" : "en"}/products`} className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A5C7E] hover:text-[#C8A44E] transition-colors">
                {t.prodViewAll}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={locale === "ar" ? "rotate-180" : ""}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-xl mx-auto mb-14">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C8A44E] mb-4">{t.svcEyebrow}</p>
              <h2 className="text-[clamp(1.8rem,3vw,3rem)] font-bold text-[#0B293B] leading-tight mb-4">{t.svcTitle}</h2>
              <p className="text-sm text-[#0A5C7E]/60">{t.svcDesc}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-xl overflow-hidden bg-[#0A5C7E]/10">
              {services.map((svc: { title: string; desc: string }) => (
                <div key={svc.title} className="bg-white p-8 transition-all duration-300 hover:bg-[#0A5C7E]/[0.02]">
                  <div className="w-10 h-10 rounded-lg bg-[#C8A44E]/10 flex items-center justify-center mb-5">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8A44E" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <h3 className="text-base font-semibold text-[#0B293B] mb-2">{svc.title}</h3>
                  <p className="text-sm text-[#0A5C7E]/50 leading-relaxed">{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PARTNERS */}
        <section className="py-16 bg-[#0A5C7E]/[0.03] border-t border-[#0A5C7E]/5 border-b">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0A5C7E]/40 mb-8">{t.partnersTitle}</p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {partners.map((name) => (
                <span key={name} className="text-lg font-bold tracking-tight text-[#0A5C7E]/20 hover:text-[#0A5C7E]/40 transition-colors duration-300">{name}</span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-28 overflow-hidden bg-[#0B293B]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C8A44E]/5 blur-[120px]" />
          <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-bold text-white leading-tight mb-4">{t.ctaTitle}</h2>
            <p className="text-base text-white/50 mb-8 max-w-md mx-auto">{t.ctaSub}</p>
            <Link
              href={`/${locale === "ar" ? "" : "en"}/contact`}
              className="inline-flex items-center gap-2 rounded-full bg-[#C8A44E] px-8 py-3.5 text-sm font-semibold text-[#0B293B] hover:bg-[#C8A44E]/90 active:scale-[0.97] transition-all duration-200 shadow-xl shadow-[#C8A44E]/20"
            >
              {t.ctaBtn}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={locale === "ar" ? "rotate-180" : ""}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
