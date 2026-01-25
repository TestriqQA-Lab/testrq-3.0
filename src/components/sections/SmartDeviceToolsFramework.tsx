"use client";

import React from "react";
import {
  FaMobile,
  FaWifi,
  FaShieldAlt,
  FaChartLine,
  FaTools,
  FaBug,
  FaBatteryHalf,
  FaSearch,
  FaNetworkWired,
  FaCog,
  FaCloud,
} from "react-icons/fa";

import {
  SiAppium,
  SiAndroid,
  SiApple,
  SiApachejmeter,
  SiGatling,
  SiOwasp,
  SiBurpsuite,
} from "react-icons/si";

import { MdInsights } from "react-icons/md";
import Link from "next/link";

const SmartDeviceToolsFramework: React.FC = () => {
  const toolCategories = [
    {
      title: "Network & Protocols",
      icon: <FaWifi className="w-6 h-6 text-blue-500" />,
      tools: [
        {
          name: "Wireshark",
          description: "Network protocol analyzer and M2M validator",
          icon: <FaSearch className="w-5 h-5 text-blue-500" />,
        },
        {
          name: "iperf3",
          description: "Network bandwidth and stability testing",
          icon: <FaNetworkWired className="w-5 h-5 text-blue-500" />,
        },
        {
          name: "MQTT Spy / CoAP",
          description: "IoT messaging protocol profiling",
          icon: <FaWifi className="w-5 h-5 text-blue-500" />,
        },
        {
          name: "Zigbee Sniffers",
          description: "Low-power mesh network analysis",
          icon: <FaWifi className="w-5 h-5 text-blue-500" />,
        },
      ],
    },
    {
      title: "Security & Hardening",
      icon: <FaShieldAlt className="w-6 h-6 text-red-500" />,
      tools: [
        {
          name: "OWASP ZAP",
          description: "Application security vulnerability testing",
          icon: <SiOwasp className="w-5 h-5 text-red-500" />,
        },
        {
          name: "Burp Suite",
          description: "Web and API penetration testing platform",
          icon: <SiBurpsuite className="w-5 h-5 text-red-500" />,
        },
        {
          name: "Nmap / Metasploit",
          description: "Network discovery and exploit auditing",
          icon: <FaNetworkWired className="w-5 h-5 text-red-500" />,
        },
        {
          name: "Firmware Hardening",
          description: "Validation of low-level software security",
          icon: <FaShieldAlt className="w-5 h-5 text-red-500" />,
        },
      ],
    },
    {
      title: "Performance & Load",
      icon: <FaChartLine className="w-6 h-6 text-purple-500" />,
      tools: [
        {
          name: "Apache JMeter",
          description: "High-tier device performance and load testing",
          icon: <SiApachejmeter className="w-5 h-5 text-purple-500" />,
        },
        {
          name: "Gatling",
          description: "High-density connection and load framework",
          icon: <SiGatling className="w-5 h-5 text-purple-500" />,
        },
        {
          name: "k6",
          description: "Modern load testing for edge systems",
          icon: <FaChartLine className="w-5 h-5 text-purple-500" />,
        },
        {
          name: "Edge Performance",
          description: "Data stability at maximum concurrent load",
          icon: <FaChartLine className="w-5 h-5 text-purple-500" />,
        },
      ],
    },
    {
      title: "Power & Diagnostics",
      icon: <FaBatteryHalf className="w-6 h-6 text-orange-500" />,
      tools: [
        {
          name: "Battery Historian",
          description: "Deep-dive battery life optimization and profiling",
          icon: <FaBatteryHalf className="w-5 h-5 text-orange-500" />,
        },
        {
          name: "Xcode Instruments",
          description: "iOS performance and power usage telemetry",
          icon: <MdInsights className="w-5 h-5 text-orange-500" />,
        },
        {
          name: "Android Profiler",
          description: "Android system and power diagnostics",
          icon: <SiAndroid className="w-5 h-5 text-orange-500" />,
        },
        {
          name: "Sensors Audit",
          description: "Precision accuracy and calibration tracking",
          icon: <FaTools className="w-5 h-5 text-orange-500" />,
        },
      ],
    },
    {
      title: "Automation & CI/CD",
      icon: <FaMobile className="w-6 h-6 text-green-500" />,
      tools: [
        {
          name: "Appium",
          description: "Automated testing for smart home ecosystems",
          icon: <SiAppium className="w-5 h-5 text-green-500" />,
        },
        {
          name: "Jenkins / GitLab",
          description: "Automated pipeline for device verification",
          icon: <FaCog className="w-5 h-5 text-green-500" />,
        },
        {
          name: "Appium Server",
          description: "Cross-platform device orchestration",
          icon: <FaCog className="w-5 h-5 text-green-500" />,
        },
        {
          name: "CI/CD Integration",
          description: "Faster builds and regression cycles",
          icon: <FaCog className="w-5 h-5 text-green-500" />,
        },
      ],
    },
    {
      title: "Emerging Tech",
      icon: <FaCloud className="w-6 h-6 text-indigo-500" />,
      tools: [
        {
          name: "Digital Twin",
          description: "Simulating massive IoT fleets virtually",
          icon: <FaCloud className="w-5 h-5 text-indigo-500" />,
        },
        {
          name: "Fleet Simulation",
          description: "One million concurrent device modeling",
          icon: <FaCloud className="w-5 h-5 text-indigo-500" />,
        },
        {
          name: "Cloud Backend QA",
          description: "High-density deployment stress tests",
          icon: <FaCloud className="w-5 h-5 text-indigo-500" />,
        },
        {
          name: "5G Edge Simulation",
          description: "Validation before physical deployment",
          icon: <FaCloud className="w-5 h-5 text-indigo-500" />,
        },
      ],
    },
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaTools />
            <span className="text-sm">Tools & Frameworks</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical <span className="text-brand-blue">Tech Stack</span> (2026 Trends)
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We utilize the most advanced <Link href='/technology-stack' className="text-brand-blue hover:underline">app testing tools</Link> and diagnostic platforms to provide exhaustive <Link href='/smart-device-testing-services' className="text-brand-blue hover:underline">smart device validation</Link>, ensuring performance and security at every layer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {toolCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-white rounded-xl shadow-md mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {tool.icon && <span>{tool.icon}</span>}
                      <h4 className="font-semibold text-gray-900">
                        {tool.name}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600">{tool.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Custom Tool Integration */}
        <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900">
              Custom Tool Integration
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We can integrate with your existing smart device tools and
              frameworks, or recommend the best combination for your specific
              smart device testing requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartDeviceToolsFramework;
