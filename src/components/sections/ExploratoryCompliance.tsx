"use client";

import React from "react";
import { FaGlobe, FaShieldAlt, FaCertificate } from "react-icons/fa";

const ExploratoryCompliance: React.FC = () => {
    const complianceStandards = [
        {
            id: "iso-29119",
            title: "ISO/IEC/IEEE 29119-2",
            description:
                "Our primary framework for managing, designing, and documenting unscripted testing sessions.",
            icon: <FaGlobe className="text-4xl text-blue-600 mb-4" />,
        },
        {
            id: "soc2-gdpr",
            title: "SOC2 & GDPR Compliant",
            description:
                "Our manual exploratory testing for mobile apps follows strict privacy protocols. We protect Personally Identifiable Information (PII) throughout the process, even during unscripted ad hoc testing.",
            icon: <FaShieldAlt className="text-4xl text-green-600 mb-4" />,
        },
        {
            id: "istqb",
            title: "ISTQB Standards",
            description:
                "Every member of our team is certified, ensuring a 'common language' of quality across global borders.",
            icon: <FaCertificate className="text-4xl text-purple-600 mb-4" />,
        },
    ];

    return (
        <section className="py-20 px-8 md:px-12 lg:px-24 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-50 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Global Standards & Compliance: <br />
                        <span className="text-brand-blue">Engineering Trust</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We partner with international organizations across the US, UK, and EU
                        to deliver high-standard QA and data solutions. To ensure
                        high-quality delivery, our exploratory testing aligns with
                        international security and quality benchmarks.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {complianceStandards.map((standard) => (
                        <div
                            key={standard.id}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center"
                        >
                            <div className="flex justify-center">{standard.icon}</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                {standard.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {standard.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExploratoryCompliance;
