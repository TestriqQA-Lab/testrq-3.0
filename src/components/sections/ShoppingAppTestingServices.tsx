"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Globe,
  Zap,
  Shield,
  Users,
  Database,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const ShoppingAppTestingServices = () => {
  const testingServices = [
    {
      icon: <ShoppingBag className="w-10 h-10" />,
      title: "E-Commerce App Testing",
      description: "End-to-end testing for shopping apps across iOS and Android platforms.",
      features: [
        "Device and OS compatibility testing",
        "Cart, checkout, and payment flow testing",
        "Push notification and deep link validation",
        "App store and Play Store compliance",
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Web Store Testing",
      description: "Robust testing for online shopping portals and admin dashboards.",
      features: [
        "Cross-browser and responsive layout testing",
        "PWA and desktop compatibility",
        "SEO and schema markup validation",
        "Accessibility and compliance checks",
      ],
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Performance Testing",
      description: "Test platform performance during traffic spikes and sale events.",
      features: [
        "Load and stress testing",
        "Checkout latency analysis",
        "Search and filter speed validation",
        "CDN and image optimization checks",
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Security Testing",
      description: "Ensure secure transactions and data protection for online shoppers.",
      features: [
        "Vulnerability scanning & VAPT",
        "Secure payment gateway validation",
        "Session and cookie security",
        "User data encryption checks",
      ],
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "User Experience Testing",
      description: "Evaluate shopping journeys, ease of navigation, and conversion paths.",
      features: [
        "Customer flow analysis",
        "WCAG accessibility audits",
        "UI/UX issue detection",
        "Conversion optimization A/B testing",
      ],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Integration & API Testing",
      description: "Test APIs and 3rd-party tools critical to e-commerce operations.",
      features: [
        "Payment, tax, and shipping APIs",
        "ERP, CRM, and analytics integrations",
        "Social login & single sign-on checks",
        "Webhook and queue reliability",
      ],
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
    },
  ];

  const testingProcess = [
    {
      step: "01",
      title: "Requirement Analysis",
      description: "Understand business goals and test objectives for your shopping platform.",
    },
    {
      step: "02",
      title: "Test Case Design",
      description: "Craft functional, regression, and edge-case scenarios for real-world coverage.",
    },
    {
      step: "03",
      title: "Execution & Reporting",
      description: "Run tests across devices and browsers with real-time issue tracking.",
    },
    {
      step: "04",
      title: "Go-Live Validation",
      description: "Certify app readiness for peak traffic, seasonal campaigns, and secure launches.",
    },
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            End-to-End <span className="text-brand-blue">Testing for Shopping Apps</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From user experience to secure checkout, our QA services ensure your shopping app delivers top-tier performance, conversion, and reliability.
          </p>
        </motion.div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testingServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${service.bgColor} ${service.borderColor} border-2 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className={`${service.color} mb-4`}>{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
              <div className="space-y-2">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-8 shadow-lg mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Testing Process Tailored for E-Commerce
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testingProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                {index < testingProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-3 text-brand-blue">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShoppingAppTestingServices;
