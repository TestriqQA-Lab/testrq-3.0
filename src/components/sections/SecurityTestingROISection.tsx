"use client";

import React from "react";
import { FaChartLine, FaShieldAlt, FaMoneyBillWave, FaHandshake } from "react-icons/fa";

const SecurityTestingROISection: React.FC = () => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The ROI of <span className="text-brand-blue">Security Testing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Investing in robust security testing is not just a cost, but a strategic investment that yields significant returns by protecting sensitive data, preserving your reputation, avoiding regulatory fines, and securing your infrastructure and bottom line.

          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Cost Savings */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
            <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaMoneyBillWave className="text-3xl text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Reduced Breach Costs</h3>
            <p className="text-gray-600 mb-6">
              Prevent costly data breaches, regulatory fines, and legal expenses by identifying vulnerabilities proactively.
            </p>
            <div className="text-green-600 font-bold text-2xl">Up to 70% Savings</div>
          </div>

          {/* Reputation Protection */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
            <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaShieldAlt className="text-3xl text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Enhanced Brand Reputation</h3>
            <p className="text-gray-600 mb-6">
              Maintain customer trust and brand integrity by demonstrating a strong commitment to data security.
            </p>
            <div className="text-blue-600 font-bold text-2xl">Increased Customer Trust</div>
          </div>

          {/* Compliance Assurance */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
            <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaHandshake className="text-3xl text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Regulatory Compliance</h3>
            <p className="text-gray-600 mb-6">
              Avoid penalties and ensure adherence to industry-specific regulations like GDPR, HIPAA, and PCI DSS.
            </p>
            <div className="text-purple-600 font-bold text-2xl">100% Compliance Rate</div>
          </div>

          {/* Business Continuity */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
            <div className="bg-red-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaChartLine className="text-3xl text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Improved Business Continuity</h3>
            <p className="text-gray-600 mb-6">
              Minimize downtime and operational disruptions caused by security incidents and cyberattacks.
            </p>
            <div className="text-red-600 font-bold text-2xl">Reduced Downtime Risk</div>
          </div>
        </div>

        {/* Infographic/Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Key Security Statistics</h3>
            <p className="text-gray-200 max-w-3xl mx-auto">
              Understanding the landscape of cyber threats and the impact of security breaches underscores the importance of proactive security testing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">$4.45M</div>
              <p className="text-gray-200">Average Cost of a Data Breach (IBM, 2023)</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">82%</div>
              <p className="text-gray-200">Breaches Involve Data Stored in the Cloud (Verizon, 2023)</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">95%</div>
              <p className="text-gray-200">Cybersecurity Breaches are Due to Human Error (IBM, 2023)</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Secure Your Future with Testriq
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Don&apos;t let security vulnerabilities put your business at risk. Partner with Testriq for comprehensive security testing and robust protection.
            </p>
            <button className="bg-brand-blue text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
              Request a Security Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityTestingROISection;

