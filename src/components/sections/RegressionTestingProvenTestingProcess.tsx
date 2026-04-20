"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaClipboardList, FaCodeBranch, FaPlay, FaChartLine, FaCheckCircle } from "react-icons/fa";

const RegressionTestingProvenTestingProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Plan and Analyze Risks",
      duration: "Foundational",
      icon: <FaClipboardList className="text-2xl" />,
      description: "We begin by identifying critical endpoints and business-critical flows. Following ISO 29119-2, we analyze the impact of recent code changes to define the optimal regression scope.",
      activities: [
        "Identify Critical Endpoints",
        "Business-Critical Flow Analysis",
        "ISO 29119-2 Impact Assessment",
        "Optimal Scope Definition"
      ],
      nextStep: "Test Case Priorities"
    },
    {
      id: 2,
      title: "Test Case set priorities & Selection",
      duration: "Strategic",
      icon: <FaCodeBranch className="text-2xl" />,
      description: "Using Regression Test Selection (RTS) techniques, we categorize cases into high, medium, and low priority. We test the most vital features first in every cycle.",
      activities: [
        "RTS Categorization",
        "High/Medium/Low Triage",
        "Critical Path Prioritization",
        "Optimized Suite Selection"
      ],
      nextStep: "Script Maintenance"
    },
    {
      id: 3,
      title: "Automated Script Maintenance",
      duration: "Technical",
      icon: <FaPlay className="text-2xl" />,
      description: <>One of the biggest hurdles is test script maintenance. We utilize modular frameworks to ensure that when your UI changes, your <Link href="/automation-testing-services" className="text-brand-blue hover:underline decoration-brand-blue">automated regression testing scripts</Link> don&apos;t break.</>,
      activities: [
        "Modular Framework Setup",
        "UI Change Impact Check",
        "Script Resilience Updates",
        "Self-Healing Mechanisms"
      ],
      nextStep: "Execution & CI/CD"
    },
    {
      id: 4,
      title: "Execution & CI/CD Integration",
      duration: "Continuous",
      icon: <FaChartLine className="text-2xl" />,
      description: <>We integrate directly into your <Link href="/automation-testing-services" className="text-brand-blue hover:underline decoration-brand-blue">CI/CD pipelines</Link> (Jenkins, GitHub Actions, Azure DevOps). This enables continuous regression testing, providing instant feedback to developers.</>,
      activities: [
        "Pipeline Integration (Jenkins/GH)",
        "Automated Execution Triggers",
        "Real-time Developer Feedback",
        "Continuous Quality Gates"
      ],
      nextStep: "Defect Re-testing"
    },
    {
      id: 5,
      title: "Defect Re-testing & Reporting",
      duration: "Finalization",
      icon: <FaCheckCircle className="text-2xl" />,
      description: "Our team re-tests every defect to confirm the fix. We then execute a wider regression run to guarantee that the repair caused no unintended side effects.",
      activities: [
        "Bug Fix Confirmation",
        "Wider Regression Run",
        "Side-Effect Analysis",
        "Detailed Quality Reports"
      ],
      nextStep: "Process Complete"
    }
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Step-by-Step <span className="text-brand-blue">QA Methodology</span>: The Testriq Way
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our regression process follows the latest industry best practices. This ensures system stability as your code and requirements evolve.
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
            <Link href="/contact-us">
              <button className="bg-brand-blue cursor-pointer text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Start Your Regression Testing
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegressionTestingProvenTestingProcess;
