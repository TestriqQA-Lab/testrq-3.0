"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaMobileAlt, FaServer, FaShieldAlt, FaCheckCircle, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const NewPricingCards: React.FC = () => {
    const packages = [
        {
            id: "web",
            name: "Web App Testing bundle",
            badge: "Popular Setup",
            icon: <FaGlobe className="w-8 h-8" />,
            color: "blue",
            price: "Starting from 400 USD per mid size project",
            delivery: "5 - 10 Business Days",
            suitableFor: [
                "SaaS tools",
                "Portals",
                "Online Stores",
                "Custom websites"
            ],
            whatWeTest: [
                "Functional Testing",
                "Integration Tests",
                "Cross-Browser & Device Compatibility",
                "Usability (UX)",
                "Performance",
                "Security"
            ],
            whatsIncluded: [
                "Testing on most popular browsers: Windows, MAC, Android Phone & Tablets, and Apple Phone & Tablets",
                "2 bug verification cycles free of cost."
            ],
            whatYouGet: "A clear \"Bug List\" (Video/Screenshot + Steps), Vulnerability Report, and a performance scorecard.",
            addOn: "Add Test Automation: 400 USD with CI / CD integration"
        },
        {
            id: "mobile",
            name: "Mobile App Testing bundle",
            badge: "Most Popular",
            icon: <FaMobileAlt className="w-8 h-8" />,
            color: "indigo",
            price: "Starting from 500 USD per mid size App, iOS + Android",
            delivery: "5 - 10 Business Days",
            suitableFor: [
                "Startups ready for the App Store / Play Store.",
                "Looking to improve App / Play store ratings."
            ],
            whatWeTest: [
                "Functional Testing",
                "UI responsiveness on small screens",
                "Touch gestures",
                "App behavior on 4G/5G vs. Wi-Fi.",
                "API Integration Tests",
                "Performance",
                "Security"
            ],
            whatsIncluded: [
                "Testing on real iOS & Android devices.",
                "Latest to lowest OS versions",
                "Real world test scenarios & Network conditions",
                "Battery drain & heat check",
                "Push notification delivery",
                "2 bug verification cycles free of cost"
            ],
            whatYouGet: "A clear \"Bug List\" (Video/Screenshot + Steps). A crash-report log and a \"UX Friction\" report showing where users get stuck.",
            addOn: "Add Test Automation: 300 USD with CI / CD integration"
        },
        {
            id: "api",
            name: "API Testing Pack",
            icon: <FaServer className="w-8 h-8" />,
            color: "emerald",
            price: "Starting from 350 USD per project (up to 20 endpoints)",
            delivery: "5 - 10 Business Days",
            suitableFor: [
                "Microservices-based architectures.",
                "Third-party integrations (Payment/SMS).",
                "Headless CMS & Backend-heavy apps."
            ],
            whatWeTest: [
                "Functional Validation: Endpoint logic & CRUD operations.",
                "Schema Validation: JSON/XML structure & data types.",
                "Negative Testing: Error codes (4xx, 5xx) & edge cases.",
                "Auth & Headers: Token validation (JWT/OAuth) & API Keys.",
                "Performance: Latency, throughput, and rate limiting.",
                "Data Integrity: Database consistency after API calls."
            ],
            whatsIncluded: [
                "Testing on REST, GraphQL, or SOAP architectures.",
                "Environment support: Dev, Staging, and Production.",
                "Postman / Insomnia collections for easy re-running.",
                "Detailed Request/Response logs for every failure.",
                "2 bug verification cycles free of cost."
            ],
            whatYouGet: "Full API Audit Report: Success/Failure rates per endpoint. Performance Benchmarks: Response time & Latency stats. Postman Collection: Ready-to-use scripts for your developers.",
            addOn: "Add Test Automation: 300 USD (CI/CD integration)"
        },
        {
            id: "vapt",
            name: "VAPT (Security) Pack",
            icon: <FaShieldAlt className="w-8 h-8" />,
            color: "rose",
            description: "\"Just the URL, Not the Strings.\" No access to source code or servers required. We attack your app exactly like a real-world predator would.",
            price: "Starting from 800 USD per audit (Web or Mobile)",
            delivery: "7 - 12 Business Days",
            suitableFor: [
                "Fintech, Healthcare, and Enterprise apps.",
                "Compliance-ready products (ISO/SOC2/GDPR).",
                "Apps handling sensitive PII or financial data."
            ],
            whatWeTest: [
                "Vulnerability Assessment: Automated scanning for known flaws.",
                "Manual Pentesting: Human-led exploitation of logic flaws.",
                "OWASP Top 10: Injection, XSS, Broken Auth, etc.",
                "Sensitive Data Exposure: Data leaks in transit/at rest.",
                "Server Configuration: SSL/TLS checks & open port audits.",
                "Privilege Escalation: Vertical and horizontal access checks."
            ],
            whatsIncluded: [
                "Hybrid approach: Automated Tools + Manual Expert Review.",
                "Business Logic Audit: Testing beyond automated scans.",
                "Detailed Proof of Concept (PoC) for every vulnerability.",
                "Executive Summary for management + Tech details for devs.",
                "1 Complimentary Re-scan after you fix the vulnerabilities."
            ],
            whatYouGet: "VAPT Audit Report: Categorized by Critical, High, Medium, Low. Remediation Roadmap: Step-by-step guide to fixing each flaw. Security Certificate: Seal of testing for your stakeholders.",
            addOn: "Continuous Security Monitoring available on request."
        }
    ];

    const colorMap: Record<string, { bg: string, text: string, border: string, lightBg: string, buttonBg: string, buttonHover: string, gradient: string }> = {
        blue: { bg: "bg-blue-600", text: "text-blue-600", border: "border-blue-100", lightBg: "bg-blue-50/30", buttonBg: "bg-blue-600", buttonHover: "hover:bg-blue-700", gradient: "from-blue-500 to-blue-700" },
        indigo: { bg: "bg-indigo-600", text: "text-indigo-600", border: "border-indigo-100", lightBg: "bg-indigo-50/30", buttonBg: "bg-indigo-600", buttonHover: "hover:bg-indigo-700", gradient: "from-indigo-500 to-purple-600" },
        emerald: { bg: "bg-emerald-600", text: "text-emerald-600", border: "border-emerald-100", lightBg: "bg-emerald-50/30", buttonBg: "bg-emerald-600", buttonHover: "hover:bg-emerald-700", gradient: "from-emerald-500 to-teal-600" },
        rose: { bg: "bg-rose-600", text: "text-rose-600", border: "border-rose-100", lightBg: "bg-rose-50/30", buttonBg: "bg-rose-600", buttonHover: "hover:bg-rose-700", gradient: "from-rose-500 to-pink-600" }
    };

    return (
        <section className="py-24 px-4 md:px-8 lg:px-12 bg-[#f4f7f9] relative overflow-hidden">
            {/* Glowing Futuristic Orbs behind the grid */}
            <div className="absolute top-0 left-0 lg:left-1/4 w-[600px] h-[600px] bg-blue-400/20 rounded-full mix-blend-multiply filter blur-[120px] opacity-70 pointer-events-none transition-all duration-1000"></div>
            <div className="absolute top-40 right-0 lg:right-1/4 w-[500px] h-[500px] bg-indigo-400/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 pointer-events-none transition-all duration-1000"></div>
            <div className="absolute bottom-0 left-1/3 w-[700px] h-[700px] bg-emerald-400/10 rounded-full mix-blend-multiply filter blur-[120px] opacity-70 pointer-events-none transition-all duration-1000"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 pl-1 pr-1 pb-4">
                    {packages.map((pkg, idx) => {
                        const theme = colorMap[pkg.color];

                        return (
                            <motion.div
                                key={pkg.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                                className={`flex flex-col bg-white/70 backdrop-blur-3xl rounded-[2.5rem] border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 overflow-hidden group relative`}
                            >
                                {/* Inner glow and subtle gradient hover effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br from-${pkg.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                                {pkg.badge && (
                                    <div className={`absolute top-6 right-6 px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase bg-gradient-to-r ${theme.gradient} text-white shadow-[0_0_20px_rgba(0,0,0,0.15)] shadow-${pkg.color}-500/40 z-20`}>
                                        {pkg.badge}
                                    </div>
                                )}

                                {/* Header section */}
                                <div className={`p-10 ${pkg.badge ? 'pt-14' : 'pt-10'} border-b border-slate-100/50 relative overflow-hidden z-10`}>
                                    <div className="flex items-center gap-4 mb-6 relative z-10">
                                        <div className={`p-4 bg-white rounded-[1rem] shadow-[0_4px_20px_rgba(0,0,0,0.06)] ${theme.text} ring-1 ring-slate-100/50 group-hover:scale-110 transition-transform duration-500 ease-out`}>
                                            {React.cloneElement(pkg.icon as React.ReactElement<any>, { className: "w-7 h-7" })}
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{pkg.name}</h3>
                                    </div>
                                    <div className="relative z-10">
                                        {/* Highlighted Price Area */}
                                        <div className="flex items-start gap-1.5 mb-2 mt-2">
                                            <span className="text-slate-400 font-semibold text-sm mt-3 mr-1 uppercase tracking-widest">From</span>
                                            <span className="text-4xl font-bold text-slate-900 mt-1.5">$</span>
                                            <span className="text-7xl font-black text-slate-900 tracking-tighter leading-none">{pkg.price.match(/\d+/) ? pkg.price.match(/\d+/)?.[0] : "Custom"}</span>
                                        </div>
                                        <p className="text-slate-500 text-sm font-medium">{pkg.price.replace(/Starting from \d+ USD /, '')}</p>
                                    </div>

                                    {pkg.description && (
                                        <div className="mt-8 p-4 bg-slate-50/60 rounded-2xl text-sm text-slate-600 border border-slate-100/60 backdrop-blur-md relative z-10">
                                            {pkg.description}
                                        </div>
                                    )}
                                </div>

                                {/* Body section */}
                                <div className="p-10 flex-grow flex flex-col gap-10 relative z-10">

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                        {/* What we test */}
                                        <div>
                                            <h4 className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-widest mb-6">
                                                <span className={`w-2 h-2 rounded-full ${theme.bg}`}></span>
                                                What we test
                                            </h4>
                                            <ul className="space-y-4">
                                                {pkg.whatWeTest.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <FaCheckCircle className={`w-[14px] h-[14px] mt-[3px] ${theme.text} shrink-0 opacity-80`} />
                                                        <span className="text-[13px] font-medium text-slate-600 leading-relaxed">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* What's included */}
                                        <div>
                                            <h4 className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-widest mb-6">
                                                <span className={`w-2 h-2 rounded-full ${theme.bg}`}></span>
                                                What's included?
                                            </h4>
                                            <ul className="space-y-4">
                                                {pkg.whatsIncluded.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <div className={`w-1.5 h-1.5 rounded-full mt-2 ${theme.bg} shrink-0 opacity-60`} />
                                                        <span className="text-[13px] font-medium text-slate-600 leading-relaxed">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent my-2" />

                                    {/* Outputs & Audience */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                        <div className="bg-white/80 p-6 rounded-[1.5rem] border border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col">
                                            <h4 className="text-sm font-bold text-slate-900 mb-3">Deliverables</h4>
                                            <p className="text-[13px] font-medium text-slate-600 mb-5 leading-relaxed">{pkg.whatYouGet}</p>

                                            <div className="mt-auto inline-flex items-center gap-2 text-[11px] font-bold px-3 py-2 bg-slate-100 text-slate-700 rounded-lg self-start">
                                                ⏱ {pkg.delivery}
                                            </div>
                                        </div>

                                        <div className="flex flex-col justify-center">
                                            <h4 className="text-sm font-bold text-slate-900 mb-4">Suitable for</h4>
                                            <div className="flex flex-wrap gap-2.5">
                                                {pkg.suitableFor.map((item, i) => (
                                                    <span key={i} className="px-3 py-1.5 bg-slate-50 border border-slate-200/60 text-slate-600 text-[11px] font-semibold rounded-full shadow-sm">
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* Footer / Actions */}
                                <div className="p-10 pt-0 mt-auto flex flex-col items-center gap-5 relative z-10">
                                    <div className={`text-[11px] font-bold ${theme.text} bg-${pkg.color}-50 px-4 py-2.5 rounded-2xl border border-${pkg.color}-100 w-full text-center uppercase tracking-widest`}>
                                        ✨ {pkg.addOn.replace(/(\d+)\s*USD/, "$$$1")}
                                    </div>
                                    <Link
                                        href="/contact-us"
                                        className={`w-full p-[3px] rounded-2xl group/btn relative ${pkg.badge ? 'ring-4 ring-' + pkg.color + '-100/50' : ''}`}
                                    >
                                        <div className={`absolute inset-0 bg-gradient-to-r ${theme.gradient} rounded-2xl opacity-90 group-hover/btn:opacity-100 blur-sm transition-opacity`}></div>
                                        <div className={`absolute inset-0 bg-gradient-to-r ${theme.gradient} rounded-2xl`}></div>
                                        <div className="relative flex items-center justify-center gap-2 bg-gradient-to-r px-6 py-4 rounded-xl text-base font-bold text-white transition-all transform hover:scale-[1.01] active:scale-[0.99] z-10 w-full">
                                            Get Started Now
                                            <FaArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                                        </div>
                                    </Link>
                                </div>

                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default NewPricingCards;
