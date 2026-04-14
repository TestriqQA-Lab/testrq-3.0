"use client";

import React from "react";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/ui/Breadcrumb";

const Pricing4Hero: React.FC = () => {
    return (
        <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 pt-8 pb-20 px-8 md:px-12 lg:px-24 overflow-hidden">
            {/* Ambient glow orbs */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/8 rounded-full blur-[120px] pointer-events-none" />

            {/* Subtle grid overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-white/70">
                    <Breadcrumb items={[{ label: "Pricing & Packages" }]} variant="dark" />
                </div>

                <div className="text-center mt-12 mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center bg-white/[0.06] backdrop-blur-xl text-indigo-300 gap-2 px-6 py-2.5 rounded-full mb-8 border border-white/[0.08] shadow-lg shadow-indigo-500/5"
                    >
                        <span className="text-sm font-bold uppercase tracking-wider">Transparent & Predictable</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight max-w-4xl mx-auto"
                    >
                        Quality Assurance Packages <br className="hidden md:block" />
                        <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Tailored for Your Growth
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                    >
                        Choose the perfect testing bundle for your project&apos;s phase. Clear deliverables, fast turnarounds, and no hidden fees.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default Pricing4Hero;
