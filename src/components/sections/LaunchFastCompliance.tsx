"use client";

import React from "react";
import { FaGlobe, FaShieldAlt, FaCertificate } from "react-icons/fa";

const complianceItems = [
    {
        title: "ISO/IEC TR 29119-6:2021",
        description: "We follow the ISO/IEC TR 29119-6:2021 guidelines for Agile testing. This ensures your lightweight processes still meet international quality benchmarks.",
        icon: <FaCertificate className="text-3xl text-blue-600" />,
    },
    {
        title: "SOC2 & GDPR Readiness",
        description: "We help you implement data privacy checks during the MVP stage. This proactive testing ensures you are prepared for future enterprise-level security audits.",
        icon: <FaShieldAlt className="text-3xl text-purple-600" />,
    },
    {
        title: "ISO 9001 Alignment",
        description: "We maintain a consistent quality management system. This provides the reliability of a global consulting firm with the speed of a startup partner.",
        icon: <FaGlobe className="text-3xl text-emerald-600" />,
    },
];

const LaunchFastCompliance: React.FC = () => {
    return (
        <section className="py-20 px-8 md:px-12 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="bg-gray-900 rounded-[3rem] p-12 md:p-20 text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-blue/10 to-transparent pointer-events-none"></div>

                    <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
                                Global Standards & <br />
                                <span className="text-brand-blue">Compliance for Global Startups</span>
                            </h2>
                            <p className="text-xl text-gray-400 leading-relaxed mb-10">
                                To compete in the US, UK, and EU markets, startups must treat compliance as a feature, not an afterthought. Our Rapid QA Testing Services integrate global security and quality standards.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {complianceItems.map((item, index) => (
                                <div key={index} className="flex gap-6 group">
                                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-brand-blue transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LaunchFastCompliance;
