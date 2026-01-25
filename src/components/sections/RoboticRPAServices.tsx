"use client";

import React from "react";
import { FaUsers, FaRobot, FaSync } from "react-icons/fa";
import Link from "next/link";

const RoboticRPAServices: React.FC = () => {
    const rpaFeatures = [
        {
            title: "Automated Bot Testing",
            description: "We ensure your software bots handle UI fragility and minor interface changes without breaking.",
            icon: <FaRobot className="w-8 h-8 text-blue-500" />,
        },
        {
            title: "Cognitive Automation",
            description: "Testing bots that use AI to process unstructured data, ensuring reliability within complex systems.",
            icon: <FaUsers className="w-8 h-8 text-purple-500" />,
        },
        {
            title: "Automate Older Workflows",
            description: "RPA testing to streamline tasks on legacy systems without needing deep backend changes.",
            icon: <FaSync className="w-8 h-8 text-green-500" />,
        },
    ];

    return (
        <section className="bg-gray-50 py-16 px-8 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <FaRobot />
                        <span className="text-sm">RPA Testing Services</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Scaling the <span className="text-brand-blue">Virtual Workforce</span>
                    </h2>
                    <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                        Beyond physical robots, Testriq is a leader in <Link href="/robotics-testing-services" className="text-brand-blue hover:underline">RPA Testing Services</Link>. While traditional automation works at the backend (scripts/APIs), RPA mimics human-mimicking interactions at the UI level.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {rpaFeatures.map((feature, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="mb-6">{feature.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RoboticRPAServices;
