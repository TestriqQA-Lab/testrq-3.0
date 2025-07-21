"use client";

import React from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

const DesktopReadyToEnsureQuality: React.FC = () => {
  const benefits = [
    "Cross-platform compatibility testing",
    "Automated regression testing suites",
    "Performance optimization analysis",
    "Security vulnerability assessment",
    "User experience validation",
    "24/7 testing environment support",
  ];

  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block bg-blue-500 bg-opacity-30 text-blue-100 text-sm px-4 py-2 rounded-full mb-6">
              Quality Assurance Excellence
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Ready to Ensure Your Desktop Application&apos;s{" "}
              <span className="text-blue-200">Quality & Performance?</span>
            </h2>

            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Transform your desktop application with our comprehensive testing
              approach. We ensure your software delivers exceptional
              performance, security, and user experience across all platforms
              and environments.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FaCheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-blue-100">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                <span>Start Your Testing Project</span>
                <FaArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-4 border-2 border-blue-300 text-blue-100 font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative">
            {/* Main Card */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Testing Excellence
                </h3>
                <p className="text-blue-600 font-medium">
                  Comprehensive Quality Assurance
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-extrabold text-gray-900 mb-1">
                    500+
                  </div>
                  <div className="text-sm text-gray-600">
                    Desktop Apps Tested
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-extrabold text-gray-900 mb-1">
                    99.9%
                  </div>
                  <div className="text-sm text-gray-600">
                    Bug Detection Rate
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-extrabold text-gray-900 mb-1">
                    15+
                  </div>
                  <div className="text-sm text-gray-600">
                    Platforms Supported
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-extrabold text-gray-900 mb-1">
                    24/7
                  </div>
                  <div className="text-sm text-gray-600">Testing Support</div>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="space-y-4">
                {[
                  { label: "Functional Testing", percentage: 98 },
                  { label: "Performance Testing", percentage: 95 },
                  { label: "Security Testing", percentage: 97 },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>{item.label}</span>
                      <span>{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-300 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-md">
              <span className="text-yellow-900 font-bold text-lg">QA</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center shadow-md">
              <FaCheckCircle className="w-6 h-6 text-green-900" />
            </div>

            {/* Background Decorations */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-100 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-100 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesktopReadyToEnsureQuality;
