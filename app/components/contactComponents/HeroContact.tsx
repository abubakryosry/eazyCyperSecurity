import Image from "next/image";

type HeroContactProps = { locale: string };

export default async function HeroContact({ locale }: HeroContactProps) {
  const isAr = locale === "ar";

  const cyberContent = {
    ar: {
      title: "تواصل معنا الآن",
      description:
        "ابقي علي تواصل معنا ، للاستفسارات وطلب خدماتنا وعروض الأسعار.. يمكنك التواصل معنا عبر القنوات المختلفة او ارسال رسالة مباشرة...",
      button: "احصل على عرض سعر",
      imageAlt: "درع الأمن السيبراني",
    },
    en: {
      title: "Contact Us NOW",
      description:
        "Stay in touch with us for inquiries, service requests, and price quotes. You can contact us through various channels or send a direct message.",
      button: "Get a Quote",
      imageAlt: "Cybersecurity Shield",
    },
  };

  const t = isAr ? cyberContent.ar : cyberContent.en;

  return (
    <section
      dir={isAr ? "rtl" : "ltr"}
      className="bg-[#0a0a2a] text-white py-24 px-4 sm:px-8 md:px-16 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 text-center md:text-start">
        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold leading-snug mb-3 bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
            {t.description}
          </p>

          <button
            className={`mt-4 bg-blue-700 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-xl w-fit transition ${
              isAr ? "self-end md:self-start" : "self-start"
            } md:mx-0 mx-auto`}
          >
            {t.button}
          </button>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-blue-500/30">
            <Image
              src="/image 4.png"
              alt={t.imageAlt}
              width={400}
              height={350}
              className="w-full max-w-[350px] h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Soft gradient background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-transparent to-blue-800/40 pointer-events-none"></div>
    </section>
  );
}
