"use client";

import React from "react";
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
import { FaArrowRight, FaPlay } from "react-icons/fa";

const LaunchFastQAHeroSection: React.FC = () => {
  return (
    <section className="relative py-16 px-8 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-brand-blue rounded-full text-base md:text-sm">
              LaunchFast QA Service
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Accelerate Your Launch with
              <span className="text-transparent bg-clip-text bg-brand-blue">
                {" "}
                Rapid QA
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Get your product to market faster with LaunchFast QA. We deliver rapid testing sprints, agile QA testing, on-demand QA services, and continuous QA for startups and fast-moving teams. Our MVP QA testing and pre-launch testing ensure CI/CD integration, early defect detection, and a bug-free product ready for go-to-market.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
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
                  <h3 className="text-lg font-semibold text-gray-900">
                    LaunchFast QA Dashboard
                  </h3>
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
    </section>
  );
};

export default LaunchFastQAHeroSection;
