import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "../../assets/css/custumswiper.css";
import Apiimg from "../../assets/api.png";
import appimg from "../../assets/app.png";
import database from "../../assets/database.png";
import qa from "../../assets/qa.png";
import uiux from "../../assets/uiux.png";
import web from "../../assets/web.png";
import ai from "../../assets/ai.jpg";

const facilities = [
  {
    title: "Web Development",
    icon: web,
    features: [
      "Overview: Hands-on training to create responsive websites and interactive web apps.",
      "Skills: Build and deploy websites, contribute to team projects. Duration: 3 months",
      " On-campus & online, live sessions + recorded materials",
      "Fee: 25,000 – 30,000 PKR",
    ],
    iconColor: "bg-blue-400",
  },
  {
    title: "App Development (Dart & Flutter)",
    icon: appimg,
    features: [
      "Master cross-platform mobile development with Flutter for iOS & Android",
      "Skills: Develop high-performance, visually engaging mobile apps.",
      "Duration: 3 months",
      "Format: On-campus & online, hands-on sessions",
      "Fee: 25,000 – 30,000 PKR",
    ],
    iconColor: "bg-orange-400",
  },
  {
    title: "Artificial Intelligence (AI)",
    icon: ai,
    features: [
      "Overview: Comprehensive AI training covering machine learning, NLP, and robotics.",
      "Skills: Develop intelligent, data-driven systems.",
      "Duration: 3 months",
      "Format: On-campus & online, hands-on sessions",
      "Fee: 25,000 – 30,000 PKR",
    ],
    iconColor: "bg-orange-400",
  },
  {
    title: "Graphics and UI/UX Design",
    icon: uiux,
    features: [
      "	Overview: Design user-friendly, impactful digital interfaces and graphics.",
      "Skills: Use industry tools to create functional, aesthetic designs",
      "Duration: 3 months",
      "Format: On-campus & online, hands-on sessions",
      "Fee: 25,000 – 30,000 PKR",
    ],
    iconColor: "bg-gray-400",
  },
  {
    title: "Software Project Management",
    icon: database,
    features: [
      "Overview: Guide software projects from planning to successful delivery.",
      "Skills: Master team coordination, resource management, and budget control.",
      "Duration: 3 months",
      "Format: On-campus & online, hands-on sessions",
      "Fee: 25,000 – 30,000 PKR",
    ],
    iconColor: "bg-blue-400",
  },
  {
    title: "E-Commerce (Amazon, Shopify, and Daraz)",
    icon: Apiimg,
    features: [
      "Overview: Build and manage e-commerce stores on leading platforms.",
      "Skills: Create, market, and operate online retail businesses",
      "Duration: 3 months",
      "Format: On-campus & online, hands-on sessions",
      "Fee: 25,000 – 30,000 PKR",
    ],
    iconColor: "bg-orange-400",
  },
  {
    title: "Search Engine Optimization (SEO)",
    icon: qa,
    features: [
      "Overview: Drive traffic through effective website optimization.",
      "Skills: Implement SEO strategies for higher visibility",
      "Duration: 3 months",
      "Format: On-campus & online, hands-on sessions",
      "Fee: 25,000 – 30,000 PKR",
    ],
    iconColor: "bg-gray-400",
  },
  {
    title: "Content Writing",
    icon: web,
    features: [
      "Overview: Develop compelling content for blogs, websites, and social media.",
      "Skills: Create engaging and strategic written content.",
      "Duration: 3 months",
      "Format: On-campus & online, hands-on sessions",
      "Fee: 25,000 – 30,000 PKR",
    ],
    iconColor: "bg-blue-400",
  },
  {
    title: "Freelancing Course",
    icon: appimg,
    features: [
      "Overview: Essentials of launching and sustaining a freelancing career.",
      "Skills: Client acquisition, project management, and financial planning",
      "Duration: 3 months",
      "Format: On-campus & online, hands-on sessions",
      "Fee: 10000 ",
    ],
    iconColor: "bg-orange-400",
  },
];

const Facilities = () => {
  return (
    <div className="w-full h-[1002px] flex flex-col items-center justify-center bg-gray-100 p-8">
      <h2 className="text-[48px] font-bold pt-5  -mb-16">Our Facilities</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        className="w-full max-w-[1400px]  h-full"
        slidesPerView={1}
      >
        {Array.from(
          { length: Math.ceil(facilities.length / 6) },
          (_, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-row-1 mt-[120px] md:grid-cols-2 lg:grid-cols-3  lg:grid-rows-2 gap-x-8 gap-y-16 px-[7%] pt-0 ">
                {facilities
                  .slice(index * 6, index * 6 + 6)
                  .map((facility, idx) => (
                    <div
                      key={idx}
                      className="bg-white h-auto w-[327px] p-6 rounded-[56px] shadow-md flex flex-col space-y-4 relative"
                    >
                      <div
                        className={`absolute -top-12 left-6 w-[20%] md:w-[72px] h-[20%] md:h-[72px]  rounded-[28px] ${facility.iconColor} flex items-center justify-center`}
                      >
                        <span className="text-white font-bold object-cover ">
                          <img src={facility.icon} alt="" />
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mt-8">
                        {facility.title}
                      </h3>
                      <ul className="list-none space-y-2  text-sm">
                        {facility.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="mr-2">&#9679;</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default Facilities;
