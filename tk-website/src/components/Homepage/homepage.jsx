import React from "react";
import tkvideo from "../../assets/tkvideo.mp4";
import Navbar from "../navbar/navbar";
import AcademyProcess from "../componentsUi/AcademyProcess";
import Facilities from "../componentsUi/Facilities";
import GetToKNowUs from "../componentsUi/GetToKNowUs";
import Ourteam from "../componentsUi/OurTeam";
import Gellary from "../componentsUi/Gellary";
import Testimonial from "../componentsUi/Testimonial";
import Blog from "../componentsUi/BlogAndArticls";
import JoinUs from "../componentsUi/JoinUs";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  const handleViewMoreClick = () => {
    navigate("/Registration");
  };
  return (
    <>
      <div className="relative w-full h-screen">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={tkvideo} type="video/mp4" />
        </video>
        <div className="absolute bg-opacity-20 bg-blue-800 h-full w-full"></div>
        <div className="relative flex flex-col gap-y-10 text-white p-10 md:items-start items-center text-center md:text-start h-full">
          <div className="w-full h-[88px] -mt-4">
            <Navbar />
          </div>
          <div className="flex flex-col justify-center gap-y-10 pt-[8vh]">
            <div>
              <h1 className="md:text-[32px] text-xl font-bold font-alegreya">
                Tech Pioneers
              </h1>
            </div>
            <div>
              <h1 className="md:text-[56px] text-4xl leading-10 font-alegreyas font-bold md:w-[70%] w-full md:leading-[70px]">
                Join Us To Pioneer Your Tech Career
              </h1>
            </div>
            <div>
              <button
                onClick={handleViewMoreClick}
                className="bg-white text-black px-4 py-2 font-alegreya rounded-[20px] h-[54px] text-[14px] font-semibold"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="academy-process">
        <AcademyProcess />
      </div>
      <div id="facilities">
        <Facilities />
      </div>
      <div id="get-to-know-us">
        <GetToKNowUs />
      </div>
      <div id="our-team">
        <Ourteam />
      </div>
      <div id="gallery">
        <Gellary />
      </div>
      <div id="testimonials">
        <Testimonial />
      </div>
      <div id="blog">
        <Blog />
      </div>
      <div id="join-us">
        <JoinUs />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
