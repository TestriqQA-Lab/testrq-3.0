import React from "react";
import { FaHeartbeat, FaShoppingCart, FaGraduationCap, FaGamepad, FaBitcoin, FaIndustry, FaChalkboardTeacher } from "react-icons/fa";

const ToolsIndustrySpecificSection = () => {
  const industries = [
    {
      icon: FaHeartbeat,
      title: "Healthcare Testing",
      description: "Specialized tools for HIPAA compliance, medical device testing, and healthcare software validation",
      tools: [
        { name: "HL7 FHIR Validator", purpose: "Healthcare data standard validation" },
        { name: "DICOM Toolkit", purpose: "Medical imaging testing" },
        { name: "Epic MyChart Tester", purpose: "EHR system testing" },
        { name: "FDA 21 CFR Part 11", purpose: "Regulatory compliance validation" },
        { name: "PHI Security Scanner", purpose: "Protected health information security" }
      ],
      compliance: ["HIPAA", "FDA 21 CFR Part 11", "IEC 62304", "ISO 13485"],
      color: "red"
    },
    {
      icon: FaShoppingCart,
      title: "E-commerce Testing",
      description: "Comprehensive testing solutions for online retail platforms and payment systems",
      tools: [
        { name: "Payment Gateway Tester", purpose: "Secure payment processing validation" },
        { name: "Cart Abandonment Analyzer", purpose: "Shopping cart behavior testing" },
        { name: "Inventory Sync Validator", purpose: "Real-time inventory testing" },
        { name: "PCI DSS Scanner", purpose: "Payment card industry compliance" },
        { name: "Multi-currency Tester", purpose: "International payment testing" }
      ],
      compliance: ["PCI DSS", "GDPR", "CCPA", "SOX"],
      color: "green"
    },
    {
      icon: FaGraduationCap,
      title: "E-learning Testing",
      description: "Educational technology testing with focus on accessibility and learning management systems",
      tools: [
        { name: "SCORM Validator", purpose: "E-learning standard compliance" },
        { name: "LMS Integration Tester", purpose: "Learning management system testing" },
        { name: "Accessibility Checker", purpose: "WCAG 2.1 compliance validation" },
        { name: "Video Streaming Tester", purpose: "Educational content delivery" },
        { name: "Progress Tracking Validator", purpose: "Learning analytics testing" }
      ],
      compliance: ["WCAG 2.1", "Section 508", "COPPA", "FERPA"],
      color: "blue"
    },
    {
      icon: FaGamepad,
      title: "Gaming Testing",
      description: "Specialized gaming QA tools for performance, compatibility, and user experience testing",
      tools: [
        { name: "Game Performance Profiler", purpose: "FPS and memory optimization" },
        { name: "Multi-platform Tester", purpose: "Cross-platform compatibility" },
        { name: "In-app Purchase Validator", purpose: "Monetization testing" },
        { name: "Multiplayer Stress Tester", purpose: "Concurrent user testing" },
        { name: "Anti-cheat Validator", purpose: "Security and fair play testing" }
      ],
      compliance: ["ESRB", "PEGI", "COPPA", "Platform Guidelines"],
      color: "purple"
    },
    {
      icon: FaBitcoin,
      title: "Fintech Testing",
      description: "Financial technology testing with emphasis on security, compliance, and transaction integrity",
      tools: [
        { name: "Blockchain Validator", purpose: "Cryptocurrency transaction testing" },
        { name: "KYC/AML Tester", purpose: "Identity verification testing" },
        { name: "Trading Algorithm Validator", purpose: "Financial algorithm testing" },
        { name: "Regulatory Reporting Tester", purpose: "Compliance reporting validation" },
        { name: "Fraud Detection Analyzer", purpose: "Security and fraud prevention" }
      ],
      compliance: ["SOX", "PCI DSS", "GDPR", "MiFID II"],
      color: "yellow"
    },
    {
      icon: FaIndustry,
      title: "IoT & Industrial",
      description: "Internet of Things and industrial automation testing solutions",
      tools: [
        { name: "IoT Device Simulator", purpose: "Connected device testing" },
        { name: "MQTT Protocol Tester", purpose: "IoT communication validation" },
        { name: "Edge Computing Validator", purpose: "Edge device testing" },
        { name: "Industrial Protocol Tester", purpose: "Modbus, OPC-UA testing" },
        { name: "Sensor Data Validator", purpose: "IoT data integrity testing" }
      ],
      compliance: ["IEC 61508", "ISO 26262", "IEC 62443", "FCC Part 15"],
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      red: "from-red-50 to-red-100 text-red-600",
      green: "from-green-50 to-green-100 text-green-600",
      blue: "from-blue-50 to-blue-100 text-blue-600",
      purple: "from-purple-50 to-purple-100 text-purple-600",
      yellow: "from-yellow-50 to-yellow-100 text-yellow-600",
      indigo: "from-indigo-50 to-indigo-100 text-indigo-600"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="bg-white px-8 py-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-5 py-2 rounded-full mb-5">
            <FaChalkboardTeacher  />
            <span className="text-sm">Industry Expertise</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Industry-Specific{" "}
            <span className="text-[theme(color.brand.blue)]">Testing Solutions</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Our specialized testing tools and frameworks are tailored for industry-specific QA solutions, ensuring regulatory compliance and adherence to industry best practices across sectors like healthcare, banking and finance, telecommunications, and e-commerce through tools such as OWASP ZAP, Postman, JMeter, and Selenium.

          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white ring-1 ring-brand-blue rounded-xl p-8 hover:ring-3
                hover:shadow-xl transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${getColorClasses(industry.color)} flex items-center justify-center`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{industry.title}</h3>
                    <p className="text-gray-600 text-sm">{industry.description}</p>
                  </div>
                </div>

                {/* Specialized Tools */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-4">Specialized Tools:</h4>
                  <div className="space-y-3">
                    {industry.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[theme(color.brand.blue)] rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium text-gray-800 text-sm">{tool.name}</span>
                          <p className="text-gray-600 text-xs">{tool.purpose}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Compliance Standards */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">Compliance Standards:</h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.compliance.map((standard, standardIndex) => (
                      <span
                        key={standardIndex}
                        className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                      >
                        {standard}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Industry Expertise Stats */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Industry Testing Expertise
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our deep industry knowledge and specialized QA tools ensure your software meets the highest standards of quality assurance, application security, and regulatory compliance across sectors like healthcare, finance, telecommunications, and e-commerce.

            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-2">15+</div>
              <p className="text-gray-700 text-sm">Industries Served</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-2">200+</div>
              <p className="text-gray-700 text-sm">Compliance Standards</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-2">100%</div>
              <p className="text-gray-700 text-sm">Regulatory Compliance</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-2">24/7</div>
              <p className="text-gray-700 text-sm">Expert Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsIndustrySpecificSection;

