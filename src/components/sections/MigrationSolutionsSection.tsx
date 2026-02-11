"use client";

import React from "react";
import { FaServer, FaCloud, FaDatabase, FaMobileAlt, FaRocket, FaShieldAlt, FaCogs, FaTools, FaFileAlt, FaLock, FaGlobe, FaSearch, FaProjectDiagram, FaTachometerAlt, FaSitemap } from "react-icons/fa";

const MigrationSolutionsSection: React.FC = () => {
    const solutions = [
        {
            icon: <FaServer className="w-6 h-6" />,
            title: "Enterprise Data Migration",
            description: "Ensuring accuracy and completeness for large-scale data transfers in critical business applications."
        },
        {
            icon: <FaCloud className="w-6 h-6" />,
            title: "Cloud Migration Strategy",
            description: "End-to-end testing for seamless transitions to public, private, or hybrid cloud environments."
        },
        {
            icon: <FaDatabase className="w-6 h-6" />,
            title: "DB Migration Validation",
            description: "Automated reconciliation to verify data consistency across diverse database platforms."
        },
        {
            icon: <FaMobileAlt className="w-6 h-6" />,
            title: "Post-Migration App QA",
            description: "Validating web and mobile app functionality and UX in the new migrated environment."
        },
        {
            icon: <FaRocket className="w-6 h-6" />,
            title: "Legacy to Cloud Testing",
            description: "Specialized testing to move outdated systems to modern cloud infrastructures securely."
        },
        {
            icon: <FaShieldAlt className="w-6 h-6" />,
            title: "ERP Migration Testing",
            description: "Expert testing for SAP, Oracle, and Microsoft Dynamics to ensure business process continuity."
        },
        {
            icon: <FaCogs className="w-6 h-6" />,
            title: "ETL Testing Services",
            description: "Ensuring accuracy and efficiency of Extract, Transform, Load processes for data warehouses."
        },
        {
            icon: <FaGlobe className="w-6 h-6" />,
            title: "SEO Migration Testing",
            description: "Protecting online visibility and search rankings during website platform changes."
        },
        {
            icon: <FaLock className="w-6 h-6" />,
            title: "Sensitive Data Managed QA",
            description: "Adhering to HIPAA and PCI-DSS for critical financial and healthcare data migrations."
        },
        {
            icon: <FaSitemap className="w-6 h-6" />,
            title: "Data Mapping & Schema",
            description: "Verifying correct transformation and alignment between source and target systems."
        }
    ];

    return (
        <section className="bg-slate-50 py-16 px-8 md:px-12 lg:px-24" id="solutions">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-[10px] font-bold uppercase tracking-widest">
                        Holistic Suite
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                        Our Comprehensive <span className="text-brand-blue">Migration Testing Solutions</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto font-medium">
                        Tailored services to handle the unique complexities of your migration project, regardless of scale.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {solutions.map((solution, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-brand-blue hover:shadow-lg transition-all duration-300 group flex flex-col items-center text-center"
                        >
                            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                                {solution.icon}
                            </div>
                            <h3 className="text-sm font-bold text-gray-900 mb-2 leading-tight">{solution.title}</h3>
                            <p className="text-gray-500 text-[11px] leading-relaxed">
                                {solution.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MigrationSolutionsSection;
