"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaMicrochip, FaShieldAlt, FaBrain, FaGlobe } from "react-icons/fa";

const BlockchainWhyChoose: React.FC = () => {
    const advantages = [
        {
            icon: <FaMicrochip className="text-blue-600 w-8 h-8" />,
            title: "Specialized Web3 Expertise",
            description: "Our senior engineers are proficient in Solidity, Rust, and Go, enabling comprehensive, deep-dive smart contract audits for Ethereum, Solana, Polkadot, and Layer 2 ecosystems.",
        },
        {
            icon: <FaShieldAlt className="text-blue-600 w-8 h-8" />,
            title: "Enterprise-Grade Integrity",
            description: "We apply battle-tested security frameworks to private blockchain networks, ensuring absolute data integrity, consensus reliability, and robust access control.",
        },
        {
            icon: <FaBrain className="text-blue-600 w-8 h-8" />,
            title: "AI-Enhanced Detection",
            description: "Leveraging proprietary AI-driven simulation tools, we identify edge-case vulnerabilities and complex attack vectors that traditional manual audits might miss.",
        },
        {
            icon: <FaGlobe className="text-blue-600 w-8 h-8" />,
            title: "Global Regulatory Compliance",
            description: "Our methodologies are mapped to global standards (GDPR, HIPAA, SOC2), providing compliance-driven testing for FinTech, Healthcare, and Supply Chain.",
        },
    ];

    return (
        <section className="bg-slate-50 py-24 px-8 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-blue-600 font-bold uppercase tracking-widest text-sm"
                    >
                        Engineering Trust
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 mb-6"
                    >
                        The Testriq Blockchain Advantage
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-gray-600 max-w-2xl mx-auto text-lg"
                    >
                        Blockchain testing demands a deep understanding of cryptography and consensus mechanisms. We provide a holistic approach to ensure your ecosystem is resilient.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {advantages.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group"
                        >
                            <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                {React.cloneElement(item.icon as React.ReactElement, {
                                    className: "w-8 h-8 group-hover:text-white transition-colors duration-300",
                                })}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlockchainWhyChoose;
