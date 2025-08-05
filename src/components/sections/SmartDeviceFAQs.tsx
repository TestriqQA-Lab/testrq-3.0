"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const SmartDeviceFAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What types of smart devices can you test?",
      answer:
        "We test a comprehensive range of smart devices including smartphones, tablets, wearables (smartwatches, fitness trackers), smart home devices (thermostats, security cameras, smart speakers), IoT sensors, smart appliances, and connected audio devices. Our testing covers both consumer and enterprise smart devices.",
    },
    {
      question: "How do you test connectivity across different protocols?",
      answer:
        "We conduct comprehensive connectivity testing across WiFi (802.11 a/b/g/n/ac/ax), Bluetooth (Classic and BLE), NFC, cellular networks (3G/4G/5G), Zigbee, Z-Wave, and other IoT protocols. Our testing includes signal strength analysis, range testing, interference testing, and protocol compliance validation.",
    },
    {
      question: "What security testing do you perform on smart devices?",
      answer:
        "Our security testing includes data encryption validation, authentication protocol testing, vulnerability assessments, penetration testing, privacy protection validation, secure communication testing, and compliance with security standards like OWASP IoT Top 10 and industry-specific security requirements.",
    },
    {
      question: "How do you test battery life and power consumption?",
      answer:
        "We perform comprehensive battery testing including battery life measurement under various usage scenarios, power consumption analysis, charging performance testing, thermal testing, and energy efficiency optimization. We use specialized equipment to measure precise power consumption patterns.",
    },
    {
      question: "Can you test smart devices that are still in development?",
      answer:
        "Yes, we can test smart devices at any stage of development from prototypes to production-ready devices. We work with development teams to identify issues early, provide feedback for improvements, and ensure devices meet requirements before market launch.",
    },
    {
      question: "Do you provide testing for smart device apps and software?",
      answer:
        "Absolutely. We test companion mobile apps, device firmware, cloud connectivity, API integrations, user interfaces, and software updates. Our testing covers functionality, performance, security, and user experience across iOS and Android platforms.",
    },
    {
      question:
        "How do you ensure smart devices work in real-world conditions?",
      answer:
        "We conduct testing in various real-world scenarios including different network conditions, environmental factors (temperature, humidity), interference scenarios, and usage patterns. We also perform field testing and simulate real user behaviors to ensure devices perform reliably in actual use cases.",
    },
    {
      question: "What compliance and certification testing do you offer?",
      answer:
        "We provide testing for various compliance standards including FCC, CE, IC, Bluetooth SIG, WiFi Alliance, and industry-specific certifications. We help ensure your smart devices meet regulatory requirements for target markets and can assist with certification processes.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <span className="text-sm">● Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-brand-blue">Frequently</span> Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Get answers to common questions about our smart device testing
            services and methodologies.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
              >
                <h3 className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <FaChevronUp className="w-5 h-5 text-green-500" />
                  ) : (
                    <FaChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
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

export default SmartDeviceFAQs;
