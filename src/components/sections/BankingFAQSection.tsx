"use client";

import React, { useState } from "react";
import { 
  FaQuestionCircle, 
  FaChevronDown, 
  FaChevronUp,
  FaShieldAlt,
  FaGavel,
  FaClock,
  FaUsers
} from "react-icons/fa";

const BankingFAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      category: "Security Testing",
      icon: FaShieldAlt,
      questions: [
        {
          question: "What types of security testing do you perform for banking applications?",
          answer: "We conduct comprehensive security testing including penetration testing, vulnerability assessments, security code reviews, authentication testing, authorization testing, data encryption validation, and compliance testing for standards like PCI DSS, SOX, and GDPR. Our security testing covers web applications, mobile apps, APIs, and core banking systems."
        },
        {
          question: "How do you ensure the security of our sensitive financial data during testing?",
          answer: "We follow strict data protection protocols including data masking, synthetic data generation, secure test environments, encrypted data transmission, and signed NDAs. Our team is trained in banking security standards and we maintain ISO 27001 certification. All testing is performed in isolated environments with no production data exposure."
        },
        {
          question: "Can you test for compliance with multiple regulatory standards simultaneously?",
          answer: "Yes, we have extensive experience testing for multiple compliance standards including PCI DSS, SOX, GDPR, Basel III, FFIEC guidelines, and regional banking regulations. Our testing frameworks are designed to validate compliance across multiple standards efficiently, reducing redundancy and ensuring comprehensive coverage."
        }
      ]
    },
    {
      category: "Compliance & Regulations",
      icon: FaGavel,
      questions: [
        {
          question: "How do you stay updated with changing banking regulations?",
          answer: "Our team includes certified compliance experts who continuously monitor regulatory changes through industry associations, regulatory bodies, and compliance networks. We maintain partnerships with legal and compliance firms, attend industry conferences, and have dedicated research teams tracking regulatory updates across different jurisdictions."
        },
        {
          question: "What documentation do you provide for audit purposes?",
          answer: "We provide comprehensive audit-ready documentation including test plans, test cases, execution reports, compliance matrices, risk assessments, remediation recommendations, and certification reports. All documentation follows industry standards and regulatory requirements, making audit processes smoother and more efficient."
        },
        {
          question: "How long does a typical compliance testing engagement take?",
          answer: "The duration depends on the scope and complexity of your systems. A basic PCI DSS assessment typically takes 2-4 weeks, while comprehensive multi-standard compliance testing can take 8-12 weeks. We provide detailed project timelines during the planning phase and offer expedited services for urgent compliance needs."
        }
      ]
    },
    {
      category: "Testing Process",
      icon: FaClock,
      questions: [
        {
          question: "How do you minimize disruption to our live banking systems?",
          answer: "We use non-intrusive testing methodologies, work during off-peak hours, utilize staging environments that mirror production, and employ gradual testing approaches. Our team coordinates closely with your operations team to ensure minimal impact on business operations while maintaining comprehensive test coverage."
        },
        {
          question: "What is your approach to testing core banking systems?",
          answer: "Our core banking testing approach includes functional testing of all modules, integration testing between systems, data integrity validation, performance testing under various loads, disaster recovery testing, and end-to-end transaction flow validation. We have experience with major core banking platforms like Temenos, FIS, and custom-built systems."
        },
        {
          question: "Do you provide ongoing testing support after implementation?",
          answer: "Yes, we offer various ongoing support models including continuous testing services, regular security assessments, compliance monitoring, regression testing for updates, and 24/7 monitoring services. Our support packages are customizable based on your specific needs and can include dedicated testing teams."
        }
      ]
    },
    {
      category: "Technology & Tools",
      icon: FaUsers,
      questions: [
        {
          question: "What testing tools and technologies do you use for banking applications?",
          answer: "We use industry-leading tools including Selenium for automation, LoadRunner and JMeter for performance testing, OWASP ZAP and Burp Suite for security testing, Postman for API testing, and specialized banking testing tools. We also have proprietary frameworks designed specifically for banking domain testing."
        },
        {
          question: "Can you integrate with our existing CI/CD pipelines?",
          answer: "Absolutely. We have experience integrating with popular CI/CD tools like Jenkins, GitLab CI, Azure DevOps, and AWS CodePipeline. Our automated testing frameworks can be seamlessly integrated into your development workflow, enabling continuous testing and faster release cycles while maintaining quality standards."
        },
        {
          question: "How do you handle testing for mobile banking applications?",
          answer: "Our mobile banking testing covers iOS and Android platforms, including functional testing, security testing, performance testing, usability testing, and compatibility testing across different devices and OS versions. We test biometric authentication, offline functionality, push notifications, and integration with backend systems."
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex: number, questionIndex: number) => {
    const faqIndex = categoryIndex * 1000 + questionIndex;
    setOpenFAQ(openFAQ === faqIndex ? null : faqIndex);
  };

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaQuestionCircle className="w-4 h-4 text-[theme(color.brand.blue)]" />
            <span className="text-sm font-medium text-[theme(color.brand.blue)]">Frequently Asked Questions</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Common Questions About
            <span className="block text-[theme(color.brand.blue)]">Banking Testing Services</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get answers to the most frequently asked questions about our banking and finance 
            testing services, compliance requirements, and implementation processes.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-xl flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
              </div>

              {/* Questions */}
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const faqIndex = categoryIndex * 1000 + questionIndex;
                  const isOpen = openFAQ === faqIndex;
                  
                  return (
                    <div
                      key={questionIndex}
                      className="border border-gray-200 rounded-2xl overflow-hidden hover:border-[theme(color.brand.blue)] transition-colors duration-300"
                    >
                      <button
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                        onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                      >
                        <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                        {isOpen ? (
                          <FaChevronUp className="w-5 h-5 text-[theme(color.brand.blue)] flex-shrink-0" />
                        ) : (
                          <FaChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-4 border-t border-gray-100 bg-gray-50">
                          <p className="text-gray-600 leading-relaxed pt-4">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Support */}
        <div className="mt-16 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our banking testing experts are here to help. Get personalized answers to your specific 
            questions and learn how our services can benefit your financial institution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl hover:scale-98 transition-all duration-300">
              Schedule Expert Consultation
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:border-[theme(color.brand.blue)] hover:text-[theme(color.brand.blue)] transition-all duration-300">
              Contact Support Team
            </button>
          </div>
        </div>

        {/* Knowledge Base CTA */}
        <div className="mt-16 bg-gradient-to-br from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Explore Our Knowledge Base</h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Access our comprehensive library of banking testing resources, best practices, 
            compliance guides, and industry insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[theme(color.brand.blue)] px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 hover:scale-98 transition-all duration-200 ease-in-out">
              Browse Knowledge Base
            </button>
            <button className="bg-white bg-opacity-20 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-opacity-30 hover:scale-98 transition-all duration-200 ease-in-out border border-white border-opacity-30">
              Download Testing Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankingFAQSection;

