"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const DatingAppFAQs = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question:
        "How long does the dating app security certification process take?",
      answer:
        "The timeline varies by plan: Starter (2-3 weeks), Professional (3-4 weeks), and Enterprise (4-6 weeks). We provide regular updates and maintain clear communication throughout the process. Our streamlined approach ensures faster certification compared to traditional security audits.",
    },
    {
      question:
        "What happens if my dating app doesn't pass the initial security audit?",
      answer:
        "We provide detailed remediation guidance and work closely with your team to address any issues. Our goal is to help you achieve certification, not to fail you. We offer implementation support and re-testing at no additional cost for all identified vulnerabilities.",
    },
    {
      question: "Is the dating app certification recognized internationally?",
      answer:
        "Yes, our certification is recognized globally and helps with compliance in major markets including US, EU, India, and APAC regions. We stay updated with international regulations like GDPR, CCPA, and other privacy laws affecting dating platforms.",
    },
    {
      question:
        "Do you provide ongoing support after dating app certification?",
      answer:
        "Absolutely! We offer quarterly security reviews, ongoing monitoring, priority support, and help maintain your certification status. Our relationship doesn't end with certification - we're your long-term security partner.",
    },
    {
      question:
        "What makes TESTRIQ different from other dating app security auditors?",
      answer:
        "We specialize exclusively in dating apps and understand the unique challenges of the industry. Our team has certified 500+ dating apps and we provide industry-specific insights, compliance frameworks, and solutions tailored for online dating platforms.",
    },
    {
      question: "How does security certification improve dating app downloads?",
      answer:
        "Security-certified dating apps see 40% higher app store rankings, 65% better visibility, and 30% more organic downloads. Users are 78% more likely to download apps with visible security certifications, especially for sensitive platforms like dating apps.",
    },
    {
      question: "What security standards do you test for dating apps?",
      answer:
        "We test against GDPR, CCPA, ISO 27001, SOC 2 Type II, and dating-specific security requirements including identity verification, content moderation, data encryption, fraud prevention, and user safety protocols.",
    },
    {
      question: "Can small dating app startups afford security certification?",
      answer:
        "Yes! Our Starter plan at $2,999 is designed specifically for MVPs and small dating apps. This investment typically pays for itself through improved app store rankings, reduced rejection rates, and increased user trust within the first month.",
    },
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-brand-blue">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our dating app security
            certification process
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                onClick={() =>
                  setExpandedFAQ(expandedFAQ === index ? null : index)
                }
              >
                <span className="font-semibold text-gray-900 text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedFAQ === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {expandedFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DatingAppFAQs;
