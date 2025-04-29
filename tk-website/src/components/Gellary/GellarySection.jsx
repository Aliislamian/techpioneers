import React from "react";
import teamimg from "../../assets/teampic.jpeg";
import ceo from "../../assets/ceo2.png";
import Shahfahad from "../../assets/Shahfahad.jpeg";
import ALiHan from "../../assets/ALiHan.jpeg";
import seminar from "../../assets/seminar.jpeg";
import Seminar from "../../assets/Seminar.jpeg";
import NavbarGallery from "../navbar/NavbarGallery";
import Footer from "../Footer/Footer";

const Gellary = () => {
  const images = [teamimg, ceo, Shahfahad, ALiHan, seminar, Seminar];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-white ">
      <div className="w-[95%] mt-5">
        <NavbarGallery />
      </div>
      <h2 className="text-[48px] font-bold pt-5 mb-16">GALLERY</h2>
      <div className="flex flex-wrap gap-[34px] justify-center w-full">
        {images.map((imgSrc, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              className="rounded-[40px] h-[280px] w-[364px] object-cover"
              src={imgSrc}
              alt={`gallery-img-${index}`}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Gellary;
