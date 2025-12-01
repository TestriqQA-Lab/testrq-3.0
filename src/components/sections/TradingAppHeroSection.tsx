"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  BarChart3,
  ArrowRight,
  ClipboardCheck,
  Search,
  Award,
} from "lucide-react";
import Link from "next/link";
import { FaHome, FaChevronRight } from "react-icons/fa";

const TradingAppHeroSection = () => {
  // Smooth scroll function
  const scrollToSection = () => {
    const section = document.getElementById(
      "trading-app-certification-process"
    ); // <-- change ID here if needed
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const steps = [
    {
      icon: <Search className="w-8 h-8 text-blue-600" />,
      title: "Detailed Evaluation",
      description:
        (<>We thoroughly review your app&apos;s <Link href="/security-testing">security</Link>, <Link href="/blog/post/medical-device-testing-ensuring-patient-safety-and-regulatory-compliance">compliance</Link>, and <Link href="/performance-testing-services">performance</Link> against our certification standards.</>),
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-green-600" />,
      title: "Compliance Verification",
      description:
        (<>Our experts ensure your platform meets all legal and <Link href="/blog/post/medical-device-testing-ensuring-patient-safety-and-regulatory-compliance">regulatory</Link> requirements before approval.</>),
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      title: "Certification Issued",
      description:
        "Once approved, you receive our official certification, building trust with your users and stakeholders.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-8 pb-16 px-8 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-blue rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-brand-blue to-blue-600 rounded-full opacity-5 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-6 justify-center">
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-brand-blue transition-colors"
          >
            <FaHome className="text-lg" />
            Home
          </Link>
          <FaChevronRight className="text-xs text-gray-400" />
          <span className="text-brand-blue">
            Trading Apps Certification
          </span>
        </div>
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-brand-blue text-white px-4 py-2 rounded-full text-sm font-medium">
            <Shield className="w-4 h-4" />
            Trusted Trading Platform Certification
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
            Trading Apps <span className="text-brand-blue">Certification</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            We don’t build trading apps - we ensure they meet the highest
            standards of <Link href="/security-testing">security</Link>, <Link href="/blog/post/medical-device-testing-ensuring-patient-safety-and-regulatory-compliance">compliance</Link>, and <Link href="/performance-testing-services">performance</Link> before awarding
            our trusted certification.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 w-full sm:w-auto"
        >
          <Link href="/contact-us ">
            <button className="bg-brand-blue cursor-pointer text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get Certified Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>

          <button
            onClick={scrollToSection}
            className="border-2 border-brand-blue cursor-pointer text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300"
          >
            <BarChart3 className="w-5 h-5" />
            View Certification Process
          </button>
        </motion.div>

        {/* New "How It Works" Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4">{step.icon}</div>
              <h2 className="text-lg font-semibold mb-2">{step.title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TradingAppHeroSection;
