"use client";

import Link from "next/link";
import React from "react";
import {
    FaCubes,
    FaMobileAlt,
    FaLock,
    FaCloudUploadAlt,
} from "react-icons/fa";

const ContinuousTestingSpecialized: React.FC = () => {
    const specializations = [
        {
            icon: <FaCubes className="text-3xl" />,
            title: "Microservices Testing",
            description:
                "Scalable validation for distributed architectures. We orchestrate end-to-end contract testing, service mesh validation, and inter-service communication verification.",
            color: "cyan",
            link: "/api-testing",
        },
        {
            icon: <FaMobileAlt className="text-3xl" />,
            title: "Mobile Continuous Testing",
            description:
                "Real-device testing for iOS and Android in the cloud. Continuous validation across device farms with parallel execution and automated app distribution.",
            color: "indigo",
            link: "/mobile-application-testing",
        },
        {
            icon: <FaLock className="text-3xl" />,
            title: "Continuous Security (DevSecOps)",
            description:
                "Automated vulnerability scanning within the pipeline. Shift security left with SAST, DAST, and dependency scanning integrated into every build.",
            color: "red",
            link: "/security-testing",
        },
        {
            icon: <FaCloudUploadAlt className="text-3xl" />,
            title: "Cloud Migration Testing",
            description:
                "Ensuring stability and performance during digital transformations. Validate infrastructure, data integrity, and application behavior pre and post-migration.",
            color: "green",
            link: "/performance-testing-services",
        },
    ];

    const getColorClasses = (color: string) => {
        const colorMap: { [key: string]: { bg: string; text: string; gradient: string } } = {
            cyan: { bg: "bg-cyan-50", text: "text-cyan-600", gradient: "from-cyan-500 to-cyan-600" },
            indigo: { bg: "bg-indigo-50", text: "text-indigo-600", gradient: "from-indigo-500 to-indigo-600" },
            red: { bg: "bg-red-50", text: "text-red-600", gradient: "from-red-500 to-red-600" },
            green: { bg: "bg-green-50", text: "text-green-600", gradient: "from-green-500 to-green-600" },
        };
        return colorMap[color] || colorMap.cyan;
    };

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <span className="text-sm">● Expert-Led Quality Engineering</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Specialized Testing for{" "}
                        <span className="text-brand-blue">Every Need</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Our team of seasoned QA strategists leverages AI-driven continuous
                        testing services and test orchestration to handle the complexities
                        of modern microservices and cloud-native architectures. We focus on{" "}
                        <span className="font-semibold text-brand-blue">
                            Environmental Parity
                        </span>{" "}
                        to ensure that tests run in environments that mirror production.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {specializations.map((spec, index) => {
                        const colors = getColorClasses(spec.color);
                        return (
                            <Link key={index} href={spec.link}>
                                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100 hover:-translate-y-1 h-full">
                                    <div className="flex items-start gap-5">
                                        <div
                                            className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                                        >
                                            <span className={colors.text}>{spec.icon}</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-blue transition-colors">
                                                {spec.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {spec.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Environmental Parity Banner */}
                <div className="mt-12 bg-gradient-to-r from-cyan-50 to-indigo-50 rounded-2xl p-8 border border-cyan-100">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Eliminate the &ldquo;It Works on My Machine&rdquo; Syndrome
                            </h3>
                            <p className="text-gray-600">
                                Our Environmental Parity approach ensures tests run in
                                environments that perfectly mirror your production
                                infrastructure.
                            </p>
                        </div>
                        <Link href="/contact-us">
                            <button className="bg-brand-blue cursor-pointer text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap">
                                Talk to an Expert
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContinuousTestingSpecialized;
