"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaSearch, FaBug, FaUserSecret, FaTools, FaCertificate } from "react-icons/fa";

const SecurityTestingMethodology: React.FC = () => {
    const steps = [
        {
            number: "01",
            title: "Reconnaissance & Threat Modeling",
            description: "Identifying high-risk assets and potential threat detection gaps through asset risk profiling and threat landscape mapping.",
            icon: <FaSearch className="text-2xl" />,
            color: "blue",
        },
        {
            number: "02",
            title: "Weakness Scanning",
            description: "Utilizing automated tools and CVE database matching for comprehensive vulnerability identification, including open-source flaws.",
            icon: <FaBug className="text-2xl" />,
            color: "purple",
        },
        {
            number: "03",
            title: "Manual Penetration Testing",
            description: "Our Certified Ethical Hackers attempt to bypass your system security using creative exploit chains, focusing on logic flow bypassing and privilege escalation.",
            icon: <FaUserSecret className="text-2xl" />,
            color: "red",
        },
        {
            number: "04",
            title: "Risk Analysis & Repair Support",
            description: "Providing detailed business impact ranking, CVSS scoring analysis, and secure coding principles for effective risk mitigation and remediation guidance.",
            icon: <FaTools className="text-2xl" />,
            color: "amber",
        },
        {
            number: "05",
            title: "Re-Testing & Certification",
            description: "Verifying that all high-risk gaps are closed and providing a final security report and process certification for stakeholders.",
            icon: <FaCertificate className="text-2xl" />,
            color: "green",
        },
    ];

    return (
        <section className="py-24 px-8 md:px-12 lg:px-24 bg-white relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-50 -ml-48 -mb-48"></div>

            <div className="max-w-7xl mx-auto relative">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-block px-4 py-2 bg-blue-100 text-brand-blue rounded-full text-sm font-bold tracking-wider uppercase">
                        Our Process
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                        Proven Security <span className="text-brand-blue">QA Methodology</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Following transparent ISO/IEC/IEEE 29119 standards to find and fix every system weakness.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative group h-full"
                        >
                            {/* Connector line for desktop */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-[2px] bg-gray-100 z-0">
                                    <div className="absolute top-0 left-0 h-full bg-brand-blue transition-all duration-500 w-0 group-hover:w-full"></div>
                                </div>
                            )}

                            <div className="relative z-10 space-y-6 h-full flex flex-col items-center text-center">
                                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-white shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3
                  ${step.color === 'blue' ? 'bg-blue-600' :
                                        step.color === 'purple' ? 'bg-purple-600' :
                                            step.color === 'red' ? 'bg-red-600' :
                                                step.color === 'amber' ? 'bg-amber-600' : 'bg-emerald-600'}`}
                                >
                                    {step.icon}
                                </div>

                                <div className="space-y-3 flex-grow">
                                    <span className="text-sm font-black text-gray-200 group-hover:text-brand-blue/20 transition-colors uppercase tracking-widest">{step.number}</span>
                                    <h3 className="text-lg font-bold text-gray-900 leading-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed px-2">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SecurityTestingMethodology;
