"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaLightbulb, FaLock, FaBolt } from "react-icons/fa";

const TDMAdvantageSection: React.FC = () => {
    const advantages = [
        {
            icon: <FaShieldAlt className="text-3xl" />,
            title: "15+ Years of Data Excellence",
            description: "Our deep-rooted expertise allows us to handle complex data architectures across diverse industries, from FinTech and Healthcare to E-commerce.",
        },
        {
            icon: <FaLightbulb className="text-3xl" />,
            title: "AI-Powered Data Generation",
            description: "We leverage proprietary AI tools for synthetic test data generation, creating realistic datasets that mirror production behavior without using sensitive info.",
        },
        {
            icon: <FaLock className="text-3xl" />,
            title: "Total Regulatory Compliance",
            description: "Our methodologies are strictly mapped to global privacy standards, providing compliance-driven TDM that eliminates the risk of PII leaks.",
        },
        {
            icon: <FaBolt className="text-3xl" />,
            title: "Automated Data Provisioning",
            description: "We specialize in integrating TDM into CI/CD pipelines, enabling self-service test data management that reduces wait times and accelerates testing.",
        },
    ];

    return (
        <section className="py-20 px-8 md:px-12 lg:px-24 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Why Trust Testriq for Your <span className="text-[theme(color.brand.blue)]">TDM Strategy?</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        Managing test data requires a delicate balance between realism and security. Testriq&apos;s team of TDM specialists provides a holistic approach to TDM QA, ensuring your teams have the right data, at the right time.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {advantages.map((adv, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100"
                        >
                            <div className="text-[theme(color.brand.blue)] mb-6">
                                {adv.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{adv.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{adv.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TDMAdvantageSection;
