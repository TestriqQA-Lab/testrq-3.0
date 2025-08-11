"use client";

import Link from "next/link";
import React from "react";
import { FaWifi, FaBluetooth, FaMobile, FaShieldAlt } from "react-icons/fa";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import { MdDevicesOther } from "react-icons/md";

const SmartDeviceTestingHeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-green-50 py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
              <MdDevicesOther />
              <span className="text-sm">Smart Device Testing Experts</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Comprehensive{" "}
              <span className="text-brand-blue">Smart Device Testing</span>{" "}
              Services
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed">
              Ensure your smart devices deliver seamless connectivity, optimal
              performance, and robust security with our smart device testing
              services. From wearables to smart home devices – we validate every
              aspect of your IoT device and connected ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact-us">
                <button className="bg-brand-blue cursor-pointer text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-blue transition-colors duration-300 shadow-lg transform hover:scale-105">
                  Get Started Today
                  <FaArrowRight className="inline ml-2" />
                </button>
              </Link>
              <button className="border border-brand-blue text-brand-blue px-8 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2">
                <FaPlay className="w-4 h-4" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-500">
                  800+
                </div>
                <div className="text-gray-600 text-sm">
                  Smart Devices Tested
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-500">
                  99.4%
                </div>
                <div className="text-gray-600 text-sm">
                  Connectivity Success Rate
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-500">
                  48 hr
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

          {/* Right Side - Smart Device Testing Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 shadow-xl">
              {/* Smart Device Testing Control Panel */}
              <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-800 flex items-center">
                    <FaMobile className="w-5 h-5 mr-2 text-green-500" />
                    Smart Device Testing Hub
                  </h3>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm text-green-600 font-semibold">
                      Active
                    </span>
                  </div>
                </div>

                <div className="text-sm text-gray-600 mb-4">
                  Real-time device validation & monitoring
                </div>

                {/* Device Status Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">
                        Connectivity
                      </span>
                      <FaWifi className="w-4 h-4 text-green-500" />
                    </div>
                    <div className="text-lg font-bold text-green-600">
                      99.4% Success
                    </div>
                  </div>

                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">
                        Bluetooth
                      </span>
                      <FaBluetooth className="w-4 h-4 text-blue-500" />
                    </div>
                    <div className="text-lg font-bold text-blue-600">
                      Connected
                    </div>
                  </div>

                  <div className="bg-purple-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">
                        Security
                      </span>
                      <FaShieldAlt className="w-4 h-4 text-purple-500" />
                    </div>
                    <div className="text-lg font-bold text-purple-600">
                      Validated
                    </div>
                  </div>

                  <div className="bg-orange-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">
                        Performance
                      </span>
                      <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                    </div>
                    <div className="text-lg font-bold text-orange-600">
                      Optimal
                    </div>
                  </div>
                </div>
              </div>

              {/* Smart Device Testing Progress */}
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-gray-800">
                    Device Testing Progress
                  </span>
                  <span className="text-green-600 font-bold">92% Complete</span>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">
                        Connectivity Testing
                      </span>
                      <span className="text-green-600">100%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Security Validation</span>
                      <span className="text-blue-600">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-11/12 animate-pulse"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Performance Testing</span>
                      <span className="text-purple-600">82%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full w-4/5 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Smart Device Types */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
                <div className="text-center">
                  <div className="text-2xl mb-1">📱</div>
                  <div className="text-xs text-gray-600">Smartphones</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1">⌚</div>
                  <div className="text-xs text-gray-600">Wearables</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1">🏠</div>
                  <div className="text-xs text-gray-600">Smart Home</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1">🎧</div>
                  <div className="text-xs text-gray-600">Audio Devices</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full animate-bounce opacity-70"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-pulse opacity-70"></div>
            <div className="absolute top-1/2 -left-6 w-4 h-4 bg-purple-500 rounded-full animate-ping opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartDeviceTestingHeroSection;
