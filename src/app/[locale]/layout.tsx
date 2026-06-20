import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

const locales = ["ar", "en"];

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
    <html lang={locale} dir={isRtl ? "rtl" : "ltr"}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;600;800&family=Noto+Kufi+Arabic:wght@500;700;800&family=Noto+Sans+Arabic:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, fontFamily: "inherit" }}>
        <NextIntlClientProvider messages={messages}>
          <div className={`${isRtl ? "rtl" : "ltr"} min-h-screen bg-white text-[#334155]`}>
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
