"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaRocket, FaLock, FaCheckCircle } from "react-icons/fa";
import Breadcrumb from "@/components/ui/Breadcrumb";

const Pricing2HeroSection: React.FC = () => {
    const highlights = [
        { icon: <FaRocket className="w-4 h-4" />, text: "Frees Developers to Ship Faster" },
        { icon: <FaCheckCircle className="w-4 h-4" />, text: "No Hidden Pricing" },
        { icon: <FaLock className="w-4 h-4" />, text: "No Lock-ins" },
        { icon: <FaShieldAlt className="w-4 h-4" />, text: "Risk-Free Trial Periods" },
    ];

    return (
        <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 pt-8 pb-16 px-8 md:px-12 lg:px-24 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto relative z-10">
                <Breadcrumb items={[{ label: "Service Packages" }]} />

                <div className="text-center mt-12 mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center bg-amber-500/10 text-amber-700 gap-2 px-5 py-2.5 rounded-full mb-8 border border-amber-500/20"
                    >
                        <span className="text-sm font-bold uppercase tracking-wider">Service Packages</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight"
                    >
                        The &quot;No-Fluff&quot; QA Partner for <br />
                        <span className="text-amber-600">Teams that Move Fast</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10"
                    >
                        Get a dedicated testing team that frees developers to ship faster.
                        No hidden pricing. No lock-ins. Risk-free trial periods.
                    </motion.p>

                    {/* Highlights */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        {highlights.map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2.5 rounded-full border border-gray-200 shadow-sm"
                            >
                                <span className="text-amber-600">{item.icon}</span>
                                <span className="text-gray-700 text-sm font-medium">{item.text}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Pricing2HeroSection;
