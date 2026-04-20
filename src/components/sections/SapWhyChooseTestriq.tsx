"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
    FaShieldAlt,
    FaChartLine,
    FaUsers,
} from "react-icons/fa";

const SapWhyChooseTestriq: React.FC = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const advantages = [
        {
            icon: <FaShieldAlt className="w-8 h-8" />,
            metric: "ISO 29119 Aligned",
            title: "Global Standards",
            description: (
                <>We are among the few SAP testing services globally to follow the <Link href="/qa-documentation-services" className="text-gray-600 hover:text-brand-blue hover:underline decoration-brand-blue">ISO 29119 standard</Link>, mapping every test artifact to international requirements.</>
            ),
            capabilities: [
                "Technical Depth",
                "ISO Compliance",
                "Audit-Ready Result",
                "Process Integrity",
            ],
            color: "blue",
        },
        {
            icon: <FaChartLine className="w-8 h-8" />,
            metric: "60% Bug Reduction",
            title: "S/4HANA Specialists",
            description: (
                <>Our migration strategies often reduce <Link href="/automation-testing-services" className="text-gray-600 hover:text-brand-blue hover:underline decoration-brand-blue">post-release bugs by 60%</Link>, focusing on the unique challenges of Universal Journal merging and Fiori UX.</>
            ),
            capabilities: [
                "ECC to S/4HANA",
                "Universal Journal",
                "Fiori Validation",
                "Clean Core QA",
            ],
            color: "green",
        },
        {
            icon: <FaUsers className="w-8 h-8" />,
            metric: "Module Experts",
            title: "Functional Depth",
            description: (
                <>Our team includes <Link href="/manual-testing-services" className="text-gray-600 hover:text-brand-blue hover:underline decoration-brand-blue">functional consultants</Link> for core modules (FI/CO, MM, SD, PP), ensuring integration integrity across the entire landscape.</>
            ),
            capabilities: [
                "Cross-Module Flow",
                "Functional Smarts",
                "Integration QA",
                "Silo Breakdown",
            ],
            color: "purple",
        },
    ];

    const getColorClasses = (color: string) => {
        const colors = {
            blue: {
                bg: "bg-blue-500",
                text: "text-blue-600",
                border: "border-blue-500",
                light: "bg-blue-50",
            },
            green: {
                bg: "bg-green-500",
                text: "text-green-600",
                border: "border-green-500",
                light: "bg-green-50",
            },
            purple: {
                bg: "bg-purple-500",
                text: "text-purple-600",
                border: "border-purple-500",
                light: "bg-purple-50",
            },
        };
        return colors[color as keyof typeof colors];
    };

    return (
        <section className="py-20 px-6 sm:px-6 md:px-12 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <FaShieldAlt />
                        <span className="text-sm">Why Choose Testriq</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Enterprise-Grade <span className="text-brand-blue">SAP Quality Engineering</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        To serve the world&apos;s leading enterprises, Testriq adheres to a &quot;Compliance-First&quot; philosophy. We design our SAP validation processes to pass the most rigorous audits.
                    </p>
                </div>

                {/* Global Standards & Compliance Table */}
                <div className="mb-20 overflow-hidden rounded-2xl border border-gray-200 shadow-xl">
                    <div className="bg-gradient-to-r from-brand-blue to-blue-700 px-8 py-6">
                        <h3 className="text-2xl font-bold text-white">Engineering Trust: Global Standards & Compliance</h3>
                        <p className="text-blue-100 mt-2">Enterprise-grade SAP validation aligning with international regulatory benchmarks.</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left bg-white">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    <th className="px-8 py-4 font-bold text-gray-900">Standard / Law</th>
                                    <th className="px-8 py-4 font-bold text-gray-900">SAP Application</th>
                                    <th className="px-8 py-4 font-bold text-gray-900">Impact</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr>
                                    <td className="px-8 py-6 font-bold text-gray-900">ISO/IEC/IEEE 29119</td>
                                    <td className="px-8 py-6 text-gray-600">Bedrock of our SAP QA methodology; mapping every artifact from Policy to Results.</td>
                                    <td className="px-8 py-6 text-green-600 font-medium">International Consistency</td>
                                </tr>
                                <tr>
                                    <td className="px-8 py-6 font-bold text-gray-900">SOC2 Type II</td>
                                    <td className="px-8 py-6 text-gray-600">Ensuring business logic and sensitive financial data remain secure and confidential.</td>
                                    <td className="px-8 py-6 text-green-600 font-medium">Data Privacy Security</td>
                                </tr>
                                <tr>
                                    <td className="px-8 py-6 font-bold text-gray-900">GDPR / CCPA</td>
                                    <td className="px-8 py-6 text-gray-600">Automated data masking to protect user privacy across international borders.</td>
                                    <td className="px-8 py-6 text-green-600 font-medium">Compliance-Ready Labs</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {advantages.map((advantage, index) => {
                        const colorClasses = getColorClasses(advantage.color);
                        const isHovered = hoveredCard === index;

                        return (
                            <div
                                key={index}
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                                className={`relative bg-white rounded-2xl p-6 border-2 transition-all duration-300 ${isHovered
                                    ? `${colorClasses.border} shadow-2xl transform -translate-y-2`
                                    : "border-gray-200 shadow-lg hover:shadow-xl"
                                    }`}
                            >
                                {/* Background Pattern */}
                                <div
                                    className={`absolute top-0 right-0 w-20 h-20 ${colorClasses.light} rounded-bl-full opacity-50`}
                                ></div>

                                {/* Icon and Metric */}
                                <div className="relative z-10 mb-4">
                                    <div
                                        className={`w-16 h-16 ${isHovered ? colorClasses.bg : colorClasses.light
                                            } rounded-xl flex items-center justify-center mb-3 transition-all duration-300`}
                                    >
                                        <div
                                            className={isHovered ? "text-white" : colorClasses.text}
                                        >
                                            {advantage.icon}
                                        </div>
                                    </div>
                                    <div
                                        className={`text-sm font-bold ${colorClasses.text} mb-2`}
                                    >
                                        {advantage.metric}
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {advantage.title}
                                </h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {advantage.description}
                                </p>

                                {/* Capabilities */}
                                <div className="mb-4">
                                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                                        Key Highlights:
                                    </h4>
                                    <div className="grid grid-cols-2 gap-1">
                                        {advantage.capabilities.map((capability, capIndex) => (
                                            <div
                                                key={capIndex}
                                                className="flex items-center text-xs text-gray-600"
                                            >
                                                <div
                                                    className={`w-1.5 h-1.5 ${colorClasses.bg} rounded-full mr-2`}
                                                ></div>
                                                {capability}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <Link
                                    href="/contact-us"
                                    className={`flex justify-center w-full py-2 px-4 rounded-lg font-semibold text-sm transition-all duration-300 ${isHovered
                                        ? `${colorClasses.bg} text-white shadow-lg`
                                        : `${colorClasses.light} ${colorClasses.text} hover:${colorClasses.bg} hover:text-white`
                                        }`}
                                >
                                    Partner With Us
                                </Link>

                                {/* Hover Effect Indicator */}
                                {isHovered && (
                                    <div
                                        className={`absolute -top-1 -right-1 w-6 h-6 ${colorClasses.bg} rounded-full flex items-center justify-center`}
                                    >
                                        <span className="text-white text-xs">✓</span>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="text-center mt-12">
                    <div className="mb-4">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                            Ready to Transform Your SAP Landscape?
                        </h3>
                        <p className="text-gray-600">
                            Join leading enterprises that trust Testriq for their SAP testing needs.
                            Start with a comprehensive <Link href="/contact-us">SAP assessment</Link> today.
                        </p>
                    </div>
                    <Link
                        href="/contact-us"
                        title="Get Started with SAP Testing – Testriq QA Lab"
                        className="inline-flex items-center justify-center px-8 py-3 min-h-[44px] min-w-[44px] bg-brand-blue text-white font-semibold rounded-lg shadow-lg hover:bg-brand-blue transition-colors duration-300"
                    >
                        Get Started with SAP Testing
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SapWhyChooseTestriq;
