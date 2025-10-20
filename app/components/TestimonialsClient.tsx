"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

type Testimonial = {
  id: string | number;
  name: string;
  position: string;
  review: string;
  imageClient?: { url: string };
};

type TestimonialsClientProps = { data: Testimonial[] };

export default function TestimonialsClient({ data }: TestimonialsClientProps) {
  return (
    <section className="py-16 bg-white text-center" dir="rtl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">اراء عملائنا</h2>
        <p className="text-gray-500 mb-10">
          ثقة شركائنا هي أساس نجاحنا في{" "}
          <span className="text-primary font-semibold">Eazy Cyber Agent</span>، وهذه بعض تجاربهم معنا:
        </p>

        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            loop={true}
            centeredSlides={false}
            spaceBetween={20}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
              renderBullet: (index, className) =>
                `<span class="${className} custom-bullet"></span>`,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },     // mobile
              768: { slidesPerView: 2 },   // tablet
              1024: { slidesPerView: 3 },  // laptop/desktop
            }}
            className="pb-16"
          >
            {data.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="w-full flex justify-center">
                <div className="bg-white shadow-sm border border-gray-100 rounded-3xl p-8 flex flex-col justify-between group duration-75 hover:shadow-xl w-full">
                  {/* Quote background */}
                  <div className="absolute top-0 left-0 -translate-y-16 text-[180px] text-primary opacity-10 select-none pointer-events-none z-0">
                    ❝
                  </div>

                  {/* Review text */}
                  <p className="text-gray-700 text-base leading-relaxed mb-6">
                    {testimonial.review}
                  </p>

                  {/* Client info */}
                  <div className="flex items-center gap-4 mt-4">
                    {/* {testimonial.imageClient?.url && (
                      <Image
                        src={`https://eazycyperstrapi.onrender.com${testimonial.imageClient.url}`}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    )} */}
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
            background-color: #1d4ed8;
          }
          .swiper-wrapper {
            align-items: flex-start; /* prevents vertical overlap */
          }
        `}</style>
      </div>
    </section>
  );
}
