"use client";

import React from "react";
import { FaRocket, FaBolt, FaShieldAlt, FaMobile, FaDesktop, FaCloud } from "react-icons/fa";

const LaunchFastComprehensiveSection: React.FC = () => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            <span className="text-brand-blue">Comprehensive</span> LaunchFast QA Services
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our expert team provides rapid, end-to-end QA solutions designed for fast-moving development teams. 
            From MVP validation to production-ready launches - we ensure your product meets quality standards 
            without compromising speed to market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Rapid Functional Testing */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaBolt className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Rapid Functional Testing</h3>
            <p className="text-gray-600 leading-relaxed">
              Lightning-fast functional validation including core feature testing, user flow validation, 
              and critical path verification designed for agile development cycles.
            </p>
          </div>

          {/* Performance Optimization */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaRocket className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Performance Optimization</h3>
            <p className="text-gray-600 leading-relaxed">
              Speed and scalability testing including load testing, stress testing, and performance 
              bottleneck identification to ensure optimal user experience at launch.
            </p>
          </div>

          {/* Security Validation */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaShieldAlt className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Security Validation</h3>
            <p className="text-gray-600 leading-relaxed">
              Essential security testing including vulnerability assessment, authentication testing, 
              and data protection validation to ensure secure product launches.
            </p>
          </div>

          {/* Mobile App Testing */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaMobile className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Mobile App Testing</h3>
            <p className="text-gray-600 leading-relaxed">
              Comprehensive mobile testing including device compatibility, OS version testing, 
              and app store optimization to ensure successful mobile launches.
            </p>
          </div>

          {/* Web Application Testing */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-teal-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaDesktop className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Web Application Testing</h3>
            <p className="text-gray-600 leading-relaxed">
              Cross-browser compatibility, responsive design validation, and web performance 
              testing to ensure flawless web application launches across all platforms.
            </p>
          </div>

          {/* API & Integration Testing */}
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaCloud className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">API & Integration Testing</h3>
            <p className="text-gray-600 leading-relaxed">
              Rapid API validation, third-party integration testing, and microservices 
              communication verification to ensure seamless system integration at launch.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default LaunchFastComprehensiveSection;

