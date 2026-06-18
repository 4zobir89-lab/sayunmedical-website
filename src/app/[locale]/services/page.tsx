"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { dictionary } from "@/lib/use-locale";

export default function ServicesPage() {
  const locale = useLocale() as "ar" | "en";
  const t = dictionary[locale];

  const responsibilities = locale === "ar"
    ? ["الاعتناء بالصحة من خلال توفير منتجات مناسبة", "غرس المصداقية والثقة في عملائنا", "توفير منتجات عالية الجودة لسد احتياجات السوق", "خدمة العملاء وتلبية احتياجاتهم في الوقت المحدد"]
    : ["Caring for health by providing suitable products", "Building credibility and trust with our customers", "Providing high-quality products to meet market needs", "Serving customers and meeting their needs on time"];

  const L = locale === "ar" ? "" : "en";

  return (
    <div className="flex min-h-screen flex-col bg-white" dir={locale === "ar" ? "rtl" : "ltr"}>
      <Nav />
      <main>
        <section className="relative pt-32 pb-20 bg-[#0B293B] overflow-hidden">
          <div className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-[#C8A44E]/5 blur-[100px]" />
          <div className="mx-auto max-w-7xl px-6 text-center relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C8A44E] mb-4">{t.servicesTitle}</p>
            <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-white leading-tight mb-4">{t.servicesHero}</h1>
            <p className="text-base text-white/50 max-w-xl mx-auto">{t.servicesSub}</p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-xl overflow-hidden bg-[#0A5C7E]/10">
              {t.svcItems.map((svc: { title: string; desc: string }) => (
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

        <section className="py-20 bg-[#0A5C7E]/[0.03]">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-[clamp(1.5rem,2.5vw,2.2rem)] font-bold text-[#0B293B] text-center mb-4">{t.servicesResp}</h2>
            <p className="text-sm text-[#0A5C7E]/50 text-center max-w-lg mx-auto mb-12">{t.servicesRespSub}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {responsibilities.map((r: string, i: number) => (
                <div key={r} className="rounded-xl bg-white p-6 border border-[#0A5C7E]/10 text-center">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#C8A44E]/10 text-[#C8A44E] font-bold text-sm mb-4">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-sm text-[#0A5C7E]/60 leading-relaxed">{r}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="text-2xl font-bold text-[#0B293B] mb-4">{t.servicesReady}</h2>
            <p className="text-sm text-[#0A5C7E]/50 mb-8">{t.servicesReadySub}</p>
            <Link href={`/${L}/contact`} className="inline-flex items-center gap-2 rounded-full bg-[#C8A44E] px-7 py-3 text-sm font-semibold text-[#0B293B] hover:bg-[#C8A44E]/90 active:scale-[0.97] transition-all duration-200 shadow-lg shadow-[#C8A44E]/20">
              {t.servicesCta}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
