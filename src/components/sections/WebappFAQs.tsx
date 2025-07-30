"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What types of web applications do you test?",
    answer:
      "We test all types of web applications, including e-commerce platforms, SaaS applications, content management systems, social media platforms, educational portals, healthcare apps, and custom web solutions. Our web application testing approach is tailored to each product’s specific requirements, technology stack, and user scenarios to ensure complete functionality, security, and performance validation.",
  },
  {
    question: "How long does web application testing typically take?",
    answer:
      "Web application testing typically takes 1-4 weeks, depending on the application’s complexity, testing scope, and requirements. Simple applications may require 5-7 days, while complex platforms (e.g., e-commerce or SaaS) may take 2-4 weeks. Our systematic 6-step methodology ensures efficient execution, with rapid turnaround for urgent projects.",
  },
  {
    question: "What testing tools and technologies do you use?",
    answer:
      "We use industry-leading tools like Selenium, Cypress, and Playwright for functional testing; JMeter and K6 for performance testing; OWASP ZAP and Burp Suite for security testing; and WAVE and Lighthouse for usability and accessibility. Our ISTQB-certified team supports modern tech stacks (React, Angular, Node.js, etc.) and integrates with CI/CD platforms like Jenkins and GitLab CI.",
  },
  {
    question: "Do you provide automated testing for web applications?",
    answer:
      "Yes, we provide automated testing using tools like Selenium, Cypress, and TestCafe to ensure rapid, repeatable validation of functionality, performance, and regression scenarios. Automation is integrated with manual testing to maximize coverage and efficiency, tailored to your application’s needs and CI/CD pipeline.",
  },
  {
    question: "How do you ensure cross-browser compatibility?",
    answer:
      "We ensure cross-browser compatibility by testing on major browsers (Chrome, Firefox, Safari, Edge) and their versions using tools like BrowserStack and Sauce Labs. Our testing covers responsive design, functionality, and performance across devices, ensuring consistent user experiences and compliance with accessibility standards like WCAG.",
  },
];

export default function WebappFAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-[#f9fafb] py-16 px-8 md:px-12 lg:px-24">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-14">
        <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
          <span className="text-sm">
            ● Frequently Asked Questions
          </span>
        </div>

        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
          Common Questions About{" "}
          <span className="text-[theme(color.brand.blue)]">
            Web App Testing Services
          </span>
        </h2>
        <p className="mt-4 text-gray-600 text-base sm:text-lg">
          Find answers to the most frequently asked questions about our web
          application testing services, processes, and methodologies.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="max-w-5xl mx-auto space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden transition-all"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-5 flex justify-between items-center text-left text-gray-900 font-semibold text-base sm:text-lg"
            >
              <span>{item.question}</span>
              {activeIndex === index ? (
                <FaChevronUp className="text-gray-500" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </button>
            <div
              className={`px-6 pt-0 pb-5 text-gray-700 text-sm sm:text-base transition-all duration-300 ${activeIndex === index ? "block" : "hidden"
                }`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
