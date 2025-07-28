"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What types of web applications do you test?",
    answer:
      "We test all types of web applications including e-commerce platforms, SaaS applications, content management systems, social media platforms, educational portals, healthcare applications, and custom web solutions. Our testing approach is tailored to each application's specific requirements and technology stack.",
  },
  {
    question: "How long does web application testing typically take?",
    answer:
      "The duration depends on the complexity and scope of the project. On average, testing engagements range from 2 to 12 weeks. We provide a detailed timeline after assessing the application and project goals.",
  },
  {
    question: "What testing tools and technologies do you use?",
    answer:
      "We use a wide array of tools like Selenium, Cypress, Playwright, JMeter, Postman, and others based on project needs. We also work with popular CI/CD platforms and cloud-based testing tools for automation and scalability.",
  },
  {
    question: "Do you provide automated testing for web applications?",
    answer:
      "Yes, we offer both manual and automated testing services. We design and implement automation frameworks tailored to your technology stack and business needs to ensure efficient, scalable, and repeatable test processes.",
  },
  {
    question: "How do you ensure cross-browser compatibility?",
    answer:
      "We perform cross-browser testing using real devices and emulators to ensure that your application functions seamlessly across major browsers such as Chrome, Firefox, Safari, and Edge, on both desktop and mobile devices.",
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
        <span className="inline-flex items-center gap-2 px-4 py-1 text-sm font-medium rounded-full bg-blue-100 text-[theme(color.brand.blue)]">
          <span className="w-2 h-2 bg-[theme(color.brand.blue)] rounded-full" />
          Frequently Asked Questions
        </span>
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
              className={`px-6 pt-0 pb-5 text-gray-700 text-sm sm:text-base transition-all duration-300 ${
                activeIndex === index ? "block" : "hidden"
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
