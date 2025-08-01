"use client";

import React from "react";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import { FaMobile, FaApple } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { BsLightningCharge } from "react-icons/bs";
import Link from "next/link";

const MobileTestingHeroSection: React.FC = () => {
  return (
    <section className="bg-white text-black py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="flex flex-col items-center xl:items-start text-center xl:text-left mx-auto xl:mx-0">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaMobile />
            <span className="text-sm">Mobile Application Testing Experts</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Comprehensive{" "}
            <span className="text-[theme(color.brand.blue)]">
              Mobile-App Testing&nbsp;
            </span>
            Services
          </h1>

          <p className="text-gray-700 text-base md:text-lg mb-6 max-w-xl">
            Ensure your mobile applications deliver seamless user experiences
            and top performance across all platforms. From Android to iOS, our
            mobile app testing services include functionality testing,
            performance, usability, and mobile security testing — for every
            device and scenario.
          </p>

          <div className="flex flex-col sm:flex-row justify-center xl:justify-start items-center gap-4 mb-8 w-full sm:w-auto">
            <Link href="/contact-us">
              <button className="flex items-center gap-2 py-3 px-5 bg-[theme(color.brand.blue)] text-white font-semibold text-base md:text-lg rounded-md hover:bg-blue-400 cursor-pointer w-full sm:w-auto">
                <span className="text-base">Get Started Today</span>
                <FaArrowRight className="w-4 h-5" />
              </button>
            </Link>
            <button className="flex items-center gap-2 py-3 px-5 border border-[theme(color.brand.blue)] text-[theme(color.brand.blue)] font-semibold text-base md:text-lg rounded-md hover:cursor-pointer w-full sm:w-auto">
              <FaPlay className="w-4 h-4" />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center xl:justify-start gap-6">
            {[
              ["1000+", "Mobile Apps Tested"],
              ["99.9%", "Bug Detection Rate"],
              ["12 hr", "Average Turnaround"],
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
            {/* Main Mobile Devices */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-12 shadow-lg">
              <div className="flex justify-center items-center gap-8 mb-6">
                {/* iPhone */}
                <div className="relative">
                  <div className="w-20 h-36 bg-gray-900 rounded-2xl p-1">
                    <div className="w-full h-full bg-blue-500 rounded-xl flex items-center justify-center">
                      <FaMobile className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-xs">
                      <FaApple className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Android */}
                <div className="relative">
                  <div className="w-20 h-36 bg-gray-800 rounded-2xl p-1">
                    <div className="w-full h-full bg-green-500 rounded-xl flex items-center justify-center">
                      <FaMobile className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-xs">🤖</span>
                  </div>
                </div>
              </div>

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

      {/* Trust Indicators */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-200">
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
          <span className="text-sm text-gray-500">
            Trusted by leading mobile app companies
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-6">
            <div className="w-24 h-8 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-xs text-gray-500">App Store</span>
            </div>
            <div className="w-24 h-8 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-xs text-gray-500">Play Store</span>
            </div>
            <div className="w-24 h-8 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-xs text-gray-500">Enterprise</span>
            </div>
            <div className="w-24 h-8 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-xs text-gray-500">Startups</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileTestingHeroSection;
