"use client";

import Link from "next/link";
import React from "react";

const LaunchFastToolsFramework: React.FC = () => {
  const toolCategories: {
    title: React.ReactNode;
    tools: {
      name: string;
      description: string;
    }[]
  }[] = [
      {
        title: "Web Automation",
        tools: [
          {
            name: "Playwright",
            description: "Next-generation browser automation for modern web apps",
          },
          {
            name: "Cypress",
            description: "Developer-friendly end-to-end testing framework",
          },
          {
            name: "Selenium",
            description: "Industry-standard open-source web automation",
          },
        ],
      },
      {
        title: (
          <>
            <Link title="Mobile Testing" href='/mobile-application-testing'>Mobile Testing</Link>
          </>
        ),
        tools: [
          {
            name: "Appium",
            description: "Native, hybrid, and mobile web app automation",
          },
          {
            name: "Bit-Bar",
            description: "Cloud-based real device testing for mobile and web",
          },
          {
            name: "Browser-Stack",
            description: "Instant access to real mobile devices for app testing",
          },
        ],
      },
      {
        title: (
          <>
            <Link title="API Testing" href='/api-testing'>API Testing</Link>
          </>
        ),
        tools: [
          {
            name: "Postman",
            description: "The world's most popular API platform",
          },
          {
            name: "Super-test",
            description: "High-level abstraction for testing HTTP",
          },
          {
            name: "k6",
            description: "Developer-centric performance and API testing",
          },
        ],
      },
      {
        title: "CI/CD Integration",
        tools: [
          {
            name: "GitHub Actions",
            description: "Automate, customize, and execute workflows",
          },
          {
            name: "Circle-CI",
            description: "Modern CI/CD for high-speed software development",
          },
          {
            name: "Jenkins",
            description: "Powerful open-source automation server",
          },
        ],
      },
      {
        title: "Monitoring & System Insights",
        tools: [
          {
            name: "Datadog",
            description: "Cloud-scale monitoring and security for apps",
          },
          {
            name: "New Relic",
            description: "Full-stack observability for performance",
          },
          {
            name: "Sentry",
            description: "Application monitoring and error tracking",
          },
        ],
      },
      {
        title: "Bug Tracking",
        tools: [
          {
            name: "Jira",
            description: "The #1 project management tool for agile teams",
          },
          {
            name: "Linear",
            description: "The issue tracker built for high-performance teams",
          },
          {
            name: "Trello",
            description: "Manage projects and organize tasks visually",
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
            We leverage cutting-edge tools like <Link title="Selenium" href='blog/post/getting-started-with-selenium-a-beginners-guide'>Selenium</Link>, <Link title="Cypress" href='blog/post/how-to-write-maintainable-test-scripts-in-selenium-or-cypress'>Cypress</Link>, and <Link title="JMeter" href='blog/post/how-to-use-jmeter-for-performance-testing-step-by-step-guide-2'>JMeter</Link>,
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
              maximum efficiency and test coverage for <Link title="agile QA testing" href='blog/post/rapid-functional-testing-why-speed-matters-in-agile-qa'>agile QA testing</Link>, <Link title="fast
              product launches" href='blog/post/performance-optimization-for-pre-launch-software-testing'>fast
                product launches</Link>, and seamless go-to-market QA execution
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
          <Link href={"/technology-stack"} title="Explore our full QA technology stack" className="cursor-pointer bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
            Explore Our Technology Stack
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LaunchFastToolsFramework;
