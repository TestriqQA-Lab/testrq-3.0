"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaCogs, FaSearch, FaBug, FaFileAlt, FaCheckDouble } from "react-icons/fa";

const FunctionalAdvantageSection: React.FC = () => {
    const advantages = [
        {
            icon: <FaLaptopCode />,
            title: "Advanced Frameworks",
            desc: "Robust solutions using Selenium, Appium, and Cypress to maximize efficiency and coverage."
        },
        {
            icon: <FaCogs />,
            title: "Comprehensive Coverage",
            desc: "Methodologies encompassing Unit, Integration, System, and User Acceptance Testing."
        },
        {
            icon: <FaSearch />,
            title: "Meticulous TC Design",
            desc: "Precise and effective test case design covering all critical functionalities and edge cases."
        },
        {
            icon: <FaBug />,
            title: "Rapid Bug Tracking",
            desc: "Streamlined processes ensuring rapid identification, resolution, and verification of defects."
        },
        {
            icon: <FaFileAlt />,
            title: "Requirement Driven",
            desc: "Every test is meticulously aligned with Software requirements to ensure specifications are met."
        },
        {
            icon: <FaCheckDouble />,
            title: "30+ Years Expertise",
            desc: "Deep domain knowledge across various industries, understanding unique functional challenges."
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        The Testriq Advantage: <span className="text-brand-blue">Unparalleled</span> Expertise
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-600 font-medium"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        With over three decades at the forefront of independent QA, our commitment to delivering flawless software is built on deep domain expertise and advanced methodologies.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {advantages.map((adv, idx) => (
                        <motion.div
                            key={idx}
                            className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 group"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div className="w-16 h-16 bg-white text-brand-blue rounded-2xl flex items-center justify-center mb-8 text-3xl shadow-sm border border-gray-100 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                                {adv.icon}
                            </div>
                            <h3 className="text-xl font-black text-gray-900 mb-4 uppercase tracking-tighter leading-tight">
                                {adv.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed font-medium">
                                {adv.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FunctionalAdvantageSection;
