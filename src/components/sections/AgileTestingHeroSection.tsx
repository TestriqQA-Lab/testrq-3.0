"use client";

import Link from "next/link";
import React from "react";
import {
    FaRunning,
    FaArrowRight,
    FaHome,
    FaChevronRight,
    FaUsers,
    FaSync,
    FaRocket,
} from "react-icons/fa";
import AgileTestingAnimation from "./AgileTestingAnimation";

const AgileTestingHeroSection: React.FC = () => {
    return (
        <section className="relative pt-8 pb-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-sky-50 to-indigo-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-6">
                    <Link
                        href="/"
                        className="flex items-center gap-2 hover:text-sky-600 transition-colors"
                    >
                        <FaHome className="text-lg" />
                        Home
                    </Link>
                    <FaChevronRight className="text-xs text-gray-400" />
                    <span className="text-sky-600">Agile Testing Services</span>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center px-4 py-2 bg-sky-600 text-white rounded-full text-base md:text-sm shadow-md">
                            <FaRunning className="mr-2" />
                            Agile QA & Continuous Testing
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                            Agile <span className="text-sky-600">Testing Services</span>: Accelerating Quality in Every Sprint
                        </h1>

                        <div className="space-y-4">
                            <p className="text-xl font-medium text-sky-900 leading-relaxed">
                                Navigating the Future of Quality: Agile Testing Excellence in 2026
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                As a world-class independent QA house with <span className="font-bold text-sky-700">15+ years of global experience</span>, Testriq provides high-impact Agile testing services engineered to synchronize with your development velocity. The ability to iterate rapidly without compromising stability is a necessity.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link href="/contact-us">
                                <button className="bg-sky-600 cursor-pointer text-white px-8 py-4 rounded-xl font-bold hover:bg-sky-700 hover:shadow-xl transition-all duration-300 flex items-center justify-center w-full sm:w-auto overflow-hidden group">
                                    Start Your Sprint
                                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                            <Link href="/roi-calculator">
                                <button className="border-2 border-sky-600 text-sky-600 px-8 py-4 rounded-xl font-bold hover:bg-sky-50 transition-colors duration-300 flex items-center justify-center w-full sm:w-auto">
                                    Calculate QA ROI
                                </button>
                            </Link>
                        </div>

                        {/* Quick Highlights */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                            {[
                                { icon: FaSync, text: "Continuous Testing", color: "text-blue-600" },
                                { icon: FaRocket, text: "Shift-Left QA", color: "text-indigo-600" },
                                { icon: FaUsers, text: "Cross-Functional", color: "text-sky-600" },
                                { icon: FaRunning, text: "High Velocity", color: "text-amber-600" },
                            ].map((item, idx) => (
                                <div key={idx} className="flex flex-col items-start p-3 bg-white/40 rounded-xl backdrop-blur-sm border border-sky-100/50">
                                    <item.icon className={`text-xl mb-2 ${item.color}`} />
                                    <span className="text-xs font-bold text-gray-900 uppercase tracking-tight leading-none">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="relative">
                        <AgileTestingAnimation />
                        {/* Floating badge for experience */}
                        <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-2xl border border-sky-50 animate-bounce">
                            <div className="text-3xl font-black text-sky-600 leading-none">15+</div>
                            <div className="text-[10px] font-bold text-gray-500 uppercase">Years Experience</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AgileTestingHeroSection;
