"use client";

import React from "react";
import { FaArrowRight, FaPlay, FaPlug } from "react-icons/fa";

const ApiTestingHeroSection: React.FC = () => {
  return (
    <section className="bg-white text-black py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-16">
        {/* Left Content */}
        <div className="flex flex-col items-center xl:items-start text-center xl:text-left mx-auto xl:mx-0">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaPlug />
            <span className="text-sm">
              API Testing Specialists
            </span>
          </div>
          

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Comprehensive{" "}
            <span className="text-[theme(color.brand.blue)]">
              API Testing&nbsp;
            </span>
            Services
          </h1>

          <p className="text-gray-700 text-base md:text-lg mb-6 max-w-xl">
            Guarantee robust, secure, and high-performance API integrations with our end-to-end API testing services. From RESTful and SOAP APIs to GraphQL and microservices, we perform functional, load, and security testing to ensure reliable data exchange and seamless system communication.
          </p>

          <div className="flex flex-col sm:flex-row justify-center xl:justify-start items-center gap-4 mb-8 w-full sm:w-auto">
            <button className="flex items-center gap-2 py-3 px-5 bg-[theme(color.brand.blue)] text-white font-semibold text-base md:text-lg rounded-md hover:bg-blue-400 cursor-pointer w-full sm:w-auto">
              <span className="text-base">Get Started Today</span>
              <FaArrowRight className="w-4 h-5" />
            </button>
            <button className="flex items-center gap-2 py-3 px-5 border border-[theme(color.brand.blue)] text-[theme(color.brand.blue)] font-semibold text-base md:text-lg rounded-md hover:cursor-pointer w-full sm:w-auto">
              <FaPlay className="w-4 h-4" />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center xl:justify-start gap-6">
            {[
              ["200+", "APIs Tested"],
              ["99.8%", "Bug Detection Rate"],
              ["24 hr", "Average Turnaround"],
              ["24/7", "Support Available"],
            ].map(([value, label], i) => (
              <div key={i} className="text-center xl:text-left">
                <p className="text-[theme(color.brand.blue)] font-bold text-2xl md:text-3xl">
                  {value}
                </p>
                <p className="text-gray-700 text-base">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - API Testing Illustration */}
        <div className="relative">
          {/* API Network Visualization */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl shadow-2xl border border-blue-200">
            {/* Central API Hub */}
            <div className="relative flex items-center justify-center mb-8">
              <div className="w-24 h-24 bg-[theme(color.brand.blue)] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">API</span>
              </div>

              {/* Animated Connection Lines */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 border-2 border-blue-300 rounded-full animate-pulse opacity-50"></div>
                <div className="absolute w-40 h-40 border-2 border-blue-200 rounded-full animate-pulse opacity-30"></div>
              </div>
            </div>

            {/* API Endpoints Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-700">
                    GET /users
                  </span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    200
                  </span>
                </div>
                <div className="text-xs text-gray-500 mt-1">Response: 45ms</div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-700">
                    POST /auth
                  </span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    201
                  </span>
                </div>
                <div className="text-xs text-gray-500 mt-1">Response: 32ms</div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-700">
                    PUT /data
                  </span>
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                    200
                  </span>
                </div>
                <div className="text-xs text-gray-500 mt-1">Response: 28ms</div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-orange-500">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-700">
                    DELETE /item
                  </span>
                  <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                    204
                  </span>
                </div>
                <div className="text-xs text-gray-500 mt-1">Response: 19ms</div>
              </div>
            </div>

            {/* Testing Status Bar */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-700">
                  API Test Suite
                </span>
                <span className="text-xs text-green-600 font-semibold">
                  98% Passed
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: "98%" }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>156 Tests</span>
                <span>3 Failed</span>
              </div>
            </div>
          </div>

          {/* Floating Test Badges */}
          <div className="absolute -top-4 -left-4 bg-white p-3 rounded-lg shadow-lg border border-gray-200">
            <div className="text-xs font-semibold text-gray-700">Security</div>
            <div className="text-lg font-bold text-green-600">✓</div>
          </div>

          <div className="absolute -top-4 -right-4 bg-white p-3 rounded-lg shadow-lg border border-gray-200">
            <div className="text-xs font-semibold text-gray-700">
              Performance
            </div>
            <div className="text-lg font-bold text-blue-600">⚡</div>
          </div>

          <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-lg shadow-lg border border-gray-200">
            <div className="text-xs font-semibold text-gray-700">Load Test</div>
            <div className="text-lg font-bold text-purple-600">📊</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiTestingHeroSection;
