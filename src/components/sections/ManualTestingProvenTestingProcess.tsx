"use client";

import React, { useState } from "react";
import { FaClipboardList, FaPlay, FaBug, FaFileAlt, FaCheckCircle } from "react-icons/fa";

const ManualTestingProvenTestingProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Test Planning & Strategy",
      duration: "1-2 days",
      icon: <FaClipboardList className="text-2xl" />,
      description: "Comprehensive test planning including requirement analysis, test strategy definition, and resource allocation.",
      activities: [
        "Requirement analysis and understanding",
        "Test strategy and approach definition",
        "Test environment setup planning",
        "Resource allocation and timeline planning"
      ],
      nextStep: "Test Case Design"
    },
    {
      id: 2,
      title: "Test Case Design & Preparation",
      duration: "2-3 days",
      icon: <FaFileAlt className="text-2xl" />,
      description: "Detailed test case creation covering functional, usability, and edge case scenarios.",
      activities: [
        "Test case design and documentation",
        "Test data preparation",
        "Test scenario prioritization",
        "Traceability matrix creation"
      ],
      nextStep: "Test Execution"
    },
    {
      id: 3,
      title: "Manual Test Execution",
      duration: "3-5 days",
      icon: <FaPlay className="text-2xl" />,
      description: "Systematic execution of test cases with real-time defect identification and documentation.",
      activities: [
        "Test case execution",
        "Real-time defect logging",
        "Exploratory testing sessions",
        "User experience evaluation"
      ],
      nextStep: "Defect Management"
    },
    {
      id: 4,
      title: "Defect Management & Tracking",
      duration: "Ongoing",
      icon: <FaBug className="text-2xl" />,
      description: "Comprehensive defect lifecycle management from discovery to resolution verification.",
      activities: [
        "Defect classification and prioritization",
        "Defect lifecycle tracking",
        "Retest execution",
        "Regression impact analysis"
      ],
      nextStep: "Reporting & Sign-off"
    },
    {
      id: 5,
      title: "Test Reporting & Sign-off",
      duration: "1 day",
      icon: <FaCheckCircle className="text-2xl" />,
      description: "Comprehensive test reporting with quality metrics, recommendations, and formal sign-off.",
      activities: [
        "Test execution summary",
        "Quality metrics analysis",
        "Risk assessment and recommendations",
        "Formal test sign-off"
      ],
      nextStep: "Process Complete"
    }
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our <span className="text-brand-blue">Proven</span> Manual Testing Process
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our systematic manual testing process ensures comprehensive coverage, efficient execution, 
            and reliable results through structured methodologies and expert human insight.
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
                className={`relative flex items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex-col lg:space-x-8`}
                onClick={() => setActiveStep(step.id)}
              >
                {/* Step Number Circle */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-4 border-brand-blue rounded-full items-center justify-center z-10">
                  <span className="text-brand-blue font-bold text-lg flex justify-center pt-1">{step.id}</span>
                </div>

                {/* Step Content */}
                <div className={`w-full lg:w-5/12`}>
                  <div
                    className={`bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                      activeStep === step.id ? "ring-2 ring-brand-blue" : ""
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
                    
                    <p className="text-gray-600 mb-6 leading-relaxed flex justify-items-start">
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
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Manual Testing Journey?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our proven process ensures comprehensive testing coverage and reliable results for your software projects.
            </p>
            <button className="bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManualTestingProvenTestingProcess;

