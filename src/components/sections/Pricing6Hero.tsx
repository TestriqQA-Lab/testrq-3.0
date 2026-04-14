"use client";

import React from "react";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/ui/Breadcrumb";

const Pricing6Hero: React.FC = () => {
    return (
        <section className="bg-slate-50 pt-8 pb-16 px-8 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto relative z-10">
                <Breadcrumb items={[{ label: "Pricing & Packages" }]} />

                <div className="text-center mt-12 mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center bg-white text-slate-700 gap-2 px-5 py-2.5 rounded-full mb-8 border border-slate-200 shadow-sm"
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
                        <span className="text-slate-500">
                            Tailored for Your Growth
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                    >
                        Choose the perfect testing bundle for your project&apos;s phase. Clear deliverables, fast turnarounds, and no hidden fees.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default Pricing6Hero;
