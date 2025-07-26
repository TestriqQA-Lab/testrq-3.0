"use client";

import React from "react";
import { FaSyncAlt, FaBug, FaCheckCircle, FaCodeBranch, FaChartLine, FaCloud } from "react-icons/fa";

const RegressionTestingComprehensiveSection: React.FC = () => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            <span className="text-brand-blue">Comprehensive</span> Regression Testing Services
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our regression testing services ensure that new features, bug fixes, or configuration changes do not 
            adversely affect existing functionalities. We provide robust and efficient regression testing to 
            maintain the stability and quality of your software with every release.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Automated Regression Testing */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaSyncAlt className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Automated Regression Testing</h3>
            <p className="text-gray-600 leading-relaxed">
              Leveraging automation frameworks to execute regression test suites rapidly and repeatedly, ensuring consistent quality.
            </p>
          </div>

          {/* Manual Regression Testing */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaBug className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Manual Regression Testing</h3>
            <p className="text-gray-600 leading-relaxed">
              Strategic manual execution of critical test cases to identify subtle defects that automated scripts might miss.
            </p>
          </div>

          {/* Continuous Regression */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaCheckCircle className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Continuous Regression</h3>
            <p className="text-gray-600 leading-relaxed">
              Integrating regression tests into CI/CD pipelines for continuous validation with every code commit.
            </p>
          </div>

          {/* Impact Analysis */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaCodeBranch className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Impact Analysis</h3>
            <p className="text-gray-600 leading-relaxed">
              Identifying the scope of regression testing by analyzing the impact of new changes on existing functionalities.
            </p>
          </div>

          {/* Risk-Based Regression */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-teal-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaChartLine className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Risk-Based Regression</h3>
            <p className="text-gray-600 leading-relaxed">
              Prioritizing regression tests based on the criticality and risk associated with different modules.
            </p>
          </div>

          {/* Cross-Platform Regression */}
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaCloud className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Cross-Platform Regression</h3>
            <p className="text-gray-600 leading-relaxed">
              Ensuring consistent application behavior across various operating systems, browsers, and devices.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
            Explore All Regression Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default RegressionTestingComprehensiveSection;

