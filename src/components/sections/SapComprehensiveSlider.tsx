"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
    FaChartLine,
    FaExchangeAlt,
    FaFlask,
    FaServer,
    FaSync,
} from "react-icons/fa";

const SapComprehensiveSlider: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    const testingTypes = [
        {
            id: "s4hana",
            title: "SAP S/4HANA Migration Testing",
            icon: <FaServer className="w-6 h-6" />,
            coverage: "100% Migration Success",
            description:
                "Validate data migration, process compatibility, and system performance during the critical transition to S/4HANA. We ensure business continuity and stability.",
            features: [
                "Data Migration QA",
                "Business process validation",
                "System conversion testing",
                "Fiori UX validation",
                "Custom code remediation",
                "Performance benchmarking",
            ],
            metrics: [
                { label: "Process Coverage", value: "100%" },
                { label: "Data Integrity", value: "99.9%" },
                { label: "Performance", value: "98%" },
            ],
            action: "/sap-s4hana-testing-guide"
        },
        {
            id: "regression",
            title: "SAP Regression & Upgrade Testing",
            icon: <FaSync className="w-6 h-6" />,
            coverage: "Risk-Free Upgrades",
            description:
                "Automate and execute comprehensive regression tests following patches, support package stack (SPS), or major upgrades to ensure existing functionality remains intact.",
            features: [
                "Automated regression suites",
                "Patch impact analysis",
                "SPS validation",
                "End-to-end flow verification",
                "Defect management",
                "Release readiness check",
            ],
            metrics: [
                { label: "Automation Rate", value: "85%" },
                { label: "Cycle Reduction", value: "70%" },
                { label: "Defect Leakage", value: "0%" },
            ],
            action: "/automation-testing-services"
        },
        {
            id: "performance",
            title: "SAP Performance & Load Testing",
            icon: <FaChartLine className="w-6 h-6" />,
            coverage: "Scalability Assured",
            description:
                "Evaluate system capacity and stability under heavy load (e.g., peak transaction times) for critical modules like SD, MM, and FI/CO.",
            features: [
                "Peak load simulation",
                "Stress testing",
                "Scalability analysis",
                "Month-end close simulation",
                "HANA DB optimization",
                "Bottleneck identification",
            ],
            metrics: [
                { label: "Throughput", value: "High" },
                { label: "Response Time", value: "Fast" },
                { label: "Stability", value: "100%" },
            ],
            action: "/performance-testing-services"
        },
        {
            id: "integration",
            title: "SAP Integration Testing",
            icon: <FaExchangeAlt className="w-6 h-6" />,
            coverage: "Seamless Connectivity",
            description:
                "Validate seamless data flow and process alignment between SAP modules (e.g., ECC/S/4HANA) and non-SAP external systems (CRMs, legacy tools).",
            features: [
                "Interface testing (IDoc, RFC, API)",
                "Middleware validation (CPI, PO)",
                "End-to-end data flow",
                "Third-party integration",
                "Error handling verification",
                "Data consistency checks",
            ],
            metrics: [
                { label: "Interface Uptime", value: "99.99%" },
                { label: "Data Accuracy", value: "100%" },
                { label: "Error Detection", value: "Early" },
            ],
            action: "/api-testing"
        },
    ];

    // Function to move to the next tab
    const nextTab = () => {
        setActiveTab((prevTab) => (prevTab + 1) % testingTypes.length); // Loop back to the first tab when reaching the last one
    };

    // Function to move to the previous tab
    const prevTab = () => {
        setActiveTab((prevTab) => (prevTab - 1 + testingTypes.length) % testingTypes.length);
    };

    const activeTestingType = testingTypes[activeTab];

    return (
        <section className="py-16 px-6 sm:px-6 md:px-12 lg:px-24 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <FaFlask />
                        <span className="text-sm">End-to-End SAP QA Solutions</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        End-to-End SAP QA Solutions{" "}
                        <span className="text-brand-blue">Tailored to Your Business</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                        From migration to maintenance, our comprehensive SAP testing services ensure your enterprise systems are robust, secure, and ready for business.
                    </p>
                </div>

                {/* Active Tab Content */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-8">
                        {/* Left Side - Description and Features */}
                        <div>
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                                    {activeTestingType.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        {activeTestingType.title}
                                    </h3>
                                    <p className="text-blue-600 font-semibold">
                                        {activeTestingType.coverage}
                                    </p>
                                </div>
                            </div>

                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {activeTestingType.description}
                            </p>

                            <div className="mb-6">
                                <h4 className="font-semibold text-gray-900 mb-3">
                                    Key Features:
                                </h4>
                                <div className="grid grid-cols-1 gap-2">
                                    {activeTestingType.features.map((feature, index) => (
                                        <div key={index} className="flex items-center">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                            <span className="text-gray-600">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                                <Link href={`blog/post${activeTestingType.action}`} className="w-full sm:w-auto text-center bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300">
                                    Explore {activeTestingType.title}
                                </Link>
                                <div className="flex gap-4 w-full sm:w-auto">
                                    <button
                                        className="w-full sm:w-auto px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
                                        onClick={prevTab}
                                    >
                                        Previous
                                    </button>
                                    <button
                                        className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                                        onClick={nextTab}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Metrics and Visualization */}
                        <div>
                            <div className="mb-6">
                                <h4 className="font-semibold text-gray-900 mb-4">
                                    {activeTestingType.title}
                                </h4>
                                <div className="text-3xl font-bold text-blue-600 mb-2">
                                    {activeTestingType.coverage}
                                </div>
                                <div className="space-y-4">
                                    {activeTestingType.metrics.map((metric, index) => (
                                        <div key={index}>
                                            <div className="flex justify-between text-sm mb-2">
                                                <span className="text-gray-600">{metric.label}</span>
                                                <span className="font-semibold text-blue-600">
                                                    {metric.value}
                                                </span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-3">
                                                <div
                                                    className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-1000 ease-out"
                                                    style={{ width: "95%" }} // Simplified width for visual
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Visual Representation */}
                            <div className="bg-gray-50 rounded-xl p-6">
                                <h5 className="font-semibold text-gray-900 mb-4">
                                    Testing Coverage Visualization
                                </h5>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                            <span className="text-blue-600 font-bold text-lg">✓</span>
                                        </div>
                                        <div className="text-sm text-gray-600">Validated</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                            <span className="text-green-600 font-bold text-lg">
                                                ⚡
                                            </span>
                                        </div>
                                        <div className="text-sm text-gray-600">Optimized</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SapComprehensiveSlider;
