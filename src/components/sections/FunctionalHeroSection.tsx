"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaCheckCircle, FaRocket } from "react-icons/fa";
import Link from "next/link";
import FunctionalAnimation from "./FunctionalAnimation";

const FunctionalHeroSection: React.FC = () => {
    return (
        <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-white">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-brand-blue text-xs font-bold uppercase tracking-widest mb-6 border border-blue-100">
                                <FaRocket className="mr-2" /> 30+ Years of QA Excellence
                            </span>
                            <h1 className="text-4xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6">
                                Functional Testing Services: <span className="text-brand-blue">Ensuring Flawless</span> Software Performance
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                                Deliver software that simply works. Every time. We specialize in comprehensive functional testing that aligns perfectly with your business requirements and user expectations.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                                <Link
                                    href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1W3Eeyft1hJ_qD6g0x_G9lz_V9RUSlSxsz1G5jorkyssa8WxyvrQap44rv8CFFbGVpzUDHCjCl"
                                    target="_blank"
                                    className="bg-brand-blue text-white px-8 py-4 rounded-2xl font-bold flex items-center hover:bg-blue-600 transition-all shadow-lg shadow-blue-200 group w-full sm:w-auto justify-center"
                                >
                                    Consult our Experts <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <button className="px-8 py-4 rounded-2xl font-bold text-gray-700 hover:bg-gray-50 transition-all border border-gray-200 w-full sm:w-auto">
                                    View ROI Calculator
                                </button>
                            </div>

                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-6 border-t border-gray-100">
                                {[
                                    "Web Applications",
                                    "Mobile Apps",
                                    "Enterprise Software",
                                    "SaaS Platforms"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center text-sm font-bold text-gray-500 uppercase tracking-tighter">
                                        <FaCheckCircle className="text-brand-blue mr-2" /> {item}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex-1 w-full max-w-xl lg:max-w-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            <FunctionalAnimation />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FunctionalHeroSection;
