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

const FantasyAppCertificationPillars = () => {
  const pillars = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Security & Privacy",
      description: "Advanced encryption, secure authentication, and comprehensive data protection to safeguard player information and financial transactions.",
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
      description: "Ensuring regulatory compliance and fair gaming practices across all jurisdictions with transparent algorithms and anti-fraud measures.",
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
      description: "High-performance architecture with real-time data processing, minimal latency, and 99.9% uptime guarantee for seamless gaming experience.",
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
      description: "Intuitive interface design, accessibility compliance, and cross-platform compatibility ensuring exceptional user engagement and satisfaction.",
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
      description: "Robust data validation, backup systems, and audit trails to maintain the integrity and accuracy of all gaming data and transactions.",
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
      description: "Comprehensive testing protocols including functional, performance, and security testing to ensure the highest quality standards.",
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
          <div className="inline-flex items-center gap-2 bg-blue-100 text-brand-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Certification Standards
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Six Pillars of Fantasy Sports{" "}
            <span className="text-brand-blue">Certification</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive certification framework covers every aspect of fantasy sports app development, 
            ensuring your platform meets the highest industry standards and regulatory requirements.
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
              {/* Icon */}
              <div className={`${pillar.textColor} mb-6`}>
                {pillar.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {pillar.description}
              </p>

              {/* Features */}
              <div className="space-y-3">
                {pillar.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className={`w-5 h-5 ${pillar.textColor}`} />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Gradient Border */}
              <div className={`h-1 bg-gradient-to-r ${pillar.color} rounded-full mt-6`}></div>
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
              Ready to Get Your Fantasy Sports App Certified?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join the ranks of certified fantasy sports platforms and build trust with your players 
              through our comprehensive certification program.
            </p>
            <button className="bg-white text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Start Certification Process
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FantasyAppCertificationPillars;

