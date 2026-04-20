"use client";

import React from "react";
import { FaMoneyBillWave, FaClock, FaExclamationCircle, FaShieldAlt, FaUserEdit } from "react-icons/fa";

const ShiftLeftChallengesSection: React.FC = () => {
    const challenges = [
        {
            icon: <FaMoneyBillWave className="w-6 h-6" />,
            title: "High Cost of Defects",
            description: "Catching bugs in design or coding can be up to 100x cheaper than fixing them in production."
        },
        {
            icon: <FaClock className="w-6 h-6" />,
            title: "Slow Release Cycles",
            description: "Automating processes early accelerates feedback loops, enabling faster iterations and time-to-market."
        },
        {
            icon: <FaExclamationCircle className="w-6 h-6" />,
            title: "Inconsistent Quality",
            description: "Continuous QA practices ensure a consistently high standard, leading to fewer post-release issues."
        },
        {
            icon: <FaShieldAlt className="w-6 h-6" />,
            title: "Security Vulnerabilities",
            description: "Proactive testing identifies threats before they can be exploited, safeguarding your applications."
        },
        {
            icon: <FaUserEdit className="w-6 h-6" />,
            title: "Lack of QA Ownership",
            description: "We empower developers with tools and training to share responsibility for the quality process."
        }
    ];

    return (
        <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Solving Your 5 Biggest <span className="text-brand-blue italic">Software Hurdles</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Our Shift-Left approach directly addresses the most critical obstacles organizations face in modern development.
                    </p>
                </div>

                <div className="space-y-4">
                    {challenges.map((challenge, index) => (
                        <div
                            key={index}
                            className="group flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl bg-slate-50 border border-gray-100 hover:bg-white hover:border-brand-blue hover:shadow-xl transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                                {challenge.icon}
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{challenge.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{challenge.description}</p>
                            </div>
                            <div className="hidden md:block ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-bold text-xs uppercase">Challenge #{index + 1} Solved</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShiftLeftChallengesSection;
