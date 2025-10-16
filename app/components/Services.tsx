import Link from "next/link";
import ServicesCardsServer from "./ServicesCards";

type ServicesProps = {
  locale: string;
};

export default async function ServicesServer({ locale }: ServicesProps) {
  return (
    <section
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="text-gray-800 py-8 px-4 sm:px-6 md:px-8"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {/* Section Title */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 mt-6 sm:mt-8">
            {locale === "ar" ? "خدماتنا" : "Our Services"}
          </h2>
        </div>

        {/* Description + Button */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 sm:gap-6">
          <p className="font-normal text-md sm:text-lg md:text-xl flex-1">
            {locale === "ar"
              ? "حلول تقنية متكاملة ومبتكرة تدعم نمو أعمالك وتحمي بياناتك وتمنحك ميزة تنافسية مستدامة."
              : "Comprehensive and innovative technology solutions that support your business growth, protect your data, and give you a sustainable competitive edge."}
          </p>

          <Link
            href={locale === "ar" ? "/ar/services" : "/en/services"}
            className="font-semibold text-md sm:text-lg md:text-xl px-6 sm:px-8 py-2 rounded-xl border border-blue-600 hover:bg-blue-700 transition text-center md:whitespace-nowrap"
          >
            {locale === "ar" ? "تصفح خدماتنا" : "Browse Our Services"}
          </Link>
        </div>

        {/* Services Cards */}
        <div className="mt-8">
          <ServicesCardsServer locale={locale} />
        </div>
      </div>
    </section>
  );
}
