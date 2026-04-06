"use client";

import React from "react";
import { motion } from "framer-motion";

const UATComparisonSection: React.FC = () => {
    const data = [
        { factor: "Conducted By", uat: "End-users", system: "QA Pros", integration: "QA Pros", unit: "Developers" },
        { factor: "Focus", uat: "Business Workflows", system: "Full System Sync", integration: "Component Interaction", unit: "Individual Units" },
        { factor: "Scope", uat: "End-to-End Processes", system: "Complete Module", integration: "Interface/API", unit: "Function/Class" },
        { factor: "Criteria", uat: "Business Needs", system: "Technical Specs", integration: "Integration Specs", unit: "Logic Correctness" },
        { factor: "Timing", uat: "Final Layer", system: "Mid-Cycle", integration: "Development", unit: "Early Phase" },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                        UAT vs. Other <span className="text-blue-600">Testing Phases</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        A complete comparison to show where UAT fits in the modern quality assurance lifecycle.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm"
                >
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-200">
                                <th className="p-6 text-sm font-black text-slate-500 uppercase tracking-widest">Factor</th>
                                <th className="p-6 bg-blue-600 text-white font-black text-center">UAT</th>
                                <th className="p-6 text-slate-700 font-bold text-center">System</th>
                                <th className="p-6 text-slate-700 font-bold text-center">Integration</th>
                                <th className="p-6 text-slate-700 font-bold text-center">Unit</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            {data.map((row, i) => (
                                <tr key={i} className="hover:bg-slate-50 transition-colors">
                                    <td className="p-6 font-bold text-slate-900">{row.factor}</td>
                                    <td className="p-6 text-center text-blue-700 font-black bg-blue-50/30">{row.uat}</td>
                                    <td className="p-6 text-center text-slate-600">{row.system}</td>
                                    <td className="p-6 text-center text-slate-600 font-medium">{row.integration}</td>
                                    <td className="p-6 text-center text-slate-600">{row.unit}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </div>
        </section>
    );
};

export default UATComparisonSection;
