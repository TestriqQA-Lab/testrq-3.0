"use client";

import React from "react";
import {
  ShoppingCart,
  ArrowRight,
  CreditCard,
  Star,
  Award,
  Lock,
} from "lucide-react";
import Link from "next/link";
import { FaHome, FaChevronRight } from "react-icons/fa";

interface ShoppingAppHeroSectionProps {
  scrollToId: string;
}

const ShoppingAppHeroSection: React.FC<ShoppingAppHeroSectionProps> = ({
  scrollToId,
}) => {
  const handleScrollToSection = () => {
    const section = document.getElementById(scrollToId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const highlights = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Secure Payments",
      description: (
        <>
          We verify{" "}
          <Link href="/blog/post/secure-payment-gateway-testing-for-e-commerce">
            payment gateways
          </Link>{" "}
          meet top-tier{" "}
          <Link href="/blog/post/game-security-testing-protecting-your-game-from-hacks-cheats-and-data-breaches">
            encryption
          </Link>{" "}
          and fraud prevention standards
        </>
      ),
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Verified Performance",
      description: (
        <>
          Every app undergoes rigorous{" "}
          <Link href="/blog/post/performance-testing-for-ai-applications">
            speed
          </Link>
          ,{" "}
          <Link href="/blog/post/performance-scalability-testing-ensuring-iot-systems-handle-high-load-efficiently">
            scalability
          </Link>
          , and{" "}
          <Link href="/blog/post/performance-testing-for-healthcare-systems-ensuring-scalability-and-reliability-during-peak-traffic">
            reliability
          </Link>{" "}
          checks before certification.
        </>
      ),
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "User Experience Excellence",
      description: (
        <>
          Certification only granted to apps delivering smooth, intuitive, and{" "}
          <Link href="/blog/post/validation-optimization-in-desktop-app-testing-retesting-performance-ux-assurance">
            accessible shopping experiences.
          </Link>
        </>
      ),
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-8 pb-16 px-8 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-blue rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-brand-blue to-green-600 rounded-full opacity-5 blur-3xl"></div>
      </div>

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
            Shopping Apps Certification
          </span>
        </div>
        {/* Trust Badge */}
        <div className="text-center mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center gap-2 bg-brand-blue text-white px-4 py-2 rounded-full text-sm font-medium">
            <ShoppingCart className="w-4 h-4 hidden md:block" />
            Trusted E-Commerce Platform Certification
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Shopping Apps <span className="text-brand-blue">Certification</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            We certify shopping apps only after verifying they meet the highest
            standards of <Link href="/security-testing">security</Link>,{" "}
            <Link href="/performance-testing-services">performance</Link>, and{" "}
            <Link href="/blog/post/user-experience-testing-for-smart-devices-usability-accessibility">
              user experience
            </Link>{" "}
            - so customers can shop with confidence.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <Link href="/contact-us">
            <button className="bg-brand-blue cursor-pointer  text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get Certified Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
          <button
            onClick={handleScrollToSection}
            className="border-2 cursor-pointer border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300"
          >
            <CreditCard className="w-5 h-5" />
            View Certification Process
          </button>
        </div>

        {/* Highlights Section (Replacing Metrics) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <div className="mb-4 text-brand-blue">{item.icon}</div>
              <h2 className="text-lg font-bold text-gray-900 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShoppingAppHeroSection;
