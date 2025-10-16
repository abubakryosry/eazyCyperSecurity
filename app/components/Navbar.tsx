"use client";

import Link from "next/link";
import { FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const { locale, setLanguage } = useLanguage();
  const isAr = locale === "ar";

  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleLanguage = () => {
    const newLang = isAr ? "en" : "ar";
    setLanguage(newLang);

    const pathSegments = pathname.split("/").filter(Boolean);
    if (pathSegments[0] === "ar" || pathSegments[0] === "en") {
      pathSegments[0] = newLang;
    } else {
      pathSegments.unshift(newLang);
    }

    const newPath = "/" + pathSegments.join("/");
    router.push(newPath);
  };

  const link = (path: string) => `/${locale}${path === "/" ? "" : path}`;

  const navItems = isAr
    ? [
        { name: "الرئيسية", href: link("/") },
        { name: "من نحن؟", href: link("/") },
        { name: "خدماتنا", href: link("/services") },
        { name: "اعمالنا", href: link("/") },
        { name: "تواصل معنا", href: link("/contactUs") },
      ]
    : [
        { name: "Home", href: link("/") },
        { name: "About", href: link("/") },
        { name: "Services", href: link("/services") },
        { name: "Our Work", href: link("/") },
        { name: "Contact", href: link("/contactUs") },
      ];

  return (
    <nav
      dir={isAr ? "rtl" : "ltr"}
      className="w-full lg:w-[70%] absolute top-4 left-1/2 -translate-x-1/2 z-50 bg-transparent lg:bg-[#1B1B1B29]/50 lg:backdrop-blur-md lg:shadow-md rounded-3xl text-white"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Hamburger for sm/md screens - always on left */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="hover:text-[#00AEEF] transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={handleToggleLanguage}
            className="bg-transparent border border-white rounded-full px-4 py-2 flex items-center gap-2 text-sm hover:bg-white hover:text-[#002b7f] transition"
          >
            <FaGlobe size={14} /> {isAr ? "English" : "العربية"}
          </button>

          <Link href={`/${locale}/contactUs`}>
            <button className="bg-blue-700 hover:bg-[#0090d1] text-white px-4 py-2 rounded-full text-sm font-medium transition">
              {isAr ? "احصل على عرض سعر" : "Get a Quote"}
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-2 bg-gray-500/10 rounded-xl px-4 pb-4">
          <ul className="flex flex-col gap-4 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="hover:text-[#00AEEF] transition-colors block"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 mt-4">
            <button
              onClick={handleToggleLanguage}
              className="bg-transparent border border-white rounded-full px-4 py-2 flex items-center gap-2 text-sm hover:bg-white hover:text-[#002b7f] transition"
            >
              <FaGlobe size={14} /> {isAr ? "English" : "العربية"}
            </button>

            <Link href={`/${locale}/contactUs`}>
              <button className="bg-blue-700 hover:bg-[#0090d1] text-white px-4 py-2 rounded-full text-sm font-medium transition w-full">
                {isAr ? "احصل على عرض سعر" : "Get a Quote"}
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
