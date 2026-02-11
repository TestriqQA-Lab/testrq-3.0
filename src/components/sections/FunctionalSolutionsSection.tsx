"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaMobileAlt, FaUsers, FaBuilding, FaRocket, FaExchangeAlt, FaShoppingCart, FaCloud, FaHospital, FaMoneyBillWave, FaCogs, FaProjectDiagram, FaServer, FaUndo, FaHandSparkles, FaMicrochip, FaDatabase, FaNetworkWired } from "react-icons/fa";

const FunctionalSolutionsSection: React.FC = () => {
    const services = [
        { icon: <FaGlobe />, title: "Web Applications", desc: "Robust performance across all web platforms." },
        { icon: <FaMobileAlt />, title: "Mobile Apps", desc: "Validation on diverse mobile devices & OS." },
        { icon: <FaUsers />, title: "Outsourced QA", desc: "Dedicated expert teams for your testing needs." },
        { icon: <FaBuilding />, title: "Enterprise Software", desc: "Stringent business requirements validation." },
        { icon: <FaRocket />, title: "Startups", desc: "Agile solutions for high-quality quick launches." },
        { icon: <FaExchangeAlt />, title: "End-to-End Solutions", desc: "Flow coverage from UI to database." },
        { icon: <FaShoppingCart />, title: "E-commerce", desc: "Catalogs, carts, and payment gateway checks." },
        { icon: <FaCloud />, title: "Cloud-Based", desc: "Scalable testing for cloud-native apps." },
        { icon: <FaHospital />, title: "Healthcare", desc: "Compliance with medical software regulations." },
        { icon: <FaMoneyBillWave />, title: "Financial", desc: "Accuracy and security for banking/trading apps." },
        { icon: <FaCogs />, title: "Managed Services", desc: "Complete oversight from planning to reporting." },
        { icon: <FaProjectDiagram />, title: "FTaaS", desc: "Flexible, on-demand testing resources." },
        { icon: <FaServer />, title: "SaaS Platforms", desc: "Continuous quality for service platforms." },
        { icon: <FaUndo />, title: "Regression + Functional", desc: "Prevent unintended side effects of changes." },
        { icon: <FaHandSparkles />, title: "Manual Validation", desc: "Expert human testers meticulous exploration." },
        { icon: <FaMicrochip />, title: "API Testing", desc: "Reliability and security of interfaces." },
        { icon: <FaDatabase />, title: "ERP Systems", desc: "Accurate operation of complex ERP systems." },
        { icon: <FaNetworkWired />, title: "IoT Devices", desc: "Connectivity of interconnected device ecosystems." }
    ];

    return (
        <section className="py-24 bg-slate-900 border-y border-white/5 relative overflow-hidden">
            {/* Background Decorative Rings */}
            <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-brand-blue/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        className="text-4xl lg:text-6xl font-black text-white mb-6 tracking-tighter"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Comprehensive <span className="text-brand-blue">Functional</span> Solutions
                    </motion.h2>
                    <motion.p
                        className="text-gray-400 text-lg max-w-2xl mx-auto font-medium"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        We offer a holistic suite of services designed to integrate seamlessly into your development lifecycle, ensuring every aspect Functions perfectly.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            className="group p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 hover:border-brand-blue/30 transition-all duration-500"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (idx % 3) * 0.1 }}
                        >
                            <div className="w-14 h-14 bg-brand-blue/10 text-brand-blue rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shadow-xl shadow-brand-blue/0 group-hover:shadow-brand-blue/20">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-black text-white mb-3 uppercase tracking-tighter">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 text-sm font-medium leading-relaxed">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FunctionalSolutionsSection;
