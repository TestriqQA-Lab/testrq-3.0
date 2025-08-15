"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileSearch,
  TestTube,
  Shield,
  Award,
  ArrowRight,
  Clock,
} from "lucide-react";
import Link from "next/link";

const ShoppingAppCertificationProcess = () => {
  const processSteps = [
    {
      step: "01",
      icon: <FileSearch className="w-8 h-8" />,
      title: "Initial Compliance Assessment",
      description:
        "We evaluate your shopping app's architecture, data handling practices, payment flow, and regulatory readiness.",
      duration: "2-3 days",
      deliverables: [
        "Risk & Compliance Audit",
        "Payment Flow Review",
        "Certification Strategy",
      ],
      color: "bg-yellow-50 border-yellow-200",
      iconColor: "text-yellow-600",
    },
    {
      step: "02",
      icon: <TestTube className="w-8 h-8" />,
      title: "Full-Stack Testing",
      description:
        "Comprehensive testing of user experience, cart flow, payment gateways, security layers, and cross-platform performance.",
      duration: "7-10 days",
      deliverables: [
        "UX/UI Testing Report",
        "Functional & Integration Report",
        "Performance Benchmark Report",
      ],
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
    },
    {
      step: "03",
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Privacy Audit",
      description:
        "In-depth security validation including encryption checks, vulnerability scanning, and GDPR/CCPA compliance review.",
      duration: "3-5 days",
      deliverables: [
        "Penetration Test Report",
        "Data Privacy Compliance Report",
        "Encryption & Tokenization Review",
      ],
      color: "bg-red-50 border-red-200",
      iconColor: "text-red-600",
    },
    {
      step: "04",
      icon: <Award className="w-8 h-8" />,
      title: "Certification & Post-Support",
      description:
        "Issuance of your certification with optional trust badge, plus ongoing support for regulatory and security updates.",
      duration: "1-2 days",
      deliverables: [
        "E-Commerce App Certification",
        "Compliance Badge & Seal",
        "Post-Certification Maintenance Plan",
      ],
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
    },
  ];

  return (
    <section
      id="shopping-app-certification-process"
      className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="text-brand-blue">
              Shopping App Certification Process
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A structured 4-phase certification process designed to ensure your
            shopping app meets the highest standards of security, performance,
            and regulatory compliance — completed in 12–18 working days.
          </p>
        </motion.div>

        <div className="space-y-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Step Content */}
              <div className="flex-1">
                <div
                  className={`${step.color} border-2 rounded-xl p-8 hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`text-4xl font-bold ${step.iconColor}`}>
                      {step.step}
                    </div>
                    <div className={`${step.iconColor}`}>{step.icon}</div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      {step.duration}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Key Deliverables:
                    </h4>
                    <div className="space-y-2">
                      {step.deliverables.map(
                        (deliverable, deliverableIndex) => (
                          <div
                            key={deliverableIndex}
                            className="flex items-center gap-2"
                          >
                            <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                            <span className="text-gray-700">{deliverable}</span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              {index < processSteps.length - 1 && (
                <div className="flex-shrink-0">
                  <div className="hidden lg:block">
                    <ArrowRight className="w-8 h-8 text-brand-blue" />
                  </div>
                  <div className="lg:hidden rotate-90">
                    <ArrowRight className="w-8 h-8 text-brand-blue" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Total Timeline: 12–18 Working Days
            </h3>
            <p className="text-gray-600 mb-6">
              We ensure full compliance, security, and trustworthiness — all
              delivered within a tight, well-managed certification cycle.
            </p>
            <Link href="/contact-us">
              <button className="bg-brand-blue cursor-pointer text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Get Started Today
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShoppingAppCertificationProcess;
