"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaSyncAlt, FaBug, FaCheckCircle, FaCodeBranch, FaChartLine, FaCloud, FaFlask } from "react-icons/fa";

const RegressionTestingComprehensiveSlider: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const regressionTypes = [
    {
      id: "automated-regression",
      title: "Automated Regression",
      icon: <FaSyncAlt className="text-2xl" />,
      percentage: "95%",
      color: "blue",
      description: "Automated regression testing for rapid and consistent validation",
      features: [
        "Automated test suite execution",
        "Continuous integration support",
        "Parallel test execution",
        "Self-healing test scripts",
        "Comprehensive reporting",
        "Cross-browser validation"
      ],
      action: "/automated-regression-testing-faster-smarter-qa-cycles"
    },
    {
      id: "manual-regression",
      title: "Manual Regression",
      icon: <FaBug className="text-2xl" />,
      percentage: "98%",
      color: "purple",
      description: "Strategic manual regression testing for critical scenarios",
      features: [
        "Exploratory regression testing",
        "User experience validation",
        "Edge case identification",
        "Visual regression testing",
        "Usability impact assessment",
        "Business workflow validation"
      ],
      action: "/manual-regression-testing-which-to-choose"
    },
    {
      id: "continuous-regression",
      title: "Continuous Regression",
      icon: <FaCheckCircle className="text-2xl" />,
      percentage: "92%",
      color: "green",
      description: "Continuous regression testing integrated with development workflows",
      features: [
        "CI/CD pipeline integration",
        "Automated trigger mechanisms",
        "Real-time feedback loops",
        "Build validation testing",
        "Deployment verification",
        "Quality gate enforcement"
      ],
      action: "/continuous-regression-testing-ensuring-quality-in-agile-devops"
    },
    {
      id: "impact-analysis",
      title: "Impact Analysis",
      icon: <FaCodeBranch className="text-2xl" />,
      percentage: "96%",
      color: "orange",
      description: "Intelligent impact analysis for optimized regression testing",
      features: [
        "Change impact assessment",
        "Test case prioritization",
        "Risk-based test selection",
        "Code coverage analysis",
        "Dependency mapping",
        "Regression scope optimization"
      ],
      action: "/regression-impact-analysis-optimizing-test-coverage"
    },
    {
      id: "risk-based-regression",
      title: "Risk-Based Testing",
      icon: <FaChartLine className="text-2xl" />,
      percentage: "94%",
      color: "teal",
      description: "Risk-based approach to regression testing for maximum efficiency",
      features: [
        "Risk assessment matrix",
        "Critical path identification",
        "Business impact analysis",
        "Failure probability scoring",
        "Resource optimization",
        "Strategic test planning"
      ],
      action: "/risk-based-regression-testing-smarter-test-optimization"
    },
    {
      id: "cross-platform-regression",
      title: "Cross-Platform Testing",
      icon: <FaCloud className="text-2xl" />,
      percentage: "93%",
      color: "indigo",
      description: "Cross-platform regression testing for comprehensive coverage",
      features: [
        "Multi-browser testing",
        "Cross-device validation",
        "Operating system compatibility",
        "Mobile platform testing",
        "Cloud-based execution",
        "Environment consistency"
      ],
      action: "/cross-platform-regression-testing-ensuring-consistency-across-devices-os"
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
            Regression Testing <span className="text-brand-blue">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our risk-based regression testing services tailored to safeguard software stability, prevent defects in critical workflows, and enable rapid, reliable releases through intelligent automation and continuous integration pipelines.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex flex-wrap border-b border-gray-200">
            {regressionTypes.map((type, index) => {
              const colors = getColorClasses(type.color);
              return (
                <button
                  key={type.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex-1 min-w-0 px-4 py-4 text-sm font-medium transition-all duration-300 ${activeTab === index
                      ? `${colors.bg} ${colors.text} border-b-2 ${colors.border}`
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                >
                  <div className="flex items-center justify-center space-x-2">
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
            {regressionTypes.map((type, index) => {
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
                      <Link href={`blog/post${regressionTypes[activeTab].action}`} className="bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                        Learn More
                      </Link>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features & Capabilities</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {type.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <div className={`w-2 h-2 ${colors.bg} rounded-full`}></div>
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

export default RegressionTestingComprehensiveSlider;

