"use client";

import React from "react";
import { FaBug, FaClock, FaDollarSign, FaCheckCircle, FaChartLine } from "react-icons/fa";

const RegressionTestingROISection: React.FC = () => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaChartLine />
            <span className="text-sm">
              Return on Investment
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Realizing the <span className="text-brand-blue">ROI of Regression</span> Testing
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Regression testing is a critical investment that ensures software stability and quality with every release. By preventing defects and reducing risks, it delivers significant returns and maintains user satisfaction.

          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Enhanced Software Quality */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaCheckCircle className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Enhanced Software Quality</h3>
            <p className="text-gray-600 leading-relaxed">
              Ensure that new changes do not introduce defects or break existing functionalities, leading to a more stable product.
            </p>
            <div className="mt-4 text-brand-blue font-bold text-lg">99.8% Stability Rate</div>
          </div>

          {/* Reduced Production Defects */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaBug className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Reduced Production Defects</h3>
            <p className="text-gray-600 leading-relaxed">
              Catch defects early in the development cycle, significantly reducing the cost and effort of fixing them in production.
            </p>
            <div className="mt-4 text-green-600 font-bold text-lg">Up to 70% Fewer Defects</div>
          </div>

          {/* Faster Release Cycles */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaClock className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Faster & Confident Release Cycles</h3>
            <p className="text-gray-600 leading-relaxed">
              Automated and optimized regression testing enables quicker validation, leading to faster and more confident software releases.
            </p>
            <div className="mt-4 text-purple-600 font-bold text-lg">30% Faster Releases</div>
          </div>

          {/* Cost Savings */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaDollarSign className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Significant Cost Savings</h3>
            <p className="text-gray-600 leading-relaxed">
              Minimize the costs associated with post-release defects, rework, and emergency fixes.
            </p>
            <div className="mt-4 text-orange-600 font-bold text-lg">Up to 40% Cost Reduction</div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
            Assess Your Regression Needs
          </button>
        </div>
      </div>
    </section>
  );
};

export default RegressionTestingROISection;

