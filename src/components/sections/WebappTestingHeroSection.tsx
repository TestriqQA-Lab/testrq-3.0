"use client";

import React from "react";
import { FaArrowRight, FaLaptopCode, FaPlay } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { BsLightningCharge } from "react-icons/bs";
import Link from "next/link";

const WebappTestingHeroSection: React.FC = () => {
  return (
    <section className="bg-white text-black py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-16">
        {/* Left Content */}
        <div className="flex flex-col items-center xl:items-start text-center xl:text-left mx-auto xl:mx-0">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaLaptopCode />
            <span className="text-sm">
              Web Application Testing Experts
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Comprehensive{" "}
            <span className="text-[theme(color.brand.blue)]">
              Web-App Testing&nbsp;
            </span>
            Services
          </h1>

          <p className="text-gray-700 text-base md:text-lg mb-6 max-w-xl">
            Ensure your web applications deliver exceptional user experiences
            with our systematic web application testing services. From
            functionality and performance to security, usability, and bug
            detection — we test it all to ensure maximum quality, compliance,
            and cross-platform compatibility.
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
              ["50+", "Web Apps Tested"],
              ["99.9%", "Bug Detection Rate"],
              ["48 hr", "Average Turnaround"],
              ["24/7", "Support Available"],
            ].map(([value, label], i) => (
              <div key={i} className="text-center xl:text-left">
                <p className="text-[theme(color.brand.blue)] font-bold text-2xl md:text-3xl">
                  {value}
                </p>
                <p className="text-gray-700 text-base">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Mock UI */}
        <div className="bg-gray-300 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/20">
          <div className="bg-[#0c122b]/80 backdrop-blur-md p-4 rounded-xl mb-6">
            <div className="flex items-center space-x-2 mb-4">
              <span className="w-3 h-3 bg-red-500 rounded-full" />
              <span className="w-3 h-3 bg-yellow-400 rounded-full" />
              <span className="w-3 h-3 bg-green-500 rounded-full" />
              <p className="text-gray-300 px-5 text-md">
                https://your-webapp.com
              </p>
            </div>
            <div className="bg-[#1f2a57]/80 h-6 w-full rounded mb-2" />
            <div className="bg-[#1f2a57]/60 h-4 w-4/5 rounded" />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-600/80 backdrop-blur-md p-4 rounded-lg text-center shadow-inner">
              <FaSearch className="mx-auto mb-1 text-white" />
              <p className="text-md text-white">Functional Testing</p>
            </div>
            <div className="bg-cyan-600/80 backdrop-blur-md p-4 rounded-lg text-center shadow-inner">
              <BsLightningCharge className="mx-auto mb-1 rotate-45 text-white" />
              <p className="text-md text-white">Performance Testing</p>
            </div>
            <div className="bg-teal-700/80 backdrop-blur-md p-4 rounded-lg text-center shadow-inner">
              <MdOutlineSecurity className="mx-auto mb-1 text-white" />
              <p className="text-md text-white">Security Testing</p>
            </div>
            <div className="bg-purple-700/80 backdrop-blur-md p-4 rounded-lg text-center shadow-inner">
              <FaUsers className="mx-auto mb-1 text-white" />
              <p className="text-md text-white">Usability Testing</p>
            </div>
          </div>

          <div className="bg-[#0c122b]/80 backdrop-blur-md p-4 rounded-xl">
            <p className="text-md mb-2 text-white">Testing Progress</p>
            <div className="w-full bg-gray-700/50 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-600 to-blue-400 h-2 rounded-full"
                style={{ width: "85%" }}
              />
            </div>
            <p className="text-right text-xs text-gray-300 mt-1">85%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebappTestingHeroSection;
