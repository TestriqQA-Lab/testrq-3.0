"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaShieldAlt,
  FaLock,
  FaBug,
  FaEye,
  FaMobile,
  FaDesktop,
  FaCloud,
  FaUserSecret,
} from "react-icons/fa";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import Lightbox from "../VideoLightBox";

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
    <section className="relative py-16 px-8 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-full text-sm font-medium">
              <FaShieldAlt className="mr-2" />
              Cybersecurity Testing Experts
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Fortify Your Applications with
              <span className="text-transparent bg-clip-text bg-brand-blue">
                {" "}
                Advanced Security Testing
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Protect your applications from{" "}
              <Link href="/blog/post/advanced-security-testing-for-healthcare-apps-protecting-patient-data-from-cyber-threats">
                cybersecurity threats
              </Link>{" "}
              with our{" "}
              <Link href="/blog/post/final-reporting-in-qa-delivering-comprehensive-quality-summary">
                comprehensive
              </Link>{" "}
              security testing services. Our expert team conducts{" "}
              <Link href="/blog/post/how-to-perform-penetration-testing-for-web-applications">
                penetration testing
              </Link>
              , vulnerability assessments,{" "}
              <Link href="/blog/post/static-vs-dynamic-application-security-testing-sast-vs-dast">
                static application security testing (SAST), dynamic application
                security testing (DAST)
              </Link>
              , and{""}
              <Link href="/blog/post/what-is-hipaa-compliance-testing-ensuring-phi-protection-for-healthcare-apps">
                compliance testing
              </Link>{" "}
              to identify and eliminate risks like SQL injection, cross-site
              scripting (XSS), and{" "}
              <Link href="/blog/post/api-integration-testing-ensuring-seamless-system-communication">
                insecure APIs
              </Link>{" "}
              before they become critical.
            </p>

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
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Security Command Center
                  </h2>
                </div>
                <span className="text-sm text-red-600 font-medium">
                  Scanning
                </span>
              </div>

              <div className="text-sm text-gray-600 mb-6">
                Real-time security scanning & vulnerability assessment
              </div>

              {/* Testing Approach */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-red-50 p-4 rounded-lg text-center">
                  <FaLock className="text-2xl text-red-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-red-900">Scan</div>
                  <div className="text-xs text-red-600 flex items-center justify-center mt-1">
                    ⚡ Active
                  </div>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg text-center">
                  <FaBug className="text-2xl text-pink-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-pink-900">
                    Analyze
                  </div>
                  <div className="text-xs text-yellow-600 flex items-center justify-center mt-1">
                    🔍 Processing
                  </div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <FaEye className="text-2xl text-purple-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-purple-900">
                    Report
                  </div>
                  <div className="text-xs text-gray-600 flex items-center justify-center mt-1">
                    ⏳ Pending
                  </div>
                </div>
              </div>

              {/* Security Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600">Vulnerabilities</div>
                  <div className="text-lg font-bold text-red-600">
                    23 Critical
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600">Risk Score</div>
                  <div className="text-lg font-bold text-orange-600">
                    7.8/10
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600">Compliance</div>
                  <div className="text-lg font-bold text-green-600">OWASP</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600">Coverage</div>
                  <div className="text-lg font-bold text-blue-600">96%</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Security Scan Progress</span>
                  <span className="text-red-600 font-medium">82% Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-red-600 to-pink-600 h-3 rounded-full"
                    style={{ width: "82%" }}
                  ></div>
                </div>
              </div>

              {/* Testing Areas */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">SAST Analysis</span>
                  <span className="text-red-600 font-medium">95%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">DAST Testing</span>
                  <span className="text-pink-600 font-medium">87%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Penetration Test</span>
                  <span className="text-purple-600 font-medium">72%</span>
                </div>
              </div>

              {/* Platform Icons */}
              <div className="flex justify-center space-x-6 pt-2 border-t border-gray-100">
                <div className="text-center">
                  <FaMobile className="text-xl text-red-600 mx-auto mb-1" />
                  <div className="text-xs text-gray-600">Mobile</div>
                </div>
                <div className="text-center">
                  <FaDesktop className="text-xl text-pink-600 mx-auto mb-1" />
                  <div className="text-xs text-gray-600">Web</div>
                </div>
                <div className="text-center">
                  <FaCloud className="text-xl text-purple-600 mx-auto mb-1" />
                  <div className="text-xs text-gray-600">API</div>
                </div>
                <div className="text-center">
                  <FaUserSecret className="text-xl text-orange-600 mx-auto mb-1" />
                  <div className="text-xs text-gray-600">PenTest</div>
                </div>
              </div>
            </div>
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
