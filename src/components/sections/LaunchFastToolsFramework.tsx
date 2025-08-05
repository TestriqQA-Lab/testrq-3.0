"use client";

import Link from "next/link";
import React from "react";

const LaunchFastToolsFramework: React.FC = () => {
  const toolCategories = [
    {
      title: "Rapid Testing Tools",
      tools: [
        {
          name: "Selenium WebDriver",
          description: "Fast automated web testing for rapid feedback cycles",
        },
        {
          name: "Cypress",
          description:
            "Modern end-to-end testing with real-time browser testing",
        },
        {
          name: "Playwright",
          description: "Cross-browser automation for comprehensive coverage",
        },
        {
          name: "TestCafe",
          description: "Node.js-based testing with no WebDriver dependencies",
        },
      ],
    },
    {
      title: "Agile CI/CD Integration",
      tools: [
        {
          name: "Jenkins",
          description: "Continuous integration for automated testing pipelines",
        },
        {
          name: "GitHub Actions",
          description: "Workflow automation integrated with development",
        },
        {
          name: "GitLab CI/CD",
          description: "Built-in continuous integration and deployment",
        },
        {
          name: "Azure DevOps",
          description: "End-to-end DevOps toolchain for rapid delivery",
        },
      ],
    },
    {
      title: "Performance Testing",
      tools: [
        {
          name: "JMeter",
          description: "Load testing for performance validation at scale",
        },
        {
          name: "K6",
          description: "Modern load testing for developer-centric workflows",
        },
        {
          name: "Artillery",
          description: "Modern performance testing toolkit for APIs",
        },
        {
          name: "WebPageTest",
          description: "Real-world performance testing and optimization",
        },
      ],
    },
    {
      title: "Mobile Testing",
      tools: [
        {
          name: "Appium",
          description: "Cross-platform mobile automation for iOS and Android",
        },
        {
          name: "Detox",
          description: "Gray box end-to-end testing for mobile apps",
        },
        {
          name: "Espresso",
          description: "Android UI testing framework for rapid feedback",
        },
        {
          name: "XCUITest",
          description: "iOS UI testing framework for native applications",
        },
      ],
    },
    {
      title: "API Testing",
      tools: [
        {
          name: "Postman",
          description: "API development and testing platform",
        },
        {
          name: "REST Assured",
          description: "Java-based REST API testing framework",
        },
        {
          name: "Newman",
          description: "Command-line collection runner for Postman",
        },
        {
          name: "Insomnia",
          description: "API client for REST and GraphQL testing",
        },
      ],
    },
    {
      title: "Monitoring & Analytics",
      tools: [
        {
          name: "Datadog",
          description: "Real-time monitoring and analytics platform",
        },
        {
          name: "New Relic",
          description: "Application performance monitoring and optimization",
        },
        {
          name: "Sentry",
          description: "Error tracking and performance monitoring",
        },
        {
          name: "LogRocket",
          description: "Frontend monitoring and session replay",
        },
      ],
    },
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            LaunchFast QA{" "}
            <span className="text-brand-blue">Tools & Frameworks</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We leverage cutting-edge tools like Selenium, Cypress, and JMeter,
            optimized for rapid testing sprints and agile development, to ensure
            comprehensive QA validation across all platforms and environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
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
                    className="bg-white p-4 rounded-lg border border-gray-100 hover:border-blue-200 transition-all duration-300 group"
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

        {/* Additional Information */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Comprehensive LaunchFast QA Technology Stack
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our curated tech stack supports rapid testing sprints, delivering
              maximum efficiency and test coverage for agile QA testing, fast
              product launches, and seamless go-to-market QA execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl text-center shadow-sm">
              <div className="text-2xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">Testing Tools</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-sm">
              <div className="text-2xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-sm text-gray-600">CI/CD Platforms</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-sm">
              <div className="text-2xl font-bold text-purple-600 mb-2">25+</div>
              <div className="text-sm text-gray-600">Frameworks</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-sm">
              <div className="text-2xl font-bold text-orange-600 mb-2">
                100%
              </div>
              <div className="text-sm text-gray-600">Agile Integration</div>
            </div>
          </div>
        </div>

        {/* Technology Expertise */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Technology Expertise for Rapid Launches
          </h3>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Our expert QA engineers stay updated with the latest testing tools
            and methodologies, ensuring your LaunchFast QA processes use the
            most effective frameworks for your specific tech stack and agile
            development needs.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React",
              "Angular",
              "Vue.js",
              "Node.js",
              "Python",
              "Java",
              "C#",
              ".NET",
              "PHP",
              "Ruby",
              "Go",
              "Swift",
              "Kotlin",
              "Flutter",
              "React Native",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href={"/tools"}>
            <button className="cursor-pointer bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              Explore Our Technology Stack
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LaunchFastToolsFramework;
