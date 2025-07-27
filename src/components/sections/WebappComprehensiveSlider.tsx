"use client";

import { JSX, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaUsers,
  FaMobileAlt,
  FaPlug,
} from "react-icons/fa";

type FeatureSet = {
  title: string;
  subtitle: string;
  description: string;
  icon: string | JSX.Element;
  stats: { label: string; value: string }[];
  processLabel?: string;
  processDescription?: string;
  progress?: string;
  features: string[];
  bgColor?: string;
  elColor?: string;
  theme?: string;
  btnText?: string;
  learnMoreLabel?: string;
};

const testingServices: FeatureSet[] = [
  {
    title: "Security Testing",
    subtitle: "Vulnerability Assessment",
    description:
      "Identify vulnerabilities and security flaws to protect your web application from threats, data breaches, and malicious attacks through comprehensive security testing and robust data protection validation.",
    icon: "🛡️",
    stats: [
      { label: "Tests Run", value: "200+" },
      { label: "Coverage", value: "99%" },
      { label: "Days", value: "4-5" },
    ],
    processLabel: "Security Testing Process",
    processDescription: "Comprehensive security testing workflow",
    progress: "99%",
    features: [
      "Penetration Testing",
      "Authentication Testing",
      "SQL Injection Testing",
      "Vulnerability Assessment",
      "Data Protection Validation",
      "XSS Prevention Testing",
    ],
    bgColor: "bg-blue-100/80",
    elColor: "bg-blue-400",
    btnText: "Learn More About Security Testing",
  },
  {
    title: "Performance Testing",
    subtitle: "Speed & Scalability Optimization",
    description:
      "Evaluate your web application's speed, scalability, and stability under various load conditions and user scenarios to ensure optimal performance and user experience.",
    icon: "🚀",
    stats: [
      { label: "Tests Run", value: "300+" },
      { label: "Coverage", value: "95%" },
      { label: "Days", value: "3-4" },
    ],
    processLabel: "Performance Testing Process",
    processDescription: "Comprehensive performance testing workflow",
    progress: "95%",
    features: [
      "Load Testing",
      "Volume Testing",
      "Memory Leak Detection",
      "Stress Testing",
      "Scalability Analysis",
      "Response Time Optimization",
    ],
    bgColor: "bg-green-100/80",
    elColor: "bg-green-400",
    btnText: "Learn More About Performance Testing",
  },
  {
    title: "Usability Testing",
    subtitle: "User Experience Optimization",
    description:
      "Ensure your web application provides an intuitive and engaging user experience across all user personas, devices, and interaction patterns for maximum user satisfaction.",
    features: [
      "User Experience Testing",
      "Navigation Testing",
      "User Journey Validation",
      "Accessibility Testing",
      "Content Testing",
      "A/B Testing Support",
    ],
    stats: [
      { label: "Tests Run", value: "150+" },
      { label: "Coverage", value: "92%" },
      { label: "Days", value: "2-3" },
    ],
    processLabel: "Performance Testing Process",
    processDescription: "Comprehensive performance testing workflow",
    progress: "92%",
    icon: <FaUsers />,
    bgColor: "bg-yellow-100/80",
    elColor: "bg-yellow-400",
    btnText: "Learn More About Usability Testing",
  },
  {
    title: "Responsive Testing",
    subtitle: "Multi-device Compatibility",
    description:
      "Verify that your web application works flawlessly across all devices, screen sizes, orientations, and touch interfaces for consistent user experiences everywhere.",
    features: [
      "Mobile Responsiveness",
      "Desktop Optimization",
      "Orientation Testing",
      "Tablet Compatibility",
      "Touch Interface Testing",
      "Browser Compatibility",
    ],
    stats: [
      { label: "Tests Run", value: "400+" },
      { label: "Coverage", value: "96%" },
      { label: "Days", value: "1-2" },
    ],
    processLabel: "Performance Testing Process",
    processDescription: "Comprehensive performance testing workflow",
    progress: "96%",
    icon: <FaMobileAlt />,
    bgColor: "bg-purple-100/80",
    elColor: "bg-purple-400",
    btnText: "Learn More About Responsive Testing",
  },
  {
    title: "Integration Testing",
    subtitle: "Seamless System Integration",
    description:
      "Test the seamless integration between different modules, third-party services, external APIs, and system components to ensure smooth data flow and functionality.",
    features: [
      "API Integration Testing",
      "Database Integration",
      "Microservices Testing",
      "Third-party Services",
      "System Integration",
      "Data Flow Validation",
    ],
    stats: [
      { label: "Tests Run", value: "250+" },
      { label: "Coverage", value: "94%" },
      { label: "Days", value: "3-4" },
    ],
    processLabel: "Performance Testing Process",
    processDescription: "Comprehensive performance testing workflow",
    progress: "94%",
    icon: <FaPlug />,
    bgColor: "bg-red-100/80",
    elColor: "bg-red-400",
    btnText: "Learn More About Integration Testing",
  },
];

export default function ComprehensiveTestingSlider() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testingServices.length);
  const prev = () =>
    setIndex(
      (prev) => (prev - 1 + testingServices.length) % testingServices.length
    );

  const current = testingServices[index];

  return (
    <div className="relative px-8 md:px-12 lg:px-24 py-16 w-full mx-auto bg-[theme(color.background.gray)]">
      <div
        className={`rounded-3xl p-8 md:p-12 text-black transition-all duration-300 ${current.bgColor}`}
      >
        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={prev}
            className="w-10 h-10 flex items-center justify-center bg-black/20 rounded-full hover:bg-white/30"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {testingServices.map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  i === index ? "bg-gray-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/30"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
          {/* Left Column */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center text-3xl">
                {current.icon}
              </div>
              <div>
                <h2 className="text-3xl font-bold">{current.title}</h2>
                <p className="text-lg text-black/80">{current.subtitle}</p>
              </div>
            </div>

            <p className="mb-6 text-black/90">{current.description}</p>

            <ul className="grid grid-cols-2 gap-2 text-sm list-disc list-inside">
              {current.features.map((feat, i) => (
                <li key={i}>{feat}</li>
              ))}
            </ul>

            <button className="mt-6 bg-white text-black font-semibold px-6 py-3 rounded-xl">
              {current.btnText || current.learnMoreLabel}
            </button>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="rounded-xl p-6 bg-white/10">
              <h4 className="text-xl font-bold mb-4">Service Statistics</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {current.stats.map((stat, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-center sm:text-left">
                    <div className="text-3xl font-bold text-black">{stat.value}</div>
                    <div className="text-sm text-black/80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>


            {current.processLabel && current.progress && (
              <div className="rounded-xl p-6 bg-white/10">
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-2xl">{current.icon}</div>
                  <div>
                    <h4 className="font-semibold text-lg">
                      {current.processLabel}
                    </h4>
                    <p className="text-sm text-black/80">
                      {current.processDescription}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{current.progress}</span>
                  </div>
                  <div className="w-full h-3 bg-white/80 rounded-full mt-1">
                    <div
                      className={`h-3 rounded-full ${current.elColor}`} // Use the pre-defined class name
                      style={{ width: current.progress }}
                    ></div>
                  </div>
                </div>

              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
