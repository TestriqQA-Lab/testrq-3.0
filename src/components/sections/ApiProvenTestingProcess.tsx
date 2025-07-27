"use client";

import React, { useState } from "react";
import {
  FaSearch,
  FaCode,
  FaChartLine,
  FaCheckCircle,
  FaArrowRight,
  FaPlay,
} from "react-icons/fa";

const ApiProvenTestingProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      icon: <FaSearch className="w-6 h-6" />,
      title: "API Analysis & Planning",
      shortTitle: "Analysis",
      description:
        "Comprehensive analysis of API specifications, endpoints, and requirements to create a detailed testing strategy.",
      details: [
        "API specification review and analysis",
        "Endpoint mapping and documentation",
        "Test strategy development",
        "Risk assessment and prioritization",
      ],
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
      duration: "2-3 days",
    },
    {
      number: "02",
      icon: <FaCode className="w-6 h-6" />,
      title: "Test Design & Execution",
      shortTitle: "Testing",
      description:
        "Design and execute comprehensive test cases covering functional, performance, and security aspects of your APIs.",
      details: [
        "Test case design and development",
        "Automated test script creation",
        "Manual testing execution",
        "Continuous integration setup",
      ],
      color: "green",
      gradient: "from-green-500 to-green-600",
      duration: "5-7 days",
    },
    {
      number: "03",
      icon: <FaChartLine className="w-6 h-6" />,
      title: "Performance & Load Testing",
      shortTitle: "Performance",
      description:
        "Evaluate API performance under various load conditions and identify bottlenecks and optimization opportunities.",
      details: [
        "Load testing and stress testing",
        "Performance bottleneck identification",
        "Scalability assessment",
        "Response time optimization",
      ],
      color: "purple",
      gradient: "from-purple-500 to-purple-600",
      duration: "3-4 days",
    },
    {
      number: "04",
      icon: <FaCheckCircle className="w-6 h-6" />,
      title: "Report & Optimization",
      shortTitle: "Delivery",
      description:
        "Detailed reporting with actionable insights and recommendations for API improvements and optimization.",
      details: [
        "Comprehensive test report generation",
        "Issue prioritization and categorization",
        "Optimization recommendations",
        "Documentation and handover",
      ],
      color: "orange",
      gradient: "from-orange-500 to-orange-600",
      duration: "1-2 days",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-white to-blue-50 py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Proven API Testing{" "}
            <span className="text-[theme(color.brand.blue)]">Process</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Our systematic approach ensures comprehensive API testing coverage, delivering reliable and secure integrations for your applications.
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="relative mb-12">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between mb-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center relative"
                >
                  {/* Step Button */}
                  <button
                    onClick={() => setActiveStep(index)}
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg transition-all duration-300 transform hover:scale-110 ${
                      activeStep === index
                        ? `bg-gradient-to-r ${step.gradient} shadow-lg`
                        : activeStep > index
                        ? "bg-green-500 shadow-md"
                        : "bg-gray-300"
                    }`}
                  >
                    {activeStep > index ? (
                      <FaCheckCircle className="w-6 h-6" />
                    ) : (
                      step.number
                    )}
                  </button>

                  {/* Step Label */}
                  <div className="mt-3 text-center">
                    <div
                      className={`font-semibold text-sm ${
                        activeStep === index
                          ? `text-${step.color}-600`
                          : "text-gray-600"
                      }`}
                    >
                      {step.shortTitle}
                    </div>
                    <div className="text-xs text-gray-500">{step.duration}</div>
                  </div>

                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div
                      className={`absolute top-8 left-16 w-full h-1 ${
                        activeStep > index ? "bg-green-500" : "bg-gray-300"
                      } transition-colors duration-300`}
                      style={{ width: "calc(100vw / 4 - 4rem)" }}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden">
            <div className="space-y-4 mb-8">
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-full p-4 rounded-lg border-2 transition-all duration-300 ${
                    activeStep === index
                      ? `border-${step.color}-500 bg-${step.color}-50`
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-white mr-4 ${
                        activeStep === index
                          ? `bg-gradient-to-r ${step.gradient}`
                          : "bg-gray-400"
                      }`}
                    >
                      {step.number}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-gray-900">
                        {step.title}
                      </div>
                      <div className="text-sm text-gray-500">
                        {step.duration}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Active Step Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Content */}
            <div className="space-y-6">
              <div className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${steps[activeStep].gradient} text-white flex items-center justify-center mr-4`}
                >
                  {steps[activeStep].icon}
                </div>
                <div>
                  <div
                    className={`text-${steps[activeStep].color}-600 font-semibold text-sm`}
                  >
                    Step {steps[activeStep].number}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {steps[activeStep].title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-700 text-lg">
                {steps[activeStep].description}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Key Activities:</h4>
                {steps[activeStep].details.map((detail, index) => (
                  <div key={index} className="flex items-center">
                    <div
                      className={`w-2 h-2 bg-${steps[activeStep].color}-500 rounded-full mr-3`}
                    ></div>
                    <span className="text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4">
                <div
                  className={`bg-${steps[activeStep].color}-100 text-${steps[activeStep].color}-800 px-3 py-1 rounded-full text-sm font-semibold`}
                >
                  Duration: {steps[activeStep].duration}
                </div>

                {activeStep < steps.length - 1 && (
                  <button
                    onClick={() => setActiveStep(activeStep + 1)}
                    className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${steps[activeStep].gradient} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300`}
                  >
                    <span>Next Step</span>
                    <FaArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Right Side - Visual Representation */}
            <div className="relative">
              <div
                className={`bg-gradient-to-br from-${steps[activeStep].color}-50 to-${steps[activeStep].color}-100 p-8 rounded-2xl border border-${steps[activeStep].color}-200`}
              >
                {/* Dynamic Visual Based on Active Step */}
                {activeStep === 0 && (
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-700">
                          API Specification
                        </span>
                        <FaSearch className="text-blue-500" />
                      </div>
                      <div className="text-sm text-gray-600">
                        Analyzing endpoints and requirements
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <div className="text-center">
                        <div className="text-blue-600 text-3xl mb-2">📋</div>
                        <div className="font-semibold text-gray-700">
                          Test Strategy
                        </div>
                        <div className="text-sm text-gray-600">
                          Planning comprehensive approach
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 1 && (
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-700">
                          Test Execution
                        </span>
                        <div className="text-green-600 font-bold">85%</div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full animate-pulse"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-white p-3 rounded-lg shadow-md text-center">
                        <div className="text-green-600 text-xl">✓</div>
                        <div className="text-xs font-semibold">Functional</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-md text-center">
                        <div className="text-blue-600 text-xl">⚡</div>
                        <div className="text-xs font-semibold">Automated</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-700">
                          Load Testing
                        </span>
                        <span className="text-purple-600 font-bold">
                          1000 RPS
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-purple-500 h-2 rounded-full animate-pulse"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md text-center">
                      <div className="text-purple-600 text-3xl mb-2">📊</div>
                      <div className="font-semibold text-gray-700">
                        Performance Metrics
                      </div>
                      <div className="text-sm text-gray-600">
                        Response time: 45ms
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 3 && (
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-700">
                          Test Report
                        </span>
                        <FaCheckCircle className="text-orange-500" />
                      </div>
                      <div className="text-sm text-gray-600">
                        Comprehensive analysis complete
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md text-center">
                      <div className="text-orange-600 text-3xl mb-2">📄</div>
                      <div className="font-semibold text-gray-700">
                        Deliverables
                      </div>
                      <div className="text-sm text-gray-600">
                        Reports & Recommendations
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button className="flex items-center gap-2 mx-auto bg-[theme(color.brand.blue)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors duration-300 shadow-lg">
            <FaPlay className="w-4 h-4" />
            <span>Learn More About Our Process</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ApiProvenTestingProcess;
