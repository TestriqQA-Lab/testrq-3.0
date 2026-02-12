"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    FaDesktop, FaMobile, FaExternalLinkAlt, FaGlobe, FaWindows,
    FaMicrochip, FaTag, FaAward, FaShoppingCart, FaCloud,
    FaUserCog, FaCubes, FaRocket, FaTools, FaLaptopCode, FaIndustry, FaWifi
} from "react-icons/fa";

const CompatibilityTestingServicesSection: React.FC = () => {
    const services = [
        { icon: <FaDesktop />, title: "Website Compatibility", desc: "Flawless function across browsers, OS, and screen resolutions." },
        { icon: <FaMobile />, title: "Mobile App Compatibility", desc: "UI and performance validation on diverse devices and network conditions." },
        { icon: <FaExternalLinkAlt />, title: "Outsourced Testing", desc: "Dedicated expert teams managing your end-to-end compatibility needs." },
        { icon: <FaGlobe />, title: "Browser Compatibility", desc: "Rigorous testing across Chrome, Firefox, Safari, Edge, and more." },
        { icon: <FaWindows />, title: "OS Compatibility", desc: "Verification across Windows, macOS, Linux, Android, and iOS." },
        { icon: <FaMicrochip />, title: "Hardware Compatibility", desc: "Ensuring seamless integration with diverse hardware and peripherals." },
        { icon: <FaTag />, title: "Competitive Pricing", desc: "Transparent and tailored models for your project scope." },
        { icon: <FaAward />, title: "Top-Tier Expertise", desc: "Consistently ranked among the best compatibility testing companies." },
        { icon: <FaShoppingCart />, title: "E-commerce Testing", desc: "Consistent shopping experiences across every customer touchpoint." },
        { icon: <FaCloud />, title: "Cloud-Based Testing", desc: "Scalable infrastructure for broad-ranging compatibility checks." },
        { icon: <FaUserCog />, title: "Managed Services", desc: "End-to-end management from strategy to continuous monitoring." },
        { icon: <FaCubes />, title: "SaaS Platform Testing", desc: "Ensuring continuous reliability for Software-as-a-Service apps." },
        { icon: <FaRocket />, title: "CTaaS (Testing as a Service)", desc: "Flexible, on-demand expertise to support your ongoing needs." },
        { icon: <FaTools />, title: "Regression Integration", desc: "Preventing side effects with combined parity and health checks." },
        { icon: <FaLaptopCode />, title: "Manual & Automated", desc: "The perfect blend of human meticulousness and rapid automation." },
        { icon: <FaIndustry />, title: "Enterprise Software", desc: "Reliability across varied and complex corporate IT infrastructures." },
        { icon: <FaWifi />, title: "IoT Device Testing", desc: "Validating interoperability within diverse device ecosystems." },
    ];

    return (
        <section className="py-20 px-8 md:px-12 lg:px-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Comprehensive <span className="text-brand-blue">Compatibility Solutions</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Your Partner for Universal Performance. We offer a holistic suite of services tailored to the unique demands of your software.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                            className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300"
                        >
                            <div className="text-brand-blue text-2xl mb-4 bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center">
                                {service.icon}
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2 truncate">{service.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-6 bg-brand-blue rounded-2xl shadow-lg flex flex-col items-center justify-center text-center space-y-4 col-span-full xl:col-span-1"
                    >
                        <h4 className="text-white font-bold text-xl">Custom Requirements?</h4>
                        <p className="text-blue-50 text-sm">We tailor our strategy to your specific platform matrix.</p>
                        <button className="bg-white text-brand-blue px-6 py-2 rounded-full font-bold text-sm hover:bg-blue-50 transition-colors">
                            Talk to an Expert
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CompatibilityTestingServicesSection;
