
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const pricingFaqs = [
    {
        question: "How long does it take to onboard a dedicated QA resource?",
        answer: "Typically, we can have a dedicated QA specialist integrated into your team within 48 to 72 hours. For larger custom laboratory teams, onboarding takes 5 to 10 business days.",
    },
    {
        question: "Can I switch between monthly and project-based models?",
        answer: "Absolutely. Many clients start with a project-based Audit to stabilize their current release and then transition to a monthly Managed QA model for long-term consistency.",
    },
    {
        question: "Do you offer a free trial for the Managed QA plans?",
        answer: "Yes, we offer a 1-week risk-free trial period. If you're not satisfied with the quality and integration of our resource, you won't be charged for that week.",
    },
    {
        question: "Are there any hidden infrastructure or setup costs?",
        answer: "No. Our pricing is inclusive of basic testing tools, standard cloud execution nodes, and reporting dashboards. If you require specialized hardware or paid enterprise tools, we will discuss those upfront.",
    },
    {
        question: "How do you handle security and IP protection?",
        answer: "Security is our top priority. All our engineers sign stringent NDAs, work on secure machines, and follow ISO/IEC 27001 standards. Data is always hosted on your servers or approved secure cloud providers.",
    },
];

const PricingFAQ = () => {
    const [openIdx, setOpenIdx] = useState<number | null>(0);

    return (
        <section className="py-24 bg-gray-50/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Pricing & Engagement FAQs</h2>
                    <p className="mt-4 text-gray-600 italic">Everything you need to know about partnering with Testriq</p>
                </div>

                <div className="space-y-4">
                    {pricingFaqs.map((faq, idx) => (
                        <div key={idx} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                            <button
                                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                                className="w-full px-8 py-6 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                                aria-expanded={openIdx === idx}
                            >
                                <span className="font-bold text-gray-900 pr-8">{faq.question}</span>
                                <span className="text-blue-500 flex-shrink-0">
                                    {openIdx === idx ? <FaMinus /> : <FaPlus />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIdx === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-8 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
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
