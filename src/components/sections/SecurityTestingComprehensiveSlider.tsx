"use client";

import React, { useState } from "react";
import { FaShieldAlt, FaBug, FaLock, FaUserShield, FaNetworkWired, FaCode } from "react-icons/fa";

const SecurityTestingComprehensiveSlider: React.FC = () => {
  const [activeTab, setActiveTab] = useState("vulnerability-assessment");

  const securityTabs = [
    {
      id: "vulnerability-assessment",
      title: "Vulnerability Assessment",
      icon: <FaShieldAlt className="text-2xl" />,
      color: "red",
      description: "Comprehensive vulnerability scanning and assessment to identify security weaknesses",
      features: [
        {
          title: "Automated Vulnerability Scanning",
          description: "Advanced automated tools to scan for known vulnerabilities, misconfigurations, and security weaknesses across your entire application infrastructure.",
          metrics: "500+ Vulnerability Types Detected"
        },
        {
          title: "Manual Security Testing",
          description: "Expert security professionals conduct thorough manual testing to identify complex vulnerabilities that automated tools might miss.",
          metrics: "95% Critical Vulnerability Detection"
        },
        {
          title: "Risk Assessment & Prioritization",
          description: "Comprehensive risk analysis with CVSS scoring and business impact assessment to prioritize remediation efforts effectively.",
          metrics: "CVSS 3.1 Compliant Scoring"
        },
        {
          title: "Compliance Validation",
          description: "Ensure your applications meet industry security standards including OWASP Top 10, PCI DSS, HIPAA, and other regulatory requirements.",
          metrics: "100% Compliance Coverage"
        }
      ]
    },
    {
      id: "penetration-testing",
      title: "Penetration Testing",
      icon: <FaBug className="text-2xl" />,
      color: "orange",
      description: "Ethical hacking and penetration testing to simulate real-world attack scenarios",
      features: [
        {
          title: "Web Application Penetration Testing",
          description: "Comprehensive testing of web applications including authentication bypass, injection attacks, and business logic flaws.",
          metrics: "OWASP Top 10 Coverage"
        },
        {
          title: "Network Penetration Testing",
          description: "Network infrastructure testing to identify vulnerabilities in firewalls, routers, switches, and network protocols.",
          metrics: "Layer 2-7 Network Testing"
        },
        {
          title: "API Security Testing",
          description: "Specialized testing for REST, GraphQL, and SOAP APIs including authentication, authorization, and data validation vulnerabilities.",
          metrics: "API Security Best Practices"
        },
        {
          title: "Social Engineering Assessment",
          description: "Human factor security testing including phishing simulations and security awareness evaluation.",
          metrics: "Real-world Attack Simulation"
        }
      ]
    },
    {
      id: "authentication-security",
      title: "Authentication & Authorization",
      icon: <FaLock className="text-2xl" />,
      color: "blue",
      description: "Comprehensive testing of authentication and authorization mechanisms",
      features: [
        {
          title: "Multi-Factor Authentication Testing",
          description: "Thorough testing of MFA implementations including SMS, TOTP, hardware tokens, and biometric authentication methods.",
          metrics: "All MFA Methods Supported"
        },
        {
          title: "Session Management Testing",
          description: "Comprehensive evaluation of session handling, token management, and session security controls.",
          metrics: "Session Security Validation"
        },
        {
          title: "Role-Based Access Control",
          description: "Testing of RBAC implementations, privilege escalation vulnerabilities, and access control bypass attempts.",
          metrics: "RBAC Security Validation"
        },
        {
          title: "Single Sign-On Security",
          description: "Security testing of SSO implementations including SAML, OAuth, OpenID Connect, and federation protocols.",
          metrics: "SSO Protocol Security"
        }
      ]
    },
    {
      id: "data-protection",
      title: "Data Protection",
      icon: <FaUserShield className="text-2xl" />,
      color: "green",
      description: "Comprehensive data security and privacy protection testing",
      features: [
        {
          title: "Data Encryption Testing",
          description: "Validation of encryption implementations including data at rest, in transit, and in processing encryption mechanisms.",
          metrics: "AES-256 & TLS 1.3 Validation"
        },
        {
          title: "Privacy Compliance Testing",
          description: "Comprehensive testing for GDPR, CCPA, and other privacy regulation compliance including data handling and user rights.",
          metrics: "GDPR & CCPA Compliant"
        },
        {
          title: "Data Loss Prevention",
          description: "Testing of DLP controls, data classification, and sensitive data handling procedures to prevent unauthorized data exposure.",
          metrics: "PII & PHI Protection"
        },
        {
          title: "Database Security Testing",
          description: "Comprehensive database security assessment including SQL injection, privilege escalation, and data access controls.",
          metrics: "Database Security Hardening"
        }
      ]
    },
    {
      id: "infrastructure-security",
      title: "Infrastructure Security",
      icon: <FaNetworkWired className="text-2xl" />,
      color: "purple",
      description: "Comprehensive infrastructure and network security testing",
      features: [
        {
          title: "Cloud Security Assessment",
          description: "Comprehensive security testing for AWS, Azure, GCP, and hybrid cloud environments including misconfigurations and access controls.",
          metrics: "Multi-Cloud Security"
        },
        {
          title: "Container Security Testing",
          description: "Security assessment of Docker containers, Kubernetes clusters, and container orchestration platforms.",
          metrics: "Container Runtime Security"
        },
        {
          title: "Network Security Testing",
          description: "Comprehensive network security assessment including firewall rules, network segmentation, and intrusion detection systems.",
          metrics: "Network Perimeter Security"
        },
        {
          title: "DevSecOps Integration",
          description: "Security testing integration into CI/CD pipelines with automated security scanning and continuous monitoring.",
          metrics: "Shift-Left Security"
        }
      ]
    },
    {
      id: "secure-coding",
      title: "Secure Code Review",
      icon: <FaCode className="text-2xl" />,
      color: "indigo",
      description: "Comprehensive source code security analysis and secure coding practices",
      features: [
        {
          title: "Static Code Analysis",
          description: "Automated and manual source code review to identify security vulnerabilities, coding flaws, and insecure patterns.",
          metrics: "SAST & Manual Review"
        },
        {
          title: "Dynamic Code Analysis",
          description: "Runtime security testing to identify vulnerabilities that manifest during application execution and user interaction.",
          metrics: "DAST & IAST Testing"
        },
        {
          title: "Secure Architecture Review",
          description: "Comprehensive review of application architecture, design patterns, and security controls implementation.",
          metrics: "Architecture Security"
        },
        {
          title: "Third-Party Component Security",
          description: "Security assessment of open-source libraries, dependencies, and third-party integrations for known vulnerabilities.",
          metrics: "SCA & Dependency Check"
        }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; border: string; accent: string } } = {
      red: { bg: "bg-red-50", text: "text-red-600", border: "border-red-200", accent: "bg-red-600" },
      orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200", accent: "bg-orange-600" },
      blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", accent: "bg-blue-600" },
      green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200", accent: "bg-green-600" },
      purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200", accent: "bg-purple-600" },
      indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200", accent: "bg-indigo-600" }
    };
    return colorMap[color] || colorMap.red;
  };

  const activeTabData = securityTabs.find(tab => tab.id === activeTab);

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Security Testing <span className="text-brand-blue">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore our comprehensive security testing services designed to protect your applications from cyber threats, 
            ensure compliance with security standards, and maintain the highest levels of data protection and user trust.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {securityTabs.map((tab) => {
            const colors = getColorClasses(tab.color);
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`p-4 rounded-xl text-center transition-all duration-300 ${
                  activeTab === tab.id
                    ? `${colors.bg} ${colors.text} ${colors.border} border-2 shadow-lg`
                    : "bg-white text-gray-600 border-2 border-gray-200 hover:border-gray-300 hover:shadow-md"
                }`}
              >
                <div className="flex flex-col items-center space-y-2">
                  <span className={activeTab === tab.id ? colors.text : "text-gray-400"}>
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
                <div className={`${getColorClasses(activeTabData.color).accent} w-16 h-16 rounded-2xl flex items-center justify-center`}>
                  <span className="text-white">{activeTabData.icon}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{activeTabData.title}</h3>
                  <p className="text-gray-600 text-lg">{activeTabData.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {activeTabData.features.map((feature, index) => {
                  const colors = getColorClasses(activeTabData.color);
                  return (
                    <div key={index} className={`${colors.bg} p-6 rounded-xl hover:shadow-lg transition-all duration-300`}>
                      <div className="flex items-start space-x-4">
                        <div className={`${colors.accent} w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1`}>
                          <span className="text-white text-sm font-bold">{index + 1}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                          <p className="text-gray-600 text-sm leading-relaxed mb-3">{feature.description}</p>
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
              <div className={`${getColorClasses(activeTabData.color).bg} rounded-xl p-6 mt-8`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Success Rate</h4>
                    <p className="text-gray-600 text-sm">Proven track record in {activeTabData.title.toLowerCase()}</p>
                  </div>
                  <div className="text-right">
                    <div className={`${getColorClasses(activeTabData.color).text} text-3xl font-bold`}>98%</div>
                    <div className="text-gray-600 text-sm">Security Issues Identified</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Secure Your Applications?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our comprehensive security testing services ensure your applications are protected against the latest cyber threats 
              and comply with industry security standards.
            </p>
            <button className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
              Start Security Assessment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityTestingComprehensiveSlider;

