"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaUserShield, FaFlask, FaChartPie, FaSearchPlus, FaWeightHanging } from "react-icons/fa";

const TDMServicesSection: React.FC = () => {
    const services = [
        {
            icon: <FaUserShield className="text-4xl text-blue-500" />,
            title: "1. Data Masking & De-identification",
            description: "Protect your sensitive information with our advanced data masking and de-identification services. We apply sophisticated obfuscation techniques to production data, ensuring it remains functionally intact for testing while becoming completely anonymous and secure.",
        },
        {
            icon: <FaFlask className="text-4xl text-purple-500" />,
            title: "2. Synthetic Test Data Generation",
            description: "When production data is unavailable or too sensitive, our synthetic test data generation agency creates high-fidelity datasets from scratch. These AI-driven datasets cover all edge cases and negative scenarios, providing superior test coverage.",
        },
        {
            icon: <FaChartPie className="text-4xl text-green-500" />,
            title: "3. Data Subsetting & Provisioning",
            description: "Reduce infrastructure costs and improve agility with our test data subsetting and provisioning. We extract smaller, referentially intact slices of production data, allowing your teams to test on lightweight, relevant datasets.",
        },
        {
            icon: <FaSearchPlus className="text-4xl text-orange-500" />,
            title: "4. Compliance & Privacy Audits",
            description: "Ensure your QA environments are audit-ready with our data privacy and protection in QA services. We perform deep-dive scans of your test databases to identify 'dark data' and hidden PII, ensuring total adherence to global privacy regulations.",
        },
        {
            icon: <FaWeightHanging className="text-4xl text-red-500" />,
            title: "5. TDM for Performance & Load Testing",
            description: "High-scale testing requires high-volume data. Our TDM for performance and load testing ensures your environments are populated with the massive datasets needed to validate system resilience and scalability under extreme stress.",
        },
    ];

    return (
        <section className="py-24 px-8 md:px-12 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-16 items-start">
                    <div className="md:w-1/3 sticky top-24">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                            Comprehensive <span className="text-[theme(color.brand.blue)]">Test Data Management</span> Solutions
                        </h2>
                        <p className="text-gray-600 text-lg mb-12">
                            Testriq offers a full spectrum of services to transform your test data from a bottleneck into a competitive advantage.
                        </p>
                        <div className="p-8 bg-blue-50 rounded-2xl border border-blue-100">
                            <p className="text-blue-900 font-semibold mb-2">Did You Know?</p>
                            <p className="text-blue-800 text-sm">
                                Provisioning high-fidelity, secure test data is a cornerstone of enterprise trust and agility in 2026.
                            </p>
                        </div>
                    </div>

                    <div className="md:w-2/3 grid grid-cols-1 gap-12">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative flex gap-8 p-8 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                            >
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        {service.icon}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TDMServicesSection;
