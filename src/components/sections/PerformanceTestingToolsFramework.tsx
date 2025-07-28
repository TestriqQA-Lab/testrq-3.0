"use client";

import React, { useState } from "react";
import { FaTachometerAlt, FaChartLine, FaServer, FaCloud, FaCogs, FaNetworkWired } from "react-icons/fa";

const PerformanceTestingToolsFramework: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("load-testing-tools");

  const toolCategories = [
    {
      id: "load-testing-tools",
      title: "Load Testing Tools",
      icon: <FaTachometerAlt className="text-2xl" />,
      color: "blue",
      description: "Advanced load testing tools for comprehensive performance validation",
      tools: [
        { name: "Apache JMeter", description: "Open-source load testing tool", logo: "⚡" },
        { name: "LoadRunner", description: "Enterprise performance testing platform", logo: "🏃" },
        { name: "Gatling", description: "High-performance load testing framework", logo: "🎯" },
        { name: "K6", description: "Modern load testing tool for developers", logo: "📊" },
        { name: "BlazeMeter", description: "Cloud-based performance testing", logo: "🔥" },
        { name: "WebLOAD", description: "Enterprise load testing solution", logo: "🌐" }
      ]
    },
    {
      id: "monitoring-tools",
      title: "Monitoring & Analytics",
      icon: <FaChartLine className="text-2xl" />,
      color: "green",
      description: "Real-time monitoring and performance analytics tools",
      tools: [
        { name: "New Relic", description: "Application performance monitoring", logo: "📈" },
        { name: "AppDynamics", description: "Business performance monitoring", logo: "📊" },
        { name: "Dynatrace", description: "AI-powered performance monitoring", logo: "🤖" },
        { name: "Datadog", description: "Cloud monitoring and analytics", logo: "🐕" },
        { name: "Splunk", description: "Machine data analytics platform", logo: "🔍" },
        { name: "Grafana", description: "Open-source monitoring and observability", logo: "📋" }
      ]
    },
    {
      id: "infrastructure-tools",
      title: "Infrastructure Testing",
      icon: <FaServer className="text-2xl" />,
      color: "purple",
      description: "Infrastructure and system performance testing tools",
      tools: [
        { name: "Nagios", description: "Infrastructure monitoring system", logo: "🖥️" },
        { name: "Zabbix", description: "Enterprise monitoring solution", logo: "👁️" },
        { name: "PRTG", description: "Network monitoring software", logo: "🌐" },
        { name: "SolarWinds", description: "IT infrastructure monitoring", logo: "☀️" },
        { name: "Pingdom", description: "Website performance monitoring", logo: "📡" },
        { name: "Site24x7", description: "Full-stack monitoring platform", logo: "🔧" }
      ]
    },
    {
      id: "cloud-platforms",
      title: "Cloud Performance",
      icon: <FaCloud className="text-2xl" />,
      color: "orange",
      description: "Cloud-based performance testing and monitoring platforms",
      tools: [
        { name: "AWS CloudWatch", description: "Amazon cloud monitoring service", logo: "☁️" },
        { name: "Azure Monitor", description: "Microsoft cloud monitoring", logo: "🔷" },
        { name: "Google Cloud Monitoring", description: "Google cloud observability", logo: "🌐" },
        { name: "LoadNinja", description: "Cloud-based load testing", logo: "🥷" },
        { name: "Flood.io", description: "Performance testing in the cloud", logo: "🌊" },
        { name: "Loader.io", description: "Cloud-based load testing service", logo: "⚡" }
      ]
    },
    {
      id: "automation-frameworks",
      title: "Automation Frameworks",
      icon: <FaCogs className="text-2xl" />,
      color: "teal",
      description: "Performance test automation and CI/CD integration frameworks",
      tools: [
        { name: "Jenkins", description: "CI/CD automation server", logo: "👨‍💼" },
        { name: "GitLab CI", description: "Built-in CI/CD for GitLab", logo: "🦊" },
        { name: "Azure DevOps", description: "Microsoft DevOps platform", logo: "🔷" },
        { name: "TeamCity", description: "JetBrains CI/CD server", logo: "🏗️" },
        { name: "Bamboo", description: "Atlassian CI/CD solution", logo: "🎋" },
        { name: "CircleCI", description: "Continuous integration platform", logo: "⭕" }
      ]
    },
    {
      id: "network-tools",
      title: "Network Performance",
      icon: <FaNetworkWired className="text-2xl" />,
      color: "indigo",
      description: "Network performance testing and analysis tools",
      tools: [
        { name: "Wireshark", description: "Network protocol analyzer", logo: "🦈" },
        { name: "iperf3", description: "Network bandwidth testing tool", logo: "📶" },
        { name: "NetWorx", description: "Network usage monitoring", logo: "📊" },
        { name: "PRTG Network Monitor", description: "Network monitoring solution", logo: "🌐" },
        { name: "SolarWinds NPM", description: "Network performance monitor", logo: "☀️" },
        { name: "ThousandEyes", description: "Network intelligence platform", logo: "👁️" }
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
            Performance Testing <span className="text-brand-blue">Tools & Frameworks</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We leverage industry-leading performance testing tools and frameworks such as Apache JMeter, Gatling, K6, Prometheus, New Relic, and Grafana to deliver comprehensive, accurate, and efficient performance validation that ensures optimal application performance, speed, and scalability across all environments.

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
        <div className="mt-16 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Performance Testing Methodology</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We follow proven methodologies and best practices to ensure comprehensive performance testing that optimizes application speed, scalability, and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Load Simulation</h4>
              <p className="text-sm text-gray-600">Realistic user load simulation covering all performance scenarios</p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Real-time Monitoring</h4>
              <p className="text-sm text-gray-600">Continuous performance monitoring with advanced analytics</p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">🔍</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Bottleneck Analysis</h4>
              <p className="text-sm text-gray-600">Systematic identification and analysis of performance bottlenecks</p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Optimization</h4>
              <p className="text-sm text-gray-600">Actionable recommendations for performance optimization</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceTestingToolsFramework;

