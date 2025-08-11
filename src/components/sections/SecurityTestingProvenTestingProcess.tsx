"use client";

import Link from "next/link";
import React from "react";
import {
  FaShieldAlt,
  FaSearch,
  FaBug,
  FaFileAlt,
  FaCheckCircle,
} from "react-icons/fa";

const SecurityTestingProvenTestingProcess: React.FC = () => {
  const processSteps = [
    {
      id: 1,
      title: "Security Assessment Planning",
      duration: "1-2 days",
      icon: <FaShieldAlt className="text-2xl" />,
      description:
        "Comprehensive security assessment planning including threat modeling, attack surface analysis, and security testing strategy definition.",
      activities: [
        "Threat modeling and risk assessment",
        "Attack surface identification",
        "Security testing scope definition",
        "Compliance requirements analysis",
      ],
      nextStep: "Reconnaissance & Information Gathering",
      color: "red",
    },
    {
      id: 2,
      title: "Reconnaissance & Information Gathering",
      duration: "2-3 days",
      icon: <FaSearch className="text-2xl" />,
      description:
        "Systematic information gathering and reconnaissance to understand the target application architecture and identify potential entry points.",
      activities: [
        "Application fingerprinting",
        "Technology stack identification",
        "Network topology mapping",
        "Public information gathering",
      ],
      nextStep: "Vulnerability Assessment",
      color: "orange",
    },
    {
      id: 3,
      title: "Vulnerability Assessment",
      duration: "3-5 days",
      icon: <FaBug className="text-2xl" />,
      description:
        "Comprehensive vulnerability scanning and assessment using automated tools and manual testing techniques to identify security weaknesses.",
      activities: [
        "Automated vulnerability scanning",
        "Manual security testing",
        "Configuration review",
        "Weakness identification and validation",
      ],
      nextStep: "Penetration Testing",
      color: "blue",
    },
    {
      id: 4,
      title: "Penetration Testing",
      duration: "5-7 days",
      icon: <FaBug className="text-2xl" />,
      description:
        "Ethical hacking and penetration testing to exploit identified vulnerabilities and demonstrate real-world attack scenarios.",
      activities: [
        "Exploitation of identified vulnerabilities",
        "Privilege escalation testing",
        "Lateral movement simulation",
        "Data exfiltration testing",
      ],
      nextStep: "Security Analysis & Reporting",
      color: "purple",
    },
    {
      id: 5,
      title: "Security Analysis & Reporting",
      duration: "2-3 days",
      icon: <FaFileAlt className="text-2xl" />,
      description:
        "Comprehensive security analysis with detailed reporting, risk assessment, and actionable remediation recommendations.",
      activities: [
        "Risk assessment and CVSS scoring",
        "Business impact analysis",
        "Detailed security report generation",
        "Remediation recommendations",
      ],
      nextStep: "Remediation Support",
      color: "green",
    },
    {
      id: 6,
      title: "Remediation Support & Validation",
      duration: "Ongoing",
      icon: <FaCheckCircle className="text-2xl" />,
      description:
        "Ongoing support for vulnerability remediation with validation testing to ensure security issues are properly addressed.",
      activities: [
        "Remediation guidance and support",
        "Fix validation testing",
        "Security improvement recommendations",
        "Continuous security monitoring",
      ],
      nextStep: "Complete",
      color: "indigo",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap: {
      [key: string]: {
        bg: string;
        text: string;
        border: string;
        accent: string;
      };
    } = {
      red: {
        bg: "bg-red-50",
        text: "text-red-600",
        border: "border-red-200",
        accent: "bg-red-600",
      },
      orange: {
        bg: "bg-orange-50",
        text: "text-orange-600",
        border: "border-orange-200",
        accent: "bg-orange-600",
      },
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-200",
        accent: "bg-blue-600",
      },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200",
        accent: "bg-purple-600",
      },
      green: {
        bg: "bg-green-50",
        text: "text-green-600",
        border: "border-green-200",
        accent: "bg-green-600",
      },
      indigo: {
        bg: "bg-indigo-50",
        text: "text-indigo-600",
        border: "border-indigo-200",
        accent: "bg-indigo-600",
      },
    };
    return colorMap[color] || colorMap.red;
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Proven{" "}
            <span className="text-brand-blue">Security Testing Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our systematic security testing process ensures comprehensive
            evaluation of application security, vulnerability identification,
            and effective remediation to protect against cyber threats and
            maintain the highest security standards, including regulatory
            compliance and data protection.
          </p>
        </div>

        <div className="space-y-8">
          {processSteps.map((step, index) => {
            const colors = getColorClasses(step.color);
            const isLast = index === processSteps.length - 1;

            return (
              <div key={step.id} className="relative">
                {/* Connector Line */}
                {!isLast && (
                  <div className="absolute left-8 top-20 w-0.5 h-16 bg-gray-200 z-0"></div>
                )}

                <div
                  className={`${colors.bg} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 relative z-10`}
                >
                  <div className="grid lg:grid-cols-3 gap-8 items-start">
                    {/* Left Column - Step Info */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <div
                          className={`${colors.accent} w-16 h-16 rounded-2xl flex items-center justify-center`}
                        >
                          <span className="text-white">{step.icon}</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-500 mb-1">
                            Step {step.id}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      <div
                        className={`${colors.text} font-semibold text-lg mb-4`}
                      >
                        {step.duration}
                      </div>

                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Middle Column - Activities */}
                    <div className="lg:col-span-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Key Activities:
                      </h4>
                      <div className="space-y-3">
                        {step.activities.map((activity, activityIndex) => (
                          <div
                            key={activityIndex}
                            className="flex items-start space-x-3"
                          >
                            <div
                              className={`${colors.accent} w-2 h-2 rounded-full mt-2 flex-shrink-0`}
                            ></div>
                            <span className="text-gray-700 text-sm">
                              {activity}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Column - Next Step */}
                    <div className="lg:col-span-1">
                      <div className="bg-white p-6 rounded-xl border-2 border-gray-100">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          {step.nextStep === "Complete"
                            ? "Process Complete"
                            : `Next: ${step.nextStep}`}
                        </h4>

                        {step.nextStep === "Complete" ? (
                          <div className="space-y-3">
                            <div className="flex items-center space-x-2">
                              <FaCheckCircle className="text-green-600" />
                              <span className="text-sm text-gray-600">
                                Security assessment complete
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <FaCheckCircle className="text-green-600" />
                              <span className="text-sm text-gray-600">
                                Comprehensive security report delivered
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <FaCheckCircle className="text-green-600" />
                              <span className="text-sm text-gray-600">
                                Ongoing security support available
                              </span>
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-3">
                            <div className="text-sm text-gray-600">
                              Upon completion of this phase, we proceed to the
                              next step in our comprehensive security testing
                              process.
                            </div>
                            <div
                              className={`${colors.text} font-medium text-sm`}
                            >
                              Seamless transition to {step.nextStep}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Summary */}
        <div className="mt-16 bg-gray-100 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Security Testing Process Benefits
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our proven security testing process ensures comprehensive
              protection against cyber threats while maintaining compliance with
              industry security standards such as ISO 27001, PCI DSS, and HIPAA,
              and aligning with secure code practices and industry best
              practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">🛡️</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Comprehensive Protection
              </h4>
              <p className="text-sm text-gray-600">
                Complete security coverage across all application layers and
                components
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">🔍</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Thorough Analysis
              </h4>
              <p className="text-sm text-gray-600">
                Deep security analysis with both automated and manual testing
                approaches
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">📋</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Detailed Reporting
              </h4>
              <p className="text-sm text-gray-600">
                Comprehensive reports with actionable remediation
                recommendations
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">🔄</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Continuous Support
              </h4>
              <p className="text-sm text-gray-600">
                Ongoing security support and validation throughout the
                remediation process
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Security Testing Journey?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our proven security testing process ensures comprehensive
              protection and compliance for your applications.
            </p>
            <Link href="/contact-us">
              <button className="bg-brand-blue cursor-pointer text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                Start Security Assessment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityTestingProvenTestingProcess;
