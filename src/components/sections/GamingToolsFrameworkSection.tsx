"use client";

import React from "react";
import { 
  FaGamepad, 
  FaMobile, 
  FaDesktop, 
  FaVrCardboard,
  FaTools,
  FaCheckCircle,
  FaCog,
  FaRocket
} from "react-icons/fa";

const GamingToolsFrameworkSection: React.FC = () => {
  const testingTools = [
    {
      category: "Game Engine Testing",
      icon: FaGamepad,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      tools: [
        { name: "Unity Test Framework", description: "Native Unity testing solution" },
        { name: "Unreal Automation", description: "Unreal Engine testing framework" },
        { name: "GameDriver", description: "Cross-platform game automation" },
        { name: "AltTester", description: "Unity UI test automation" }
      ]
    },
    {
      category: "Mobile Game Testing",
      icon: FaMobile,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      tools: [
        { name: "Appium", description: "Mobile app automation framework" },
        { name: "TestFlight", description: "iOS beta testing platform" },
        { name: "Firebase Test Lab", description: "Android testing infrastructure" },
        { name: "GameBench", description: "Mobile game performance testing" }
      ]
    },
    {
      category: "Performance Testing",
      icon: FaRocket,
      color: "text-green-500",
      bgColor: "bg-green-50",
      tools: [
        { name: "Unity Profiler", description: "Unity performance analysis" },
        { name: "Unreal Insights", description: "Unreal Engine profiling" },
        { name: "Xcode Instruments", description: "iOS performance monitoring" },
        { name: "Android Studio Profiler", description: "Android performance analysis" }
      ]
    },
    {
      category: "Automation Testing",
      icon: FaCog,
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      tools: [
        { name: "Selenium", description: "Web-based game automation" },
        { name: "TestComplete", description: "Desktop game testing" },
        { name: "Ranorex", description: "GUI test automation" },
        { name: "Squish", description: "Cross-platform GUI testing" }
      ]
    }
  ];

  const platformFrameworks = [
    {
      name: "Mobile Platforms",
      description: "iOS and Android game testing frameworks",
      features: ["Touch Controls", "Device Compatibility", "App Store Compliance", "Performance"]
    },
    {
      name: "PC Gaming",
      description: "Windows, Mac, and Linux game validation",
      features: ["Hardware Configs", "Graphics Settings", "Input Devices", "Steam Integration"]
    },
    {
      name: "Console Gaming",
      description: "PlayStation, Xbox, and Nintendo testing",
      features: ["Certification", "Platform Features", "Controllers", "Online Services"]
    },
    {
      name: "AR/VR Gaming",
      description: "Immersive gaming experience validation",
      features: ["Motion Tracking", "Spatial Audio", "Comfort Testing", "Hand Tracking"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaTools className="w-4 h-4 text-[theme(color.brand.blue)]" />
            <span className="text-sm font-semibold text-[theme(color.brand.blue)]">Tools &amp; Frameworks</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Advanced Gaming Testing
            <span className="block bg-gradient-to-r from-[theme(color.brand.blue)] to-purple-600 bg-clip-text text-transparent">
              Tools &amp; Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leverage cutting-edge tools and frameworks specifically designed for gaming 
            applications, ensuring optimal performance, engaging gameplay, and flawless user experiences.
          </p>
        </div>

        {/* Testing Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {testingTools.map((category, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center`}>
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
              </div>
              
              <div className="space-y-4">
                {category.tools.map((tool, toolIndex) => (
                  <div key={toolIndex} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
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

        {/* Platform Frameworks */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100 rounded-full px-6 py-2 mb-6">
              <FaGamepad className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-600">Platform Frameworks</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cross-Platform Gaming Validation
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive testing frameworks ensuring your games perform flawlessly 
              across all gaming platforms and devices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platformFrameworks.map((framework, index) => (
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
        <div className="mt-20 bg-gradient-to-r from-[theme(color.brand.blue)] to-purple-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Gaming Testing Stack</h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Advanced technologies and methodologies for comprehensive gaming application validation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaDesktop className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">PC Gaming</h4>
              <p className="text-blue-100">Steam, Epic Games, and standalone validation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaMobile className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Mobile Gaming</h4>
              <p className="text-blue-100">iOS App Store and Google Play optimization</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaVrCardboard className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">AR/VR Gaming</h4>
              <p className="text-blue-100">Immersive experience and comfort testing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamingToolsFrameworkSection;

