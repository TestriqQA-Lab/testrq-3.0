"use client";

import React from "react";
import { 
  FaWifi, 
  FaShieldAlt, 
  FaCloud, 
  FaMicrochip,
  FaTools,
  FaCheckCircle,
  FaCog,
  FaNetworkWired
} from "react-icons/fa";

const IoTToolsFrameworkSection: React.FC = () => {
  const testingTools = [
    {
      category: "Connectivity Testing",
      icon: FaWifi,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      tools: [
        { name: "Wireshark", description: "Network protocol analyzer" },
        { name: "iperf3", description: "Network bandwidth testing" },
        { name: "MQTT.fx", description: "MQTT client testing tool" },
        { name: "CoAP Client", description: "Constrained Application Protocol testing" }
      ]
    },
    {
      category: "Security Testing",
      icon: FaShieldAlt,
      color: "text-red-500",
      bgColor: "bg-red-50",
      tools: [
        { name: "Nmap", description: "Network discovery and security auditing" },
        { name: "Metasploit", description: "Penetration testing framework" },
        { name: "OWASP ZAP", description: "Web application security scanner" },
        { name: "IoT Inspector", description: "IoT device security analysis" }
      ]
    },
    {
      category: "Performance Testing",
      icon: FaCog,
      color: "text-green-500",
      bgColor: "bg-green-50",
      tools: [
        { name: "JMeter", description: "Load testing for IoT APIs" },
        { name: "Gatling", description: "High-performance load testing" },
        { name: "InfluxDB", description: "Time-series data monitoring" },
        { name: "Grafana", description: "Performance visualization" }
      ]
    },
    {
      category: "Device Testing",
      icon: FaMicrochip,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      tools: [
        { name: "TestGrid", description: "IoT automation platform" },
        { name: "Spirent", description: "Network testing solutions" },
        { name: "Keysight", description: "IoT device validation" },
        { name: "Anritsu", description: "Wireless testing equipment" }
      ]
    }
  ];

  const protocolFrameworks = [
    {
      name: "Communication Protocols",
      description: "Testing frameworks for IoT communication standards",
      features: ["MQTT", "CoAP", "HTTP/HTTPS", "WebSocket"]
    },
    {
      name: "Wireless Standards",
      description: "Validation of wireless connectivity protocols",
      features: ["WiFi 6/6E", "Bluetooth 5.0", "Zigbee 3.0", "LoRaWAN"]
    },
    {
      name: "Edge Computing",
      description: "Edge device and gateway testing frameworks",
      features: ["Local Processing", "Data Filtering", "Real-time Analytics", "Offline Mode"]
    },
    {
      name: "Cloud Integration",
      description: "Cloud platform and service validation",
      features: ["AWS IoT Core", "Azure IoT Hub", "Google Cloud IoT", "IBM Watson"]
    }
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-white bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaTools className="w-4 h-4" />
            <span className="text-sm">Tools &amp; Frameworks</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Advanced IoT Testing
            <span className="block text-brand-blue">
              Tools &amp; Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Leverage specialized IoT testing tools and frameworks designed for IoT ecosystems, ensuring seamless device connectivity, robust IoT security, and optimized performance across edge-to-cloud architectures and diverse connected environments.

          </p>
        </div>

        {/* Testing Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {testingTools.map((category, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg ring-1 ring-brand-blue hover:shadow-xl hover:ring-2 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center`}>
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
              </div>
              
              <div className="space-y-4">
                {category.tools.map((tool, toolIndex) => (
                  <div key={toolIndex} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl hover:bg-sky-100 transition-colors">
                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{tool.name}</h4>
                      <p className="text-sm text-gray-600">{tool.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Protocol Frameworks */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-white bg-brand-blue rounded-full px-6 py-2 mb-6">
              <FaNetworkWired className="w-4 h-4" />
              <span className="text-sm">Protocol Frameworks</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              IoT Protocol &amp; Standards Validation
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive IoT testing frameworks ensuring your IoT devices and applications comply with industry-specific standards, regulatory requirements, and IoT communication protocols like MQTT, Zigbee, Bluetooth Low Energy (BLE), and LoRaWAN.

            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {protocolFrameworks.map((framework, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl p-6 hover:border-[theme(color.brand.blue)] transition-colors">
                <h4 className="text-xl font-bold text-gray-900 mb-3">{framework.name}</h4>
                <p className="text-gray-600 mb-4">{framework.description}</p>
                
                <div className="grid grid-cols-2 gap-2">
                  {framework.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[theme(color.brand.blue)] rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mt-20 bg-gradient-to-r from-[theme(color.brand.blue)] to-cyan-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Our IoT Testing Stack</h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Cutting-edge technologies and methodologies for comprehensive IoT ecosystem validation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaMicrochip className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Edge Testing</h4>
              <p>Device, sensor, and gateway validation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaNetworkWired className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Network Testing</h4>
              <p>Connectivity and protocol validation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaCloud className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Cloud Testing</h4>
              <p>Platform integration and scalability</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IoTToolsFrameworkSection;

