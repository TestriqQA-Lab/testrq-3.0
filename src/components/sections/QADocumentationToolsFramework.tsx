"use client";
import React, { useState } from "react";
import {
  FaFileAlt,
  FaCog,
  FaCloud,
  FaCode,
  FaChartLine,
  FaUsers,
  FaGithub,
  FaMicrosoft,
  FaRobot,
  FaPlayCircle,
  FaTrello,
  FaCircle,
  FaSearchPlus,
  FaBox,
  FaLock,
  FaWifi,
  FaDatabase,
  FaFilePdf,
  FaCircleNotch,
} from "react-icons/fa";

const QADocumentationToolsFramework = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const toolCategories = [
    {
      id: "documentation-tools",
      title: "Documentation Tools",
      icon: FaFileAlt,
      color: "blue",
      description:
        "Professional documentation creation and management tools for comprehensive QA documentation.",
      tools: [
        {
          name: "Confluence",
          description:
            "Enterprise wiki and collaboration platform for team documentation",
          features: [
            "Real-time collaboration",
            "Template management",
            "Version control",
            "Integration capabilities",
          ],
          useCases: [
            "Knowledge base creation",
            "Process documentation",
            "Team collaboration",
          ],
          icon: <FaFileAlt className="w-6 h-6" />,
        },
        {
          name: "Microsoft SharePoint",
          description:
            "Document management and collaboration platform with enterprise features",
          features: [
            "Document libraries",
            "Workflow automation",
            "Access control",
            "Search capabilities",
          ],
          useCases: [
            "Document management",
            "Team sites",
            "Compliance documentation",
          ],
          icon: <FaMicrosoft className="w-6 h-6" />,
        },
        {
          name: "Notion",
          description:
            "All-in-one workspace for notes, docs, and project management",
          features: [
            "Block-based editing",
            "Database integration",
            "Template library",
            "Real-time sync",
          ],
          useCases: [
            "Project documentation",
            "Knowledge management",
            "Team wikis",
          ],
          icon: <FaFilePdf className="w-6 h-6" />,
        },
        {
          name: "GitBook",
          description: "Modern documentation platform with Git integration",
          features: [
            "Git synchronization",
            "API documentation",
            "Custom domains",
            "Analytics",
          ],
          useCases: ["Technical documentation", "API docs", "User guides"],
          icon: <FaGithub className="w-6 h-6" />,
        },
      ],
    },
    {
      id: "collaboration-platforms",
      title: "Collaboration Platforms",
      icon: FaUsers,
      color: "green",
      description:
        "Team collaboration and communication tools for effective documentation workflows.",
      tools: [
        {
          name: "Microsoft Teams",
          description:
            "Integrated collaboration platform with chat, video, and file sharing",
          features: [
            "Team channels",
            "File collaboration",
            "Video conferencing",
            "App integration",
          ],
          useCases: [
            "Team communication",
            "Document review",
            "Virtual meetings",
          ],
          icon: <FaMicrosoft className="w-6 h-6" />,
        },
        {
          name: "Slack",
          description:
            "Business communication platform with extensive integration capabilities",
          features: [
            "Channel organization",
            "File sharing",
            "Workflow automation",
            "Third-party integrations",
          ],
          useCases: [
            "Team messaging",
            "Notification management",
            "Workflow coordination",
          ],
          icon: <FaUsers className="w-6 h-6" />,
        },
        {
          name: "Miro",
          description:
            "Online collaborative whiteboard platform for visual collaboration",
          features: [
            "Visual brainstorming",
            "Template library",
            "Real-time collaboration",
            "Integration support",
          ],
          useCases: [
            "Process mapping",
            "Brainstorming sessions",
            "Visual documentation",
          ],
          icon: <FaCircleNotch className="w-6 h-6" />,
        },
        {
          name: "Figma",
          description:
            "Collaborative design tool for creating visual documentation and prototypes",
          features: [
            "Real-time collaboration",
            "Component libraries",
            "Prototyping",
            "Design systems",
          ],
          useCases: [
            "UI documentation",
            "Process diagrams",
            "Visual specifications",
          ],
          icon: <FaPlayCircle className="w-6 h-6" />,
        },
      ],
    },
    {
      id: "version-control",
      title: "Version Control & Management",
      icon: FaCog,
      color: "purple",
      description:
        "Version control systems and document management tools for maintaining documentation integrity.",
      tools: [
        {
          name: "Git",
          description:
            "Distributed version control system for tracking changes in documentation",
          features: [
            "Branching and merging",
            "Change tracking",
            "Collaboration support",
            "History management",
          ],
          useCases: [
            "Document versioning",
            "Change management",
            "Collaborative editing",
          ],
          icon: <FaCode className="w-6 h-6" />,
        },
        {
          name: "GitHub",
          description:
            "Web-based Git repository hosting with collaboration features",
          features: [
            "Pull requests",
            "Issue tracking",
            "Project management",
            "CI/CD integration",
          ],
          useCases: [
            "Documentation hosting",
            "Review workflows",
            "Project coordination",
          ],
          icon: <FaGithub className="w-6 h-6" />,
        },
        {
          name: "GitLab",
          description:
            "Complete DevOps platform with integrated documentation features",
          features: [
            "Built-in CI/CD",
            "Wiki functionality",
            "Issue management",
            "Merge requests",
          ],
          useCases: [
            "DevOps documentation",
            "Technical specs",
            "Process automation",
          ],
          icon: <FaCode className="w-6 h-6" />,
        },
        {
          name: "Azure DevOps",
          description:
            "Microsoft DevOps platform with comprehensive project management",
          features: [
            "Work item tracking",
            "Repository management",
            "Build pipelines",
            "Test management",
          ],
          useCases: [
            "Enterprise documentation",
            "Project tracking",
            "Quality management",
          ],
          icon: <FaMicrosoft className="w-6 h-6" />,
        },
      ],
    },
    {
      id: "automation-tools",
      title: "Automation & Integration",
      icon: FaCode,
      color: "orange",
      description:
        "Automation tools and integration platforms for streamlined documentation workflows.",
      tools: [
        {
          name: "Zapier",
          description:
            "Automation platform connecting different apps and services",
          features: [
            "Workflow automation",
            "App integrations",
            "Trigger-based actions",
            "Data synchronization",
          ],
          useCases: [
            "Document automation",
            "Notification workflows",
            "Data integration",
          ],
          icon: <FaCircle className="w-6 h-6" />,
        },
        {
          name: "Microsoft Power Automate",
          description: "Cloud-based service for creating automated workflows",
          features: [
            "Template library",
            "Approval workflows",
            "Data connectors",
            "AI capabilities",
          ],
          useCases: [
            "Approval processes",
            "Document routing",
            "Data collection",
          ],
          icon: <FaMicrosoft className="w-6 h-6" />,
        },
        {
          name: "IFTTT",
          description:
            "Simple automation platform for connecting apps and devices",
          features: [
            "Simple triggers",
            "Multi-platform support",
            "Mobile integration",
            "Location-based actions",
          ],
          useCases: [
            "Simple automations",
            "Mobile workflows",
            "IoT integration",
          ],
          icon: <FaLock className="w-6 h-6" />,
        },
        {
          name: "Jenkins",
          description: "Open-source automation server for CI/CD pipelines",
          features: [
            "Pipeline automation",
            "Plugin ecosystem",
            "Distributed builds",
            "Integration support",
          ],
          useCases: [
            "Documentation deployment",
            "Automated testing",
            "Build automation",
          ],
          icon: <FaPlayCircle className="w-6 h-6" />,
        },
      ],
    },
    {
      id: "analytics-reporting",
      title: "Analytics & Reporting",
      icon: FaChartLine,
      color: "teal",
      description:
        "Analytics and reporting tools for measuring documentation effectiveness and usage.",
      tools: [
        {
          name: "Google Analytics",
          description:
            "Web analytics service for tracking documentation usage and engagement",
          features: [
            "User behavior tracking",
            "Content analytics",
            "Custom reports",
            "Real-time data",
          ],
          useCases: [
            "Usage analytics",
            "Content optimization",
            "User insights",
          ],
          icon: <FaSearchPlus className="w-6 h-6" />,
        },
        {
          name: "Hotjar",
          description:
            "Behavior analytics tool with heatmaps and user recordings",
          features: [
            "Heatmap analysis",
            "User recordings",
            "Feedback polls",
            "Conversion funnels",
          ],
          useCases: [
            "User experience analysis",
            "Content optimization",
            "Usability testing",
          ],
          icon: <FaWifi className="w-6 h-6" />,
        },
        {
          name: "Mixpanel",
          description:
            "Advanced analytics platform for tracking user interactions",
          features: [
            "Event tracking",
            "Funnel analysis",
            "Cohort analysis",
            "A/B testing",
          ],
          useCases: [
            "User engagement",
            "Feature adoption",
            "Performance metrics",
          ],
          icon: <FaDatabase className="w-6 h-6" />,
        },
        {
          name: "Tableau",
          description:
            "Data visualization platform for creating interactive dashboards",
          features: [
            "Interactive dashboards",
            "Data connections",
            "Visual analytics",
            "Collaboration features",
          ],
          useCases: [
            "Data visualization",
            "Executive reporting",
            "Trend analysis",
          ],
          icon: <FaChartLine className="w-6 h-6" />,
        },
      ],
    },
    {
      id: "cloud-platforms",
      title: "Cloud Platforms",
      icon: FaCloud,
      color: "indigo",
      description:
        "Cloud-based platforms and services for scalable documentation infrastructure.",
      tools: [
        {
          name: "Microsoft 365",
          description:
            "Comprehensive cloud productivity suite with documentation tools",
          features: [
            "Office applications",
            "Cloud storage",
            "Collaboration tools",
            "Security features",
          ],
          useCases: [
            "Document creation",
            "Team collaboration",
            "File management",
          ],
          icon: <FaMicrosoft className="w-6 h-6" />,
        },
        {
          name: "Google Workspace",
          description: "Cloud-based productivity and collaboration tools",
          features: [
            "Real-time collaboration",
            "Cloud storage",
            "Communication tools",
            "Admin controls",
          ],
          useCases: [
            "Document collaboration",
            "Team communication",
            "File sharing",
          ],
          icon: <FaCloud className="w-6 h-6" />,
        },
        {
          name: "AWS",
          description:
            "Amazon Web Services cloud platform for hosting and infrastructure",
          features: [
            "Scalable infrastructure",
            "Storage services",
            "Content delivery",
            "Security services",
          ],
          useCases: [
            "Documentation hosting",
            "Content delivery",
            "Backup solutions",
          ],
          icon: <FaCloud className="w-6 h-6" />,
        },
        {
          name: "Azure",
          description: "Microsoft's cloud computing platform and services",
          features: [
            "Virtual machines",
            "Storage solutions",
            "AI services",
            "DevOps tools",
          ],
          useCases: [
            "Enterprise hosting",
            "AI integration",
            "DevOps workflows",
          ],
          icon: <FaCloud className="w-6 h-6" />,
        },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-200",
        button: "bg-blue-600",
      },
      green: {
        bg: "bg-green-50",
        text: "text-green-600",
        border: "border-green-200",
        button: "bg-green-600",
      },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200",
        button: "bg-purple-600",
      },
      orange: {
        bg: "bg-orange-50",
        text: "text-orange-600",
        border: "border-orange-200",
        button: "bg-orange-600",
      },
      teal: {
        bg: "bg-teal-50",
        text: "text-teal-600",
        border: "border-teal-200",
        button: "bg-teal-600",
      },
      indigo: {
        bg: "bg-indigo-50",
        text: "text-indigo-600",
        border: "border-indigo-200",
        button: "bg-indigo-600",
      },
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const activeToolCategory = toolCategories[activeCategory];
  const colors = getColorClasses(activeToolCategory.color);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-full text-sm font-medium mb-4">
            <FaCog className="mr-2" />
            Tools & Frameworks
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Professional QA Documentation Technology Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We leverage industry-leading tools and frameworks like Selenium,
            Appium, Cypress, and Postman to create, manage, and maintain
            comprehensive QA documentation—including test plans, test cases, and
            traceability matrices—that enhance team productivity and ensure
            consistent quality assurance documentation delivery.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {toolCategories.map((category, index) => {
            const IconComponent = category.icon;
            const isActive = activeCategory === index;
            const categoryColors = getColorClasses(category.color);

            return (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  isActive
                    ? `${categoryColors.bg} ${categoryColors.text} ${categoryColors.border} border-2 shadow-md`
                    : "bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200"
                }`}
              >
                <IconComponent className="mr-2 text-sm" />
                <span className="text-sm">{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="mb-8">
            <div
              className={`inline-flex items-center px-4 py-2 ${colors.bg} ${colors.text} rounded-full text-sm font-medium mb-4`}
            >
              <activeToolCategory.icon className="mr-2" />
              {activeToolCategory.title}
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {activeToolCategory.title}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {activeToolCategory.description}
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {activeToolCategory.tools.map((tool, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all duration-300"
              >
                <div className="mb-5 flex items-center gap-5">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${colors.bg} ${colors.text} mb-4`}
                  >
                    {tool.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {tool.name}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-gray-900 mb-2">
                    Key Features:
                  </h5>
                  <div className="grid grid-cols-2 gap-2">
                    {tool.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${colors.text.replace(
                            "text-",
                            "bg-"
                          )} mr-2`}
                        ></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Use Cases */}
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-gray-900 mb-2">
                    Use Cases:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {tool.useCases.map((useCase, useCaseIndex) => (
                      <span
                        key={useCaseIndex}
                        className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-xs font-medium`}
                      >
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Benefits */}
        <div className="mt-16 bg-gradient-to-r from-brand-blue to-blue-600 rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Integrated Technology Ecosystem
            </h3>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Our comprehensive technology stack ensures seamless integration,
              efficient workflows, and measurable improvements in documentation
              quality and team productivity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-brand-blue bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCog className="text-2xl" />
              </div>
              <h4 className="text-xl font-semibold mb-3">
                Seamless Integration
              </h4>
              <p className="opacity-90">
                All tools integrate seamlessly to create a unified documentation
                ecosystem that enhances team collaboration and productivity.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white text-brand-blue bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="text-2xl" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Measurable Results</h4>
              <p className="opacity-90">
                Advanced analytics and reporting provide insights into
                documentation effectiveness and team performance metrics.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white text-brand-blue bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCloud className="text-2xl" />
              </div>
              <h4 className="text-xl font-semibold mb-3">
                Scalable Infrastructure
              </h4>
              <p className="opacity-90">
                Cloud-based solutions ensure scalability, security, and
                accessibility for teams of any size and geographic distribution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QADocumentationToolsFramework;
