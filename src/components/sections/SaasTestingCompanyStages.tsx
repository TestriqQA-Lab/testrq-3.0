"use client";

import Link from "next/link";
import React from "react";
import { FaRocket, FaChartLine, FaBuilding } from "react-icons/fa";

const SaasTestingCompanyStages: React.FC = () => {
    const stages = [
        {
            icon: <FaRocket className="text-3xl" />,
            title: "Startups",
            subtitle: "Managed SaaS Testing Services",
            color: "cyan",
            description:
                "Early-stage companies need managed SaaS testing services that scale with growth:",
            features: [
                "Scale with product growth without fixed headcount",
                "Cover critical paths without testing everything",
                "Provide rapid feedback to enable fast iteration",
                "Identify architectural issues before they become expensive",
            ],
        },
        {
            icon: <FaChartLine className="text-3xl" />,
            title: "Growth Stage",
            subtitle: "Continuous Testing Integration",
            color: "indigo",
            description:
                "Growing companies need continuous testing integration for delivery pipelines:",
            features: [
                "Enable daily or weekly deployments without manual testing bottlenecks",
                "Catch regressions before production",
                "Provide visibility into test coverage and quality metrics",
                "Scale test infrastructure with application growth",
            ],
        },
        {
            icon: <FaBuilding className="text-3xl" />,
            title: "Enterprise",
            subtitle: "Comprehensive SaaS Testing",
            color: "purple",
            description:
                "Enterprise SaaS testing requires comprehensive coverage across regulated environments:",
            features: [
                "Dedicated QA teams integrated with development",
                "Compliance testing for regulated industries (healthcare, finance, government)",
                "Performance testing under realistic enterprise workloads",
                "Disaster recovery and business continuity validation",
            ],
        },
    ];

    const getColorClasses = (color: string) => {
        const colorMap: { [key: string]: { bg: string; text: string; gradient: string } } = {
            cyan: { bg: "bg-cyan-50", text: "text-cyan-600", gradient: "from-cyan-500 to-cyan-600" },
            indigo: { bg: "bg-indigo-50", text: "text-indigo-600", gradient: "from-indigo-500 to-indigo-600" },
            purple: { bg: "bg-purple-50", text: "text-purple-600", gradient: "from-purple-500 to-purple-600" },
        };
        return colorMap[color] || colorMap.cyan;
    };

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <span className="text-sm">● Right for Every Stage</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        SaaS Testing for{" "}
                        <span className="text-brand-blue">Every Company Stage</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Whether you&apos;re a startup launching your MVP or an enterprise
                        managing complex multi-tenant environments, we have the right
                        testing approach.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {stages.map((stage, index) => {
                        const colors = getColorClasses(stage.color);
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col"
                            >
                                {/* Header */}
                                <div className={`bg-gradient-to-r ${colors.gradient} p-6 text-white`}>
                                    <div className="flex items-center gap-4">
                                        {stage.icon}
                                        <div>
                                            <h3 className="text-xl font-bold">{stage.title}</h3>
                                            <p className="text-sm text-white/80">{stage.subtitle}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <p className="text-gray-600 text-sm mb-5">{stage.description}</p>
                                    <div className="space-y-3 flex-grow">
                                        {stage.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-start space-x-3">
                                                <div className={`w-2 h-2 ${colors.text === "text-cyan-600" ? "bg-cyan-500" : colors.text === "text-indigo-600" ? "bg-indigo-500" : "bg-purple-500"} rounded-full mt-1.5 flex-shrink-0`}></div>
                                                <span className="text-gray-600 text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <Link href="/contact-us">
                                        <button className={`w-full mt-6 cursor-pointer ${colors.text} border-2 ${colors.text === "text-cyan-600" ? "border-cyan-200 hover:bg-cyan-50" : colors.text === "text-indigo-600" ? "border-indigo-200 hover:bg-indigo-50" : "border-purple-200 hover:bg-purple-50"} px-4 py-3 rounded-xl font-semibold transition-all duration-300`}>
                                            Get Started
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SaasTestingCompanyStages;
