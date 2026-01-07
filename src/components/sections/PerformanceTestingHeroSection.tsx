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
} from "react-icons/fa";
import { FaArrowRight, FaPlay, FaHome, FaChevronRight } from "react-icons/fa";
import Lightbox from "../VideoLightBox";

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
              Optimize Performance with
              <span className="text-transparent bg-clip-text bg-brand-blue">
                {" "}
                Advanced Load Testing
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Ensure your applications perform flawlessly under any load with
              our comprehensive <Link href='blog/post/what-are-the-different-types-of-performance-testing-services'>performance testing services</Link>. We conduct <Link href='blog/post/load-testing-in-performance-testing-complete-guide'>load
                testing</Link>, <Link href='blog/post/stress-testing-applications-identifying-breaking-points'>stress testing</Link>, <Link href='blog/post/spike-testing-handling-sudden-traffic-surges'>spike testing</Link>, and <Link href='blog/post/endurance-testing-validating-long-term-application-stability'>endurance testing</Link>{" "}
              using <Link href='/technology-stack'>industry-leading tools</Link> like <Link href='blog/post/how-to-use-jmeter-for-performance-testing-step-by-step-guide'>Apache JMeter</Link>, <Link href='blog/post/top-performance-testing-tools-compared-jmeter-loadrunner-etc'>LoadRunner</Link>, and
              Gatling to guarantee optimal <Link href='blog/post/user-experience-testing-for-smart-devices-usability-accessibility'>user experiences</Link>, <Link href='blog/post/performance-scalability-testing-ensuring-iot-systems-handle-high-load-efficiently'>application
                performance, and scalability</Link> at scale.
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
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse will-change-transform"></div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Performance Monitor
                  </h2>
                </div>
                <span className="text-sm text-orange-600 font-medium">
                  Load Testing
                </span>
              </div>

              <div className="text-sm text-gray-600 mb-6">
                Real-time performance metrics & load testing analytics
              </div>

              {/* Testing Approach */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <FaChartLine className="text-2xl text-orange-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-orange-900">
                    Load
                  </div>
                  <div className="text-xs text-orange-600 flex items-center justify-center mt-1">
                    ⚡ Active
                  </div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg text-center">
                  <FaFire className="text-2xl text-red-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-red-900">Stress</div>
                  <div className="text-xs text-yellow-600 flex items-center justify-center mt-1">
                    ⏳ Queued
                  </div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg text-center">
                  <FaServer className="text-2xl text-yellow-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-yellow-900">
                    Spike
                  </div>
                  <div className="text-xs text-gray-600 flex items-center justify-center mt-1">
                    ⏸ Scheduled
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600">Response Time</div>
                  <div className="text-lg font-bold text-orange-600">
                    1.2s Avg
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600">Throughput</div>
                  <div className="text-lg font-bold text-red-600">
                    2,500 TPS
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600">Error Rate</div>
                  <div className="text-lg font-bold text-green-600">0.02%</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600">CPU Usage</div>
                  <div className="text-lg font-bold text-yellow-600">68%</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Load Test Progress</span>
                  <span className="text-orange-600 font-medium">
                    45% Complete
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-orange-600 to-red-600 h-3 rounded-full"
                    style={{ width: "45%" }}
                  ></div>
                </div>
              </div>

              {/* Testing Areas */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Web Application</span>
                  <span className="text-orange-600 font-medium">1,000 VU</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">API Endpoints</span>
                  <span className="text-red-600 font-medium">500 VU</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Database Load</span>
                  <span className="text-yellow-600 font-medium">250 VU</span>
                </div>
              </div>

              {/* Platform Icons */}
              <div className="flex justify-center space-x-6 pt-2 border-t border-gray-100">
                <div className="text-center">
                  <FaMobile className="text-xl text-orange-600 mx-auto mb-1" />
                  <div className="text-xs text-gray-600">Mobile</div>
                </div>
                <div className="text-center">
                  <FaDesktop className="text-xl text-red-600 mx-auto mb-1" />
                  <div className="text-xs text-gray-600">Web</div>
                </div>
                <div className="text-center">
                  <FaCloud className="text-xl text-yellow-600 mx-auto mb-1" />
                  <div className="text-xs text-gray-600">API</div>
                </div>
                <div className="text-center">
                  <FaDatabase className="text-xl text-green-600 mx-auto mb-1" />
                  <div className="text-xs text-gray-600">Database</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Lightbox Modal */}
      <Lightbox
        isOpen={isLightboxOpen}
        videoLink="https://yourvideolink.com"
        onClose={closeLightbox}
      />
    </section>
  );
};

export default PerformanceTestingHeroSection;
