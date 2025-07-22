"use client";

import React from "react";
import { 
  FaClipboardList, 
  FaShieldAlt, 
  FaCheckCircle, 
  FaRocket,
  FaSearch,
  FaCog,
  FaFileAlt,
  FaUsers
} from "react-icons/fa";

const HealthcareTestingProcessSection: React.FC = () => {
  const processSteps = [
    {
      icon: FaClipboardList,
      title: "Compliance Assessment",
      description: "Thorough analysis of regulatory requirements including HIPAA, FDA, and HITECH compliance needs",
      details: ["Regulatory Gap Analysis", "Risk Assessment", "Compliance Roadmap", "Documentation Review"]
    },
    {
      icon: FaSearch,
      title: "Security Analysis",
      description: "Comprehensive security evaluation focusing on patient data protection and healthcare-specific vulnerabilities",
      details: ["Vulnerability Scanning", "Threat Modeling", "Access Control Review", "Data Flow Analysis"]
    },
    {
      icon: FaCog,
      title: "Test Execution",
      description: "Systematic testing of healthcare applications with specialized focus on patient safety and data integrity",
      details: ["Functional Testing", "Integration Testing", "Performance Testing", "Security Testing"]
    },
    {
      icon: FaShieldAlt,
      title: "Validation & Verification",
      description: "Rigorous validation against healthcare standards and verification of compliance requirements",
      details: ["FDA Validation", "HIPAA Compliance Check", "Clinical Workflow Testing", "Data Integrity Validation"]
    },
    {
      icon: FaFileAlt,
      title: "Documentation",
      description: "Comprehensive documentation for regulatory submissions and compliance audits",
      details: ["Test Documentation", "Compliance Reports", "Risk Analysis", "Validation Protocols"]
    },
    {
      icon: FaRocket,
      title: "Deployment Support",
      description: "Ongoing support for secure deployment and post-launch monitoring of healthcare systems",
      details: ["Deployment Planning", "Go-Live Support", "Monitoring Setup", "Maintenance Planning"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaCog className="w-4 h-4 text-[theme(color.brand.blue)]" />
            <span className="text-sm font-semibold text-[theme(color.brand.blue)]">Testing Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Healthcare Testing
            <span className="block bg-gradient-to-r from-[theme(color.brand.blue)] to-teal-600 bg-clip-text text-transparent">
              Process & Methodology
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven, systematic approach designed specifically for healthcare applications, 
            ensuring compliance, security, and patient safety at every step.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[theme(color.brand.blue)] text-white rounded-full flex items-center justify-center text-sm font-bold z-10">
                {index + 1}
              </div>
              
              {/* Card */}
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-[theme(color.brand.blue)] hover:border-opacity-30 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-[theme(color.brand.blue)] to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                
                <div className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center gap-2">
                      <FaCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Flow Visualization */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-6 py-2 mb-6">
              <FaUsers className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-green-600">Collaborative Approach</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Healthcare-Focused Methodology
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our specialized approach ensures that every aspect of healthcare software testing 
              meets the highest standards of quality, security, and regulatory compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <div className="w-16 h-16 bg-[theme(color.brand.blue)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Security First</h4>
              <p className="text-gray-600">Patient data protection and HIPAA compliance are our top priorities throughout the entire testing process.</p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-2xl">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Regulatory Compliance</h4>
              <p className="text-gray-600">Every test is designed to meet FDA, HIPAA, and other healthcare regulatory requirements.</p>
            </div>

            <div className="text-center p-6 bg-teal-50 rounded-2xl">
              <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaUsers className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h4>
              <p className="text-gray-600">Healthcare testing specialists with deep domain knowledge and regulatory expertise.</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-teal-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Healthcare Testing Journey?</h3>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
              Let our healthcare testing experts guide you through a compliant, secure, and efficient testing process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[theme(color.brand.blue)] px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-colors">
                Start Your Project
              </button>
              <button className="bg-white bg-opacity-20 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-opacity-30 transition-all border border-white border-opacity-30">
                Learn More About Our Process
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthcareTestingProcessSection;
