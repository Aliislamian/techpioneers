import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import seminarpic from "../../assets/Seminar.jpeg";
import "../../assets/css/custumswiper.css";
import blog from "../../assets/newbatch.jpeg";
import blog2 from "../../assets/icmsSem.JPG";
import blog3 from "../../assets/Awarnes.jpg";

const facilities = [
  {
    title: "Tech Pioneers Seminar at ICUP (9th October 2024)",
    img: seminarpic,
    description: [
      "Seminar at ICUP covering emerging tech trends, career pathways, and skill-building opportunities.",
    ],
  },
  {
    title: "New Batch Starts in November 2024",
    img: blog3,
    description: [
      "November 2024 batch enrollment now open for online and on-campus tech courses.",
    ],
  },
  {
    title: "ICMS Seminar (29th October 2024)",
    img: blog2,
    description: [
      "Join us at ICMS for insights on tech careers and essential industry skills.",
    ],
  },
  {
    title: "Awareness Session (17th October 2024)",
    img: blog,
    description: [
      "Informative session guiding aspiring tech professionals on education paths and career potential.",
    ],
  },
];

const Facilities = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-white p-8">
      <h2 className="text-[48px] font-bold pt-5 md:-mb-16">Blogs & Articles</h2>

      <div className="w-full flex justify-center">
        {" "}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          className="w-full max-w-[1400px]"
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            420: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1157: {
              slidesPerView: 3,
            },
          }}
        >
          {facilities.map((facility, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="relative w-full max-w-[372px] mt-[120px] mb-20 cursor-pointer h-[340px] rounded-[20px] overflow-hidden shadow-md flex justify-center items-center bg-red-400">
                <img
                  src={facility.img}
                  alt={facility.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-opacity-50 text-white">
                  <h3 className="text-[20px] font-semibold">
                    {facility.title}
                  </h3>
                  <p className="text-[14px] mt-2 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Facilities;
