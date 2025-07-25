"use client";

import React from "react";
import { FaChartLine, FaClock, FaDollarSign, FaCheckCircle } from "react-icons/fa";

const AutomationTestingROISection: React.FC = () => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Realizing the <span className="text-brand-blue">ROI of Automation</span> Testing
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Automation testing is an investment that yields significant returns by accelerating development cycles, 
            improving software quality, and reducing long-term operational costs. See how Testriq helps you maximize your ROI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Faster Time-to-Market */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaClock className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Faster Time-to-Market</h3>
            <p className="text-gray-600 leading-relaxed">
              Automated tests run quickly and frequently, enabling faster feedback loops and accelerating product releases.
            </p>
            <div className="mt-4 text-brand-blue font-bold text-lg">Up to 80% Faster Releases</div>
          </div>

          {/* Cost Reduction */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaDollarSign className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Significant Cost Reduction</h3>
            <p className="text-gray-600 leading-relaxed">
              Reduce manual effort, minimize defect leakage to production, and lower overall testing expenditures.
            </p>
            <div className="mt-4 text-green-600 font-bold text-lg">30% - 50% Cost Savings</div>
          </div>

          {/* Improved Quality */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaCheckCircle className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Enhanced Software Quality</h3>
            <p className="text-gray-600 leading-relaxed">
              Achieve higher test coverage, detect defects earlier in the cycle, and ensure a more stable and reliable product.
            </p>
            <div className="mt-4 text-purple-600 font-bold text-lg">99% Defect Detection</div>
          </div>

          {/* Optimized Resource Utilization */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaChartLine className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Optimized Resource Utilization</h3>
            <p className="text-gray-600 leading-relaxed">
              Free up manual testers to focus on complex exploratory testing and new feature development.
            </p>
            <div className="mt-4 text-orange-600 font-bold text-lg">Boost Team Productivity by 2x</div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
            Calculate Your Automation ROI
          </button>
        </div>
      </div>
    </section>
  );
};

export default AutomationTestingROISection;

