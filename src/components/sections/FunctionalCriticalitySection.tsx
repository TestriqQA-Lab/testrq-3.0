"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaHistory, FaProjectDiagram } from "react-icons/fa";

const FunctionalCriticalitySection: React.FC = () => {
    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50 relative overflow-hidden">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#25A8E0 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            The Foundation of Quality: Delivering Software That <span className="text-brand-blue">Simply Works</span>
                        </h2>
                        <div className="w-20 h-1.5 bg-brand-blue mx-auto rounded-full mb-8" />
                        <p className="text-lg text-gray-600 leading-relaxed">
                            In today&apos;s competitive digital landscape, software applications are the backbone of business operations and customer engagement. Users expect flawless performance, intuitive functionality, and a seamless experience every single time.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <FaShieldAlt className="text-4xl text-brand-blue" />,
                                title: "Brand Reputation",
                                text: "Any deviation from expected behavior can lead to user frustration and reputational damage."
                            },
                            {
                                icon: <FaHistory className="text-4xl text-brand-blue" />,
                                title: "15+ Years Experience",
                                text: "Global independent QA house specialized in providing comprehensive Software Functional Testing."
                            },
                            {
                                icon: <FaProjectDiagram className="text-4xl text-brand-blue" />,
                                title: "Aligned Integration",
                                text: "Every data flow aligns perfectly with your business requirements and user expectations."
                            }
                        ].map((card, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className="mb-6 p-4 rounded-2xl bg-blue-50 inline-block group-hover:scale-110 transition-transform duration-500">
                                    {card.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    {card.title}
                                </h3>
                                <p className="text-gray-600 text-base leading-relaxed">
                                    {card.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FunctionalCriticalitySection;
