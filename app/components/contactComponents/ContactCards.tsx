import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";

type ContactCardsProps = {
  locale: string;
};

export default async function ContactCards({ locale }: ContactCardsProps) {
  const isAr = locale === "ar";

  const content = {
    ar: {
      title: "تواصل معنا عبر:",
      items: [
        {
          icon: <FaPhoneAlt size={32} className="text-blue-600" />,
          title: "جوال / واتساب",
          text: "+1012345688",
          imgSrc: "/014-telephone.png",
        },

        {
          icon: <MdEmail size={32} className="text-blue-600" />,
          title: "بريد إلكتروني",
          text: "example@email.com",
          imgSrc: "/015-email.png",
        },
        {
          icon: <FaLocationDot size={32} className="text-blue-600" />,
          title: "مقر الشركة",
          text: "يتم وضع سطر عنوان الشركة هنا",
          imgSrc: "/016-location.png",
        },
      ],
    },
    en: {
      title: "Contact us via:",
      items: [
        {
          icon: <FaPhoneAlt size={32} className="text-blue-600" />,
          title: "Phone / WhatsApp",
          text: "+1012345688",
          imgSrc: "/014-telephone.png",
        },
        {
          icon: <MdEmail size={32} className="text-blue-600" />,
          title: "Email",
          text: "example@email.com",
          imgSrc: "/015-email.png",
        },
        {
          icon: <FaLocationDot size={32} className="text-blue-600" />,
          title: "Company Address",
          text: "Company address line goes here",
          imgSrc: "/016-location.png",
        },
      ],
    },
  };

  const t = isAr ? content.ar : content.en;

  return (
    <section dir={isAr ? "rtl" : "ltr"} className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0a0a2a] mb-8 sm:mb-10">
          {t.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {t.items.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                isAr ? "items-start text-right" : "items-end text-left"
              } border border-gray-200 rounded-2xl shadow-sm p-5 sm:p-6 hover:shadow-md transition`}
            >
              <div className="mb-4">
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  width={56}
                  height={56}
                />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
