"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    FaGavel,
    FaChartLine,
    FaUserAstronaut,
    FaSearchDollar,
    FaAward
} from "react-icons/fa";

const AccessibilityWhySection: React.FC = () => {
    const benefits = [
        {
            icon: FaGavel,
            title: "Ensure Legal Compliance",
            text: "Navigate complex regulations such as WCAG, ADA, and Section 508, mitigating legal risks and fostering trust.",
            color: "blue"
        },
        {
            icon: FaChartLine,
            title: "Expand Market Reach",
            text: "Make your digital products accessible to over a billion people worldwide with disabilities, tapping into an underserved market.",
            color: "green"
        },
        {
            icon: FaUserAstronaut,
            title: "Enhance User Experience",
            text: "Create intuitive and user-friendly interfaces that benefit all users, including those with temporary or situational disabilities.",
            color: "purple"
        },
        {
            icon: FaSearchDollar,
            title: "Improve SEO",
            text: "Accessible websites often rank higher due to better semantic structure, faster loading times, and improved user engagement.",
            color: "orange"
        },
        {
            icon: FaAward,
            title: "Cultivate Brand Reputation",
            text: "Demonstrate a commitment to social responsibility and inclusive design, strengthening your brand's standing.",
            color: "red"
        }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        Why Accessibility Testing is <span className="text-brand-blue">Essential</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                        Beyond Compliance, Towards True Inclusion
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100 group"
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-${benefit.color}-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <benefit.icon className={`text-2xl text-${benefit.color}-600`} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                            <p className="text-gray-600 leading-relaxed italic">&quot;{benefit.text}&quot;</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AccessibilityWhySection;
