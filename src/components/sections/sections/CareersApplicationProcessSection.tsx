"use client";

import React, { useState } from "react";
import {
  FaFileAlt,
  FaUserCheck,
  FaVideo,
  FaCode,
  FaHandshake,
  FaTrophy,
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
  FaClock,
  FaCheckCircle,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";

const CareersApplicationProcessSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const processSteps = [
    {
      step: 1,
      icon: FaFileAlt,
      title: "Application Submission",
      description:
        "Submit your resume and cover letter through our careers portal. We review every application personally.",
      duration: "1-2 days",
      tips: "Tailor your resume to highlight relevant QA experience and include specific tools/technologies you've worked with.",
      color: "from-blue-500 to-blue-700",
    },
    {
      step: 2,
      icon: FaUserCheck,
      title: "Initial Screening",
      description:
        "HR team conducts a brief phone/video call to discuss your background, interests, and role expectations.",
      duration: "30 minutes",
      tips: "Be prepared to discuss your QA journey, career goals, and why you're interested in Testriq specifically.",
      color: "from-green-500 to-green-700",
    },
    {
      step: 3,
      icon: FaVideo,
      title: "Technical Interview",
      description:
        "Video interview with the hiring manager and team lead focusing on technical skills and problem-solving.",
      duration: "45-60 minutes",
      tips: "Review common QA concepts, testing methodologies, and be ready to discuss your past projects in detail.",
      color: "from-purple-500 to-purple-700",
    },
    {
      step: 4,
      icon: FaCode,
      title: "Practical Assessment",
      description:
        "Hands-on testing exercise or take-home assignment relevant to the role you're applying for.",
      duration: "2-3 hours",
      tips: "Focus on demonstrating your approach to problem-solving rather than just finding bugs. Document your process clearly.",
      color: "from-orange-500 to-red-500",
    },
    {
      step: 5,
      icon: FaUsers,
      title: "Team Interview",
      description:
        "Meet with potential team members to assess cultural fit and discuss collaboration style.",
      duration: "30-45 minutes",
      tips: "Ask questions about team dynamics, current projects, and growth opportunities. Show genuine interest in the team.",
      color: "from-teal-500 to-cyan-500",
    },
    {
      step: 6,
      icon: FaHandshake,
      title: "Final Decision",
      description:
        "Reference checks, offer discussion, and onboarding preparation. Welcome to the team!",
      duration: "2-3 days",
      tips: "Prepare your references in advance and be ready to discuss salary expectations and start date preferences.",
      color: "from-pink-500 to-rose-500",
    },
  ];

  const faqs = [
    {
      question: "How long does the entire hiring process take?",
      answer:
        "Our typical hiring process takes 2-3 weeks from application to offer. We move quickly while ensuring thorough evaluation. For urgent roles, we can expedite the process to 1-2 weeks. We'll keep you informed of timelines throughout the process.",
    },
    {
      question: "What should I expect in the technical interview?",
      answer:
        "The technical interview focuses on your QA knowledge, problem-solving approach, and relevant experience. We'll discuss testing methodologies, tools you've used, and how you handle different testing scenarios. It's more conversational than interrogational - we want to understand your thought process.",
    },
    {
      question: "Is the practical assessment mandatory for all roles?",
      answer:
        "Yes, all QA roles include a practical component, but it varies by position. Senior roles might involve system design or strategy discussions, while individual contributor roles focus on hands-on testing exercises. We provide clear instructions and reasonable timeframes for all assessments.",
    },
    {
      question: "Can I interview remotely?",
      answer:
        "Absolutely! All our interviews can be conducted remotely via video call. Even for office-based positions, we accommodate remote interviews. We use standard video conferencing tools and will send you all necessary details in advance.",
    },
    {
      question:
        "What if I don't have experience with specific tools mentioned in the job posting?",
      answer:
        "Don't let that stop you from applying! We value learning ability and foundational QA knowledge over specific tool experience. If you have strong testing fundamentals and willingness to learn, we provide training and support for new tools and technologies.",
    },
    {
      question: "Do you provide feedback if I'm not selected?",
      answer:
        "Yes, we provide constructive feedback to all candidates who complete our interview process. We believe feedback helps everyone grow, and we want to maintain positive relationships with talented professionals in the QA community.",
    },
    {
      question: "Can I reapply if I'm not selected this time?",
      answer:
        "Definitely! We encourage candidates to reapply after gaining additional experience or skills. We typically suggest waiting 6 months before reapplying for the same role, but you can apply for different positions anytime. Your previous application won't negatively impact future applications.",
    },
    {
      question: "What documents do I need to prepare?",
      answer:
        "You'll need an updated resume, cover letter (optional but recommended), and contact information for 2-3 professional references. For some roles, a portfolio of testing artifacts or automation scripts can be helpful. We'll let you know if anything specific is needed for your role.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const interviewTips = [
    {
      icon: FaLightbulb,
      title: "Research the Company",
      description:
        "Learn about our services, clients, and recent company news. Show genuine interest in our mission and values.",
    },
    {
      icon: FaCheckCircle,
      title: "Prepare Your Stories",
      description:
        "Use the STAR method (Situation, Task, Action, Result) to structure examples of your past QA experiences.",
    },
    {
      icon: FaQuestionCircle,
      title: "Ask Great Questions",
      description:
        "Prepare thoughtful questions about the role, team, growth opportunities, and company culture.",
    },
    {
      icon: FaClock,
      title: "Practice Time Management",
      description:
        "Be punctual for all interviews and manage your time well during practical assessments.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto ">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaTrophy className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">
              Application Process
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your Journey to
            <span className="block text-[theme(color.brand.blue)]">
              Joining Testriq
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We&apos;ve designed our hiring process to be thorough yet respectful of
            your time. Here&apos;s what you can expect at each step of your
            application journey.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-[theme(color.brand.blue)] text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.step}
                </div>

                <div
                  className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {step.description}
                </p>

                <div className="flex items-center gap-2 mb-4">
                  <FaClock className="w-4 h-4 text-[theme(color.brand.blue)]" />
                  <span className="text-sm font-medium text-[theme(color.brand.blue)]">
                    {step.duration}
                  </span>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <FaLightbulb className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">
                        Pro Tip:
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.tips}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interview Tips */}
        <div className="bg-white rounded-3xl p-12 shadow-lg border border-gray-100 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Interview Success Tips
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Make the most of your interview experience with these proven
              strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {interviewTips.map((tip, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[theme(color.brand.blue)] bg-opacity-10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <tip.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  {tip.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our hiring process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                >
                  <h4 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h4>
                  {openFAQ === index ? (
                    <FaChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  ) : (
                    <FaChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>

                {openFAQ === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-[theme(color.brand.blue)] to-blue-700 rounded-3xl p-12 text-white text-center">
          <FaTrophy className="w-16 h-16 text-white mx-auto mb-6 opacity-80" />
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your Application?
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Take the first step towards joining our world-class QA team. We&apos;re
            excited to learn about your experience and discuss how you can
            contribute to our mission of delivering exceptional software
            quality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[theme(color.brand.blue)] px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              Browse Open Positions
            </button>
            <button className="bg-white bg-opacity-20 text-[theme(color.brand.blue)] px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-opacity-30 transition-all border border-white border-opacity-30">
              Submit General Application
            </button>
          </div>

          <div className="mt-8 text-blue-100 text-sm">
            <p>
              Questions about the process? Email us at{" "}
              <span className="font-semibold">careers@testriq.com</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersApplicationProcessSection;
