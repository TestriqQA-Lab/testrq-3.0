"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaQuestionCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";

const CorporateQATrainingFAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of training programs do you offer?",
      answer:
        "We offer comprehensive training programs covering manual testing, automation testing, performance testing, security testing, API testing, mobile testing, and specialized industry-specific QA training. All programs can be customized to meet your organization's specific needs and skill levels.",
    },
    {
      question: "How long are the training programs?",
      answer:
        "Training duration varies based on the program and customization level. Our standard modules range from 16 to 60 hours, typically delivered over 2-8 weeks. We offer flexible scheduling options including intensive bootcamps, part-time evening sessions, and weekend programs to accommodate your team's availability.",
    },
    {
      question: "Do you provide certifications upon completion?",
      answer:
        "Yes, we provide industry-recognized certifications upon successful completion of our training programs. Our certifications are aligned with ISTQB standards and are valued by employers worldwide. Participants also receive detailed completion certificates and skill assessment reports.",
    },
    {
      question:
        "Can the training be customized for our specific industry or technology stack?",
      answer:
        "Absolutely! We specialize in creating customized training programs tailored to your industry requirements, technology stack, and business objectives. Our experts will work with you to develop a curriculum that addresses your specific challenges and use cases.",
    },
    {
      question: "What is the maximum batch size for training sessions?",
      answer:
        "We maintain small batch sizes of maximum 15 participants per session to ensure personalized attention and effective learning. For larger teams, we can conduct multiple batches or design special programs with additional instructors to maintain quality.",
    },
    {
      question: "Do you offer both online and on-site training?",
      answer:
        "Yes, we offer flexible delivery options including online virtual training, on-site training at your location, and hybrid models. Our online sessions are interactive with hands-on labs, while on-site training provides face-to-face interaction and can be customized to your infrastructure.",
    },
    {
      question: "What kind of ongoing support is provided after training?",
      answer:
        "We provide comprehensive post-training support including 24/7 access to learning resources, community forums, mentoring sessions, refresher workshops, and continuous learning materials. Our support team is available to help with implementation challenges and questions.",
    },
    {
      question: "How do you measure the effectiveness of the training?",
      answer:
        "We use multiple assessment methods including pre and post-training evaluations, hands-on project assessments, practical skill demonstrations, and feedback surveys. We also provide detailed progress reports and ROI metrics to track the impact on your organization's quality processes.",
    },
    {
      question: "What are the prerequisites for joining the training programs?",
      answer:
        "Prerequisites vary by program level. Basic programs require no prior QA experience, while advanced modules may require some testing background. We conduct initial assessments to recommend the most suitable program level and provide preparatory materials when needed.",
    },
    {
      question: "Do you provide training materials and resources?",
      answer:
        "Yes, we provide comprehensive training materials including course manuals, practical exercises, tool setups, sample projects, reference guides, and access to our online learning portal. All materials are updated regularly to reflect industry best practices and latest technologies.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaQuestionCircle />
            <span className="text-sm">Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Got Questions About Our
            <span className="bg-clip-text text-brand-blue">
              {" "}
              Training Programs?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our corporate QA training
            services, programs, and support offerings.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <FaChevronUp className="text-blue-600" />
                  ) : (
                    <FaChevronDown className="text-gray-400" />
                  )}
                </div>
              </button>

              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-200 pt-4">
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
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our training experts are here to help you find the perfect program
              for your team. Get personalized recommendations and detailed
              information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us#calendly-section">
                <button className="bg-brand-blue cursor-pointer text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Schedule Consultation
                </button>
              </Link>
              <Link href="/contact-us">
                <button className="border border-gray-300 cursor-pointer text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Contact Training Team
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateQATrainingFAQs;
