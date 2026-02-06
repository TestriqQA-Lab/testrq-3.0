"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPlug, FaShieldAlt, FaCheckCircle, FaArrowRight, FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";

const Pricing2AddOns: React.FC = () => {
    return (
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block bg-amber-100 text-amber-700 text-sm font-bold px-4 py-2 rounded-full mb-4"
                    >
                        SPECIALIZED ADD-ONS
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                    >
                        Extend Your Testing Coverage
                    </motion.h2>
                </div>

                {/* Add-On Cards */}
                <div className="space-y-12">
                    {/* API Integrity Check */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100"
                    >
                        <div className="flex items-start gap-4 mb-6">
                            <div className="p-4 bg-blue-100 rounded-2xl text-blue-600">
                                <FaPlug className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-1">2. API Integrity Check</h3>
                                <p className="text-gray-500 text-sm">For backend-heavy apps, SaaS platforms, or &quot;headless&quot; architectures</p>
                            </div>
                        </div>

                        <p className="text-gray-600 mb-6 leading-relaxed">
                            We thoroughly test your APIs for accuracy, performance, and adherence to contract (OpenAPI, GraphQL, gRPC).
                        </p>

                        <ul className="space-y-3 mb-6">
                            {[
                                "Test Coverage: Endpoints for CRUD operations, filters, pagination, and error scenarios.",
                                "Authentication Testing: JWT, OAuth 2.0, API keys — whichever you use.",
                                "Schema Compliance: Validating responses against OpenAPI 3.0 or AsyncAPI specs.",
                                "Price Range: $1,500 – $3,500 depending on number of endpoints and complexity.",
                                "Add-On Benefits: Comes with a Postman/Insomnia collection for your team to re-run tests themselves.",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <FaCheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700 text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
                            <div className="flex items-start gap-3">
                                <FaExclamationTriangle className="w-5 h-5 text-amber-600 mt-0.5" />
                                <p className="text-amber-800 text-sm">
                                    <strong>Pro Tip:</strong> &quot;Add this on if your backend is your business.&quot; If revenue flows through your API, you can&apos;t afford edge-case failures.
                                </p>
                            </div>
                        </div>

                        <Link
                            href="/contact-us"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-lg"
                        >
                            Request API Audit <FaArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>

                    {/* VAPT Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100"
                    >
                        <div className="flex items-start gap-4 mb-6">
                            <div className="p-4 bg-red-100 rounded-2xl text-red-600">
                                <FaShieldAlt className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-1">3. Zero-Friction VAPT (Hacker&apos;s View)</h3>
                                <p className="text-gray-500 text-sm">Focused on the &quot;Hacker&apos;s View&quot; vulnerability assessment</p>
                            </div>
                        </div>

                        <ul className="space-y-3 mb-6">
                            {[
                                "The VAPT (Vulnerability Assessment + Penetration Testing) audit simulates how a malicious actor would attempt to gain unauthorized access or data and more.",
                                "The Outcome: A Vulnerability Audit Report (PDF) + Executive Summary for stakeholders & Board reporting — not just a spreadsheet of CVE numbers.",
                                "Price Range: $3,500 – $6,000.",
                                "Add-On Benefits: Certificate that can be shared with your customers and stakeholders to build trust and demonstrate security commitment.",
                                "Timeline: 7-14 business days depending on scope and application complexity.",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <FaCheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700 text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                            <div className="flex items-start gap-3">
                                <FaExclamationTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                                <p className="text-red-800 text-sm">
                                    <strong>Pro Tip:</strong> &quot;Add this if the stake is high (or your clients ask for this)&quot;. If Industry, SOC-2, or ISO security certification requirements, you need this to pass security audit.
                                </p>
                            </div>
                        </div>

                        <Link
                            href="/contact-us"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-red-600 hover:bg-red-500 transition-all shadow-lg"
                        >
                            Schedule VAPT <FaArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-600 mb-4">
                        Not sure which add-on fits your needs? Let&apos;s discuss your specific requirements.
                    </p>
                    <Link
                        href="/contact-us"
                        className="inline-flex items-center gap-2 text-amber-600 font-bold hover:text-amber-700 transition-colors"
                    >
                        Talk to a QA Consultant <FaArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing2AddOns;
