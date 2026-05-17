"use client";

import React from "react";
import {
  Search,
  TestTube,
  Shield,
  Award,
  Clock,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

const TradingAppCertificationProcess = () => {
  const processSteps = [
    {
      step: "01",
      icon: <Search className="w-8 h-8" />,
      title: "Initial Assessment",
      duration: "3-5 days",
      description:
        "Comprehensive analysis of your trading app's architecture, security measures, regulatory compliance status, and performance benchmarks.",
      deliverables: [
        (<><Link href="/security-testing">Security Assessment Report</Link></>),
        "Compliance Gap Analysis",
        "Performance Baseline",
        (<><Link href="/blog/post/test-execution-comprehensive-testing-implementation">Testing Strategy</Link></>),
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      step: "02",
      icon: <TestTube className="w-8 h-8" />,
      title: "Comprehensive Testing",
      duration: "10-14 days",
      description:
        "In-depth testing across security, functionality, performance, compliance, and user experience dimensions with real-world trading scenarios.",
      deliverables: [
        (<><Link href="/blog/post/test-execution-comprehensive-testing-implementation">Test Execution Reports</Link></>),
        "Vulnerability Assessment",
        (<><Link href="/blog/post/performance-testing-for-ai-applications">Performance Analysis</Link></>),
        "Compliance Validation",
      ],
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      step: "03",
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Compliance Audit",
      duration: "5-7 days",
      description:
        "Detailed security audit including penetration testing, regulatory compliance review, and financial data protection validation.",
      deliverables: [
        "Security Audit Report",
        (<><Link href="/blog/post/how-to-perform-penetration-testing-for-web-applications">Penetration Test Results</Link></>),
        "Compliance Review",
        (<><Link href="/blog/post/risk-based-regression-testing-smarter-test-optimization">Risk Assessment</Link></>),
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      step: "04",
      icon: <Award className="w-8 h-8" />,
      title: "Certification & Support",
      duration: "2-3 days",
      description:
    (<>Final certification issuance with ongoing support, monitoring, and maintenance for continuous compliance and (<><Link href="/blog/post/performance-testing-for-ai-applications">performance</Link></>) optimization.</>),
      deliverables: [
        "Certification Certificate",
        "Compliance Badge",
        "Ongoing Support Plan",
        "Monitoring Dashboard",
      ],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  return (
    <section
      id="trading-app-certification-process"
      className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <div
      className="text-center mb-16"
    >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-brand-blue">Certification Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic 4-step approach to ensure your trading app meets the
            highest standards of <Link href="/security-testing">security</Link>, <Link href="/blog/post/medical-device-testing-ensuring-patient-safety-and-regulatory-compliance">compliance</Link>, and <Link href="/performance-testing-services">performance</Link>.
            Typically completed in 20-29 working days.
          </p>
        </div>

        <div className="space-y-8">
          {processSteps.map((step, index) => (
            <div
      key={index}
      className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
    >
              {/* Step Content */}
              <div className="flex-1 bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {step.step}
                  </div>
                  <div className={`${step.color}`}>{step.icon}</div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    {step.duration}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {step.description}
                </p>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Key Deliverables:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {step.deliverables.map((deliverable, deliverableIndex) => (
                      <div
                        key={deliverableIndex}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">
                          {deliverable}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step Visual */}
              <div className="flex-shrink-0">
                <div
                  className={`w-32 h-32 ${step.bgColor} rounded-full flex items-center justify-center ${step.color} shadow-lg`}
                >
                  {step.icon}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Timeline Summary */}
        <div
      className="bg-gradient-to-r from-brand-blue to-blue-600 text-white rounded-xl p-8 mt-16"
    >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Total Timeline: 20-29 Working Days
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              From initial assessment to final certification, we ensure a
              thorough and efficient process that doesn&apos;t disrupt your
              trading operations or development timeline.
            </p>
            <Link href="/contact-us">
              <button className="bg-white cursor-pointer text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Get Started Today
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingAppCertificationProcess;
