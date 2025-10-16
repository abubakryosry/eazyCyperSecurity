// components/ClientLayout.tsx
"use client";

import { useLanguage } from "@/context/LanguageContext";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { locale } = useLanguage();
  const isAr = locale === "ar";

  return (
    <div dir={isAr ? "rtl" : "ltr"}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
