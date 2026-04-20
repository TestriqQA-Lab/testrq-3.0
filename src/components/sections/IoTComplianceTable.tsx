"use client";

import React from "react";
import { FaShieldAlt } from "react-icons/fa";

const IoTComplianceTable: React.FC = () => {
    const standards = [
        {
            standard: "ETSI EN 303 645",
            focus: "Consumer IoT Security",
            relevance: "Baseline for smart home & wearables.",
        },
        {
            standard: "ISO/IEC 29119-3",
            focus: "Test Documentation",
            relevance: "Standardizing test cases for audits.",
        },
        {
            standard: "SOC2 Type II",
            focus: "Data Privacy",
            relevance: "Secure cloud-backend for IoT.",
        },
        {
            standard: "GDPR/CCPA",
            focus: "User Protection",
            relevance: "Mandatory for EU/US market entry.",
        },
        {
            standard: "Cyber Resilience Act (CRA)",
            focus: "Product Liability",
            relevance: "Essential for 2026 hardware launches.",
        },
    ];

    return (
        <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <FaShieldAlt />
                        <span className="text-sm">Compliance & Standards</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Global <span className="text-[theme(color.brand.blue)]">Standards & Compliance</span>
                    </h2>
                    <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                        We ensure your IoT products meet the rigorous demands of global regulatory frameworks, facilitating smooth market entry and building consumer trust.
                    </p>
                </div>

                <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-lg">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200">
                                <th className="px-6 py-4 text-sm font-bold text-gray-900 uppercase tracking-wider">Standard</th>
                                <th className="px-6 py-4 text-sm font-bold text-gray-900 uppercase tracking-wider">Focus Area</th>
                                <th className="px-6 py-4 text-sm font-bold text-gray-900 uppercase tracking-wider">Relevance to 2026 Ecosystem</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {standards.map((item, index) => (
                                <tr key={index} className="hover:bg-blue-50/30 transition-colors">
                                    <td className="px-6 py-4 text-sm font-semibold text-brand-blue">{item.standard}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{item.focus}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700 italic">{item.relevance}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default IoTComplianceTable;
