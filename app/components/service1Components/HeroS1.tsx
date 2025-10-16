

import Image from "next/image";

type HeroProps = { locale: string };

export default async function HeroServer({ locale }: HeroProps) {
  const isAr = locale === "ar";

  // Cybersecurity content
  const cyberContent = {
    ar: {
      title: "الأمن السيبراني – احمِ أعمالك من التهديدات الرقمية",
      description:
        "في عالم اليوم الرقمي، تزداد مخاطر الهجمات الإلكترونية يومًا بعد يوم. نحن في Eazy Cyber Agent نقدم حلول أمن سيبراني متكاملة تحمي بياناتك، بنيتك التقنية وممتلكاتك التجارية من أي تهديد محتمل، مع ضمان الامتثال لأعلى معايير الأمن العالمية.",
      button: "احصل على عرض سعر",
      imageAlt: "درع الأمن السيبراني",
    },
    en: {
      title: "Cybersecurity – Protect Your Business from Digital Threats",
      description:
        "In today's digital world, cyberattacks are becoming more frequent every day. At Eazy Cyber Agent, we provide comprehensive cybersecurity solutions that protect your data, IT infrastructure, and business assets from potential threats while ensuring compliance with the highest global security standards.",
      button: "Get a Quote",
      imageAlt: "Cybersecurity Shield",
    },
  };

  const t = isAr ? cyberContent.ar : cyberContent.en;

  return (
    <>
      {/* Cybersecurity Section */}
      <section
        dir={isAr ? "rtl" : "ltr"}
        className="bg-[#0a0a2a] text-white py-44 px-6 md:px-16 relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
            {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-3 bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent">
              {t.title}
            </h2>
            <p className="text-gray-300 leading-relaxed">{t.description}</p>

            <button className="mt-4 bg-blue-700 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-xl w-fit transition">
              {t.button}
            </button>
          </div>
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-blue-500/30">
              <Image
                src="/s1page.png" // place your image in public folder
                alt={t.imageAlt}
                width={400}
                height={350}
                className="object-cover"
              />
            </div>
          </div>          
        </div>

        {/* Soft gradient background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-transparent to-blue-800/40 pointer-events-none"></div>
      </section>
    </>
  );
}
