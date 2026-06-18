"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { dictionary } from "@/lib/use-locale";

export default function AboutPage() {
  const locale = useLocale() as "ar" | "en";
  const t = dictionary[locale];

  const icon = (name: string) => {
    const icons: Record<string, string> = {
      mission: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
      vision: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 15a3 3 0 100-6 3 3 0 000 6z",
      values: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    };
    return icons[name] || icons.mission;
  };

  return (
    <div className="flex min-h-screen flex-col bg-white" dir={locale === "ar" ? "rtl" : "ltr"}>
      <Nav />
      <main>
        {/* HERO */}
        <section className="relative pt-32 pb-20 bg-[#0B293B] overflow-hidden">
          <div className="absolute top-1/3 -left-32 w-80 h-80 rounded-full bg-[#C8A44E]/5 blur-[100px]" />
          <div className="mx-auto max-w-7xl px-6 text-center relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C8A44E] mb-4">{t.aboutTitle}</p>
            <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-white leading-tight mb-4">{t.aboutHero}</h1>
            <p className="text-base text-white/50 max-w-xl mx-auto">{t.aboutHeroSub}</p>
          </div>
        </section>

        {/* STORY */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <div className="relative">
                <img src="/images/7.jpg" alt="Sayun Medical" className="w-full aspect-[4/3] object-cover rounded-2xl" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-xl bg-[#C8A44E]/10 border border-[#C8A44E]/20" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C8A44E] mb-4">{t.aboutStory}</p>
                <p className="text-base text-[#0A5C7E]/60 leading-relaxed mb-4">{t.aboutStoryP1}</p>
                <p className="text-base text-[#0A5C7E]/60 leading-relaxed mb-4">{t.aboutStoryP2}</p>
                <p className="text-base text-[#0A5C7E]/60 leading-relaxed">{t.aboutStoryP3}</p>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION + VISION + VALUES */}
        <section className="py-20 bg-[#0A5C7E]/[0.03]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { key: "mission", title: t.aboutMission, desc: t.aboutMissionDesc },
                { key: "vision", title: t.aboutVision, desc: t.aboutVisionDesc },
                { key: "values", title: t.aboutValues, desc: t.aboutValuesDesc },
              ].map((item) => (
                <div key={item.key} className="rounded-xl bg-white p-8 border border-[#0A5C7E]/10 text-center hover:border-[#C8A44E]/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#C8A44E]/10 flex items-center justify-center mx-auto mb-5">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C8A44E" strokeWidth="1.5"><path d={icon(item.key)}/></svg>
                  </div>
                  <h3 className="text-base font-semibold text-[#0B293B] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#0A5C7E]/50 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-[clamp(1.8rem,3vw,2.8rem)] font-bold text-[#0B293B] text-center mb-16">{t.aboutJourney}</h2>
            <div className="max-w-3xl mx-auto space-y-10">
              {t.aboutMilestones.map((m: { year: string; title: string; desc: string }, i: number) => (
                <div key={m.year} className="relative flex gap-6 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#0A5C7E]/10 flex items-center justify-center text-xs font-bold text-[#0A5C7E] shrink-0">{m.year}</div>
                    {i < t.aboutMilestones.length - 1 && <div className="w-px flex-1 bg-[#0A5C7E]/10 min-h-[40px]" />}
                  </div>
                  <div className="pb-10">
                    <h3 className="text-base font-semibold text-[#0B293B]">{m.title}</h3>
                    <p className="text-sm text-[#0A5C7E]/50 mt-1">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PARTNERS */}
        <section className="py-16 bg-[#0A5C7E]/[0.03] border-t border-[#0A5C7E]/5 border-b">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0A5C7E]/40 mb-8">{t.partnersTitle}</p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
              {["Mindray", "JPI", "EMED", "KENLIF", "TMW"].map((name) => (
                <span key={name} className="text-lg font-bold text-[#0A5C7E]/20 tracking-tight">{name}</span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
