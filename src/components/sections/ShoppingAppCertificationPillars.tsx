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
import Link from "next/link";

const ShoppingAppCertificationPillars = () => {
  const pillars = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Security & Privacy",
      description: (
        <>
          We verify your app’s encryption, payment{" "}
          <Link href="/security-testing">security</Link>, and{" "}
          <Link href="/blog/post/data-privacy-and-security-for-e-learning-platforms-protecting-student-data-and-ensuring-compliance">
            data protection
          </Link>{" "}
          measures to ensure compliance with global security standards.
        </>
      ),
      features: [
        { id: 1, content: "PCI DSS compliance" },
        { id: 2, content: "SSL/TLS encryption" },
        { id: 3, content: "Data anonymization" },
        { id: 4, content: "GDPR compliance" },
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      icon: <CreditCard className="w-12 h-12" />,
      title: "Payment Security",
      description: (
        <>
          We confirm that your{" "}
          <Link href="/blog/post/secure-payment-gateway-testing-for-e-commerce">
            payment gateway
          </Link>{" "}
          meets the highest fraud detection and secure transaction requirements.
        </>
      ),
      features: [
        { id: 1, content: "Payment tokenization" },
        { id: 2, content: "Fraud detection" },
        { id: 3, content: "Multi-gateway support" },
        { id: 4, content: "3D Secure authentication" },
      ],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Performance & Speed",
      description: (
        <>
          We evaluate your app’s{" "}
          <Link href="/blog/post/performance-testing-for-ai-applications">
            speed
          </Link>
          ,{" "}
          <Link href="/blog/post/performance-scalability-testing-ensuring-iot-systems-handle-high-load-efficiently">
            scalability
          </Link>
          , and uptime to ensure it delivers a fast and reliable shopping
          experience.
        </>
      ),
      features: [
        { id: 1, content: "Sub-3s load times" },
        { id: 2, content: "CDN optimization" },
        { id: 3, content: "Auto-scaling" },
        {
          id: 4,
          content: (
            <Link href="/performance-testing-services">
              Performance monitoring
            </Link>
          ),
        },
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "User Experience",
      description: (
        <>
          We assess navigation, responsiveness, and{" "}
          <Link href="/blog/post/user-experience-testing-for-smart-devices-usability-accessibility">
            accessibility
          </Link>{" "}
          to confirm your app offers an exceptional user journey.
        </>
      ),
      features: [
        { id: 1, content: "Mobile-first design" },
        {
          id: 2,
          content: (
            <Link href="/blog/post/wcag-2-1-accessibility-compliance-ensuring-an-inclusive-learning-environment">
              Accessibility (WCAG 2.1)
            </Link>
          ),
        },
        { id: 3, content: "One-click checkout" },
        { id: 4, content: "Personalization" },
      ],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
    {
      icon: <Lock className="w-12 h-12" />,
      title: "Data Protection",
      description: (
        <>
          We verify{" "}
          <Link href="/blog/post/advanced-security-testing-for-healthcare-apps-protecting-patient-data-from-cyber-threats">
            secure data
          </Link>{" "}
          handling practices to ensure{" "}
          <Link href="/blog/post/fda-validation-support-for-healthcare-software-ensuring-compliance-medical-software-approval">
            compliance
          </Link>{" "}
          and safeguard customer{" "}
          <Link href="/blog/post/data-privacy-and-security-for-e-learning-platforms-protecting-student-data-and-ensuring-compliance">
            privacy
          </Link>
          .
        </>
      ),
      features: [
        {
          id: 1,
          content: (
            <Link href="/blog/post/iot-security-validation-protecting-devices-from-cyber-threats">
              Data encryption
            </Link>
          ),
        },
        { id: 2, content: "Privacy controls" },
        { id: 3, content: "Secure backups" },
        { id: 4, content: "Access controls" },
      ],
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "E-commerce Standards",
      description: (
        <>
          We check that your operations, from inventory to support, meet
          recognized{" "}
          <Link href="/blog/post/e-commerce-security-testing-compliance-services">
            e-commerce
          </Link>{" "}
          best practices.
        </>
      ),
      features: [
        { id: 1, content: "Inventory tracking" },
        { id: 2, content: "Order management" },
        { id: 3, content: "Return processing" },
        { id: 4, content: "Customer support" },
      ],
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600",
    },
  ];

  return (
    <section
      className="py-20 px-8 md:px-12 lg:px-24 bg-white"
      id="certification-pillars"
    >
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
            Six Pillars We <span className="text-brand-blue">Certify</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don’t build your shopping app - we independently verify that it
            meets these six critical pillars of{" "}
            <Link href="/security-testing">security</Link>,{" "}
            <Link href="/performance-testing-services">performance</Link>, and{" "}
            <Link href="/blog/post/user-experience-testing-for-smart-devices-usability-accessibility">
              usability
            </Link>
            . Our certification assures your customers that these standards are
            in place.
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
                {pillar.features.map(({ id, content }) => (
                  <div key={id} className="flex items-center gap-3">
                    <CheckCircle className={`w-5 h-5 ${pillar.textColor}`} />
                    <span className="text-sm text-gray-700">{content}</span>
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
              Want Independent Certification for Your Shopping App?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our role is to audit and confirm that your app meets these six
              pillars - so your customers know they can shop with confidence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShoppingAppCertificationPillars;
