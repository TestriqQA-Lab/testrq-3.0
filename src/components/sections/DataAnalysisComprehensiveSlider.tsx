"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaChevronRight,
  FaChartBar,
  FaChartLine,
  FaBrain,
  FaDatabase,
  FaBullseye,
  FaCheckCircle,
  FaArrowRight,
  FaFlask,
} from "react-icons/fa";

const DataAnalysisComprehensiveSlider = () => {
  const [activeTab, setActiveTab] = useState(0);

  const analyticsTypes = [
    {
      id: "descriptive",
      title: "Descriptive Analytics",
      icon: <FaChartBar className="h-6 w-6" />,
      description:
        "Understand what happened in your business through comprehensive data analysis",
      content: {
        overview:
          "Descriptive analytics helps you understand historical data and current business performance through statistical analysis and data visualization.",
        keyCapabilities: [
          "Historical Data Analysis",
          "Statistical Summaries",
          "Data Visualization & Dashboards",
          "Performance Metrics Tracking",
          "Trend Identification",
          "Comparative Analysis",
        ],
        benefits: [
          "Clear understanding of business performance",
          "Identification of patterns and trends",
          "Data-driven reporting capabilities",
          "Enhanced decision-making foundation",
        ],
        deliverables:
          "Interactive Dashboards → Statistical Reports → Trend Analysis → Performance Metrics",
      },
    },
    {
      id: "diagnostic",
      title: "Diagnostic Analytics",
      icon: <FaBullseye className="h-6 w-6" />,
      description:
        "Discover why certain events occurred and identify root causes",
      content: {
        overview:
          "Diagnostic analytics goes deeper to understand the reasons behind business outcomes and identify factors that influenced performance.",
        keyCapabilities: [
          "Root Cause Analysis",
          "Correlation Analysis",
          "Drill-down Investigations",
          "Anomaly Detection",
          "Factor Analysis",
          "Comparative Studies",
        ],
        benefits: [
          "Understanding of performance drivers",
          "Identification of problem areas",
          "Insights into cause-effect relationships",
          "Improved problem-solving capabilities",
        ],
        deliverables:
          "Root Cause Reports → Correlation Studies → Anomaly Analysis → Factor Identification",
      },
    },
    {
      id: "predictive",
      title: "Predictive Analytics",
      icon: <FaChartLine className="h-6 w-6" />,
      description:
        "Forecast future trends and outcomes using advanced statistical models",
      content: {
        overview:
          "Predictive analytics uses machine learning and statistical models to forecast future events and trends based on historical data patterns.",
        keyCapabilities: [
          "Forecasting Models",
          "Risk Assessment",
          "Customer Behavior Prediction",
          "Demand Forecasting",
          "Churn Prediction",
          "Market Trend Analysis",
        ],
        benefits: [
          "Anticipate future business outcomes",
          "Proactive decision-making capabilities",
          "Risk mitigation strategies",
          "Improved resource planning",
        ],
        deliverables:
          "Forecast Models → Risk Assessments → Prediction Reports → Trend Projections",
      },
    },
    {
      id: "prescriptive",
      title: "Prescriptive Analytics",
      icon: <FaBrain className="h-6 w-6" />,
      description:
        "Get actionable recommendations for optimal business decisions",
      content: {
        overview:
          "Prescriptive analytics provides specific recommendations and optimal actions based on predictive insights and business constraints.",
        keyCapabilities: [
          "Optimization Models",
          "Decision Support Systems",
          "Scenario Analysis",
          "Resource Allocation",
          "Strategy Recommendations",
          "Action Planning",
        ],
        benefits: [
          "Optimal decision recommendations",
          "Automated decision-making support",
          "Resource optimization strategies",
          "Maximized business outcomes",
        ],
        deliverables:
          "Optimization Plans → Decision Models → Action Recommendations → Strategy Roadmaps",
      },
    },
    {
      id: "cognitive",
      title: "Cognitive Analytics",
      icon: <FaBrain className="h-6 w-6" />,
      description: "Leverage AI and machine learning for advanced insights",
      content: {
        overview:
          "Cognitive analytics combines AI, machine learning, and natural language processing to provide human-like insights and automated analysis.",
        keyCapabilities: [
          "Natural Language Processing",
          "Machine Learning Models",
          "Automated Insights Generation",
          "Pattern Recognition",
          "Sentiment Analysis",
          "Intelligent Automation",
        ],
        benefits: [
          "Automated insight generation",
          "Advanced pattern recognition",
          "Natural language understanding",
          "Scalable analysis capabilities",
        ],
        deliverables:
          "AI Models → Automated Reports → Intelligent Insights → Cognitive Dashboards",
      },
    },
    {
      id: "realtime",
      title: "Real-time Analytics",
      icon: <FaDatabase className="h-6 w-6" />,
      description:
        "Monitor and analyze data as it happens for immediate insights",
      content: {
        overview:
          "Real-time analytics processes data streams instantly to provide immediate insights and enable rapid response to changing conditions.",
        keyCapabilities: [
          "Stream Processing",
          "Real-time Dashboards",
          "Alert Systems",
          "Live Data Monitoring",
          "Instant Notifications",
          "Dynamic Reporting",
        ],
        benefits: [
          "Immediate insight availability",
          "Rapid response capabilities",
          "Continuous monitoring",
          "Proactive issue detection",
        ],
        deliverables:
          "Live Dashboards → Real-time Alerts → Stream Analytics → Dynamic Reports",
      },
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaFlask />
            <span className="text-sm">Comprehensive Testing Solutions</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Complete{" "}
            <span className="text-brand-blue">Analytics Methodology Suite</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive range of data analysis services designed
            to extract maximum business value from your data at every stage of
            the analytics maturity journey—from data discovery and exploratory
            data analysis to predictive analytics, prescriptive insights, and
            strategic decision-making.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {analyticsTypes.map((type, index) => (
              <button
                key={type.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === index
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {type.icon}
                <span className="ml-2 hidden sm:inline">{type.title}</span>
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  {analyticsTypes[activeTab].icon}
                  <h3 className="text-2xl font-bold text-gray-900 ml-3">
                    {analyticsTypes[activeTab].title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {analyticsTypes[activeTab].content.overview}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Delivery Process
                  </h4>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
                    <div className="flex items-center text-sm text-gray-700">
                      <FaArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                      {analyticsTypes[activeTab].content.deliverables}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Key Benefits
                  </h4>
                  <div className="space-y-2">
                    {analyticsTypes[activeTab].content.benefits.map(
                      (benefit, index) => (
                        <div key={index} className="flex items-center">
                          <FaCheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            {benefit}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Core Capabilities
                </h4>
                <div className="space-y-3">
                  {analyticsTypes[activeTab].content.keyCapabilities.map(
                    (capability, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 rounded-lg p-3 flex items-center justify-between hover:bg-gray-100 transition-colors"
                      >
                        <span className="text-gray-700 font-medium">
                          {capability}
                        </span>
                        <FaChevronRight className="h-4 w-4 text-gray-400" />
                      </div>
                    )
                  )}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-br from-brand-blue to-blue-600 rounded-xl text-white">
                  <h5 className="font-semibold mb-2">Ready to Get Started?</h5>
                  <p className="text-blue-100 text-sm mb-4">
                    Transform your data into actionable insights with our expert
                    analytics services.
                  </p>
                  <Link href="/contact-us">
                    <button className="bg-white cursor-pointer text-brand-blue px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                      Start Analysis
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Maturity Journey */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Analytics Maturity Journey
          </h3>

          <div className="flex flex-col lg:flex-row  items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
            {[
              "Descriptive",
              "Diagnostic",
              "Predictive",
              "Prescriptive",
              "Cognitive",
            ].map((stage, index) => (
              <div key={stage} className="flex items-center">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-blue-600 font-bold">{index + 1}</span>
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-900">{stage}</div>
                  <div className="text-sm text-gray-500">Analytics</div>
                </div>
                {index < 4 && (
                  <FaArrowRight className="h-5 w-5 text-gray-400 ml-4 hidden" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAnalysisComprehensiveSlider;
