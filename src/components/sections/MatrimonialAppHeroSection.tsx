"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  ArrowRight,
  Heart,
  Verified,
  TrendingUp,
  Users,
} from "lucide-react";

const MatrimonialAppHeroSection = () => {
  const trustMetrics = [
    {
      number: "300+",
      label: "Apps Certified",
      icon: <Verified className="w-8 h-8" />,
      color: "text-blue-600",
    },
    {
      number: "99.8%",
      label: "Security Score",
      icon: <Shield className="w-8 h-8" />,
      color: "text-green-600",
    },
    {
      number: "3x",
      label: "User Trust Increase",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "text-purple-600",
    },
    {
      number: "50M+",
      label: "Users Protected",
      icon: <Users className="w-8 h-8" />,
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
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 bg-brand-blue text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Trusted Matrimonial Platform Certification
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Matrimonial Apps{" "}
            <span className="text-brand-blue relative">
              Certification
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Ensure your matrimonial platform meets the highest standards of security, privacy, and quality. 
            Get certified with comprehensive testing that builds user trust and protects sensitive data.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button className="bg-[#25A8E0] hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get Certified Now
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-brand-blue text-brand-blue hover:brand-blue px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300">
              View Certification Process
              <Shield className="w-5 h-5" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {trustMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className={`${metric.color} mb-2 flex justify-center`}>
                  {metric.icon}
                </div>
                <div className={`text-2xl md:text-3xl font-bold ${metric.color} mb-1`}>
                  {metric.number}
                </div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-200 rounded-full opacity-20 animate-pulse delay-500"></div>
    </section>
  );
};

export default MatrimonialAppHeroSection;

