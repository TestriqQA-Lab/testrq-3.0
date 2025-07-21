"use client";

import React from "react";
import { FaClipboardList, FaCogs, FaBug, FaCheckCircle, FaRocket, FaShieldAlt } from "react-icons/fa";

const MobileProvenTestingProcess: React.FC = () => {
  const processSteps = [
    {
      step: "01",
      icon: <FaClipboardList className="w-8 h-8" />,
      title: "Requirements Analysis",
      description: "We thoroughly analyze your mobile application requirements, target platforms, devices, and user demographics to create a comprehensive testing strategy.",
      details: [
        "App architecture review",
        "Target device analysis",
        "User persona validation",
        "Platform-specific requirements"
      ]
    },
    {
      step: "02",
      icon: <FaCogs className="w-8 h-8" />,
      title: "Test Planning & Design",
      description: "Our experts design detailed test cases covering all aspects of mobile functionality, user experience, and platform-specific features.",
      details: [
        "Test case development",
        "Device matrix planning",
        "Automation strategy design",
        "Performance benchmarks"
      ]
    },
    {
      step: "03",
      icon: <FaBug className="w-8 h-8" />,
      title: "Test Execution",
      description: "Systematic execution of functional, performance, security, and compatibility tests across real devices and simulators/emulators.",
      details: [
        "Real device testing",
        "Automated test execution",
        "Cross-platform validation",
        "Network condition testing"
      ]
    },
    {
      step: "04",
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Security & Compliance",
      description: "Comprehensive security testing and app store compliance validation to ensure your app meets all platform requirements.",
      details: [
        "Security vulnerability assessment",
        "App store guideline compliance",
        "Data privacy validation",
        "Permission testing"
      ]
    },
    {
      step: "05",
      icon: <FaCheckCircle className="w-8 h-8" />,
      title: "Quality Validation",
      description: "Final validation phase ensuring all requirements are met and the application is ready for app store submission and user deployment.",
      details: [
        "Final acceptance testing",
        "Performance validation",
        "User experience verification",
        "App store readiness check"
      ]
    },
    {
      step: "06",
      icon: <FaRocket className="w-8 h-8" />,
      title: "Launch Support",
      description: "Ongoing support during app store submission and post-launch monitoring to ensure continued quality and performance.",
      details: [
        "App store submission support",
        "Post-launch monitoring",
        "User feedback analysis",
        "Continuous improvement"
      ]
    }
  ];

  return (
    <section className="bg-gray-50 py-10 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        

        {/* Process Steps */}
       

        {/* Testing Tools & Technologies */}

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Mobile Testing Project?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let our proven process ensure your mobile application delivers exceptional 
              quality and performance across all devices and platforms.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 bg-white text-[theme(color.brand.blue)] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Start Your Project
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[theme(color.brand.blue)] transition-colors">
                Download Process Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileProvenTestingProcess;

