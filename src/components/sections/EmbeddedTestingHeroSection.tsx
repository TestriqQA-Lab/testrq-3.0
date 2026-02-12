"use client";

import React, { useState } from "react";
import { FaArrowRight, FaMicrochip, FaPlay } from "react-icons/fa";
import Link from "next/link";
import Lightbox from "../VideoLightBox";
import Breadcrumb from "@/components/ui/Breadcrumb";

const EmbeddedTestingHeroSection: React.FC = () => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const openLightbox = () => {
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
    };

    return (
        <section className="bg-white text-black pt-8 pb-16 px-4 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <Breadcrumb items={[{ label: "Embedded Testing Services" }]} />

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
                    {/* Left Content */}
                    <div className="flex flex-col items-center xl:items-start text-center mx-auto xl:text-left xl:mx-0">
                        <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                            <FaMicrochip />
                            <span className="text-sm">Embedded QA Specialists</span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                            <span className="text-[theme(color.brand.blue)]">
                                Embedded Testing Services:&nbsp;
                            </span>
                            <br className="md:hidden" />
                            Ensuring Precision and Reliability in Connected Systems with Testriq
                        </h1>

                        <p className="text-gray-700 text-base md:text-lg mb-6 max-w-xl">
                            From automotive and medical devices to IoT and aerospace, Testriq ensures your embedded systems function flawlessly. With over 15 years of experience, we provide comprehensive verification and validation (V&V) services that guarantee safety, security, and peak performance in mission-critical environments.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center xl:justify-start items-center gap-4 mb-8 w-full sm:w-auto">
                            <Link
                                href="/contact-us"
                                title="Contact Us – Testriq QA Lab"
                                className="inline-flex items-center justify-center bg-brand-blue text-white min-h-[44px] min-w-[44px] px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer"
                            >
                                Get Started Today
                                <FaArrowRight className="ml-2" />
                            </Link>
                            <button
                                onClick={openLightbox}
                                className="cursor-pointer border-2 border-brand-blue text-brand-blue px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center"
                            >
                                <FaPlay className="w-4 h-4 mr-2" />
                                Watch Demo
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center xl:justify-start gap-6">
                            {[
                                ["30+", "Years Experience"],
                                ["100%", "Safety Compliance"],
                                ["ISO", "26262 & DO-178C"],
                                ["V&V", "Expertise"],
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

                    {/* Right Content - Placeholder for Animation/Image */}
                    <div className="hidden lg:flex items-center justify-center p-6 bg-gray-50 rounded-3xl relative overflow-hidden h-[450px]">
                        {/* Simple visual representation of embedded systems */}
                        <div className="relative w-full h-full flex items-center justify-center">
                            <div className="w-64 h-64 bg-brand-blue/10 rounded-full animate-pulse absolute"></div>
                            <FaMicrochip className="text-9xl text-brand-blue z-10 animate-spin-slow" />
                            {/* Orbital nodes */}
                            <div className="absolute w-full h-full animate-spin-slow">
                                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-blue rounded-full"></div>
                                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.5)]"></div>
                                <div className="absolute left-10 top-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.5)]"></div>
                                <div className="absolute right-10 top-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-500 rounded-full shadow-[0_0_15px_rgba(234,179,8,0.5)]"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <Lightbox
                    isOpen={isLightboxOpen}
                    videoLink="https://yourvideolink.com"
                    onClose={closeLightbox}
                />
            </div>
        </section>
    );
};

export default EmbeddedTestingHeroSection;
