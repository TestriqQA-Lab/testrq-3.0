"use client";
import { FaNetworkWired, FaWifi } from "react-icons/fa";
import React, { useState } from "react";
import { FaArrowRight, FaPlay, FaCertificate } from "react-icons/fa";
import Link from "next/link";
import Lightbox from "../VideoLightBox"; 

const IoTTestingHeroSection: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Function to handle the lightbox open/close
  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };
  return (
    <section className="bg-white text-black py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="flex flex-col items-center xl:items-start text-center xl:text-left mx-auto xl:mx-0">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaNetworkWired />
            <span className="text-sm">IoT Device Testing Experts</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Comprehensive{" "}
            <span className="text-[theme(color.brand.blue)]">
              IoT Device Testing&nbsp;
            </span>
            Services
          </h1>

          <p className="text-gray-700 text-base md:text-lg mb-6 max-w-xl">
            Ensure your IoT devices deliver seamless connectivity, high
            performance, and secure communication with our systematic IoT
            testing services. From smart home devices to industrial IoT systems,
            we validate every layer, including hardware, protocols, and cloud
            integrations for end-to-end reliability and security.
          </p>

          <div className="flex flex-col sm:flex-row justify-center xl:justify-start items-center gap-4 mb-8 w-full sm:w-auto">
            <Link href="/contact-us">
              <button className="flex items-center cursor-pointer gap-2 py-3 px-5 bg-[theme(color.brand.blue)] text-white font-semibold text-base md:text-lg rounded-md hover:bg-brand-blue hover:shadow-lg w-full sm:w-auto">
                <span className="text-base">Get Started Today</span>
                <FaArrowRight className="w-4 h-5" />
              </button>
            </Link>
            <button onClick={openLightbox} className="flex items-center gap-2 py-3 px-5 border border-[theme(color.brand.blue)] text-[theme(color.brand.blue)] font-semibold text-base md:text-lg rounded-md hover:cursor-pointer w-full sm:w-auto">
              <FaPlay className="w-4 h-4" />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center xl:justify-start gap-6">
            {[
              ["30+", "IoT Devices Tested"],
              ["99.7%", "Issue Detection Rate"],
              ["36 hr", "Average Turnaround"],
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

        {/* Right Content - IoT Ecosystem Illustration */}
        <div className="relative">
          {/* IoT Network Visualization */}
          <div className="bg-gradient-to-br from-teal-50 to-blue-100 p-8 rounded-3xl shadow-2xl border border-teal-200">
            {/* Central Hub/Gateway */}
            <div className="relative flex items-center justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <div className="w-12 h-12 text-4xl flex items-center justify-center text-white rounded-full animate-pulse">
                  <FaWifi />
                </div>
              </div>

              {/* Connection Waves */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-28 h-28 border-2 border-teal-300 rounded-full animate-ping opacity-30"></div>
                <div
                  className="absolute w-36 h-36 border-2 border-blue-300 rounded-full animate-ping opacity-20"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>
            </div>

            {/* IoT Devices Grid */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {/* Smart Home Devices */}
              <div className="bg-white p-3 rounded-lg shadow-md text-center">
                <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-3 h-3 text-4xl flex items-center justify-center text-white rounded-full animate-pulse">
                    {" "}
                    <FaCertificate />
                  </div>
                </div>
                <div className="text-xs font-semibold text-gray-700">
                  Smart Light
                </div>
                <div className="text-xs text-green-600">Online</div>
              </div>

              <div className="bg-white p-3 rounded-lg shadow-md text-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="text-xs font-semibold text-gray-700">
                  Thermostat
                </div>
                <div className="text-xs text-blue-600">23°C</div>
              </div>

              <div className="bg-white p-3 rounded-lg shadow-md text-center">
                <div className="w-8 h-8 bg-purple-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="text-xs font-semibold text-gray-700">
                  Security Cam
                </div>
                <div className="text-xs text-purple-600">Recording</div>
              </div>

              <div className="bg-white p-3 rounded-lg shadow-md text-center">
                <div className="w-8 h-8 bg-orange-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="text-xs font-semibold text-gray-700">
                  Sensor
                </div>
                <div className="text-xs text-orange-600">Active</div>
              </div>

              <div className="bg-white p-3 rounded-lg shadow-md text-center">
                <div className="w-8 h-8 bg-red-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="text-xs font-semibold text-gray-700">
                  Smart Lock
                </div>
                <div className="text-xs text-red-600">Secured</div>
              </div>

              <div className="bg-white p-3 rounded-lg shadow-md text-center">
                <div className="w-8 h-8 bg-indigo-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="text-xs font-semibold text-gray-700">
                  Speaker
                </div>
                <div className="text-xs text-indigo-600">Playing</div>
              </div>
            </div>

            {/* Network Status */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-700">
                  Network Health
                </span>
                <span className="text-xs text-green-600 font-semibold">
                  Excellent
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-xs text-gray-500">Latency</div>
                  <div className="text-sm font-bold text-green-600">12ms</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Throughput</div>
                  <div className="text-sm font-bold text-blue-600">98%</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Uptime</div>
                  <div className="text-sm font-bold text-purple-600">99.9%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Protocol Badges */}
          <div className="absolute -top-4 -left-4 bg-white p-3 rounded-lg shadow-lg border border-gray-200">
            <div className="text-xs font-semibold text-gray-700">WiFi</div>
            <div className="text-lg font-bold text-green-600">📶</div>
          </div>

          <div className="absolute -top-4 -right-4 bg-white p-3 rounded-lg shadow-lg border border-gray-200">
            <div className="text-xs font-semibold text-gray-700">Bluetooth</div>
            <div className="text-lg font-bold text-blue-600">🔗</div>
          </div>

          <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg border border-gray-200">
            <div className="text-xs font-semibold text-gray-700">Zigbee</div>
            <div className="text-lg font-bold text-purple-600">⚡</div>
          </div>
        </div>
      </div>
      {/* Lightbox Modal */}
      <Lightbox isOpen={isLightboxOpen} videoLink="https://yourvideolink.com" onClose={closeLightbox} />
    </section>
  );
};

export default IoTTestingHeroSection;
