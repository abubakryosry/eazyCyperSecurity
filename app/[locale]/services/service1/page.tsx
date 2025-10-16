// app/[locale]/services/service1/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import HeroS1 from "../../../components/service1Components/HeroS1";
import WhyS1 from "../../../components/service1Components/WhyS1";
import ContactForm from "../../../components/contactComponents/ContactForm";
import S1Services from "../../../components/service1Components/S1Services";
import HowWeWork from "../../../components/service1Components/HowWeWork";

type PageProps = {
  params: { locale: string };
};

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = params;
  if (!["en", "ar"].includes(locale)) {
    notFound();
  }

  return {
    title: locale === "ar" ? "خدمة 1" : "Service 1",
    description: locale === "ar" ? "صفحة خدمة 1" : "Service 1 Page",
  };
}

// The main component (async server component)
export default async function Service1Page({ params }: PageProps) {
  const { locale } = params;

  if (!["en", "ar"].includes(locale)) {
    notFound();
  }

  return (
    <>
      <HeroS1 locale={locale} />
      <WhyS1 locale={locale} />
      <S1Services locale={locale} />
      <HowWeWork locale={locale} />
      <ContactForm locale={locale} />
      </>
  );
}
