// components/sections/ManualTestingFrameworkArchitecture.tsx

import { Inter } from 'next/font/google';
import React from "react";

const inter = Inter({ subsets: ['latin'] });

const ManualTestingFrameworkArchitecture = () => {
    return (
        <section className={`framework-architecture bg-gradient-to-b from-white to-gray-50 py-16 ${inter.className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center tracking-tight sm:text-5xl md:text-4xl">
                    Why Our Frameworks Don&apos;t <span className="text-[rgb(37,168,224)]">Break</span> (Self-Healing Automation)
                </h2>
                <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                    The biggest pain point in automation is <strong className="text-[rgb(37,168,224)] font-semibold">&quot;Flaky Tests&quot;</strong>—scripts that fail because a UI element ID changed. We don&apos;t just write scripts; we build robust <strong className="text-[rgb(37,168,224)] font-semibold">Hybrid Frameworks</strong>.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <li className="bg-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out border border-blue-100 transform hover:-translate-y-1">
                        <strong className="text-blue-700 text-xl font-semibold block mb-3">Page Object Model (POM):</strong>
                        <span className="text-gray-700 leading-relaxed">We decouple test logic from UI locators, making maintenance 80% faster.</span>
                    </li>
                    <li className="bg-green-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out border border-green-100 transform hover:-translate-y-1">
                        <strong className="text-green-700 text-xl font-semibold block mb-3">Self-Healing Scripts:</strong>
                        <span className="text-gray-700 leading-relaxed">Using AI-driven locators, our scripts automatically adjust if a button moves or changes attributes.</span>
                    </li>
                    <li className="bg-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out border border-purple-100 transform hover:-translate-y-1">
                        <strong className="text-purple-700 text-xl font-semibold block mb-3">Parallel Execution:</strong>
                        <span className="text-gray-700 leading-relaxed">We configure <strong className="text-purple-700 font-semibold">Selenium Grid</strong> or <strong className="text-purple-700 font-semibold">BrowserStack</strong> to run 500+ tests simultaneously, cutting execution time from hours to minutes.</span>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default ManualTestingFrameworkArchitecture;