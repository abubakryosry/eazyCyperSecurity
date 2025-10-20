// components/ClientLayout.tsx
"use client";

import { useLanguage } from "@/context/LanguageContext";
import Footer from "./Footer";
import NavbarServer from "./NavbarServer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { locale } = useLanguage();
  const isAr = locale === "ar";

  return (
    <div dir={isAr ? "rtl" : "ltr"}>
      <NavbarServer locale={locale} />
      {children}
      <Footer />
    </div>
  );
}
