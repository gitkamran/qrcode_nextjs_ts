import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ScrollTopButton from "@/components/scroll-top-button/ScrollTopButton";

export const metadata: Metadata = {
  title: "ایجاد QR Code سریع و رایگان",
  description: "ساخت و ایجاد QR Code | سریع و رایگان | کیو آر کد رایگان",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body>
        <Header />
        <ScrollTopButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
