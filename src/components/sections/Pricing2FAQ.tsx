"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const pricing2Faqs = [
    {
        question: "How do I choose between Web, Mobile, or Desktop testing?",
        answer: "It depends on your primary platform. If you're building a SaaS or web-based product, choose Web App Specialist. For iOS/Android apps, go with Mobile App Specialist. For Windows/macOS applications, Desktop App Specialist is your best fit. Many clients combine multiple packs for full coverage.",
    },
    {
        question: "Can I switch between packs mid-engagement?",
        answer: "Absolutely. If your product evolves (e.g., you add a mobile app to your existing web platform), we can smoothly transition or add a new testing pack. Just give us a heads up and we'll adjust the scope.",
    },
    {
        question: "What's included in the price range shown?",
        answer: "The price ranges cover the core testing activities listed in each pack. Cloud device lab access, test management tools, and bug tracking integration are included. Custom automation frameworks or specialized compliance testing may be quoted separately.",
    },
    {
        question: "Do you work with our existing bug tracking tools?",
        answer: "Yes! We integrate with Jira, Linear, GitHub Issues, Trello, Asana, and most popular project management tools. We adapt to your workflow, not the other way around.",
    },
    {
        question: "How quickly can we start?",
        answer: "For standard packs, we can kick off within 48-72 hours of agreement. For Desktop App testing or custom scopes, allow 5-7 business days for proper environment setup and tooling.",
    },
    {
        question: "Is there a trial period?",
        answer: "Yes, we offer a risk-free trial week. If you're not satisfied with the quality and communication within the first week, you won't be charged for that period.",
    },
];

const Pricing2FAQ = () => {
    const [openIdx, setOpenIdx] = useState<number | null>(0);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12">
                    <span className="inline-block bg-amber-100 text-amber-700 text-sm font-bold px-4 py-2 rounded-full mb-4">
                        FAQs
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Common Questions
                    </h2>
                    <p className="text-gray-600">
                        Everything you need to know about our testing packs
                    </p>
                </div>

                <div className="space-y-4">
                    {pricing2Faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                                aria-expanded={openIdx === idx}
                            >
                                <span className="font-semibold text-gray-900 pr-8">{faq.question}</span>
                                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIdx === idx ? "bg-amber-500 text-white" : "bg-gray-200 text-gray-600"
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
                                        <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-200 pt-4">
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

export default Pricing2FAQ;
