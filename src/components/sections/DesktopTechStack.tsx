"use client";
import React from "react";
import Link from 'next/link';
import {
    FaLaptopCode,
    FaEye,
    FaTachometerAlt,
    FaBoxOpen,
    FaServer,
} from "react-icons/fa";

const DesktopTechStack: React.FC = () => {
    const techStack = [
        {
            category: "Automation Frameworks",
            tools: ["TestComplete", "Appium (Windows Driver)", "Winium", "SikuliX"],
            icon: <FaLaptopCode className="text-3xl text-brand-blue" />,
        },
        {
            category: "Visual AI Testing",
            tools: ["Applitools"],
            description: "(Visual AI for UI consistency across OS versions)",
            icon: <FaEye className="text-3xl text-purple-500" />,
        },
        {
            category: "Performance Tools",
            tools: ["JMeter", "Intel VTune Profiler"],
            description: "(for memory leak detection)",
            icon: <FaTachometerAlt className="text-3xl text-orange-500" />,
        },
        {
            category: "Package & Install Testing",
            tools: ["InstallShield", "WiX Toolset"],
            description: "Compliance testing for .EXE and .MSI packages",
            icon: <FaBoxOpen className="text-3xl text-red-500" />,
        },
        {
            category: "Virtual Environments",
            tools: ["VMware", "VirtualBox", "Cloud-based farms"],
            description: "For Windows, macOS, and Linux testing",
            icon: <FaServer className="text-3xl text-green-500" />,
        },
    ];

    return (
        <section className="py-20 px-8 md:px-12 lg:px-24 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        Testriq&rsquo;s Desktop QA <span className="text-brand-blue">Tech Stack</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We utilize the most advanced desktop <Link href="/technology-stack">automation and diagnostic tools</Link> to ensure your software is &quot;Market-Ready&quot; (2026 Trends):
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {techStack.map((stack, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-gray-50 rounded-xl">
                                    {stack.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">
                                    {stack.category}
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-2">
                                {stack.tools.map((tool, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                            {stack.description && (
                                <p className="text-sm text-gray-500 italic mt-2">
                                    {stack.description}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DesktopTechStack;
