'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, BookOpen, Users, Award } from 'lucide-react';

const SoftwareTestingGuideFAQs = () => {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const faqCategories = [
    {
      category: 'Getting Started',
      icon: <BookOpen className="h-5 w-5" />,
      faqs: [
        {
          question: 'What is software testing and why is it important?',
          answer: 'Software testing is the process of evaluating and verifying that a software application or system meets specified requirements and functions correctly. It\'s crucial for identifying bugs, ensuring quality, reducing costs, improving security, and enhancing user satisfaction. Testing helps prevent costly failures in production and builds confidence in software reliability.'
        },
        {
          question: 'What are the different types of software testing?',
          answer: 'Software testing can be categorized in multiple ways: by approach (manual vs automated), by level (unit, integration, system, acceptance), by type (functional vs non-functional), and by knowledge of code (black-box, white-box, gray-box). Each type serves specific purposes in ensuring comprehensive software quality.'
        },
        {
          question: 'How do I start a career in software testing?',
          answer: 'Begin by learning testing fundamentals, understanding different testing types, and gaining hands-on experience with testing tools. Consider pursuing certifications like ISTQB, practice with real applications, join testing communities, and start with entry-level positions. Our comprehensive guide provides structured learning paths for beginners.'
        },
        {
          question: 'What skills are required for software testing?',
          answer: 'Essential skills include analytical thinking, attention to detail, communication skills, basic programming knowledge, understanding of SDLC, familiarity with testing tools, and domain knowledge. Technical skills vary by specialization but generally include test case design, defect reporting, and tool proficiency.'
        }
      ]
    },
    {
      category: 'Testing Methodologies',
      icon: <Users className="h-5 w-5" />,
      faqs: [
        {
          question: 'What is the difference between manual and automated testing?',
          answer: 'Manual testing involves human testers executing test cases without automation tools, providing exploratory capabilities and user experience insights. Automated testing uses scripts and tools to execute tests, offering speed, repeatability, and efficiency for regression testing. Both approaches are complementary and serve different purposes in a comprehensive testing strategy.'
        },
        {
          question: 'When should I use automated testing vs manual testing?',
          answer: 'Use automated testing for repetitive tasks, regression testing, load testing, and when you have stable requirements. Manual testing is better for exploratory testing, usability testing, ad-hoc testing, and when requirements frequently change. The optimal approach often combines both methods strategically.'
        },
        {
          question: 'What is the Software Testing Life Cycle (STLC)?',
          answer: 'STLC consists of six phases: Requirement Analysis, Test Planning, Test Case Development, Test Environment Setup, Test Execution, and Test Closure. Each phase has specific deliverables and entry/exit criteria, ensuring systematic and thorough testing throughout the software development process.'
        },
        {
          question: 'How do I create effective test cases?',
          answer: 'Effective test cases should be clear, concise, and comprehensive. Include test case ID, description, preconditions, test steps, expected results, and priority. Use techniques like equivalence partitioning, boundary value analysis, and decision table testing. Ensure traceability to requirements and maintain test cases regularly.'
        }
      ]
    },
    {
      category: 'Tools & Technologies',
      icon: <Award className="h-5 w-5" />,
      faqs: [
        {
          question: 'Which testing tools should I learn first?',
          answer: 'Start with widely-used tools in your target domain: Selenium for web automation, Postman for API testing, JIRA for test management, and JMeter for performance testing. Choose tools based on your career goals, industry demand, and project requirements. Our tool guides provide comprehensive learning paths for each technology.'
        },
        {
          question: 'How do I choose the right automation framework?',
          answer: 'Consider factors like application type, team skills, budget, maintenance requirements, and scalability needs. Popular frameworks include Selenium WebDriver for web apps, Appium for mobile, and REST Assured for APIs. Evaluate frameworks based on ease of use, community support, documentation, and integration capabilities.'
        },
        {
          question: 'What programming languages are best for test automation?',
          answer: 'Popular choices include Java (widely used, extensive libraries), Python (easy to learn, versatile), C# (Microsoft ecosystem), and JavaScript (web-focused). Choose based on your team\'s expertise, application technology stack, and tool compatibility. Many testing tools support multiple languages.'
        },
        {
          question: 'How do I implement CI/CD for testing?',
          answer: 'Integrate automated tests into your CI/CD pipeline using tools like Jenkins, GitLab CI, or Azure DevOps. Set up automated test execution on code commits, implement parallel test execution, configure test reporting, and establish quality gates. Ensure fast feedback loops and maintain test stability for effective continuous integration.'
        }
      ]
    },
    {
      category: 'Best Practices',
      icon: <HelpCircle className="h-5 w-5" />,
      faqs: [
        {
          question: 'What are the key principles of effective testing?',
          answer: 'Key principles include: testing shows presence of defects (not absence), exhaustive testing is impossible, early testing saves time and money, defect clustering occurs, pesticide paradox requires test variation, testing is context-dependent, and absence-of-errors fallacy. Understanding these principles guides effective testing strategies.'
        },
        {
          question: 'How do I measure testing effectiveness?',
          answer: 'Use metrics like test coverage, defect detection rate, defect density, test execution rate, and mean time to detect/resolve defects. Track quality metrics such as customer satisfaction, production defects, and test ROI. Combine quantitative metrics with qualitative assessments for comprehensive evaluation.'
        },
        {
          question: 'What is risk-based testing?',
          answer: 'Risk-based testing prioritizes testing efforts based on risk assessment of different application areas. Identify potential risks, assess their probability and impact, prioritize testing accordingly, and allocate resources to high-risk areas. This approach optimizes testing efficiency and ensures critical functionality receives adequate attention.'
        },
        {
          question: 'How do I handle testing in Agile environments?',
          answer: 'Agile testing emphasizes continuous testing, early involvement, collaboration, and adaptability. Implement practices like test-driven development (TDD), behavior-driven development (BDD), continuous integration, automated regression testing, and regular retrospectives. Focus on delivering working software with quality built-in throughout the development process.'
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex: number, faqIndex: number) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setOpenFAQ(openFAQ === key ? null : key);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <span className="text-sm">
              ● Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            <span className='text-brand-blue'>Frequently</span> Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about software testing methodologies, tools, best practices, and career guidance.
          </p>
        </div>

        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-brand-blue to-blue-600 px-6 py-4">
                <div className="flex items-center text-white">
                  {category.icon}
                  <h3 className="text-xl font-semibold ml-3">{category.category}</h3>
                </div>
              </div>
              
              <div className="divide-y divide-gray-200">
                {category.faqs.map((faq, faqIndex) => {
                  const isOpen = openFAQ === `${categoryIndex}-${faqIndex}`;
                  return (
                    <div key={faqIndex} className="p-6">
                      <button
                        onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                        className="w-full flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg p-2"
                      >
                        <h4 className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </h4>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="mt-4 pl-2">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
            Still Have Questions?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Documentation</h4>
              <p className="text-gray-600 text-sm">
                Explore our comprehensive testing guides and documentation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Community</h4>
              <p className="text-gray-600 text-sm">
                Join our testing community for discussions and support.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Expert Support</h4>
              <p className="text-gray-600 text-sm">
                Get personalized guidance from our testing experts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareTestingGuideFAQs;

