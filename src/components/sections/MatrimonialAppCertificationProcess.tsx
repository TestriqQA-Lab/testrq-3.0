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

const MatrimonialAppCertificationProcess = () => {
  const processSteps = [
    {
      step: "01",
      icon: <FileSearch className="w-8 h-8" />,
      title: "Initial Assessment",
      description: "Comprehensive analysis of your matrimonial app's architecture, security measures, and compliance status.",
      duration: "2-3 days",
      deliverables: ["Security Assessment Report", "Compliance Gap Analysis", "Testing Strategy"],
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
    },
    {
      step: "02",
      icon: <TestTube className="w-8 h-8" />,
      title: "Comprehensive Testing",
      description: "In-depth testing across security, functionality, performance, and user experience dimensions.",
      duration: "7-10 days",
      deliverables: ["Test Execution Reports", "Vulnerability Assessment", "Performance Analysis"],
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
    },
    {
      step: "03",
      icon: <Shield className="w-8 h-8" />,
      title: "Security Audit",
      description: "Detailed security audit including penetration testing, data protection review, and privacy compliance check.",
      duration: "3-5 days",
      deliverables: ["Security Audit Report", "Penetration Test Results", "Privacy Compliance Review"],
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600",
    },
    {
      step: "04",
      icon: <Award className="w-8 h-8" />,
      title: "Certification & Support",
      description: "Final certification issuance with ongoing support and monitoring for continuous compliance.",
      duration: "1-2 days",
      deliverables: ["Certification Certificate", "Compliance Badge", "Ongoing Support Plan"],
      color: "bg-orange-50 border-orange-200",
      iconColor: "text-orange-600",
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
            A systematic 4-step approach to ensure your matrimonial app meets the highest standards 
            of security, privacy, and quality. Typically completed in 12-18 working days.
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
                <div className={`${step.color} border-2 rounded-xl p-8 hover:shadow-lg transition-all duration-300`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`text-4xl font-bold ${step.iconColor}`}>
                      {step.step}
                    </div>
                    <div className={`${step.iconColor}`}>
                      {step.icon}
                    </div>
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
                    <h4 className="font-semibold text-gray-900 mb-3">Key Deliverables:</h4>
                    <div className="space-y-2">
                      {step.deliverables.map((deliverable, deliverableIndex) => (
                        <div key={deliverableIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                          <span className="text-gray-700">{deliverable}</span>
                        </div>
                      ))}
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
              Total Timeline: 12-18 Working Days
            </h3>
            <p className="text-gray-600 mb-6">
              From initial assessment to final certification, we ensure a thorough and efficient process 
              that doesn&apos;t disrupt your development timeline.
            </p>
            <button className="bg-brand-blue hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Get Started Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MatrimonialAppCertificationProcess;

