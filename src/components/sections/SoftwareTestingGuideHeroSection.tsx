import Link from "next/link";
import React from "react";
import {
  FaBook,
  FaCode,
  FaChartLine,
  FaCog,
  FaShieldAlt,
  FaArrowRight
} from "react-icons/fa";

const SoftwareTestingGuideHeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-16 px-8 md:px-12 lg:px-24 overflow-hidden">
      <div className="absolute inset-0 bg-white/60"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 ">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-full text-base md:text-sm">
              <FaBook className="mr-2" />
              Complete Software Testing Guide
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Master <span className="text-brand-blue">Software Testing</span>{" "}
                with Our Comprehensive Guide
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Everything you need to know about software testing services –
                from fundamental QA concepts to advanced testing methodologies.
                Learn various testing types, QA best practices, testing tools,
                and automation frameworks used by leading quality assurance
                companies and industry professionals.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you&apos;re a beginner starting your QA journey or an
                experienced QA professional looking to enhance your skills, this
                comprehensive software testing guide covers manual testing,
                automation testing, performance testing, security testing, API
                testing, and more to help you deliver bug-free, scalable
                software.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact-us">
                <button className="inline-flex cursor-pointer items-center px-8 py-4 bg-brand-blue text-white font-semibold rounded-lg hover:shadow-lg transition-colors duration-200 shadow-lg">
                  Start Learning Now
                  <FaArrowRight className="ml-2" />
                </button>
              </Link>

              {/* <button className="inline-flex items-center px-8 py-4 bg-white text-brand-blue font-semibold rounded-lg border-2 border-brand-blue hover:bg-blue-50 transition-colors duration-200">
                <FaPlay className="mr-2" />
                Download PDF Guide
              </button> */}
            </div>

            {/* Learning Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">50+</div>
                <div className="text-sm text-gray-600">Testing Topics</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Testing Types</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">100+</div>
                <div className="text-sm text-gray-600">Best Practices</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">25+</div>
                <div className="text-sm text-gray-600">Tools Covered</div>
              </div>
            </div>
          </div>

          {/* Right Content - Learning Dashboard */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <FaBook className="text-green-500" />
                  <span>Software Testing Guide</span>
                  <div className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                    Interactive Learning
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-lg font-semibold text-gray-800 mb-4">
                  Interactive learning modules & progress tracking
                </div>

                {/* Learning Modules */}
                <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <FaCode className="mx-auto text-2xl text-green-600 mb-2" />
                    <div className="text-sm font-medium text-green-800">
                      Fundamentals
                    </div>
                    <div className="text-xs text-green-600">12 Modules</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <FaCog className="mx-auto text-2xl text-blue-600 mb-2" />
                    <div className="text-sm font-medium text-blue-800">
                      Advanced
                    </div>
                    <div className="text-xs text-blue-600">8 Modules</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <FaShieldAlt className="mx-auto text-2xl text-purple-600 mb-2" />
                    <div className="text-sm font-medium text-purple-800">
                      Specialized
                    </div>
                    <div className="text-xs text-purple-600">6 Modules</div>
                  </div>
                </div>

                {/* Progress Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-gray-600">
                      Modules Completed
                    </div>
                    <div className="text-2xl font-bold text-green-600">
                      18 / 26
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Knowledge Score</div>
                    <div className="text-2xl font-bold text-blue-600">92%</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-sm text-gray-600">Time Invested</div>
                    <div className="text-2xl font-bold text-purple-600">
                      24 Hours
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Certification</div>
                    <div className="text-2xl font-bold text-orange-600">
                      Ready
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Overall Progress</span>
                    <span>69% Complete</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-green-500 to-blue-600 h-3 rounded-full"
                      style={{ width: "69%" }}
                    ></div>
                  </div>
                </div>

                {/* Learning Topics */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span>Manual Testing</span>
                    <span className="text-green-600 font-medium">
                      Completed
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span>Automation Testing</span>
                    <span className="text-blue-600 font-medium">
                      In Progress
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span>Performance Testing</span>
                    <span className="text-gray-400 font-medium">Locked</span>
                  </div>
                </div>

                {/* Learning Tools */}
                <div className="flex justify-center space-x-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded">
                    <FaBook className="text-green-600 text-sm" />
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded">
                    <FaCode className="text-blue-600 text-sm" />
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 bg-purple-100 rounded">
                    <FaChartLine className="text-purple-600 text-sm" />
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 bg-orange-100 rounded">
                    <FaCog className="text-orange-600 text-sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareTestingGuideHeroSection;
