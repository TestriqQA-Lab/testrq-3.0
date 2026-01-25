"use client";

import Link from "next/link";
import React from "react";
import { FaChartLine, FaServer, FaCogs, FaProjectDiagram, FaGlobe } from "react-icons/fa";

const PerformanceTestingChallenges: React.FC = () => {
    const challenges = [
        {
            icon: <FaServer className="text-xl text-white" />,
            title: "Environment Parity & Stability",
            description: "We solve the 'it worked in staging' problem by creating production-like environments that account for network latency and infrastructure limits.",
            color: "bg-blue-600",
            gradient: "from-blue-50 to-blue-100"
        },
        {
            icon: <FaProjectDiagram className="text-xl text-white" />,
            title: "Structural Complexity",
            description: <>Modern <Link href="/api-testing" className="text-brand-blue hover:underline decoration-brand-blue">micro-services</Link> are unpredictable. We use globally distributed load generation to mimic real-world traffic patterns across various geographies.</>,
            color: "bg-green-600",
            gradient: "from-green-50 to-green-100"
        },
        {
            icon: <FaChartLine className="text-xl text-white" />,
            title: "Actionable Data Insights",
            description: <>We move beyond raw metrics to find the &apos;why&apos; behind bottlenecks using <Link href="/data-analysis-services" className="text-brand-blue hover:underline decoration-brand-blue">real-time analytics</Link> and AI to detect patterns and fix issues before impact.</>,
            color: "bg-purple-600",
            gradient: "from-purple-50 to-purple-100"
        },
        {
            icon: <FaCogs className="text-xl text-white" />,
            title: "CI/CD Performance Integration",
            description: <>We stop performance issues from blocking your <Link href="/automation-testing-services" className="text-brand-blue hover:underline decoration-brand-blue">DevOps pipeline</Link> by weaving continuous testing into your workflow, following growing market trends.</>,
            color: "bg-orange-600",
            gradient: "from-orange-50 to-orange-100"
        },
        {
            icon: <FaGlobe className="text-xl text-white" />,
            title: "Global Standards",
            description: <>We align every project with the <Link href="/qa-documentation-services" className="text-brand-blue hover:underline decoration-brand-blue">ISO 29119-2 standard</Link>. This ensures a risk-based approach that global regulatory bodies recognize and trust.</>,
            color: "bg-teal-600",
            gradient: "from-teal-50 to-teal-100"
        }
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <FaChartLine />
                        <span className="text-sm">2026 Insights</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        The 5 Biggest Global <span className="text-brand-blue">Challenges</span> in Performance Testing
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        The performance testing landscape is shifting. To stay ahead, our QA strategies address the five most critical challenges facing global teams today:
                    </p>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">
                    {challenges.map((challenge, index) => (
                        <div key={index} className={`bg-gradient-to-br ${challenge.gradient} p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group`}>
                            <div className={`${challenge.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                {challenge.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{challenge.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {challenge.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PerformanceTestingChallenges;
