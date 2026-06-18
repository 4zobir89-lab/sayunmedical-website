"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { dictionary } from "@/lib/use-locale";

function RevealSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); observer.unobserve(el); } },
      { threshold: 0.1 }
    );
    el.querySelectorAll(".reveal").forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={className}>{children}</div>;
}

export default function HomePage() {
  const locale = useLocale() as "ar" | "en";
  const t = dictionary[locale];
  const L = locale === "ar" ? "" : "en";

  const products = [
    { name: locale === "ar" ? "التصوير الطبي" : "Medical Imaging", brand: "Mindray", img: "/images/home_slider/1.jpg" },
    { name: locale === "ar" ? "أجهزة المراقبة" : "Patient Monitoring", brand: "Mindray", img: "/images/gallery/patient_monitoring_systems/1.jpg" },
    { name: locale === "ar" ? "أنظمة الأشعة" : "X-Ray Systems", brand: "JPI", img: "/images/gallery/x_ray/1.jpg" },
    { name: locale === "ar" ? "التخدير والتنفس" : "Anesthesia", brand: "Mindray", img: "/images/gallery/anesthesia_machines/1.jpg" },
    { name: locale === "ar" ? "الأثاث الطبي" : "Medical Furniture", brand: "Various", img: "/images/gallery/furniture/hospital_bed/1.jpg" },
    { name: locale === "ar" ? "الحاضنات" : "Incubators & Warmers", brand: "Various", img: "/images/gallery/incubator_and_warmer/1.jpg" },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white" dir={locale === "ar" ? "rtl" : "ltr"}>
      <Nav />
      <main>
        <Hero locale={locale} t={t} L={L} />

        {/* STATS */}
        <RevealSection>
          <section className="relative z-20 -mt-10">
            <div className="mx-auto max-w-5xl px-6">
              <div className="card-shell">
                <div className="card-core">
                  <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-navy-200/10">
                    {t.stats.map((s: { label: string; value: string }) => (
                      <div key={s.label} className="flex flex-col items-center justify-center py-8 md:py-10 px-2 text-center">
                        <span className="text-2xl md:text-3xl font-bold text-navy-800">{s.value}</span>
                        <span className="text-[10px] text-navy-500/60 mt-1.5 font-medium uppercase tracking-[0.12em]">{s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </RevealSection>

        {/* WHO WE ARE */}
        <RevealSection>
          <section className="py-28 md:py-36">
            <div className="mx-auto max-w-7xl px-6">
              <div className="grid lg:grid-cols-2 gap-14 md:gap-20 items-center">
                <div className={locale === "ar" ? "order-2 lg:order-1" : ""}>
                  <p className="reveal text-xs font-semibold uppercase tracking-[0.12em] text-cyan-500 mb-4">{t.whoEyebrow}</p>
                  <h2 className="reveal text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-navy-900 leading-tight mb-6" style={{ transitionDelay: "100ms" }}>{t.whoTitle}</h2>
                  <p className="reveal text-base text-navy-600/70 leading-relaxed mb-8" style={{ transitionDelay: "200ms" }}>{t.whoDesc}</p>
                  <div className="reveal flex flex-wrap gap-3" style={{ transitionDelay: "300ms" }}>
                    {t.whoTags.map((tag: string) => (
                      <span key={tag} className="inline-flex items-center gap-2 rounded-md bg-cyan-50 px-4 py-2 text-xs font-medium text-navy-700">
                        <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-500" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={`${locale === "ar" ? "order-1 lg:order-2" : ""} reveal`} style={{ transitionDelay: "150ms" }}>
                  <div className="card-shell">
                    <div className="card-core overflow-hidden">
                      <img src="/images/7.jpg" alt="Sayun Medical" className="w-full aspect-[4/3] object-cover"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </RevealSection>

        {/* PRODUCTS */}
        <RevealSection>
          <section className="py-28 md:py-36 bg-gray-50/80">
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center max-w-xl mx-auto mb-14">
                <p className="reveal text-xs font-semibold uppercase tracking-[0.12em] text-cyan-500 mb-4">{t.prodEyebrow}</p>
                <h2 className="reveal text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-navy-900 leading-tight mb-4" style={{ transitionDelay: "100ms" }}>{t.prodTitle}</h2>
                <p className="reveal text-sm text-navy-500/60" style={{ transitionDelay: "200ms" }}>{t.prodDesc}</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((p, i) => (
                  <Link key={p.name} href={`/${L}/products`}
                    className="card-shell group block reveal"
                    style={{ transitionDelay: `${i * 80}ms` }}>
                    <div className="card-core">
                      <div className="p-5">
                        <div className="img-zoom aspect-[16/9] rounded-md bg-gray-100 mb-4 overflow-hidden">
                          <img src={p.img} alt={p.name} className="w-full h-full object-cover"
                            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                        </div>
                        <h3 className="text-sm font-semibold text-navy-900 mb-0.5">{p.name}</h3>
                        <p className="text-xs text-cyan-500 font-medium">{p.brand}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="text-center mt-12">
                <Link href={`/${L}/products`}
                  className="group inline-flex items-center gap-3 rounded-full bg-navy-900 px-8 py-3.5 text-sm font-semibold text-white hover:bg-navy-800 active:scale-[0.96] transition-all duration-300">
                  {t.prodViewAll}
                  <span className="btn-icon-wrap">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d={locale === "ar" ? "M19 12H5M12 19l-7-7 7-7" : "M5 12h14M12 5l7 7-7 7"} />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </section>
        </RevealSection>

        {/* SERVICES */}
        <RevealSection>
          <section className="py-28 md:py-36">
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center max-w-xl mx-auto mb-14">
                <p className="reveal text-xs font-semibold uppercase tracking-[0.12em] text-cyan-500 mb-4">{t.svcEyebrow}</p>
                <h2 className="reveal text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-navy-900 leading-tight mb-4" style={{ transitionDelay: "100ms" }}>{t.svcTitle}</h2>
                <p className="reveal text-sm text-navy-500/60" style={{ transitionDelay: "200ms" }}>{t.svcDesc}</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-lg overflow-hidden bg-navy-200/20">
                {t.svcItems.map((svc: { title: string; desc: string }, i: number) => (
                  <div key={svc.title} className="reveal bg-white p-8 md:p-10 transition-all duration-300 hover:bg-cyan-50/50"
                    style={{ transitionDelay: `${i * 80}ms` }}>
                    <div className="w-10 h-10 rounded-md bg-cyan-50 flex items-center justify-center mb-5">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#13B5EA" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <h3 className="text-base font-semibold text-navy-900 mb-2">{svc.title}</h3>
                    <p className="text-sm text-navy-500/60 leading-relaxed">{svc.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </RevealSection>

        {/* PARTNERS */}
        <RevealSection>
          <section className="py-16 bg-gray-50/80 border-t border-navy-200/10 border-b">
            <div className="mx-auto max-w-7xl px-6 text-center">
              <p className="reveal text-xs font-semibold uppercase tracking-[0.12em] text-navy-400 mb-8">{t.partnersTitle}</p>
              <div className="reveal flex flex-wrap items-center justify-center gap-x-12 gap-y-6" style={{ transitionDelay: "100ms" }}>
                {["Mindray", "JPI", "EMED", "KENLIF", "TMW"].map((name) => (
                  <span key={name} className="text-lg font-bold tracking-tight text-navy-300/30 hover:text-navy-400/50 transition-colors duration-200">{name}</span>
                ))}
              </div>
            </div>
          </section>
        </RevealSection>

        {/* CTA */}
        <RevealSection>
          <section className="relative py-28 md:py-36 overflow-hidden bg-navy-900">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-cyan-500/5 blur-[150px]" />
            <div className="absolute inset-0 bg-dot-pattern" />
            <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
              <h2 className="reveal text-[clamp(1.8rem,3.5vw,2.5rem)] font-bold text-white leading-tight mb-4">{t.ctaTitle}</h2>
              <p className="reveal text-base text-white/45 mb-8 max-w-md mx-auto" style={{ transitionDelay: "100ms" }}>{t.ctaSub}</p>
              <div className="reveal" style={{ transitionDelay: "200ms" }}>
                <Link href={`/${L}/contact`}
                  className="group inline-flex items-center gap-3 rounded-full bg-cyan-500 px-10 py-4 text-base font-semibold text-white hover:bg-cyan-400 active:scale-[0.96] transition-all duration-500 shadow-lg shadow-cyan-500/20">
                  {t.ctaBtn}
                  <span className="btn-icon-wrap">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d={locale === "ar" ? "M19 12H5M12 19l-7-7 7-7" : "M5 12h14M12 5l7 7-7 7"} />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </section>
        </RevealSection>
      </main>
      <Footer />
    </div>
  );
}
