"use client";
import React from "react";
import Link from 'next/link';
import {
    FaLaptopCode,
    FaTachometerAlt,
    FaShieldAlt,
    FaNetworkWired,
    FaCloud,
} from "react-icons/fa";

const WebappTechStack: React.FC = () => {
    const techStack = [
        {
            category: "UI Automation",
            tools: ["Selenium", "Cypress", "Playwright", "Puppeteer"],
            icon: <FaLaptopCode className="text-3xl text-brand-blue" />,
        },
        {
            category: "Performance & Load",
            tools: ["Apache JMeter", "K6", "BlazeMeter"],
            icon: <FaTachometerAlt className="text-3xl text-orange-500" />,
        },
        {
            category: <Link href="/security-testing" className="hover:text-[theme(color.brand.blue)] hover:underline">Security & Pen Testing</Link>,
            tools: ["Burp Suite", "OWASP ZAP", "Metasploit"],
            icon: <FaShieldAlt className="text-3xl text-red-500" />,
        },
        {
            category: <Link href="/api-testing" className="hover:text-[theme(color.brand.blue)] hover:underline">API Testing</Link>,
            tools: ["Postman", "SoapUI", "Rest-Assured"],
            icon: <FaNetworkWired className="text-3xl text-purple-500" />,
        },
        {
            category: "Cloud-Based Web Testing",
            tools: ["Sauce Labs", "BrowserStack", "LambdaTest"],
            icon: <FaCloud className="text-3xl text-cyan-500" />,
        },
    ];

    return (
        <section className="py-20 px-8 md:px-12 lg:px-24 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        Testriq’s Web QA <span className="text-brand-blue">Tech Stack</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        To provide the best web application <Link href="/performance-testing-services">performance testing services</Link>, we utilize a cutting-edge, multi-tool stack:
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {techStack.map((stack, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-gray-50 rounded-xl">
                                    {stack.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">
                                    {stack.category}
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {stack.tools.map((tool, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WebappTechStack;
