"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ShieldCheck,
  Truck,
  Star,
  Heartbeat,
  CaretRight,
  PlayCircle,
  Quotes,
  ArrowUpRight,
} from "@phosphor-icons/react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

export default function HomePage() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "ar";
  const isRtl = locale === "ar";

  const t = (key: string, section?: string): string => {
    const dict: Record<string, Record<string, string>> = {
      hero: {
        title: isRtl ? "شريكك الموثوق في الرعاية الصحية" : "Your Trusted Partner in Healthcare",
        subtitle: isRtl
          ? "نقدم أجهزة ومعدات طبية عالية الجودة منذ 1998. شريك Mindray و JPI و EMED في اليمن"
          : "Supplying high-quality medical equipment since 1998. Partner of Mindray, JPI, and EMED in Yemen.",
        cta: isRtl ? "اطلب عرض سعر" : "Request a Quote",
        tour: isRtl ? "جولة سريعة" : "Quick Tour",
      },
      who: {
        eyebrow: isRtl ? "عن المؤسسة" : "About Us",
        title: isRtl ? "ريادة في الرعاية الصحية" : "Leadership in Healthcare",
        desc: isRtl
          ? "تأسست مؤسسة سيئون الطبية عام 1998 كإحدى المؤسسات الطبية الرائدة في اليمن. نعمل مع كبرى الشركات العالمية لتوفير أحدث الأجهزة والمعدات الطبية."
          : "Founded in 1998, Sayun Medical is one of Yemen's leading medical equipment corporations. We partner with world-class manufacturers to deliver cutting-edge medical technology.",
      },
      products: {
        eyebrow: isRtl ? "منتجاتنا" : "Our Products",
        title: isRtl ? "أجهزة طبية عالمية" : "World-Class Medical Equipment",
        desc: isRtl
          ? "نقدم مجموعة متكاملة من الأجهزة والمعدات الطبية بالشراكة مع أكبر المصنعين العالميين"
          : "A comprehensive range of medical equipment in partnership with the world's leading manufacturers.",
      },
      services: {
        eyebrow: isRtl ? "خدماتنا" : "Our Services",
        title: isRtl ? "دعم متكامل" : "End-to-End Support",
        desc: isRtl
          ? "من التركيب إلى الصيانة، نضمن لعملائنا أفضل تجربة خدمة"
          : "From installation to maintenance, we ensure the best service experience for our clients.",
      },
      partners: {
        title: isRtl ? "شركاؤنا العالميون" : "Global Partners",
      },
      cta: {
        title: isRtl ? "هل لديك استفسار؟" : "Have a Question?",
        subtitle: isRtl
          ? "فريقنا جاهز للإجابة على جميع استفساراتك وتقديم استشارة مجانية"
          : "Our team is ready to answer all your questions and provide a free consultation.",
        btn: isRtl ? "اتصل بنا الآن" : "Contact Us Now",
      },
    };
    return dict[section || "hero"]?.[key] || key;
  };

  const products = [
    { name: isRtl ? "التصوير الطبي" : "Medical Imaging", brand: "Mindray", items: 5 },
    { name: isRtl ? "أجهزة المراقبة" : "Patient Monitoring", brand: "Mindray", items: 8 },
    { name: isRtl ? "الأشعة" : "X-Ray Systems", brand: "JPI", items: 4 },
    { name: isRtl ? "التخدير والتنفس" : "Anesthesia & Ventilators", brand: "Mindray", items: 6 },
    { name: isRtl ? "الأثاث الطبي" : "Medical Furniture", brand: isRtl ? "متنوع" : "Various", items: 15 },
    { name: isRtl ? "الحاضنات والمدافئ" : "Incubators & Warmers", brand: isRtl ? "متنوع" : "Various", items: 3 },
  ];

  const services = [
    {
      icon: ShieldCheck,
      title: isRtl ? "الدعم الفني" : "Technical Support",
      desc: isRtl ? "فريق متخصص للصيانة والدعم الفني لجميع الأجهزة" : "Dedicated team for maintenance and technical support",
    },
    {
      icon: Heartbeat,
      title: isRtl ? "استشارات طبية" : "Medical Consultation",
      desc: isRtl ? "استشارات متخصصة لاختيار الجهاز المناسب" : "Expert guidance in selecting the right equipment",
    },
    {
      icon: Truck,
      title: isRtl ? "توريد وتركيب" : "Supply & Installation",
      desc: isRtl ? "توريد وتركيب الأجهزة مع التدريب على الاستخدام" : "Equipment supply, installation, and user training",
    },
    {
      icon: Star,
      title: isRtl ? "ضمان الجودة" : "Quality Assurance",
      desc: isRtl ? "ضمان شامل وقطع غيار أصلية لجميع المنتجات" : "Comprehensive warranty and genuine spare parts",
    },
  ];

  const partners = [
    "Mindray", "JPI", "EMED", "KENLIF", "TMW", "Philips"
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white" dir={isRtl ? "rtl" : "ltr"}>
      <Nav />

      <main>
        {/* ========== HERO ========== */}
        <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-gradient-to-br from-sayun-950 via-sayun-900 to-sayun-800">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-gold-400/5 blur-[120px]" />
            <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full bg-sayun-600/20 blur-[120px]" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={isRtl ? "order-2 lg:order-1" : ""}>
                <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/20 bg-gold-400/5 px-4 py-1.5 text-xs font-medium text-gold-300 mb-8">
                  <span className="flex h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse" />
                  {isRtl ? "موثوق منذ 1998" : "Trusted Since 1998"}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-6">
                  {t("title", "hero")}
                </h1>
                <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-lg mb-10">
                  {t("subtitle", "hero")}
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href={`/${locale}/contact`}
                    className="group relative inline-flex items-center gap-2 rounded-full bg-gold-400 px-8 py-3.5 text-sm font-semibold text-sayun-950 hover:bg-gold-500 transition-all duration-300 shadow-2xl shadow-gold-400/25 active:scale-[0.97]"
                  >
                    {t("cta", "hero")}
                    <ArrowUpRight size={16} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  <Link
                    href={`/${locale}/about`}
                    className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-3.5 text-sm font-medium text-white/70 hover:bg-white/5 hover:text-white transition-all duration-300"
                  >
                    <PlayCircle size={16} weight="fill" className="text-gold-400" />
                    {t("tour", "hero")}
                  </Link>
                </div>
              </div>

              <div className={`${isRtl ? "order-1 lg:order-2" : ""} relative`}>
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-sayun-700/30 to-sayun-600/10 border border-white/5 backdrop-blur-sm" />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-gold-400/10 border border-gold-400/20 backdrop-blur-sm" />
                <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-sayun-500/20 border border-white/5 backdrop-blur-sm" />
              </div>
            </div>
          </div>
        </section>

        {/* ========== STATS BAR ========== */}
        <section className="relative z-20 -mt-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-px rounded-2xl bg-white/5 overflow-hidden border border-white/5 shadow-2xl shadow-sayun-950/20">
              {(isRtl
                ? [["تأسست", "1998"], ["فروع", "4"], ["موظف", "25+"], ["عميل", "500+"], ["شريك", "10+"]]
                : [["Founded", "1998"], ["Branches", "4"], ["Employees", "25+"], ["Clients", "500+"], ["Partners", "10+"]]
              ).map(([label, value]: string[]) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center py-8 px-4 bg-white text-center"
                >
                  <span className="text-3xl md:text-4xl font-bold text-sayun-700">{value}</span>
                  <span className="text-xs text-sayun-400 mt-1 font-medium uppercase tracking-wider">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== WHO WE ARE ========== */}
        <section className="py-28 md:py-36">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className={`${isRtl ? "order-2 lg:order-1" : ""}`}>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                  {t("eyebrow", "who")}
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-sayun-900 mt-4 mb-6 leading-tight">
                  {t("title", "who")}
                </h2>
                <p className="text-base text-sayun-500 leading-relaxed mb-8">
                  {t("desc", "who")}
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    isRtl ? "الاعتناء بصحة الإنسان" : "Caring for Human Health",
                    isRtl ? "التوصيل في الوقت المحدد" : "On-Time Delivery",
                    isRtl ? "ضمان الجودة العالية" : "High Quality Guaranteed",
                    isRtl ? "غرس الثقة لدى العميل" : "Building Customer Trust",
                  ].map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full bg-sayun-50 px-4 py-2 text-xs font-medium text-sayun-700"
                    >
                      <span className="flex h-1.5 w-1.5 rounded-full bg-gold-400" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className={`${isRtl ? "order-1 lg:order-2" : ""} relative`}>
                <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-sayun-100 to-sayun-50 border border-sayun-100" />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl bg-gold-400/10 border border-gold-400/20" />
              </div>
            </div>
          </div>
        </section>

        {/* ========== FEATURED PRODUCTS ========== */}
        <section className="py-28 md:py-36 bg-sayun-50/50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                {t("eyebrow", "products")}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-sayun-900 mt-4 mb-6 leading-tight">
                {t("title", "products")}
              </h2>
              <p className="text-sayun-500 leading-relaxed">
                {t("desc", "products")}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p, i) => (
                <Link
                  key={p.name}
                  href={`/${locale}/products`}
                  className="group relative rounded-2xl bg-white p-8 border border-sayun-100 hover:border-gold-400/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-400/0 via-gold-400/0 to-gold-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-sayun-50 flex items-center justify-center mb-5 text-sayun-700 font-bold text-lg group-hover:bg-gold-400/10 transition-colors duration-300">
                      {p.name[0]}
                    </div>
                    <h3 className="text-lg font-semibold text-sayun-900 mb-1 transition-colors duration-300 group-hover:text-gold-600">
                      {p.name}
                    </h3>
                    <p className="text-sm text-sayun-400 mb-4">
                      {p.brand}
                    </p>
                    <div className="flex items-center gap-2 text-xs font-medium text-sayun-500">
                      <span>{p.items} {isRtl ? "أصناف" : "categories"}</span>
                      <CaretRight size={12} weight="bold" className={`transition-transform duration-300 group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href={`/${locale}/products`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-sayun-700 hover:text-gold-600 transition-colors group"
              >
                {isRtl ? "عرض جميع المنتجات" : "View All Products"}
                <CaretRight size={14} weight="bold" className={`transition-transform duration-300 group-hover:translate-x-1 ${isRtl ? "rotate-180" : ""}`} />
              </Link>
            </div>
          </div>
        </section>

        {/* ========== SERVICES ========== */}
        <section className="py-28 md:py-36">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                {t("eyebrow", "services")}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-sayun-900 mt-4 mb-6 leading-tight">
                {t("title", "services")}
              </h2>
              <p className="text-sayun-500 leading-relaxed">
                {t("desc", "services")}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden bg-sayun-100">
              {services.map((svc, i) => (
                <div
                  key={svc.title}
                  className="bg-white p-10 transition-all duration-500 hover:bg-sayun-50 group"
                >
                  <svc.icon size={28} className="text-gold-400 mb-6" weight="fill" />
                  <h3 className="text-lg font-semibold text-sayun-900 mb-3">{svc.title}</h3>
                  <p className="text-sm text-sayun-400 leading-relaxed">{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== PARTNERS ========== */}
        <section className="py-20 bg-sayun-50/50 border-t border-sayun-100 border-b">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-sayun-400 mb-10">
              {t("title", "partners")}
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
              {partners.map((name) => (
                <div
                  key={name}
                  className="text-xl font-bold text-sayun-300 hover:text-sayun-500 transition-colors duration-300 tracking-tight"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== CTA ========== */}
        <section className="relative py-28 md:py-36 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-sayun-900 via-sayun-800 to-sayun-700" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold-400/5 blur-[150px]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

          <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {t("title", "cta")}
            </h2>
            <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
              {t("subtitle", "cta")}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="group inline-flex items-center gap-2 rounded-full bg-gold-400 px-10 py-4 text-base font-semibold text-sayun-950 hover:bg-gold-500 transition-all duration-300 shadow-2xl shadow-gold-400/20 active:scale-[0.97]"
            >
              {t("btn", "cta")}
              <ArrowUpRight size={18} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
