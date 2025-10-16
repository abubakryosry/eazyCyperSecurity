"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaArrowUpLong } from "react-icons/fa6";
import Link from "next/link";

type ContactProps = {
  locale: string;
};

export default function ContactUs({ locale }: ContactProps) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="relative text-white py-8 overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
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
      <div
        className="relative max-w-6xl mx-auto flex flex-col my-8 px-4 sm:px-6"
        data-aos="fade-up"
      >
        <div data-aos="fade-right" className="text-center md:text-right">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-4">
            {locale === "ar" ? "تواصل معنا" : "Contact Us"}
          </h2>
        </div>

        <div
          className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start gap-6"
          data-aos="fade-up"
        >
          <div className="flex flex-col text-center md:text-right">
            <p className="font-normal mb-3 text-md sm:text-lg md:text-xl">
              {locale === "ar"
                ? "هل لديك أسئلة أو تحتاج إلى مزيد من التفاصيل حول خدماتنا؟"
                : "Do you have questions or need to read details about our services?"}
            </p>

            <p className="font-normal text-md sm:text-lg md:text-xl">
              {locale === "ar"
                ? "فريقنا جاهز لمساعدتك والرد علي اسئلتك واستفساراتك"
                : "Our team is ready to help you and answer your inquiries."}
            </p>
          </div>

          <div className="flex justify-center md:justify-start" data-aos="zoom-in">
            <Link
              href={locale === "ar" ? "/ar/contactUs" : "/en/contactUs"}
              className="flex items-center justify-center gap-2 py-3 px-6 sm:py-3.5 sm:px-8 md:py-2 md:px-4 rounded-xl text-lg sm:text-xl md:text-2xl font-medium bg-white text-[#0C2551] hover:text-blue-900 transition-colors duration-200"
            >
              {locale === "ar" ? "تواصل معنا الآن" : "Contact Us Now"}
              <FaArrowUpLong className="rotate-[-45deg]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
