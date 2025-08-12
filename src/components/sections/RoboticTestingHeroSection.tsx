"use client";

import Link from "next/link";
import React from "react";
import { FaRobot, FaCog, FaShieldAlt, FaChartLine } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const RoboticTestingHeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
              <FaRobot />
              <span className="text-sm">Robotic Testing Specialists</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Comprehensive{" "}
              <span className="text-brand-blue">Robotic Testing</span> Services
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed">
              Ensure your robotic systems deliver precise, reliable, and safe
              performance with our comprehensive robotics testing services. From
              industrial automation to service robots - we validate every aspect
              of your robotic ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact-us">
                <button className="bg-brand-blue cursor-pointer text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-blue transition-colors duration-300 shadow-lg transform hover:scale-105">
                  Get Started Today
                  <FaArrowRight className="inline ml-2" />
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-500">
                  72 hr
                </div>
                <div className="text-gray-600 text-sm">Average Turnaround</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-500">
                  24/7
                </div>
                <div className="text-gray-600 text-sm">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Side - Robotic Testing Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 shadow-xl">
              {/* Robot Testing Control Panel */}
              <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-800 flex items-center">
                    <FaRobot className="w-5 h-5 mr-2 text-blue-500" />
                    Robot Testing Dashboard
                  </h3>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm text-green-600 font-semibold">
                      Active
                    </span>
                  </div>
                </div>

                <div className="text-sm text-gray-600 mb-4">
                  Real-time validation & monitoring
                </div>

                {/* Robot Status Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">
                        Arm Movement
                      </span>
                      <FaCog className="w-4 h-4 text-blue-500 animate-spin hidden md:block" />
                    </div>
                    <div className="text-sm md:text-lg md:font-bold  text-blue-600">
                      Operational
                    </div>
                  </div>

                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">
                        Safety Systems
                      </span>
                      <FaShieldAlt className="w-4 h-4 text-green-500 hidden md:block" />
                    </div>
                    <div className="text-sm md:text-lg md:font-bold text-green-600">
                      99.8% Pass
                    </div>
                  </div>

                  <div className="bg-purple-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">
                        Performance
                      </span>
                      <FaChartLine className="w-4 h-4 text-purple-500 hidden md:block" />
                    </div>
                    <div className="text-sm md:text-lg md:font-bold text-purple-600">
                      Optimal
                    </div>
                  </div>

                  <div className="bg-orange-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">
                        Precision
                      </span>
                      <div className="w-4 h-4 bg-orange-500 rounded-full hidden md:block"></div>
                    </div>
                    <div className="text-sm md:text-lg md:font-bold text-orange-600">
                      ±0.1mm
                    </div>
                  </div>
                </div>
              </div>

              {/* Robot Testing Progress */}
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-gray-800">
                    Robot Testing Progress
                  </span>
                  <span className="text-blue-600 font-bold">87% Complete</span>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Functional Testing</span>
                      <span className="text-green-600">100%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Safety Validation</span>
                      <span className="text-blue-600">92%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-11/12 animate-pulse"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Performance Testing</span>
                      <span className="text-purple-600">78%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full w-3/4 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Robot Types */}
              <div className="grid grid-cols-4 gap-3 mt-6">
                <div className="text-center">
                  <div className="text-2xl mb-1">🤖</div>
                  <div className="text-xs text-gray-600">Industrial</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1">🦾</div>
                  <div className="text-xs text-gray-600">Robotic Arm</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1">🚗</div>
                  <div className="text-xs text-gray-600">Autonomous</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1">🏠</div>
                  <div className="text-xs text-gray-600">Service</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce opacity-70"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse opacity-70"></div>
            <div className="absolute top-1/2 -left-6 w-4 h-4 bg-green-500 rounded-full animate-ping opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoboticTestingHeroSection;
