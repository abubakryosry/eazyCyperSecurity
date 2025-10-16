// page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import HeroServices from "../../components/HeroServices";
import ServicesCardsServer from "../../components/ServicesCards";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params; // لازم await
  return {
    title: locale === "ar" ? "خدماتنا" : "Services",
    description: locale === "ar" ? "صفحة الخدمات" : "Services Page",
  };
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params; 

  if (!["en", "ar"].includes(locale)) {
    notFound();
  }

  return (
    <>
      <HeroServices locale={locale} />
      <ServicesCardsServer locale={locale} />
      
    </>
  );
}
