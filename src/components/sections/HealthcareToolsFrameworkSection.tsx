"use client";

import React from "react";
import {
  FaCode,
  FaShieldAlt,
  FaDatabase,
  FaCloud,
  FaTools,
  FaCheckCircle,
  FaCog,
  FaLock
} from "react-icons/fa";

const HealthcareToolsFrameworkSection: React.FC = () => {
  const testingTools = [
    {
      category: "Security Testing",
      icon: FaShieldAlt,
      color: "text-red-500",
      bgColor: "bg-red-50",
      tools: [
        { name: "OWASP ZAP", description: "Web application security scanner" },
        { name: "Burp Suite", description: "Penetration testing platform" },
        { name: "Nessus", description: "Vulnerability assessment" },
        { name: "Metasploit", description: "Security testing framework" }
      ]
    },
    {
      category: "Automation Testing",
      icon: FaCog,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      tools: [
        { name: "Selenium", description: "Web application automation" },
        { name: "Appium", description: "Mobile app automation" },
        { name: "Cypress", description: "End-to-end testing framework" },
        { name: "TestComplete", description: "Comprehensive test automation" }
      ]
    },
    {
      category: "API Testing",
      icon: FaCode,
      color: "text-green-500",
      bgColor: "bg-green-50",
      tools: [
        { name: "Postman", description: "API development and testing" },
        { name: "REST Assured", description: "Java-based REST API testing" },
        { name: "SoapUI", description: "SOAP and REST API testing" },
        { name: "Newman", description: "Command-line Postman runner" }
      ]
    },
    {
      category: "Performance Testing",
      icon: FaDatabase,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      tools: [
        { name: "JMeter", description: "Load and performance testing" },
        { name: "LoadRunner", description: "Enterprise performance testing" },
        { name: "BlazeMeter", description: "Cloud-based load testing" },
        { name: "K6", description: "Modern load testing tool" }
      ]
    }
  ];

  const complianceFrameworks = [
    {
      name: "HIPAA Compliance",
      description: "Health Insurance Portability and Accountability Act validation",
      features: ["PHI Protection", "Access Controls", "Audit Trails", "Data Encryption"]
    },
    {
      name: "FDA Validation",
      description: "Food and Drug Administration software validation support",
      features: ["21 CFR Part 820", "IEC 62304", "Risk Management", "Documentation"]
    },
    {
      name: "HL7 FHIR",
      description: "Healthcare interoperability standards testing",
      features: ["Data Exchange", "API Validation", "Resource Testing", "Conformance"]
    },
    {
      name: "DICOM Testing",
      description: "Digital Imaging and Communications in Medicine validation",
      features: ["Image Transfer", "PACS Integration", "Modality Testing", "Workflow"]
    }
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-white bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaTools className="w-4 h-4" />
            <span className="text-sm">Tools &amp; Frameworks</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Advanced Healthcare Testing
            <span className="block text-brand-blue">
              Tools &amp; Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leverage industry-leading tools and frameworks specifically designed for healthcare
            software testing, ensuring compliance, security, and optimal performance.
          </p>
        </div>

        {/* Testing Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {testingTools.map((category, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg ring-1 ring-brand-blue hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center`}>
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
              </div>

              <div className="space-y-4">
                {category.tools.map((tool, toolIndex) => (
                  <div key={toolIndex} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{tool.name}</h4>
                      <p className="text-sm text-gray-600">{tool.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Frameworks */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-white bg-brand-blue rounded-full px-6 py-2 mb-6">
              <FaLock className="w-4 h-4" />
              <span className="text-sm">Compliance Frameworks</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Healthcare Regulatory Compliance
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive testing frameworks ensuring your healthcare software meets
              all regulatory requirements and industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl p-6 hover:border-[theme(color.brand.blue)] transition-colors">
                <h4 className="text-xl font-bold text-gray-900 mb-3">{framework.name}</h4>
                <p className="text-gray-600 mb-4">{framework.description}</p>

                <div className="grid grid-cols-2 gap-2">
                  {framework.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[theme(color.brand.blue)] rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mt-20 bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Healthcare Testing Stack</h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Cutting-edge technologies and methodologies for comprehensive healthcare software validation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaCloud className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Cloud Testing</h4>
              <p className="text-blue-100">AWS, Azure, GCP healthcare cloud validation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaDatabase className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Data Validation</h4>
              <p className="text-blue-100">EHR, EMR, and clinical data integrity testing</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Security Testing</h4>
              <p className="text-blue-100">Advanced cybersecurity and privacy protection</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthcareToolsFrameworkSection;

