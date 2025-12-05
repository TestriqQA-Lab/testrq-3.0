"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
    FaCogs,
    FaRocket,
    FaBolt,
    FaCheckCircle,
    FaHome,
    FaChevronRight,
    FaCloud,
    FaServer,
    FaDatabase,
    FaCode,
    FaUserTie,
    FaCertificate,
} from "react-icons/fa";
import Lightbox from "../VideoLightBox";

const SapTestingHeroSection: React.FC = () => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    // Function to handle the lightbox open/close
    const openLightbox = () => {
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
    };
    return (
        <section className="relative pt-8 pb-16 px-6 sm:px-6 md:px-12 lg:px-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
            {/* Background Elements */}
            <div className="hidden lg:block absolute top-20 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-24 h-24 bg-indigo-200 rounded-full opacity-30 animate-bounce"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-200 rounded-full opacity-25"></div>

            <div className="max-w-7xl mx-auto">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-6">
                    <Link
                        href="/"
                        className="flex items-center gap-2 hover:text-brand-blue transition-colors"
                    >
                        <FaHome className="text-lg" />
                        Home
                    </Link>
                    <FaChevronRight className="text-xs text-gray-400" />
                    <span className="text-brand-blue">
                        SAP Testing
                    </span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Side - Content */}
                    <div className="space-y-4">
                        <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                            <FaServer />
                            <span className="text-sm">Stop SAP Downtime. Start with QA Certainty.</span>
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            <span className="text-brand-blue">SAP Testing Services:</span> Accelerated QA for Seamless S/4HANA Migrations & Upgrades
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            SAP deployments and upgrades are complex. A single integration failure or patch error can halt your entire business. Testriq provides independent, end-to-end SAP Quality Assurance to ensure your mission-critical applications are stable, compliant, and performant from day one.
                        </p>

                        {/* Key Differentiators */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                            <div className="flex items-start gap-3">
                                <div className="mt-1 text-brand-blue"><FaUserTie /></div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">15+ Years SAP Experience</h3>
                                    <p className="text-sm text-gray-600">Proven track record in ECC, S/4HANA, and cloud integrations.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="mt-1 text-brand-blue"><FaCertificate /></div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">ISTQB Certified SAP Experts</h3>
                                    <p className="text-sm text-gray-600">Dedicated teams familiar with SAP solution architecture.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 sm:col-span-2">
                                <div className="mt-1 text-brand-blue"><FaRocket /></div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Intelligent Automation</h3>
                                    <p className="text-sm text-gray-600">Pre-built SAP testing accelerators for 40% faster regression cycles.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <Link
                                href="/contact-us"
                                title="Launch Your SAP Project Risk-Free"
                                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 min-h-[44px] min-w-[44px] bg-brand-blue text-white font-semibold rounded-lg shadow-lg hover:bg-brand-blue transition-colors duration-300"
                            >
                                Request a Free Consultation
                            </Link>
                            <button
                                onClick={openLightbox}
                                className="inline-flex items-center justify-center w-full sm:w-auto border-2 cursor-pointer border-brand-blue text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors duration-300"
                            >
                                <span className="mr-2">▶</span>
                                Watch Demo
                            </button>
                        </div>
                    </div>

                    {/* Right Side - SAP Testing Dashboard */}
                    <div className="relative">
                        <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
                            {/* Dashboard Header */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                                    <h2 className="text-lg font-semibold text-gray-900">
                                        SAP Quality Center
                                    </h2>
                                </div>
                                <div className="text-sm text-green-600 font-semibold">
                                    Active
                                </div>
                            </div>

                            <div className="text-sm text-gray-600 mb-6">
                                Real-time SAP landscape validation & monitoring
                            </div>

                            {/* SAP Process Flow */}
                            <div className="grid grid-cols-3 gap-4 mb-6">
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                                        <FaCogs className="w-6 h-6 text-blue-500" />
                                    </div>
                                    <div className="text-sm font-semibold text-gray-900">
                                        Configure
                                    </div>
                                    <div className="text-xs text-green-600">✓ Validated</div>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                                        <FaRocket className="w-6 h-6 text-purple-500" />
                                    </div>
                                    <div className="text-sm font-semibold text-gray-900">
                                        Migrate
                                    </div>
                                    <div className="text-xs text-blue-600">⚡ Processing</div>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                                        <FaBolt className="w-6 h-6 text-green-500" />
                                    </div>
                                    <div className="text-sm font-semibold text-gray-900">
                                        Operate
                                    </div>
                                    <div className="text-xs text-orange-600">⏳ Monitoring</div>
                                </div>
                            </div>

                            {/* Metrics */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div className="bg-gray-50 rounded-lg p-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-600">Test Coverage</span>
                                        <FaCheckCircle className="w-4 h-4 text-green-500" />
                                    </div>
                                    <div className="text-lg font-bold text-green-600">
                                        98.5%
                                    </div>
                                </div>
                                <div className="bg-gray-50 rounded-lg p-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-600">Performance</span>
                                        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                                    </div>
                                    <div className="text-lg font-bold text-blue-600">Optimal</div>
                                </div>
                                <div className="bg-gray-50 rounded-lg p-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-600">
                                            Defects Found
                                        </span>
                                        <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                                    </div>
                                    <div className="text-lg font-bold text-purple-600">142</div>
                                </div>
                                <div className="bg-gray-50 rounded-lg p-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-600">Risk Level</span>
                                        <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                                    </div>
                                    <div className="text-lg font-bold text-orange-600">Low</div>
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="mb-4">
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-gray-600">S/4HANA Migration Test</span>
                                    <span className="font-semibold text-blue-600">
                                        85% Complete
                                    </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-3">
                                    <div
                                        className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full"
                                        style={{ width: "85%" }}
                                    ></div>
                                </div>
                            </div>

                            {/* Test Categories */}
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Functional Testing</span>
                                    <span className="text-green-600 font-semibold">100%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className="bg-green-500 h-2 rounded-full"
                                        style={{ width: "100%" }}
                                    ></div>
                                </div>

                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Integration Testing</span>
                                    <span className="text-blue-600 font-semibold">92%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className="bg-blue-500 h-2 rounded-full"
                                        style={{ width: "92%" }}
                                    ></div>
                                </div>

                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Security Testing</span>
                                    <span className="text-purple-600 font-semibold">88%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className="bg-purple-500 h-2 rounded-full"
                                        style={{ width: "88%" }}
                                    ></div>
                                </div>
                            </div>

                            {/* Data Source Icons */}
                            <div className="flex justify-center space-x-6 mt-6 pt-4 border-t border-gray-200">
                                <div className="text-center">
                                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-1">
                                        <FaDatabase className="text-blue-500 text-sm" />
                                    </div>
                                    <div className="text-xs text-gray-600">HANA</div>
                                </div>
                                <div className="text-center">
                                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-1">
                                        <FaCloud className="text-green-500 text-sm" />
                                    </div>
                                    <div className="text-xs text-gray-600">Cloud</div>
                                </div>
                                <div className="text-center">
                                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-1">
                                        <FaCode className="text-purple-500 text-sm" />
                                    </div>
                                    <div className="text-xs text-gray-600">ABAP</div>
                                </div>
                                <div className="text-center">
                                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-1">
                                        <span className="text-orange-500 text-xs font-bold">
                                            UI5
                                        </span>
                                    </div>
                                    <div className="text-xs text-gray-600">Fiori</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Lightbox Modal */}
            <Lightbox
                isOpen={isLightboxOpen}
                videoLink="https://yourvideolink.com"
                onClose={closeLightbox}
            />
        </section>
    );
};

export default SapTestingHeroSection;
