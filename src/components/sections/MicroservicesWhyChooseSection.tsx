"use client";

import Link from "next/link";
import React from "react";
import { FaServer, FaTools, FaAngleDoubleLeft, FaChartLine, FaUserTie } from "react-icons/fa";

const MicroservicesWhyChooseSection: React.FC = () => {
    const reasons = [
        {
            icon: <FaServer className="w-6 h-6" />,
            title: "Distributed Systems Expertise",
            description: "Deep knowledge of service mesh (Istio/Linkerd), container orchestration (Kubernetes), and event-driven architectures."
        },
        {
            icon: <FaTools className="w-6 h-6" />,
            title: "Modern Testing Stack",
            description: "Using specialized tools like Pact for contracts, Gremlin for chaos engineering, and Jaeger for distributed tracing."
        },
        {
            icon: <FaAngleDoubleLeft className="w-6 h-6" />,
            title: "Shift-Left Approach",
            description: "Reducing testing cycles and costs by catching integration and contract bugs at the earliest possible stage."
        },
        {
            icon: <FaChartLine className="w-6 h-6" />,
            title: "Scalability & Resilience",
            description: "Proven track record in validating global-scale cloud platforms and high-frequency financial systems."
        },
        {
            icon: <FaUserTie className="w-6 h-6" />,
            title: "ISTQB Certified Talent",
            description: "Our testers are trained in modern architectural patterns and risk-based testing methodologies."
        }
    ];

    return (
        <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Why Choose Testriq for <span className="text-brand-blue">Microservices QA?</span>
                    </h2>
                    <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                        We provide more than just test execution; we provide the architectural insights needed to build stable, distributed platforms.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-blue hover:shadow-lg transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-md">
                                {reason.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {reason.description}
                            </p>
                        </div>
                    ))}

                    <div className="p-8 rounded-2xl bg-slate-900 text-white flex flex-col justify-center gap-4 border border-slate-800">
                        <div className="text-blue-400 text-4xl mb-2">⭐</div>
                        <h3 className="text-2xl font-bold leading-tight">Trusted by Global Enterprise Leaders</h3>
                        <p className="text-slate-400 text-sm">Join the 180+ organizations that trust Testriq to secure their distributed systems.</p>
                        <Link href="/contact-us" className="text-blue-400 font-bold hover:underline">Partner with us &rarr;</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MicroservicesWhyChooseSection;
