"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Code,
  Shield,
  Zap,
  Target,
  Users,
  CheckCircle,
} from "lucide-react";
import { FaFlask } from "react-icons/fa";
import Link from "next/link";

const SoftwareTestingGuideComprehensiveSlider = () => {
  const [activeTab, setActiveTab] = useState(0);

  const testingMethodologies = [
    {
      id: "fundamentals",
      title: "Testing Fundamentals",
      icon: <BookOpen className="h-6 w-6" />,
      description:
        (<>Master the <Link href="/blog/post/core-principles-of-functional-mobile-application-testing">core principles</Link> and foundations of software testing</>),
      content: {
        overview:
          "Build a solid foundation in software testing principles, methodologies, and best practices that form the backbone of quality assurance.",
        keyTopics: [
          (<><Link href="/blog/post/understanding-the-sdlc-and-stlc-in-qa">Software Testing Life Cycle (STLC)</Link></>),
          (<><Link href="/blog/post/test-execution-comprehensive-testing-implementation">Test Planning and Strategy</Link></>),
          "Test Case Design Techniques",
          "Defect Life Cycle Management",
          (<><Link href="/blog/post/issue-documentation-in-software-testing-how-detailed-bug-reporting-enhances-web-application-quality">Testing Documentation</Link></>),
          (<><Link href="/data-analysis-services" className="text-gray-700 hover:text-brand-blue hover:underline decoration-brand-blue">Quality Metrics and KPIs</Link></>),
        ],
        benefits: [
          "Understand testing fundamentals thoroughly",
          "Create effective test strategies",
          "Design comprehensive test cases",
          "Manage defects efficiently",
        ],
        learningPath: "Foundation → Intermediate → Advanced → Specialization",
      },
    },
    {
      id: "manual-testing",
      title: "Manual Testing Mastery",
      icon: <Users className="h-6 w-6" />,
      description:
        (<>Comprehensive guide to <Link href="/manual-testing-services">manual testing</Link> techniques and methodologies</>),
      content: {
        overview:
          "Deep dive into manual testing approaches, exploratory testing, and user experience validation techniques for thorough quality assurance.",
        keyTopics: [
          (<><Link href="/blog/post/exploratory-software-testing-a-journey-beyond-the-script">Exploratory Testing Techniques</Link></>),
          (<><Link href="/blog/post/user-acceptance-testing-in-manual-testing-use-cases-techniques">User Acceptance Testing (UAT)</Link></>),
          (<><Link href="/blog/post/usability-testing-in-manual-testing-use-cases-techniques">Usability Testing Methods</Link></>),
          (<><Link href="/blog/post/cross-platform-testing-ensuring-seamless-gaming-experiences-across-devices">Cross-browser Testing</Link></>),
          (<><Link href="/mobile-application-testing" className="text-gray-700 hover:text-brand-blue hover:underline decoration-brand-blue">Mobile Testing Strategies</Link></>),
          (<><Link href="/blog/post/accessibility-testing-in-manual-testing-use-cases-techniques">Accessibility Testing</Link></>),
        ],
        benefits: [
          "Master exploratory testing skills",
          "Validate user experience effectively",
          "Ensure cross-platform compatibility",
          "Identify usability issues early",
        ],
        learningPath: "Basic Manual → Exploratory → UAT → Specialized Testing",
      },
    },
    {
      id: "automation",
      title: "Test Automation",
      icon: <Code className="h-6 w-6" />,
      description: "Advanced automation frameworks and scripting techniques",
      content: {
        overview:
          "Master test automation frameworks, scripting languages, and CI/CD integration for scalable and maintainable automated testing solutions.",
        keyTopics: [
          (<><Link href="/automation-testing-services">Automation Framework Design</Link></>),
          (<><Link href="/blog/post/how-to-write-maintainable-test-scripts-in-selenium-or-cypress">Selenium WebDriver Advanced</Link></>),
          (<><Link href="/api-testing">API Testing Automation</Link></>),
          (<><Link href="/mobile-application-testing">Mobile Automation (Appium)</Link></>),
          (<><Link href="/blog/post/devsecops-integrating-security-in-your-ci-cd-pipeline-2">CI/CD Pipeline Integration</Link></>),
          "Test Data Management",
        ],
        benefits: [
          "Build robust automation frameworks",
          "Integrate with CI/CD pipelines",
          "Reduce manual testing effort",
          "Improve test coverage and reliability",
        ],
        learningPath:
          "Scripting Basics → Framework Design → CI/CD → Advanced Patterns",
      },
    },
    {
      id: "performance",
      title: "Performance Testing",
      icon: <Zap className="h-6 w-6" />,
      description: "Load testing, stress testing, and performance optimization",
      content: {
        overview:
          "Comprehensive performance testing methodologies including load testing, stress testing, and performance optimization techniques.",
        keyTopics: [
          (<><Link href="/blog/post/load-testing-in-performance-testing-complete-guide">Load Testing Strategies</Link></>),
          (<><Link href="/blog/post/stress-testing-applications-identifying-breaking-points">Stress and Volume Testing</Link></>),
          "Performance Monitoring",
          (<><Link href="/blog/post/etl-performance-testing">Bottleneck Identification</Link></>),
          (<><Link href="/blog/post/performance-scalability-testing-ensuring-iot-systems-handle-high-load-efficiently">Scalability Testing</Link></>),
          "Performance Optimization",
        ],
        benefits: [
          "Validate application performance",
          "Identify system bottlenecks",
          "Ensure scalability requirements",
          "Optimize application response times",
        ],
        learningPath:
          "Performance Basics → Load Testing → Advanced Scenarios → Optimization",
      },
    },
    {
      id: "security",
      title: (<><Link href="/blog/post/game-security-testing-protecting-your-game-from-hacks-cheats-and-data-breaches">Security Testing</Link></>),
      icon: <Shield className="h-6 w-6" />,
      description:
        "Vulnerability assessment and penetration testing techniques",
      content: {
        overview:
          "Advanced security testing methodologies including vulnerability assessment, penetration testing, and security compliance validation.",
        keyTopics: [
          "Vulnerability Assessment",
          (<><Link href="/blog/post/how-to-perform-penetration-testing-for-web-applications">Penetration Testing Basics</Link></>),
          (<><Link href="/blog/post/top-10-security-vulnerabilities-based-on-owasp">OWASP Top 10 Testing</Link></>),
          "Security Compliance Testing",
          (<><Link href="/blog/post/iot-security-validation-protecting-devices-from-cyber-threats">Authentication Testing</Link></>),
          "Data Protection Validation",
        ],
        benefits: [
          "Identify security vulnerabilities",
          "Validate security controls",
          "Ensure compliance requirements",
          "Protect against cyber threats",
        ],
        learningPath:
          "Security Basics → Vulnerability Testing → Penetration Testing → Compliance",
      },
    },
    {
      id: "api-testing",
      title: (<><Link href="/api-testing">API Testing</Link></>),
      icon: <Target className="h-6 w-6" />,
      description: "REST, SOAP, and GraphQL API testing methodologies",
      content: {
        overview:
          "Master API testing techniques for REST, SOAP, and GraphQL APIs with comprehensive validation and integration testing strategies.",
        keyTopics: [
          (<><Link href="/blog/post/rest-api-testing-guide-endpoints-methods-best-practices">REST API Testing</Link></>),
          "SOAP Service Testing",
          (<><Link href="/blog/post/graphql-api-testing-strategies-for-queries-mutations-performance">GraphQL Testing</Link></>),
          (<><Link href="/blog/post/api-integration-testing-ensuring-seamless-system-communication">API Security Testing</Link></>),
          "Contract Testing",
          "API Performance Testing",
        ],
        benefits: [
          "Validate API functionality",
          "Ensure data integrity",
          "Test API security",
          "Verify integration points",
        ],
        learningPath:
          "API Basics → REST Testing → Advanced Protocols → Integration Testing",
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
            <span className="text-brand-blue">Testing Methodology Guide</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore <Link href="/blog/post/test-execution-comprehensive-testing-implementation">comprehensive testing</Link> methodologies with detailed guides,
            practical examples, and structured learning paths for every testing
            discipline.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {testingMethodologies.map((methodology, index) => (
              <button
                key={methodology.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center px-4 py-3 rounded-lg font-medium transition-all duration-200 ${activeTab === index
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
              >
                {methodology.icon}
                <span className="ml-2 hidden sm:inline">
                  {methodology.title}
                </span>
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  {testingMethodologies[activeTab].icon}
                  <h3 className="text-2xl font-bold text-gray-900 ml-3">
                    {testingMethodologies[activeTab].title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {testingMethodologies[activeTab].content.overview}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Learning Path
                  </h4>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
                    <div className="flex items-center text-sm text-gray-700">
                      {testingMethodologies[activeTab].content.learningPath}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Key Benefits
                  </h4>
                  <div className="space-y-2">
                    {testingMethodologies[activeTab].content.benefits.map(
                      (benefit, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
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
                  Key Topics Covered
                </h4>
                <div className="space-y-3">
                  {testingMethodologies[activeTab].content.keyTopics.map(
                    (topic, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 rounded-lg p-3 flex items-center justify-between hover:bg-gray-100 transition-colors"
                      >
                        <span className="text-gray-700 font-medium">
                          {topic}
                        </span>
                      </div>
                    )
                  )}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-br from-brand-blue to-blue-600 rounded-xl text-white">
                  <h5 className="font-semibold mb-2">
                    Ready to Start Learning?
                  </h5>
                  <p className="text-blue-100 text-sm mb-4">
                    Access comprehensive guides, practical examples, and
                    hands-on exercises.
                  </p>
                  <Link href="/contact-us">
                    <button className="bg-white cursor-pointer text-brand-blue px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                      Start Learning
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareTestingGuideComprehensiveSlider;
