import React from "react";
import card1img from "../../assets/newbatch.jpeg";
import card2img from "../../assets/getknow2.png";
import ceo from "../../assets/ceo2.png";

const AcademyProcess = () => {
  return (
    <div className="w-full h-full md:h-screen p-6 px-10 text-center md:text-start space-y-20 mt-6  pb-[18%]">
      <div className="flex flex-col md:flex-row justify-between lg:gap-10">
        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:space-y-4">
          <h1 className="text-[34px] font-alegreya font-semibold ">
            Get To Know Us
          </h1>
          <p className="text-gray-700 leading-relaxed text-[16px] font-semibold font-Alegreya">
            Tech Pioneers Academy is a renowned technology institute offering a
            wide range of specialized courses tailored to meet industry
            standards. We focus on practical coding, mentorship from real-world
            industry professionals, and providing students with the skills they
            need to thrive in the tech world.
          </p>
          <div className="border-2 p-10 rounded-[40px] border-blue-400 ">
            <div className="flex  gap-4 mb-4  h-[51px] items-center text-center">
              <img
                className="w-[64px] h-[64px] rounded-full"
                src={ceo}
                alt="profile img"
              />
              <h1 className="text-[20px] font-bold">Engr. Talha Sartaj</h1>
            </div>
            <div>
              <p className="text-[14px] font-semibold">
                Engr. Talha Sartaj is a software engineer with expertise in AI
                and Django and serves as the CEO of Tech Pioneers, offering
                courses and services in development and e-commerce to
                international clients. A passionate motorsports enthusiast and
                blogger, Talha has also organized numerous tech, non-tech, and
                motorsports events, blending technical proficiency with hands-on
                event experience.
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full md:w-1/2 md:space-y-6 ">
          <div className=" left-[1%] rounded-[40px] ">
            <img
              src={card2img}
              alt="Director"
              className="md:w-[480px] w-[480px]  md:h-[380px] rounded-lg object-cover"
            />
          </div>
          <div className="absolute sm:top-[220px] top-[180px] left-[40%] lg:bg-white lg:p-2  md:right-0  rounded-[40px] ">
            <img
              src={card1img}
              alt="Director"
              className="lg:w-[344px]  md:w-[344px]  lg:h-[284px] rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademyProcess;
