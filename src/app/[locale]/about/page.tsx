"use client";

import { usePathname } from "next/navigation";
import { Crosshair, Target, Book, Clock } from "@phosphor-icons/react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

export default function AboutPage() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "ar";
  const isRtl = locale === "ar";

  const milestones = [
    { year: "1998", title: isRtl ? "التأسيس" : "Founded", desc: isRtl ? "تأسست المؤسسة في صنعاء كإحدى الشركات الطبية الرائدة" : "Founded in Sana'a as a leading medical equipment corporation" },
    { year: "2005", title: isRtl ? "التوسع" : "Expansion", desc: isRtl ? "افتتاح فروع جديدة في المحافظات اليمنية" : "Opened new branches across Yemeni governorates" },
    { year: "2012", title: isRtl ? "الشراكات" : "Partnerships", desc: isRtl ? "توقيع اتفاقيات شراكة مع Mindray و JPI" : "Signed partnership agreements with Mindray and JPI" },
    { year: "2023", title: isRtl ? "مشاريع كبرى" : "Major Projects", desc: isRtl ? "تنفيذ مشروع تعزيز الصمود بالشراكة مع الحكومة الكندية" : "Executed the Resilience Project with Canadian government support" },
  ];

  const partners = ["Mindray", "JPI", "EMED", "KENLIF", "TMW"];

  return (
    <div className="flex min-h-screen flex-col bg-white" dir={isRtl ? "rtl" : "ltr"}>
      <Nav />

      <main className="flex-1">
        <section className="relative pt-36 pb-24 bg-gradient-to-br from-sayun-950 via-sayun-900 to-sayun-800 overflow-hidden">
          <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-gold-400/5 blur-[120px]" />
          <div className="mx-auto max-w-7xl px-6 text-center relative z-10">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
              {isRtl ? "عن المؤسسة" : "About Us"}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6 leading-tight">
              {isRtl ? "مسيرة عطاء منذ 1998" : "A Legacy of Care Since 1998"}
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              {isRtl
                ? "مؤسسة سيئون الطبية — شريكك الموثوق في الأجهزة والمعدات الطبية في اليمن"
                : "Sayun Medical — your trusted partner for medical equipment in Yemen."}
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-sayun-900 mb-6 leading-tight">
                  {isRtl ? "قصتنا" : "Our Story"}
                </h2>
                <div className="space-y-4 text-sayun-500 leading-relaxed">
                  <p>
                    {isRtl
                      ? "تأسست مؤسسة سيئون الطبية عام 1998 في صنعاء، كإحدى المؤسسات الطبية المهنية الرائدة في اليمن. نحن متخصصون في بيع وتسويق مختلف المعدات والأجهزة الطبية."
                      : "Sayun Medical was founded in 1998 in Sana'a, as one of Yemen's leading professional medical equipment corporations. We specialize in selling and marketing various hospital equipment."}
                  </p>
                  <p>
                    {isRtl
                      ? "نحن موزعون معتمدون لكبرى الشركات العالمية مثل Mindray (أجهزة الموجات فوق الصوتية، أجهزة المراقبة، رسام القلب، أجهزة التنفس، أجهزة التخدير)، JPI، EMED، KENLIF، TMW وغيرها."
                      : "We are authorized distributors for major global companies including Mindray (Ultrasound, Monitors, ECG, Ventilators, Anesthesia machines), JPI, EMED, KENLIF, TMW and others."}
                  </p>
                  <p>
                    {isRtl
                      ? "نتطلع إلى بناء علاقات تجارية مع الشركات والمؤسسات في جميع أنحاء العالم."
                      : "We look forward to establishing business relationships with corporations and companies all over the world."}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 rounded-2xl bg-gradient-to-br from-sayun-100 to-sayun-50 aspect-square" />
                <div className="rounded-2xl bg-gradient-to-br from-gold-100 to-gold-50 aspect-square" />
                <div className="rounded-2xl bg-gradient-to-br from-sayun-100 to-sayun-50 aspect-square" />
                <div className="col-span-2 rounded-2xl bg-gradient-to-br from-sayun-100 to-sayun-50 aspect-square" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-sayun-50/50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                { icon: Target, title: isRtl ? "الرسالة" : "Mission", desc: isRtl ? "تقنيات طبية متطورة لجعل الرعاية الصحية أكثر سهولة ووصولاً للجميع" : "Advanced medical technologies to make healthcare more accessible" },
                { icon: Crosshair, title: isRtl ? "الرؤية" : "Vision", desc: isRtl ? "الاعتناء بالصحة داخل اليمن وخارجها بمعايير عالمية" : "Caring for health in Yemen and beyond with global standards" },
                { icon: Book, title: isRtl ? "القيم" : "Values", desc: isRtl ? "المصداقية والموثوقية والشفافية هي أساس تعاملاتنا" : "Credibility, reliability and transparency are our foundation" },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-white p-10 border border-sayun-100 text-center hover:border-gold-400/30 transition-all duration-300">
                  <item.icon size={32} className="text-gold-400 mx-auto mb-5" weight="fill" />
                  <h3 className="text-lg font-semibold text-sayun-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-sayun-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-sayun-900 text-center mb-16">
              {isRtl ? "مسيرتنا" : "Our Journey"}
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-px inset-y-0 w-px bg-sayun-200 hidden md:block" />
              <div className="space-y-12">
                {milestones.map((m, i) => (
                  <div key={m.year} className={`relative grid md:grid-cols-2 gap-8 items-center ${i % 2 === 0 ? "" : "md:text-right"}`}>
                    <div className={`${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}`}>
                      <span className="text-4xl font-bold text-gold-400">{m.year}</span>
                      <h3 className="text-xl font-semibold text-sayun-900 mt-2">{m.title}</h3>
                      <p className="text-sayun-500 mt-2">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-sayun-50/50 border-t border-sayun-100">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-sayun-400 mb-10">
              {isRtl ? "شركاؤنا العالميون" : "Global Partners"}
            </h3>
            <div className="flex flex-wrap justify-center gap-x-16 gap-y-8">
              {partners.map((name) => (
                <span key={name} className="text-xl font-bold text-sayun-300 tracking-tight">{name}</span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
