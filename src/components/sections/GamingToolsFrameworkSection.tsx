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
      color: "text-[theme(color.brand.blue)]",
      bgColor: "bg-blue-50",
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
      color: "text-[theme(color.brand.blue)]",
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
      color: "text-[theme(color.brand.blue)]",
      bgColor: "bg-blue-50",
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
      color: "text-[theme(color.brand.blue)]",
      bgColor: "bg-blue-50",
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
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[theme(color.brand.blue)] text-white bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaTools className="w-4 h-4" />
            <span className="text-sm">Tools & Frameworks</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Advanced Gaming Testing
            <span className="block text-brand-blue">
              Tools & Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leverage cutting-edge game testing tools and frameworks specifically designed for gaming applications, ensuring optimized game performance, immersive gameplay, and flawless gaming experiences across all platforms.

          </p>
        </div>

        {/* Testing Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testingTools.map((category, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group ring-1 ring-brand-blue hover:ring-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
              </div>
              
              <div className="space-y-4">
                {category.tools.map((tool, toolIndex) => (
                  <div key={toolIndex} className="flex items-start gap-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
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
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-6 py-2 mb-6">
              <FaGamepad className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-green-600">Platform Frameworks</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cross-Platform Gaming Validation
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive game testing frameworks ensuring your games deliver flawless performance across all gaming platforms and devices, including mobile, console, PC, and browser-based environments.

            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platformFrameworks.map((framework, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl p-6 hover:ring-2 hover:ring-brand-blue transition-all duration-300">
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
        <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Gaming Testing Stack</h3>
            <p className=" text-lg max-w-2xl mx-auto">
              Advanced technologies and methodologies for comprehensive gaming application validation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaDesktop className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">PC Gaming</h4>
              <p>Steam, Epic Games, and standalone validation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaMobile className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Mobile Gaming</h4>
              <p>iOS App Store and Google Play optimization</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaVrCardboard className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">AR/VR Gaming</h4>
              <p>Immersive experience and comfort testing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamingToolsFrameworkSection;