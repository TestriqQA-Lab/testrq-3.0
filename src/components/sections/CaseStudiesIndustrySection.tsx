import React from "react";
import {
  FaHeartbeat,
  FaShoppingCart,
  FaGraduationCap,
  FaGamepad,
  FaBitcoin,
  FaIndustry,
  FaMobile,
  FaGlobe,
  FaBriefcase,
} from "react-icons/fa";

const CaseStudiesIndustrySection = () => {
  const industries = [
    {
      icon: FaHeartbeat,
      name: "Healthcare",
      description:
        "HIPAA-compliant testing solutions for medical devices and patient management systems",
      caseStudies: 45,
      avgImprovement: "95%",
      keyMetrics: [
        "100% Compliance",
        "Zero Security Breaches",
        "FDA Approvals",
      ],
      successStory:
        "Helped 3 startups achieve FDA approval through comprehensive testing protocols",
      color: "red",
    },
    {
      icon: FaShoppingCart,
      name: "E-commerce",
      description:
        "Performance and scalability testing for high-traffic retail platforms",
      caseStudies: 78,
      avgImprovement: "85%",
      keyMetrics: [
        "99.9% Uptime",
        "75% Faster Load Times",
        "40% Higher Conversions",
      ],
      successStory:
        "Enabled Black Friday success for major retailers with zero downtime",
      color: "green",
    },
    {
      icon: FaBitcoin,
      name: "Fintech",
      description:
        "Security-focused testing for banking, payments, and cryptocurrency platforms",
      caseStudies: 52,
      avgImprovement: "92%",
      keyMetrics: [
        "99.99% Transaction Success",
        "SOX Compliance",
        "Zero Fraud Incidents",
      ],
      successStory:
        "Secured $2B+ in daily transaction processing for digital banks",
      color: "yellow",
    },
    {
      icon: FaGraduationCap,
      name: "EdTech",
      description:
        "Accessibility and performance testing for educational platforms and learning management systems",
      caseStudies: 34,
      avgImprovement: "88%",
      keyMetrics: [
        "WCAG 2.1 Compliance",
        "50% Better Performance",
        "95% User Satisfaction",
      ],
      successStory: "Supported 1M+ students with accessible learning platforms",
      color: "blue",
    },
    {
      icon: FaGamepad,
      name: "Gaming",
      description:
        "Performance and compatibility testing for mobile and web-based gaming applications",
      caseStudies: 29,
      avgImprovement: "90%",
      keyMetrics: [
        "60 FPS Performance",
        "Cross-Platform Support",
        "Anti-Cheat Validation",
      ],
      successStory: "Launched 5 games with 4.8+ app store ratings",
      color: "purple",
    },
    {
      icon: FaIndustry,
      name: "Manufacturing",
      description:
        "IoT and industrial automation testing for smart manufacturing solutions",
      caseStudies: 23,
      avgImprovement: "87%",
      keyMetrics: [
        "IEC 61508 Compliance",
        "99% Device Reliability",
        "30% Cost Reduction",
      ],
      successStory: "Optimized production lines for Fortune 500 manufacturers",
      color: "indigo",
    },
    {
      icon: FaMobile,
      name: "Mobile Apps",
      description:
        "Comprehensive mobile testing across iOS and Android platforms",
      caseStudies: 156,
      avgImprovement: "91%",
      keyMetrics: [
        "4.8+ App Store Rating",
        "80% Crash Reduction",
        "Cross-Device Support",
      ],
      successStory: "Delivered 50+ apps with millions of downloads",
      color: "pink",
    },
    {
      icon: FaGlobe,
      name: "SaaS Platforms",
      description:
        "Scalability and integration testing for cloud-based software solutions",
      caseStudies: 89,
      avgImprovement: "89%",
      keyMetrics: [
        "99.9% Availability",
        "Auto-Scaling Success",
        "API Reliability",
      ],
      successStory: "Scaled platforms to support 10M+ concurrent users",
      color: "teal",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      red: "from-red-50 to-red-100 text-red-600 border-red-200",
      green: "from-green-50 to-green-100 text-green-600 border-green-200",
      yellow: "from-yellow-50 to-yellow-100 text-yellow-600 border-yellow-200",
      blue: "from-blue-50 to-blue-100 text-blue-600 border-blue-200",
      purple: "from-purple-50 to-purple-100 text-purple-600 border-purple-200",
      indigo: "from-indigo-50 to-indigo-100 text-indigo-600 border-indigo-200",
      pink: "from-pink-50 to-pink-100 text-pink-600 border-pink-200",
      teal: "from-teal-50 to-teal-100 text-teal-600 border-teal-200",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="bg-[theme(color.background.gray)] px-8 py-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-4 py-2 rounded-full mb-5">
            <FaBriefcase  />
            <span className="text-sm">Industry Expertise</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Success Across{" "}
            <span className="text-[theme(color.brand.blue)]">
              Every Industry
            </span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Our diverse portfolio spans multiple industries, each with unique
            challenges and requirements. Discover how we&apos;ve delivered
            tailored testing solutions that drive success across sectors.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div
                key={index}
                className={`bg-white border-2 ${
                  getColorClasses(industry.color).split(" ")[2]
                } rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105`}
              >
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-br ${getColorClasses(
                    industry.color
                  )
                    .split(" ")
                    .slice(0, 2)
                    .join(" ")} flex items-center justify-center mb-4`}
                >
                  <IconComponent className="w-8 h-8" />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {industry.name}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {industry.description}
                </p>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Case Studies:</span>
                    <span className="font-semibold text-gray-800">
                      {industry.caseStudies}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">
                      Avg Improvement:
                    </span>
                    <span className="font-semibold text-[theme(color.brand.blue)]">
                      {industry.avgImprovement}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-gray-100">
                    <div className="text-xs text-gray-500 mb-2">
                      Key Metrics:
                    </div>
                    <div className="space-y-1">
                      {industry.keyMetrics.map((metric, metricIndex) => (
                        <div
                          key={metricIndex}
                          className="flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-[theme(color.brand.blue)] rounded-full"></div>
                          <span className="text-xs text-gray-700">
                            {metric}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Success Stories Highlight */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Industry Success Highlights
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.slice(0, 4).map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${getColorClasses(
                      industry.color
                    )
                      .split(" ")
                      .slice(0, 2)
                      .join(
                        " "
                      )} flex items-center justify-center flex-shrink-0`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {industry.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {industry.successStory}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-2">
                15+
              </div>
              <p className="text-gray-700 text-sm">Global Service Delivery</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-2">
                500+
              </div>
              <p className="text-gray-700 text-sm">Case Studies</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-2">
                90%
              </div>
              <p className="text-gray-700 text-sm">Avg Improvement</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-2">
                100%
              </div>
              <p className="text-gray-700 text-sm">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesIndustrySection;
