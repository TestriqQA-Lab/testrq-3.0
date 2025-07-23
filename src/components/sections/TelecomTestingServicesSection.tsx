"use client";

import React from "react";
import { 
  FaWifi, 
  FaSignal, 
  FaMobile, 
  FaShieldAlt,
  FaNetworkWired,
  FaCloud,
  FaCog,
  FaChartLine,
  FaCheckCircle,
  FaArrowRight,
  FaGlobe,
  FaPhone
} from "react-icons/fa";

const TelecomTestingServicesSection: React.FC = () => {
  const services = [
    {
      icon: FaWifi,
      title: "5G Network Testing",
      description: "Comprehensive testing of 5G networks including protocol validation, network slicing, edge computing, and ultra-low latency verification.",
      features: ["Protocol Testing", "Network Slicing", "Edge Computing", "Latency Optimization"],
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50"
    },
    {
      icon: FaSignal,
      title: "IoT Connectivity Testing",
      description: "End-to-end testing of IoT device connectivity, protocol compatibility, and network performance across various IoT platforms.",
      features: ["Device Compatibility", "Protocol Testing", "Connectivity Validation", "Performance Monitoring"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: FaPhone,
      title: "VoIP/VoLTE Testing",
      description: "Voice quality testing, call setup optimization, and codec performance validation for crystal-clear voice communications.",
      features: ["Voice Quality (MOS)", "Call Setup Testing", "Codec Validation", "Jitter Analysis"],
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50"
    },
    {
      icon: FaMobile,
      title: "Mobile Network Testing",
      description: "Comprehensive mobile network testing including handover scenarios, roaming validation, and device compatibility testing.",
      features: ["Handover Testing", "Roaming Validation", "Device Testing", "Coverage Analysis"],
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: FaShieldAlt,
      title: "Network Security Testing",
      description: "Security assessment of telecom infrastructure including penetration testing, vulnerability scanning, and protocol security validation.",
      features: ["Penetration Testing", "Vulnerability Assessment", "Protocol Security", "Threat Modeling"],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50"
    },
    {
      icon: FaChartLine,
      title: "Performance Testing",
      description: "Network performance optimization including load testing, stress testing, and capacity planning for peak traffic scenarios.",
      features: ["Load Testing", "Stress Testing", "Capacity Planning", "Throughput Analysis"],
      color: "from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-50"
    },
    {
      icon: FaCloud,
      title: "NFV/SDN Testing",
      description: "Testing of Network Function Virtualization and Software-Defined Networking implementations for cloud-native telecom architectures.",
      features: ["NFV Validation", "SDN Testing", "Orchestration Testing", "Cloud Integration"],
      color: "from-teal-500 to-green-600",
      bgColor: "bg-teal-50"
    },
    {
      icon: FaCog,
      title: "Automation Testing",
      description: "Automated testing frameworks for continuous network validation, regression testing, and CI/CD integration for telecom operations.",
      features: ["Test Automation", "CI/CD Integration", "Regression Testing", "Continuous Monitoring"],
      color: "from-pink-500 to-red-600",
      bgColor: "bg-pink-50"
    }
  ];

  const serviceStats = [
    { value: "99.99%", label: "Network Uptime Achieved" },
    { value: "85%", label: "Call Drop Reduction" },
    { value: "70%", label: "Faster Network Deployment" },
    { value: "24/7", label: "Continuous Monitoring" }
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaNetworkWired className="w-4 h-4 text-[theme(color.brand.blue)]" />
            <span className="text-sm font-medium text-[theme(color.brand.blue)]">Telecom Testing Services</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive <span className="text-[theme(color.brand.blue)]">Telecommunication</span>
            <span className="block">Testing Solutions</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            End-to-end testing services designed specifically for the telecommunications industry, 
            ensuring network reliability, optimal performance, and seamless connectivity across all platforms.
          </p>
        </div>

        {/* Service Statistics */}
        <div className="bg-white rounded-3xl p-8 mb-16 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Network Performance Record</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {serviceStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} rounded-3xl p-8 shadow-lg ring-1 hover:ring-4 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group`}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800 text-sm mb-3">KEY FEATURES:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <FaCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-200">
                <button className="text-[theme(color.brand.blue)] font-semibold text-sm hover:underline flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Learn More
                  <FaArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Our Services */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Telecom Testing Services?</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We understand the unique challenges and requirements of the telecommunications industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <FaGlobe className="w-12 h-12 mx-auto mb-4 text-[theme(color.brand.blue)]" />
              <h4 className="text-xl font-bold mb-2 text-gray-900">Global Network Expertise</h4>
              <p className="text-sm text-gray-600">
                20+ years of experience testing telecom networks worldwide with deep understanding 
                of international standards and protocols.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <FaWifi className="w-12 h-12 mx-auto mb-4 text-[theme(color.brand.blue)]" />
              <h4 className="text-xl font-bold mb-2 text-gray-900">5G & Next-Gen Ready</h4>
              <p className="text-sm text-gray-600">
                Cutting-edge testing capabilities for 5G, IoT, edge computing, and emerging 
                technologies that define the future of telecommunications.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <FaCog className="w-12 h-12 mx-auto mb-4 text-[theme(color.brand.blue)]" />
              <h4 className="text-xl font-bold mb-2 text-gray-900">Proven Methodologies</h4>
              <p className="text-sm text-gray-600">
                Industry-standard testing frameworks and methodologies specifically designed for 
                telecom networks and communication systems.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Optimize Your Network Performance?</h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Let our telecom testing experts help you achieve superior network performance, enhance 
            customer satisfaction, and deliver exceptional connectivity experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[theme(color.brand.blue)] px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 hover:scale-98 transition-all duration-200 ease-in-out">
              Start Your Network Assessment
            </button>
            <button className="bg-white bg-opacity-20 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-opacity-30 hover:scale-98 transition-all duration-200 ease-in-out border border-white border-opacity-30">
              Schedule Expert Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelecomTestingServicesSection;

