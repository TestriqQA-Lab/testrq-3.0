"use client";

import React from "react";
import { FaGlobe, FaClock, FaUsers, FaLanguage } from "react-icons/fa";

const ManualTestingGlobalReach: React.FC = () => {
    return (
        <section className="py-20 px-8 md:px-12 lg:px-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side: Content */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full text-sm font-semibold">
                            <FaGlobe className="mr-2" />
                            Global Delivery Model
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Global Delivery for <span className="text-brand-blue">US, UK, EU, and Asia</span>
                        </h2>

                        <p className="text-xl text-gray-600 leading-relaxed">
                            Testriq operates on a <strong>Follow-the-Sun</strong> delivery model. We support startups in Silicon Valley, fintech firms in London, and large enterprises in Singapore. Our global reach allows us to provide seamless collaboration and local expertise.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-50 p-3 rounded-xl">
                                    <FaClock className="text-2xl text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">Real-time Collaboration</h3>
                                    <p className="text-gray-600">Active engagement across all time zones to ensure testing never stops.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-purple-50 p-3 rounded-xl">
                                    <FaLanguage className="text-2xl text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">Local-Market Testing</h3>
                                    <p className="text-gray-600">Support for 50+ languages and regional configurations for global success.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-green-50 p-3 rounded-xl">
                                    <FaUsers className="text-2xl text-green-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">Flexible Staffing Models</h3>
                                    <p className="text-gray-600">On-shore, Off-shore, and Hybrid models to meet your budget and security needs.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Visual Representation */}
                    <div className="relative order-first lg:order-last">
                        <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
                            {/* Decorative background elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-10 -mb-10"></div>

                            <div className="relative z-10">
                                <div className="text-6xl font-bold mb-4 opacity-20">24/7</div>
                                <h3 className="text-3xl font-bold mb-6">Follow-the-Sun Execution</h3>

                                <div className="space-y-8">
                                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                        <span>Silicon Valley (PST)</span>
                                        <span className="font-mono text-blue-200">Active</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                        <span>London (GMT)</span>
                                        <span className="font-mono text-purple-200">Syncing</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                        <span>Singapore (SGT)</span>
                                        <span className="font-mono text-green-200">Handoff</span>
                                    </div>
                                </div>

                                <div className="mt-12 flex items-center space-x-4">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center text-gray-600 text-xs font-bold">
                                                QA
                                            </div>
                                        ))}
                                    </div>
                                    <span className="text-sm font-medium">Expert Teams Globally Distributed</span>
                                </div>
                            </div>
                        </div>

                        {/* Float badge */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                            <div className="text-4xl font-bold text-brand-blue mb-1">50+</div>
                            <div className="text-sm text-gray-600 font-medium">Languages Supported</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManualTestingGlobalReach;
