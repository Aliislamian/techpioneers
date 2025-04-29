import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../Footer/Footer";

function ContactForm() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-white">
      <div className="w-[95%] mt-5 mb-10">
        <Navbar />
      </div>
      <div>
        <h2 className="text-[48px] font-bold text-center font-alegreya">
          CONTACT US
        </h2>
        <p className="text-center font-semibold font-alegreya text-gray-500 mb-6 text-[20px]">
          Please fill this form in a decent manner.
        </p>
      </div>

      {/* ✅ FormSubmit connected */}
      <form
        action="https://formsubmit.co/techpioneers01@gmail.com"
        method="POST"
        className="w-[90%] bg-white"
      >
        {/* Hidden fields for config */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_autoresponse" value="Thanks for contacting us! We'll get back to you soon." />

        <div className="sm:flex gap-10 mb-4">
          <div className="w-1/2">
            <label className="block font-semibold mb-1 text-[18px]">
              First Name
            </label>
            <input
              type="text"
              name="First Name"
              required
              className="w-full px-3 h-[64px] border border-black rounded-[20px] outline-none"
            />
          </div>
          <div className="w-1/2">
            <label className="block font-semibold mb-1 text-[18px]">
              Last Name
            </label>
            <input
              type="text"
              name="Last Name"
              required
              className="outline-none w-full px-3 h-[64px] border border-black rounded-[20px]"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1 text-[18px]">Email</label>
          <input
            type="email"
            name="Email"
            required
            placeholder="Example@gmail.com"
            className="w-full h-[64px] outline-none px-3 border border-black rounded-[20px]"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1 text-[18px]">
            Phone Number
          </label>
          <input
            type="text"
            name="Phone Number"
            required
            placeholder="1234567890"
            className="w-full h-[64px] border px-3 outline-none border-black rounded-[20px]"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1 text-[18px]">Message</label>
          <textarea
            name="Message"
            rows="4"
            required
            placeholder="Write your message here..."
            className="w-full h-[220px] border px-3 py-6 border-black outline-none rounded-[20px]"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-[280px] h-[58px] bg-blue-600 text-white rounded-[16px] text-[16px] font-bold font-alegreya"
          >
            Submit
          </button>
        </div>
      </form>

      <Footer />
    </div>
  );
}

export default ContactForm;
