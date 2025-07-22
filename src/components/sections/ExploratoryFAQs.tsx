"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ExploratoryFAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is exploratory testing and how does it differ from scripted testing?",
      answer: "Exploratory testing is a simultaneous learning, test design, and test execution approach where testers actively investigate the application to discover issues. Unlike scripted testing that follows predetermined test cases, exploratory testing combines human intuition, creativity, and systematic investigation to uncover bugs, usability issues, and edge cases that scripted tests often miss. It's particularly effective for finding unexpected behaviors and improving overall user experience."
    },
    {
      question: "When should I use exploratory testing in my development process?",
      answer: "Exploratory testing is most valuable during several key phases: early in development to understand application behavior, before major releases to catch critical issues, when investigating user-reported problems, for new feature validation, and when you need to assess overall user experience. It's especially beneficial for complex applications, user-facing features, and when you want to validate that your application works as users expect, not just as documented."
    },
    {
      question: "How do you ensure systematic coverage in exploratory testing?",
      answer: "We use Session-Based Test Management (SBTM) to ensure systematic coverage. This includes creating detailed test charters that define exploration objectives, time-boxing sessions (typically 2-4 hours), maintaining comprehensive session notes, tracking coverage areas, and conducting regular debriefings. We also use risk-based approaches, persona-based testing, and heuristic evaluation to ensure all critical areas are thoroughly explored."
    },
    {
      question: "What types of issues does exploratory testing typically uncover?",
      answer: "Exploratory testing excels at finding usability problems, edge case failures, integration issues, performance bottlenecks under real usage, accessibility problems, security vulnerabilities, workflow interruptions, data validation issues, error handling gaps, and inconsistent user experiences. It's particularly effective at discovering issues that occur when users deviate from expected paths or when systems interact in unexpected ways."
    },
    {
      question: "How do you document and report findings from exploratory testing?",
      answer: "We maintain detailed session notes during exploration, create comprehensive bug reports with reproduction steps, capture screenshots and videos for evidence, provide severity and impact assessments, document user experience insights, and deliver actionable improvement recommendations. All findings are categorized by risk level and include clear guidance on resolution priorities and potential business impact."
    },
    {
      question: "Can exploratory testing be integrated with automated testing?",
      answer: "Absolutely! Exploratory testing complements automated testing perfectly. While automated tests handle repetitive regression testing and known scenarios, exploratory testing focuses on areas where human insight is crucial. We often use automation to set up test data and environments, allowing more time for creative exploration. Findings from exploratory testing can also inform new automated test cases for future regression testing."
    },
    {
      question: "What skills and experience do your exploratory testers have?",
      answer: "Our exploratory testing team includes certified professionals with expertise in Session-Based Test Management, heuristic evaluation, usability testing, security testing, and accessibility evaluation. They have experience across various industries and technologies, understand user psychology and behavior patterns, and are skilled in rapid issue identification and clear communication of findings to development teams."
    },
    {
      question: "How long does an exploratory testing engagement typically take?",
      answer: "Engagement duration depends on application complexity and scope. Typical engagements range from 1-2 weeks for focused feature exploration to 4-6 weeks for comprehensive application assessment. We structure work in time-boxed sessions (2-4 hours each) and provide regular updates. For ongoing projects, we can provide continuous exploratory testing support integrated with your development sprints."
    },
    {
      question: "What deliverables do you provide after exploratory testing?",
      answer: "We provide comprehensive session reports with detailed findings, prioritized bug reports with reproduction steps, usability and user experience insights, risk assessment and recommendations, test coverage summary, improvement suggestions for future testing, and executive summary with key findings and business impact. All deliverables are tailored to your team's needs and technical environment."
    },
    {
      question: "How do you measure the effectiveness of exploratory testing?",
      answer: "We measure effectiveness through several metrics: number and severity of issues discovered, coverage of application areas and user scenarios, time to find critical issues, user experience improvements identified, prevention of post-release bugs, and client satisfaction with insights provided. We also track the business impact of issues found and resolved, demonstrating the ROI of exploratory testing investments."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Exploratory Testing Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Get answers to common questions about our exploratory testing services, methodologies, 
            and how systematic investigation can improve your product quality.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 text-green-600">
                  {openFAQ === index ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Help Section */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Our exploratory testing experts are ready to discuss your specific requirements and help you 
            plan the perfect investigation strategy for your application.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-300">
              Contact Exploration Team
            </button>
          </div>
          <div className="mt-6 text-green-100 text-sm">
            📞 Call us: +1 (555) 123-4567 | ✉️ Email: exploratory@testriq.com
          </div>
        </div>

        {/* Quick Facts */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-2xl font-bold text-green-600 mb-2">95%</div>
            <div className="text-gray-600">Issue Discovery Rate</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Expert Support</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-2xl font-bold text-purple-600 mb-2">2,500+</div>
            <div className="text-gray-600">Bugs Discovered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploratoryFAQs;

