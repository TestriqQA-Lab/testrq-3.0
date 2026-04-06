"use client";

import React from "react";
import {
    FaBolt,
    FaSyncAlt,
    FaShieldAlt,
    FaChartBar,
} from "react-icons/fa";

const ContinuousTestingBenefits: React.FC = () => {
    const benefits = [
        {
            icon: <FaBolt className="text-2xl" />,
            title: "Accelerated Time-to-Market",
            description:
                'By removing the "testing phase" at the end of the cycle, we enable daily or even hourly releases.',
            color: "cyan",
            stat: "10x",
            statLabel: "Faster Releases",
        },
        {
            icon: <FaSyncAlt className="text-2xl" />,
            title: "Immediate Feedback Loops",
            description:
                "Developers receive instant results after every commit, allowing for rapid bug fixes and reduced rework.",
            color: "indigo",
            stat: "<5min",
            statLabel: "Feedback Time",
        },
        {
            icon: <FaShieldAlt className="text-2xl" />,
            title: "Enhanced Release Confidence",
            description:
                "With constant validation, your team can deploy to production knowing the software meets all functional and performance criteria.",
            color: "green",
            stat: "99.6%",
            statLabel: "Pass Rate",
        },
        {
            icon: <FaChartBar className="text-2xl" />,
            title: "DORA Compliance",
            description:
                "Our services are optimized to help you achieve elite status in deployment frequency and lead time for changes.",
            color: "purple",
            stat: "Elite",
            statLabel: "DORA Status",
        },
    ];

    const getColorClasses = (color: string) => {
        const colorMap: { [key: string]: { bg: string; text: string; border: string; gradient: string } } = {
            cyan: { bg: "bg-cyan-50", text: "text-cyan-600", border: "border-cyan-200", gradient: "from-cyan-500 to-cyan-600" },
            indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200", gradient: "from-indigo-500 to-indigo-600" },
            green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200", gradient: "from-green-500 to-green-600" },
            purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200", gradient: "from-purple-500 to-purple-600" },
        };
        return colorMap[color] || colorMap.cyan;
    };

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <span className="text-sm">● Strategic Benefits</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        The Strategic Benefits of{" "}
                        <span className="text-brand-blue">Continuous Testing</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Transform every stage of your software delivery lifecycle with
                        measurable quality improvements.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => {
                        const colors = getColorClasses(benefit.color);
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
                            >
                                {/* Icon */}
                                <div
                                    className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                                >
                                    <span className={colors.text}>{benefit.icon}</span>
                                </div>

                                {/* Stat */}
                                <div className="mb-4">
                                    <div
                                        className={`text-3xl font-bold bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}
                                    >
                                        {benefit.stat}
                                    </div>
                                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                                        {benefit.statLabel}
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ContinuousTestingBenefits;
