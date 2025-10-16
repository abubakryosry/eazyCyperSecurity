"use client";

import Image from "next/image";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { locale } = useLanguage();
  const isAr = locale === "ar";

  const content = {
    ar: {
      about: "عن الشركة",
      home: "الرئيسية",
      services: "الخدمات",
      contact: "تواصل معنا",
      quote: "طلب عرض سعر",
      serviceTitle: "الخدمات",
      cybersecurity: "الأمن السيبراني",
      consulting: "الاستشارات التقنية",
      apps: "تطوير التطبيقات",
      web: "تصميم المواقع",
      contactUs: "تواصل معنا",
      phone: "هاتف",
      email: "بريد إلكتروني",
      rights: "جميع الحقوق محفوظة لصالح شركة Eazy Cyber Agent - 2026",
      desc: "شركة سعودية متخصصة في الأمن السيبراني والتحول الرقمي. نقدم حلولًا متكاملة في الذكاء الاصطناعي، البيانات الضخمة والخدمات السحابية.",
    },
    en: {
      about: "About",
      home: "Home",
      services: "Services",
      contact: "Contact",
      quote: "Request a Quote",
      serviceTitle: "Services",
      cybersecurity: "Cybersecurity",
      consulting: "IT Consulting",
      apps: "App Development",
      web: "Web Design",
      contactUs: "Contact Us",
      phone: "Phone",
      email: "Email",
      rights: "All rights reserved © Eazy Cyber Agent - 2026",
      desc: "A Saudi company specializing in cybersecurity and digital transformation. We provide integrated solutions in AI, Big Data, and Cloud Services.",
    },
  };

  const t = content[isAr ? "ar" : "en"];

  return (
    <footer
      dir={isAr ? "rtl" : "ltr"}
      className="bg-white border-t border-gray-200 text-gray-700"
    >
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <Image
            src="/logo-footer.png"
            width={100}
            height={60}
            priority
            alt="Eazy Cyber Agent Logo"
            className="h-10 mb-4"
          />
          <p className="text-sm leading-6">{t.desc}</p>
          <div className="flex gap-3 mt-4">
            <a
              href="https://www.linkedin.com/company/eazycyber/"
              className="p-2 border rounded-full hover:bg-gray-100"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://x.com/eazycyber"
              className="p-2 border rounded-full hover:bg-gray-100"
              aria-label="Twitter / X"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com/eazycyber"
              className="p-2 border rounded-full hover:bg-gray-100"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* About Links */}
        <div>
          <h3 className="font-semibold mb-3">{t.about}</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">{t.home}</a>
            </li>
            <li>
              <a href="#">{t.services}</a>
            </li>
            <li>
              <a href="#">{t.contact}</a>
            </li>
            <li>
              <a href="#">{t.quote}</a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-3">{t.serviceTitle}</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">{t.cybersecurity}</a>
            </li>
            <li>
              <a href="#">{t.consulting}</a>
            </li>
            <li>
              <a href="#">{t.apps}</a>
            </li>
            <li>
              <a href="#">{t.web}</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">{t.contactUs}</h3>
          <ul className="space-y-2 text-sm">
            <li>
              {t.phone}:{" "}
              <span className="block">
                <a href="tel:+9661234564">+9661234564</a>
              </span>
            </li>
            <li>
              {t.email}:{" "}
              <span className="block">
                <a href="mailto:example@eazycyber.sa">
                  example@eazycyber.sa
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm border-t border-gray-200 py-4">
        {t.rights}
      </div>
    </footer>
  );
}
