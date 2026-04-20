"use client";

import Link from "next/link";
import React from "react";
import { FaSearch, FaCogs, FaRocket, FaExpandArrowsAlt, FaHeadset } from "react-icons/fa";

const MicroservicesNextStepsSection: React.FC = () => {
    const steps = [
        {
            icon: <FaSearch className="w-5 h-5" />,
            title: "Technical Audit",
            description: "We review your current service mesh, API documentation, and existing QA strategy to find gaps."
        },
        {
            icon: <FaCogs className="w-5 h-5" />,
            title: "Architecture Mapping",
            description: "Our experts map your critical call chains, data flows, and inter-service dependencies."
        },
        {
            icon: <FaRocket className="w-5 h-5" />,
            title: "Pilot Implementation",
            description: "We implement contract testing and basic resilience for your most critical microservice."
        },
        {
            icon: <FaExpandArrowsAlt className="w-5 h-5" />,
            title: "Full Transformation",
            description: "Scaling the methodology across your entire platform for comprehensive distributed quality."
        },
        {
            icon: <FaHeadset className="w-5 h-5" />,
            title: "Continuous Support",
            description: "Ongoing chaos engineering sessions and resilience audits to maintain system health."
        }
    ];

    return (
        <section className="bg-slate-50 py-16 px-8 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-gray-100 flex flex-col lg:flex-row gap-16 items-center">
                    {/* Left Content */}
                    <div className="lg:w-1/2 space-y-8">
                        <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest">
                            Ready to start?
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Future-Proof Your <span className="text-brand-blue">Distributed Architecture</span>
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Don&apos;t wait for a cascading failure to reveal your system&apos;s weaknesses. Partner with Testriq to build a resilient, observable, and contract-ready microservices ecosystem.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link href="/contact-us" className="px-8 py-4 bg-brand-blue text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 hover:scale-105 transition-transform text-center">
                                Schedule a Consultation
                            </Link>
                            <Link href="/locations-we-serve" className="px-8 py-4 bg-white border-2 border-brand-blue text-brand-blue font-bold rounded-xl hover:bg-blue-50 transition-colors text-center">
                                Our Global Reach
                            </Link>
                        </div>
                    </div>

                    {/* Right Content - Stepper */}
                    <div className="lg:w-1/2 w-full space-y-6">
                        {steps.map((step, index) => (
                            <div key={index} className="flex gap-5 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                        {step.icon}
                                    </div>
                                    {index !== steps.length - 1 && <div className="w-0.5 h-full bg-blue-50 group-hover:bg-blue-100 transition-colors"></div>}
                                </div>
                                <div className="pb-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MicroservicesNextStepsSection;
