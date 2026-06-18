import { useTranslations } from "next-intl";
import Link from "next/link";

export default function HomePage() {
  const t = useTranslations("home");
  const nav = useTranslations("nav");
  const footer = useTranslations("footer");
  const hero = useTranslations("home.hero");
  const stats = useTranslations("home.stats");
  const who = useTranslations("home.who_we_are");

  const statsData = [
    { number: "1998", label: stats("founded") },
    { number: "4", label: stats("branches") },
    { number: "25+", label: stats("employees") },
    { number: "500+", label: stats("clients") },
  ];

  const navItems: [string, string][] = [
    ["home", "/"],
    ["about", "/about"],
    ["products", "/products"],
    ["services", "/services"],
    ["contact", "/contact"],
  ];

  const footerLinks: [string, string][] = [
    ["home", "/"],
    ["about", "/about"],
    ["services", "/services"],
    ["contact", "/contact"],
  ];

  const products = [
    { name: "Medical Imaging", brand: "Mindray" },
    { name: "Patient Monitoring", brand: "Mindray" },
    { name: "X-Ray Systems", brand: "JPI" },
    { name: "Anesthesia Machines", brand: "Mindray" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="bg-[#073B52] text-white text-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
            <a href="mailto:info@sayunmedical.com" className="text-[#E8D5A3] hover:text-[#C8A44E] transition-colors">
              info@sayunmedical.com
            </a>
            <div className="flex items-center gap-4">
              <Link href="/en" className="hover:text-[#C8A44E] transition-colors">English</Link>
              <span className="text-neutral-400">|</span>
              <Link href="/ar" className="hover:text-[#C8A44E] transition-colors font-semibold">عربي</Link>
            </div>
          </div>
        </div>
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-extrabold text-[#0A5C7E] tracking-tight">
              <span className="text-[#C8A44E]">S</span>ayun
            </span>
            <span className="text-xs text-neutral-400 max-w-24 leading-tight hidden sm:block">
              Medical Corporation
            </span>
          </Link>
          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map(([key, href]) => (
              <li key={key}>
                <Link
                  href={href}
                  className="text-neutral-700 hover:text-[#0A5C7E] font-medium transition-colors"
                >
                  {nav(key)}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="rounded-lg bg-[#C8A44E] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#C8A44E]/90 transition-all shadow-md hover:shadow-lg"
          >
            {nav("contact")}
          </Link>
        </nav>
      </header>

      <main>
        <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-gradient-to-br from-[#073B52] via-[#0A5C7E] to-[#1A8BB5]">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#C8A44E]/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#C8A44E]/10 blur-3xl" />
          <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">
              {hero("title")}
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80 sm:text-xl">
              {hero("subtitle")}
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="rounded-xl bg-[#C8A44E] px-10 py-4 text-lg font-bold text-white hover:bg-[#C8A44E]/90 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
              >
                {hero("cta")}
              </Link>
              <Link
                href="/products"
                className="rounded-xl border-2 border-white/40 px-10 py-4 text-lg font-semibold text-white hover:bg-white/10 transition-all"
              >
                {nav("products")}
              </Link>
            </div>
          </div>
        </section>

        <section className="relative -mt-16 z-20 mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-2 gap-4 rounded-2xl bg-white p-8 shadow-2xl md:grid-cols-4">
            {statsData.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-extrabold text-[#0A5C7E] md:text-4xl">{s.number}</div>
                <div className="mt-1 text-sm font-medium text-neutral-500">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#0A5C7E]/10 to-[#1A8BB5]/10" />
                <div className="absolute -bottom-6 -right-6 h-48 w-48 rounded-2xl bg-[#C8A44E]/20" />
              </div>
              <div>
                <h2 className="mb-2 text-sm font-bold uppercase tracking-widest text-[#C8A44E]">{who("title")}</h2>
                <h3 className="mb-6 text-3xl font-extrabold text-[#073B52] md:text-4xl">
                  {who("title")} <span className="text-[#C8A44E]">{who("highlight")}</span>
                </h3>
                <p className="mb-8 text-lg leading-relaxed text-neutral-600">{who("desc")}</p>
                <ul className="grid grid-cols-2 gap-3">
                  {[1, 2, 3, 4].map((i) => (
                    <li key={i} className="flex items-center gap-2 text-neutral-700">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C8A44E]/20 text-xs text-[#C8A44E]">✓</span>
                      {who(`list${i}`)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-neutral-50 py-24">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="mb-4 text-center text-3xl font-extrabold text-[#073B52] md:text-4xl">
              {t("featured_products")}
            </h2>
            <p className="mx-auto mb-12 max-w-xl text-center text-neutral-500">{t("partners")}</p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((p) => (
                <Link
                  key={p.name}
                  href="/products"
                  className="group rounded-xl bg-white p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="mb-4 aspect-square rounded-lg bg-gradient-to-br from-[#0A5C7E]/5 to-[#C8A44E]/5" />
                  <h3 className="font-bold text-[#073B52] group-hover:text-[#0A5C7E] transition-colors">{p.name}</h3>
                  <p className="text-sm text-[#C8A44E] font-medium">{p.brand}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h2 className="mb-12 text-2xl font-bold text-[#073B52]">{t("partners")}</h2>
            <div className="flex flex-wrap items-center justify-center gap-12 opacity-50 grayscale">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-16 w-32 rounded-lg bg-neutral-100" />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#073B52] to-[#0A5C7E] py-24">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h2 className="mb-4 text-3xl font-extrabold text-white md:text-4xl">{t("cta")}</h2>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-xl bg-[#C8A44E] px-12 py-4 text-lg font-bold text-white hover:bg-[#C8A44E]/90 transition-all shadow-xl hover:shadow-2xl"
            >
              {t("cta_btn")}
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-neutral-900 text-neutral-300">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h4 className="mb-4 text-lg font-bold text-white">{footer("about_title")}</h4>
              <p className="text-sm leading-relaxed text-neutral-400">
                Sayun Corporation for Medical Appliances — Al-Tahreer Street, Sana'a, Yemen
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-lg font-bold text-white">{footer("quick_links")}</h4>
              <ul className="space-y-2 text-sm">
                {footerLinks.map(([key, href]) => (
                  <li key={key}>
                    <Link href={href} className="hover:text-[#C8A44E] transition-colors">{nav(key)}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-lg font-bold text-white">{footer("products")}</h4>
              <ul className="space-y-2 text-sm">
                {["Medical Imaging", "Patient Monitoring", "X-Ray", "Dental Unit", "Sterilizer"].map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-lg font-bold text-white">{footer("contact_us")}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="tel:00967777033002" className="hover:text-[#C8A44E] transition-colors">00967-777-033-002</a></li>
                <li><a href="tel:009671274839" className="hover:text-[#C8A44E] transition-colors">00967-01-274839</a></li>
                <li><a href="mailto:info@sayunmedical.com" className="hover:text-[#C8A44E] transition-colors">info@sayunmedical.com</a></li>
                <li><a href="mailto:sayunmedical@y.net.ye" className="hover:text-[#C8A44E] transition-colors">sayunmedical@y.net.ye</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-800 py-6 text-center text-sm text-neutral-500">
          {footer("copyright")}
        </div>
      </footer>
    </div>
  );
}
