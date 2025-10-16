import Image from "next/image";

type ServicesSectionProps = {
  locale: string;
};

export default function ServicesSection({ locale }: ServicesSectionProps) {
  const isAr = locale === "ar";

  const services = [
    {
      imgSrc: "/ws11.png",
      title: isAr ? "تقييم وتحليل الثغرات" : "Vulnerability Assessment",
      text: isAr
        ? "نقوم بفحص شامل للبنية التحتية الرقمية لاكتشاف الثغرات الأمنية المحتملة."
        : "We conduct a full scan of your digital infrastructure to detect potential vulnerabilities.",
    },
    {
      imgSrc: "/ws12.png",
      title: isAr ? "الاستجابة للحوادث السيبرانية" : "Incident Response",
      text: isAr
        ? "نستجيب بسرعة لأي تهديدات سيبرانية لتقليل الخسائر وضمان استعادة النظام."
        : "We respond rapidly to cyber incidents to minimize damage and restore systems quickly.",
    },
    {
      imgSrc: "/ws13.png",
      title: isAr ? "تدريب وتوعية الموظفين" : "Employee Training & Awareness",
      text: isAr
        ? "نقدم برامج توعية وتدريب لتقليل الأخطاء البشرية وتعزيز ثقافة الأمان."
        : "We deliver training programs to reduce human error and build security awareness.",
    },
    {
      imgSrc: "/ws14.png",
      title: isAr ? "الامتثال للمعايير واللوائح" : "Compliance & Regulations",
      text: isAr
        ? "نساعد شركتك في الامتثال لمعايير الأمان العالمية مثل ISO وNCA وغيرها."
        : "We help your company comply with security standards like ISO, NCA, and more.",
    },
    {
      imgSrc: "/ws15.png",
      title: isAr ? "اختبار الاختراق الأخلاقي" : "Ethical Penetration Testing",
      text: isAr
        ? "نقوم بمحاكاة هجمات إلكترونية لاختبار قدرة نظامك على الصمود."
        : "We simulate cyberattacks to test your system’s resilience.",
    },
    {
      imgSrc: "/ws16.png",
      title: isAr ? "مراقبة الأنظمة الأمنية" : "Security System Monitoring",
      text: isAr
        ? "نوفر مراقبة مستمرة للبنية التحتية لتحديد التهديدات قبل حدوثها."
        : "We offer continuous infrastructure monitoring to detect threats before they occur.",
    },
  ];

  return (
    <section className="py-20 bg-[#0B0B22] text-[#0B0B22]">
      <h2
        className={`text-2xl sm:text-3xl font-bold mb-12 text-center ${
          isAr ? "font-cairo" : ""
        }`}
      >
        {isAr ? "الخدمات التي نقدمها" : "Our Services"}
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] mx-auto">
        {services.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center bg-white rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition`}
          >
            <div className="mb-4">
              <Image src={item.imgSrc} alt={item.title} width={56} height={56} />
            </div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-[0B0B22] text-sm sm:text-base">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
