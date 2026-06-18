"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";

interface Props {
  locale: string;
  t: Record<string, any>;
  L: string;
}

export default function Hero({ locale, t, L }: Props) {
  return (
    <section className="relative min-h-[85dvh] flex items-center overflow-hidden bg-navy-900">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[120px]" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-navy-700/30 blur-[120px]" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className={locale === "ar" ? "order-2 lg:order-1" : ""}>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-xs font-medium text-cyan-400 mb-6">
              <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-500" />
              {t.heroBadge}
            </div>
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-white leading-[1.08] mb-5">
              {t.heroTitle}
            </h1>
            <p className="text-base sm:text-lg text-white/45 leading-relaxed max-w-lg mb-8">
              {t.heroSub}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={`/${L}/contact`}
                className="inline-flex items-center gap-3 rounded-full bg-cyan-500 px-8 py-3.5 text-sm font-semibold text-white hover:bg-cyan-400 btn-press transition-all duration-200 shadow-lg shadow-cyan-500/20">
                {t.heroCta}
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d={locale === "ar" ? "M19 12H5M12 19l-7-7 7-7" : "M5 12h14M12 5l7 7-7 7"} />
                  </svg>
                </span>
              </Link>
              <Link href={`/${L}/products`}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-3.5 text-sm font-medium text-white/60 hover:bg-white/5 hover:text-white transition-all duration-200">
                {t.heroTour}
              </Link>
            </div>
          </div>
          <div className={`${locale === "ar" ? "order-1 lg:order-2" : ""}`}>
            <img src="/images/home_slider/1.jpg" alt="Sayun Medical"
              className="w-full aspect-[4/3] object-cover rounded-lg"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
          </div>
        </div>
      </div>
    </section>
  );
}
