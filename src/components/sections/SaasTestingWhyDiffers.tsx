"use client";

import React from "react";

const SaasTestingWhyDiffers: React.FC = () => {
    const comparisons = [
        {
            aspect: "Deployment",
            traditional: "Single version per customer",
            saas: "Continuous updates for all users simultaneously",
        },
        {
            aspect: "Data Model",
            traditional: "Isolated databases",
            saas: "Multi-tenant architecture with shared infrastructure",
        },
        {
            aspect: "Scalability Testing",
            traditional: "Fixed user load",
            saas: "Variable load with unpredictable spikes",
        },
        {
            aspect: "Compliance Scope",
            traditional: "Single environment",
            saas: "Multiple geographic regions with different regulations",
        },
        {
            aspect: "Downtime Impact",
            traditional: "Affects one customer",
            saas: "Affects all customers and revenue stream",
        },
        {
            aspect: "Release Frequency",
            traditional: "Quarterly or annual",
            saas: "Daily or weekly deployments",
        },
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <span className="text-sm">● SaaS vs Traditional</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Why SaaS Testing{" "}
                        <span className="text-brand-blue">Differs</span> from Traditional
                        Software Testing
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        SaaS Application Testing requires a fundamentally different approach
                        because the operational model demands constant availability,
                        multi-tenant isolation, and continuous compliance.
                    </p>
                </div>

                {/* Comparison Table */}
                <div className="overflow-x-auto">
                    <div className="min-w-[700px]">
                        {/* Table Header */}
                        <div className="grid grid-cols-3 gap-4 mb-2">
                            <div className="bg-gray-100 rounded-t-xl px-6 py-4">
                                <span className="font-bold text-gray-700 text-sm uppercase tracking-wider">
                                    Aspect
                                </span>
                            </div>
                            <div className="bg-red-50 rounded-t-xl px-6 py-4">
                                <span className="font-bold text-red-600 text-sm uppercase tracking-wider">
                                    Traditional Software
                                </span>
                            </div>
                            <div className="bg-green-50 rounded-t-xl px-6 py-4">
                                <span className="font-bold text-green-600 text-sm uppercase tracking-wider">
                                    SaaS Applications
                                </span>
                            </div>
                        </div>

                        {/* Table Rows */}
                        {comparisons.map((row, index) => (
                            <div
                                key={index}
                                className={`grid grid-cols-3 gap-4 ${index % 2 === 0 ? "bg-gray-50/50" : ""
                                    }`}
                            >
                                <div className="px-6 py-4 border-l-4 border-gray-300">
                                    <span className="font-semibold text-gray-900 text-sm">
                                        {row.aspect}
                                    </span>
                                </div>
                                <div className="px-6 py-4">
                                    <span className="text-gray-600 text-sm">{row.traditional}</span>
                                </div>
                                <div className="px-6 py-4">
                                    <span className="text-gray-800 text-sm font-medium">
                                        {row.saas}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-8">
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        This operational reality means SaaS testing services must address{" "}
                        <span className="font-semibold text-brand-blue">
                            specific technical and business risks
                        </span>{" "}
                        that don&apos;t exist in traditional software environments.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SaasTestingWhyDiffers;
