"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    FaLaptopCode,
    FaNetworkWired,
    FaMobileAlt,
    FaPlug,
    FaCloud,
    FaGlobe,
    FaUserLock,
    FaWifi,
    FaFileCode,
    FaTerminal,
    FaSearchPlus,
    FaShieldVirus
} from "react-icons/fa";

const SecurityTestingServicesGrid: React.FC = () => {
    const vaptServices = [
        { title: "Web Application Penetration Testing", icon: <FaLaptopCode /> },
        { title: "Network Penetration Testing Services", icon: <FaNetworkWired /> },
        { title: "Mobile App Security Testing", icon: <FaMobileAlt /> },
        { title: "API Security Testing Services", icon: <FaPlug /> },
        { title: "Cloud Security Assessment", icon: <FaCloud /> },
        { title: "External Penetration Testing", icon: <FaGlobe /> },
        { title: "Internal Penetration Testing", icon: <FaUserLock /> },
        { title: "Wireless Network Security Audit", icon: <FaWifi /> },
    ];

    const astServices = [
        { title: "Static Application Security Testing (SAST)", icon: <FaFileCode />, desc: "Analyzing source code for vulnerabilities." },
        { title: "Dynamic Application Security Testing (DAST)", icon: <FaTerminal />, desc: "Testing applications in running state." },
        { title: "Interactive Application Security Testing (IAST)", icon: <FaSearchPlus />, desc: "Combining SAST and DAST for accuracy." },
    ];

    return (
        <section className="py-24 px-8 md:px-12 lg:px-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Comprehensive <span className="text-brand-blue">Security Testing</span> Services
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                        Meticulously tailored to your unique organizational needs and threat profile.
                    </p>
                </div>

                {/* VAPT Section */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="h-10 w-2 bg-brand-blue rounded-full"></div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 italic">
                            1. Vulnerability Assessment and Penetration Testing (VAPT)
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {vaptServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 group hover:border-brand-blue transition-all"
                            >
                                <div className="text-2xl text-brand-blue p-3 bg-blue-50 rounded-xl group-hover:bg-brand-blue group-hover:text-white transition-colors">
                                    {service.icon}
                                </div>
                                <h4 className="font-bold text-gray-800 leading-snug">{service.title}</h4>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* AST Section */}
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <div className="flex items-center gap-4 mb-10">
                            <div className="h-10 w-2 bg-brand-blue rounded-full"></div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 italic">
                                2. Application Security Testing (AST)
                            </h3>
                        </div>
                        <div className="space-y-4">
                            {astServices.map((service, index) => (
                                <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 flex items-start gap-5 hover:shadow-md transition-shadow">
                                    <div className="text-2xl text-purple-600 p-3 bg-purple-50 rounded-xl">{service.icon}</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">{service.title}</h4>
                                        <p className="text-gray-600 text-sm">{service.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-4 mb-10">
                            <div className="h-10 w-2 bg-brand-blue rounded-full"></div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 italic">
                                3. Security Audit Services
                            </h3>
                        </div>
                        <div className="bg-slate-900 p-8 rounded-3xl text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 text-6xl text-white/5 group-hover:text-white/10 transition-colors">
                                <FaShieldVirus />
                            </div>
                            <ul className="space-y-6 relative z-10">
                                <li className="flex items-start gap-4">
                                    <div className="mt-1.5 h-2 w-2 bg-brand-blue rounded-full"></div>
                                    <div>
                                        <strong className="block text-lg">Infrastructure Security Audit</strong>
                                        <span className="text-gray-400 text-sm">Reviewing IT infrastructure for security gaps.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1.5 h-2 w-2 bg-brand-blue rounded-full"></div>
                                    <div>
                                        <strong className="block text-lg">Cyber Risk Assessment Services</strong>
                                        <span className="text-gray-400 text-sm">Identifying and evaluating potential cyber risks.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1.5 h-2 w-2 bg-brand-blue rounded-full"></div>
                                    <div>
                                        <strong className="block text-lg">Compliance Audits</strong>
                                        <span className="text-gray-400 text-sm">Ensuring adherence to GDPR, HIPAA, PCI-DSS, and SOC2.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecurityTestingServicesGrid;
