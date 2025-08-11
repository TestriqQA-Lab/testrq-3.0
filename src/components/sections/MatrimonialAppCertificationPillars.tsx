"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  CheckCircle,
  Users,
  Search,
  FileCheck,
} from "lucide-react";
import Link from "next/link";

const MatrimonialAppCertificationPillars = () => {
  const pillars = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Security & Data Protection",
      description:
        "ISO 27001 compliance, end-to-end encryption, secure authentication, and data breach prevention.",
      features: [
        "Data Encryption",
        "Secure Authentication",
        "Vulnerability Assessment",
        "Security Audits",
      ],
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
    },
    {
      icon: <Lock className="w-12 h-12" />,
      title: "Privacy Compliance",
      description:
        "GDPR compliance, privacy by design, consent management, and data minimization principles.",
      features: [
        "GDPR Compliance",
        "Privacy Controls",
        "Data Minimization",
        "Consent Management",
      ],
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: "Quality Assurance",
      description:
        "ISTQB standards, comprehensive testing, performance optimization, and bug prevention.",
      features: [
        "Functional Testing",
        "Performance Testing",
        "Usability Testing",
        "Compatibility Testing",
      ],
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "User Safety & Trust",
      description:
        "Identity verification, profile authenticity, anti-scam measures, and user reporting systems.",
      features: [
        "Identity Verification",
        "Profile Validation",
        "Anti-Scam Protection",
        "User Reporting",
      ],
      color: "bg-orange-50 border-orange-200",
      iconColor: "text-orange-600",
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: "Algorithm Fairness",
      description:
        "Unbiased matching algorithms, transparent recommendations, and ethical AI practices.",
      features: [
        "Algorithm Auditing",
        "Bias Detection",
        "Fairness Testing",
        "Transparency Reports",
      ],
      color: "bg-pink-50 border-pink-200",
      iconColor: "text-pink-600",
    },
    {
      icon: <FileCheck className="w-12 h-12" />,
      title: "Regulatory Compliance",
      description:
        "Industry standards compliance, legal requirements, and international regulations adherence.",
      features: [
        "Legal Compliance",
        "Industry Standards",
        "Audit Reports",
        "Certification Maintenance",
      ],
      color: "bg-indigo-50 border-indigo-200",
      iconColor: "text-indigo-600",
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
            <span className="text-[#25A8E0]">
              Matrimonial App Certification
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive certification program covers all critical aspects
            of matrimonial platform security, privacy, and quality to ensure
            your users can trust your platform with their most personal
            information.
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
              className={`${pillar.color} border-2 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className={`${pillar.iconColor} mb-4`}>{pillar.icon}</div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {pillar.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {pillar.description}
              </p>

              <div className="space-y-2">
                {pillar.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-700">{feature}</span>
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
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-brand-blue to-blue-600 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Get Your Matrimonial App Certified?
            </h3>
            <p className="text-blue-100 mb-6">
              Join 30+ matrimonial platforms that trust Testriq for
              comprehensive certification services.
            </p>
            <Link href="/contact-us">
              <button className="bg-white cursor-pointer text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Start Certification Process
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MatrimonialAppCertificationPillars;
