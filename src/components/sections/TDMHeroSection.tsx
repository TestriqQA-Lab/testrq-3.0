"use client";

import Link from "next/link";
import React from "react";
import { FaArrowRight, FaDatabase, FaHome, FaChevronRight } from "react-icons/fa";
import TDMAnimation from "./TDMAnimation";

const TDMHeroSection: React.FC = () => {
    return (
        <section className="bg-white text-black pt-8 pb-16 px-8 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-6">
                    <Link
                        href="/"
                        className="flex items-center gap-2 hover:text-[theme(color.brand.blue)] transition-colors"
                    >
                        <FaHome className="text-lg" />
                        Home
                    </Link>
                    <FaChevronRight className="text-xs text-gray-400" />
                    <span className="text-[theme(color.brand.blue)]">
                        Test Data Management Services
                    </span>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
                    {/* Left Content */}
                    <div className="flex flex-col items-center xl:items-start text-center xl:text-left mx-auto xl:mx-0">
                        <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                            <FaDatabase />
                            <span className="text-sm">TDM QA & Synthetic Data Specialists</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                            Test Data <span className="text-[theme(color.brand.blue)]">Management Services</span>
                            <br />
                            <span className="text-2xl sm:text-3xl md:text-4xl text-gray-700">Fueling Quality with Secure, Scalable Data</span>
                        </h1>

                        <p className="text-gray-700 text-base md:text-lg mb-6 max-w-xl">
                            In the hyper-regulated digital economy of 2026, data is both your greatest asset and your most significant liability. The ability to provision high-fidelity, secure test data is no longer just a technical requirement—it is a cornerstone of enterprise trust and agility.
                            <br /><br />
                            As a world-class independent QA and testing house with over 15 years of global delivery experience, Testriq provides high-impact <span className="text-[theme(color.brand.blue)] font-semibold">Test Data Management (TDM) services</span> engineered to secure your data and accelerate your innovation.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center xl:justify-start items-center gap-4 mb-8 w-full sm:w-auto">
                            <Link
                                href="/contact-us"
                                title="Get Started Today – Testriq QA Lab"
                                className="inline-flex items-center gap-2 py-3 px-5 min-h-[44px] min-w-[44px] bg-[theme(color.brand.blue)] text-white font-semibold text-base md:text-lg rounded-md hover:shadow-lg w-full sm:w-auto cursor-pointer transition-colors duration-300"
                            >
                                <span className="text-base">Get Started Today</span>
                                <FaArrowRight className="w-4 h-5" />
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center xl:justify-start gap-6">
                            {[
                                ["15+", "Years Experience"],
                                ["100%", "Compliance Rate"],
                                ["AI", "Synthetic Data"],
                                ["Self-Service", "Provisioning"],
                            ].map(([value, label], i) => (
                                <div key={i} className="text-center xl:text-left">
                                    <p className="text-[theme(color.brand.blue)] font-bold text-2xl md:text-3xl">
                                        {value}
                                    </p>
                                    <p className="text-gray-700 text-base">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - TDM Animation */}
                    <div className="relative">
                        <TDMAnimation />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TDMHeroSection;
