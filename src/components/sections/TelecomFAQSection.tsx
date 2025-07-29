"use client";

import React, { useState } from "react";
import { 
  FaQuestionCircle, 
  FaChevronDown, 
  FaChevronUp,
  FaWifi,
  FaSignal,
  FaClock,
  FaUsers
} from "react-icons/fa";

const TelecomFAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      category: "5G & Network Testing",
      icon: FaWifi,
      questions: [
        {
          question: "What types of 5G network testing do you perform?",
          answer: "We conduct comprehensive 5G testing including protocol stack validation, network slicing testing, edge computing integration, massive MIMO testing, beamforming validation, and ultra-low latency verification. Our testing covers both standalone (SA) and non-standalone (NSA) 5G deployments, ensuring your network meets all performance requirements and industry standards."
        },
        {
          question: "How do you test network slicing in 5G networks?",
          answer: "Our network slicing testing involves creating and validating multiple virtual networks on a single physical infrastructure. We test slice isolation, resource allocation, quality of service (QoS) parameters, and end-to-end connectivity for different use cases like enhanced mobile broadband (eMBB), ultra-reliable low-latency communications (URLLC), and massive machine-type communications (mMTC)."
        },
        {
          question: "Can you test our network without disrupting live services?",
          answer: "Yes, we use non-intrusive testing methodologies that allow us to validate network performance without affecting live traffic. Our testing approaches include parallel testing environments, off-peak testing windows, and specialized tools that can monitor and analyze network behavior without generating disruptive traffic patterns."
        }
      ]
    },
    {
      category: "IoT & Connectivity",
      icon: FaSignal,
      questions: [
        {
          question: "How do you test IoT device connectivity across different networks?",
          answer: "We test IoT connectivity using specialized frameworks that simulate various network conditions, protocols, and device behaviors. Our testing covers cellular IoT (NB-IoT, LTE-M), Wi-Fi, Bluetooth, LoRaWAN, and other connectivity protocols. We validate device registration, data transmission, power consumption, and network handovers across different scenarios."
        },
        {
          question: "What protocols and standards do you support for IoT testing?",
          answer: "We support all major IoT protocols including MQTT, CoAP, HTTP/HTTPS, WebSocket, AMQP, and proprietary protocols. Our testing covers cellular standards (2G/3G/4G/5G), LPWAN technologies (LoRaWAN, Sigfox, NB-IoT), short-range protocols (Wi-Fi, Bluetooth, Zigbee), and emerging standards for industrial IoT and smart city applications."
        },
        {
          question: "How do you ensure IoT device security during testing?",
          answer: "IoT security testing includes device authentication validation, encryption verification, firmware security assessment, and communication protocol security testing. We test for common vulnerabilities like weak authentication, unencrypted communications, insecure firmware updates, and inadequate access controls, ensuring your IoT deployment meets security best practices."
        }
      ]
    },
    {
      category: "Performance & Quality",
      icon: FaClock,
      questions: [
        {
          question: "How do you measure and improve voice quality in VoIP/VoLTE systems?",
          answer: "We use advanced voice quality testing tools that measure Mean Opinion Score (MOS), Perceptual Evaluation of Speech Quality (PESQ), and other standardized metrics. Our testing includes codec performance analysis, jitter and packet loss measurement, echo cancellation validation, and end-to-end call quality assessment under various network conditions."
        },
        {
          question: "What performance metrics do you track for network optimization?",
          answer: "We track comprehensive performance metrics including throughput, latency, jitter, packet loss, call setup time, handover success rates, network availability, and user experience metrics. Our monitoring covers both technical KPIs and quality of experience (QoE) metrics that directly impact customer satisfaction and network performance."
        },
        {
          question: "How long does a typical network performance assessment take?",
          answer: "The duration depends on network complexity and scope. A basic performance assessment typically takes 2-4 weeks, while comprehensive network optimization projects can take 8-12 weeks. We provide detailed project timelines during planning and offer expedited assessments for urgent performance issues or network launches."
        }
      ]
    },
    {
      category: "Implementation & Support",
      icon: FaUsers,
      questions: [
        {
          question: "Do you provide ongoing support after network testing is complete?",
          answer: "Yes, we offer various ongoing support models including continuous monitoring services, regular performance assessments, network optimization consulting, and 24/7 support for critical issues. Our support packages are customizable based on your specific needs and can include dedicated engineering teams for large-scale operations."
        },
        {
          question: "Can you integrate with our existing network management systems?",
          answer: "Absolutely. We have experience integrating with major network management platforms including Ericsson OSS, Nokia NetAct, Huawei U2000, and custom management systems. Our testing tools and monitoring solutions can be integrated into your existing workflows, providing seamless data exchange and unified reporting capabilities."
        },
        {
          question: "What training do you provide for our technical teams?",
          answer: "We offer comprehensive training programs covering network testing methodologies, tool usage, performance optimization techniques, and troubleshooting procedures. Training can be delivered on-site, remotely, or through our training centers, and includes hands-on workshops, certification programs, and ongoing technical support to ensure your team can effectively manage and optimize your network."
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex: number, questionIndex: number) => {
    const faqIndex = categoryIndex * 1000 + questionIndex;
    setOpenFAQ(openFAQ === faqIndex ? null : faqIndex);
  };

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-white bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaQuestionCircle className="w-4 h-4" />
            <span className="text-sm">Frequently Asked Questions</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Common Questions About
            <span className="block text-[theme(color.brand.blue)]">Telecom Testing Services</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get answers to the most frequently asked questions about our telecommunications testing services, including network performance testing, telecom protocol validation, 5G implementation support, VoIP system testing, and end-to-end network optimization processes.

          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-xl flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
              </div>

              {/* Questions */}
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const faqIndex = categoryIndex * 1000 + questionIndex;
                  const isOpen = openFAQ === faqIndex;
                  
                  return (
                    <div
                      key={questionIndex}
                      className="border border-gray-200 rounded-2xl overflow-hidden hover:border-[theme(color.brand.blue)] transition-colors duration-300"
                    >
                      <button
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                        onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                      >
                        <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                        {isOpen ? (
                          <FaChevronUp className="w-5 h-5 text-[theme(color.brand.blue)] flex-shrink-0" />
                        ) : (
                          <FaChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-4 border-t border-gray-100 bg-gray-50">
                          <p className="text-gray-600 leading-relaxed pt-4">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Support */}
        <div className="mt-16 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our telecommunications testing experts are here to help. Get personalized answers to your specific 
            questions and learn how our services can benefit your network operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl hover:scale-98 transition-all duration-300">
              Schedule Expert Consultation
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:border-[theme(color.brand.blue)] hover:text-[theme(color.brand.blue)] transition-all duration-300">
              Contact Support Team
            </button>
          </div>
        </div>

        {/* Knowledge Base CTA */}
        <div className="mt-16 bg-gradient-to-br from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Explore Our Knowledge Base</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Access our comprehensive library of telecommunications testing resources, best practices, 
            network optimization guides, and industry insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 text-[theme(color.brand.blue)] justify-center">
            <button className="bg-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 hover:scale-98 transition-all duration-200 ease-in-out">
              Browse Knowledge Base
            </button>
            <button className="bg-white bg-opacity-20 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-opacity-30 hover:scale-98 transition-all duration-200 ease-in-out border border-white border-opacity-30">
              Download Testing Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelecomFAQSection;

