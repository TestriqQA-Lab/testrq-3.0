"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaMobile,
  FaShieldAlt,
  FaChartLine,
  FaAward,
} from "react-icons/fa";

const SmartDeviceWhyChooseTestriq: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const reasons = [
    {
      icon: <FaMobile className="w-8 h-8" />,
      title: "Mass Device Compatibility",
      description:
        "We ensure global compatibility beyond flagship models, validating your application across hundreds of unique hardware and OS configurations using our real device cloud.",
      achievement: "1000+ Configurations",
      capabilities: [
        "Real Device Cloud",
        "Hardware Mapping",
        "OS Dependency QA",
        "Screen Size Audit",
      ],
      color: "green",
      bgGradient: "from-green-500 to-green-600",
    },
    {
      icon: <FaAward className="w-8 h-8" />,
      title: "Compliance-First Methodology",
      description:
        "Mapping all hardware documentation to ISO 29119-3. We ensure integrity for health tech (HIPAA) and smart home devices (GDPR/SOC2) through rigorous auditing.",
      achievement: "ISO 29119-3 Certified",
      capabilities: [
        "HIPAA Compliance",
        "SOC2 Type II Audit",
        "GDPR/CCPA Data QA",
        "Result Logging Auth",
      ],
      color: "purple",
      bgGradient: "from-purple-500 to-purple-600",
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Advanced IoT Security",
      description:
        "IoT security protocols aligned with ISO 27001 and NTIA baselines. Deep penetration testing using OWASP ZAP and Burp Suite to protect unpatched firmware.",
      achievement: "Zero Firmware Risks",
      capabilities: [
        "OWASP ZAP Audits",
        "NTIA Baseline Security",
        "Penetration Testing",
        "Firmware Hardening",
      ],
      color: "red",
      bgGradient: "from-red-500 to-red-600",
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Scalable Performance",
      description:
        "Systems architected to scale without degradation. End-to-end validation for high-density device deployments and edge computing using JMeter and Gatling.",
      achievement: "1M+ Concurrent Syncs",
      capabilities: [
        "Edge Computing QA",
        "JMeter Performance",
        "High-density Loads",
        "Low Latency Audits",
      ],
      color: "blue",
      bgGradient: "from-blue-500 to-blue-600",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: "text-green-600 bg-green-50 border-green-200",
      red: "text-red-600 bg-red-50 border-red-200",
      blue: "text-blue-600 bg-blue-50 border-blue-200",
      purple: "text-purple-600 bg-purple-50 border-purple-200",
      orange: "text-orange-600 bg-orange-50 border-orange-200",
      indigo: "text-indigo-600 bg-indigo-50 border-indigo-200",
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
            <span className="text-brand-blue">Why Choose Testriq</span> for
            Smart Device Testing?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We combine smart device expertise with testing excellence to deliver{" "}
            <Link href="blog/post/smart-device-testing-services-complete-guide">
              smart device testing services
            </Link>{" "}
            that ensure{" "}
            <Link href="blog/post/how-environment-setup-shapes-reliable-web-application-testing">
              reliable
            </Link>
            , secure, and high-performance connected devices for your users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card */}
              <div
                className={`bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-500 transform ${hoveredCard === index
                  ? `scale-105 shadow-2xl ${getColorClasses(reason.color).split(" ")[2]
                  }`
                  : "border-gray-200 hover:shadow-xl"
                  }`}
              >
                {/* Icon and Achievement Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`p-4 rounded-xl transition-all duration-300 ${hoveredCard === index
                      ? `bg-gradient-to-r ${reason.bgGradient} text-white shadow-lg`
                      : getColorClasses(reason.color)
                      }`}
                  >
                    {reason.icon}
                  </div>

                  <div
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${hoveredCard === index
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
                  className={`transition-all duration-500 ${hoveredCard === index
                    ? "opacity-100 max-h-40"
                    : "opacity-0 max-h-0 overflow-hidden"
                    }`}
                >
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <span
                      className={`w-3 h-3 rounded-full mr-2 bg-gradient-to-r ${reason.bgGradient}`}
                    ></span>
                    Device Capabilities:
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
                  className={`mt-6 transition-all duration-500 ${hoveredCard === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                    }`}
                >
                  <Link
                    href="/contact-us"
                    title="Explore Smart Device Testing – Testriq QA Lab"
                    className={`inline-flex items-center justify-center w-full py-3 min-h-[44px] min-w-[44px] rounded-lg font-semibold text-white bg-gradient-to-r ${reason.bgGradient} hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                  >
                    Explore Smart Device Testing
                  </Link>
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
              Smart Device Testing Excellence Network
            </h3>
            <p className="text-gray-600">
              Connected devices and technologies we&apos;ve successfully
              validated
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">1000+</div>
              <div className="text-gray-600">Configurations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">99.8%</div>
              <div className="text-gray-600">Uptime Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500 mb-2">1M+</div>
              <div className="text-gray-600">Concurrent Syncs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">
                ISO
              </div>
              <div className="text-gray-600">29119-3 Standard</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Ready to Connect with Excellence?
            </h3>
            <p className="text-gray-600">
              Join 500+ companies who trust our smart device testing expertise.
              Get started with a comprehensive smart device assessment and
              ensure your connected devices are reliable and secure.
            </p>
          </div>
          <Link
            href="/contact-us"
            title="Get Started with Smart Device Testing – Testriq QA Lab"
            className="inline-flex items-center justify-center px-8 py-3 min-h-[44px] min-w-[44px] bg-brand-blue text-white font-semibold rounded-lg shadow-lg hover:bg-brand-blue transition-colors duration-300"
          >
            Get Started with Smart Device Testing
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SmartDeviceWhyChooseTestriq;
