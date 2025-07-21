"use client";

import React from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

const MobileReadyToEnsureQuality: React.FC = () => {
  const benefits = [
    "Cross-platform iOS & Android testing",
    "Real device testing lab access",
    "Automated regression testing suites",
    "Performance & battery optimization",
    "App store compliance validation",
    "24/7 testing environment support"
  ];

  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block bg-blue-500 bg-opacity-30 text-blue-100 text-sm px-4 py-2 rounded-full mb-6">
              Mobile Quality Assurance Excellence
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Ready to Ensure Your Mobile Application&apos;s{" "}
              <span className="text-blue-200">Quality & Performance?</span>
            </h2>
            
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Transform your mobile application with our comprehensive testing approach. 
              We ensure your app delivers exceptional performance, security, and user 
              experience across all devices and platforms, from iOS to Android.
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
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-blue-500 mb-2">Mobile Testing Excellence</h3>
                <p className="text-blue-500">Comprehensive Quality Assurance</p>
              </div>

              {/* Device Icons */}
              <div className="flex justify-center gap-6 mb-6">
                <div className="w-16 h-24 bg-gray-900 rounded-xl p-1">
                  <div className="w-full h-full bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs">iOS</span>
                  </div>
                </div>
                <div className="w-16 h-24 bg-gray-800 rounded-xl p-1">
                  <div className="w-full h-full bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs">Android</span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center text-blue-500">
                  <div className="text-3xl font-bold mb-1">1000+</div>
                  <div className="text-sm">Mobile Apps Tested</div>
                </div>
                <div className="text-center text-blue-500">
                  <div className="text-3xl font-bold mb-1">99.9%</div>
                  <div className="text-sm">Bug Detection Rate</div>
                </div>
                <div className="text-center text-blue-500">
                  <div className="text-3xl font-bold mb-1">50+</div>
                  <div className="text-sm">Device Models</div>
                </div>
                <div className="text-center text-blue-500">
                  <div className="text-3xl font-bold mb-1">12hr</div>
                  <div className="text-sm">Average Turnaround</div>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="space-y-4">
                {[
                  { label: "Functional Testing", percentage: 99 },
                  { label: "Performance Testing", percentage: 96 },
                  { label: "Security Testing", percentage: 98 }
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm text-blue-700 mb-1">
                      <span>{item.label}</span>
                      <span>{item.percentage}%</span>
                    </div>
                    <div className="w-full border border-blue-800 bg-opacity-50 rounded-full h-2.5">
                      <div 
                        className="bg-blue-800 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-yellow-900 font-bold text-lg">QA</span>
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
              <FaCheckCircle className="w-6 h-6 text-green-900" />
            </div>

            {/* Background Decorations */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400 bg-opacity-20 rounded-full blur-xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-blue-300 bg-opacity-20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileReadyToEnsureQuality;

