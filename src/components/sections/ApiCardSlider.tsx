"use client";

import React from "react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

const ApiCardSlider: React.FC = () => {
  const testingTypes = [
    {
      title: "Functional Testing",
      description:
        "Comprehensive validation of API functionality, endpoints, and business logic.",
      features: [
        "Request/Response validation",
        "Data integrity testing",
        "Error handling verification",
        "Business logic validation",
      ],
      highlight: "99.8% accuracy",
    },
    {
      title: "Performance Testing",
      description:
        "Ensure your APIs perform optimally under various load conditions.",
      features: [
        "Load testing",
        "Stress testing",
        "Scalability assessment",
        "Response time optimization",
      ],
      highlight: "Sub-second response",
    },
    {
      title: "Security Testing",
      description:
        "Comprehensive security assessment to protect your APIs from threats.",
      features: [
        "Authentication testing",
        "Authorization validation",
        "Vulnerability assessment",
        "Data encryption verification",
      ],
      highlight: "Zero vulnerabilities",
    },
  ];

  return (
    <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive{" "}
            <span className="text-[theme(color.brand.blue)]">
              API Testing Types
            </span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Our specialized testing approaches ensure your APIs meet the highest standards of functionality, performance, and security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testingTypes.map((type, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">
                <div className="text-[theme(color.brand.blue)] font-bold text-lg mb-2">
                  {type.highlight}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-700 mb-6">{type.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Key Features:
                </h4>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <FaCheckCircle className="w-4 h-4 text-[theme(color.brand.blue)] mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="flex items-center text-[theme(color.brand.blue)] font-semibold hover:text-blue-400 transition-colors duration-300">
                <span>Learn More</span>
                <FaArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-[theme(color.brand.blue)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors duration-300">
            Get Comprehensive API Testing
          </button>
        </div>
      </div>
    </section>
  );
};

export default ApiCardSlider;
