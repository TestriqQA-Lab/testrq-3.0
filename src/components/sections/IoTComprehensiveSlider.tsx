"use client";

import React, { useState } from "react";
import {
  FaWifi,
  FaShieldAlt,
  FaChartLine,
  FaCogs,
  FaNetworkWired,
  FaCloud,
  FaArrowRight,
  FaFlask,
} from "react-icons/fa";

const IoTComprehensiveSlider: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const testingTypes = [
    {
      icon: <FaWifi className="w-8 h-8" />,
      title: "Connectivity Testing",
      description:
        "Comprehensive testing of wireless protocols including WiFi, Bluetooth, Zigbee, and cellular connectivity to ensure seamless communication.",
      features: [
        "WiFi Protocol Testing",
        "Bluetooth LE Validation",
        "Zigbee Communication",
        "Cellular Connectivity",
      ],
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Security Testing",
      description:
        "Advanced security assessment including device authentication, data encryption, and vulnerability testing.",
      features: [
        "Device Authentication",
        "Data Encryption",
        "Firmware Security",
        "Vulnerability Assessment",
      ],
      color: "red",
      gradient: "from-red-500 to-red-600",
    },
    {
      icon: <FaNetworkWired className="w-8 h-8" />,
      title: "Protocol Testing",
      description:
        "Testing of IoT communication protocols including MQTT, CoAP, HTTP/HTTPS, and proprietary protocols.",
      features: [
        "MQTT Protocol",
        "CoAP Testing",
        "HTTP/HTTPS Validation",
        "Custom Protocols",
      ],
      color: "green",
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Performance Testing",
      description:
        "Comprehensive performance evaluation including latency, throughput, and scalability testing.",
      features: [
        "Latency Testing",
        "Throughput Analysis",
        "Scalability Assessment",
        "Resource Optimization",
      ],
      color: "purple",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: <FaCogs className="w-8 h-8" />,
      title: "Interoperability Testing",
      description:
        "Testing device compatibility and integration with different platforms and ecosystems.",
      features: [
        "Platform Compatibility",
        "Device Integration",
        "Ecosystem Testing",
        "Cross-platform Validation",
      ],
      color: "orange",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      icon: <FaCloud className="w-8 h-8" />,
      title: "Cloud Integration Testing",
      description:
        "End-to-end testing of IoT device integration with cloud platforms and edge computing systems.",
      features: [
        "Cloud Connectivity",
        "Edge Computing",
        "Data Synchronization",
        "Service Integration",
      ],
      color: "teal",
      gradient: "from-teal-500 to-teal-600",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-teal-50 py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaFlask />
            <span className="text-sm">
              Comprehensive Testing Solutions
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete IoT Testing{" "}
            <span className="text-[theme(color.brand.blue)]">Coverage</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Our comprehensive IoT device testing services cover every layer of your connected ecosystem, ensuring device reliability, security compliance, protocol interoperability, and performance validation across real-world conditions and all supported IoT protocols.
          </p>
        </div>

        {/* Interactive Hexagonal Grid Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {testingTypes.map((type, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${activeTab === index
                  ? `bg-${type.color}-500 text-white shadow-lg`
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
            >
              <div className="flex items-center gap-2">
                <div
                  className={`${activeTab === index
                      ? "text-white"
                      : `text-${type.color}-500`
                    }`}
                >
                  {React.cloneElement(type.icon, { className: "w-4 h-4" })}
                </div>
                <span>{type.title}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Active Tab Content with Animation */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 transform transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Content */}
            <div className="space-y-6">
              <div
                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${testingTypes[activeTab].gradient} rounded-xl text-white shadow-lg`}
              >
                {testingTypes[activeTab].icon}
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {testingTypes[activeTab].title}
                </h3>

                <p className="text-gray-700 text-lg mb-6">
                  {testingTypes[activeTab].description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {testingTypes[activeTab].features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-gray-50 rounded-lg"
                  >
                    <div
                      className={`w-3 h-3 bg-${testingTypes[activeTab].color}-500 rounded-full mr-3 animate-pulse`}
                    ></div>
                    <span className="text-gray-700 text-sm font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${testingTypes[activeTab].gradient} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
              >
                <span>Learn More</span>
                <FaArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Side - Interactive IoT Device Visualization */}
            <div className="relative">
              <div
                className={`bg-gradient-to-br from-${testingTypes[activeTab].color}-50 to-${testingTypes[activeTab].color}-100 p-8 rounded-2xl border border-${testingTypes[activeTab].color}-200`}
              >
                {/* Dynamic IoT Visualization Based on Active Tab */}
                {activeTab === 0 && (
                  <div className="relative">
                    {/* Central Hub */}
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        Hub
                      </div>
                    </div>
                    {/* Connected Devices */}
                    <div className="grid grid-cols-3 gap-3">
                      {["📱", "💡", "🔒", "🌡️", "📹", "🔊"].map((emoji, i) => (
                        <div
                          key={i}
                          className="bg-white p-3 rounded-lg text-center shadow-md"
                        >
                          <div className="text-2xl mb-1">{emoji}</div>
                          <div
                            className={`w-2 h-2 bg-green-500 rounded-full mx-auto animate-pulse`}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 1 && (
                  <div className="text-center space-y-4">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="text-red-600 text-4xl mb-4">🛡️</div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Security Shield
                      </h4>
                      <div className="flex justify-center space-x-2">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                          Encrypted
                        </span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          Authenticated
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 2 && (
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">MQTT</span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                          Active
                        </span>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">CoAP</span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          Connected
                        </span>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">HTTP/S</span>
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                          Secure
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 3 && (
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold">Latency</span>
                        <span className="text-purple-600 font-bold">12ms</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-purple-500 h-2 rounded-full animate-pulse"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold">
                          Throughput
                        </span>
                        <span className="text-purple-600 font-bold">98%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-purple-500 h-2 rounded-full animate-pulse"
                          style={{ width: "98%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 4 && (
                  <div className="text-center">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="text-orange-600 text-4xl mb-4">🔗</div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Device Compatibility
                      </h4>
                      <div className="flex justify-center space-x-2">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                          iOS
                        </span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          Android
                        </span>
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                          Web
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 5 && (
                  <div className="text-center">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="text-teal-600 text-4xl mb-4">☁️</div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Cloud Integration
                      </h4>
                      <div className="flex justify-center space-x-2">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          AWS
                        </span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                          Azure
                        </span>
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">
                          GCP
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IoTComprehensiveSlider;
