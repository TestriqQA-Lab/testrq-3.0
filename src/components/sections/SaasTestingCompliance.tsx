"use client";

import React from "react";
import {
    FaHeartbeat,
    FaUniversity,
    FaCertificate,
    FaUserShield,
    FaFlag,
} from "react-icons/fa";

const SaasTestingCompliance: React.FC = () => {
    const standards = [
        {
            icon: <FaHeartbeat className="text-2xl" />,
            title: "HIPAA",
            subtitle: "Healthcare",
            color: "red",
            items: [
                "Protected Health Information (PHI) encryption",
                "Audit logging and access controls",
                "Breach notification procedures",
            ],
        },
        {
            icon: <FaUniversity className="text-2xl" />,
            title: "PCI-DSS",
            subtitle: "Finance",
            color: "blue",
            items: [
                "Payment card data protection",
                "Secure transmission and access restrictions",
                "Regular security testing",
            ],
        },
        {
            icon: <FaCertificate className="text-2xl" />,
            title: "SOC 2 Type II",
            subtitle: "Enterprise",
            color: "purple",
            items: [
                "Security, availability, processing integrity",
                "Confidentiality and privacy controls",
                "Validated over 6+ months",
            ],
        },
        {
            icon: <FaUserShield className="text-2xl" />,
            title: "GDPR",
            subtitle: "Data Protection",
            color: "green",
            items: [
                "Data subject rights (access, deletion, portability)",
                "Consent management and data processing agreements",
                "Breach notification within 72 hours",
            ],
        },
        {
            icon: <FaFlag className="text-2xl" />,
            title: "FedRAMP",
            subtitle: "Government",
            color: "indigo",
            items: [
                "Security controls aligned with NIST standards",
                "Continuous monitoring",
                "Incident response procedures",
            ],
        },
    ];

    const getColorClasses = (color: string) => {
        const colorMap: { [key: string]: { bg: string; text: string; gradient: string } } = {
            red: { bg: "bg-red-50", text: "text-red-600", gradient: "from-red-500 to-red-600" },
            blue: { bg: "bg-blue-50", text: "text-blue-600", gradient: "from-blue-500 to-blue-600" },
            purple: { bg: "bg-purple-50", text: "text-purple-600", gradient: "from-purple-500 to-purple-600" },
            green: { bg: "bg-green-50", text: "text-green-600", gradient: "from-green-500 to-green-600" },
            indigo: { bg: "bg-indigo-50", text: "text-indigo-600", gradient: "from-indigo-500 to-indigo-600" },
        };
        return colorMap[color] || colorMap.blue;
    };

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <span className="text-sm">● Compliance & Standards</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Compliance &{" "}
                        <span className="text-brand-blue">Standards</span> in SaaS Testing
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Compliance testing isn&apos;t a one-time activity — it&apos;s an ongoing
                        requirement that must be integrated into development and testing
                        processes.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {standards.map((standard, index) => {
                        const colors = getColorClasses(standard.color);
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                            >
                                <div className={`bg-gradient-to-r ${colors.gradient} p-4 text-white text-center`}>
                                    <div className="mb-2">{standard.icon}</div>
                                    <h3 className="text-lg font-bold">{standard.title}</h3>
                                    <p className="text-xs text-white/80">{standard.subtitle}</p>
                                </div>
                                <div className="p-4">
                                    <div className="space-y-2">
                                        {standard.items.map((item, itemIndex) => (
                                            <div key={itemIndex} className="flex items-start space-x-2">
                                                <div className={`w-1.5 h-1.5 ${colors.text === "text-red-600" ? "bg-red-500" : colors.text === "text-blue-600" ? "bg-blue-500" : colors.text === "text-purple-600" ? "bg-purple-500" : colors.text === "text-green-600" ? "bg-green-500" : "bg-indigo-500"} rounded-full mt-1.5 flex-shrink-0`}></div>
                                                <span className="text-gray-600 text-xs leading-relaxed">{item}</span>
                                            </div>
                                        ))}
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

export default SaasTestingCompliance;
