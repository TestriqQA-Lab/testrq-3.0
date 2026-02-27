"use client";

import React from "react";
import { FaTerminal, FaDatabase, FaRocket, FaShieldAlt, FaChartLine } from "react-icons/fa";

const MicroservicesKeySolutionsSection: React.FC = () => {
    const solutions = [
        {
            icon: <FaTerminal className="text-white w-6 h-6" />,
            title: "Communication Validation",
            description: "We test both synchronous (REST, gRPC) and asynchronous (Kafka, RabbitMQ) message flows to ensure zero data loss across services.",
            bgColor: "bg-blue-600"
        },
        {
            icon: <FaDatabase className="text-white w-6 h-6" />,
            title: "Distributed Data Strategy",
            description: "Implementing patterns to validate 'Database-per-service' integrity and ensuring eventual consistency through saga orchestration testing.",
            bgColor: "bg-indigo-600"
        },
        {
            icon: <FaRocket className="text-white w-6 h-6" />,
            title: "Deployment Confidence",
            description: "Securing your CI/CD pipeline with automated contract tests, blue-green deployment validation, and canary release monitoring.",
            bgColor: "bg-blue-800"
        },
        {
            icon: <FaShieldAlt className="text-white w-6 h-6" />,
            title: "Resilience & Chaos Engineering",
            description: "Injecting failures into your system to validate 'Circuit Breakers' and 'Retries', ensuring your architecture can handle partial outages.",
            bgColor: "bg-emerald-600"
        },
        {
            icon: <FaChartLine className="text-white w-6 h-6" />,
            title: "Performance Scalability",
            description: "Load testing individual services to find bottlenecks and stress-testing the entire cluster to ensure global scalability.",
            bgColor: "bg-slate-800"
        }
    ];

    return (
        <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Testriq&apos;s Solutions to <span className="text-brand-blue">Distributed Complexity</span>
                    </h2>
                    <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                        We provide specialized QA solutions designed to secure the modern microservices ecosystem, focusing on reliability at every layer.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {solutions.map((solution, index) => (
                        <div
                            key={index}
                            className="group flex flex-col gap-5 p-2 rounded-2xl transition-all duration-300"
                        >
                            <div className={`w-14 h-14 ${solution.bgColor} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                {solution.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                                <p className="text-gray-600 text-base leading-relaxed">
                                    {solution.description}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* Solution Highlight */}
                    <div className="lg:col-span-2 bg-slate-900 text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 overflow-hidden relative">
                        <div className="flex-1 space-y-4 z-10">
                            <div className="text-blue-400 font-bold text-sm tracking-widest uppercase">Specialized Capability</div>
                            <h3 className="text-2xl md:text-3xl font-bold">Kubernetes-Native Testing</h3>
                            <p className="text-gray-300">
                                Our team specializes in container orchestration validation. We test inside the cluster, mocking dependencies at the network level and validating service mesh configurations (Istio/Linkerd).
                            </p>
                            <div className="pt-4 flex flex-wrap gap-3">
                                <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">Helm Charts</span>
                                <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">Sidecar Proxies</span>
                                <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">Auto-scaling</span>
                            </div>
                        </div>
                        <div className="hidden md:block absolute -right-10 top-1/2 -translate-y-1/2 opacity-20 text-[200px] select-none pointer-events-none">
                            ☸️
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MicroservicesKeySolutionsSection;
