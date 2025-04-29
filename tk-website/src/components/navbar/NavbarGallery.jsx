import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      style={{
        background: "rgba(255, 255, 255, 0.3)",
        borderRadius: "28px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.08)",
        backdropFilter: "blur(4.3px)",
        WebkitBackdropFilter: "blur(6.3px)",
      }}
      className="relative bg-transparent h-[88px] w-full flex items-center justify-between px-6"
    >
      <div className="text-black font-bold text-lg font-alegreya flex  justify-between gap-10">
        <div>
          <h1>TK Academy</h1>
        </div>
        <div className="hidden md:flex gap-6 text-black items-center">
          <a
            href="#"
            className="hover:text-gray-200 transition duration-300 font-alegreya"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-gray-200 transition duration-300 font-alegreya"
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-gray-200 transition duration-300 font-alegreya"
          >
            Services
          </a>
          <a
            href="#"
            className="hover:text-gray-200 transition duration-300 font-alegreya"
          >
            Contact
          </a>
        </div>
      </div>

      <button className="bg-[#007BFF] hover:bg-blue-600 font-alegreya font-semibold text-white  py-2 px-4 rounded-[16px] h-[48px] transition duration-300 hidden md:block">
        Learn More
      </button>

      <button
        className="md:hidden text-black focus:outline-none"
        onClick={toggleMenu}
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-y-0 left-0 w-64 bg-blue-900 bg-opacity-90 text-black p-8 transform transition-transform duration-300">
          <button
            className="absolute top-4 right-4 text-black focus:outline-none"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
