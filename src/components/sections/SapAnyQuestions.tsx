"use client";

import Link from "next/link";
import React from "react";

const SapAnyQuestions: React.FC = () => {
    return (
        <section className="py-16 px-6 sm:px-6 md:px-12 lg:px-24 bg-gradient-to-r from-brand-blue to-indigo-600">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Ready to talk about your SAP testing roadmap?
                </h2>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                    Ensure a flawless S/4HANA migration and robust SAP operations with our
                    expert testing services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href={"https://calendar.app.google/uUHn8prcXbdqcvVb6"} target={"_blank"}
                        title="Book a Free 30-Minute Expert Consultation"
                        className="inline-flex items-center justify-center px-8 py-3 min-h-[44px] min-w-[44px] border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-brand-blue transition-colors duration-300"
                    >
                        Book a Free 30-Minute Expert Consultation
                    </Link>
                </div>
                <div className="mt-8 text-blue-100">
                    <p className="text-sm">
                        📞 Call us: (+91) 915-2929-343 | ✉️ Email: contact@testriq.com
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SapAnyQuestions;
