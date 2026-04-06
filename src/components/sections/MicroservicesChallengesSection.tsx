"use client";

import React from "react";
import { FaProjectDiagram, FaDatabase, FaWifi, FaCloudUploadAlt, FaEye } from "react-icons/fa";

const MicroservicesChallengesSection: React.FC = () => {
    const challenges = [
        {
            icon: <FaProjectDiagram className="text-orange-600 w-8 h-8" />,
            title: "Dependency Management",
            description: "Services are tightly coupled through APIs. A single change in a producer can cause cascading failures across the entire ecosystem.",
            impact: "High Fragility",
            color: "border-orange-200 bg-orange-50"
        },
        {
            icon: <FaDatabase className="text-blue-600 w-8 h-8" />,
            title: "Data Consistency",
            description: "Validating distributed transactions (Sagas) is difficult. Ensuring 'Eventual Consistency' remains consistent is a major QA hurdle.",
            impact: "Data Integrity Risks",
            color: "border-blue-200 bg-blue-50"
        },
        {
            icon: <FaWifi className="text-purple-600 w-8 h-8" />,
            title: "Latency & Network Issues",
            description: "Communication over HTTP, gRPC, or message brokers introduces timeouts and partial failures that are hard to simulate.",
            impact: "Performance Bottlenecks",
            color: "border-purple-200 bg-purple-50"
        },
        {
            icon: <FaCloudUploadAlt className="text-red-600 w-8 h-8" />,
            title: "Independent Deployments",
            description: "With services deploying daily, maintaining version compatibility without breaking production is the #1 challenge for DevOps.",
            impact: "Deployment Blockers",
            color: "border-red-200 bg-red-50"
        },
        {
            icon: <FaEye className="text-emerald-600 w-8 h-8" />,
            title: "Observability Gaps",
            description: "Traditional logs aren't enough. Finding the root cause in a 'call chain' across 50 services requires advanced tracing.",
            impact: "High MTTR (Mean Time to Repair)",
            color: "border-emerald-200 bg-emerald-50"
        }
    ];

    return (
        <section className="bg-gray-50 py-16 px-8 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        The Challenges of <span className="text-brand-blue">Microservices QA</span>
                    </h2>
                    <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                        Transitioning to microservices solves scalability issues but introduces new testing paradigms. We help you navigate these five critical hurdles.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {challenges.map((challenge, index) => (
                        <div
                            key={index}
                            className={`p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${challenge.color}`}
                        >
                            <div className="mb-6">{challenge.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{challenge.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                {challenge.description}
                            </p>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                                <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500">
                                    Impact: {challenge.impact}
                                </span>
                            </div>
                        </div>
                    ))}

                    {/* CTA Card */}
                    <div className="p-8 rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-center bg-white group cursor-pointer hover:border-brand-blue transition-colors">
                        <div className="text-gray-400 group-hover:text-brand-blue text-4xl mb-4 transition-colors">🚀</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Solve These?</h3>
                        <p className="text-gray-600 text-sm mb-6">Our experts specialize in distributed systems and cloud-native testing.</p>
                        <button className="text-brand-blue font-bold text-sm hover:underline">Get a Free Audit &rarr;</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MicroservicesChallengesSection;
