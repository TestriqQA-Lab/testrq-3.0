"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLayerGroup, FaMobileAlt, FaDraftingCompass, FaTools, FaCheckCircle, FaProjectDiagram } from "react-icons/fa";

const CompatibilityTestingAdvantageSection: React.FC = () => {
    const methodology = [
        {
            icon: <FaMobileAlt />,
            title: "Extensive Device Lab",
            desc: "Access to a vast testing environment covering real devices, browsers, and OS.",
        },
        {
            icon: <FaDraftingCompass />,
            title: "Platform Nuances",
            desc: "Expert knowledge of Browser engine core and OS fragmentation.",
        },
        {
            icon: <FaProjectDiagram />,
            title: "UI Consistency",
            desc: "Meticulous attention to visual parity across all target environments.",
        },
        {
            icon: <FaTools />,
            title: "Advanced Tooling",
            desc: "Leveraging BrowserStack, Sauce Labs, Appium, Selenium, and Cypress.",
        },
        {
            icon: <FaLayerGroup />,
            title: "Network Testing",
            desc: "Verifying behavior under various conditions (2G, 3G, 4G, 5G, Wi-Fi).",
        },
        {
            icon: <FaCheckCircle />,
            title: "Assistive Tech",
            desc: "Ensuring flawless compatibility with assistive technologies for inclusion.",
        },
    ];

    return (
        <section className="py-20 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-indigo-900 to-blue-900 text-white overflow-hidden relative">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full -ml-48 -mb-48" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                            The Testriq <span className="text-blue-400">Advantage</span>: Expert Cross-Platform QA
                        </h2>
                        <p className="text-xl text-blue-100/80 leading-relaxed">
                            With over three decades at the forefront of independent QA, Testriq brings unparalleled Experience, Expertise, Authoritativeness, and Trustworthiness.
                        </p>

                        <div className="space-y-4">
                            {[
                                "30+ Years of Independent QA Leadership",
                                "Dedicated Real Device Labs",
                                "ISO-Certified Testing Processes",
                                "Transparent Execution Methodology"
                            ].map((point, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-6 h-6 rounded-full bg-blue-400/20 flex items-center justify-center border border-blue-400/30">
                                        <FaCheckCircle className="text-blue-400 text-sm" />
                                    </div>
                                    <span className="font-medium">{point}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {methodology.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-colors duration-300"
                            >
                                <div className="text-blue-400 text-2xl mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="font-bold mb-2">{item.title}</h3>
                                <p className="text-sm text-blue-100/60 leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompatibilityTestingAdvantageSection;
