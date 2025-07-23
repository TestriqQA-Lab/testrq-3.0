"use client";

import React from "react";
import { FaSearch, FaBug, FaClock, FaChartLine } from "react-icons/fa";

const ExploratoryROISection: React.FC = () => {
  const roiMetrics = [
    {
      icon: <FaSearch className="text-3xl" />,
      title: "Issue Discovery Rate",
      value: "95%",
      description: "Higher bug detection rate",
      details: "Uncover critical issues that automated testing and scripted approaches miss"
    },
    {
      icon: <FaBug className="text-3xl" />,
      title: "Critical Bug Prevention",
      value: "80%",
      description: "Reduction in production bugs",
      details: "Prevent costly post-release issues through comprehensive exploration"
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: "Testing Efficiency",
      value: "60%",
      description: "Faster issue identification",
      details: "Rapid discovery of usability and functional issues through expert exploration"
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "User Experience Improvement",
      value: "75%",
      description: "Better user satisfaction",
      details: "Enhanced user experience through systematic usability investigation"
    }
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Exploratory Testing <span className="text-brand-blue">ROI & Business Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover the measurable business value and return on investment that our exploratory testing services 
            deliver through systematic investigation, comprehensive issue discovery, and actionable insights.
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
              <p className="text-green-600 font-medium mb-4">{metric.description}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{metric.details}</p>
            </div>
          ))}
        </div>

        {/* ROI Comparison Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Exploratory Testing Investment Analysis
            </h3>
            <p className="text-gray-600">
              Compare the value and impact of exploratory testing versus traditional testing approaches
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Without Exploratory Testing */}
            <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200">
              <h4 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
                <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
                Traditional Testing Only
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between flex-col md:flex-row">
                  <span className="text-gray-700">Issue Discovery Rate:</span>
                  <span className="font-semibold text-red-600">65%</span>
                </div>
                <div className="flex justify-between flex-col md:flex-row">
                  <span className="text-gray-700">Production Bugs:</span>
                  <span className="font-semibold text-red-600">25-30 issues</span>
                </div>
                <div className="flex justify-between flex-col md:flex-row">
                  <span className="text-gray-700">User Experience Issues:</span>
                  <span className="font-semibold text-red-600">Frequently missed</span>
                </div>
                <div className="flex justify-between flex-col md:flex-row">
                  <span className="text-gray-700">Edge Case Coverage:</span>
                  <span className="font-semibold text-red-600">Limited</span>
                </div>
                <div className="flex justify-between flex-col md:flex-row">
                  <span className="text-gray-700">Post-Release Fixes:</span>
                  <span className="font-semibold text-red-600">High cost</span>
                </div>
              </div>
            </div>

            {/* With Exploratory Testing */}
            <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
              <h4 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                With Exploratory Testing
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between flex-col md:flex-row">
                  <span className="text-gray-700">Issue Discovery Rate:</span>
                  <span className="font-semibold text-green-600">95%</span>
                </div>
                <div className="flex justify-between flex-col md:flex-row">
                  <span className="text-gray-700">Production Bugs:</span>
                  <span className="font-semibold text-green-600">5-8 issues</span>
                </div>
                <div className="flex justify-between flex-col md:flex-row">
                  <span className="text-gray-700">User Experience Issues:</span>
                  <span className="font-semibold text-green-600">Proactively identified</span>
                </div>
                <div className="flex justify-between flex-col md:flex-row">
                  <span className="text-gray-700">Edge Case Coverage:</span>
                  <span className="font-semibold text-green-600">Comprehensive</span>
                </div>
                <div className="flex justify-between flex-col md:flex-row">
                  <span className="text-gray-700">Post-Release Fixes:</span>
                  <span className="font-semibold text-green-600">Minimal cost</span>
                </div>
              </div>
            </div>
          </div>

          {/* Value Summary */}
          <div className="mt-8 bg-brand-blue p-6 rounded-xl text-white text-center">
            <h4 className="text-xl font-bold mb-4">Total Value & Benefits</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-2xl font-bold">80%</div>
                <div className="text-green-100">Fewer Production Bugs</div>
              </div>
              <div>
                <div className="text-2xl font-bold">95%</div>
                <div className="text-green-100">Issue Discovery Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold">75%</div>
                <div className="text-green-100">Better User Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Cost-Benefit Analysis */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Cost-Benefit Analysis
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Investment */}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Investment</h4>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">$8,000</div>
                  <div className="text-sm text-gray-600">Exploratory Testing Services</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-lg font-bold text-gray-900">2-4 weeks</div>
                  <div className="text-sm text-gray-600">Testing Duration</div>
                </div>
              </div>
            </div>

            {/* Returns */}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Returns</h4>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">$35,000</div>
                  <div className="text-sm text-gray-600">Saved in Bug Fixes</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-lg font-bold text-purple-600">4.4x ROI</div>
                  <div className="text-sm text-gray-600">Return on Investment</div>
                </div>
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
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">$150K</div>
              <div className="text-sm text-gray-600 mb-2">Saved in Bug Fixes</div>
              <div className="text-xs text-gray-500">E-commerce Platform - 6 months</div>
            </div>
            
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-sm text-gray-600 mb-2">Issue Discovery</div>
              <div className="text-xs text-gray-500">SaaS Application - Pre-launch</div>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
              <div className="text-sm text-gray-600 mb-2">UX Improvement</div>
              <div className="text-xs text-gray-500">Mobile App - User satisfaction</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Ready to Maximize Your Testing ROI?
          </h3>
          <p className="text-gray-600 mb-6">
            Calculate your potential savings and see how exploratory testing can improve your product quality.
          </p>
          <button className="bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
            Calculate Your ROI
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExploratoryROISection;

