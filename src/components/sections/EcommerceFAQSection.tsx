"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaQuestionCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";

const EcommerceFAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What types of e-commerce platforms do you test?",
      answer: (
        <>
          We test all major e-commerce platforms including Shopify, WooCommerce,
          Magento, BigCommerce, and custom-built solutions. Our team has
          expertise in framework-specific risks,{" "}
          <Link href="/blog/post/secure-payment-gateway-testing-for-e-commerce">
            payment gateway testing
          </Link>
          , and best practices for each system’s{" "}
          <Link href="/blog/post/core-principles-of-functional-mobile-application-testing">
            functionality
          </Link>{" "}
          and <Link href="/performance-testing-services">performance</Link>.
        </>
      ),
    },
    {
      question: "How long does e-commerce testing typically take?",
      answer: (
        <>
          The duration depends on your platform's complexity and scope. A basic
          e-commerce site typically takes 2-4 weeks for{" "}
          <Link href="/blog/post/test-execution-comprehensive-testing-implementation">
            comprehensive testing
          </Link>
          , while{" "}
          <Link href="/blog/post/why-outsourcing-qa-makes-sense-for-startups-and-enterprises">
            enterprise-level
          </Link>{" "}
          platforms may require 6-8 weeks. We provide detailed timelines during
          our initial assessment.
        </>
      ),
    },
    {
      question: "Do you test payment gateway integrations?",
      answer:
        "Yes, we thoroughly test all payment gateway integrations including PayPal, Stripe, Square, and others. We validate transaction flows, security protocols, error handling, and PCI compliance to ensure safe and reliable payment processing.",
    },
    {
      question: "Can you help with mobile commerce optimization?",
      answer: (
        <>
          Absolutely!{" "}
          <Link href="/mobile-application-testing">
            Mobile commerce testing
          </Link>{" "}
          is a core part of our services. We test responsive design, mobile
          apps, touch interfaces, mobile payment methods, and ensure optimal
          performance across all mobile devices and operating systems.
        </>
      ),
    },
    {
      question: "What security testing do you perform for e-commerce sites?",
      answer: (
        <>
          We conduct comprehensive{" "}
          <Link href="/security-testing">security testing</Link> including
          vulnerability assessments,{" "}
          <Link href="/blog/post/how-to-perform-penetration-testing-for-web-applications">
            penetration testing
          </Link>
          , data encryption validation, user authentication testing, and
          compliance verification for standards like PCI DSS, GDPR, and CCPA.
        </>
      ),
    },
    {
      question:
        "How do you test during peak shopping periods like Black Friday?",
      answer:
        "We perform load testing that simulates peak traffic conditions, including Black Friday and holiday shopping spikes. We test your site's ability to handle concurrent users, process high transaction volumes, and maintain performance under extreme load.",
    },
    {
      question: "Do you provide ongoing testing support after launch?",
      answer:
        "Yes, we offer ongoing testing support including regular health checks, performance monitoring, security updates validation, and testing for new features or integrations. We can establish maintenance contracts based on your needs.",
    },
    {
      question: "What's included in your e-commerce testing reports?",
      answer:
        "Our reports include detailed findings, severity classifications, step-by-step reproduction instructions, screenshots/videos, recommendations for fixes, and priority rankings. We also provide executive summaries and ROI impact assessments.",
    },
    {
      question: "Can you test third-party integrations and plugins?",
      answer:
        "Yes, we test all third-party integrations including inventory management systems, CRM tools, email marketing platforms, analytics tools, and any custom plugins or extensions your e-commerce site uses.",
    },
    {
      question: "How do you ensure testing doesn't disrupt live operations?",
      answer:
        "We use staging environments, test data, and carefully planned testing schedules to avoid disrupting live operations. For production testing, we coordinate with your team and use non-intrusive methods that don't affect real customers or transactions.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center text-white gap-2 bg-gradient-to-r from-brand-blue to-sky-600 bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaQuestionCircle className="w-4 h-4" />
            <span className="text-sm font-medium">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:leading-14">
            E-Commerce Testing
            <span className="block bg-gradient-to-r from-[theme(color.brand.blue)] via-sky-600 to-blue-800 bg-clip-text text-transparent">
              Questions Answered
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get answers to the most common questions about our e-commerce
            testing services, QA processes, and what to expect from our{" "}
            <Link href="/blog/post/cross-platform-testing-ensuring-seamless-gaming-experiences-across-devices">
              cross-platform
            </Link>{" "}
            testing and security validation team.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-10">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <FaChevronUp className="w-5 h-5 text-brand-blue" />
                  ) : (
                    <FaChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openFAQ === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcommerceFAQSection;
