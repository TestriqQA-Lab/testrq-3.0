"use client";

import React from "react";
import { FaRobot, FaShieldAlt, FaCog, FaChartLine, FaNetworkWired, FaCode } from "react-icons/fa";

const RoboticComprehensiveSection: React.FC = () => {
  const services = [
    {
      icon: <FaCog className="w-8 h-8 text-blue-500" />,
      title: "Functional Testing",
      description: "Comprehensive testing of robotic functionality including movement precision, sensor accuracy, and actuator response validation."
    },
    {
      icon: <FaShieldAlt className="w-8 h-8 text-green-500" />,
      title: "Safety Validation",
      description: "Critical safety testing including emergency stops, collision detection, and fail-safe mechanism validation for human-robot interaction."
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-purple-500" />,
      title: "Performance Testing",
      description: "Precision testing, speed optimization, load capacity validation, and endurance testing to ensure optimal robotic performance."
    },
    {
      icon: <FaNetworkWired className="w-8 h-8 text-orange-500" />,
      title: "Integration Testing",
      description: "End-to-end testing of robotic systems integration with existing infrastructure, software, and control systems."
    },
    {
      icon: <FaCode className="w-8 h-8 text-red-500" />,
      title: "Software Testing",
      description: "Comprehensive testing of robotic software including algorithms, control logic, and autonomous decision-making systems."
    },
    {
      icon: <FaRobot className="w-8 h-8 text-indigo-500" />,
      title: "Autonomous Testing",
      description: "Advanced testing of autonomous navigation, path planning, obstacle avoidance, and machine learning capabilities."
    }
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-brand-blue">Comprehensive</span> Robotic Testing Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our expert team provides end-to-end robotic testing solutions to ensure your robotic systems 
            perform reliably, safely, and efficiently in real-world environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-200 group"
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
          <button className="bg-brand-blue text-white px-8 py-3 rounded-lg font-semibold hover:brand-blue transition-colors duration-300 shadow-lg">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default RoboticComprehensiveSection;

