"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const IoTFAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of IoT devices can you test?",
      answer:
        "We test a wide range of IoT devices, including smart home devices (e.g., lights, thermostats, locks), industrial IoT systems (e.g., sensors, actuators), wearable devices, healthcare monitors, and automotive IoT solutions. Our testing covers hardware, firmware, and software across consumer, industrial, and enterprise applications.",
    },
    {
      question: "How do you test IoT device security?",
      answer:
        "We conduct comprehensive security testing using tools like Nmap, Metasploit, and OWASP ZAP to identify vulnerabilities. Our process includes device authentication testing, data encryption validation, penetration testing, and privacy protection assessments to ensure zero vulnerabilities and compliance with standards like GDPR and IoT Security Foundation guidelines.",
    },
    {
      question: "What IoT protocols do you support?",
      answer:
        "We support 15+ IoT protocols, including WiFi, Bluetooth LE, Zigbee, Z-Wave, MQTT, CoAP, LoRaWAN, and cellular (4G/5G). Our testing ensures protocol compliance, interoperability, and reliable data transmission across diverse network environments using tools like Wireshark and MQTT.fx.",
    },
    {
      question: "How long does IoT device testing take?",
      answer:
        "IoT device testing typically takes 2-4 weeks, depending on device complexity and testing scope. Our 4-step process (Analysis: 2-3 days, Security: 4-6 days, Performance: 3-5 days, Delivery: 2-3 days) ensures efficient execution, with rapid 36-hour turnaround for urgent validations.",
    },
    {
      question: "Do you test IoT device interoperability?",
      answer:
        "Yes, we validate interoperability across devices, protocols, and platforms using real-world scenarios and simulation tools. Our testing ensures seamless communication between devices (e.g., hubs, sensors, apps) and compatibility with cloud platforms like AWS IoT and Azure IoT Hub.",
    },
    {
      question: "Can you test IoT devices at scale?",
      answer:
        "We test IoT devices at scale using automated frameworks like Robot Framework and load testing tools like JMeter and Gatling. Our testing simulates thousands of concurrent devices, validates scalability, and ensures performance under high-traffic conditions for enterprise-grade IoT ecosystems.",
    },
    {
      question: "What deliverables do you provide for IoT testing?",
      answer:
        "Deliverables include detailed test reports, bug logs with reproduction steps, security vulnerability assessments, performance benchmarks, and actionable recommendations. We provide visual evidence (screenshots/videos) and integrate reports with tools like Jira or Azure DevOps for seamless collaboration.",
    },
    {
      question: "Do you test edge computing and IoT analytics?",
      answer:
        "Yes, we test edge computing and IoT analytics using tools like Docker, Kubernetes, and Prometheus. Our testing validates edge device performance, data processing, and analytics accuracy, ensuring seamless integration with cloud platforms and real-time data insights.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-[theme(color.brand.blue)]">Frequently</span>{" "}
            Asked Questions
          </h2>
          <p className="text-gray-700 text-lg">
            Get answers to common questions about our IoT testing services and
            methodologies.
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
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
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
            Contact our IoT testing experts for personalized answers and tailored solutions.
          </button>
        </div>
      </div>
    </section>
  );
};

export default IoTFAQs;
