"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Users,
  MessageCircle,
  Brain,
  Lock,
  BarChart3,
  CheckCircle,
} from "lucide-react";

const DatingAppSixPillars = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const certificationFeatures = [
    {
      icon: <Shield className="w-16 h-16" />,
      title: "Identity Verification",
      description:
        "Advanced AI-powered profile authentication with biometric matching and document verification",
      benefits: [
        "Reduce fake profiles by 95%",
        "Increase user trust",
        "Prevent fraud",
        "Real-time verification",
      ],
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
    },
    {
      icon: <Users className="w-16 h-16" />,
      title: "User Safety Controls",
      description:
        "Comprehensive safety mechanisms with real-time monitoring and instant response systems",
      benefits: [
        "24/7 threat detection",
        "Instant blocking",
        "Emergency protocols",
        "Harassment prevention",
      ],
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
    },
    {
      icon: <MessageCircle className="w-16 h-16" />,
      title: "Content Moderation",
      description:
        "AI-powered content filtering with human oversight for maximum safety and compliance",
      benefits: [
        "NSFW detection",
        "Hate speech filter",
        "Auto-moderation",
        "Human review",
      ],
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600",
    },
    {
      icon: <Brain className="w-16 h-16" />,
      title: "Algorithm Fairness",
      description:
        "Unbiased matching algorithms tested for fairness across all demographics and backgrounds",
      benefits: [
        "Bias detection",
        "Fair matching",
        "Equal opportunities",
        "Transparent algorithms",
      ],
      color: "bg-orange-50 border-orange-200",
      iconColor: "text-orange-600",
    },
    {
      icon: <Lock className="w-16 h-16" />,
      title: "Data Privacy",
      description:
        "Enterprise-grade security with GDPR compliance and end-to-end encryption",
      benefits: [
        "GDPR compliance",
        "End-to-end encryption",
        "Secure data storage",
        "Privacy by design",
      ],
      color: "bg-red-50 border-red-200",
      iconColor: "text-red-600",
    },
    {
      icon: <BarChart3 className="w-16 h-16" />,
      title: "Performance Monitoring",
      description:
        "Continuous performance optimization and reliability testing for seamless user experience",
      benefits: [
        "Performance optimization",
        "Uptime monitoring",
        "Load testing",
        "User experience",
      ],
      color: "bg-indigo-50 border-indigo-200",
      iconColor: "text-indigo-600",
    },
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Six Pillars of{" "}
            <span className="text-brand-blue">Trust Certification</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive certification covers every aspect of dating app
            security and user protection
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-2xl border-2 ${feature.color} transition-all duration-300 cursor-pointer`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className={`${feature.iconColor} mb-6`}>{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.description}
              </p>

              <div className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <motion.div
                    key={benefitIndex}
                    className="flex items-center text-sm text-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: hoveredFeature === index ? 1 : 0.7,
                      x: hoveredFeature === index ? 0 : -10,
                    }}
                    transition={{ delay: benefitIndex * 0.1 }}
                  >
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {benefit}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DatingAppSixPillars;
