"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  ArrowRight,
  CreditCard,
  Star,
  Award,
  Lock,
} from "lucide-react";
import Link from "next/link";

interface ShoppingAppHeroSectionProps {
  scrollToId: string;
}

const ShoppingAppHeroSection: React.FC<ShoppingAppHeroSectionProps> = ({
  scrollToId,
}) => {
  const handleScrollToSection = () => {
    const section = document.getElementById(scrollToId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const highlights = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Secure Payments",
      description:
        "We verify payment gateways meet top-tier encryption and fraud prevention standards.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Verified Performance",
      description:
        "Every app undergoes rigorous speed, scalability, and reliability checks before certification.",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "User Experience Excellence",
      description:
        "Certification only granted to apps delivering smooth, intuitive, and accessible shopping experiences.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 px-8 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-blue rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-brand-blue to-green-600 rounded-full opacity-5 blur-3xl"></div>
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
            <ShoppingCart className="w-4 h-4 hidden md:block" />
            Trusted E-Commerce Platform Certification
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
            Shopping Apps <span className="text-brand-blue">Certification</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            We certify shopping apps only after verifying they meet the highest
            standards of security, performance, and user experience - so
            customers can shop with confidence.
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
            <button className="bg-brand-blue cursor-pointer  text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get Certified Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
          <button
            onClick={handleScrollToSection}
            className="border-2 cursor-pointer border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300"
          >
            <CreditCard className="w-5 h-5" />
            View Certification Process
          </button>
        </motion.div>

        {/* Highlights Section (Replacing Metrics) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4 text-brand-blue">{item.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ShoppingAppHeroSection;
