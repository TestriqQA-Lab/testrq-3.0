"use client";

import Link from "next/link";
import React from "react";
import {
  FaShieldAlt,
  FaSync,
  FaCheckDouble,
  FaBug,
  FaMobile,
  FaDesktop,
  FaCloud,
  FaHistory,
} from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const RegressionTestingHeroSection: React.FC = () => {
  return (
    <section className="relative py-16 px-8 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-full text-base md:text-sm">
              <FaShieldAlt className="mr-2" />
              Regression Testing Specialists
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Safeguard Your Software with
              <span className="text-transparent bg-clip-text bg-brand-blue">
                {" "}
                Comprehensive Regression Testing
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Ensure your <Link href='blog/post/the-future-of-qa-trends-shaping-software-testing-in-2025'>software updates</Link> don&apos;t break existing
              functionality with our <Link href='blog/post/risk-based-regression-testing-smarter-test-optimization'>comprehensive regression testing services</Link>.
              We use selective, progressive, and <Link href='blog/post/automated-regression-testing-faster-smarter-qa-cycles'>automated regression testing</Link>{" "}
              strategies-supported by <Link href='blog/post/how-to-write-maintainable-test-scripts-in-selenium-or-cypress'>robust test scripts</Link>, <Link href='blog/post/continuous-regression-testing-ensuring-quality-in-agile-devops'>continuous regression</Link> testing, and <Link href='blog/post/regression-impact-analysis-optimizing-test-coverage'>impact analysis</Link>-to maintain software stability while
              accelerating your <Link href='blog/post/ci-cd-test-automation-integration-deliver-faster-with-confidence'>CI/CD pipelines</Link> and <Link href='blog/post/automated-regression-testing-faster-smarter-qa-cycles'>reducing production defects.</Link>
            </p>

            <div className="flex flex-col items-center lg:items-start sm:flex-row gap-4">
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
                <div className="text-2xl md:text-3xl font-bold text-green-600">
                  15,000+
                </div>
                <div className="text-sm text-gray-600">Regression Tests</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-teal-600">
                  99.2%
                </div>
                <div className="text-sm text-gray-600">Stability Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">
                  2,000+
                </div>
                <div className="text-sm text-gray-600">Releases Validated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-600">
                  24/7
                </div>
                <div className="text-sm text-gray-600">Continuous Testing</div>
              </div>
            </div>
          </div>

          {/* Right Content - Regression Testing Dashboard */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Regression Test Suite
                  </h3>
                </div>
                <span className="text-sm text-green-600 font-medium">
                  Executing
                </span>
              </div>

              <div className="text-sm text-gray-600 mb-6">
                Real-time regression testing execution & stability monitoring
              </div>

              {/* Testing Approach */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <FaSync className="text-2xl text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-green-900">
                    Select
                  </div>
                  <div className="text-xs text-green-600 flex items-center justify-center mt-1">
                    ✓ Complete
                  </div>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg text-center">
                  <FaCheckDouble className="text-2xl text-teal-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-teal-900">
                    Execute
                  </div>
                  <div className="text-xs text-yellow-600 flex items-center justify-center mt-1">
                    ⚡ Running
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <FaBug className="text-2xl text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-blue-900">
                    Validate
                  </div>
                  <div className="text-xs text-gray-600 flex items-center justify-center mt-1">
                    ⏳ Pending
                  </div>
                </div>
              </div>

              {/* Regression Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600">Test Cases</div>
                  <div className="text-lg font-bold text-green-600">
                    1,247 Selected
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600">Pass Rate</div>
                  <div className="text-lg font-bold text-teal-600">98.7%</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600">Regressions</div>
                  <div className="text-lg font-bold text-red-600">3 Found</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600">Coverage</div>
                  <div className="text-lg font-bold text-blue-600">91%</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Regression Progress</span>
                  <span className="text-green-600 font-medium">
                    67% Complete
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-green-600 to-teal-600 h-3 rounded-full"
                    style={{ width: "67%" }}
                  ></div>
                </div>
              </div>

              {/* Testing Areas */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Core Functionality</span>
                  <span className="text-green-600 font-medium">95%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Integration Points</span>
                  <span className="text-teal-600 font-medium">78%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Critical Paths</span>
                  <span className="text-blue-600 font-medium">85%</span>
                </div>
              </div>

              {/* Platform Icons */}
              <div className="flex justify-center space-x-6 pt-2 border-t border-gray-100">
                <div className="text-center">
                  <FaMobile className="text-xl text-green-600 mx-auto mb-1" />
                  <div className="text-xs text-gray-600">Mobile</div>
                </div>
                <div className="text-center">
                  <FaDesktop className="text-xl text-teal-600 mx-auto mb-1" />
                  <div className="text-xs text-gray-600">Web</div>
                </div>
                <div className="text-center">
                  <FaCloud className="text-xl text-blue-600 mx-auto mb-1" />
                  <div className="text-xs text-gray-600">API</div>
                </div>
                <div className="text-center">
                  <FaHistory className="text-xl text-purple-600 mx-auto mb-1" />
                  <div className="text-xs text-gray-600">Legacy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegressionTestingHeroSection;
