"use client";

import React from "react";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/ui/Breadcrumb";

const Pricing5Hero: React.FC = () => {
    return (
        <section className="bg-[#fafafa] pt-8 pb-16 px-8 md:px-12 lg:px-24 relative overflow-hidden">
            {/* Minimal dot pattern */}
            <div className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.05) 1px, transparent 0)`,
                    backgroundSize: '32px 32px'
                }}
            />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-neutral-500">
                    <Breadcrumb items={[{ label: "Pricing & Packages" }]} />
                </div>

                <div className="text-center mt-12 mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center bg-neutral-100 text-neutral-600 gap-2 px-5 py-2 rounded-full mb-8 border border-neutral-200"
                    >
                        <span className="text-xs font-semibold uppercase tracking-wider">Transparent & Predictable</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.08 }}
                        className="text-3xl md:text-4xl lg:text-[3.25rem] font-extrabold text-neutral-900 mb-5 leading-[1.15] tracking-tight max-w-3xl mx-auto"
                    >
                        Quality Assurance Packages{" "}
                        <span className="text-neutral-400">
                            Tailored for Your Growth
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="text-neutral-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
                    >
                        Choose the perfect testing bundle for your project&apos;s phase. Clear deliverables, fast turnarounds, and no hidden fees.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default Pricing5Hero;
