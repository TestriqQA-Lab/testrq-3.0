"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const DesktopFAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What types of desktop applications do you test?",
      answer: "We test all types of desktop applications including enterprise software, productivity tools, games, utilities, and specialized industry applications. Our expertise covers Windows (.NET, WPF, WinForms), macOS (Cocoa, Swift), and Linux (Qt, GTK) applications across various frameworks and technologies."
    },
    {
      question: "Which platforms and operating systems do you support?",
      answer: "We provide comprehensive testing across Windows (7, 8, 10, 11, Server editions), macOS (10.14+), and major Linux distributions (Ubuntu, CentOS, RHEL, SUSE). We also test on various hardware configurations, screen resolutions, and system specifications to ensure broad compatibility."
    },
    {
      question: "How long does desktop application testing typically take?",
      answer: "Testing duration depends on application complexity and scope. Simple applications typically take 1-2 weeks, while complex enterprise applications may require 4-6 weeks. We provide detailed timelines during project planning and offer expedited testing for urgent requirements with 24-48 hour turnaround options."
    },
    {
      question: "Do you provide automated testing for desktop applications?",
      answer: "Yes, we implement comprehensive automated testing using industry-leading tools like TestComplete, Ranorex, and custom automation frameworks. We create reusable test suites for regression testing, performance monitoring, and continuous integration pipelines to ensure long-term testing efficiency."
    },
    {
      question: "What security testing do you perform on desktop applications?",
      answer: "Our security testing includes vulnerability assessments, penetration testing, data encryption validation, authentication testing, and compliance verification (GDPR, HIPAA, SOX). We also test for common desktop security issues like DLL hijacking, privilege escalation, and data leakage."
    },
    {
      question: "Can you test desktop applications that integrate with web services or databases?",
      answer: "Absolutely. We specialize in testing complex desktop applications with API integrations, database connections, cloud services, and third-party system integrations. Our testing covers data synchronization, offline functionality, network resilience, and integration point validation."
    },
    {
      question: "Do you provide performance testing for desktop applications?",
      answer: "Yes, we conduct comprehensive performance testing including load testing, stress testing, memory usage analysis, CPU optimization, and startup time optimization. We test under various system conditions and provide detailed performance reports with optimization recommendations."
    },
    {
      question: "What deliverables do you provide after testing?",
      answer: "We provide comprehensive test reports including executive summaries, detailed bug reports with reproduction steps, test coverage analysis, performance benchmarks, security assessment reports, and recommendations for improvements. All documentation is provided in professional formats suitable for stakeholder review."
    },
    {
      question: "Do you offer post-deployment support and maintenance testing?",
      answer: "Yes, we provide ongoing support including post-deployment monitoring, regression testing for updates, performance monitoring, and maintenance testing services. We also offer retainer-based support for continuous testing needs and rapid issue resolution."
    },
    {
      question: "How do you ensure the confidentiality of our application and data?",
      answer: "We maintain strict confidentiality through comprehensive NDAs, secure testing environments, encrypted data handling, and ISO 27001 compliant security practices. Our team follows strict data protection protocols, and we can work within your secure environments when required."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-[theme(color.brand.blue)] text-sm px-4 py-2 rounded-full mb-4">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Desktop Testing{" "}
            <span className="text-[theme(color.brand.blue)]">FAQs</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Get answers to common questions about our desktop application testing services, 
            processes, and deliverables.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <FaChevronUp className="w-5 h-5 text-[theme(color.brand.blue)]" />
                  ) : (
                    <FaChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-100 pt-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our desktop testing experts are here to help. Get personalized answers 
              to your specific testing requirements and challenges.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 bg-[theme(color.brand.blue)] text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">
                Schedule Consultation
              </button>
              <button className="px-8 py-3 border border-[theme(color.brand.blue)] text-[theme(color.brand.blue)] font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </div>

        {/* Quick Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-[theme(color.brand.blue)] font-bold">📧</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Email Support</h4>
            <p className="text-gray-600 text-sm">Get detailed answers via email</p>
            <p className="text-[theme(color.brand.blue)] text-sm font-semibold mt-2">
              support@testriq.com
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-[theme(color.brand.blue)] font-bold">📞</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Phone Support</h4>
            <p className="text-gray-600 text-sm">Speak with our experts directly</p>
            <p className="text-[theme(color.brand.blue)] text-sm font-semibold mt-2">
              +1 (555) 123-4567
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-[theme(color.brand.blue)] font-bold">💬</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Live Chat</h4>
            <p className="text-gray-600 text-sm">Instant answers to quick questions</p>
            <p className="text-[theme(color.brand.blue)] text-sm font-semibold mt-2">
              Available 24/7
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesktopFAQs;

