"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaWifi } from "react-icons/fa";

const IoTFAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of IoT devices can you test?",
      answer:
        (
          <>
            We test a wide range of IoT devices, including <Link href='blog/post/user-experience-testing-for-smart-devices-usability-accessibility'>smart home devices</Link> (e.g., lights, thermostats, locks), industrial IoT systems (e.g., sensors, actuators), wearable devices, <Link href='healthcare-testing-services'>healthcare monitors</Link>, and automotive IoT solutions. Our testing covers hardware, firmware, and software across consumer, industrial, and enterprise applications.
          </>
        ),
    },
    {
      question: "How do you test IoT device security?",
      answer:
        (
          <>
            We conduct comprehensive <Link href='security-testing'>security testing</Link> using <Link href='tools'>tools</Link> like Nmap, Metasploit, and <Link href='blog/post/top-10-security-vulnerabilities-based-on-owasp'>OWASP ZAP</Link> to identify vulnerabilities. Our process includes device authentication testing, data encryption validation, penetration testing, and privacy protection assessments to ensure zero vulnerabilities and compliance with standards like GDPR and IoT Security Foundation guidelines.
          </>
        ),
    },
    {
      question: "What IoT protocols do you support?",
      answer: (
        <>
          We support 15+ IoT protocols, <Link href='blog/post/connectivity-protocol-testing-for-iot-wifi-ble-zigbee-mqtt-more'>including WiFi, Bluetooth LE, Zigbee, Z-Wave, MQTT, CoAP, LoRaWAN, and cellular</Link> (4G/5G). Our testing ensures protocol compliance, <Link href='blog/post/interoperability-testing-for-iot-ensuring-seamless-protocol-device-interaction'>interoperability</Link>, and reliable data transmission across diverse network environments using tools like Wireshark and MQTT.fx.
        </>
      ),
    },
    {
      question: "How long does IoT device testing take?",
      answer:
        "IoT device testing typically takes 2-4 weeks, depending on device complexity and testing scope. Our 4-step process (Analysis: 2-3 days, Security: 4-6 days, Performance: 3-5 days, Delivery: 2-3 days) ensures efficient execution, with rapid 36-hour turnaround for urgent validations.",
    },
    {
      question: "Do you test IoT device interoperability?",
      answer:
        (
          <>
            Yes, we validate <Link href='blog/post/interoperability-testing-for-iot-ensuring-seamless-protocol-device-interaction'>interoperability</Link> across devices, protocols, and platforms using real-world scenarios and <Link href='blog/post/what-are-the-highly-used-testing-tools-in-2024'>simulation tools</Link>. Our testing ensures seamless communication between devices (e.g., hubs, sensors, apps) and compatibility with cloud platforms like AWS IoT and Azure IoT Hub.
          </>
        ),
    },
    {
      question: "Can you test IoT devices at scale?",
      answer: (
        <>
          We test IoT devices at scale using automated frameworks like Robot Framework and <Link href='blog/post/what-is-load-testing-in-software-engineering'>load testing</Link> tools like <Link href='blog/post/how-to-use-jmeter-for-performance-testing-step-by-step-guide'>JMeter</Link> and Gatling. Our testing simulates thousands of concurrent devices, validates scalability, and ensures performance under high-traffic conditions for enterprise-grade IoT ecosystems.
        </>
      ),
    },
    {
      question: "What deliverables do you provide for IoT testing?",
      answer: (
        <>
          Deliverables include detailed test reports, <Link href='blog/post/bug-logging-reporting-in-desktop-testing-best-practices-tools'>bug logs</Link> with reproduction steps, security vulnerability assessments, performance benchmarks, and actionable recommendations. We provide visual evidence (screenshots/videos) and integrate reports with tools like Jira or Azure DevOps for seamless collaboration.
        </>
      ),
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
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <span className="text-sm">● Frequently Asked Questions</span>
          </div>
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

        {/* Bottom IoT CTA */}
        <div className="text-center py-8">
          <div className="bg-gradient-to-br from-[theme(color.brand.blue)] to-blue-700 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
                <FaWifi className="w-6 h-6 mr-2" />
                Ready to Connect Your IoT Success?
              </h3>
              <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
                Let our IoT testing experts help you achieve the same level of
                connectivity and reliability. Get started with a comprehensive
                IoT device assessment today.
              </p>
              <Link href="/contact-us">
                <button className="bg-white cursor-pointer text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg transform hover:scale-105">
                  Start Your IoT Success Story
                </button>
              </Link>
            </div>

            {/* IoT Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-ping"></div>
              <div
                className="absolute top-8 right-8 w-3 h-3 bg-white rounded-full animate-ping"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute bottom-8 left-12 w-2 h-2 bg-white rounded-full animate-ping"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-4 right-4 w-1 h-1 bg-white rounded-full animate-ping"
                style={{ animationDelay: "1.5s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IoTFAQs;
