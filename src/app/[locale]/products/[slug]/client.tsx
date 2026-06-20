"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { getProduct, getProductsByCategory, categories } from "@/lib/products";
import { useScrollFadeIn, useStaggerFadeIn } from "@/lib/animations";

export default function ProductDetailClient({ slug }: { slug: string }) {
  const locale = useLocale() as "ar" | "en";
  const isRtl = locale === "ar";
  const product = getProduct(slug);
  const [selectedImg, setSelectedImg] = useState(0);
  const L = locale === "ar" ? "" : "en";

  const detailRef = useScrollFadeIn<HTMLDivElement>();
  const relatedRef = useStaggerFadeIn<HTMLDivElement>({ stagger: 0.06 });

  if (!product) return notFound();

  const name = locale === "ar" ? product.nameAr : product.nameEn;
  const desc = locale === "ar" ? product.descriptionAr : product.descriptionEn;
  const features = locale === "ar" ? product.featuresAr : product.featuresEn;
  const cat = categories.find((c) => c.slug === product.categorySlug);
  const related = getProductsByCategory(product.categorySlug).filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col bg-white" dir={isRtl ? "rtl" : "ltr"}>
      <Nav />
      <main className="flex-1 pt-24">
        <div className="bg-gray-50/80 border-b border-navy-200/10">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <nav className="flex items-center gap-2 text-xs text-navy-400">
              <Link href={`/${L}`} className="hover:text-cyan-500 transition-colors">{locale === "ar" ? "الرئيسية" : "Home"}</Link>
              <span>/</span>
              <Link href={`/${L}/products`} className="hover:text-cyan-500 transition-colors">{locale === "ar" ? "المنتجات" : "Products"}</Link>
              <span>/</span>
              {cat && <span className="text-navy-500">{locale === "ar" ? cat.nameAr : cat.nameEn}</span>}
              <span>/</span>
              <span className="text-navy-800 font-medium">{name}</span>
            </nav>
          </div>
        </div>

        <section ref={detailRef} className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="aspect-[4/3] rounded-xl bg-gray-100 overflow-hidden mb-4">
                  <img src={product.images[selectedImg] || product.images[0]} alt={name}
                    className="w-full h-full object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).src = "/images/home_slider/1.jpg"; }} />
                </div>
                {product.images.length > 1 && (
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {product.images.map((img, i) => (
                      <button key={i} onClick={() => setSelectedImg(i)}
                        className={`shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                          selectedImg === i ? "border-cyan-500 shadow-sm" : "border-transparent hover:border-navy-200"
                        }`}>
                        <img src={img} alt="" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className={isRtl ? "text-right" : "text-left"}>
                <div className="inline-flex items-center gap-2 rounded-md bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-600 mb-4">{product.brand}</div>
                <h1 className="text-3xl md:text-4xl font-bold text-navy-900 leading-tight mb-4">{name}</h1>
                <p className="text-base text-navy-500/70 leading-relaxed mb-8">{desc}</p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  <div className="rounded-lg bg-gray-50/80 p-4">
                    <p className="text-xs text-navy-400 mb-1">{locale === "ar" ? "الماركة" : "Brand"}</p>
                    <p className="text-sm font-semibold text-navy-800">{product.brand}</p>
                  </div>
                  <div className="rounded-lg bg-gray-50/80 p-4">
                    <p className="text-xs text-navy-400 mb-1">{locale === "ar" ? "الضمان" : "Warranty"}</p>
                    <p className="text-sm font-semibold text-navy-800">{locale === "ar" ? "3 سنوات" : "3 Years"}</p>
                  </div>
                  <div className="rounded-lg bg-gray-50/80 p-4">
                    <p className="text-xs text-navy-400 mb-1">{locale === "ar" ? "الدعم" : "Support"}</p>
                    <p className="text-sm font-semibold text-navy-800">24/7</p>
                  </div>
                  <div className="rounded-lg bg-gray-50/80 p-4">
                    <p className="text-xs text-navy-400 mb-1">{locale === "ar" ? "الشهادة" : "Certification"}</p>
                    <p className="text-sm font-semibold text-navy-800">CE, ISO</p>
                  </div>
                </div>

                <h3 className="text-sm font-semibold text-navy-900 mb-4 uppercase tracking-[0.08em]">
                  {locale === "ar" ? "المميزات" : "Features"}
                </h3>
                <ul className="space-y-3 mb-8">
                  {features.map((f: string) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-navy-600">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-50 text-cyan-500 text-[10px] font-bold">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link href={`/${L}/contact`}
                  className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-8 py-3.5 text-sm font-semibold text-white hover:bg-cyan-400 active:scale-[0.97] transition-all duration-200 shadow-lg shadow-cyan-500/20 btn-press">
                  {locale === "ar" ? "طلب عرض سعر" : "Request Quote"}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="py-20 bg-gray-50/80">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className="text-2xl font-bold text-navy-900 mb-10">{locale === "ar" ? "منتجات ذات صلة" : "Related Products"}</h2>
              <div ref={relatedRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {related.map((rp) => {
                  const rpName = locale === "ar" ? rp.nameAr : rp.nameEn;
                  return (
                    <Link key={rp.slug} href={`/${L}/products/${rp.slug}`}
                      className="group rounded-lg bg-white p-4 border border-navy-200/20 hover:border-cyan-500/30 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
                      <div className="aspect-[16/9] rounded-md bg-gray-100 overflow-hidden mb-4">
                        <img src={rp.images[0]} alt={rpName} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                      </div>
                      <h3 className="text-sm font-semibold text-navy-900">{rpName}</h3>
                      <p className="text-xs text-cyan-500 mt-1">{rp.brand}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
