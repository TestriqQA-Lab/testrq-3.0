"use client";

import React from "react";
import { FaRocket, FaDollarSign, FaClock, FaChartLine } from "react-icons/fa";

const LaunchFastROISection: React.FC = () => {
  const roiMetrics = [
    {
      icon: <FaRocket className="text-3xl" />,
      title: "Faster Time-to-Market",
      value: "60%",
      description: "Reduction in launch timeline",
      details: "Accelerate your product launch with rapid testing cycles and agile methodologies"
    },
    {
      icon: <FaDollarSign className="text-3xl" />,
      title: "Cost Optimization",
      value: "45%",
      description: "Reduction in testing costs",
      details: "Optimize testing expenses through efficient processes and automation"
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: "Development Efficiency",
      value: "70%",
      description: "Faster feedback cycles",
      details: "Rapid feedback enables faster iterations and improved development velocity"
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Quality Improvement",
      value: "85%",
      description: "Reduction in post-launch issues",
      details: "Comprehensive testing reduces production bugs and improves user satisfaction"
    }
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            LaunchFast QA <span className="text-brand-blue">ROI & Business Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover the measurable ROI and business value our LaunchFast QA services bring to startups and agile development teams through rapid testing sprints across diverse industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {roiMetrics.map((metric, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
              <div className="bg-brand-blue w-20 h-20 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                {metric.icon}
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{metric.value}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{metric.title}</h3>
              <p className="text-blue-600 font-medium mb-4">{metric.description}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{metric.details}</p>
            </div>
          ))}
        </div>

        {/* ROI Calculator Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              LaunchFast QA Investment Calculator
            </h3>
            <p className="text-gray-600">
              See how much you can save and accelerate your launch with our LaunchFast QA services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before LaunchFast QA */}
            <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200">
              <h4 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
                <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
                Traditional Testing Approach
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between flex-col md:flex-row">
                  <span className="text-gray-700">Testing Duration:</span>
                  <span className="font-semibold text-red-600">4-6 weeks</span>
                </div>
                <div className="flex justify-between flex-col md:flex-row">
                  <span className="text-gray-700">Testing Cost:</span>
                  <span className="font-semibold text-red-600">$25,000</span>
                </div>
                <div className="flex justify-between flex-col md:flex-row">
                  <span className="text-gray-700">Launch Delay:</span>
                  <span className="font-semibold text-red-600">2-3 months</span>
                </div>
                <div className="flex justify-between flex-col md:flex-row">
                  <span className="text-gray-700">Post-Launch Issues:</span>
                  <span className="font-semibold text-red-600">15-20 bugs</span>
                </div>
                <div className="flex justify-between flex-col md:flex-row">
                  <span className="text-gray-700">Market Opportunity:</span>
                  <span className="font-semibold text-red-600">Lost revenue</span>
                </div>
              </div>
            </div>

            {/* With LaunchFast QA */}
            <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
              <h4 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                With LaunchFast QA
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between flex-col md:flex-row">
                  <span className="text-gray-700">Testing Duration:</span>
                  <span className="font-semibold text-green-600">1-2 weeks</span>
                </div>
                <div className="flex justify-between flex-col md:flex-row">
                  <span className="text-gray-700">Testing Cost:</span>
                  <span className="font-semibold text-green-600">$14,000</span>
                </div>
                <div className="flex justify-between flex-col md:flex-row">
                  <span className="text-gray-700">Launch Acceleration:</span>
                  <span className="font-semibold text-green-600">60% faster</span>
                </div>
                <div className="flex justify-between flex-col md:flex-row">
                  <span className="text-gray-700">Post-Launch Issues:</span>
                  <span className="font-semibold text-green-600">2-3 bugs</span>
                </div>
                <div className="flex justify-between flex-col md:flex-row">
                  <span className="text-gray-700">Market Advantage:</span>
                  <span className="font-semibold text-green-600">First-mover benefit</span>
                </div>
              </div>
            </div>
          </div>

          {/* Savings Summary */}
          <div className="mt-8 bg-brand-blue p-6 rounded-xl text-white text-center">
            <h4 className="text-xl font-bold mb-4">Total Savings & Benefits</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-2xl font-bold">$11,000</div>
                <div className="text-blue-100">Cost Savings</div>
              </div>
              <div>
                <div className="text-2xl font-bold">6-8 weeks</div>
                <div className="text-blue-100">Time Saved</div>
              </div>
              <div>
                <div className="text-2xl font-bold">85%</div>
                <div className="text-blue-100">Fewer Issues</div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories Preview */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Real ROI Results from Our Clients
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">$2.5M</div>
              <div className="text-sm text-gray-600 mb-2">Revenue Generated</div>
              <div className="text-xs text-gray-500">FinTech Startup - 3 months post-launch</div>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">75%</div>
              <div className="text-sm text-gray-600 mb-2">Faster Launch</div>
              <div className="text-xs text-gray-500">E-commerce Platform - MVP to market</div>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">90%</div>
              <div className="text-sm text-gray-600 mb-2">Bug Reduction</div>
              <div className="text-xs text-gray-500">SaaS Application - Production quality</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Ready to Maximize Your ROI?
          </h3>
          <p className="text-gray-600 mb-6">
            Calculate your potential savings and see how LaunchFast QA can accelerate your success.
          </p>
          <button className="bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
            Calculate Your ROI
          </button>
        </div>
      </div>
    </section>
  );
};

export default LaunchFastROISection;

