"use client";

import React from "react";

import {
  FaTools,
  FaCode,
  FaRocket,
  FaShieldAlt,
  FaAws,
  FaMicrosoft,
  FaBrain,
  FaNetworkWired,
  FaRunning,
  FaCogs,
  FaMicrochip,
  FaSatelliteDish,
  FaExchangeAlt,
  FaBluetooth,
  FaProjectDiagram,
  FaBolt,
  FaCrosshairs,
  FaCodeBranch,
  FaCheckCircle,
  FaShieldAlt as FaShield, // for Nessus
} from "react-icons/fa";

import {
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiPrometheus,
  SiGrafana,
  SiApachejmeter,
  SiSelenium,
  SiAppium,
  SiCucumber,
  SiPython,
  SiMetasploit,
  SiWireshark,
  SiBurpsuite,
  SiOwasp,
  SiOpenvpn,
  SiBlazemeter,
  SiRobotframework,
  SiMozilla,
} from "react-icons/si";

import { MdDevices, MdCloud } from "react-icons/md";
import Link from "next/link";

const IoTToolsFramework: React.FC = () => {
  const toolCategories = [
    {
      category: (<Link href='blog/post/data-synchronization-testing-ensuring-real-time-accuracy-across-iot-systems'>IoT Testing Platforms</Link>),
      icon: <FaTools className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        {
          name: "AWS IoT Device Tester",
          description: "Automated testing for IoT devices",
          icon: <FaAws className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "Azure IoT Hub",
          description: "Cloud-based IoT testing platform",
          icon: <FaMicrosoft className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "Google Cloud IoT Core",
          description: "Secure device connection and management",
          icon: <SiGooglecloud className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "ThingWorx",
          description: "Industrial IoT platform testing",
          icon: <FaCogs className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "Particle Console",
          description: "IoT device fleet management",
          icon: <FaMicrochip className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "IBM Watson IoT",
          description: "AI-powered IoT testing solutions",
          icon: <FaBrain className="w-5 h-5 text-brand-blue" />,
        },
      ],
    },
    {
      category: "Network & Protocol Testing",
      icon: <MdDevices className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        {
          name: "Wireshark",
          description: "Network protocol analyzer",
          icon: <SiWireshark className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "MQTT.fx",
          description: "MQTT client testing tool",
          icon: <FaSatelliteDish className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "CoAP Client",
          description: "CoAP protocol testing",
          icon: <FaExchangeAlt className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "Bluetooth LE Explorer",
          description: "BLE device testing",
          icon: <FaBluetooth className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "Zigbee Test Tool",
          description: "Zigbee protocol validation",
          icon: <FaProjectDiagram className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "WiFi Analyzer",
          description: "Wireless network testing",
          icon: <SiMozilla className="w-5 h-5 text-brand-blue" />,
        },
      ],
    },
    {
      category: (<Link href='blog/post/performance-load-testing-for-e-commerce-sites'>Performance & Load Testing</Link>),
      icon: <FaRocket className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        {
          name: "JMeter",
          description: "Load testing for IoT endpoints",
          icon: <SiApachejmeter className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "Gatling",
          description: "High-performance load testing",
          icon: <FaBolt className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "Artillery",
          description: "Modern load testing toolkit",
          icon: <FaCrosshairs className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "K6",
          description: "Developer-centric load testing",
          icon: <FaCodeBranch className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "LoadRunner",
          description: "Enterprise load testing",
          icon: <FaNetworkWired className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "BlazeMeter",
          description: "Cloud-based performance testing",
          icon: <SiBlazemeter className="w-5 h-5 text-brand-blue" />,
        },
      ],
    },
    {
      category: (<Link href='blog/post/web-app-security-testing-complete-guide-to-tools-techniques-common-vulnerabilities'>Security Testing Tools</Link>),
      icon: <FaShieldAlt className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        {
          name: "Nmap",
          description: "Network discovery and security auditing",
          icon: <FaRunning className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "Metasploit",
          description: "Penetration testing framework",
          icon: <SiMetasploit className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "OWASP ZAP",
          description: "Web application security scanner",
          icon: <SiOwasp className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "Burp Suite",
          description: "Web vulnerability scanner",
          icon: <SiBurpsuite className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "Nessus",
          description: "Vulnerability assessment",
          icon: <FaShield className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "OpenVAS",
          description: "Open-source vulnerability scanner",
          icon: <SiOpenvpn className="w-5 h-5 text-brand-blue" />,
        },
      ],
    },
    {
      category: (<Link href='blog/post/mobile-automation-testing-guide-android-ios-frameworks'>Automation Frameworks</Link>),
      icon: <FaCode className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        {
          name: "Robot Framework",
          description: "Generic automation framework",
          icon: <SiRobotframework className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "Selenium",
          description: "Web-based IoT interface testing",
          icon: <SiSelenium className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "Appium",
          description: "Mobile IoT app testing",
          icon: <SiAppium className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "TestComplete",
          description: "Automated testing platform",
          icon: <FaCheckCircle className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "Cucumber",
          description: "BDD testing framework",
          icon: <SiCucumber className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "PyTest",
          description: "Python testing framework",
          icon: <SiPython className="w-5 h-5 text-brand-blue" />,
        },
      ],
    },
    {
      category: (<Link href='blog/post/cloud-integration-testing-for-iot-aws-iot-azure-iot-google-iot-core'>Cloud & Edge Testing</Link>),
      icon: <MdCloud className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        {
          name: "Docker",
          description: "Containerized testing environments",
          icon: <SiDocker className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "Kubernetes",
          description: "Container orchestration testing",
          icon: <SiKubernetes className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "Terraform",
          description: "Infrastructure as code testing",
          icon: <SiTerraform className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "Ansible",
          description: "Configuration management testing",
          icon: <SiAnsible className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "Prometheus",
          description: "Monitoring and alerting",
          icon: <SiPrometheus className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "Grafana",
          description: "Metrics visualization",
          icon: <SiGrafana className="w-5 h-5 text-brand-blue" />,
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
