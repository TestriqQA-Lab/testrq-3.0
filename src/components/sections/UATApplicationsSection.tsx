"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaRocket, FaMobileAlt, FaCloudUploadAlt, FaCogs, FaShieldAlt, FaShoppingCart, FaUniversity } from "react-icons/fa";

const UATApplicationsSection: React.FC = () => {
    const apps = [
        {
            title: "Enterprise Software",
            icon: <FaBuilding />,
            desc: "Complex business processes requiring deep multi-unit validation and formal deployment governance.",
            impact: "Identified 12 critical issues for a financial system before disruption."
        },
        {
            title: "Startup Solutions",
            icon: <FaRocket />,
            desc: "Rapid, cost-effective validation focused on critical paths and usability for product-market fit.",
            impact: "Enabled confident market launch by fixing 5 key usability hurdles."
        },
        {
            title: "Mobile Applications",
            icon: <FaMobileAlt />,
            desc: "Specific validation across devices, network conditions, and platform-specific workflows.",
            impact: "Ensured high app store ratings by resolving device-specific workflow bugs."
        },
        {
            title: "Cloud Migrations",
            icon: <FaCloudUploadAlt />,
            desc: "Validating data integrity, process optimization, and operational readiness during digital transformation.",
            impact: "Ensured a smooth 100% data integrity transition from legacy to cloud ERP."
        },
        {
            title: "ERP & CRM Systems",
            icon: <FaCogs />,
            desc: "Specialized UAT for SAP, Oracle, and Salesforce to validate configurations and integrations.",
            impact: "Successful Salesforce adoption through deep business process validation."
        },
        {
            title: "Regulated Applications",
            icon: <FaShieldAlt />,
            desc: "Validation for HIPAA, GDPR, and PCI-DSS compliance in secure healthcare and financial sectors.",
            impact: "Confirmed 100% HIPAA compliance for a major hospital system migration."
        },
        {
            title: "E-Commerce Platforms",
            icon: <FaShoppingCart />,
            desc: "End-to-end checkout, payment integration, and inventory management validation.",
            impact: "Record-breaking holiday sales with zero technical issues during peak load."
        },
        {
            title: "Public Sector Systems",
            icon: <FaUniversity />,
            desc: "Strict accessibility, security, and transparency validation for government applications.",
            impact: "Successful public launch of a benefits system with full accessibility compliance."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-24">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                        Industry-Specific <span className="text-blue-600 italic">Implementations</span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        From complex ERP migrations to rapid-growth mobile apps, our professional UAT testing services
                        adapt to the specific challenges of your sector.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {apps.map((app, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col hover:bg-white hover:shadow-xl hover:border-blue-400 transition-all group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                {app.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">{app.title}</h3>
                            <p className="text-sm text-gray-600 mb-4 flex-grow leading-relaxed font-medium">
                                {app.desc}
                            </p>
                            <div className="bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-widest px-3 py-2 rounded-lg inline-flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                                Impact: {app.impact}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UATApplicationsSection;
