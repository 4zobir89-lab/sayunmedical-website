"use client";

import { usePathname } from "next/navigation";
import { Phone, Envelope, MapPin, WhatsappLogo } from "@phosphor-icons/react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

export default function ContactPage() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "ar";
  const isRtl = locale === "ar";

  return (
    <div className="flex min-h-screen flex-col bg-white" dir={isRtl ? "rtl" : "ltr"}>
      <Nav />

      <main className="flex-1">
        <section className="relative pt-36 pb-24 bg-gradient-to-br from-sayun-950 via-sayun-900 to-sayun-800 overflow-hidden">
          <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-gold-400/5 blur-[120px]" />
          <div className="mx-auto max-w-7xl px-6 text-center relative z-10">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
              {isRtl ? "اتصل بنا" : "Contact Us"}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6 leading-tight">
              {isRtl ? "سعداء بمساعدتك" : "Happy to Help"}
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              {isRtl
                ? "فريقنا جاهز للرد على استفساراتك وتقديم الدعم"
                : "Our team is ready to answer your questions and provide support."}
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-2xl font-bold text-sayun-900 mb-8">
                  {isRtl ? "أرسل لنا رسالة" : "Send Us a Message"}
                </h2>
                <form className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-sayun-700 mb-1.5">
                      {isRtl ? "الاسم" : "Name"}
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-xl border border-sayun-200 px-4 py-3 text-sm text-sayun-900 placeholder:text-sayun-300 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all duration-200"
                      placeholder={isRtl ? "اسمك الكريم" : "Your name"}
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-sayun-700 mb-1.5">
                        {isRtl ? "البريد الإلكتروني" : "Email"}
                      </label>
                      <input
                        type="email"
                        className="w-full rounded-xl border border-sayun-200 px-4 py-3 text-sm text-sayun-900 placeholder:text-sayun-300 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all duration-200"
                        placeholder="email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-sayun-700 mb-1.5">
                        {isRtl ? "رقم الجوال" : "Phone"}
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full rounded-xl border border-sayun-200 px-4 py-3 text-sm text-sayun-900 placeholder:text-sayun-300 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all duration-200"
                        placeholder="+967 XXX XXX XXX"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-sayun-700 mb-1.5">
                      {isRtl ? "الموضوع" : "Subject"}
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-xl border border-sayun-200 px-4 py-3 text-sm text-sayun-900 placeholder:text-sayun-300 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all duration-200"
                      placeholder={isRtl ? "موضوع الرسالة" : "Message subject"}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-sayun-700 mb-1.5">
                      {isRtl ? "الرسالة" : "Message"}
                    </label>
                    <textarea
                      rows={5}
                      required
                      className="w-full rounded-xl border border-sayun-200 px-4 py-3 text-sm text-sayun-900 placeholder:text-sayun-300 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all duration-200 resize-none"
                      placeholder={isRtl ? "اكتب رسالتك هنا..." : "Write your message here..."}
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-xl bg-gold-400 px-8 py-3.5 text-sm font-semibold text-sayun-950 hover:bg-gold-500 transition-all duration-300 shadow-lg shadow-gold-400/20 active:scale-[0.97]"
                  >
                    {isRtl ? "إرسال" : "Send Message"}
                  </button>
                </form>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-sayun-900 mb-8">
                  {isRtl ? "معلومات الاتصال" : "Contact Information"}
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-5 rounded-xl bg-sayun-50">
                    <MapPin size={20} className="text-gold-400 shrink-0 mt-0.5" weight="fill" />
                    <div>
                      <h4 className="text-sm font-semibold text-sayun-900 mb-1">
                        {isRtl ? "العنوان" : "Address"}
                      </h4>
                      <p className="text-sm text-sayun-500">
                        {isRtl ? "شارع التحرير، صنعاء، اليمن" : "Al-Tahreer Street, Sana'a, Yemen"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 rounded-xl bg-sayun-50">
                    <Phone size={20} className="text-gold-400 shrink-0 mt-0.5" weight="fill" />
                    <div>
                      <h4 className="text-sm font-semibold text-sayun-900 mb-1">
                        {isRtl ? "الهاتف" : "Phone"}
                      </h4>
                      <a href="tel:00967777033002" className="block text-sm text-sayun-500 hover:text-gold-600 transition-colors">00967-777-033-002</a>
                      <a href="tel:00967777081000" className="block text-sm text-sayun-500 hover:text-gold-600 transition-colors">00967-777-081-000</a>
                      <a href="tel:009671274839" className="block text-sm text-sayun-500 hover:text-gold-600 transition-colors">00967-01-274839</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 rounded-xl bg-sayun-50">
                    <Envelope size={20} className="text-gold-400 shrink-0 mt-0.5" weight="fill" />
                    <div>
                      <h4 className="text-sm font-semibold text-sayun-900 mb-1">
                        {isRtl ? "البريد الإلكتروني" : "Email"}
                      </h4>
                      <a href="mailto:info@sayunmedical.com" className="block text-sm text-sayun-500 hover:text-gold-600 transition-colors">info@sayunmedical.com</a>
                      <a href="mailto:sayunmedical@y.net.ye" className="block text-sm text-sayun-500 hover:text-gold-600 transition-colors">sayunmedical@y.net.ye</a>
                      <a href="mailto:sayunmedical@yahoo.com" className="block text-sm text-sayun-500 hover:text-gold-600 transition-colors">sayunmedical@yahoo.com</a>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/967777033002"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-5 rounded-xl bg-green-50 hover:bg-green-100 transition-colors group"
                  >
                    <WhatsappLogo size={24} className="text-green-500" weight="fill" />
                    <div>
                      <p className="text-sm font-semibold text-green-700 group-hover:text-green-800 transition-colors">
                        {isRtl ? "تواصل عبر واتساب" : "Chat on WhatsApp"}
                      </p>
                      <p className="text-xs text-green-500">
                        {isRtl ? "رد سريع خلال ساعات العمل" : "Quick reply during working hours"}
                      </p>
                    </div>
                  </a>
                </div>

                <div className="mt-8 rounded-2xl overflow-hidden border border-sayun-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1923.7505070735856!2d44.203542802465336!3d15.349329123789218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1603dbaa22f680a7%3A0xd4194e270af6b5c8!2z2LPZitim2YjZhiDZhNmE2KfYrNmH2LLYqSDYp9mE2LfYqNmK2Kk!5e0!3m2!1sen!2s!4v1509290301308"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={isRtl ? "موقع مؤسسة سيئون" : "Sayun Medical Location"}
                  />
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
