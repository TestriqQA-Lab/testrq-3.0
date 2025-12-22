"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaShieldAlt,
  FaBug,
  FaCode,
  FaCloud,
  FaMobile,
  FaNetworkWired,
  FaTools,
} from "react-icons/fa";

const SecurityTestingToolsFramework: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(
    "vulnerability-scanning"
  );

  const toolCategories = [
    {
      id: "vulnerability-scanning",
      title: "Vulnerability Scanning",
      icon: <FaShieldAlt className="text-2xl" />,
      color: "red",
      description:
        "Advanced vulnerability scanning and assessment tools for comprehensive security evaluation",
      tools: [
        {
          name: "Nessus Professional",
          description:
            "Industry-leading vulnerability scanner for comprehensive security assessment",
          features: [
            "50,000+ vulnerability checks",
            "Compliance scanning",
            "Asset discovery",
            "Risk prioritization",
          ],
        },
        {
          name: "OpenVAS",
          description:
            "Open-source vulnerability assessment and management platform",
          features: [
            "Network vulnerability testing",
            "Web application scanning",
            "Authenticated scanning",
            "Custom policies",
          ],
        },
        {
          name: "Qualys VMDR",
          description:
            (<><Link href="/blog/post/cloud-based-performance-testing-scaling-for-modern-architectures-2">Cloud-based</Link> vulnerability management and threat detection</>),
          features: [
            "Continuous monitoring",
            "Asset inventory",
            "Patch management",
            "Threat intelligence",
          ],
        },
        {
          name: "Rapid7 Nexpose",
          description:
            "Vulnerability management solution with real-time risk analytics",
          features: [
            "Live vulnerability monitoring",
            "Risk scoring",
            "Remediation workflows",
            "Integration capabilities",
          ],
        },
      ],
    },
    {
      id: "penetration-testing",
      title: "Penetration Testing",
      icon: <FaBug className="text-2xl" />,
      color: "orange",
      description:
        "Professional penetration testing tools for ethical hacking and security validation",
      tools: [
        {
          name: (<><Link href="/blog/post/how-to-perform-penetration-testing-for-web-applications">Metasploit Framework</Link></>),
          description:
            "Advanced penetration testing platform for exploit development and validation",
          features: [
            "Exploit database",
            "Payload generation",
            "Post-exploitation",
            "Vulnerability validation",
          ],
        },
        {
          name: "Burp Suite Professional",
          description:
            "Comprehensive web application security testing platform",
          features: [
            "Web vulnerability scanning",
            (<><Link href="/manual-testing-services">Manual testing tools</Link></>),
            "Extension marketplaces",
            "Collaboration features",
          ],
        },
        {
          name: "Kali Linux",
          description:
            "Specialized Linux distribution for penetration testing and security auditing",
          features: [
            "600+ security tools",
            "Forensics capabilities",
            "Wireless security",
            "Digital forensics",
          ],
        },
        {
          name: "Cobalt Strike",
          description:
            "Advanced threat emulation and red team operations platform",
          features: [
            "Beacon payload",
            "Team collaboration",
            "Adversary simulation",
            "Post-exploitation",
          ],
        },
      ],
    },
    {
      id: "code-analysis",
      title: "Code Analysis",
      icon: <FaCode className="text-2xl" />,
      color: "blue",
      description:
        "Static and dynamic code analysis tools for secure software development",
      tools: [
        {
          name: "SonarQube",
          description: "Continuous code quality and security analysis platform",
          features: [
            "Static code analysis",
            "Security hotspots",
            "Code coverage",
            "Quality gates",
          ],
        },
        {
          name: "Checkmarx SAST",
          description:
            "Static application security testing for source code analysis",
          features: [
            "Multi-language support",
            "IDE integration",
            "Custom rules",
            "Compliance reporting",
          ],
        },
        {
          name: "Veracode",
          description:
            "Application security testing platform with SAST, DAST, and SCA",
          features: [
            "Binary analysis",
            "Dynamic scanning",
            "Dependency checking",
            "Policy management",
          ],
        },
        {
          name: "Fortify Static Code Analyzer",
          description:
            "Enterprise-grade static code analysis for security vulnerabilities",
          features: [
            "Deep security analysis",
            "Custom rules",
            "IDE plugins",
            "Audit workbench",
          ],
        },
      ],
    },
    {
      id: "cloud-security",
      title: (<><Link href="/blog/post/cloud-integration-testing-for-smart-devices-api-sync-validation">Cloud Security</Link></>),
      icon: <FaCloud className="text-2xl" />,
      color: "green",
      description:
        "Cloud security assessment and monitoring tools for multi-cloud environments",
      tools: [
        {
          name: (<><Link href="/blog/post/cloud-integration-testing-for-iot-aws-iot-azure-iot-google-iot-core">AWS</Link> Security Hub</>),
          description:
            "Centralized security findings and compliance monitoring for AWS",
          features: [
            "Multi-account security",
            "Compliance dashboards",
            "Finding aggregation",
            "Custom insights",
          ],
        },
        {
          name: (<><Link href="/blog/post/cloud-integration-testing-for-iot-aws-iot-azure-iot-google-iot-core">Azure</Link> Security Center</>),
          description:
            "Unified security management and threat protection for Azure",
          features: [
            "Security posture",
            (<><Link href="/blog/post/advanced-security-testing-for-healthcare-apps-protecting-patient-data-from-cyber-threats">Threat protection</Link></>),
            "Compliance assessment",
            "Security recommendations",
          ],
        },
        {
          name: "Google Cloud Security Command Center",
          description: "Security and risk management platform for Google Cloud",
          features: [
            "Asset discovery",
            "Vulnerability scanning",
            "Threat detection",
            "Compliance monitoring",
          ],
        },
        {
          name: "Prisma Cloud",
          description: "Comprehensive cloud native security platform",
          features: [
            "Multi-cloud security",
            "Container protection",
            "Serverless security",
            "Compliance automation",
          ],
        },
      ],
    },
    {
      id: "mobile-security",
      title: (<><Link href="/mobile-application-testing">Mobile Security</Link></>),
      icon: <FaMobile className="text-2xl" />,
      color: "purple",
      description:
        "Mobile application security testing tools for iOS and Android platforms",
      tools: [
        {
          name: "MobSF (Mobile Security Framework)",
          description:
            "Automated mobile application security testing framework",
          features: [
            "Static analysis",
            "Dynamic analysis",
            (<><Link href="/api-testing">API testing</Link></>),
            "Malware analysis",
          ],
        },
        {
          name: "QARK (Quick Android Review Kit)",
          description: "Static code analysis tool for Android applications",
          features: [
            "APK analysis",
            "Source code review",
            "Vulnerability detection",
            "Security recommendations",
          ],
        },
        {
          name: "iMAS (iOS Mobile Application Security)",
          description: "Security framework for iOS application development",
          features: [
            "Runtime protection",
            (<><Link href="/blog/post/game-security-testing-protecting-your-game-from-hacks-cheats-and-data-breaches">Data encryption</Link></>),
            "Jailbreak detection",
            "Certificate pinning",
          ],
        },
        {
          name: "Frida",
          description:
            "Dynamic instrumentation toolkit for mobile application testing",
          features: [
            "Runtime manipulation",
            "API hooking",
            "Memory analysis",
            "Protocol analysis",
          ],
        },
      ],
    },
    {
      id: "network-security",
      title: "Network Security",
      icon: <FaNetworkWired className="text-2xl" />,
      color: "indigo",
      description:
        "Network security assessment and monitoring tools for infrastructure protection",
      tools: [
        {
          name: "Nmap",
          description: "Network discovery and security auditing tool",
          features: [
            "Port scanning",
            "Service detection",
            "OS fingerprinting",
            "Vulnerability scripts",
          ],
        },
        {
          name: "Wireshark",
          description:
            "Network protocol analyzer for traffic analysis and troubleshooting",
          features: [
            "Packet capture",
            "Protocol analysis",
            "Network forensics",
            "Real-time monitoring",
          ],
        },
        {
          name: "Nessus Network Monitor",
          description:
            "Continuous network monitoring for security and compliance",
          features: [
            "Real-time monitoring",
            "Anomaly detection",
            "Compliance reporting",
            "Asset tracking",
          ],
        },
        {
          name: "Snort",
          description: "Open-source intrusion detection and prevention system",
          features: [
            "Real-time analysis",
            "Packet logging",
            "Protocol analysis",
            "Content matching",
          ],
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

  const activeCategoryData = toolCategories.find(
    (cat) => cat.id === activeCategory
  );

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaTools />
            <span className="text-sm">Tools & Frameworks</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Security Testing{" "}
            <span className="text-brand-blue">Tools & Frameworks</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We leverage industry-leading <Link href="/technology-stack">security testing tools</Link> and frameworks
            such as <Link href="/blog/post/top-10-security-vulnerabilities-based-on-owasp">OWASP ZAP</Link>, <Link href="/blog/post/using-burp-suite-for-security-testing-beginner-to-pro">Burp Suite</Link>, Metasploit, and Nessus to provide
            comprehensive vulnerability assessments, penetration testing, and
            security validation across all technology platforms and
            environments.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {toolCategories.map((category) => {
            const colors = getColorClasses(category.color);
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`p-4 rounded-xl text-center transition-all duration-300 ${activeCategory === category.id
                  ? `${colors.bg} ${colors.text} ${colors.border} border-2 shadow-lg`
                  : "bg-white text-gray-600 border-2 border-gray-200 hover:border-gray-300 hover:shadow-md"
                  }`}
              >
                <div className="flex flex-col items-center space-y-2">
                  <span
                    className={
                      activeCategory === category.id
                        ? colors.text
                        : "text-gray-400"
                    }
                  >
                    {category.icon}
                  </span>
                  <span className="text-sm font-medium">{category.title}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Category Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {activeCategoryData && (
            <div className="p-8 md:p-12">
              <div className="flex items-center space-x-4 mb-8">
                <div
                  className={`${getColorClasses(activeCategoryData.color).accent
                    } w-16 h-16 px-2 rounded-2xl flex items-center justify-center`}
                >
                  <span className="text-white">{activeCategoryData.icon}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {activeCategoryData.title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {activeCategoryData.description}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {activeCategoryData.tools.map((tool, index) => {
                  const colors = getColorClasses(activeCategoryData.color);
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
                            {tool.name}
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            {tool.description}
                          </p>

                          <div className="space-y-2">
                            {tool.features.map((feature, featureIndex) => (
                              <div
                                key={featureIndex}
                                className="flex items-center space-x-2"
                              >
                                <div
                                  className={`w-1.5 h-1.5 ${colors.accent} rounded-full`}
                                ></div>
                                <span className="text-gray-700 text-sm">
                                  {feature}
                                </span>
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
          )}
        </div>

        {/* Security Testing Methodology */}
        <div className="mt-16 bg-white rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Security Testing Methodology
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We follow industry-standard security testing methodologies and
              frameworks to ensure comprehensive coverage and consistent results
              across all security assessments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">🔍</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                OWASP Testing Guide
              </h4>
              <p className="text-sm text-gray-600">
                Comprehensive <Link href="/blog/post/whats-the-best-tool-for-security-testing-of-web-applications">web application security testing</Link> methodology
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">🛡️</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                NIST Framework
              </h4>
              <p className="text-sm text-gray-600">
                Cybersecurity framework for risk management and protection
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                PTES Standard
              </h4>
              <p className="text-sm text-gray-600">
                Penetration Testing Execution Standard for systematic testing
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">📋</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                SANS Guidelines
              </h4>
              <p className="text-sm text-gray-600">
                Industry best practices for security testing and assessment
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Leverage Advanced Security Testing Tools?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our comprehensive <Link href="/blog/post/web-app-security-testing-complete-guide-to-tools-techniques-common-vulnerabilities">security testing toolkit</Link> ensures thorough
              vulnerability assessment and protection against the latest cyber
              threats.
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

export default SecurityTestingToolsFramework;
