"use client";

import React, { useState } from "react";
import { FaDatabase, FaShieldAlt, FaChartLine, FaClock, FaUsers, FaRocket, FaAward } from "react-icons/fa";

const ETLWhyChooseTestriq: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const advantages = [
    {
      icon: <FaDatabase className="w-8 h-8" />,
      metric: "500+ ETL Pipelines Tested",
      title: "ETL Testing Experts",
      description: "Our team includes certified ETL testing professionals with deep expertise in data integration, pipeline validation, and ensuring data accuracy, quality assurance, and compliance across complex ETL workflows.",
      capabilities: [
        "Data Pipeline Testing",
        "ETL Process Validation",
        "Data Quality Assurance",
        "Performance Optimization"
      ],
      color: "blue"
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      metric: "Zero Data Breaches",
      title: "Data Security Excellence",
      description: "We implement advanced security testing protocols to ensure your ETL processes meet the highest levels of data security, regulatory compliance, and access control validation, safeguarding sensitive information throughout the pipeline.",
      capabilities: [
        "Data Encryption Testing",
        "Access Control Validation",
        "Compliance Verification",
        "Security Auditing"
      ],
      color: "green"
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      metric: "99.8% Data Accuracy",
      title: "Quality Assurance",
      description: "We perform comprehensive data quality testing and validation to ensure your ETL processes deliver accurate, reliable, and business-ready data across all extraction, transformation, and loading stages.",
      capabilities: [
        "Data Accuracy Testing",
        "Quality Metrics",
        "Validation Rules",
        "Error Detection"
      ],
      color: "purple"
    },
    {
      icon: <FaClock className="w-8 h-8" />,
      metric: "60% Performance Boost",
      title: "Performance Optimization",
      description: "We conduct advanced performance testing and optimization to ensure your ETL pipelines run at peak efficiency, support high scalability, and maintain consistent data processing speed under heavy loads.",
      capabilities: [
        "Performance Testing",
        "Bottleneck Analysis",
        "Scalability Testing",
        "Optimization Strategies"
      ],
      color: "orange"
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      metric: "24/7 Support",
      title: "Dedicated Support",
      description: "Get 24/7 support from our dedicated ETL testing specialists, equipped to handle your unique data challenges, pipeline complexities, and business-specific requirements with expert guidance and rapid issue resolution.",
      capabilities: [
        "Expert Consultation",
        "Technical Support",
        "Process Guidance",
        "Training Programs"
      ],
      color: "red"
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      metric: "36hr Turnaround",
      title: "Rapid Testing Cycles",
      description: "Experience fast and efficient ETL testing processes with comprehensive reporting, quick turnaround times, and accelerated data pipeline validation for faster deployment and reduced time-to-production.",
      capabilities: [
        "Rapid Testing",
        "Quick Reports",
        "Fast Validation",
        "Efficient Processes"
      ],
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: "bg-blue-500", text: "text-blue-600", border: "border-blue-500", light: "bg-blue-50" },
      green: { bg: "bg-green-500", text: "text-green-600", border: "border-green-500", light: "bg-green-50" },
      purple: { bg: "bg-purple-500", text: "text-purple-600", border: "border-purple-500", light: "bg-purple-50" },
      orange: { bg: "bg-orange-500", text: "text-orange-600", border: "border-orange-500", light: "bg-orange-50" },
      red: { bg: "bg-red-500", text: "text-red-600", border: "border-red-500", light: "bg-red-50" },
      indigo: { bg: "bg-indigo-500", text: "text-indigo-600", border: "border-indigo-500", light: "bg-indigo-50" }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaAward />
            <span className="text-sm">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-brand-blue">Why Choose Testriq</span> for ETL Testing?
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            We combine ETL expertise with testing excellence to deliver ETL testing services that ensure reliable, accurate, and high-performance data pipelines for your business-critical applications, data integration workflows, and analytics platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const colorClasses = getColorClasses(advantage.color);
            const isHovered = hoveredCard === index;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative bg-white rounded-2xl p-6 border-2 transition-all duration-300 cursor-pointer ${
                  isHovered 
                    ? `${colorClasses.border} shadow-2xl transform -translate-y-2` 
                    : "border-gray-200 shadow-lg hover:shadow-xl"
                }`}
              >
                {/* Background Pattern */}
                <div className={`absolute top-0 right-0 w-20 h-20 ${colorClasses.light} rounded-bl-full opacity-50`}></div>
                
                {/* Icon and Metric */}
                <div className="relative z-10 mb-4">
                  <div className={`w-16 h-16 ${isHovered ? colorClasses.bg : colorClasses.light} rounded-xl flex items-center justify-center mb-3 transition-all duration-300`}>
                    <div className={isHovered ? "text-white" : colorClasses.text}>
                      {advantage.icon}
                    </div>
                  </div>
                  <div className={`text-sm font-bold ${colorClasses.text} mb-2`}>
                    {advantage.metric}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {advantage.description}
                </p>

                {/* Capabilities */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Capabilities:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {advantage.capabilities.map((capability, capIndex) => (
                      <div key={capIndex} className="flex items-center text-xs text-gray-600">
                        <div className={`w-1.5 h-1.5 ${colorClasses.bg} rounded-full mr-2`}></div>
                        {capability}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className={`w-full py-2 px-4 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  isHovered 
                    ? `${colorClasses.bg} text-white shadow-lg` 
                    : `${colorClasses.light} ${colorClasses.text} hover:${colorClasses.bg} hover:text-white`
                }`}>
                  Explore ETL Testing
                </button>

                {/* Hover Effect Indicator */}
                {isHovered && (
                  <div className={`absolute -top-1 -right-1 w-6 h-6 ${colorClasses.bg} rounded-full flex items-center justify-center`}>
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              ETL Testing Excellence Network
            </h3>
            <p className="text-gray-600">
              Data pipelines and technologies we&apos;ve successfully validated
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">ETL Pipelines</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">99.8%</div>
              <div className="text-gray-600">Data Accuracy</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">60%</div>
              <div className="text-gray-600">Performance Boost</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">36hr</div>
              <div className="text-gray-600">Turnaround</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Ready to Validate ETL Excellence?
            </h3>
            <p className="text-gray-600">
              Join 300+ companies that trust our ETL testing expertise. Start with a comprehensive data pipeline assessment to ensure your ETL processes are reliable, accurate, and optimized for performance and compliance.
            </p>
          </div>
          <button className="bg-brand-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-blue transition-colors duration-300 shadow-lg">
            Get Started with ETL Testing
          </button>
        </div>
      </div>
    </section>
  );
};

export default ETLWhyChooseTestriq;

