"use client";

import React, { useState, useRef } from "react";
import {
  FaSearch,
  FaCog,
  FaShieldAlt,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";

const RoboticProvenTestingProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const processSteps = [
    {
      id: 1,
      title: "System & Requirements Analysis",
      description:
        "Comprehensive analysis of robotic systems, specifications, and safety requirements to create a detailed testing strategy.",
      icon: <FaSearch className="w-6 h-6" />,
      activities: [
        "Robotic system specification review",
        "Safety requirements analysis",
        "Performance criteria assessment",
        "Integration requirements evaluation",
      ],
      duration: "3-4 days",
      color: "blue",
    },
    {
      id: 2,
      title: "Test Environment Setup",
      description:
        "Setting up controlled testing environments with safety protocols and monitoring systems for comprehensive robotic testing.",
      icon: <FaCog className="w-6 h-6" />,
      activities: [
        "Testing environment configuration",
        "Safety protocol implementation",
        "Monitoring system setup",
        "Test data preparation",
      ],
      duration: "2-3 days",
      color: "green",
    },
    {
      id: 3,
      title: "Functional & Safety Testing",
      description:
        "Executing comprehensive functional tests and critical safety validations to ensure robotic systems meet all requirements.",
      icon: <FaShieldAlt className="w-6 h-6" />,
      activities: [
        "Functional testing execution",
        "Safety mechanism validation",
        "Emergency protocol testing",
        "Performance benchmarking",
      ],
      duration: "5-7 days",
      color: "purple",
    },
    {
      id: 4,
      title: "Performance & Integration Testing",
      description:
        "Advanced performance testing, test automation for robotics, and system integration validation to ensure optimal operation in real-world scenarios.",
      icon: <FaChartLine className="w-6 h-6" />,
      activities: [
        "Performance optimization testing",
        "Integration testing execution",
        "Load and stress testing",
        "Endurance validation",
      ],
      duration: "4-6 days",
      color: "orange",
    },
    {
      id: 5,
      title: "Validation & Delivery",
      description:
        "Final validation, end-user validation for robotics platforms, and delivery of certified systems with documentation.",
      icon: <FaCheckCircle className="w-6 h-6" />,
      activities: [
        "Final validation testing",
        "Comprehensive report generation",
        "Certification documentation",
        "Knowledge transfer & support",
      ],
      duration: "2-3 days",
      color: "red",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-500 text-white",
      green: "bg-green-500 text-white",
      purple: "bg-purple-500 text-white",
      orange: "bg-orange-500 text-white",
      red: "bg-red-500 text-white",
    };
    return colors[color as keyof typeof colors];
  };

  const getBorderColor = (color: string) => {
    const colors = {
      blue: "border-blue-500",
      green: "border-green-500",
      purple: "border-purple-500",
      orange: "border-orange-500",
      red: "border-red-500",
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Proven Robotic Testing{" "}
            <span className="text-brand-blue">Process</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our systematic approach ensures comprehensive robotic testing
            coverage, delivering reliable, safe, and high-performance robotic
            systems for your applications.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full"></div>

          {/* Process Steps */}
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className="relative"
                ref={(el) => {
                  stepRefs.current[index] = el;
                }}
              >
                {/* Timeline Node */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
                  <button
                    onClick={() => setActiveStep(index)}
                    className={`w-12 h-12 rounded-full border-4 border-white shadow-lg flex items-center justify-center transition-all duration-300 ${
                      activeStep === index
                        ? getColorClasses(step.color)
                        : "bg-gray-300 text-gray-600"
                    }`}
                  >
                    <span className="font-bold text-sm">{step.id}</span>
                  </button>
                </div>

                {/* Content */}
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${
                    index % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Left/Right Content */}
                  <div
                    className={`${
                      index % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"
                    }`}
                  >
                    <div
                      className={`inline-block p-4 rounded-xl mb-4 cursor-pointer transition-all duration-300 ${
                        activeStep === index
                          ? `${getColorClasses(step.color)} shadow-lg scale-105`
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                      onClick={() => setActiveStep(index)}
                    >
                      {step.icon}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Step {step.id}: {step.title}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    <div
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        activeStep === index
                          ? getColorClasses(step.color)
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      Duration: {step.duration}
                    </div>
                  </div>

                  {/* Activities Panel */}
                  <div
                    className={`${index % 2 === 0 ? "md:pl-16" : "md:pr-16"}`}
                  >
                    {activeStep === index && (
                      <div
                        className={`bg-white border-2 ${getBorderColor(
                          step.color
                        )} rounded-xl p-6 shadow-lg animate-fadeIn`}
                      >
                        <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                          <span
                            className={`w-3 h-3 rounded-full mr-2 ${
                              getColorClasses(step.color).split(" ")[0]
                            }`}
                          ></span>
                          Key Activities:
                        </h4>

                        <ul className="space-y-3">
                          {step.activities.map((activity, actIndex) => (
                            <li key={actIndex} className="flex items-start">
                              <div
                                className={`w-2 h-2 rounded-full mt-2 mr-3 ${
                                  getColorClasses(step.color).split(" ")[0]
                                }`}
                              ></div>
                              <span className="text-gray-600">{activity}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-6 pt-4 border-t border-gray-200">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">
                              Next Step
                            </span>
                            {index < processSteps.length - 1 ? (
                              <button
                                onClick={() => {
                                  setActiveStep(index + 1);
                                  setTimeout(() => {
                                    stepRefs.current[index + 1]?.scrollIntoView(
                                      { behavior: "smooth", block: "center" }
                                    );
                                  }, 100);
                                }}
                                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 ${getColorClasses(
                                  step.color
                                )} hover:opacity-90`}
                              >
                                {processSteps[index + 1].title}
                              </button>
                            ) : (
                              <button
                                onClick={() => {
                                  setActiveStep(0);
                                  setTimeout(() => {
                                    stepRefs.current[0]?.scrollIntoView({
                                      behavior: "smooth",
                                      block: "center",
                                    });
                                  }, 100);
                                }}
                                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 ${getColorClasses(
                                  step.color
                                )} hover:opacity-90`}
                              >
                                Restart from Step 1
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Process Flow */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Robotic Testing Workflow
            </h3>
            <p className="text-gray-600">
              Visualizing our comprehensive robotic testing methodology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {processSteps.map((step, index) => (
              <div key={step.id} className="text-center">
                <div
                  className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3 ${getColorClasses(
                    step.color
                  )}`}
                >
                  {step.icon}
                </div>
                <div className="text-sm font-semibold text-gray-900 mb-1">
                  Step {step.id}
                </div>
                <div className="text-xs text-gray-600">{step.title}</div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block mt-4">
                    <div className="w-full h-0.5 bg-gray-300 relative">
                      <div className="absolute right-0 top-0 w-2 h-2 bg-gray-400 rounded-full transform translate-x-1 -translate-y-0.5"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoboticProvenTestingProcess;
