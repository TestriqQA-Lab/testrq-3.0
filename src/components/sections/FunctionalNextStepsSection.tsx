"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaCalendarAlt, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const FunctionalNextStepsSection: React.FC = () => {
    return (
        <section className="py-24 bg-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none opacity-60" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="bg-slate-900 rounded-[3.5rem] p-8 md:p-16 lg:p-24 shadow-2xl overflow-hidden relative">
                    {/* Interior Glows */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-brand-blue/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                    <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
                        <div className="flex-[1.2] text-center lg:text-left">
                            <motion.span
                                className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue text-[10px] font-black uppercase tracking-widest mb-6"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                Take the Next Step
                            </motion.span>
                            <motion.h2
                                className="text-4xl lg:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tighter"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                Ready to <span className="text-brand-blue">Guarantee</span> Flawless Performance?
                            </motion.h2>
                            <motion.p
                                className="text-gray-400 text-lg mb-10 font-medium leading-relaxed max-w-2xl"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                Partner with Testriq today for comprehensive QA, automation, and validation. Let's ensure your software performs exactly as intended, every single time.
                            </motion.p>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                                <Link
                                    href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1W3Eeyft1hJ_qD6g0x_G9lz_V9RUSlSxsz1G5jorkyssa8WxyvrQap44rv8CFFbGVpzUDHCjCl"
                                    target="_blank"
                                    className="bg-brand-blue text-white px-10 py-5 rounded-[2rem] font-black flex items-center hover:bg-blue-600 transition-all shadow-xl shadow-brand-blue/20 group w-full sm:w-auto justify-center"
                                >
                                    <FaCalendarAlt className="mr-3" /> Schedule a Call <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="/contact-us"
                                    className="bg-white/5 text-white px-10 py-5 rounded-[2rem] font-black flex items-center hover:bg-white/10 transition-all border border-white/10 w-full sm:w-auto justify-center"
                                >
                                    <FaEnvelope className="mr-3" /> Get a Quote
                                </Link>
                            </div>
                        </div>

                        <div className="flex-1 w-full lg:w-auto">
                            <motion.div
                                className="bg-white/10 backdrop-blur-md rounded-[3rem] p-10 border border-white/10"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest text-center">Service Roadmap</h3>
                                <div className="space-y-6">
                                    {[
                                        { step: "01", title: "Discovery", text: "Requirement analysis & goal setting." },
                                        { step: "02", title: "Strategy", text: "Custom test plan development." },
                                        { step: "03", title: "Execution", text: "Rigorous testing & bug fixing." },
                                        { step: "04", title: "Deployment", text: "Final validation & sign-off." }
                                    ].map((s, i) => (
                                        <div key={i} className="flex gap-5">
                                            <span className="text-brand-blue font-black text-lg">{s.step}</span>
                                            <div>
                                                <h4 className="text-white font-black text-sm uppercase tracking-tighter">{s.title}</h4>
                                                <p className="text-gray-400 text-xs font-medium">{s.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FunctionalNextStepsSection;
