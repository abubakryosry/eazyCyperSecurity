"use client";

import Link from "next/link";
import { FaGlobe } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const { locale, toggleLanguage, setLanguage } = useLanguage();
  const isAr = locale === "ar";

  const router = useRouter();
  const pathname = usePathname(); // current page path

  const handleToggleLanguage = () => {
    // Toggle context
    const newLang = isAr ? "en" : "ar";
    setLanguage(newLang);

    // Update URL: prepend /ar or /en
    const pathSegments = pathname.split("/").filter(Boolean); // split path
    if (pathSegments[0] === "ar" || pathSegments[0] === "en") {
      pathSegments[0] = newLang; // replace first segment
    } else {
      pathSegments.unshift(newLang); // add language prefix
    }

    const newPath = "/" + pathSegments.join("/");
    router.push(newPath);
  };

  const navItems = isAr
    ? [
        { name: "الرئيسية", href: "/ar/" },
        { name: "من نحن؟", href: "/ar/about" },
        { name: "خدماتنا", href: "/ar/services" },
        { name: "اعمالنا", href: "/ar/work" },
        { name: "تواصل معنا", href: "/ar/contact" },
      ]
    : [
        { name: "Home", href: "/en/" },
        { name: "About", href: "/en/about" },
        { name: "Services", href: "/en/services" },
        { name: "Our Work", href: "/en/work" },
        { name: "Contact", href: "/en/contact" },
      ];

  return (
    <nav
      dir={isAr ? "rtl" : "ltr"}
      className="w-[80%] absolute top-4 left-1/2 -translate-x-1/2 z-50 rounded-3xl backdrop-blur-md bg-gradient-to-r from-[#002b7f] to-[#002868] text-white shadow-md"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6">
        {/* Logo */}
        <div>
          <img src="/logo.png" alt="EAZY" className="h-8 object-contain" />
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="hover:text-[#00AEEF] transition-colors">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className={`flex items-center gap-3 ${isAr ? "order-1" : "order-3"}`}>
          <button
            onClick={handleToggleLanguage}
            className="bg-transparent border border-white rounded-full px-4 py-2 flex items-center gap-2 text-sm hover:bg-white hover:text-[#002b7f] transition"
          >
            <FaGlobe size={14} /> {isAr ? "English" : "العربية"}
          </button>
          <button className="bg-blue-700 hover:bg-[#0090d1] text-white px-4 py-2 rounded-full text-sm font-medium transition">
            {isAr ? "احصل على عرض سعر" : "Get a Quote"}
          </button>
        </div>
      </div>
    </nav>
  );
}
