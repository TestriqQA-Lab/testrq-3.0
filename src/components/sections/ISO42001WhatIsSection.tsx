"use client";

import React from "react";
import Link from "next/link";
import {
  FaBrain,
  FaBalanceScale,
  FaShieldAlt,
  FaEye,
  FaDatabase,
  FaUsers,
  FaCogs,
  FaFileAlt,
} from "react-icons/fa";

const ISO42001WhatIsSection: React.FC = () => {
  const keyAreas = [
    {
      icon: <FaBrain className="w-6 h-6" />,
      title: "AI Risk Assessment",
      description:
        "Systematic identification, analysis, and evaluation of risks specific to AI systems throughout their lifecycle.",
      color: "emerald",
    },
    {
      icon: <FaBalanceScale className="w-6 h-6" />,
      title: "Ethical AI Governance",
      description:
        "Establishing policies and controls that ensure AI systems are fair, unbiased, and respect human rights.",
      color: "teal",
    },
    {
      icon: <FaEye className="w-6 h-6" />,
      title: "Transparency & Explainability",
      description:
        "Ensuring AI decisions are interpretable and stakeholders understand how AI systems reach outcomes.",
      color: "blue",
    },
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: "Data Privacy & Security",
      description:
        "Protecting personal data used in AI training and inference, aligned with GDPR and global privacy laws.",
      color: "indigo",
    },
    {
      icon: <FaDatabase className="w-6 h-6" />,
      title: "Data Quality Management",
      description:
        "Validating training data integrity, representativeness, and bias-free composition for reliable AI outputs.",
      color: "cyan",
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Stakeholder Engagement",
      description:
        "Defining roles, responsibilities, and communication protocols for AI system governance.",
      color: "green",
    },
    {
      icon: <FaCogs className="w-6 h-6" />,
      title: "Operational Controls",
      description:
        "Implementing monitoring, logging, and audit trails for AI systems in production environments.",
      color: "purple",
    },
    {
      icon: <FaFileAlt className="w-6 h-6" />,
      title: "Continual Improvement",
      description:
        "Establishing feedback loops, performance monitoring, and iterative enhancement processes.",
      color: "rose",
    },
  ];

  const colorMap: Record<string, { bg: string; text: string; border: string; iconBg: string }> = {
    emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-100", iconBg: "bg-emerald-100" },
    teal: { bg: "bg-teal-50", text: "text-teal-600", border: "border-teal-100", iconBg: "bg-teal-100" },
    blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-100", iconBg: "bg-blue-100" },
    indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-100", iconBg: "bg-indigo-100" },
    cyan: { bg: "bg-cyan-50", text: "text-cyan-600", border: "border-cyan-100", iconBg: "bg-cyan-100" },
    green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-100", iconBg: "bg-green-100" },
    purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-100", iconBg: "bg-purple-100" },
    rose: { bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-100", iconBg: "bg-rose-100" },
  };

  return (
    <section className="bg-white py-20 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-emerald-600 gap-2 text-white px-4 py-2 rounded-full mb-6 shadow-lg">
            <FaShieldAlt />
            <span className="text-sm font-bold uppercase tracking-wider">
              Understanding the Standard
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            What is{" "}
            <span className="text-emerald-600">ISO/IEC 42001:2023?</span>
          </h2>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto leading-relaxed">
            ISO/IEC 42001:2023 is the first internationally recognized standard
            that specifies requirements for establishing, implementing,
            maintaining, and continually improving an{" "}
            <span className="font-semibold text-emerald-600">
              Artificial Intelligence Management System (AIMS)
            </span>{" "}
            within the context of an organization. It applies to any entity
            involved in developing, providing, or using AI-based products or
            services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {keyAreas.map((area, index) => {
            const colors = colorMap[area.color];
            return (
              <div
                key={index}
                className={`${colors.bg} border ${colors.border} rounded-3xl p-6 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1`}
              >
                <div
                  className={`${colors.iconBg} ${colors.text} p-3 rounded-2xl inline-block mb-4 group-hover:scale-110 transition-transform`}
                >
                  {area.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {area.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Key Regulatory Context Banner */}
        <div className="bg-gradient-to-r from-emerald-900 to-teal-900 rounded-[2rem] p-10 md:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />
          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl font-black mb-4">
                Why It Matters Now
              </h3>
              <p className="text-emerald-100 text-lg leading-relaxed">
                With the{" "}
                <span className="font-bold text-white">EU AI Act</span>{" "}
                enforcement timeline accelerating in 2025-2026, and{" "}
                <span className="font-bold text-white">NIST AI RMF</span>{" "}
                gaining traction in the US market, ISO/IEC 42001:2023 serves as
                the{" "}
                <span className="font-bold text-white">
                  gold standard bridge
                </span>{" "}
                connecting your AI governance to global regulatory compliance.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "EU AI Act", value: "2025-26", sub: "Enforcement" },
                { label: "NIST AI RMF", value: "v1.0", sub: "US Standard" },
                { label: "GDPR AI", value: "Active", sub: "Data Protection" },
                { label: "ISO 42001", value: "2023", sub: "Certification" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center border border-white/10"
                >
                  <div className="text-2xl font-black text-emerald-300">
                    {item.value}
                  </div>
                  <div className="text-sm font-bold text-white">
                    {item.label}
                  </div>
                  <div className="text-xs text-emerald-200/70">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ISO42001WhatIsSection;
