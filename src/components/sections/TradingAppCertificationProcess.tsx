"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  TestTube,
  Shield,
  Award,
  Clock,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const TradingAppCertificationProcess = () => {
  const processSteps = [
    {
      step: "01",
      icon: <Search className="w-8 h-8" />,
      title: "Initial Assessment",
      duration: "3-5 days",
      description: "Comprehensive analysis of your trading app's architecture, security measures, regulatory compliance status, and performance benchmarks.",
      deliverables: [
        "Security Assessment Report",
        "Compliance Gap Analysis",
        "Performance Baseline",
        "Testing Strategy",
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      step: "02",
      icon: <TestTube className="w-8 h-8" />,
      title: "Comprehensive Testing",
      duration: "10-14 days",
      description: "In-depth testing across security, functionality, performance, compliance, and user experience dimensions with real-world trading scenarios.",
      deliverables: [
        "Test Execution Reports",
        "Vulnerability Assessment",
        "Performance Analysis",
        "Compliance Validation",
      ],
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      step: "03",
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Compliance Audit",
      duration: "5-7 days",
      description: "Detailed security audit including penetration testing, regulatory compliance review, and financial data protection validation.",
      deliverables: [
        "Security Audit Report",
        "Penetration Test Results",
        "Compliance Review",
        "Risk Assessment",
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      step: "04",
      icon: <Award className="w-8 h-8" />,
      title: "Certification & Support",
      duration: "2-3 days",
      description: "Final certification issuance with ongoing support, monitoring, and maintenance for continuous compliance and performance optimization.",
      deliverables: [
        "Certification Certificate",
        "Compliance Badge",
        "Ongoing Support Plan",
        "Monitoring Dashboard",
      ],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
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
            Our{" "}
            <span className="text-brand-blue">Certification Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic 4-step approach to ensure your trading app meets the highest standards 
            of security, compliance, and performance. Typically completed in 20-29 working days.
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
              <div className="flex-1 bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {step.step}
                  </div>
                  <div className={`${step.color}`}>
                    {step.icon}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {step.deliverables.map((deliverable, deliverableIndex) => (
                      <div key={deliverableIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step Visual */}
              <div className="flex-shrink-0">
                <div className={`w-32 h-32 ${step.bgColor} rounded-full flex items-center justify-center ${step.color} shadow-lg`}>
                  {step.icon}
                </div>
              </div>

              {/* Arrow (except for last step) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 mt-32">
                  <ArrowRight className="w-8 h-8 text-brand-blue" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Timeline Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-brand-blue to-blue-600 text-white rounded-xl p-8 mt-16"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Total Timeline: 20-29 Working Days
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              From initial assessment to final certification, we ensure a thorough and efficient 
              process that doesn&apos;t disrupt your trading operations or development timeline.
            </p>
            <button className="bg-white text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Get Started Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TradingAppCertificationProcess;

