"use client";

import React, { useState } from "react";
import {
  FaAward,
  FaGlobeAmericas,
  FaCertificate,
  FaUserShield,
  FaArrowRight,
} from "react-icons/fa";
import Link from "next/link";

const ISO42001WhyChooseTestriq: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const benefits = [
    {
      icon: <FaCertificate className="w-8 h-8" />,
      title: "ISTQB & ISO Certified Experts",
      shortTitle: "Certified Expertise",
      description:
        "Our QA team holds ISTQB certifications and deep domain expertise in AI/ML testing. We understand both the technical intricacies of AI systems and the compliance framework of ISO/IEC 42001:2023.",
      stats: "ISTQB Certified",
      gradient: "from-emerald-500 to-emerald-600",
      features: [
        "AI/ML Testing Experts",
        "ISO Standards Proficiency",
        "Domain-Specific Knowledge",
        "Continual Upskilling",
      ],
    },
    {
      icon: <FaGlobeAmericas className="w-8 h-8" />,
      title: "Global Regulatory Alignment",
      shortTitle: "Multi-Regulation",
      description:
        "We align your AI compliance posture not just to ISO 42001 but simultaneously to the EU AI Act, NIST AI RMF, Singapore IMDA, and other emerging global AI governance frameworks.",
      stats: "5+ Frameworks",
      gradient: "from-teal-500 to-teal-600",
      features: [
        "EU AI Act Alignment",
        "NIST AI RMF Mapping",
        "GDPR Data Compliance",
        "Cross-Jurisdictional",
      ],
    },
    {
      icon: <FaUserShield className="w-8 h-8" />,
      title: "End-to-End AI Lifecycle Coverage",
      shortTitle: "Full Lifecycle",
      description:
        "From data sourcing and model training to deployment monitoring and decommissioning — we test every phase of the AI lifecycle as required by the standard's Annex A controls.",
      stats: "Full Lifecycle",
      gradient: "from-blue-500 to-blue-600",
      features: [
        "Data Pipeline Testing",
        "Model Validation",
        "Deployment Monitoring",
        "Decommission Audit",
      ],
    },
    {
      icon: <FaAward className="w-8 h-8" />,
      title: "Proven Track Record",
      shortTitle: "Results-Driven",
      description:
        "We have successfully supported 100+ organizations across healthcare, fintech, automotive, and enterprise SaaS in achieving AI governance readiness and regulatory compliance.",
      stats: "100+ AI Audits",
      gradient: "from-indigo-500 to-indigo-600",
      features: [
        "Healthcare AI",
        "Fintech Models",
        "Automotive ADAS",
        "Enterprise SaaS",
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-br from-white to-emerald-50 py-16 px-8 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-emerald-600 gap-2 text-white px-4 py-2 rounded-full mb-6 shadow-lg transform hover:scale-105 transition-transform">
            <FaAward />
            <span className="text-sm font-bold uppercase tracking-wider">
              The Testriq Advantage
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Why Choose Testriq for{" "}
            <span className="text-emerald-600">
              ISO 42001 Compliance?
            </span>
          </h2>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto leading-relaxed">
            We combine deep AI testing expertise with international standards
            proficiency to deliver compliance testing that goes beyond
            checkbox audits.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-500 transform ${
                hoveredCard === index ? "scale-105 z-10" : "hover:scale-102"
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="bg-white rounded-3xl shadow-xl border border-emerald-100 h-full flex flex-col transition-all duration-500 group-hover:shadow-2xl relative">
                {/* Header Section */}
                <div
                  className={`bg-gradient-to-r ${benefit.gradient} p-8 text-white relative`}
                >
                  <div className="relative z-10 flex justify-between items-start mb-4">
                    <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-md">
                      {benefit.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-white/70 text-[10px] font-bold uppercase tracking-widest">
                        Metric
                      </div>
                      <div className="text-white font-black text-sm">
                        {benefit.stats}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 relative z-10">
                    {benefit.title}
                  </h3>
                </div>

                {/* Features Section */}
                <div className="p-8 flex-grow">
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {benefit.description}
                  </p>
                  <div className="space-y-3">
                    {benefit.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <div className="w-2 h-2 rounded-full mr-3 bg-emerald-500 animate-pulse" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Reveal Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    benefit.gradient
                  } flex flex-col items-center justify-center p-6 md:p-8 text-white transition-all duration-500 rounded-3xl overflow-y-auto ${
                    hoveredCard === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-full pointer-events-none"
                  }`}
                >
                  <div className="p-3 bg-white/20 rounded-full mb-3 flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2 flex-shrink-0">
                    {benefit.shortTitle}
                  </h4>
                  <p className="text-center text-emerald-50 mb-4 text-xs leading-relaxed flex-shrink-0">
                    {benefit.description}
                  </p>
                  <Link
                    href="/contact-us"
                    className="bg-white text-emerald-600 px-6 py-3 rounded-xl font-bold hover:bg-emerald-50 transition-colors flex items-center gap-2"
                  >
                    Learn More <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="bg-emerald-900 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full -mr-32 -mt-32 blur-3xl opacity-50 group-hover:scale-110 transition-transform duration-1000" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-800 rounded-full -ml-32 -mb-32 blur-3xl opacity-50 group-hover:scale-110 transition-transform duration-1000" />

          <div className="relative z-10 grid md:grid-cols-3 gap-12 text-center items-center">
            <div className="space-y-2">
              <div className="text-6xl font-black text-emerald-400">100+</div>
              <div className="text-lg font-bold uppercase tracking-widest text-emerald-100">
                AI Systems Audited
              </div>
              <p className="text-xs text-emerald-200/60 max-w-[200px] mx-auto">
                Across healthcare, fintech, and enterprise AI deployments
              </p>
            </div>
            <div className="space-y-2 border-y md:border-y-0 md:border-x border-emerald-800 py-8 md:py-0">
              <div className="text-6xl font-black text-emerald-400">
                98%
              </div>
              <div className="text-lg font-bold uppercase tracking-widest text-emerald-100">
                First-Pass Certification
              </div>
              <p className="text-xs text-emerald-200/60 max-w-[200px] mx-auto">
                Of our clients achieve certification on first attempt
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-6xl font-black text-emerald-400">15+</div>
              <div className="text-lg font-bold uppercase tracking-widest text-emerald-100">
                Years QA Excellence
              </div>
              <p className="text-xs text-emerald-200/60 max-w-[200px] mx-auto">
                Deep-rooted expertise in software quality engineering
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ISO42001WhyChooseTestriq;
