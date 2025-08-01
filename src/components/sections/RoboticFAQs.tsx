"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const RoboticFAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What types of robotic systems can you test?",
      answer: "We test a wide range of robotic systems including industrial robots, service robots, autonomous vehicles, robotic arms, surgical robots, and collaborative robots (cobots). Our testing covers both hardware and software components across various industries."
    },
    {
      question: "How do you ensure safety during robotic testing?",
      answer: "Safety is our top priority. We follow strict safety protocols including ISO 10218 and ISO 13482 standards, implement comprehensive risk assessments, use controlled testing environments, and conduct thorough emergency stop and fail-safe mechanism testing."
    },
    {
      question: "What is the typical duration for robotic testing projects?",
      answer: "Project duration varies based on complexity, but typically ranges from 2-8 weeks. Simple functional testing may take 2-3 weeks, while comprehensive testing including safety validation, performance optimization, and integration testing can take 6-8 weeks."
    },
    {
      question: "Do you provide testing for autonomous robotic systems?",
      answer: "Yes, we specialize in autonomous system testing including navigation algorithms, path planning, obstacle avoidance, decision-making systems, and machine learning model validation. We test both simulated and real-world scenarios."
    },
    {
      question: "Can you test robotic systems that are already in production?",
      answer: "Absolutely. We can perform testing on existing production systems through controlled testing environments, regression testing, performance optimization, and safety audits without disrupting your operations."
    },
    {
      question: "What testing standards and certifications do you follow?",
      answer: "We follow international standards including ISO 10218 (Industrial robots), ISO 13482 (Personal care robots), IEC 61508 (Functional safety), and industry-specific standards. We can help achieve certifications required for your market."
    },
    {
      question: "Do you provide testing for robotic software and algorithms?",
      answer: "Yes, we provide comprehensive software testing including control algorithms, motion planning software, sensor fusion algorithms, machine learning models, and robotic operating system (ROS) applications."
    },
    {
      question: "How do you handle testing of custom or proprietary robotic systems?",
      answer: "We work closely with your engineering team to understand proprietary systems, sign comprehensive NDAs, develop custom testing protocols, and adapt our methodologies to your specific requirements while maintaining confidentiality."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <span className="text-sm">
              ● Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-brand-blue">Frequently</span> Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Get answers to common questions about our robotic testing services and methodologies.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
              >
                <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <FaChevronUp className="w-5 h-5 text-blue-500" />
                  ) : (
                    <FaChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RoboticFAQs;

