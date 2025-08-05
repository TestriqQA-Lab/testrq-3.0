"use client";

import Link from "next/link";
import React from "react";
import {
  FaRobot,
  FaCogs,
  FaRocket,
  FaBolt,
  FaMobile,
  FaDesktop,
  FaCloud,
  FaCode,
} from "react-icons/fa";
import { FaArrowRight, FaPlay } from "react-icons/fa";

const AutomationTestingHeroSection: React.FC = () => {
  return (
    <section className="relative py-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-purple-50 to-indigo-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-full text-base md:text-sm">
              <FaRobot className="mr-2" />
              Test Automation Experts
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Accelerate Testing with
              <span className="text-transparent bg-clip-text bg-brand-blue">
                {" "}
                Intelligent Automation
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Transform your testing strategy with cutting-edge automation
              testing frameworks, seamless CI/CD pipeline integration, and
              intelligent test execution. Our advanced test automation solutions
              using Selenium, API automation, and mobile automation reduce
              testing time by up to 80%, while significantly improving test
              coverage, reliability, and overall software quality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact-us">
                <button className="bg-brand-blue cursor-pointer text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                  Get Started Today
                  <FaArrowRight className="ml-2" />
                </button>
              </Link>
              <button className="border-2 border-brand-blue text-brand-blue px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-300 flex items-center justify-center">
                <FaPlay className="mr-2" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-600">
                  10,000+
                </div>
                <div className="text-sm text-gray-600">Automated Tests</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-indigo-600">
                  80%
                </div>
                <div className="text-sm text-gray-600">Time Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">
                  1,200+
                </div>
                <div className="text-sm text-gray-600">Projects Automated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-600">
                  24/7
                </div>
                <div className="text-sm text-gray-600">Continuous Testing</div>
              </div>
            </div>
          </div>

          {/* Right Content - Automation Testing Dashboard */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Automation Control Center
                  </h3>
                </div>
                <span className="text-sm text-purple-600 font-medium">
                  Running
                </span>
              </div>

              <div className="text-sm text-gray-600 mb-6">
                Real-time automation execution & performance monitoring
              </div>

              {/* Testing Approach */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <FaCogs className="text-2xl text-purple-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-purple-900">
                    Configure
                  </div>
                  <div className="text-xs text-green-600 flex items-center justify-center mt-1">
                    ✓ Complete
                  </div>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg text-center">
                  <FaRocket className="text-2xl text-indigo-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-indigo-900">
                    Execute
                  </div>
                  <div className="text-xs text-yellow-600 flex items-center justify-center mt-1">
                    ⚡ Running
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <FaBolt className="text-2xl text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-blue-900">
                    Report
                  </div>
                  <div className="text-xs text-gray-600 flex items-center justify-center mt-1">
                    ⏳ Pending
                  </div>
                </div>
              </div>

              {/* Automation Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600">Test Suites</div>
                  <div className="text-lg font-bold text-purple-600">
                    24 Running
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600">Success Rate</div>
                  <div className="text-lg font-bold text-green-600">96.5%</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600">Execution Time</div>
                  <div className="text-lg font-bold text-indigo-600">
                    2h 15m
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600">Coverage</div>
                  <div className="text-lg font-bold text-blue-600">94%</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Automation Progress</span>
                  <span className="text-purple-600 font-medium">
                    72% Complete
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 h-3 rounded-full"
                    style={{ width: "72%" }}
                  ></div>
                </div>
              </div>

              {/* Testing Areas */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Selenium WebDriver</span>
                  <span className="text-purple-600 font-medium">88%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">API Automation</span>
                  <span className="text-indigo-600 font-medium">75%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Mobile Testing</span>
                  <span className="text-blue-600 font-medium">65%</span>
                </div>
              </div>

              {/* Platform Icons */}
              <div className="flex justify-center space-x-6 pt-2 border-t border-gray-100">
                <div className="text-center">
                  <FaMobile className="text-xl text-purple-600 mx-auto mb-1" />
                  <div className="text-xs text-gray-600">Mobile</div>
                </div>
                <div className="text-center">
                  <FaDesktop className="text-xl text-indigo-600 mx-auto mb-1" />
                  <div className="text-xs text-gray-600">Web</div>
                </div>
                <div className="text-center">
                  <FaCloud className="text-xl text-blue-600 mx-auto mb-1" />
                  <div className="text-xs text-gray-600">API</div>
                </div>
                <div className="text-center">
                  <FaCode className="text-xl text-green-600 mx-auto mb-1" />
                  <div className="text-xs text-gray-600">CI/CD</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationTestingHeroSection;
