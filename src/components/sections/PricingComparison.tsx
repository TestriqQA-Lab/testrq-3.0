
"use client";
import React from "react";
import { FaCheck, FaMinus } from "react-icons/fa";

const features = [
    { category: "Testing Capabilities" },
    { name: "Manual Functional Testing", startup: true, growth: true, enterprise: true },
    { name: "API & Integration Testing", startup: "Basic", growth: "Advanced", enterprise: "Full Spectrum" },
    { name: "Test Automation (Web/Mobile)", startup: false, growth: true, enterprise: true },
    { name: "Performance/Load Testing", startup: false, growth: "Ad-hoc", enterprise: "Continuous" },
    { name: "Security Vulnerability Scan", startup: false, growth: "Quarterly", enterprise: "Daily/Real-time" },

    { category: "Resource & Communication" },
    { name: "Dedicated QA Specialist", startup: "Part-time", growth: "Full-time", enterprise: "Dedicated Team" },
    { name: "Lead/Delivery Manager", startup: false, growth: true, enterprise: true },
    { name: "Reporting Dashboard", startup: "Weekly", growth: "Real-time", enterprise: "Custom & BI" },
    { name: "Slack/Teams Integration", startup: true, growth: true, enterprise: true },

    { category: "Infrastructure & Security" },
    { name: "Public Cloud (AWS/Azure)", startup: true, growth: true, enterprise: true },
    { name: "On-Premise Infrastructure", startup: false, growth: false, enterprise: true },
    { name: "IP & Data Protection", startup: "Standard", growth: "Extra Layer", enterprise: "Enterprise Gold" },
];

const PricingComparison = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900">Deep Dive Comparison</h2>
                    <p className="mt-4 text-gray-600">Understand the nuances of each service level</p>
                </div>

                <div className="overflow-x-auto border border-gray-100 rounded-3xl shadow-sm">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50">
                                <th className="py-6 px-8 text-sm font-bold text-gray-900 border-b">Feature</th>
                                <th className="py-6 px-4 text-sm font-bold text-gray-900 border-b text-center">Startup</th>
                                <th className="py-6 px-4 text-sm font-bold text-gray-900 border-b text-center">Growth</th>
                                <th className="py-6 px-4 text-sm font-bold text-gray-900 border-b text-center">Enterprise</th>
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((item, idx) => {
                                if ("category" in item) {
                                    return (
                                        <tr key={idx} className="bg-blue-50/30">
                                            <td colSpan={4} className="py-4 px-8 text-xs font-black uppercase tracking-widest text-blue-600">
                                                {item.category}
                                            </td>
                                        </tr>
                                    );
                                }

                                return (
                                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-5 px-8 text-sm font-medium text-gray-700 border-b border-gray-100 italic">
                                            {item.name}
                                        </td>
                                        <td className="py-5 px-4 text-sm text-gray-600 border-b border-gray-100 text-center">
                                            {renderValue(item.startup)}
                                        </td>
                                        <td className="py-5 px-4 text-sm text-gray-600 border-b border-gray-100 text-center">
                                            {renderValue(item.growth)}
                                        </td>
                                        <td className="py-5 px-4 text-sm text-gray-600 border-b border-gray-100 text-center">
                                            {renderValue(item.enterprise)}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

const renderValue = (value: string | boolean) => {
    if (typeof value === "boolean") {
        return value ? (
            <FaCheck className="mx-auto text-green-500" />
        ) : (
            <FaMinus className="mx-auto text-gray-200" />
        );
    }
    return <span className="font-semibold">{value}</span>;
};

export default PricingComparison;
