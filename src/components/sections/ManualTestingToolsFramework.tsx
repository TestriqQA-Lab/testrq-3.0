"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaClipboardList, FaBug, FaChartLine, FaUsers, FaCloud, FaMobile, FaTools } from "react-icons/fa";

const ManualTestingToolsFramework: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("test-management");

  const toolCategories = [
    {
      id: "test-management",
      title: "Test Management",
      icon: <FaClipboardList className="text-2xl" />,
      color: "blue",
      description: "Comprehensive test management and planning tools for organized testing workflows",
      tools: [
        { name: "Jira", description: "Project management and issue tracking", logo: "🔷" },
        { name: "TestRail", description: "Test case management and reporting", logo: "🚂" },
        { name: "Zephyr", description: "Test management for Jira integration", logo: "⚡" },
        { name: "qTest", description: "Agile test management platform", logo: "📋" },
        { name: "Azure DevOps", description: "End-to-end development lifecycle", logo: "🔵" },
        { name: "Confluence", description: "Documentation and collaboration", logo: "📚" }
      ]
    },
    {
      id: "defect-tracking",
      title: "Defect Tracking",
      icon: <FaBug className="text-2xl" />,
      color: "red",
      description: "Advanced defect tracking and lifecycle management systems",
      tools: [
        { name: "Bugzilla", description: "Open-source bug tracking system", logo: "🐛" },
        { name: "Mantis", description: "Web-based bug tracking system", logo: "🦗" },
        { name: "Redmine", description: "Project management and issue tracking", logo: "📌" },
        { name: "YouTrack", description: "Issue tracking and project management", logo: "🎯" },
        { name: "Linear", description: "Modern issue tracking and project management", logo: "📐" },
        { name: "GitHub Issues", description: "Integrated issue tracking for development", logo: "🐙" }
      ]
    },
    {
      id: "reporting-analytics",
      title: "Reporting & Analytics",
      icon: <FaChartLine className="text-2xl" />,
      color: "green",
      description: "Comprehensive reporting and analytics tools for test insights",
      tools: [
        { name: "Tableau", description: "Advanced data visualization and analytics", logo: "📊" },
        { name: "Power BI", description: "Business intelligence and reporting", logo: "📈" },
        { name: "Grafana", description: "Monitoring and observability platform", logo: "📉" },
        { name: "Kibana", description: "Data visualization and exploration", logo: "🔍" },
        { name: "Custom Dashboards", description: "Tailored reporting solutions", logo: "📋" },
        { name: "Excel/Google Sheets", description: "Spreadsheet-based reporting", logo: "📑" }
      ]
    },
    {
      id: "collaboration",
      title: "Collaboration",
      icon: <FaUsers className="text-2xl" />,
      color: "purple",
      description: "Team collaboration and communication platforms",
      tools: [
        { name: "Slack", description: "Team communication and collaboration", logo: "💬" },
        { name: "Microsoft Teams", description: "Unified communication platform", logo: "👥" },
        { name: "Zoom", description: "Video conferencing and screen sharing", logo: "📹" },
        { name: "Miro", description: "Visual collaboration and whiteboarding", logo: "🎨" },
        { name: "Notion", description: "All-in-one workspace for documentation", logo: "📝" },
        { name: "Loom", description: "Video messaging and screen recording", logo: "🎬" }
      ]
    },
    {
      id: "mobile-testing",
      title: "Mobile Testing",
      icon: <FaMobile className="text-2xl" />,
      color: "orange",
      description: "Specialized tools for mobile application testing",
      tools: [
        { name: "BrowserStack", description: "Real device cloud testing platform", logo: "📱" },
        { name: "Sauce Labs", description: "Cross-platform mobile testing", logo: "🧪" },
        { name: "Firebase Test Lab", description: "Google's mobile app testing service", logo: "🔥" },
        { name: "AWS Device Farm", description: "Mobile app testing on real devices", logo: "☁️" },
        { name: "Xamarin Test Cloud", description: "Mobile app testing in the cloud", logo: "📲" },
        { name: "TestComplete Mobile", description: "Mobile test automation platform", logo: "✅" }
      ]
    },
    {
      id: "cloud-platforms",
      title: "Cloud Platforms",
      icon: <FaCloud className="text-2xl" />,
      color: "teal",
      description: "Cloud-based testing platforms and environments",
      tools: [
        { name: "AWS", description: "Amazon Web Services cloud platform", logo: "☁️" },
        { name: "Azure", description: "Microsoft cloud computing platform", logo: "🔷" },
        { name: "Google Cloud", description: "Google's cloud computing services", logo: "🌐" },
        { name: "LambdaTest", description: "Cross-browser testing platform", logo: "λ" },
        { name: "CrossBrowserTesting", description: "Cloud-based browser testing", logo: "🌍" },
        { name: "Perfecto", description: "Cloud-based mobile testing platform", logo: "💎" }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; border: string; hover: string } } = {
      blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", hover: "hover:bg-blue-100" },
      red: { bg: "bg-red-50", text: "text-red-600", border: "border-red-200", hover: "hover:bg-red-100" },
      green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200", hover: "hover:bg-green-100" },
      purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200", hover: "hover:bg-purple-100" },
      orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200", hover: "hover:bg-orange-100" },
      teal: { bg: "bg-teal-50", text: "text-teal-600", border: "border-teal-200", hover: "hover:bg-teal-100" }
    };
    return colorMap[color] || colorMap.blue;
  };

  const activeCategory_data = toolCategories.find(cat => cat.id === activeCategory);

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaTools />
            <span className="text-sm">
              Tools & Frameworks
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Manual Testing <span className="text-brand-blue">Tools & Frameworks</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We leverage <Link href='tools'>industry-leading tools and frameworks</Link> to ensure efficient manual testing, comprehensive defect tracking, and detailed reporting-delivering reliable, <Link href='blog/post/issue-documentation-in-software-testing-how-detailed-bug-reporting-enhances-web-application-quality'>high-quality software assurance</Link>.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Category Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-b border-gray-200">
            {toolCategories.map((category) => {
              const colors = getColorClasses(category.color);
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`p-4 text-center transition-all duration-300 ${
                    activeCategory === category.id
                      ? `${colors.bg} ${colors.text} border-b-2 ${colors.border}`
                      : `text-gray-600 ${colors.hover}`
                  }`}
                >
                  <div className="flex flex-col items-center space-y-2">
                    <span className={activeCategory === category.id ? colors.text : "text-gray-400"}>
                      {category.icon}
                    </span>
                    <span className="text-sm font-medium">{category.title}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Category Content */}
          <div className="p-8">
            {activeCategory_data && (
              <div>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{activeCategory_data.title}</h3>
                  <p className="text-gray-600 text-lg">{activeCategory_data.description}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {activeCategory_data.tools.map((tool, index) => {
                    const colors = getColorClasses(activeCategory_data.color);
                    return (
                      <div
                        key={index}
                        className={`${colors.bg} p-6 rounded-xl hover:shadow-lg transition-all duration-300 group cursor-pointer`}
                      >
                        <div className="flex items-start space-x-4">
                          <div className="text-3xl">{tool.logo}</div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors">
                              {tool.name}
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {tool.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Framework Methodology */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Testing Framework Methodology</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We follow industry best practices and proven methodologies to ensure consistent, reliable, and efficient manual testing processes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">📋</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Agile Testing</h4>
              <p className="text-sm text-gray-600">Iterative testing approach aligned with agile development cycles</p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Risk-Based Testing</h4>
              <p className="text-sm text-gray-600">Prioritized testing based on risk assessment and business impact</p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">🔄</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Continuous Testing</h4>
              <p className="text-sm text-gray-600">Ongoing testing throughout the development lifecycle</p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Data-Driven Testing</h4>
              <p className="text-sm text-gray-600">Evidence-based testing decisions using comprehensive metrics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManualTestingToolsFramework;

