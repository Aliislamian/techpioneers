import React from "react";
import ceo from "../../assets/ceo2.png";
import card2img from "../../assets/Director.png";

const AcademyProcess = () => {
  return (
    <>
      <div className="w-full h-full p-6 px-10 text-center md:text-start space-y-20 mt-10">
        <h1 className="md:text-[48px] text-4xl font-Alegreya text-center mb-6 font-bold">
          Academy Progress
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 mb-6 md:mb-0 md:space-y-8">
            <h2 className="text-[24px] font-semibold mb-2 font-Alegreya">
              Our Team of Industry Experts
            </h2>
            <p className="text-gray-700 leading-relaxed text-[16px] font-semibold font-Alegreya">
              Our faculty consists of seasoned professionals who not only teach
              but actively run companies and manage real-time projects. Their
              expertise helps students to engage with real-world problems and
              solutions, making their learning experience highly practical and
              relevant to today’s market demands. Our faculty members also
              manage NAVTTC batches, further showcasing their credibility in
              technical training.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex flex-col space-y-6">
            <div className="flex items-center space-x-4 bg-gray-50 p-8 rounded-[40px]">
              <img
                src={card2img}
                alt="Director"
                className="w-[96px] h-[96px] rounded-full shadow-md object-cover"
              />
              <div>
                <h3 className="text-[20px] font-bold text-blue-400 text-start">
                  Engr. Sartaj Gull Khattak
                </h3>
                <span className="text-[12px] font-bold text-blue-400 text-start">
                  Director
                </span>
                <p className="text-gray-600 text-[14px] text-start">
                  Sartaj Gull Khattak, an accomplished electrical engineer,
                  recently retired as Principal of Government Technical College
                  Peshawar. With over 8 years as a TEVTA Syndicate Member and
                  BPS-20 officer, he’s been a driving force in technical
                  education. Now, he dedicates his expertise to managing his own
                  school, continuing his commitment to advancing
                  education in Pakistan.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-gray-50 p-8 rounded-[40px]">
              <img
                src={ceo}
                alt="Director"
                className="w-[96px] h-[96px] rounded-full shadow-md object-cover"
              />
              <div>
                <h3 className="text-[20px] font-bold text-blue-400 text-start">
                  Engr. Talha Sartaj
                </h3>
                <span className="text-[12px] font-bold text-blue-400 text-start">
                  CEO
                </span>
                <p className="text-gray-600 text-[14px] text-start">
                  Engr. Talha Sartaj is a software engineer with expertise in AI
                  and Django and serves as the CEO of Tech Pioneers, offering
                  courses and services in development and e-commerce to
                  international clients. A passionate motorsports enthusiast and
                  blogger, Talha has also organized numerous tech, non-tech, and
                  motorsports events, blending technical proficiency with
                  hands-on event experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcademyProcess;
