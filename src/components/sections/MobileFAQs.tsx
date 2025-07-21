"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const MobileFAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What types of mobile applications do you test?",
      answer: "We test all types of mobile applications including native iOS and Android apps, cross-platform apps (React Native, Flutter, Xamarin), hybrid apps (Ionic, Cordova), mobile games, enterprise apps, e-commerce apps, and progressive web apps (PWAs). Our expertise covers consumer apps, business applications, and specialized industry solutions."
    },
    {
      question: "Which devices and operating systems do you support?",
      answer: "We provide comprehensive testing across 50+ real devices including iPhones (6s to 15 Pro Max), iPads, Android phones and tablets from Samsung, Google, OnePlus, Xiaomi, and other major manufacturers. We support iOS 12.0+ and Android 7.0+ versions, including the latest releases and beta versions."
    },
    {
      question: "How long does mobile application testing typically take?",
      answer: "Mobile testing duration varies based on app complexity and scope. Simple apps typically take 1-3 days, while complex enterprise or gaming apps may require 1-2 weeks. We offer expedited testing with 12-24 hour turnaround for urgent requirements and provide detailed timelines during project planning."
    },
    {
      question: "Do you provide automated testing for mobile applications?",
      answer: "Yes, we implement comprehensive automated testing using industry-leading tools like Appium, XCUITest, Espresso, and Detox. We create reusable test suites for regression testing, CI/CD integration, and continuous testing pipelines to ensure long-term testing efficiency and faster release cycles."
    },
    {
      question: "What security testing do you perform on mobile applications?",
      answer: "Our mobile security testing includes penetration testing, data encryption validation, authentication testing, API security assessment, and compliance verification (GDPR, HIPAA, PCI DSS). We also test for mobile-specific security issues like insecure data storage, weak cryptography, and improper session handling."
    },
    {
      question: "Do you test mobile apps for app store compliance?",
      answer: "Absolutely. We specialize in app store compliance testing for both iOS App Store and Google Play Store. Our testing covers app store guidelines, content policies, technical requirements, metadata validation, and submission readiness to ensure first-time approval and avoid costly rejections."
    },
    {
      question: "Can you test mobile apps with backend integrations and APIs?",
      answer: "Yes, we excel at testing mobile apps with complex backend integrations, REST/GraphQL APIs, real-time features, push notifications, payment gateways, social media integrations, and cloud services. We test data synchronization, offline functionality, and network resilience across various connection conditions."
    },
    {
      question: "Do you provide performance testing for mobile applications?",
      answer: "Yes, we conduct comprehensive mobile performance testing including load testing, battery usage analysis, memory optimization, CPU performance, network performance testing, and app startup time optimization. We test under various device conditions and provide detailed performance reports with optimization recommendations."
    },
    {
      question: "What deliverables do you provide after mobile testing?",
      answer: "We provide comprehensive mobile testing reports including executive summaries, detailed bug reports with device-specific information, test coverage analysis, performance benchmarks, security assessment reports, app store readiness checklist, and recommendations for improvements. All documentation includes screenshots and video recordings from real devices."
    },
    {
      question: "Do you offer post-launch support and monitoring?",
      answer: "Yes, we provide ongoing support including post-launch monitoring, crash analytics, performance monitoring, user feedback analysis, regression testing for app updates, and maintenance testing services. We also offer retainer-based support for continuous testing needs and rapid issue resolution."
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
            Mobile Testing{" "}
            <span className="text-[theme(color.brand.blue)]">FAQs</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Get answers to common questions about our mobile application testing services, 
            processes, and app store compliance requirements.
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
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-all duration-200 ease-in-out"
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
              Still Have Questions About Mobile Testing?
            </h3>
            <p className="text-gray-600 mb-6">
              Our mobile testing experts are here to help. Get personalized answers 
              to your specific mobile app testing requirements and challenges.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 bg-[theme(color.brand.blue)] text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">
                Schedule Mobile Consultation
              </button>
              <button className="px-8 py-3 border border-[theme(color.brand.blue)] text-[theme(color.brand.blue)] font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                Contact Mobile Experts
              </button>
            </div>
          </div>
        </div>

        {/* Quick Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-[theme(color.brand.blue)] font-bold">📱</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Mobile Testing Hotline</h4>
            <p className="text-gray-600 text-sm">Direct line to mobile experts</p>
            <p className="text-[theme(color.brand.blue)] text-sm font-semibold mt-2">
              +1 (555) 123-MOBILE
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-[theme(color.brand.blue)] font-bold">📧</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Mobile Testing Email</h4>
            <p className="text-gray-600 text-sm">Detailed mobile testing inquiries</p>
            <p className="text-[theme(color.brand.blue)] text-sm font-semibold mt-2">
              mobile@testriq.com
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-[theme(color.brand.blue)] font-bold">🚀</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Quick Start</h4>
            <p className="text-gray-600 text-sm">Get testing started in 24 hours</p>
            <p className="text-[theme(color.brand.blue)] text-sm font-semibold mt-2">
              Express Testing Available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileFAQs;

