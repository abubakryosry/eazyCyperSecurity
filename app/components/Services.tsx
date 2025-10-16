import Link from "next/link";
import ServicesCardsServer from "./ServicesCards";

type ServicesProps = {
  locale: string;
};

export default async function ServicesServer({ locale }: ServicesProps) {
  return (
    <section
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="text-gray-800 py-8"
    >
      <div className="max-w-6xl mx-auto flex flex-col ">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-10">
            {locale === "ar" ? "خدماتنا" : "Our Services"}
          </h2>
        </div>

        <div className="flex justify-between items-center">
          <p className="font-normal text-md md:text-xl">
            {locale === "ar"
              ? "حلول تقنية متكاملة ومبتكرة تدعم نمو أعمالك وتحمي بياناتك وتمنحك ميزة تنافسية مستدامة."
              : "Comprehensive and innovative technology solutions that support your business growth, protect your data, and give you a sustainable competitive edge."}
          </p>

          <Link
            href={locale === "ar" ? "/ar/services" : "/en/services"}
            className="font-semibold text-md md:text-xl px-12 py-2 rounded-xl border border-blue-600 hover:bg-blue-700 transition inline-block text-center"
          >
            {locale === "ar" ? "تصفح خدماتنا" : "Browse Our Services"}
          </Link>
        </div>
        <ServicesCardsServer locale={locale} />
      </div>
    </section>
  );
}
