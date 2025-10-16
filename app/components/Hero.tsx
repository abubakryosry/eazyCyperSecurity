import { getHero } from "../../lib/api";
import Link from "next/link";
import { FaArrowUpLong } from "react-icons/fa6";
import Image from "next/image";
import HeroLandingServices from "./HeroLandingServices";

type HeroProps = { locale: string };

export default async function HeroServer({ locale }: HeroProps) {
  const data = await getHero(locale); // consider caching

  return (
    <section
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="relative h-auto flex flex-col justify-between items-center text-white overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/Backgroun30.webp"
        alt="Background"
        fill
        
        priority
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #0D2565, #204AB0)",
          opacity: 0.9,
        }}
      />

      {/* Top text content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center flex-grow px-4 sm:px-6 md:px-12 mt-16 md:mt-20">
        <p className="text-base sm:text-lg md:text-2xl font-medium mt-4 mb-2 md:mb-4">
          {data?.slogan}
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-snug md:leading-[1.3] max-w-[90%] sm:max-w-[80%] md:max-w-[70%] mb-6 md:mb-8">
          {data?.title}
        </h1>

        <div className="flex flex-col sm:flex-row justify-center my-4 gap-3 sm:gap-6">
          <Link
            href={locale === "ar" ? "/ar/contactUs" : "/en/contactUs"}
            className="flex items-center justify-center font-medium gap-2 py-2.5 px-6 sm:px-4 md:px-6 rounded-xl text-white bg-transparent border border-white hover:text-blue-800 hover:bg-white transition-colors duration-200 text-sm sm:text-base md:text-lg"
          >
            {data?.secondaryButtonText}
            <FaArrowUpLong className="rotate-[-45deg]" />
          </Link>
          <Link
            href={locale === "ar" ? "/ar/services" : "/en/services"}
            className="bg-blue-700 text-white font-medium py-2.5 px-6 sm:px-4 md:px-6 rounded-2xl hover:bg-gray-100 hover:text-gray-700 transition text-sm sm:text-base md:text-lg"
          >
            {data?.primaryButtonText}
          </Link>
        </div>
      </div>

      {/* Bottom services icons */}
      <div className="relative z-10 w-full">
        <HeroLandingServices locale={locale} />
      </div>
    </section>
  );
}
