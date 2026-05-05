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
    {
        question: "What happens if I need to scale up or down quickly?",
        answer: "We offer flexible scaling. You can increase or decrease your QA team size with just 2 weeks notice. Our bench of pre-vetted specialists ensures rapid deployment when you need to scale up.",
    },
];

const PricingFAQ = () => {
    const [openIdx, setOpenIdx] = useState<number | null>(0);

    return (
        <section className="py-24 bg-slate-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-16">
                    <span className="inline-block bg-slate-800 text-blue-400 text-sm font-bold px-4 py-2 rounded-full mb-4 border border-slate-700">
                        FAQs
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Pricing & Engagement Questions
                    </h2>
                    <p className="text-slate-400">
                        Everything you need to know about partnering with Testriq
                    </p>
                </div>

                <div className="space-y-4">
                    {pricingFaqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden backdrop-blur-sm"
                        >
                            <button
                                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-slate-700/30 transition-colors"
                                aria-expanded={openIdx === idx}
                            >
                                <span className="font-semibold text-white pr-8">{faq.question}</span>
                                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIdx === idx ? "bg-blue-600 text-white" : "bg-slate-700 text-slate-400"
                                    }`}>
                                    {openIdx === idx ? <FaMinus className="w-3 h-3" /> : <FaPlus className="w-3 h-3" />}
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
                                        <div className="px-8 pb-6 text-slate-300 text-sm leading-relaxed border-t border-slate-700/50 pt-4">
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

export default PricingFAQ;
