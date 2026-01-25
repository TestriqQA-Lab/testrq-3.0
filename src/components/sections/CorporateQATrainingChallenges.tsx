import Link from 'next/link';
import React from "react";
import { FaGraduationCap, FaShieldAlt, FaClock, FaRobot, FaChartLine, FaCheckCircle } from "react-icons/fa";

const CorporateQATrainingChallenges = () => {
    const challenges = [
        {
            id: 1,
            title: "Ending the Acute Skills Shortage",
            description: "Recent reports indicate a staggering 77% of organizations lack professionals skilled in automation, AI testing, and DevOps. With global tester density sitting at a mere 5.2 per 100,000 people, the talent war is real.",
            fix: (<>We turn generalists into specialist quality engineers through an fast-track path. We achieve this by using the <Link href="/qa-documentation-services" className="text-gray-700 hover:text-brand-blue hover:underline decoration-brand-blue">ISO 29119-2 risk-based standard</Link>.</>),
            icon: <FaGraduationCap className="h-8 w-8 text-blue-600" />
        },
        {
            id: 2,
            title: "Standardizing the Training Framework (ISO 29119 Alignment)",
            description: "Most QA training programs lack a unified structure. This delay causes new hires to require up to six months to reach full productivity.",
            fix: (<>We implement the <Link href="/qa-documentation-services" className="text-gray-700 hover:text-brand-blue hover:underline decoration-brand-blue">ISO 29119 framework</Link>. This provides globally recognized templates for your test design and documentation. This ensures QA certification for teams that is consistent across your global offices.</>),
            icon: <FaShieldAlt className="h-8 w-8 text-purple-600" />
        },
        {
            id: 3,
            title: "Solving Time and Resource Constraints",
            description: "Under-resourced teams often abandon training because of the 'pressure cooker' environment of rapid releases. Statistics show that 48% of projects fail because of these internal skills gaps.",
            fix: (<>We provide small-group QA workshops limited to 15 seats. Our curriculum utilizes ISO 29119 risk-prioritization. This allows employees to master high-impact skills without slowing down the <Link href="/automation-testing-services" className="text-gray-700 hover:text-brand-blue hover:underline decoration-brand-blue">CI/CD pipeline</Link>.</>),
            icon: <FaClock className="h-8 w-8 text-green-600" />
        },
        {
            id: 4,
            title: "Navigating the AI and Automation Shift",
            description: "The rise of non-deterministic Gen-AI testing and low-code tools is causing 'automation anxiety.'",
            fix: (<>Our advanced Selenium training and specialized AI modules map directly to <Link href="/technology-stack" className="text-gray-700 hover:text-brand-blue hover:underline decoration-brand-blue">ISO 29119-4 techniques</Link>. We teach your team to maintain &apos;human empathy&apos; while mastering hyper-automation.</>),
            icon: <FaRobot className="h-8 w-8 text-orange-600" />
        },
        {
            id: 5,
            title: "Proven ROI and Training Effectiveness",
            description: "While 95% of trainers claim success, few provide the analytics to prove long-term retention.",
            fix: "We integrate QA process optimization metrics (such as defect detection efficiency) directly into our evaluations. Clients typically see 60% efficiency gains post-training.",
            icon: <FaChartLine className="h-8 w-8 text-teal-600" />
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        The 2026 Global Quality Assurance <span className="text-brand-blue">Training Crisis</span>: Five Challenges We Solve
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        The global testing landscape has reached a critical inflection point. To rank and compete in 2026, quality assurance training must address these five industry-defining barriers.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {challenges.map((challenge) => (
                        <div key={challenge.id} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col md:flex-row gap-6">
                            <div className="flex-shrink-0">
                                <div className="bg-white p-4 rounded-xl shadow-sm">
                                    {challenge.icon}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{challenge.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed text-sm">{challenge.description}</p>
                                <div className="bg-white rounded-xl p-5 border-l-4 border-brand-blue shadow-sm">
                                    <div className="flex items-center gap-2 mb-2">
                                        <FaCheckCircle className="text-brand-blue font-bold" />
                                        <span className="font-bold text-brand-blue uppercase tracking-wider text-xs">Our Fix</span>
                                    </div>
                                    <p className="text-gray-800 font-medium text-sm">{challenge.fix}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CorporateQATrainingChallenges;
