
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Info, ArrowRight, Zap, Star, ShieldCheck } from "lucide-react";
import Link from "next/link";

const PricingPlans = () => {
    const [model, setModel] = useState<"retainer" | "project">("retainer");

    const plans = {
        retainer: [
            {
                name: "Managed QA Startup",
                price: "$2,400",
                period: "/month",
                description: "Ideal for early-stage startups needing consistent QA oversight.",
                features: [
                    "1 Dedicated QA Engineer (Part-time)",
                    "Manual Functional Testing",
                    "Bug Reporting & Tracking",
                    "Retesting & Regression",
                    "Slack/Teams Direct Access",
                    "Weekly Status Reports"
                ],
                cta: "Start Managed QA",
                popular: false,
                icon: <Zap className="w-6 h-6 text-blue-500" />
            },
            {
                name: "Professional Growth",
                price: "$4,800",
                period: "/month",
                description: "Perfect for scaling fast with continuous integration needs.",
                features: [
                    "1 Full-time Senior QA Engineer",
                    "Manual + Basic Automation (Selenium/Playwright)",
                    "API Testing (Postman)",
                    "Performance Smoke Tests",
                    "CI/CD Pipeline Integration",
                    "Quarterly Strategy Audit"
                ],
                cta: "Scale Your QA",
                popular: true,
                icon: <Star className="w-6 h-6 text-brand-blue" />
            },
            {
                name: "Enterprise Global",
                price: "Custom",
                period: "",
                description: "Complete testing teams for large, complex ecosystems.",
                features: [
                    "Dedicated QA Lead + Team (3+)",
                    "Full-scale Automation Strategy",
                    "Security & Compliance (HIPAA/GDPR)",
                    "Dedicated Device Lab Access",
                    "24/7 Shift Coverage",
                    "Annual Trust Certification"
                ],
                cta: "Talk to Sales",
                popular: false,
                icon: <ShieldCheck className="w-6 h-6 text-purple-600" />
            }
        ],
        project: [
            {
                name: "Rapid MVP Audit",
                price: "$1,800",
                period: "/project",
                description: "Quick 2-week health check before your big launch.",
                features: [
                    "End-to-end UX/UI Audit",
                    "Critical Path Functional Testing",
                    "Cross-browser (Top 5) Check",
                    "Detailed Defect Report",
                    "Retesting of 1 Build",
                    "3 Days Delivery"
                ],
                cta: "Book MVP Audit",
                popular: false,
                icon: <Zap className="w-6 h-6 text-blue-500" />
            },
            {
                name: "Security & Compliance",
                price: "$3,500",
                period: "/project",
                description: "Specialized vulnerability audit for regulated industries.",
                features: [
                    "Vulnerability Scan (OWASP Top 10)",
                    "Penetration Testing (Manual)",
                    "Privacy Policy Review",
                    "Security Certificate Issuance",
                    "Vulnerability Fix Roadmap",
                    "Post-fix Validation"
                ],
                cta: "Audit Security",
                popular: true,
                icon: < ShieldCheck className="w-6 h-6 text-brand-blue" />
            },
            {
                name: "Enterprise Roadmap",
                price: "$9,000",
                period: "/project",
                description: "In-depth testing strategy & framework setup.",
                features: [
                    "Automation Architecture Design",
                    "Infrastructure-as-Code Setup",
                    "TCoE Implementation Plan",
                    "Performance Benchmarking",
                    "Staff Training Workshop",
                    "Custom Test Case Repository"
                ],
                cta: "Custom Quote",
                popular: false,
                icon: <Star className="w-6 h-6 text-purple-600" />
            }
        ]
    };

    return (
        <section className="py-20 px-8 md:px-12 lg:px-24 bg-gray-50/50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Toggle */}
                <div className="flex flex-col items-center mb-16">
                    <div className="bg-gray-200/60 p-1.5 rounded-2xl inline-flex mb-4">
                        <button
                            onClick={() => setModel("retainer")}
                            className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${model === "retainer" ? "bg-white text-gray-900 shadow-md" : "text-gray-500 hover:text-gray-700"}`}
                        >
                            Monthly Retainer
                        </button>
                        <button
                            onClick={() => setModel("project")}
                            className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${model === "project" ? "bg-white text-gray-900 shadow-md" : "text-gray-500 hover:text-gray-700"}`}
                        >
                            Project Based
                        </button>
                    </div>
                    <p className="text-sm text-gray-500 flex items-center gap-2">
                        <Info className="w-4 h-4" />
                        {model === "retainer" ? "Ideal for continuous development cycles" : "Best for one-off audits and strategy"}
                    </p>
                </div>

                {/* Plans Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="wait">
                        {plans[model].map((plan, i) => (
                            <motion.div
                                key={`${model}-${plan.name}`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3, delay: i * 0.1 }}
                                className={`relative p-8 rounded-3xl border-2 flex flex-col transition-all duration-500 ${plan.popular
                                    ? "bg-white border-brand-blue shadow-2xl scale-105 z-10"
                                    : "bg-white border-transparent hover:border-gray-200 shadow-xl"
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-blue text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                        RECOMMENDED
                                    </div>
                                )}

                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-gray-50 rounded-2xl">
                                        {plan.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                                        <p className="text-sm text-gray-500">{model === "retainer" ? "Dedicated Expert" : "One-time Audit"}</p>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-black text-gray-900">{plan.price}</span>
                                        <span className="text-gray-500 font-medium">{plan.period}</span>
                                    </div>
                                    <p className="text-gray-600 mt-2 text-sm leading-relaxed">{plan.description}</p>
                                </div>

                                <div className="space-y-4 mb-8 flex-grow">
                                    {plan.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <div className="p-0.5 bg-green-50 rounded-full mt-1">
                                                <Check className="w-4 h-4 text-green-600" />
                                            </div>
                                            <span className="text-gray-700 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href="/contact-us"
                                    className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold transition-all duration-300 ${plan.popular
                                        ? "bg-brand-blue text-white shadow-lg shadow-blue-200 hover:shadow-xl hover:bg-blue-600"
                                        : "bg-gray-900 text-white hover:bg-black"
                                        }`}
                                >
                                    {plan.cta}
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Custom Solution */}
                <div className="mt-20 text-center">
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom QA Model?</h4>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Sometimes standardized packages aren&apos;t enough. We specialize in building custom
                        Quality Engineering solutions for complex enterprise needs.
                    </p>
                    <Link
                        href="/contact-us"
                        className="inline-flex items-center gap-2 text-brand-blue font-bold border-b-2 border-brand-blue hover:text-blue-700 hover:border-blue-700 transition-all"
                    >
                        Build My Custom Package <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PricingPlans;
