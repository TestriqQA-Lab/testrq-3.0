"use client";

import React, { useState } from "react";
import {
  FaRocket,
  FaCheckCircle,
  FaBolt,
  FaCode,
  FaMobile,
  FaDesktop,
  FaCloud,
} from "react-icons/fa";
import Link from "next/link";
import { FaArrowRight, FaPlay, FaHome, FaChevronRight } from "react-icons/fa";
import Lightbox from "../VideoLightBox";

const LaunchFastQAHeroSection: React.FC = () => {
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
            LaunchFast QA
          </span>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
              <FaBolt />
              <span className="text-sm">LaunchFast QA Service</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Launch-Fast QA: Rapid QA Testing Services for
              <span className="text-transparent bg-clip-text bg-brand-blue">
                {" "}
                Startup MVP Success
              </span>
            </h1>

            <div className="space-y-4 text-xl text-gray-600 leading-relaxed">
              <p>
                Speed is critical for 2026 startups, but moving too fast without quality creates technical debt. This often leads to investor skepticism during funding rounds. Testriq’s{" "}
                <Link title="Launch-Fast QA" href="/launchfast-qa" className="text-brand-blue hover:underline font-medium">
                  Launch-Fast QA
                </Link>{" "}
                provides the specialized testing your early-stage team needs. We ensure you maintain velocity without compromising your product’s integrity.
              </p>
              <p>
                We don't just find bugs; we accelerate your software release cycle. Our{" "}
                <Link title="agile QA testing" href="/blog/post/rapid-functional-testing-why-speed-matters-in-agile-qa" className="text-brand-blue hover:underline">
                  agile and continuous QA practices
                </Link>{" "}
                accelerate your journey from code commit to MVP launch. Whether you require on-demand testing for feature pivots or affordable sprints, Testriq provides essential "Quality Discipline." We ensure your startup has the structural integrity to scale rather than stall.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact-us"
                title="Contact Us – Testriq QA Lab"
                className="inline-flex items-center justify-center bg-brand-blue text-white min-h-[44px] min-w-[44px] px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                Get Started Today
                <FaArrowRight className="ml-2" />
              </Link>

              <button
                onClick={openLightbox}
                className="cursor-pointer border-2 border-brand-blue text-brand-blue px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center"
              >
                <FaPlay className="w-4 h-4 mr-2" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">
                  48hr
                </div>
                <div className="text-sm text-gray-600">Rapid Turnaround</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-600">
                  99.5%
                </div>
                <div className="text-sm text-gray-600">Launch Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-600">
                  20+
                </div>
                <div className="text-sm text-gray-600">Startups Launched</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-600">
                  24/7
                </div>
                <div className="text-sm text-gray-600">Agile Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - LaunchFast QA Dashboard */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    LaunchFast QA Dashboard
                  </h2>
                </div>
                <span className="text-sm text-green-600 font-medium">
                  Active
                </span>
              </div>

              <div className="text-sm text-gray-600 mb-6">
                Real-time rapid testing & launch readiness monitoring
              </div>

              {/* Testing Pipeline */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <FaCode className="text-2xl text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-blue-900">
                    Development
                  </div>
                  <div className="text-xs text-green-600 flex items-center justify-center mt-1">
                    <FaCheckCircle className="mr-1" />
                    Ready
                  </div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <FaBolt className="text-2xl text-purple-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-purple-900">
                    Testing
                  </div>
                  <div className="text-xs text-yellow-600 flex items-center justify-center mt-1">
                    ⚡ In Progress
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <FaRocket className="text-2xl text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-green-900">
                    Launch
                  </div>
                  <div className="text-xs text-gray-600 flex items-center justify-center mt-1">
                    ⏳ Queued
                  </div>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600">Launch Readiness</div>
                  <div className="text-lg font-bold text-green-600">
                    94% Ready
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600">Test Coverage</div>
                  <div className="text-lg font-bold text-blue-600">
                    Comprehensive
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600">Features Tested</div>
                  <div className="text-lg font-bold text-purple-600">127</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600">Critical Issues</div>
                  <div className="text-lg font-bold text-red-600">0</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">LaunchFast QA Progress</span>
                  <span className="text-blue-600 font-medium">
                    94% Complete
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full"
                    style={{ width: "94%" }}
                  ></div>
                </div>
              </div>

              {/* Testing Breakdown */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Functional Testing</span>
                  <span className="text-green-600 font-medium">100%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Performance Testing</span>
                  <span className="text-blue-600 font-medium">98%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Security Testing</span>
                  <span className="text-purple-600 font-medium">92%</span>
                </div>
              </div>

              {/* Platform Icons */}
              <div className="flex justify-center space-x-6 pt-4 border-t border-gray-100">
                <div className="text-center">
                  <FaMobile className="text-xl text-blue-600 mx-auto mb-1" />
                  <div className="text-xs text-gray-600">Mobile</div>
                </div>
                <div className="text-center">
                  <FaDesktop className="text-xl text-green-600 mx-auto mb-1" />
                  <div className="text-xs text-gray-600">Web</div>
                </div>
                <div className="text-center">
                  <FaCloud className="text-xl text-purple-600 mx-auto mb-1" />
                  <div className="text-xs text-gray-600">API</div>
                </div>
                <div className="text-center">
                  <FaCode className="text-xl text-orange-600 mx-auto mb-1" />
                  <div className="text-xs text-gray-600">Backend</div>
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

export default LaunchFastQAHeroSection;
