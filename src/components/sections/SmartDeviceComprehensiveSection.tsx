"use client";

import React from "react";
import { FaWifi, FaShieldAlt, FaChartLine, FaMobile, FaCloud } from "react-icons/fa";
import { FaBatteryFull } from "react-icons/fa";

const SmartDeviceComprehensiveSection: React.FC = () => {
  const services = [
    {
      icon: <FaWifi className="w-8 h-8 text-green-500" />,
      title: "Connectivity Testing",
      description: "Comprehensive testing of wireless protocols including WiFi, Bluetooth, NFC, and cellular connectivity for reliable device communication."
    },
    {
      icon: <FaShieldAlt className="w-8 h-8 text-red-500" />,
      title: "Security Testing",
      description: "Advanced security assessment including data encryption, authentication protocols, and vulnerability testing for smart device protection."
    },
    {
      icon: <FaBatteryFull className="w-8 h-8 text-orange-500" />,
      title: "Battery & Power Testing",
      description: "Battery life optimization, power consumption analysis, and energy efficiency testing to maximize device operational time."
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-blue-500" />,
      title: "Performance Testing",
      description: "Comprehensive performance evaluation including response times, processing speed, and resource utilization optimization."
    },
    {
      icon: <FaMobile className="w-8 h-8 text-purple-500" />,
      title: "User Experience Testing",
      description: "Interface usability testing, accessibility validation, and user interaction optimization for enhanced device experience."
    },
    {
      icon: <FaCloud className="w-8 h-8 text-indigo-500" />,
      title: "Cloud Integration Testing",
      description: "End-to-end testing of cloud connectivity, data synchronization, and remote device management capabilities."
    }
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-brand-blue">Comprehensive</span> Smart Device Testing Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our expert team provides end-to-end smart device testing solutions to ensure your connected devices 
            perform reliably, communicate seamlessly, and maintain the highest security standards in real-world environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-green-200 group"
            >
              <div className="mb-4 group-hover:scale-105 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-brand-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-blue transition-colors duration-300 shadow-lg">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default SmartDeviceComprehensiveSection;

