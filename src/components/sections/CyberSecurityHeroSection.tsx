"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
    FaShieldAlt,
    FaArrowRight,
    FaPlay,
    FaHome,
    FaChevronRight,
    FaUserSecret
} from "react-icons/fa";
import Lightbox from "../VideoLightBox";
import SecurityTestingAnimation from "./SecurityTestingAnimation";

const CyberSecurityHeroSection: React.FC = () => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const openLightbox = () => setIsLightboxOpen(true);
    const closeLightbox = () => setIsLightboxOpen(false);

    return (
        <section className="relative pt-8 pb-16 px-8 md:px-12 lg:px-24 bg-white overflow-hidden">
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
                        Cyber Security Testing Services
                    </span>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-brand-blue rounded-full text-sm font-bold border border-blue-100 uppercase tracking-wide">
                            <FaUserSecret className="mr-2" />
                            ISTQB & CEH Certified Experts
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                            Cyber Security Testing & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Penetration Testing</span>
                        </h1>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-gray-800">
                                Elevate Your Digital Defenses
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                In an increasingly interconnected world, safeguarding your digital assets is a strategic imperative. Testriq offers world-class Cyber Security Testing Services designed to fortify your defenses and protect your reputation in the dynamic 2026 threat landscape.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Our team of <span className="font-bold text-gray-900">Certified Ethical Hackers (CEH, OSCP)</span> brings over 15 years of specialized experience to uncover complex vulnerabilities that others miss.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link href="/contact-us">
                                <button className="w-full sm:w-auto bg-brand-blue cursor-pointer text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                                    Get Started Today
                                    <FaArrowRight className="ml-2" />
                                </button>
                            </Link>
                            <button
                                onClick={openLightbox}
                                className="w-full sm:w-auto border-2 cursor-pointer border-brand-blue text-brand-blue px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center"
                            >
                                <FaPlay className="mr-2" />
                                Watch Demo
                            </button>
                        </div>

                        {/* Stats Summary */}
                        <div className="flex items-center gap-8 pt-8 border-t border-gray-100">
                            <div>
                                <div className="text-2xl font-bold text-gray-900">15+ Years</div>
                                <div className="text-sm text-gray-500 font-medium">Domain expertise</div>
                            </div>
                            <div className="w-px h-10 bg-gray-200"></div>
                            <div>
                                <div className="text-2xl font-bold text-gray-900">100% Audit</div>
                                <div className="text-sm text-gray-500 font-medium">Compliance success</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Animation */}
                    <div className="relative lg:h-[600px] flex items-center justify-center">
                        <div className="absolute inset-0 bg-blue-100 rounded-full blur-[120px] opacity-20 scale-150"></div>
                        <SecurityTestingAnimation />
                    </div>
                </div>
            </div>

            <Lightbox
                isOpen={isLightboxOpen}
                videoLink="https://www.youtube.com/embed/your-video-id"
                onClose={closeLightbox}
            />
        </section>
    );
};

export default CyberSecurityHeroSection;
