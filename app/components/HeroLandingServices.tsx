import Image from "next/image";
import Link from "next/link";

type HeroServicesLandProps = { locale: string };
export default function HeroLandingServices({ locale }: HeroServicesLandProps) {
  return (
    <div className="bg-[#0b2b66] py-2 z-20">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-around items-center gap-8 md:gap-16">
        {/* Cloud Hosting */}
        <Link
          href={locale == "ar" ? "/ar/services/service1" : "/en/services/service1"}
          className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
        >
          <Image
            src="/sh1.png"
            alt="Cloud Hosting"
            width={140}
            height={135}
          />
        </Link>

        {/* AI Solutions */}
        <Link
          href={locale == "ar" ? "/ar/services/service1" : "/en/services/service1"}
          className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
        >
          <Image
            src="/sh2.png"
            alt="AI Solutions"
            width={140}
            height={135}
          />
        </Link>

        {/* Data Analysis */}
        <Link
          href={locale == "ar" ? "/ar/services/service1" : "/en/services/service1"}
          className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
        >
          <Image
            src="/sh3.png"
            alt="Data Analysis"
            width={140}
            height={135}
          />
        </Link>

        {/* Cybersecurity */}
        <Link
          href={locale == "ar" ? "/ar/services/service1" : "/en/services/service1"}
          className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
        >
          <Image
            src="/sh4.png"
            alt="Cybersecurity"
            width={140}
            height={135}
          />
        </Link>
      </div>
    </div>
  );
}
