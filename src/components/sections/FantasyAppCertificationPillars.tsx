"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Scale,
  Users,
  Zap,
  Lock,
  Trophy,
  CheckCircle,
  Star,
} from "lucide-react";
import Link from "next/link";

const FantasyAppCertificationPillars = () => {
  const pillars = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Security & Privacy",
      description:
        "We verify that your app follows advanced encryption, secure authentication, and robust data protection to safeguard player information and transactions.",
      features: [
        "End-to-end encryption",
        "Multi-factor authentication",
        "PCI DSS compliance",
        "GDPR compliance",
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      icon: <Scale className="w-12 h-12" />,
      title: "Fair Play & Compliance",
      description:
        "We ensure your platform adheres to fair gaming rules, regulatory requirements, and implements anti-fraud and verification measures.",
      features: [
        "Regulatory compliance",
        "Anti-fraud detection",
        "Algorithm transparency",
        "Age verification",
      ],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Performance & Reliability",
      description:
        "We assess your app’s architecture for real-time processing, low latency, and high uptime to ensure a reliable gaming experience.",
      features: [
        "Real-time data sync",
        "99.9% uptime SLA",
        "Load balancing",
        "Auto-scaling",
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "User Experience",
      description:
        "We evaluate whether your app offers intuitive design, accessibility, and seamless cross-platform functionality for players.",
      features: [
        "Mobile-first design",
        "Accessibility (WCAG 2.1)",
        "Cross-platform sync",
        "Intuitive navigation",
      ],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
    {
      icon: <Lock className="w-12 h-12" />,
      title: "Data Integrity",
      description:
        "We check your platform’s data validation, backup, and audit mechanisms to ensure the accuracy and security of all records.",
      features: [
        "Data validation",
        "Automated backups",
        "Audit trails",
        "Version control",
      ],
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
    },
    {
      icon: <Trophy className="w-12 h-12" />,
      title: "Quality Assurance",
      description:
        "We verify that your app has undergone functional, performance, and security testing to meet industry quality standards.",
      features: [
        "Automated testing",
        "Performance testing",
        "Security audits",
        "Code quality checks",
      ],
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600",
    },
  ];

  return (
    <section className="py-20 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-brand-blue text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Certification Standards
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The Six Pillars We <span className="text-brand-blue">Verify</span>{" "}
            Before Certifying
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don’t build your app — we verify it. Our certification process
            checks whether your fantasy sports platform fully satisfies these
            six core pillars. Only platforms meeting all standards receive our
            official certification.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${pillar.bgColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100`}
            >
              <div className={`${pillar.textColor} mb-6`}>{pillar.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {pillar.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {pillar.description}
              </p>
              <div className="space-y-3">
                {pillar.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className={`w-5 h-5 ${pillar.textColor}`} />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div
                className={`h-1 bg-gradient-to-r ${pillar.color} rounded-full mt-6`}
              ></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-brand-blue to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Does Your App Pass All Six Pillars?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              We only certify fantasy sports apps that meet all six of our
              verification pillars. Begin the evaluation process today and earn
              the mark of trust for your platform.
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

export default FantasyAppCertificationPillars;
