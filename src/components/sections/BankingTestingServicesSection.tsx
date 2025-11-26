"use client";

import Link from "next/link";
import React from "react";
import {
  FaShieldAlt,
  FaGavel,
  FaRocket,
  FaMobile,
  FaDatabase,
  FaCode,
  FaUsers,
  FaChartLine,
  FaLock,
  FaCog,
  FaCheckCircle,
} from "react-icons/fa";

const BankingTestingServicesSection: React.FC = () => {
  const services = [
    {
      icon: FaShieldAlt,
      title: "Security Testing",
      description:
        "Comprehensive security assessments including penetration testing, vulnerability scanning, and threat modeling to protect against cyber attacks.",
      features: [
        (<><Link href="/blog/post/how-to-perform-penetration-testing-for-web-applications">Penetration Testing</Link></>),
        "Vulnerability Assessment",
        "Security Code Review",
        "Threat Modeling",
      ],
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50",
    },
    {
      icon: FaGavel,
      title: (<><Link href="/blog/post/what-is-hipaa-compliance-testing-ensuring-phi-protection-for-healthcare-apps">Compliance Testing</Link></>),
      description:
        "Ensure adherence to financial regulations including PCI DSS, SOX, GDPR, Basel III, and other industry standards.",
      features: [
        "PCI DSS Compliance",
        "SOX Testing",
        "GDPR Validation",
        "Basel III Requirements",
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: FaRocket,
      title: "Performance Testing",
      description:
        "Load testing and performance optimization to ensure your banking systems can handle peak transaction volumes.",
      features: [
        (<><Link href="/blog/post/load-testing-in-performance-testing-complete-guide">Load Testing</Link></>),
        (<><Link href="/blog/post/stress-testing-applications-identifying-breaking-points">Stress Testing</Link></>),
        (<><Link href="/blog/post/volume-testing-managing-high-data-loads-efficiently">Volume Testing</Link></>),
        "Scalability Analysis",
      ],
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50",
    },
    {
      icon: FaMobile,
      title: "Mobile Banking QA",
      description:
        "Specialized testing for mobile banking applications across iOS and Android platforms with focus on security and usability.",
      features: [
        (<><Link href="/blog/post/cross-platform-testing-ensuring-seamless-gaming-experiences-across-devices">Cross-Platform Testing</Link></>),
        "Mobile Security",
        "Biometric Authentication",
        "Offline Functionality",
      ],
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: FaDatabase,
      title: "Core Banking Testing",
      description:
        "End-to-end testing of core banking systems including account management, transaction processing, and customer data integrity.",
      features: [
        "Transaction Validation",
        (<><Link href="/blog/post/data-quality-testing-in-etl">Data Integrity</Link></>),
        "Account Management",
        "Batch Processing",
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
    },
    {
      icon: FaCode,
      title: (<><Link href="/api-testing">API Testing</Link></>),
      description:
        "Comprehensive API testing for open banking, payment gateways, and third-party integrations with security focus.",
      features: [
        "REST API Testing",
        "OAuth Validation",
        "Rate Limiting",
        "Data Encryption",
      ],
      color: "from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-50",
    },
    {
      icon: FaCog,
      title: (<><Link href="/automation-testing-services">Automation Testing</Link></>),
      description:
        "Automated testing frameworks for continuous integration and deployment in banking environments.",
      features: [
        "CI/CD Integration",
        (<><Link href="/regression-testing">Regression Testing</Link></>),
        "Test Data Management",
        "Automated Reporting",
      ],
      color: "from-teal-500 to-green-600",
      bgColor: "bg-teal-50",
    },
    {
      icon: FaUsers,
      title: (<><Link href="/blog/post/user-acceptance-testing-in-manual-testing-use-cases-techniques">User Acceptance Testing</Link></>),
      description:
        "Business user validation and acceptance testing to ensure banking applications meet business requirements.",
      features: [
        "Business Validation",
        "User Journey Testing",
        (<><Link href="/blog/post/accessibility-testing-in-manual-testing-use-cases-techniques">Accessibility Testing</Link></>),
        "Training Support",
      ],
      color: "from-pink-500 to-red-600",
      bgColor: "bg-pink-50",
    },
  ];

  const serviceStats = [
    { value: "100%", label: "Compliance Success Rate" },
    { value: "95%", label: "Security Vulnerability Reduction" },
    { value: "80%", label: "Performance Improvement" },
    { value: "24/7", label: "Monitoring & Support" },
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-white bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaLock className="w-4 h-4" />
            <span className="text-sm">BFSI Testing Services</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive{" "}
            <span className="text-[theme(color.brand.blue)]">
              Banking & Finance
            </span>
            <span className="block">Testing Solutions</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            End-to-end banking and <Link href="/blog/post/etl-testing-case-studies">finance testing services</Link> designed
            specifically for the banking and financial services industry,
            ensuring <Link href="/mobile-application-testing">application security</Link>, regulatory compliance (including PCI
            DSS, GDPR, and SOX), and optimal <Link href="/performance-testing-services">performance</Link> across all your
            financial platforms and transactional systems.
          </p>
        </div>

        {/* Service Statistics */}
        <div className="bg-white rounded-3xl p-8 mb-16 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Our Track Record
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {serviceStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} rounded-3xl p-8 shadow-lg ring-1 hover:ring-4 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group`}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800 text-sm mb-3">
                  KEY FEATURES:
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <FaCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Our Services */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Banking Testing Services?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We understand the unique challenges, regulatory requirements, and
              security demands of the banking and financial services industry,
              enabling us to deliver specialized testing for financial
              applications with precision and compliance focus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <FaChartLine className="w-12 h-12 mx-auto mb-4 text-[theme(color.brand.blue)]" />
              <h4 className="text-xl font-bold mb-2 text-gray-900">
                Domain Expertise
              </h4>
              <p className="text-sm text-gray-600">
                15+ years of experience in banking and financial services
                testing with deep understanding of industry <Link href="/blog/post/iot-security-validation-protecting-devices-from-cyber-threats">regulations</Link> and
                compliance requirements.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <FaLock className="w-12 h-12 mx-auto mb-4 text-[theme(color.brand.blue)]" />
              <h4 className="text-xl font-bold mb-2 text-gray-900">
                Security First
              </h4>
              <p className="text-sm text-gray-600">
               <Link href="/blog/post/advanced-security-testing-for-healthcare-apps-protecting-patient-data-from-cyber-threats">Advanced security testing</Link> methodologies and tools to protect
                against evolving cyber threats and ensure <Link href="/blog/post/data-privacy-and-security-for-e-learning-platforms-protecting-student-data-and-ensuring-compliance">data protection</Link>{" "}
                compliance.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <FaCog className="w-12 h-12 mx-auto mb-4 text-[theme(color.brand.blue)]" />
              <h4 className="text-xl font-bold mb-2 text-gray-900">
                Proven Methodologies
              </h4>
              <p className="text-sm text-gray-600">
                Industry-standard <Link href="/tools">testing frameworks</Link> and methodologies
                specifically designed for banking applications and financial
                systems.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Secure Your Financial Platform?
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Let our banking testing experts help you achieve regulatory
            compliance, <Link href="/blog/post/advanced-security-testing-for-healthcare-apps-protecting-patient-data-from-cyber-threats">enhance security</Link>, and deliver exceptional customer
            experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 text-[theme(color.brand.blue)] justify-center">
            <Link href="/contact-us">
              <button className="bg-white cursor-pointer px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 hover:scale-98 transition-all duration-200 ease-in-out">
                Start Your Security Assessment
              </button>
            </Link>
            <Link href={"https://calendar.app.google/uUHn8prcXbdqcvVb6"} target={ "_blank" }>
              <button className="bg-white cursor-pointer bg-opacity-20 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-opacity-30 hover:scale-98 transition-all duration-200 ease-in-out border border-white border-opacity-30">
                Schedule Expert Consultation
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankingTestingServicesSection;
