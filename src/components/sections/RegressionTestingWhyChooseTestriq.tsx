"use client";

import React from "react";
import { FaShieldAlt, FaCogs, FaChartLine, FaUsers, FaClock, FaCheckCircle } from "react-icons/fa";

const RegressionTestingWhyChooseTestriq: React.FC = () => {
  const advantages = [
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Comprehensive Quality Assurance",
      description: "Our regression testing ensures that new changes don't break existing functionality, maintaining software stability and user satisfaction across all releases.",
      stats: "99.8% Stability Rate",
      color: "blue"
    },
    {
      icon: <FaCogs className="text-3xl" />,
      title: "Intelligent Test Optimization",
      description: "Advanced impact analysis and risk-based testing approaches optimize regression test suites, reducing execution time while maintaining comprehensive coverage.",
      stats: "60% Faster Execution",
      color: "purple"
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Advanced Analytics & Insights",
      description: "Detailed regression testing analytics provide actionable insights into software quality trends, helping you make informed decisions about releases.",
      stats: "Real-time Dashboards",
      color: "green"
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Expert Testing Team",
      description: "Our certified regression testing specialists bring deep expertise in various domains and technologies, ensuring thorough validation of your software.",
      stats: "40+ Certified Experts",
      color: "orange"
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: "Rapid Feedback Cycles",
      description: "Automated regression testing integrated with CI/CD pipelines provides immediate feedback on code changes, accelerating development cycles.",
      stats: "15-min Feedback",
      color: "teal"
    },
    {
      icon: <FaCheckCircle className="text-3xl" />,
      title: "Proven Methodologies",
      description: "Industry-proven regression testing methodologies and best practices ensure consistent, reliable, and effective testing across all your projects.",
      stats: "500+ Projects",
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; iconBg: string } } = {
      blue: { bg: "bg-blue-50", text: "text-blue-600", iconBg: "bg-blue-600" },
      purple: { bg: "bg-purple-50", text: "text-purple-600", iconBg: "bg-purple-600" },
      green: { bg: "bg-green-50", text: "text-green-600", iconBg: "bg-green-600" },
      orange: { bg: "bg-orange-50", text: "text-orange-600", iconBg: "bg-orange-600" },
      teal: { bg: "bg-teal-50", text: "text-teal-600", iconBg: "bg-teal-600" },
      indigo: { bg: "bg-indigo-50", text: "text-indigo-600", iconBg: "bg-indigo-600" }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-brand-blue">Testriq</span> for Regression Testing?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Testriq delivers comprehensive regression testing solutions that ensure software stability, maintain quality standards, and provide confidence in every release through proven methodologies and expert execution.
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

