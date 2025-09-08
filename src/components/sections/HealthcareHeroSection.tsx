"use client";

import Link from "next/link";
import React from "react";
import {
  FaHeartbeat,
  FaShieldAlt,
  FaMobile,
  FaUserMd,
  FaRocket,
  FaUsers,
  FaChartLine,
  FaCheckCircle,
  FaLock,
  FaClipboardCheck,
} from "react-icons/fa";

const HealthcareHeroSection: React.FC = () => {
  const keyStats = [
    { value: "100%", label: "HIPAA Compliance", icon: FaShieldAlt },
    { value: "200+", label: "Healthcare Apps Tested", icon: FaHeartbeat },
    { value: "75%", label: "Reduced Response Time in Emergency Systems", icon: FaLock },
    { value: "24/7", label: "Security Monitoring", icon: FaClipboardCheck },
  ];

  const trustBadges = [
    "HIPAA Compliant Testing",
    "FDA Validation Support",
    "SOC 2 Type II Certified",
    "ISO 27001 Security Standards",
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        <div className="absolute top-32 lg:top-22 xl:top-20 left-2/3 md:left-1/2 lg:left-1/3 xl:left-1/4 2xl:left-1/4 animate-float">
          <div className="w-16 h-16 bg-white bg-opacity-80 rounded-2xl shadow-lg flex items-center justify-center">
            <FaHeartbeat className="w-8 h-8 text-[theme(color.brand.blue)]" />
          </div>
        </div>
        <div className="absolute top-64 md:top-46 lg:top-56 right-1/4 md:right-1/5 lg:right-6/12 xl:right-6/12 animate-float delay-1000">
          <div className="w-16 h-16 bg-white bg-opacity-80 rounded-2xl shadow-lg flex items-center justify-center">
            <FaShieldAlt className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="absolute bottom-0 xl:bottom-80 left-2/4 md:left-1/4 lg:left-3/4 lg:bottom-96 animate-float delay-2000">
          <div className="w-16 h-16 bg-white bg-opacity-80 rounded-2xl shadow-lg flex items-center justify-center">
            <FaUserMd className="w-8 h-8 text-[theme(color.brand.blue)]" />
          </div>
        </div>
        <div className="absolute bottom-0 xl:bottom-80 lg:bottom-3/12 left-1/6 md:right-1/6 lg:left-1/2 animate-float delay-3000">
          <div className="w-16 h-16 bg-white bg-opacity-80 rounded-2xl shadow-lg flex items-center justify-center">
            <FaMobile className="w-8 h-8 text-teal-500" />
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[theme(color.brand.blue)] text-white bg-opacity-10 rounded-full px-6 py-2 border border-[theme(color.brand.blue)] border-opacity-20">
              <FaHeartbeat className="w-4 h-4" />
              <span className="text-sm">Healthcare Testing Solutions</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Secure Your
              <span className="block text-brand-blue">Healthcare Software</span>
              with Expert Medical QA
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Ensure <Link href="/blog/post/medical-device-testing-ensuring-patient-safety-and-regulatory-compliance">patient safety</Link>, regulatory compliance, and healthcare data
              security with our specialized healthcare testing services. From{" "}
              <Link href="/blog/post/ehr-emr-system-testing-and-integration-ensuring-data-integrity-and-interoperability">EHR system</Link> testing to medical software QA, we validate your
              healthcare solutions meet <Link href="/blog/post/what-is-hipaa-compliance-testing-ensuring-phi-protection-for-healthcare-apps">HIPAA compliance</Link>, FDA regulations, and
              other industry standards.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  HIPAA Compliance Testing
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  <Link href="/blog/post/fda-validation-support-for-healthcare-software-ensuring-compliance-medical-software-approval">FDA Validation</Link> Support
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  <Link href="/blog/post/medical-device-testing-ensuring-patient-safety-and-regulatory-compliance">Medical Device Testing</Link>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  EHR Integration Testing
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col lg:flex-col xl:flex-row gap-4 pt-4">
              <Link href="/contact-us">
                <button className="cursor-pointer bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:scale-98 transition-all duration-300 flex items-center justify-center gap-2">
                  <FaRocket className="w-5 h-5" />
                  Start Healthcare Audit
                </button>
              </Link>
              <Link href="/contact-us">
                <button className="ring-2 cursor-pointer ring-brand-blue text-brand-blue px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-98 hover:ring-3 hover:text-sky-600 transition-all duration-300 flex items-center justify-center gap-2">
                  <FaUsers className="w-5 h-5" />
                  Schedule Consultation
                </button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4 text-center">
                Trusted by healthcare organizations worldwide
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

          {/* Right Column - Visual & Stats */}
          <div className="space-y-8">
            {/* Key Statistics */}
            <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white border-opacity-50">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Proven Healthcare Expertise
                </h3>
                <p className="text-gray-600">
                  Results that ensure patient safety and compliance
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {keyStats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300"
                  >
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Success Metrics */}
            <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-3xl p-8 border border-green-100">
              <div className="flex items-center gap-3 mb-6">
                <FaChartLine className="w-6 h-6 text-green-600" />
                <h4 className="text-xl font-bold text-gray-900">
                  Average Client Results
                </h4>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">
                    Compliance Achievement Rate
                  </span>
                  <span className="font-bold text-green-600">100%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">
                    Security Vulnerability Reduction
                  </span>
                  <span className="font-bold text-green-600">-95%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">
                    Time to Market Acceleration
                  </span>
                  <span className="font-bold text-green-600">-40%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Patient Safety Score</span>
                  <span className="font-bold text-green-600">4.9/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-20 bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-8 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Secure Your Healthcare Software?
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              Join 200+ healthcare organizations that trust Testriq for
              comprehensive medical software testing.
            </p>
            <div className="flex flex-col text-[theme(color.brand.blue)] sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <button className="bg-white cursor-pointer px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 hover:scale-98 transition-all">
                  Get Free Security Assessment
                </button>
              </Link>
              <Link href="/case-studies">
                <button className="bg-white cursor-pointer bg-opacity-20 px-6 py-3 rounded-xl font-semibold hover:bg-opacity-30 hover:scale-98 transition-all border border-white border-opacity-30">
                  View Healthcare Case Studies
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

export default HealthcareHeroSection;
