"use client";

import React from "react";
import { FaCheckCircle, FaGlobe, FaToolbox, FaHandshake } from "react-icons/fa";

const ShiftLeftAdvantageSection: React.FC = () => {
    const advantages = [
        {
            icon: <FaGlobe className="w-6 h-6" />,
            title: "Deep Industry Knowledge",
            description: "Profound understanding of automotive, healthcare, finance, and aerospace verticals, ensuring compliance with ISO 27001, GDPR, and HIPAA."
        },
        {
            icon: <FaToolbox className="w-6 h-6" />,
            title: "Cutting-Edge Tech Stack",
            description: "Integration with leading tools like Selenium, Jira, Jenkins, SonarQube, Docker, and Kubernetes for scalable testing environments."
        },
        {
            icon: <FaHandshake className="w-6 h-6" />,
            title: "Client-Centric Approach",
            description: "We partner closely with you to understand unique challenges and tailor solutions that deliver measurable results."
        },
        {
            icon: <FaCheckCircle className="w-6 h-6" />,
            title: "Global Delivery Model",
            description: "Our distributed teams ensure seamless collaboration and efficient project execution across geographical boundaries."
        }
    ];

    return (
        <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Image/Visual Representing Advantage */}
                    <div className="lg:w-1/2 relative">
                        <div className="w-full aspect-square bg-blue-50 rounded-[3rem] relative overflow-hidden flex items-center justify-center">
                            <div className="grid grid-cols-2 gap-4 p-8 relative z-10 w-full">
                                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                                    <span className="text-2xl font-bold text-brand-blue">15+</span>
                                    <span className="text-[10px] font-bold text-gray-500 uppercase">Years Exp.</span>
                                </div>
                                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center translate-y-8">
                                    <span className="text-2xl font-bold text-brand-blue">180+</span>
                                    <span className="text-[10px] font-bold text-gray-500 uppercase">Global Clients</span>
                                </div>
                                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                                    <span className="text-2xl font-bold text-brand-blue">24/7</span>
                                    <span className="text-[10px] font-bold text-gray-500 uppercase">Delivery</span>
                                </div>
                                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center translate-y-8">
                                    <span className="text-2xl font-bold text-brand-blue">ISTQB</span>
                                    <span className="text-[10px] font-bold text-gray-500 uppercase">Certified</span>
                                </div>
                            </div>
                            {/* Decorative Blobs */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -mr-32 -mt-32"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100/50 rounded-full blur-3xl -ml-32 -mb-32"></div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 space-y-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            The Testriq Advantage: <span className="text-brand-blue">Proven Methodology</span>
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            With over three decades at the forefront of independent QA, our commitment to quality is ingrained in our DNA. We don&apos;t just test; we engineer trust.
                        </p>

                        <div className="space-y-6">
                            {advantages.map((adv, index) => (
                                <div key={index} className="flex gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        {adv.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-base font-bold text-gray-900 mb-1">{adv.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{adv.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShiftLeftAdvantageSection;
