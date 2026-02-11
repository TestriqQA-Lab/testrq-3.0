"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaExclamationTriangle, FaShieldAlt, FaSyncAlt } from "react-icons/fa";

const MigrationCriticalitySection: React.FC = () => {
    const risks = [
        {
            icon: <FaExclamationTriangle className="w-6 h-6 text-brand-blue" />,
            title: "Data Loss Prevention",
            description: "Eliminate the risk of losing critical business information during the transition between systems."
        },
        {
            icon: <FaShieldAlt className="w-6 h-6 text-brand-blue" />,
            title: "Functional Integrity",
            description: "Verify that all application functions perform flawlessly in the new environment post-migration."
        },
        {
            icon: <FaSyncAlt className="w-6 h-6 text-brand-blue" />,
            title: "Business Continuity",
            description: "Minimize downtime and operational disruptions, ensuring a smooth transition for your users."
        }
    ];

    return (
        <section className="bg-slate-50 py-16 px-8 md:px-12 lg:px-24 border-y border-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            The Criticality of <span className="text-brand-blue italic underline decoration-blue-100 underline-offset-4">Flawless Migrations</span>
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            In an era of rapid digital transformation, complex migrations—moving data, applications, and entire systems to new platforms—are fraught with risks like data loss and functional disruptions.
                        </p>
                        <p className="text-gray-600">
                            Testriq specializes in ensuring your migrations are seamless, secure, and successful. We provide comprehensive Data Migration Testing, Cloud Migration Testing Services, and Application Migration Testing Solutions that safeguard your assets and maintain business continuity.
                        </p>

                        <div className="pt-4 flex items-center gap-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-brand-blue leading-none">30+</div>
                                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Years Experience</div>
                            </div>
                            <div className="w-px h-10 bg-gray-200"></div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-brand-blue leading-none">Global</div>
                                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Independent QA</div>
                            </div>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-1 gap-6">
                        {risks.map((risk, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ x: 10 }}
                                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-6 items-start group hover:border-brand-blue transition-colors"
                            >
                                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                                    {risk.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{risk.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{risk.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MigrationCriticalitySection;
