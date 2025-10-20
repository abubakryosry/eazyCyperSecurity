import NavbarClient from "./NavbarClient";

type NavbarProps = {
  locale: string;
};

export default function NavbarServer({ locale }: NavbarProps) {
  const isAr = locale === "ar";

  const navItems = isAr
    ? [
        { name: "الرئيسية", href: `/${locale}` },
        { name: "من نحن؟", href: `/${locale}` },
        { name: "خدماتنا", href: `/${locale}/services` },
        { name: "اعمالنا", href: `/${locale}` },
        { name: "تواصل معنا", href: `/${locale}/contactUs` },
      ]
    : [
        { name: "Home", href: `/${locale}` },
        { name: "About", href: `/${locale}` },
        { name: "Services", href: `/${locale}/services` },
        { name: "Our Work", href: `/${locale}` },
        { name: "Contact", href: `/${locale}/contactUs` },
      ];

  return (
    <nav
      dir={isAr ? "rtl" : "ltr"}
      className="w-full lg:w-[70%] absolute top-4 left-1/2 -translate-x-1/2 z-50 lg:bg-[#1B1B1B29]/50 lg:backdrop-blur-md lg:shadow-md rounded-3xl text-white"
    >
      <NavbarClient locale={locale} navItems={navItems} />
    </nav>
  );
}
