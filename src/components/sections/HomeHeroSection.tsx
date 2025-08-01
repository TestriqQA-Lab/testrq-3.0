import React from "react";
import { FaArrowRight } from "react-icons/fa";
import ImageSlider from "../ImageSlider";
import { FaCertificate } from "react-icons/fa6";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-white px-8 md:py-14 xl:py-0 flex flex-col xl:flex-row xl:px-24 items-center justify-between">
      {/* Left Section */}
      <div className="w-full md:w-full mt-10 md:mt-0 text-center md:content-center xl:text-left">
        <div className="inline-flex items-center bg-brand-blue px-5 py-2 rounded-full gap-2">
          <FaCertificate className="text-white" />
          <span className="  text-white text-base md:text-sm">
            ISTQB Certified Experts
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4 mt-3">
          Independent{" "}
          <span className="text-[theme(color.brand.blue)]">
            Software Testing
          </span>{" "}
          Services
        </h1>

        <p className="text-gray-700 text-base md:text-lg xl:mx-0 mb-6 max-w-xl mx-auto">
          Accelerate your product launch with Independent software testing
          services and QA solutions. With over a decade of experience, our ISTQB
          Certified Experts deliver software quality, scalable QA services, and
          award-winning apps for startups and industry leaders.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center items-center xl:justify-start gap-4 mb-8">
          <Link href="/contact-us">
            <button className="flex items-center gap-2 py-3 px-5 border bg-[theme(color.brand.blue)] text-white font-semibold text-base md:text-lg rounded-md hover:scale-105 cursor-pointer w-full sm:w-auto">
              <span className="text-base">Get Started Today</span>
              <FaArrowRight className="w-4 h-5" />
            </button>
          </Link>
          {/* <button className="flex items-center gap-2 py-3 px-5 border border-[theme(color.brand.blue)] text-[theme(color.brand.blue)] font-semibold text-base md:text-lg rounded-md hover:cursor-pointer w-full sm:w-auto">
            <FaPlay className="w-4 h-4" />
            Watch Demo
          </button> */}
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center md:justify-center xl:justify-start gap-6 lg:mx-0">
          {[
            ["15+", "Years of Experience"],
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
      <div className="flex flex-col justify-center text-center mt-20 md:mt-24 xl:mt-20 xl:w-1/2 lg:[my-10] md:my-10">
        <ImageSlider />
      </div>
    </section>
  );
};

export default Hero;
