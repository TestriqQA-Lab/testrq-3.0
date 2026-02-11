"use client";

import React from "react";
import { FaCheckCircle, FaProjectDiagram, FaFileInvoice, FaChartBar, FaSyncAlt } from "react-icons/fa";

const MicroservicesBestPracticesSection: React.FC = () => {
    const practices = [
        {
            icon: <FaProjectDiagram className="text-blue-600 w-6 h-6" />,
            title: "Shift-Left Strategy",
            description: "Moving testing to the earliest phases of development to surface integration issues before they reach a shared environment."
        },
        {
            icon: <FaFileInvoice className="text-blue-600 w-6 h-6" />,
            title: "Contract-First Design",
            description: "Defining and agreeing upon service contracts before any code is written, ensuring seamless communication across teams."
        },
        {
            icon: <FaChartBar className="text-blue-600 w-6 h-6" />,
            title: "Deep Observability",
            description: "Using distributed tracing and logging to validate not just if a test passed, but how the data flowed through the system."
        },
        {
            icon: <FaSyncAlt className="text-blue-600 w-6 h-6" />,
            title: "Automated CI/CD Gates",
            description: "Ensuring that every microservice has its own automated test suite that must pass before any deployment to production."
        }
    ];

    return (
        <section className="bg-slate-900 py-16 px-8 md:px-12 lg:px-24 overflow-hidden relative">
            {/* Abstract Background Design */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 skew-x-12 translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side - Content */}
                    <div className="space-y-8">
                        <div className="inline-block px-4 py-1.5 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest">
                            Industry Benchmarks
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                            Microservices <span className="text-blue-400">Testing Best Practices</span>
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                            Success in a distributed world requires a fundamental shift in how we approach quality. We follow these five critical principles to ensure your platform remains stable at scale.
                        </p>

                        <div className="space-y-4">
                            {["ISO 29119 Compliant Documentation", "Zero-Trust Service Validation", "100% Automated Regression Suites"].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-blue-100 font-medium">
                                    <FaCheckCircle className="text-blue-500" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                            Download Strategy Guide
                        </button>
                    </div>

                    {/* Right Side - Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {practices.map((practice, index) => (
                            <div
                                key={index}
                                className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                                    {React.cloneElement(practice.icon as React.ReactElement, { className: "text-blue-400 group-hover:text-white transition-colors" })}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{practice.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed lowercase first-letter:uppercase">
                                    {practice.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MicroservicesBestPracticesSection;
