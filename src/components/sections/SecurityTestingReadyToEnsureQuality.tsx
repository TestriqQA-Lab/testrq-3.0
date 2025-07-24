"use client";

import React from "react";
import {
  FaShieldAlt,
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
  FaUsers,
  FaCertificate,
} from "react-icons/fa";

const SecurityTestingReadyToEnsureQuality: React.FC = () => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <div className="bg-brand-blue w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
            <FaShieldAlt className="text-3xl text-white" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-brand-blue">
              Secure
            </span>{" "}
            Your Applications?
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Partner with our expert security testing team to protect your
            applications from cyber threats, ensure compliance with security
            standards, and maintain the highest levels of data protection and
            user trust.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-brand-blue text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
              <FaShieldAlt />
              <span>Start Security Assessment</span>
            </button>

            <button className="bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-red-300 hover:shadow-lg transition-all duration-300 flex items-center space-x-2">
              <FaCalendarAlt />
              <span>Schedule Consultation</span>
            </button>
          </div>

          <div className="text-center text-gray-500">
            <p className="mb-2">Trusted by 50+ companies worldwide</p>
            <div className="flex justify-center items-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-green-600" />
                <span>500+ Security Assessments</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-green-600" />
                <span>98% Vulnerability Detection</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-green-600" />
                <span>100% Compliance Success</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid xl:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
            <div className="bg-red-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaPhone className="text-2xl text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Call Our Security Experts
            </h3>
            <p className="text-gray-600 mb-6">
              Speak directly with our certified security professionals to
              discuss your specific security testing needs and requirements.
            </p>
            <div className="space-y-3">
              <div className="text-red-600 font-bold text-lg">
                +1 (555) 123-4567
              </div>
              <div className="text-gray-500 text-sm">
                Available 24/7 for security emergencies
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
            <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaEnvelope className="text-2xl text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Email Security Team
            </h3>
            <p className="text-gray-600 mb-6">
              Send us your security testing requirements and receive a detailed
              proposal with customized recommendations.
            </p>
            <div className="space-y-3">
              <div className="text-orange-600 font-bold text-lg">
                security@testriq.com
              </div>
              <div className="text-gray-500 text-sm">
                Response within 2 hours
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
            <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaCalendarAlt className="text-2xl text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Schedule Assessment
            </h3>
            <p className="text-gray-600 mb-6">
              Book a comprehensive security assessment consultation to evaluate
              your current security posture and identify improvements.
            </p>
            <div className="space-y-3">
              <div className="text-blue-600 font-bold text-lg">
                Free Consultation
              </div>
              <div className="text-gray-500 text-sm">
                30-minute security review
              </div>
            </div>
          </div>
        </div>

        {/* What You Get Section */}
        <div className="bg-white rounded-2xl p-6 md:p-12 shadow-xl mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              What You Get with Our Security Testing Services
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
              Comprehensive security testing solutions that protect your
              applications, ensure compliance, and provide peace of mind for
              your organization and customers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-2xl text-red-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Comprehensive Protection
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Complete security coverage across web applications, mobile apps,
                APIs, and infrastructure with advanced threat detection.
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaCertificate className="text-2xl text-orange-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Compliance Assurance
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ensure compliance with PCI DSS, HIPAA, GDPR, SOX, and other
                regulatory requirements with expert validation.
              </p>
            </div>

            {/* Card 3 */}
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-2xl text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Expert Team
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Certified security professionals with CISSP, CEH, and OSCP
                credentials providing world-class expertise.
              </p>
            </div>

            {/* Card 4 */}
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaClock className="text-2xl text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Rapid Results
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Fast turnaround times with detailed reports and actionable
                remediation recommendations for immediate implementation.
              </p>
            </div>
          </div>
        </div>

        {/* Security Testing Process Preview */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Our Proven Security Testing Process
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Systematic approach to security testing that ensures comprehensive
              coverage and actionable results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h4 className="text-lg font-semibold mb-3">
                Assessment & Planning
              </h4>
              <p className="text-gray-300 text-sm">
                Comprehensive security assessment planning and threat modeling
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h4 className="text-lg font-semibold mb-3">Testing & Analysis</h4>
              <p className="text-gray-300 text-sm">
                Vulnerability assessment and penetration testing execution
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h4 className="text-lg font-semibold mb-3">
                Reporting & Remediation
              </h4>
              <p className="text-gray-300 text-sm">
                Detailed reporting with remediation support and validation
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Start Your Security Testing Journey Today
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Don&apos;t wait for a security breach to discover vulnerabilities.
              Protect your applications and data with comprehensive security
              testing from industry experts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-brand-blue text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Get Free Security Assessment
              </button>

              <div className="text-gray-500 text-sm">
                No commitment • Expert consultation • Immediate insights
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityTestingReadyToEnsureQuality;
