"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaTools, FaUniversalAccess, FaUserCheck, FaCode } from "react-icons/fa";

const AccessibilityProcessSection: React.FC = () => {
    const pillars = [
        {
            icon: FaGraduationCap,
            title: "Deep Understanding of Standards",
            text: "Expert knowledge of WCAG 2.1 AA standards, Section 508, and other global accessibility guidelines."
        },
        {
            icon: FaTools,
            title: "Comprehensive Testing Approach",
            text: "A balanced blend of Automated solutions (WAVE, Axe) and Manual testing by certified experts."
        },
        {
            icon: FaUniversalAccess,
            title: "Assistive Technology Proficiency",
            text: "Extensive experience with various tools, including JAWS and NVDA screen reader compatibility testing."
        },
        {
            icon: FaUserCheck,
            title: "Focus on UX for Disabled Users",
            text: "Beyond compliance, we prioritize the real-world experience of users with diverse needs."
        },
        {
            icon: FaCode,
            title: "Technical Depth",
            text: "Meticulous analysis of Semantic HTML, ARIA roles, Keyboard navigation, and Color contrast analysis."
        }
    ];

    return (
        <section className="py-24 bg-brand-blue text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-5 transform skew-x-12 translate-x-1/2"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                            The Testriq <span className="text-blue-300">Advantage</span>: Unparalleled Expertise in Digital Accessibility
                        </h2>
                        <p className="text-xl text-blue-100 leading-relaxed mb-10">
                            With over three decades at the forefront of independent QA and testing, Testriq brings unparalleled Experience, Expertise, Authoritativeness, and Trustworthiness to the field of digital accessibility.
                        </p>
                        <div className="inline-block px-8 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                            <span className="font-bold text-2xl block text-white">15+ Years</span>
                            <span className="text-blue-200 text-sm italic">Woven into every service we provide</span>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {pillars.map((pillar, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex gap-6 p-6 rounded-3xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-300/20 flex items-center justify-center">
                                    <pillar.icon className="text-2xl text-blue-300" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
                                    <p className="text-blue-100/80 leading-relaxed">{pillar.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AccessibilityProcessSection;
