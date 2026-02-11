"use client";

import React from "react";
import {
    FaCreditCard,
    FaFileExport,
    FaExclamationTriangle,
    FaServer,
} from "react-icons/fa";

const SaasTestingScenarios: React.FC = () => {
    const scenarios = [
        {
            icon: <FaCreditCard className="text-3xl" />,
            title: "Subscription Billing System",
            color: "cyan",
            points: [
                "Correct charge amounts for different plan tiers",
                "Proper proration when customers upgrade/downgrade mid-cycle",
                "Refund processing and credit application",
                "Failed payment retry logic and dunning workflows",
                "Compliance with local tax regulations (VAT, GST, sales tax)",
            ],
            impact:
                "A billing bug affecting 1% of transactions can result in thousands of dollars in lost revenue or customer refunds.",
        },
        {
            icon: <FaFileExport className="text-3xl" />,
            title: "Data Export & Compliance",
            color: "green",
            points: [
                "Users can export their data in standard formats (CSV, JSON)",
                "Data deletion requests remove all customer data within 30 days",
                "Audit logs track all data access and modifications",
                "Backups are encrypted and retention policies are enforced",
            ],
            impact:
                "GDPR/HIPAA compliance testing ensures regulatory requirements are met and avoids fines up to €20 million.",
        },
        {
            icon: <FaExclamationTriangle className="text-3xl" />,
            title: "API Rate Limiting",
            color: "orange",
            points: [
                "Requests exceeding rate limits receive 429 status codes",
                "Clients can determine remaining quota from response headers",
                "Retry-After headers guide clients on when to retry",
                "Burst traffic doesn't cause cascading failures",
            ],
            impact:
                "Proper rate limiting prevents service degradation and protects all tenants from noisy neighbor effects.",
        },
        {
            icon: <FaServer className="text-3xl" />,
            title: "Database Failover",
            color: "purple",
            points: [
                "Automatic failover to replica database completes in under 30 seconds",
                "No data loss during failover",
                "Application continues accepting requests during failover",
                "Monitoring alerts notify operations teams immediately",
            ],
            impact:
                "SaaS disaster recovery validation ensures business continuity and SLA adherence.",
        },
    ];

    const getColorClasses = (color: string) => {
        const colorMap: { [key: string]: { bg: string; text: string; border: string } } = {
            cyan: { bg: "bg-cyan-50", text: "text-cyan-600", border: "border-cyan-200" },
            green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200" },
            orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200" },
            purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
        };
        return colorMap[color] || colorMap.cyan;
    };

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <span className="text-sm">● Real-World Scenarios</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Real-World SaaS{" "}
                        <span className="text-brand-blue">Testing Scenarios</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Battle-tested validation across the most critical SaaS
                        functionality areas that directly impact revenue and compliance.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {scenarios.map((scenario, index) => {
                        const colors = getColorClasses(scenario.color);
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center`}>
                                        <span className={colors.text}>{scenario.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">
                                        {scenario.title}
                                    </h3>
                                </div>

                                <div className="space-y-3 mb-6">
                                    {scenario.points.map((point, pointIndex) => (
                                        <div key={pointIndex} className="flex items-start space-x-3">
                                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                                            <span className="text-gray-600 text-sm">{point}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className={`${colors.bg} rounded-lg p-3 ${colors.border} border`}>
                                    <p className={`text-xs font-medium ${colors.text}`}>
                                        💡 {scenario.impact}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SaasTestingScenarios;
