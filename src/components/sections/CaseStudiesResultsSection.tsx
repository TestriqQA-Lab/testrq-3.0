import React from "react";
import {
  FaChartLine,
  FaShieldAlt,
  FaClock,
  FaDollarSign,
  FaUsers,
  FaRocket,
  FaBug,
  FaCheckCircle,
} from "react-icons/fa";

const CaseStudiesResultsSection = () => {
  const keyResults = [
    {
      icon: FaBug,
      title: "Bug Reduction",
      value: "99%",
      description:
        "Average bug reduction across all projects through comprehensive testing protocols",
      details: [
        "Pre-production bug detection: 95%",
        "Critical bug elimination: 100%",
        "Regression prevention: 98%",
        "User-reported issues: -90%",
      ],
      color: "red",
    },
    {
      icon: FaClock,
      title: "Time-to-Market",
      value: "75%",
      description:
        "Faster deployment cycles through automated testing and streamlined processes",
      details: [
        "Automated test execution: 80% faster",
        "Release cycle optimization: 70%",
        "Deployment confidence: 95%",
        "Rollback incidents: -85%",
      ],
      color: "blue",
    },
    {
      icon: FaDollarSign,
      title: "Cost Savings",
      value: "60%",
      description:
        "Reduced maintenance and support costs through proactive quality assurance",
      details: [
        "Maintenance cost reduction: 65%",
        "Support ticket reduction: 70%",
        "Infrastructure optimization: 45%",
        "Resource efficiency: 55%",
      ],
      color: "green",
    },
    {
      icon: FaUsers,
      title: "User Satisfaction",
      value: "95%",
      description:
        "Improved user experience and satisfaction through quality-focused testing",
      details: [
        "App store ratings: 4.8+ average",
        "User retention: +40%",
        "Customer complaints: -80%",
        "NPS score improvement: +35",
      ],
      color: "purple",
    },
  ];

  const performanceMetrics = [
    {
      category: "Performance Testing",
      metrics: [
        { label: "Load Time Improvement", value: "75%", trend: "up" },
        { label: "Concurrent Users Supported", value: "10x", trend: "up" },
        { label: "Server Response Time", value: "85%", trend: "down" },
        { label: "Resource Utilization", value: "40%", trend: "down" },
      ],
    },
    {
      category: "Security Testing",
      metrics: [
        { label: "Vulnerabilities Detected", value: "100%", trend: "up" },
        { label: "Security Incidents", value: "0", trend: "down" },
        { label: "Compliance Achievement", value: "100%", trend: "up" },
        { label: "Penetration Test Success", value: "95%", trend: "up" },
      ],
    },
    {
      category: "Automation Testing",
      metrics: [
        { label: "Test Coverage", value: "95%", trend: "up" },
        { label: "Execution Time", value: "80%", trend: "down" },
        { label: "Manual Effort", value: "70%", trend: "down" },
        { label: "Regression Detection", value: "98%", trend: "up" },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      red: "from-red-50 to-red-100 text-red-600",
      blue: "from-blue-50 to-blue-100 text-blue-600",
      green: "from-green-50 to-green-100 text-green-600",
      purple: "from-purple-50 to-purple-100 text-purple-600",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="bg-white px-8 py-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-4 py-2 rounded-full mb-5">
            <FaChartLine  />
            <span className="text-sm">Measurable Results</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Data-Driven{" "}
            <span className="text-[theme(color.brand.blue)]">
              Success Metrics
            </span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Our success is measured in concrete results. These metrics represent
            real improvements achieved across hundreds of projects and satisfied
            clients worldwide.
          </p>
        </div>

        {/* Key Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {keyResults.map((result, index) => {
            const IconComponent = result.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-br ${getColorClasses(
                    result.color
                  )} flex items-center justify-center mb-6`}
                >
                  <IconComponent className="w-8 h-8" />
                </div>

                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-[theme(color.brand.blue)] mb-2">
                    {result.value}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {result.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{result.description}</p>
                </div>

                <div className="space-y-2">
                  {result.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center gap-2">
                      <FaCheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                      <span className="text-xs text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Performance Metrics */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Detailed Performance Metrics
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {performanceMetrics.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-6 text-center">
                  {category.category}
                </h4>

                <div className="space-y-4">
                  {category.metrics.map((metric, metricIndex) => (
                    <div
                      key={metricIndex}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm text-gray-700">
                        {metric.label}
                      </span>
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-semibold ${
                            metric.trend === "up"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {metric.value}
                        </span>
                        <div
                          className={`w-3 h-3 ${
                            metric.trend === "up"
                              ? "border-l-4 border-r-4 border-b-4 border-transparent border-b-green-500"
                              : "border-l-4 border-r-4 border-t-4 border-transparent border-t-red-500"
                          }`}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Bottom Achievement Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <FaRocket className="w-8 h-8 text-[theme(color.brand.blue)] mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900 mb-1">500+</div>
            <p className="text-gray-600 text-sm">Successful Deployments</p>
          </div>
          <div>
            <FaShieldAlt className="w-8 h-8 text-[theme(color.brand.blue)] mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900 mb-1">Zero</div>
            <p className="text-gray-600 text-sm">Security Breaches</p>
          </div>
          <div>
            <FaChartLine className="w-8 h-8 text-[theme(color.brand.blue)] mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900 mb-1">95%</div>
            <p className="text-gray-600 text-sm">Client Retention Rate</p>
          </div>
          <div>
            <FaClock className="w-8 h-8 text-[theme(color.brand.blue)] mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900 mb-1">24/7</div>
            <p className="text-gray-600 text-sm">Support Availability</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesResultsSection;
