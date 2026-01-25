"use client";

import React from "react";

import {
  FaTools,
  FaCode,
  FaRocket,
  FaShieldAlt,
  FaNetworkWired,
  FaRunning,
  FaCogs,
  FaSatelliteDish,
  FaProjectDiagram,
  FaBolt,
  FaCrosshairs,
  FaCodeBranch,
  FaWifi,
  FaHome,
  FaShieldAlt as FaShield,
  FaExchangeAlt,
  FaBluetooth,
  FaMicrochip, // for Nessus
} from "react-icons/fa";

import {
  SiApachejmeter,
  SiAppium,
  SiMetasploit,
  SiWireshark,
  SiOwasp,
  SiBlazemeter,
  SiBurpsuite,
  SiMozilla,
  SiRobotframework,
  SiSelenium,
} from "react-icons/si";

import Link from "next/link";
import { MdCloud, MdDevices } from "react-icons/md";

const IoTToolsFramework: React.FC = () => {
  const toolCategories = [
    {
      category: (<Link href='blog/post/data-synchronization-testing-ensuring-real-time-accuracy-across-iot-systems'>IoT Testing Platforms</Link>),
      icon: <FaTools className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        {
          name: "Wireshark",
          description: "Advanced protocol sniffing & packet analysis",
          icon: <SiWireshark className="w-5 h-5 text-[theme(color.brand.blue)]" />,
        },
        {
          name: "MQTT Spy",
          description: "In-depth MQTT message validation",
          icon: <FaSatelliteDish className="w-5 h-5 text-[theme(color.brand.blue)]" />,
        },
        {
          name: "Zigbee Sniffer",
          description: "Real-time Zigbee signal analysis",
          icon: <FaProjectDiagram className="w-5 h-5 text-[theme(color.brand.blue)]" />,
        },
        {
          name: "LoRaWAN Gateways",
          description: "LPWAN range & connectivity testing",
          icon: <FaWifi className="w-5 h-5 text-[theme(color.brand.blue)]" />,
        },
      ],
    },
    {
      category: "Network & Protocol Testing",
      icon: <MdDevices className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        {
          name: "Wireshark",
          description: "Advanced protocol sniffing & packet analysis",
          icon: <SiWireshark className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "MQTT Spy",
          description: "In-depth MQTT message validation",
          icon: <FaSatelliteDish className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "Zigbee Sniffer",
          description: "Real-time Zigbee signal analysis",
          icon: <FaProjectDiagram className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "LoRaWAN Gateways",
          description: "LPWAN range & connectivity testing",
          icon: <FaWifi className="w-5 h-5 text-brand-blue" />,
        },
      ],
    },
    {
      category: "Security & Pen Testing",
      icon: <FaShieldAlt className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        {
          name: "OWASP ZAP",
          description: <span>Security scanning for IoT <Link href="/api-testing" className="text-[theme(color.brand.blue)] hover:underline hover:decoration-[theme(color.brand.blue)]">cloud APIs</Link></span>,
          icon: <SiOwasp className="w-5 h-5 text-[theme(color.brand.blue)]" />,
        },
        {
          name: "Nmap",
          description: "Network discovery & attack surface mapping",
          icon: <FaRunning className="w-5 h-5 text-[theme(color.brand.blue)]" />,
        },
        {
          name: "Metasploit",
          description: "Industrial control system penetration",
          icon: <SiMetasploit className="w-5 h-5 text-[theme(color.brand.blue)]" />,
        },
        {
          name: "Nessus",
          description: <span><Link href="/security-testing" className="text-[theme(color.brand.blue)] hover:underline hover:decoration-[theme(color.brand.blue)]">Firmware Security</Link> & vulnerability assessment</span>,
          icon: <FaShield className="w-5 h-5 text-[theme(color.brand.blue)]" />,
        },
        {
          name: "k6",
          description: <span>Developer-centric <Link href="/performance-testing-services" className="text-[theme(color.brand.blue)] hover:underline hover:decoration-[theme(color.brand.blue)]">load testing</Link> for MQTT/HTTP</span>,
          icon: <FaProjectDiagram className="w-5 h-5 text-[theme(color.brand.blue)]" />,
        },
        {
          name: "Artillery",
          description: "Performance stress for zettabyte scale data",
          icon: <FaCrosshairs className="w-5 h-5 text-[theme(color.brand.blue)]" />,
        },
        {
          name: "JMeter",
          description: "Legacy & MQTT extension load testing",
          icon: <SiApachejmeter className="w-5 h-5 text-[theme(color.brand.blue)]" />,
        },
      ],
    },
    {
      category: "Performance & Load",
      icon: <FaRocket className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        {
          name: "k6",
          description: "Developer-centric load testing for MQTT/HTTP",
          icon: <FaProjectDiagram className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "Artillery",
          description: "Performance stress for zettabyte scale data",
          icon: <FaCrosshairs className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "JMeter",
          description: "Legacy & MQTT extension load testing",
          icon: <SiApachejmeter className="w-5 h-5 text-brand-blue" />,
        },
      ],
    },
    {
      category: "Automation & DevOps",
      icon: <FaCode className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        {
          name: "Appium",
          description: <span><Link href="/mobile-application-testing" className="text-[theme(color.brand.blue)] hover:underline hover:decoration-[theme(color.brand.blue)]">Mobile-IoT</Link> interaction automation</span>,
          icon: <SiAppium className="w-5 h-5 text-[theme(color.brand.blue)]" />,
        },
        {
          name: "GitHub Actions",
          description: "CI/CD for FOTA updates testing",
          icon: <FaCodeBranch className="w-5 h-5 text-[theme(color.brand.blue)]" />,
        },
        {
          name: "Jenkins",
          description: "Automated firmware regression pipelines",
          icon: <FaCogs className="w-5 h-5 text-[theme(color.brand.blue)]" />,
        },
      ],
    },
    {
      category: "Hardware & RF Lab",
      icon: <FaMicrochip className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        {
          name: "Oscilloscopes",
          description: "Signal integrity & power ripple analysis",
          icon: <FaBolt className="w-5 h-5 text-[theme(color.brand.blue)]" />,
        },
        {
          name: "RF Shield Boxes",
          description: "Isolated interference simulation",
          icon: <FaSatelliteDish className="w-5 h-5 text-[theme(color.brand.blue)]" />,
        },
        {
          name: "Programmable Power",
          description: "Battery life & consumption profiling",
          icon: <FaHome className="w-5 h-5 text-[theme(color.brand.blue)]" />,
        },
      ],
    },
  ];

  return (
    <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaTools />
            <span className="text-sm">Tools & Frameworks</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            IoT Testing{" "}
            <span className="text-[theme(color.brand.blue)]">
              Tools & Frameworks
            </span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            We leverage <Link href='/technology-stack'>cutting-edge tools</Link> and frameworks specifically designed
            for IoT testing to ensure <Link href='blog/post/how-does-validation-optimization-improve-web-application-quality'>comprehensive validation</Link> of your connected
            devices and systems across all layers of the IoT stack.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {toolCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-50 p-6 rounded-xl border border-gray-200"
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-2xl font-semibold text-gray-900 ml-3">
                  {category.category}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {tool.icon && <span>{tool.icon}</span>}
                      <h4 className="font-semibold text-gray-900">
                        {tool.name}
                      </h4>
                    </div>
                    <p className="text-gray-600 text-sm">{tool.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[theme(color.brand.blue)]/10 p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Custom IoT Testing Solutions
          </h3>
          <p className="text-gray-700 text-lg mb-6 max-w-3xl mx-auto">
            We tailor our IoT QA frameworks to your protocols, devices, and {" "}
            <Link href='blog/post/strategies-for-implementing-test-driven-infrastructure'>infrastructure</Link>, offering protocol-specific validation, end-to-end
            testing, and scalable coverage for enterprise-grade IoT ecosystems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IoTToolsFramework;
