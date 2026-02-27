"use client";

import React from "react";
import { motion } from "framer-motion";

const TDMMethodologySection: React.FC = () => {
    const steps = [
        {
            number: "1",
            title: "Data Discovery & Profiling",
            description: "We identify sensitive data elements (PII/PHI) and map data relationships across your enterprise systems.",
        },
        {
            number: "2",
            title: "Strategy & Tool Selection",
            description: "We define the optimal mix of masking, subsetting, and synthetic generation based on your specific testing needs.",
        },
        {
            number: "3",
            title: "Data Transformation & Masking",
            description: "We execute the data preparation process, ensuring all sensitive elements are secured while maintaining referential integrity.",
        },
        {
            number: "4",
            title: "Automated Delivery & Refresh",
            description: "We integrate the data delivery process into your DevOps workflow, enabling rapid, automated data refreshes.",
        },
        {
            number: "5",
            title: "Continuous Compliance Monitoring",
            description: "We perform regular audits to ensure your test environments remain secure and compliant as your data evolves.",
        },
    ];

    return (
        <section className="py-24 px-8 md:px-12 lg:px-24 bg-slate-900 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Our TDM Methodology: <span className="text-blue-400">The Secure Data Lifecycle</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-3xl mx-auto">
                        We follow a proven, five-stage process to ensure your test data is a strategic asset:
                    </p>
                </div>

                <div className="relative">
                    {/* Connection Line */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-500/20 hidden lg:block -translate-y-1/2" />

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative z-10 flex flex-col items-center text-center group"
                            >
                                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-8 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{step.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-sm">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TDMMethodologySection;
