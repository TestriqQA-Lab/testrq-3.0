"use client";

import React, { useState } from "react";
import { FaWifi, FaShieldAlt, FaChartLine, FaMobile, FaCloud, FaFlask } from "react-icons/fa";
import { FaBatteryFull } from "react-icons/fa";

const SmartDeviceComprehensiveSlider: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const testingTypes = [
    {
      id: "connectivity",
      title: "Connectivity Testing",
      icon: <FaWifi className="w-6 h-6" />,
      coverage: "99.4% connectivity success",
      description: "Comprehensive testing of wireless protocols and network connectivity for reliable device communication.",
      features: [
        "WiFi protocol testing",
        "Bluetooth connectivity validation",
        "NFC communication testing",
        "Cellular network testing"
      ],
      color: "green"
    },
    {
      id: "security",
      title: "Security Testing",
      icon: <FaShieldAlt className="w-6 h-6" />,
      coverage: "Zero security vulnerabilities",
      description: "Advanced security assessment to protect smart devices from threats and ensure data protection.",
      features: [
        "Data encryption validation",
        "Authentication testing",
        "Vulnerability assessment",
        "Privacy protection testing"
      ],
      color: "red"
    },
    {
      id: "battery",
      title: "Battery & Power Testing",
      icon: <FaBatteryFull className="w-6 h-6" />,
      coverage: "100% power optimization",
      description: "Comprehensive battery life and power consumption testing to maximize device operational efficiency.",
      features: [
        "Battery life testing",
        "Power consumption analysis",
        "Energy efficiency optimization",
        "Charging performance testing"
      ],
      color: "orange"
    },
    {
      id: "performance",
      title: "Performance Testing",
      icon: <FaChartLine className="w-6 h-6" />,
      coverage: "100% performance optimization",
      description: "Comprehensive performance evaluation including speed, responsiveness, and resource utilization.",
      features: [
        "Response time testing",
        "Processing speed validation",
        "Memory usage optimization",
        "Resource utilization testing"
      ],
      color: "blue"
    },
    {
      id: "ux",
      title: "User Experience Testing",
      icon: <FaMobile className="w-6 h-6" />,
      coverage: "100% usability validation",
      description: "Interface usability and user interaction testing to ensure optimal device experience.",
      features: [
        "Interface usability testing",
        "Accessibility validation",
        "User interaction testing",
        "Experience optimization"
      ],
      color: "purple"
    },
    {
      id: "cloud",
      title: "Cloud Integration Testing",
      icon: <FaCloud className="w-6 h-6" />,
      coverage: "100% cloud connectivity",
      description: "End-to-end testing of cloud services integration and data synchronization capabilities.",
      features: [
        "Cloud connectivity testing",
        "Data synchronization validation",
        "Remote management testing",
        "API integration testing"
      ],
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string, isActive: boolean) => {
    const colors = {
      green: isActive ? "bg-green-500 text-white" : "bg-green-50 text-green-600 hover:bg-green-100",
      red: isActive ? "bg-red-500 text-white" : "bg-red-50 text-red-600 hover:bg-red-100",
      orange: isActive ? "bg-orange-500 text-white" : "bg-orange-50 text-orange-600 hover:bg-orange-100",
      blue: isActive ? "bg-blue-500 text-white" : "bg-blue-50 text-blue-600 hover:bg-blue-100",
      purple: isActive ? "bg-purple-500 text-white" : "bg-purple-50 text-purple-600 hover:bg-purple-100",
      indigo: isActive ? "bg-indigo-500 text-white" : "bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
    };
    return colors[color as keyof typeof colors];
  };

  const getBorderColor = (color: string) => {
    const colors = {
      green: "border-green-200",
      red: "border-red-200",
      orange: "border-orange-200",
      blue: "border-blue-200",
      purple: "border-purple-200",
      indigo: "border-indigo-200"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaFlask />
            <span className="text-sm">
              Comprehensive Testing Solutions
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Smart Device Testing <span className="text-brand-blue">Coverage</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our smart product testing services cover every aspect of your connected device ecosystem, ensuring reliability, security, and optimal performance across all smart devices and smart appliances.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {testingTypes.map((type, index) => (
            <button
              key={type.id}
              onClick={() => setActiveTab(index)}
              className={`p-4 rounded-xl border-2 transition-all duration-300 ${getColorClasses(type.color, activeTab === index)} ${getBorderColor(type.color)}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-2">{type.icon}</div>
                <div className="font-semibold text-sm">{type.title}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${getColorClasses(testingTypes[activeTab].color, false)}`}>
                {testingTypes[activeTab].coverage}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className={`mr-3 p-2 rounded-lg ${getColorClasses(testingTypes[activeTab].color, false)}`}>
                  {testingTypes[activeTab].icon}
                </span>
                {testingTypes[activeTab].title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {testingTypes[activeTab].description}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Key Features:</h4>
                <ul className="space-y-2">
                  {testingTypes[activeTab].features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <div className={`w-2 h-2 rounded-full mr-3 ${getColorClasses(testingTypes[activeTab].color, true).split(' ')[0]}`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`mt-6 px-6 py-3 rounded-lg font-semibold transition-colors duration-300 ${getColorClasses(testingTypes[activeTab].color, true)} hover:opacity-90`}>
                Learn More
              </button>
            </div>

            {/* Visual Representation */}
            <div className="relative">
              <div className={`bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 ${getBorderColor(testingTypes[activeTab].color)}`}>
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${getColorClasses(testingTypes[activeTab].color, false)}`}>
                    <div className="text-3xl">
                      {testingTypes[activeTab].icon}
                    </div>
                  </div>

                  <h4 className="font-bold text-gray-900 mb-2">
                    {testingTypes[activeTab].title}
                  </h4>

                  <div className={`text-sm font-semibold ${getColorClasses(testingTypes[activeTab].color, true).split(' ')[1]}`}>
                    {testingTypes[activeTab].coverage}
                  </div>

                  {/* Progress Visualization */}
                  <div className="mt-6 space-y-3">
                    {testingTypes[activeTab].features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="text-left">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">{feature}</span>
                          <span className={`font-semibold ${getColorClasses(testingTypes[activeTab].color, true).split(' ')[1]}`}>
                            {96 + index * 2}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${getColorClasses(testingTypes[activeTab].color, true).split(' ')[0]}`}
                            style={{ width: `${96 + index * 2}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SmartDeviceComprehensiveSlider;

