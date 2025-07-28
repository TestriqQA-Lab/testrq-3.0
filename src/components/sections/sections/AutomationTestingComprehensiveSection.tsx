"use client";

import React from "react";
import { FaRobot, FaCogs, FaMobileAlt, FaCloud, FaCode, FaChartLine } from "react-icons/fa";

const AutomationTestingComprehensiveSection: React.FC = () => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            <span className="text-brand-blue">Comprehensive</span> Automation Testing Services
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our advanced automation testing services leverage cutting-edge frameworks and tools to accelerate 
            your testing cycles, improve test coverage, and ensure high-quality software delivery. We help 
            you achieve faster releases with greater confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Web Automation Testing */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaRobot className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Web Automation Testing</h3>
            <p className="text-gray-600 leading-relaxed">
              Automated testing for web applications across various browsers and platforms using industry-leading tools like Selenium and Playwright.
            </p>
          </div>

          {/* API Automation Testing */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaCogs className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">API Automation Testing</h3>
            <p className="text-gray-600 leading-relaxed">
              Automated validation of APIs to ensure robust and reliable communication between different software components and services.
            </p>
          </div>

          {/* Mobile Automation Testing */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaMobileAlt className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Mobile Automation Testing</h3>
            <p className="text-gray-600 leading-relaxed">
              Automated testing for native, hybrid, and web mobile applications on various devices and operating systems using Appium and other tools.
            </p>
          </div>

          {/* Cloud-Based Automation */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaCloud className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud-Based Automation</h3>
            <p className="text-gray-600 leading-relaxed">
              Leveraging cloud platforms for scalable and efficient test execution, enabling parallel testing and faster feedback cycles.
            </p>
          </div>

          {/* CI/CD Integration */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-teal-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaCode className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">CI/CD Integration</h3>
            <p className="text-gray-600 leading-relaxed">
              Seamless integration of automated tests into your Continuous Integration/Continuous Delivery pipelines for rapid and reliable deployments.
            </p>
          </div>

          {/* Performance Automation */}
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaChartLine className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Performance Automation</h3>
            <p className="text-gray-600 leading-relaxed">
              Automated performance testing to identify bottlenecks and ensure your applications can handle high user loads and deliver optimal responsiveness.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
            Explore All Automation Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default AutomationTestingComprehensiveSection;

