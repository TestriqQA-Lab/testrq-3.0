import React from "react";

const ToolsTechStackSection = () => {
  const techStack = {
    "Programming Languages": [
      { name: "Java", description: "Enterprise-grade automation with robust frameworks", usage: "95%" },
      { name: "Python", description: "Rapid development and AI-powered testing", usage: "90%" },
      { name: "JavaScript/TypeScript", description: "Modern web testing and Node.js automation", usage: "85%" },
      { name: "C#", description: "Microsoft ecosystem and .NET applications", usage: "80%" },
      { name: "Go", description: "High-performance testing and microservices", usage: "70%" }
    ],
    "Test Management": [
      { name: "TestRail", description: "Comprehensive test case management", usage: "95%" },
      { name: "Jira", description: "Issue tracking and project management", usage: "100%" },
      { name: "Azure DevOps", description: "End-to-end DevOps lifecycle", usage: "85%" },
      { name: "Zephyr", description: "Advanced test management in Jira", usage: "80%" },
      { name: "qTest", description: "Agile test management platform", usage: "75%" }
    ],
    "CI/CD Integration": [
      { name: "Jenkins", description: "Continuous integration and deployment", usage: "95%" },
      { name: "GitHub Actions", description: "Native GitHub workflow automation", usage: "90%" },
      { name: "GitLab CI", description: "Integrated DevOps platform", usage: "85%" },
      { name: "Azure Pipelines", description: "Cloud-native CI/CD", usage: "80%" },
      { name: "Docker", description: "Containerized testing environments", usage: "90%" }
    ],
    "Cloud Platforms": [
      { name: "AWS", description: "Scalable cloud testing infrastructure", usage: "95%" },
      { name: "Azure", description: "Microsoft cloud services", usage: "85%" },
      { name: "Google Cloud", description: "Advanced AI and ML capabilities", usage: "75%" },
      { name: "BrowserStack", description: "Cross-browser testing platform", usage: "90%" },
      { name: "Sauce Labs", description: "Comprehensive testing cloud", usage: "85%" }
    ],
    "Monitoring & Analytics": [
      { name: "Grafana", description: "Advanced metrics visualization", usage: "85%" },
      { name: "Prometheus", description: "Monitoring and alerting toolkit", usage: "80%" },
      { name: "ELK Stack", description: "Elasticsearch, Logstash, and Kibana", usage: "75%" },
      { name: "New Relic", description: "Application performance monitoring", usage: "70%" },
      { name: "Datadog", description: "Cloud monitoring and analytics", usage: "65%" }
    ],
    "Specialized Tools": [
      { name: "OWASP ZAP", description: "Security testing and vulnerability scanning", usage: "90%" },
      { name: "JMeter", description: "Performance and load testing", usage: "95%" },
      { name: "Postman", description: "API development and testing", usage: "100%" },
      { name: "Wireshark", description: "Network protocol analysis", usage: "70%" },
      { name: "SonarQube", description: "Code quality and security analysis", usage: "85%" }
    ]
  };

  return (
    <section className="bg-[theme(color.background.gray)] px-8 py-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-[theme(color.brand.blue)] text-sm px-4 py-2 rounded-full mb-4">
            Technology Stack
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete{" "}
            <span className="text-[theme(color.brand.blue)]">Testing Ecosystem</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Our comprehensive technology stack encompasses every aspect of modern software testing, 
            from programming languages and frameworks to cloud platforms and specialized tools.
          </p>
        </div>

        {/* Tech Stack Categories */}
        <div className="space-y-12">
          {Object.entries(techStack).map(([category, tools], categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-[theme(color.brand.blue)] rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">{categoryIndex + 1}</span>
                </div>
                {category}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="border border-gray-200 rounded-lg p-6 hover:border-[theme(color.brand.blue)] transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-gray-900">{tool.name}</h4>
                      <span className="text-sm text-[theme(color.brand.blue)] font-medium">
                        {tool.usage}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">
                      {tool.description}
                    </p>
                    
                    {/* Usage Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-[theme(color.brand.blue)] h-2 rounded-full transition-all duration-300"
                        style={{ width: tool.usage }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Integration Benefits */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Integrated Testing Excellence</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Our technology stack is carefully curated and integrated to provide seamless testing workflows, 
              maximum efficiency, and comprehensive coverage across all testing domains.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🔄</div>
              <h4 className="font-semibold mb-2">Seamless Integration</h4>
              <p className="text-blue-100 text-sm">All tools work together harmoniously</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="font-semibold mb-2">High Performance</h4>
              <p className="text-blue-100 text-sm">Optimized for speed and efficiency</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🛡️</div>
              <h4 className="font-semibold mb-2">Enterprise Security</h4>
              <p className="text-blue-100 text-sm">Bank-grade security and compliance</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📊</div>
              <h4 className="font-semibold mb-2">Advanced Analytics</h4>
              <p className="text-blue-100 text-sm">Comprehensive reporting and insights</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsTechStackSection;

