"use client";

import React from "react";
import { 
  FaGamepad, 
  FaMobile, 
  FaDesktop, 
  FaUsers,
  FaShieldAlt,
  FaRocket,
  FaVrCardboard,
  FaCog,
  FaChartLine,
  FaBug,
  FaCloud,
  FaTrophy
} from "react-icons/fa";

const GamingTestingServicesSection: React.FC = () => {
  const services = [
    {
      icon: FaGamepad,
      title: "Functional Game Testing",
      description: "Comprehensive testing of game mechanics, controls, UI/UX, and core gameplay features across all game modes and scenarios.",
      features: ["Game Mechanics Validation", "Control Responsiveness", "UI/UX Testing", "Game Flow Testing"]
    },
    {
      icon: FaMobile,
      title: "Mobile Game Testing",
      description: "Specialized testing for mobile games including touch controls, device compatibility, battery optimization, and app store compliance.",
      features: ["Touch Interface Testing", "Device Compatibility", "Battery Performance", "App Store Validation"]
    },
    {
      icon: FaDesktop,
      title: "PC & Console Testing",
      description: "Platform-specific testing for PC, PlayStation, Xbox, and Nintendo Switch including hardware compatibility and platform features.",
      features: ["Hardware Compatibility", "Platform Certification", "Controller Testing", "Achievement Systems"]
    },
    {
      icon: FaUsers,
      title: "Multiplayer Testing",
      description: "Comprehensive multiplayer testing including network synchronization, matchmaking, chat systems, and social features.",
      features: ["Network Synchronization", "Matchmaking Systems", "Chat & Voice Testing", "Social Features"]
    },
    {
      icon: FaChartLine,
      title: "Performance Testing",
      description: "Advanced performance testing to ensure optimal frame rates, loading times, and memory usage across all target platforms.",
      features: ["Frame Rate Optimization", "Load Time Testing", "Memory Management", "Stress Testing"]
    },
    {
      icon: FaShieldAlt,
      title: "Game Security Testing",
      description: "Security testing to prevent cheating, hacking, and data breaches while protecting player information and game integrity.",
      features: ["Anti-Cheat Validation", "Data Protection", "Server Security", "Payment Security"]
    },
    {
      icon: FaVrCardboard,
      title: "AR/VR Game Testing",
      description: "Specialized testing for augmented and virtual reality games including motion tracking, comfort testing, and immersive experience validation.",
      features: ["Motion Tracking", "Comfort Testing", "Spatial Audio", "Hand Tracking"]
    },
    {
      icon: FaCloud,
      title: "Cloud Gaming Testing",
      description: "Testing for cloud-based gaming platforms including streaming quality, latency optimization, and cross-device synchronization.",
      features: ["Streaming Quality", "Latency Optimization", "Cross-Device Sync", "Bandwidth Testing"]
    },
    {
      icon: FaBug,
      title: "Game Compatibility Testing",
      description: "Extensive compatibility testing across different operating systems, hardware configurations, and game engine versions.",
      features: ["OS Compatibility", "Hardware Configs", "Engine Versions", "Driver Testing"]
    },
    {
      icon: FaCog,
      title: "Game Automation Testing",
      description: "Automated testing solutions for repetitive game scenarios, regression testing, and continuous integration pipelines.",
      features: ["Automated Regression", "CI/CD Integration", "Scenario Automation", "Performance Monitoring"]
    },
    {
      icon: FaRocket,
      title: "Launch Readiness Testing",
      description: "Comprehensive pre-launch testing including stress testing, day-one patch validation, and launch day monitoring.",
      features: ["Stress Testing", "Patch Validation", "Launch Monitoring", "Rollback Testing"]
    },
    {
      icon: FaTrophy,
      title: "Esports Game Testing",
      description: "Specialized testing for competitive gaming including tournament mode validation, spectator features, and anti-cheat systems.",
      features: ["Tournament Modes", "Spectator Features", "Competitive Balance", "Anti-Cheat Systems"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaGamepad className="w-4 h-4 text-[theme(color.brand.blue)]" />
            <span className="text-sm font-semibold text-[theme(color.brand.blue)]">Gaming Testing Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Gaming
            <span className="block bg-gradient-to-r from-[theme(color.brand.blue)] to-purple-600 bg-clip-text text-transparent">
              Testing Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized testing services designed for gaming applications, ensuring flawless gameplay, 
            optimal performance, and exceptional player experiences across all platforms.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-[theme(color.brand.blue)] hover:border-opacity-30">
              <div className="w-16 h-16 bg-gradient-to-r from-[theme(color.brand.blue)] to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[theme(color.brand.blue)] rounded-full"></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Platform Coverage */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Platform Coverage
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We test your games across all major gaming platforms and devices to ensure 
              consistent performance and player experience everywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaMobile className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Mobile Gaming</h4>
              <p className="text-gray-600 text-sm">iOS, Android, cross-platform mobile games</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaDesktop className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">PC Gaming</h4>
              <p className="text-gray-600 text-sm">Windows, Mac, Linux, Steam, Epic Games</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaGamepad className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Console Gaming</h4>
              <p className="text-gray-600 text-sm">PlayStation, Xbox, Nintendo Switch</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaVrCardboard className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">AR/VR Gaming</h4>
              <p className="text-gray-600 text-sm">Oculus, HTC Vive, ARKit, ARCore</p>
            </div>
          </div>
        </div>

        {/* Gaming Expertise */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-purple-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Gaming Industry Expertise</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaTrophy className="w-6 h-6 text-blue-200 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">AAA Game Experience</h4>
                  <p className="text-blue-100 text-sm">Extensive experience testing major game releases and indie titles across all genres.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaUsers className="w-6 h-6 text-blue-200 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Multiplayer Specialists</h4>
                  <p className="text-blue-100 text-sm">Deep expertise in multiplayer game testing, networking, and social features.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaRocket className="w-6 h-6 text-blue-200 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Launch Success</h4>
                  <p className="text-blue-100 text-sm">Proven track record of successful game launches with minimal post-launch issues.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Gaming Testing Metrics</h3>
            <div className="space-y-6">
              <div className="text-center p-4 bg-green-50 rounded-2xl">
                <div className="text-3xl font-bold text-green-600 mb-1">99.9%</div>
                <div className="text-sm text-gray-600">Bug-free game launches</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-2xl">
                <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-1">500+</div>
                <div className="text-sm text-gray-600">Games successfully tested</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-2xl">
                <div className="text-3xl font-bold text-purple-600 mb-1">85%</div>
                <div className="text-sm text-gray-600">Average bug reduction rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Level Up Your Game Testing?</h3>
            <p className="text-blue-100 mb-8 text-lg">
              Our gaming testing experts are ready to help you deliver exceptional player experiences 
              and achieve successful game launches across all platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[theme(color.brand.blue)] px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-colors">
                Get Gaming Testing Quote
              </button>
              <button className="bg-white bg-opacity-20 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-opacity-30 transition-all border border-white border-opacity-30">
                Schedule Gaming Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamingTestingServicesSection;
