import React from "react";
import { FaCogs, FaCode, FaTools, FaRocket } from "react-icons/fa";
import { CaseStudy } from "@/app/lib/caseStudies";

interface CaseStudyTechnologiesSectionProps {
  caseStudy: CaseStudy;
}

const CaseStudyTechnologiesSection: React.FC<
  CaseStudyTechnologiesSectionProps
> = ({ caseStudy }) => {
  // Technology categories for better organization
  const getTechnologyCategory = (tech: string) => {
    const categories = {
      automation: [
        "Selenium",
        "Cypress",
        "Playwright",
        "Appium",
        "TestComplete",
      ],
      performance: ["JMeter", "K6", "LoadRunner", "Gatling", "BlazeMeter"],
      api: [
        "Postman",
        "REST Assured",
        "SoapUI",
        "Insomnia",
        "Newman",
        "API Testing",
      ],
      security: [
        "OWASP ZAP",
        "Burp Suite",
        "Nessus",
        "Veracode",
        "Security Testing",
        "Penetration Testing",
      ],
      mobile: ["Mobile Testing", "Appium"],
      compliance: ["Compliance Testing", "HIPAA Testing"],
    };

    for (const [category, tools] of Object.entries(categories)) {
      if (tools.some((tool) => tech.includes(tool))) {
        return category;
      }
    }
    return "other";
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      automation: FaCogs,
      performance: FaRocket,
      api: FaCode,
      security: FaTools,
      mobile: FaCogs,
      compliance: FaTools,
      other: FaCogs,
    };
    return icons[category as keyof typeof icons] || FaCogs;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      automation: "bg-blue-100 text-blue-600",
      performance: "bg-green-100 text-green-600",
      api: "bg-purple-100 text-purple-600",
      security: "bg-red-100 text-red-600",
      mobile: "bg-yellow-100 text-yellow-600",
      compliance: "bg-indigo-100 text-indigo-600",
      other: "bg-gray-100 text-gray-600",
    };
    return (
      colors[category as keyof typeof colors] || "bg-gray-100 text-gray-600"
    );
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-blue text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FaCogs className="w-4 h-4" />
            <span>Technologies Used</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Our Technology Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We leveraged industry-leading tools and technologies to deliver
            comprehensive testing solutions that meet the highest standards of
            quality and performance.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {caseStudy.technologies.map((tech, index) => {
            const category = getTechnologyCategory(tech);
            const IconComponent = getCategoryIcon(category);
            const colorClass = getCategoryColor(category);

            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${colorClass}`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{tech}</h3>
                    <p className="text-sm text-gray-500 capitalize">
                      {category} Tool
                    </p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-[theme(color.brand.blue)] h-2 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technology Categories Overview */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Technology Categories
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCogs className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Test Automation
              </h4>
              <p className="text-gray-600 text-sm">
                Automated testing frameworks for efficient and reliable test
                execution
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaRocket className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Performance Testing
              </h4>
              <p className="text-gray-600 text-sm">
                Load and performance testing tools to ensure system scalability
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCode className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">API Testing</h4>
              <p className="text-gray-600 text-sm">
                Comprehensive API testing and validation tools for microservices
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaTools className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Security Testing
              </h4>
              <p className="text-gray-600 text-sm">
                Advanced security testing tools for vulnerability assessment
              </p>
            </div>
          </div>
        </div>

        {/* Technology Impact */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Technology Impact</h3>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed mb-8">
              Our carefully selected technology stack enabled us to deliver
              comprehensive testing coverage, reduce manual effort, and achieve
              exceptional results in record time.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-2">
                  80%
                </div>
                <div className="text-gray-300">Automation Coverage</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-2">
                  50%
                </div>
                <div className="text-gray-300">Time Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-2">
                  99%
                </div>
                <div className="text-gray-300">Accuracy Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyTechnologiesSection;
