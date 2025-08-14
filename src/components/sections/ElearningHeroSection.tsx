"use client";

import Link from "next/link";
import React from "react";
import {
  FaGraduationCap,
  FaLaptop,
  FaMobile,
  FaUsers,
  FaChartLine,
  FaShieldAlt,
  FaRocket,
  FaCheckCircle,
  FaPlay,
  FaBook,
  FaGlobe,
  FaAccessibleIcon,
  FaArrowRight,
} from "react-icons/fa";

const ElearningHeroSection: React.FC = () => {
  const keyStats = [
    { value: "4.5/5", label: "Average User Satisfaction Score", icon: FaUsers },
    { value: "50+", label: "LMS Platforms", icon: FaLaptop },
    { value: "99.9%", label: "Uptime Achieved", icon: FaRocket },
    {
      value: "WCAG 2.1",
      label: "Accessibility Compliant",
      icon: FaAccessibleIcon,
    },
  ];

  const learningTypes = [
    { icon: FaBook, label: "Online Courses", color: "text-blue-500" },
    { icon: FaUsers, label: "Virtual Classrooms", color: "text-green-500" },
    { icon: FaPlay, label: "Video Learning", color: "text-red-500" },
    { icon: FaGlobe, label: "Global Training", color: "text-purple-500" },
  ];

  const complianceStandards = [
    "WCAG 2.1 AA Compliance",
    "Section 508 Standards",
    "SCORM 1.2 & 2004",
    "xAPI (Tin Can API)",
    "GDPR Privacy Compliance",
    "COPPA Educational Standards",
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      <div className="flex flex-col text-center md:text-start relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Content */}
          <div className="space-y-5 mb-48">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[theme(color.brand.blue)] text-white bg-opacity-10 rounded-full px-6 py-2 border border-[theme(color.brand.blue)] border-opacity-20">
              <FaGraduationCap className="w-4 h-4" />
              <span className="text-sm font-semibold">
                E-Learning Testing Solutions
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Empower Learning
              <span className="block text-brand-blue">Through Quality</span>
              E-Learning Testing
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Ensure exceptional learner experiences with comprehensive
              e-learning testing for LMS platforms, online learning systems, and
              educational applications. From WCAG accessibility compliance to
              performance testing and scalability, we help you deliver
              inclusive, secure education platforms that truly make an impact.
            </p>

            {/* Learning Types */}
            <div className="grid grid-cols-2 gap-4">
              {learningTypes.map((type, index) => (
                <div key={index} className="flex items-center gap-3">
                  <type.icon
                    className={`w-5 h-5 ${type.color} flex-shrink-0`}
                  />
                  <span className="text-gray-700 font-medium">
                    {type.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  WCAG 2.1 Compliance
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  SCORM Integration
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  Multi-Device Testing
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  Performance Optimization
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact-us">
                <button className="inline-flex cursor-pointer items-center px-8 py-4 bg-brand-blue text-white font-semibold rounded-lg hover:shadow-lg transition-colors duration-200">
                  Start Free LMS Audit
                  <FaArrowRight className="ml-2" />
                </button>
              </Link>

              <Link href="/contact-us">
                <button className="inline-flex cursor-pointer items-center px-8 py-4 bg-white text-brand-blue font-semibold rounded-lg border-2 border-brand-blue hover:bg-blue-50 transition-colors duration-200">
                  <FaPlay className="mr-2" />
                  Schedule Demo
                </button>
              </Link>
            </div>

            {/* Compliance Badges */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4">
                Trusted by leading educational institutions worldwide
              </p>
              <div className="grid grid-cols-3 text-center gap-3 py-5">
                {complianceStandards.map((standard, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white bg-opacity-80 text-gray-600 text-xs rounded-full border border-gray-200 font-medium"
                  >
                    {standard}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Visual */}
          <div className="space-y-8">
            {/* Key Statistics */}
            <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white border-opacity-50">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  E-Learning Testing Expertise
                </h3>
                <p className="text-gray-600">
                  Delivering quality education technology
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {keyStats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-blue to-sky-600 rounded-xl flex items-center justify-center mx-auto mb-3">
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

            {/* Learning Impact Metrics */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 border border-green-100">
              <div className="flex items-center gap-3 mb-6">
                <FaChartLine className="w-6 h-6 text-green-600" />
                <h4 className="text-xl font-bold text-gray-900">
                  Average Client Impact
                </h4>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Course Completion Rate</span>
                  <span className="font-bold text-green-600">+45%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">User Engagement Score</span>
                  <span className="font-bold text-green-600">+38%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Platform Performance</span>
                  <span className="font-bold text-green-600">+52%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">
                    Accessibility Compliance
                  </span>
                  <span className="font-bold text-green-600">100%</span>
                </div>
              </div>
            </div>

            {/* Learning Modalities */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl p-8 border border-purple-100">
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
                Testing Coverage
              </h4>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white bg-opacity-70 rounded-xl">
                  <FaLaptop className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">
                    Desktop LMS
                  </div>
                </div>
                <div className="text-center p-4 bg-white bg-opacity-70 rounded-xl">
                  <FaMobile className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">
                    Mobile Learning
                  </div>
                </div>
                <div className="text-center p-4 bg-white bg-opacity-70 rounded-xl">
                  <FaPlay className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">
                    Video Content
                  </div>
                </div>
                <div className="text-center p-4 bg-white bg-opacity-70 rounded-xl">
                  <FaShieldAlt className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">
                    Security & Privacy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-20 bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-8 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your E-Learning Platform?
            </h3>
            <p className="text-indigo-100 mb-6 text-lg">
              Join 200+ educational institutions that trust Testriq for
              comprehensive e-learning QA solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <button className="bg-white cursor-pointer text-brand-blue px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 hover:scale-97 transition-all duration-300 ease-in-out">
                  Get Free Platform Assessment
                </button>
              </Link>
              <Link href="/case-studies">
                <button className="bg-white cursor-pointer bg-opacity-20 text-brand-blue px-6 py-3 rounded-xl font-semibold hover:bg-opacity-30 hover:scale-97 transition-all duration-300 ease-in-out border border-white border-opacity-30">
                  View Success Stories
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
        .delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </section>
  );
};

export default ElearningHeroSection;
