'use client';

import React, { useState } from 'react';
import { Code, Smartphone, Shield, Zap, Database, Globe, CheckCircle, ExternalLink } from 'lucide-react';

const SoftwareTestingGuideToolsFramework = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const toolCategories = [
    {
      id: 'automation',
      title: 'Test Automation',
      icon: <Code className="h-6 w-6" />,
      description: 'Comprehensive automation testing tools and frameworks',
      tools: [
        { name: 'Selenium WebDriver', description: 'Web application automation', level: 'Beginner to Advanced', popularity: '95%' },
        { name: 'Cypress', description: 'Modern web testing framework', level: 'Intermediate', popularity: '88%' },
        { name: 'Playwright', description: 'Cross-browser automation', level: 'Intermediate', popularity: '82%' },
        { name: 'TestComplete', description: 'Commercial automation tool', level: 'Beginner', popularity: '75%' },
        { name: 'Katalon Studio', description: 'All-in-one automation solution', level: 'Beginner', popularity: '78%' },
        { name: 'Robot Framework', description: 'Keyword-driven automation', level: 'Intermediate', popularity: '70%' }
      ]
    },
    {
      id: 'mobile',
      title: 'Mobile Testing',
      icon: <Smartphone className="h-6 w-6" />,
      description: 'Mobile application testing tools and frameworks',
      tools: [
        { name: 'Appium', description: 'Cross-platform mobile automation', level: 'Intermediate', popularity: '90%' },
        { name: 'Espresso', description: 'Android UI testing framework', level: 'Intermediate', popularity: '85%' },
        { name: 'XCUITest', description: 'iOS native testing framework', level: 'Intermediate', popularity: '80%' },
        { name: 'Detox', description: 'React Native testing framework', level: 'Advanced', popularity: '72%' },
        { name: 'Firebase Test Lab', description: 'Cloud-based mobile testing', level: 'Beginner', popularity: '75%' },
        { name: 'BrowserStack', description: 'Real device cloud testing', level: 'Beginner', popularity: '88%' }
      ]
    },
    {
      id: 'performance',
      title: 'Performance Testing',
      icon: <Zap className="h-6 w-6" />,
      description: 'Load testing and performance monitoring tools',
      tools: [
        { name: 'JMeter', description: 'Open-source load testing tool', level: 'Intermediate', popularity: '92%' },
        { name: 'LoadRunner', description: 'Enterprise performance testing', level: 'Advanced', popularity: '85%' },
        { name: 'Gatling', description: 'High-performance load testing', level: 'Advanced', popularity: '78%' },
        { name: 'K6', description: 'Developer-centric load testing', level: 'Intermediate', popularity: '75%' },
        { name: 'BlazeMeter', description: 'Cloud-based performance testing', level: 'Beginner', popularity: '80%' },
        { name: 'WebPageTest', description: 'Web performance analysis', level: 'Beginner', popularity: '70%' }
      ]
    },
    {
      id: 'security',
      title: 'Security Testing',
      icon: <Shield className="h-6 w-6" />,
      description: 'Security testing and vulnerability assessment tools',
      tools: [
        { name: 'OWASP ZAP', description: 'Web application security scanner', level: 'Intermediate', popularity: '88%' },
        { name: 'Burp Suite', description: 'Web vulnerability scanner', level: 'Advanced', popularity: '92%' },
        { name: 'Nessus', description: 'Vulnerability assessment tool', level: 'Intermediate', popularity: '85%' },
        { name: 'SonarQube', description: 'Code quality and security analysis', level: 'Intermediate', popularity: '80%' },
        { name: 'Checkmarx', description: 'Static application security testing', level: 'Advanced', popularity: '75%' },
        { name: 'Veracode', description: 'Application security platform', level: 'Intermediate', popularity: '78%' }
      ]
    },
    {
      id: 'api',
      title: 'API Testing',
      icon: <Database className="h-6 w-6" />,
      description: 'API testing and service validation tools',
      tools: [
        { name: 'Postman', description: 'API development and testing', level: 'Beginner', popularity: '95%' },
        { name: 'REST Assured', description: 'Java-based API testing', level: 'Intermediate', popularity: '85%' },
        { name: 'SoapUI', description: 'API testing platform', level: 'Intermediate', popularity: '80%' },
        { name: 'Insomnia', description: 'API client and testing tool', level: 'Beginner', popularity: '75%' },
        { name: 'Newman', description: 'Postman command-line runner', level: 'Intermediate', popularity: '70%' },
        { name: 'Karate DSL', description: 'API test automation framework', level: 'Advanced', popularity: '68%' }
      ]
    },
    {
      id: 'web',
      title: 'Web Testing',
      icon: <Globe className="h-6 w-6" />,
      description: 'Cross-browser and web application testing tools',
      tools: [
        { name: 'Chrome DevTools', description: 'Browser developer tools', level: 'Beginner', popularity: '98%' },
        { name: 'Sauce Labs', description: 'Cloud testing platform', level: 'Intermediate', popularity: '85%' },
        { name: 'CrossBrowserTesting', description: 'Cross-browser testing service', level: 'Beginner', popularity: '80%' },
        { name: 'LambdaTest', description: 'Cross-browser testing platform', level: 'Beginner', popularity: '82%' },
        { name: 'Browserling', description: 'Live interactive cross-browser testing', level: 'Beginner', popularity: '75%' },
        { name: 'TestingBot', description: 'Automated cross-browser testing', level: 'Intermediate', popularity: '70%' }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Essential Testing <span className='text-brand-blue'>Tools & Frameworks</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Master the most popular and effective testing tools across all domains. Learn hands-on with comprehensive guides and practical examples.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {toolCategories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === index
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.icon}
                <span className="ml-2 hidden sm:inline">{category.title}</span>
              </button>
            ))}
          </div>

          {/* Active Category Content */}
          <div className="mb-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {toolCategories[activeCategory].title} Tools
              </h3>
              <p className="text-gray-600">
                {toolCategories[activeCategory].description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {toolCategories[activeCategory].tools.map((tool, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold text-gray-900">{tool.name}</h4>
                    <ExternalLink className="h-4 w-4 text-gray-400 hover:text-blue-600 cursor-pointer" />
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {tool.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Difficulty Level:</span>
                      <span className="font-medium text-gray-700">{tool.level}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Industry Usage:</span>
                      <span className="font-medium text-green-600">{tool.popularity}</span>
                    </div>
                    
                    <div className="pt-2">
                      <div className="bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: tool.popularity }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Resources */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Available Learning Resources for {toolCategories[activeCategory].title}
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'Video Tutorials',
                'Hands-on Labs',
                'Practice Projects',
                'Certification Prep'
              ].map((resource, index) => (
                <div key={index} className="flex items-center bg-white rounded-lg p-3">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-700">{resource}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tool Selection Guide */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            How to Choose the Right Testing Tools
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Assess Your Needs</h4>
              <p className="text-gray-600 text-sm">
                Identify your testing requirements, team skills, and project constraints.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Compare Options</h4>
              <p className="text-gray-600 text-sm">
                Evaluate tools based on features, cost, learning curve, and community support.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Start Learning</h4>
              <p className="text-gray-600 text-sm">
                Begin with our comprehensive guides and hands-on practice exercises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareTestingGuideToolsFramework;

