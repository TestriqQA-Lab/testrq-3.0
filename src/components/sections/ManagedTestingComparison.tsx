"use client";

import React from "react";
import { FaCheckCircle, FaTimesCircle, FaMinusCircle } from "react-icons/fa";

const ManagedTestingComparison: React.FC = () => {
    const comparisonRows = [
        { factor: "Accountability", managed: "Vendor owns outcomes", staff: "Client owns outcomes", traditional: "Shared accountability", inHouse: "Client owns outcomes" },
        { factor: "Risk Transfer", managed: "Vendor bears risk", staff: "Client bears risk", traditional: "Shared risk", inHouse: "Client bears risk" },
        { factor: "Cost Model", managed: "Outcome-based or fixed", staff: "Time & materials", traditional: "Fixed or T&M", inHouse: "Fixed (salary + overhead)" },
        { factor: "Scalability", managed: "Elastic, automatic", staff: "Limited by headcount", traditional: "Limited by contract", inHouse: "Requires hiring" },
        { factor: "Process Ownership", managed: "Vendor", staff: "Client", traditional: "Shared", inHouse: "Client" },
        { factor: "Vendor Accountability", managed: "High (SLAs, KPIs)", staff: "Low (activity-based)", traditional: "Medium (deliverable-based)", inHouse: "N/A" },
        { factor: "Cost Predictability", managed: "High", staff: "Low", traditional: "Medium", inHouse: "High" },
        { factor: "Time to Scale", managed: "Days/weeks", staff: "Weeks/months", traditional: "Weeks/months", inHouse: "Months" },
        { factor: "Expertise Access", managed: "Broad, specialized", staff: "Limited", traditional: "Broad", inHouse: "Limited by hiring" },
        { factor: "Management Overhead", managed: "Low", staff: "High", traditional: "Medium", inHouse: "High" },
        { factor: "Compliance Alignment", managed: "Strong", staff: "Medium", traditional: "Medium", inHouse: "Strong" },
    ];

    const getRatingIcon = (value: string) => {
        const positive = ["High", "Vendor", "Elastic, automatic", "Days/weeks", "Broad, specialized", "Low", "Strong", "Vendor owns outcomes", "Vendor bears risk", "Outcome-based or fixed", "High (SLAs, KPIs)"];
        const negative = ["Low", "Client bears risk", "Client owns outcomes", "Limited", "Requires hiring", "Months", "Time & materials", "Low (activity-based)", "Limited by headcount", "Limited by hiring"];

        if (positive.includes(value)) return <FaCheckCircle className="text-green-500 text-xs inline mr-1" />;
        if (negative.includes(value)) return <FaTimesCircle className="text-red-400 text-xs inline mr-1" />;
        return <FaMinusCircle className="text-yellow-500 text-xs inline mr-1" />;
    };

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <span className="text-sm">● Complete Comparison</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Managed Testing vs.{" "}
                        <span className="text-brand-blue">Other Service Models</span>
                    </h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
                        <thead>
                            <tr className="bg-gray-900 text-white">
                                <th className="px-5 py-4 text-left text-sm font-semibold">Factor</th>
                                <th className="px-5 py-4 text-left text-sm font-semibold">
                                    <span className="text-green-300">Managed Testing</span>
                                </th>
                                <th className="px-5 py-4 text-left text-sm font-semibold">Staff Augmentation</th>
                                <th className="px-5 py-4 text-left text-sm font-semibold">Traditional Outsourcing</th>
                                <th className="px-5 py-4 text-left text-sm font-semibold">In-House QA</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonRows.map((row, index) => (
                                <tr
                                    key={index}
                                    className={`border-b border-gray-100 ${index % 2 === 0 ? "bg-gray-50/50" : "bg-white"
                                        } hover:bg-blue-50/30 transition-colors`}
                                >
                                    <td className="px-5 py-3 text-sm font-semibold text-gray-900">{row.factor}</td>
                                    <td className="px-5 py-3 text-sm text-green-700 font-medium bg-green-50/40">
                                        {getRatingIcon(row.managed)} {row.managed}
                                    </td>
                                    <td className="px-5 py-3 text-sm text-gray-600">
                                        {getRatingIcon(row.staff)} {row.staff}
                                    </td>
                                    <td className="px-5 py-3 text-sm text-gray-600">
                                        {getRatingIcon(row.traditional)} {row.traditional}
                                    </td>
                                    <td className="px-5 py-3 text-sm text-gray-600">
                                        {getRatingIcon(row.inHouse)} {row.inHouse}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ManagedTestingComparison;
