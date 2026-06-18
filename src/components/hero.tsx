"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

interface Props {
  locale: string;
  t: Record<string, any>;
  L: string;
}

export default function Hero({ locale, t, L }: Props) {
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = revealRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); observer.unobserve(el); } },
      { threshold: 0.1 }
    );
    el.querySelectorAll(".reveal").forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={revealRef} className="relative min-h-[90dvh] flex items-center overflow-hidden bg-navy-900">
      {/* Depth layers */}
      <div className="absolute inset-0 depth-0">
        <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[120px]" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-navy-700/30 blur-[120px]" />
        <div className="absolute inset-0 bg-dot-pattern" />
      </div>
      <div className="absolute inset-0 depth-1 opacity-30" style={{
        background: "radial-gradient(ellipse at 20% 50%, rgba(19,181,234,0.08) 0%, transparent 60%)",
      }} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-20 w-full depth-3">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className={locale === "ar" ? "order-2 lg:order-1" : ""}>
            <div className="reveal inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-xs font-medium text-cyan-400 mb-6">
              <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
              {t.heroBadge}
            </div>
            <h1 className="reveal text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-white leading-[1.08] mb-5"
              style={{ transitionDelay: "100ms" }}>
              {t.heroTitle}
            </h1>
            <p className="reveal text-base sm:text-lg text-white/45 leading-relaxed max-w-lg mb-8"
              style={{ transitionDelay: "200ms" }}>
              {t.heroSub}
            </p>
            <div className="reveal flex flex-wrap gap-4" style={{ transitionDelay: "300ms" }}>
              <Link href={`/${L}/contact`}
                className="group inline-flex items-center gap-3 rounded-full bg-cyan-500 px-8 py-3.5 text-sm font-semibold text-white hover:bg-cyan-400 active:scale-[0.96] transition-all duration-500 shadow-lg shadow-cyan-500/20">
                {t.heroCta}
                <span className="btn-icon-wrap">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d={locale === "ar" ? "M19 12H5M12 19l-7-7 7-7" : "M5 12h14M12 5l7 7-7 7"} />
                  </svg>
                </span>
              </Link>
              <Link href={`/${L}/products`}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-3.5 text-sm font-medium text-white/60 hover:bg-white/5 hover:text-white transition-all duration-300">
                {t.heroTour}
              </Link>
            </div>
          </div>
          <div className={`${locale === "ar" ? "order-1 lg:order-2" : ""} reveal`}
            style={{ transitionDelay: "200ms" }}>
            <div className="card-shell">
              <div className="card-core overflow-hidden">
                <img src="/images/home_slider/1.jpg" alt="Sayun Medical"
                  className="w-full aspect-[4/3] object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
