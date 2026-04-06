"use client";

import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const EmbeddedAnyQuestions: React.FC = () => {
    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 text-center bg-gray-50">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Still Have <span className="text-brand-blue">Questions</span> about Embedded Testing?
            </h2>
            <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
                Our embedded software testing experts are here to help. Get in touch for personalized answers to your specific V&V and safety-critical requirements.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                    href="/contact-us"
                    className="inline-flex items-center px-8 py-4 gap-2 rounded-xl bg-brand-blue text-white hover:bg-brand-blue/90 shadow-lg hover:shadow-xl transition duration-300 cursor-pointer font-bold"
                >
                    Contact Our Experts
                    <FaArrowRight className="text-sm" />
                </Link>
                <Link
                    href="/case-studies"
                    className="inline-flex items-center px-8 py-4 gap-2 rounded-xl border-2 border-brand-blue text-brand-blue hover:bg-brand-blue/5 transition duration-300 cursor-pointer font-bold"
                >
                    View Case Studies
                </Link>
            </div>
        </section>
    );
};

export default EmbeddedAnyQuestions;
