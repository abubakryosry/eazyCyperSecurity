"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import { useRouter, usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

type NavbarClientProps = {
  locale: string;
  navItems: { name: string; href: string }[];
};

export default function NavbarClient({ locale, navItems }: NavbarClientProps) {
  const { setLanguage } = useLanguage();
  const isAr = locale === "ar";
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

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

  return (
    <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
      {/* Logo */}
      <div className="hidden lg:block">
        <Link href={`/${locale}`}>
          <Image
            src="/logoNav.webp"
            alt="EAZY"
            width={120}
            height={32}
            className="object-contain cursor-pointer"
          />
        </Link>
      </div>

      {/* Hamburger for sm/md screens */}
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-2 bg-[#093747]/95 rounded-xl px-4 pb-4 absolute top-full left-0 w-full">
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
    </div>
  );
}
