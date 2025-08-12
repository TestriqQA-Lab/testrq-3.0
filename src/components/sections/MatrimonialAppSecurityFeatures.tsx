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

const MatrimonialAppSecurityFeatures = () => {
  const securityFeatures = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: "End-to-End Encryption",
      description:
        "All user communications and sensitive data are protected with military-grade encryption.",
      benefits: ["Message Privacy", "Data Protection", "Secure File Sharing"],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Fingerprint className="w-8 h-8" />,
      title: "Identity Verification",
      description:
        "Multi-layer identity verification to ensure authentic user profiles and prevent fake accounts.",
      benefits: [
        "Document Verification",
        "Biometric Checks",
        "Phone Verification",
      ],
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Advanced Authentication",
      description:
        "Multi-factor authentication and secure login mechanisms to protect user accounts.",
      benefits: ["2FA/MFA Support", "OAuth Integration", "Session Management"],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Secure Data Storage",
      description:
        "Encrypted data storage with regular backups and secure access controls.",
      benefits: ["Data Encryption", "Secure Backups", "Access Controls"],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Privacy Controls",
      description:
        "Granular privacy settings allowing users to control their information visibility.",
      benefits: ["Profile Privacy", "Photo Protection", "Contact Controls"],
      color: "text-pink-600",
      bgColor: "bg-pink-50",
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Threat Detection",
      description:
        "AI-powered threat detection to identify and prevent suspicious activities and scams.",
      benefits: ["Scam Detection", "Behavior Analysis", "Real-time Monitoring"],
      color: "text-red-600",
      bgColor: "bg-red-50",
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
            Advanced <span className="text-brand-blue">Security Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive security measures designed specifically for
            matrimonial platforms to protect sensitive personal information and
            ensure user safety.
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
              Secure Your Matrimonial Platform Today
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Don&apos;t leave your user&apos;s sensitive information
              vulnerable. Get comprehensive security certification that builds
              trust and protects your platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <button className="bg-white cursor-pointer text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                  Start Security Assessment
                </button>
              </Link>
              <button className="border-2 cursor-pointer border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#25A8E0] transition-colors duration-300">
                Download Security Checklist
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MatrimonialAppSecurityFeatures;
