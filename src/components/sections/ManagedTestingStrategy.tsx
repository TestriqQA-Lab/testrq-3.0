"use client";

import React from "react";
import {
    FaSearch,
    FaBullseye,
    FaBalanceScale,
    FaHandshake,
    FaFileContract,
    FaRocket,
    FaCertificate,
    FaTrophy,
    FaGlobe,
    FaShieldAlt,
    FaChartLine,
    FaStar,
    FaHeart,
} from "react-icons/fa";

const ManagedTestingStrategy: React.FC = () => {
    const steps = [
        { icon: <FaSearch />, title: "Assess Current State", detail: "Evaluate current testing practices, team structure, tools, and quality metrics. Identify gaps and opportunities." },
        { icon: <FaBullseye />, title: "Define Business Objectives", detail: "Clarify business goals: accelerate time-to-market, reduce costs, improve quality, scale capacity, achieve compliance." },
        { icon: <FaBalanceScale />, title: "Evaluate Service Models", detail: "Compare managed testing with in-house, staff augmentation, and traditional outsourcing based on your needs." },
        { icon: <FaHandshake />, title: "Select Engagement Model", detail: "Choose the model that best fits: dedicated team, TCoE, specialized services, or hybrid approach." },
        { icon: <FaFileContract />, title: "Define SLAs & KPIs", detail: "Establish clear Service Level Agreements and Key Performance Indicators that govern the engagement." },
        { icon: <FaRocket />, title: "Implement & Monitor", detail: "Launch the managed testing engagement and continuously monitor performance against SLAs and KPIs." },
    ];

    const whyTestriq = [
        { icon: <FaCertificate className="text-xl" />, title: "ISTQB Certified Expertise", detail: "180 ISTQB-certified QA professionals with proven methodologies and industry best practices." },
        { icon: <FaTrophy className="text-xl" />, title: "Proven Track Record", detail: "15+ years, 500K+ test cases executed, 100% client satisfaction across healthcare, fintech, e-commerce, and SaaS." },
        { icon: <FaGlobe className="text-xl" />, title: "Global Reach", detail: "Operating across US, UK, EU, India, Asia, and UAE — understanding regional compliance and market challenges." },
        { icon: <FaShieldAlt className="text-xl" />, title: "Independent Testing", detail: "As an independent testing provider, we deliver objective, unbiased results without conflicts of interest." },
        { icon: <FaChartLine className="text-xl" />, title: "Outcome Accountability", detail: "Managed services governed by SLAs and KPIs that hold us accountable for quality outcomes, not just activity." },
        { icon: <FaStar className="text-xl" />, title: "Continuous Improvement", detail: "We continuously optimize testing processes, tools, and team capabilities to improve quality and efficiency." },
        { icon: <FaHeart className="text-xl" />, title: "Strategic Partnership", detail: "We view our engagement as a strategic partnership, not just a vendor relationship. Your success is our success." },
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Strategy Steps */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <span className="text-sm">● Your Strategy</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Building Your Managed{" "}
                        <span className="text-brand-blue">Testing Strategy</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
                    {steps.map((step, index) => (
                        <div key={index} className="relative text-center group">
                            <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-brand-blue to-indigo-600 text-white flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition-all duration-300 shadow-lg">
                                {step.icon}
                            </div>
                            <div className="absolute top-7 left-[60%] w-full h-0.5 bg-gray-200 hidden lg:block last:hidden -z-10"></div>
                            <div className="text-xs font-bold text-brand-blue mb-1">Step {index + 1}</div>
                            <h4 className="text-sm font-bold text-gray-900 mb-1">{step.title}</h4>
                            <p className="text-xs text-gray-500 leading-relaxed">{step.detail}</p>
                        </div>
                    ))}
                </div>

                {/* Why Testriq */}
                <div className="bg-gradient-to-br from-gray-900 to-indigo-900 rounded-2xl p-10 text-white">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl md:text-3xl font-bold mb-3">
                            Why Choose <span className="text-yellow-300">Testriq</span> for Managed Testing?
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {whyTestriq.slice(0, 6).map((item, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-5 hover:bg-white/20 transition-all duration-300">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-yellow-300">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                                </div>
                                <p className="text-blue-200 text-xs leading-relaxed">{item.detail}</p>
                            </div>
                        ))}
                    </div>

                    {/* 7th item full-width */}
                    <div className="mt-6 bg-white/10 backdrop-blur rounded-xl p-5 text-center max-w-2xl mx-auto hover:bg-white/20 transition-all duration-300">
                        <div className="flex items-center justify-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-yellow-300">
                                {whyTestriq[6].icon}
                            </div>
                            <h4 className="text-sm font-bold text-white">{whyTestriq[6].title}</h4>
                        </div>
                        <p className="text-blue-200 text-xs leading-relaxed">{whyTestriq[6].detail}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManagedTestingStrategy;
