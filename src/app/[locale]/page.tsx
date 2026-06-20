"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { dictionary } from "@/lib/use-locale";
import { useScrollReveal, useStaggerReveal, useCountUp } from "@/lib/animations";
import { useRef } from "react";

const partnerLogos = [
  { name: "Mindray", slug: "mindray" },
  { name: "JPI", slug: "jpi" },
  { name: "EMED", slug: "emed" },
  { name: "KENLIF", slug: "kenlif" },
  { name: "TMW", slug: "tmw" },
];

const testimonials = [
  {
    quoteAr: "تعاملنا مع مؤسسة سيئون الطبية كان مثالياً في الاحترافية والجودة. أوصي بهم بشدة.",
    quoteEn: "Working with Sayun Medical was a model of professionalism and quality. Highly recommended.",
    nameAr: "د. أحمد الغبيري",
    nameEn: "Dr. Ahmed Al-Ghubairi",
    roleAr: "مدير مستشفى",
    roleEn: "Hospital Director",
  },
  {
    quoteAr: "أفضل شريك في توريد الأجهزة الطبية. خدمات ما بعد البيع ممتازة وفريق دعم محترف.",
    quoteEn: "The best partner for medical equipment supply. Excellent after-sales service and professional support team.",
    nameAr: "د. محمد الحميدي",
    nameEn: "Dr. Mohammed Al-Humaidi",
    roleAr: "استشاري جراحة",
    roleEn: "Surgery Consultant",
  },
  {
    quoteAr: "منذ 2012 ونحن نعتمد على سيئون الطبية في تجهيز أقسامنا. التزامهم بالمواعيد والجودة لا يُضاهى.",
    quoteEn: "Since 2012 we've relied on Sayun Medical for our department equipment. Their commitment to timelines and quality is unmatched.",
    nameAr: "د. عبدالله السقاف",
    nameEn: "Dr. Abdullah Al-Saqqaf",
    roleAr: "نائب مدير مستشفى",
    roleEn: "Deputy Hospital Director",
  },
];

function StatItem({ value, label, locale }: { value: string; label: string; locale: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const numVal = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/[0-9]/g, "");

  useCountUp(ref, numVal, suffix);

  return (
    <div className="stat-item flex flex-col items-center justify-center py-8 md:py-10 px-2 text-center">
      <span className="text-2xl md:text-3xl font-bold text-navy-800">
        <span ref={ref}>0</span>
      </span>
      <span className="text-[10px] text-navy-500/60 mt-1.5 font-medium uppercase tracking-wider">{label}</span>
    </div>
  );
}

export default function HomePage() {
  const locale = useLocale() as "ar" | "en";
  const t = dictionary[locale];
  const L = locale === "ar" ? "" : "en";

  const whoRef = useScrollReveal<HTMLDivElement>();
  const prodRef = useStaggerReveal<HTMLDivElement>();
  const svcRef = useStaggerReveal<HTMLDivElement>();
  const statsRef = useScrollReveal<HTMLDivElement>({ from: { opacity: 0, y: 20 }, to: { duration: 0.8, ease: "power2.out" } });
  const partnersRef = useScrollReveal<HTMLDivElement>();
  const ctaRef = useScrollReveal<HTMLDivElement>();
  const testimonialRef = useStaggerReveal<HTMLDivElement>({ stagger: 0.12 });

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
        <section ref={statsRef} className="relative z-20 -mt-10">
          <div className="mx-auto max-w-5xl px-6">
            <div className="rounded-2xl bg-white shadow-xl shadow-navy-900/5 border border-navy-200/10 overflow-hidden">
              <div className="grid grid-cols-2 md:grid-cols-5">
                {t.stats.map((s: { label: string; value: string }) => (
                  <StatItem key={s.label} value={s.value} label={s.label} locale={locale} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHO WE ARE */}
        <section ref={whoRef} className="py-28 md:py-36">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-2 gap-14 md:gap-20 items-center">
              <div className={locale === "ar" ? "order-2 lg:order-1" : ""}>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-500 mb-4">{t.whoEyebrow}</p>
                <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-navy-900 leading-tight mb-6">{t.whoTitle}</h2>
                <p className="text-base text-navy-600/70 leading-relaxed mb-8">{t.whoDesc}</p>
                <div className="flex flex-wrap gap-3">
                  {t.whoTags.map((tag: string) => (
                    <span key={tag} className="inline-flex items-center gap-2 rounded-md bg-cyan-50 px-4 py-2 text-xs font-medium text-navy-700 card-shine">
                      <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-500" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className={`${locale === "ar" ? "order-1 lg:order-2" : ""} relative`}>
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <img src="/images/7.jpg" alt="Sayun Medical" className="w-full aspect-[4/3] object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-cyan-500/10 -z-10 hidden lg:block" />
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-xl bg-navy-100 -z-10 hidden lg:block" />
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
            <div ref={prodRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {products.map((p) => (
                <Link key={p.name} href={`/${L}/products`}
                  className="group rounded-xl bg-white border border-navy-200/20 hover:border-cyan-500/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 overflow-hidden card-shine">
                  <div className="aspect-[16/9] bg-gray-100 overflow-hidden">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
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
            <div ref={svcRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-xl overflow-hidden bg-navy-200/20">
              {t.svcItems.map((svc: { title: string; desc: string }) => (
                <div key={svc.title} className="bg-white p-8 md:p-10 transition-all duration-200 hover:bg-cyan-50/50 group">
                  <div className="w-10 h-10 rounded-md bg-cyan-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#13B5EA" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <h3 className="text-base font-semibold text-navy-900 mb-2">{svc.title}</h3>
                  <p className="text-sm text-navy-500/60 leading-relaxed">{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-28 md:py-36 bg-gray-50/80">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-xl mx-auto mb-14">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-500 mb-4">
                {locale === "ar" ? "شهادات العملاء" : "Testimonials"}
              </p>
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-navy-900 leading-tight mb-4">
                {locale === "ar" ? "ماذا يقول عملاؤنا" : "What Our Clients Say"}
              </h2>
            </div>
            <div ref={testimonialRef} className="grid md:grid-cols-3 gap-6">
              {testimonials.map((item, i) => (
                <div key={i} className="rounded-xl bg-white p-8 border border-navy-200/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                  </div>
                  <p className="text-sm text-navy-600/70 leading-relaxed mb-6 mt-2">
                    {locale === "ar" ? item.quoteAr : item.quoteEn}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center text-xs font-bold text-cyan-600">
                      {locale === "ar" ? item.nameAr.charAt(0) : item.nameEn.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy-900">{locale === "ar" ? item.nameAr : item.nameEn}</p>
                      <p className="text-xs text-navy-400">{locale === "ar" ? item.roleAr : item.roleEn}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PARTNERS */}
        <section ref={partnersRef} className="py-20 bg-white border-t border-navy-200/10 border-b">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-navy-400 mb-10">{t.partnersTitle}</p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {partnerLogos.map((partner) => (
                <div key={partner.name} className="partner-logo-card w-28 h-20 rounded-lg bg-gray-50 border border-navy-200/10 flex items-center justify-center hover:shadow-md hover:border-cyan-500/20 transition-all duration-200 group">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-8 h-8 rounded-md bg-navy-800 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">{partner.name.charAt(0)}</span>
                    </div>
                    <span className="text-[10px] font-semibold text-navy-400 group-hover:text-navy-600 transition-colors">{partner.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section ref={ctaRef} className="relative py-28 md:py-36 overflow-hidden bg-navy-900">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-cyan-500/5 blur-[150px]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
          <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
            <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-bold text-white leading-tight mb-4">{t.ctaTitle}</h2>
            <p className="text-base text-white/45 mb-8 max-w-md mx-auto">{t.ctaSub}</p>
            <Link href={`/${L}/contact`}
              className="group inline-flex items-center gap-3 rounded-full bg-cyan-500 px-10 py-4 text-base font-semibold text-white hover:bg-cyan-400 btn-press transition-all duration-200 shadow-lg shadow-cyan-500/20">
              {t.ctaBtn}
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d={locale === "ar" ? "M19 12H5M12 19l-7-7 7-7" : "M5 12h14M12 5l7 7-7 7"} />
                </svg>
              </span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
