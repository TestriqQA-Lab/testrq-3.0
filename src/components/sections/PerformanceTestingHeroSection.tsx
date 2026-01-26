"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaChartLine,
  FaServer,
  FaFire,
  FaMobile,
  FaDesktop,
  FaCloud,
  FaDatabase,
  FaArrowRight,
  FaPlay,
  FaHome,
  FaChevronRight
} from "react-icons/fa";
import Lightbox from "../VideoLightBox";
import PerformanceTestingAnimation from "./PerformanceTestingAnimation";

const PerformanceTestingHeroSection: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Function to handle the lightbox open/close
  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };
  return (
    <section className="relative pt-8 pb-16 px-8 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-6">
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-brand-blue transition-colors"
          >
            <FaHome className="text-lg" />
            Home
          </Link>
          <FaChevronRight className="text-xs text-gray-400" />
          <span className="text-brand-blue">
            Performance Testing
          </span>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-full text-base md:text-sm">
              <FaTachometerAlt className="mr-2" />
              Performance Testing Experts
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Global <Link href="/" className="hover:underline decoration-brand-blue">Performance Testing Services</Link>:
              <span className="text-transparent bg-clip-text bg-brand-blue">
                {" "}
                Software Load, Stress, and Scalability Solutions
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              A 100-millisecond delay can cost millions in revenue. Consequently, performance testing is now a core requirement rather than a luxury. Testriq ensures your platforms remain resilient, responsive, and ready for global scale.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              As an <Link href="/about-us" className="text-brand-blue hover:underline decoration-brand-blue">independent performance testing laboratory</Link>, we help enterprises in the USA, UK, EU, and Asia transition from reactive tuning to <span className="font-semibold text-brand-blue"><Link href="/performance-testing-services" className="hover:underline decoration-brand-blue">proactive performance engineering</Link></span>. Our methodology leverages modern automation frameworks and ensures full compliance with <span className="font-semibold text-brand-blue"><Link href="/qa-documentation-services" className="hover:underline decoration-brand-blue">ISO 29119 standards</Link></span> during all non-functional testing.
            </p>

            <div className="flex flex-col items-center lg:items-start sm:flex-row gap-4">
              <Link
                href="/contact-us"
                className="bg-brand-blue cursor-pointer text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center min-h-[48px] min-w-[48px]"
              >
                Get Started Today
                <FaArrowRight className="ml-2" />
              </Link>

              <button
                onClick={openLightbox}
                className="border-2 cursor-pointer border-brand-blue text-brand-blue px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-300 flex items-center justify-center"
              >
                <FaPlay className="mr-2" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-600">
                  50M+
                </div>
                <div className="text-sm text-gray-600">Virtual Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-red-600">
                  99.9%
                </div>
                <div className="text-sm text-gray-600">Uptime Achieved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-yellow-600">
                  3,500+
                </div>
                <div className="text-sm text-gray-600">Apps Optimized</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-600">
                  24/7
                </div>
                <div className="text-sm text-gray-600">Monitoring</div>
              </div>
            </div>
          </div>

          {/* Right Content - Performance Testing Dashboard */}
          <div className="relative">
            <PerformanceTestingAnimation />
          </div>
        </div>
      </div>
      {/* Lightbox Modal */}
      <Lightbox
        isOpen={isLightboxOpen}
        videoLink="https://yourvideolink.com"
        onClose={closeLightbox}
      />
    </section >
  );
};

export default PerformanceTestingHeroSection;
