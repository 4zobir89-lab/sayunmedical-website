"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { dictionary } from "@/lib/use-locale";
import { useScrollFadeIn, useStaggerFadeIn } from "@/lib/animations";

export default function ServicesPage() {
  const locale = useLocale() as "ar" | "en";
  const t = dictionary[locale];
  const L = locale === "ar" ? "" : "en";

  const responsibilities = locale === "ar"
    ? ["الاعتناء بالصحة من خلال توفير منتجات مناسبة", "غرس المصداقية والثقة في عملائنا", "توفير منتجات عالية الجودة لسد احتياجات السوق", "خدمة العملاء وتلبية احتياجاتهم في الوقت المحدد"]
    : ["Caring for health by providing suitable products", "Building credibility and trust with our customers", "Providing high-quality products to meet market needs", "Serving customers and meeting their needs on time"];

  const svcRef = useStaggerFadeIn<HTMLDivElement>();
  const respRef = useStaggerFadeIn<HTMLDivElement>();
  const ctaRef = useScrollFadeIn<HTMLDivElement>();

  return (
    <div className="flex min-h-screen flex-col bg-white" dir={locale === "ar" ? "rtl" : "ltr"}>
      <Nav />
      <main>
        <section className="relative pt-32 pb-20 bg-navy-900 overflow-hidden">
          <div className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-cyan-500/5 blur-[100px]" />
          <div className="hero-dot-pattern" />
          <div className="mx-auto max-w-7xl px-6 text-center relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-500 mb-4">{t.servicesTitle}</p>
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-tight mb-4">{t.servicesHero}</h1>
            <p className="text-base text-white/45 max-w-xl mx-auto">{t.servicesSub}</p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div ref={svcRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-lg overflow-hidden bg-navy-200/20">
              {t.svcItems.map((svc: { title: string; desc: string }) => (
                <div key={svc.title} className="bg-white p-8 transition-all duration-200 hover:bg-cyan-50/50 group">
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

        <section className="py-20 bg-gray-50/80">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-2xl font-bold text-navy-900 text-center mb-4">{t.servicesResp}</h2>
            <p className="text-sm text-navy-500/60 text-center max-w-lg mx-auto mb-12">{t.servicesRespSub}</p>
            <div ref={respRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {responsibilities.map((r: string, i: number) => (
                <div key={r} className="rounded-lg bg-white p-6 border border-navy-200/20 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-cyan-50 text-cyan-600 font-bold text-sm mb-4 group-hover:bg-cyan-500 group-hover:text-white transition-all">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-sm text-navy-600/60 leading-relaxed">{r}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section ref={ctaRef} className="py-24">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">{t.servicesReady}</h2>
            <p className="text-sm text-navy-500/60 mb-8">{t.servicesReadySub}</p>
            <Link href={`/${L}/contact`} className="group inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-7 py-3 text-sm font-semibold text-white hover:bg-cyan-400 btn-press transition-all duration-200 shadow-md">
              {t.servicesCta}
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
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
