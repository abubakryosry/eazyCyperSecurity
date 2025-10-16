"use client";

import { useState, useEffect } from "react";
import {
  MdOutlineCenterFocusStrong, // Vision
} from "react-icons/md";
import { GiArcheryTarget, GiGoldStack } from "react-icons/gi"; // Mission, Values
import { RiPoliceBadgeLine } from "react-icons/ri"; // Achievements
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

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // animate only once
    });
  }, []);

  return (
    <section
      dir={isAr ? "rtl" : "ltr"}
      className="flex flex-row-reverse border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm max-w-5xl mx-auto my-16"
    >
      {/* Text Content */}
      <div
        className="flex-1 p-8 flex items-center justify-center text-center transition-all duration-300"
        data-aos="fade-up"
      >
        <p className="text-blue-900 text-lg leading-relaxed max-w-2xl">
          {activeTab?.content}
        </p>
      </div>

      {/* Sidebar Tabs */}
      <div
        className="flex flex-col w-48 bg-gray-50 p-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={`flex items-center justify-center rounded-md py-4 mb-4 bg-[#EFEFEF] transition-all duration-200 ${
              active === tab.key
                ? " text-white font-semibold !bg-blue-700"
                : "text-gray-700 hover:bg-blue-50"
            }`}
          >
            <span
              className={`mx-2 ${
                active === tab.key ? "text-white" : "text-gray-700"
              }`}
            >
              {tab.icon}
            </span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
``