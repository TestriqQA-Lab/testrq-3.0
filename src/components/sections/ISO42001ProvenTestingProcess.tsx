"use client";

import React from "react";
import Link from "next/link";
import {
  FaSearch,
  FaClipboardList,
  FaCogs,
  FaCheckDouble,
  FaFileSignature,
  FaSync,
  FaArrowRight,
} from "react-icons/fa";

const ISO42001ProvenTestingProcess: React.FC = () => {
  const steps = [
    {
      icon: <FaSearch className="w-6 h-6" />,
      step: "01",
      title: "Discovery & Scoping",
      description:
        "We begin with a deep-dive into your AI ecosystem — understanding your models, data pipelines, deployment environments, and business objectives. We map your AI inventory against ISO/IEC 42001:2023 clauses and Annex A controls to define the scope of your AIMS.",
      deliverables: [
        "AI System Inventory",
        "Scope Definition Document",
        "Stakeholder Mapping",
      ],
      color: "emerald",
    },
    {
      icon: <FaClipboardList className="w-6 h-6" />,
      step: "02",
      title: "Gap Analysis & Risk Assessment",
      description:
        "A comprehensive clause-by-clause gap analysis of your current practices against the standard, combined with a structured AI risk assessment covering bias, fairness, safety, privacy, and societal impact.",
      deliverables: [
        "Gap Analysis Report",
        "Risk Register",
        "Prioritized Action Plan",
      ],
      color: "teal",
    },
    {
      icon: <FaCogs className="w-6 h-6" />,
      step: "03",
      title: "Testing & Validation Execution",
      description:
        "Our ISTQB-certified testers execute comprehensive test suites covering AI model validation, bias testing, explainability checks, data governance audits, and operational monitoring verification.",
      deliverables: [
        "Test Execution Reports",
        "Bias & Fairness Metrics",
        "Explainability Validation Results",
      ],
      color: "blue",
    },
    {
      icon: <FaCheckDouble className="w-6 h-6" />,
      step: "04",
      title: "Remediation Support",
      description:
        "We don't just find gaps — we help you close them. Our team provides hands-on remediation guidance, helping your engineering and governance teams implement the corrective actions needed for full compliance.",
      deliverables: [
        "Remediation Playbook",
        "Control Implementation Guidance",
        "Re-Testing & Verification",
      ],
      color: "indigo",
    },
    {
      icon: <FaFileSignature className="w-6 h-6" />,
      step: "05",
      title: "Certification Readiness Assessment",
      description:
        "A final pre-audit assessment that simulates the certification body's evaluation process, ensuring your organization is fully prepared for the formal ISO/IEC 42001:2023 certification audit.",
      deliverables: [
        "Pre-Audit Report",
        "Evidence Package Review",
        "Certification Readiness Statement",
      ],
      color: "purple",
    },
    {
      icon: <FaSync className="w-6 h-6" />,
      step: "06",
      title: "Continual Improvement & Monitoring",
      description:
        "Post-certification, we provide ongoing surveillance testing, model drift monitoring, and periodic compliance re-assessments to ensure your AIMS remains effective and aligned with evolving regulations.",
      deliverables: [
        "Surveillance Test Reports",
        "Annual Compliance Review",
        "Regulation Update Alerts",
      ],
      color: "cyan",
    },
  ];

  const colorMap: Record<string, { bg: string; text: string; border: string; stepBg: string }> = {
    emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200", stepBg: "bg-emerald-600" },
    teal: { bg: "bg-teal-50", text: "text-teal-600", border: "border-teal-200", stepBg: "bg-teal-600" },
    blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", stepBg: "bg-blue-600" },
    indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200", stepBg: "bg-indigo-600" },
    purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200", stepBg: "bg-purple-600" },
    cyan: { bg: "bg-cyan-50", text: "text-cyan-600", border: "border-cyan-200", stepBg: "bg-cyan-600" },
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-emerald-50/30 py-20 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-emerald-600 gap-2 text-white px-4 py-2 rounded-full mb-6 shadow-lg">
            <FaCogs />
            <span className="text-sm font-bold uppercase tracking-wider">
              Our Methodology
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Our Proven{" "}
            <span className="text-emerald-600">Compliance Testing</span>{" "}
            Process
          </h2>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto leading-relaxed">
            A structured, 6-phase approach that takes you from initial
            discovery to certification readiness and beyond — built on the
            Plan-Do-Check-Act (PDCA) cycle mandated by ISO/IEC 42001:2023.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const colors = colorMap[step.color];
            return (
              <div
                key={index}
                className={`relative ${colors.bg} border ${colors.border} rounded-3xl p-8 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2`}
              >
                {/* Step number badge */}
                <div
                  className={`absolute -top-4 -left-2 ${colors.stepBg} text-white w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm shadow-lg`}
                >
                  {step.step}
                </div>

                <div className={`${colors.text} mb-4 mt-2`}>{step.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {step.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-2">
                  <div className="text-xs font-black text-gray-400 uppercase tracking-widest">
                    Key Deliverables
                  </div>
                  {step.deliverables.map((d, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${colors.stepBg}`}
                      />
                      <span className="text-gray-700 font-medium">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-emerald-600 text-white font-black rounded-2xl hover:bg-emerald-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-lg"
          >
            Start Your Compliance Journey
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ISO42001ProvenTestingProcess;
