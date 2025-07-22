"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const LaunchFastFAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is LaunchFast QA and how does it differ from traditional testing?",
      answer: "LaunchFast QA is our specialized rapid testing service designed for startups and fast-moving development teams. Unlike traditional testing that can take weeks or months, LaunchFast QA delivers comprehensive quality assurance in 48-72 hours through parallel testing streams, automated processes, and agile methodologies. We focus on critical path validation, MVP testing, and launch readiness assessment to help you get to market faster without compromising quality."
    },
    {
      question: "How quickly can you start testing our application?",
      answer: "We can begin LaunchFast QA within 24 hours of project initiation. Our rapid onboarding process includes immediate requirement analysis, test environment setup, and team allocation. For urgent launches, we offer same-day testing initiation with our dedicated rapid response team. The key is having your application ready for testing and clear acceptance criteria defined."
    },
    {
      question: "What types of applications and technologies do you support?",
      answer: "LaunchFast QA supports all major platforms and technologies including web applications (React, Angular, Vue.js), mobile apps (iOS, Android, React Native, Flutter), APIs (REST, GraphQL, SOAP), cloud platforms (AWS, Azure, GCP), and emerging technologies like AI/ML applications. Our team is experienced with modern development stacks and can adapt quickly to new technologies."
    },
    {
      question: "How do you ensure quality with such rapid testing cycles?",
      answer: "We maintain quality through risk-based testing, automated regression suites, parallel test execution, and experienced QA professionals. Our approach prioritizes critical user journeys, business-critical features, and security vulnerabilities. We use advanced testing tools, continuous monitoring, and real-time reporting to ensure comprehensive coverage despite the accelerated timeline."
    },
    {
      question: "What is included in your LaunchFast QA service?",
      answer: "LaunchFast QA includes functional testing, performance validation, security assessment, cross-platform compatibility, API testing, user experience validation, and launch readiness checklist. We also provide real-time reporting, bug triage, regression testing, and post-launch monitoring. Each service is customized based on your specific application type and launch requirements."
    },
    {
      question: "How do you integrate with our development and CI/CD processes?",
      answer: "We seamlessly integrate with popular CI/CD tools like Jenkins, GitHub Actions, GitLab CI, and Azure DevOps. Our team can plug into your existing workflows, participate in daily standups, and provide continuous feedback throughout development sprints. We support automated test execution, real-time reporting, and can trigger testing based on code commits or deployment events."
    },
    {
      question: "What happens if critical issues are found during testing?",
      answer: "Critical issues are immediately escalated with detailed reproduction steps, impact analysis, and recommended fixes. We provide real-time communication through Slack, Teams, or your preferred platform. Our team works closely with your developers to verify fixes quickly and ensure rapid resolution. We also offer emergency testing services for critical bug fixes that need immediate validation."
    },
    {
      question: "Do you provide testing for MVP and early-stage products?",
      answer: "Yes, LaunchFast QA is specifically designed for MVPs and early-stage products. We understand startup constraints and focus on validating core functionality, user experience, and market readiness. Our MVP testing includes feature validation, user journey testing, performance baseline establishment, and feedback collection setup to help you iterate quickly based on real user data."
    },
    {
      question: "What are your pricing models for LaunchFast QA?",
      answer: "We offer flexible pricing models including project-based pricing for one-time launches, sprint-based pricing for ongoing development, and retainer models for continuous testing support. Pricing depends on application complexity, testing scope, timeline requirements, and team size needed. We provide transparent quotes within 24 hours and offer startup-friendly packages for early-stage companies."
    },
    {
      question: "How do you handle testing for different time zones and urgent launches?",
      answer: "Our global team operates across multiple time zones to provide 24/7 testing support. For urgent launches, we can mobilize testing teams within hours and provide round-the-clock coverage. We offer follow-the-sun testing models where testing continues across different time zones, ensuring maximum productivity and fastest possible turnaround times for critical launches."
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
            LaunchFast QA <span className="text-brand-blue">Frequently Asked Questions</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Get answers to common questions about our LaunchFast QA services, processes, 
            and how we can help accelerate your product launch.
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
                <div className="flex-shrink-0 text-blue-600">
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
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our LaunchFast QA experts are ready to discuss your specific requirements and help you 
            plan the perfect rapid testing strategy for your product launch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
              Contact LaunchFast Team
            </button>
          </div>
          <div className="mt-6 text-blue-100 text-sm">
            📞 Call us: +1 (555) 123-4567 | ✉️ Email: launchfast@testriq.com
          </div>
        </div>

        {/* Quick Facts */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">48hr</div>
            <div className="text-gray-600">Average Turnaround</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-2xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-2xl font-bold text-purple-600 mb-2">300+</div>
            <div className="text-gray-600">Successful Launches</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchFastFAQs;

