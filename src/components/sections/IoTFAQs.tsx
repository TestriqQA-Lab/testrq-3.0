"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const IoTFAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of IoT devices can you test?",
      answer: "We test all types of IoT devices including smart home devices, industrial sensors, wearables, connected vehicles, medical devices, smart city infrastructure, and edge computing devices across various protocols like WiFi, Bluetooth, Zigbee, LoRaWAN, and cellular."
    },
    {
      question: "How do you test IoT device security?",
      answer: "Our IoT security testing includes device authentication, data encryption validation, network security assessment, firmware analysis, vulnerability scanning, penetration testing, and compliance with IoT security frameworks like OWASP IoT Top 10."
    },
    {
      question: "What IoT protocols do you support?",
      answer: "We support testing for all major IoT protocols including MQTT, CoAP, HTTP/HTTPS, WebSocket, Bluetooth LE, WiFi, Zigbee, Z-Wave, LoRaWAN, NB-IoT, LTE-M, and proprietary protocols used in industrial IoT applications."
    },
    {
      question: "How long does IoT device testing take?",
      answer: "The duration depends on device complexity and testing scope. Simple device testing can take 2-3 weeks, while comprehensive testing for complex IoT ecosystems may take 6-10 weeks. We provide detailed timelines during the planning phase."
    },
    {
      question: "Do you test IoT device interoperability?",
      answer: "Yes, we perform comprehensive interoperability testing to ensure your IoT devices work seamlessly with different platforms, operating systems, cloud services, and other connected devices in the ecosystem."
    },
    {
      question: "Can you test IoT devices at scale?",
      answer: "Absolutely! We can simulate large-scale IoT deployments to test device performance, network capacity, data handling, and system scalability under real-world conditions with thousands of connected devices."
    },
    {
      question: "What deliverables do you provide for IoT testing?",
      answer: "We provide comprehensive IoT testing reports, security assessment reports, performance benchmarks, interoperability test results, compliance validation reports, automated test scripts, and detailed recommendations for optimization."
    },
    {
      question: "Do you test edge computing and IoT analytics?",
      answer: "Yes, we test edge computing capabilities, real-time data processing, IoT analytics platforms, machine learning models running on edge devices, and the integration between edge and cloud systems."
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
            Get answers to common questions about our IoT testing services and methodologies.
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
            Have more questions about our IoT testing services?
          </p>
          <button className="bg-[theme(color.brand.blue)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors duration-300">
            Contact Our IoT Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default IoTFAQs;

