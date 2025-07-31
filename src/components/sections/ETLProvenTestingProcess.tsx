"use client";

import React, { useState } from "react";
import { FaChevronRight, FaPlay } from "react-icons/fa";

const ETLProvenTestingProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      id: 1,
      title: "Requirements & Data Analysis",
      description: "Comprehensive analysis of ETL requirements, data sources, and business rules to create a detailed testing strategy.",
      duration: "3-4 days",
      activities: [
        "ETL requirements analysis",
        "Data source assessment",
        "Business rules validation",
        "Testing strategy development"
      ],
      nextStep: "Test Environment Setup"
    },
    {
      id: 2,
      title: "Test Environment Setup",
      description: "Setting up comprehensive testing environments with data samples and validation frameworks for thorough ETL testing.",
      duration: "2-3 days",
      activities: [
        "Test environment configuration",
        "Test data preparation",
        "Validation framework setup",
        "Testing tools configuration"
      ],
      nextStep: "Data Extraction Testing"
    },
    {
      id: 3,
      title: "Data Extraction Testing",
      description: "Executing comprehensive data extraction tests to validate source connectivity and data retrieval accuracy.",
      duration: "4-5 days",
      activities: [
        "Source connectivity testing",
        "Data extraction validation",
        "Data completeness verification",
        "Extraction performance testing"
      ],
      nextStep: "Transformation Testing"
    },
    {
      id: 4,
      title: "Transformation & Loading Testing",
      description: "Advanced testing of data transformation logic and loading processes to ensure data integrity and accuracy.",
      duration: "5-7 days",
      activities: [
        "Transformation logic validation",
        "Business rule testing",
        "Data loading verification",
        "Integration testing"
      ],
      nextStep: "Quality Assurance"
    },
    {
      id: 5,
      title: "Quality Assurance & Delivery",
      description: "Final quality validation, comprehensive reporting, and delivery of certified ETL processes with documentation.",
      duration: "2-3 days",
      activities: [
        "End-to-end testing",
        "Quality assurance validation",
        "Performance optimization",
        "Documentation and delivery"
      ],
      nextStep: "Project Complete"
    }
  ];

  const currentStep = processSteps[activeStep];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Proven ETL Testing <span className="text-brand-blue">Process</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Our systematic ETL testing approach ensures comprehensive coverage, delivering reliable, accurate, and high-performance data pipelines for your business-critical applications and data analytics workflows.
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {processSteps.map((step, index) => (
              <div key={step.id} className="flex flex-col lg:flex-row items-center">
                <button
                  onClick={() => setActiveStep(index)}
                  className={`relative w-16 h-16 rounded-full border-4 flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                    activeStep === index
                      ? "bg-blue-500 text-white border-blue-500 shadow-lg scale-110"
                      : activeStep > index
                      ? "bg-green-500 text-white border-green-500"
                      : "bg-white text-gray-400 border-gray-300 hover:border-blue-300"
                  }`}
                >
                  {activeStep > index ? "✓" : step.id}
                  {activeStep === index && (
                    <div className="absolute -inset-2 bg-blue-200 rounded-full animate-ping opacity-75"></div>
                  )}
                </button>
                
                {index < processSteps.length - 1 && (
                  <div className={`w-2 h-8 lg:w-24 lg:h-2 mx-0 my-2 lg:mx-4 lg:my-0 rounded transition-colors duration-300 ${
                    activeStep > index ? "bg-green-500" : "bg-gray-300"
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Active Step Details */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - Step Information */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-xl flex items-center justify-center font-bold text-lg mr-4">
                  {currentStep.id}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{currentStep.title}</h3>
                  <p className="text-blue-600 font-semibold">Duration: {currentStep.duration}</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{currentStep.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Activities:</h4>
                <div className="space-y-2">
                  {currentStep.activities.map((activity, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-600">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {currentStep.nextStep !== "Project Complete" && (
                <div className="flex items-center text-blue-600 font-semibold">
                  <span className="mr-2">Next Step</span>
                  <FaChevronRight className="w-4 h-4 mr-2" />
                  <span>{currentStep.nextStep}</span>
                </div>
              )}
            </div>

            {/* Right Side - Visual Process Flow */}
            <div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="font-semibold text-gray-900 mb-4">ETL Testing Workflow</h4>
                <div className="space-y-4">
                  {processSteps.map((step, index) => (
                    <div
                      key={step.id}
                      className={`flex items-center p-3 rounded-lg transition-all duration-300 ${
                        activeStep === index
                          ? "bg-blue-100 border-l-4 border-blue-500"
                          : activeStep > index
                          ? "bg-green-50 border-l-4 border-green-500"
                          : "bg-gray-50 border-l-4 border-gray-300"
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 ${
                        activeStep === index
                          ? "bg-blue-500 text-white"
                          : activeStep > index
                          ? "bg-green-500 text-white"
                          : "bg-gray-300 text-gray-600"
                      }`}>
                        {activeStep > index ? "✓" : step.id}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-sm text-gray-900">{step.title}</div>
                        <div className="text-xs text-gray-600">{step.duration}</div>
                      </div>
                      {activeStep === index && (
                        <FaPlay className="w-4 h-4 text-blue-500" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ETLProvenTestingProcess;

