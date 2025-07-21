"use client";

import React from "react";
import { FaTools, FaCode, FaRocket, FaShieldAlt } from "react-icons/fa";
import { MdDevices, MdCloud } from "react-icons/md";

const IoTToolsFramework: React.FC = () => {
  const toolCategories = [
    {
      category: "IoT Testing Platforms",
      icon: <FaTools className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        { name: "AWS IoT Device Tester", description: "Automated testing for IoT devices" },
        { name: "Azure IoT Hub", description: "Cloud-based IoT testing platform" },
        { name: "Google Cloud IoT Core", description: "Secure device connection and management" },
        { name: "ThingWorx", description: "Industrial IoT platform testing" },
        { name: "IBM Watson IoT", description: "AI-powered IoT testing solutions" },
        { name: "Particle Console", description: "IoT device fleet management" }
      ]
    },
    {
      category: "Network & Protocol Testing",
      icon: <MdDevices className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        { name: "Wireshark", description: "Network protocol analyzer" },
        { name: "MQTT.fx", description: "MQTT client testing tool" },
        { name: "CoAP Client", description: "CoAP protocol testing" },
        { name: "Bluetooth LE Explorer", description: "BLE device testing" },
        { name: "WiFi Analyzer", description: "Wireless network testing" },
        { name: "Zigbee Test Tool", description: "Zigbee protocol validation" }
      ]
    },
    {
      category: "Performance & Load Testing",
      icon: <FaRocket className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        { name: "JMeter", description: "Load testing for IoT endpoints" },
        { name: "Gatling", description: "High-performance load testing" },
        { name: "Artillery", description: "Modern load testing toolkit" },
        { name: "K6", description: "Developer-centric load testing" },
        { name: "LoadRunner", description: "Enterprise load testing" },
        { name: "BlazeMeter", description: "Cloud-based performance testing" }
      ]
    },
    {
      category: "Security Testing Tools",
      icon: <FaShieldAlt className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        { name: "Nmap", description: "Network discovery and security auditing" },
        { name: "Metasploit", description: "Penetration testing framework" },
        { name: "OWASP ZAP", description: "Web application security scanner" },
        { name: "Burp Suite", description: "Web vulnerability scanner" },
        { name: "Nessus", description: "Vulnerability assessment" },
        { name: "OpenVAS", description: "Open-source vulnerability scanner" }
      ]
    },
    {
      category: "Automation Frameworks",
      icon: <FaCode className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        { name: "Robot Framework", description: "Generic automation framework" },
        { name: "Selenium", description: "Web-based IoT interface testing" },
        { name: "Appium", description: "Mobile IoT app testing" },
        { name: "TestComplete", description: "Automated testing platform" },
        { name: "Cucumber", description: "BDD testing framework" },
        { name: "PyTest", description: "Python testing framework" }
      ]
    },
    {
      category: "Cloud & Edge Testing",
      icon: <MdCloud className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        { name: "Docker", description: "Containerized testing environments" },
        { name: "Kubernetes", description: "Container orchestration testing" },
        { name: "Terraform", description: "Infrastructure as code testing" },
        { name: "Ansible", description: "Configuration management testing" },
        { name: "Prometheus", description: "Monitoring and alerting" },
        { name: "Grafana", description: "Metrics visualization" }
      ]
    }
  ];

  return (
    <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            IoT Testing Tools & Frameworks
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            We leverage cutting-edge tools and frameworks specifically designed for 
            IoT testing to ensure comprehensive validation of your connected devices 
            and systems across all layers of the IoT stack.
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
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {tool.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {tool.description}
                    </p>
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
            We can adapt our testing approach to work with your specific IoT protocols, 
            devices, and infrastructure requirements, ensuring comprehensive coverage 
            for your unique IoT ecosystem.
          </p>
          <button className="bg-[theme(color.brand.blue)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors duration-300">
            Discuss Your IoT Testing Needs
          </button>
        </div>
      </div>
    </section>
  );
};

export default IoTToolsFramework;

