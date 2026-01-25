"use client";

import React from "react";
import { FaShieldAlt, FaUsers, FaAward } from "react-icons/fa";

const RegressionTestingWhyChooseTestriq: React.FC = () => {
  const advantages = [
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "ISO 29119 Part 2 & 3",
      description: "We follow the ISO 29119 standard for our testing model. Using Part 2 for processes and Part 3 for documentation ensures your QA is traceable and globally recognized.",
      stats: "Standard Aligned",
      color: "blue"
    },
    {
      icon: <FaAward className="text-3xl" />,
      title: "SOC2 Compliance",
      description: "Our testing environments and data handling procedures meet rigorous security and privacy audits to protect your intellectual property.",
      stats: "SOC2 Audited",
      color: "green"
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "GDPR Data Privacy",
      description: "We use strict data masking and privacy rules for the EU market. This protects all personal data during manual and automated regression runs.",
      stats: "PII Masked",
      color: "purple"
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; iconBg: string } } = {
      blue: { bg: "bg-blue-50", text: "text-blue-600", iconBg: "bg-blue-600" },
      purple: { bg: "bg-purple-50", text: "text-purple-600", iconBg: "bg-purple-600" },
      green: { bg: "bg-green-50", text: "text-green-600", iconBg: "bg-green-600" },
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaAward />
            <span className="text-sm">
              Engineering Trust
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Global Standards & <span className="text-brand-blue">Compliance</span>: Engineering Trust
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            To rank as a leader in outsourced regression testing, we adhere to the highest international benchmarks. Our processes ensure your data remains secure while your software remains stable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => {
            const colors = getColorClasses(advantage.color);
            return (
              <div
                key={index}
                className={`${colors.bg} p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group`}
              >
                <div className={`${colors.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white">{advantage.icon}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{advantage.title}</h3>

                <p className="text-gray-600 leading-relaxed mb-4">
                  {advantage.description}
                </p>

                <div className={`${colors.text} font-bold text-lg`}>
                  {advantage.stats}
                </div>
              </div>
            );
          })}
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Regression Testing Success Metrics</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Proven track record of delivering exceptional regression testing results that maintain software quality and stability.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">800+</div>
              <div className="text-gray-600 font-medium">Applications Tested</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">99.8%</div>
              <div className="text-gray-600 font-medium">Stability Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">15,000+</div>
              <div className="text-gray-600 font-medium">Regression Tests</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-gray-600 font-medium">Defect Detection</div>
            </div>
          </div>
        </div>

        {/* Methodology & Approach */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Advanced Regression Testing Methodology</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our regression testing approach combines intelligent automation, risk-based prioritization, and comprehensive coverage analysis to ensure maximum efficiency and effectiveness in maintaining software quality.

            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-gray-700">Impact Analysis & Risk Assessment</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-gray-700">Automated Test Suite Optimization</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-gray-700">Continuous Integration & Deployment</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-gray-700">Cross-Platform Validation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-gray-700">Real-time Monitoring & Reporting</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-gray-700">Quality Gate Enforcement</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
            <h4 className="text-xl font-bold text-gray-900 mb-6">Regression Testing Excellence</h4>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Comprehensive Coverage</h5>
                  <p className="text-sm text-gray-600">End-to-end regression testing covering all critical functionalities and user workflows</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Intelligent Automation</h5>
                  <p className="text-sm text-gray-600">Smart automation strategies that adapt to application changes and minimize maintenance</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Rapid Feedback</h5>
                  <p className="text-sm text-gray-600">Fast execution and immediate feedback to support agile development practices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegressionTestingWhyChooseTestriq;

