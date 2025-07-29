"use client";

import React from "react";
import { 
  FaShieldAlt, 
  FaRocket, 
  FaUsers,
  FaChartLine,
  FaCheckCircle,
  FaUniversity,
  FaLock,
  FaCreditCard
} from "react-icons/fa";const BankingHeroSection: React.FC = () => {
  const keyStats = [
    { value: "99.99%", label: "Security Compliance", icon: FaShieldAlt },
    { value: "100+", label: "Banking Platforms", icon: FaUniversity },
    { value: "1B+", label: "Transactions Tested", icon: FaCreditCard },
    { value: "24/7", label: "Monitoring Support", icon: FaRocket }
  ];

  const trustBadges = [
    "PCI DSS Level 1 Certified",
    "SOX Compliance Testing",
    "GDPR Privacy Compliant",
    "ISO 27001 Security Standards"
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 text-white bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2">
              <FaUniversity className="w-4 h-4" />
              <span className="text-sm">Banking & Finance Testing Solutions</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Secure Your
              <span className="block bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 bg-clip-text text-transparent">
                Financial Future
              </span>
              with Expert BFSI Testing
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Ensure bulletproof security, regulatory compliance, and flawless performance across all your banking and financial platforms. Our comprehensive banking and finance testing services help you build customer trust, meet GDPR, PCI DSS, and SOX compliance requirements, and stay ahead of evolving financial threats through robust BFSI testing solutions.

            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Regulatory Compliance</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Advanced Security Testing</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Core Banking Validation</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Mobile Banking QA</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col lg:flex-col xl:flex-row gap-4 pt-4">
              <button className="bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:scale-98 transition-all duration-300 flex items-center justify-center gap-2">
                <FaLock className="w-5 h-5" />
                Start Free Security Audit
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:border-[theme(color.brand.blue)] hover:text-[theme(color.brand.blue)] transition-all duration-300 flex items-center justify-center gap-2">
                <FaUsers className="w-5 h-5" />
                Schedule Consultation
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4 text-center">Trusted by leading financial institutions worldwide</p>
              <div className="grid grid-cols-2 md:grid-cols-2 text-center gap-3 items-center">
                {trustBadges.map((badge, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white bg-opacity-80 text-gray-600 text-xs rounded-full border border-gray-200 font-medium"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Visual */}
          <div className="space-y-8 py-10">
            {/* Key Statistics */}
            <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white border-opacity-50">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Proven Banking Expertise</h3>
                <p className="text-gray-600">Results that ensure financial security</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {keyStats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Success Metrics */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 border border-green-100">
              <div className="flex items-center gap-3 mb-6">
                <FaChartLine className="w-6 h-6 text-green-600" />
                <h4 className="text-xl font-bold text-gray-900">Average Client Results</h4>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Security Vulnerability Reduction</span>
                  <span className="font-bold text-green-600">-95%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Compliance Audit Success Rate</span>
                  <span className="font-bold text-green-600">100%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">System Downtime Reduction</span>
                  <span className="font-bold text-green-600">-80%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Customer Trust Score</span>
                  <span className="font-bold text-green-600">4.9/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-20 bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-8 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Fortify Your Financial Platform?</h3>
            <p className="text-blue-100 mb-6 text-lg">
              Join 200+ financial institutions that trust Testriq for comprehensive BFSI testing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 text-[theme(color.brand.blue)] justify-center">
              <button className="bg-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 hover:scale-98 transition-all duration-200 ease-in-out">
                Get Free Compliance Assessment
              </button>
              <button className="bg-white bg-opacity-20 px-6 py-3 rounded-xl font-semibold hover:bg-opacity-30 hover:scale-98 transition-all duration-200 ease-in-out border border-white border-opacity-30">
                View Banking Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
        .delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </section>
  );
};

export default BankingHeroSection;

