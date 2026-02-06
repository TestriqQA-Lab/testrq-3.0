"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCheck, FaMinus, FaGlobe, FaMobileAlt, FaDesktop, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

interface FeatureRow {
    category?: string;
    name?: string;
    webApp?: string | boolean;
    mobileApp?: string | boolean;
    desktopApp?: string | boolean;
}

const Pricing2PacksTable: React.FC = () => {
    const plans = {
        webApp: {
            name: "The Web App Specialist",
            icon: <FaGlobe className="w-6 h-6" />,
            priceRange: "$1,500 – $3,500",
            bestFor: "Startups, SaaS platforms, marketplaces, and admin dashboards",
            timeline: "5 – 10 business days",
            hoursPerWeek: "Approx. 20–40 hours (Fulltime: $4,800 — $7,500 range)",
        },
        mobileApp: {
            name: "The Mobile App Specialist",
            icon: <FaMobileAlt className="w-6 h-6" />,
            priceRange: "$1,500 – $4,500",
            bestFor: "App launch readiness, multi-build regression, localized testing, cross-device coverage",
            timeline: "7 – 14 business days",
            hoursPerWeek: "Approx. 25–50 hours",
        },
        desktopApp: {
            name: "The Desktop App Specialist",
            icon: <FaDesktop className="w-6 h-6" />,
            priceRange: "$3,000 – $6,000",
            bestFor: "Enterprise tool builders, legacy apps, and multi-platform desktop tools",
            timeline: "7 – 21 business days",
            hoursPerWeek: "Custom scope engagement",
        },
    };

    const features: FeatureRow[] = [
        { category: "Testing Solutions" },
        {
            name: "What You Get",
            webApp: "Dedicated tester for cross-browser, responsive design, and API validation for fast-moving SaaS and web platforms.",
            mobileApp: "Native and hybrid app testing on iOS and Android using cloud device labs with real-device coverage.",
            desktopApp: "End-to-end functional testing, installer/uninstaller validation, backward compatibility on Windows/macOS.",
        },
        {
            name: "Key Technologies",
            webApp: "Selenium, Playwright, Cypress for automation. Postman for API. Chrome DevTools for performance audits.",
            mobileApp: "Appium + BrowserStack/LambdaTest for automation. XCUITest and Espresso basics.",
            desktopApp: "WinAppDriver, Sikuli, AutoIt for automation. Manual exploratory for UI/UX gaps.",
        },
        { category: "Testing Coverage" },
        { name: "Functional Testing", webApp: true, mobileApp: true, desktopApp: true },
        { name: "Cross-browser Testing", webApp: true, mobileApp: false, desktopApp: false },
        { name: "Cross-device Testing", webApp: "Limited", mobileApp: true, desktopApp: true },
        { name: "API Testing", webApp: true, mobileApp: true, desktopApp: "If applicable" },
        { name: "Regression Testing", webApp: true, mobileApp: true, desktopApp: true },
        { name: "Performance Testing", webApp: "Basic", mobileApp: "Basic", desktopApp: "Custom" },
        { name: "Installer/Uninstaller Testing", webApp: false, mobileApp: false, desktopApp: true },
        { name: "OS Compatibility Testing", webApp: false, mobileApp: true, desktopApp: true },
        { name: "Localization Testing", webApp: "If needed", mobileApp: true, desktopApp: "If needed" },
        { category: "Engagement Details" },
    ];

    const renderValue = (value: boolean | string | undefined) => {
        if (typeof value === "boolean") {
            return value ? (
                <FaCheck className="mx-auto text-green-600 text-lg" />
            ) : (
                <FaMinus className="mx-auto text-gray-300 text-sm" />
            );
        }
        if (typeof value === "string" && value.length > 50) {
            return <span className="text-gray-700 text-xs leading-relaxed">{value}</span>;
        }
        return <span className="text-gray-700 font-medium text-sm">{value}</span>;
    };

    return (
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                    >
                        Choose Your Testing Pack
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 max-w-2xl mx-auto"
                    >
                        Select the service tier for your team&apos;s stage, risk/lift ratio, and testing maturity.
                    </motion.p>
                </div>

                {/* Pricing Table */}
                <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-lg bg-white">
                    <table className="w-full text-left">
                        {/* Header Row */}
                        <thead>
                            <tr className="bg-amber-50 border-b-2 border-amber-200">
                                <th className="py-6 px-6 text-sm font-bold text-gray-900 w-1/4">Features</th>
                                <th className="py-6 px-4 text-center w-1/4">
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                                            {plans.webApp.icon}
                                        </div>
                                        <span className="font-bold text-gray-900 text-sm">{plans.webApp.name}</span>
                                    </div>
                                </th>
                                <th className="py-6 px-4 text-center w-1/4 bg-amber-100/50">
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="p-3 bg-green-100 rounded-xl text-green-600">
                                            {plans.mobileApp.icon}
                                        </div>
                                        <span className="font-bold text-gray-900 text-sm">{plans.mobileApp.name}</span>
                                    </div>
                                </th>
                                <th className="py-6 px-4 text-center w-1/4">
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="p-3 bg-purple-100 rounded-xl text-purple-600">
                                            {plans.desktopApp.icon}
                                        </div>
                                        <span className="font-bold text-gray-900 text-sm">{plans.desktopApp.name}</span>
                                    </div>
                                </th>
                            </tr>
                        </thead>

                        {/* Feature Rows */}
                        <tbody>
                            {features.map((item, idx) => {
                                if (item.category) {
                                    return (
                                        <tr key={idx} className="bg-gray-50">
                                            <td
                                                colSpan={4}
                                                className="py-4 px-6 text-xs font-black uppercase tracking-widest text-amber-700"
                                            >
                                                {item.category}
                                            </td>
                                        </tr>
                                    );
                                }
                                return (
                                    <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                                        <td className="py-4 px-6 text-sm font-medium text-gray-800">
                                            {item.name}
                                        </td>
                                        <td className="py-4 px-4 text-center align-top">
                                            {renderValue(item.webApp)}
                                        </td>
                                        <td className="py-4 px-4 text-center align-top bg-amber-50/30">
                                            {renderValue(item.mobileApp)}
                                        </td>
                                        <td className="py-4 px-4 text-center align-top">
                                            {renderValue(item.desktopApp)}
                                        </td>
                                    </tr>
                                );
                            })}

                            {/* Hours Per Week */}
                            <tr className="border-b border-gray-100">
                                <td className="py-4 px-6 text-sm font-medium text-gray-800">What you span</td>
                                <td className="py-4 px-4 text-center text-xs text-gray-600">{plans.webApp.hoursPerWeek}</td>
                                <td className="py-4 px-4 text-center text-xs text-gray-600 bg-amber-50/30">{plans.mobileApp.hoursPerWeek}</td>
                                <td className="py-4 px-4 text-center text-xs text-gray-600">{plans.desktopApp.hoursPerWeek}</td>
                            </tr>

                            {/* Timeline */}
                            <tr className="border-b border-gray-100">
                                <td className="py-4 px-6 text-sm font-medium text-gray-800">Timeline</td>
                                <td className="py-4 px-4 text-center text-sm font-medium text-gray-700">{plans.webApp.timeline}</td>
                                <td className="py-4 px-4 text-center text-sm font-medium text-gray-700 bg-amber-50/30">{plans.mobileApp.timeline}</td>
                                <td className="py-4 px-4 text-center text-sm font-medium text-gray-700">{plans.desktopApp.timeline}</td>
                            </tr>

                            {/* Best For */}
                            <tr className="border-b border-gray-100">
                                <td className="py-4 px-6 text-sm font-medium text-gray-800">Best for</td>
                                <td className="py-4 px-4 text-center text-xs text-gray-600 leading-relaxed">{plans.webApp.bestFor}</td>
                                <td className="py-4 px-4 text-center text-xs text-gray-600 leading-relaxed bg-amber-50/30">{plans.mobileApp.bestFor}</td>
                                <td className="py-4 px-4 text-center text-xs text-gray-600 leading-relaxed">{plans.desktopApp.bestFor}</td>
                            </tr>

                            {/* Price Range */}
                            <tr className="border-b border-gray-200 bg-gray-50">
                                <td className="py-5 px-6 text-sm font-bold text-gray-900">Price Range</td>
                                <td className="py-5 px-4 text-center">
                                    <span className="text-xl font-black text-gray-900">{plans.webApp.priceRange}</span>
                                </td>
                                <td className="py-5 px-4 text-center bg-amber-100/50">
                                    <span className="text-xl font-black text-gray-900">{plans.mobileApp.priceRange}</span>
                                </td>
                                <td className="py-5 px-4 text-center">
                                    <span className="text-xl font-black text-gray-900">{plans.desktopApp.priceRange}</span>
                                </td>
                            </tr>

                            {/* See Plans Row */}
                            <tr>
                                <td className="py-5 px-6 text-sm font-medium text-gray-800">See Plans</td>
                                <td className="py-5 px-4 text-center text-xs text-gray-600 leading-relaxed">
                                    What&apos;s included, recommended add-ons, and clear pricing.
                                </td>
                                <td className="py-5 px-4 text-center text-xs text-gray-600 leading-relaxed bg-amber-50/30">
                                    Don&apos;t get surprised by cloud device lab costs. Everything&apos;s covered.
                                </td>
                                <td className="py-5 px-4 text-center text-xs text-gray-600 leading-relaxed">
                                    Scope is discussed before we start. No hidden costs.
                                </td>
                            </tr>
                        </tbody>

                        {/* CTA Row */}
                        <tfoot>
                            <tr className="border-t border-gray-200">
                                <td className="py-6 px-6"></td>
                                <td className="py-6 px-4 text-center">
                                    <Link
                                        href="/contact-us"
                                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm bg-blue-600 text-white hover:bg-blue-500 transition-all shadow-lg"
                                    >
                                        Get Started <FaArrowRight className="w-3 h-3" />
                                    </Link>
                                </td>
                                <td className="py-6 px-4 text-center bg-amber-50/30">
                                    <Link
                                        href="/contact-us"
                                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm bg-green-600 text-white hover:bg-green-500 transition-all shadow-lg"
                                    >
                                        Get Started <FaArrowRight className="w-3 h-3" />
                                    </Link>
                                </td>
                                <td className="py-6 px-4 text-center">
                                    <Link
                                        href="/contact-us"
                                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm bg-purple-600 text-white hover:bg-purple-500 transition-all shadow-lg"
                                    >
                                        Get Started <FaArrowRight className="w-3 h-3" />
                                    </Link>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Pricing2PacksTable;
