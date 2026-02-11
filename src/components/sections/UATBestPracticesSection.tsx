"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaClock, FaBullseye, FaChartBar, FaGraduationCap, FaLayerGroup, FaFileSignature, FaSearchPlus } from "react-icons/fa";

const UATBestPracticesSection: React.FC = () => {
    const practices = [
        {
            icon: <FaClock />,
            title: "Involve Users Early",
            desc: "Successful UAT requires early involvement in requirements and design reviews, not just at the final stage."
        },
        {
            icon: <FaBullseye />,
            title: "Clear Acceptance Criteria",
            desc: "Define specific, measurable success metrics aligned with business requirements before testing begins."
        },
        {
            icon: <FaLayerGroup />,
            title: "Realistic Scenarios & Data",
            desc: "Use actual (anonymized) business data and end-to-end workflows to validate real-world usage."
        },
        {
            icon: <FaGraduationCap />,
            title: "Adequate Training",
            desc: "Provide comprehensive training to end-users on the software and the UAT documentation process."
        },
        {
            icon: <FaSearchPlus />,
            title: "Structured Issue Tracking",
            desc: "Standardize documentation and prioritize issues based strictly on business impact and operations."
        },
        {
            icon: <FaChartBar />,
            title: "Business Process Focus",
            desc: "Test complete processes and their variations rather than just isolated technical features."
        },
        {
            icon: <FaFileSignature />,
            title: "Formal Sign-Off",
            desc: "Ensure all activities and risk acceptances are documented for a confident deployment decision."
        }
    ];

    return (
        <section className="py-24 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-4 sticky top-24">
                        <div className="inline-block bg-blue-600 text-white text-[10px] font-black uppercase tracking-[3px] px-3 py-1 rounded-md mb-6">
                            Best Practices
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight leading-tight">
                            Ensuring <span className="text-blue-500 italic">Success</span> through Proven Methods
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                            Organizations can maximize the effectiveness of their user acceptance testing by following these
                            seven industry-leading standards.
                        </p>
                        <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl">
                            <p className="text-sm italic text-slate-300">
                                &quot;Rushing UAT often results in missed business process issues that are 10x more costly to fix after production go-live.&quot;
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {practices.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`group p-8 rounded-3xl border transition-all duration-300 ${idx === 0 ? 'sm:col-span-2 bg-blue-600 border-blue-500' : 'bg-slate-800/50 border-slate-700 hover:border-blue-500'}`}
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-6 transition-transform group-hover:scale-110 ${idx === 0 ? 'bg-white text-blue-600' : 'bg-blue-600/20 text-blue-400'}`}>
                                    {item.icon}
                                </div>
                                <h3 className={`text-xl font-bold mb-3 ${idx === 0 ? 'text-white' : 'text-slate-100'}`}>{item.title}</h3>
                                <p className={`text-sm leading-relaxed ${idx === 0 ? 'text-blue-50' : 'text-slate-400 font-medium'}`}>
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UATBestPracticesSection;
