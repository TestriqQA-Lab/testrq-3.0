'use client';

import React, { useState } from 'react';
import { ChevronRight, BookOpen, Code, Shield, Zap, Target, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { FaFlask } from 'react-icons/fa';

const SoftwareTestingGuideComprehensiveSlider = () => {
  const [activeTab, setActiveTab] = useState(0);

  const testingMethodologies = [
    {
      id: 'fundamentals',
      title: 'Testing Fundamentals',
      icon: <BookOpen className="h-6 w-6" />,
      description: 'Master the core principles and foundations of software testing',
      content: {
        overview: 'Build a solid foundation in software testing principles, methodologies, and best practices that form the backbone of quality assurance.',
        keyTopics: [
          'Software Testing Life Cycle (STLC)',
          'Test Planning and Strategy',
          'Test Case Design Techniques',
          'Defect Life Cycle Management',
          'Testing Documentation',
          'Quality Metrics and KPIs'
        ],
        benefits: [
          'Understand testing fundamentals thoroughly',
          'Create effective test strategies',
          'Design comprehensive test cases',
          'Manage defects efficiently'
        ],
        learningPath: 'Foundation → Intermediate → Advanced → Specialization'
      }
    },
    {
      id: 'manual-testing',
      title: 'Manual Testing Mastery',
      icon: <Users className="h-6 w-6" />,
      description: 'Comprehensive guide to manual testing techniques and methodologies',
      content: {
        overview: 'Deep dive into manual testing approaches, exploratory testing, and user experience validation techniques for thorough quality assurance.',
        keyTopics: [
          'Exploratory Testing Techniques',
          'User Acceptance Testing (UAT)',
          'Usability Testing Methods',
          'Cross-browser Testing',
          'Mobile Testing Strategies',
          'Accessibility Testing'
        ],
        benefits: [
          'Master exploratory testing skills',
          'Validate user experience effectively',
          'Ensure cross-platform compatibility',
          'Identify usability issues early'
        ],
        learningPath: 'Basic Manual → Exploratory → UAT → Specialized Testing'
      }
    },
    {
      id: 'automation',
      title: 'Test Automation',
      icon: <Code className="h-6 w-6" />,
      description: 'Advanced automation frameworks and scripting techniques',
      content: {
        overview: 'Master test automation frameworks, scripting languages, and CI/CD integration for scalable and maintainable automated testing solutions.',
        keyTopics: [
          'Automation Framework Design',
          'Selenium WebDriver Advanced',
          'API Testing Automation',
          'Mobile Automation (Appium)',
          'CI/CD Pipeline Integration',
          'Test Data Management'
        ],
        benefits: [
          'Build robust automation frameworks',
          'Integrate with CI/CD pipelines',
          'Reduce manual testing effort',
          'Improve test coverage and reliability'
        ],
        learningPath: 'Scripting Basics → Framework Design → CI/CD → Advanced Patterns'
      }
    },
    {
      id: 'performance',
      title: 'Performance Testing',
      icon: <Zap className="h-6 w-6" />,
      description: 'Load testing, stress testing, and performance optimization',
      content: {
        overview: 'Comprehensive performance testing methodologies including load testing, stress testing, and performance optimization techniques.',
        keyTopics: [
          'Load Testing Strategies',
          'Stress and Volume Testing',
          'Performance Monitoring',
          'Bottleneck Identification',
          'Scalability Testing',
          'Performance Optimization'
        ],
        benefits: [
          'Validate application performance',
          'Identify system bottlenecks',
          'Ensure scalability requirements',
          'Optimize application response times'
        ],
        learningPath: 'Performance Basics → Load Testing → Advanced Scenarios → Optimization'
      }
    },
    {
      id: 'security',
      title: 'Security Testing',
      icon: <Shield className="h-6 w-6" />,
      description: 'Vulnerability assessment and penetration testing techniques',
      content: {
        overview: 'Advanced security testing methodologies including vulnerability assessment, penetration testing, and security compliance validation.',
        keyTopics: [
          'Vulnerability Assessment',
          'Penetration Testing Basics',
          'OWASP Top 10 Testing',
          'Security Compliance Testing',
          'Authentication Testing',
          'Data Protection Validation'
        ],
        benefits: [
          'Identify security vulnerabilities',
          'Validate security controls',
          'Ensure compliance requirements',
          'Protect against cyber threats'
        ],
        learningPath: 'Security Basics → Vulnerability Testing → Penetration Testing → Compliance'
      }
    },
    {
      id: 'api-testing',
      title: 'API Testing',
      icon: <Target className="h-6 w-6" />,
      description: 'REST, SOAP, and GraphQL API testing methodologies',
      content: {
        overview: 'Master API testing techniques for REST, SOAP, and GraphQL APIs with comprehensive validation and integration testing strategies.',
        keyTopics: [
          'REST API Testing',
          'SOAP Service Testing',
          'GraphQL Testing',
          'API Security Testing',
          'Contract Testing',
          'API Performance Testing'
        ],
        benefits: [
          'Validate API functionality',
          'Ensure data integrity',
          'Test API security',
          'Verify integration points'
        ],
        learningPath: 'API Basics → REST Testing → Advanced Protocols → Integration Testing'
      }
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaFlask />
            <span className="text-sm">
              Comprehensive Testing Solutions
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Complete <span className='text-brand-blue'>Testing Methodology Guide</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore comprehensive testing methodologies with detailed guides, practical examples, and structured learning paths for every testing discipline.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {testingMethodologies.map((methodology, index) => (
              <button
                key={methodology.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === index
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {methodology.icon}
                <span className="ml-2 hidden sm:inline">{methodology.title}</span>
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
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Learning Path</h4>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
                    <div className="flex items-center text-sm text-gray-700">
                      <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                      {testingMethodologies[activeTab].content.learningPath}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Benefits</h4>
                  <div className="space-y-2">
                    {testingMethodologies[activeTab].content.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Topics Covered</h4>
                <div className="space-y-3">
                  {testingMethodologies[activeTab].content.keyTopics.map((topic, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3 flex items-center justify-between hover:bg-gray-100 transition-colors">
                      <span className="text-gray-700 font-medium">{topic}</span>
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-br from-brand-blue to-blue-600 rounded-xl text-white">
                  <h5 className="font-semibold mb-2">Ready to Start Learning?</h5>
                  <p className="text-blue-100 text-sm mb-4">
                    Access comprehensive guides, practical examples, and hands-on exercises.
                  </p>
                  <button className="bg-white text-brand-blue px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Start Learning
                  </button>
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

