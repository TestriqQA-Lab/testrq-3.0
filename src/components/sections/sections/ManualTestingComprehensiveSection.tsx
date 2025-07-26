"use client";

import React from "react";
import { FaUser, FaEye, FaCheckCircle, FaBug, FaClipboardCheck, FaHandPaper } from "react-icons/fa";

const ManualTestingComprehensiveSection: React.FC = () => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            <span className="text-brand-blue">Comprehensive</span> Manual Testing Services
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our expert manual testing team combines human intuition with systematic testing methodologies 
            to uncover critical usability issues, edge cases, and user experience problems that automated 
            testing cannot detect. We ensure your software delivers exceptional quality through 
            comprehensive functional, usability, and exploratory testing approaches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Functional Testing */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaCheckCircle className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Functional Testing</h3>
            <p className="text-gray-600 leading-relaxed">
              Comprehensive validation of application functionality against business requirements, 
              ensuring all features work as intended across different scenarios and user interactions.
            </p>
          </div>

          {/* Usability Testing */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaEye className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Usability Testing</h3>
            <p className="text-gray-600 leading-relaxed">
              Human-centered testing to evaluate user interface design, navigation flow, and overall 
              user experience to ensure intuitive and accessible software interactions.
            </p>
          </div>

          {/* Exploratory Testing */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaBug className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Exploratory Testing</h3>
            <p className="text-gray-600 leading-relaxed">
              Unscripted testing approach to discover unexpected issues, edge cases, and potential 
              vulnerabilities through creative and systematic exploration of the application.
            </p>
          </div>

          {/* User Acceptance Testing */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaUser className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">User Acceptance Testing</h3>
            <p className="text-gray-600 leading-relaxed">
              End-user validation testing to ensure the software meets business requirements and 
              user expectations before final deployment and production release.
            </p>
          </div>

          {/* Compatibility Testing */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-teal-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaClipboardCheck className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Compatibility Testing</h3>
            <p className="text-gray-600 leading-relaxed">
              Cross-platform and cross-browser testing to ensure consistent functionality and 
              appearance across different devices, operating systems, and browser environments.
            </p>
          </div>

          {/* Accessibility Testing */}
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaHandPaper className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Accessibility Testing</h3>
            <p className="text-gray-600 leading-relaxed">
              Comprehensive accessibility evaluation to ensure compliance with WCAG guidelines 
              and provide inclusive user experiences for users with disabilities.
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

export default ManualTestingComprehensiveSection;

