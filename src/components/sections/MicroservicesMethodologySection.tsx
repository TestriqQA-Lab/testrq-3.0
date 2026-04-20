"use client";

import React from "react";
import { FaMapMarkedAlt, FaFileSignature, FaPlayCircle, FaBomb, FaMicroscope } from "react-icons/fa";

const MicroservicesMethodologySection: React.FC = () => {
    const steps = [
        {
            icon: <FaMapMarkedAlt />,
            title: "Plan & Map",
            description: "Mapping the entire service mesh to identify critical call chains and potential points of failure.",
            color: "bg-blue-600"
        },
        {
            icon: <FaFileSignature />,
            title: "Define Contracts",
            description: "Setting up consumer-driven contract agreements and Service Level Objectives (SLOs) for every microservice.",
            color: "bg-indigo-600"
        },
        {
            icon: <FaPlayCircle />,
            title: "Automated Execution",
            description: "Running a multi-layered suite of contract, unit, and component tests within your CI/CD pipeline.",
            color: "bg-blue-800"
        },
        {
            icon: <FaBomb />,
            title: "Stress & Chaos",
            description: "Injecting failures into the cluster to validate resilience, circuit breaking, and auto-recovery mechanisms.",
            color: "bg-emerald-600"
        },
        {
            icon: <FaMicroscope />,
            title: "Observe & Audit",
            description: "Continuous monitoring of production telemetry to ensure that system behavior matches test expectations.",
            color: "bg-slate-800"
        }
    ];

    return (
        <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Testriq&apos;s Proven <span className="text-brand-blue">QA Methodology</span>
                    </h2>
                    <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                        Our five-step framework is built to ensure stability in high-velocity, distributed environments.
                    </p>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center group">
                                <div className={`w-16 h-16 ${step.color} text-white rounded-full flex items-center justify-center text-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300 ring-4 ring-white`}>
                                    {step.icon}
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-blue transition-colors">
                                        {index + 1}. {step.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Experience Highlight */}
                <div className="mt-20 p-8 md:p-12 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/3 text-center md:text-left">
                        <div className="text-5xl font-bold text-brand-blue mb-2">15+</div>
                        <div className="text-gray-500 font-bold uppercase tracking-widest text-xs">Years of Evolution</div>
                    </div>
                    <div className="flex-1 space-y-4">
                        <h3 className="text-2xl font-bold text-gray-900 leading-tight">From Monoliths to Mesh</h3>
                        <p className="text-gray-700 leading-relaxed italic">
                            &quot;Our methodology has evolved alongside architectural trends. We understand that in a microservices world, quality isn&apos;t just about checking a box; it&apos;s about ensuring that a system of a thousand boxes works as one.&quot;
                        </p>
                        <p className="text-sm font-bold text-gray-500">— Testriq Quality Architects</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MicroservicesMethodologySection;
