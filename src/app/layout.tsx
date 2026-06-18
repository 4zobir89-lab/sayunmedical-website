import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "مؤسسة سيئون للأجهزة والمعدات الطبية",
  description: "شريكك الموثوق في الرعاية الصحية في اليمن منذ 1998",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
