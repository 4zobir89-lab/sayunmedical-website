"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { categories, products } from "@/lib/products";

export default function ProductsPage() {
  const locale = useLocale() as "ar" | "en";
  const isRtl = locale === "ar";
  const [activeCat, setActiveCat] = useState("all");
  const [search, setSearch] = useState("");
  const L = locale === "ar" ? "" : "en";

  const filtered = products.filter((p) => {
    const name = locale === "ar" ? p.nameAr : p.nameEn;
    const matchSearch = name.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCat === "all" || p.categorySlug === activeCat;
    return matchSearch && matchCat;
  });

  return (
    <div className="flex min-h-screen flex-col bg-white" dir={isRtl ? "rtl" : "ltr"}>
      <Nav />
      <main className="flex-1">
        <section className="relative pt-32 pb-20 bg-navy-900 overflow-hidden">
          <div className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-cyan-500/5 blur-[100px]" />
          <div className="mx-auto max-w-7xl px-6 text-center relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-500 mb-4">
              {locale === "ar" ? "منتجاتنا" : "Our Products"}
            </p>
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-tight mb-4">
              {locale === "ar" ? "أجهزة ومعدات طبية عالمية" : "World-Class Medical Equipment"}
            </h1>
            <p className="text-base text-white/45 max-w-xl mx-auto">
              {locale === "ar"
                ? "مجموعة متكاملة من الأجهزة والمعدات الطبية بالشراكة مع كبرى الشركات العالمية"
                : "Comprehensive range of medical equipment in partnership with global industry leaders."}
            </p>
          </div>
        </section>

        <section className="py-12 bg-gray-50/80 border-b border-navy-200/10">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full lg:w-80">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-navy-300/60">
                  <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                </svg>
                <input
                  type="text" value={search} onChange={(e) => setSearch(e.target.value)}
                  placeholder={locale === "ar" ? "ابحث عن منتج..." : "Search products..."}
                  className="w-full rounded-lg border border-navy-200/20 pl-10 pr-4 py-2.5 text-sm text-navy-900 placeholder:text-navy-300/50 bg-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/10 transition-all duration-200"
                />
              </div>
              {/* Category filter pills */}
              <div className="flex gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0">
                <button onClick={() => setActiveCat("all")}
                  className={`shrink-0 rounded-md px-4 py-2 text-xs font-medium transition-all duration-200 ${
                    activeCat === "all" ? "bg-navy-900 text-white" : "bg-white text-navy-500 hover:bg-navy-50 border border-navy-200/20"
                  }`}>
                  {locale === "ar" ? "الكل" : "All"}
                </button>
                {categories.map((cat) => {
                  const name = locale === "ar" ? cat.nameAr : cat.nameEn;
                  return (
                    <button key={cat.slug} onClick={() => setActiveCat(cat.slug)}
                      className={`shrink-0 rounded-md px-4 py-2 text-xs font-medium transition-all duration-200 whitespace-nowrap ${
                        activeCat === cat.slug ? "bg-cyan-500 text-white" : "bg-white text-navy-500 hover:bg-cyan-50 border border-navy-200/20"
                      }`}>
                      {name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-navy-400">{locale === "ar" ? "لا توجد منتجات مطابقة" : "No matching products"}</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filtered.map((p) => {
                  const name = locale === "ar" ? p.nameAr : p.nameEn;
                  const cat = categories.find((c) => c.slug === p.categorySlug);
                  const catName = cat ? (locale === "ar" ? cat.nameAr : cat.nameEn) : "";
                  return (
                    <Link key={p.slug} href={`/${L}/products/${p.slug}`}
                      className="group rounded-lg bg-white border border-navy-200/20 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden">
                      <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                        <img src={p.images[0]} alt={name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          onError={(e) => { (e.target as HTMLImageElement).src = "/images/home_slider/1.jpg"; }} />
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[10px] font-semibold text-cyan-500 uppercase tracking-wider">{p.brand}</span>
                          <span className="text-[10px] text-navy-300">•</span>
                          <span className="text-[10px] text-navy-400">{catName}</span>
                        </div>
                        <h3 className="text-sm font-semibold text-navy-900 leading-tight group-hover:text-cyan-600 transition-colors duration-200">{name}</h3>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        <section className="py-24 bg-navy-900">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              {locale === "ar" ? "لم تجد ما تبحث عنه؟" : "Didn't Find What You're Looking For?"}
            </h2>
            <p className="text-sm text-white/45 mb-8">
              {locale === "ar" ? "تواصل معنا وسنقدم لك أفضل الحلول المناسبة." : "Contact us and we'll find the right solution for you."}
            </p>
            <Link href={`/${L}/contact`}
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-7 py-3 text-sm font-semibold text-white hover:bg-cyan-400 active:scale-[0.97] transition-all duration-200 shadow-md">
              {locale === "ar" ? "طلب استشارة" : "Request Consultation"}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
