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
      className="relative h-screen flex flex-col justify-between items-center text-white overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/Backgroun30.webp"
        alt="Background"
        fill
        className="object-cover"
        priority
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #0D2565, #204AB0)",
          opacity: 0.9,
        }}
      ></div>

      {/* Top text content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center flex-grow mt-20 px-6">
        <p className="text-lg md:text-2xl font-medium mb-3">{data?.slogan}</p>
        <h1 className="text-3xl md:text-5xl font-semibold leading-snug md:leading-[1.3] w-[90%] md:w-[70%] mb-8">
          {data?.title}
        </h1>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            href={locale === "ar" ? "/ar/contactUs" : "/en/contactUs"}
            className="flex items-center justify-center font-medium gap-2 py-2.5 px-4 rounded-xl text-white hover:text-blue-800 hover:bg-white transition-colors duration-200"
          >
            {data?.secondaryButtonText}
            <FaArrowUpLong className="rotate-[-45deg]" />
          </Link>
          <a
            href="#"
            className="bg-blue-700 text-white font-medium px-12 py-2 rounded-xl hover:bg-gray-100 hover:text-gray-700 transition"
          >
            {data?.primaryButtonText}
          </a>
        </div>
      </div>

      {/* Bottom services icons */}
      <div className="relative z-10 w-full">
        <HeroLandingServices locale={locale} />
      </div>
    </section>
  );
}
