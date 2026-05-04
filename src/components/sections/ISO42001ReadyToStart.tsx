"use client";

import Link from "next/link";
import React from "react";
import { FaArrowRight, FaCheckCircle, FaRocket } from "react-icons/fa";

const ISO42001ReadyToStart: React.FC = () => {
  const benefits = [
    "Full ISO/IEC 42001:2023 clause coverage",
    "EU AI Act & NIST AI RMF alignment",
    "ISTQB-certified AI testing experts",
    "98% first-pass certification rate",
    "Ongoing surveillance & monitoring",
    "15+ years of global QA experience",
  ];

  return (
    <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-20 px-8 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-md text-emerald-50 text-xs font-black px-5 py-2 rounded-full uppercase tracking-widest border border-white/20 shadow-xl">
              <FaRocket className="mr-2 animate-bounce" />
              Start Your AI Governance Journey
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Ready to Achieve{" "}
              <span className="text-emerald-300">
                ISO/IEC 42001
              </span>{" "}
              Certification?
            </h2>

            <p className="text-emerald-100 text-xl leading-relaxed max-w-xl">
              Don&apos;t wait for regulators to knock on your door. Position
              your AI systems for trust, transparency, and global compliance
              with Testriq&apos;s expert compliance testing services.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="p-1 bg-white/20 rounded-full group-hover:bg-white/40 transition-colors">
                    <FaCheckCircle className="w-5 h-5 text-emerald-200" />
                  </div>
                  <span className="text-emerald-50 font-bold text-sm tracking-tight">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-4 px-12 py-5 bg-white text-emerald-600 font-black rounded-[2rem] hover:bg-emerald-50 transition-all shadow-[0_20px_50px_rgba(255,255,255,0.2)] transform hover:-translate-y-1 active:scale-95 text-lg"
              >
                <span>Get Your Free AI Audit</span>
                <FaArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-4 px-12 py-5 bg-white/10 backdrop-blur-md text-white font-black rounded-[2rem] hover:bg-white/20 transition-all border border-white/20 text-lg"
              >
                View Pricing
              </Link>
            </div>
          </div>

          {/* Right Content - Visual Metrics Card */}
          <div className="relative group pb-8 md:pb-12">
            <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 sm:p-8 md:p-12 shadow-2xl border border-white/20 relative">
              {/* Accent line */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-teal-500" />

              <div className="space-y-10">
                <div className="text-center">
                  <div className="text-xs font-black text-emerald-600 uppercase tracking-widest mb-2">
                    Compliance Maturity
                  </div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 break-words">
                    Certification Ready
                  </div>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      label: "AIMS Compliance",
                      val: 100,
                      color: "bg-emerald-500",
                    },
                    {
                      label: "Risk Framework Coverage",
                      val: 98,
                      color: "bg-teal-600",
                    },
                    {
                      label: "Annex A Control Validation",
                      val: 100,
                      color: "bg-blue-600",
                    },
                  ].map((item, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between font-black text-xs text-gray-400 uppercase tracking-tight">
                        <span>{item.label}</span>
                        <span className="text-emerald-600">{item.val}%</span>
                      </div>
                      <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden border border-gray-50">
                        <div
                          className={`h-full ${item.color} rounded-full transition-all duration-1000 group-hover:scale-x-105 origin-left`}
                          style={{ width: `${item.val}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-gray-100 flex justify-between gap-2 items-center text-center">
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-gray-900">
                      98%
                    </div>
                    <div className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase">
                      Pass Rate
                    </div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-gray-900">
                      3-6mo
                    </div>
                    <div className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase">
                      Timeline
                    </div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-gray-900">
                      24/7
                    </div>
                    <div className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase">
                      Support
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 md:-bottom-8 md:-right-8 md:w-32 md:h-32 bg-teal-500 rounded-full text-white flex flex-col items-center justify-center shadow-2xl rotate-12 group-hover:rotate-0 transition-transform duration-500 border-[6px] md:border-8 border-teal-600">
              <div className="text-xl md:text-2xl font-black leading-none italic">
                ISO
              </div>
              <div className="text-[6px] md:text-[8px] font-bold uppercase tracking-tighter">
                42001
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ISO42001ReadyToStart;
