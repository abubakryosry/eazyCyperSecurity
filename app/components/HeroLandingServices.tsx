import Image from "next/image";
import Link from "next/link";

type HeroServicesLandProps = { locale: string };

export default function HeroLandingServices({ locale }: HeroServicesLandProps) {
  return (
    <div className="bg-[#0b2b66]/50 py-4 z-20">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 justify-items-center items-center">
        {/* Cloud Hosting */}
        <Link
          href={locale === "ar" ? "/ar/services/service1" : "/en/services/service1"}
          className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
        >
          <Image src="/sh1.png" alt="Cloud Hosting" width={100} height={70} />
        </Link>

        {/* AI Solutions */}
        <Link
          href={locale === "ar" ? "/ar/services/service1" : "/en/services/service1"}
          className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
        >
          <Image src="/sh2.png" alt="AI Solutions" width={100} height={70} />
        </Link>

        {/* Data Analysis */}
        <Link
          href={locale === "ar" ? "/ar/services/service1" : "/en/services/service1"}
          className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
        >
          <Image src="/sh3.png" alt="Data Analysis" width={100} height={70} />
        </Link>

        {/* Cybersecurity */}
        <Link
          href={locale === "ar" ? "/ar/services/service1" : "/en/services/service1"}
          className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
        >
          <Image src="/sh4.png" alt="Cybersecurity" width={100} height={70} />
        </Link>
      </div>
    </div>
  );
}
