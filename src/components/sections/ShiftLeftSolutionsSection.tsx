"use client";

import React from "react";
import { FaUsers, FaCogs, FaProjectDiagram, FaShieldAlt, FaTachometerAlt, FaRoad, FaKeyboard, FaTerminal, FaNetworkWired } from "react-icons/fa";

const ShiftLeftSolutionsSection: React.FC = () => {
    const solutions = [
        {
            icon: <FaUsers className="w-6 h-6" />,
            title: "Agile & Scrum QA",
            description: "Embedding QA specialists directly into sprints to provide immediate feedback and prevent defects at the source."
        },
        {
            icon: <FaNetworkWired className="w-6 h-6" />,
            title: "DevOps Integration",
            description: "Integrating automated testing into CI/CD pipelines to ensure continuous quality and rapid, reliable deployments."
        },
        {
            icon: <FaTerminal className="w-6 h-6" />,
            title: "Automated Shift-Left",
            description: "Implementing intelligent automation frameworks that execute tests efficiently and provide instant feedback."
        },
        {
            icon: <FaShieldAlt className="w-6 h-6" />,
            title: "Security & DevSecOps",
            description: "Proactively identifying vulnerabilities early in the development process with a secure-by-design approach."
        },
        {
            icon: <FaTachometerAlt className="w-6 h-6" />,
            title: "Performance & Scalability",
            description: "Assessing application performance under anticipated loads long before deployment to prevent bottlenecks."
        },
        {
            icon: <FaRoad className="w-6 h-6" />,
            title: "Strategy & Roadmap",
            description: "Consulting to develop tailored shift-left strategies that align with your business and technical landscape."
        },
        {
            icon: <FaKeyboard className="w-6 h-6" />,
            title: "TDD & BDD Coaching",
            description: "Empowering developers with unit testing, Test-Driven Development, and Behavior-Driven Development skills."
        },
        {
            icon: <FaProjectDiagram className="w-6 h-6" />,
            title: "Microservices Testing",
            description: "Early API and contract testing to validate service functionality in complex distributed architectures."
        }
    ];

    return (
        <section className="bg-slate-50 py-16 px-8 md:px-12 lg:px-24" id="solutions">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-[10px] font-bold uppercase tracking-widest">
                        Comprehensive Suite
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                        Our Holistic <span className="text-brand-blue">Shift-Left Solutions</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Testriq offers a complete ecosystem designed to seamlessly integrate quality into every phase of your software lifecycle.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {solutions.map((solution, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-brand-blue hover:shadow-lg transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-brand-blue group-hover:text-white transition-colors rotate-3 group-hover:rotate-0">
                                {solution.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{solution.title}</h3>
                            <p className="text-gray-500 text-xs leading-relaxed">
                                {solution.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShiftLeftSolutionsSection;
