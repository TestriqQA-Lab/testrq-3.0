"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaExclamationTriangle, FaUserGraduate, FaBalanceScale, FaAward } from "react-icons/fa";

const FunctionalWhySection: React.FC = () => {
    const pillars = [
        {
            icon: <FaCheckCircle className="text-2xl" />,
            title: "Validate Requirements",
            desc: "Ensure every feature aligns with the specified business and user needs."
        },
        {
            icon: <FaExclamationTriangle className="text-2xl" />,
            title: "Prevent Defects Early",
            desc: "Identify and rectify issues before they escalate, reducing the cost of fixes."
        },
        {
            icon: <FaUserGraduate className="text-2xl" />,
            title: "Enhance User Experience",
            desc: "Guarantee smooth, predictable, and reliable interaction for end-users."
        },
        {
            icon: <FaBalanceScale className="text-2xl" />,
            title: "Ensure Compliance",
            desc: "Verify that software adheres to industry standards and legal requirements."
        },
        {
            icon: <FaAward className="text-2xl" />,
            title: "Maintain Reputation",
            desc: "Deliver high-quality software that builds trust and customer loyalty."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                                Why Functional Testing is <span className="text-brand-blue">Indispensable</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium">
                                Functional testing is the cornerstone of software quality assurance, addressing the core question: <span className="text-gray-900 font-bold italic">"Does the software do what it's supposed to do?"</span>
                                Our approach validates every user journey meticulously.
                            </p>

                            <div className="space-y-6">
                                {pillars.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="flex items-start gap-5 p-6 rounded-3xl hover:bg-blue-50/50 transition-all duration-300 border border-transparent hover:border-blue-100 group"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                    >
                                        <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-black text-gray-900 mb-1 tracking-tighter uppercase">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-500 font-medium text-sm leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex-1 relative">
                        <motion.div
                            className="bg-brand-blue rounded-[3rem] p-12 text-white relative overflow-hidden"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            {/* Decorative Blobs */}
                            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

                            <h3 className="text-2xl lg:text-3xl font-black mb-8 leading-tight relative z-10">
                                Validating Every User Journey with Precision
                            </h3>
                            <div className="space-y-8 relative z-10">
                                <div className="p-6 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/10">
                                    <span className="block text-4xl font-black mb-2">100%</span>
                                    <span className="text-sm font-bold uppercase tracking-widest text-blue-100">Requirement Traceability</span>
                                </div>
                                <div className="p-6 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/10">
                                    <span className="block text-4xl font-black mb-2">40%</span>
                                    <span className="text-sm font-bold uppercase tracking-widest text-blue-100">Faster Time to Market</span>
                                </div>
                                <div className="p-6 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/10">
                                    <span className="block text-4xl font-black mb-2">Zero</span>
                                    <span className="text-sm font-bold uppercase tracking-widest text-blue-100">Critical Escaped Defects</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FunctionalWhySection;
