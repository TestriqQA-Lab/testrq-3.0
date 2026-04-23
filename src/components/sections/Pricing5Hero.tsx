"use client";

import React from "react";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/ui/Breadcrumb";

const Pricing5Hero: React.FC = () => {
    return (
        <section className="bg-white pt-8 pb-16 px-8 md:px-12 lg:px-24 relative overflow-hidden">
            {/* Minimal dot pattern */}
            <div className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-brand-blue) 0.5px, transparent 0)`,
                    backgroundSize: '32px 32px'
                }}
            />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-gray-500">
                    <Breadcrumb items={[{ label: "Pricing & Packages" }]} />
                </div>

                <div className="text-center mt-12 mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center bg-blue-50 text-brand-blue gap-2 px-5 py-2 rounded-full mb-8 border border-blue-100 shadow-sm"
                    >
                        <span className="text-xs font-bold uppercase tracking-wider">Transparent & Predictable</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.08 }}
                        className="text-4xl md:text-5xl lg:text-[4rem] font-black text-gray-900 mb-6 leading-tight tracking-tight max-w-4xl mx-auto"
                    >
                        Quality Assurance Packages{" "}
                        <span className="text-brand-blue">
                            Tailored for Your Growth
                        </span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium"
                    >
                        Choose the perfect testing bundle for your project&apos;s phase. Clear deliverables, fast turnarounds, and no hidden fees.
                    </motion.h2>
                </div>
            </div>
        </section>
    );
};

export default Pricing5Hero;
