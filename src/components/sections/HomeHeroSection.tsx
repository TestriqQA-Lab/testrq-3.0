import React from "react";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import ImageSlider from "../ImageSlider";

const Hero = () => {
  return (
    <section className="bg-white px-8 md:py-14 flex flex-col xl:flex-row xl:px-24 items-center justify-between">
      {/* Left Section */}
      <div className="w-full md:w-full mt-10 md:mt-0 text-center md:content-center xl:text-left">
        <span className="inline-block bg-blue-100 text-[theme(color.brand.blue)] text-base md:text-sm px-5 py-2 rounded-full mb-4">
          ISTQB Certified Experts
        </span>

        <h1 className="text-3xl hidden md:block sm:text-4xl  md:text-6xl font-bold text-gray-900 leading-tight mb-4">
          Premium{" "}
          <span className="text-[theme(color.brand.blue)]">
            Software <br />  Testing&nbsp;
          </span>
          Services
        </h1>
        <h1 className="text-3xl md:hidden sm:text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
          Premium{" "}
          <span className="text-[theme(color.brand.blue)]">
            Software Testing
          </span>{" "}
          Services
        </h1>

        <p className="text-gray-700 text-base md:text-lg xl:mx-0 mb-6 max-w-xl mx-auto">
           Accelerate your product launch with our comprehensive QA solutions and premium software testing services. With over a decade of experience, our ISTQB Certified Experts deliver exceptional software quality and scalable solutions to startups and industry leaders, ensuring faster time-to-market and award-winning apps.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center items-center xl:justify-start gap-4 mb-8">
          <button className="flex items-center gap-2 py-3 px-5 border bg-[theme(color.brand.blue)] text-white font-semibold text-base md:text-lg rounded-md hover:bg-blue-400 cursor-pointer w-full sm:w-auto">
            <span className="text-base">Get Started Today</span>
            <FaArrowRight className="w-4 h-5" />
          </button>
          <button className="flex items-center gap-2 py-3 px-5 border border-[theme(color.brand.blue)] text-[theme(color.brand.blue)] font-semibold text-base md:text-lg rounded-md hover:cursor-pointer w-full sm:w-auto">
            <FaPlay className="w-4 h-4" />
            Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center md:justify-center xl:justify-start gap-6 lg:mx-0">
          {[
            ["14+", "Years Experience"],
            ["500K", "Test Cases Executed"],
            ["180", "Certified Experts"],
            ["100%", "Client Satisfaction"],
            ["24/7", "Availability"],
          ].map(([value, label], i) => (
            <div key={i} className="text-center">
              <p className="text-[theme(color.brand.blue)] font-bold text-2xl md:text-3xl">
                {value}
              </p>
              <p className="text-gray-700 text-base ">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full mt-20 md:[w-1/2] lg:[my-10] md:my-10 max-w-xl">
      <ImageSlider/>
      </div>
    </section>
  );
};

export default Hero;
