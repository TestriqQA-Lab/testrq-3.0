"use client";

import React from "react";
import { motion } from "framer-motion";

const MigrationAnimation: React.FC = () => {
    return (
        <div className="relative w-full h-[400px] bg-slate-50 rounded-[2rem] overflow-hidden flex items-center justify-center p-8 border border-gray-100 shadow-inner">
            <div className="max-w-md w-full relative h-40">
                {/* Source System */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="w-20 h-24 bg-gray-200 rounded-lg border-2 border-gray-300 relative flex items-center justify-center overflow-hidden">
                        <div className="grid grid-cols-2 gap-1 p-2">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <motion.div
                                    key={i}
                                    className="w-3 h-3 bg-gray-400 rounded-sm"
                                    animate={{ opacity: [1, 0.3, 1] }}
                                    transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                                ></motion.div>
                            ))}
                        </div>
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase mt-2 tracking-widest">Legacy / On-Prem</span>
                </div>

                {/* Target System (Cloud) */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="w-24 h-24 bg-blue-50 rounded-full border-2 border-blue-100 relative flex items-center justify-center">
                        <motion.div
                            className="absolute inset-0 rounded-full border-2 border-brand-blue border-dashed"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        ></motion.div>
                        <svg className="w-12 h-12 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                        </svg>
                    </div>
                    <span className="text-[10px] font-bold text-brand-blue uppercase mt-2 tracking-widest">Target / Cloud</span>
                </div>

                {/* Moving Data Particles */}
                {[1, 2, 3, 4].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute w-4 h-4 bg-brand-blue rounded shadow-lg flex items-center justify-center text-[8px] text-white font-bold"
                        initial={{ x: 60, y: 80, opacity: 0 }}
                        animate={{
                            x: [60, 260],
                            y: [80, 80],
                            opacity: [0, 1, 1, 0],
                            scale: [0.8, 1.2, 0.8]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.75,
                            ease: "easeInOut"
                        }}
                    >
                        101
                    </motion.div>
                ))}

                {/* Validation Checkmarks */}
                <motion.div
                    className="absolute left-1/2 top-0 -translate-x-1/2"
                    animate={{ y: [20, 0, 20] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="px-3 py-1 bg-green-500 text-white rounded-full text-[10px] font-bold flex items-center gap-1 shadow-md">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Verified Integrity
                    </div>
                </motion.div>
            </div>

            {/* Background Stats */}
            <div className="absolute bottom-6 left-8 right-8 flex justify-between px-4">
                <div className="text-center">
                    <div className="text-gray-400 font-bold text-sm tracking-tighter uppercase mb-1">Downtime</div>
                    <div className="text-brand-blue font-bold text-lg">0%</div>
                </div>
                <div className="text-center">
                    <div className="text-gray-400 font-bold text-sm tracking-tighter uppercase mb-1">Integrity</div>
                    <div className="text-brand-blue font-bold text-lg">100%</div>
                </div>
                <div className="text-center">
                    <div className="text-gray-400 font-bold text-sm tracking-tighter uppercase mb-1">Speed</div>
                    <div className="text-brand-blue font-bold text-lg">Fast</div>
                </div>
            </div>
        </div>
    );
};

export default MigrationAnimation;
