"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaPlug, FaCheckCircle, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

interface AddOnCard {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    price: string;
    features: string[];
    cta: string;
    gradient: string;
}

const PricingAddOns: React.FC = () => {
    const addOns: AddOnCard[] = [
        {
            icon: <FaPlug className="w-8 h-8" />,
            title: "API Integrity Audit",
            subtitle: "Deep-dive REST/GraphQL Testing",
            price: "$2,500",
            features: [
                "Complete endpoint coverage analysis",
                "Authentication & authorization testing",
                "Rate limiting & throttling validation",
                "Schema compliance verification",
                "Performance benchmarking report",
                "Postman/Swagger documentation audit",
            ],
            cta: "Book API Audit",
            gradient: "from-cyan-500 to-blue-600",
        },
        {
            icon: <FaShieldAlt className="w-8 h-8" />,
            title: "VAPT Assessment",
            subtitle: "Vulnerability & Penetration Testing",
            price: "$4,500",
            features: [
                "OWASP Top 10 vulnerability scan",
                "Manual penetration testing",
                "Network security assessment",
                "Source code security review",
                "Compliance readiness (SOC2/HIPAA)",
                "Executive security report + remediation roadmap",
            ],
            cta: "Schedule VAPT",
            gradient: "from-purple-500 to-pink-600",
        },
    ];

    return (
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-slate-900 relative">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block bg-purple-500/10 text-purple-400 text-sm font-bold px-4 py-2 rounded-full mb-4 border border-purple-500/20"
                    >
                        ADD-ON SERVICES
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                        Specialized Testing Modules
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 max-w-2xl mx-auto"
                    >
                        Complement your core QA package with specialized audits.
                        One-time engagements designed for maximum impact.
                    </motion.p>
                </div>

                {/* Add-on Cards */}
                <div className="grid md:grid-cols-2 gap-8">
                    {addOns.map((addon, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"
                                style={{
                                    background: `linear-gradient(135deg, ${addon.gradient.includes("cyan") ? "#06b6d4" : "#a855f7"
                                        }22 0%, transparent 100%)`,
                                }}
                            />

                            <div className="h-full bg-slate-800/70 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600 transition-all duration-300">
                                {/* Icon & Title */}
                                <div className="flex items-start gap-4 mb-6">
                                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${addon.gradient} text-white`}>
                                        {addon.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1">
                                            {addon.title}
                                        </h3>
                                        <p className="text-slate-400 text-sm">
                                            {addon.subtitle}
                                        </p>
                                    </div>
                                </div>

                                {/* Price */}
                                <div className="mb-6">
                                    <span className="text-4xl font-black text-white">
                                        {addon.price}
                                    </span>
                                    <span className="text-slate-500 ml-2">/project</span>
                                </div>

                                {/* Features */}
                                <ul className="space-y-3 mb-8">
                                    {addon.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <FaCheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            <span className="text-slate-300 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <Link
                                    href="/contact-us"
                                    className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold text-white bg-gradient-to-r ${addon.gradient} hover:opacity-90 transition-opacity shadow-lg`}
                                >
                                    {addon.cta} <FaArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Custom Add-on CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <p className="text-slate-500 mb-4">
                        Need a custom testing module tailored to your industry?
                    </p>
                    <Link
                        href="/contact-us"
                        className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors"
                    >
                        Let&apos;s discuss your requirements <FaArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default PricingAddOns;
