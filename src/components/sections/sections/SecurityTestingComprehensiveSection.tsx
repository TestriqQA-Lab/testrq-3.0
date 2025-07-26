"use client";

import React from "react";
import { FaShieldAlt, FaBug, FaLock, FaUserSecret, FaNetworkWired, FaEye } from "react-icons/fa";

const SecurityTestingComprehensiveSection: React.FC = () => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            <span className="text-brand-blue">Comprehensive</span> Security Testing Services
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our security testing services protect your applications from cyber threats and vulnerabilities. 
            We conduct thorough security assessments, penetration testing, and vulnerability analysis to ensure 
            your software is secure, compliant, and resilient against attacks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Vulnerability Assessment */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-red-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaShieldAlt className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Vulnerability Assessment</h3>
            <p className="text-gray-600 leading-relaxed">
              Comprehensive scanning and analysis to identify security vulnerabilities, misconfigurations, and potential attack vectors.
            </p>
          </div>

          {/* Penetration Testing */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaBug className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Penetration Testing</h3>
            <p className="text-gray-600 leading-relaxed">
              Simulated cyber attacks to test the effectiveness of security controls and identify exploitable vulnerabilities.
            </p>
          </div>

          {/* Authentication Testing */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaLock className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Authentication Testing</h3>
            <p className="text-gray-600 leading-relaxed">
              Validating authentication mechanisms, session management, and access controls to prevent unauthorized access.
            </p>
          </div>

          {/* Authorization Testing */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaUserSecret className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Authorization Testing</h3>
            <p className="text-gray-600 leading-relaxed">
              Ensuring proper role-based access controls and privilege management to protect sensitive data and functionality.
            </p>
          </div>

          {/* Network Security Testing */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaNetworkWired className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Network Security Testing</h3>
            <p className="text-gray-600 leading-relaxed">
              Assessing network infrastructure security, firewall configurations, and communication protocols for vulnerabilities.
            </p>
          </div>

          {/* Security Monitoring */}
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaEye className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Security Monitoring</h3>
            <p className="text-gray-600 leading-relaxed">
              Continuous monitoring and analysis of security events, logs, and anomalies to detect and respond to threats.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
            Explore All Security Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default SecurityTestingComprehensiveSection;

