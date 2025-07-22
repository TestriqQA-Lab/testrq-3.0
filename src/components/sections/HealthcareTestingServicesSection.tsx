"use client";

import React from "react";
import { 
  FaHeartbeat, 
  FaShieldAlt, 
  FaUserMd, 
  FaDatabase,
  FaMobile,
  FaCloud,
  FaLock,
  FaClipboardCheck,
  FaStethoscope,
  FaSyringe,
  FaHospital,
  FaAmbulance
} from "react-icons/fa";

const HealthcareTestingServicesSection: React.FC = () => {
  const services = [
    {
      icon: FaHeartbeat,
      title: "EHR/EMR System Testing",
      description: "Comprehensive testing of Electronic Health Records and Electronic Medical Records systems for data integrity, interoperability, and workflow optimization.",
      features: ["HL7 FHIR Compliance", "Data Migration Testing", "Workflow Validation", "Integration Testing"]
    },
    {
      icon: FaShieldAlt,
      title: "HIPAA Compliance Testing",
      description: "Ensure complete HIPAA compliance with thorough security testing, access controls, audit trails, and patient data protection validation.",
      features: ["PHI Protection", "Access Control Testing", "Audit Trail Validation", "Risk Assessment"]
    },
    {
      icon: FaUserMd,
      title: "Medical Device Testing",
      description: "Specialized testing for medical devices, IoMT systems, and connected healthcare equipment ensuring FDA compliance and patient safety.",
      features: ["FDA 21 CFR Part 820", "IEC 62304 Compliance", "Device Connectivity", "Safety Validation"]
    },
    {
      icon: FaDatabase,
      title: "Clinical Data Testing",
      description: "Validate clinical data accuracy, integrity, and compliance with healthcare standards and regulatory requirements.",
      features: ["Data Validation", "Clinical Workflows", "Reporting Accuracy", "Compliance Checks"]
    },
    {
      icon: FaMobile,
      title: "Telehealth App Testing",
      description: "End-to-end testing of telemedicine applications, video consultations, remote monitoring, and mobile health solutions.",
      features: ["Video Quality Testing", "Real-time Communication", "Mobile Compatibility", "Security Testing"]
    },
    {
      icon: FaCloud,
      title: "Healthcare Cloud Testing",
      description: "Cloud infrastructure testing for healthcare applications ensuring scalability, security, and compliance with healthcare regulations.",
      features: ["Cloud Security", "Scalability Testing", "Data Backup", "Disaster Recovery"]
    },
    {
      icon: FaLock,
      title: "Healthcare Cybersecurity",
      description: "Advanced security testing specifically designed for healthcare environments to protect against cyber threats and data breaches.",
      features: ["Penetration Testing", "Vulnerability Assessment", "Security Audits", "Threat Modeling"]
    },
    {
      icon: FaClipboardCheck,
      title: "Regulatory Compliance",
      description: "Comprehensive testing to ensure compliance with FDA, HIPAA, HITECH, and other healthcare regulatory requirements.",
      features: ["FDA Validation", "HITECH Compliance", "Quality Assurance", "Documentation"]
    },
    {
      icon: FaStethoscope,
      title: "Clinical Decision Support",
      description: "Testing of clinical decision support systems, AI-powered diagnostics, and medical algorithms for accuracy and reliability.",
      features: ["Algorithm Testing", "AI Model Validation", "Clinical Accuracy", "Performance Testing"]
    },
    {
      icon: FaSyringe,
      title: "Pharmacy Management",
      description: "Specialized testing for pharmacy management systems, e-prescribing, drug interaction checks, and medication management.",
      features: ["E-Prescribing", "Drug Interactions", "Inventory Management", "Prescription Validation"]
    },
    {
      icon: FaHospital,
      title: "Hospital Information Systems",
      description: "Complete testing of hospital management systems, patient management, billing, and administrative workflows.",
      features: ["Patient Management", "Billing Systems", "Administrative Workflows", "Integration Testing"]
    },
    {
      icon: FaAmbulance,
      title: "Emergency Care Systems",
      description: "Critical testing for emergency care systems, ambulance dispatch, emergency response, and critical care applications.",
      features: ["Emergency Workflows", "Real-time Systems", "Critical Care Testing", "Response Time Testing"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaHeartbeat className="w-4 h-4 text-[theme(color.brand.blue)]" />
            <span className="text-sm font-semibold text-[theme(color.brand.blue)]">Healthcare Testing Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Healthcare
            <span className="block bg-gradient-to-r from-[theme(color.brand.blue)] to-teal-600 bg-clip-text text-transparent">
              Testing Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized testing services designed for healthcare applications, ensuring patient safety, 
            regulatory compliance, and optimal performance across all medical software systems.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-[theme(color.brand.blue)] hover:border-opacity-30">
              <div className="w-16 h-16 bg-gradient-to-r from-[theme(color.brand.blue)] to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[theme(color.brand.blue)] rounded-full"></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-teal-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Secure Your Healthcare Software?</h3>
            <p className="text-blue-100 mb-8 text-lg">
              Our healthcare testing experts are ready to help you achieve compliance, ensure patient safety, 
              and optimize your medical software performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[theme(color.brand.blue)] px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-colors">
                Get Healthcare Testing Quote
              </button>
              <button className="bg-white bg-opacity-20 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-opacity-30 transition-all border border-white border-opacity-30">
                Schedule Expert Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthcareTestingServicesSection;

