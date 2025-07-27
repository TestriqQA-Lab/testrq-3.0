"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ExploratoryFAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is exploratory testing and how does it differ from scripted testing?",
      answer: "Exploratory testing is a simultaneous learning, test design, and test execution approach where testers actively investigate the application to discover issues. Unlike scripted testing that follows predetermined test cases, exploratory testing combines human intuition, creativity, and systematic investigation to uncover bugs, usability issues, and edge cases that scripted tests often miss. It’s particularly effective for finding unexpected behaviors and enhancing overall user experience."
    },
    {
      question: "When should I use exploratory testing in my development process?",
      answer: "Exploratory testing is ideal for early-stage development, pre-release validation, or when validating complex user journeys and edge cases. Use it during agile sprints, MVP testing, or post-automated testing to uncover issues missed by scripted tests. It’s also valuable for usability-focused projects, new feature validation, or when rapid feedback is needed to refine user experience."
    },
    {
      question: "How do you ensure systematic coverage in exploratory testing?",
      answer: "We ensure systematic coverage through session-based test management (SBTM), charter-driven exploration, and coverage tracking. Our testers define clear charters, prioritize high-risk areas, and use tools like Session Tester and TestPad to monitor explored features and gaps. Heuristic evaluations and persona-based testing further ensure comprehensive investigation across all application areas."
    },
    {
      question: "What types of issues does exploratory testing typically uncover?",
      answer: "Exploratory testing uncovers usability issues, edge case failures, UX friction points, integration bugs, performance bottlenecks, and unexpected behaviors. It’s particularly effective for identifying critical issues like navigation flaws, accessibility gaps, checkout process errors, or complex scenario failures that automated tests may miss."
    },
    {
      question: "How do you document and report findings from exploratory testing?",
      answer: "We provide detailed session reports with bug descriptions, reproduction steps, screenshots, and videos (using tools like Loom or Snagit). Findings are logged in tools like Jira or Azure DevOps, with prioritized recommendations and UX insights. Summary reports include coverage metrics, risk assessments, and actionable improvement suggestions for developers."
    },
    {
      question: "Can exploratory testing be integrated with automated testing?",
      answer: "Yes, exploratory testing complements automated testing by identifying issues automation misses. We integrate exploratory findings into automated regression suites using tools like Selenium or Appium for future validation. Our team collaborates with developers to automate reproducible scenarios, ensuring a hybrid approach that maximizes coverage and efficiency."
    },
    {
      question: "What skills and experience do your exploratory testers have?",
      answer: "Our testers are ISTQB-certified with expertise in session-based testing, heuristic evaluation, and risk-based investigation. They have 5+ years of experience across web, mobile, API, and UX testing, with deep knowledge of tools like Jira, TestPad, and accessibility frameworks. Their creative and analytical skills ensure thorough exploration and actionable insights."
    },
    {
      question: "How long does an exploratory testing engagement typically take?",
      answer: "An exploratory testing engagement typically lasts 1-4 weeks, depending on application complexity. Individual sessions are 2-4 hours, with daily or weekly cycles for agile projects. For urgent needs, we offer same-day exploration with rapid reporting, completing targeted sessions in 4-8 hours."
    },
    {
      question: "What deliverables do you provide after exploratory testing?",
      answer: "Deliverables include detailed bug reports, session logs, UX improvement recommendations, coverage reports, and risk assessments. We provide visual evidence (screenshots/videos), prioritized issue lists, and actionable insights in formats compatible with Jira, Azure DevOps, or Linear, tailored to your team’s needs."
    },
    {
      question: "How do you measure the effectiveness of exploratory testing?",
      answer: "Effectiveness is measured by issue discovery rate (95%), bug prevention rate (80%), UX improvement metrics (e.g., 75% user satisfaction increase), and coverage of critical user journeys and edge cases. We track findings against charters, monitor post-release bug rates, and assess client ROI to ensure impactful results."
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
            Exploratory Testing <span className="text-brand-blue">Frequently Asked Questions</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Get answers to common questions about our exploratory testing services, methodologies, and how systematic investigation can improve your product quality.
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
        <div className="mt-16 bg-gradient-to-r from-brand-blue to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Our exploratory testing experts are ready to discuss your specific requirements and help you plan the perfect investigation strategy for your application.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-brand-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
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

