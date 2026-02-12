"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaClock, FaCheckCircle, FaExchangeAlt } from "react-icons/fa";

const TimezoneTestingAnimation: React.FC = () => {
    return (
        <div className="relative w-full h-[400px] lg:h-[500px] bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-inner flex items-center justify-center">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(#2563eb 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}>
            </div>

            <div className="relative w-full max-w-lg px-6 py-12">
                {/* Central Globe */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[180px] text-blue-100"
                >
                    <FaGlobe />
                </motion.div>

                {/* Sync Nodes */}
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Node 1: Development Team */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                <FaClock />
                            </div>
                            <span className="font-bold text-slate-800">Your Time Zone</span>
                        </div>
                        <p className="text-sm text-slate-600">Development Sprint Active</p>
                        <div className="mt-4 h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                            <motion.div
                                animate={{ width: ["0%", "100%", "0%"] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="h-full bg-blue-600"
                            />
                        </div>
                    </motion.div>

                    {/* Node 2: QA Team */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                                <FaCheckCircle />
                            </div>
                            <span className="font-bold text-slate-800">QA Alignment</span>
                        </div>
                        <p className="text-sm text-slate-600">Zero-Lag Feedback Loop</p>
                        <div className="mt-4 flex gap-2">
                            {[1, 2, 3].map(i => (
                                <motion.div
                                    key={i}
                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                    transition={{ delay: i * 0.4, duration: 1.5, repeat: Infinity }}
                                    className="h-2 w-full bg-green-500 rounded-full"
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Sync Indicator */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-dashed border-blue-400/30 rounded-full pointer-events-none"
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="mt-12 bg-blue-900 text-white p-4 rounded-lg flex items-center justify-between shadow-2xl"
                >
                    <div className="flex items-center gap-3">
                        <FaExchangeAlt className="text-blue-300 animate-pulse" />
                        <span className="text-sm font-medium">Real-Time Sync Protocol: ACTIVE</span>
                    </div>
                    <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-ping" />
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default TimezoneTestingAnimation;
