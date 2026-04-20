"use client";

import Link from "next/link";
import React from "react";
import {
  FaShoppingCart,
  FaCreditCard,
  FaMobile,
  FaShieldAlt,
} from "react-icons/fa";

const EcommerceTestingServicesSection: React.FC = () => {
  const services = [
    {
      icon: FaShoppingCart,
      title: "Shopping Cart Testing",
      description: (
        <>
          Complete cart{" "}
          <Link href="/blog/post/functional-testing-in-manual-testing-use-cases-techniques-best-practices">
            functionality
          </Link>
          , checkout process, and payment integration testing
        </>
      ),
    },
    {
      icon: FaCreditCard,
      title: "Payment Gateway Testing",
      description: (
        <>
          <Link href="/blog/post/secure-payment-gateway-testing-for-e-commerce">
            Secure payment
          </Link>{" "}
          processing, multiple payment methods, and transaction validation
        </>
      ),
    },
    {
      icon: FaMobile,
      title: (<><Link href="/mobile-application-testing" className="hover:text-brand-blue hover:underline">Mobile Commerce Testing</Link></>),
      description:
        "Mobile-responsive design, touch interfaces, and mobile payment optimization",
    },
    {
      icon: FaShieldAlt,
      title: (
        <>
          <Link href="/security-testing">Security Testing</Link>
        </>
      ),
      description:
        "Data protection, SSL certificates, PCI compliance, and vulnerability assessment",
    },
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Enterprise-Grade <span className="text-[theme(color.brand.blue)]">E-Commerce Quality Engineering</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            To serve the world&apos;s leading retailers, Testriq adheres to a &quot;Conversion-First&quot; philosophy. We design our commerce validation processes to pass the most rigorous audits and maximize platform ROI.
          </p>
        </div>

        {/* Global Standards & Compliance Table */}
        <div className="mb-20 overflow-hidden rounded-2xl border border-gray-200 shadow-xl max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-brand-blue to-blue-700 px-8 py-6">
            <h3 className="text-2xl font-bold text-white">Engineering Trust: Global Standards & Compliance</h3>
            <p className="text-blue-100 mt-2">Enterprise-grade e-commerce validation aligning with international regulatory benchmarks.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left bg-white">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-8 py-4 font-bold text-gray-900">Standard / Law</th>
                  <th className="px-8 py-4 font-bold text-gray-900">E-Commerce Application</th>
                  <th className="px-8 py-4 font-bold text-gray-900">Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-8 py-6 font-bold text-gray-900">PCI DSS 4.0</td>
                  <td className="px-8 py-6 text-gray-600">The global benchmark for secure payment processing; mandatory for all modern checkouts.</td>
                  <td className="px-8 py-6 text-green-600 font-medium"><Link href="/security-testing" className="hover:underline">Transaction Security</Link></td>
                </tr>
                <tr>
                  <td className="px-8 py-6 font-bold text-gray-900">ISO/IEC/IEEE 29119</td>
                  <td className="px-8 py-6 text-gray-600">Bedrock of our QA methodology; mapping every artifact from Test Policy to results.</td>
                  <td className="px-8 py-6 text-green-600 font-medium"><Link href="/qa-documentation-services" className="hover:underline">Global Audit-Ready</Link></td>
                </tr>
                <tr>
                  <td className="px-8 py-6 font-bold text-gray-900">GDPR / CCPA</td>
                  <td className="px-8 py-6 text-gray-600">Testing consent managers and data deletion workflows to ensure total user privacy.</td>
                  <td className="px-8 py-6 text-green-600 font-medium"><Link href="/privacy-policy" className="hover:underline">Privacy Integrity</Link></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg ring-sky-300 ring-1 hover:shadow-xl hover:ring-3 hover:translate-x-2 transition-all duration-300 ease-in-out"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcommerceTestingServicesSection;
