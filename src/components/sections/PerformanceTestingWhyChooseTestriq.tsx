"use client";

import Link from "next/link";
import React from "react";
import { FaTachometerAlt, FaCheckCircle, FaAward, FaCogs, FaChartLine, FaUsers, FaClock } from "react-icons/fa";

const PerformanceTestingWhyChooseTestriq: React.FC = () => {
  const advantages = [
    {
      icon: <FaTachometerAlt className="text-3xl" />,
      title: "ISO/IEC/IEEE 29119 Alignment",
      description: "We utilize Part 2 for test processes and Part 3 for standardized documentation. This ensures testing is risk-based, documented, and follows repeatable processes.",
      stats: "ISO Aligned",
      color: "blue"
    },
    {
      icon: <FaAward className="text-3xl" />,
      title: "GDPR & Data Privacy",
      description: "We mask or scrub all performance test data to protect PII. This ensures total security during global load generation across USA, UK, EU, and Asia.",
      stats: "PII Masked",
      color: "purple"
    },
    {
      icon: <FaCheckCircle className="text-3xl" />,
      title: "SOC2 & ISO 27001",
      description: "Our testing laboratories follow strict security protocols to protect your intellectual property and source code throughout the performance engineering lifecycle.",
      stats: "Secure Lab",
      color: "green"
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
              Global Standards & Compliance
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Global Standards & <span className="text-brand-blue">Compliance</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            For companies operating in regulated markets, compliance is non-negotiable. Our performance engineering services are designed to meet the world’s strictest data and process standards.
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
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Performance Testing Success Metrics</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Proven track record of delivering exceptional performance testing results that optimize application speed, scalability, and reliability.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">600+</div>
              <div className="text-gray-600 font-medium">Applications Optimized</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-gray-600 font-medium">Performance Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">10,000+</div>
              <div className="text-gray-600 font-medium">Performance Tests</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">99.9%</div>
              <div className="text-gray-600 font-medium">Uptime Achieved</div>
            </div>
          </div>
        </div>

        {/* Methodology & Approach */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Advanced Performance Testing Methodology</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our performance testing approach combines comprehensive load simulation, real-time monitoring,
              and detailed analysis to ensure maximum application performance and scalability under all conditions.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-gray-700">Load & Stress Testing Analysis</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-gray-700">Scalability & Volume Testing</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-gray-700">Endurance & Spike Testing</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-gray-700">Real-time Performance Monitoring</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-gray-700">Bottleneck Identification & Resolution</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-gray-700">Performance Optimization Recommendations</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
            <h4 className="text-xl font-bold text-gray-900 mb-6">Performance Testing Excellence</h4>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Comprehensive Load Simulation</h5>
                  <p className="text-sm text-gray-600">Realistic user load simulation covering all critical performance scenarios</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Advanced Analytics</h5>
                  <p className="text-sm text-gray-600">Deep performance insights with actionable optimization recommendations</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Continuous Optimization</h5>
                  <p className="text-sm text-gray-600">Ongoing performance monitoring and optimization for sustained excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceTestingWhyChooseTestriq;

