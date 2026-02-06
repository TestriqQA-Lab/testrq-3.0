"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const pricing3Faqs = [
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

const Pricing3FAQ = () => {
    const [openIdx, setOpenIdx] = useState<number | null>(0);

    return (
        <section className="py-20 bg-gradient-to-b from-indigo-950 to-slate-900">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12">
                    <span className="inline-block bg-white/10 text-purple-300 text-sm font-bold px-4 py-2 rounded-full mb-4 border border-white/10">
                        FAQs
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Common Questions
                    </h2>
                    <p className="text-purple-200/60">
                        Everything you need to know about our testing packs
                    </p>
                </div>

                <div className="space-y-3">
                    {pricing3Faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="group"
                        >
                            <button
                                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                                className={`w-full text-left p-5 rounded-2xl transition-all duration-300 ${openIdx === idx
                                    ? "bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30"
                                    : "bg-white/5 hover:bg-white/10 border border-white/10"
                                    }`}
                                aria-expanded={openIdx === idx}
                            >
                                <div className="flex justify-between items-center">
                                    <span className={`font-semibold pr-8 ${openIdx === idx ? "text-white" : "text-purple-100/80"}`}>
                                        {faq.question}
                                    </span>
                                    <motion.span
                                        animate={{ rotate: openIdx === idx ? 180 : 0 }}
                                        className={`flex-shrink-0 ${openIdx === idx ? "text-purple-400" : "text-purple-300/50"}`}
                                    >
                                        <FaChevronDown className="w-4 h-4" />
                                    </motion.span>
                                </div>

                                <AnimatePresence>
                                    {openIdx === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-purple-200/60 text-sm leading-relaxed mt-4 pt-4 border-t border-white/10">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing3FAQ;
