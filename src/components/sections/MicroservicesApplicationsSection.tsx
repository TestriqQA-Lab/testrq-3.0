"use client";

import Link from "next/link";
import React from "react";
import { FaShoppingCart, FaHospital, FaTruck, FaGlobe, FaCreditCard } from "react-icons/fa";

const MicroservicesApplicationsSection: React.FC = () => {
    const industries = [
        {
            icon: <FaShoppingCart className="w-6 h-6" />,
            title: "E-commerce & Payments",
            description: "Validating complex checkout flows across order, inventory, and payment services with zero downtime.",
            features: ["Transaction Isolation", "Saga Pattern Validation", "Payment Gateway Mocks"],
            color: "blue"
        },
        {
            icon: <FaHospital className="w-6 h-6" />,
            title: "Healthcare & Lab Systems",
            description: "Securing patient data and ensuring consistency across distributed registers and diagnostic services.",
            features: ["HIPAA Compliance", "Data Privacy Bridges", "FHIR API Testing"],
            color: "indigo"
        },
        {
            icon: <FaTruck className="w-6 h-6" />,
            title: "Logistics & Supply Chain",
            description: "Real-time tracking of global assets across fragmented shipping and warehousing microservices.",
            features: ["Geo-spatial Data Sync", "Event-Driven Tracing", "Partner API Integration"],
            color: "blue"
        },
        {
            icon: <FaCreditCard className="w-6 h-6" />,
            title: "Financial Services",
            description: "Ensuring ledger consistency and high-frequency trading reliability in distributed banking systems.",
            features: ["Eventual Consistency Audit", "Security Pen-testing", "High-Load Scalability"],
            color: "indigo"
        },
        {
            icon: <FaGlobe className="w-6 h-6" />,
            title: "SaaS & Cloud Platforms",
            description: "Kubernetes-native validation for multi-tenant platforms operating at massive global scale.",
            features: ["Auto-scaling Validation", "Cross-Region Resilience", "Resource Quota Testing"],
            color: "blue"
        }
    ];

    return (
        <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Critical <span className="text-brand-blue">Industry Applications</span>
                    </h2>
                    <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                        From financial ledgers to healthcare registries, microservices testing is the foundation of digital trust in every major sector.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="flex gap-6 p-6 rounded-2xl border border-gray-100 hover:bg-slate-50 transition-colors group"
                        >
                            <div className={`w-14 h-14 shrink-0 rounded-2xl ${index % 2 === 0 ? 'bg-blue-600' : 'bg-slate-800'} text-white flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform`}>
                                {industry.icon}
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-xl font-bold text-gray-900">{industry.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {industry.description}
                                </p>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {industry.features.map((feature, fIdx) => (
                                        <span key={fIdx} className="px-2 py-1 bg-white border border-gray-200 rounded-md text-[10px] font-bold text-gray-500 uppercase tracking-tight">
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Highlight Industry box */}
                    <div className="md:col-span-2 bg-gradient-to-r from-blue-700 to-indigo-900 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row justify-between items-center gap-8 overflow-hidden relative">
                        <div className="space-y-4 z-10 max-w-lg">
                            <div className="w-12 h-1 bg-blue-400"></div>
                            <h3 className="text-2xl md:text-3xl font-bold">Banking & FinTech</h3>
                            <p className="text-blue-100 italic font-medium leading-relaxed">
                                &quot;In 2026, banking is microservices. We validate the complex orchestration of accounts, transfers, and fraud detection that prevents a billion-dollar error before it happens.&quot;
                            </p>
                            <Link href="/banking-finance-industry-testing-services" className="inline-flex items-center gap-2 text-white font-bold hover:underline">
                                Read Our Banking Case Study &rarr;
                            </Link>
                        </div>
                        <div className="text-[120px] opacity-10 absolute -right-4 -bottom-4 rotate-12 pointer-events-none">
                            🏦
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MicroservicesApplicationsSection;
