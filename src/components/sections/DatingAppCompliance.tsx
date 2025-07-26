"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Award, Verified } from "lucide-react";

const DatingAppCompliance = () => {
  const complianceStandards = [
    {
      title: "GDPR Compliance",
      description:
        "European data protection regulation compliance for dating apps",
      icon: <Shield className="w-12 h-12" />,
      keywords: ["GDPR", "Data Protection", "Privacy Laws", "EU Compliance"],
    },
    {
      title: "CCPA Certification",
      description:
        "California Consumer Privacy Act compliance for US dating platforms",
      icon: <Lock className="w-12 h-12" />,
      keywords: [
        "CCPA",
        "California Privacy",
        "Consumer Rights",
        "US Compliance",
      ],
    },
    {
      title: "ISO 27001 Standards",
      description: "Information security management system certification",
      icon: <Award className="w-12 h-12" />,
      keywords: [
        "ISO 27001",
        "Security Standards",
        "Information Security",
        "ISMS",
      ],
    },
    {
      title: "SOC 2 Type II",
      description: "Service organization control audit for dating app security",
      icon: <Verified className="w-12 h-12" />,
      keywords: [
        "SOC 2",
        "Security Audit",
        "Compliance Report",
        "Trust Services",
      ],
    },
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Industry{" "}
            <span className="text-brand-blue">Compliance & Standards</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our dating app security certification meets international standards
            and regulatory requirements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {complianceStandards.map((standard, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-brand-blue mb-6 flex justify-center">
                {standard.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {standard.title}
              </h3>
              <p className="text-gray-600 mb-6">{standard.description}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {standard.keywords.map((keyword, keyIndex) => (
                  <span
                    key={keyIndex}
                    className="bg-brand-blue/20 text-brand-blue px-3 py-1 rounded-full text-xs font-xl"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DatingAppCompliance;
