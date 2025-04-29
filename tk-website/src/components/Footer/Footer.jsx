import React from "react";
import img from "../../assets/tklogo.png";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full bg-white py-8 px-10 justify-evenly flex flex-col md:flex-row gap-[7%] pt-20 items-start text-black space-y-6 md:space-y-0">
      <div className="flex flex-col items-start w-full md:w-1/4 md:-mt-16">
        <img src={img} className="h-[150px] w-[150px]  " alt="Logo" />
        <p className="text-sm leading-relaxed relative -top-10">
          Tech Pioneers Academy is a renowned technology institute offering a
          wide range of specialized courses tailored to meet industry standards.
          We focus on practical coding, mentorship from real-world industry
          professionals, and providing students with the skills they need to
          thrive in the tech world.
        </p>
      </div>
      <div className="flex flex-col items-start w-full md:w-1/4">
        <h2 className="text-lg font-bold uppercase mb-4">Contact Info</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <a
              href="mailto:techpioneers01@gmail.com"
              className="hover:underline text-blue-600"
            >
              techpioneers01@gmail.com
            </a>
          </li>
          <li>
            <a
              href="tel:+923358282771"
              className="hover:underline text-blue-600"
            >
              +92 319 0748277
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com/maps/search/?api=1&query=1st+Floor+Dansish+Abad+Near+Islamia+College+BRT+Station+Peshawar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-600"
            >
              Saya Heights, 1st Floor Dansish Abad, Near Islamia College BRT
              Station, Peshawar
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-start w-full md:w-1/4">
        <h2 className="text-lg font-bold uppercase mb-4">Join Us On</h2>
        <div className="grid grid-cols-3 gap-4">
          <a
            href="https://www.facebook.com/tkpioneers"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="h-10 w-10 text-blue-600" />
          </a>
          <a
            href="https://www.instagram.com/techpioneers1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare className="h-10 w-10 text-pink-600" />
          </a>
          <a
            href="https://www.tiktok.com/@techpioneers1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillTikTok className="h-10 w-10 text-black" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
