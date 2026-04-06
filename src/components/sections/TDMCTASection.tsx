"use client";

import Link from "next/link";
import React from "react";
import { FaArrowRight, FaCommentDots } from "react-icons/fa";

const TDMCTASection: React.FC = () => {
    return (
        <section className="py-24 px-8 md:px-12 lg:px-24 bg-blue-600 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full -mr-48 -mt-48 opacity-50 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-700 rounded-full -ml-48 -mb-48 opacity-50 blur-3xl" />

            <div className="max-w-5xl mx-auto text-center relative z-10">
                <div className="inline-flex items-center bg-blue-500/30 gap-2 text-white px-4 py-2 rounded-full mb-8 backdrop-blur-sm border border-white/10">
                    <FaCommentDots />
                    <span className="text-sm font-semibold">TDM Maturity Assessment</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                    Ready to Secure Your Data and <br className="hidden md:block" />
                    <span className="text-blue-200">Accelerate Your Quality?</span>
                </h2>

                <p className="text-blue-100 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
                    In an era where data breaches and compliance failures define market survival, don&apos;t let flawed test data be your weakest link. Partner with Testriq, a premier TDM QA company, to transform your test data from a bottleneck into a resilient engine of growth.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                    <Link
                        href="/contact-us"
                        className="group inline-flex items-center gap-3 py-4 px-8 bg-white text-blue-600 font-bold text-lg rounded-xl hover:bg-blue-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto"
                    >
                        <span>Contact TDM Strategists</span>
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <p className="text-blue-200 font-medium">#1 Ranking in Data Integrity</p>
                </div>

                <div className="mt-16 pt-16 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8 text-blue-100">
                    <div>
                        <p className="text-2xl font-bold text-white mb-2">ROI-Focused</p>
                        <p className="text-sm">Driven by technical excellence</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-white mb-2">Complimentary</p>
                        <p className="text-sm">Test data maturity assessment</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-white mb-2">Managed TDM</p>
                        <p className="text-sm">Empowering your global QA team</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TDMCTASection;
