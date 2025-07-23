"use client";

import React from "react";
import { 
  FaNetworkWired, 
  FaWifi, 
  FaSignal, 
  FaGlobe,
  FaShieldAlt,
  FaClock,
  FaChartLine,
  FaCheckCircle,
  FaArrowRight,
  FaCloud,
  FaCog
} from "react-icons/fa";

const TelecomNetworkTestingSection: React.FC = () => {
  const networkTypes = [
    {
      icon: FaWifi,
      title: "5G Networks",
      description: "Comprehensive testing of 5G standalone and non-standalone networks with focus on ultra-low latency and massive connectivity.",
      testingAreas: [
        "Protocol Stack Validation",
        "Network Slicing Testing",
        "Edge Computing Integration",
        "Massive MIMO Testing"
      ],
      benefits: [
        "99.99% network reliability",
        "Sub-millisecond latency",
        "10x faster deployment",
        "Enhanced user experience"
      ],
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50"
    },
    {
      icon: FaSignal,
      title: "LTE/4G Networks",
      description: "Advanced LTE testing including VoLTE, carrier aggregation, and LTE-Advanced features for optimal mobile broadband performance.",
      testingAreas: [
        "VoLTE Call Quality",
        "Carrier Aggregation",
        "Handover Optimization",
        "Coverage Analysis"
      ],
      benefits: [
        "Crystal clear voice calls",
        "Seamless data connectivity",
        "Optimized coverage",
        "Reduced call drops"
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: FaGlobe,
      title: "Core Networks",
      description: "End-to-end core network testing including EPC, 5G Core, IMS, and network function virtualization validation.",
      testingAreas: [
        "EPC/5GC Testing",
        "IMS Validation",
        "NFV Testing",
        "Service Orchestration"
      ],
      benefits: [
        "Seamless service delivery",
        "Scalable architecture",
        "Reduced operational costs",
        "Future-ready infrastructure"
      ],
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50"
    },
    {
      icon: FaCloud,
      title: "Cloud-Native Networks",
      description: "Testing of cloud-native network functions, microservices architecture, and containerized network deployments.",
      testingAreas: [
        "Microservices Testing",
        "Container Orchestration",
        "API Gateway Testing",
        "Service Mesh Validation"
      ],
      benefits: [
        "Rapid service deployment",
        "Auto-scaling capabilities",
        "Improved resilience",
        "Cost optimization"
      ],
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50"
    }
  ];

  const testingMethodologies = [
    {
      phase: "Planning",
      description: "Network architecture analysis and test strategy development",
      activities: ["Requirements Analysis", "Test Planning", "Environment Setup", "Tool Configuration"]
    },
    {
      phase: "Functional Testing",
      description: "Core network functionality and feature validation",
      activities: ["Protocol Testing", "Feature Validation", "Integration Testing", "Compliance Verification"]
    },
    {
      phase: "Performance Testing",
      description: "Network performance optimization and capacity validation",
      activities: ["Load Testing", "Stress Testing", "Capacity Planning", "Latency Optimization"]
    },
    {
      phase: "Security Testing",
      description: "Network security assessment and vulnerability testing",
      activities: ["Penetration Testing", "Vulnerability Scanning", "Security Compliance", "Threat Assessment"]
    },
    {
      phase: "Optimization",
      description: "Network tuning and performance enhancement",
      activities: ["Performance Tuning", "Configuration Optimization", "Monitoring Setup", "Reporting"]
    }
  ];

  const networkMetrics = [
    { metric: "Network Uptime", value: "99.99%", description: "Achieved across all tested networks" },
    { metric: "Latency Reduction", value: "75%", description: "Average improvement in network latency" },
    { metric: "Throughput Increase", value: "60%", description: "Performance improvement after optimization" },
    { metric: "Issue Detection", value: "95%", description: "Early detection of network issues" }
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-white bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaNetworkWired className="w-4 h-4" />
            <span className="text-sm">Network Testing Expertise</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Advanced <span className="text-[theme(color.brand.blue)]">Network Testing</span>
            <span className="block">for All Technologies</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From 5G networks to legacy systems, our comprehensive network testing ensures optimal 
            performance, reliability, and seamless connectivity across all telecommunications technologies.
          </p>
        </div>

        {/* Network Performance Metrics */}
        <div className="bg-white rounded-3xl p-8 mb-16 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Network Testing Results</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {networkMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-2">{metric.value}</div>
                <div className="text-sm font-semibold text-gray-900 mb-1">{metric.metric}</div>
                <div className="text-xs text-gray-600">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Network Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {networkTypes.map((network, index) => (
            <div
              key={index}
              className={`${network.bgColor} rounded-3xl p-8 shadow-lg ring-1 hover:ring-4 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group`}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${network.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <network.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{network.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{network.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm mb-3">TESTING AREAS:</h4>
                  <div className="space-y-2">
                    {network.testingAreas.map((area, areaIndex) => (
                      <div key={areaIndex} className="flex items-center gap-2">
                        <FaCog className="w-3 h-3 text-[theme(color.brand.blue)] flex-shrink-0" />
                        <span className="text-sm text-gray-600">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm mb-3">KEY BENEFITS:</h4>
                  <div className="space-y-2">
                    {network.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2">
                        <FaCheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <button className="text-[theme(color.brand.blue)] font-semibold text-sm hover:underline flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Learn More
                  <FaArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Testing Methodology */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Network Testing Methodology</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach to ensure comprehensive network validation and optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {testingMethodologies.map((methodology, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {index + 1}
                </div>
                <h4 className="text-lg font-bold mb-2 text-gray-900">{methodology.phase}</h4>
                <p className="text-sm text-gray-600 mb-4">{methodology.description}</p>
                <div className="space-y-1">
                  {methodology.activities.map((activity, activityIndex) => (
                    <div key={activityIndex} className="text-xs text-gray-500 bg-white rounded-lg px-2 py-1">
                      {activity}
                    </div>
                  ))}
                </div>
                {index < testingMethodologies.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-8 h-0.5 bg-[theme(color.brand.blue)] opacity-30"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Network Testing Benefits */}
        <div className="bg-white rounded-3xl p-12 mb-16 shadow-lg border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Network Testing is Critical</h3>
              <p className="text-lg text-gray-600 mb-8">
                In today&apos;s connected world, network reliability and performance directly impact business 
                success, customer satisfaction, and competitive advantage.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaShieldAlt className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Risk Mitigation</h4>
                    <p className="text-sm text-gray-600">Identify and resolve network issues before they impact customers and business operations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaChartLine className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Performance Optimization</h4>
                    <p className="text-sm text-gray-600">Maximize network efficiency and deliver superior user experiences across all services.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaClock className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Faster Deployment</h4>
                    <p className="text-sm text-gray-600">Accelerate network rollouts with confidence through comprehensive pre-deployment testing.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[theme(color.brand.blue)] to-sky-600 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">Network Testing Impact</h4>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span>Network Downtime Reduction</span>
                  <span className="font-bold text-2xl">-85%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Customer Satisfaction Improvement</span>
                  <span className="font-bold text-2xl">+40%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Deployment Time Reduction</span>
                  <span className="font-bold text-2xl">-60%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Operational Cost Savings</span>
                  <span className="font-bold text-2xl">30%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Optimize Your Network Performance?</h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Let our network testing experts help you achieve superior performance, reliability, 
            and customer satisfaction across all your telecommunications infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 text-[theme(color.brand.blue)] justify-center">
            <button className="bg-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 hover:scale-98 transition-all duration-200 ease-in-out">
              Start Network Assessment
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

export default TelecomNetworkTestingSection;

