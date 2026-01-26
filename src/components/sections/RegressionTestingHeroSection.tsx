"use client";

import Link from "next/link";
import React from "react";
import {
  FaShieldAlt,
  FaSync,
  FaCheckDouble,
  FaBug,
  FaMobile,
  FaDesktop,
  FaCloud,
  FaHistory,
} from "react-icons/fa";
import { FaArrowRight, FaHome, FaChevronRight } from "react-icons/fa";
import RegressionTestingAnimation from "./RegressionTestingAnimation";

const RegressionTestingHeroSection: React.FC = () => {
  return (
    <section className="relative pt-8 pb-16 px-8 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-6">
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-brand-blue transition-colors"
          >
            <FaHome className="text-lg" />
            Home
          </Link>
          <FaChevronRight className="text-xs text-gray-400" />
          <span className="text-brand-blue">
            Regression Testing
          </span>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-full text-base md:text-sm">
              <FaShieldAlt className="mr-2" />
              Regression Testing Specialists
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Strategic Overview:
              <span className="text-transparent bg-clip-text bg-brand-blue">
                {" "}
                Software Regression Testing Services
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              In 2026, the digital landscape is defined by rapid-fire release cycles and hyper-complex architectures. Traditional &quot;run-everything&quot; approaches to software regression testing are no longer sustainable. At Testriq, we transform regression from a bottleneck into a competitive advantage.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              We use the <span className="font-semibold text-brand-blue">ISO 29119 risk-based framework</span> for our automated regression testing. This ensures your new code never breaks existing features. By analyzing code impact, we help global firms reduce test times and keep CI/CD pipelines moving fast.
            </p>

            <div className="flex flex-col items-center lg:items-start sm:flex-row gap-4">
              <Link href="/contact-us">
                <button className="bg-brand-blue cursor-pointer text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                  Get Started Today
                  <FaArrowRight className="ml-2" />
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-600">
                  15,000+
                </div>
                <div className="text-sm text-gray-600">Regression Tests</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-teal-600">
                  99.2%
                </div>
                <div className="text-sm text-gray-600">Stability Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">
                  2,000+
                </div>
                <div className="text-sm text-gray-600">Releases Validated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-600">
                  24/7
                </div>
                <div className="text-sm text-gray-600">Continuous Testing</div>
              </div>
            </div>
          </div>

          {/* Right Content - Regression Testing Dashboard */}
          <div className="relative">
            <RegressionTestingAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegressionTestingHeroSection;
