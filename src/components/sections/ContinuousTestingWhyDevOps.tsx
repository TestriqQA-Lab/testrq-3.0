"use client";

import React from "react";
import { FaExclamationTriangle, FaCheckCircle, FaArrowRight } from "react-icons/fa";

const ContinuousTestingWhyDevOps: React.FC = () => {
    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <span className="text-sm">● The DevOps Imperative</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Why Continuous Testing is the{" "}
                        <span className="text-brand-blue">Backbone of Modern DevOps</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Traditional testing models often create bottlenecks that delay
                        releases and increase technical debt. Continuous Testing transforms
                        this by running automated tests at every stage of the CI/CD
                        pipeline.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Traditional Approach */}
                    <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                                <FaExclamationTriangle className="text-red-500 text-xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">
                                Traditional Testing
                            </h3>
                        </div>
                        <div className="space-y-4">
                            {[
                                "Testing phase at end of cycle creates bottlenecks",
                                "Long release cycles — weeks or months",
                                "Late discovery of defects increases cost",
                                "Manual handoffs slow down the pipeline",
                                "High technical debt accumulation",
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-red-600 text-xs">✕</span>
                                    </div>
                                    <span className="text-gray-700 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Continuous Testing Approach */}
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                <FaCheckCircle className="text-green-500 text-xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">
                                Continuous Testing
                            </h3>
                        </div>
                        <div className="space-y-4">
                            {[
                                "Automated tests at every CI/CD pipeline stage",
                                "Daily or even hourly releases with confidence",
                                "Immediate feedback on every code commit",
                                "Zero-touch testing execution in pipelines",
                                "Proactive risk management & reduced debt",
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-green-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-green-700 text-xs">✓</span>
                                    </div>
                                    <span className="text-gray-700 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
                        This process provides{" "}
                        <span className="font-semibold text-brand-blue">
                            immediate feedback on business risks
                        </span>
                        , allowing your development team to innovate faster while
                        maintaining the highest standards of software excellence.
                    </p>
                    <div className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all cursor-pointer">
                        <span>See how we integrate into your pipeline</span>
                        <FaArrowRight />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContinuousTestingWhyDevOps;
