import React from "react";
import JoinUsimg from "../../assets/JoinUs.jpeg";
import { useNavigate } from "react-router-dom";

const JoinUs = () => {
  const navigate = useNavigate();

  const handleViewMoreClick = () => {
    navigate("/Registration");
  };
  return (
    <div className="relative w-full h-[440px]">
      <img
        src={JoinUsimg}
        alt="Join Us"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white gap-y-10">
        <h1 className="text-[48px] font-bold ">JOIN US</h1>
        <p className="text-[28px]  ">
          Ready to Lace Up Your Dreams? Join us and unlock your true potential
          on the pitch.
        </p>
        <button
          onClick={handleViewMoreClick}
          className="h-[56px] w-[220px] bg-[#007BFF] text-white font-semibold rounded-[16px] hover:bg-blue-600 transition duration-300"
        >
          Register Now
        </button>
      </div>
    </div>
  );
};

export default JoinUs;
