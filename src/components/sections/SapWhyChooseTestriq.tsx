"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
    FaShieldAlt,
    FaChartLine,
    FaUsers,
    FaRocket,
    FaCogs,
    FaHandshake,
    FaBriefcase,
} from "react-icons/fa";

const SapWhyChooseTestriq: React.FC = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const advantages = [
        {
            icon: <FaChartLine className="w-8 h-8" />,
            metric: "99.8% Stability",
            title: "Proven Success",
            description:
                "Achieving 99.8% stability during a global SAP ECC to S/4HANA migration for a Fortune 500 retailer. We deliver results that speak for themselves.",
            capabilities: [
                "Global Migration Success",
                "Zero Critical Defects",
                "On-Time Delivery",
                "Business Continuity",
            ],
            color: "blue",
        },
        {
            icon: <FaUsers className="w-8 h-8" />,
            metric: "Certified Experts",
            title: "Expert Team",
            description:
                "Our SAP QA engineers are certified and have hands-on deployment experience across Finance (FICO), Logistics (SD/MM), HCM, and CRM modules.",
            capabilities: [
                "ISTQB Certified",
                "SAP Module Experts",
                "Domain Knowledge",
                "Technical Architects",
            ],
            color: "green",
        },
        {
            icon: <FaHandshake className="w-8 h-8" />,
            metric: "Flexible Models",
            title: "Flexible Engagement",
            description:
                "We offer engagement models tailored to your needs: Staff Augmentation for scaling teams, Managed Services for end-to-end ownership, or QA as a Service.",
            capabilities: [
                "Staff Augmentation",
                "Managed Services",
                "QA as a Service",
                "On-Demand Testing",
            ],
            color: "purple",
        },
        {
            icon: <FaShieldAlt className="w-8 h-8" />,
            metric: "Risk Mitigation",
            title: "Risk-Based Approach",
            description:
                "We prioritize testing based on business risk, ensuring your most critical transactions are validated first to prevent costly production failures.",
            capabilities: [
                "Risk Analysis",
                "Critical Path Testing",
                "Compliance Checks",
                "Security Validation",
            ],
            color: "orange",
        },
        {
            icon: <FaCogs className="w-8 h-8" />,
            metric: "80% Automation",
            title: "Automation Excellence",
            description:
                "Leverage our pre-built accelerators and expertise in Tosca/Worksoft to automate up to 80% of your regression suite, drastically reducing cycle times.",
            capabilities: [
                "Test Accelerators",
                "CI/CD Integration",
                "Self-Healing Scripts",
                "Rapid Feedback",
            ],
            color: "red",
        },
        {
            icon: <FaRocket className="w-8 h-8" />,
            metric: "3x Faster",
            title: "Accelerated Delivery",
            description:
                "Our agile testing methodologies and automation frameworks enable 3x faster releases, helping you keep pace with business demands.",
            capabilities: [
                "Agile QA",
                "Shift-Left Testing",
                "Continuous Delivery",
                "Faster Time-to-Market",
            ],
            color: "indigo",
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
            orange: {
                bg: "bg-orange-500",
                text: "text-orange-600",
                border: "border-orange-500",
                light: "bg-orange-50",
            },
            red: {
                bg: "bg-red-500",
                text: "text-red-600",
                border: "border-red-500",
                light: "bg-red-50",
            },
            indigo: {
                bg: "bg-indigo-500",
                text: "text-indigo-600",
                border: "border-indigo-500",
                light: "bg-indigo-50",
            },
        };
        return colors[color as keyof typeof colors];
    };

    return (
        <section className="py-16 px-6 sm:px-6 md:px-12 lg:px-24 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <FaBriefcase />
                        <span className="text-sm">Strategic Partner</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Beyond Testing: Your <span className="text-brand-blue">Strategic Partner</span> in SAP Quality
                    </h2>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                        We don&apos;t just find bugs; we ensure your SAP investment delivers business value. From expert teams to flexible engagement models, we are committed to your success.
                    </p>
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
