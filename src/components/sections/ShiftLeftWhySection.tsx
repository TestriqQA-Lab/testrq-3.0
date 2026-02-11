"use client";

import React from "react";
import { FaBug, FaDollarSign, FaBolt, FaCode, FaChartBar } from "react-icons/fa";

const ShiftLeftWhySection: React.FC = () => {
    const benefits = [
        {
            icon: <FaBug className="w-5 h-5" />,
            title: "Early Bug Detection",
            description: "Proactively identify and eliminate vulnerabilities before they become critical issues."
        },
        {
            icon: <FaChartBar className="w-5 h-5" />,
            title: "Reduced Technical Debt",
            description: "Address quality concerns upfront to ensure a healthier, more maintainable codebase."
        },
        {
            icon: <FaDollarSign className="w-5 h-5" />,
            title: "Significant Cost Savings",
            description: "Exponentially lower remediation costs by fixing bugs in requirements or design phases."
        },
        {
            icon: <FaBolt className="w-5 h-5" />,
            title: "Faster Time-to-Market",
            description: "Early feedback loops accelerate development cycles and enable predictable releases."
        },
        {
            icon: <FaCode className="w-5 h-5" />,
            title: "Superior Code Quality",
            description: "A continuous focus on quality results in resilient and reliable software products."
        }
    ];

    return (
        <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Why Shift-Left? The <span className="text-brand-blue underline decoration-blue-100 underline-offset-8">Strategic Advantage</span>
                    </h2>
                    <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed italic">
                        &quot;A bug identified during requirements might cost dollars, while the same bug in production could cost millions.&quot;
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:border-brand-blue transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-brand-blue text-white flex items-center justify-center mb-6 transform group-hover:-rotate-6 transition-transform shadow-lg shadow-blue-200">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}

                    {/* Stats/Highlight Box */}
                    <div className="p-8 rounded-3xl bg-slate-900 text-white flex flex-col justify-center gap-4 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 transform scale-150 rotate-12 group-hover:rotate-45 transition-transform duration-700">
                            <FaDollarSign className="w-24 h-24" />
                        </div>
                        <div className="relative z-10 text-blue-400 font-bold text-4xl mb-2">100x</div>
                        <h3 className="relative z-10 text-xl font-bold leading-tight">Lower Remediation Expenses</h3>
                        <p className="relative z-10 text-slate-400 text-sm">Our strategies lead to substantial reductions in the cost of bug fixes and rework.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShiftLeftWhySection;
