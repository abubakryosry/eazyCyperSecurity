"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getWhy } from "../../lib/api";
import AOS from "aos";
import "aos/dist/aos.css";

type WhyProps = {
  locale: string;
};

// تحديد نوع العنصر اللي هيتعرض من API
interface WhyItem {
  id: number;
  point: string;
}

export default function WhyUs({ locale }: WhyProps) {
  const isAr = locale === "ar";
  const [data, setData] = useState<WhyItem[]>([]);

  useEffect(() => {
    // Fetch data on client-side
    const fetchData = async () => {
      const res: WhyItem[] = await getWhy(locale);
      setData(res);
    };
    fetchData();

    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
    });
  }, [locale]);

  const sectors = [
    { ar: "الجامعات", en: "Universities" },
    { ar: "التجارة الإلكترونية", en: "E-commerce" },
    { ar: "شركات الاتصالات والطاقة", en: "Telecom & Energy Companies" },
    { ar: "السياحة والفنادق", en: "Tourism & Hotels" },
    { ar: "شركات المقاولات والبنية التحتية", en: "Construction & Infrastructure" },
    { ar: "الجهات الحكومية", en: "Government Entities" },
    { ar: "النقل والخدمات اللوجستية", en: "Transport & Logistics" },
    { ar: "شركات التأمين", en: "Insurance Companies" },
    { ar: "شركات السيارات", en: "Automotive Companies" },
    { ar: "الشركات الصغيرة والمتوسطة", en: "SMEs" },
    { ar: "التصنيع والصناعة", en: "Manufacturing & Industry" },
  ];

  const row1 = sectors.slice(0, 3);
  const row2 = sectors.slice(3, 7);
  const row3 = sectors.slice(7, 11);

  return (
    <section
      dir={isAr ? "rtl" : "ltr"}
      className="relative py-16 overflow-hidden text-white"
    >
      {/* Background image with blur */}
      <div
        className="absolute inset-0 bg-cover"
        style={{ backgroundImage: "url(/Backgroun30.webp)" }}
      ></div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #0D2565, #204AB0)",
          opacity: 0.9,
        }}
      ></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-0 space-y-10 md:space-y-0 md:space-x-10">
        {/* Texts */}
        <div className="flex items-start" data-aos="fade-up">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {isAr ? "لماذا نحن؟" : "Why Us?"}
            </h2>
            <ul className="list-none space-y-3 text-gray-300">
              {data.map((item) => (
                <li
                  key={item.id}
                  className="text-lg hover:text-blue-500 transition-colors"
                  data-aos="fade-up"
                  data-aos-delay={50 * item.id} // staggered animation
                >
                  <Image
                    src="/check-icon.png"
                    alt="check icon"
                    width={20}
                    height={20}
                    className="inline-block me-2 mb-1"
                  />
                  {item.point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Images */}
        <div
          className="flex flex-col items-center w-72 justify-center bg-[#F2FBFF] p-4 rounded-lg shadow-lg"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <Image src="/logo.png" width={150} height={150} alt="logo" priority />
          <Image
            src="/logo-text.png"
            width={150}
            height={165}
            alt="logo-text"
            priority
          />
        </div>
      </div>

      <div className="relative z-10 mt-12">
        <h3 className="text-xl md:text-3xl font-medium text-center text-white my-8" data-aos="fade-up">
          {isAr ? "القطاعات المستهدفة" : "Target Sectors"}
        </h3>
        <div className="space-y-4">
          {[row1, row2, row3].map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap justify-center gap-3"
              data-aos="fade-up"
              data-aos-delay={rowIndex * 100}
            >
              {row.map((item, i) => (
                <div
                  key={i}
                  className="bg-[#F2FBFF] text-[#0C2551] rounded-full px-4 py-2 font-medium text-sm sm:text-base"
                >
                  {isAr ? item.ar : item.en}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
