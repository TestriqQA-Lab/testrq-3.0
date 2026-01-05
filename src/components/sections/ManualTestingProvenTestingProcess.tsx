"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaSitemap,
  FaRoute,
  FaPencilRuler,
  FaServer,
  FaRunning,
  FaChartPie,
} from "react-icons/fa";

const ManualTestingProvenTestingProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Smart Requirement Mapping",
      duration: "Step 1",
      icon: <FaSitemap className="text-2xl" />,
      description:
        "We track every manual test back to your original requirements. Our matrix ensures we cover every feature, leaving no room for hidden bugs or gaps.",
      activities: [
        "Requirement traceability matrix (RTM) setup",
        "Feature-by-feature coverage mapping",
        "Requirement ambiguity identification",
        "Business-logic validation markers",
      ],
      nextStep: "Strategic Test Planning",
    },
    {
      id: 2,
      title: "Strategic Test Planning",
      duration: "Step 2",
      icon: <FaRoute className="text-2xl" />,
      description:
        "We target the areas where a bug would cause the most damage. This ISO-standard approach ensures we spend your testing budget where it provides the greatest value.",
      activities: [
        "Risk-based testing prioritization",
        "ISO 29119-2 standard strategy alignment",
        "Budget and resource optimization",
        "Critical path and dependency analysis",
      ],
      nextStep: "Structured Test Design",
    },
    {
      id: 3,
      title: "Structured Test Design (ISO 29119-4)",
      duration: "Step 3",
      icon: <FaPencilRuler className="text-2xl" />,
      description:
        "We use proven methods like \"Error Guessing\" and \"Boundary Testing.\" These techniques help our team find the hidden bugs that automated tools often miss.",
      activities: [
        "Error Guessing & Boundary Testing implementation",
        "ISO 29119-4 advanced design techniques",
        "Complex user journey scenario building",
        "UI/UX manual edge case documentation",
      ],
      nextStep: "Test Environment & Data Management",
    },
    {
      id: 4,
      title: "Test Environment & Data Management",
      duration: "Step 4",
      icon: <FaServer className="text-2xl" />,
      description:
        "We simulate production-like micro-services and global user conditions to ensure reliability.",
      activities: [
        "Production-like environment simulation",
        "Micro-services interaction staging",
        "Global production test data mimicking",
        "Hardware and connectivity condition testing",
      ],
      nextStep: "Structured Testing & Regression",
    },
    {
      id: 5,
      title: "Structured Testing & Regression",
      duration: "Step 5",
      icon: <FaRunning className="text-2xl" />,
      description:
        "We work in sprints to stay in sync with your Agile and DevOps teams. This approach ensures our manual execution never slows down your development.",
      activities: [
        "Sprint-aligned manual execution",
        "Agile & DevOps team synchronization",
        "Continuous regression testing cycles",
        "Exploratory session-based testing",
      ],
      nextStep: "Metric-Driven Reporting",
    },
    {
      id: 6,
      title: "Metric-Driven Reporting",
      duration: "Step 6",
      icon: <FaChartPie className="text-2xl" />,
      description:
        "Clear, standardized documentation on defect density, test progress, and risk assessment.",
      activities: [
        "Defect density and leakage metrics",
        "ISO-standardized progress reporting",
        "Stakeholder risk assessment data",
        "Quality gate performance analysis",
      ],
      nextStep: "Process Complete",
    },
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Step-by-Step <span className="text-brand-blue">Manual QA</span> Methodology
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our approach extends far beyond basic bug detection. We follow a rigorous, technical methodology designed for high-difficulty software environments.
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
                  <span className="text-brand-blue font-bold text-lg flex justify-center pt-1">
                    {step.id}
                  </span>
                </div>

                {/* Step Content */}
                <div className={`w-full lg:w-5/12`}>
                  <div
                    className={`bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${activeStep === step.id ? "ring-2 ring-brand-blue" : ""
                      }`}
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-brand-blue w-12 h-12 rounded-xl flex items-center justify-center">
                        <span className="text-white">{step.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                        <span className="text-sm text-brand-blue font-medium">
                          {step.duration}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed flex justify-items-start">
                      {step.description}
                    </p>

                    {/* Activities */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Key Activities:
                      </h4>
                      {step.activities.map((activity, activityIndex) => (
                        <div
                          key={activityIndex}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                          <span className="text-sm text-gray-600">
                            {activity}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Next Step Indicator */}
                    {step.nextStep !== "Process Complete" && (
                      <div className="mt-6 pt-4 border-t border-gray-200">
                        <span className="text-sm text-gray-500">Next: </span>
                        <span className="text-sm font-medium text-brand-blue">
                          {step.nextStep}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Mobile Step Number */}
                <div className="lg:hidden w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">
                    {step.id}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Manual Testing Journey?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our proven process ensures comprehensive testing coverage and
              reliable results for your software projects.
            </p>
            <Link href="/contact-us">
              <button className="bg-brand-blue cursor-pointer text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Start Your Project
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManualTestingProvenTestingProcess;
