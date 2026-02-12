"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaRocket, FaUserCheck } from "react-icons/fa";

const ShiftLeftImperativeSection: React.FC = () => {
    const cards = [
        {
            icon: <FaShieldAlt className="w-6 h-6 text-brand-blue" />,
            title: "Embedded Quality",
            description: "Embed quality earlier in the development lifecycle to prevent costly delays and escalating remediation expenses."
        },
        {
            icon: <FaRocket className="w-6 h-6 text-brand-blue" />,
            title: "Transformative Speed",
            description: "Empower your teams to deliver robust, high-performing software with unprecedented speed and efficiency."
        },
        {
            icon: <FaUserCheck className="w-6 h-6 text-brand-blue" />,
            title: "Enhanced Experience",
            description: "Protect user experiences by identifying potential issues long before they reach production."
        }
    ];

    return (
        <section className="bg-slate-50 py-16 px-8 md:px-12 lg:px-24 border-y border-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            The Imperative of <span className="text-brand-blue">Shifting Left</span>
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            In today&apos;s fast-paced software development landscape, the traditional approach to quality assurance often leads to costly delays and compromised user experiences.
                        </p>
                        <p className="text-gray-600">
                            Testriq champions a transformative Shift-Left approach that redefines how quality is achieved. By integrating testing activities from the initial stages of design, we minimize the accumulation of technical debt.
                        </p>

                        <div className="pt-4 flex items-center gap-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center overflow-hidden">
                                        <img src={`https://i.pravatar.cc/150?u=${i + 20}`} alt="Expert" />
                                    </div>
                                ))}
                            </div>
                            <div className="text-sm">
                                <div className="font-bold text-gray-900">15+ Years of Experience</div>
                                <div className="text-gray-500">Global Independent QA House</div>
                            </div>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-1 gap-6">
                        {cards.map((card, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ x: 10 }}
                                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-6 items-start"
                            >
                                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                                    {card.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShiftLeftImperativeSection;
