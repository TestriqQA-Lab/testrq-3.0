"use client";

import React from "react";
import { FaLayerGroup, FaNetworkWired, FaPuzzlePiece } from "react-icons/fa";

const MicroservicesWhatIsSection: React.FC = () => {
    const points = [
        {
            icon: <FaLayerGroup className="text-blue-600 w-6 h-6" />,
            title: "Isolated Validation",
            description: "Testing each service in isolation to ensure internal logic and APIs function correctly without external dependencies."
        },
        {
            icon: <FaNetworkWired className="text-blue-600 w-6 h-6" />,
            title: "Inter-Service Communication",
            description: "Validating the complex network of requests and responses between services, including synchronous and asynchronous flows."
        },
        {
            icon: <FaPuzzlePiece className="text-blue-600 w-6 h-6" />,
            title: "Ecosystem Integrity",
            description: "Ensuring that the collective behavior of all services meets business requirements and performance benchmarks."
        }
    ];

    return (
        <section className="bg-gray-50 py-16 px-8 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Text */}
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            What is <span className="text-brand-blue">Microservices Testing?</span>
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Microservices testing is the strategic validation of a distributed system where each component is an independently deployable service. Unlike traditional monolithic testing, microservices QA must address the &quot;distributed system complexity&quot;—where failures aren&apos;t just code bugs, but network issues, data inconsistencies, and version mismatches.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            At Testriq, we move beyond simple unit tests. We validate the <span className="text-brand-blue font-semibold">service mesh</span>, ensuring that your architecture is resilient, observable, and capable of scaling under global traffic demands.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                            {points.slice(0, 2).map((point, index) => (
                                <div key={index} className="flex flex-col gap-3">
                                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                                        {point.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900">{point.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Visual Illustration */}
                    <div className="relative">
                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col gap-8">
                            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
                                <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                                <div className="flex-1">
                                    <div className="h-2 w-24 bg-blue-200 rounded mb-2"></div>
                                    <div className="h-2 w-48 bg-blue-100 rounded"></div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center px-4">
                                <div className="w-16 h-16 rounded-xl bg-gray-50 border-2 border-dashed border-gray-200 flex items-center justify-center text-2xl">📦</div>
                                <div className="h-0.5 flex-1 bg-gradient-to-r from-blue-500 to-green-500 mx-4 relative">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white border-2 border-blue-500"></div>
                                </div>
                                <div className="w-16 h-16 rounded-xl bg-gray-50 border-2 border-dashed border-gray-200 flex items-center justify-center text-2xl">🚚</div>
                            </div>

                            <div className="space-y-4">
                                <div className="p-4 rounded-xl border border-green-100 bg-green-50 flex items-center gap-4">
                                    <FaPuzzlePiece className="text-green-600" />
                                    <span className="text-sm font-semibold text-green-800">Contract Validation Passed</span>
                                </div>
                                <div className="p-4 rounded-xl border border-blue-100 bg-blue-50 flex items-center gap-4">
                                    <FaNetworkWired className="text-blue-600" />
                                    <span className="text-sm font-semibold text-blue-800">Mesh Latency: 24ms</span>
                                </div>
                            </div>
                        </div>

                        {/* Absolute element */}
                        <div className="absolute -bottom-6 -right-6 bg-brand-blue text-white p-6 rounded-xl shadow-lg hidden md:block">
                            <div className="text-2xl font-bold">15+</div>
                            <div className="text-xs opacity-80 uppercase tracking-wider">Years of QA Excellence</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MicroservicesWhatIsSection;
