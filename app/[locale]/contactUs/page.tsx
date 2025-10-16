// page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import HeroContact from "../../components/contactComponents/HeroContact";
import ContactForm from "../../components/contactComponents/ContactForm";
import ContactCards from "../../components/contactComponents/ContactCards";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params; // لازم await
  return {
    title: locale === "ar" ? "تواصل معنا" : "Contact Us",
    description: locale === "ar" ? "صفحة التواصل" : "Contact Page",
  };
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params; 

  if (!["en", "ar"].includes(locale)) {
    notFound();
  }

  return (
    <>
      <HeroContact locale={locale} />
      <ContactCards locale={locale} />
      <ContactForm locale={locale} />
      
    </>
  );
}
