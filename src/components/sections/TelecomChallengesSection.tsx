"use client";

import React from "react";
import { 
  FaExclamationTriangle, 
  FaWifi, 
  FaSignal, 
  FaMobile,
  FaUsers,
  FaChartLine,
  FaShieldAlt,
  FaClock,
  FaArrowRight,
  FaNetworkWired,
  FaCloud
} from "react-icons/fa";

const TelecomChallengesSection: React.FC = () => {
  const challenges = [
    {
      icon: FaWifi,
      title: "5G Network Complexity",
      problem: "5G networks are 10x more complex than 4G with new protocols, edge computing, and network slicing",
      impact: "Network failures can cost telecom operators $100K+ per hour in lost revenue",
      solution: "Comprehensive 5G testing including protocol validation, edge computing tests, and network slice verification",
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50"
    },
    {
      icon: FaSignal,
      title: "IoT Device Proliferation",
      problem: "50 billion IoT devices expected by 2030, each with unique connectivity requirements",
      impact: "Poor IoT connectivity leads to 30% device abandonment and customer churn",
      solution: "Specialized IoT testing frameworks for device compatibility, connectivity, and performance validation",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50"
    },
    {
      icon: FaMobile,
      title: "Voice Quality Issues",
      problem: "VoIP and VoLTE call quality problems affect 25% of mobile calls globally",
      impact: "Poor voice quality results in 40% customer satisfaction drop and service cancellations",
      solution: "Advanced voice quality testing with MOS scoring, jitter analysis, and codec optimization",
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: FaClock,
      title: "Network Latency",
      problem: "Ultra-low latency requirements for autonomous vehicles and AR/VR applications",
      impact: "High latency can cause safety issues in critical applications and poor user experience",
      solution: "Real-time latency testing and optimization for mission-critical applications",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: FaShieldAlt,
      title: "Network Security Threats",
      problem: "Telecom networks face 2.5x more cyber attacks than other industries",
      impact: "Security breaches can expose millions of customer records and cost $200M+ in damages",
      solution: "Comprehensive security testing including penetration testing and vulnerability assessments",
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50"
    },
    {
      icon: FaCloud,
      title: "Network Function Virtualization",
      problem: "Migration from hardware to software-based network functions creates new testing challenges",
      impact: "NFV implementation failures can cause 50% performance degradation",
      solution: "Specialized NFV testing for virtual network functions and cloud-native architectures",
      color: "from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-50"
    }
  ];

  const industryStats = [
    { value: "10x", label: "5G Complexity vs 4G", trend: "up" },
    { value: "50B", label: "IoT Devices by 2030", trend: "up" },
    { value: "25%", label: "VoIP Call Quality Issues", trend: "up" },
    { value: "2.5x", label: "More Cyber Attacks vs Other Industries", trend: "up" }
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 rounded-full px-6 py-2 mb-6">
            <FaExclamationTriangle className="w-4 h-4 text-red-600" />
            <span className="text-sm font-medium text-red-600">Telecom Challenges</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Critical Network Issues
            <span className="block text-[theme(color.brand.blue)]">That Impact Your Operations</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Telecommunications networks face unprecedented complexity and challenges in today’s hyper-connected world. Our specialized telecom testing solutions proactively address these critical network issues—including interoperability, protocol compatibility, 5G performance, and real-time data processing—before they impact your network performance and service reliability.

          </p>
        </div>

        {/* Industry Statistics */}
        <div className="bg-white rounded-3xl p-8 mb-16 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Telecom Industry Reality</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {industryStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className={`${challenge.bgColor} rounded-3xl p-8 shadow-lg ring-1 hover:ring-4 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group`}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${challenge.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <challenge.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{challenge.title}</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-red-700 text-sm mb-2">THE PROBLEM:</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{challenge.problem}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-700 text-sm mb-2">BUSINESS IMPACT:</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{challenge.impact}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-700 text-sm mb-2">OUR SOLUTION:</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{challenge.solution}</p>
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

        {/* Cost of Inaction */}
        <div className="bg-gradient-to-tr from-red-700 to-red-300 rounded-3xl p-12 mb-16">
          <div className="text-center mb-12 text-white">
            <FaExclamationTriangle className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h3 className="text-3xl font-bold mb-4">The Cost of Ignoring These Network Issues</h3>
            <p className="text-lg max-w-3xl mx-auto">
              Every day these network problems persist, your telecom operation faces increased risk of 
              service outages, customer churn, and competitive disadvantage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 text-red-500 bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm">
              <FaChartLine className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h4 className="text-xl font-bold mb-2">Revenue Loss</h4>
              <p className="text-sm">
                Network outages cost telecom operators an average of $100,000 per hour, with major 
                incidents reaching millions in lost revenue and compensation.
              </p>
            </div>
            
            <div className="text-center p-6 text-red-500 bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm">
              <FaUsers className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h4 className="text-xl font-bold mb-2">Customer Churn</h4>
              <p className="text-sm">
                Poor network quality leads to 30% customer churn rate, with customers switching to 
                competitors offering better service reliability and performance.
              </p>
            </div>
            
            <div className="text-center p-6 text-red-500 bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm">
              <FaNetworkWired className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h4 className="text-xl font-bold mb-2">Network Degradation</h4>
              <p className="text-sm">
                Unaddressed network issues compound over time, leading to 50% performance degradation 
                and requiring costly infrastructure overhauls.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-white text-red-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 hover:scale-98 transition-all duration-200 ease-in-out shadow-lg">
              Prevent These Issues Now
            </button>
          </div>
        </div>

        {/* Solution Preview */}
        <div className="bg-gradient-to-br from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Don&apos;t Let These Challenges Compromise Your Network</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our comprehensive telecommunication testing solutions address every challenge mentioned above, 
            helping you deliver superior network performance, enhance customer satisfaction, and stay ahead of the competition.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 text-[theme(color.brand.blue)] justify-center">
            <button className="bg-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 hover:scale-98 transition-all duration-200 ease-in-out">
              Explore Our Solutions
            </button>
            <button className="bg-white bg-opacity-20 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-opacity-30 hover:scale-98 transition-all duration-200 ease-in-out border border-white border-opacity-30">
              Get Network Assessment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelecomChallengesSection;

