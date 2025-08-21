import React from "react";
import { FaGlobe, FaMobile, FaCode, FaDatabase, FaShieldAlt, FaChartLine, FaTools } from "react-icons/fa";

const ToolsCategoriesSection = () => {
  const categories = [
    {
      icon: FaGlobe,
      title: "Web Application Testing",
      description: "Comprehensive tools for testing modern web applications across all browsers and devices",
      tools: ["Selenium WebDriver", "Cypress", "Playwright", "TestCafe", "WebdriverIO"],
      color: "blue"
    },
    {
      icon: FaMobile,
      title: "Mobile Testing Frameworks",
      description: "Advanced mobile testing solutions for iOS and Android applications",
      tools: ["Appium", "Espresso", "XCUITest", "Detox", "Calabash"],
      color: "green"
    },
    {
      icon: FaCode,
      title: "API & Backend Testing",
      description: "Robust API testing and backend service validation tools",
      tools: ["Postman", "REST Assured", "SoapUI", "Insomnia", "Newman"],
      color: "purple"
    },
    {
      icon: FaDatabase,
      title: "Database Testing Tools",
      description: "Specialized tools for database integrity and performance testing",
      tools: ["DbUnit", "SQLUnit", "Database Rider", "Testcontainers", "Liquibase"],
      color: "orange"
    },
    {
      icon: FaShieldAlt,
      title: "Security Testing",
      description: "Advanced security testing frameworks and vulnerability assessment tools",
      tools: ["OWASP ZAP", "Burp Suite", "Nessus", "Veracode", "Checkmarx"],
      color: "red"
    },
    {
      icon: FaChartLine,
      title: "Performance Testing",
      description: "Load testing and performance monitoring solutions",
      tools: ["JMeter", "LoadRunner", "K6", "Gatling", "BlazeMeter"],
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-50 to-blue-100 text-blue-600",
      green: "from-green-50 to-green-100 text-green-600",
      purple: "from-purple-50 to-purple-100 text-purple-600",
      orange: "from-orange-50 to-orange-100 text-orange-600",
      red: "from-red-50 to-red-100 text-red-600",
      indigo: "from-indigo-50 to-indigo-100 text-indigo-600"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="bg-[theme(color.background.gray)] px-8 py-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-5 py-2 rounded-full mb-5">
            <FaTools />
            <span className="text-sm">Tool Categories</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Testing{" "}
            <span className="text-[theme(color.brand.blue)]">Tool Arsenal</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Our extensive collection of testing tools and frameworks covers every aspect of software quality assurance—from functional testing, UI/UX validation, and API testing to performance optimization, load and stress testing, and security validation using tools like Selenium, JMeter, Postman, and OWASP ZAP.

          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-border-pulse"
              >
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${getColorClasses(category.color)} flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {category.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-800 mb-3">Key Tools:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.tools.map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ToolsCategoriesSection;

