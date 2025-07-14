"use client";
import clients from "@/data/clients";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

export default function ClientsCarousel() {
  return (
    <section className="px-4 md:px-16 py-20 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 text-gray-700 text-sm font-medium mb-3">
        <span>Our Clients</span>
      </div>
      <h2 className="text-4xl font-semibold text-gray-900 mb-10">
        Trusted by Industry Leaders
      </h2>
      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={24}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        loop={true}
        freeMode={{ enabled: true, momentum: false }}
        speed={12000}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        className="w-full"
      >
        {clients.concat(clients).map((client, index) => (
          <SwiperSlide key={index}>
            <div className="border border-gray-200 rounded-md p-4 flex flex-col items-center h-40 justify-between bg-white shadow-sm">
              <div className="relative h-16 w-full mb-2">
                <Image
                  src={client.image}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm font-semibold text-center">{client.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-end mt-10">
        <a href="/clients">
          <span className="text-base text-blue-900 underline underline-offset-4 hover:text-blue-600 cursor-pointer font-medium transition-colors">
            View More
          </span>
        </a>
      </div>
    </section>
  );
}
