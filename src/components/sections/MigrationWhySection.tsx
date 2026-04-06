"use client";

import React from "react";
import { FaCheckCircle, FaProjectDiagram, FaClock, FaLock } from "react-icons/fa";

const MigrationWhySection: React.FC = () => {
    const benefits = [
        {
            icon: <FaCheckCircle className="w-6 h-6 text-green-500" />,
            title: "Data Integrity",
            description: "Verifying all data is accurately transferred, complete, and uncorrupted throughout the migration process."
        },
        {
            icon: <FaProjectDiagram className="w-6 h-6 text-blue-500" />,
            title: "Functional Continuity",
            description: "Ensuring all systems perform as expected in the new environment with no loss of functionality."
        },
        {
            icon: <FaClock className="w-6 h-6 text-orange-500" />,
            title: "Minimal Downtime",
            description: "Strategically planned phases to reduce impact on business operations during the transition."
        },
        {
            icon: <FaLock className="w-6 h-6 text-purple-500" />,
            title: "Compliance Assurance",
            description: "Validating adherence to critical regulatory standards such as HIPAA and PCI-DSS for sensitive data."
        }
    ];

    return (
        <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                        Why Migration Testing is <span className="text-brand-blue italic">Non-Negotiable</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto font-medium">
                        Protecting your digital assets from severe operational disruptions, compliance breaches, and financial losses.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm group-hover:shadow-md">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MigrationWhySection;
