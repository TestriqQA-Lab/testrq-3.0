"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Alignment & Integration",
        description: "We map our QA teams to your specific time zones and integrate them into your existing communication and project management tools like Slack, Jira, and Teams."
    },
    {
        number: "02",
        title: "Synchronous Sprint Execution",
        description: "Our testers work alongside your developers, providing immediate feedback on features as they are built, reducing rework and accelerating the dev cycle."
    },
    {
        number: "03",
        title: "Seamless Global Handoff",
        description: "For follow-the-sun models, we use standardized reporting and handoff protocols to ensure no information is lost between global shifts."
    },
    {
        number: "04",
        title: "Real-Time Reporting & Dashboards",
        description: "We provide live visibility into your quality metrics, allowing stakeholders to make data-driven decisions in real-time, regardless of the sun's position."
    },
    {
        number: "05",
        title: "Continuous Process Optimization",
        description: "We regularly review our collaboration workflows to identify and eliminate any remaining communication bottlenecks, ensuring peak efficiency."
    }
];

const TimezoneMethodology: React.FC = () => {
    return (
        <section className="py-24 px-8 md:px-12 lg:px-24 bg-slate-900 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto relative">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Our Methodology: The <span className="text-blue-400">Synchronous Quality Lifecycle</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        We follow a proven process to ensure total alignment across time zones, transforming geographic distance into a strategic advantage.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical line for mobile, horizontal for desktop */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 md:-translate-x-1/2 hidden md:block" />

                    <div className="space-y-12 md:space-y-24">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                <div className="md:w-1/2 flex justify-center md:justify-end md:px-12">
                                    <div className={`text-right ${index % 2 !== 0 ? 'md:text-left' : 'md:text-right'}`}>
                                        <span className="text-5xl md:text-7xl font-black text-slate-800 mb-4 block leading-none">
                                            {step.number}
                                        </span>
                                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue-400">{step.title}</h3>
                                        <p className="text-slate-400 text-lg leading-relaxed max-w-md ml-auto mr-auto md:ml-0 md:mr-0">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="relative z-10 flex items-center justify-center">
                                    <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] border-4 border-slate-900" />
                                </div>

                                <div className="md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimezoneMethodology;
