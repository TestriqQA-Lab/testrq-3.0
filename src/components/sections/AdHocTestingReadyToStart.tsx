"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight, FaPhoneAlt, FaEnvelope, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

const AdHocTestingReadyToStart: React.FC = () => {
    const steps = [
        "Reach out with your urgent QA requirement",
        "We mobilize an expert squad within 6-12 hours",
        "Testing begins immediately with real-time feedback",
    ];

    return (
        <section className="py-20 px-8 md:px-12 lg:px-24 bg-white relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-[100px] -z-10 translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto">
                <div className="bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-800 rounded-[3rem] p-10 md:p-16 lg:p-20 text-white shadow-2xl relative">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-[1.1]">
                                Ready to Deploy <span className="text-blue-400">On-Demand QA</span> Today?
                            </h2>
                            <p className="text-blue-100 text-lg mb-10 leading-relaxed">
                                Don&#39;t let unplanned scenarios or critical hotfixes slow you down.
                                Get the rapid, intuitive feedback you need to release with confidence.
                            </p>

                            <div className="space-y-4 mb-12">
                                {steps.map((step, index) => (
                                    <div key={index} className="flex items-center gap-4">
                                        <div className="w-8 h-8 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30 flex-shrink-0">
                                            <FaCheckCircle className="text-blue-400" />
                                        </div>
                                        <span className="text-sm font-medium text-blue-50">{step}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contact-us">
                                    <button className="px-10 py-5 bg-white text-blue-900 rounded-full font-bold hover:bg-blue-50 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-blue-900/40">
                                        Initiate Rapid Testing
                                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </Link>
                                <Link href="https://calendar.app.google/uUHn8prcXbdqcvVb6" target="_blank">
                                    <button className="px-10 py-5 border-2 border-white/20 hover:border-white text-white rounded-full font-bold transition-all flex items-center justify-center gap-2">
                                        <FaCalendarAlt />
                                        Schedule an Intro
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Contact Quick-Card */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-3xl">
                            <h3 className="text-2xl font-bold mb-8">Contact Testriq Now</h3>
                            <div className="space-y-8">
                                <Link href="mailto:contact@testriq.com" className="group flex items-center gap-6">
                                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-blue-500 transition-colors">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <div className="text-xs text-blue-300 font-bold uppercase tracking-wider mb-1">Email Support</div>
                                        <div className="text-xl font-bold">contact@testriq.com</div>
                                    </div>
                                </Link>

                                <Link href="tel:+919152929343" className="group flex items-center gap-6">
                                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-green-500 transition-colors">
                                        <FaPhoneAlt />
                                    </div>
                                    <div>
                                        <div className="text-xs text-blue-300 font-bold uppercase tracking-wider mb-1">24/7 Hotline</div>
                                        <div className="text-xl font-bold">(+91) 915-2929-343</div>
                                    </div>
                                </Link>

                                <div className="pt-8 border-t border-white/10 mt-8">
                                    <div className="flex -space-x-4 mb-4">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className={`w-12 h-12 rounded-full border-2 border-indigo-900 bg-blue-700 flex items-center justify-center text-xs font-bold`}>
                                                QA 0{i}
                                            </div>
                                        ))}
                                        <div className="w-12 h-12 rounded-full border-2 border-indigo-900 bg-indigo-600 flex items-center justify-center text-xs font-bold">+12</div>
                                    </div>
                                    <p className="text-sm text-blue-200">Our senior test lead team is currently online and ready.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdHocTestingReadyToStart;
