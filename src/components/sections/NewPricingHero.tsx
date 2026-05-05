"use client";

import React from "react";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/ui/Breadcrumb";

const NewPricingHero: React.FC = () => {

    return (
        <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-8 pb-16 px-8 md:px-12 lg:px-24 relative overflow-hidden overflow-x-hidden">
            {/* Minimalist Background Pattern */}
            <div className="absolute inset-0 opacity-40 pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.1) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Adjust Breadcrumb styling for light theme if needed, assuming Breadcrumb handles it or is neutral */}
                <div className="text-slate-600">
                    <Breadcrumb items={[{ label: "Pricing & Packages" }]} />
                </div>

                <div className="text-center mt-12 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center bg-blue-50 text-blue-700 gap-2 px-5 py-2.5 rounded-full mb-8 border border-blue-100 shadow-sm"
                    >
                        <span className="text-sm font-bold uppercase tracking-wider">Transparent & Predictable</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight max-w-4xl mx-auto"
                    >
                        Quality Assurance Packages <br className="hidden md:block" />
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            Tailored for Your Growth
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                    >
                        Choose the perfect testing bundle for your project's phase. Clear deliverables, fast turnarounds, and no hidden fees.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default NewPricingHero;
