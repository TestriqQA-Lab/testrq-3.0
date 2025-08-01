"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaRobot,
  FaShieldAlt,
  FaCog,
  FaChartLine,
  FaUsers,
  FaClock,
  FaAward,
} from "react-icons/fa";

const RoboticWhyChooseTestriq: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const reasons = [
    {
      icon: <FaRobot className="w-8 h-8" />,
      title: "Robotic Testing Experts",
      description:
        "Our team includes certified experts in robotic quality assurance and testing professionals with extensive experience in industrial and service robotics.",
      achievement: "300+ Robots Tested",
      capabilities: [
        "Industrial Robotics",
        "Service Robots",
        "Autonomous Systems",
        "Robotic Arms",
      ],
      color: "blue",
      bgGradient: "from-blue-500 to-blue-600",
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Safety First Approach",
      description:
        "Advanced safety testing protocols to ensure your robotic systems meet the highest safety standards and regulations.",
      achievement: "Zero Safety Incidents",
      capabilities: [
        "Safety Validation",
        "Risk Assessment",
        "Compliance Testing",
        "Emergency Protocols",
      ],
      color: "green",
      bgGradient: "from-green-500 to-green-600",
    },
    {
      icon: <FaCog className="w-8 h-8" />,
      title: "Precision Testing",
      description:
        "State-of-the-art testing equipment and methodologies to validate robotic precision and performance.",
      achievement: "±0.1mm Precision",
      capabilities: [
        "Movement Precision",
        "Sensor Accuracy",
        "Performance Testing",
        "Quality Validation",
      ],
      color: "purple",
      bgGradient: "from-purple-500 to-purple-600",
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Performance Optimization",
      description:
        "Comprehensive performance analysis and optimization to ensure your robots operate at peak efficiency.",
      achievement: "40% Performance Boost",
      capabilities: [
        "Speed Optimization",
        "Efficiency Testing",
        "Load Analysis",
        "Endurance Testing",
      ],
      color: "orange",
      bgGradient: "from-orange-500 to-orange-600",
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Dedicated Support",
      description:
        "24/7 support from our robotic testing specialists who understand your unique robotic challenges.",
      achievement: "24/7 Support",
      capabilities: [
        "Expert Consultation",
        "Technical Support",
        "Maintenance Guidance",
        "Training Programs",
      ],
      color: "red",
      bgGradient: "from-red-500 to-red-600",
    },
    {
      icon: <FaClock className="w-8 h-8" />,
      title: "Rapid Testing Cycles",
      description:
        "Fast and efficient robotic testing processes with comprehensive reporting and quick turnaround times.",
      achievement: "72hr Turnaround",
      capabilities: [
        "Rapid Testing",
        "Quick Reports",
        "Fast Validation",
        "Efficient Processes",
      ],
      color: "teal",
      bgGradient: "from-teal-500 to-teal-600",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "text-blue-600 bg-blue-50 border-blue-200",
      green: "text-green-600 bg-green-50 border-green-200",
      purple: "text-purple-600 bg-purple-50 border-purple-200",
      orange: "text-orange-600 bg-orange-50 border-orange-200",
      red: "text-red-600 bg-red-50 border-red-200",
      teal: "text-teal-600 bg-teal-50 border-teal-200",
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaAward />
            <span className="text-sm">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Testriq for{" "}
            <span className="text-brand-blue">Robotic Testing</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We combine robotic expertise with testing excellence to deliver
            robotic testing services that ensure reliable, safe, and
            high-performance robotic systems for your applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card */}
              <div
                className={`bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-500 transform ${
                  hoveredCard === index
                    ? `scale-105 shadow-2xl ${
                        getColorClasses(reason.color).split(" ")[2]
                      }`
                    : "border-gray-200 hover:shadow-xl"
                }`}
              >
                {/* Icon and Achievement Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`p-4 rounded-xl transition-all duration-300 ${
                      hoveredCard === index
                        ? `bg-gradient-to-r ${reason.bgGradient} text-white shadow-lg`
                        : getColorClasses(reason.color)
                    }`}
                  >
                    {reason.icon}
                  </div>

                  <div
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
                      hoveredCard === index
                        ? `bg-gradient-to-r ${reason.bgGradient} text-white`
                        : getColorClasses(reason.color)
                    }`}
                  >
                    {reason.achievement}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {reason.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {reason.description}
                </p>

                {/* Capabilities */}
                <div
                  className={`transition-all duration-500 ${
                    hoveredCard === index
                      ? "opacity-100 max-h-40"
                      : "opacity-0 max-h-0 overflow-hidden"
                  }`}
                >
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <span
                      className={`w-3 h-3 rounded-full mr-2 bg-gradient-to-r ${reason.bgGradient}`}
                    ></span>
                    Robotic Capabilities:
                  </h4>

                  <div className="grid grid-cols-2 gap-2">
                    {reason.capabilities.map((capability, capIndex) => (
                      <div
                        key={capIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div
                          className={`w-2 h-2 rounded-full mr-2 bg-gradient-to-r ${reason.bgGradient}`}
                        ></div>
                        {capability}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div
                  className={`mt-6 transition-all duration-500 ${
                    hoveredCard === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r ${reason.bgGradient} text-white hover:shadow-lg transform hover:scale-105`}
                  >
                    Explore Robotic Testing
                  </button>
                </div>
              </div>

              {/* Floating Elements */}
              {hoveredCard === index && (
                <>
                  <div
                    className={`absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gradient-to-r ${reason.bgGradient} animate-ping opacity-75`}
                  ></div>
                  <div
                    className={`absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-gradient-to-r ${reason.bgGradient} animate-bounce opacity-75`}
                  ></div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Robotic Testing Excellence Network
            </h3>
            <p className="text-gray-600">
              Robotic systems and technologies we&apos;ve successfully validated
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">300+</div>
              <div className="text-gray-600">Robots Tested</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">
                99.2%
              </div>
              <div className="text-gray-600">Safety Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500 mb-2">
                ±0.1mm
              </div>
              <div className="text-gray-600">Precision</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">
                72hr
              </div>
              <div className="text-gray-600">Turnaround</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Ready to Validate Robotic Excellence?
            </h3>
            <p className="text-gray-600">
              Join 200+ companies who trust our robotic testing expertise. Get
              started with a comprehensive robotic system assessment and ensure
              your robots are reliable and safe.
            </p>
          </div>
          <Link href="/contact-us">
            <button className="bg-brand-blue cursor-pointer text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-blue transition-colors duration-300 shadow-lg">
              Get Started with Robotic Testing
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RoboticWhyChooseTestriq;
