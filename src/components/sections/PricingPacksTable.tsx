"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheck, FaMinus, FaArrowRight, FaStar, FaUserTie, FaRocket } from "react-icons/fa";
import { HiOutlineScale } from "react-icons/hi";
import Link from "next/link";

type PlanKey = "essentials" | "professional" | "enterprise";

interface FeatureRow {
    category?: string;
    name?: string;
    essentials?: boolean | string;
    professional?: boolean | string;
    enterprise?: boolean | string;
}

const PricingPacksTable: React.FC = () => {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "quarterly">("monthly");

    const plans: Record<PlanKey, { name: string; price: string; quarterlyPrice: string; tagline: string; icon: React.ReactNode; highlight: boolean }> = {
        essentials: {
            name: "Essentials",
            price: "$2,400",
            quarterlyPrice: "$6,600",
            tagline: "For MVPs & Startups",
            icon: <FaRocket className="w-5 h-5" />,
            highlight: false,
        },
        professional: {
            name: "Professional",
            price: "$4,800",
            quarterlyPrice: "$13,200",
            tagline: "For Scaling Teams",
            icon: <FaUserTie className="w-5 h-5" />,
            highlight: true,
        },
        enterprise: {
            name: "Enterprise",
            price: "Custom",
            quarterlyPrice: "Custom",
            tagline: "For Global Operations",
            icon: <HiOutlineScale className="w-5 h-5" />,
            highlight: false,
        },
    };

    const features: FeatureRow[] = [
        { category: "Core Testing" },
        { name: "Manual Functional Testing", essentials: true, professional: true, enterprise: true },
        { name: "API & Integration Testing", essentials: "Basic", professional: "Advanced", enterprise: "Full Spectrum" },
        { name: "Test Automation (Web/Mobile)", essentials: false, professional: true, enterprise: true },
        { name: "Performance & Load Testing", essentials: false, professional: "Ad-hoc", enterprise: "Continuous" },
        { name: "Security Scan (OWASP Top 10)", essentials: false, professional: "Quarterly", enterprise: "Weekly" },

        { category: "Team & Support" },
        { name: "Dedicated QA Engineer", essentials: "Part-time", professional: "Full-time", enterprise: "3+ Engineers" },
        { name: "QA Lead / Manager", essentials: false, professional: true, enterprise: true },
        { name: "Response Time (SLA)", essentials: "24 hrs", professional: "4 hrs", enterprise: "1 hr" },
        { name: "Communication Channel", essentials: "Slack/Email", professional: "Slack + Video", enterprise: "Dedicated War Room" },
        { name: "Reporting Cadence", essentials: "Weekly", professional: "Bi-Weekly", enterprise: "Real-time Dashboard" },

        { category: "Infrastructure" },
        { name: "Cloud Device Lab Access", essentials: "Shared", professional: "Priority", enterprise: "Dedicated" },
        { name: "CI/CD Pipeline Integration", essentials: false, professional: true, enterprise: true },
        { name: "On-Premise Deployment Option", essentials: false, professional: false, enterprise: true },
    ];

    const renderValue = (value: boolean | string | undefined) => {
        if (typeof value === "boolean") {
            return value ? (
                <FaCheck className="mx-auto text-green-500 text-lg" />
            ) : (
                <FaMinus className="mx-auto text-slate-600 text-sm" />
            );
        }
        return <span className="text-slate-300 font-medium">{value}</span>;
    };

    return (
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-slate-900">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Choose Your Service Tier
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        All plans include our core QA methodology. Scale up based on your testing complexity and velocity.
                    </p>
                </div>

                {/* Billing Toggle */}
                <div className="flex justify-center mb-12">
                    <div className="bg-slate-800 p-1.5 rounded-2xl inline-flex border border-slate-700">
                        <button
                            onClick={() => setBillingCycle("monthly")}
                            className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${billingCycle === "monthly"
                                ? "bg-blue-600 text-white shadow-lg"
                                : "text-slate-400 hover:text-white"
                                }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingCycle("quarterly")}
                            className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${billingCycle === "quarterly"
                                ? "bg-blue-600 text-white shadow-lg"
                                : "text-slate-400 hover:text-white"
                                }`}
                        >
                            Quarterly
                            <span className="bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded-full">
                                Save 8%
                            </span>
                        </button>
                    </div>
                </div>

                {/* Pricing Table */}
                <div className="overflow-x-auto rounded-2xl border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm">
                    <table className="w-full text-left">
                        {/* Header Row with Plans */}
                        <thead>
                            <tr className="border-b border-slate-700">
                                <th className="py-8 px-6 w-1/4"></th>
                                {(Object.keys(plans) as PlanKey[]).map((key) => (
                                    <th
                                        key={key}
                                        className={`py-8 px-4 text-center w-1/4 ${plans[key].highlight ? "bg-blue-600/10" : ""
                                            }`}
                                    >
                                        <div className="relative">
                                            {plans[key].highlight && (
                                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                                    <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                                                        <FaStar className="w-3 h-3" /> MOST POPULAR
                                                    </span>
                                                </div>
                                            )}
                                            <div className={`flex justify-center mb-2 ${plans[key].highlight ? "text-blue-400" : "text-slate-400"
                                                }`}>
                                                {plans[key].icon}
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-1">
                                                {plans[key].name}
                                            </h3>
                                            <p className="text-slate-500 text-xs mb-4">
                                                {plans[key].tagline}
                                            </p>
                                            <AnimatePresence mode="wait">
                                                <motion.div
                                                    key={billingCycle}
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    className="text-3xl font-black text-white"
                                                >
                                                    {billingCycle === "monthly"
                                                        ? plans[key].price
                                                        : plans[key].quarterlyPrice}
                                                    {plans[key].price !== "Custom" && (
                                                        <span className="text-sm font-normal text-slate-400">
                                                            /{billingCycle === "monthly" ? "mo" : "qtr"}
                                                        </span>
                                                    )}
                                                </motion.div>
                                            </AnimatePresence>
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        {/* Feature Rows */}
                        <tbody>
                            {features.map((item, idx) => {
                                if (item.category) {
                                    return (
                                        <tr key={idx} className="bg-slate-900/50">
                                            <td
                                                colSpan={4}
                                                className="py-4 px-6 text-xs font-black uppercase tracking-widest text-blue-400"
                                            >
                                                {item.category}
                                            </td>
                                        </tr>
                                    );
                                }
                                return (
                                    <tr key={idx} className="border-b border-slate-700/30 hover:bg-slate-700/20 transition-colors">
                                        <td className="py-4 px-6 text-sm font-medium text-slate-300">
                                            {item.name}
                                        </td>
                                        <td className="py-4 px-4 text-center text-sm">
                                            {renderValue(item.essentials)}
                                        </td>
                                        <td className={`py-4 px-4 text-center text-sm ${plans.professional.highlight ? "bg-blue-600/5" : ""
                                            }`}>
                                            {renderValue(item.professional)}
                                        </td>
                                        <td className="py-4 px-4 text-center text-sm">
                                            {renderValue(item.enterprise)}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>

                        {/* CTA Row */}
                        <tfoot>
                            <tr className="border-t border-slate-700">
                                <td className="py-8 px-6"></td>
                                {(Object.keys(plans) as PlanKey[]).map((key) => (
                                    <td
                                        key={key}
                                        className={`py-8 px-4 text-center ${plans[key].highlight ? "bg-blue-600/10" : ""
                                            }`}
                                    >
                                        <Link
                                            href="/contact-us"
                                            className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${plans[key].highlight
                                                ? "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-500/25"
                                                : "bg-slate-700 text-white hover:bg-slate-600"
                                                }`}
                                        >
                                            Get Started <FaArrowRight className="w-4 h-4" />
                                        </Link>
                                    </td>
                                ))}
                            </tr>
                        </tfoot>
                    </table>
                </div>

                {/* Additional Note */}
                <div className="text-center mt-8">
                    <p className="text-slate-500 text-sm">
                        All prices are in USD. Annual contracts available with additional discount.{" "}
                        <Link href="/contact-us" className="text-blue-400 hover:underline">
                            Contact us
                        </Link>{" "}
                        for custom requirements.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PricingPacksTable;
