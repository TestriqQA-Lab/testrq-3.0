"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaSmileBeam, FaShieldAlt, FaCogs, FaRocket, FaCheckCircle } from "react-icons/fa";

const CompatibilityTestingCrucialSection: React.FC = () => {
    const benefits = [
        {
            icon: <FaChartLine />,
            title: "Maximize Market Reach",
            text: "Ensure your application is accessible and functional for the widest possible audience, regardless of their chosen device or browser.",
            color: "bg-blue-500",
        },
        {
            icon: <FaSmileBeam />,
            title: "Enhance User Satisfaction",
            text: "Deliver a consistent, high-quality experience that builds user trust and loyalty, reducing frustration and churn.",
            color: "bg-indigo-500",
        },
        {
            icon: <FaShieldAlt />,
            title: "Protect Brand Reputation",
            text: "Prevent negative reviews and perceptions caused by application malfunctions on specific platforms.",
            color: "bg-purple-500",
        },
        {
            icon: <FaCogs />,
            title: "Reduce Support Costs",
            text: "Minimize post-release issues and customer support inquiries related to compatibility problems.",
            color: "bg-blue-600",
        },
        {
            icon: <FaRocket />,
            title: "Ensure Future Readiness",
            text: "Validate both Backward compatibility (older systems) and Forward compatibility (upcoming technologies).",
            color: "bg-indigo-600",
        },
    ];

    return (
        <section className="py-20 px-8 md:px-12 lg:px-24 bg-gray-50">
            <div className="max-w-7xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 space-y-4"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Why Compatibility Testing is <span className="text-brand-blue">Crucial</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                        Bridging the Gap Between Innovation and User Experience. It&apos;s not just about functionality; it&apos;s about delivering a consistent and positive experience for every single user.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 text-left border border-gray-100 group"
                        >
                            <div className={`${benefit.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {benefit.text}
                            </p>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="bg-gradient-to-br from-brand-blue to-indigo-600 p-8 rounded-3xl shadow-lg text-left text-white flex flex-col justify-center items-center text-center space-y-4"
                    >
                        <div className="bg-white/20 p-4 rounded-full">
                            <FaCheckCircle className="text-4xl" />
                        </div>
                        <h3 className="text-2xl font-bold">Comprehensive Protection</h3>
                        <p className="text-blue-50 leading-relaxed">
                            Testriq&apos;s approach ensures your digital strategy is robust against the chaos of platform diversity.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};


export default CompatibilityTestingCrucialSection;
