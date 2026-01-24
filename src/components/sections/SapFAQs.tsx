"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const SapFAQs: React.FC = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(0);

    const faqs = [
        {
            question: "What is the difference between functional and regression testing in SAP?",
            answer:
                (
                    <>
                        Functional testing verifies that specific SAP modules (like SD or MM) perform individual transactions correctly according to business requirements. <Link href='/automation-testing-services'>Regression testing</Link>, on the other hand, ensures that new configurations, patches, or updates haven&apos;t negatively impacted existing functionalities across the entire system.
                    </>
                ),
        },
        {
            question: "Which SAP modules does Testriq specialize in testing?",
            answer:
                (
                    <>
                        We specialize in testing core modules including FICO (Finance & Controlling), SD (Sales & Distribution), MM (Materials Management), PP (Production Planning), and HCM (Human Capital Management). We also have deep expertise in industry-specific solutions (IS-Retail, IS-Utilities) and <Link href='/blog/post/sap-fiori-testing-best-practices'>SAP Fiori</Link> applications.
                    </>
                ),
        },
        {
            question: "How does Testriq handle sensitive test data in SAP systems?",
            answer:
                (
                    <>
                        We employ a rigorous Test Data Management (TDM) strategy. We use industry-standard data masking and obfuscation techniques to protect sensitive PII and business data in non-production environments, ensuring full compliance with GDPR, HIPAA, and other data privacy regulations.
                    </>
                ),
        },
        {
            question: "What tools do you use for SAP automation?",
            answer:
                (
                    <>
                        We are tool-agnostic but highly experienced with industry leaders like <Link href='/technology-stack'>Tricentis Tosca</Link>, Worksoft Certify, and UFT One for robust, model-based automation. We also leverage Selenium for web-based Fiori testing and integrate these tools into your CI/CD pipeline for continuous testing.
                    </>
                ),
        },
    ];

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <section className="py-16 px-6 sm:px-6 md:px-12 lg:px-24 bg-white">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <span className="text-sm">● Frequently Asked Questions</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        <span className="text-brand-blue">Frequently</span> Asked Questions
                    </h2>
                    <p className="text-lg text-gray-600">
                        Get answers to common questions about our SAP testing services and
                        methodologies.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                            >
                                <h3 className="font-semibold text-gray-900 pr-4">
                                    {faq.question}
                                </h3>
                                <div className="flex-shrink-0">
                                    {openFAQ === index ? (
                                        <FaChevronUp className="w-5 h-5 text-blue-500" />
                                    ) : (
                                        <FaChevronDown className="w-5 h-5 text-gray-400" />
                                    )}
                                </div>
                            </button>

                            {openFAQ === index && (
                                <div className="px-6 pb-4">
                                    <div className="border-t border-gray-200 pt-4">
                                        <p className="text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SapFAQs;
