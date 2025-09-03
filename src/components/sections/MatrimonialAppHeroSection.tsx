"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, ArrowRight, Heart } from "lucide-react";
import Link from "next/link";

const MatrimonialAppHeroSection = () => {
  const scrollToMatrimonialProcess = () => {
    const element = document.getElementById("matrimonial-process-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
            <span className="text-brand-blue relative">Certification</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Ensure your matrimonial platform meets the highest standards of
            <Link href="/security-testing"> security</Link>, <Link href="/blog/post/data-privacy-and-security-for-e-learning-platforms-protecting-student-data-and-ensuring-compliance">privacy</Link>, and quality. Get certified with <Link href="/blog/post/understanding-software-testing-a-comprehensive-guide-for-beginners">comprehensive
            testing</Link> that builds user trust and protects sensitive data.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 w-full sm:w-auto"
          >
            <Link href="/contact-us">
              <button className="bg-[#25A8E0] cursor-pointer text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Get Certified Now
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <button
              onClick={scrollToMatrimonialProcess} // Trigger smooth scroll
              className="border-2 cursor-pointer border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-1"
            >
              View Certification Process
              <Shield className="w-5 h-5" />
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto"
          >
            {/* Card 1 */}
            <div className="group bg-gradient-to-br from-white to-blue-50 border border-blue-100 rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="mx-auto flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-brand-blue mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Security First
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Built on industry-leading <Link href="/security-testing">security testing</Link> methods to safeguard
                sensitive user data and ensure platform safety.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-gradient-to-br from-white to-pink-50 border border-pink-100 rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="mx-auto flex items-center justify-center w-14 h-14 rounded-full bg-pink-100 text-pink-500 mb-4 group-hover:scale-110 transition-transform">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                User Trust Focused
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Certification designed to build credibility, strengthen trust,
                and improve user satisfaction for matrimonial platforms.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-gradient-to-br from-white to-green-50 border border-green-100 rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="mx-auto flex items-center justify-center w-14 h-14 rounded-full bg-green-100 text-green-500 mb-4 group-hover:scale-110 transition-transform">
                <ArrowRight className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Future-Ready
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Continuous updates to match evolving matrimonial app regulations
                and standards, keeping you ahead in compliance.
              </p>
            </div>
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
