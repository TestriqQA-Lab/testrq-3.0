"use client";

import React, { useState } from "react";
import {
  FaBolt,
  FaRocket,
  FaShieldAlt,
  FaUsers,
  FaChartLine,
  FaClock,
} from "react-icons/fa";

const LaunchFastWhyChooseTestriq: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const advantages = [
    {
      id: 1,
      title: "Rapid Testing Cycles",
      metric: "48hr Turnaround",
      icon: <FaBolt className="text-3xl" />,
      color: "blue",
      description:
        "Lightning-fast testing cycles designed for agile development teams who need quality without delays.",
      capabilities: [
        "Sprint-aligned testing",
        "Continuous integration",
        "Real-time feedback",
        "Parallel test execution",
      ],
    },
    {
      id: 2,
      title: "Launch Acceleration",
      metric: "3x Faster Launch",
      icon: <FaRocket className="text-3xl" />,
      color: "green",
      description:
        "Accelerate your time-to-market with optimized testing processes and agile methodologies.",
      capabilities: [
        "MVP validation",
        "Launch readiness assessment",
        "Go-to-market support",
        "Production monitoring",
      ],
    },
    {
      id: 3,
      title: "Quality Assurance",
      metric: "99.5% Success Rate",
      icon: <FaShieldAlt className="text-3xl" />,
      color: "purple",
      description:
        "Comprehensive quality assurance that ensures your product meets the highest standards at launch.",
      capabilities: [
        "Risk-based testing",
        "Quality metrics tracking",
        "Defect prevention",
        "Compliance validation",
      ],
    },
    {
      id: 4,
      title: "Agile Team Integration",
      metric: "24/7 Support",
      icon: <FaUsers className="text-3xl" />,
      color: "orange",
      description:
        "Seamless integration with your development team and agile processes for maximum efficiency.",
      capabilities: [
        "Scrum integration",
        "Daily standups",
        "Sprint planning",
        "Retrospective insights",
      ],
    },
    {
      id: 5,
      title: "Scalable Solutions",
      metric: "300+ Startups",
      icon: <FaChartLine className="text-3xl" />,
      color: "teal",
      description:
        "Testing solutions that scale with your growth from MVP to enterprise-level applications.",
      capabilities: [
        "Flexible resource allocation",
        "Technology adaptation",
        "Growth-oriented testing",
        "Enterprise readiness",
      ],
    },
    {
      id: 6,
      title: "Continuous Optimization",
      metric: "Real-time Insights",
      icon: <FaClock className="text-3xl" />,
      color: "indigo",
      description:
        "Continuous testing optimization and real-time insights for sustained product excellence.",
      capabilities: [
        "Performance monitoring",
        "Automated reporting",
        "Trend analysis",
        "Predictive insights",
      ],
    },
  ];

  const getColorClasses = (color: string, isHovered: boolean) => {
    const colorMap = {
      blue: isHovered
        ? "bg-blue-600 text-white"
        : "bg-blue-50 text-blue-600 border-blue-200",
      green: isHovered
        ? "bg-green-600 text-white"
        : "bg-green-50 text-green-600 border-green-200",
      purple: isHovered
        ? "bg-purple-600 text-white"
        : "bg-purple-50 text-purple-600 border-purple-200",
      orange: isHovered
        ? "bg-orange-600 text-white"
        : "bg-orange-50 text-orange-600 border-orange-200",
      teal: isHovered
        ? "bg-teal-600 text-white"
        : "bg-teal-50 text-teal-600 border-teal-200",
      indigo: isHovered
        ? "bg-indigo-600 text-white"
        : "bg-indigo-50 text-indigo-600 border-indigo-200",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getIconBgColor = (color: string) => {
    const colorMap = {
      blue: "bg-blue-600",
      green: "bg-green-600",
      purple: "bg-purple-600",
      orange: "bg-orange-600",
      teal: "bg-teal-600",
      indigo: "bg-indigo-600",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            <span className="text-brand-blue">Why Choose Testriq</span> for
            LaunchFast QA?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We blend rapid testing sprint expertise with agile QA methodologies to deliver LaunchFast QA services that boost your go-to-market speed while ensuring exceptional quality, reliability, and investor-ready products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {advantages.map((advantage) => (
            <div
              key={advantage.id}
              className={`p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer transform hover:scale-105 ${getColorClasses(
                advantage.color,
                hoveredCard === advantage.id
              )}`}
              onMouseEnter={() => setHoveredCard(advantage.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center text-white transition-all duration-300 ${
                    hoveredCard === advantage.id
                      ? getColorClasses(advantage.color, true)
                      : getIconBgColor(advantage.color)
                  }`}
                >
                  {advantage.icon}
                </div>
                <div className="text-right">
                  <div
                    className={`text-2xl font-bold ${
                      hoveredCard === advantage.id
                        ? "text-white"
                        : "text-gray-900"
                    }`}
                  >
                    {advantage.metric}
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3
                className={`text-xl font-bold mb-4 ${
                  hoveredCard === advantage.id ? "text-white" : "text-gray-900"
                }`}
              >
                {advantage.title}
              </h3>

              <p
                className={`mb-6 leading-relaxed ${
                  hoveredCard === advantage.id
                    ? "text-white text-opacity-90"
                    : "text-gray-600"
                }`}
              >
                {advantage.description}
              </p>

              {/* Capabilities */}
              <div className="space-y-3">
                <h4
                  className={`font-semibold ${
                    hoveredCard === advantage.id
                      ? "text-white"
                      : "text-gray-900"
                  }`}
                >
                  Key Capabilities:
                </h4>
                <div className="space-y-2">
                  {advantage.capabilities.map((capability, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          hoveredCard === advantage.id
                            ? "bg-white bg-opacity-70"
                            : getIconBgColor(advantage.color)
                        }`}
                      ></div>
                      <span
                        className={`text-sm ${
                          hoveredCard === advantage.id
                            ? "text-white text-opacity-90"
                            : "text-gray-700"
                        }`}
                      >
                        {capability}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6">
                <button
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    hoveredCard === advantage.id
                      ? `bg-white bg-opacity-20 border-2 ${getColorClasses(
                          advantage.color,
                          false
                        )} border-white border-opacity-30`
                      : `${getColorClasses(
                          advantage.color,
                          false
                        )} hover:shadow-lg`
                  }`}
                >
                  Explore LaunchFast QA
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              LaunchFast QA Excellence Network
            </h3>
            <p className="text-gray-600 mb-8">
              Rapid testing methodologies and technologies we&apos;ve
              successfully implemented
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">300+</div>
                <div className="text-sm text-gray-600">Startups Launched</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">99.5%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">48hr</div>
                <div className="text-sm text-gray-600">Avg Turnaround</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Ready to Accelerate Your Launch?
          </h3>
          <p className="text-gray-600 mb-6">
            Join 300+ startups that trust our LaunchFast QA expertise. Start your journey with rapid testing sprints, pre-launch testing, and go-to-market QA to ensure on-time, successful launches.
          </p>
          <button className="bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
            Get Started with LaunchFast QA
          </button>
        </div>
      </div>
    </section>
  );
};

export default LaunchFastWhyChooseTestriq;
