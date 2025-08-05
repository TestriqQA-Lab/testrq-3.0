"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ManualTestingFAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is manual testing and why is it important?",
      answer:
        "Manual testing is a software testing approach where human testers manually execute test cases without relying on automation tools. It's essential for identifying usability issues, user experience problems, and edge cases that automated testing often overlooks. Manual testing brings a human perspective, ensuring applications are intuitive, accessible, and aligned with real-world user expectations.",
    },
    {
      question: "When should I choose manual testing over automated testing?",
      answer:
        "Manual testing is ideal for exploratory testing, usability testing, ad-hoc testing, and scenarios requiring human judgment. Choose manual testing when you need to test user interfaces, evaluate user experience, perform accessibility testing, or when test cases are executed infrequently. It's also preferred for complex scenarios that require human intuition, creative thinking, or when the application is in early development stages with frequent changes.",
    },
    {
      question: "What types of manual testing services does Testriq offer?",
      answer:
        "Testriq offers comprehensive manual testing services including functional testing, usability testing, exploratory testing, user acceptance testing (UAT), accessibility testing, cross-browser testing, mobile testing, API testing, database testing, and compatibility testing. We also provide specialized services like localization testing, security testing, and compliance testing tailored to your industry requirements.",
    },
    {
      question: "How long does a typical manual testing project take?",
      answer:
        "The duration of manual testing projects varies based on application complexity, scope, and requirements. Simple applications may require 1-2 weeks, while complex enterprise applications can take 4-8 weeks or more. We provide detailed project timelines during our initial assessment, considering factors like the number of features, platforms to test, test case complexity, and your specific quality requirements.",
    },
    {
      question: "What is the cost of manual testing services?",
      answer:
        "Manual testing costs depend on project scope, complexity, duration, and resource requirements. We offer flexible pricing models including fixed-price projects, time and material contracts, and dedicated team arrangements. Our pricing is competitive and transparent, with detailed cost breakdowns provided during project planning. We also offer free initial assessments to help you understand the investment required.",
    },
    {
      question: "How do you ensure the quality of manual testing?",
      answer:
        "We ensure quality through certified testing professionals, standardized testing processes, comprehensive test documentation, regular quality reviews, and continuous training programs. Our testers follow industry best practices, use proven testing methodologies, and maintain detailed test logs. We also implement peer reviews, quality checkpoints, and client feedback loops to maintain the highest testing standards.",
    },
    {
      question:
        "Can you integrate manual testing with our existing development process?",
      answer:
        "Yes, we seamlessly integrate with various development methodologies including Agile, Scrum, DevOps, and Waterfall. Our team can work with your existing tools, processes, and timelines. We adapt our testing approach to fit your development cycles, participate in sprint planning, provide regular status updates, and ensure testing activities align with your release schedules and quality gates.",
    },
    {
      question: "What deliverables do you provide after manual testing?",
      answer:
        "Our comprehensive deliverables include detailed test execution reports, defect reports with severity classifications, test case documentation, test coverage analysis, recommendations for improvements, and executive summary reports. We also provide screenshots, videos of issues found, retest reports, and final sign-off documentation. All deliverables are customized to meet your specific reporting requirements.",
    },
    {
      question:
        "How do you handle confidential and sensitive data during testing?",
      answer:
        "We maintain strict data security protocols including signed NDAs, secure testing environments, data encryption, access controls, and compliance with industry standards like GDPR, HIPAA, and SOC 2. Our team members undergo security training, and we use anonymized test data whenever possible. We also provide detailed security reports and maintain audit trails for all testing activities.",
    },
    {
      question: "Do you provide manual testing for mobile applications?",
      answer:
        "Yes, we specialize in comprehensive mobile application testing across iOS and Android platforms. Our services include functional testing, usability testing, compatibility testing across different devices and OS versions, performance testing, security testing, and app store compliance testing. We test on real devices and emulators to ensure optimal performance across various mobile environments.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <span className="text-sm">● Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-brand-blue">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get answers to common questions about our manual testing services,
            processes, and how we can help ensure your software delivers
            exceptional quality and user experiences.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <FaChevronUp className="text-brand-blue text-xl" />
                  ) : (
                    <FaChevronDown className="text-gray-400 text-xl" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFAQ === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our manual testing experts are here to help. Get personalized
              answers to your specific questions and learn how our services can
              benefit your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <button className="border-2 cursor-pointer border-brand-blue text-brand-blue px-8 py-3 rounded-xl font-semibold hover:bg-brand-blue hover:text-white transition-all duration-300">
                  Schedule Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManualTestingFAQs;
