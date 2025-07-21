"use client";

import React from "react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

const AICardSlider: React.FC = () => {
  const testingTypes = [
    {
      title: "Model Validation Testing",
      description:
        "Comprehensive validation of AI model accuracy, performance, and reliability.",
      features: [
        "Accuracy and precision testing",
        "Cross-validation analysis",
        "Performance benchmarking",
        "Model robustness validation",
      ],
      highlight: "99.5% accuracy",
    },
    {
      title: "Bias & Fairness Testing",
      description:
        "Advanced testing to ensure AI systems are fair and ethical across all user groups.",
      features: [
        "Demographic bias detection",
        "Fairness metric evaluation",
        "Ethical compliance validation",
        "Bias mitigation recommendations",
      ],
      highlight: "Zero bias tolerance",
    },
    {
      title: "AI Security Testing",
      description:
        "Comprehensive security assessment to protect AI systems from threats and attacks.",
      features: [
        "Adversarial attack testing",
        "Data poisoning detection",
        "Model evasion testing",
        "Privacy protection validation",
      ],
      highlight: "100% security coverage",
    },
  ];

  return (
    <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive{" "}
            <span className="text-[theme(color.brand.blue)]">
              AI Testing Types
            </span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Our specialized testing approaches ensure your AI systems meet the
            highest standards of accuracy, fairness, and security.
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
            Get Comprehensive AI Testing
          </button>
        </div>
      </div>
    </section>
  );
};

export default AICardSlider;
