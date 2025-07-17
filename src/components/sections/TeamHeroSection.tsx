import React from "react";
import { FaUsers, FaGraduationCap, FaGlobe } from "react-icons/fa";

const TeamHeroSection = () => {
  return (
    <section className="bg-white px-8 md:py-14 flex flex-col xl:flex-row xl:px-24 items-center justify-between">
      {/* Left Section */}
      <div className="w-full md:w-full mt-10 md:mt-0 text-center md:content-center xl:text-left">
        <span className="inline-block bg-blue-100 text-[theme(color.brand.blue)] text-base md:text-sm px-5 py-2 rounded-full mb-4">
          Meet Our Team
        </span>

        <h1 className="text-3xl hidden md:block sm:text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
          Exceptional{" "}
          <span className="text-[theme(color.brand.blue)]">
            Talent <br className="block 2xl:hidden" /> Driving&nbsp;
          </span>
          Innovation
        </h1>
        <h1 className="text-3xl md:hidden sm:text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
          Exceptional{" "}
          <span className="text-[theme(color.brand.blue)]">
            Talent Driving
          </span>{" "}
          Innovation
        </h1>

        <p className="text-gray-700 text-base md:text-lg xl:mx-0 mb-6 max-w-xl mx-auto">
          Our diverse team of ISTQB certified professionals brings together decades of 
          experience, cutting-edge expertise, and a shared passion for quality assurance 
          excellence. Meet the people who make Testriq exceptional.
        </p>

        {/* Team Stats */}
        <div className="grid grid-cols-3 gap-6 mb-8 max-w-lg mx-auto xl:mx-0">
          {[
            { icon: FaUsers, number: "50+", label: "Team Members" },
            { icon: FaGraduationCap, number: "40+", label: "Certifications" },
            { icon: FaGlobe, number: "15+", label: "Countries" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-[theme(color.brand.blue)] rounded-full flex items-center justify-center mx-auto mb-2">
                <stat.icon className="text-white w-6 h-6" />
              </div>
              <div className="text-2xl font-bold text-[theme(color.brand.blue)] mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Highlights */}
        <div className="space-y-3 max-w-xl mx-auto xl:mx-0">
          {[
            "ISTQB Certified Testing Professionals",
            "Average 8+ Years Industry Experience",
            "Expertise Across Multiple Domains",
            "Continuous Learning & Development Culture"
          ].map((highlight, index) => (
            <div key={index} className="flex items-center gap-3 text-left">
              <div className="w-2 h-2 bg-[theme(color.brand.blue)] rounded-full flex-shrink-0"></div>
              <span className="text-gray-700 text-base">{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section - Team Visual */}
      <div className="w-full xl:w-1/2 mt-8 xl:mt-0 flex justify-center">
        <div className="relative">
          {/* Main Team Circle */}
          <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center relative overflow-hidden">
            {/* Team Icon */}
            <div className="text-center">
              <div className="w-24 h-24 bg-[theme(color.brand.blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-white w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Team</h3>
              <p className="text-gray-600 text-sm px-4">
                United by passion for quality and excellence
              </p>
            </div>
            
            {/* Floating Team Member Avatars */}
            <div className="absolute top-8 left-8 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"></div>
            </div>
            <div className="absolute top-12 right-12 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full"></div>
            </div>
            <div className="absolute bottom-16 left-12 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center">
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-500 rounded-full"></div>
            </div>
            <div className="absolute bottom-8 right-8 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"></div>
            </div>
          </div>
          
          {/* Floating Stats */}
          <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border">
            <div className="text-center">
              <div className="text-2xl font-bold text-[theme(color.brand.blue)]">8+</div>
              <div className="text-sm text-gray-600">Avg Experience</div>
            </div>
          </div>
          
          <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 border">
            <div className="text-center">
              <div className="text-2xl font-bold text-[theme(color.brand.blue)]">100%</div>
              <div className="text-sm text-gray-600">Certified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamHeroSection;

