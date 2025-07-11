'use client';
import React from 'react';
import { FaArrowRight, FaPlay } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="bg-gray-100 px-8 md:py-14 flex flex-col xl:flex-row xl:px-26 items-center justify-between">
      
      {/* Left Section */}
      <div className="w-full md:w-full mt-10 md:mt-0 text-center md:content-center xl:text-left">
        <span className="inline-block bg-blue-100 text-[#25A8E0] text-base md:text-lg px-4 py-1 rounded-full mb-4">
          ISTQB Certified Experts
        </span>

        <h1 className="text-3xl hidden md:block sm:text-4xl  md:text-5xl font-bold text-gray-900 leading-tight mb-4">
          Premium <span className="text-[#25A8E0]">Software Testing</span><br/> Services
        </h1>
        <h1 className="text-3xl md:hidden sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
          Premium <span className="text-[#25A8E0]">Software Testing</span>  Services
        </h1>

        <p className="text-gray-700 text-base md:text-lg xl:mx-0 mb-6 max-w-xl mx-auto">
          Accelerate your product launch with our comprehensive QA solutions. Over a decade of experience delivering exceptional software testing services to startups and industry leaders.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center items-center xl:justify-start gap-4 mb-8">
          <button className="flex items-center gap-2 py-3 px-5 border bg-[#25A8E0] text-white font-semibold text-base md:text-lg rounded-md hover:bg-blue-400 cursor-pointer w-full sm:w-auto">
                <span className="text-base">Get Started Today</span>
                <FaArrowRight className="w-4 h-5" />
          </button>
          <button className="flex items-center gap-2 py-3 px-5 border border-[#25A8E0] text-[#25A8E0] font-semibold text-base md:text-lg rounded-md hover:cursor-pointer w-full sm:w-auto">
            <FaPlay className="w-4 h-4" />
            Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center md:justify-center gap-6 lg:mx-0">
          {[
            ['14+', 'Years Experience'],
            ['500K', 'Test Cases Executed'],
            ['180', 'Certified Experts'],
            ['100%', 'Client Satisfaction'],
            ['24/7', 'Availability'],
          ].map(([value, label], i) => (
            <div key={i} className="text-center">
              <p className="text-[#25A8E0] font-bold text-2xl md:text-3xl">{value}</p>
              <p className="text-gray-700 text-base ">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="my-10 w-full md:[w-1/2] lg:[my-10] bg-white shadow-lg rounded-xl max-w-xl h-80 mx-auto ">
        
      </div>
    </section>
  );
};

export default Hero;