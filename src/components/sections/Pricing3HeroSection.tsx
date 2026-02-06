"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaShieldAlt, FaHandshake, FaClock } from "react-icons/fa";
import Breadcrumb from "@/components/ui/Breadcrumb";

const Pricing3HeroSection: React.FC = () => {
    return (
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 pt-8 pb-24 px-8 md:px-12 lg:px-24 overflow-hidden">
            {/* Animated Background Orbs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
            }} />

            <div className="max-w-7xl mx-auto relative z-10">
                <Breadcrumb items={[{ label: "Service Packages" }]} />

                <div className="text-center mt-16 mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full mb-8 border border-white/20"
                    >
                        <FaRocket className="w-4 h-4 text-purple-300" />
                        <span className="text-sm font-semibold uppercase tracking-wider">No-Fluff QA Partner</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight"
                    >
                        For Teams That <br />
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                            Move Fast
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-purple-100/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
                    >
                        Get a dedicated testing team that frees developers to ship faster.
                        No hidden pricing. No lock-ins. Risk-free trial periods.
                    </motion.p>

                    {/* Trust Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
                    >
                        {[
                            { icon: <FaShieldAlt />, label: "ISTQB Certified", value: "100%" },
                            { icon: <FaClock />, label: "Onboarding", value: "48hrs" },
                            { icon: <FaHandshake />, label: "Client Retention", value: "95%" },
                            { icon: <FaRocket />, label: "Faster Releases", value: "3x" },
                        ].map((stat, i) => (
                            <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                                <div className="text-purple-400 mb-2">{stat.icon}</div>
                                <div className="text-2xl font-black text-white">{stat.value}</div>
                                <div className="text-xs text-purple-200/60">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Pricing3HeroSection;
