"use client";

import Link from "next/link";
import React from "react";
import {
  FaUser,
  FaEye,
  FaCheckCircle,
  FaBug,
  FaMobile,
  FaDesktop,
  FaCloud,
  FaClipboardCheck,
} from "react-icons/fa";
import { FaArrowRight, FaHome, FaChevronRight } from "react-icons/fa";

const ManualTestingHeroSection: React.FC = () => {
  return (
    <section className="relative pt-8 pb-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
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
            Manual Testing
          </span>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-full text-base md:text-sm">
              <FaUser className="mr-2" />
              Manual Testing Specialists
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Global Manual Testing Services:
              <span className="text-transparent block bg-clip-text bg-brand-blue">
                {" "}
                Strategic Software QA for 2025
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed font-semibold">
              Use ISO 29119 Standards and Human Intelligence to navigate complex micro-services and rapid CI/CD releases.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              As we move into 2025, the role of manual software testing is undergoing a fundamental shift. Automation and AI testing are expanding, but the State of Testing™ report reveals a critical reality. Organizations now find that balancing automation with manual testing is the only way to achieve true quality in 2025.
              <br /><br />
              Automation is growing fast. By 2026, 30% of companies will automate over half of their QA, making manual testing harder to justify. Testriq solves this by using ISO 29119 standards. We put human insight where it matters most—focusing on the risky logic and complex paths that AI can’t handle yet.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact-us">
                <button className="bg-brand-blue cursor-pointer text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                  Get Started Today
                  <FaArrowRight className="ml-2" />
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">
                  5,000+
                </div>
                <div className="text-sm text-gray-600">Test Cases Executed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-600">
                  98%
                </div>
                <div className="text-sm text-gray-600">Bug Detection Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-600">
                  800+
                </div>
                <div className="text-sm text-gray-600">Applications Tested</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-600">
                  24/7
                </div>
                <div className="text-sm text-gray-600">Expert Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Manual Testing Dashboard */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Manual Testing Hub
                  </h2>
                </div>
                <span className="text-sm text-blue-600 font-medium">
                  Active Session
                </span>
              </div>

              <div className="text-sm text-gray-600 mb-6">
                Real-time manual testing execution & quality monitoring
              </div>

              {/* Testing Approach */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <FaEye className="text-2xl text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-blue-900">
                    Observe
                  </div>
                  <div className="text-xs text-blue-600 flex items-center justify-center mt-1">
                    <FaCheckCircle className="mr-1" />
                    Active
                  </div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <FaClipboardCheck className="text-2xl text-purple-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-purple-900">
                    Execute
                  </div>
                  <div className="text-xs text-yellow-600 flex items-center justify-center mt-1">
                    ⚡ In Progress
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <FaBug className="text-2xl text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-green-900">
                    Validate
                  </div>
                  <div className="text-xs text-gray-600 flex items-center justify-center mt-1">
                    ⏳ Queued
                  </div>
                </div>
              </div>

              {/* Testing Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600">Test Cases</div>
                  <div className="text-lg font-bold text-blue-600">
                    156 Executed
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600">Pass Rate</div>
                  <div className="text-lg font-bold text-green-600">92%</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600">Defects Found</div>
                  <div className="text-lg font-bold text-red-600">
                    12 Critical
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600">Coverage</div>
                  <div className="text-lg font-bold text-purple-600">85%</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Testing Progress</span>
                  <span className="text-blue-600 font-medium">
                    85% Complete
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>

              {/* Testing Areas */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Functional Testing</span>
                  <span className="text-blue-600 font-medium">90%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Usability Testing</span>
                  <span className="text-purple-600 font-medium">80%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Compatibility Testing</span>
                  <span className="text-green-600 font-medium">75%</span>
                </div>
              </div>

              {/* Platform Icons */}
              <div className="flex justify-center space-x-6 pt-2 border-t border-gray-100">
                <div className="text-center">
                  <FaMobile className="text-xl text-blue-600 mx-auto mb-1" />
                  <div className="text-xs text-gray-600">Mobile</div>
                </div>
                <div className="text-center">
                  <FaDesktop className="text-xl text-purple-600 mx-auto mb-1" />
                  <div className="text-xs text-gray-600">Web</div>
                </div>
                <div className="text-center">
                  <FaCloud className="text-xl text-green-600 mx-auto mb-1" />
                  <div className="text-xs text-gray-600">Cloud</div>
                </div>
                <div className="text-center">
                  <FaClipboardCheck className="text-xl text-orange-600 mx-auto mb-1" />
                  <div className="text-xs text-gray-600">UAT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManualTestingHeroSection;
