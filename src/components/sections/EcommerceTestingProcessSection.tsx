"use client";

import Link from "next/link";
import React from "react";
import { FaSearch, FaMobile, FaShieldAlt, FaChartLine, FaCheckCircle, FaRocket } from "react-icons/fa";

const EcommerceTestingProcessSection: React.FC = () => {
  const processSteps = [
    {
      icon: FaSearch,
      title: "Plan & Analyze Requirements",
      description: "Mapping the order lifecycle, SKU management logic, and specific shipping API requirements.",
    },
    {
      icon: FaCheckCircle,
      title: "Functional & Checkout Validation",
      description: "Testing core 'Add to Cart' and checkout flows, including guest checkouts and discount code logic.",
    },
    {
      icon: FaShieldAlt,
      title: "Payment Gateway & Security Audit",
      description: "Validating PCI DSS compliance in a sandbox environment and performing SSL certification checks.",
    },
    {
      icon: FaMobile,
      title: "Omnichannel Compatibility Testing",
      description: "Running parallel tests across iOS, Android, and Desktop browsers to ensure visual and functional parity.",
    },
    {
      icon: FaChartLine,
      title: "Inventory & High-Volume Load Testing",
      description: "Simulating peak traffic events (Black Friday style) and validating inventory updates correctly.",
    },
    {
      icon: FaRocket,
      title: "Post-Launch Monitoring",
      description: "Real-time checking for broken links, payment latency, and cart abandonment triggers.",
    },
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="text-[theme(color.brand.blue)]">
              E-Commerce Testing
            </span>{" "}
            Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven methodology that ensures{" "}
            <Link href="/blog/post/test-execution-comprehensive-testing-implementation">
              comprehensive testing
            </Link>{" "}
            and optimal results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="text-center text-white py-5 rounded-2xl bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600"
            >
              <div className="w-16 h-16 bg-sky-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-16 h-12 p-2" />
              </div>
              <h3 className="text-lg font-bold mb-4">{step.title}</h3>
              <p className="leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcommerceTestingProcessSection;
