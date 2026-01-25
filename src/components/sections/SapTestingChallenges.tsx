import React from "react";
import { FaExclamationTriangle, FaDatabase, FaCogs, FaChartLine, FaUsers, FaCheckCircle } from "react-icons/fa";

const SapTestingChallenges = () => {
    const challenges = [
        {
            id: 1,
            title: "S/4HANA Migration Testing Gaps",
            description: "Nearly 60% of companies undergoing migrations face significant delays because of incomplete business process validation and data conversion failures.",
            challengeText: "Custom code resolving issues and pricing discrepancies often obstruct the month-end closing process.",
            solution: "Our SAP S/4HANA migration strategy follows the ISO 29119-2 standard. We use a risk-based approach to identify your project's critical paths, validating 'clean core' principles and custom Z-reports.",
            icon: <FaExclamationTriangle className="h-8 w-8 text-red-600" />
        },
        {
            id: 2,
            title: "Test Data Management (TDM) & Global Compliance",
            description: "Managing SAP’s complex data structures while adhering to GDPR is a primary blocker for 70% of global projects.",
            challengeText: "Masking PII for dev/test environments often breaks referential integrity.",
            solution: "We provide expert sap data testing using SAP TDMS and synthetic data generation. Aligned with ISO/IEC/IEEE 29119-3, our datasets remain realistic and compliant across the US, UK, and EU.",
            icon: <FaDatabase className="h-8 w-8 text-blue-600" />
        },
        {
            id: 3,
            title: "Scaling SAP Test Automation & Maintenance",
            description: "Manual regression testing still dominates the landscape, with under 30% of teams achieving meaningful automation.",
            challengeText: "Brittle scripts often fail post-update, leading to massive maintenance overhead.",
            solution: "We leverage tools like Tricentis Tosca and Worksoft to build resilient, keyword-driven frameworks. Our pre-built tools enable 80% regression automation, delivering 40% faster cycles.",
            icon: <FaCogs className="h-8 w-8 text-purple-600" />
        },
        {
            id: 4,
            title: "SAP Performance Testing under High Loads",
            description: "As organizations consolidate global instances, sizing infrastructure for Fiori-based workloads becomes a 50% failure point.",
            challengeText: "Batch overlap and OData API spikes can crash systems during peak transaction volumes.",
            solution: "Our team uses LoadRunner and JMeter to simulate multi-region access according to ISO 29119-3 specifications, benchmarking Fiori tiles and background jobs.",
            icon: <FaChartLine className="h-8 w-8 text-green-600" />
        },
        {
            id: 5,
            title: "Cross-Functional Expertise & Silo Breakdown",
            description: "The end of SAP ECC support has created a significant skill gap and demand for cross-module integration experts.",
            challengeText: "Siloed teams often miss data integrity issues that only appear during User Acceptance Testing (UAT).",
            solution: "Our ISTQB-certified experts operate under a QAAAS model, defining a strategy based on ISO 29119-1 to ensure end-to-end coverage across your entire SAP landscape.",
            icon: <FaUsers className="h-8 w-8 text-orange-600" />
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Solving the 2026 Global <span className="text-brand-blue">SAP Testing Crisis</span>: 5 Critical Challenges
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        The shift to S/4HANA introduces complexities that traditional ERP testing cannot handle. We have architected our SAP QA framework to solve the five biggest hurdles facing global enterprises.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {challenges.map((challenge) => (
                        <div key={challenge.id} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col md:flex-row gap-6">
                            <div className="flex-shrink-0">
                                <div className="bg-white p-4 rounded-xl shadow-sm">
                                    {challenge.icon}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{challenge.title}</h3>
                                <p className="text-gray-600 mb-4 leading-relaxed text-sm">{challenge.description}</p>
                                <div className="mb-4">
                                    <span className="text-xs font-bold text-red-600 uppercase tracking-wider">The Challenge:</span>
                                    <p className="text-gray-700 italic text-xs mt-1">{challenge.challengeText}</p>
                                </div>
                                <div className="bg-white rounded-xl p-5 border-l-4 border-brand-blue shadow-sm">
                                    <div className="flex items-center gap-2 mb-2">
                                        <FaCheckCircle className="text-brand-blue font-bold" />
                                        <span className="font-bold text-brand-blue uppercase tracking-wider text-xs">The Solution</span>
                                    </div>
                                    <p className="text-gray-800 font-medium text-sm">{challenge.solution}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SapTestingChallenges;
