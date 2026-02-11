"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaAccessibleIcon, FaUniversalAccess } from "react-icons/fa";

const AccessibilityHeroSection: React.FC = () => {
    return (
        <section className="relative w-full py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-brand-blue to-indigo-900 text-white">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-400 opacity-10 rounded-full blur-3xl wave-animation"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md mb-8 ring-1 ring-white/20"
                    >
                        <FaAccessibleIcon className="text-blue-200" />
                        <span className="text-sm font-medium tracking-wide">
                            Ensuring Digital Inclusion
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
                    >
                        Accessibility <br />
                        <span className="text-blue-300">Testing Services</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-2xl text-blue-50/90 leading-relaxed mb-10 max-w-2xl"
                    >
                        Making digital experiences usable for everyone. Testriq specializes in comprehensive Web accessibility testing and WCAG compliance testing for a truly inclusive digital landscape.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-6"
                    >
                        <button
                            onClick={() => (window.location.href = "/contact-us")}
                            className="px-8 py-4 bg-white text-brand-blue font-bold rounded-2xl shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            Get Started with Inclusion
                        </button>
                        <div className="flex items-center gap-4 text-blue-100">
                            <div className="w-12 h-12 rounded-full bg-blue-400/20 flex items-center justify-center">
                                <FaUniversalAccess className="text-2xl" />
                            </div>
                            <span className="text-sm">Trusted by <br /><strong>150+ Companies</strong></span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AccessibilityHeroSection;
