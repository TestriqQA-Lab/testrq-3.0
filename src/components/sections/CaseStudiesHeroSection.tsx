"use client";

import Link from "next/link";
import React from "react";
import {
  FaRocket,
  FaUsers,
  FaGlobe,
  FaTrophy,
  FaArrowRight,
  FaStar,
  FaCode,
  FaShieldAlt,
  FaMobile,
} from "react-icons/fa";

const CareersHeroSection: React.FC = () => {
  const companyStats = [
    {
      icon: FaUsers,
      value: "180+",
      label: "Team Members",
      description: "QA experts worldwide",
    },
    {
      icon: FaGlobe,
      value: "25+",
      label: "Countries",
      description: "Global Service Delivery",
    },
    {
      icon: FaRocket,
      value: "500+",
      label: "Projects",
      description: "Successfully delivered",
    },
    {
      icon: FaTrophy,
      value: "98%",
      label: "Satisfaction",
      description: "Client satisfaction rate",
    },
  ];

  const floatingIcons = [
    { icon: FaCode, position: "top-20 left-20", delay: "0s" },
    { icon: FaShieldAlt, position: "top-32 right-32", delay: "1s" },
    { icon: FaMobile, position: "bottom-40 left-16", delay: "2s" },
    { icon: FaStar, position: "bottom-20 right-20", delay: "0.5s" },
  ];
  
  const scrollToOpenPostions = () => {
    const element = document.getElementById("open-positions-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative bg-white py-6 sm:py-8 lg:py-16 overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-50 to-white"></div>

      {/* Animated Background Shapes - Responsive sizing */}
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-bl from-[theme(color.brand.blue)] to-brand-blue opacity-10 rounded-full transform translate-x-24 sm:translate-x-32 lg:translate-x-48 -translate-y-24 sm:-translate-y-32 lg:-translate-y-48 animate-pulse"></div>
      <div
        className="absolute bottom-0 left-0 w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80 bg-gradient-to-tr from-blue-400 to-[theme(color.brand.blue)] opacity-10 rounded-full transform -translate-x-20 sm:-translate-x-28 lg:-translate-x-40 translate-y-20 sm:translate-y-28 lg:translate-y-40 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Floating Icons - Hidden on mobile and small tablets for cleaner look */}
      {floatingIcons.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.position} hidden w-8 h-8 lg:w-12 lg:h-12 bg-white bg-opacity-80 rounded-xl shadow-lg xl:flex items-center justify-center animate-bounce lg:flex`}
          style={{ animationDelay: item.delay, animationDuration: "3s" }}
        >
          <item.icon className="w-4 h-4 lg:w-6 lg:h-6 text-[theme(color.brand.blue)]" />
        </div>
      ))}

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          {/* Badge - Responsive sizing */}
          <div className="inline-flex items-center gap-2 bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-4 py-2 sm:px-6 sm:py-2 mb-6 sm:mb-8">
            <FaRocket className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            <span className="text-xs sm:text-sm font-medium text-white">
              We&apos;re Hiring!
            </span>
          </div>

          {/* Main Heading - Better mobile scaling */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
            Shape the Future of
            <span className="block text-brand-blue">
              Software Quality
            </span>
          </h1>

          {/* Subheading - Improved mobile readability */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
            Join a passionate team of QA professionals who are revolutionizing software{" "}
            <Link href="/blog/post/final-reporting-in-qa-delivering-comprehensive-quality-summary" className="text-brand-blue hover:underline">
              quality assurance
            </Link>
            . Work on cutting-edge test{" "}
            <Link href="/automation-testing-services" className="text-brand-blue hover:underline">
              automation
            </Link>{" "}
            projects, enhance your skills in{" "}
            <Link href="/manual-testing" className="text-brand-blue hover:underline">
              manual testing
            </Link>
            ,{" "}
            <Link href="/performance-testing-services" className="text-brand-blue hover:underline">
              performance testing
            </Link>
            , and{" "}
            <Link href="/security-testing" className="text-brand-blue hover:underline">
              security testing
            </Link>
            , and make a real impact on product quality, regulatory compliance, and user experience across global software applications.
          </p>

          {/* CTA Buttons - Mobile-optimized */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-14 lg:mb-16 px-4 sm:px-0">
            <button
              onClick={scrollToOpenPostions}
              className="group bg-[theme(color.brand.blue)] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl hover:-translate-y-1 min-h-[48px] touch-manipulation"
            >
              <FaUsers className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="whitespace-nowrap">View Open Positions</span>
              <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Company Stats - Improved mobile layout */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
            {companyStats.map((stat, index) => (
              <div
                key={index}
                className="group bg-white bg-opacity-80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[theme(color.brand.blue)] bg-opacity-10 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                </div>

                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500 leading-tight">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersHeroSection;
