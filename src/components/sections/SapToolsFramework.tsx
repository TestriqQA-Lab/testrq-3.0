"use client";

import Link from "next/link";
import React from "react";
import { FaTools, FaRocket, FaMobileAlt, FaDatabase } from "react-icons/fa";

const SapToolsFramework: React.FC = () => {
    const toolCategories = [
        {
            title: "SAP Automation Accelerators",
            icon: <FaRocket className="w-5 h-5 text-blue-600" />,
            description: "Pre-built test libraries and scenarios for common SAP modules to jumpstart your automation journey.",
            tools: [
                {
                    name: "Pre-built Test Cases",
                    description: "Ready-to-use scripts for SD, MM, FICO standard flows",
                },
                {
                    name: "Reusable Components",
                    description: "Modular automation blocks for login, navigation, and data entry",
                },
                {
                    name: "Tricentis Tosca",
                    description: "Model-based automation for rapid script maintenance",
                },
                {
                    name: "Worksoft Certify",
                    description: "Business process automation for end-to-end validation",
                },
            ],
        },
        {
            title: "Fiori & UI Testing",
            icon: <FaMobileAlt className="w-5 h-5 text-purple-600" />,
            description: "Comprehensive testing strategies for SAP's responsive Fiori UI across all devices and browsers.",
            tools: [
                {
                    name: "Cross-Browser Testing",
                    description: "Selenium & Tricentis for Chrome, Edge, Firefox validation",
                },
                {
                    name: "Responsive Design",
                    description: "Ensuring Fiori apps work seamlessly on mobile and tablet",
                },
                {
                    name: "UX Validation",
                    description: "Usability testing for intuitive user workflows",
                },
                {
                    name: "Visual Regression",
                    description: "Detecting UI layout issues after upgrades",
                },
            ],
        },
        {
            title: "Test Data Management (TDM)",
            icon: <FaDatabase className="w-5 h-5 text-green-600" />,
            description: "Secure strategy for creating, masking, and refreshing realistic test data in non-production environments.",
            tools: [
                {
                    name: "Data Masking",
                    description: "Protecting sensitive PII/GDPR data in test systems",
                },
                {
                    name: "Synthetic Data",
                    description: "Generating realistic test data for volume testing",
                },
                {
                    name: "Data Refresh",
                    description: "Automated refresh of test environments from production",
                },
                {
                    name: "SAP TDMS",
                    description: "Test Data Migration Server for efficient data transfer",
                },
            ],
        },
        {
            title: <Link href="/technology-stack">Core Tools Stack</Link>,
            icon: <FaTools className="w-5 h-5 text-orange-600" />,
            description: "Industry-standard tools we leverage to deliver robust SAP quality assurance.",
            tools: [
                {
                    name: "SAP Solution Manager",
                    description: "Integrated test management and ALM",
                },
                {
                    name: "Micro Focus ALM",
                    description: "Lifecycle management for enterprise projects",
                },
                {
                    name: "Jira / Xray",
                    description: "Agile test management and defect tracking",
                },
                {
                    name: "LoadRunner",
                    description: "Performance testing for high-volume transactions",
                },
            ],
        },
    ];

    return (
        <section className="py-16 px-6 sm:px-6 md:px-12 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <FaTools />
                        <span className="text-sm">Automation Framework</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Specialized SAP <span className="text-brand-blue">Automation Testing Framework</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                        Manual SAP testing is a bottleneck. We accelerate your releases with a specialized framework designed for speed, coverage, and data security.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {toolCategories.map((category, categoryIndex) => (
                        <div
                            key={categoryIndex}
                            className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm mr-3 border border-gray-100">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">
                                    {category.title}
                                </h3>
                            </div>

                            <p className="text-gray-600 mb-6 text-sm">
                                {category.description}
                            </p>

                            <div className="space-y-4">
                                {category.tools.map((tool, toolIndex) => (
                                    <div
                                        key={toolIndex}
                                        className="bg-white rounded-xl p-4 border border-gray-200 hover:border-blue-300 transition-colors duration-300"
                                    >
                                        <div className="flex items-start">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold text-gray-900 mb-1 text-sm">
                                                    {tool.name}
                                                </h4>
                                                <p className="text-gray-500 text-xs leading-relaxed">
                                                    {tool.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/technology-stack"
                        title="Explore Our SAP Testing Tools – Testriq QA Lab"
                        className="inline-flex items-center justify-center px-8 py-3 min-h-[44px] min-w-[44px] bg-brand-blue text-white font-semibold rounded-lg shadow-lg hover:bg-brand-blue transition-colors duration-300"
                    >
                        Explore Our SAP Testing Tools
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SapToolsFramework;
