"use client";
import Link from "next/link";
import React from "react";

const ExploratoryToolsFramework: React.FC = () => {
  const toolCategories = [
    {
      title: "Session Management Tools",
      tools: [
        {
          name: "Session Tester",
          description: "Session-based test management and charter tracking",
        },
        {
          name: "Rapid Reporter",
          description: "Real-time note taking and session documentation",
        },
        {
          name: "TestPad",
          description: "Exploratory testing checklist and session management",
        },
        {
          name: "Exploratory Testing Chrome Extension",
          description: "Browser-based exploration tracking",
        },
      ],
    },
    {
      title: "Bug Tracking & Documentation",
      tools: [
        {
          name: "Jira",
          description: "Comprehensive bug tracking and project management",
        },
        {
          name: "Azure DevOps",
          description: "Integrated development and testing workflow",
        },
        {
          name: "Bugzilla",
          description: "Open-source bug tracking and reporting",
        },
        {
          name: "Linear",
          description: "Modern issue tracking for development teams",
        },
      ],
    },
    {
      title: "Screen Recording & Evidence",
      tools: [
        {
          name: "Loom",
          description: "Screen recording for bug reproduction and evidence",
        },
        {
          name: "OBS Studio",
          description: "Professional screen recording and streaming",
        },
        {
          name: "CloudApp",
          description: "Quick screen capture and annotation tools",
        },
        {
          name: "Snagit",
          description: "Advanced screen capture and editing capabilities",
        },
      ],
    },
    {
      title: "Mind Mapping & Planning",
      tools: [
        {
          name: "XMind",
          description: "Mind mapping for test planning and exploration",
        },
        {
          name: "MindMeister",
          description: "Collaborative mind mapping for test strategies",
        },
        {
          name: "Coggle",
          description: "Simple mind mapping for exploration planning",
        },
        {
          name: "FreeMind",
          description: "Open-source mind mapping for test design",
        },
      ],
    },
    {
      title: "Heuristic Evaluation Tools",
      tools: [
        {
          name: "Nielsen's Heuristics Checklist",
          description: "Usability heuristics evaluation framework",
        },
        {
          name: "WAVE",
          description: "Web accessibility evaluation and testing",
        },
        {
          name: "axe DevTools",
          description: "Accessibility testing and evaluation",
        },
        {
          name: "Lighthouse",
          description: "Performance and accessibility auditing",
        },
      ],
    },
    {
      title: "Collaboration & Communication",
      tools: [
        {
          name: "Slack",
          description: "Real-time team communication and collaboration",
        },
        {
          name: "Microsoft Teams",
          description: "Integrated communication and file sharing",
        },
        {
          name: "Miro",
          description: "Collaborative whiteboarding and planning",
        },
        {
          name: "Notion",
          description: "Documentation and knowledge management",
        },
      ],
    },
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Exploratory Testing{" "}
            <span className="text-brand-blue">Tools & Frameworks</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We leverage specialized tools and frameworks purpose-built for
            exploratory testing to enable systematic investigation,
            comprehensive documentation, and seamless collaboration throughout
            the exploration process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <div className="w-12 h-1 bg-brand-blue rounded-full"></div>
              </div>

              <div className="space-y-6">
                {category.tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="bg-white p-4 rounded-lg border border-gray-100 hover:border-green-200 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        {tool.name.charAt(0)}
                      </div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-brand-blue transition-colors duration-300">
                        {tool.name}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Exploration Methodologies */}
        <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Exploratory Testing Methodologies
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our systematic exploratory approach blends proven investigation
              techniques with modern testing tools to ensure comprehensive
              coverage and maximum issue discovery across your application.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl text-center shadow-sm">
              <div className="text-2xl font-bold text-green-600 mb-2">SBTM</div>
              <div className="text-sm text-gray-600">
                Session-Based Test Management
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-sm">
              <div className="text-2xl font-bold text-blue-600 mb-2">ET</div>
              <div className="text-sm text-gray-600">Exploratory Testing</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-sm">
              <div className="text-2xl font-bold text-purple-600 mb-2">HE</div>
              <div className="text-sm text-gray-600">Heuristic Evaluation</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-sm">
              <div className="text-2xl font-bold text-orange-600 mb-2">UJT</div>
              <div className="text-sm text-gray-600">User Journey Testing</div>
            </div>
          </div>
        </div>

        {/* Testing Techniques */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Exploration Techniques & Approaches
          </h3>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Our team applies diverse exploration techniques and investigation
            approaches to ensure comprehensive coverage and effective issue
            discovery across all application types and domains.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Session-Based Testing",
              "Charter-Driven Exploration",
              "Persona-Based Testing",
              "Boundary Value Analysis",
              "Error Guessing",
              "Equivalence Partitioning",
              "State Transition Testing",
              "Use Case Testing",
              "Scenario-Based Testing",
              "Risk-Based Testing",
              "Exploratory Automation",
              "Crowd Testing",
            ].map((technique, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium"
              >
                {technique}
              </span>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Comprehensive Exploratory Testing Toolkit
            </h3>
            <p className="text-gray-600 mb-8">
              Our toolkit is specifically designed for effective exploratory
              testing, ensuring systematic investigation, comprehensive
              documentation, and actionable insights.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">
                  25+
                </div>
                <div className="text-sm text-gray-600">Exploration Tools</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-sm text-gray-600">
                  Documentation Platforms
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">
                  15+
                </div>
                <div className="text-sm text-gray-600">Collaboration Tools</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-2">
                  100%
                </div>
                <div className="text-sm text-gray-600">Coverage Tracking</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/contact-us">
            <button className="bg-brand-blue cursor-pointer text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              Explore Our Toolkit
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExploratoryToolsFramework;
