"use client";

import React from "react";
import { FaUser, FaEye, FaCheckCircle, FaBug, FaMobile, FaDesktop, FaCloud, FaClipboardCheck } from "react-icons/fa";
import { FaArrowRight, FaPlay } from "react-icons/fa";

const ManualTestingHeroSection: React.FC = () => {
  return (
    <section className="relative py-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-full text-base md:text-sm">
              <FaUser className="mr-2" />
              Manual Testing Specialists
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Human-Centered Testing for
              <span className="text-transparent bg-clip-text bg-brand-blue">
                {" "}Perfect
              </span>
              <span className="text-transparent block bg-clip-text bg-brand-blue">
                {" "}User Experience
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Leverage human intuition and testing expertise to uncover critical usability issues, edge cases, and user experience challenges that automated testing often misses. Our skilled manual testers ensure your software delivers exceptional quality through comprehensive functional testing, usability testing, and exploratory testing—powered by ISTQB-certified professionals and real-world insight.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                Get Started Today
                <FaArrowRight className="ml-2" />
              </button>
              <button className="border-2 border-brand-blue text-brand-blue px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center">
                <FaPlay className="mr-2" />
                Watch Demo
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">5,000+</div>
                <div className="text-sm text-gray-600">Test Cases Executed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-600">98%</div>
                <div className="text-sm text-gray-600">Bug Detection Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-600">800+</div>
                <div className="text-sm text-gray-600">Applications Tested</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-600">24/7</div>
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
                  <h3 className="text-lg font-semibold text-gray-900">Manual Testing Hub</h3>
                </div>
                <span className="text-sm text-blue-600 font-medium">Active Session</span>
              </div>
              
              <div className="text-sm text-gray-600 mb-6">
                Real-time manual testing execution & quality monitoring
              </div>
              
              {/* Testing Approach */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <FaEye className="text-2xl text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-blue-900">Observe</div>
                  <div className="text-xs text-blue-600 flex items-center justify-center mt-1">
                    <FaCheckCircle className="mr-1" />
                    Active
                  </div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <FaClipboardCheck className="text-2xl text-purple-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-purple-900">Execute</div>
                  <div className="text-xs text-yellow-600 flex items-center justify-center mt-1">
                    ⚡ In Progress
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <FaBug className="text-2xl text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-green-900">Validate</div>
                  <div className="text-xs text-gray-600 flex items-center justify-center mt-1">
                    ⏳ Queued
                  </div>
                </div>
              </div>
              
              {/* Testing Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600">Test Cases</div>
                  <div className="text-lg font-bold text-blue-600">156 Executed</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600">Pass Rate</div>
                  <div className="text-lg font-bold text-green-600">92%</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600">Defects Found</div>
                  <div className="text-lg font-bold text-red-600">12 Critical</div>
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
                  <span className="text-blue-600 font-medium">85% Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full" style={{width: '85%'}}></div>
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

