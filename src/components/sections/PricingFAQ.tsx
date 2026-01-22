
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "How quickly can we start the testing engagement?",
        answer: "For both Managed Retainer and Project-based models, we typically onboard and set up the testing infrastructure within 48 to 72 hours of contract signing."
    },
    {
        question: "Is there a minimum contract duration?",
        answer: "Our Managed QA Startup and Professional plans operate on a month-to-month basis with a 30-day notice period. Project-based models have no long-term commitment beyond the scope of work."
    },
    {
        question: "Do you use your own testing tools or ours?",
        answer: "We are flexible. We bring a proprietary suite of accelerators for rapid setup, but our engineers are experts in all major internal tools like JIRA, TestRail, Zephyr, Selenium, and Playwright."
    },
    {
        question: "What happens if we need to scale the team quickly?",
        answer: "Testriq maintains a pool of ISTQB-certified bench talent. We can scale your dedicated team from 1 to 5+ engineers within 1-2 weeks depending on the seniority required."
    },
    {
        question: "Do you offer any discounts for long-term commitments?",
        answer: "Yes, we offer structured discounts for 6-month and 12-month retainer commitments. These are typically negotiated at the Enterprise or high-growth level."
    }
];

const PricingFAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className="py-20 px-8 md:px-12 lg:px-24 bg-gray-50/30">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                    <p className="text-gray-600 text-lg">Everything you need to know about our service engagement models.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                            >
                                <span className="text-lg font-bold text-gray-900 pr-8">{faq.question}</span>
                                {activeIndex === index ? (
                                    <Minus className="w-5 h-5 text-brand-blue flex-shrink-0" />
                                ) : (
                                    <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                )}
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingFAQ;
