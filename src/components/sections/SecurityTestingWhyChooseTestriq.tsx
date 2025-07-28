"use client";

import React from "react";
import { FaShieldAlt, FaCertificate, FaUsers, FaChartLine, FaClock, FaCheckCircle } from "react-icons/fa";

const SecurityTestingWhyChooseTestriq: React.FC = () => {
  const advantages = [
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Advanced Security Expertise",
      description: "Our certified security professionals bring deep expertise in cybersecurity, ethical hacking, and compliance testing to ensure comprehensive protection against evolving threats.",
      stats: "CISSP & CEH Certified",
      color: "red"
    },
    {
      icon: <FaCertificate className="text-3xl" />,
      title: "Industry Compliance Specialists",
      description: "Extensive experience in regulatory compliance including OWASP, PCI DSS, HIPAA, SOX, and GDPR ensuring your applications meet all security standards.",
      stats: "100% Compliance Rate",
      color: "blue"
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Dedicated Security Teams",
      description: "Specialized security testing teams with expertise in penetration testing, vulnerability assessment, and security architecture review.",
      stats: "25+ Security Experts",
      color: "green"
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Proven Security Results",
      description: "Track record of identifying critical vulnerabilities and helping organizations strengthen their security posture with measurable improvements.",
      stats: "98% Vulnerability Detection",
      color: "purple"
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: "Rapid Security Assessment",
      description: "Efficient security testing processes that deliver comprehensive results quickly without compromising thoroughness or accuracy.",
      stats: "50% Faster Assessment",
      color: "orange"
    },
    {
      icon: <FaCheckCircle className="text-3xl" />,
      title: "Comprehensive Security Coverage",
      description: "End-to-end security testing covering web applications, APIs, mobile apps, cloud infrastructure, and network security.",
      stats: "360° Security Testing",
      color: "indigo"
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-brand-blue">Testriq</span> for Security Testing?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Testriq delivers comprehensive security testing solutions that protect your applications from cyber threats, ensure regulatory compliance with standards like GDPR and HIPAA, and maintain the highest standards of data protection, application security, and user trust.

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
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
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
                <span className="text-gray-700">OWASP Security Testing Methodology</span>
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
                  <p className="text-sm text-gray-600">Complete protection against OWASP Top 10 and emerging threats</p>
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
                  <h5 className="font-semibold text-gray-900 mb-1">Advanced Penetration Testing</h5>
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
              <p className="text-sm text-gray-600">ISO 27001 certified and SOC 2 Type II compliant security practices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityTestingWhyChooseTestriq;

