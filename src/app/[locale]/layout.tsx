import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Inter, Tajawal } from "next/font/google";
import { routing } from "@/i18n/routing";
import "../globals.css";

const locales = ["ar", "en"];

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  variable: "--font-tajawal",
  display: "swap",
  weight: ["300", "400", "500", "700", "800"],
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const title = locale === "ar" ? "مؤسسة سيئون الطبية" : "Sayun Medical Corporation";
  const description = locale === "ar"
    ? "مؤسسة سيئون للأجهزة والمعدات الطبية — شريكك الموثوق في الرعاية الصحية منذ 1998"
    : "Sayun Corporation for Medical Appliances — Your trusted partner in healthcare since 1998";

  return {
    title,
    description,
    icons: { icon: "/favicon.svg" },
    openGraph: { title, description, type: "website", locale: locale === "ar" ? "ar_AR" : "en_US" },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!locales.includes(locale)) notFound();

  const messages = await getMessages();
  const isRtl = locale === "ar";

  return (
    <html lang={locale} dir={isRtl ? "rtl" : "ltr"} className={`${inter.variable} ${tajawal.variable}`}>
      <body style={{ margin: 0, fontFamily: "inherit" }}>
        <NextIntlClientProvider messages={messages}>
          <div className={`${isRtl ? "rtl" : "ltr"} min-h-screen`}
            style={{ background: "var(--color-bg)", color: "var(--color-text)" }}>
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
