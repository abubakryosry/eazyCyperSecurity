import Image from "next/image";

type HeroProps = { locale: string };

export default async function HeroServer({ locale }: HeroProps) {
  const isAr = locale === "ar";

  const content = {
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

  const t = isAr ? content.ar : content.en;

  return (
    <section
      dir={isAr ? "rtl" : "ltr"}
      className="relative bg-[#0a0a2a] text-white py-24 px-6 md:px-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text Section */}
        <div
          className={`w-full md:w-1/2 flex flex-col gap-5 ${
            isAr ? "text-right" : "text-left"
          }`}
        >
          <h1 className="text-3xl md:text-4xl font-bold leading-snug bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent">
            {t.title}
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            {t.description}
          </p>
          <button className="mt-4 bg-blue-700 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-xl w-fit transition">
            {t.button}
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-blue-500/30 max-w-[400px]">
            <Image
              src="/s1page.png"
              alt={t.imageAlt}
              width={400}
              height={350}
              className="object-cover w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>

      {/* Soft background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-transparent to-blue-800/40 pointer-events-none"></div>
    </section>
  );
}
