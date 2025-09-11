"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaClipboardList, FaCogs, FaPlay, FaChartLine, FaCheckCircle } from "react-icons/fa";

const PerformanceTestingProvenTestingProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Performance Requirements Analysis",
      duration: "1-2 days",
      icon: <FaClipboardList className="text-2xl" />,
      description: "Comprehensive analysis of performance requirements, user expectations, and system constraints to define testing objectives.",
      activities: [
        "Performance criteria definition",
        "User load pattern analysis",
        "System architecture review",
        "Performance baseline establishment"
      ],
      nextStep: "Test Environment Setup"
    },
    {
      id: 2,
      title: "Test Environment Setup",
      duration: "2-3 days",
      icon: <FaCogs className="text-2xl" />,
      description: "Setting up realistic test environments that mirror production systems for accurate performance testing.",
      activities: [
        "Test environment configuration",
        "Performance monitoring tools setup",
        "Test data preparation",
        "Network and infrastructure setup"
      ],
      nextStep: "Test Script Development"
    },
    {
      id: 3,
      title: "Test Script Development",
      duration: "3-5 days",
      icon: <FaPlay className="text-2xl" />,
      description: "Development of comprehensive performance test scripts covering various load scenarios and user workflows.",
      activities: [
        "Load test script creation",
        "User scenario modeling",
        "Data parameterization",
        "Script validation and debugging"
      ],
      nextStep: "Test Execution"
    },
    {
      id: 4,
      title: "Performance Test Execution",
      duration: "3-7 days",
      icon: <FaChartLine className="text-2xl" />,
      description: "Systematic execution of performance tests with real-time monitoring and data collection.",
      activities: [
        "Load, stress, and scalability testing",
        "Real-time performance monitoring",
        "Resource utilization tracking",
        "Performance metrics collection"
      ],
      nextStep: "Analysis & Optimization"
    },
    {
      id: 5,
      title: "Analysis & Optimization",
      duration: "2-3 days",
      icon: <FaCheckCircle className="text-2xl" />,
      description: "Comprehensive analysis of test results with performance optimization recommendations and validation.",
      activities: [
        "Performance bottleneck identification",
        "Root cause analysis",
        "Optimization recommendations",
        "Performance report generation"
      ],
      nextStep: "Process Complete"
    }
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our <span className="text-brand-blue">Proven</span> Performance Testing Process
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our systematic performance testing process ensures comprehensive evaluation of application performance, scalability, and system reliability under various <Link href='blog/post/load-testing-in-performance-testing-complete-guide'>load testing</Link>, <Link href='blog/post/stress-testing-applications-identifying-breaking-points'>stress testing</Link>, and performance <Link href='regression-testing'>regression testing</Link> scenarios. We identify <Link href='blog/post/performance-bottlenecks-in-web-apps-how-to-identify-them-2'>performance bottlenecks</Link>, simulate real-world traffic conditions, and apply <Link href='automation-testing-services'>automated performance testing</Link> to deliver optimal <Link href='blog/post/user-experience-testing-for-smart-devices-usability-accessibility'>user experiences</Link> at scale.
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
                <div className={`w-full lg:w-5/12`}>
                  <div
                    className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${activeStep === step.id ? "ring-2 ring-brand-blue" : ""
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
          <div className="bg-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Optimize Your Application Performance?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our proven performance testing process ensures your applications deliver exceptional speed, scalability, and reliability.
            </p>
            <Link href="/contact-us">
              <button className="bg-brand-blue cursor-pointer text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              Start Performance Testing
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceTestingProvenTestingProcess;

