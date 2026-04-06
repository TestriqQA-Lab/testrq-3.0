"use client";

import React from "react";

const SaasTestingMetrics: React.FC = () => {
    const metrics = [
        { metric: "Test Coverage", target: "70-80% of code paths", why: "Balances thoroughness with maintenance cost" },
        { metric: "Defect Escape Rate", target: "<2% of bugs reach production", why: "Indicates test effectiveness" },
        { metric: "MTTD", target: "<1 hour", why: "Enables rapid incident response" },
        { metric: "MTTR", target: "<30 minutes", why: "Minimizes customer impact" },
        { metric: "Test Execution Time", target: "<30 min for regression suite", why: "Enables multiple daily deployments" },
        { metric: "Automated Test Ratio", target: ">80% of tests automated", why: "Reduces manual testing overhead" },
        { metric: "p95 Latency", target: "<500ms user-facing", why: "Maintains user experience" },
        { metric: "Availability", target: ">99.9% uptime", why: "Meets SLA commitments" },
    ];

    const challenges = [
        { stat: "72%", desc: "report difficulty testing multi-tenant scenarios effectively" },
        { stat: "58%", desc: "experience defects related to data isolation or cross-tenant leakage" },
        { stat: "81%", desc: "struggle with testing across different geographic regions and compliance" },
        { stat: "64%", desc: "report test automation doesn't keep pace with deployment frequency" },
        { stat: "45%", desc: "lack adequate performance testing before production deployments" },
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Key Metrics */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <span className="text-sm">● Key Metrics</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Key SaaS Testing{" "}
                        <span className="text-brand-blue">Metrics</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Effective SaaS testing services track metrics that correlate with
                        business outcomes.
                    </p>
                </div>

                <div className="overflow-x-auto mb-16">
                    <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
                        <thead>
                            <tr className="bg-gray-900 text-white">
                                <th className="px-6 py-4 text-left text-sm font-semibold">Metric</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold">Target</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold">Why It Matters</th>
                            </tr>
                        </thead>
                        <tbody>
                            {metrics.map((row, index) => (
                                <tr
                                    key={index}
                                    className={`border-b border-gray-100 ${index % 2 === 0 ? "bg-gray-50/50" : "bg-white"
                                        } hover:bg-gray-50 transition-colors`}
                                >
                                    <td className="px-6 py-4 font-semibold text-gray-900 text-sm">
                                        {row.metric}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm font-medium">
                                            {row.target}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600 text-sm">{row.why}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Industry Challenges */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-white mb-3">
                            SaaS Testing Challenges: Industry Data
                        </h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Research from testing and DevOps organizations reveals common
                            challenges — highlighting why specialized SaaS testing services
                            are necessary.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-5 gap-6">
                        {challenges.map((challenge, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl font-bold text-cyan-400 mb-2">
                                    {challenge.stat}
                                </div>
                                <p className="text-gray-400 text-xs leading-relaxed">
                                    {challenge.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SaasTestingMetrics;
