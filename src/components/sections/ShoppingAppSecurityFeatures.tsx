"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Lock,
  Shield,
  Eye,
  Database,
  AlertTriangle,
  CheckCircle,
  Fingerprint,
} from "lucide-react";
import Link from "next/link";

const ShoppingAppSecurityFeatures = () => {
  const securityFeatures = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Secure Payment Gateway",
      description:
        "We verify that your shopping app processes transactions in a fully secure, compliant, and fraud-resistant environment.",
      benefits: [
        "Advanced Encryption",
        "Fraud Prevention",
        "Safe Checkout Experience",
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Fingerprint className="w-8 h-8" />,
      title: "User Identity Protection",
      description:
        "We ensure that robust authentication and verification protocols protect every shopper account.",
      benefits: [
        "Biometric Access",
        "Multi-Factor Authentication",
        "Device Recognition",
      ],
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Fraud Detection Systems",
      description:
        "We confirm that advanced systems are in place to detect and block suspicious activity in real time.",
      benefits: ["Behavior Monitoring", "Real-Time Alerts", "Bot Prevention"],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Encrypted Data Storage",
      description:
        "We check that sensitive order and customer data is encrypted and stored under strict access controls.",
      benefits: ["Strong Data Encryption", "Secure Backups", "Access Control"],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Privacy Preference Center",
      description:
        "We make sure shoppers have full control over their personal data and privacy preferences.",
      benefits: [
        "Consent Management",
        "Cookie Control",
        "Data Export/Delete Options",
      ],
      color: "text-pink-600",
      bgColor: "bg-pink-50",
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Security Incident Monitoring",
      description:
        "We validate that systems are in place for continuous monitoring and rapid incident response.",
      benefits: [
        "Round-the-Clock Monitoring",
        "Incident Response Protocols",
        "Threat Intelligence",
      ],
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-brand-blue">Advanced Security</span> for
            Shopping Apps
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We certify shopping apps only after confirming they meet our
            complete set of security requirements - ensuring trust, compliance,
            and customer protection.
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
              <div className={`${feature.color} mb-4`}>{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {feature.description}
              </p>
              <div className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-brand-blue to-blue-600 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Ready for Our Security Seal?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Certification is granted only after verifying that every one of
              these essential security features is fully implemented.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <button className="bg-white text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                  Begin Certification
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShoppingAppSecurityFeatures;
