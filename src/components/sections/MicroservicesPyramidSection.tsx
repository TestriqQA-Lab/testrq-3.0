"use client";

import React from "react";
import { motion } from "framer-motion";

const MicroservicesPyramidSection: React.FC = () => {
    const pyramidLayers = [
        {
            title: "Monitoring & Observability",
            subtitle: "Production Validation",
            description: "Real-time insights and distributed tracing to ensure system health.",
            color: "bg-emerald-600",
            width: "w-[30%]"
        },
        {
            title: "End-to-End Testing",
            subtitle: "System Flows",
            description: "Full user scenario validation across all integrated services.",
            color: "bg-blue-600",
            width: "w-[45%]"
        },
        {
            title: "Component & Contract Testing",
            subtitle: "Service Boundaries",
            description: "Ensuring services adhere to agreed API contracts and schemas.",
            color: "bg-indigo-600",
            width: "w-[65%]"
        },
        {
            title: "Integration Testing",
            subtitle: "Service Dependencies",
            description: "Validating communication between a service and its immediate dependencies.",
            color: "bg-violet-600",
            width: "w-[80%]"
        },
        {
            title: "Unit Testing",
            subtitle: "Service Internal",
            description: "Verifying the internal logic and code of individual microservices.",
            color: "bg-slate-800",
            width: "w-[100%]"
        }
    ];

    return (
        <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        The Microservices <span className="text-brand-blue">Testing Pyramid</span>
                    </h2>
                    <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                        In a distributed architecture, testing strategy must shift away from heavy end-to-end tests towards faster, more granular layers. Our pyramid ensures high coverage with minimal maintenance overhead.
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    {pyramidLayers.map((layer, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative mb-2 group cursor-default ${layer.width}`}
                        >
                            <div
                                className={`${layer.color} text-white p-4 md:p-6 rounded-lg shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 text-center`}
                            >
                                <h3 className="text-sm md:text-lg font-bold uppercase tracking-wider">{layer.title}</h3>
                                <p className="text-[10px] md:text-xs opacity-80 font-medium">{layer.subtitle}</p>

                                {/* TOOLTIP-like detail on hover */}
                                <div className="absolute left-1/2 -translate-x-1/2 -top-20 bg-gray-900 text-white p-3 rounded-lg w-64 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 shadow-2xl">
                                    <p className="text-xs">{layer.description}</p>
                                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 border-8 border-transparent border-t-gray-900"></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    <div className="flex justify-between w-full mt-12 text-sm font-bold text-gray-500 border-t pt-4 italic">
                        <span>&larr; More Granular / Faster / Isolated</span>
                        <span>More Integrated / Slower / Realistic &rarr;</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="text-xl mb-3">⚡</div>
                        <h4 className="font-bold text-gray-900 mb-2">Shift-Left Testing</h4>
                        <p className="text-sm text-gray-600">Catching integration issues early at the contract and component level before they reach staging or production.</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="text-xl mb-3">🔍</div>
                        <h4 className="font-bold text-gray-900 mb-2">Reduced Fragility</h4>
                        <p className="text-sm text-gray-600">By focusing on API contracts rather than brittle UI flows, we create test suites that don&apos;t break with every small frontend change.</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="text-xl mb-3">📈</div>
                        <h4 className="font-bold text-gray-900 mb-2">High Confidence</h4>
                        <p className="text-sm text-gray-600">Combining deep unit tests with broad observability ensures that individual services work and the entire system thrives.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MicroservicesPyramidSection;
