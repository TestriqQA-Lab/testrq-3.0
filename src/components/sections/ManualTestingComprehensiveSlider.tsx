"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaUser, FaEye, FaCheckCircle, FaBug, FaClipboardCheck, FaHandPaper, FaFlask } from "react-icons/fa";

const ManualTestingComprehensiveSlider: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const testingTypes = [
    {
      id: "functional-testing",
      title: "Functional Testing",
      icon: <FaCheckCircle className="text-2xl" />,
      percentage: "98%",
      color: "blue",
      description: "Comprehensive validation of application functionality against business requirements",
      features: [
        "Business logic validation to ensure alignment with core requirements",
        "Feature functionality testing for end-to-end use case coverage",
        "Input/output verification to confirm accurate data handling",
        "Error handling validation for robust system behavior",
        "Workflow testing across user journeys and process flows",
        "Data integrity checks to maintain consistency and reliability"
      ],
      action: "blog/post/functional-testing-in-manual-testing-use-cases-techniques-best-practices"
    },
    {
      id: "usability-testing",
      title: "Usability Testing",
      icon: <FaEye className="text-2xl" />,
      percentage: "95%",
      color: "purple",
      description: "Human-centered evaluation of user interface design and user experience",
      features: [
        "Interface design evaluation",
        "Navigation flow testing",
        "User journey optimization",
        "Accessibility compliance",
        "Mobile responsiveness",
        "User feedback analysis"
      ],
      action: "blog/post/usability-testing-in-manual-testing-use-cases-techniques"
    },
    {
      id: "exploratory-testing",
      title: "Exploratory Testing",
      icon: <FaBug className="text-2xl" />,
      percentage: "92%",
      color: "green",
      description: "Unscripted testing to discover unexpected issues and edge cases",
      features: [
        "Creative test scenarios",
        "Edge case discovery",
        "Boundary value testing",
        "Error condition exploration",
        "User behavior simulation",
        "Risk-based investigation"
      ],
      action: "/exploratory-testing"
    },
    {
      id: "user-acceptance-testing",
      title: "User Acceptance Testing",
      icon: <FaUser className="text-2xl" />,
      percentage: "97%",
      color: "orange",
      description: "End-user validation to ensure software meets business requirements",
      features: [
        "Business requirement validation",
        "End-user scenario testing",
        "Acceptance criteria verification",
        "Production readiness assessment",
        "Stakeholder sign-off",
        "Go-live preparation"
      ],
      action: "blog/post/user-acceptance-testing-in-manual-testing-use-cases-techniques"
    },
    {
      id: "compatibility-testing",
      title: "Compatibility Testing",
      icon: <FaClipboardCheck className="text-2xl" />,
      percentage: "94%",
      color: "teal",
      description: "Cross-platform testing for consistent functionality across environments",
      features: [
        "Cross-browser testing",
        "Operating system compatibility",
        "Device compatibility",
        "Version compatibility",
        "Integration testing",
        "Environment validation"
      ],
      action: "blog/post/a-complete-guide-to-compatibility-testing-in-manual-software-qa"
    },
    {
      id: "accessibility-testing",
      title: "Accessibility Testing",
      icon: <FaHandPaper className="text-2xl" />,
      percentage: "96%",
      color: "indigo",
      description: "Comprehensive accessibility evaluation for inclusive user experiences",
      features: [
        "WCAG compliance testing",
        "Screen reader compatibility",
        "Keyboard navigation testing",
        "Color contrast validation",
        "Alternative text verification",
        "Assistive technology support"
      ],
      action: "blog/post/accessibility-testing-in-manual-testing-use-cases-techniques"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; border: string } } = {
      blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
      purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
      green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200" },
      orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200" },
      teal: { bg: "bg-teal-50", text: "text-teal-600", border: "border-teal-200" },
      indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200" }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaFlask />
            <span className="text-sm">
              Comprehensive Testing Solutions
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Manual Testing <span className="text-brand-blue">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our <Link href='blog/post/accessibility-testing-in-manual-testing-use-cases-techniques'>comprehensive manual testing services</Link> built to ensure <Link href='blog/post/the-future-of-software-testing-embracing-the-trends-of-2024-and-beyond'>exceptional software quality</Link> through <Link href='blog/post/the-future-of-manual-testing-adapting-in-an-automated-world'>human-centered testing</Link> approaches, including <Link href='blog/post/functional-testing-in-manual-testing-use-cases-techniques-best-practices'>functional testing</Link>, <Link href='blog/post/usability-testing-in-manual-testing-use-cases-techniques'>usability testing</Link>, exploratory testing, and <Link href='blog/post/user-acceptance-testing-in-manual-testing-use-cases-techniques'>UAT-executed</Link> by ISTQB-certified experts.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex flex-wrap border-b border-gray-200">
            {testingTypes.map((type, index) => {
              const colors = getColorClasses(type.color);
              return (
                <button
                  key={type.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex-1 min-w-0 px-4 py-4 text-sm font-medium transition-all duration-300 ${
                    activeTab === index
                      ? `${colors.bg} ${colors.text} border-b-2 ${colors.border}`
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex sm:flex-col flex-row items-center justify-center space-x-2">
                    <span className={activeTab === index ? colors.text : "text-gray-400"}>
                      {type.icon}
                    </span>
                    <span className="hidden sm:inline">{type.title}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {testingTypes.map((type, index) => {
              const colors = getColorClasses(type.color);
              return (
                <div
                  key={type.id}
                  className={`${activeTab === index ? "block" : "hidden"} transition-all duration-300`}
                >
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center`}>
                          <span className={colors.text}>{type.icon}</span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{type.title}</h3>
                          <div className="flex items-center space-x-2 mt-2">
                            <span className="text-sm text-gray-600">Success Rate:</span>
                            <span className={`text-lg font-bold ${colors.text}`}>{type.percentage}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {type.description}
                      </p>
                      <Link href={testingTypes[activeTab].action} className="bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                        Explore {testingTypes[activeTab].title}
                      </Link>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features & Capabilities</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {type.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <div className={`w-2 h-2 bg-gray-400 rounded-full`}></div>
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManualTestingComprehensiveSlider;

