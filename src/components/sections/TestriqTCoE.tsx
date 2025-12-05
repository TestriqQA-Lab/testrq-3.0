// components/sections/TestriqTCoE.tsx

import { Inter } from 'next/font/google';
import React from "react";

const inter = Inter({ subsets: ['latin'] });

const TestriqTCoE = () => {
    return (
        <section className={`tcoe-section bg-gradient-to-b from-white to-gray-50 py-16 ${inter.className}`}>
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center tracking-tight sm:text-5xl md:text-5xl">
                    Testriq Security Center of <span className="text-[rgb(37,168,224)]">Excellence</span> (TCoE)
                </h2>
                <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed text-center">
                    Security is a continuous posture. Our dedicated <strong className="text-[rgb(37,168,224)] font-semibold">Security TCoE</strong> is an R&D hub staffed by 25+ certified researchers who monitor emerging CVEs 24/7.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <li className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out border border-blue-100 transform hover:-translate-y-2 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                        <strong className="text-blue-700 text-xl font-semibold block mb-3">Elite Team:</strong>
                        <span className="text-gray-700 leading-relaxed">Staffed by CISSP, CEH, and CISA certified professionals.</span>
                    </li>
                    <li className="bg-gradient-to-br from-white to-teal-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out border border-teal-100 transform hover:-translate-y-2 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-400 to-teal-600 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                        <strong className="text-teal-700 text-xl font-semibold block mb-3">Proprietary Threat Intel:</strong>
                        <span className="text-gray-700 leading-relaxed">A live repository of attack vectors from 500+ assessments.</span>
                    </li>
                    <li className="bg-gradient-to-br from-white to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out border border-cyan-100 transform hover:-translate-y-2 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 to-cyan-600 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                        <strong className="text-cyan-700 text-xl font-semibold block mb-3">Zero-False-Positive Promise:</strong>
                        <span className="text-gray-700 leading-relaxed">Every automated finding is manually verified by a senior engineer.</span>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default TestriqTCoE;