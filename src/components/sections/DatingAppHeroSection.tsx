"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  ArrowRight,
  Play,
  Verified,
  TrendingUp,
  Eye,
} from "lucide-react";

const DatingAppHeroSection = () => {
  const trustMetrics = [
    {
      number: "500+",
      label: "Apps Certified",
      icon: <Verified className="w-8 h-8" />,
      color: "text-blue-600",
    },
    {
      number: "99.9%",
      label: "Security Score",
      icon: <Shield className="w-8 h-8" />,
      color: "text-green-600",
    },
    {
      number: "2x",
      label: "Download Increase",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "text-purple-600",
    },
    {
      number: "24/7",
      label: "Monitoring",
      icon: <Eye className="w-8 h-8" />,
      color: "text-orange-600",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 px-8 md:px-12 lg:px-24 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(37,168,224,0.05)_50%,transparent_75%)] bg-[length:60px_60px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center bg-brand-blue text-white rounded-full text-base md:text-sm px-6 py-3 mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Trusted by 500+ Dating Apps Worldwide
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Build Trust.
              <br />
              <span className="text-brand-blue">Boost Downloads.</span>
              <br />
              Keep Users Safe.
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The only dating app certification that users, investors, and app
              stores actually trust. Join the elite league of verified dating
              platforms.
            </p>
          </motion.div>

          {/* Trust Metrics */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {trustMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={`${metric.color}`}>{metric.icon}</div>
                <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                  {metric.number}
                </div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              className="bg-brand-blue text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-[#1e90d4] transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Certified Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>

            <motion.button
              className="border-2 border-brand-blue text-brand-blue px-8 py-4 rounded-xl font-semibold text-lg hover:border-brand-blue hover:text-brand-blue transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Play className="mr-2 w-5 h-5 text-brand-blue" />
              Watch Demo
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DatingAppHeroSection;
