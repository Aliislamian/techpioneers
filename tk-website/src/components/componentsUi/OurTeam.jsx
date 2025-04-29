import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "../../assets/css/custumswiper.css";
import ali from "../../assets/ali2.png";
import Aqib from "../../assets/Aqib.png";
import Awais from "../../assets/awais.png";
import Rafay from "../../assets/rafay.png";
import asad from "../../assets/asad.png";
import anees from "../../assets/anees.png";
import sohail from "../../assets/sohail.png";
import fatima from "../../assets/fatima.png";
import talha from "../../assets/ceo2.png";
import alishba from "../../assets/alishba.png";
import shayan from "../../assets/shayan.png";
import Sulaiman from "../../assets/suliman.png";
import usama from "../../assets/usama.png";
import yassen from "../../assets/yassen.png";
import umair from "../../assets/umair.png";
import nazish from "../../assets/nazish.png";
import sammer from "../../assets/sammer.png";
import danish from "../../assets/danish.jpg";
import gohar from "../../assets/gohar.png";
import aina from "../../assets/aina.png";
import jawad from "../../assets/jawad.png";

const facilities = [
  {
    title: "Muhammad Talha",
    role: "Managing Director and AI Trainer",
    img: talha,
    discription: [
      "Software Engineer with expertise in AI and Django and serves as the CEO of Tech Pioneers.",
    ],
  },
  {
    title: "Elishbah Babar",
    role: "HR Lead",
    img: alishba,
    discription: ["Management Lead at MLS and Women Tech Lead at GDSC, ICUP."],
  },
  {
    title: "M. Danish Zahid",
    role: "Social Media Marketing Lead",
    img: danish,
    discription: ["Background: B.S. in Software Engineering "],
  },
  {
    title: "Sohail Ahmad Khan",
    role: "Social Media Marketing Manager",
    img: sohail,
    discription: [
      "Graphic Designer and Social media marketer (1 year experience), Organizer at GDGoC, ICUP.",
    ],
  },
  {
    title: "Fatima",
    role: "Social Media Marketing Manager",
    img: fatima,
    discription: [" Graphic Designer and Social media marketer."],
  },
  {
    title: "Ali Akbar ",
    img: ali,
    role: "Web Dev Lead",
    discription: [
      "Experience: 4 years in MERN stack, full-stack applications :Education: Graduate of Islamia University (2024)",
    ],
  },
  {
    title: "Muhammad Aqib",
    img: Aqib,
    role: "Web Mentor",
    discription: [
      "4 years using Vue, Nuxt, Node, and React Focus: Building innovative, sustainable solutions with evolving tech trends",
    ],
  },
  {
    title: "Anees",
    role: "Web Mentor",
    img: anees,
    discription: [
      "Senior MERN stack developer having experience of 3+ year .My strong zone is Frontend",
    ],
  },
  {
    title: "Umair Marwat",
    role: " Web Dev Mentor",
    img: umair,
    discription: [
      "3+ years in full-stack development",
      "Education: BSSE from ICP",
    ],
  },
  {
    title: "Awais",
    img: Awais,
    role: "App Dev Mentor",
    discription: [
      "skilled Flutter developer, Dart programming, and UI/UX designing.",
    ],
  },
  {
    title: "Asad Khan Qureshi",
    img: asad,
    role: "App Dev Trainer",
    discription: [
      "Experience in mobile app development more than 6 months in Flutter",
    ],
  },
  {
    title: "Gohar Zaman",
    role: "E-commerce Lead",
    img: gohar,
    discription: [
      "Over 2 years of experience in e-commerce, specializing in Amazon Education: Master’s degree from Abdul Wali Khan University Mardan  Computer Science",
    ],
  },
  {
    title: "M. Rafay",
    img: Rafay,
    role: "E-commerce Support Team Lead",
    discription: [
      "skilled Flutter developer, Dart programming, and UI/UX designing.",
    ],
  },
  // {
  //   title: "Nazish Khan",
  //   role: "Shopify Trainer",
  //   img: nazish,
  //   discription: [
  //     "2+ years specializing in Amazon",
  //     "Education: BBA from Peshawar University",
  //   ],
  // },
  // {
  //   title: "Aina Qurashi",
  //   role: " Tiktok Shop Trainer",
  //   img: aina,
  //   discription: [
  //     " 2+ years specializing in Amazon",
  //     "Master’s from Abdul Wali Khan University, Mardan",
  //   ],
  // },
  {
    title: "Sulaiman Akhtar",
    role: "Graphic Designing and UI/UX Designing",
    img: Sulaiman,
    discription: [
      "Experience: 3+ years in UI/UX design Education: BSCS (1st Semester) ",
    ],
  },
  {
    title: "M. Usama",
    role: "UI/UX Designer & Trainer",
    img: usama,
    discription: [
      "1 year in UI/UX design. Current Position: Graphic Designer at Bright Code Lab (since 18/10/2024) ",
    ],
  },
  {
    title: "Shayan Ahmad",
    role: "Graduate",
    img: shayan,
    discription: [
      "MERN stack with Next.js, 1+ years of frontend experience Current Position: Frontend Engineer at Culyte Software House",
    ],
  },
  {
    title: "Yaseen Khan",
    role: " Graduate",
    img: yassen,
    discription: [
      "1 year with Apxzone. Education: Islamia College, Peshawar (5th Semester)",
    ],
  },
  {
    title: "Sameer Nawab",
    role: "Graduate",
    img: sammer,
    discription: [
      "Experience: 1+ years in UI/UX design",
      "Current Position: Freelancer",
      "Education: Software Engineering",
    ],
  },
  {
    title: "Jawad Ahmad",
    role: "Graduate",
    img: jawad,
    discription: [
      "Web developer with experience in responsive design, Tailwind CSS, and frameworks like React, Vue, Next, and Nuxt.",
    ],
  },
];

const Facilities = () => {
  return (
    <div className="w-full h-full lg:h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <h2 className="text-[48px] font-bold pt-5  -mb-16">Our Team</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        className="w-full max-w-[1400px]"
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {facilities.map((facility, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white h-[386px] cursor-pointer w-[240px] p-1 mb-20 mt-20 rounded-[56px] shadow-md flex flex-col justify-center items-center text-center space-y-4">
              <div className="w-[156px] h-[156px] rounded-full  flex items-center justify-center">
                <img
                  src={facility.img}
                  alt={facility.title}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mt-8 flex flex-col items-center">
                <div className="text-[20px] ">{facility.title}</div>
                <div className="text-[12px] text-blue-400">{facility.role}</div>
              </h3>
              <ul className="list-none  text-[12px] w-full">
                {facility.discription.map((feature, idx) => (
                  <li key={idx} className="flex items-center justify-center">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Facilities;
