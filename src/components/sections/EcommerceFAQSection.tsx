"use client";

import React, { useState } from "react";
import {
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
  FaShoppingCart,
} from "react-icons/fa";

const EcommerceFAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What types of e-commerce platforms do you test?",
      answer: "We test all major e-commerce platforms including Shopify, WooCommerce, Magento, BigCommerce, and custom-built solutions. Our team has expertise in platform-specific features, integrations, and best practices for each system."
    },
    {
      question: "How long does e-commerce testing typically take?",
      answer: "The duration depends on your platform's complexity and scope. A basic e-commerce site typically takes 2-4 weeks for comprehensive testing, while enterprise-level platforms may require 6-8 weeks. We provide detailed timelines during our initial assessment."
    },
    {
      question: "Do you test payment gateway integrations?",
      answer: "Yes, we thoroughly test all payment gateway integrations including PayPal, Stripe, Square, and others. We validate transaction flows, security protocols, error handling, and PCI compliance to ensure safe and reliable payment processing."
    },
    {
      question: "Can you help with mobile commerce optimization?",
      answer: "Absolutely! Mobile commerce testing is a core part of our services. We test responsive design, mobile apps, touch interfaces, mobile payment methods, and ensure optimal performance across all mobile devices and operating systems."
    },
    {
      question: "What security testing do you perform for e-commerce sites?",
      answer: "We conduct comprehensive security testing including vulnerability assessments, penetration testing, data encryption validation, user authentication testing, and compliance verification for standards like PCI DSS, GDPR, and CCPA."
    },
    {
      question: "How do you test during peak shopping periods like Black Friday?",
      answer: "We perform load testing that simulates peak traffic conditions, including Black Friday and holiday shopping spikes. We test your site's ability to handle concurrent users, process high transaction volumes, and maintain performance under extreme load."
    },
    {
      question: "Do you provide ongoing testing support after launch?",
      answer: "Yes, we offer ongoing testing support including regular health checks, performance monitoring, security updates validation, and testing for new features or integrations. We can establish maintenance contracts based on your needs."
    },
    {
      question: "What's included in your e-commerce testing reports?",
      answer: "Our reports include detailed findings, severity classifications, step-by-step reproduction instructions, screenshots/videos, recommendations for fixes, and priority rankings. We also provide executive summaries and ROI impact assessments."
    },
    {
      question: "Can you test third-party integrations and plugins?",
      answer: "Yes, we test all third-party integrations including inventory management systems, CRM tools, email marketing platforms, analytics tools, and any custom plugins or extensions your e-commerce site uses."
    },
    {
      question: "How do you ensure testing doesn't disrupt live operations?",
      answer: "We use staging environments, test data, and carefully planned testing schedules to avoid disrupting live operations. For production testing, we coordinate with your team and use non-intrusive methods that don't affect real customers or transactions."
    }
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
            <span className="text-sm font-medium">Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            E-Commerce Testing
            <span className="block bg-gradient-to-r from-[theme(color.brand.blue)] via-sky-600 to-blue-800 bg-clip-text text-transparent">Questions Answered</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get answers to the most common questions about our e-commerce testing services,
            processes, and what you can expect when working with our team.
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
                        className={`transition-all duration-500 ease-in-out overflow-hidden ${openFAQ === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                          }`}
                      >
                        <div className="px-6 pb-4">
                          <div className="border-t border-gray-100 pt-4">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

        {/* Additional Help Section */}
        <div className="bg-gradient-to-br from-[theme(color.brand.blue)] via-sky-600 to-blue-500 rounded-3xl p-12 shadow-lg border border-gray-100 text-center">
          <FaShoppingCart className="w-16 h-16 text-white mx-auto mb-6 opacity-80" />
          <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            Our e-commerce testing experts are here to help. Get personalized answers to your specific
            questions and learn how we can optimize your online store.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-brand-blue text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-opacity-90 transition-colors shadow-lg">
              Schedule Free Consultation
            </button>
            <button className="border-2 bg-gray-100 border-gray-300 text-brand-blue px-8 py-4 rounded-2xl font-semibold text-lg hover:border-[theme(color.brand.blue)] transition-all duration-300">
              Contact Our Experts
            </button>
          </div>

          <div className="mt-8 text-white text-sm">
            <p>✓ Free consultation • ✓ Custom recommendations • ✓ No obligation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceFAQSection;

