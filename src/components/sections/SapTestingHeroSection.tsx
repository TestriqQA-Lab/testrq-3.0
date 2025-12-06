"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import {
    FaRocket,
    FaHome,
    FaChevronRight,
    FaServer,
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

                    {/* Right Side - Hero Image */}
                    <div className="relative flex justify-center lg:justify-center items-start animate-float">
                        {/* Removed card styling (border, shadow, rounded container) for better blending */}
                        <div className="relative w-full h-auto">
                            <Image
                                src="/services/sap-testing-hero.png"
                                alt="SAP Testing Services Dashboard"
                                width={600}
                                height={400}
                                className="w-full h-auto object-contain"
                                priority
                            />
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
