"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaShieldAlt,
  FaCode,
  FaFlask,
  FaMobileAlt,
  FaCloud,
} from "react-icons/fa";

const SecurityTestingComprehensiveSlider: React.FC = () => {
  const [activeTab, setActiveTab] = useState("vapt-services");

  const securityTabs = [
    {
      id: "vapt-services",
      title: "VAPT Services",
      icon: <FaShieldAlt className="text-2xl" />,
      color: "red",
      description: "End-to-end Vulnerability Assessment and Penetration Testing (VAPT) to identify and fix system weaknesses before breaches occur.",
      features: [
        {
          title: "Infrastructure Penetration Testing",
          description: "Simulating real-world attacks to identify and exploit vulnerabilities across your network and servers.",
          metrics: "CEH & OSCP Certified",
        },
        {
          title: "System Weakness Scanning",
          description: "Automated and manual assessments to find known vulnerabilities, including open-source flaws.",
          metrics: "99.8% Threat Detection",
        },
        {
          title: "Risk-Based Prioritization",
          description: "Ranking security gaps based on CVSS scores and business impact for prioritized remediation.",
          metrics: "Actionable Insights",
        },
        {
          title: "Re-testing & Verification",
          description: "Verifying that all high-risk gaps are closed after security repairs are implemented.",
          metrics: "Certified Closure",
        },
      ],
    },
    {
      id: "application-security",
      title: "Application Security Testing (AST)",
      icon: <FaCode className="text-2xl" />,
      color: "blue",
      description: "Comprehensive protection for web and SaaS platforms against OWASP Top 10 and evolving digital threats.",
      features: [
        {
          title: "SAST & Source Code Review",
          description: "Analyzing source code to find SQL Injection (SQLi) and XSS vulnerabilities before deployment.",
          metrics: "Code-level Security",
        },
        {
          title: "DAST & Dynamic Testing",
          description: "Simulating attacks on running applications to identify security gaps in a live environment.",
          metrics: "Real-world Simulation",
        },
        {
          title: "SCA & Dependency Check",
          description: "Evaluating open-source libraries and third-party components for known vulnerabilities.",
          metrics: "Supply Chain Security",
        },
        {
          title: "Business Logic Analysis",
          description: "Identifying flaws in functional workflows that could be exploited for unauthorized access.",
          metrics: "Logic Gap Neutralization",
        },
      ],
    },
    {
      id: "mobile-security",
      title: "Mobile Security Reviews",
      icon: <FaMobileAlt className="text-2xl" />,
      color: "purple",
      description: <>Deep ethical hacking for iOS and Android, providing more insight than standard integration scans. Our <Link href="/mobile-application-testing" className="text-brand-blue hover:underline decoration-brand-blue">Mobile Security Reviews</Link> ensure app safety.</>,
      features: [
        {
          title: "iOS Security Testing",
          description: "Specialized reviews for Apple platforms, including manual ethical hacking depth.",
          metrics: "Beyond Auto-scans",
        },
        {
          title: "Android Vulnerability Audit",
          description: "Comprehensive analysis of Android app security, including intent and permission reviews.",
          metrics: "Device-specific Experts",
        },
        {
          title: "Local Data Exposure review",
          description: "Ensuring PII and sensitive data are not leaked through local storage or logs.",
          metrics: "GDPR Compliant",
        },
        {
          title: "Reverse Engineering Defense",
          description: "Evaluating how your application stands up against automated exploitation and side-loading.",
          metrics: "Hardened Reliability",
        },
      ],
    },
    {
      id: "api-security",
      title: "API Security Testing",
      icon: <FaShieldAlt className="text-2xl" />,
      color: "green",
      description: <>Securing the primary attack vector of modern micro-services against rising global threats. Our <Link href="/api-testing-services" className="text-brand-blue hover:underline decoration-brand-blue">API Security Testing</Link> protects your data.</>,
      features: [
        {
          title: "OWASP API Top 10",
          description: "Targeting the specific vulnerabilities that affect REST, SOAP, and GraphQL APIs.",
          metrics: "99% Incident Defense",
        },
        {
          title: "Broken Object Level Auth",
          description: "Ensuring users can only access their own data through API endpoints.",
          metrics: "Auth & AuthZ Validation",
        },
        {
          title: "Rate-limiting Thresholds",
          description: "Testing API resilience against automated social engineering and exploitation.",
          metrics: "AI-Driven Attack Defense",
        },
        {
          title: "Sensitive Data Filtering",
          description: "Verifying that APIs do not expose excessive data in their responses.",
          metrics: "PII Masking",
        },
      ],
    },
    {
      id: "cloud-security",
      title: "Cloud & SaaS Audit",
      icon: <FaCloud className="text-2xl" />,
      color: "teal",
      description: "Securing high-growth SaaS platforms and complex cloud infrastructure against mis-configurations.",
      features: [
        {
          title: "Container & Kubernetes Audit",
          description: "Securing the orchestration layer to prevent lateral movement after an initial breach.",
          metrics: "Modern Stack Security",
        },
        {
          title: "Cloud Mis-configuration Check",
          description: "Identifying open S3 buckets, insecure IAM roles, and VPC configuration flaws.",
          metrics: "Infrastructure Hardening",
        },
        {
          title: "Multi-tenancy Stability",
          description: "Ensuring data isolation between customers in complex SaaS environments.",
          metrics: "SaaS Resilience",
        },
        {
          title: "Shift-Left Security",
          description: "Integrating automated security testing into Jenkins, GitLab, or GitHub workflows.",
          metrics: "CI/CD Ready",
        },
      ],
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
      green: {
        bg: "bg-green-50",
        text: "text-green-600",
        border: "border-green-200",
        accent: "bg-green-600",
      },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200",
        accent: "bg-purple-600",
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

  const activeTabData = securityTabs.find((tab) => tab.id === activeTab);

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaFlask />
            <span className="text-sm">Comprehensive Testing Solutions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Security Testing <span className="text-brand-blue">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore our comprehensive security testing services designed to
            protect your applications from{" "}
            <Link href="/blog/post/advanced-security-testing-for-healthcare-apps-protecting-patient-data-from-cyber-threats">
              cyber threats
            </Link>
            , ensure compliance with security standards like GDPR,{" "}
            <Link href="/blog/post/what-is-hipaa-compliance-testing-ensuring-phi-protection-for-healthcare-apps">
              HIPAA
            </Link>
            , and PCI DSS, and maintain the highest levels of{" "}
            <Link href="/blog/post/game-security-testing-protecting-your-game-from-hacks-cheats-and-data-breaches">
              data protection
            </Link>{" "}
            and user trust.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {securityTabs.map((tab) => {
            const colors = getColorClasses(tab.color);
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`p-4 rounded-xl text-center transition-all duration-300 ${activeTab === tab.id
                  ? `${colors.bg} ${colors.text} ${colors.border} border-2 shadow-lg`
                  : "bg-white text-gray-600 border-2 border-gray-200 hover:border-gray-300 hover:shadow-md"
                  }`}
              >
                <div className="flex flex-col items-center space-y-2">
                  <span
                    className={
                      activeTab === tab.id ? colors.text : "text-gray-400"
                    }
                  >
                    {tab.icon}
                  </span>
                  <span className="text-sm font-medium">{tab.title}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Tab Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {activeTabData && (
            <div className="p-8 md:p-12">
              <div className="flex items-center space-x-4 mb-8">
                <div
                  className={`${getColorClasses(activeTabData.color).accent
                    } w-16 h-16 px-2 rounded-full md:rounded-2xl flex items-center justify-center`}
                >
                  <span className="text-white">{activeTabData.icon}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {activeTabData.title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {activeTabData.description}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {activeTabData.features.map((feature, index) => {
                  const colors = getColorClasses(activeTabData.color);
                  return (
                    <div
                      key={index}
                      className={`${colors.bg} p-6 rounded-xl hover:shadow-lg transition-all duration-300`}
                    >
                      <div className="flex items-start space-x-4">
                        <div
                          className={`${colors.accent} w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1`}
                        >
                          <span className="text-white text-sm font-bold">
                            {index + 1}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">
                            {feature.title}
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed mb-3">
                            {feature.description}
                          </p>
                          <div className={`${colors.text} font-bold text-sm`}>
                            {feature.metrics}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Success Rate Display */}
              <div
                className={`${getColorClasses(activeTabData.color).bg
                  } rounded-xl p-6 mt-8`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Success Rate
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Proven track record in{" "}
                      {typeof activeTabData.title === "string"
                        ? activeTabData.title.toLowerCase()
                        : ""}
                    </p>
                  </div>
                  <div className="text-right">
                    <div
                      className={`${getColorClasses(activeTabData.color).text
                        } text-3xl font-bold`}
                    >
                      98%
                    </div>
                    <div className="text-gray-600 text-sm">
                      Security Issues Identified
                    </div>
                  </div>
                </div>
              </div>

              {activeTab === "vulnerability-assessment" && (
                <section className="vulnerability-list mt-8 max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl overflow-hidden border border-blue-100">
                  <h3 className="text-3xl font-bold mb-8 text-center text-blue-600" style={{ color: 'rgb(37, 168, 224)' }}>We Neutralize the OWASP Top 10 & Beyond</h3>
                  <div className="vuln-grid grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-blue-100">
                      <strong className="text-blue-600" style={{ color: 'rgb(37, 168, 224)' }}>Injection Attacks:</strong> SQLi, NoSQLi, OS Command Injection.
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-blue-100">
                      <strong className="text-blue-600" style={{ color: 'rgb(37, 168, 224)' }}>Broken Authentication:</strong> Credential Stuffing, Session Hijacking.
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-blue-100">
                      <strong className="text-blue-600" style={{ color: 'rgb(37, 168, 224)' }}>Sensitive Data Exposure:</strong> PII Leakage, Weak Encryption (GDPR violations).
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-blue-100">
                      <strong className="text-blue-600" style={{ color: 'rgb(37, 168, 224)' }}>Business Logic Flaws:</strong> Payment Bypasses, Privilege Escalation.
                    </div>
                  </div>
                </section>
              )}
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Secure Your Applications?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our comprehensive security testing services ensure your
              applications are protected against the latest cyber threats and
              comply with industry{" "}
              <Link href="/security-testing">security</Link> standards.
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

export default SecurityTestingComprehensiveSlider;