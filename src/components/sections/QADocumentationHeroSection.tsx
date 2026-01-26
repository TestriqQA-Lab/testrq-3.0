"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaFileAlt,
  FaClipboardList,
  FaChartLine,
  FaCog,
  FaShieldAlt,
  FaArrowRight,
  FaPlay,
  FaHome,
  FaChevronRight,
} from "react-icons/fa";
import Lightbox from "../VideoLightBox";
import QADocumentationAnimation from "./QADocumentationAnimation";

const QADocumentationHeroSection = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Function to handle the lightbox open/close
  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 pt-8 pb-16  px-8 md:px-12 lg:px-24 overflow-hidden">
      <div className="absolute inset-0 bg-white/60"></div>

      <div className="relative max-w-7xl mx-auto">
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
            QA Documentation
          </span>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-full text-base md:text-sm">
              <FaFileAlt className="mr-2" />
              QA Documentation Specialists
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Global QA Documentation Services:{" "}
                <span className="text-brand-blue">Enterprise-Grade Test Management</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                As software complexity accelerates in 2026, we bridge the gap between rapid deployment and quality assurance with audit-ready, scalable systems. Every artifact we produce aligns with the <span className="font-bold text-brand-blue">ISO/IEC/IEEE 29119-3</span> standard.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Our team replaces simple spreadsheets with a single source of truth for global engineering teams, delivering precision-engineered QA documentation for software testing and regulatory audits.
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-start sm:flex-row gap-4">
              <Link href="/contact-us">
                <button className="inline-flex cursor-pointer items-center px-8 py-4 bg-brand-blue text-white font-semibold rounded-lg hover:shadow-lg transition-colors duration-200">
                  Contact Us
                  <FaArrowRight className="ml-2" />
                </button>
              </Link>
              <button
                onClick={openLightbox}
                className="inline-flex cursor-pointer items-center px-8 py-4 bg-white text-brand-blue font-semibold rounded-lg border-2 border-brand-blue hover:bg-purple-50 transition-colors duration-200"
              >
                <FaPlay className="mr-2" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">2,500+</div>
                <div className="text-sm text-gray-600">Documents Created</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">99%</div>
                <div className="text-sm text-gray-600"><Link href="/blog/post/data-synchronization-testing-ensuring-real-time-accuracy-across-iot-systems">Accuracy</Link> Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">150+</div>
                <div className="text-sm text-gray-600">Projects Documented</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Content - Documentation Dashboard */}
          <div className="relative">
            <QADocumentationAnimation />
          </div>
        </div>
      </div>
      {/* Lightbox Modal */}
      <Lightbox
        isOpen={isLightboxOpen}
        videoLink="https://yourvideolink.com"
        onClose={closeLightbox}
      />
    </section>
  );
};

export default QADocumentationHeroSection;
