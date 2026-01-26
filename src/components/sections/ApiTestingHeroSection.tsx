"use client";

import Link from "next/link";
import React from "react";
import { FaArrowRight, FaPlug, FaHome, FaChevronRight } from "react-icons/fa";
import APITestingAnimation from "./APITestingAnimation";

const ApiTestingHeroSection: React.FC = () => {
  return (
    <section className="bg-white text-black pt-8 pb-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-6">
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-[theme(color.brand.blue)] transition-colors"
          >
            <FaHome className="text-lg" />
            Home
          </Link>
          <FaChevronRight className="text-xs text-gray-400" />
          <span className="text-[theme(color.brand.blue)]">
            API Testing
          </span>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
          {/* Left Content */}
          <div className="flex flex-col items-center xl:items-start text-center xl:text-left mx-auto xl:mx-0">
            <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
              <FaPlug />
              <span className="text-sm">API Testing Specialists</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Elite{" "}
              <span className="text-[theme(color.brand.blue)]">
                API Testing&nbsp;
              </span>
              Services: High-Velocity REST, Graph-QL, and Automated QA Solutions
            </h1>

            <p className="text-gray-700 text-base md:text-lg mb-6 max-w-xl">
              As digital ecosystems transition toward decentralized micro-services, the API (Application Programming Interface) has become the most critical component of the modern software stack. Testriq provides elite API testing for your &apos;invisible&apos; layer. We ensure your systems are secure, scalable, and meet all global standards.
            </p>
            <p className="text-gray-700 text-base md:text-lg mb-6 max-w-xl">
              Our strategy follows the <span className="font-semibold text-brand-blue">ISO 29119 framework</span> to ensure technical excellence. We help you manage complex architectures and embed automated API testing into your CI/CD pipeline.
            </p>

            <div className="flex flex-col sm:flex-row justify-center xl:justify-start items-center gap-4 mb-8 w-full sm:w-auto">
              <Link href="/contact-us">
                <button className="flex items-center gap-2 py-3 px-5 bg-[theme(color.brand.blue)] text-white font-semibold text-base md:text-lg rounded-md hover:shadow-lg cursor-pointer w-full sm:w-auto">
                  <span className="text-base">Get Started Today</span>
                  <FaArrowRight className="w-4 h-5" />
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center xl:justify-start gap-6">
              {[
                ["200+", "APIs Tested"],
                ["99.8%", "Bug Detection Rate"],
                ["24 hr", "Average Turnaround"],
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

          {/* Right Content - API Testing Illustration */}
          <div className="relative">
            <APITestingAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiTestingHeroSection;
