import Image from "next/image";

type HowWeWorkProps = {
  locale: string;
};

export default function HowWeWork({ locale }: HowWeWorkProps) {
  const isAr = locale === "ar";

  const steps = isAr
    ? [
        { title: "التحليل المبدئي", text: "نبدأ بفهم احتياجات العميل وتقييم الوضع الحالي للأمن السيبراني." },
        { title: "التخطيط وتصميم الحلول", text: "نضع خطة مفصلة تناسب طبيعة عملك ونقاط الضعف المكتشفة." },
        { title: "التنفيذ والتحسين المستمر", text: "نقوم بتطبيق الحلول الأمنية ومتابعة الأداء بشكل دوري." },
        { title: "الدعم والمراقبة المستمرة", text: "نوفر دعمًا دائمًا ومراقبة فورية للأنظمة لحمايتها من أي تهديد." },
      ]
    : [
        { title: "Initial Analysis", text: "We start by assessing your current cybersecurity posture." },
        { title: "Planning & Solution Design", text: "We create a detailed plan tailored to your business." },
        { title: "Implementation & Improvement", text: "We implement security measures and monitor performance." },
        { title: "Support & Continuous Monitoring", text: "We provide ongoing support and real-time system monitoring." },
      ];

  return (
    <section className="py-20 bg-white">
      <h2
        className={`text-2xl sm:text-3xl font-bold mb-16 text-center ${
          isAr ? "font-cairo" : ""
        }`}
      >
        {isAr ? "كيف نعمل؟" : "How We Work?"}
      </h2>

      {/* Steps Container */}
      <div
        className={`flex flex-col sm:flex-row items-center justify-center gap-6 w-[90%] mx-auto ${
          isAr ? "flex-row-reverse" : ""
        }`}
      >
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            {/* Step */}
            <div
              className={`flex flex-col items-center text-center max-w-[220px] ${
                isAr ? "text-right" : "text-left"
              }`}
            >
              <div className="w-14 h-14 rounded-full bg-[#0B0B22] text-white flex items-center justify-center text-lg font-bold mb-4">
                {index + 1}
              </div>
              <h3 className="text-base font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.text}</p>
            </div>

            {/* Arrow between steps */}
            {index < steps.length - 1 && (
              <div className="mx-4 hidden sm:block">
                <Image
                  src="/Vector1.png"
                  alt="arrow"
                  width={200}
                  height={150}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
