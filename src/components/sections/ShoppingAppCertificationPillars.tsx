"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  CreditCard,
  Users,
  Zap,
  Lock,
  ShoppingCart,
  CheckCircle,
  Star,
} from "lucide-react";

const ShoppingAppCertificationPillars = () => {
  const pillars = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Security & Privacy",
      description: "Advanced encryption, secure payment processing, and comprehensive data protection to safeguard customer information and financial transactions.",
      features: [
        "PCI DSS compliance",
        "SSL/TLS encryption",
        "Data anonymization",
        "GDPR compliance",
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      icon: <CreditCard className="w-12 h-12" />,
      title: "Payment Security",
      description: "Secure payment gateway integration with fraud detection, tokenization, and compliance with international payment standards.",
      features: [
        "Payment tokenization",
        "Fraud detection",
        "Multi-gateway support",
        "3D Secure authentication",
      ],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Performance & Speed",
      description: "Optimized loading times, efficient caching, and scalable architecture to handle high traffic volumes and ensure smooth shopping experience.",
      features: [
        "Sub-3s load times",
        "CDN optimization",
        "Auto-scaling",
        "Performance monitoring",
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "User Experience",
      description: "Intuitive navigation, mobile-responsive design, and accessibility compliance ensuring exceptional shopping experience across all devices.",
      features: [
        "Mobile-first design",
        "Accessibility (WCAG 2.1)",
        "One-click checkout",
        "Personalization",
      ],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
    {
      icon: <Lock className="w-12 h-12" />,
      title: "Data Protection",
      description: "Robust data handling practices, secure storage, and privacy controls to protect customer data and maintain regulatory compliance.",
      features: [
        "Data encryption at rest",
        "Privacy controls",
        "Secure backups",
        "Access controls",
      ],
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "E-commerce Standards",
      description: "Compliance with e-commerce best practices, inventory management, order processing, and customer service standards.",
      features: [
        "Inventory tracking",
        "Order management",
        "Return processing",
        "Customer support",
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
            Six Pillars of Shopping Apps{" "}
            <span className="text-brand-blue">Certification</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive certification framework covers every aspect of e-commerce app development, 
            ensuring your platform meets the highest industry standards and provides secure, seamless shopping experiences.
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
              Ready to Get Your Shopping App Certified?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join the ranks of certified e-commerce platforms and build trust with your customers 
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

export default ShoppingAppCertificationPillars;

