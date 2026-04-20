"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    Award,
    BadgeCheck,
    Cpu,
    ShieldCheck,
    Users2,
    Layers,
} from "lucide-react";

interface FeatureItem {
    icon: React.ReactNode;
    title: string;
    description: string;
    gradient: string;
}

const features: FeatureItem[] = [
    {
        icon: <Award className="w-6 h-6" />,
        title: "16 Years Expertise",
        description:
            "Industry-leading experience across diverse domains and technologies",
        gradient: "from-amber-500 to-orange-500",
    },
    {
        icon: <BadgeCheck className="w-6 h-6" />,
        title: "Certified QA Engineers",
        description:
            "ISTQB certified professionals ensuring highest quality standards",
        gradient: "from-blue-500 to-indigo-500",
    },
    {
        icon: <Cpu className="w-6 h-6" />,
        title: "Automation First",
        description:
            "Modern automation frameworks for faster, reliable testing cycles",
        gradient: "from-violet-500 to-purple-500",
    },
    {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: "Security Focused",
        description:
            "Comprehensive security testing integrated into every project",
        gradient: "from-emerald-500 to-teal-500",
    },
    {
        icon: <Users2 className="w-6 h-6" />,
        title: "Scalable Teams",
        description:
            "Flexible team scaling to match your project requirements",
        gradient: "from-pink-500 to-rose-500",
    },
    {
        icon: <Layers className="w-6 h-6" />,
        title: "Proven Frameworks",
        description:
            "Battle-tested methodologies refined across 500+ projects",
        gradient: "from-cyan-500 to-blue-500",
    },
];

const CategoriesWhyChooseUs: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-full text-sm font-semibold mb-4">
                        <Award className="w-4 h-4" />
                        Why Choose Us
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                        The Testriq{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                            Advantage
                        </span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        What sets us apart as your trusted software testing partner
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative"
                        >
                            {/* Hover glow effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

                            <div className="relative bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-300 h-full">
                                {/* Icon */}
                                <div
                                    className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                                >
                                    {feature.icon}
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-500 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoriesWhyChooseUs;
