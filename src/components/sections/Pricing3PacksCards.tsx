"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGlobe, FaMobileAlt, FaDesktop, FaCheck, FaMinus, FaArrowRight, FaStar } from "react-icons/fa";
import Link from "next/link";

type PackType = "web" | "mobile" | "desktop";

const Pricing3PacksCards: React.FC = () => {
    const [activePack, setActivePack] = useState<PackType>("mobile");

    const packs = {
        web: {
            name: "The Web App Specialist",
            icon: <FaGlobe className="w-8 h-8" />,
            color: "blue",
            priceRange: "$1,500 – $3,500",
            timeline: "5 – 10 business days",
            hoursPerWeek: "Approx. 20–40 hours (Fulltime: $4,800 — $7,500 range)",
            bestFor: "Startups, SaaS platforms, marketplaces, and admin dashboards",
            whatYouGet: "Dedicated tester for cross-browser, responsive design, and API validation for fast-moving SaaS and web platforms.",
            technologies: "Selenium, Playwright, Cypress for automation. Postman for API. Chrome DevTools for performance audits.",
            seePlans: "What's included, recommended add-ons, and clear pricing.",
            features: [
                { name: "Functional Testing", value: true },
                { name: "Cross-browser Testing", value: true },
                { name: "Cross-device Testing", value: "Limited" },
                { name: "API Testing", value: true },
                { name: "Regression Testing", value: true },
                { name: "Performance Testing", value: "Basic" },
                { name: "Installer/Uninstaller Testing", value: false },
                { name: "OS Compatibility Testing", value: false },
                { name: "Localization Testing", value: "If needed" },
            ],
        },
        mobile: {
            name: "The Mobile App Specialist",
            icon: <FaMobileAlt className="w-8 h-8" />,
            color: "green",
            priceRange: "$1,500 – $4,500",
            timeline: "7 – 14 business days",
            hoursPerWeek: "Approx. 25–50 hours",
            bestFor: "App launch readiness, multi-build regression, localized testing, cross-device coverage",
            whatYouGet: "Native and hybrid app testing on iOS and Android using cloud device labs with real-device coverage.",
            technologies: "Appium + BrowserStack/LambdaTest for automation. XCUITest and Espresso basics.",
            seePlans: "Don't get surprised by cloud device lab costs. Everything's covered.",
            features: [
                { name: "Functional Testing", value: true },
                { name: "Cross-browser Testing", value: false },
                { name: "Cross-device Testing", value: true },
                { name: "API Testing", value: true },
                { name: "Regression Testing", value: true },
                { name: "Performance Testing", value: "Basic" },
                { name: "Installer/Uninstaller Testing", value: false },
                { name: "OS Compatibility Testing", value: true },
                { name: "Localization Testing", value: true },
            ],
        },
        desktop: {
            name: "The Desktop App Specialist",
            icon: <FaDesktop className="w-8 h-8" />,
            color: "purple",
            priceRange: "$3,000 – $6,000",
            timeline: "7 – 21 business days",
            hoursPerWeek: "Custom scope engagement",
            bestFor: "Enterprise tool builders, legacy apps, and multi-platform desktop tools",
            whatYouGet: "End-to-end functional testing, installer/uninstaller validation, backward compatibility on Windows/macOS.",
            technologies: "WinAppDriver, Sikuli, AutoIt for automation. Manual exploratory for UI/UX gaps.",
            seePlans: "Scope is discussed before we start. No hidden costs.",
            features: [
                { name: "Functional Testing", value: true },
                { name: "Cross-browser Testing", value: false },
                { name: "Cross-device Testing", value: true },
                { name: "API Testing", value: "If applicable" },
                { name: "Regression Testing", value: true },
                { name: "Performance Testing", value: "Custom" },
                { name: "Installer/Uninstaller Testing", value: true },
                { name: "OS Compatibility Testing", value: true },
                { name: "Localization Testing", value: "If needed" },
            ],
        },
    };

    const colorClasses = {
        blue: { bg: "bg-blue-500", bgLight: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", ring: "ring-blue-500" },
        green: { bg: "bg-green-500", bgLight: "bg-green-50", text: "text-green-600", border: "border-green-200", ring: "ring-green-500" },
        purple: { bg: "bg-purple-500", bgLight: "bg-purple-50", text: "text-purple-600", border: "border-purple-200", ring: "ring-purple-500" },
    };

    const renderValue = (value: boolean | string) => {
        if (typeof value === "boolean") {
            return value ? (
                <FaCheck className="text-green-500" />
            ) : (
                <FaMinus className="text-gray-300" />
            );
        }
        return <span className="text-xs font-medium text-gray-600">{value}</span>;
    };

    return (
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-slate-900 to-indigo-950">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Choose Your Testing Pack
                    </h2>
                    <p className="text-purple-200/60 max-w-2xl mx-auto">
                        Select the service tier for your team&apos;s stage, risk/lift ratio, and testing maturity.
                    </p>
                </div>

                {/* Pack Selector Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="bg-white/5 backdrop-blur-md p-2 rounded-2xl inline-flex gap-2 border border-white/10">
                        {(Object.keys(packs) as PackType[]).map((key) => {
                            const pack = packs[key];
                            const colors = colorClasses[pack.color as keyof typeof colorClasses];
                            const isActive = activePack === key;

                            return (
                                <button
                                    key={key}
                                    onClick={() => setActivePack(key)}
                                    className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${isActive
                                        ? `${colors.bg} text-white shadow-lg`
                                        : "text-white/60 hover:text-white hover:bg-white/10"
                                        }`}
                                >
                                    {pack.icon}
                                    <span className="hidden md:inline">{pack.name}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Active Pack Card */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activePack}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="max-w-4xl mx-auto"
                    >
                        {(() => {
                            const pack = packs[activePack];
                            const colors = colorClasses[pack.color as keyof typeof colorClasses];

                            return (
                                <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
                                    {/* Card Header */}
                                    <div className={`${colors.bg} p-8 text-white relative overflow-hidden`}>
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="p-3 bg-white/20 rounded-2xl">
                                                    {pack.icon}
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-bold">{pack.name}</h3>
                                                    {activePack === "mobile" && (
                                                        <span className="inline-flex items-center gap-1 text-xs bg-white/20 px-2 py-1 rounded-full mt-1">
                                                            <FaStar className="w-3 h-3" /> Most Popular
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="text-4xl font-black mb-2">{pack.priceRange}</div>
                                            <p className="text-white/80 text-sm">{pack.timeline}</p>
                                        </div>
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-8">
                                        {/* What You Get */}
                                        <div className="mb-8">
                                            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">What You Get</h4>
                                            <p className="text-gray-700 leading-relaxed">{pack.whatYouGet}</p>
                                        </div>

                                        {/* Technologies */}
                                        <div className="mb-8">
                                            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Key Technologies</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">{pack.technologies}</p>
                                        </div>

                                        {/* Features Grid */}
                                        <div className="mb-8">
                                            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Testing Coverage</h4>
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                                {pack.features.map((feature, i) => (
                                                    <div key={i} className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl">
                                                        {renderValue(feature.value)}
                                                        <span className="text-sm text-gray-700">{feature.name}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Additional Info */}
                                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                                            <div className={`p-4 ${colors.bgLight} rounded-xl ${colors.border} border`}>
                                                <span className="text-xs font-bold text-gray-500 uppercase">Hours / Week</span>
                                                <p className={`text-sm ${colors.text} font-medium mt-1`}>{pack.hoursPerWeek}</p>
                                            </div>
                                            <div className={`p-4 ${colors.bgLight} rounded-xl ${colors.border} border`}>
                                                <span className="text-xs font-bold text-gray-500 uppercase">Best For</span>
                                                <p className={`text-sm ${colors.text} font-medium mt-1`}>{pack.bestFor}</p>
                                            </div>
                                        </div>

                                        {/* See Plans Note */}
                                        <div className="bg-gray-50 rounded-xl p-4 mb-8">
                                            <p className="text-gray-600 text-sm italic">{pack.seePlans}</p>
                                        </div>

                                        {/* CTA */}
                                        <Link
                                            href="/contact-us"
                                            className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold text-white ${colors.bg} hover:opacity-90 transition-all shadow-lg`}
                                        >
                                            Get Started with {pack.name.split(" ")[1]} Testing
                                            <FaArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            );
                        })()}
                    </motion.div>
                </AnimatePresence>

                {/* Quick Compare */}
                <div className="mt-12 text-center">
                    <p className="text-purple-200/60 text-sm">
                        Not sure which pack? All plans include dedicated QA, bug tracking integration, and weekly reports.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Pricing3PacksCards;
