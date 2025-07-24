"use client";

import React, { useState } from "react";
import { FaClipboardList, FaCogs, FaPlay, FaChartLine, FaCheckCircle } from "react-icons/fa";

const AutomationTestingProvenTestingProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Automation Strategy & Planning",
      duration: "2-3 days",
      icon: <FaClipboardList className="text-2xl" />,
      description: "Comprehensive automation strategy development including tool selection, framework design, and ROI analysis.",
      activities: [
        "Automation feasibility analysis",
        "Tool and framework selection",
        "Test automation strategy design",
        "ROI calculation and planning"
      ],
      nextStep: "Framework Setup"
    },
    {
      id: 2,
      title: "Framework Setup & Configuration",
      duration: "3-5 days",
      icon: <FaCogs className="text-2xl" />,
      description: "Setting up robust automation frameworks with proper architecture and configuration for scalable testing.",
      activities: [
        "Test automation framework setup",
        "Environment configuration",
        "CI/CD pipeline integration",
        "Reporting mechanism setup"
      ],
      nextStep: "Script Development"
    },
    {
      id: 3,
      title: "Test Script Development",
      duration: "5-10 days",
      icon: <FaPlay className="text-2xl" />,
      description: "Development of maintainable and reusable test scripts covering critical application functionalities.",
      activities: [
        "Test script creation",
        "Data-driven test development",
        "Page object model implementation",
        "Reusable component library"
      ],
      nextStep: "Execution & Monitoring"
    },
    {
      id: 4,
      title: "Execution & Monitoring",
      duration: "Ongoing",
      icon: <FaChartLine className="text-2xl" />,
      description: "Continuous test execution with real-time monitoring and intelligent failure analysis.",
      activities: [
        "Automated test execution",
        "Real-time monitoring",
        "Failure analysis and reporting",
        "Performance metrics tracking"
      ],
      nextStep: "Maintenance & Optimization"
    },
    {
      id: 5,
      title: "Maintenance & Optimization",
      duration: "Continuous",
      icon: <FaCheckCircle className="text-2xl" />,
      description: "Ongoing maintenance and optimization of automation scripts for maximum efficiency and reliability.",
      activities: [
        "Script maintenance and updates",
        "Performance optimization",
        "Framework enhancement",
        "Knowledge transfer and training"
      ],
      nextStep: "Process Complete"
    }
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our <span className="text-brand-blue">Proven</span> Automation Testing Process
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our systematic automation testing process ensures efficient implementation, reliable execution, 
            and continuous optimization for maximum ROI and testing effectiveness.
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
                    className={`bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
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
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Accelerate Your Testing with Automation?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our proven automation process delivers faster testing cycles, improved coverage, and reliable results for your software projects.
            </p>
            <button className="bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              Start Your Automation Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationTestingProvenTestingProcess;

