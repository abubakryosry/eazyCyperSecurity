"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type TestimonialsClientProps = {
  data: any[];
};

export default function TestimonialsClient({ data }: TestimonialsClientProps) {
  return (
    <section className="py-16 bg-white text-center" dir="rtl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">اراء عملائنا</h2>
        <p className="text-gray-500 mb-10">
          ثقة شركائنا هي أساس نجاحنا في{" "}
          <span className="text-primary font-semibold">Eazy Cyber Agent</span>،
          وهذه بعض تجاربهم معنا:
        </p>

        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            loop={true}
            centeredSlides={true}
            spaceBetween={60}
            slidesPerView={3}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              el: ".custom-pagination", // render bullets here
              renderBullet: (index, className) =>
                `<span class="${className} custom-bullet"></span>`,
            }}
            className="pb-16" // add extra bottom padding
          >
            {data.map((testimonial) => (
              <SwiperSlide
                key={testimonial.id}
                className="flex justify-center flex-shrink-0"
              >
                <div className="bg-white shadow-sm border border-gray-100 rounded-3xl p-8 flex flex-col justify-between group duration-75 hover:shadow-xl relative w-[420px]">
                  {/* Quotation mark */}
                  <div className="absolute top-0 left-0  -translate-y-16 text-[180px] text-primary opacity-10 select-none overflow-hidden pointer-events-none z-0">
                    ❝
                  </div>

                  {/* Review text */}
                  <p className="text-gray-700 text-base leading-relaxed mb-6">
                    {testimonial.review}
                  </p>

                  {/* Image + Name/Position in Row */}
                  <div className="flex items-center gap-4 mt-4">
                    <img
                      src={`https://eazycyperstrapi.onrender.com${testimonial?.imageClient?.url}`}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex flex-col text-right">
                      <h3 className="font-semibold text-gray-800 text-base">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination container outside slides */}
          <div className="custom-pagination mt-8 flex justify-center"></div>
        </div>

        <style jsx global>{`
          .custom-bullet {
            display: inline-block;
            width: 40px;
            height: 8px;
            margin: 0 4px;
            background: #ddd;
            border-radius: 8px;
            transition: background 0.3s;
          }
          .custom-bullet.swiper-pagination-bullet-active {
            background-color: #1d4ed8; /* primary color */
          }
        `}</style>
      </div>
    </section>
  );
}
