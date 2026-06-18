"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Wrench, User, Pencil, Star, Link as Chain, Users, CaretRight } from "@phosphor-icons/react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

export default function ServicesPage() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "ar";
  const isRtl = locale === "ar";

  const services = [
    { icon: Wrench, title: isRtl ? "الدعم الفني" : "Technical Support", desc: isRtl ? "فريق دعم فني متكامل لصيانة جميع أنواع الأجهزة الطبية" : "Full technical support team for all types of medical equipment maintenance" },
    { icon: User, title: isRtl ? "الاستشارات الطبية" : "Medical Consultation", desc: isRtl ? "استشارات متخصصة في اختيار الأجهزة والمعدات المناسبة" : "Expert consultation in selecting the right equipment" },
    { icon: Pencil, title: isRtl ? "طلبات التوريد" : "Supply Orders", desc: isRtl ? "نسمح للعميل باختيار أجهزته ونقوم بالتوصيل في الوقت المحدد" : "Customers choose their equipment and we deliver on time" },
    { icon: Star, title: isRtl ? "رضا العملاء" : "Customer Satisfaction", desc: isRtl ? "نلتزم بتقديم خدمات متميزة وضمان الجودة العالية" : "Committed to offering distinguished services and guaranteed quality" },
    { icon: Chain, title: isRtl ? "علاقاتنا" : "Our Relations", desc: isRtl ? "نتطلع لبناء علاقات تجارية مع المؤسسات الطبية حول العالم" : "Looking forward to building business relationships worldwide" },
    { icon: Users, title: isRtl ? "فريق متخصص" : "Specialist Team", desc: isRtl ? "كادر ذو خبرة عالية ومؤهل بأعلى المستويات المهنية" : "Highly experienced and professionally qualified personnel" },
  ];

  const responsibilities = [
    isRtl ? "الاعتناء بالصحة من خلال توفير منتجات مناسبة" : "Caring for health by providing suitable products",
    isRtl ? "غرس المصداقية والثقة في عملائنا" : "Building credibility and trust with our customers",
    isRtl ? "توفير منتجات عالية الجودة لسد احتياجات السوق" : "Providing high-quality products to meet market needs",
    isRtl ? "خدمة العملاء وتلبية احتياجاتهم في الوقت المحدد" : "Serving customers and meeting their needs on time",
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white" dir={isRtl ? "rtl" : "ltr"}>
      <Nav />

      <main className="flex-1">
        <section className="relative pt-36 pb-24 bg-gradient-to-br from-sayun-950 via-sayun-900 to-sayun-800 overflow-hidden">
          <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-gold-400/5 blur-[120px]" />
          <div className="mx-auto max-w-7xl px-6 text-center relative z-10">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
              {isRtl ? "خدماتنا" : "Our Services"}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6 leading-tight">
              {isRtl ? "خدمة متكاملة" : "Comprehensive Service"}
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              {isRtl
                ? "من التوريد إلى الصيانة، نضمن لعملائنا أفضل تجربة خدمة"
                : "From supply to maintenance, we ensure the best service experience for our clients."}
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((svc) => (
                <div key={svc.title} className="rounded-2xl bg-white p-8 border border-sayun-100 hover:border-gold-400/30 hover:shadow-lg transition-all duration-300 group">
                  <svc.icon size={28} className="text-gold-400 mb-5" weight={svc.icon === Users || svc.icon === Star || svc.icon === User ? "fill" : "bold"} />
                  <h3 className="text-lg font-semibold text-sayun-900 mb-3">{svc.title}</h3>
                  <p className="text-sm text-sayun-400 leading-relaxed">{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-sayun-50/50">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-sayun-900 text-center mb-6">
              {isRtl ? "مسؤولياتنا" : "Our Responsibilities"}
            </h2>
            <p className="text-sayun-500 text-center max-w-xl mx-auto mb-12">
              {isRtl
                ? "نلتزم بأعلى معايير الجودة والمسؤولية المهنية"
                : "We are committed to the highest standards of quality and professional responsibility."}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {responsibilities.map((r, i) => (
                <div key={r} className="rounded-2xl bg-white p-8 border border-sayun-100 text-center">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gold-400/10 text-gold-500 font-bold text-lg mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-sayun-600 leading-relaxed">{r}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-sayun-900 mb-6 leading-tight">
              {isRtl ? "جاهزون لخدمتك" : "Ready to Serve You"}
            </h2>
            <p className="text-sayun-500 mb-10">
              {isRtl
                ? "نحن على استعداد تام لخدمتك في مجال الأجهزة والمعدات الطبية"
                : "We are fully ready to serve you in the field of medical equipment."}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-8 py-3.5 text-sm font-semibold text-sayun-950 hover:bg-gold-500 transition-all duration-300 shadow-lg shadow-gold-400/20 active:scale-[0.97]"
            >
              {isRtl ? "اتصل بنا" : "Contact Us"}
              <CaretRight size={14} weight="bold" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
