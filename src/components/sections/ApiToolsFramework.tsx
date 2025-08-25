"use client";

import Link from "next/link";
import React from "react";
import { FaTools, FaCode, FaRocket, FaShieldAlt, FaGithub, FaDocker, FaPlayCircle,FaGitlab,FaDatabase, FaLock, FaJava, FaFileAlt, FaPython, FaJsSquare, FaNodeJs, FaRobot, FaMicrosoft, FaCircle, FaWifi, FaServer } from "react-icons/fa";

const ApiToolsFramework: React.FC = () => {
  const toolCategories = [
    {
      category: "Testing Tools",
      icon: <FaTools className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        { name: "Postman", description: "API development and testing platform", icon: <FaPlayCircle className="w-6 h-6 text-[theme(color.brand.blue)]" /> },
        { name: "SoapUI", description: "Comprehensive API testing tool", icon: <FaFileAlt className="w-6 h-6 text-[theme(color.brand.blue)]" /> },
        { name: "JMeter", description: "Performance and load testing", icon: <FaPlayCircle className="w-6 h-6 text-[theme(color.brand.blue)]" /> },
        { name: "Rest-Assured", description: "Java-based REST API testing", icon: <FaCode className="w-6 h-6 text-[theme(color.brand.blue)]" /> },
        { name: "Karate", description: "Open-source API test automation", icon: <FaCode className="w-6 h-6 text-[theme(color.brand.blue)]" /> },
        { name: "Newman", description: "Command-line Postman collection runner", icon: <FaPlayCircle className="w-6 h-6 text-[theme(color.brand.blue)]" /> },
      ],
    },
    {
      category: "Frameworks",
      icon: <FaCode className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        { name: "PyTest", description: "Python testing framework", icon: <FaPython className="w-6 h-6 text-[theme(color.brand.blue)]" /> },
        { name: "Jest", description: "JavaScript testing framework", icon: <FaJsSquare className="w-6 h-6 text-[theme(color.brand.blue)]" /> },
        { name: "TestNG", description: "Java testing framework", icon: <FaJava className="w-6 h-6 text-[theme(color.brand.blue)]" /> },
        { name: "Mocha", description: "Node.js testing framework", icon: <FaNodeJs className="w-6 h-6 text-[theme(color.brand.blue)]" /> },
        { name: "Cucumber", description: "BDD testing framework", icon: <FaCode className="w-6 h-6 text-[theme(color.brand.blue)]" /> },
        { name: "Robot Framework", description: "Generic automation framework", icon: <FaRobot className="w-6 h-6 text-[theme(color.brand.blue)]" /> },
      ],
    },
    {
      category: "CI/CD Integration",
      icon: <FaRocket className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        { name: "Jenkins", description: "Continuous integration server", icon: <FaPlayCircle className="w-6 h-6 text-[theme(color.brand.blue)]" /> },
        { name: "GitLab CI", description: "Built-in CI/CD platform", icon: <FaGitlab className="w-6 h-6 text-[theme(color.brand.blue)]" /> },
        { name: "GitHub Actions", description: "Workflow automation", icon: <FaGithub className="w-6 h-6 text-[theme(color.brand.blue)]" /> },
        { name: "Azure DevOps", description: "Microsoft DevOps platform", icon: <FaMicrosoft className="w-6 h-6 text-[theme(color.brand.blue)]" /> },
        { name: "CircleCI", description: "Cloud-based CI/CD platform", icon: <FaCircle className="w-6 h-6 text-[theme(color.brand.blue)]" /> },
        { name: "Docker", description: "Containerization platform", icon: <FaDocker className="w-6 h-6 text-[theme(color.brand.blue)]" /> },
      ],
    },
    {
      category: "Security Tools",
      icon: <FaShieldAlt className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        { name: "OWASP ZAP", description: "Security testing proxy", icon: <FaShieldAlt className="w-6 h-6 text-[theme(color.brand.blue)]" /> },
        { name: "Burp Suite", description: "Web application security testing", icon: <FaLock className="w-6 h-6 text-[theme(color.brand.blue)]" /> },
        { name: "Nessus", description: "Vulnerability scanner", icon: <FaShieldAlt className="w-6 h-6 text-[theme(color.brand.blue)]" /> },
        { name: "Wireshark", description: "Network protocol analyzer", icon: <FaWifi className="w-6 h-6 text-[theme(color.brand.blue)]" /> },
        { name: "SQLMap", description: "SQL injection testing tool", icon: <FaDatabase className="w-6 h-6 text-[theme(color.brand.blue)]" /> },
        { name: "Nikto", description: "Web server scanner", icon: <FaServer className="w-6 h-6 text-[theme(color.brand.blue)]" /> },
      ],
    },
  ];

  return (
    <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaTools />
            <span className="text-sm">Tools & Frameworks</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-[theme(color.brand.blue)]">
              Tools & Frameworks
            </span>{" "}
            We Use
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            We leverage industry-leading tools and frameworks to deliver
            comprehensive API testing solutions that ensure reliability,
            performance, and security.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {toolCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-50 p-6 rounded-xl border border-gray-200"
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-2xl font-semibold text-gray-900 ml-3">
                  {category.category}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-center mb-4">
                      {tool.icon}
                      <h4 className="font-semibold text-gray-900 ml-3">{tool.name}</h4>
                    </div>
                    <p className="text-gray-600 text-sm">{tool.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[theme(color.brand.blue)]/10 p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Custom Tool Integration
          </h3>
          <p className="text-gray-700 text-lg mb-6 max-w-3xl mx-auto">
            We can integrate with your existing tools and frameworks, or
            recommend the best combination for your specific API testing
            requirements.
          </p>
          <Link href="/contact-us">
            <button className="bg-[theme(color.brand.blue)] cursor-pointer text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-colors duration-300">
              Discuss Your Requirements
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ApiToolsFramework;
