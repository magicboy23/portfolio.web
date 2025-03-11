"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

const testimonials = [
  {
    id: 1,

    image: "matcha-comp.jpg",
  },
  {
    id: 2,

    image: "strawberry-comp.jpg",
  },
  {
    id: 3,

    image: "coklat-comp.jpg",
  },
  {
    id: 4,

    image: "oreo-comp.jpg",
  },
  {
    id: 5,

    image: "marketing byu.png",
  },
  {
    id: 6,

    image: "my tri.png",
  },
  {
    id: 7,

    image: "my xl.png",
  },
  {
    id: 8,

    image: "my telkomsel.png",
  },
];

export default function Testimony() {
  return (
    <div className="mx-auto bg-[#0b4344] px-4 py-24">
      <h2 className="mb-10 text-center text-6xl font-bold text-white">
        Portfolio
      </h2>

      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="flex flex-col items-center rounded-xl bg-gray-900 p-3 text-center shadow-lg">
              <img src={testimonial.image} className="w-50 h-50 mb-4" />
              <h3 className="text-lg font-semibold"></h3>
              <p className="mt-2 text-sm text-gray-600"></p>
              <div className="mt-4 flex"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
