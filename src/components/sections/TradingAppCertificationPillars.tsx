"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  FileCheck,
  Zap,
  Database,
  TrendingUp,
  Scale,
  CheckCircle,
} from "lucide-react";

const TradingAppCertificationPillars = () => {
  const pillars = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Security & Fraud Prevention",
      description: "ISO 27001 compliance, end-to-end encryption, multi-factor authentication, and advanced fraud detection mechanisms.",
      features: [
        "Data Encryption",
        "Secure Authentication",
        "Vulnerability Assessment",
        "Fraud Detection",
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: <FileCheck className="w-12 h-12" />,
      title: "Regulatory Compliance",
      description: "FINRA, SEC, MiFID II compliance, KYC/AML verification, and data privacy regulations adherence.",
      features: [
        "FINRA Compliance",
        "KYC/AML Verification",
        "Data Privacy (GDPR)",
        "Regulatory Reporting",
      ],
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Performance & Reliability",
      description: "Low latency testing, high throughput validation, scalability assessment, and disaster recovery planning.",
      features: [
        "Low Latency Testing",
        "Scalability Assessment",
        "Load Testing",
        "Disaster Recovery",
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Data Accuracy & Integrity",
      description: "Real-time market data validation, transaction integrity checks, order execution accuracy, and data reconciliation.",
      features: [
        "Market Data Validation",
        "Transaction Integrity",
        "Order Execution Accuracy",
        "Data Reconciliation",
      ],
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Algorithmic Trading Security",
      description: "Algorithm validation, risk management controls, automated trading safeguards, and performance monitoring.",
      features: [
        "Algorithm Validation",
        "Risk Management",
        "Trading Safeguards",
        "Performance Monitoring",
      ],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      icon: <Scale className="w-12 h-12" />,
      title: "User Experience & Usability",
      description: "Intuitive interface design, cross-device compatibility, error handling, and accessibility compliance.",
      features: [
        "Interface Design",
        "Cross-Device Testing",
        "Error Handling",
        "Accessibility (WCAG)",
      ],
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
    },
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Six Pillars of{" "}
            <span className="text-brand-blue">Trading App Certification</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive certification program covers all critical aspects of trading platform 
            security, compliance, and performance to ensure your users can trust your platform with 
            their financial investments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${pillar.bgColor} ${pillar.borderColor} border-2 rounded-xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className={`${pillar.color} mb-6`}>
                {pillar.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {pillar.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {pillar.description}
              </p>
              
              <div className="space-y-3">
                {pillar.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-brand-blue to-blue-600 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Get Your Trading App Certified?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join 500+ trading platforms that trust Testriq for comprehensive certification services.
            </p>
            <button className="bg-white text-[#25A8E0] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Start Certification Process
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TradingAppCertificationPillars;

