import React from "react";
import { FaArrowRight, FaDesktop, FaPlay } from "react-icons/fa";
import Image from "next/image";
import { FaUsers } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { BsLightningCharge } from "react-icons/bs";
import Link from "next/link";

const DesktopTestingHeroSection: React.FC = () => {
  return (
    <section className="bg-white text-black py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="flex flex-col items-center xl:items-start text-center xl:text-left mx-auto xl:mx-0">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaDesktop/>
          <span className="text-sm">
            Desktop Application Testing Experts
          </span>
        </div>
          

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Comprehensive{" "}
            <span className="text-[theme(color.brand.blue)]">
              Desktop-App Testing&nbsp;
            </span>
            Services
          </h1>

          <p className="text-gray-700 text-base md:text-lg mb-6 max-w-xl">
            Ensure your desktop applications deliver exceptional performance and
            reliability with our comprehensive testing services. From
            functionality to compatibility, security to usability - we test
            across all platforms and environments using manual desktop application testing and exploratory desktop testing techniques.
          </p>

          <div className="flex flex-col sm:flex-row justify-center xl:justify-start items-center gap-4 mb-8 w-full sm:w-auto">
            <Link href={"/contact-us"}>
              <button className="bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center cursor-pointer">
                Get Started Today
                <FaArrowRight className="inline ml-2" />
              </button>
            </Link>
            <button className="cursor-pointer border-2 border-brand-blue text-brand-blue px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center">
              <FaPlay className="w-4 h-4 mr-2" />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center xl:justify-start gap-6">
            {[
              ["100+", "Desktop Apps Tested"],
              ["99.8%", "Bug Detection Rate"],
              ["24 hr", "Average Turnaround"],
            ].map(([stat, label], index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-[theme(color.brand.blue)]">
                  {stat}
                </div>
                <div className="text-sm text-gray-600">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Visual Elements */}
        <div className="flex justify-center xl:justify-end">
          <div className="relative w-full max-w-lg">
            {/* Main Desktop Icon */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-12 shadow-lg flex justify-center">
              <Image
                src="/Desktop_App_Testing_Image.webp"
                alt="Desktop_App_Testing_Image"
                width={300}
                height={200}
                className="object-contain"
              />

              {/* Floating Icons */}
              <div className="absolute -top-4 -left-4 bg-white rounded-full p-4 shadow-lg">
                <MdOutlineSecurity className="w-8 h-8 text-green-500" />
              </div>

              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <BsLightningCharge className="w-8 h-8 text-yellow-500" />
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg">
                <FaUsers className="w-8 h-8 text-purple-500" />
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <div className="w-8 h-8 bg-[theme(color.brand.blue)] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">QA</span>
                </div>
              </div>
            </div>

            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 bg-blue-300 rounded-full opacity-30"></div>
              <div className="absolute top-1/2 left-0 w-12 h-12 bg-blue-400 rounded-full opacity-25"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-200">
        <div className="flex flex-col items-center gap-6 opacity-80 text-center">
          <span className="text-sm text-black font-medium uppercase tracking-wide">
            Certified & Recognized by Industry Standards
          </span>
          <div className="flex flex-wrap justify-center items-center gap-4 text-gray-800 text-sm">
            <div className="bg-gray-100 px-4 py-2 rounded-full">
              ISTQB Certified Testers
            </div>
            <div className="bg-gray-100 px-4 py-2 rounded-full">
              ISO 9001:2015 (QMS)
            </div>
            <div className="bg-gray-100 px-4 py-2 rounded-full">
              ISO 27001:2013 (ISMS)
            </div>
            <div className="bg-gray-100 px-4 py-2 rounded-full">
              Microsoft Partner
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesktopTestingHeroSection;
