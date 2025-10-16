"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

type ServicesProps = {
  locale: string;
};

export default function ServicesCards({ locale }: ServicesProps) {
  const isAr = locale === "ar";

  const servicesData = [
    {
      titleAr: " حلول الذكاء الاصطناعي (AI Solutions)",
      titleEn: "AI Solutions",
      textsAr: [
        "روبوتات محادثة (Chatbots) لخدمة العملاء",
        "التحليلات التنبؤية لاتخاذ قرارات دقيقة",
        "أنظمة ذكية لاكتشاف التهديدات السيبرانية في الوقت الفعلي",
      ],
      textsEn: [
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
      ],
      image: "/s1T.png",
      link: isAr ? "/ar/contactUs" : "/en/contactUs",
      imgLeft: false,
    },
    {
      titleAr: "البيانات الضخمة والتحليلات (Big Data & Analytics)",
      titleEn: "Big Data & Analytics",
      textsAr: [
        "إنشاء و إدارة مستودعات بيانات",
        "لوحات تحكم ذكية لدعم صناع القرار",
        "كشف الاحتيال عبر التحليلات المتقدمة",
        "إدارة حوكمة البيانات بما يتوافق مع نظام حماية البيانات الشخصية السعودي",
      ],
      textsEn: [
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
      ],
      image: "/s2T.png",
      link: isAr ? "/ar/contactUs" : "/en/contactUs",
      imgLeft: true,
    },
    {
      titleAr: " خدمات الأمن السيبراني (Cybersecurity Services)",
      titleEn: "Cybersecurity Services",
      textsAr: [
        "اختبارات اختراق وتقييم الثغرات.",
        "إدارة المخاطر والامتثال وفق NCA وISO 27001",
        "مراكز عمليات أمنية (SOC) واستجابة للحوادث",
        "تدريبات محاكاة للتصيد والهندسة الاجتماعية",
      ],
      textsEn: [
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
      ],
      image: "/s3T.png",
      link: isAr ? "/ar/contactUs" : "/en/contactUs",
      imgLeft: false,
    },
    {
      titleAr: "الحوسبة السحابية والاستضافة  (Cloud Computing & Hosting)",
      titleEn: "Cloud Computing & Hosting",
      textsAr: [
        "استضافة آمنة متوافقة مع الأنظمة السعودية",
        "حلول النسخ الاحتياطي والتعافي من الكوارث",
        "تشفير البيانات وجدران حماية افتراضية",
        "إدارة الهوية والوصول (IAM)",
      ],
      textsEn: [
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
      ],
      image: "/s4T.png",
      link: isAr ? "/ar/contactUs" : "/en/contactUs",
      imgLeft: true,
    },
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section
      dir={isAr ? "rtl" : "ltr"}
      className="text-gray-800 py-8 max-w-6xl mx-auto flex flex-col gap-6"
    >
      {servicesData.map((service, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center justify-between gap-6 bg-white rounded-xl p-6 md:p-10 shadow ${
            service.imgLeft ? "" : "md:flex-row-reverse"
          }`}
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
           {/* Image */}
          <div>
            <Image
              src={service.image}
              alt={isAr ? service.titleAr : service.titleEn}
              width={450}
              height={400}
              className="rounded-xl object-cover"
            />
          </div>
          {/* Text */}
          <div className="md:w-1/2 flex flex-col items-start gap-3 text-center md:text-start">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
              {isAr ? service.titleAr : service.titleEn}
            </h2>
            {(isAr ? service.textsAr : service.textsEn).map((text, i) => (
              <p key={i} className="text-gray-600 font-normal text-md md:text-xl">
                {text}
              </p>
            ))}
            <Link
              href={service.link}
              className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-2xl transition-all inline-block text-center"
            >
              {isAr ? "طلب الخدمة" : "Request The Service"}
            </Link>
          </div>

         
        </div>
      ))}
    </section>
  );
}
