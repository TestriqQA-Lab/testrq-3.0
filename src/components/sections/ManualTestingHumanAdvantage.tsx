// components/sections/ManualTestingHumanAdvantage.tsx

import { Inter } from 'next/font/google';
import React from "react";

const inter = Inter({ subsets: ['latin'] });

const ManualTestingHumanAdvantage = () => {
    return (
        <section className={`human-advantage bg-gradient-to-b from-white to-gray-50 py-12 ${inter.className}`}>
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center tracking-tight sm:text-5xl">
                    Comprehensive <span className="text-brand-blue">Manual Software Testing</span> Services
                </h2>
                <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed text-center">
                    As a leading Software QA Services provider, we offer end-to-end coverage across the entire SDLC, ensuring your software delivers exceptional quality.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out border border-gray-100">
                        <strong className="text-brand-blue text-lg font-semibold block mb-2">Functional Testing Services:</strong>
                        <span className="text-gray-700">Validating that every feature works exactly as intended under various conditions to ensure core reliability.</span>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out border border-gray-100">
                        <strong className="text-brand-blue text-lg font-semibold block mb-2">Regression Testing Services:</strong>
                        <span className="text-gray-700">Ensuring that new code deployments do not break existing functionality through systematic manual validation.</span>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out border border-gray-100">
                        <strong className="text-brand-blue text-lg font-semibold block mb-2">Exploratory Testing:</strong>
                        <span className="text-gray-700">Our testers use experience and &quot;error guessing&quot; to find deep-level defects that automated scripts likely miss.</span>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out border border-gray-100">
                        <strong className="text-brand-blue text-lg font-semibold block mb-2">UAT (User Acceptance Testing):</strong>
                        <span className="text-gray-700">We act as the link between your developers and customers, ensuring the final software does exactly what your business needs.</span>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out border border-gray-100 lg:col-span-2">
                        <strong className="text-brand-blue text-lg font-semibold block mb-2">Usability & Accessibility Testing:</strong>
                        <span className="text-gray-700">Ensuring your application is intuitive and compliant with WCAG standards for global markets, providing an inclusive user experience.</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManualTestingHumanAdvantage;