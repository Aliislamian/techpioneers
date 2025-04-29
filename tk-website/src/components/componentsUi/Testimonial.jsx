import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "../../assets/css/custumswiper.css";
import img1 from "../../assets/card1.png";

const facilities = [
  {
    title: "Zohaib",
    img: "https://ui-avatars.com/api/?name=Zohaib&background=0D8ABC&color=fff",
    role: "Web Development Student",
    discription: [
      "Joining this academy was a game-changer for me. The instructors made complex web development concepts easy to understand, and I felt supported every step of the way. Highly recommend it to anyone starting out!"
    ],
  },
  {
    title: "Hasnain",
    img: "https://ui-avatars.com/api/?name=Hasnain&background=8e44ad&color=fff",
    role: "Web Development Student",
    discription: [
      "The hands-on projects and mentorship at the academy helped me build real-world websites confidently. I landed my first freelance project within two months of training!"
    ],
  },
  {
    title: "Shayan",
    img: "https://ui-avatars.com/api/?name=Shayan&background=16a085&color=fff",
    role: "Flutter App Development Student",
    discription: [
      "The Flutter training here is top-notch. I learned how to build beautiful, fast mobile apps from scratch. The guidance from the instructors helped me turn my app ideas into real products."
    ],
  }
];




const Facilities = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 p-8">
      <h2 className="text-[48px] font-bold pt-5  md:-mb-16">Testimonial</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        className="w-full max-w-[1400px]  "
        slidesPerView={1}
      >
        {Array.from(
          { length: Math.ceil(facilities.length / 2) },
          (_, index) => (
            <SwiperSlide key={index}>
              <div className="mt-[120px] flex flex-col md:flex-row gap-[5%] mb-20  px-[3.5%] pt-0 justify-center  space-y-6 md:space-y-0 items-center">
                {facilities
                  .slice(index * 2, index * 2 + 2)
                  .map((facility, idx) => (
                    <div
                      key={idx}
                      className="bg-transparent md:h-[228px] md:w-[556px] p-6 rounded-[40px] border-2  border-blue-300 shadow-md flex items-center "
                    >
                      <div className="flex flex-col ">
                        <div className="flex gap-4 text-lg font-semibold ">
                          <img
                            src={facility.img}
                            alt={facility.title}
                            className="w-[64px] h-[64px] object-cover rounded-full"
                          />
                          <div>
                            <span className="text-black font-bold text-[20px]">
                              {facility.title}
                            </span>
                            <span className="block text-blue-500 uppercase text-xs">
                              {facility.role}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                          {facility.discription[0]}
                        </p>
                      </div>
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
