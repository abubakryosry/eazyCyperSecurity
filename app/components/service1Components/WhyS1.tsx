import Image from "next/image";

type WhyChooseUsProps = {
  locale: string;
};

export default function WhyS1({ locale }: WhyChooseUsProps) {
  const isAr = locale === "ar";

  const items = [
    {
      imgSrc: "/ws11.png",
      title: isAr ? "حماية شاملة 360°" : "Certified Cybersecurity Experts",
      text: isAr
        ? "فريقنا يضم نخبة من الخبراء المعتمدين في الأمن السيبراني لتقديم حلول احترافية."
        : "Our team includes certified cybersecurity experts offering professional solutions.",
    },
    {
      imgSrc: "/ws12.png",
      title: isAr ? "فريق خبراء معتمدين" : "Customized Strategies",
      text: isAr
        ? "نقوم بتصميم حلول تناسب احتياجات عملك بدقة وكفاءة عالية."
        : "We tailor solutions that perfectly fit your business needs.",
    },
    {
      imgSrc: "/ws13.png",
      title: isAr ? "دعم فني مستمر" : "Continuous Technical Support",
      text: isAr
        ? "نوفر دعمًا فنيًا على مدار الساعة لضمان استمرارية الأمان."
        : "We provide 24/7 technical support to ensure ongoing protection.",
    },
    {
      imgSrc: "/ws14.png",
      title: isAr ? "ثقة وموثوقية عالية" : "High Trust & Reliability",
      text: isAr
        ? "نلتزم بالشفافية التامة لضمان ثقة عملائنا في خدماتنا."
        : "We maintain full transparency to earn our clients’ trust.",
    },
    {
      imgSrc: "/ws15.png",
      title: isAr ? "تقنيات متقدمة" : "Advanced Technologies",
      text: isAr
        ? "نستخدم أحدث التقنيات لحماية بياناتك من التهديدات الرقمية المتطورة."
        : "We use the latest technologies to protect your data from evolving digital threats.",
    },
    {
      imgSrc: "/ws16.png",
      title: isAr ? "استجابة فورية ودعم مستمر" : "Immediate Response & Ongoing Support",
      text: isAr
        ? "نستجيب بسرعة لأي تهديد لضمان استمرار أعمالك بأمان."
        : "We respond instantly to any threat to keep your business safe.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <h2
        className={`text-2xl sm:text-3xl font-bold mb-10 text-center text-[#0C2551] ${
          isAr ? "font-cairo" : ""
        }`}
      >
        {isAr
          ? "لماذا تختار خدمات الأمن السيبراني لدينا؟"
          : "Why Choose Our Cybersecurity Services?"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              isAr ? "items-start text-right" : "items-end text-left"
            } border border-gray-200 rounded-2xl shadow-sm p-5 sm:p-6 hover:shadow-md transition`}
          >
            <div className="mb-4">
              <Image src={item.imgSrc} alt={item.title} width={56} height={56} />
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
