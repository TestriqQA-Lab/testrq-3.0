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

const FantasyAppSecurityFeatures = () => {
  const securityFeatures = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Secure Transaction Encryption",
      description:
        "All user interactions, in-app purchases, and financial data are protected using advanced encryption protocols.",
      benefits: ["Payment Safety", "Data Confidentiality", "Encrypted Transfers"],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Fingerprint className="w-8 h-8" />,
      title: "User Identity Assurance",
      description:
        "Robust identity checks to verify real users and prevent bots or fake accounts from entering the platform.",
      benefits: ["KYC Validation", "Mobile OTP Verification", "Bot Detection"],
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Advanced Login Security",
      description:
        "Multi-factor authentication and secure access policies ensure player accounts stay protected.",
      benefits: ["2FA Enabled", "Device-Based Login Control", "Session Timeout"],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Integrity & Storage",
      description:
        "All user records, match stats, and financial logs are stored securely with encryption and access restrictions.",
      benefits: ["Data Encryption", "Role-Based Access", "Auto Backups"],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "User Privacy Controls",
      description:
        "Allow players to control what information is shared, shown, or hidden during gameplay and profile interactions.",
      benefits: ["Profile Visibility", "Leaderboard Privacy", "Avatar & Stats Controls"],
      color: "text-pink-600",
      bgColor: "bg-pink-50",
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Cheat & Threat Detection",
      description:
        "AI-powered monitoring to detect unusual gameplay patterns, multi-account abuse, and potential frauds.",
      benefits: ["Anti-Cheat Logic", "Behavioral Monitoring", "Suspicious Activity Alerts"],
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
  ];

  const complianceStandards = [
    { name: "ISO 27001", description: "Information Security Management" },
    { name: "ISO 27701", description: "Privacy Information Management" },
    { name: "GDPR", description: "General Data Protection Regulation" },
    { name: "CCPA", description: "California Consumer Privacy Act" },
    { name: "SOC 2", description: "Service Organization Control 2" },
    { name: "OWASP", description: "Open Web Application Security" },
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
            Enterprise-grade security solutions built for fantasy sports platforms to ensure fair play, data privacy,
            and safe user experiences.
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

        {/* Compliance Standards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Compliance Standards We Certify Against
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-4 border border-gray-200 hover:border-brand-blue transition-colors duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-blue text-white rounded-lg flex items-center justify-center font-bold text-sm">
                    {standard.name.split(" ")[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {standard.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {standard.description}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
              Fortify Your Fantasy Sports App Today
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Ensure your fantasy platform is secure, trusted, and fair.
              Begin your security certification journey now with our expert audit and testing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Start Security Audit
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#25A8E0] transition-colors duration-300">
                Download Compliance Checklist
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FantasyAppSecurityFeatures;
