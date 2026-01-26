"use client";

import Link from "next/link";
import React from "react";
import {
  FaBug,
  FaClock,
  FaCheckCircle,
  FaChartLine,
  FaDollarSign,
} from "react-icons/fa";

const RegressionTestingROISection: React.FC = () => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaChartLine />
            <span className="text-sm">2026 Regression Landscapes</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The 2026 <span className="text-brand-blue">Regression Challenge</span>: Why Smart Strategy Matters
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Regression testing is a critical investment that ensures <Link href='blog/post/endurance-testing-validating-long-term-application-stability'>software
              stability</Link> and quality with every release. By <Link href='blog/post/why-discovery-analysis-matters-in-testing'>preventing defects and
                reducing risks</Link>, it delivers significant returns and maintains user
            satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">
          {/* Release Pressure */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <FaClock className="text-xl text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Release Pressure</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We solve the &quot;time vs. coverage&quot; trade-off by optimizing suites for tight sprints.
            </p>
          </div>

          {/* Bloated Suites */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-green-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <FaChartLine className="text-xl text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Bloated Suites</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We prevent &quot;noisy&quot; results by pruning and organizing evolving test suites.
            </p>
          </div>

          {/* Flaky Tests */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <FaBug className="text-xl text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Flaky Tests</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We eliminate false positives that undermine trust in your automation.
            </p>
          </div>

          {/* Skill Gaps */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-orange-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <FaCheckCircle className="text-xl text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Skill Gaps</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Elite engineering talent in Selenium, Playwright, and Cypress.
            </p>
          </div>

          {/* Risk-Based Scope */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-teal-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <FaDollarSign className="text-xl text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Risk-Based Scope</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We test what matters, using ISO 29119 standards for smarter selection.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/contact-us">
            <button className="bg-brand-blue cursor-pointer text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              Assess Your Regression Needs
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RegressionTestingROISection;
