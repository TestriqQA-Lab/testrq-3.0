"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPlug, FaShieldAlt, FaCheckCircle, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const Pricing3AddOns: React.FC = () => {
    const addOns = [
        {
            icon: <FaPlug className="w-8 h-8" />,
            title: "API Integrity Check",
            subtitle: "For backend-heavy apps, SaaS platforms, or headless architectures",
            price: "$1,500 – $3,500",
            gradient: "from-blue-600 to-cyan-500",
            features: [
                "Test Coverage: Endpoints for CRUD operations, filters, pagination, and error scenarios.",
                "Authentication Testing: JWT, OAuth 2.0, API keys — whichever you use.",
                "Schema Compliance: Validating responses against OpenAPI 3.0 or AsyncAPI specs.",
                "Add-On Benefits: Comes with a Postman/Insomnia collection for your team to re-run tests themselves.",
            ],
            proTip: "Add this on if your backend is your business. If revenue flows through your API, you can't afford edge-case failures.",
        },
        {
            icon: <FaShieldAlt className="w-8 h-8" />,
            title: "Zero-Friction VAPT",
            subtitle: "Focused on the Hacker's View vulnerability assessment",
            price: "$3,500 – $6,000",
            gradient: "from-purple-600 to-pink-500",
            features: [
                "The VAPT audit simulates how a malicious actor would attempt to gain unauthorized access or data.",
                "The Outcome: A Vulnerability Audit Report (PDF) + Executive Summary for stakeholders & Board reporting.",
                "Certificate that can be shared with your customers and stakeholders to build trust.",
                "Timeline: 7-14 business days depending on scope and application complexity.",
            ],
            proTip: "Add this if the stake is high (or your clients ask for this). If Industry, SOC-2, or ISO security certification requirements, you need this to pass security audit.",
        },
    ];

    return (
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-indigo-950 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold px-6 py-2 rounded-full mb-4"
                    >
                        SPECIALIZED ADD-ONS
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                        Extend Your Testing Coverage
                    </motion.h2>
                </div>

                {/* Horizontal Cards */}
                <div className="space-y-8">
                    {addOns.map((addon, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300">
                                <div className="flex flex-col lg:flex-row">
                                    {/* Left Side - Icon & Price */}
                                    <div className={`lg:w-1/3 p-8 bg-gradient-to-br ${addon.gradient} relative overflow-hidden`}>
                                        <div className="absolute inset-0 bg-black/10" />
                                        <div className="relative z-10">
                                            <div className="p-4 bg-white/20 rounded-2xl inline-block mb-6 text-white">
                                                {addon.icon}
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-2">{addon.title}</h3>
                                            <p className="text-white/70 text-sm mb-6">{addon.subtitle}</p>
                                            <div className="text-3xl font-black text-white">{addon.price}</div>
                                            <span className="text-white/60 text-sm">/project</span>
                                        </div>
                                    </div>

                                    {/* Right Side - Features */}
                                    <div className="lg:w-2/3 p-8">
                                        <ul className="space-y-4 mb-6">
                                            {addon.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <FaCheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                                                    <span className="text-purple-100/80 text-sm">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Pro Tip */}
                                        <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6">
                                            <p className="text-purple-200/60 text-sm">
                                                <strong className="text-purple-300">Pro Tip:</strong> {addon.proTip}
                                            </p>
                                        </div>

                                        <Link
                                            href="/contact-us"
                                            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r ${addon.gradient} hover:opacity-90 transition-all shadow-lg`}
                                        >
                                            Request {addon.title.split(" ")[0]} Audit <FaArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-purple-200/60 mb-4">
                        Not sure which add-on fits your needs? Let&apos;s discuss your specific requirements.
                    </p>
                    <Link
                        href="/contact-us"
                        className="inline-flex items-center gap-2 text-purple-400 font-bold hover:text-purple-300 transition-colors"
                    >
                        Talk to a QA Consultant <FaArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing3AddOns;
