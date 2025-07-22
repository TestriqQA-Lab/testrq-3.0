"use client";

import React from "react";
import { FaSearch, FaLightbulb, FaUsers, FaRoute, FaBug, FaEye } from "react-icons/fa";

const ExploratoryComprehensiveSection: React.FC = () => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Exploratory Testing Services
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our expert team provides systematic exploratory testing that combines human intuition with structured 
            investigation techniques. We uncover critical issues, usability problems, and edge cases that 
            automated testing and scripted approaches often miss.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Session-Based Testing */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaSearch className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Session-Based Testing</h3>
            <p className="text-gray-600 leading-relaxed">
              Structured exploration sessions with defined charters, time-boxed investigations, 
              and systematic documentation to ensure comprehensive coverage and reproducible results.
            </p>
          </div>

          {/* User Journey Exploration */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaRoute className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">User Journey Exploration</h3>
            <p className="text-gray-600 leading-relaxed">
              Deep exploration of user workflows and scenarios including happy paths, alternative flows, 
              and edge cases to ensure seamless user experiences across all touchpoints.
            </p>
          </div>

          {/* Usability Investigation */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaEye className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Usability Investigation</h3>
            <p className="text-gray-600 leading-relaxed">
              Comprehensive usability assessment including interface design evaluation, 
              accessibility testing, and user experience optimization recommendations.
            </p>
          </div>

          {/* Bug Discovery */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaBug className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Bug Discovery</h3>
            <p className="text-gray-600 leading-relaxed">
              Systematic bug hunting using heuristic evaluation, boundary testing, 
              and creative test scenarios to uncover hidden defects and edge case failures.
            </p>
          </div>

          {/* Persona-Based Testing */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-teal-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaUsers className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Persona-Based Testing</h3>
            <p className="text-gray-600 leading-relaxed">
              Role-based exploration using different user personas to validate functionality 
              from various user perspectives and identify persona-specific issues.
            </p>
          </div>

          {/* Heuristic Evaluation */}
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaLightbulb className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Heuristic Evaluation</h3>
            <p className="text-gray-600 leading-relaxed">
              Expert evaluation using established usability heuristics and testing principles 
              to identify design flaws, interaction problems, and improvement opportunities.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExploratoryComprehensiveSection;

