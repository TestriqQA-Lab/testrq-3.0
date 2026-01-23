"use client";

import Link from "next/link";
import React from "react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

const ApiCardSlider: React.FC = () => {
  const testingTypes = [
    {
      title: "Functional Testing",
      description:
        "Comprehensive validation of API functionality, endpoints, and business logic.",
      action: "blog/post/rest-api-testing-guide-endpoints-methods-best-practices",
      features: [
        "Request/Response validation",
        "Data integrity testing",
        "Error handling verification",
        "Business logic validation",
      ],
      highlight: "99.8% accuracy",
    },
    {
      title: "Performance Testing",
      description:
        "Ensure your APIs perform optimally under various load conditions.",
      action: "performance-testing-services",
      features: [
        "Load testing",
        "Stress testing",
        "Scalability assessment",
        "Response time optimization",
      ],
      highlight: "Sub-second response",
    },
    {
      title: "Security Testing",
      description:
        "Comprehensive security assessment to protect your APIs from threats.",
      action: "security-testing",
      features: [
        "Authentication testing",
        "Authorization validation",
        "Vulnerability assessment",
        "Data encryption verification",
      ],
      highlight: "Zero vulnerabilities",
    },
  ];

  return (
    <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The 2026 <span className="text-[theme(color.brand.blue)]">API Testing Landscape</span>: Navigating Global Challenges
          </h2>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
            In 2026, API testing is no longer just about checking status codes like 200 OK or 404 Not Found. Modern API testing manages escalating risks within complex digital ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="text-[theme(color.brand.blue)] font-bold text-lg mb-2">99% At Risk</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Escalating API Security Risks</h3>
            <p className="text-gray-700 mb-6 text-sm">99% of organizations encountered API security issues last year. 95% of attacks originate from verified sessions, exposing gaps in token handling.</p>
            <div className="text-brand-blue text-xs font-bold uppercase tracking-wider mb-4">ISO 29119-2 Risk-Based Concepts</div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="text-[theme(color.brand.blue)] font-bold text-lg mb-2">36% CAGR Growth</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Complex Distributed Architectures</h3>
            <p className="text-gray-700 mb-6 text-sm">Modern APIs function within event-driven landscapes. We use ISO 29119-3 standards to define multi-system dependencies and ensure reliability.</p>
            <div className="text-brand-blue text-xs font-bold uppercase tracking-wider mb-4">ISO 29119-3 Documentation Standards</div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="text-[theme(color.brand.blue)] font-bold text-lg mb-2">Zero Fragility</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Schema Changes and Test Stability</h3>
            <p className="text-gray-700 mb-6 text-sm">We apply ISO 29119-4 design techniques to simplify schema maintenance. boundary values and combinations keep suites stable as contracts evolve.</p>
            <div className="text-brand-blue text-xs font-bold uppercase tracking-wider mb-4">ISO 29119-4 Design Standards</div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact-us">
            <button className="bg-[theme(color.brand.blue)] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg cursor-pointer transition-colors duration-300">
              Get Comprehensive API Testing
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ApiCardSlider;
