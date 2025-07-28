"use client";

import React, { useState } from "react";
import {
  FaCertificate,
  FaRocket,
  FaShieldAlt,
  FaChartLine,
  FaUsers,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

const ApiWhyChooseTestriq: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const benefits = [
    {
      icon: <FaCertificate className="w-8 h-8" />,
      title: "ISTQB Certified Experts",
      shortTitle: "Certified Experts",
      description:
        "Our team consists of certified API testing professionals with extensive experience in modern API technologies.",
      stats: "50+ Certified Testers",
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
      features: [
        "REST API Specialists",
        "GraphQL Experts",
        "SOAP Testing Masters",
        "Microservices Pros",
      ],
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Faster Time-to-Market",
      shortTitle: "Faster Delivery",
      description:
        "Accelerate your API development cycle with our efficient testing processes and automation expertise.",
      stats: "60% Faster Deployment",
      color: "green",
      gradient: "from-green-500 to-green-600",
      features: [
        "Automated Testing",
        "CI/CD Integration",
        "Parallel Execution",
        "Quick Feedback",
      ],
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Comprehensive Security",
      shortTitle: "Security First",
      description:
        "Advanced security testing to protect your APIs from vulnerabilities and ensure data protection.",
      stats: "100% Security Coverage",
      color: "red",
      gradient: "from-red-500 to-red-600",
      features: [
        "Penetration Testing",
        "Vulnerability Scanning",
        "Authentication Testing",
        "Data Protection",
      ],
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Performance Optimization",
      shortTitle: "Performance",
      description:
        "Identify and resolve performance bottlenecks to ensure your APIs scale efficiently under load.",
      stats: "99.9% Uptime Achieved",
      color: "purple",
      gradient: "from-purple-500 to-purple-600",
      features: [
        "Load Testing",
        "Stress Testing",
        "Bottleneck Analysis",
        "Optimization Tips",
      ],
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Dedicated Support",
      shortTitle: "24/7 Support",
      description:
        "24/7 support from our API testing specialists who understand your unique requirements and challenges.",
      stats: "24/7 Availability",
      color: "orange",
      gradient: "from-orange-500 to-orange-600",
      features: [
        "Expert Consultation",
        "Real-time Support",
        "Issue Resolution",
        "Best Practices",
      ],
    },
    {
      icon: <FaClock className="w-8 h-8" />,
      title: "Quick Turnaround",
      shortTitle: "Quick Results",
      description:
        "Fast and efficient testing cycles with detailed reporting and actionable recommendations.",
      stats: "24hr Average Response",
      color: "teal",
      gradient: "from-teal-500 to-teal-600",
      features: [
        "Rapid Testing",
        "Quick Reports",
        "Fast Feedback",
        "Agile Process",
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Testriq for{" "}
            <span className="text-[theme(color.brand.blue)]">API Testing</span>?
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            We combine technical expertise with business understanding to deliver API testing services that ensure reliable, secure, and high-performance integrations for your applications.
          </p>
        </div>

        {/* Interactive Hexagonal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                hoveredCard === index ? "z-10" : ""
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Main Card */}
              <div
                className={`relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 group ${
                  hoveredCard === index ? "shadow-2xl" : "hover:shadow-xl"
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Header */}
                <div
                  className={`bg-gradient-to-r ${benefit.gradient} p-6 text-white relative overflow-hidden`}
                >
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        {benefit.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-white/80 text-xs font-medium">
                          Success Rate
                        </div>
                        <div className="text-white font-bold text-sm">
                          {benefit.stats}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-white/90 text-sm">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Animated Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <div className="w-full h-full rounded-full border-4 border-white animate-spin"></div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 text-sm">
                      Key Features:
                    </h4>
                    {benefit.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        {/* SAFELIST color classes or pass full class */}
                        <div
                          className={`w-2 h-2 rounded-full mr-3 animate-pulse`}
                          style={{
                            backgroundColor: `var(--tw-color-${benefit.color}-500)`,
                          }}
                        ></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Overlay */}
                <div
                  className={`absolute inset-0 z-10 bg-gradient-to-r ${
                    benefit.gradient
                  }
      transition-opacity duration-500 ease-in-out flex items-center justify-center
      ${hoveredCard === index ? "opacity-100 visible" : "opacity-0 invisible"}`}
                >
                  <div className="text-center text-white p-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm relative">
                      {React.cloneElement(benefit.icon, {
                        className: "w-8 h-8",
                      })}
                      <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping"></div>
                    </div>
                    <h3 className="text-xl font-bold mb-3">
                      {benefit.shortTitle}
                    </h3>
                    <p className="text-white/90 mb-4 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                    <button className="flex items-center gap-2 mx-auto bg-white/20 text-white px-4 py-2 rounded-lg font-semibold hover:bg-white/30 transition-colors duration-300 backdrop-blur-sm">
                      <span>Learn More</span>
                      <FaArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-700 text-sm">APIs Tested</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                99.8%
              </div>
              <div className="text-gray-700 text-sm">Bug Detection</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                24hr
              </div>
              <div className="text-gray-700 text-sm">Avg Response</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">
                100%
              </div>
              <div className="text-gray-700 text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-[theme(color.brand.blue)] to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join 200+ companies who trust our API testing expertise. Get
              started with a comprehensive API assessment and see why we&apos;re the
              preferred choice.
            </p>
            <button className="bg-white text-[theme(color.brand.blue)] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg transform hover:scale-105">
              Get Started with API Testing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiWhyChooseTestriq;
