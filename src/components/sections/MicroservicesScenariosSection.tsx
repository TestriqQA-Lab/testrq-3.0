"use client";

import React from "react";
import { FaExclamationTriangle, FaLightbulb } from "react-icons/fa";

const MicroservicesScenariosSection: React.FC = () => {
    const scenarios = [
        {
            problem: "A new service deployment breaks multiple downstream consumers due to an unannounced API change.",
            solution: "We implement consumer-driven contract tests (Pact) that block deployments if the provider implementation doesn't match consumer expectations.",
            category: "Contract Failure"
        },
        {
            problem: "A critical third-party dependency goes offline, causing the entire order flow to hang indefinitely.",
            solution: "We use service virtualization (WireMock) to simulate 'Dependency Down' scenarios and validate that your system fails gracefully.",
            category: "Dependency Outage"
        },
        {
            problem: "The system functions perfectly in isolation but collapses when 50 concurrent services communicate under heavy load.",
            solution: "We perform cluster-level load testing to identify bottlenecks in the service mesh, load balancers, and cross-pod communication.",
            category: "Scalability Bottleneck"
        },
        {
            problem: "A distributed transaction fails midway, leaving data in an inconsistent state across three different databases.",
            solution: "We perform Saga pattern audits and compensate-transaction testing to ensure your system reaches eventual consistency.",
            category: "Data Integrity"
        },
        {
            problem: "A minor failure in a non-critical logging service causes a cascading outage that shuts down the entire payment gateway.",
            solution: "We use chaos engineering to validate that 'Circuit Breakers' (Hystrix/Resilience4j) correctly isolate failures and protect the core system.",
            category: "Cascading Failure"
        }
    ];

    return (
        <section className="bg-gray-50 py-16 px-8 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Real-World <span className="text-brand-blue">Testing Scenarios</span>
                    </h2>
                    <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                        In a distributed world, failures are inevitable. Our goal is to ensure they are predictable and manageable.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {scenarios.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-3xl border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-8"
                        >
                            <div className="md:w-1/2 space-y-4">
                                <div className="flex items-center gap-2 text-red-600">
                                    <FaExclamationTriangle className="w-4 h-4" />
                                    <span className="text-xs font-bold uppercase tracking-widest">Scenario: {item.category}</span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 leading-tight">
                                    {item.problem}
                                </h3>
                            </div>

                            <div className="hidden md:block w-px bg-gray-100 self-stretch"></div>

                            <div className="md:w-1/2 space-y-4">
                                <div className="flex items-center gap-2 text-emerald-600">
                                    <FaLightbulb className="w-4 h-4" />
                                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Testriq Solution</span>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {item.solution}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* Summary Box */}
                    <div className="lg:col-span-2 bg-slate-900 rounded-3xl p-8 text-center text-white relative overflow-hidden">
                        <div className="relative z-10 space-y-4">
                            <h3 className="text-2xl font-bold">Don&apos;t wait for production to surface these issues.</h3>
                            <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
                                Our scenario-based testing methodology ensures that your microservices environment is hardened against the most common and complex failures.
                            </p>
                            <div className="pt-4">
                                <button className="px-8 py-3 bg-brand-blue text-white font-bold rounded-lg hover:bg-blue-600 transition-colors">Request a System Audit</button>
                            </div>
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 to-transparent pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MicroservicesScenariosSection;
