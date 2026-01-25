"use client";

import Link from "next/link";
import React from "react";
import { FaShieldAlt, FaCertificate, FaUsers, FaChartLine, FaClock, FaCheckCircle, FaAward, FaGlobe } from "react-icons/fa";

const SecurityTestingWhyChooseTestriq: React.FC = () => {
  const advantages = [
    {
      icon: <FaAward className="text-3xl" />,
      title: "ISO/IEC/IEEE 29119 Alignment",
      description: "Part 2 management for risk-based security and Part 4 for advanced design techniques finding 'Zero-Day' gaps.",
      stats: "Global Framework",
      color: "blue"
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Certified Compliance Testing",
      description: "Specialized audits for GDPR, HIPAA, and PCI-DSS ensuring sensitive patient and payment data protection.",
      stats: "PII Masked Audit",
      color: "purple"
    },
    {
      icon: <FaAward className="text-3xl" />,
      title: "SOC2 Compliance Documentation",
      description: "Providing the rigorous documentation required for Service Organization Control compliance as an independent lab.",
      stats: "Service Control Audit",
      color: "green"
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Certified Ethical Hackers",
      description: "Our team holds CISSP, OSCP, and CEH certifications to support your security needs worldwide.",
      stats: "OSCP & CEH Certified",
      color: "orange"
    },
    {
      icon: <FaGlobe className="text-3xl" />,
      title: "Global Security Assessment",
      description: "Network Security audits in London and Cloud Security Assessments in Singapore with global reach.",
      stats: "Worldwide Support",
      color: "indigo"
    },
    {
      icon: <FaAward className="text-3xl" />,
      title: "Human-Centric Security",
      description: "Recognizing and addressing human error through knowledge-sharing and culture-building.",
      stats: "Engagement-Led",
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; iconBg: string } } = {
      red: { bg: "bg-red-50", text: "text-red-600", iconBg: "bg-red-600" },
      blue: { bg: "bg-blue-50", text: "text-blue-600", iconBg: "bg-blue-600" },
      green: { bg: "bg-green-50", text: "text-green-600", iconBg: "bg-green-600" },
      purple: { bg: "bg-purple-50", text: "text-purple-600", iconBg: "bg-purple-600" },
      orange: { bg: "bg-orange-50", text: "text-orange-600", iconBg: "bg-orange-600" },
      indigo: { bg: "bg-indigo-50", text: "text-indigo-600", iconBg: "bg-indigo-600" }
    };
    return colorMap[color] || colorMap.red;
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaAward />
            <span className="text-sm">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-brand-blue">Testriq</span> for Security Testing?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Testriq delivers comprehensive security testing solutions that protect your applications from cyber threats, ensure <Link href="/blog/post/medical-device-testing-ensuring-patient-safety-and-regulatory-compliance">regulatory compliance</Link> with standards like GDPR and HIPAA, and maintain the highest standards of data protection, <Link href="/blog/post/how-does-validation-optimization-improve-web-application-quality">application security</Link>, and user trust.

          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => {
            const colors = getColorClasses(advantage.color);
            return (
              <div
                key={index}
                className={`${colors.bg} p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group`}
              >
                <div className={`${colors.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white">{advantage.icon}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{advantage.title}</h3>

                <p className="text-gray-600 leading-relaxed mb-4">
                  {advantage.description}
                </p>

                <div className={`${colors.text} font-bold text-lg`}>
                  {advantage.stats}
                </div>
              </div>
            );
          })}
        </div>

        {/* Security Metrics */}
        <div className="bg-gray-100 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Security Testing Success Metrics</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Proven track record of delivering exceptional security testing results that protect organizations from cyber threats, ensure compliance with industry security standards like PCI DSS and ISO 27001, and support strong risk analysis and vulnerability assessments.

            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Security Assessments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-gray-600 font-medium">Vulnerability Detection</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">15,000+</div>
              <div className="text-gray-600 font-medium">Security Issues Found</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Compliance Success</div>
            </div>
          </div>
        </div>

        {/* Security Certifications & Compliance */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Security Certifications & Expertise</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our security testing team holds industry-leading certifications such as CEH, CISSP, and OSCP, and follows established security frameworks and secure development lifecycle practices to ensure comprehensive protection, compliance validation, and alignment with regulatory standards.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2.5 h-2 bg-red-600 rounded-full"></div>
                <span className="text-gray-700">CISSP (Certified Information Systems Security Professional)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <span className="text-gray-700">CEH (Certified Ethical Hacker)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <span className="text-gray-700">OSCP (Offensive Security Certified Professional)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <span className="text-gray-700">CISA (Certified Information Systems Auditor)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <span className="text-gray-700"><Link href="/blog/post/top-10-security-vulnerabilities-based-on-owasp">OWASP</Link> Security Testing Methodology</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <span className="text-gray-700">NIST Cybersecurity Framework</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
            <h4 className="text-xl font-bold text-gray-900 mb-6">Security Testing Excellence</h4>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-red-600 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Comprehensive Threat Coverage</h5>
                  <p className="text-sm text-gray-600">Complete protection against <Link href="/blog/post/top-10-security-vulnerabilities-based-on-owasp">OWASP Top 10</Link> and emerging threats</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-600 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Regulatory Compliance</h5>
                  <p className="text-sm text-gray-600">Ensure compliance with PCI DSS, HIPAA, GDPR, and SOX requirements</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Advanced <Link href="/blog/post/how-to-perform-penetration-testing-for-web-applications">Penetration Testing</Link></h5>
                  <p className="text-sm text-gray-600">Ethical hacking and real-world attack simulation for maximum security</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Recognition */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Industry Recognition & Trust</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Trusted by leading organizations across various industries for comprehensive security testing and cybersecurity expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">🏆</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Industry Awards</h4>
              <p className="text-sm text-gray-600">Recognized for excellence in cybersecurity and security testing services</p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">🤝</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Trusted Partnerships</h4>
              <p className="text-sm text-gray-600">Strategic partnerships with leading security vendors and organizations</p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">📜</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Security Certifications</h4>
              <p className="text-sm text-gray-600">ISO 27001 certified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityTestingWhyChooseTestriq;

