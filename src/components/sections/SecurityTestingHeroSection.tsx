"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaShieldAlt,
  FaArrowRight,
  FaPlay,
  FaHome,
  FaChevronRight
} from "react-icons/fa";
import Lightbox from "../VideoLightBox";
import SecurityTestingAnimation from "./SecurityTestingAnimation";

const SecurityTestingHeroSection: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Function to handle the lightbox open/close
  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };
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
            Security Testing
          </span>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="hidden md:inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-full text-sm font-medium">
              <FaShieldAlt className="mr-2" />
              Cybersecurity Testing Experts
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Security Testing & Penetration Testing Services for
              <span className="text-transparent bg-clip-text bg-brand-blue">
                {" "}
                Global Enterprises
              </span>
            </h1>

            <div className="space-y-4">
              <p className="text-xl text-gray-600 leading-relaxed font-bold">
                The Digital Resilience Mandate
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                In 2026, digital resilience is no longer a luxury. It has become a vital regulatory and core business mandate for every organization. Ensuring your systems can withstand modern cyber attacks is essential for maintaining trust and compliance.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                At Testriq, we provide end-to-end Security Testing Services designed to identify vulnerabilities before they become breaches. Our security experts deliver comprehensive system weaknesses Assessment and Penetration Testing (VAPT) and Application Security Testing (AST) to protect your critical data.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                We specialize in protecting high-growth SaaS platforms and complex cloud infrastructure. We secure your digital assets against rising global threats. This ensures your business remains stable and resilient in a high-risk environment.
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-start sm:flex-row gap-4">
              <Link href="/contact-us">
                <button className="bg-brand-blue cursor-pointer text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                  Get Started Today
                  <FaArrowRight className="ml-2" />
                </button>
              </Link>
              <button
                onClick={openLightbox}
                className="border-2 cursor-pointer border-brand-blue text-brand-blue px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center"
              >
                <FaPlay className="mr-2" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-red-600">
                  8,500+
                </div>
                <div className="text-sm text-gray-600">
                  Vulnerabilities Found
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-pink-600">
                  99.8%
                </div>
                <div className="text-sm text-gray-600">Threat Detection</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-600">
                  1,800+
                </div>
                <div className="text-sm text-gray-600">Apps Secured</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-600">
                  24/7
                </div>
                <div className="text-sm text-gray-600">Security Monitoring</div>
              </div>
            </div>
          </div>

          {/* Right Content - Security Testing Dashboard */}
          <div className="relative">
            <SecurityTestingAnimation />
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

export default SecurityTestingHeroSection;
