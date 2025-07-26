"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const DatingAppCompetitiveAdvantage = () => {
  const marketDifferentiators = [
    {
      advantage: "Trust Badge Display",
      description:
        "Prominently display security certification on app stores and marketing materials",
    },
    {
      advantage: "Investor Confidence",
      description:
        "Security certification increases funding opportunities by 200%",
    },
    {
      advantage: "Partnership Opportunities",
      description:
        "Enterprise clients prefer certified dating platforms for white-label solutions",
    },
    {
      advantage: "Media Coverage",
      description:
        "Security-first approach generates positive PR and media attention",
    },
    {
      advantage: "User Acquisition",
      description: "Certified apps see 3x higher user acquisition rates",
    },
  ];

  const industryStats = [
    {
      stat: "78%",
      label: "Users check security before downloading",
    },
    { stat: "65%", label: "Prefer certified dating apps" },
    { stat: "3x", label: "Higher retention for secure apps" },
    { stat: "90%", label: "Investors require security audits" },
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Competitive <span className="text-brand-blue">Advantage</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stand out in the crowded dating app market with verified security
            credentials
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Market Differentiation
            </h3>
            <div className="space-y-6">
              {marketDifferentiators.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Award className="w-6 h-6 text-brand-blue mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      {item.advantage}
                    </h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-brand-blue to-blue-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Industry Statistics</h3>
            <div className="grid grid-cols-2 gap-6">
              {industryStats.map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-3xl font-bold mb-2">{item.stat}</div>
                  <div className="text-sm opacity-90">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DatingAppCompetitiveAdvantage;
