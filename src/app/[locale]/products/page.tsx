"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { CaretRight, MagnifyingGlass } from "@phosphor-icons/react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

export default function ProductsPage() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "ar";
  const isRtl = locale === "ar";

  const categories = [
    {
      name: isRtl ? "التصوير الطبي" : "Medical Imaging",
      brand: "Mindray",
      count: 5,
      items: isRtl ? ["Cardiologia", "General Imaging", "OB/GYN", "POC", "Radiology"] : ["Cardiology", "General Imaging", "OB/GYN", "POC", "Radiology"],
    },
    {
      name: isRtl ? "أجهزة المراقبة" : "Patient Monitoring",
      brand: "Mindray",
      count: 8,
      items: isRtl ? ["أجهزة مراقبة المرضى", "أنظمة المركزية"] : ["Patient Monitors", "Central Systems"],
    },
    {
      name: isRtl ? "الأشعة" : "X-Ray Systems",
      brand: "JPI",
      count: 4,
      items: isRtl ? ["أشعة رقمية", "أشعة متنقلة"] : ["Digital X-Ray", "Mobile X-Ray"],
    },
    {
      name: isRtl ? "التخدير والتنفس" : "Anesthesia & Ventilators",
      brand: "Mindray",
      count: 6,
      items: isRtl ? ["أجهزة تخدير", "أجهزة تنفس"] : ["Anesthesia Machines", "Ventilators"],
    },
    {
      name: isRtl ? "الأثاث الطبي" : "Medical Furniture",
      brand: isRtl ? "متنوع" : "Various",
      count: 15,
      items: isRtl ? ["أسرة مستشفيات", "عربات", "خزائن وطاولات"] : ["Hospital Beds", "Trolleys", "Cabinets & Tables"],
    },
    {
      name: isRtl ? "الحاضنات والمدافئ" : "Incubators & Warmers",
      brand: isRtl ? "متنوع" : "Various",
      count: 3,
      items: isRtl ? ["حاضنات أطفال", "مدافئ"] : ["Incubators", "Warmers"],
    },
    {
      name: isRtl ? "وحدة أسنان" : "Dental Unit",
      brand: isRtl ? "متنوع" : "Various",
      count: 6,
      items: isRtl ? ["كراسي أسنان", "أجهزة أشعة أسنان"] : ["Dental Chairs", "Dental X-Ray"],
    },
    {
      name: isRtl ? "المعقمات" : "Sterilizers",
      brand: isRtl ? "متنوع" : "Various",
      count: 4,
      items: isRtl ? ["معقمات بخار", "معقمات أوتوكلاف"] : ["Steam Sterilizers", "Autoclaves"],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white" dir={isRtl ? "rtl" : "ltr"}>
      <Nav />

      <main className="flex-1">
        <section className="relative pt-36 pb-24 bg-gradient-to-br from-sayun-950 via-sayun-900 to-sayun-800 overflow-hidden">
          <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-gold-400/5 blur-[120px]" />
          <div className="mx-auto max-w-7xl px-6 text-center relative z-10">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
              {isRtl ? "منتجاتنا" : "Our Products"}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6 leading-tight">
              {isRtl ? "أجهزة طبية عالمية" : "World-Class Medical Equipment"}
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              {isRtl
                ? "مجموعة متكاملة من الأجهزة والمعدات الطبية بالشراكة مع كبرى الشركات العالمية"
                : "A comprehensive range of medical equipment in partnership with global industry leaders."}
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="relative mb-12 max-w-md">
              <MagnifyingGlass size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-sayun-300" weight="bold" />
              <input
                type="text"
                placeholder={isRtl ? "ابحث عن منتج..." : "Search products..."}
                className="w-full rounded-xl border border-sayun-200 pl-12 pr-4 py-3 text-sm text-sayun-900 placeholder:text-sayun-300 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all"
              />
            </div>

            <div className="space-y-4">
              {categories.map((cat) => (
                <details
                  key={cat.name}
                  className="group rounded-2xl border border-sayun-100 open:border-gold-400/30 open:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-sayun-50/50 transition-colors list-none">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-sayun-50 flex items-center justify-center text-sayun-700 font-bold">
                        {cat.name[0]}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-sayun-900">{cat.name}</h3>
                        <p className="text-sm text-sayun-400">{cat.brand} — {cat.count} {isRtl ? "أصناف" : "items"}</p>
                      </div>
                    </div>
                    <CaretRight size={16} className="text-sayun-300 group-open:rotate-90 transition-transform duration-300 shrink-0" weight="bold" />
                  </summary>
                  <div className="px-6 pb-6 pt-2 border-t border-sayun-100">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
                      {cat.items.map((item) => (
                        <Link
                          key={item}
                          href={`/${locale}/contact`}
                          className="flex items-center gap-2 rounded-xl bg-sayun-50 px-4 py-3 text-sm text-sayun-600 hover:bg-gold-50 hover:text-gold-700 transition-all duration-200"
                        >
                          <CaretRight size={12} weight="bold" className="text-gold-400 shrink-0" />
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-r from-sayun-900 via-sayun-800 to-sayun-700">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {isRtl ? "لم تجد ما تبحث عنه؟" : "Didn't Find What You're Looking For?"}
            </h2>
            <p className="text-white/60 mb-10">
              {isRtl
                ? "تواصل معنا وسنقدم لك أفضل الحلول المناسبة"
                : "Contact us and we'll provide the best solutions for you."}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-8 py-3.5 text-sm font-semibold text-sayun-950 hover:bg-gold-500 transition-all duration-300 shadow-lg shadow-gold-400/20 active:scale-[0.97]"
            >
              {isRtl ? "طلب استشارة" : "Request Consultation"}
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
