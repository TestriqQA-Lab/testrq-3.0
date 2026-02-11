"use client";

import React from "react";
import {
    FaUsers,
    FaBuilding,
    FaRobot,
    FaMicroscope,
    FaPuzzlePiece,
} from "react-icons/fa";

const ManagedTestingEngagementModels: React.FC = () => {
    const models = [
        {
            icon: <FaUsers className="text-3xl" />,
            title: "Dedicated Managed Testing Team",
            color: "indigo",
            description: "A dedicated team of QA professionals assigned exclusively to your account.",
            features: [
                "Team composition: Test engineers, automation specialists, testing manager",
                "Team is accountable for quality outcomes through SLAs and KPIs",
                "Team scales up or down based on your needs",
                "Team becomes extension of your organization",
            ],
            bestFor: "Organizations with complex products or high-volume testing needs",
        },
        {
            icon: <FaBuilding className="text-3xl" />,
            title: "Testing Center of Excellence (TCoE)",
            color: "cyan",
            description: "A comprehensive testing center providing multi-disciplinary expertise.",
            features: [
                "Covers functional, performance, security, compliance, and specialized testing",
                "Access to specialists in different testing domains",
                "Centralized testing governance and process management",
                "Scales across multiple applications and teams",
            ],
            bestFor: "Large enterprises with multiple applications and complex testing needs",
        },
        {
            icon: <FaRobot className="text-3xl" />,
            title: "Managed Test Automation Services",
            color: "green",
            description: "Specialized focus on test automation and CI/CD integration.",
            features: [
                "Building and maintaining test automation frameworks",
                "Integrating testing into CI/CD pipelines",
                "Automating regression tests for rapid release validation",
                "Tracking automation coverage and effectiveness",
            ],
            bestFor: "Organizations with frequent release cycles and automation needs",
        },
        {
            icon: <FaMicroscope className="text-3xl" />,
            title: "Managed Specialized Testing",
            color: "orange",
            description: "Focused expertise in specific testing domains.",
            features: [
                "Performance testing: Dedicated performance testing team",
                "Security testing: Dedicated security and compliance testing",
                "Mobile testing: Dedicated mobile application testing",
                "AI/ML testing: Dedicated AI and machine learning testing",
            ],
            bestFor: "Organizations needing specialized expertise in specific areas",
        },
        {
            icon: <FaPuzzlePiece className="text-3xl" />,
            title: "Hybrid Managed Testing",
            color: "purple",
            description: "Combination of dedicated team and specialized services.",
            features: [
                "Core team: Dedicated team for ongoing testing",
                "Additional specialized testing services as needed",
                "Adjust mix based on evolving needs",
                "Pay for specialized services only when needed",
            ],
            bestFor: "Organizations with evolving testing needs",
        },
    ];

    const getColorClasses = (color: string) => {
        const colorMap: { [key: string]: { gradient: string; light: string; text: string } } = {
            indigo: { gradient: "from-indigo-500 to-indigo-600", light: "bg-indigo-50", text: "text-indigo-600" },
            cyan: { gradient: "from-cyan-500 to-cyan-600", light: "bg-cyan-50", text: "text-cyan-600" },
            green: { gradient: "from-green-500 to-green-600", light: "bg-green-50", text: "text-green-600" },
            orange: { gradient: "from-orange-500 to-orange-600", light: "bg-orange-50", text: "text-orange-600" },
            purple: { gradient: "from-purple-500 to-purple-600", light: "bg-purple-50", text: "text-purple-600" },
        };
        return colorMap[color] || colorMap.indigo;
    };

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <span className="text-sm">● Engagement Models</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Managed Testing{" "}
                        <span className="text-brand-blue">Engagement Models</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Choose the engagement model that best fits your organizational needs, testing complexity, and growth trajectory.
                    </p>
                </div>

                {/* First row - 3 cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                    {models.slice(0, 3).map((model, index) => {
                        const colors = getColorClasses(model.color);
                        return (
                            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col">
                                <div className={`bg-gradient-to-r ${colors.gradient} p-5 text-white`}>
                                    <div className="flex items-center gap-4">
                                        {model.icon}
                                        <h3 className="text-lg font-bold">{model.title}</h3>
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <p className="text-gray-600 text-sm mb-4">{model.description}</p>
                                    <div className="space-y-2 mb-4 flex-1">
                                        {model.features.map((feature, i) => (
                                            <div key={i} className="flex items-start space-x-2">
                                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></div>
                                                <span className="text-gray-600 text-xs">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className={`${colors.light} rounded-lg p-3`}>
                                        <span className="text-xs font-bold text-gray-500">BEST FOR:</span>
                                        <p className={`text-sm font-medium ${colors.text}`}>{model.bestFor}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Second row - 2 cards centered */}
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {models.slice(3).map((model, index) => {
                        const colors = getColorClasses(model.color);
                        return (
                            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col">
                                <div className={`bg-gradient-to-r ${colors.gradient} p-5 text-white`}>
                                    <div className="flex items-center gap-4">
                                        {model.icon}
                                        <h3 className="text-lg font-bold">{model.title}</h3>
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <p className="text-gray-600 text-sm mb-4">{model.description}</p>
                                    <div className="space-y-2 mb-4 flex-1">
                                        {model.features.map((feature, i) => (
                                            <div key={i} className="flex items-start space-x-2">
                                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></div>
                                                <span className="text-gray-600 text-xs">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className={`${colors.light} rounded-lg p-3`}>
                                        <span className="text-xs font-bold text-gray-500">BEST FOR:</span>
                                        <p className={`text-sm font-medium ${colors.text}`}>{model.bestFor}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ManagedTestingEngagementModels;
