"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { pricingPackages } from "@/data/pricingPackages";

const colorMap: Record<string, {
    bg: string;
    text: string;
    border: string;
    ring: string;
    dot: string;
    gradient: string;
    lightBg: string;
}> = {
    blue: { bg: "bg-blue-600", text: "text-blue-600", border: "border-blue-200", ring: "ring-blue-500", dot: "bg-blue-500", gradient: "from-blue-500 to-blue-700", lightBg: "bg-blue-50" },
    indigo: { bg: "bg-indigo-600", text: "text-indigo-600", border: "border-indigo-200", ring: "ring-indigo-500", dot: "bg-indigo-500", gradient: "from-indigo-500 to-purple-600", lightBg: "bg-indigo-50" },
    emerald: { bg: "bg-emerald-600", text: "text-emerald-600", border: "border-emerald-200", ring: "ring-emerald-500", dot: "bg-emerald-500", gradient: "from-emerald-500 to-teal-600", lightBg: "bg-emerald-50" },
    rose: { bg: "bg-rose-600", text: "text-rose-600", border: "border-rose-200", ring: "ring-rose-500", dot: "bg-rose-500", gradient: "from-rose-500 to-pink-600", lightBg: "bg-rose-50" }
};

const Pricing6Cards: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activePkg = pricingPackages[activeIndex];
    const theme = colorMap[activePkg.color];

    return (
        <section className="bg-slate-50 pb-24 px-4 md:px-8 lg:px-12">
            <div className="max-w-6xl mx-auto">
                {/* Desktop Tabs / Mobile Select equivalent */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {pricingPackages.map((pkg, idx) => {
                        const isActive = idx === activeIndex;
                        const pkgTheme = colorMap[pkg.color];
                        return (
                            <button
                                key={pkg.id}
                                onClick={() => setActiveIndex(idx)}
                                className={`relative px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                                    isActive 
                                        ? `${pkgTheme.text} bg-white shadow-md ring-1 ring-slate-200` 
                                        : "text-slate-500 hover:text-slate-800 hover:bg-slate-100"
                                }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className={`absolute inset-0 rounded-full border-2 ${pkgTheme.border}`}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{pkg.name}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Main Split Layout Content */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activePkg.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="flex flex-col lg:flex-row"
                        >
                            {/* Left Side: Summary & Action */}
                            <div className="w-full lg:w-2/5 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-100 flex flex-col justify-between bg-white relative z-10">
                                <div>
                                    {activePkg.badge && (
                                        <span className={`inline-block px-3 py-1 mb-6 rounded-full text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-r ${theme.gradient}`}>
                                            {activePkg.badge}
                                        </span>
                                    )}

                                    <div className="flex items-center gap-4 mb-8">
                                        <div className={`p-4 rounded-2xl ${theme.lightBg} ${theme.text}`}>
                                            {React.cloneElement(activePkg.icon as React.ReactElement<Record<string, unknown>>, { className: "w-8 h-8" })}
                                        </div>
                                        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">{activePkg.name}</h2>
                                    </div>

                                    <div className="mb-8">
                                        <p className="text-slate-500 font-bold text-sm uppercase tracking-widest mb-2">Starting At</p>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-3xl font-bold text-slate-900">$</span>
                                            <span className="text-6xl font-black text-slate-900 tracking-tighter">
                                                {activePkg.price.match(/\d+/) ? activePkg.price.match(/\d+/)?.[0] : "Custom"}
                                            </span>
                                        </div>
                                        <p className="text-slate-500 text-sm mt-2">{activePkg.price.replace(/Starting from \d+ USD /, '')}</p>
                                    </div>

                                    {activePkg.description && (
                                        <p className="text-slate-600 leading-relaxed mb-8">
                                            {activePkg.description}
                                        </p>
                                    )}

                                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-8 inline-block">
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Turnaround Time</p>
                                        <p className="text-sm font-semibold text-slate-800">⏱ {activePkg.delivery}</p>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <Link
                                        href="/contact-us"
                                        className={`group relative flex items-center justify-center gap-2 w-full py-4 px-8 bg-gradient-to-r ${theme.gradient} text-white rounded-xl font-bold transition-transform hover:scale-[1.02] active:scale-[0.98]`}
                                    >
                                        Get Started Now
                                        <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>

                            {/* Right Side: Details */}
                            <div className="w-full lg:w-3/5 p-8 lg:p-12 bg-slate-50/50">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    {/* What We Test */}
                                    <div>
                                        <h3 className="flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-widest mb-6 border-b border-slate-200 pb-2">
                                            <span className={`w-2 h-2 rounded-full ${theme.dot}`} />
                                            What We Test
                                        </h3>
                                        <ul className="space-y-4">
                                            {activePkg.whatWeTest.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <FaCheckCircle className={`w-4 h-4 mt-0.5 ${theme.text} shrink-0`} />
                                                    <span className="text-sm text-slate-700 leading-relaxed font-medium">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* What's Included */}
                                    <div>
                                        <h3 className="flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-widest mb-6 border-b border-slate-200 pb-2">
                                            <span className={`w-2 h-2 rounded-full ${theme.dot}`} />
                                            What&apos;s Included
                                        </h3>
                                        <ul className="space-y-4">
                                            {activePkg.whatsIncluded.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <div className={`w-1.5 h-1.5 rounded-full mt-2 ${theme.dot} shrink-0`} />
                                                    <span className="text-sm text-slate-700 leading-relaxed font-medium">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Divider */}
                                <hr className="my-10 border-slate-200" />

                                {/* Additional Info */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-900 mb-3">Deliverables</h4>
                                        <p className="text-sm text-slate-600 leading-relaxed pl-4 border-l-2 border-slate-300">{activePkg.whatYouGet}</p>
                                    </div>
                                    
                                    <div className="flex flex-col justify-between">
                                        <div>
                                            <h4 className="text-sm font-bold text-slate-900 mb-3">Suitable For</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {activePkg.suitableFor.map((item, i) => (
                                                    <span key={i} className="px-3 py-1.5 bg-white border border-slate-200 text-slate-700 text-xs font-semibold rounded-lg shadow-sm">
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        <div className={`mt-6 inline-flex items-center gap-2 text-xs font-bold px-4 py-3 rounded-xl border ${theme.border} ${theme.text} ${theme.lightBg}`}>
                                            ✨ {activePkg.addOn.replace(/(\d+)\s*USD/, "$$$1")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Bottom Comparison Strip */}
                <div className="mt-12 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 overflow-x-auto">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center mb-6">Compare Starting Prices</p>
                    <div className="flex items-center justify-between gap-8 min-w-max px-4">
                        {pricingPackages.map((pkg) => {
                            const pkgTheme = colorMap[pkg.color];
                            return (
                                <div key={`strip-${pkg.id}`} className="flex flex-col items-center text-center">
                                    <div className={`p-2 rounded-xl bg-slate-50 ${pkgTheme.text} mb-3`}>
                                        {React.cloneElement(pkg.icon as React.ReactElement<Record<string, unknown>>, { className: "w-5 h-5" })}
                                    </div>
                                    <p className="text-sm font-bold text-slate-900 mb-1">{pkg.name}</p>
                                    <p className="text-lg font-black text-slate-700">
                                        ${pkg.price.match(/\d+/) ? pkg.price.match(/\d+/)?.[0] : "Custom"}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing6Cards;
