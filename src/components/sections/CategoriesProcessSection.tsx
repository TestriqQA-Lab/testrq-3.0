"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    ClipboardList,
    FileText,
    PenTool,
    Play,
    BarChart3,
    RefreshCw,
} from "lucide-react";

interface ProcessStep {
    icon: React.ReactNode;
    title: string;
    description: string;
    color: string;
}

const processSteps: ProcessStep[] = [
    {
        icon: <ClipboardList className="w-6 h-6" />,
        title: "Requirement Analysis",
        description: "Deep dive into your testing needs and business objectives",
        color: "from-blue-500 to-blue-600",
    },
    {
        icon: <FileText className="w-6 h-6" />,
        title: "Test Planning",
        description: "Strategic test plan aligned with your delivery timeline",
        color: "from-indigo-500 to-indigo-600",
    },
    {
        icon: <PenTool className="w-6 h-6" />,
        title: "Test Design",
        description: "Comprehensive test cases covering all scenarios",
        color: "from-violet-500 to-violet-600",
    },
    {
        icon: <Play className="w-6 h-6" />,
        title: "Execution",
        description: "Systematic testing with real-time defect tracking",
        color: "from-purple-500 to-purple-600",
    },
    {
        icon: <BarChart3 className="w-6 h-6" />,
        title: "Reporting",
        description: "Detailed reports with actionable insights",
        color: "from-fuchsia-500 to-fuchsia-600",
    },
    {
        icon: <RefreshCw className="w-6 h-6" />,
        title: "Continuous Improvement",
        description: "Ongoing optimization of testing processes",
        color: "from-pink-500 to-pink-600",
    },
];

const CategoriesProcessSection: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">
                        <RefreshCw className="w-4 h-4" />
                        Our Process
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                        Proven Testing{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            Methodology
                        </span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Our systematic approach ensures comprehensive coverage and reliable
                        results for every project.
                    </p>
                </motion.div>

                {/* Process Steps - Desktop */}
                <div className="hidden lg:block relative">
                    {/* Connector Line */}
                    <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20" />

                    <div className="grid grid-cols-6 gap-4">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative group"
                            >
                                {/* Step Number Badge */}
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rounded-full border-2 border-slate-200 flex items-center justify-center text-xs font-bold text-slate-600 z-10 group-hover:border-blue-500 group-hover:text-blue-600 transition-colors">
                                    {index + 1}
                                </div>

                                {/* Card */}
                                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 mt-6 h-full">
                                    {/* Icon */}
                                    <div
                                        className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        {step.icon}
                                    </div>

                                    <h3 className="text-base font-bold text-slate-900 mb-2 leading-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Process Steps - Mobile/Tablet */}
                <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex items-start gap-4">
                                {/* Step Number */}
                                <div className="flex-shrink-0 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-sm font-bold text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                                    {index + 1}
                                </div>

                                <div className="flex-1">
                                    {/* Icon */}
                                    <div
                                        className={`w-10 h-10 bg-gradient-to-br ${step.color} rounded-lg flex items-center justify-center text-white mb-3`}
                                    >
                                        {step.icon}
                                    </div>

                                    <h3 className="text-base font-bold text-slate-900 mb-1">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-slate-500">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoriesProcessSection;
