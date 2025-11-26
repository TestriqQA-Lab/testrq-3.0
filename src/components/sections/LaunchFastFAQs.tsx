"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const LaunchFastFAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question:
        "What is LaunchFast QA and how does it differ from traditional testing?",
      answer:
        (<>LaunchFast QA is our specialized rapid testing sprint service tailored for startups and fast-moving development teams. Unlike traditional QA that takes weeks, LaunchFast QA delivers comprehensive quality assurance within 48–72 hours using parallel testing streams, automated <Link title="regression testing" href='regression-testing'>regression testing</Link>, and <Link title="agile QA methodologies" href='blog/post/integrating-qa-into-agile-a-step-by-step-guide'>agile QA methodologies</Link>. We focus on critical path validation, MVP QA testing, and launch readiness assessments to help you go to market faster without compromising on quality or reliability.</>),
    },
    {
      question: "How quickly can you start testing our application?",
      answer:
        (<>We can initiate LaunchFast QA within 24 hours of project kickoff. Our rapid onboarding includes immediate requirement analysis, test <Link title="environment setup" href='blog/post/how-environment-setup-shapes-reliable-web-application-testing'>environment setup</Link>, and QA team allocation. For urgent go-to-market timelines, our dedicated rapid response team enables same-day testing initiation. To accelerate execution, ensure your application is ready and acceptance criteria are clearly defined.</>),
    },
    {
      question: "What types of applications and technologies do you support?",
      answer:
        (<>LaunchFast QA supports all major platforms and technologies, including <Link title="web application testing" href='web-application-testing-services'>web application testing</Link> (React, Angular, Vue.js), <Link title="mobile testing" href='mobile-application-testing'>mobile testing</Link> (iOS, Android, React Native, Flutter), <Link href='api-testing'>API testing services</Link> (REST, GraphQL, SOAP), and cloud platforms like AWS, Azure, and GCP. We also cover <Link  title="AI application testing" href='ai-application-testing'>AI application testing</Link> and modern tech stacks. Our expert QA engineers adapt rapidly to evolving tools and technologies, ensuring seamless integration with your development workflow.</>),
    },
    {
      question: "How do you ensure quality with such rapid testing cycles?",
      answer:
        (<>We ensure quality with risk-based testing, automated regression suites, and parallel test execution, led by experienced QA professionals. Our LaunchFast QA approach prioritizes critical user journeys, business-critical features, and security vulnerabilities. Using tools like <Link title="Selenium" href='blog/post/getting-started-with-selenium-a-beginners-guide'>Selenium</Link>, <Link title="Cypress" href='blog/post/how-to-write-maintainable-test-scripts-in-selenium-or-cypress'>Cypress</Link>, and <Link title="JMeter" href='blog/post/how-to-use-jmeter-for-performance-testing-step-by-step-guide'>JMeter</Link>, we provide real-time defect detection, continuous monitoring, and comprehensive test coverage—even within accelerated timelines.</>),
    },
    {
      question: "What is included in your LaunchFast QA service?",
      answer:
        (<>LaunchFast QA includes functional testing, performance validation, security assessment, cross-platform compatibility, <Link title="API testing services" href='api-testing'>API testing services</Link>, user experience validation, and a detailed launch readiness checklist. We also offer real-time reporting, bug triage, automated <Link title="regression testing" href='regression-testing'>regression testing</Link>, and post-launch monitoring. Each service is tailored to your application type, tech stack, and go-to-market requirements, ensuring agile, high-impact QA delivery.</>),
    },
    {
      question:
        "How do you integrate with our development and CI/CD processes?",
      answer:
        (<>We seamlessly integrate LaunchFast QA with popular <Link title="CI/CD" href='blog/post/ci-cd-test-automation-integration-deliver-faster-with-confidence'>CI/CD</Link> tools like Jenkins, GitHub Actions, GitLab CI, and Azure DevOps. Our team embeds into your <Link title="agile development" href='blog/post/continuous-regression-testing-ensuring-quality-in-agile-devops'>agile development</Link> workflows, joins daily standups, and delivers continuous QA feedback throughout development sprints. We support automated test execution, real-time reporting, and trigger tests based on code commits or deployment events, ensuring faster, defect-free releases.</>),
    },
    {
      question: "What happens if critical issues are found during testing?",
      answer:
        "Critical issues are escalated immediately with detailed reproduction steps, impact analysis, and recommended fixes. We maintain real-time communication via Slack, Teams, or your preferred platform. Our QA engineers collaborate directly with your developers to verify fixes and ensure rapid resolution. For urgent scenarios, we offer emergency testing services to validate critical bug fixes with speed and precision.",
    },
    {
      question: "Do you provide testing for MVP and early-stage products?",
      answer:
        "Yes, LaunchFast QA is purpose-built for MVPs and early-stage products. We understand startup constraints and focus on validating core functionality, user experience, and market readiness. Our MVP QA testing includes feature validation, user journey testing, performance baseline setup, and feedback loop integration—empowering you to iterate quickly based on real user insights.",
    },
    {
      question: "What are your pricing models for LaunchFast QA?",
      answer:
        (<>We offer flexible pricing models including project-based pricing for one-time launches, sprint-based QA pricing for ongoing development, and retainer models for continuous QA services. Costs vary by application complexity, testing scope, timeline, and team size. We deliver transparent quotes within 24 hours and offer startup-friendly QA packages tailored for <Link title="early-stage companies" href='blog/post/why-outsourcing-qa-makes-sense-for-startups-and-enterprises'>early-stage companies</Link>.</>),
    },
    {
      question:
        "How do you handle testing for different time zones and urgent launches?",
      answer:
        (<>Our global QA team operates across multiple time zones to deliver 24/7 testing support. For urgent product launches, we can mobilize rapid testing teams within hours and provide round-the-clock coverage. Using a follow-the-sun testing model, we ensure <Link title="continuous execution" href='blog/post/test-execution-comprehensive-testing-implementation'>continuous execution</Link>, maximum productivity, and the fastest turnaround times for critical go-to-market QA needs.</>),
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            LaunchFast QA{" "}
            <span className="text-brand-blue">Frequently Asked Questions</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Get answers to common questions about our LaunchFast QA services,
            processes, and how we can help accelerate your <Link title="product launch" href='blog/post/performance-optimization-for-pre-launch-software-testing'>product launch</Link>.
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
            Our LaunchFast QA experts are ready to discuss your specific
            requirements and help you plan the perfect rapid testing strategy
            for your product launch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={"https://calendar.app.google/uUHn8prcXbdqcvVb6"} target={ "_blank" } title="Contact Us – Testriq QA Lab">
              <button className="border-2 cursor-pointer border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
                Schedule Consultation
              </button>
            </Link>
          </div>
          <div className="mt-6 text-blue-100 text-sm">
            📞 Call us: (+91) 915-2929-343 | ✉️ Email: contact@testriq.com
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
