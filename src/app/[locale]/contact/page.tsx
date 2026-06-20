"use client";

import { useState, FormEvent } from "react";
import { useLocale } from "next-intl";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { dictionary } from "@/lib/use-locale";
import { useScrollReveal, useStaggerReveal } from "@/lib/animations";

export default function ContactPage() {
  const locale = useLocale() as "ar" | "en";
  const t = dictionary[locale];
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const formRef = useScrollReveal<HTMLDivElement>();
  const infoRef = useStaggerReveal<HTMLDivElement>({ stagger: 0.1 });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSent(true);
      form.reset();
    } catch {
      setError(locale === "ar" ? "حدث خطأ. حاول مرة أخرى." : "An error occurred. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white" dir={locale === "ar" ? "rtl" : "ltr"}>
      <Nav />
      <main>
        <section className="relative pt-32 pb-20 bg-navy-900 overflow-hidden">
          <div className="absolute top-1/3 -left-32 w-80 h-80 rounded-full bg-cyan-500/5 blur-[100px]" />
          <div className="hero-dot-pattern" />
          <div className="mx-auto max-w-7xl px-6 text-center relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-500 mb-4">{t.contactTitle}</p>
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-tight mb-4">{t.contactHero}</h1>
            <p className="text-base text-white/45 max-w-xl mx-auto">{t.contactSub}</p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-2 gap-14">
              <div ref={formRef}>
                <h2 className="text-xl font-bold text-navy-900 mb-8">{t.contactForm}</h2>
                {sent ? (
                  <div className="rounded-lg bg-success/5 border border-success/20 p-8 text-center">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" className="mx-auto mb-4"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    <h3 className="text-lg font-semibold text-navy-900 mb-2">{locale === "ar" ? "تم إرسال رسالتك!" : "Message Sent!"}</h3>
                    <p className="text-sm text-navy-500/60 mb-6">{locale === "ar" ? "سنتواصل معك في أقرب وقت ممكن." : "We'll get back to you as soon as possible."}</p>
                    <button onClick={() => setSent(false)} className="text-sm font-semibold text-cyan-500 hover:text-cyan-400 transition-colors">
                      {locale === "ar" ? "إرسال رسالة أخرى" : "Send Another Message"}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <input type="text" name="name" required placeholder={t.contactName}
                      className="w-full rounded-lg border border-navy-200/20 px-4 py-3 text-sm text-navy-900 placeholder:text-navy-300/50 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/10 transition-all duration-200" />
                    <div className="grid sm:grid-cols-2 gap-5">
                      <input type="email" name="email" placeholder={t.contactEmail}
                        className="w-full rounded-lg border border-navy-200/20 px-4 py-3 text-sm placeholder:text-navy-300/50 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/10 transition-all duration-200" />
                      <input type="tel" name="phone" required placeholder={t.contactPhone}
                        className="w-full rounded-lg border border-navy-200/20 px-4 py-3 text-sm placeholder:text-navy-300/50 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/10 transition-all duration-200" />
                    </div>
                    <input type="text" name="subject" required placeholder={t.contactSubject}
                      className="w-full rounded-lg border border-navy-200/20 px-4 py-3 text-sm placeholder:text-navy-300/50 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/10 transition-all duration-200" />
                    <textarea name="message" rows={5} required placeholder={t.contactMessage}
                      className="w-full rounded-lg border border-navy-200/20 px-4 py-3 text-sm placeholder:text-navy-300/50 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/10 transition-all duration-200 resize-none" />
                    {error && <p className="text-sm text-danger">{error}</p>}
                    <button type="submit" disabled={sending}
                      className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-7 py-3 text-sm font-semibold text-white hover:bg-cyan-400 btn-press transition-all duration-200 shadow-md disabled:opacity-50 disabled:cursor-not-allowed">
                      {sending ? (
                        <>
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                          {locale === "ar" ? "جارٍ الإرسال..." : "Sending..."}
                        </>
                      ) : t.contactSend}
                    </button>
                  </form>
                )}
              </div>

              <div ref={infoRef}>
                <h2 className="text-xl font-bold text-navy-900 mb-8">{t.contactInfo}</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-5 rounded-lg bg-gray-50/80 hover:bg-cyan-50/30 transition-colors duration-200">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#13B5EA" strokeWidth="2" className="shrink-0 mt-0.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    <div>
                      <p className="text-xs font-semibold text-navy-900 mb-1">{locale === "ar" ? "العنوان" : "Address"}</p>
                      <p className="text-sm text-navy-500/60">{t.contactAddress}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 rounded-lg bg-gray-50/80 hover:bg-cyan-50/30 transition-colors duration-200">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#13B5EA" strokeWidth="2" className="shrink-0 mt-0.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                    <div>
                      <p className="text-xs font-semibold text-navy-900 mb-1">{locale === "ar" ? "الهاتف" : "Phone"}</p>
                      <a href="tel:00967777033002" className="block text-sm text-navy-500/60 hover:text-cyan-500 transition-colors">00967-777-033-002</a>
                      <a href="tel:00967777081000" className="block text-sm text-navy-500/60 hover:text-cyan-500 transition-colors">00967-777-081-000</a>
                      <a href="tel:009671274839" className="block text-sm text-navy-500/60 hover:text-cyan-500 transition-colors">00967-01-274839</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 rounded-lg bg-gray-50/80 hover:bg-cyan-50/30 transition-colors duration-200">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#13B5EA" strokeWidth="2" className="shrink-0 mt-0.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    <div>
                      <p className="text-xs font-semibold text-navy-900 mb-1">{locale === "ar" ? "البريد الإلكتروني" : "Email"}</p>
                      <a href="mailto:info@sayunmedical.com" className="block text-sm text-navy-500/60 hover:text-cyan-500 transition-colors">info@sayunmedical.com</a>
                      <a href="mailto:sayunmedical@y.net.ye" className="block text-sm text-navy-500/60 hover:text-cyan-500 transition-colors">sayunmedical@y.net.ye</a>
                    </div>
                  </div>

                  <a href="https://wa.me/967777033002" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 rounded-lg bg-green-50/80 hover:bg-green-100/80 transition-colors group">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366" className="shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    <div>
                      <p className="text-sm font-semibold text-green-700">{t.contactWhatsapp}</p>
                      <p className="text-xs text-green-500">{t.contactWhatsappSub}</p>
                    </div>
                  </a>
                </div>

                <div className="mt-6 rounded-xl overflow-hidden border border-navy-200/20 shadow-sm">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1923.7505070735856!2d44.203542802465336!3d15.349329123789218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1603dbaa22f680a7%3A0xd4194e270af6b5c8!2z2LPZitim2YjZhiDZhNmE2KfYrNmH2LLYqSDYp9mE2LfYqNmK2Kk!5e0!3m2!1sen!2s!4v1509290301308" width="100%" height="240" style={{ border: 0 }} allowFullScreen loading="lazy" title={t.contactTitle} className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
