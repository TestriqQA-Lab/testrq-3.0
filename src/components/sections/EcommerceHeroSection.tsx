"use client";

import React from "react";
import { 
  FaShoppingCart, 
  FaCreditCard, 
  FaShieldAlt,
  FaRocket,
  FaUsers,
  FaChartLine,
  FaCheckCircle
} from "react-icons/fa";

const EcommerceHeroSection: React.FC = () => {
  const keyStats = [
    { value: "99.9%", label: "Uptime Guarantee", icon: FaRocket },
    { value: "50+", label: "E-commerce Platforms", icon: FaShoppingCart },
    { value: "500M+", label: "Transactions Tested", icon: FaCreditCard },
    { value: "24/7", label: "Monitoring Support", icon: FaShieldAlt }
  ];

  const trustBadges = [
    "PCI DSS Compliant Testing",
    "GDPR Privacy Compliance",
    "SOC 2 Type II Certified",
    "ISO 27001 Security Standards"
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 border border-[theme(color.brand.blue)] border-opacity-20">
              <FaShoppingCart color="white" className="w-4 h-4]" />
              <span className="text-sm font-semibold text-white">E-Commerce Testing Solutions</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Maximize Your
              <span className="block bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 bg-clip-text text-transparent">
                E-Commerce Success
              </span>
              with Expert QA Testing
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Ensure flawless shopping experiences, secure transactions, and optimal performance 
              across all devices. Our comprehensive e-commerce testing solutions help you increase 
              conversions, reduce cart abandonment, and build customer trust.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Secure Payment Testing</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Mobile Commerce Optimization</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Performance Under Load</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Cross-Platform Compatibility</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col lg:flex-col xl:flex-row gap-4 pt-4">
              <button className="bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 text-white px-3 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:scale-98 transition-all duration-300 flex items-center justify-center gap-2">
                Start Free E-Commerce Audit
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:border-[theme(color.brand.blue)] hover:text-[theme(color.brand.blue)] transition-all duration-300 flex items-center justify-center gap-2">
                <FaUsers className="w-5 h-5" />
                Schedule Consultation
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4 text-center">Trusted by leading e-commerce brands worldwide</p>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Proven E-Commerce Expertise</h3>
                <p className="text-gray-600">Results that drive business growth</p>
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
                  <span className="text-gray-700">Conversion Rate Increase</span>
                  <span className="font-bold text-green-600">+35%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Cart Abandonment Reduction</span>
                  <span className="font-bold text-green-600">-28%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Page Load Time Improvement</span>
                  <span className="font-bold text-green-600">-45%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Customer Satisfaction Score</span>
                  <span className="font-bold text-green-600">4.8/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-20 bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-8 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Optimize Your E-Commerce Platform?</h3>
            <p className="text-blue-100 mb-6 text-lg">
              Join 500+ e-commerce businesses that trust Testriq for comprehensive QA testing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[theme(color.brand.blue)] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 hover:scale-98 transition-all duration-200 ease-in-out">
                Get Free Testing Strategy
              </button>
              <button className="bg-white bg-opacity-20 text-[theme(color.brand.blue)] px-6 py-3 rounded-xl font-semibold hover:bg-opacity-30 hover:scale-98 transition-all duration-200 ease-in-out border border-white border-opacity-30">
                View Case Studies
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

export default EcommerceHeroSection;

