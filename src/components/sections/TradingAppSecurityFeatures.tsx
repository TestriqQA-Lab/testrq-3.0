"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Lock,
  UserCheck,
  Shield,
  Database,
  Eye,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const TradingAppSecurityFeatures = () => {
  const securityFeatures = [
    {
      icon: <Lock className="w-10 h-10" />,
      title: "End-to-End Encryption",
      description: "All trading data and communications are protected with military-grade encryption.",
      features: [
        "AES-256 encryption for data at rest",
        "TLS 1.3 for data in transit",
        "Secure key management",
        "Encrypted trading communications",
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: <UserCheck className="w-10 h-10" />,
      title: "Identity Verification",
      description: "Multi-layer KYC/AML verification to ensure authentic trader identities and prevent fraud.",
      features: [
        "Document verification",
        "Biometric authentication",
        "Address verification",
        "Enhanced due diligence",
      ],
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Advanced Authentication",
      description: "Multi-factor authentication and secure login mechanisms to protect trading accounts.",
      features: [
        "2FA/MFA support",
        "Hardware token integration",
        "Biometric login",
        "Session management",
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Secure Data Storage",
      description: "Encrypted data storage with regular backups and secure access controls for financial data.",
      features: [
        "Encrypted databases",
        "Secure cloud storage",
        "Regular automated backups",
        "Access control policies",
      ],
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: <Eye className="w-10 h-10" />,
      title: "Real-time Monitoring",
      description: "Continuous monitoring of trading activities and system performance for anomaly detection.",
      features: [
        "24/7 system monitoring",
        "Anomaly detection",
        "Performance tracking",
        "Security event logging",
      ],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: <AlertTriangle className="w-10 h-10" />,
      title: "Fraud Detection",
      description: "AI-powered fraud detection to identify and prevent suspicious trading activities.",
      features: [
        "Machine learning algorithms",
        "Pattern recognition",
        "Risk scoring",
        "Automated alerts",
      ],
      color: "text-pink-600",
      bgColor: "bg-pink-50",
    },
  ];

  const complianceStandards = [
    {
      logo: "ISO",
      title: "ISO 27001",
      subtitle: "Information Security Management",
    },
    {
      logo: "SOC",
      title: "SOC 2",
      subtitle: "Service Organization Control",
    },
    {
      logo: "FINRA",
      title: "FINRA",
      subtitle: "Financial Industry Regulatory Authority",
    },
    {
      logo: "SEC",
      title: "SEC",
      subtitle: "Securities and Exchange Commission",
    },
    {
      logo: "GDPR",
      title: "GDPR",
      subtitle: "General Data Protection Regulation",
    },
    {
      logo: "PCI",
      title: "PCI DSS",
      subtitle: "Payment Card Industry Data Security",
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
            Advanced{" "}
            <span className="text-brand-blue">Security Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive security measures designed specifically for trading platforms to protect 
            sensitive financial information and ensure regulatory compliance.
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${feature.bgColor} rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className={`${feature.color} mb-4`}>
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {feature.description}
              </p>
              
              <div className="space-y-2">
                {feature.features.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compliance Standards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-xl p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Compliance Standards We Certify Against
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-brand-blue text-white rounded-lg flex items-center justify-center font-bold text-sm mx-auto mb-3">
                  {standard.logo}
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">
                  {standard.title}
                </h4>
                <p className="text-xs text-gray-600">
                  {standard.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-brand-blue to-blue-600 text-white rounded-xl p-8"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Secure Your Trading Platform Today
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Don&apos;t leave your trader&apos;s financial data vulnerable. Get comprehensive security 
              certification that builds trust and protects your platform from cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2">
                Start Security Assessment
                <ArrowRight className="w-5 h-5" />
              </button>
              {/* <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-brand-blue transition-colors duration-300">
                Download Security Checklist
              </button> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TradingAppSecurityFeatures;

