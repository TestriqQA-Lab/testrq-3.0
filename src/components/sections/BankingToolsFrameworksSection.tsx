"use client";

import Link from "next/link";
import React from "react";
import {
  FaCode,
  FaShieldAlt,
  FaRocket,
  FaDatabase,
  FaMobile,
  FaCloud,
  FaCheckCircle,
  FaArrowRight,
  FaTools,
  FaLaptopCode,
} from "react-icons/fa";

const BankingToolsFrameworksSection: React.FC = () => {
  const toolCategories = [
    {
      icon: FaShieldAlt,
      title: "Security Testing Tools",
      description:
        "Advanced security testing tools for comprehensive vulnerability assessment and penetration testing.",
      tools: [
        { name: "OWASP ZAP", description: "Web application security scanner" },
        {
          name: "Burp Suite",
          description: "Professional web security testing",
        },
        { name: "Nessus", description: "Vulnerability assessment platform" },
        { name: "Metasploit", description: "Penetration testing framework" },
      ],
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50",
    },
    {
      icon: FaRocket,
      title: "Performance Testing Tools",
      description:
        "Load testing and performance optimization tools for high-volume banking transactions.",
      tools: [
        { name: "LoadRunner", description: "Enterprise load testing platform" },
        { name: "JMeter", description: "Open-source performance testing" },
        { name: "BlazeMeter", description: "Cloud-based load testing" },
        { name: "Gatling", description: "High-performance load testing" },
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: FaCode,
      title: "Automation Frameworks",
      description:
        "Robust automation frameworks for continuous testing in banking environments.",
      tools: [
        {
          name: "Selenium WebDriver",
          description: "Web application automation",
        },
        { name: "TestComplete", description: "Desktop and web automation" },
        { name: "Cucumber", description: "BDD testing framework" },
        {
          name: "Robot Framework",
          description: "Generic automation framework",
        },
      ],
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50",
    },
    {
      icon: FaMobile,
      title: "Mobile Testing Tools",
      description:
        "Specialized tools for testing mobile banking applications across different platforms.",
      tools: [
        { name: "Appium", description: "Cross-platform mobile automation" },
        {
          name: "Xamarin Test Cloud",
          description: "Cloud-based mobile testing",
        },
        { name: "Perfecto", description: "Mobile testing platform" },
        { name: "BrowserStack", description: "Real device testing cloud" },
      ],
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: FaDatabase,
      title: "API Testing Tools",
      description:
        "Comprehensive API testing tools for banking integrations and microservices.",
      tools: [
        { name: "Postman", description: "API development and testing" },
        { name: "SoapUI", description: "API functional testing" },
        { name: "REST Assured", description: "Java-based API testing" },
        { name: "Insomnia", description: "API design and testing" },
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
    },
    {
      icon: FaCloud,
      title: "DevOps & CI/CD Tools",
      description:
        "Integration tools for continuous testing and deployment in banking environments.",
      tools: [
        { name: "Jenkins", description: "Continuous integration server" },
        { name: "GitLab CI", description: "Integrated CI/CD platform" },
        { name: "Docker", description: "Containerization platform" },
        { name: "Kubernetes", description: "Container orchestration" },
      ],
      color: "from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-50",
    },
  ];

  const frameworkBenefits = [
    {
      icon: FaCheckCircle,
      title: "Regulatory Compliance",
      description:
        "Frameworks designed to meet banking regulations and audit requirements",
    },
    {
      icon: FaCheckCircle,
      title: "Scalable Architecture",
      description:
        "Tools that scale with your banking infrastructure and transaction volumes",
    },
    {
      icon: FaCheckCircle,
      title: "Security Integration",
      description:
        "Built-in security testing capabilities for financial applications",
    },
    {
      icon: FaCheckCircle,
      title: "Real-time Monitoring",
      description:
        "Continuous monitoring and alerting for banking system performance",
    },
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-white bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaTools className="w-4 h-4" />
            <span className="text-sm">Tools & Frameworks</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Cutting-Edge{" "}
            <span className="text-[theme(color.brand.blue)]">
              Tools & Frameworks
            </span>
            <span className="block">for Banking QA</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We leverage industry-leading testing tools and frameworks
            specifically chosen for banking and financial services testing,
            ensuring comprehensive test coverage, application security, and
            strict regulatory compliance with standards like PCI DSS, SOX, and
            GDPR.
          </p>
        </div>

        {/* Tools Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {toolCategories.map((category, index) => (
            <div
              key={index}
              className={`${category.bgColor} rounded-3xl p-8 shadow-lg ring-1 hover:ring-4 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group`}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <category.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {category.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {category.description}
              </p>

              <div className="space-y-3">
                {category.tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="flex items-start gap-3 p-3 bg-white bg-opacity-60 rounded-xl"
                  >
                    <FaLaptopCode className="w-4 h-4 text-[theme(color.brand.blue)] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm">
                        {tool.name}
                      </h4>
                      <p className="text-xs text-gray-600">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <button className="text-[theme(color.brand.blue)] font-semibold text-sm hover:underline flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Explore Tools
                  <FaArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Framework Benefits */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Our Tool Selection Matters
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our carefully curated banking QA toolkit ensures comprehensive
              testing coverage while meeting the stringent security,
              performance, and regulatory compliance requirements of the banking
              and financial services industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {frameworkBenefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-lg"
              >
                <benefit.icon className="w-12 h-12 mx-auto mb-4 text-green-500" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">
                  {benefit.title}
                </h4>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Framework Showcase */}
        <div className="bg-white rounded-3xl p-12 mb-16 shadow-lg border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Our Custom Banking Test Framework
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                We&apos;ve developed a proprietary banking QA framework
                specifically designed for the banking and financial services
                industry, incorporating industry best practices, regulatory
                compliance standards like PCI DSS, SOX, and GDPR, and supporting
                secure, high-performance financial application testing.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">
                    Built-in compliance validation for major banking regulations
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">
                    Automated security testing integrated into CI/CD pipelines
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">
                    Real-time monitoring and alerting for critical banking
                    functions
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">
                    Comprehensive reporting for audit and compliance purposes
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[theme(color.brand.blue)] to-sky-600 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">Framework Features</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-sm">Pre-built Test Cases</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-sm">Banking Scenarios</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">99.9%</div>
                  <div className="text-sm">Automation Coverage</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-sm">Continuous Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Leverage Our Advanced Testing Toolkit?
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Let our experts demonstrate how our comprehensive toolkit can
            enhance your banking testing capabilities and ensure regulatory
            compliance.
          </p>

          <div className="flex flex-col sm:flex-row text-[theme(color.brand.blue)] gap-4 justify-center">
            <Link href="/contact-us">
              <button className="bg-white cursor-pointer px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 hover:scale-98 transition-all duration-200 ease-in-out">
                Request Toolkit Demo
              </button>
            </Link>
            {/* <button className="bg-white cursor-pointer bg-opacity-20 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-opacity-30 hover:scale-98 transition-all duration-200 ease-in-out border border-white border-opacity-30">
              Download Framework Guide
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankingToolsFrameworksSection;
