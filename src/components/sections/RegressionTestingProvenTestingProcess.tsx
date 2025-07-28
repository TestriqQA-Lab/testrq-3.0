"use client";

import React, { useState } from "react";
import { FaClipboardList, FaCodeBranch, FaPlay, FaChartLine, FaCheckCircle } from "react-icons/fa";

const RegressionTestingProvenTestingProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Impact Analysis & Planning",
      duration: "1-2 days",
      icon: <FaClipboardList className="text-2xl" />,
      description: "Comprehensive analysis of code changes and their potential impact on existing functionalities to determine regression testing scope.",
      activities: [
        "Change impact assessment",
        "Risk analysis and prioritization",
        "Test case selection strategy",
        "Resource allocation planning"
      ],
      nextStep: "Test Suite Preparation"
    },
    {
      id: 2,
      title: "Test Suite Preparation",
      duration: "2-3 days",
      icon: <FaCodeBranch className="text-2xl" />,
      description: "Preparation and optimization of regression test suites based on impact analysis and risk assessment.",
      activities: [
        "Test case review and update",
        "Test data preparation",
        "Environment setup",
        "Automation script validation"
      ],
      nextStep: "Test Execution"
    },
    {
      id: 3,
      title: "Regression Test Execution",
      duration: "3-5 days",
      icon: <FaPlay className="text-2xl" />,
      description: "Systematic execution of regression tests using both automated and manual approaches for comprehensive coverage.",
      activities: [
        "Automated test execution",
        "Manual regression testing",
        "Cross-platform validation",
        "Real-time defect logging"
      ],
      nextStep: "Analysis & Reporting"
    },
    {
      id: 4,
      title: "Analysis & Reporting",
      duration: "1-2 days",
      icon: <FaChartLine className="text-2xl" />,
      description: "Comprehensive analysis of test results with detailed reporting and recommendations for quality improvement.",
      activities: [
        "Test result analysis",
        "Defect impact assessment",
        "Regression report generation",
        "Quality metrics compilation"
      ],
      nextStep: "Validation & Sign-off"
    },
    {
      id: 5,
      title: "Validation & Sign-off",
      duration: "1 day",
      icon: <FaCheckCircle className="text-2xl" />,
      description: "Final validation of fixes and formal sign-off to ensure all regression issues are resolved before release.",
      activities: [
        "Fix validation testing",
        "Final regression verification",
        "Quality gate assessment",
        "Release readiness sign-off"
      ],
      nextStep: "Process Complete"
    }
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our <span className="text-brand-blue">Proven</span> Regression Testing Process
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our systematic regression testing process ensures comprehensive validation of software stability and quality with every release, minimizing risks and maintaining user satisfaction.
          </p>
        </div>

        <div className="relative">
          {/* Process Timeline */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

          {/* Process Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`relative flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } flex-col lg:space-x-8`}
                onClick={() => setActiveStep(step.id)}
              >
                {/* Step Number Circle */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-4 border-brand-blue rounded-full items-center justify-center z-10">
                  <span className="text-brand-blue font-bold text-lg flex justify-center pt-1">{step.id}</span>
                </div>

                {/* Step Content */}
                <div className={`w-full lg:w-5/12 `}>
                  <div
                    className={`bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${activeStep === step.id ? "ring-2 ring-brand-blue" : ""
                      }`}
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-brand-blue w-12 h-12 rounded-xl flex items-center justify-center">
                        <span className="text-white">{step.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        <span className="text-sm text-brand-blue font-medium">{step.duration}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Activities */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Activities:</h4>
                      {step.activities.map((activity, activityIndex) => (
                        <div key={activityIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                          <span className="text-sm text-gray-600">{activity}</span>
                        </div>
                      ))}
                    </div>

                    {/* Next Step Indicator */}
                    {step.nextStep !== "Process Complete" && (
                      <div className="mt-6 pt-4 border-t border-gray-200">
                        <span className="text-sm text-gray-500">Next: </span>
                        <span className="text-sm font-medium text-brand-blue">{step.nextStep}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Mobile Step Number */}
                <div className="lg:hidden w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">{step.id}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Ensure Quality with Regression Testing?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our proven regression testing process maintains software stability and quality with every release, ensuring user satisfaction.
            </p>
            <button className="bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              Start Your Regression Testing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegressionTestingProvenTestingProcess;

