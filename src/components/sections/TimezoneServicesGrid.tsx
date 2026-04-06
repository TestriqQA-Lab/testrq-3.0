"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaSync, FaHandshake, FaMapMarkerAlt, FaRocket } from "react-icons/fa";

const services = [
    {
        icon: <FaUsers />,
        title: "Real-Time Collaborative QA",
        description: "Experience the benefits of proximity with our real-time collaboration software testing. Our testers participate in your daily stand-ups, sprint planning, and retrospectives, ensuring total alignment and faster defect resolution."
    },
    {
        icon: <FaSync />,
        title: "Follow-the-Sun Continuous Testing",
        description: "Maximize your productivity with our follow-the-sun testing services. We orchestrate a seamless handoff between global regions, providing a continuous QA cycle that accelerates your time-to-market without increasing overhead."
    },
    {
        icon: <FaHandshake />,
        title: "Nearshore & Onshore Hybrid Models",
        description: "Optimize your costs without sacrificing quality. Our nearshore services provide the perfect balance of geographic proximity, cultural alignment, and cost-efficiency for North American and European enterprises."
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Localized User Acceptance Testing (UAT)",
        description: "Ensure your product resonates locally. Our localized UAT involves native-speaking testers who validate linguistic accuracy, cultural relevance, and regional compliance for your global product launches."
    },
    {
        icon: <FaRocket />,
        title: "Time-Critical Release Support",
        description: "When every minute counts, our time-critical release testing services provide the dedicated, real-time support you need to hit your launch windows with absolute confidence."
    }
];

const TimezoneServicesGrid: React.FC = () => {
    return (
        <section className="py-24 px-8 md:px-12 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Comprehensive <span className="text-[theme(color.brand.blue)]">Time Zone Testing Solutions</span>
                    </h2>
                    <p className="text-gray-700 text-lg max-w-3xl">
                        Testriq offers a full suite of services to ensure your global delivery model is optimized for speed and quality. We bridge the gap between continents with synchronous engineering excellence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`p-8 rounded-2xl border border-gray-100 bg-slate-50 hover:bg-white hover:border-blue-100 hover:shadow-xl transition-all duration-300 group ${index === services.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                        >
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 text-2xl mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TimezoneServicesGrid;
