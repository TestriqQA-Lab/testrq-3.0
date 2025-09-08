"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaNetworkWired,
  FaShieldAlt,
  FaChartLine,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const IoTProvenTestingProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      icon: <FaNetworkWired className="w-6 h-6" />,
      title: "Device & Network Analysis",
      shortTitle: "Analysis",
      description:
        "Comprehensive analysis of IoT devices, protocols, and network infrastructure to create a tailored testing strategy for optimal coverage.",
      details: [
        { id: 'spec-review', content: "IoT device specification review" },
        { id: 'topology-analysis', content: "Network topology analysis" },
        { id: 'protocol-assessment', content: "Protocol compatibility assessment" },
        { id: 'security-evaluation', content: "Security requirements evaluation" },
      ],
      color: "teal",
      gradient: "from-teal-500 to-teal-600",
      duration: "2-3 days",
    },
    {
      number: "02",
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: (
        <Link href='blog/post/data-privacy-and-security-for-e-learning-platforms-protecting-student-data-and-ensuring-compliance'>
          Security & Protocol Testing
        </Link>
      ),
      shortTitle: "Security",
      description: (
        <>
          Thorough testing of device security,{' '}
          <Link href='blog/post/device-interoperability-testing-ensuring-seamless-communication-across-iot-devices'>
            communication protocols
          </Link>, and{' '}
          <Link href='blog/post/game-security-testing-protecting-your-game-from-hacks-cheats-and-data-breaches'>
            data transmission
          </Link>{' '}
          integrity.
        </>
      ),
      details: [
        { id: 'device-auth', content: "Device authentication testing" },
        { id: 'encryption-validation', content: "Encryption protocol validation" },
        { id: 'comm-assessment', content: "Communication security assessment" },
        {
          id: 'penetration-testing', content: (
            <Link href='blog/post/device-penetration-testing'>
              Vulnerability penetration testing
            </Link>
          )
        },
      ],
      color: "red",
      gradient: "from-red-500 to-red-600",
      duration: "4-6 days",
    },
    {
      number: "03",
      icon: <FaChartLine className="w-6 h-6" />,
      title: (
        <Link href='blog/post/performance-scalability-testing-ensuring-iot-systems-handle-high-load-efficiently'>
          Performance & Scalability Testing
        </Link>
      ),
      shortTitle: "Performance",
      description:
        "Evaluate IoT system performance under various load conditions and network scenarios.",
      details: [
        { id: 'benchmarking', content: "Device performance benchmarking" },
        {
          id: 'network-load-testing', content: (
            <>Network{' '}
              <Link href='blog/post/what-is-load-testing-in-software-engineering'>
                load testing
              </Link>
            </>
          )
        },
        { id: 'scalability', content: "Scalability assessment" },
        { id: 'battery-optimization', content: "Battery life optimization" },
      ],
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
      duration: "3-5 days",
    },
    {
      number: "04",
      icon: <FaCheckCircle className="w-6 h-6" />,
      title: (
        <Link href='blog/post/final-reporting-in-qa-delivering-comprehensive-quality-summary'>
          Report & Optimization
        </Link>
      ),
      shortTitle: "Delivery",
      description:
        "Detailed reporting with actionable insights and recommendations for IoT system improvements.",
      details: [
        { id: 'comprehensive-report', content: "Comprehensive IoT test report" },
        {
          id: 'security-vuln-assessment', content: (
            <Link href='blog/post/ai-security-testing'>
              Security vulnerability assessment
            </Link>
          )
        },
        { id: 'performance-guide', content: "Performance optimization guide" },
        { id: 'deployment-recommendations', content: "Deployment recommendations" },
      ],
      color: "green",
      gradient: "from-green-500 to-green-600",
      duration: "2-3 days",
    },
  ];


  return (
    <section className="bg-gradient-to-br from-white to-teal-50 py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Proven IoT Testing{" "}
            <span className="text-[theme(color.brand.blue)]">Process</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Our systematic approach ensures end-to-end IoT testing coverage,
            delivering reliable and secure connected <Link href='blog/post/interoperability-testing-for-iot-ensuring-seamless-protocol-device-interaction'>device ecosystems</Link>.
          </p>
        </div>

        {/* Interactive IoT Network Timeline */}
        <div className="relative mb-12">
          {/* Desktop Timeline with IoT Network Visualization */}
          <div className="hidden lg:block mb-32 py-10">
            <div className="relative">
              {/* Central Hub */}
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  IoT
                </div>
              </div>

              {/* Steps arranged in a circle around the hub */}
              <div className="relative">
                {steps.map((step, index) => {
                  const angle = index * 90 - 45; // Distribute in 4 quadrants
                  const radius = 120;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;

                  return (
                    <div
                      key={index}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                      }}
                    >
                      <button
                        onClick={() => setActiveStep(index)}
                        className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold transition-all duration-300 transform hover:scale-110 ${activeStep === index
                          ? `bg-gradient-to-r ${step.gradient} shadow-lg`
                          : activeStep > index
                            ? "bg-green-500 shadow-md"
                            : "bg-gray-400"
                          }`}
                      >
                        {activeStep > index ? (
                          <FaCheckCircle className="w-5 h-5" />
                        ) : (
                          step.number
                        )}
                      </button>

                      {/* Connection Line to Center */}
                      <div
                        className={`absolute top-1/2 left-1/2 w-px h-24 origin-bottom transform -translate-x-1/2 -translate-y-full ${activeStep >= index
                          ? `bg-${step.color}-500`
                          : "bg-gray-300"
                          } transition-colors duration-300`}
                        style={{
                          transform: `translate(-50%, -100%) rotate(${angle + 180
                            }deg)`,
                          transformOrigin: "bottom center",
                        }}
                      ></div>

                      {/* Step Label */}
                      <div className="mt-4 text-center">
                        <div
                          className={`font-semibold text-sm ${activeStep === index
                            ? `text-${step.color}-600`
                            : "text-gray-600"
                            }`}
                        >
                          {step.shortTitle}
                        </div>
                        <div className="text-xs text-gray-500">
                          {step.duration}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden">
            <div className="space-y-4 mb-8">
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-full p-4 rounded-lg border-2 transition-all duration-300 ${activeStep === index
                    ? `border-${step.color}-500 bg-${step.color}-50`
                    : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-white mr-4 ${activeStep === index
                        ? `bg-gradient-to-r ${step.gradient}`
                        : "bg-gray-400"
                        }`}
                    >
                      {step.number}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-gray-900">
                        {step.title}
                      </div>
                      <div className="text-sm text-gray-500">
                        {step.duration}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Active Step Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Content */}
            <div className="space-y-6">
              <div className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${steps[activeStep].gradient} text-white flex items-center justify-center mr-4`}
                >
                  {steps[activeStep].icon}
                </div>
                <div>
                  <div
                    className={`text-${steps[activeStep].color}-600 font-semibold text-sm`}
                  >
                    Step {steps[activeStep].number}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {steps[activeStep].title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-700 text-lg">
                {steps[activeStep].description}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Key Activities:</h4>
                {steps[activeStep].details.map((detail) => (
                  <div key={detail.id} className="flex items-center">
                    <div
                      className={`w-2 h-2 bg-${steps[activeStep].color}-500 rounded-full mr-3 animate-pulse`}
                    ></div>
                    <span className="text-gray-700">{detail.content}</span>
                  </div>
                ))}

              </div>

              <div className="flex items-center justify-between gap-2 pt-4">
                <div
                  className={`bg-${steps[activeStep].color}-100 text-${steps[activeStep].color}-800 px-3 py-1 rounded-full text-sm font-semibold`}
                >
                  Duration: {steps[activeStep].duration}
                </div>

                {(
                  <button
                    onClick={() => setActiveStep((activeStep + 1) % steps.length)}
                    className={`flex items-center gap-2 px-6 py-2 bg-gradient-to-r cursor-pointer ${steps[activeStep].gradient} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300`}
                  >
                    <span>Next Step</span>
                    <FaArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Right Side - IoT Device Visualization */}
            <div className="relative">
              <div
                className={`bg-gradient-to-br from-${steps[activeStep].color}-50 to-${steps[activeStep].color}-100 p-8 rounded-2xl border border-${steps[activeStep].color}-200`}
              >
                {/* Dynamic IoT Visual Based on Active Step */}
                {activeStep === 0 && (
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-700">
                          Device Analysis
                        </span>
                        <FaNetworkWired className="text-teal-500" />
                      </div>
                      <div className="text-sm text-gray-600">
                        Mapping IoT ecosystem
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {["📱", "💡", "🔒"].map((emoji, i) => (
                        <div
                          key={i}
                          className="bg-white p-3 rounded-lg text-center shadow-md"
                        >
                          <div className="text-xl mb-1">{emoji}</div>
                          <div
                            className={`w-2 h-2 bg-teal-500 rounded-full mx-auto animate-pulse`}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeStep === 1 && (
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-md text-center">
                      <div className="text-red-600 text-4xl mb-2">🛡️</div>
                      <div className="font-semibold text-gray-700">
                        Security Testing
                      </div>
                      <div className="text-sm text-gray-600">
                        Encryption & Authentication
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold">
                          Security Score
                        </span>
                        <span className="text-red-600 font-bold">95%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-red-500 h-2 rounded-full animate-pulse"
                          style={{ width: "95%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-700">
                          Performance Test
                        </span>
                        <span className="text-blue-600 font-bold">98%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full animate-pulse"
                          style={{ width: "98%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-white p-3 rounded-lg shadow-md text-center">
                        <div className="text-blue-600 font-bold">12ms</div>
                        <div className="text-xs text-gray-600">Latency</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-md text-center">
                        <div className="text-blue-600 font-bold">99.9%</div>
                        <div className="text-xs text-gray-600">Uptime</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 3 && (
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-700">
                          IoT Report
                        </span>
                        <FaCheckCircle className="text-green-500" />
                      </div>
                      <div className="text-sm text-gray-600">
                        Comprehensive analysis ready
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md text-center">
                      <div className="text-green-600 text-3xl mb-2">📊</div>
                      <div className="font-semibold text-gray-700">
                        Optimization Guide
                      </div>
                      <div className="text-sm text-gray-600">
                        Performance & Security
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IoTProvenTestingProcess;
