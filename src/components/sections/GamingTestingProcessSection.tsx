"use client";

import Link from "next/link";
import React from "react";
import {
  FaGamepad,
  FaSearch,
  FaCog,
  FaRocket,
  FaUsers,
  FaShieldAlt,
  FaChartLine,
  FaCheckCircle,
  FaBug,
  FaTrophy,
  FaPlay,
} from "react-icons/fa";

const GamingTestingProcessSection: React.FC = () => {
  const processSteps = [
    {
      icon: FaSearch,
      title: "Game Analysis & Planning",
      description:
        "Comprehensive analysis of game mechanics, target platforms, and testing requirements",
      details: [
        "Game Genre Analysis",
        "Platform Requirements",
        "Testing Strategy",
        "Risk Assessment",
      ],
    },
    {
      icon: FaCog,
      title: "Test Environment Setup",
      description:
        "Configuration of testing environments across all target platforms and devices",
      details: [
        "Device Configuration",
        "Platform Setup",
        "Network Simulation",
        "Tool Integration",
      ],
    },
    {
      icon: FaGamepad,
      title: "Functional Testing",
      description:
        "Comprehensive testing of game mechanics, controls, UI/UX, and core gameplay features",
      details: [
        "Game Mechanics",
        "Control Testing",
        "UI/UX Validation",
        "Feature Testing",
      ],
    },
    {
      icon: FaChartLine,
      title: "Performance Testing",
      description:
        "Optimization testing for frame rates, loading times, memory usage, and system performance",
      details: [
        "Frame Rate Testing",
        "Load Time Analysis",
        "Memory Optimization",
        "Stress Testing",
      ],
    },
    {
      icon: FaUsers,
      title: "Multiplayer Testing",
      description:
        "Network testing, synchronization validation, and multiplayer feature verification",
      details: [
        "Network Testing",
        "Synchronization",
        "Matchmaking",
        "Social Features",
      ],
    },
    {
      icon: FaShieldAlt,
      title: "Security & Compatibility",
      description:
        "Security validation, anti-cheat testing, and cross-platform compatibility verification",
      details: [
        "Security Testing",
        "Anti-Cheat Validation",
        "Compatibility Testing",
        "Data Protection",
      ],
    },
    {
      icon: FaBug,
      title: "Bug Tracking & Resolution",
      description:
        "Comprehensive bug identification, documentation, and resolution verification",
      details: [
        "Bug Documentation",
        "Severity Classification",
        "Regression Testing",
        "Fix Validation",
      ],
    },
    {
      icon: FaRocket,
      title: "Launch Readiness",
      description:
        "Final validation, launch preparation, and post-launch monitoring setup",
      details: [
        "Launch Testing",
        "Day-One Patch",
        "Monitoring Setup",
        "Support Planning",
      ],
    },
  ];

  const testingMethodologies = [
    {
      icon: FaPlay,
      title: "Gameplay Testing",
      description: "Core gameplay mechanics and user experience validation",
    },
    {
      icon: FaUsers,
      title: "Multiplayer Testing",
      description: "Network synchronization and social feature testing",
    },
    {
      icon: FaChartLine,
      title: "Performance Testing",
      description: "Frame rate, loading time, and resource optimization",
    },
    {
      icon: FaShieldAlt,
      title: "Security Testing",
      description: "Anti-cheat validation and data protection testing",
    },
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-white bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaCog className="w-4 h-4" />
            <span className="text-sm">Testing Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Gaming Testing
            <span className="block text-brand-blue">Process & Methodology</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven, systematic game QA approach designed specifically for
            gaming applications, ensuring exceptional player experiences,
            flawless game performance, and successful game launches across
            mobile, console, and PC platforms.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[theme(color.brand.blue)] text-white rounded-full flex items-center justify-center text-sm font-bold z-10">
                {index + 1}
              </div>

              {/* Card */}
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:ring-2 hover:ring-brand-blue h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {step.description}
                </p>

                <div className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center gap-2">
                      <FaCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testing Methodologies */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-6 py-2 mb-6">
              <FaTrophy className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-green-600">
                Testing Excellence
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gaming-Focused Methodologies
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our specialized game testing approach ensures that every aspect of
              gaming software testing meets the highest standards of quality
              assurance, game performance, and player satisfaction across all
              platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testingMethodologies.map((method, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {method.title}
                </h4>
                <p className="text-gray-600 text-sm">{method.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-blue-50 rounded-2xl">
            <div className="w-16 h-16 bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaGamepad className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Player-Centric Testing
            </h3>
            <p className="text-gray-600">
              Every test is designed from the player&apos;s perspective,
              ensuring exceptional gaming experiences and high player
              satisfaction.
            </p>
          </div>

          <div className="text-center p-8 bg-green-50 rounded-2xl">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaRocket className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Launch Success
            </h3>
            <p className="text-gray-600">
              Our proven process ensures successful game launches with minimal
              post-launch issues and maximum player retention.
            </p>
          </div>

          <div className="text-center p-8 bg-teal-50 rounded-2xl">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaTrophy className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Quality Assurance
            </h3>
            <p className="text-gray-600">
              Comprehensive quality assurance across all gaming platforms and
              devices, ensuring consistent excellence.
            </p>
          </div>
        </div>

        {/* Process Statistics */}
        <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Proven Gaming Testing Results
            </h3>
            <p className="text-lg max-w-2xl mx-auto">
              Our systematic gaming testing process delivers measurable results
              that drive player engagement and commercial success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 text-brand-blue bg-white bg-opacity-10 rounded-2xl">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div>Bug-Free Launches</div>
            </div>
            <div className="text-center p-6 text-brand-blue bg-white bg-opacity-10 rounded-2xl">
              <div className="text-4xl font-bold mb-2">85%</div>
              <div>Bug Reduction Rate</div>
            </div>
            <div className="text-center p-6 text-brand-blue bg-white bg-opacity-10 rounded-2xl">
              <div className="text-4xl font-bold mb-2">60%</div>
              <div>Performance Improvement</div>
            </div>
            <div className="text-center p-6 text-brand-blue bg-white bg-opacity-10 rounded-2xl">
              <div className="text-4xl font-bold mb-2">45%</div>
              <div>Player Retention Increase</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Start Your Gaming Testing Journey?
              </h3>
              <p className="text-blue-100 mb-8 text-lg">
                Let our gaming testing experts guide you through a
                comprehensive, player-focused testing process that ensures your
                game&apos;s success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-[theme(color.brand.blue)]">
                <Link href="/contact-us">
                  <button className="bg-white cursor-pointer px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 hover:scale-98 hover:text-sky-700 transition-all">
                    Start Your Gaming Project
                  </button>
                </Link>
                <button className="bg-white cursor-pointer bg-opacity-20 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-opacity-30 hover:scale-98 hover:text-sky-700 transition-all border border-white border-opacity-30">
                  Learn More About Our Process
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamingTestingProcessSection;
