"use client";

import React from "react";
import { FaClipboardCheck, FaPlay, FaFlagCheckered, FaArrowDown } from "react-icons/fa";

const AdHocTestingStrategy: React.FC = () => {
    const phases = [
        {
            icon: <FaClipboardCheck />,
            title: "Phase 1: Rapid Onboarding",
            subtitle: "3-6 Hours",
            tasks: [
                "Quick review of application architecture",
                "Identifying high-risk modules and dependencies",
                "Establishing testing boundaries and goals",
                "Assigning top-tier subject matter experts",
            ],
            color: "blue"
        },
        {
            icon: <FaPlay />,
            title: "Phase 2: Focused Execution",
            subtitle: "On-Demand Duration",
            tasks: [
                "Deploying error-guessing and monkey testing",
                "Buddy testing with your engineering team",
                "Real-time bug escalation and screen captures",
                "Continuous feedback through Slack/Teams",
            ],
            color: "indigo"
        },
        {
            icon: <FaFlagCheckered />,
            title: "Phase 3: Results & Debrief",
            subtitle: "Immediate",
            tasks: [
                "Comprehensive bug reports with reproduction steps",
                "Severity and impact analysis for each finding",
                "Strategic recommendations for formal test suites",
                "Post-testing walkthrough with stakeholders",
            ],
            color: "brand-blue"
        }
    ];

    return (
        <section className="py-20 px-8 md:px-12 lg:px-24 bg-gray-900 text-white relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[120px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-indigo-600/10 blur-[120px] -z-10"></div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Testriq&#39;s <span className="text-blue-400">Ad-Hoc Approach</span></h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        We skip the heavy documentation to deliver rapid insight when you need it most.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 relative">
                    {/* Connecting arrows for desktop */}
                    <div className="hidden lg:block absolute top-[2.5rem] left-[30%] text-blue-500/30 text-2xl animate-pulse">
                        <FaArrowDown className="-rotate-90 scale-x-150" />
                    </div>
                    <div className="hidden lg:block absolute top-[2.5rem] left-[63%] text-blue-500/30 text-2xl animate-pulse">
                        <FaArrowDown className="-rotate-90 scale-x-150" />
                    </div>

                    {phases.map((phase, index) => (
                        <div key={index} className="flex flex-col h-full bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/10 transition-colors duration-300">
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-blue-400 border border-blue-400/30 text-2xl mb-8`}>
                                {phase.icon}
                            </div>

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold mb-2">{phase.title}</h3>
                                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-wider">
                                    {phase.subtitle}
                                </span>
                            </div>

                            <ul className="space-y-4 flex-1">
                                {phase.tasks.map((task, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                                        {task}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-8 bg-blue-500 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left">
                        <h4 className="text-2xl font-bold mb-2">Need immediate project mobilization?</h4>
                        <p className="text-blue-100">Our team can be onboarded and executing within hours of your request.</p>
                    </div>
                    <button className="px-10 py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-lg shadow-blue-900/20">
                        Initiate Phase 1
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AdHocTestingStrategy;
