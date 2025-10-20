// page.tsx
import Hero from "../components/Hero";
import Services from "../components/Services";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import WhyUs from "../components/WhyUs";
import Testimonials from "../components/Testimonial";
import ContactUs from "../components/ContactUs";
import AboutTabs from "../components/AboutTabs";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params; // لازم await
  return {
    title: locale === "ar" ? "Eazy Cyper Agent | الصفحة الرئيسية" : "Eazy Cyper Agent | Home",
    description: locale === "ar" ? "الصفحة الرئيسية" : "Home Page",
  };
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params; 

  if (!["en", "ar"].includes(locale)) {
    notFound();
  }

  return (
    <>
      <Hero locale={locale} />
      <AboutTabs locale={locale}  />
      <Services locale={locale} />
      <WhyUs locale={locale} />
      <Testimonials locale={locale} />
      <ContactUs locale={locale} />
    </>
  );
}
