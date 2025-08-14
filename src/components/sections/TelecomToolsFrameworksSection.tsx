"use client";

import React from "react";
import { 
  FaWifi, 
  FaSignal, 
  FaNetworkWired,
  FaShieldAlt,
  FaMobile,
  FaCloud,
  FaCheckCircle,
  FaArrowRight,
  FaTools,
  FaLaptopCode
} from "react-icons/fa";

const TelecomToolsFrameworksSection: React.FC = () => {
  const toolCategories = [
    {
      icon: FaWifi,
      title: "5G Testing Tools",
      description: "Advanced tools for comprehensive 5G network testing, protocol validation, and performance optimization.",
      tools: [
        { name: "Keysight 5G Test Suite", description: "End-to-end 5G network testing" },
        { name: "Rohde & Schwarz CMX500", description: "5G protocol testing platform" },
        { name: "Anritsu MT8000A", description: "5G network analyzer" },
        { name: "Spirent Landslide", description: "5G core network testing" }
      ],
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50"
    },
    {
      icon: FaSignal,
      title: "Network Performance Tools",
      description: "Comprehensive network performance testing and monitoring tools for optimal network operation.",
      tools: [
        { name: "EXFO FTB-1", description: "Network performance testing" },
        { name: "Ixia IxLoad", description: "Network load testing platform" },
        { name: "SolarWinds NPM", description: "Network performance monitoring" },
        { name: "ThousandEyes", description: "Network intelligence platform" }
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: FaShieldAlt,
      title: "Security Testing Tools",
      description: "Specialized security testing tools for telecom infrastructure and network protection.",
      tools: [
        { name: "Nessus Professional", description: "Vulnerability assessment" },
        { name: "Metasploit Pro", description: "Penetration testing framework" },
        { name: "Wireshark", description: "Network protocol analyzer" },
        { name: "Nmap", description: "Network discovery and security auditing" }
      ],
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50"
    },
    {
      icon: FaMobile,
      title: "Mobile Testing Tools",
      description: "Comprehensive mobile network testing tools for device compatibility and performance validation.",
      tools: [
        { name: "Rohde & Schwarz TSME", description: "Mobile network drive testing" },
        { name: "Anritsu MS2690A", description: "Signal analyzer for mobile" },
        { name: "JDSU CellAdvisor", description: "Base station analyzer" },
        { name: "Actix Analyzer", description: "Mobile network optimization" }
      ],
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: FaNetworkWired,
      title: "Protocol Testing Tools",
      description: "Advanced protocol testing and validation tools for telecom standards compliance.",
      tools: [
        { name: "Ixia BreakingPoint", description: "Protocol fuzzing and testing" },
        { name: "Spirent TestCenter", description: "Network protocol testing" },
        { name: "GL Communications", description: "Protocol analyzers and simulators" },
        { name: "Empirix Hammer", description: "VoIP protocol testing" }
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50"
    },
    {
      icon: FaCloud,
      title: "NFV/SDN Testing Tools",
      description: "Specialized tools for testing Network Function Virtualization and Software-Defined Networks.",
      tools: [
        { name: "Ixia CloudStorm", description: "NFV testing platform" },
        { name: "Spirent Velocity", description: "SDN testing and validation" },
        { name: "EANTC Test Tools", description: "SDN/NFV validation" },
        { name: "Cisco VIRL", description: "Virtual network simulation" }
      ],
      color: "from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-50"
    }
  ];

  const frameworkBenefits = [
    {
      icon: FaCheckCircle,
      title: "Standards Compliance",
      description: "Tools certified for 3GPP, ITU-T, and other telecom standards"
    },
    {
      icon: FaCheckCircle,
      title: "Real-time Testing",
      description: "Live network testing capabilities without service disruption"
    },
    {
      icon: FaCheckCircle,
      title: "Scalable Architecture",
      description: "Tools that scale from lab testing to production networks"
    },
    {
      icon: FaCheckCircle,
      title: "Automated Reporting",
      description: "Comprehensive test reports and analytics for network optimization"
    }
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
            Industry-Leading <span className="text-[theme(color.brand.blue)]">Tools & Frameworks</span>
            <span className="block">for Telecom Testing</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We leverage the most advanced telecom testing tools and frameworks specifically designed for the telecommunications industry, ensuring comprehensive test coverage, protocol-level accuracy, and full compliance with industry standards such as 3GPP, ETSI, and ITU-T.

          </p>
        </div>

        {/* Tools Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {toolCategories.map((category, index) => (
            <div
              key={index}
              className={`${category.bgColor} rounded-3xl p-8 shadow-lg ring-1 hover:ring-4 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group`}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{category.description}</p>
              
              <div className="space-y-3">
                {category.tools.map((tool, toolIndex) => (
                  <div key={toolIndex} className="flex items-start gap-3 p-3 bg-white bg-opacity-60 rounded-xl">
                    <FaLaptopCode className="w-4 h-4 text-[theme(color.brand.blue)] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm">{tool.name}</h4>
                      <p className="text-xs text-gray-600">{tool.description}</p>
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
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Our Tool Selection Matters</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our carefully curated telecom QA toolkit ensures comprehensive testing coverage while meeting the stringent performance, security, and compliance requirements of the telecommunications industry, including validation for 5G networks, VoIP systems, and real-time data processing.

            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {frameworkBenefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <benefit.icon className="w-12 h-12 mx-auto mb-4 text-green-500" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">{benefit.title}</h4>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Framework Showcase */}
        <div className="bg-white rounded-3xl p-12 mb-16 shadow-lg border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Custom Telecom Test Framework</h3>
              <p className="text-lg text-gray-600 mb-8">
                We&apos;ve developed a proprietary telecom testing framework specifically designed for the telecommunications industry, incorporating industry best practices, telecom protocol validation, and emerging technology requirements for 5G networks, IoT integration, and real-time data processing.

              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Built-in 5G protocol validation and network slicing tests</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Automated IoT device compatibility and connectivity testing</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Real-time network performance monitoring and alerting</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Comprehensive reporting for network optimization and compliance</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[theme(color.brand.blue)] to-sky-600 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">Framework Capabilities</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">1000+</div>
                  <div className="text-sm">Pre-built Test Cases</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">100+</div>
                  <div className="text-sm">Network Scenarios</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">99.9%</div>
                  <div className="text-sm">Test Automation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-sm">Network Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Leverage Our Advanced Testing Tools?</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let our experts demonstrate how our comprehensive toolkit can enhance your telecom 
            testing capabilities and ensure superior network performance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 text-[theme(color.brand.blue)] justify-center">
            <button className="bg-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 hover:scale-98 transition-all duration-200 ease-in-out">
              Request Tool Demo
            </button>
            {/* <button className="bg-white bg-opacity-20 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-opacity-30 hover:scale-98 transition-all duration-200 ease-in-out border border-white border-opacity-30">
              Download Framework Guide
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelecomToolsFrameworksSection;

