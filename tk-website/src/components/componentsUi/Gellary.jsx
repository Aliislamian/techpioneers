import React from "react";
import teamimg from "../../assets/teampic.jpeg";
import ceo from "../../assets/ceo2.png";
import Shahfahad from "../../assets/Shahfahad.jpeg";
import ALiHan from "../../assets/ALiHan.jpeg";
import seminar from "../../assets/seminar.jpeg";
import Seminar from "../../assets/Seminar.jpeg";
import { useNavigate } from "react-router-dom";

const Gellary = () => {
  const navigate = useNavigate();

  const handleViewMoreClick = () => {
    navigate("/GellarySection");
  };
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-white p-8 ">
      <h2 className="text-[48px] font-bold pt-5  mb-16">GALLERY</h2>

      <div className="flex flex-col xl:flex-row gap-4 w-full h-full xl:justify-between items-center">
        <div className="flex flex-col xl:w-2/3 gap-4">
          <div className="w-full">
            <img
              className="rounded-[40px] h-[372px] w-full object-cover"
              src={teamimg}
              alt=""
            />
          </div>
          <div className="flex gap-4">
            <img
              className="rounded-[40px] h-[204px] w-1/3 xl:p-2 object-cover"
              src={ceo}
              alt=""
            />
            <img
              className="rounded-[40px] h-[204px] w-1/3 xl:p-2 object-cover"
              src={Shahfahad}
              alt=""
            />
            <img
              className="rounded-[40px] h-[204px] w-1/3 xl:p-2 object-cover"
              src={ALiHan}
              alt=""
            />
          </div>
        </div>

        <div className="xl:w-1/3 md:w-2/3 flex flex-row xl:flex-col gap-4 justify-center">
          <img
            className="rounded-[40px] xl:h-[290px] h-[40%] w-[50%] xl:w-full object-cover"
            src={seminar}
            alt=""
          />
          <img
            className="rounded-[40px] xl:h-[290px] h-[40%] w-[50%] xl:w-full object-cover"
            src={Seminar}
            alt=""
          />
        </div>
      </div>
      <div
        onClick={handleViewMoreClick}
        className="w-full h-full flex  justify-center mt-10 "
      >
        <button className="sm:w-[220px] w-[180px] h-[56px] sm:h-[56px]  bg-[#007BFF] text-white rounded-[16px] font-bold font-Alegreya">
          View More
        </button>
      </div>
    </div>
  );
};

export default Gellary;
