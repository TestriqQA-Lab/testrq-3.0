"use client";

import React from "react";
import Link from "next/link";
import { FaShieldAlt } from "react-icons/fa";

const AutomationComplianceTable: React.FC = () => {
    const standards = [
        {
            standard: (<Link href="/qa-documentation-services" className="hover:underline text-brand-blue-600">ISO/IEC/IEEE 29119-5:2024</Link>),
            focus: "Keyword-Driven & Model-Based Testing",
            relevance: "The highest global standard for scalable and maintainable automation frameworks.",
        },
        {
            standard: (<Link href="/qa-documentation-services" className="hover:underline text-brand-blue-600">ISO/IEC/IEEE 29119-2</Link>),
            focus: "Generic Test Process",
            relevance: "Ensuring repeatability and traceability across the entire CI/CD pipeline.",
        },
        {
            standard: (<Link href="/security-testing" className="hover:underline text-brand-blue-600">SOC2 Type II</Link>),
            focus: "Security & Processing Integrity",
            relevance: "Protecting sensitive customer data and intellectual property in test environments.",
        },
        {
            standard: (<Link href="/security-testing" className="hover:underline text-brand-blue-600">GDPR & ISO 27001</Link>),
            focus: "Data Privacy & Information Security",
            relevance: "Strict PII masking and redaction protocols for secure international testing operations.",
        },
    ];

    return (
        <section className="bg-white py-16 px-8 md:px-12 lg:px-24 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <FaShieldAlt />
                        <span className="text-sm">Global Compliance & Trust</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Engineering Excellence <span className="text-brand-blue">Through Standards</span>
                    </h2>
                    <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                        In the global market, security and compliance are non-negotiable. Our automated testing services follow top international benchmarks to ensure technical excellence.
                    </p>
                </div>

                <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-xl bg-gray-50/30">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200">
                                <th className="px-6 py-4 text-sm font-bold text-gray-900 uppercase tracking-wider">Standard</th>
                                <th className="px-6 py-4 text-sm font-bold text-gray-900 uppercase tracking-wider">Core Focus</th>
                                <th className="px-6 py-4 text-sm font-bold text-gray-900 uppercase tracking-wider">Strategic Importance</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {standards.map((item, index) => (
                                <tr key={index} className="hover:bg-purple-50/40 transition-colors group">
                                    <td className="px-6 py-4 text-sm font-semibold text-brand-blue group-hover:text-purple-600">{item.standard}</td>
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

export default AutomationComplianceTable;
