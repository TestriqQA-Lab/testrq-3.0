import Link from "next/link";
import React from "react";
import { FaCube } from "react-icons/fa";

const ToolsFrameworksSection = () => {
  const frameworks = [
    {
      name: (<><Link href="/blog/post/getting-started-with-selenium-a-beginners-guide">Selenium WebDriver</Link></>),
      category: "Web Automation",
      description:
        "Industry-standard web application testing framework supporting multiple browsers and programming languages",
      features: [
        "Cross-browser testing",
        "Multi-language support",
        "Grid execution",
        "Parallel testing",
      ],
      useCases: [
        "Regression testing",
        "Cross-browser validation",
        "E2E testing",
        (<><Link href="/blog/post/ci-cd-test-automation-integration-deliver-faster-with-confidence">CI/CD integration</Link></>),
      ],
      logo: "🔧",
      popularity: "Most Popular",
    },
    {
      name: "Cypress",
      category: "Modern Web Testing",
      description:
        "Next-generation testing framework built for modern web applications with real-time browser testing",
      features: [
        "Real-time reloads",
        "Time travel debugging",
        "Network traffic control",
        "Screenshot/video capture",
      ],
      useCases: [
        "Component testing",
        "E2E testing",
        "API testing",
        "Visual testing",
      ],
      logo: "🌲",
      popularity: "Developer Favourite",
    },
    {
      name: "Playwright",
      category: "Cross-Browser Automation",
      description:
        "Microsoft's modern automation framework for reliable end-to-end testing across all browsers",
      features: [
        "Auto-wait capabilities",
        (<><Link href="/mobile-application-testing">Mobile testing</Link></>),
        (<><Link href="/api-testing">API testing</Link></>),
        "Codegen tool",
      ],
      useCases: [
        "Multi-browser testing",
        "Mobile web testing",
        "API validation",
        "Performance testing",
      ],
      logo: "🎭",
      popularity: "Fastest Growing",
    },
    {
      name: (<><Link href="/blog/post/what-is-the-future-of-mobile-application-testing-appium">Appium</Link></>),
      category: "Mobile Testing",
      description:
        "Open-source mobile application testing framework for native, hybrid, and mobile web apps",
      features: [
        "Cross-platform support",
        "Real device testing",
        (<><Link href="/blog/post/cloud-integration-testing-for-smart-devices-api-sync-validation">Cloud integration</Link></>),
        "Parallel execution",
      ],
      useCases: [
        "Mobile app testing",
        "Cross-platform validation",
        "Device farm integration",
        (<><Link href="/blog/post/continuous-regression-testing-ensuring-quality-in-agile-devops">Continuous testing</Link></>),
      ],
      logo: "📱",
      popularity: "Mobile Leader",
    },
    {
      name: "TestCafe",
      category: "Node.js Testing",
      description:
        "Node.js-based testing framework that works without WebDriver and supports all browsers",
      features: [
        "No WebDriver needed",
        "Concurrent testing",
        "Smart assertions",
        "Built-in wait mechanisms",
      ],
      useCases: [
        "JavaScript testing",
        "Concurrent execution",
        (<><Link href="/blog/post/ci-cd-integration-with-automated-tests">CI/CD pipelines</Link></>),
        "Headless testing",
      ],
      logo: "☕",
      popularity: "Zero Config",
    },
    {
      name: "Robot Framework",
      category: "Keyword-Driven Testing",
      description:
        "Generic automation framework using keyword-driven approach for acceptance testing",
      features: [
        "Keyword-driven",
        "Extensible libraries",
        "Rich ecosystem",
        "Detailed reporting",
      ],
      useCases: [
        (<><Link href="/blog/post/user-acceptance-testing-in-manual-testing-use-cases-techniques">Acceptance testing</Link></>),
        (<><Link href="/blog/post/best-practices-in-robotic-process-automation-rpa-testing">RPA automation</Link></>),
        "API testing",
        "Database testing",
      ],
      logo: "🤖",
      popularity: "Enterprise Choice",
    },
  ];

  return (
    <section id="tools-and-frameworks" className="bg-white px-8 py-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-5 py-2 rounded-full mb-5">
            <FaCube />
            <span className="text-sm">Leading Frameworks/Tools</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Industry-Leading{" "}
            <span className="text-[theme(color.brand.blue)]">
              Testing Frameworks/Tools
            </span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            We leverage the most advanced and reliable testing frameworks in the
            industry to deliver comprehensive software quality assurance
            solutions for your projects-covering{" "}
            <Link href="/blog/post/functional-testing-in-manual-testing-use-cases-techniques-best-practices">
              functional testing
            </Link>
            , <Link href="/automation-testing-services">automation testing</Link>, API validation, performance benchmarking, and
            <Link href="/security-testing"> security assurance</Link> with tools like <Link href="/blog/post/how-to-write-maintainable-test-scripts-in-selenium-or-cypress">Selenium, Cypress</Link>, JMeter, and
            Postman.
          </p>
        </div>

        {/* Frameworks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {frameworks.map((framework, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white ring-1 ring-brand-blue rounded-xl p-8 hover:shadow-xl hover:ring-3 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{framework.logo}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {framework.name}
                    </h3>
                    <span className="text-sm text-gray-600">
                      {framework.category}
                    </span>
                  </div>
                </div>
                <span className="bg-[theme(color.brand.blue)] text-white text-center text-xs px-1 py-1 rounded-full">
                  {framework.popularity}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {framework.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-800 mb-3">
                  Key Features:
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {framework.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[theme(color.brand.blue)] rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div>
                <h4 className="text-sm font-semibold text-gray-800 mb-3">
                  Use Cases:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {framework.useCases.map((useCase, useCaseIndex) => (
                    <span
                      key={useCaseIndex}
                      className="bg-blue-50 text-[theme(color.brand.blue)] text-xs px-3 py-1 rounded-full"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Framework Comparison */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Framework Selection Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[theme(color.brand.blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Right Tool Selection
              </h4>
              <p className="text-gray-600 text-sm">
                We analyze your project requirements to select the most suitable
                testing framework
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[theme(color.brand.blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Optimal Performance
              </h4>
              <p className="text-gray-600 text-sm">
                Our expertise ensures maximum efficiency and performance from
                each framework
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[theme(color.brand.blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔧</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Custom Integration
              </h4>
              <p className="text-gray-600 text-sm">
                Seamless integration with your existing development and
                deployment pipelines
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsFrameworksSection;
