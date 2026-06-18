"use client";

import { useLocale } from "next-intl";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { dictionary } from "@/lib/use-locale";

export default function AboutPage() {
  const locale = useLocale() as "ar" | "en";
  const t = dictionary[locale];

  return (
    <div className="flex min-h-screen flex-col bg-white" dir={locale === "ar" ? "rtl" : "ltr"}>
      <Nav />
      <main>
        <section className="relative pt-32 pb-20 bg-navy-900 overflow-hidden">
          <div className="absolute top-1/3 -left-32 w-80 h-80 rounded-full bg-cyan-500/5 blur-[100px]" />
          <div className="mx-auto max-w-7xl px-6 text-center relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-500 mb-4">{t.aboutTitle}</p>
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-tight mb-4">{t.aboutHero}</h1>
            <p className="text-base text-white/45 max-w-xl mx-auto">{t.aboutHeroSub}</p>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <div className="relative">
                <img src="/images/7.jpg" alt="Sayun Medical" className="w-full aspect-[4/3] object-cover rounded-lg"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-500 mb-4">{t.aboutStory}</p>
                <p className="text-base text-navy-600/70 leading-relaxed mb-4">{t.aboutStoryP1}</p>
                <p className="text-base text-navy-600/70 leading-relaxed mb-4">{t.aboutStoryP2}</p>
                <p className="text-base text-navy-600/70 leading-relaxed">{t.aboutStoryP3}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50/80">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid sm:grid-cols-3 gap-px rounded-lg overflow-hidden bg-navy-200/20">
              {[
                { title: t.aboutMission, desc: t.aboutMissionDesc, icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
                { title: t.aboutVision, desc: t.aboutVisionDesc, icon: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 15a3 3 0 100-6 3 3 0 000 6z" },
                { title: t.aboutValues, desc: t.aboutValuesDesc, icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
              ].map((item) => (
                <div key={item.title} className="bg-white p-10 text-center">
                  <div className="w-12 h-12 rounded-md bg-cyan-50 flex items-center justify-center mx-auto mb-5">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#13B5EA" strokeWidth="1.5"><path d={item.icon}/></svg>
                  </div>
                  <h3 className="text-base font-semibold text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-navy-500/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-2xl font-bold text-navy-900 text-center mb-16">{t.aboutJourney}</h2>
            <div className="max-w-3xl mx-auto space-y-8">
              {t.aboutMilestones.map((m: { year: string; title: string; desc: string }, i: number) => (
                <div key={m.year} className="relative flex gap-6 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center text-xs font-bold text-cyan-600 shrink-0">{m.year}</div>
                    {i < t.aboutMilestones.length - 1 && <div className="w-px flex-1 bg-navy-200/20 min-h-[40px]" />}
                  </div>
                  <div className="pb-6">
                    <h3 className="text-base font-semibold text-navy-900">{m.title}</h3>
                    <p className="text-sm text-navy-500/60 mt-1">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
