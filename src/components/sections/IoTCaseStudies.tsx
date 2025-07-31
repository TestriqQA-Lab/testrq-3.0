"use client";

import React, { useState } from "react";
import {
  FaArrowRight,
  FaChartLine,
  FaShieldAlt,
  FaClock,
  FaCheckCircle,
  FaWifi,
  FaRocket,
  FaTrophy,
} from "react-icons/fa";

const IoTCaseStudies: React.FC = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      company: "Smart Home Technologies",
      industry: "Consumer IoT",
      challenge: "Multi-Protocol Device Integration",
      solution:
        "Comprehensive IoT testing across WiFi, Zigbee, and Z-Wave protocols with seamless device interoperability validation.",
      results: {
        connectivity: "99.9% device connectivity",
        interoperability: "100% protocol compatibility",
        performance: "60% faster response times",
        reliability: "95% reduction in connection drops",
      },
      metrics: [
        {
          label: "IoT Devices Tested",
          value: "150+",
          icon: <FaWifi className="w-4 h-4" />,
        },
        {
          label: "Protocols Validated",
          value: "8",
          icon: <FaShieldAlt className="w-4 h-4" />,
        },
        {
          label: "Response Improvement",
          value: "60%",
          icon: <FaRocket className="w-4 h-4" />,
        },
        {
          label: "Uptime Achieved",
          value: "99.9%",
          icon: <FaClock className="w-4 h-4" />,
        },
      ],
      testimonial:
        "Testriq's IoT testing expertise helped us create a truly seamless smart home ecosystem. Their multi-protocol testing approach was exactly what we needed.",
      author: "David Kim, Product Manager",
      color: "teal",
      gradient: "from-teal-500 to-teal-600",
      icon: "🏠",
    },
    {
      id: 2,
      company: "Industrial Automation Corp",
      industry: "Industrial IoT",
      challenge: "Factory Floor IoT Security",
      solution:
        "End-to-end security testing of industrial IoT sensors and controllers with comprehensive vulnerability assessment.",
      results: {
        security: "100% vulnerability resolution",
        compliance: "ISO 27001 certification",
        efficiency: "40% improved operational efficiency",
        downtime: "80% reduction in system downtime",
      },
      metrics: [
        {
          label: "Industrial Sensors",
          value: "500+",
          icon: <FaWifi className="w-4 h-4" />,
        },
        {
          label: "Security Tests",
          value: "300+",
          icon: <FaShieldAlt className="w-4 h-4" />,
        },
        {
          label: "Efficiency Gain",
          value: "40%",
          icon: <FaChartLine className="w-4 h-4" />,
        },
        {
          label: "Downtime Reduction",
          value: "80%",
          icon: <FaCheckCircle className="w-4 h-4" />,
        },
      ],
      testimonial:
        "The industrial IoT security testing provided by Testriq gave us confidence in our factory automation systems. Outstanding security expertise!",
      author: "Maria Santos, Operations Director",
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
      icon: "🏭",
    },
    {
      id: 3,
      company: "Healthcare Monitoring Systems",
      industry: "Healthcare IoT",
      challenge: "Medical Device Compliance & Reliability",
      solution:
        "Specialized healthcare IoT testing with FDA compliance validation and patient safety assessment for wearable medical devices.",
      results: {
        compliance: "100% FDA compliance",
        accuracy: "99.8% sensor accuracy",
        reliability: "24/7 continuous monitoring",
        safety: "Zero safety incidents",
      },
      metrics: [
        {
          label: "Medical Devices",
          value: "75+",
          icon: <FaShieldAlt className="w-4 h-4" />,
        },
        {
          label: "Compliance Tests",
          value: "150+",
          icon: <FaCheckCircle className="w-4 h-4" />,
        },
        {
          label: "Sensor Accuracy",
          value: "99.8%",
          icon: <FaChartLine className="w-4 h-4" />,
        },
        {
          label: "Monitoring Uptime",
          value: "24/7",
          icon: <FaClock className="w-4 h-4" />,
        },
      ],
      testimonial:
        "Testriq's healthcare IoT testing ensured our wearable devices meet the highest medical standards. Their expertise in regulatory compliance is unmatched.",
      author: "Dr. Jennifer Walsh, Chief Technology Officer",
      color: "red",
      gradient: "from-red-500 to-red-600",
      icon: "🏥",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-white to-teal-50 py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaTrophy />
            <span className="text-sm">
              Success Stories
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            IoT Testing{" "}
            <span className="text-[theme(color.brand.blue)]">
              Success Stories
            </span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Discover how our comprehensive IoT testing services have helped
            companies achieve remarkable improvements in connectivity, security,
            and device reliability.
          </p>
        </div>

        {/* Interactive IoT Device Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {caseStudies.map((study, index) => (
            <button
              key={index}
              onClick={() => setActiveCase(index)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 relative ${activeCase === index
                  ? `bg-gradient-to-r ${study.gradient} text-white shadow-lg`
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 shadow-md"
                }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{study.icon}</span>
                <div className="text-left">
                  <div className="text-sm font-bold">{study.company}</div>
                  <div
                    className={`text-xs ${activeCase === index ? "text-white/80" : "text-gray-500"
                      }`}
                  >
                    {study.industry}
                  </div>
                </div>
              </div>

              {/* IoT Connection Indicator */}
              <div
                className={`absolute top-2 right-2 w-2 h-2 rounded-full ${activeCase === index
                    ? "bg-white animate-pulse"
                    : `bg-${study.color}-500`
                  }`}
              ></div>
            </button>
          ))}
        </div>

        {/* Active IoT Case Study Display */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - IoT Case Study Content */}
            <div className="space-y-6">
              <div className="flex items-center">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${caseStudies[activeCase].gradient} text-white flex items-center justify-center text-2xl mr-4 shadow-lg relative`}
                >
                  {caseStudies[activeCase].icon}
                  <div className="absolute inset-0 rounded-2xl border-2 border-white/30 animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {caseStudies[activeCase].company}
                  </h3>
                  <p
                    className={`text-${caseStudies[activeCase].color}-600 font-semibold flex items-center`}
                  >
                    <FaWifi className="w-4 h-4 mr-2" />
                    {caseStudies[activeCase].industry}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <div
                    className={`w-2 h-2 bg-${caseStudies[activeCase].color}-500 rounded-full mr-2`}
                  ></div>
                  IoT Challenge:
                </h4>
                <p className="text-gray-700 mb-4">
                  {caseStudies[activeCase].challenge}
                </p>

                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <div
                    className={`w-2 h-2 bg-${caseStudies[activeCase].color}-500 rounded-full mr-2`}
                  ></div>
                  IoT Solution:
                </h4>
                <p className="text-gray-700 mb-6">
                  {caseStudies[activeCase].solution}
                </p>
              </div>

              {/* IoT Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                {caseStudies[activeCase].metrics.map((metric, index) => (
                  <div
                    key={index}
                    className={`p-4 bg-gradient-to-r from-${caseStudies[activeCase].color}-50 to-${caseStudies[activeCase].color}-100 rounded-lg border border-${caseStudies[activeCase].color}-200 relative`}
                  >
                    <div className="flex items-center mb-2 ">
                      <div
                        className={`text-${caseStudies[activeCase].color}-600 mr-2`}
                      >
                        {metric.icon}
                      </div>
                      <div
                        className={`text-${caseStudies[activeCase].color}-800 font-bold text-lg`}
                      >
                        {metric.value}
                      </div>
                    </div>
                    <div className="text-gray-700 text-sm font-medium">
                      {metric.label}
                    </div>
                    <div
                      className={`absolute top-2 right-2 w-1.5 h-1.5 bg-${caseStudies[activeCase].color}-500 rounded-full animate-pulse`}
                    ></div>
                  </div>
                ))}
              </div>

              {/* IoT Testimonial */}
              <div
                className={`bg-gradient-to-r from-${caseStudies[activeCase].color}-50 to-white p-6 rounded-xl border-l-4 border-${caseStudies[activeCase].color}-500 relative`}
              >
                <div
                  className={`absolute top-4 right-4 w-3 h-3 bg-${caseStudies[activeCase].color}-500 rounded-full animate-ping opacity-50`}
                ></div>
                <blockquote className="text-gray-700 italic mb-3">
                  &quot;{caseStudies[activeCase].testimonial}&quot;
                </blockquote>
                <cite
                  className={`text-${caseStudies[activeCase].color}-600 font-semibold text-sm flex items-center`}
                >
                  <FaCheckCircle className="w-4 h-4 mr-2" />—{" "}
                  {caseStudies[activeCase].author}
                </cite>
              </div>
            </div>

            {/* Right Side - IoT Results Visualization */}
            <div className="space-y-6">
              <div
                className={`bg-gradient-to-br from-${caseStudies[activeCase].color}-50 to-${caseStudies[activeCase].color}-100 p-8 rounded-2xl border border-${caseStudies[activeCase].color}-200 relative`}
              >
                <h4 className="font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
                  <FaWifi className="w-5 h-5 mr-2" />
                  IoT Results Achieved
                </h4>

                <div className="space-y-4">
                  {Object.entries(caseStudies[activeCase].results).map(
                    ([key, value], index) => (
                      <div
                        key={index}
                        className="bg-white p-4 rounded-lg shadow-md relative"
                      >
                        <div className="flex justify-between items-center mb-2 flex-col xl:flex-row">
                          <span className="font-semibold text-gray-700 capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </span>
                          <span
                            className={`text-${caseStudies[activeCase].color}-600 font-bold`}
                          >
                            {value}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`bg-gradient-to-r ${caseStudies[activeCase].gradient} h-2 rounded-full animate-pulse`}
                            style={{ width: `${85 + index * 5}%` }}
                          ></div>
                        </div>
                        <div
                          className={`absolute top-2 right-2 w-1 h-1 bg-${caseStudies[activeCase].color}-500 rounded-full animate-pulse`}
                        ></div>
                      </div>
                    )
                  )}
                </div>

                {/* IoT Success Badge */}
                <div className="text-center mt-6">
                  <div
                    className={`inline-flex items-center gap-2 bg-${caseStudies[activeCase].color}-600 text-white px-4 py-2 rounded-full font-semibold`}
                  >
                    <FaCheckCircle className="w-4 h-4" />
                    <span>IoT Success</span>
                  </div>
                </div>

                {/* IoT Connection Pattern */}
                <div className="absolute top-4 right-4 opacity-20">
                  <div
                    className={`w-3 h-3 bg-${caseStudies[activeCase].color}-500 rounded-full animate-ping`}
                  ></div>
                </div>
              </div>

              {/* IoT Device Network Visualization */}
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                  <FaWifi className="w-4 h-4 mr-2" />
                  IoT Network Topology
                </h4>
                <div className="relative">
                  {/* Central Hub */}
                  <div className="flex justify-center mb-4">
                    <div
                      className={`w-8 h-8 bg-${caseStudies[activeCase].color}-500 rounded-full flex items-center justify-center text-white text-xs font-bold`}
                    >
                      HUB
                    </div>
                  </div>

                  {/* Connected Devices */}
                  <div className="grid grid-cols-4 gap-2">
                    {["📱", "💡", "🔒", "🌡️"].map((device, index) => (
                      <div key={index} className="text-center">
                        <div className="text-lg mb-1">{device}</div>
                        <div
                          className={`w-2 h-2 bg-${caseStudies[activeCase].color}-400 rounded-full mx-auto animate-pulse`}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* IoT Navigation */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() =>
              setActiveCase(
                activeCase > 0 ? activeCase - 1 : caseStudies.length - 1
              )
            }
            className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300"
          >
            <FaArrowRight className="w-4 h-4 transform rotate-180" />
            <span>Previous IoT Case</span>
          </button>
          <button
            onClick={() =>
              setActiveCase(
                activeCase < caseStudies.length - 1 ? activeCase + 1 : 0
              )
            }
            className="flex items-center gap-2 px-6 py-3 bg-[theme(color.brand.blue)] text-white rounded-lg font-semibold hover:bg-blue-400 transition-colors duration-300"
          >
            <span>Next IoT Case</span>
            <FaArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default IoTCaseStudies;
