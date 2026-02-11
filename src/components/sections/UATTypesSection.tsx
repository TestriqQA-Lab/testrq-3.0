"use client";

import React from "react";
import { motion } from "framer-motion";

const UATTypesSection: React.FC = () => {
    const types = [
        {
            title: "User Acceptance Testing (UAT)",
            def: "End-users validate business requirements",
            focus: "Business requirements, user workflows",
            when: "Before production deployment"
        },
        {
            title: "Operational Acceptance Testing (OAT)",
            def: "Operations teams validate system readiness",
            focus: "System operations, infrastructure, support",
            when: "Before production deployment"
        },
        {
            title: "Contract Acceptance Testing",
            def: "Validation against contractual requirements",
            focus: "Contract specifications, SLAs",
            when: "Project completion"
        },
        {
            title: "Regulation Acceptance Testing",
            def: "Validation against regulatory requirements",
            focus: "Compliance, regulatory standards",
            when: "Before production deployment"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-24 text-center">
                <div className="max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                        The <span className="text-blue-600 italic">Four Types</span> of Acceptance Testing
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Acceptance Testing encompasses four distinct types, each serving specific validation purposes in
                        ensuring your enterprise software is truly production-ready.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {types.map((type, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-left hover:shadow-xl hover:border-blue-400 transition-all group"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{type.title}</h3>
                                <span className="text-[10px] uppercase font-black bg-blue-100 text-blue-700 px-2 py-1 rounded">TYPE-0{idx + 1}</span>
                            </div>

                            <div className="space-y-4">
                                <div className="pb-3 border-b border-slate-200">
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Definition</p>
                                    <p className="text-gray-800 font-medium">{type.def}</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Primary Focus</p>
                                        <p className="text-gray-700 text-sm">{type.focus}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Schedule</p>
                                        <p className="text-gray-700 text-sm">{type.when}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UATTypesSection;
