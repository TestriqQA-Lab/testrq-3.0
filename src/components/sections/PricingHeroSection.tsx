
"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaRocket, FaHandshake } from "react-icons/fa";
import Breadcrumb from "@/components/ui/Breadcrumb";

const PricingHeroSection: React.FC = () => {
    return (
        <section className="bg-white pt-8 pb-16 px-8 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <Breadcrumb items={[{ label: "Pricing & Packages" }]} />

                <div className="text-center mt-12 mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center bg-brand-blue/10 text-brand-blue gap-2 px-4 py-2 rounded-full mb-6"
                    >
                        <FaRocket className="w-4 h-4" />
                        <span className="text-sm font-semibold uppercase tracking-wider">Simple, Transparent Pricing</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                    >
                        Scalable QA Packages <br />
                        <span className="text-brand-blue">Tailored for Your Growth</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                    >
                        Get expert-led, ISTQB-certified software testing services delivered in flexible packages.
                        Choose the model that fits your development speed and budget.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {[
                        {
                            icon: <FaShieldAlt className="w-8 h-8 text-brand-blue" />,
                            title: "Quality Assured",
                            desc: "100% focused on risk-based testing and compliance."
                        },
                        {
                            icon: <FaHandshake className="w-8 h-8 text-brand-blue" />,
                            title: "Fixed Costs",
                            desc: "No hidden fees. Predictable monthly or project budgets."
                        },
                        {
                            icon: <FaRocket className="w-8 h-8 text-brand-blue" />,
                            title: "Rapid Setup",
                            desc: "Onboard your dedicated QA team in less than 48 hours."
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 border border-gray-100"
                        >
                            <div className="mb-4">{item.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingHeroSection;
