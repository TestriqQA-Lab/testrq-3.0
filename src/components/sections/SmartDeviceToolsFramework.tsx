"use client";

import React from "react";
import { FaMobile, FaWifi, FaShieldAlt, FaChartLine, FaTools } from "react-icons/fa";

const SmartDeviceToolsFramework: React.FC = () => {
  const toolCategories = [
    {
      title: "Testing Tools",
      icon: <FaMobile className="w-6 h-6 text-green-500" />,
      tools: [
        {
          name: "Appium",
          description: "Mobile application automation testing framework"
        },
        {
          name: "Espresso",
          description: "Android UI testing framework"
        },
        {
          name: "XCUITest",
          description: "iOS application testing framework"
        },
        {
          name: "TestComplete",
          description: "Comprehensive smart device testing platform"
        }
      ]
    },
    {
      title: "Connectivity Tools",
      icon: <FaWifi className="w-6 h-6 text-blue-500" />,
      tools: [
        {
          name: "Wireshark",
          description: "Network protocol analyzer for connectivity testing"
        },
        {
          name: "iperf3",
          description: "Network bandwidth measurement tool"
        },
        {
          name: "BlueZ",
          description: "Bluetooth protocol stack testing"
        },
        {
          name: "WiFi Analyzer",
          description: "WiFi network analysis and testing tool"
        }
      ]
    },
    {
      title: "Security Tools",
      icon: <FaShieldAlt className="w-6 h-6 text-red-500" />,
      tools: [
        {
          name: "OWASP ZAP",
          description: "Security vulnerability testing tool"
        },
        {
          name: "Burp Suite",
          description: "Web application security testing platform"
        },
        {
          name: "Nmap",
          description: "Network discovery and security auditing"
        },
        {
          name: "Metasploit",
          description: "Penetration testing framework"
        }
      ]
    },
    {
      title: "Performance Tools",
      icon: <FaChartLine className="w-6 h-6 text-purple-500" />,
      tools: [
        {
          name: "JMeter",
          description: "Performance and load testing tool"
        },
        {
          name: "Gatling",
          description: "High-performance load testing framework"
        },
        {
          name: "Battery Historian",
          description: "Android battery usage analysis tool"
        },
        {
          name: "Instruments",
          description: "iOS performance analysis and profiling"
        }
      ]
    }
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaTools />
            <span className="text-sm">
              Tools & Frameworks
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Smart Device Testing <span className="text-brand-blue">Tools & Frameworks</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge tools and frameworks specifically designed for smart device testing to ensure 
            comprehensive validation of your connected devices across all connectivity, security, and performance metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {toolCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-white rounded-xl shadow-md mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.tools.map((tool, toolIndex) => (
                  <div key={toolIndex} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h4 className="font-semibold text-gray-900 mb-2">{tool.name}</h4>
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
            <h3 className="text-2xl font-bold text-gray-900">Custom Tool Integration</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We can integrate with your existing smart device tools and frameworks, or recommend the best combination 
              for your specific smart device testing requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartDeviceToolsFramework;

