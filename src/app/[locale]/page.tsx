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

const categories = [
  { nameAr: "التصوير الطبي", nameEn: "Medical Imaging", brand: "Mindray", img: "/images/home_slider/1.jpg" },
  { nameAr: "المراقبة", nameEn: "Patient Monitoring", brand: "Mindray", img: "/images/gallery/patient_monitoring_systems/1.jpg" },
  { nameAr: "أنظمة الأشعة", nameEn: "X-Ray Systems", brand: "JPI", img: "/images/gallery/x_ray/1.jpg" },
  { nameAr: "التخدير", nameEn: "Anesthesia", brand: "Mindray", img: "/images/gallery/anesthesia_machines/1.jpg" },
  { nameAr: "الأثاث الطبي", nameEn: "Medical Furniture", brand: "Various", img: "/images/gallery/furniture/hospital_bed/1.jpg" },
  { nameAr: "الحاضنات", nameEn: "Incubators", brand: "Various", img: "/images/gallery/incubator_and_warmer/1.jpg" },
];

const featuredProducts = [
  { nameAr: "جهاز تصوير متطور", nameEn: "Advanced Imaging System", brand: "Mindray", img: "/images/home_slider/1.jpg", badge: "جديد" },
  { nameAr: "جهاز مراقبة عناية", nameEn: "ICU Monitor", brand: "Mindray", img: "/images/gallery/patient_monitoring_systems/1.jpg" },
  { nameAr: "جهاز أشعة رقمي", nameEn: "Digital X-Ray", brand: "JPI", img: "/images/gallery/x_ray/1.jpg" },
];

function StatTile({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const num = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/[0-9]/g, "");
  useCountUp(ref, num, suffix);

  return (
    <div className="flex flex-col items-center justify-center py-8 md:py-10 px-2 text-center">
      <span className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
        <span ref={ref}>0</span>
      </span>
      <span className="text-[10px] text-navy-400 mt-1.5 font-medium uppercase tracking-widest">{label}</span>
    </div>
  );
}

function PartnerLogo({ name }: { name: string }) {
  return (
    <div className="w-32 h-20 rounded-xl bg-white border border-navy-200/5 flex items-center justify-center hover:shadow-lg hover:border-primary-light/15 transition-all duration-300 group">
      <div className="flex flex-col items-center gap-1.5">
        <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center group-hover:bg-primary-hover transition-colors duration-300">
          <span className="text-sm font-bold text-white">{name.charAt(0)}</span>
        </div>
        <span className="text-[11px] font-semibold text-navy-400 group-hover:text-primary transition-colors">{name}</span>
      </div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, subtitle, align = "center" }: { eyebrow: string; title: string; subtitle?: string; align?: string }) {
  return (
    <div className={`max-w-xl ${align === "center" ? "mx-auto text-center" : ""} mb-12 md:mb-14`}>
      <span className="eyebrow mb-5">{eyebrow}</span>
      <h2 className="t-h2 text-navy-900 mb-3">{title}</h2>
      {subtitle && <p className="t-body text-navy-400/70">{subtitle}</p>}
    </div>
  );
}

export default function HomePage() {
  const locale = useLocale() as "ar" | "en";
  const t = dictionary[locale];
  const L = locale === "ar" ? "" : "en";
  const isRtl = locale === "ar";

  const trustRef = useScrollFadeIn<HTMLDivElement>();
  const categoriesRef = useStaggerFadeIn<HTMLDivElement>({ stagger: 0.06 });
  const featuredRef = useScrollFadeIn<HTMLDivElement>();
  const testimonialRef = useStaggerFadeIn<HTMLDivElement>({ stagger: 0.1 });
  const partnersRef = useStaggerFadeIn<HTMLDivElement>({ stagger: 0.05 });
  const ctaRef = useScrollFadeIn<HTMLDivElement>();

  return (
    <div className="flex min-h-screen flex-col" dir={isRtl ? "rtl" : "ltr"}>
      <div className="noise-overlay" />
      <Nav />

      <main>
        {/* ── 1. HomeSlider ── */}
        <Hero locale={locale} t={t} L={L} />

        {/* ── 2. TrustBar ── */}
        <section ref={trustRef} className="relative z-20 -mt-10">
          <div className="mx-auto max-w-5xl px-6">
            <div className="double-bezel shadow-xl shadow-primary/5">
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

        {/* ── 3. About / Who We Are ── */}
        <section className="section-pad">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className={isRtl ? "order-2 lg:order-1" : ""}>
                <span className="eyebrow mb-5">{t.whoEyebrow}</span>
                <h2 className="t-h2 text-navy-900 leading-tight mb-6">{t.whoTitle}</h2>
                <p className="t-body text-navy-400/70 leading-relaxed mb-8 max-w-lg">{t.whoDesc}</p>
                <div className="flex flex-wrap gap-2.5">
                  {t.whoTags.map((tag: string) => (
                    <span key={tag} className="inline-flex items-center gap-2 rounded-lg bg-primary-lightest/50 px-4 py-2 text-xs font-medium text-primary border border-primary-subtle/30">
                      <span className="flex h-1.5 w-1.5 rounded-full bg-primary" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className={`${isRtl ? "order-1 lg:order-2" : ""} relative`}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img src="/images/7.jpg" alt="Sayun Medical" className="w-full aspect-[4/3] object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                </div>
                <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-primary-light/10 -z-10 hidden lg:block" />
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. PartnerCarousel ── */}
        <section className="section-pad-sm bg-primary-lightest/30">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="t-label text-navy-400 mb-10">{t.partnersTitle}</p>
            <div ref={partnersRef} className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6">
              {partners.map((name) => <PartnerLogo key={name} name={name} />)}
            </div>
          </div>
        </section>

        {/* ── 5. StrategicCategories (Bento) ── */}
        <section className="section-pad">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader
              eyebrow={t.prodEyebrow}
              title={t.prodTitle}
              subtitle={t.prodDesc}
            />
            <div ref={categoriesRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((p) => (
                <Link key={p.nameAr} href={`/${L}/products`}
                  className="group rounded-2xl bg-white border border-navy-200/10 hover:border-primary-light/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden card-shine">
                  <div className="aspect-[16/10] bg-gray-50 overflow-hidden">
                    <img src={p.img} alt={isRtl ? p.nameAr : p.nameEn} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                  </div>
                  <div className="p-6">
                    <p className="t-label text-primary-light mb-1">{p.brand}</p>
                    <h3 className="t-h4 text-navy-900 group-hover:text-primary transition-colors">{isRtl ? p.nameAr : p.nameEn}</h3>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href={`/${L}/products`}
                className="btn-brand btn-press">
                {t.prodViewAll}
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/10 transition-transform group-hover:translate-x-0.5">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d={isRtl ? "M19 12H5M12 19l-7-7 7-7" : "M5 12h14M12 5l7 7-7 7"} />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── 6. Services ── */}
        <section className="section-pad bg-bg">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader
              eyebrow={t.svcEyebrow}
              title={t.svcTitle}
              subtitle={t.svcDesc}
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {t.svcItems.map((svc: { title: string; desc: string }) => (
                <div key={svc.title} className="card p-8 md:p-10 border border-transparent hover:border-primary-subtle/30">
                  <div className="w-12 h-12 rounded-xl bg-primary-lightest flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <h3 className="t-h4 text-navy-900 mb-2">{svc.title}</h3>
                  <p className="t-body-sm text-navy-400/70 leading-relaxed">{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. StoriesHighlight (Bento Testimonials) ── */}
        <section className="section-pad">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader
              eyebrow={isRtl ? "شهادات العملاء" : "Testimonials"}
              title={isRtl ? "ماذا يقول عملاؤنا" : "What Our Clients Say"}
            />
            <div ref={testimonialRef} className="grid md:grid-cols-3 gap-6">
              {testimonials.map((item, i) => (
                <div key={i} className="rounded-2xl bg-white p-8 border border-navy-200/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 testimonial-quote">
                  <p className="t-body-sm text-navy-400/70 leading-relaxed mb-7 pt-3">
                    {isRtl ? item.quoteAr : item.quoteEn}
                  </p>
                  <div className="flex items-center gap-3.5 pt-5 border-t border-navy-100/50">
                    <div className="w-11 h-11 rounded-xl bg-primary-lightest flex items-center justify-center text-sm font-bold text-primary shrink-0">
                      {isRtl ? item.nameAr.charAt(0) : item.nameEn.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy-900">{isRtl ? item.nameAr : item.nameEn}</p>
                      <p className="text-xs text-navy-400">{isRtl ? item.roleAr : item.roleEn}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8. InnovationSection (Dark Chapter) ── */}
        <section className="relative py-28 md:py-36 overflow-hidden bg-bg-deep">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary-light/5 blur-[150px]" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-light/20 to-transparent" />
          <div className="relative z-10 mx-auto max-w-4xl px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="badge-dark mb-4">{isRtl ? "الابتكار" : "Innovation"}</span>
                <h2 className="t-h2 text-white leading-tight mb-4">
                  {isRtl ? "تقنيات متطورة لرعاية صحية أفضل" : "Cutting-Edge Technology for Better Healthcare"}
                </h2>
                <p className="t-body text-white/40 leading-relaxed mb-8">
                  {isRtl
                    ? "نواكب أحدث التطورات في المجال الطبي لنقدم لعملائنا أفضل الحلول التقنية."
                    : "We keep pace with the latest medical advancements to deliver the best technical solutions to our clients."}
                </p>
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { value: "30+", label: isRtl ? "منتج" : "Products" },
                    { value: "5", label: isRtl ? "شركاء" : "Partners" },
                    { value: "98%", label: isRtl ? "رضا" : "Satisfaction" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="text-2xl md:text-3xl font-bold text-primary-light">{stat.value}</p>
                      <p className="text-xs text-white/30 mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="card-glass p-8">
                  <p className="t-body text-white/70 leading-relaxed">
                    {isRtl
                      ? "\"نحن نؤمن بأن التكنولوجيا الطبية المتطورة يجب أن تكون في متناول الجميع. لهذا نعمل مع أفضل الشركات العالمية لنقدم حلولاً صحية تنقذ الأرواح.\""
                      : "\"We believe advanced medical technology should be accessible to all. That's why we partner with world-class manufacturers to deliver life-saving healthcare solutions.\""}
                  </p>
                  <div className="mt-6 pt-4 border-t border-white/5">
                    <p className="text-sm font-semibold text-white">{isRtl ? "إدارة المؤسسة" : "Management"}</p>
                    <p className="text-xs text-white/30">Sayun Medical Corporation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. CTABanner ── */}
        <section ref={ctaRef} className="relative py-32 md:py-40 overflow-hidden bg-surface-2">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary-light/5 blur-[150px]" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-light/20 to-transparent" />
          <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
            <h2 className="t-h2 text-white leading-tight mb-4">{t.ctaTitle}</h2>
            <p className="t-body text-white/40 mb-10 max-w-md mx-auto">{t.ctaSub}</p>
            <Link href={`/${L}/contact`}
              className="btn-accent btn-press shadow-2xl shadow-accent/20">
              {t.ctaBtn}
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/15 transition-transform group-hover:translate-x-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d={isRtl ? "M19 12H5M12 19l-7-7 7-7" : "M5 12h14M12 5l7 7-7 7"} />
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
