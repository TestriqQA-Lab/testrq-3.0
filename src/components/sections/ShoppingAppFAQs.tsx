"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import Link from "next/link";

const ShoppingAppFAQs = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is shopping app certification and why is it important?",
      answer:
        "Shopping app certification is a comprehensive validation process that ensures your platform meets standards for security, performance, compliance, and user trust. It’s crucial for enhancing credibility, minimizing risk, and boosting user retention in competitive retail markets.",
    },
    {
      question: "How long does the shopping app certification process take?",
      answer:
        "The certification typically takes 10–15 working days. This includes assessment, security and performance audits, functional testing, and final certification. Timelines may vary based on platform complexity.",
    },
    {
      question:
        "Which regulations and standards are covered in the certification?",
      answer:
        "Our certification covers standards like PCI DSS (for payment security), GDPR, CCPA, ISO 27001, OWASP, and local data protection regulations relevant to e-commerce platforms.",
    },
    {
      question: "What kinds of testing are included in the certification?",
      answer:
        "Testing includes Security (encryption, vulnerability scans), Performance (load & stress testing), Functional (shopping cart, payment flow), UX (conversion optimization), API and third-party integration testing.",
    },
    {
      question: "How much does shopping app certification cost?",
      answer:
        "Cost depends on your app’s scale and required depth of testing. Packages start from basic compliance to full-suite enterprise certification. Contact us for a customized quote based on your e-commerce architecture.",
    },
    {
      question: "Do you offer support after certification?",
      answer:
        "Yes, we provide post-certification support including regular audits, update testing, vulnerability patching, and re-certification. Support packages are tailored to match your release frequency and business goals.",
    },
    {
      question:
        "Can I certify a multi-region or cross-border shopping platform?",
      answer:
        "Absolutely. We support regional compliance for the EU, US, India, LATAM, and more. Our experts ensure cross-border data transfers, payment systems, and privacy laws are properly addressed.",
    },
    {
      question: "What if my shopping app fails any part of the assessment?",
      answer:
        "We provide a detailed gap report and remediation support. Our team will help your developers fix the issues and re-test affected areas before issuing final certification.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <span className="text-sm">● Frequently Asked Questions</span>
          </div>
          <div className="flex items-center justify-center gap-3 mb-6">
            <HelpCircle className="w-8 h-8 text-brand-blue" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Frequently Asked{" "}
              <span className="text-brand-blue">Questions</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers about our shopping app certification services, process,
            timelines, and how we help elevate your e-commerce platform’s trust
            and performance.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl border border-gray-200 hover:border-brand-blue transition-colors duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#25A8E0] focus:ring-opacity-50 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 text-brand-blue">
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-brand-blue to-blue-600 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our experts are here to guide you through the certification
              journey. Schedule a free consultation tailored to your shopping
              app.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us#calendly-section">
                <button className="bg-white cursor-pointer text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                  Schedule Free Consultation
                </button>
              </Link>
              <Link href={"/contact-us"}>
                <button className="border-2 cursor-pointer border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#25A8E0] transition-colors duration-300">
                  Contact Our Experts
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShoppingAppFAQs;
