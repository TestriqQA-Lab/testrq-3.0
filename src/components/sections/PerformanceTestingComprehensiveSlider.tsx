"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaUsers,
  FaChartLine,
  FaServer,
  FaCloud,
  FaBolt,
  FaFlask,
} from "react-icons/fa";

const PerformanceTestingComprehensiveSlider: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const performanceTypes = [
    {
      id: "load-testing",
      title: "Load Testing",
      icon: <FaTachometerAlt className="text-2xl" />,
      percentage: "95%",
      color: "blue",
      description:
        "Simulating expected user loads to assess application behavior and response times.",
      features: [
        "Baseline performance measurement",
        "Response time analysis",
        "Throughput and concurrency testing",
        "Resource utilization monitoring",
        "Scalability assessment",
        "Capacity planning",
      ],
      action: "/load-testing-in-performance-testing-complete-guide",
    },
    {
      id: "stress-testing",
      title: "Stress Testing",
      icon: <FaUsers className="text-2xl" />,
      percentage: "98%",
      color: "purple",
      description:
        "Pushing the application beyond its normal operational limits to determine its breaking point.",
      features: [
        "Peak load simulation",
        "Error rate analysis",
        "System stability under extreme load",
        "Recovery time measurement",
        "Bottleneck identification",
        "Failure point analysis",
      ],
      action: "/stress-testing-applications-identifying-breaking-points",
    },
    {
      id: "scalability-testing",
      title: "Scalability Testing",
      icon: <FaChartLine className="text-2xl" />,
      percentage: "92%",
      color: "green",
      description:
        "Evaluating the application's ability to scale up or down to handle increasing user demands efficiently.",
      features: [
        "Vertical and horizontal scaling assessment",
        "Performance under growing user base",
        "Resource provisioning optimization",
        "Database scalability testing",
        "Network scalability analysis",
        "Cloud infrastructure scaling",
      ],
      action: "/scalability-testing-ensuring-growth-ready-applications",
    },
    {
      id: "volume-testing",
      title: "Volume Testing",
      icon: <FaServer className="text-2xl" />,
      percentage: "96%",
      color: "orange",
      description:
        "Assessing the application's performance with large volumes of data in the database or during extensive data processing.",
      features: [
        "Database performance with large data sets",
        "Data processing efficiency",
        "Storage capacity testing",
        "Data retrieval and manipulation speed",
        "Impact of data growth on performance",
        "Data integrity under high volume",
      ],
      action: "/volume-testing-managing-high-data-loads-efficiently",
    },
    {
      id: "endurance-testing",
      title: "Endurance Testing",
      icon: <FaCloud className="text-2xl" />,
      percentage: "94%",
      color: "teal",
      description:
        "Monitoring application performance over an extended period to detect memory leaks, resource exhaustion, or degradation.",
      features: [
        "Memory leak detection",
        "Resource utilization over time",
        "Performance degradation analysis",
        "System stability over long runs",
        "Garbage collection efficiency",
        "Connection pool management",
      ],
      action: "/endurance-testing-validating-long-term-application-stability",
    },
    {
      id: "spike-testing",
      title: "Spike Testing",
      icon: <FaBolt className="text-2xl" />,
      percentage: "93%",
      color: "indigo",
      description:
        "Testing the application's behavior under sudden, sharp increases and decreases in user load to ensure stability.",
      features: [
        "Sudden load increase simulation",
        "Recovery from load spikes",
        "System responsiveness during spikes",
        "Error handling under sudden load",
        "Resource allocation during spikes",
        "Concurrency management",
      ],
      action: "/spike-testing-handling-sudden-traffic-surges",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap: {
      [key: string]: { bg: string; text: string; border: string };
    } = {
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-200",
      },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200",
      },
      green: {
        bg: "bg-green-50",
        text: "text-green-600",
        border: "border-green-200",
      },
      orange: {
        bg: "bg-orange-50",
        text: "text-orange-600",
        border: "border-orange-200",
      },
      teal: {
        bg: "bg-teal-50",
        text: "text-teal-600",
        border: "border-teal-200",
      },
      indigo: {
        bg: "bg-indigo-50",
        text: "text-indigo-600",
        border: "border-indigo-200",
      },
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaFlask />
            <span className="text-sm">Comprehensive Testing Solutions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Performance Testing{" "}
            <span className="text-brand-blue">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive performance testing services designed to
            ensure your applications are fast, scalable, and stable under any
            load. Our solutions focus on application <Link href='blog/post/performance-scalability-testing-ensuring-iot-systems-handle-high-load-efficiently'>performance, scalability
            testing</Link>, and load simulation to deliver high-speed, reliable digital
            experiences.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex flex-wrap border-b border-gray-200">
            {performanceTypes.map((type, index) => {
              const colors = getColorClasses(type.color);
              return (
                <button
                  key={type.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex-1 min-w-0 px-4 py-4 text-sm font-medium transition-all duration-300 ${
                    activeTab === index
                      ? `${colors.bg} ${colors.text} border-b-2 ${colors.border}`
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex flex-col items-center justify-center space-x-2">
                    <span
                      className={
                        activeTab === index ? colors.text : "text-gray-400"
                      }
                    >
                      {type.icon}
                    </span>
                    <span className="hidden sm:inline py-1">{type.title}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {performanceTypes.map((type, index) => {
              const colors = getColorClasses(type.color);
              return (
                <div
                  key={type.id}
                  className={`${
                    activeTab === index ? "block" : "hidden"
                  } transition-all duration-300`}
                >
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center space-x-4 mb-6">
                        <div
                          className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center`}
                        >
                          <span className={colors.text}>{type.icon}</span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {type.title}
                          </h3>
                          <div className="flex items-center space-x-2 mt-2">
                            <span className="text-sm text-gray-600">
                              Success Rate:
                            </span>
                            <span
                              className={`text-lg font-bold ${colors.text}`}
                            >
                              {type.percentage}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {type.description}
                      </p>
                      <Link
                        href={`blog/post${performanceTypes[activeTab].action}`}
                        className="bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                      >
                        Learn More
                      </Link>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Key Features & Capabilities
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        {type.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center space-x-3"
                          >
                            <div
                              className={`w-2 h-2 bg-gray-400 rounded-full`}
                            ></div>
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceTestingComprehensiveSlider;
