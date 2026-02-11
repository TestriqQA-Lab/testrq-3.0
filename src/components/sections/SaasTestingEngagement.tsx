"use client";

import Link from "next/link";
import React from "react";
import { FaUsers, FaCogs, FaBullseye, FaWrench } from "react-icons/fa";

const SaasTestingEngagement: React.FC = () => {
    const models = [
        {
            icon: <FaUsers className="text-3xl" />,
            title: "Dedicated QA Team",
            color: "cyan",
            features: [
                "Full-time QA engineers embedded with your development team",
                "Ownership of testing strategy and execution",
                "Scalable with product growth",
            ],
            bestFor: "Companies with complex products or high compliance requirements",
        },
        {
            icon: <FaCogs className="text-3xl" />,
            title: "Managed Testing Services",
            color: "indigo",
            features: [
                "Testing services scaled to your needs",
                "Flexible engagement based on sprint velocity",
                "Reduced fixed overhead",
            ],
            bestFor: "Startups and growth-stage companies",
        },
        {
            icon: <FaBullseye className="text-3xl" />,
            title: "Specialized Testing",
            color: "orange",
            features: [
                "Focused expertise for specific challenges (performance, security, compliance)",
                "Augments internal QA teams",
                "Deep domain knowledge",
            ],
            bestFor: "Companies with strong internal QA but specific skill gaps",
        },
        {
            icon: <FaWrench className="text-3xl" />,
            title: "Automation Implementation",
            color: "green",
            features: [
                "Building and implementing test automation frameworks",
                "Training internal teams on automation best practices",
                "Establishing CI/CD integration",
            ],
            bestFor: "Companies transitioning from manual to automated testing",
        },
    ];

    const getColorClasses = (color: string) => {
        const colorMap: { [key: string]: { bg: string; text: string; gradient: string } } = {
            cyan: { bg: "bg-cyan-50", text: "text-cyan-600", gradient: "from-cyan-500 to-cyan-600" },
            indigo: { bg: "bg-indigo-50", text: "text-indigo-600", gradient: "from-indigo-500 to-indigo-600" },
            orange: { bg: "bg-orange-50", text: "text-orange-600", gradient: "from-orange-500 to-orange-600" },
            green: { bg: "bg-green-50", text: "text-green-600", gradient: "from-green-500 to-green-600" },
        };
        return colorMap[color] || colorMap.cyan;
    };

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <span className="text-sm">● Engagement Models</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        SaaS Testing{" "}
                        <span className="text-brand-blue">Engagement Models</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Choose the engagement model that best fits your team, product
                        maturity, and testing requirements.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {models.map((model, index) => {
                        const colors = getColorClasses(model.color);
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col"
                            >
                                <div className={`bg-gradient-to-r ${colors.gradient} p-5 text-white text-center`}>
                                    <div className="mb-2">{model.icon}</div>
                                    <h3 className="text-lg font-bold">{model.title}</h3>
                                </div>
                                <div className="p-5 flex flex-col flex-grow">
                                    <div className="space-y-3 flex-grow">
                                        {model.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-start space-x-2">
                                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></div>
                                                <span className="text-gray-600 text-xs">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className={`${colors.bg} rounded-lg p-3 mt-4`}>
                                        <p className={`text-xs font-semibold ${colors.text}`}>
                                            Best for: {model.bestFor}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* ROI Section */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-white mb-3">
                            Measuring SaaS Testing ROI
                        </h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            The return on investment from SaaS testing services can be
                            quantified.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Cost of Defects */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                            <h4 className="text-lg font-bold text-red-400 mb-4">
                                Cost of Defects
                            </h4>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <span className="text-red-400 mt-1">●</span>
                                    <span className="text-gray-300 text-sm">
                                        Average production defect costs{" "}
                                        <span className="text-white font-bold">$10K-$100K</span> to
                                        fix
                                    </span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <span className="text-red-400 mt-1">●</span>
                                    <span className="text-gray-300 text-sm">
                                        Data breach costs average{" "}
                                        <span className="text-white font-bold">$4.45 million</span>{" "}
                                        per incident
                                    </span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <span className="text-red-400 mt-1">●</span>
                                    <span className="text-gray-300 text-sm">
                                        Compliance violations carry regulatory fines and
                                        reputational damage
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* ROI Calculation */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                            <h4 className="text-lg font-bold text-green-400 mb-4">
                                Example ROI Calculation
                            </h4>
                            <div className="space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-300">Defects prevented annually</span>
                                    <span className="text-white font-bold">50</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-300">Average cost per defect</span>
                                    <span className="text-white font-bold">$50,000</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-300">Total value</span>
                                    <span className="text-white font-bold">$2.5 million</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-300">Annual testing investment</span>
                                    <span className="text-white font-bold">$500,000</span>
                                </div>
                                <div className="border-t border-white/20 pt-3 flex justify-between">
                                    <span className="text-green-400 font-bold text-lg">ROI</span>
                                    <span className="text-green-400 font-bold text-2xl">400%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <Link href="/contact-us">
                            <button className="bg-yellow-400 cursor-pointer text-gray-900 px-8 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition-all duration-300">
                                Calculate Your ROI
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SaasTestingEngagement;
