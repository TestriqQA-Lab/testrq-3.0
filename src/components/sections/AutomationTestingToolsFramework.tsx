"use client";

import React, { useState } from "react";
import { FaRobot, FaMobileAlt, FaCogs, FaCloud, FaChartLine, FaCode } from "react-icons/fa";

const AutomationTestingToolsFramework: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("web-automation");

  const toolCategories = [
    {
      id: "web-automation",
      title: "Web Automation",
      icon: <FaRobot className="text-2xl" />,
      color: "blue",
      description: "Advanced web automation tools for comprehensive browser testing",
      tools: [
        { name: "Selenium WebDriver", description: "Industry-standard web automation framework", logo: "🌐" },
        { name: "Playwright", description: "Modern web testing for all browsers", logo: "🎭" },
        { name: "Cypress", description: "Fast, easy and reliable testing for web apps", logo: "🌲" },
        { name: "TestCafe", description: "Node.js tool to automate end-to-end web testing", logo: "☕" },
        { name: "Puppeteer", description: "Chrome DevTools Protocol automation", logo: "🎪" },
        { name: "WebDriverIO", description: "Next-gen browser automation framework", logo: "🚗" }
      ]
    },
    {
      id: "mobile-automation",
      title: "Mobile Automation",
      icon: <FaMobileAlt className="text-2xl" />,
      color: "green",
      description: "Comprehensive mobile testing automation tools and frameworks",
      tools: [
        { name: "Appium", description: "Cross-platform mobile automation framework", logo: "📱" },
        { name: "Espresso", description: "Android UI testing framework", logo: "☕" },
        { name: "XCUITest", description: "iOS automation testing framework", logo: "🍎" },
        { name: "Detox", description: "Gray box end-to-end testing for mobile apps", logo: "🧪" },
        { name: "Calabash", description: "Automated acceptance testing for mobile apps", logo: "🥒" },
        { name: "Robot Framework", description: "Generic automation framework for mobile", logo: "🤖" }
      ]
    },
    {
      id: "api-automation",
      title: "API Automation",
      icon: <FaCogs className="text-2xl" />,
      color: "purple",
      description: "API testing automation tools for reliable service validation",
      tools: [
        { name: "REST Assured", description: "Java library for REST API testing", logo: "🔗" },
        { name: "Postman", description: "API development and testing platform", logo: "📮" },
        { name: "Newman", description: "Command-line collection runner for Postman", logo: "🏃" },
        { name: "SoapUI", description: "Comprehensive API testing tool", logo: "🧼" },
        { name: "Karate", description: "Open-source API testing framework", logo: "🥋" },
        { name: "Insomnia", description: "API design and testing platform", logo: "😴" }
      ]
    },
    {
      id: "performance-automation",
      title: "Performance Testing",
      icon: <FaChartLine className="text-2xl" />,
      color: "orange",
      description: "Performance testing automation tools for scalability validation",
      tools: [
        { name: "JMeter", description: "Open-source performance testing tool", logo: "⚡" },
        { name: "LoadRunner", description: "Enterprise performance testing platform", logo: "🏃‍♂️" },
        { name: "K6", description: "Modern load testing tool for developers", logo: "📊" },
        { name: "Gatling", description: "High-performance load testing framework", logo: "🔫" },
        { name: "Artillery", description: "Modern, powerful load testing toolkit", logo: "💥" },
        { name: "BlazeMeter", description: "Continuous testing platform", logo: "🔥" }
      ]
    },
    {
      id: "cicd-tools",
      title: "CI/CD Integration",
      icon: <FaCode className="text-2xl" />,
      color: "teal",
      description: "Continuous integration and deployment automation tools",
      tools: [
        { name: "Jenkins", description: "Open-source automation server", logo: "👨‍💼" },
        { name: "GitHub Actions", description: "CI/CD platform integrated with GitHub", logo: "🐙" },
        { name: "Azure DevOps", description: "Microsoft's DevOps platform", logo: "🔷" },
        { name: "GitLab CI", description: "Built-in CI/CD for GitLab", logo: "🦊" },
        { name: "CircleCI", description: "Continuous integration and delivery platform", logo: "⭕" },
        { name: "TeamCity", description: "JetBrains CI/CD server", logo: "🏗️" }
      ]
    },
    {
      id: "cloud-platforms",
      title: "Cloud Platforms",
      icon: <FaCloud className="text-2xl" />,
      color: "indigo",
      description: "Cloud-based testing platforms for scalable automation",
      tools: [
        { name: "BrowserStack", description: "Real device cloud for testing", logo: "☁️" },
        { name: "Sauce Labs", description: "Continuous testing cloud", logo: "🧪" },
        { name: "LambdaTest", description: "Cross-browser testing platform", logo: "λ" },
        { name: "AWS Device Farm", description: "Mobile app testing service", logo: "📱" },
        { name: "Firebase Test Lab", description: "Google's mobile testing infrastructure", logo: "🔥" },
        { name: "Perfecto", description: "Continuous testing platform", logo: "💎" }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; border: string; hover: string } } = {
      blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", hover: "hover:bg-blue-100" },
      green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200", hover: "hover:bg-green-100" },
      purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200", hover: "hover:bg-purple-100" },
      orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200", hover: "hover:bg-orange-100" },
      teal: { bg: "bg-teal-50", text: "text-teal-600", border: "border-teal-200", hover: "hover:bg-teal-100" },
      indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200", hover: "hover:bg-indigo-100" }
    };
    return colorMap[color] || colorMap.blue;
  };

  const activeCategory_data = toolCategories.find(cat => cat.id === activeCategory);

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Automation Testing <span className="text-brand-blue">Tools & Frameworks</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We use cutting-edge automation tools and scalable frameworks to ensure reliable, efficient testing that accelerates development cycles and boosts software quality across web, mobile, API, and CI/CD environments.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Category Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-b border-gray-200">
            {toolCategories.map((category) => {
              const colors = getColorClasses(category.color);
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`p-4 text-center transition-all duration-300 ${
                    activeCategory === category.id
                      ? `${colors.bg} ${colors.text} border-b-2 ${colors.border}`
                      : `text-gray-600 ${colors.hover}`
                  }`}
                >
                  <div className="flex flex-col items-center space-y-2">
                    <span className={activeCategory === category.id ? colors.text : "text-gray-400"}>
                      {category.icon}
                    </span>
                    <span className="text-sm font-medium">{category.title}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Category Content */}
          <div className="p-8">
            {activeCategory_data && (
              <div>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{activeCategory_data.title}</h3>
                  <p className="text-gray-600 text-lg">{activeCategory_data.description}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {activeCategory_data.tools.map((tool, index) => {
                    const colors = getColorClasses(activeCategory_data.color);
                    return (
                      <div
                        key={index}
                        className={`${colors.bg} p-6 rounded-xl hover:shadow-lg transition-all duration-300 group cursor-pointer`}
                      >
                        <div className="flex items-start space-x-4">
                          <div className="text-3xl">{tool.logo}</div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors">
                              {tool.name}
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {tool.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Framework Methodology */}
        <div className="mt-16 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Automation Framework Methodology</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We follow industry best practices and proven methodologies to ensure robust, maintainable, and scalable automation solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">🏗️</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Modular Framework</h4>
              <p className="text-sm text-gray-600">Reusable components and page object model for maintainable tests</p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Data-Driven Testing</h4>
              <p className="text-sm text-gray-600">External data sources for comprehensive test coverage</p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">🔄</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Continuous Integration</h4>
              <p className="text-sm text-gray-600">Seamless integration with CI/CD pipelines for automated execution</p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">📈</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Intelligent Reporting</h4>
              <p className="text-sm text-gray-600">Comprehensive reports with actionable insights and metrics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationTestingToolsFramework;

