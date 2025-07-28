import React from 'react';
import { FaFileAlt, FaClipboardList, FaProjectDiagram, FaCheckCircle, FaUsers, FaCog, FaShieldAlt, FaChartLine } from 'react-icons/fa';

const QADocumentationComprehensiveSection = () => {
  const documentationServices = [
    {
      icon: FaFileAlt,
      title: "Test Plan Documentation",
      description: "Comprehensive test plans that define testing scope, objectives, resources, schedule, and deliverables. Our detailed test plans ensure systematic testing approach and clear communication across all stakeholders.",
      features: ["Test Strategy Definition", "Resource Planning", "Risk Assessment", "Timeline Management"],
      color: "blue"
    },
    {
      icon: FaClipboardList,
      title: "Test Case Documentation",
      description: "Detailed test cases with step-by-step instructions, expected results, and traceability to requirements. Our test cases ensure comprehensive coverage and consistent execution across testing cycles.",
      features: ["Step-by-Step Instructions", "Expected Results", "Traceability Matrix", "Priority Classification"],
      color: "green"
    },
    {
      icon: FaProjectDiagram,
      title: "Requirements Documentation",
      description: "Clear and comprehensive requirements documentation that bridges the gap between business needs and technical implementation. Ensures all stakeholders have a unified understanding of project goals.",
      features: ["Business Requirements", "Functional Specifications", "Non-Functional Requirements", "Acceptance Criteria"],
      color: "purple"
    },
    {
      icon: FaCheckCircle,
      title: "Process Documentation",
      description: "Standardized QA processes and procedures that ensure consistency, compliance, and continuous improvement. Our process documentation helps teams maintain quality standards across all projects.",
      features: ["Standard Operating Procedures", "Quality Gates", "Review Processes", "Compliance Guidelines"],
      color: "orange"
    },
    {
      icon: FaUsers,
      title: "User Acceptance Testing Documentation",
      description: "Comprehensive UAT documentation including test scenarios, user stories, and acceptance criteria. Ensures end-user requirements are met and business objectives are achieved.",
      features: ["User Stories", "Acceptance Criteria", "UAT Test Scenarios", "Sign-off Procedures"],
      color: "teal"
    },
    {
      icon: FaCog,
      title: "Technical Documentation",
      description: "Detailed technical documentation covering system architecture, API specifications, database schemas, and integration points. Essential for development and maintenance teams.",
      features: ["System Architecture", "API Documentation", "Database Schemas", "Integration Guides"],
      color: "indigo"
    },
    {
      icon: FaShieldAlt,
      title: "Compliance Documentation",
      description: "Regulatory compliance documentation ensuring adherence to industry standards, security requirements, and quality frameworks. Critical for regulated industries and enterprise environments.",
      features: ["Regulatory Compliance", "Security Standards", "Quality Frameworks", "Audit Trails"],
      color: "red"
    },
    {
      icon: FaChartLine,
      title: "Reporting & Metrics Documentation",
      description: "Comprehensive reporting templates and metrics documentation for tracking quality indicators, test progress, and project health. Enables data-driven decision making and continuous improvement.",
      features: ["Quality Metrics", "Progress Reports", "Dashboard Templates", "KPI Tracking"],
      color: "pink"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-50 border-blue-200 text-blue-800",
      green: "bg-green-50 border-green-200 text-green-800",
      purple: "bg-purple-50 border-purple-200 text-purple-800",
      orange: "bg-orange-50 border-orange-200 text-orange-800",
      teal: "bg-teal-50 border-teal-200 text-teal-800",
      indigo: "bg-indigo-50 border-indigo-200 text-indigo-800",
      red: "bg-red-50 border-red-200 text-red-800",
      pink: "bg-pink-50 border-pink-200 text-pink-800"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getIconColorClasses = (color: string) => {
    const colorMap = {
      blue: "text-blue-600",
      green: "text-green-600",
      purple: "text-purple-600",
      orange: "text-orange-600",
      teal: "text-teal-600",
      indigo: "text-indigo-600",
      red: "text-red-600",
      pink: "text-pink-600"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <FaFileAlt className="mr-2" />
            Comprehensive QA Documentation Services
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Professional Documentation Solutions for Quality Assurance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our expert team creates comprehensive, standardized documentation that enhances team collaboration, 
            ensures compliance, and accelerates project delivery across all phases of software development.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {documentationServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-gray-200 group"
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg ${getColorClasses(service.color)} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                    <IconComponent className={`text-xl ${getIconColorClasses(service.color)}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <div className={`w-1.5 h-1.5 rounded-full ${getIconColorClasses(service.color).replace('text-', 'bg-')} mr-3`}></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our QA Documentation Services?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our documentation services provide measurable benefits that improve team efficiency, 
              reduce errors, and ensure consistent quality across all your projects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="text-2xl text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Improved Efficiency</h4>
              <p className="text-gray-600">
                Standardized documentation reduces onboarding time by 60% and improves team productivity 
                through clear processes and procedures.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-2xl text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Enhanced Quality</h4>
              <p className="text-gray-600">
                Comprehensive documentation ensures consistent quality standards and reduces defect 
                rates by up to 40% through systematic testing approaches.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-2xl text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Better Collaboration</h4>
              <p className="text-gray-600">
                Clear documentation improves cross-team communication and ensures all stakeholders 
                have a unified understanding of project requirements and processes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QADocumentationComprehensiveSection;

