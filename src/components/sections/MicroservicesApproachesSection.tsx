"use client";

import React from "react";
import { FaFileContract, FaPlug, FaBiohazard, FaSearchPlus, FaCloud } from "react-icons/fa";

const MicroservicesApproachesSection: React.FC = () => {
    const approaches = [
        {
            icon: <FaFileContract className="w-8 h-8" />,
            title: "Contract Testing",
            description: "We use Pact and Spring Cloud Contract to validate agreements between service producers and consumers, preventing breaking changes in CI/CD.",
            color: "blue"
        },
        {
            icon: <FaPlug className="w-8 h-8" />,
            title: "Service Virtualization",
            description: "Mocking unavailable or expensive dependencies using WireMock or Hoverfly to enable parallel development and testing of isolated services.",
            color: "indigo"
        },
        {
            icon: <FaBiohazard className="w-8 h-8" />,
            title: "Chaos Engineering",
            description: "Validating 'fail-over' mechanisms by injecting network latency, pod failures, and resource exhaustion using Gremlin and Chaos Mesh.",
            color: "rose"
        },
        {
            icon: <FaSearchPlus className="text-emerald-500 w-8 h-8" />,
            title: "Observability-Driven Testing",
            description: "Integrating with OpenTelemetry and Jaeger to track request flows across services, identifying bottlenecks and logical errors in call chains.",
            color: "emerald"
        },
        {
            icon: <FaCloud className="text-sky-500 w-8 h-8" />,
            title: "Kubernetes-Native Testing",
            description: "Testing within the actual runtime environment, validating pod-to-pod communication, auto-scaling rules, and service mesh policies (Istio).",
            color: "sky"
        }
    ];

    return (
        <section className="bg-slate-50 py-16 px-8 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Advanced <span className="text-brand-blue">QA Methodologies</span>
                    </h2>
                    <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                        Our approach isn&apos;t just about automation scripts; it&apos;s about ensuring stability in an environment that is constantly changing.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {approaches.map((approach, index) => (
                        <div
                            key={index}
                            className={`group p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                        >
                            <div className={`text-${approach.color}-600 mb-6 group-hover:scale-110 transition-transform`}>
                                {approach.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{approach.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {approach.description}
                            </p>

                            <div className="mt-6 pt-6 border-t border-gray-50 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-xs font-bold text-gray-400">0{index + 1} Method</span>
                                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="p-8 bg-brand-blue rounded-2xl flex flex-col justify-center text-white">
                        <h3 className="text-2xl font-bold mb-4 italic">&quot;We don&apos;t just test code; we test architectures.&quot;</h3>
                        <p className="text-blue-100 text-sm mb-6">Our methodology is designed for the high-velocity world of DevOps and microservices.</p>
                        <button className="px-6 py-3 bg-white text-brand-blue font-bold rounded-lg text-sm self-start hover:bg-blue-50 transition-colors">Learn Our Full Process</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MicroservicesApproachesSection;
