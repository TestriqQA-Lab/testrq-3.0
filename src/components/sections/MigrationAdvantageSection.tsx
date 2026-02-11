"use client";

import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const MigrationAdvantageSection: React.FC = () => {
    const advantages = [
        {
            title: "Deep Domain Knowledge",
            description: "Profound understanding of industry verticals and their specific data migration challenges."
        },
        {
            title: "Advanced Tooling",
            description: "Leveraging Selenium, Appium, Cypress, and custom frameworks for efficient testing."
        },
        {
            title: "Data Integrity Focus",
            description: "Meticulous attention to Reconciliation and Data Accuracy testing processes."
        },
        {
            title: "Risk Mitigation",
            description: "Strategic use of Canary and Blue-Green deployments to reduce go-live risks."
        }
    ];

    return (
        <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2 relative">
                        <div className="w-full aspect-[4/3] bg-blue-50 rounded-[3rem] relative overflow-hidden flex flex-col justify-center p-12">
                            <div className="space-y-8 relative z-10">
                                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                                    <div className="text-brand-blue font-bold text-3xl mb-1">30+ Years</div>
                                    <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">At the Forefront of QA</div>
                                </div>
                                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 ml-12">
                                    <div className="text-brand-blue font-bold text-3xl mb-1">Expertise</div>
                                    <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">Precision & Trust</div>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -mr-32 -mt-32"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100/50 rounded-full blur-3xl -ml-32 -mb-32"></div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 space-y-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            The Testriq Advantage: <span className="text-brand-blue underline decoration-blue-100 underline-offset-4">Precision and Trust</span>
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            With over three decades as an independent testing house, we bring unparalleled Experience, Expertise, Authoritativeness, and Trustworthiness to every migration.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {advantages.map((adv, index) => (
                                <div key={index} className="space-y-2">
                                    <div className="flex items-center gap-2 text-brand-blue">
                                        <FaCheckCircle className="w-4 h-4" />
                                        <h3 className="font-bold text-gray-900">{adv.title}</h3>
                                    </div>
                                    <p className="text-gray-500 text-xs leading-relaxed pl-6">{adv.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MigrationAdvantageSection;
