"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const UsabilityTestingCTASection: React.FC = () => {
    return (
        <section className="py-24 px-8 md:px-12 lg:px-24 bg-white relative overflow-hidden">
            {/* Abstract design elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] -ml-64 -mb-64"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="group bg-slate-900 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl border border-white/5"
                >
                    {/* Background Texture */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px]"></div>

                    <div className="relative z-10 space-y-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-brand-blue text-sm font-black uppercase tracking-widest border border-white/10">
                            <FaUsers /> Put Your Users First
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black leading-tight max-w-4xl mx-auto tracking-tighter">
                            Ready to Elevate Your <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-purple-400">User Experience?</span>
                        </h2>

                        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
                            Partner with Testriq, a leading B2B software usability testing agency, to transform your digital products into high-performing assets.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-6">
                            <Link href="/contact-us" className="w-full sm:w-auto">
                                <button className="w-full sm:w-auto px-12 py-6 bg-brand-blue text-white font-black rounded-3xl hover:bg-blue-600 hover:shadow-[0_20px_50px_rgba(59,130,246,0.3)] hover:-translate-y-2 transition-all duration-300 flex items-center justify-center text-lg uppercase tracking-widest group">
                                    Start Your UX Audit
                                    <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                                </button>
                            </Link>

                            <div className="text-left hidden md:block">
                                <div className="text-2xl font-black text-white">Free Consultation</div>
                                <div className="text-gray-500 text-sm font-bold">ROI-Focused Strategic View</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default UsabilityTestingCTASection;
