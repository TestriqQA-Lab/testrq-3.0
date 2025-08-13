import Link from "next/link";
import React from "react";
import {
  FaFileAlt,
  FaClipboardList,
  FaChartLine,
  FaCog,
  FaShieldAlt,
  FaArrowRight,
  FaPlay,
} from "react-icons/fa";

const QADocumentationHeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 py-16  px-8 md:px-12 lg:px-24 overflow-hidden">
      <div className="absolute inset-0 bg-white/60"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-full text-base md:text-sm">
              <FaFileAlt className="mr-2" />
              QA Documentation Specialists
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Professional{" "}
                <span className="text-brand-blue">QA Documentation</span>{" "}
                Services
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Comprehensive quality assurance documentation services to
                streamline your QA process documentation, ensure requirements
                traceability, and maintain consistent QA standards documentation
                across all software development projects.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Our expert technical writers and QA professionals create
                detailed test plans, test cases, requirements documentation, and
                QA deliverables that enhance client collaboration, reduce
                errors, and accelerate project delivery.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact-us">
                <button className="inline-flex cursor-pointer items-center px-8 py-4 bg-brand-blue text-white font-semibold rounded-lg hover:shadow-lg transition-colors duration-200">
                  Get Started Today
                  <FaArrowRight className="ml-2" />
                </button>
              </Link>
              <button className="inline-flex items-center px-8 py-4 bg-white text-brand-blue font-semibold rounded-lg border-2 border-brand-blue hover:bg-purple-50 transition-colors duration-200">
                <FaPlay className="mr-2" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">2,500+</div>
                <div className="text-sm text-gray-600">Documents Created</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">99%</div>
                <div className="text-sm text-gray-600">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">150+</div>
                <div className="text-sm text-gray-600">Projects Documented</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Content - Documentation Dashboard */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <FaFileAlt className="hidden md:block text-brand-blue" />
                  <span className="ml-3 md:ml-0">QA Documentation Hub</span>
                  <div className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                    Active Session
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-lg font-semibold text-gray-800 mb-4">
                  Real-time documentation creation & quality monitoring
                </div>

                {/* Documentation Status */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <FaClipboardList className="mx-auto text-2xl text-blue-600 mb-2" />
                    <div className="text-sm font-medium text-blue-800">
                      Create
                    </div>
                    <div className="text-xs text-blue-600">Active</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <FaChartLine className="mx-auto text-2xl text-purple-600 mb-2" />
                    <div className="text-sm font-medium text-purple-800">
                      Review
                    </div>
                    <div className="text-xs text-purple-600">In Progress</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <FaShieldAlt className="mx-auto text-2xl text-green-600 mb-2" />
                    <div className="text-sm font-medium text-green-800">
                      Approve
                    </div>
                    <div className="text-xs text-green-600">Queued</div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-gray-600">
                      Documents Created
                    </div>
                    <div className="text-2xl font-bold text-blue-600">
                      47 Completed
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Quality Score</div>
                    <div className="text-2xl font-bold text-green-600">98%</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-sm text-gray-600">Templates Used</div>
                    <div className="text-2xl font-bold text-purple-600">
                      12 Active
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Coverage</div>
                    <div className="text-2xl font-bold text-orange-600">
                      95%
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Documentation Progress</span>
                    <span>87% Complete</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full"
                      style={{ width: "87%" }}
                    ></div>
                  </div>
                </div>

                {/* Document Types */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span>Test Plans</span>
                    <span className="text-blue-600 font-medium">95%</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span>Test Cases</span>
                    <span className="text-green-600 font-medium">92%</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span>Requirements Docs</span>
                    <span className="text-purple-600 font-medium">88%</span>
                  </div>
                </div>

                {/* Platform Icons */}
                <div className="flex justify-center space-x-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded">
                    <FaFileAlt className="text-blue-600 text-sm" />
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded">
                    <FaClipboardList className="text-green-600 text-sm" />
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

export default QADocumentationHeroSection;
