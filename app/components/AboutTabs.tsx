"use client";

import { useState, useEffect } from "react";
import { MdOutlineCenterFocusStrong } from "react-icons/md";
import { GiArcheryTarget, GiGoldStack } from "react-icons/gi";
import { RiPoliceBadgeLine } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";

type AboutSectionProps = {
  locale: string;
};

export default function AboutSection({ locale }: AboutSectionProps) {
  const isAr = locale === "ar";

  const tabs = isAr
    ? [
        {
          key: "vision",
          label: "رؤيتنا",
          icon: <MdOutlineCenterFocusStrong size={26} />,
          content:
            "أن نكون الخيار الأول في المملكة والمنطقة لتقديم حلول رقمية وأمنية مبتكرة تمكّن المؤسسات من مواكبة التغيّرات وتحقيق الاستدامة الرقمية.",
        },
        {
          key: "mission",
          label: "رسالتنا",
          icon: <GiArcheryTarget size={26} />,
          content:
            "أن نكون الخيار الأول في المملكة والمنطقة لتقديم حلول رقمية وأمنية مبتكرة تمكّن المؤسسات من مواكبة التغيّرات وتحقيق الاستدامة الرقمية.",
        },
        {
          key: "values",
          label: "قيمنا",
          icon: <GiGoldStack size={26} />,
          content: "الابتكار، الثقة، الشفافية، والعمل الجماعي لتحقيق التميّز.",
        },
        {
          key: "achievements",
          label: "إنجازاتنا",
          icon: <RiPoliceBadgeLine size={26} />,
          content:
            "نفخر بتحقيق مشاريع رقمية ناجحة تسهم في تطوير التحول الرقمي بالمملكة.",
        },
      ]
    : [
        {
          key: "vision",
          label: "Our Vision",
          icon: <MdOutlineCenterFocusStrong size={26} />,
          content:
            "To be the first choice in the Kingdom and the region for providing innovative and secure digital solutions that enable organizations to adapt and achieve digital sustainability.",
        },
        {
          key: "mission",
          label: "Our Mission",
          icon: <GiArcheryTarget size={26} />,
          content:
            "To be the leading choice in the Kingdom and region for delivering innovative, secure digital solutions that enable organizations to adapt and achieve digital sustainability.",
        },
        {
          key: "values",
          label: "Our Values",
          icon: <GiGoldStack size={26} />,
          content:
            "Innovation, trust, transparency, and teamwork to achieve excellence.",
        },
        {
          key: "achievements",
          label: "Our Achievements",
          icon: <RiPoliceBadgeLine size={26} />,
          content:
            "We are proud of our successful digital projects that contribute to digital transformation in the Kingdom.",
        },
      ];

  const [active, setActive] = useState("mission");
  const activeTab = tabs.find((t) => t.key === active);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section dir={isAr ? "rtl" : "ltr"} className="my-16 px-4 sm:px-6">
      <div className="max-w-4xl md:max-w-5xl mx-auto flex flex-col md:flex-row border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
        {/* Tabs */}
        <div
          className="bg-gray-50 p-4 md:w-48 md:flex md:flex-col md:gap-4 grid grid-cols-2 gap-2 justify-items-center md:justify-items-start"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`flex items-center justify-center md:justify-start w-full rounded-md py-3 transition-all duration-200 ${
                active === tab.key
                  ? "bg-blue-700 text-white font-semibold"
                  : "bg-[#EFEFEF] text-gray-700 font-semibold hover:bg-blue-50"
              }`}
            >
              <span className="mx-2">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div
          className="flex-1 px-4 sm:px-6 py-6 md:p-8 flex items-center justify-center text-center"
          data-aos="fade-up"
        >
          <p className="text-blue-900 text-lg sm:text-xl md:text-xl font-semibold leading-relaxed max-w-2xl">
            {activeTab?.content}
          </p>
        </div>
      </div>
    </section>
  );
}
