"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaExclamationCircle, FaUserCheck } from "react-icons/fa";

const CompatibilityTestingDigitalDiversity: React.FC = () => {
    return (
        <section className="py-20 px-8 md:px-12 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                The Challenge of <span className="text-brand-blue">Digital Diversity</span>
                            </h2>
                            <p className="text-xl text-gray-700 font-semibold italic">
                                Delivering Consistent Performance Everywhere
                            </p>
                        </div>

                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p>
                                In today&apos;s fragmented digital ecosystem, users access applications across an ever-expanding array of devices, operating systems, browsers, and network conditions.
                            </p>
                            <div className="flex gap-4 p-6 bg-blue-50 rounded-2xl border-l-4 border-brand-blue">
                                <FaExclamationCircle className="text-brand-blue text-3xl flex-shrink-0 mt-1" />
                                <p className="font-medium text-gray-800">
                                    A flawless experience on one platform can quickly turn into frustration on another, leading to user churn, negative reviews, and reputational damage.
                                </p>
                            </div>
                            <p>
                                Ensuring your software performs consistently and reliably across this vast landscape is a critical challenge. This is precisely where specialized Compatibility Testing Services become indispensable.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg">
                                    <FaGlobe className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Global Accessibility</h4>
                                    <p className="text-sm text-gray-500">Reach users everywhere, regardless of their tech stack.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-purple-50 text-purple-600 rounded-lg">
                                    <FaUserCheck className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Consistent UX</h4>
                                    <p className="text-sm text-gray-500">Maintain brand quality across every screen size.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-brand-blue/10 blur-3xl rounded-full" />
                        <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Testriq&apos;s Expertise</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                As a global independent QA and testing house with over 15 years of experience, we specialize in guaranteeing your software delivers a seamless user experience, regardless of the environment.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Software Compatibility Testing",
                                    "Cross Browser Testing Services",
                                    "Full Spectrum Solutions",
                                    "Universal Brand Safeguarding"
                                ].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center gap-3 text-gray-700 font-medium"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-brand-blue" />
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                            <div className="mt-8 pt-8 border-t border-gray-100 flex items-center justify-between">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200" />
                                    ))}
                                    <div className="w-10 h-10 rounded-full border-2 border-white bg-brand-blue flex items-center justify-center text-xs text-white font-bold">+500</div>
                                </div>
                                <span className="text-sm font-bold text-gray-400">Trusted by Enterprise Clients</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CompatibilityTestingDigitalDiversity;
