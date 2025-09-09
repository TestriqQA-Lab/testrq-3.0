"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  ArrowRight,
  Play,
  Verified,
  TrendingUp,
  Eye,
} from "lucide-react";
import Link from "next/link";
import Lightbox from "../VideoLightBox";

const DatingAppHeroSection = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const trustMetrics = [
    {
      label: "Expert-Backed Certification",
      icon: <Verified className="w-8 h-8" />,
      color: "text-blue-600",
    },
    {
      label: (<><Link href="/blog/post/advanced-security-testing-for-healthcare-apps-protecting-patient-data-from-cyber-threats">Advanced Security</Link> Standards</>),
      icon: <Shield className="w-8 h-8" />,
      color: "text-green-600",
    },
    {
      label: "Boost User Confidence",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "text-purple-600",
    },
    {
      label: "Continuous Safety Monitoring",
      icon: <Eye className="w-8 h-8" />,
      color: "text-orange-600",
    },
  ];

  const openLightbox = () => setIsLightboxOpen(true);
  const closeLightbox = () => setIsLightboxOpen(false);

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
              <Shield className="w-4 h-4 mr-2 hidden md:block" />
              The New Standard in Dating App Trust & Safety
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Build Trust.
              <br />
              <span className="text-brand-blue">Boost Downloads.</span>
              <br />
              Keep Users Safe.
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Launch your dating platform with a seal of credibility. Our
              certification helps you attract users, gain investor confidence,
              and meet the highest <Link href="/blog/post/medical-device-testing-ensuring-patient-safety-and-regulatory-compliance">safety</Link> standards from day one.
            </p>
          </motion.div>

          {/* Trust Points */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {trustMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg border flex flex-col items-center border-gray-100"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={`${metric.color} mb-3`}>{metric.icon}</div>
                <div className="text-lg font-semibold text-gray-800 leading-snug">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 w-full sm:w-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link href="/contact-us">
              <motion.button
                className="bg-brand-blue cursor-pointer text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-[#1e90d4] transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Certified Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </Link>

            <motion.button
              className="border-2 border-brand-blue cursor-pointer text-brand-blue px-8 py-4 rounded-xl font-semibold text-lg hover:border-brand-blue hover:text-brand-blue transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={openLightbox}
            >
              <Play className="mr-2 w-5 h-5 text-brand-blue" />
              Watch Demo
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={isLightboxOpen}
        videoLink="https://yourvideolink.com"
        onClose={closeLightbox}
      />
    </section>
  );
};

export default DatingAppHeroSection;
