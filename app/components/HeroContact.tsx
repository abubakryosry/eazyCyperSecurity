type HeroContactProps = {
  locale: string;
};

export default function HeroContact({ locale }: HeroContactProps) {
  return (
    <section
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="relative flex justify-center items-center p-12 md:py-32 text-white text-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover filter"
        style={{ backgroundImage: "url(/Backgroun30.webP)" }}
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
      <div className="relative z-10 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-5xl font-bold">
          {locale === "ar" ? "تواصل معنا" : "Contact Us"}
        </h1>
      </div>
    </section>
  );
}
