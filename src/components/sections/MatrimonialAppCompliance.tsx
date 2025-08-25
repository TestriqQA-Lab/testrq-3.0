"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  FileText,
  Shield,
  CheckCircle,
  AlertCircle,
  Users,
  Scale,
} from "lucide-react";
import Link from "next/link";

const MatrimonialAppCompliance = () => {
  const complianceAreas = [
    {
      icon: <Globe className="w-10 h-10" />,
      title: "GDPR Compliance",
      description:
        "European General Data Protection Regulation compliance for global matrimonial platforms.",
      requirements: [
        "Data Subject Rights Implementation",
        "Privacy by Design Architecture",
        "Consent Management Systems",
        "Data Processing Records",
      ],
      regions: ["European Union", "UK", "Switzerland"],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: "CCPA Compliance",
      description:
        "California Consumer Privacy Act requirements for US-based matrimonial services.",
      requirements: [
        "Consumer Rights Portal",
        "Data Sale Opt-out Mechanisms",
        "Privacy Policy Updates",
        "Third-party Data Sharing Disclosure",
      ],
      regions: ["California", "United States"],
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "ISO 27001 Certification",
      description:
        "International standard for information security management systems.",
      requirements: [
        "Information Security Policy",
        "Risk Assessment Framework",
        "Security Controls Implementation",
        "Continuous Monitoring",
      ],
      regions: ["Global Standard"],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Data Localization",
      description:
        "Regional data residency requirements for matrimonial platforms.",
      requirements: [
        "Local Data Storage",
        "Cross-border Transfer Controls",
        "Regional Server Infrastructure",
        "Jurisdiction-specific Policies",
      ],
      regions: ["India", "Russia", "China", "Brazil"],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
  ];

  const complianceChecklist = [
    {
      category: "Data Protection",
      items: [
        "Personal data encryption at rest and in transit",
        "Secure user authentication and authorization",
        "Regular security vulnerability assessments",
        "Data breach notification procedures",
      ],
    },
    {
      category: "Privacy Rights",
      items: [
        "User consent management system",
        "Data portability and export features",
        "Right to erasure (delete account) functionality",
        "Privacy policy transparency and accessibility",
      ],
    },
    {
      category: "Operational Security",
      items: [
        "Employee background checks and training",
        "Access control and privilege management",
        "Incident response and recovery procedures",
        "Regular compliance audits and assessments",
      ],
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
            Global <span className="text-brand-blue">Compliance Standards</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ensure your matrimonial app meets international regulatory
            requirements and industry standards across different jurisdictions
            and markets.
          </p>
        </motion.div>

        {/* Compliance Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {complianceAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${area.bgColor} ${area.borderColor} border-2 rounded-xl p-6 hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`${area.color}`}>{area.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Key Requirements:
                </h4>
                <div className="space-y-2">
                  {area.requirements.map((requirement, reqIndex) => (
                    <div key={reqIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">
                        {requirement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Applicable Regions:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {area.regions.map((region, regionIndex) => (
                    <span
                      key={regionIndex}
                      className="bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-700 border border-gray-200"
                    >
                      {region}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compliance Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Comprehensive Compliance Checklist
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {complianceChecklist.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-brand-blue text-white rounded-lg flex items-center justify-center">
                    <Scale className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-gray-900">
                    {category.category}
                  </h4>
                </div>

                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700 leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compliance Assessment CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-brand-blue to-blue-600 text-white rounded-xl p-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <AlertCircle className="w-8 h-8" />
              <h3 className="text-2xl font-bold">Compliance Gap Assessment</h3>
            </div>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Not sure if your matrimonial app meets all compliance
              requirements? Get a free compliance gap assessment to identify
              areas that need attention.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <button className="bg-white cursor-pointer text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                  Free Compliance Assessment
                </button>
              </Link>
              {/* <button className="border-2 cursor-pointer border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#25A8E0] transition-colors duration-300">
                Download Compliance Guide
              </button> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MatrimonialAppCompliance;
