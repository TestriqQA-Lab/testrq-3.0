"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaClipboardList, FaCogs, FaPlay, FaChartLine, FaCheckCircle } from "react-icons/fa";

const PerformanceTestingProvenTestingProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Strategy & Risk Mapping",
      duration: "Strategic",
      icon: <FaClipboardList className="text-2xl" />,
      description: "We define Performance Metrics (Response Time, Throughput, Latency) and User Profiles. Following ISO/IEC/IEEE 29119-3, we create a detailed Test Plan mapping scenarios to business-critical flows.",
      activities: [
        "Response Time/Throughput Metrics",
        "User Profile Modeling",
        "ISO 29119-3 Test Planning",
        "Business-Critical Flow Mapping"
      ],
      nextStep: "Infrastructure & Tools"
    },
    {
      id: 2,
      title: "Infrastructure & Tool Selection",
      duration: "Technical",
      icon: <FaCogs className="text-2xl" />,
      description: "We choose the best performance testing tools, such as JMeter, k6, or Gatling. Our selection depends on your specific tech stack and protocol requirements.",
      activities: [
        "JMeter/k6/Gatling Evaluation",
        "Protocol Requirement Analysis",
        "Infrastructure Compatibility",
        "Environment Ready Readiness"
      ],
      nextStep: "Scripting & Modeling"
    },
    {
      id: 3,
      title: "Scripting & Think Time Modeling",
      duration: "Development",
      icon: <FaPlay className="text-2xl" />,
      description: "We develop realistic scripts using 'Think Time' and dynamic data. This approach mimics actual human behavior instead of creating 'robotic' traffic.",
      activities: [
        "Realistic 'Think Time' Modeling",
        "Dynamic Data Parameterization",
        "Human Behavior Emulation",
        "Script Debugging & Validation"
      ],
      nextStep: "Global Execution"
    },
    {
      id: 4,
      title: "Execution & Distributed Load Generation",
      duration: "Continuous",
      icon: <FaChartLine className="text-2xl" />,
      description: "We run tests across cloud-based environments to simulate global traffic from the USA, EU, and Asia simultaneously.",
      activities: [
        "Cloud-based Load Generation",
        "USA/EU/Asia Traffic Simulation",
        "Concurrent User Scaling",
        "Real-time Metric Tracking"
      ],
      nextStep: "Optimization & Analysis"
    },
    {
      id: 5,
      title: "Optimize and Analyze Performance",
      duration: "Finalization",
      icon: <FaCheckCircle className="text-2xl" />,
      description: "We do more than just report failures. Our team identifies bottlenecks and monitors resource usage to optimize your system, offering tips for code and infrastructure tuning.",
      activities: [
        "Bottleneck Identification",
        "Resource Usage Monitoring",
        "Code/Infras Tuning Support",
        "Detailed Performance Data Analysis"
      ],
      nextStep: "Process Complete"
    }
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Step-by-Step <span className="text-brand-blue">QA Methodology</span>: The Testriq Performance Framework
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our system performance evaluation follows a rigorous, five-stage process designed for maximum transparency and technical depth.
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

