"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useHeroAnimation } from "@/lib/animations";

interface Props {
  locale: string;
  t: Record<string, any>;
  L: string;
}

const slides = [
  { src: "/images/home_slider/1.jpg" },
  { src: "/images/gallery/medical_imaging_system/1.jpg" },
  { src: "/images/gallery/patient_monitoring_systems/1.jpg" },
];

export default function Hero({ locale, t, L }: Props) {
  const ref = useHeroAnimation<HTMLDivElement>();
  const [slideIdx, setSlideIdx] = useState(0);

  const nextSlide = useCallback(() => {
    setSlideIdx((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section ref={ref} className="relative min-h-[100dvh] flex items-center overflow-hidden hero-gradient">
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />
      <div className="hero-dot-pattern" />

      {slides.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt=""
          className="hero-slider-img"
          style={{ opacity: i === slideIdx ? 1 : 0 }}
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
      ))}
      <div className="hero-img-overlay" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className={locale === "ar" ? "order-2 lg:order-1" : ""}>
            <div className="hero-animate inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium text-cyan-400 mb-6 backdrop-blur-sm">
              <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
              {t.heroBadge}
            </div>

            <h1 className="hero-animate text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-white leading-[1.08] mb-5">
              {t.heroTitle}
            </h1>

            <p className="hero-animate text-base sm:text-lg text-white/45 leading-relaxed max-w-lg mb-8">
              {t.heroSub}
            </p>

            <div className="hero-animate flex flex-wrap gap-4">
              <Link
                href={`/${L}/contact`}
                className="group inline-flex items-center gap-3 rounded-full bg-cyan-500 px-8 py-3.5 text-sm font-semibold text-white hover:bg-cyan-400 btn-press transition-all duration-200 shadow-lg shadow-cyan-500/20"
              >
                {t.heroCta}
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d={locale === "ar" ? "M19 12H5M12 19l-7-7 7-7" : "M5 12h14M12 5l7 7-7 7"} />
                  </svg>
                </span>
              </Link>
              <Link
                href={`/${L}/products`}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-medium text-white/60 hover:bg-white/5 hover:text-white transition-all duration-200 backdrop-blur-sm"
              >
                {t.heroTour}
              </Link>
            </div>

            <div className="hero-animate flex items-center gap-4 mt-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-navy-900 bg-cyan-500/20 flex items-center justify-center">
                    <span className="text-[8px] font-bold text-cyan-400">+{i}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-white/30">{locale === "ar" ? "موثوق من مئات العملاء" : "Trusted by hundreds of clients"}</p>
            </div>
          </div>

          <div className={`hero-image ${locale === "ar" ? "order-1 lg:order-2" : ""} relative`}>
            <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/10">
              <img
                src={slides[slideIdx].src}
                alt="Sayun Medical"
                className="w-full aspect-[4/3] object-cover transition-all duration-1000"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
              <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-navy-900/60 to-transparent" />
            </div>
            <div className="absolute -bottom-3 -right-3 w-full h-full rounded-xl border border-cyan-500/10 -z-10" />
            <div className="absolute -top-3 -left-3 w-full h-full rounded-xl border border-cyan-500/5 -z-10" />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlideIdx(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === slideIdx ? "bg-cyan-500 w-6" : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
