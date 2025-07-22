"use client";

import React from "react";
import { FaSearch, FaLightbulb, FaEye, FaBug, FaRoute, FaUsers, FaMobile, FaDesktop, FaCloud } from "react-icons/fa";

const ExploratoryTestingHeroSection: React.FC = () => {
  return (
    <section className="relative py-20 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-green-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium">
              <FaSearch className="mr-2" />
              Exploratory Testing Specialists
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Discover Hidden
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                {" "}Issues{" "}
              </span>
              with Expert Exploration
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Uncover critical bugs and usability issues that scripted testing misses. 
              Our expert exploratory testing combines human intuition with systematic investigation 
              to ensure comprehensive quality validation and exceptional user experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                <FaLightbulb className="mr-2" />
                Get Started Today
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300 flex items-center justify-center">
                <FaEye className="mr-2" />
                ▶ Watch Demo
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-600">2,500+</div>
                <div className="text-sm text-gray-600">Bugs Discovered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">95%</div>
                <div className="text-sm text-gray-600">Issue Detection Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-600">500+</div>
                <div className="text-sm text-gray-600">Applications Explored</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-600">24/7</div>
                <div className="text-sm text-gray-600">Expert Support</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Exploratory Testing Dashboard */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <h3 className="text-lg font-semibold text-gray-900">Exploratory Testing Hub</h3>
                </div>
                <span className="text-sm text-green-600 font-medium">Active Session</span>
              </div>
              
              <div className="text-sm text-gray-600 mb-6">
                Real-time exploration & discovery monitoring
              </div>
              
              {/* Testing Approach */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <FaSearch className="text-2xl text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-green-900">Investigate</div>
                  <div className="text-xs text-green-600 flex items-center justify-center mt-1">
                    <FaEye className="mr-1" />
                    Active
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <FaLightbulb className="text-2xl text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-blue-900">Discover</div>
                  <div className="text-xs text-yellow-600 flex items-center justify-center mt-1">
                    ⚡ In Progress
                  </div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <FaBug className="text-2xl text-purple-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-purple-900">Report</div>
                  <div className="text-xs text-gray-600 flex items-center justify-center mt-1">
                    ⏳ Queued
                  </div>
                </div>
              </div>
              
              {/* Exploration Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600">Session Duration</div>
                  <div className="text-lg font-bold text-green-600">2h 45m</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600">Areas Explored</div>
                  <div className="text-lg font-bold text-blue-600">23 Features</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600">Issues Found</div>
                  <div className="text-lg font-bold text-purple-600">7 Bugs</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600">UX Insights</div>
                  <div className="text-lg font-bold text-orange-600">12 Notes</div>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Exploration Progress</span>
                  <span className="text-green-600 font-medium">78% Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-green-600 to-blue-600 h-3 rounded-full" style={{width: '78%'}}></div>
                </div>
              </div>
              
              {/* Testing Areas */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">User Journey Testing</span>
                  <span className="text-green-600 font-medium">85%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Edge Case Discovery</span>
                  <span className="text-blue-600 font-medium">72%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Usability Assessment</span>
                  <span className="text-purple-600 font-medium">68%</span>
                </div>
              </div>
              
              {/* Testing Techniques */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-green-100 p-2 rounded text-center">
                  <FaRoute className="text-green-600 mx-auto mb-1" />
                  <div className="text-xs text-green-800">User Tours</div>
                </div>
                <div className="bg-blue-100 p-2 rounded text-center">
                  <FaUsers className="text-blue-600 mx-auto mb-1" />
                  <div className="text-xs text-blue-800">Personas</div>
                </div>
                <div className="bg-purple-100 p-2 rounded text-center">
                  <FaBug className="text-purple-600 mx-auto mb-1" />
                  <div className="text-xs text-purple-800">Bug Hunting</div>
                </div>
                <div className="bg-orange-100 p-2 rounded text-center">
                  <FaLightbulb className="text-orange-600 mx-auto mb-1" />
                  <div className="text-xs text-orange-800">Heuristics</div>
                </div>
              </div>
              
              {/* Platform Icons */}
              <div className="flex justify-center space-x-6 pt-4 border-t border-gray-100">
                <div className="text-center">
                  <FaMobile className="text-xl text-green-600 mx-auto mb-1" />
                  <div className="text-xs text-gray-600">Mobile</div>
                </div>
                <div className="text-center">
                  <FaDesktop className="text-xl text-blue-600 mx-auto mb-1" />
                  <div className="text-xs text-gray-600">Web</div>
                </div>
                <div className="text-center">
                  <FaCloud className="text-xl text-purple-600 mx-auto mb-1" />
                  <div className="text-xs text-gray-600">API</div>
                </div>
                <div className="text-center">
                  <FaEye className="text-xl text-orange-600 mx-auto mb-1" />
                  <div className="text-xs text-gray-600">UX</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploratoryTestingHeroSection;

