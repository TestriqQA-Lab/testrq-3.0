"use client";

import React, { useState } from "react";
import {
  FaBrain,
  FaShieldAlt,
  FaChartLine,
  FaEye,
  FaDatabase,
  FaArrowRight,
  FaFlask,
} from "react-icons/fa";

const AIComprehensiveSlider: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const testingTypes = [
    {
      icon: <FaBrain className="w-8 h-8" />,
      title: "Model Validation",
      description:
        "Comprehensive testing of machine learning models including accuracy, precision, and performance validation to ensure robust AI outcomes.",
      features: [
        "Accuracy and precision testing",
        "Cross-validation analysis",
        "Performance benchmarking",
        "Model robustness validation",
      ],
      color: "purple",
      gradientColor: "from-purple-500 to-purple-600",
      metric: "94% Accuracy",
    },
    {
      icon: <FaEye className="w-8 h-8" />,
      title: "Bias Detection",
      description:
        "Advanced testing to ensure AI systems are fair and ethical across all user groups with robust fairness metrics.",
      features: [
        "Demographic bias detection",
        "Fairness metric evaluation",
        "Ethical compliance validation",
        "Bias mitigation recommendations",
      ],
      color: "orange",
      gradientColor: "from-orange-500 to-orange-600",
      metric: "Zero Bias Tolerance",
    },
    {
      icon: <FaEye className="w-8 h-8" />,
      title: "Explainability Testing",
      description:
        "Testing AI model interpretability and explainability to ensure transparent decision-making processes.",
      features: [
        "Model Interpretability",
        "Decision Transparency",
        "Feature Importance",
        "Explanation Quality",
      ],
      color: "blue",
      gradientColor: "from-blue-500 to-blue-600",
      metric: "100% Transparency",
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Performance Testing",
      description:
        "Comprehensive performance evaluation including latency, throughput, and scalability testing.",
      features: [
        "Latency Testing",
        "Throughput Analysis",
        "Scalability Assessment",
        "Resource Optimization",
      ],
      color: "green",
      gradientColor: "from-green-500 to-green-600",
      metric: "Sub-second Response",
    },
    {
      icon: <FaDatabase className="w-8 h-8" />,
      title: "Data Quality Testing",
      description:
        "Comprehensive data validation including integrity, completeness, and quality assessment for AI training.",
      features: [
        "Data Integrity",
        "Completeness Check",
        "Quality Assessment",
        "Validation Rules",
      ],
      color: "indigo",
      gradientColor: "from-indigo-500 to-indigo-600",
      metric: "100% Data Quality",
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "AI Security Testing",
      description:
        "Comprehensive security assessment to protect AI systems from threats and attacks with adversarial robustness validation.",
      features: [
        "Adversarial attack testing",
        "Data poisoning detection",
        "Model evasion testing",
        "Privacy protection validation",
      ],
      color: "red",
      gradientColor: "from-red-500 to-red-600",
      metric: "100% Security Coverage",
    },
  ];
  // Function to move to the next tab
  const nextTab = () => {
    setActiveTab((prevTab) => (prevTab + 1) % testingTypes.length); // Loop back to the first tab when reaching the last one
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-purple-50 py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaFlask />
            <span className="text-sm">Comprehensive Testing Solutions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete{" "}
            <span className="text-[theme(color.brand.blue)]">
              AI Testing Coverage
            </span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Our comprehensive AI testing services cover every aspect of your AI
            ecosystem, ensuring accuracy, fairness, and reliability across all
            machine learning models and intelligent systems.
          </p>
        </div>

        {/* Active Tab Content with AI-themed Design */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Content */}
            <div className="space-y-6">
              <div
                className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${testingTypes[activeTab].gradientColor} rounded-2xl text-white shadow-lg`}
              >
                {testingTypes[activeTab].icon}
              </div>

              <div>
                <div
                  className={`inline-block bg-${testingTypes[activeTab].color}-100 text-${testingTypes[activeTab].color}-800 px-3 py-1 rounded-full text-sm font-semibold mb-3`}
                >
                  {testingTypes[activeTab].metric}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {testingTypes[activeTab].title}
                </h3>

                <p className="text-gray-700 text-lg mb-6">
                  {testingTypes[activeTab].description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {testingTypes[activeTab].features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center p-4 bg-gradient-to-r from-${testingTypes[activeTab].color}-50 to-${testingTypes[activeTab].color}-100 rounded-lg border border-${testingTypes[activeTab].color}-200`}
                  >
                    <div
                      className={`w-3 h-3 bg-${testingTypes[activeTab].color}-500 rounded-full mr-3 animate-pulse`}
                    ></div>
                    <span className="text-gray-700 text-sm font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-between items-center">
                <button
                  className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${testingTypes[activeTab].gradientColor} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                >
                  <span>Learn More</span>
                  <FaArrowRight className="w-4 h-4" />
                </button>

                {/* Next Button */}
                <button
                  className="px-6 py-3 cursor-pointer bg-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  onClick={nextTab}
                >
                  Next
                </button>

              </div>
            </div>

            {/* Right Side - AI Model Visualization */}
            <div className="relative">
              <div
                className={`bg-gradient-to-br from-${testingTypes[activeTab].color}-50 to-${testingTypes[activeTab].color}-100 p-8 rounded-2xl border border-${testingTypes[activeTab].color}-200`}
              >
                {/* Dynamic AI Visualization Based on Active Tab */}
                {activeTab === 0 && (
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold">
                          Model Accuracy
                        </span>
                        <span className="text-purple-600 font-bold">94.2%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full animate-pulse"
                          style={{ width: "94%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <div className="text-center">
                        <div className="text-purple-600 text-3xl mb-2">🧠</div>
                        <div className="text-sm font-semibold text-gray-700">
                          Neural Network
                        </div>
                        <div className="text-xs text-gray-500">
                          Deep Learning Model
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 1 && (
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-md text-center">
                      <div className="text-orange-600 text-4xl mb-3">⚖️</div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Bias Detection
                      </h4>
                      <div className="flex justify-center space-x-2">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                          Fair
                        </span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          Ethical
                        </span>
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-md">
                      <div className="text-xs text-gray-600 mb-1">
                        Demographic Parity
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-orange-500 h-2 rounded-full"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 2 && (
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-md text-center">
                      <div className="text-blue-600 text-4xl mb-3">🔍</div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Model Explainability
                      </h4>
                      <div className="text-xs text-gray-500">
                        Feature Importance Analysis
                      </div>
                    </div>
                    <div className="space-y-2">
                      {["Feature A", "Feature B", "Feature C"].map(
                        (feature, i) => (
                          <div
                            key={i}
                            className="bg-white p-2 rounded shadow-sm"
                          >
                            <div className="flex justify-between text-xs">
                              <span>{feature}</span>
                              <span>{85 - i * 15}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                              <div
                                className="bg-blue-500 h-1 rounded-full"
                                style={{ width: `${85 - i * 15}%` }}
                              ></div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}

                {activeTab === 3 && (
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold">
                          Response Time
                        </span>
                        <span className="text-green-600 font-bold">0.3s</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-green-500 h-3 rounded-full animate-pulse"
                          style={{ width: "30%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md text-center">
                      <div className="text-green-600 text-3xl mb-2">⚡</div>
                      <div className="text-sm font-semibold text-gray-700">
                        High Performance
                      </div>
                      <div className="text-xs text-gray-500">
                        Optimized Inference
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 4 && (
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-md text-center">
                      <div className="text-indigo-600 text-4xl mb-3">📊</div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Data Quality
                      </h4>
                      <div className="text-xs text-gray-500">
                        Validation & Integrity
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-white p-2 rounded shadow-sm text-center">
                        <div className="text-xs text-gray-600">
                          Completeness
                        </div>
                        <div className="text-sm font-bold text-indigo-600">
                          100%
                        </div>
                      </div>
                      <div className="bg-white p-2 rounded shadow-sm text-center">
                        <div className="text-xs text-gray-600">Accuracy</div>
                        <div className="text-sm font-bold text-indigo-600">
                          98.5%
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 5 && (
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-md text-center">
                      <div className="text-red-600 text-4xl mb-3">🛡️</div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        AI Security
                      </h4>
                      <div className="flex justify-center space-x-2">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                          Protected
                        </span>
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">
                          Secure
                        </span>
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-md">
                      <div className="text-xs text-gray-600 mb-1">
                        Adversarial Robustness
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-red-500 h-2 rounded-full"
                          style={{ width: "95%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIComprehensiveSlider;
