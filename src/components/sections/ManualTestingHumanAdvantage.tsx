// components/sections/ManualTestingHumanAdvantage.tsx

import { Inter } from 'next/font/google';
import React from "react";

const inter = Inter({ subsets: ['latin'] });

const ManualTestingHumanAdvantage = () => {
    return (
        <section className={`human-advantage bg-gradient-to-b from-white to-gray-50 py-12 ${inter.className}`}>
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center tracking-tight sm:text-5xl">
                    Why <span className="text-[rgb(37,168,224)]">Automation</span> Can&apos;t Catch Everything
                </h2>
                <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                    Automation scripts are excellent for regression, but they lack intuition. A script will pass a button if it is &quot;clickable,&quot; even if it is invisible to the user. We position <strong className="text-[rgb(37,168,224)] font-semibold">Session-Based Exploratory Testing</strong> as the critical intelligence layer that finds the bugs bots miss.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <li className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out border border-gray-100">
                        <strong className="text-[rgb(37,168,224)] text-lg font-semibold block mb-2">Contextual Nuance:</strong>
                        <span className="text-gray-700">Detecting offensive translation errors or cultural misalignments in <strong className="text-[rgb(37,168,224)] font-semibold">Localization (L10n) Testing</strong>.</span>
                    </li>
                    <li className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out border border-gray-100">
                        <strong className="text-[rgb(37,168,224)] text-lg font-semibold block mb-2">Visual Glitches:</strong>
                        <span className="text-gray-700">Identifying layout breaks on specific mobile devices that automated screenshots overlook.</span>
                    </li>
                    <li className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out border border-gray-100">
                        <strong className="text-[rgb(37,168,224)] text-lg font-semibold block mb-2">Real-World Chaos:</strong>
                        <span className="text-gray-700">Testing interruptions, low-battery scenarios, and &quot;rage clicks&quot; via <strong className="text-[rgb(37,168,224)] font-semibold">Ad-Hoc Testing</strong>.</span>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default ManualTestingHumanAdvantage;