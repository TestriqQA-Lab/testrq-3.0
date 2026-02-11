"use client";

import React from "react";

const ManagedTestingMetrics: React.FC = () => {
    const kpis = [
        { metric: "Defect Detection Rate", target: ">95% before production", impact: "Reduces production incidents and customer impact" },
        { metric: "Mean Time to Detection (MTTD)", target: "<1 hour from code commit", impact: "Enables rapid feedback and quick fixes" },
        { metric: "Test Coverage", target: "70–80% of code paths", impact: "Balances thoroughness with maintenance cost" },
        { metric: "Defect Escape Rate", target: "<2% reach production", impact: "Indicates testing effectiveness" },
        { metric: "Test Execution Time", target: "<30 min for regression suite", impact: "Enables multiple daily deployments" },
        { metric: "Automated Test Ratio", target: ">80% tests automated", impact: "Reduces manual testing overhead" },
        { metric: "SLA Compliance", target: ">99% of SLAs met", impact: "Ensures vendor accountability" },
        { metric: "Time-to-Market", target: "30–50% reduction", impact: "Accelerates product releases" },
        { metric: "Cost per Test Case", target: "40–60% reduction vs. in-house", impact: "Demonstrates cost efficiency" },
        { metric: "Quality Metrics Trend", target: "Continuous improvement", impact: "Shows ongoing optimization" },
    ];

    const pricingModels = [
        {
            title: "Outcome-Based Pricing",
            color: "indigo",
            features: [
                "Pricing tied to quality outcomes, not hours worked",
                "Defect detection rate-based payments",
                "SLA-based with penalties for non-compliance",
                "Vendor bears risk of quality failures",
            ],
        },
        {
            title: "Fixed Monthly Pricing",
            color: "cyan",
            features: [
                "Predictable monthly cost for defined testing scope",
                "Dedicated team of specified size",
                "Clear definition of scope and deliverables",
                "Enables accurate budget forecasting",
            ],
        },
        {
            title: "Hybrid Pricing",
            color: "green",
            features: [
                "Fixed base cost plus variable components",
                "Core dedicated team at fixed cost",
                "Additional specialized services priced separately",
                "Pay only for services used",
            ],
        },
        {
            title: "Volume-Based Pricing",
            color: "orange",
            features: [
                "Pricing based on testing volume",
                "Per test case or per release pricing",
                "Scales with testing volume automatically",
                "Clear visibility into cost per unit",
            ],
        },
    ];

    const getGradient = (color: string) => {
        const colorMap: { [key: string]: string } = {
            indigo: "from-indigo-500 to-indigo-600",
            cyan: "from-cyan-500 to-cyan-600",
            green: "from-green-500 to-green-600",
            orange: "from-orange-500 to-orange-600",
        };
        return colorMap[color] || colorMap.indigo;
    };

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <span className="text-sm">● Metrics & Pricing</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Key Metrics, KPIs &{" "}
                        <span className="text-brand-blue">Pricing Models</span>
                    </h2>
                </div>

                {/* KPI Table */}
                <div className="overflow-x-auto mb-16">
                    <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
                        <thead>
                            <tr className="bg-gray-900 text-white">
                                <th className="px-6 py-4 text-left text-sm font-semibold">Metric</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold">Target</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold">Business Impact</th>
                            </tr>
                        </thead>
                        <tbody>
                            {kpis.map((kpi, index) => (
                                <tr
                                    key={index}
                                    className={`border-b border-gray-100 ${index % 2 === 0 ? "bg-gray-50/50" : "bg-white"
                                        } hover:bg-blue-50/50 transition-colors`}
                                >
                                    <td className="px-6 py-3 text-sm font-semibold text-gray-900">{kpi.metric}</td>
                                    <td className="px-6 py-3 text-sm text-brand-blue font-medium">{kpi.target}</td>
                                    <td className="px-6 py-3 text-sm text-gray-600">{kpi.impact}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pricing Models */}
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900">
                        Understanding <span className="text-brand-blue">Managed Testing Pricing</span>
                    </h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pricingModels.map((model, index) => (
                        <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                            <div className={`bg-gradient-to-r ${getGradient(model.color)} p-4 text-white`}>
                                <h4 className="text-lg font-bold">{model.title}</h4>
                            </div>
                            <div className="p-5">
                                <div className="space-y-2">
                                    {model.features.map((feature, i) => (
                                        <div key={i} className="flex items-start space-x-2">
                                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></div>
                                            <span className="text-gray-600 text-xs">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ManagedTestingMetrics;
