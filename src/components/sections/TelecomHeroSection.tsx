"use client";

import Link from "next/link";
import React from "react";
import {
  FaWifi,
  FaSignal,
  FaNetworkWired,
  FaRocket,
  FaUsers,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";

const TelecomHeroSection: React.FC = () => {
  const keyStats = [
    { value: "99%", label: "Software Reliability", icon: FaNetworkWired },
    { value: "30+", label: "Telecom Apps Tested", icon: FaWifi },
    { value: "1M+", label: "Test Scenarios Executed", icon: FaSignal },
    { value: "24/7", label: "Continuous QA Support", icon: FaRocket },
  ];

  const trustBadges = [
    "Telecom App QA Specialists",
    "Agile Testing Processes",
    "Security & Compliance Ready",
    "ISO 27001 Certified",
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 text-white bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 border border-[theme(color.brand.blue)] border-opacity-20">
              <FaWifi className="w-4 h-4" />
              <span className="text-sm">Telecom Software Testing Services</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Ensuring Flawless
              <span className="block bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 bg-clip-text text-transparent">
                Digital Experiences
              </span>
              for Telecom Applications
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              We specialize in ensuring the quality and performance of telecom
              software through comprehensive testing services. Our approach
              guarantees that every system runs smoothly, meets high performance
              standards, and provides a reliable, seamless experience for end
              users.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  Telecom App QA
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  OSS/BSS Testing
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  Billing & CRM Validation
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  Performance & Security Testing
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col lg:flex-col xl:flex-row gap-4 pt-4">
              <Link href="/contact-us">
                <button className="cursor-pointer bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:scale-98 transition-all duration-300 flex items-center justify-center gap-2">
                  <FaSignal className="w-5 h-5" />
                  Request a Free QA Audit
                </button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4 text-center">
                Trusted by leading telecom software teams
              </p>
              <div className="grid grid-cols-2 md:grid-cols-2 text-center gap-3 items-center">
                {trustBadges.map((badge, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white bg-opacity-80 text-gray-600 text-xs rounded-full border border-gray-200 font-medium"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8 py-10">
            {/* Key Statistics */}
            <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white border-opacity-50">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Proven QA Expertise
                </h3>
                <p className="text-gray-600">
                  Reliable results for telecom software
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {keyStats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Success Metrics */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 border border-green-100">
              <div className="flex items-center gap-3 mb-6">
                <FaChartLine className="w-6 h-6 text-green-600" />
                <h4 className="text-xl font-bold text-gray-900">
                  Average Client Outcomes
                </h4>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Bug Detection Rate</span>
                  <span className="font-bold text-green-600">+65%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">
                    Release Cycle Acceleration
                  </span>
                  <span className="font-bold text-green-600">-40%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Post-Release Issues</span>
                  <span className="font-bold text-green-600">-75%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">End-User Satisfaction</span>
                  <span className="font-bold text-green-600">4.9/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelecomHeroSection;
