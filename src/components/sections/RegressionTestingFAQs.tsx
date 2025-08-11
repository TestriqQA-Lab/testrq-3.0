"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const RegressionTestingFAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Regression testing and why is it important?",
      answer:
        "Regression testing is a critical software testing approach that ensures your applications meet the highest quality standards. It's essential for identifying issues early, reducing costs, improving user satisfaction, and maintaining competitive advantage in today's fast-paced digital landscape.",
    },
    {
      question:
        "When should I implement Regression testing in my development process?",
      answer:
        "Regression testing should be integrated early in your development lifecycle and continued throughout. The optimal timing depends on your project requirements, but early implementation typically yields better results, lower costs, and faster time-to-market.",
    },
    {
      question: "What types of Regression testing services does Testriq offer?",
      answer:
        "Testriq offers comprehensive Regression testing services including functional testing, performance validation, security assessment, compatibility testing, and specialized testing tailored to your industry requirements. Our services are customized to meet your specific needs and objectives.",
    },
    {
      question: "How long does a typical Regression testing project take?",
      answer:
        "Project duration varies based on application complexity, scope, and requirements. Simple projects may take 2-3 weeks, while complex enterprise applications can require 6-10 weeks or more. We provide detailed timelines during our initial assessment phase.",
    },
    {
      question: "What is the cost of Regression testing services?",
      answer:
        "Costs depend on project scope, complexity, duration, and resource requirements. We offer flexible pricing models including fixed-price projects, time and material contracts, and dedicated team arrangements. Contact us for a customized quote based on your specific needs.",
    },
    {
      question: "How do you ensure the quality of Regression testing?",
      answer:
        "We ensure quality through certified professionals, standardized processes, comprehensive documentation, regular reviews, and continuous improvement programs. Our team follows industry best practices and maintains detailed quality metrics throughout the testing process.",
    },
    {
      question:
        "Can you integrate Regression testing with our existing development process?",
      answer:
        "Yes, we seamlessly integrate with various development methodologies including Agile, Scrum, DevOps, and Waterfall. Our team adapts to your existing tools, processes, and timelines to ensure smooth collaboration and optimal results.",
    },
    {
      question: "What deliverables do you provide after Regression testing?",
      answer:
        "Our comprehensive deliverables include detailed test reports, issue documentation, recommendations for improvements, executive summaries, and all necessary documentation for your records. All deliverables are customized to meet your specific requirements.",
    },
    {
      question:
        "How do you handle confidential and sensitive data during testing?",
      answer:
        "We maintain strict security protocols including signed NDAs, secure environments, data encryption, access controls, and compliance with industry standards. Our team undergoes security training and we provide detailed security reports for all activities.",
    },
    {
      question:
        "Do you provide ongoing support after Regression testing completion?",
      answer:
        "Yes, we offer ongoing support including maintenance testing, regression testing, performance monitoring, and consultation services. Our support ensures your applications continue to meet quality standards as they evolve and grow.",
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
            Get answers to common questions about our Regression testing
            services, processes, and how we can help ensure your software
            delivers exceptional quality and performance.
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

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our Regression testing experts are here to help. Get personalized
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

export default RegressionTestingFAQs;
