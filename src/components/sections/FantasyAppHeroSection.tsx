"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Shield,
  CheckCircle,
  Users,
  TrendingUp,
  ArrowRight,
  Gamepad2,
} from "lucide-react";
import Link from "next/link";

const FantasyAppHeroSection = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 px-8 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-blue rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-brand-blue to-purple-600 rounded-full opacity-5 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-brand-blue text-white px-4 py-2 rounded-full text-sm font-medium">
            <Trophy className="w-4 h-4" />
            Trusted Fantasy Sports Platform Certification
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Fantasy Sports Apps{" "}
            <span className="text-brand-blue">Certification</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ensure your fantasy sports platform meets the highest standards of
            security, fair play, and regulatory compliance. Get certified with
            comprehensive testing that builds player trust and protects
            sensitive gaming data.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link href="/contact-us">
            <button className="cursor-pointer bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get Certified Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>

          <button
            onClick={() => scrollToSection("certification-process")}
            className="border-2 cursor-pointer border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300"
          >
            <Gamepad2 className="w-5 h-5" />
            View Certification Process
          </button>
        </motion.div>

        {/* Certification Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
        >
          {[
            {
              icon: <Shield className="w-8 h-8" />,
              title: "Enhanced Security",
              desc: "We safeguard user data with industry-leading protection measures.",
              color: "text-green-600",
            },
            {
              icon: <CheckCircle className="w-8 h-8" />,
              title: "Regulatory Compliance",
              desc: "Meet all legal standards for fantasy sports in multiple regions.",
              color: "text-blue-600",
            },
            {
              icon: <TrendingUp className="w-8 h-8" />,
              title: "Player Confidence",
              desc: "Boost user trust through transparency and fair play guarantees.",
              color: "text-purple-600",
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Brand Credibility",
              desc: "Stand out in the market with a recognized certification badge.",
              color: "text-orange-600",
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="text-center bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className={`${benefit.color} mb-4 flex justify-center`}>
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-10 w-16 h-16 bg-gradient-to-r from-brand-blue to-purple-600 rounded-lg opacity-20 hidden lg:block"
      ></motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 right-10 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-20 hidden lg:block"
      ></motion.div>

      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 left-1/4 w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg opacity-20 hidden lg:block"
      ></motion.div>
    </section>
  );
};

export default FantasyAppHeroSection;
