"use client";

import React, { useState } from "react";
import {
  FaSearch,
  FaRoute,
  FaLightbulb,
  FaBug,
  FaFileAlt,
} from "react-icons/fa";

const ExploratoryProvenTestingProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Charter Definition & Planning",
      duration: "30-60 minutes",
      icon: <FaSearch className="text-2xl" />,
      description:
        "Define exploration objectives, scope, and testing charters to guide systematic investigation.",
      activities: [
        "Charter creation and refinement",
        "Risk area identification",
        "Testing persona selection",
        "Session time allocation",
      ],
      nextStep: "Session Execution",
    },
    {
      id: 2,
      title: "Exploratory Session Execution",
      duration: "2-4 hours",
      icon: <FaRoute className="text-2xl" />,
      description:
        "Conduct structured exploration sessions using defined charters and systematic investigation techniques.",
      activities: [
        "Charter-guided exploration",
        "Real-time note taking",
        "Bug discovery and documentation",
        "User journey mapping",
      ],
      nextStep: "Analysis & Insights",
    },
    {
      id: 3,
      title: "Analysis & Insights Generation",
      duration: "1-2 hours",
      icon: <FaLightbulb className="text-2xl" />,
      description:
        "Analyze findings, identify patterns, and generate actionable insights from exploration sessions.",
      activities: [
        "Session data analysis",
        "Pattern identification",
        "Risk assessment",
        "Insight generation",
      ],
      nextStep: "Bug Reporting",
    },
    {
      id: 4,
      title: "Bug Reporting & Documentation",
      duration: "1-2 hours",
      icon: <FaBug className="text-2xl" />,
      description:
        "Document discovered issues with detailed reproduction steps and impact assessment.",
      activities: [
        "Bug report creation",
        "Reproduction step documentation",
        "Impact and severity assessment",
        "Evidence collection",
      ],
      nextStep: "Recommendations",
    },
    {
      id: 5,
      title: "Recommendations & Follow-up",
      duration: "30-60 minutes",
      icon: <FaFileAlt className="text-2xl" />,
      description:
        "Provide actionable recommendations and plan follow-up exploration sessions if needed.",
      activities: [
        "Improvement recommendations",
        "Priority assessment",
        "Follow-up planning",
        "Knowledge sharing",
      ],
      nextStep: "Complete",
    },
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Proven Exploratory Testing{" "}
            <span className="text-brand-blue">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our investigation-driven QA approach blends structured exploration
            with creative investigation techniques to ensure comprehensive
            coverage and maximum issue discovery across all application areas.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeStep === step.id
                  ? "bg-green-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <span className="text-2xl">{step.id}</span>
              <span className="hidden sm:inline">{step.title}</span>
            </button>
          ))}
        </div>

        {/* Active Step Content */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-4 md:p-8 mb-12">
          <div className="grid justify-center lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-green-600 w-16 h-16 rounded-xl flex items-center justify-center text-white">
                  {steps[activeStep - 1].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {steps[activeStep - 1].title}
                  </h3>
                  <p className="text-green-600 font-medium">
                    Duration: {steps[activeStep - 1].duration}
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                {steps[activeStep - 1].description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Key Activities:
                </h4>
                <div className="space-y-3">
                  {steps[activeStep - 1].activities.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {activeStep < steps.length && (
                <div className="flex items-center space-x-3 text-green-600">
                  <span className="font-medium">Next Step</span>
                  <span>{steps[activeStep - 1].nextStep}</span>
                  <FaRoute className="text-sm" />
                </div>
              )}
            </div>

            {/* Right Content - Process Visualization */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-6 text-center">
                Exploratory Testing Workflow
              </h4>

              {/* Timeline Visualization */}
              <div className="space-y-4">
                {steps.map((step) => (
                  <div
                    onClick={() => setActiveStep(step.id)}
                    key={step.id}
                    className={`w-full flex items-center space-x-4 p-3 cursor-pointer rounded-lg transition-all duration-300 ${
                      step.id === activeStep
                        ? "bg-green-100 border-2 border-green-300"
                        : step.id < activeStep
                        ? "bg-blue-50 border-2 border-blue-200"
                        : "bg-gray-50 border-2 border-gray-200"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                        step.id === activeStep
                          ? "bg-green-600 text-white"
                          : step.id < activeStep
                          ? "bg-blue-600 text-white"
                          : "bg-gray-300 text-gray-600"
                      }`}
                    >
                      {step.id < activeStep ? "✓" : step.id}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 text-sm">
                        {step.title}
                      </div>
                      <div className="text-xs text-gray-600">
                        {step.duration}
                      </div>
                    </div>
                    {step.id === activeStep && (
                      <div className="text-green-600 animate-pulse">
                        {steps[activeStep - 1].icon}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Progress Summary */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Overall Progress</span>
                  <span className="text-green-600 font-medium">
                    {Math.round((activeStep / steps.length) * 100)}% Complete
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-green-600 to-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(activeStep / steps.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Session Metrics */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="text-center p-2 bg-white rounded">
                  <div className="text-lg font-bold text-green-600">2-4hr</div>
                  <div className="text-xs text-gray-600">Session Length</div>
                </div>
                <div className="text-center p-2 bg-white rounded">
                  <div className="text-lg font-bold text-blue-600">95%</div>
                  <div className="text-xs text-gray-600">Issue Discovery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploratoryProvenTestingProcess;
