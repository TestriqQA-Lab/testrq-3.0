"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from "react-icons/fa";

const FunctionalFAQs: React.FC = () => {
    const faqs = [
        {
            question: "What are functional testing services?",
            answer: "Functional testing services verify that a software system or application behaves according to its specified functional requirements and meets intended business needs. These services validate the system's features, capabilities, user interactions, and data manipulation to ensure it performs as expected in real-world scenarios."
        },
        {
            question: "Why is functional testing important for software?",
            answer: "Functional testing is crucial for software because it identifies defects early in the development cycle, validates that the application fulfills user requirements, and ensures changes do not break existing functionality. It improves system reliability, enhances user experience, and helps ensure regulatory compliance."
        },
        {
            question: "What is the difference between functional and non-functional testing?",
            answer: "Functional testing validates what the system does (behavior e.g., login, search). Non-functional testing measures how the system performs (e.g., speed, security, scalability). While functional testing checks actions against requirements, non-functional testing focuses on site attributes like performance and load capacity."
        },
        {
            question: "How to choose a functional testing service provider?",
            answer: "Consider their expertise in your industry, approach to test automation (Selenium, Appium, etc.), cross-platform compatibility, and ability to integrate with your existing development workflows. Look for providers offering flexible scripting, custom reporting, and strong CI/CD integration capabilities."
        },
        {
            question: "What are the key types of functional testing?",
            answer: "Key types include Unit Testing, Integration Testing, System Testing, User Acceptance Testing (UAT), Regression Testing, Smoke Testing, Sanity Testing, Black Box Testing, and White Box Testing. Each serves a unique purpose in the QA lifecycle to ensure comprehensive validation."
        }
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-brand-blue text-[10px] font-black uppercase tracking-widest mb-4">
                            Quick Guide
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tighter">
                            Functional Testing <span className="text-brand-blue">FAQs</span>
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className={`rounded-[2rem] overflow-hidden transition-all duration-300 border ${activeIndex === idx ? "bg-white border-blue-100 shadow-xl shadow-blue-900/5" : "bg-white border-gray-100 shadow-sm hover:border-blue-100"}`}
                            >
                                <button
                                    className="w-full text-left px-8 py-7 flex items-center justify-between group"
                                    onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                                >
                                    <div className="flex items-center gap-4">
                                        <FaQuestionCircle className={`flex-shrink-0 text-xl transition-colors duration-300 ${activeIndex === idx ? "text-brand-blue" : "text-gray-300 group-hover:text-brand-blue"}`} />
                                        <span className={`text-lg font-black tracking-tight leading-snug ${activeIndex === idx ? "text-gray-900" : "text-gray-700"}`}>
                                            {faq.question}
                                        </span>
                                    </div>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${activeIndex === idx ? "bg-brand-blue text-white rotate-180" : "bg-gray-100 text-gray-500"}`}>
                                        <FaChevronDown className="text-xs" />
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {activeIndex === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-8 pb-8 ml-10">
                                                <div className="w-full h-px bg-gray-50 mb-6" />
                                                <p className="text-gray-600 font-medium leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FunctionalFAQs;
