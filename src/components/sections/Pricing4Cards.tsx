"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { pricingPackages } from "@/data/pricingPackages";

const colorMap: Record<string, {
    text: string;
    gradient: string;
    glow: string;
    dot: string;
    accentBg: string;
    borderHover: string;
}> = {
    blue: {
        text: "text-blue-400",
        gradient: "from-blue-500 to-blue-700",
        glow: "shadow-blue-500/20",
        dot: "bg-blue-400",
        accentBg: "bg-blue-500/10 border-blue-500/20 text-blue-300",
        borderHover: "group-hover:border-blue-500/30",
    },
    indigo: {
        text: "text-indigo-400",
        gradient: "from-indigo-500 to-purple-600",
        glow: "shadow-indigo-500/20",
        dot: "bg-indigo-400",
        accentBg: "bg-indigo-500/10 border-indigo-500/20 text-indigo-300",
        borderHover: "group-hover:border-indigo-500/30",
    },
    emerald: {
        text: "text-emerald-400",
        gradient: "from-emerald-500 to-teal-600",
        glow: "shadow-emerald-500/20",
        dot: "bg-emerald-400",
        accentBg: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300",
        borderHover: "group-hover:border-emerald-500/30",
    },
    rose: {
        text: "text-rose-400",
        gradient: "from-rose-500 to-pink-600",
        glow: "shadow-rose-500/20",
        dot: "bg-rose-400",
        accentBg: "bg-rose-500/10 border-rose-500/20 text-rose-300",
        borderHover: "group-hover:border-rose-500/30",
    },
};

const Pricing4Cards: React.FC = () => {
    return (
        <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 py-16 px-4 md:px-8 lg:px-12 overflow-hidden">
            {/* Ambient background orbs */}
            <div className="absolute top-20 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-20 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[130px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 space-y-8">
                {pricingPackages.map((pkg, idx) => {
                    const theme = colorMap[pkg.color];

                    return (
                        <motion.div
                            key={pkg.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                            className={`group relative bg-white/[0.04] backdrop-blur-2xl rounded-3xl border border-white/[0.08] ${theme.borderHover} hover:shadow-2xl ${theme.glow} transition-all duration-500 overflow-hidden`}
                        >
                            {/* Subtle glow on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-${pkg.color}-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                            {/* Badge */}
                            {pkg.badge && (
                                <div className="absolute top-6 right-6 z-20">
                                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase bg-gradient-to-r ${theme.gradient} text-white shadow-lg`}>
                                        {pkg.badge}
                                    </span>
                                </div>
                            )}

                            {/* 3-Column Layout */}
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 relative z-10">
                                {/* Column 1: Identity + Price + CTA */}
                                <div className="lg:col-span-3 p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/[0.06]">
                                    <div>
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className={`p-3 bg-white/[0.06] rounded-2xl ${theme.text} ring-1 ring-white/[0.08] group-hover:scale-110 transition-transform duration-500`}>
                                                {React.cloneElement(pkg.icon as React.ReactElement<Record<string, unknown>>, { className: "w-6 h-6" })}
                                            </div>
                                            <h3 className="text-xl font-bold text-white tracking-tight">{pkg.name}</h3>
                                        </div>

                                        {/* Price */}
                                        <div className="mb-4">
                                            <div className="flex items-start gap-1 mb-1">
                                                <span className="text-slate-500 font-semibold text-xs mt-2 uppercase tracking-widest">From</span>
                                                <span className="text-2xl font-bold text-white mt-1">$</span>
                                                <span className="text-6xl font-black text-white tracking-tighter leading-none">
                                                    {pkg.price.match(/\d+/) ? pkg.price.match(/\d+/)?.[0] : "Custom"}
                                                </span>
                                            </div>
                                            <p className="text-slate-400 text-sm font-medium">{pkg.price.replace(/Starting from \d+ USD /, '')}</p>
                                        </div>

                                        {/* Delivery */}
                                        <div className="inline-flex items-center gap-2 text-[11px] font-bold px-3 py-2 bg-white/[0.05] text-slate-300 rounded-xl border border-white/[0.06] mb-6">
                                            ⏱ {pkg.delivery}
                                        </div>

                                        {pkg.description && (
                                            <div className="p-4 bg-white/[0.04] rounded-2xl text-sm text-slate-400 border border-white/[0.06] mb-6 leading-relaxed">
                                                {pkg.description}
                                            </div>
                                        )}
                                    </div>

                                    {/* CTA */}
                                    <Link
                                        href="/contact-us"
                                        className="w-full p-[2px] rounded-2xl group/btn relative block mt-4"
                                    >
                                        <div className={`absolute inset-0 bg-gradient-to-r ${theme.gradient} rounded-2xl opacity-80 group-hover/btn:opacity-100 blur-sm transition-opacity`} />
                                        <div className={`absolute inset-0 bg-gradient-to-r ${theme.gradient} rounded-2xl`} />
                                        <div className="relative flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold text-white z-10">
                                            Get Started Now
                                            <FaArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                                        </div>
                                    </Link>
                                </div>

                                {/* Column 2: What We Test + What's Included */}
                                <div className="lg:col-span-5 p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/[0.06]">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest mb-5">
                                                <span className={`w-2 h-2 rounded-full ${theme.dot}`} />
                                                What we test
                                            </h4>
                                            <ul className="space-y-3">
                                                {pkg.whatWeTest.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-2.5">
                                                        <FaCheckCircle className={`w-3.5 h-3.5 mt-[3px] ${theme.text} shrink-0 opacity-80`} />
                                                        <span className="text-[13px] font-medium text-slate-300 leading-relaxed">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest mb-5">
                                                <span className={`w-2 h-2 rounded-full ${theme.dot}`} />
                                                What&apos;s included?
                                            </h4>
                                            <ul className="space-y-3">
                                                {pkg.whatsIncluded.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-2.5">
                                                        <div className={`w-1.5 h-1.5 rounded-full mt-2 ${theme.dot} shrink-0 opacity-60`} />
                                                        <span className="text-[13px] font-medium text-slate-300 leading-relaxed">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Column 3: Deliverables + Suitable For + Add-on */}
                                <div className="lg:col-span-4 p-8 lg:p-10 flex flex-col gap-6">
                                    {/* Deliverables */}
                                    <div className="bg-white/[0.04] p-5 rounded-2xl border border-white/[0.06]">
                                        <h4 className="text-sm font-bold text-white mb-3">Deliverables</h4>
                                        <p className="text-[13px] font-medium text-slate-400 leading-relaxed">{pkg.whatYouGet}</p>
                                    </div>

                                    {/* Suitable For */}
                                    <div>
                                        <h4 className="text-sm font-bold text-white mb-4">Suitable for</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {pkg.suitableFor.map((item, i) => (
                                                <span key={i} className="px-3 py-1.5 bg-white/[0.04] border border-white/[0.08] text-slate-300 text-[11px] font-semibold rounded-full">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Add-on */}
                                    <div className={`text-[11px] font-bold px-4 py-3 rounded-2xl border text-center uppercase tracking-widest mt-auto ${theme.accentBg}`}>
                                        ✨ {pkg.addOn.replace(/(\d+)\s*USD/, "$$$1")}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Pricing4Cards;
