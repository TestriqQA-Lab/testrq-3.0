"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaShieldAlt, FaClock, FaAward } from "react-icons/fa";
import Breadcrumb from "@/components/ui/Breadcrumb";

const PricingHeroSection: React.FC = () => {
    const trustBadges = [
        { icon: <FaShieldAlt className="w-5 h-5" />, text: "ISTQB Certified" },
        { icon: <FaClock className="w-5 h-5" />, text: "48hr Onboarding" },
        { icon: <FaAward className="w-5 h-5" />, text: "100+ Global Clients" },
        { icon: <FaCheckCircle className="w-5 h-5" />, text: "No Lock-in Contracts" },
    ];

    return (
        <section className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-8 pb-20 px-8 md:px-12 lg:px-24 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2V36h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <Breadcrumb items={[{ label: "Pricing & Packages" }]} />

                <div className="text-center mt-12 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center bg-blue-500/20 text-blue-400 gap-2 px-5 py-2.5 rounded-full mb-8 border border-blue-500/30"
                    >
                        <span className="text-sm font-bold uppercase tracking-wider">No Fluff. Just Results.</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tight"
                    >
                        Quality Assurance <br />
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Packaged for Growth
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12"
                    >
                        Transparent, predictable pricing for world-class software testing.
                        Choose your tier. Scale as you grow. No hidden fees.
                    </motion.p>

                    {/* Trust Badges */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-4 md:gap-6"
                    >
                        {trustBadges.map((badge, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2.5 rounded-full border border-white/10"
                            >
                                <span className="text-blue-400">{badge.icon}</span>
                                <span className="text-white/90 text-sm font-medium">{badge.text}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PricingHeroSection;
