"use client";

import Link from "next/link";
import React from "react";
import {
  FaWifi,
  FaShieldAlt,
  FaCloud,
  FaCog,
  FaNetworkWired,
  FaBatteryHalf,
  FaMobile,
  FaDesktop,
  FaChartLine,
  FaSync,
  FaLock,
  FaCheckCircle,
} from "react-icons/fa";

const IoTTestingServicesSection: React.FC = () => {
  const services = [
    {
      icon: FaNetworkWired,
      title: "Device Connectivity Testing",
      description:
        "Comprehensive testing of IoT device connectivity across protocols, networks, and edge conditions.",
      features: [
        "Protocol Validation",
        "Network Resilience",
        "Edge Case Testing",
        "Connection Recovery",
      ],
    },
    {
      icon: FaShieldAlt,
      title: "IoT Security Testing",
      description:
        "Advanced security testing to protect IoT devices from cyber threats and ensure data privacy.",
      features: [
        "Penetration Testing",
        "Vulnerability Assessment",
        "Data Encryption",
        "Access Control",
      ],
    },
    {
      icon: FaCloud,
      title: "Cloud Integration Testing",
      description:
        "End-to-end testing of IoT device integration with cloud platforms and services.",
      features: [
        "API Integration",
        "Data Pipeline Testing",
        "Cloud Scalability",
        "Service Reliability",
      ],
    },
    {
      icon: FaSync,
      title: "Data Synchronization Testing",
      description:
        "Validation of data flow and synchronization between devices, edge systems, and cloud platforms.",
      features: [
        "Real-time Sync",
        "Data Integrity",
        "Conflict Resolution",
        "Offline Capabilities",
      ],
    },
    {
      icon: FaBatteryHalf,
      title: "Power Management Testing",
      description:
        "Optimization and testing of power consumption for battery-powered IoT devices.",
      features: [
        "Battery Life Testing",
        "Power Optimization",
        "Sleep Mode Validation",
        "Energy Profiling",
      ],
    },
    {
      icon: FaCog,
      title: "Device Interoperability Testing",
      description:
        "Testing compatibility and communication between different IoT devices and platforms.",
      features: [
        "Cross-Platform Testing",
        "Protocol Compatibility",
        "Device Discovery",
        "Communication Validation",
      ],
    },
    {
      icon: FaMobile,
      title: "Mobile App Integration Testing",
      description:
        "Testing IoT device control and monitoring through mobile applications.",
      features: [
        "App-Device Communication",
        "Real-time Updates",
        "Push Notifications",
        "Offline Functionality",
      ],
    },
    {
      icon: FaChartLine,
      title: "Performance & Scalability Testing",
      description:
        "Load testing and performance validation for IoT systems at scale.",
      features: [
        "Load Testing",
        "Stress Testing",
        "Scalability Validation",
        "Performance Monitoring",
      ],
    },
    {
      icon: FaDesktop,
      title: "Edge Computing Testing",
      description:
        "Testing IoT applications that process data at the edge for reduced latency.",
      features: [
        "Edge Processing",
        "Latency Testing",
        "Local Decision Making",
        "Edge-Cloud Sync",
      ],
    },
    {
      icon: FaLock,
      title: "Firmware Testing",
      description:
        "Comprehensive testing of IoT device firmware including updates and rollbacks.",
      features: [
        "Firmware Validation",
        "OTA Updates",
        "Rollback Testing",
        "Version Management",
      ],
    },
    {
      icon: FaWifi,
      title: "Network Protocol Testing",
      description:
        "Testing various IoT communication protocols and network configurations.",
      features: [
        "WiFi, Bluetooth, Zigbee",
        "LoRaWAN, NB-IoT",
        "Protocol Switching",
        "Network Optimization",
      ],
    },
    {
      icon: FaCheckCircle,
      title: "Compliance & Standards Testing",
      description:
        "Ensuring IoT devices meet industry standards and regulatory requirements.",
      features: [
        "FCC Compliance",
        "CE Marking",
        "Industry Standards",
        "Regional Regulations",
      ],
    },
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-white bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaWifi className="w-4 h-4" />
            <span className="text-sm">IoT Testing Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive IoT
            <span className="block text-brand-blue">Testing Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Specialized testing services designed for IoT applications, ensuring
            reliable connectivity, robust security, and seamless integration
            across your entire IoT ecosystem.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-[theme(color.brand.blue)] hover:border-opacity-30"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[theme(color.brand.blue)] to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[theme(color.brand.blue)] rounded-full"></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* IoT Ecosystem Coverage */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete IoT Ecosystem Coverage
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We test your IoT solutions across the entire ecosystem—from edge
              devices to cloud platforms—ensuring seamless integration,
              cross-device compatibility, and optimized IoT performance through
              our end-to-end IoT testing services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaCog className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Edge Devices
              </h4>
              <p className="text-gray-600 text-sm">
                Sensors, actuators, smart devices, and embedded systems
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaNetworkWired className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Connectivity
              </h4>
              <p className="text-gray-600 text-sm">
                WiFi, Bluetooth, Zigbee, LoRaWAN, cellular networks
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaDesktop className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Edge Computing
              </h4>
              <p className="text-gray-600 text-sm">
                Local processing, real-time analytics, edge gateways
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaCloud className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Cloud Platforms
              </h4>
              <p className="text-gray-600 text-sm">
                AWS IoT, Azure IoT, Google Cloud IoT, custom platforms
              </p>
            </div>
          </div>
        </div>

        {/* IoT Testing Expertise */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-cyan-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">IoT Industry Expertise</h3>
            <div className="space-y-12">
              <div className="flex items-start gap-3">
                <FaShieldAlt className="w-8 h-8 text-blue-200 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-xl mb-1">
                    Security-First Approach
                  </h4>
                  <p className="text-blue-100 text-lg">
                    Comprehensive security testing to protect against
                    IoT-specific threats and vulnerabilities.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaChartLine className="w-8 h-8 text-blue-200 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-xl mb-1">
                    Scalability Experts
                  </h4>
                  <p className="text-blue-100 text-lg">
                    Testing IoT systems that scale from hundreds to millions of
                    connected devices.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaSync className="w-8 h-8 text-blue-200 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-xl mb-1">
                    Real-World Testing
                  </h4>
                  <p className="text-blue-100 text-lg">
                    Testing in actual deployment conditions with real network
                    constraints and environmental factors.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              IoT Testing Metrics
            </h3>
            <div className="space-y-6">
              <div className="text-center p-4 bg-green-50 rounded-2xl">
                <div className="text-3xl font-bold text-green-600 mb-1">
                  99.8%
                </div>
                <div className="text-sm text-gray-600">
                  Device uptime achieved
                </div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-2xl">
                <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-1">
                  30+
                </div>
                <div className="text-sm text-gray-600">IoT devices tested</div>
              </div>
              <div className="text-center p-4 bg-cyan-50 rounded-2xl">
                <div className="text-3xl font-bold text-cyan-600 mb-1">90%</div>
                <div className="text-sm text-gray-600">
                  Security issue reduction
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-cyan-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Secure Your IoT Ecosystem?
            </h3>
            <p className="mb-8 text-lg">
              Our IoT testing experts are ready to help you build reliable,
              secure, and scalable IoT solutions that perform flawlessly in
              real-world conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 text-[theme(color.brand.blue)] justify-center">
              <Link href="/contact-us">
                <button className="bg-white cursor-pointer px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 hover:scale-98 hover:text-sky-700 transition-all">
                  Get IoT Testing Quote
                </button>
              </Link>
              <Link href="/contact-us">
                <button className="bg-white cursor-pointer bg-opacity-20 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-opacity-30 hover:scale-98 hover:text-sky-700 transition-all border border-white border-opacity-30">
                  Schedule IoT Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IoTTestingServicesSection;
