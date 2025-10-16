"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type LanguageContextType = {
  locale: "en" | "ar";
  toggleLanguage: () => void;
  setLanguage: (lang: "en" | "ar") => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Set default to "ar"
  const [locale, setLocale] = useState<"en" | "ar">("ar");

  // Load from localStorage on first render
  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as "en" | "ar" | null;
    if (savedLang) setLocale(savedLang);
  }, []);

  // Save to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("lang", locale);
  }, [locale]);

  const toggleLanguage = () => {
    setLocale((prev) => (prev === "en" ? "ar" : "en"));
  };

  const setLanguage = (lang: "en" | "ar") => {
    setLocale(lang);
  };

  return (
    <LanguageContext.Provider value={{ locale, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
};
