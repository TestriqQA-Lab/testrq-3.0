"use client";
import Link from 'next/link';
import React from 'react';
import { FaExclamationTriangle, FaUserTie, FaCloudUploadAlt, FaSitemap, FaRobot } from 'react-icons/fa';

const DataAnalysisChallenges = () => {
    const challenges = [
        {
            id: 1,
            icon: FaExclamationTriangle,
            title: 'Ending "Garbage In, Garbage Out" (ISO 8000 Alignment)',
            stat: '85% failure rate',
            problem: 'Data quality remains the primary barrier to success; 85% of enterprise-scale data projects fail because of poor integrity. Incomplete or inconsistent data prevents you from accurately evaluating business intelligence.',
            solution: 'We align our Data Cleaning & Scrubbing protocols with the ISO 8000-1:2022 international benchmark. Our team validates data accuracy and completeness at the source, providing reliable insights for every decision.',
            color: 'red'
        },
        {
            id: 2,
            icon: FaUserTie,
            title: 'Bridging the 77% Analytics Talent Deficit',
            stat: '77% talent gap',
            problem: 'Despite the demand, 77% of companies report a deficit in specialized skills. It is hard to extract value from complex Python or R models. High-level expertise is in short supply, making it difficult to scale.',
            solution: 'Hire certified data analysts from Testriq with over 10 years of experience. We use the ISO/IEC 25012 model to ensure your data is timely and usable, providing a high-tier alternative to internal hiring.',
            color: 'blue'
        },
        {
            id: 3,
            icon: FaCloudUploadAlt,
            title: 'Zettabyte Scalability for Global Enterprises',
            stat: '36% lack infra',
            problem: 'By late 2026, most organizations will manage zettabytes of data. However, 36% currently lack the infrastructure to handle this volume, leading to the common 48% "query reduction" trap used to cut costs.',
            solution: 'We analyze enterprise-scale data without compromise. We build on a Spark, Snowflake, and AWS stack to ensure your infrastructure grows with your business, preventing performance degradation.',
            color: 'purple'
        },
        {
            id: 4,
            icon: FaSitemap,
            title: 'Breaking Data Silos with Standardized ETL',
            stat: 'Unified View',
            problem: 'Data trapped in departmental silos creates mixed data and prevents a unified view of the business. This fragmentation hinders strategic cross-functional decision-making.',
            solution: 'Our systematic data gathering utilizes a robust ETL Process (Extract, Transform, Load). We use ISO 8000 to help your systems talk to each other, providing custom dashboards for startups and global firms alike.',
            color: 'green'
        },
        {
            id: 5,
            icon: FaRobot,
            title: 'Achieving Trustworthy AI/ML Interpretability',
            stat: 'ISO/IEC 25012',
            problem: 'AI models often lack clarity, eroding trust in predictive modeling despite the 2026 hype. Stakeholders need to understand the logic behind AI-driven decisions.',
            solution: 'We focus on the 15 quality characteristics of ISO/IEC 25012. Our Machine Learning Integration focuses on clear logic and robustness, ensuring that our advanced statistical modeling produces actionable results.',
            color: 'teal'
        }
    ];

    const getColorClasses = (color: string) => {
        const colors = {
            red: 'bg-red-50 text-red-600 border-red-100',
            blue: 'bg-blue-50 text-blue-600 border-blue-100',
            purple: 'bg-purple-50 text-purple-600 border-purple-100',
            green: 'bg-green-50 text-green-600 border-green-100',
            teal: 'bg-teal-50 text-teal-600 border-teal-100',
        };
        return colors[color as keyof typeof colors];
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Overcoming the 2026 <span className="text-brand-blue">Global Data Crisis</span>: The Testriq Advantage
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        The global data landscape has undergone a seismic shift. To rank and compete in 2026, a data analytics solutions provider must address five critical industry barriers. We have built our workflow specifically to solve these challenges.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {challenges.map((challenge) => (
                        <div key={challenge.id} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
                            <div className={`w-14 h-14 rounded-xl ${getColorClasses(challenge.color)} flex items-center justify-center mb-6 text-2xl border-2`}>
                                <challenge.icon />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-4 h-16 flex items-center">
                                {challenge.title}
                            </h3>

                            <div className="flex items-center gap-2 mb-4">
                                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${getColorClasses(challenge.color)}`}>
                                    {challenge.stat}
                                </span>
                            </div>

                            <div className="space-y-4 flex-grow">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-2 opacity-60 italic">The Problem:</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">{challenge.problem}</p>
                                </div>
                                <div className="pt-4 border-t border-gray-200">
                                    <h4 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-2">Our Solution:</h4>
                                    <p className="text-gray-700 text-sm font-medium leading-relaxed">
                                        {challenge.id === 2 ? (
                                            <>Hire certified data analysts from Testriq with over 10 years of experience. We use the <Link href="/qa-documentation-services" className="text-brand-blue hover:underline decoration-brand-blue">ISO/IEC 25012 model</Link> to ensure your data is timely and usable.</>
                                        ) : challenge.id === 3 ? (
                                            <>We analyze enterprise-scale data without compromise. We build on a Spark, Snowflake, and <Link href="/technology-stack" className="text-brand-blue hover:underline decoration-brand-blue">AWS stack</Link> to ensure your infrastructure grows with your business.</>
                                        ) : challenge.id === 4 ? (
                                            <>Our systematic data gathering utilizes a robust <Link href="/automation-testing-services" className="text-brand-blue hover:underline decoration-brand-blue">ETL Process</Link> (Extract, Transform, Load). We use ISO 8000 to help your systems talk to each other.</>
                                        ) : challenge.id === 5 ? (
                                            <>We focus on the 15 quality characteristics of ISO/IEC 25012. Our <Link href="/ai-application-testing" className="text-brand-blue hover:underline decoration-brand-blue">Machine Learning Integration</Link> focuses on clear logic and robustness.</>
                                        ) : (
                                            challenge.solution
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DataAnalysisChallenges;
