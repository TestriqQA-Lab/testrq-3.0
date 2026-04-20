"use client";

import React from "react";
import { motion } from "framer-motion";

const ShiftLeftAnimation: React.FC = () => {
    return (
        <div className="relative w-full h-[400px] bg-slate-50 rounded-[2rem] overflow-hidden flex items-center justify-center p-8 border border-gray-100 shadow-inner">
            <div className="max-w-md w-full relative">
                {/* Connection Line */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2"></div>

                {/* Defect Point (Shift-Right) */}
                <motion.div
                    className="absolute right-0 top-1/2 w-4 h-4 rounded-full bg-red-500 -translate-y-1/2"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                ></motion.div>

                {/* The Shift Animation */}
                <motion.div
                    className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center"
                    initial={{ x: "320px" }}
                    animate={{ x: "0px" }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="w-16 h-16 rounded-2xl bg-brand-blue flex items-center justify-center text-white shadow-xl mb-4 relative z-10">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {/* Arrow Pointer */}
                        <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-brand-blue rotate-45 transform"></div>
                    </div>

                    <div className="text-center">
                        <span className="text-xs font-bold text-brand-blue uppercase tracking-widest whitespace-nowrap">Shift-Left Testing</span>
                        <p className="text-[10px] text-gray-500 font-medium">Early Defect Prevention</p>
                    </div>
                </motion.div>

                {/* Labels */}
                <div className="absolute top-0 left-0 w-full flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-tighter -mt-12">
                    <span>Requirements</span>
                    <span>Design</span>
                    <span>Development</span>
                    <span>Production</span>
                </div>

                {/* Grid lines */}
                <div className="absolute top-1/2 left-0 w-full flex justify-between h-4 -translate-y-1/2 px-2">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-0.5 h-full bg-gray-100"></div>
                    ))}
                </div>
            </div>

            {/* Floating particles - Fixed values to avoid hydration mismatch */}
            {[1, 2, 3, 4, 5].map((i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-blue-100"
                    animate={{
                        y: [0, -40, 0],
                        x: [0, (i % 2 === 0 ? 10 : -10), 0],
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        delay: i * 0.5
                    }}
                    style={{
                        left: `${20 + i * 15}%`,
                        top: `${40 + (i * 5)}%`
                    }}
                />
            ))}

            {/* Summary Stat */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-sm flex justify-around items-center">
                <div className="text-center">
                    <div className="text-brand-blue font-bold text-sm">100x</div>
                    <div className="text-[10px] text-gray-500 font-bold uppercase">Lower Cost</div>
                </div>
                <div className="w-px h-6 bg-gray-200"></div>
                <div className="text-center">
                    <div className="text-brand-blue font-bold text-sm">40%</div>
                    <div className="text-[10px] text-gray-500 font-bold uppercase">Faster Release</div>
                </div>
            </div>
        </div>
    );
};

export default ShiftLeftAnimation;
