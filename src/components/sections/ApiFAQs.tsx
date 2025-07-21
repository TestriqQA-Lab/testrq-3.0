"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ApiFAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of APIs can you test?",
      answer: "We test all types of APIs including REST, SOAP, GraphQL, gRPC, and WebSocket APIs. Our team has experience with various protocols, authentication methods, and data formats to ensure comprehensive testing coverage."
    },
    {
      question: "How long does API testing typically take?",
      answer: "The duration depends on the complexity and scope of your APIs. Simple API testing can be completed in 1-2 weeks, while comprehensive testing for complex systems may take 4-6 weeks. We provide detailed timelines during the planning phase."
    },
    {
      question: "Do you provide automated API testing?",
      answer: "Yes, we specialize in automated API testing using industry-leading tools like Postman, REST Assured, and custom frameworks. Automation helps ensure consistent testing, faster feedback, and continuous validation in CI/CD pipelines."
    },
    {
      question: "What security testing do you perform on APIs?",
      answer: "Our security testing includes authentication and authorization testing, input validation, SQL injection testing, XSS prevention, rate limiting validation, and data encryption verification. We follow OWASP API Security guidelines."
    },
    {
      question: "Can you integrate API testing into our CI/CD pipeline?",
      answer: "Absolutely! We can integrate automated API tests into your existing CI/CD pipeline using tools like Jenkins, GitLab CI, GitHub Actions, or Azure DevOps. This ensures continuous validation of your APIs with every deployment."
    },
    {
      question: "What deliverables do you provide?",
      answer: "We provide comprehensive test reports, automated test scripts, performance benchmarks, security assessment reports, and detailed documentation. All deliverables include actionable recommendations for improvement."
    },
    {
      question: "Do you test third-party API integrations?",
      answer: "Yes, we test integrations with third-party APIs including payment gateways, social media APIs, cloud services, and other external systems. We ensure proper error handling, data mapping, and performance optimization."
    },
    {
      question: "What tools do you use for API testing?",
      answer: "We use a comprehensive toolkit including Postman, SoapUI, REST Assured, JMeter, Karate, Newman, and custom frameworks. Tool selection depends on your specific requirements and technology stack."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-700 text-lg">
            Get answers to common questions about our API testing services and processes.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-300 flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>
                {openFAQ === index ? (
                  <FaChevronUp className="w-5 h-5 text-[theme(color.brand.blue)]" />
                ) : (
                  <FaChevronDown className="w-5 h-5 text-[theme(color.brand.blue)]" />
                )}
              </button>
              {openFAQ === index && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4">
            Have more questions about our API testing services?
          </p>
          <button className="bg-[theme(color.brand.blue)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors duration-300">
            Contact Our Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default ApiFAQs;

