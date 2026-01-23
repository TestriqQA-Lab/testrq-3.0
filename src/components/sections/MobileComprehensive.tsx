"use client";

import Link from "next/link";
import React from "react";
import {
  FaShieldAlt,
  FaUsers,
  FaChartLine,
  FaSync,
  FaApple,
  FaFlask,
} from "react-icons/fa";
import { BsLightningCharge } from "react-icons/bs";

const MobileComprehensive: React.FC = () => {
  const testingServices = [
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Mastering Device & OS Fragmentation",
      description:
        "As Android 15 rolls out alongside iOS 18/19, we validate your app across diverse hardware including foldables, wearables, and dual-screen devices to prevent 20-30% configuration crashes.",
      features: [
        "ISO 29119-3 Compliance",
        "Foldable & Wearable QA",
        "Dynamic Resolution Testing",
        "Risk-Based Device Matrix",
      ],
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Advanced Security & Pen Testing",
      description:
        "Mapping to OWASP Mobile Top 10, we defend against the 150% rise in mobile ransomware with deep APK/IPA file audits and biometric (FaceID) validation.",
      features: [
        "OWASP Mobile Top 10",
        "Biometric Identity Checks",
        "API Endpoint Audits",
        "ISO 29119 Incident Reports",
      ],
    },
    {
      icon: <BsLightningCharge className="w-8 h-8" />,
      title: "5G & Performance Optimization",
      description:
        "Testing real-world 5G/Wi-Fi 6 handovers. We replicate latency and throttling to prevent the 42% of crashes caused by network-edge connectivity shifts.",
      features: [
        "5G Latency Simulation",
        "Thermal Throttling Checks",
        "4G/5G/Offline Handovers",
        "Battery Consumption Benchmarks",
      ],
    },
    {
      icon: <FaSync className="w-8 h-8" />,
      title: "AI-Driven Test Automation",
      description:
        "Utilizing Appium & Selenium with AI-driven self-healing tools and Model-Based Testing (MBT) to reduce scripting overhead and handle high-velocity UI updates.",
      features: [
        "Self-Healing Frameworks",
        "Appium & XCUI Automation",
        "Model-Based Testing (MBT)",
        "CI/CD Pipeline Integration",
      ],
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Global Usability & UX Validation",
      description:
        "Facilitating mobile usability testing on real hardware to ensure touch gestures (swipe, pinch, zoom) and AR/VR features meet human expectations globally.",
      features: [
        "Gesture Responsiveness",
        "AR/VR UX Validation",
        "Accessibility Compliance",
        "Real-Device UAT Sessions",
      ],
    },
    {
      icon: <FaFlask className="w-8 h-8" />,
      title: "Compliance-First QA",
      description:
        "Rigorous data privacy checks for high-stakes apps. Specialized QA for banking, healthcare, and fintech platforms requiring SOC2, GDPR, and HIPAA compliance.",
      features: [
        "SOC2 Type II Assurance",
        "GDPR & CCPA Audits",
        "HIPAA Health-Tech QA",
        "Fintech Security Checklist",
      ],
    },
  ];

  const scrollToProcess = () => {
    document.querySelector("#mobile-process-section")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="bg-gray-50 py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaFlask />
            <span className="text-sm">Engineering Global Trust</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Navigating the 2026 Mobile QA Landscape:{" "}
            <span className="text-[theme(color.brand.blue)]">
              5 Global Challenges
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Testriq delivers global testing excellence across the US, UK, EU, and Asia through our &apos;Compliance-First&apos; methodology and ISO 29119 standardized frameworks.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testingServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6 text-[theme(color.brand.blue)]">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-700"
                  >
                    <div className="w-2 h-2 bg-[theme(color.brand.blue)] rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Platform Support */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Advanced Platform & Device Coverage (2026)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* iOS Testing */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                  <span className="text-white text-lg">
                    <FaApple className="w-6 h-6" />
                  </span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900">
                  <Link href="/blog/post/what-are-the-testing-tools-for-ios-app-testing">
                    iOS & Apple Ecosystem
                  </Link>
                </h4>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <strong>Devices:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• iPhone 13 to 17 Pro Max</li>
                    <li>• iPad Pro (M2/M3 chips)</li>
                    <li>• Apple Watch Ultra</li>
                    <li>• Vision Pro (Extended Reality)</li>
                  </ul>
                </div>
                <div>
                  <strong>OS Versions:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• iOS 15.0 - 19.x</li>
                    <li>• iPadOS 15.0 - 19.x</li>
                    <li>• watchOS 8.0 - 11.x</li>
                    <li>• visionOS (Latest)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Android Testing */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <span className="text-white text-lg font-bold">🤖</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900">
                  <Link href="/blog/post/mobile-automation-testing-guide-android-ios-frameworks">
                    Android & Fragmented OS
                  </Link>
                </h4>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <strong>Devices:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• Samsung Z Fold/Flip 6</li>
                    <li>• Google Pixel 8 & 9 Pro</li>
                    <li>• Xiaomi & OnePlus (Global)</li>
                    <li>• 24,000+ Device Combinations</li>
                  </ul>
                </div>
                <div>
                  <strong>OS Versions:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• Android 11.0 - 15.0</li>
                    <li>• Custom UI (OneUI, HyperOS)</li>
                    <li>• Wear OS 4.0/5.0</li>
                    <li>• Android Automotive OS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Ensure Your Mobile App&apos;s Quality?
            </h3>
            <p className="text-gray-600 mb-6">
              Get a comprehensive testing strategy tailored to your mobile
              application&apos;s specific needs and target audience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact-us"
                title="Start Free Consultation – Testriq QA Lab"
                className="inline-flex items-center justify-center px-8 py-3 min-h-[44px] min-w-[44px] bg-brand-blue text-white font-semibold rounded-lg hover:bg-brand-blue hover:shadow-lg transition-colors cursor-pointer"
              >
                Start Free Consultation
              </Link>
              <button
                onClick={scrollToProcess}
                className="cursor-pointer px-8 py-3 border border-[theme(color.brand.blue)] text-[theme(color.brand.blue)] font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                View Testing Process
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileComprehensive;
