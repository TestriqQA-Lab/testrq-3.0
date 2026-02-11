"use client";

import React from "react";
import {
    FaCloud,
    FaHospital,
    FaExchangeAlt,
    FaMoneyCheckAlt,
    FaArrowUp,
    FaArrowDown,
    FaCheckCircle,
} from "react-icons/fa";

const ManagedTestingScenarios: React.FC = () => {
    const scenarios = [
        {
            icon: <FaCloud className="text-2xl" />,
            title: "Enterprise SaaS Platform Scaling",
            color: "indigo",
            situation: "A SaaS platform serving 500+ enterprise customers needs to accelerate from monthly to weekly releases while maintaining quality. The internal QA team is overwhelmed.",
            solution: [
                "Dedicated managed testing team of 8 QA engineers",
                "Automated regression testing for weekly releases",
                "SLAs for defect detection rate (>95%) and MTTD (<1 hour)",
                "CI/CD pipeline integration for continuous validation",
            ],
            results: [
                { metric: "Release Frequency", value: "Monthly → Weekly", icon: <FaArrowUp className="text-green-500" /> },
                { metric: "Defect Escape Rate", value: "8% → 2%", icon: <FaArrowDown className="text-green-500" /> },
                { metric: "Time-to-Market", value: "75% Faster", icon: <FaArrowUp className="text-green-500" /> },
                { metric: "QA Cost Reduction", value: "40%", icon: <FaArrowDown className="text-green-500" /> },
            ],
        },
        {
            icon: <FaHospital className="text-2xl" />,
            title: "Healthcare Application Compliance",
            color: "red",
            situation: "A healthcare software vendor needs to ensure HIPAA compliance for a major hospital system implementation. Internal QA lacks healthcare compliance expertise.",
            solution: [
                "Dedicated team with healthcare compliance expertise",
                "Comprehensive compliance testing strategy aligned with HIPAA",
                "Security testing including penetration testing and vulnerability assessment",
                "Compliance-focused quality metrics and audit documentation",
            ],
            results: [
                { metric: "HIPAA Compliance", value: "100% Validated", icon: <FaCheckCircle className="text-green-500" /> },
                { metric: "Security Issues", value: "All Remediated", icon: <FaCheckCircle className="text-green-500" /> },
                { metric: "Compliance Issues", value: "Zero at Launch", icon: <FaCheckCircle className="text-green-500" /> },
                { metric: "Regulatory Risk", value: "Significantly Reduced", icon: <FaArrowDown className="text-green-500" /> },
            ],
        },
        {
            icon: <FaExchangeAlt className="text-2xl" />,
            title: "Digital Transformation Initiative",
            color: "purple",
            situation: "An enterprise undergoing digital transformation needs to test multiple new applications across different technology stacks. Internal QA capacity is insufficient.",
            solution: [
                "Managed testing center of excellence (TCoE) with multi-disciplinary expertise",
                "Testing for web, mobile, API, and cloud-native services",
                "Standardized testing processes across all applications",
                "Scalable capacity as new applications are added",
            ],
            results: [
                { metric: "Quality Standards", value: "Consistent Across All", icon: <FaCheckCircle className="text-green-500" /> },
                { metric: "Testing Scale", value: "Without Cost Increase", icon: <FaArrowUp className="text-green-500" /> },
                { metric: "Quality Metrics", value: "Improved Across Board", icon: <FaArrowUp className="text-green-500" /> },
                { metric: "Quality Issues", value: "Minimal at Launch", icon: <FaArrowDown className="text-green-500" /> },
            ],
        },
        {
            icon: <FaMoneyCheckAlt className="text-2xl" />,
            title: "Fintech Platform Launch",
            color: "green",
            situation: "A fintech startup needs to launch a payment platform with strict security and compliance requirements. The team lacks in-house QA expertise.",
            solution: [
                "Dedicated managed testing team with fintech expertise",
                "Comprehensive security and compliance testing",
                "Penetration testing and vulnerability assessment",
                "SLAs for security metrics and PCI-DSS compliance",
            ],
            results: [
                { metric: "Platform Launch", value: "On Schedule", icon: <FaCheckCircle className="text-green-500" /> },
                { metric: "PCI-DSS", value: "Validated & Maintained", icon: <FaCheckCircle className="text-green-500" /> },
                { metric: "Security Incidents", value: "Zero in Year 1", icon: <FaCheckCircle className="text-green-500" /> },
                { metric: "User Base", value: "Rapid Scaling", icon: <FaArrowUp className="text-green-500" /> },
            ],
        },
    ];

    const getColorClasses = (color: string) => {
        const colorMap: { [key: string]: { gradient: string; light: string } } = {
            indigo: { gradient: "from-indigo-500 to-indigo-600", light: "bg-indigo-50" },
            red: { gradient: "from-red-500 to-red-600", light: "bg-red-50" },
            purple: { gradient: "from-purple-500 to-purple-600", light: "bg-purple-50" },
            green: { gradient: "from-green-500 to-green-600", light: "bg-green-50" },
        };
        return colorMap[color] || colorMap.indigo;
    };

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <span className="text-sm">● Real-World Results</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Real-World Managed Testing{" "}
                        <span className="text-brand-blue">Scenarios</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {scenarios.map((scenario, index) => {
                        const colors = getColorClasses(scenario.color);
                        return (
                            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                                {/* Header */}
                                <div className={`bg-gradient-to-r ${colors.gradient} p-5 text-white`}>
                                    <div className="flex items-center gap-4">
                                        {scenario.icon}
                                        <h3 className="text-lg font-bold">{scenario.title}</h3>
                                    </div>
                                </div>

                                <div className="p-6">
                                    {/* Situation */}
                                    <div className="mb-4">
                                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Situation</h4>
                                        <p className="text-gray-600 text-sm">{scenario.situation}</p>
                                    </div>

                                    {/* Solution */}
                                    <div className="mb-4">
                                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Solution</h4>
                                        <div className="space-y-1">
                                            {scenario.solution.map((item, i) => (
                                                <div key={i} className="flex items-start space-x-2">
                                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                                    <span className="text-gray-600 text-xs">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Results */}
                                    <div className={`${colors.light} rounded-xl p-4`}>
                                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Results</h4>
                                        <div className="grid grid-cols-2 gap-3">
                                            {scenario.results.map((result, i) => (
                                                <div key={i} className="flex items-center gap-2">
                                                    {result.icon}
                                                    <div>
                                                        <div className="text-xs text-gray-500">{result.metric}</div>
                                                        <div className="text-sm font-bold text-gray-900">{result.value}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
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

export default ManagedTestingScenarios;
