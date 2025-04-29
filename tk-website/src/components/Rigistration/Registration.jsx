import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../Footer/Footer";

function Registration() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-white">
      <div className="w-[95%] mt-5 mb-10">
      <Navbar />
      </div>

      <div className="mb-10">
        <h2 className="text-4xl font-bold text-center font-alegreya">
          Registration
        </h2>
        <p className="text-center text-lg font-semibold text-gray-500">
          Please fill this form in a decent manner.
        </p>
      </div>

      {/* FormStart */}
      <form
        action="https://formsubmit.co/techpioneers01@gmail.com"
        method="POST"
        className="w-[90%] bg-white mb-10"
      >
        {/* Hidden fields for config */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input
          type="hidden"
          name="_autoresponse"
          value="Thanks for registering! We’ll get back to you soon."
        />

        {/* Personal Information */}
        <div className="mb-6">
          <h3 className="text-[32px] font-semibold mb-4 text-center">
            Personal Information
          </h3>
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label className="block text-[18px] font-bold font-alegreya mb-1">
                First Name
              </label>
              <input
                type="text"
                name="First Name"
                className="w-full px-3 h-[64px] border border-black outline-none rounded-[20px]"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block text-[18px] font-bold font-alegreya mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="Last Name"
                className="w-full px-3 h-[64px] border border-black outline-none rounded-[20px]"
                required
              />
            </div>
          </div>

          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label className="block text-[18px] font-semibold mb-1">
                Father's Name
              </label>
              <input
                type="text"
                name="Father's Name"
                className="w-full px-3 h-[64px] border border-black outline-none rounded-[20px]"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block text-[18px] font-semibold mb-1">
                Gender
              </label>
              <div className="flex items-center gap-4 mt-1">
                {["male", "female", "other"].map((gender) => (
                  <div className="flex items-center ps-4" key={gender}>
                    <input
                      type="radio"
                      id={`gender-${gender}`}
                      name="Gender"
                      value={gender}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                    />
                    <label
                      htmlFor={`gender-${gender}`}
                      className="ms-2 text-sm font-medium text-black"
                    >
                      {gender.charAt(0).toUpperCase() + gender.slice(1)}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Address</h3>
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label className="block text-[18px] font-semibold mb-1">
                City
              </label>
              <input
                type="text"
                name="City"
                className="w-full px-3 h-[64px] border border-black outline-none rounded-[20px]"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block text-[18px] font-semibold mb-1">
                State
              </label>
              <input
                type="text"
                name="State"
                className="w-full px-3 h-[64px] border border-black outline-none rounded-[20px]"
                required
              />
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <div className="mb-4">
            <label className="block text-[18px] font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              name="Email"
              className="w-full px-3 h-[64px] border border-black outline-none rounded-[20px]"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-[18px] font-semibold mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="Phone Number"
              className="w-full px-3 h-[64px] border border-black outline-none rounded-[20px]"
              required
            />
          </div>
        </div>

        {/* Courses */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4">Select Course</h3>
          <div className="flex flex-col gap-2">
            {[
              "Web Development",
              "App Development",
              "Graphic Designing / UI/UX",
              "Artificial Intelligence",
              "E-commerce(Amazon, Shopify, Daraz, Tiktok Shop, Ebay)",
              "Software Testing",
              "Advance Programming",
              "Software Product / Project Managment",
              "Digital Marketing",
              "SEO (Search engine optimization)",
              "Basic IT Course",
              "And many more..."
            ].map((course, index) => (
              <label key={index} className="flex items-center ps-4 rounded">
                <input
                  type="checkbox"
                  name="Courses"
                  value={course}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 mr-2"
                />
                <span className="py-4 ms-2 text-[20px] font-semibold font-alegreya text-black">
                  {course}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mb-10">
          <button
            type="submit"
            className="bg-black text-white px-10 py-4 rounded-[20px] text-lg font-semibold"
          >
            Submit Registration
          </button>
        </div>
      </form>

      <Footer />
    </div>
  );
}

export default Registration;
