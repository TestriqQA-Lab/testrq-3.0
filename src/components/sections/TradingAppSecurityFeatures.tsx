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
      description:
        "We ensure your platform protects all trading data and communications with robust encryption before granting certification.",
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
      description:
        "We validate that your identity checks prevent fraud and maintain regulatory compliance.",
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
      description:
        "We confirm that multi-factor authentication and secure login methods are implemented effectively.",
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
      description:
        "We check that all stored data is encrypted, backed up, and access is tightly controlled.",
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
      description:
        "We review your monitoring systems to ensure continuous protection against suspicious activity.",
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
      description:
        "We assess your fraud detection capabilities to ensure suspicious activity is quickly identified and addressed.",
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

  const scrollToSection = () => {
    const section = document.getElementById(
      "trading-app-certification-process"
    );
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Six Pillars of{" "}
            <span className="text-brand-blue">Trading App Security</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don’t just list features - we verify your platform meets all six
            essential security pillars before awarding our certification.
          </p>
        </motion.div>

        {/* Security Features */}
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
              <div className={`${feature.color} mb-4`}>{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {feature.description}
              </p>
              <div className="space-y-2">
                {feature.features.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-brand-blue to-blue-600 text-white rounded-xl p-8"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Certified?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              We’ll assess your trading platform against our six security
              pillars and certify your compliance - giving your users complete
              confidence in your safety standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToSection}
                className="bg-white text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                View Certification Process
                <ArrowRight className="w-5 h-5" />
              </button>
              {/* <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-brand-blue transition-colors duration-300">
                Download Requirements
              </button> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TradingAppSecurityFeatures;
