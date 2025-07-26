"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, CheckCircle, Sparkles } from "lucide-react";

const DatingAppOptimizationBenefits = () => {
  const optimizationBenefits = [
    {
      title: "Higher App Store Rankings",
      description: "Security-certified apps rank 40% higher in search results",
      metrics: ["+40% ranking", "+65% visibility", "+30% organic downloads"],
      icon: <TrendingUp className="w-16 h-16" />,
      color: "bg-green-50 border-green-200",
    },
    {
      title: "Improved User Trust",
      description: "Trust badges increase conversion rates and user retention",
      metrics: ["+85% trust score", "+50% retention", "+25% premium upgrades"],
      icon: <Users className="w-16 h-16" />,
      color: "bg-blue-50 border-blue-200",
    },
    {
      title: "Reduced App Rejections",
      description: "Pre-certified apps have 90% lower rejection rates",
      metrics: ["-90% rejections", "Faster approval", "Compliance guarantee"],
      icon: <CheckCircle className="w-16 h-16" />,
      color: "bg-purple-50 border-purple-200",
    },
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            App Store{" "}
            <span className="text-brand-blue">Optimization Benefits</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How security certification improves your dating app&apos;s
            visibility and downloads
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {optimizationBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-2xl border-2 ${benefit.color}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="text-brand-blue mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mb-6">{benefit.description}</p>
              <div className="space-y-2">
                {benefit.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="flex items-center">
                    <Sparkles className="w-4 h-4 text-brand-blue mr-2" />
                    <span className="text-sm font-medium text-gray-700">
                      {metric}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DatingAppOptimizationBenefits;
