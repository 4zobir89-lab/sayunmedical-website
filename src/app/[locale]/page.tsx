"use client";

import Link from "next/link";
import { useRef } from "react";
import { useLocale } from "next-intl";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { dictionary } from "@/lib/use-locale";
import { useScrollFadeIn, useStaggerFadeIn, useCountUp } from "@/lib/animations";

const testimonials = [
  {
    quoteAr: "تعاملنا مع مؤسسة سيئون الطبية كان مثالياً في الاحترافية والجودة. أوصي بهم بشدة.",
    quoteEn: "Working with Sayun Medical was a model of professionalism and quality. Highly recommended.",
    nameAr: "د. أحمد الغبيري", nameEn: "Dr. Ahmed Al-Ghubairi",
    roleAr: "مدير مستشفى", roleEn: "Hospital Director",
  },
  {
    quoteAr: "أفضل شريك في توريد الأجهزة الطبية. خدمات ما بعد البيع ممتازة وفريق دعم محترف.",
    quoteEn: "The best partner for medical equipment supply. Excellent after-sales service.",
    nameAr: "د. محمد الحميدي", nameEn: "Dr. Mohammed Al-Humaidi",
    roleAr: "استشاري جراحة", roleEn: "Surgery Consultant",
  },
  {
    quoteAr: "منذ 2012 ونحن نعتمد عليهم في تجهيز أقسامنا. التزامهم بالمواعيد والجودة لا يُضاهى.",
    quoteEn: "Since 2012 we've relied on them for our equipment. Their commitment is unmatched.",
    nameAr: "د. عبدالله السقاف", nameEn: "Dr. Abdullah Al-Saqqaf",
    roleAr: "نائب مدير مستشفى", roleEn: "Deputy Hospital Director",
  },
];

const partners = ["Mindray", "JPI", "EMED", "KENLIF", "TMW"];

function StatTile({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const num = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/[0-9]/g, "");
  useCountUp(ref, num, suffix);

  return (
    <div className="flex flex-col items-center justify-center py-8 md:py-10 px-2 text-center">
      <span className="text-3xl md:text-4xl font-bold text-navy-800 tracking-tight">
        <span ref={ref}>0</span>
      </span>
      <span className="text-[10px] text-navy-500/50 mt-1.5 font-medium uppercase tracking-widest">{label}</span>
    </div>
  );
}

function PartnerLogo({ name }: { name: string }) {
  return (
    <div className="w-32 h-20 rounded-xl bg-white border border-navy-200/5 flex items-center justify-center hover:shadow-lg hover:border-cyan-500/15 transition-all duration-300 group">
      <div className="flex flex-col items-center gap-1.5">
        <div className="w-9 h-9 rounded-lg bg-navy-800 flex items-center justify-center group-hover:bg-cyan-500 transition-colors duration-300">
          <span className="text-sm font-bold text-white">{name.charAt(0)}</span>
        </div>
        <span className="text-[11px] font-semibold text-navy-400 group-hover:text-navy-600 transition-colors">{name}</span>
      </div>
    </div>
  );
}

export default function HomePage() {
  const locale = useLocale() as "ar" | "en";
  const t = dictionary[locale];
  const L = locale === "ar" ? "" : "en";

  const whoRef = useScrollFadeIn<HTMLDivElement>();
  const prodRef = useStaggerFadeIn<HTMLDivElement>({ stagger: 0.06 });
  const svcRef = useStaggerFadeIn<HTMLDivElement>();
  const testimonialRef = useStaggerFadeIn<HTMLDivElement>({ stagger: 0.1 });
  const partnersRef = useStaggerFadeIn<HTMLDivElement>({ stagger: 0.05 });
  const ctaRef = useScrollFadeIn<HTMLDivElement>();

  const products = [
    { name: locale === "ar" ? "التصوير الطبي" : "Medical Imaging", brand: "Mindray", img: "/images/home_slider/1.jpg" },
    { name: locale === "ar" ? "المراقبة" : "Patient Monitoring", brand: "Mindray", img: "/images/gallery/patient_monitoring_systems/1.jpg" },
    { name: locale === "ar" ? "أنظمة الأشعة" : "X-Ray Systems", brand: "JPI", img: "/images/gallery/x_ray/1.jpg" },
    { name: locale === "ar" ? "التخدير" : "Anesthesia", brand: "Mindray", img: "/images/gallery/anesthesia_machines/1.jpg" },
    { name: locale === "ar" ? "الأثاث الطبي" : "Medical Furniture", brand: "Various", img: "/images/gallery/furniture/hospital_bed/1.jpg" },
    { name: locale === "ar" ? "الحاضنات" : "Incubators", brand: "Various", img: "/images/gallery/incubator_and_warmer/1.jpg" },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white" dir={locale === "ar" ? "rtl" : "ltr"}>
      <div className="noise-overlay" />
      <Nav />

      <main>
        <Hero locale={locale} t={t} L={L} />

        <section className="relative z-20 -mt-10">
          <div className="mx-auto max-w-5xl px-6">
            <div className="double-bezel shadow-xl shadow-navy-900/5">
              <div className="double-bezel-inner">
                <div className="grid grid-cols-2 md:grid-cols-5">
                  {t.stats.map((s: { label: string; value: string }) => (
                    <StatTile key={s.label} value={s.value} label={s.label} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={whoRef} className="py-28 md:py-36">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className={locale === "ar" ? "order-2 lg:order-1" : ""}>
                <span className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-1.5 text-[11px] font-semibold text-cyan-600 uppercase tracking-widest mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                  {t.whoEyebrow}
                </span>
                <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-navy-900 leading-tight mb-6">{t.whoTitle}</h2>
                <p className="text-base text-navy-600/70 leading-relaxed mb-8 max-w-lg">{t.whoDesc}</p>
                <div className="flex flex-wrap gap-2.5">
                  {t.whoTags.map((tag: string) => (
                    <span key={tag} className="inline-flex items-center gap-2 rounded-lg bg-cyan-50/50 px-4 py-2 text-xs font-medium text-navy-700 border border-cyan-200/30">
                      <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-500" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className={`${locale === "ar" ? "order-1 lg:order-2" : ""} relative`}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img src="/images/7.jpg" alt="Sayun Medical" className="w-full aspect-[4/3] object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                </div>
                <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-cyan-500/10 -z-10 hidden lg:block" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-28 md:py-36 bg-gray-50/80">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-xl mx-auto mb-14">
              <span className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-1.5 text-[11px] font-semibold text-cyan-600 uppercase tracking-widest mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                {t.prodEyebrow}
              </span>
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-navy-900 leading-tight mb-4">{t.prodTitle}</h2>
              <p className="text-sm text-navy-500/60">{t.prodDesc}</p>
            </div>
            <div ref={prodRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p) => (
                <Link key={p.name} href={`/${L}/products`}
                  className="group rounded-2xl bg-white border border-navy-200/10 hover:border-cyan-500/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden card-shine">
                  <div className="aspect-[16/10] bg-gray-50 overflow-hidden">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                  </div>
                  <div className="p-6">
                    <p className="text-[11px] font-semibold text-cyan-500 uppercase tracking-wider mb-1">{p.brand}</p>
                    <h3 className="text-sm font-semibold text-navy-900 group-hover:text-cyan-600 transition-colors">{p.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href={`/${L}/products`}
                className="group inline-flex items-center gap-3 rounded-full bg-navy-900 px-8 py-3.5 text-sm font-semibold text-white hover:bg-navy-800 btn-press transition-all duration-300">
                {t.prodViewAll}
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/10 transition-transform group-hover:translate-x-0.5">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d={locale === "ar" ? "M19 12H5M12 19l-7-7 7-7" : "M5 12h14M12 5l7 7-7 7"} />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-28 md:py-36">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-xl mx-auto mb-14">
              <span className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-1.5 text-[11px] font-semibold text-cyan-600 uppercase tracking-widest mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                {t.svcEyebrow}
              </span>
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-navy-900 leading-tight mb-4">{t.svcTitle}</h2>
              <p className="text-sm text-navy-500/60">{t.svcDesc}</p>
            </div>
            <div ref={svcRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {t.svcItems.map((svc: { title: string; desc: string }) => (
                <div key={svc.title} className="group rounded-2xl bg-gray-50/50 p-8 md:p-10 hover:bg-cyan-50/40 transition-all duration-500 hover:shadow-lg border border-transparent hover:border-cyan-500/10">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#13B5EA" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <h3 className="text-base font-semibold text-navy-900 mb-2">{svc.title}</h3>
                  <p className="text-sm text-navy-500/60 leading-relaxed">{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-28 md:py-36 bg-gray-50/80">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-xl mx-auto mb-14">
              <span className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-1.5 text-[11px] font-semibold text-cyan-600 uppercase tracking-widest mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                {locale === "ar" ? "شهادات العملاء" : "Testimonials"}
              </span>
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-navy-900 leading-tight">
                {locale === "ar" ? "ماذا يقول عملاؤنا" : "What Our Clients Say"}
              </h2>
            </div>
            <div ref={testimonialRef} className="grid md:grid-cols-3 gap-6">
              {testimonials.map((item, i) => (
                <div key={i} className="rounded-2xl bg-white p-8 border border-navy-200/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 testimonial-quote">
                  <p className="text-sm text-navy-600/70 leading-relaxed mb-7 pt-3">
                    {locale === "ar" ? item.quoteAr : item.quoteEn}
                  </p>
                  <div className="flex items-center gap-3.5 pt-5 border-t border-navy-100/50">
                    <div className="w-11 h-11 rounded-xl bg-cyan-50 flex items-center justify-center text-sm font-bold text-cyan-600 shrink-0">
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

        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy-400 mb-10">{t.partnersTitle}</p>
            <div ref={partnersRef} className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6">
              {partners.map((name) => <PartnerLogo key={name} name={name} />)}
            </div>
          </div>
        </section>

        <section ref={ctaRef} className="relative py-32 md:py-40 overflow-hidden bg-navy-900">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cyan-500/5 blur-[150px]" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
          <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
            <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-bold text-white leading-tight mb-4">{t.ctaTitle}</h2>
            <p className="text-base text-white/40 mb-10 max-w-md mx-auto">{t.ctaSub}</p>
            <Link href={`/${L}/contact`}
              className="group inline-flex items-center gap-3 rounded-full bg-cyan-500 px-10 py-4 text-base font-semibold text-white hover:bg-cyan-400 btn-press transition-all duration-300 shadow-2xl shadow-cyan-500/20">
              {t.ctaBtn}
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/15 transition-transform group-hover:translate-x-1">
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
