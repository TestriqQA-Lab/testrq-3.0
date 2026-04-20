"use client";

import Link from "next/link";
import React from "react";
import { FaShieldAlt, FaSkull, FaTools } from "react-icons/fa";

const SecurityTestingChallenges: React.FC = () => {
    const challenges = [
        {
            icon: <FaShieldAlt className="text-xl text-white" />,
            title: "Defending Against Rapidly Evolving Threats",
            description: <>Attack targets are shifting faster than traditional security programs can adapt. Research shows that 99% of organizations faced an incident last year.</>,
            details: [
                "API Security Testing: Addressing the 10% YoY rise in vulnerabilities.",
                "Cloud Audits targeting container and SaaS mis-configurations.",
                "AI-Driven Attacks evaluation against automated exploitation."
            ],
            color: "bg-red-600",
            gradient: "from-red-50 to-red-100"
        },
        {
            icon: <FaTools className="text-xl text-white" />,
            title: "End Tool Sprawl with SDLC Integration",
            description: "Stitching together SAST, DAST, and SCA scans often leads to late findings and development bottlenecks.",
            details: [
                <>Shift-Left Security: Real-time feedback in <Link href="/automation-testing-services" className="text-brand-blue hover:underline decoration-brand-blue">CI/CD pipelines</Link>.</>,
                "Unified Reporting: Prioritized reports ranked by CVSS and business impact."
            ],
            color: "bg-blue-600",
            gradient: "from-blue-50 to-blue-100"
        }
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <FaSkull />
                        <span className="text-sm">2026 Threat Landscape</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Navigating the 2026 Global <span className="text-brand-blue">Security Threat Landscape</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        The cost of a data breach has reached record highs, driven by rapidly evolving attack techniques. Our methodology addresses the two dominant challenges facing global organizations today:
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {challenges.map((challenge, index) => (
                        <div key={index} className={`bg-gradient-to-br ${challenge.gradient} p-8 rounded-3xl hover:shadow-xl transition-all duration-300 border border-gray-100`}>
                            <div className={`${challenge.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-gray-200`}>
                                {challenge.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{challenge.title}</h3>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                {challenge.description}
                            </p>
                            <ul className="space-y-4">
                                {challenge.details.map((detail, dIndex) => (
                                    <li key={dIndex} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 flex-shrink-0"></div>
                                        <span className="text-gray-600 text-sm">{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SecurityTestingChallenges;
