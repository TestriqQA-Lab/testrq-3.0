"use client";

import React from "react";
import { FaDollarSign, FaClock, FaShieldAlt, FaChartLine } from "react-icons/fa";

const ETLROISection: React.FC = () => {
  const roiMetrics = [
    {
      icon: <FaDollarSign className="w-8 h-8" />,
      colour: "text-green-500",
      percentage: "45%",
      title: "Cost Reduction",
      description: "Average cost savings through automated ETL testing and early defect detection in data pipelines"
    },
    {
      icon: <FaClock className="w-8 h-8" />,
      colour: "text-blue-500",
      percentage: "65%",
      title: "Faster Deployment",
      description: "Reduced time-to-deployment with automated ETL testing processes and continuous validation"
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      colour: "text-red-500",
      percentage: "99.8%",
      title: "Data Accuracy",
      description: "Critical data quality issues prevented from reaching production environments"
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      colour: "text-purple-500",
      percentage: "320%",
      title: "ROI Increase",
      description: "Average return on investment within the first year of ETL testing implementation"
    }
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-brand-blue">Measurable ROI</span> from ETL Testing
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive ETL testing services deliver quantifiable business value through improved 
            data quality, reduced costs, and faster deployment cycles for your data integration projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {roiMetrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className={`mb-4 ${metric.colour}`}>
                {metric.icon}
              </div>
              <div className={`text-4xl md:text-5xl font-bold ${metric.colour} mb-2`}>
                {metric.percentage}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {metric.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* ROI Calculator CTA */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Calculate Your ETL Testing ROI
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Discover how much you can save and gain with our comprehensive ETL testing services. 
            Get a personalized ROI analysis for your data integration project.
          </p>
          <button className="bg-brand-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-blue transition-colors duration-300 shadow-lg">
            Get ROI Analysis
          </button>
        </div>
      </div>
    </section>
  );
};

export default ETLROISection;

