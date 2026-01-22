
"use client";

import React from "react";
import { Check, X, Info } from "lucide-react";

const comparisonData = [
    {
        category: "Testing Scope",
        features: [
            { name: "Manual Functional Testing", startup: true, growth: true, enterprise: true },
            { name: "Regression Suite Execution", startup: true, growth: true, enterprise: true },
            { name: "UI/UX & Accessibility (WCAG)", startup: false, growth: true, enterprise: true },
            { name: "API & Backend Testing", startup: false, growth: true, enterprise: true },
            { name: "Mobile App Testing (iOS/Android)", startup: "Add-on", growth: true, enterprise: true },
            { name: "AI/ML Model Validation", startup: false, growth: false, enterprise: true },
        ]
    },
    {
        category: "Automation",
        features: [
            { name: "Framework Architecture Design", startup: false, growth: true, enterprise: true },
            { name: "Automated Smoke Tests", startup: false, growth: true, enterprise: true },
            { name: "Full Regression Automation", startup: false, growth: "P2+", enterprise: true },
            { name: "CI/CD Integration", startup: false, growth: true, enterprise: true },
            { name: "Self-healing Scripts", startup: false, growth: false, enterprise: true },
        ]
    },
    {
        category: "Security & Performance",
        features: [
            { name: "Vulnerability Scanning", startup: "Quarterly", growth: "Monthly", enterprise: "Continuous" },
            { name: "Manual Pen-Testing", startup: false, growth: "On-request", enterprise: "Bi-annual" },
            { name: "Load & Stress Testing", startup: false, growth: "500 Users", enterprise: "Unlimited" },
            { name: "Privacy Compliance (GDPR/HIPAA)", startup: false, growth: "Partial", enterprise: "Full Audit" },
        ]
    },
    {
        category: "Communication",
        features: [
            { name: "Slack/Teams Access", startup: true, growth: true, enterprise: true },
            { name: "Dedicated QA Lead", startup: false, growth: true, enterprise: true },
            { name: "On-site Meetings", startup: false, growth: "Monthly", enterprise: "Weekly" },
            { name: "Response Time Agreement", startup: "24h", growth: "4h", enterprise: "1h" },
        ]
    }
];

const PricingComparison = () => {
    return (
        <section className="py-20 px-8 md:px-12 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Compare Plans in Detail</h2>
                    <p className="text-gray-600 text-lg">Every plan includes ISTQB-certified processes and regular reporting.</p>
                </div>

                <div className="overflow-x-auto shadow-2xl rounded-3xl border border-gray-100">
                    <table className="w-full text-left bg-white min-w-[800px]">
                        <thead>
                            <tr className="bg-gray-50/80">
                                <th className="py-8 px-8 text-xl font-bold text-gray-900 border-b">Premium QA Features</th>
                                <th className="py-8 px-6 text-center border-b">
                                    <span className="block text-lg font-bold">Startup</span>
                                </th>
                                <th className="py-8 px-6 text-center border-b bg-brand-blue/5">
                                    <span className="block text-lg font-bold text-brand-blue">Professional</span>
                                </th>
                                <th className="py-8 px-6 text-center border-b">
                                    <span className="block text-lg font-bold">Enterprise</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonData.map((section, sectionIdx) => (
                                <React.Fragment key={sectionIdx}>
                                    <tr className="bg-gray-100/30">
                                        <td colSpan={4} className="py-4 px-8 font-black text-xs uppercase tracking-widest text-gray-400">
                                            {section.category}
                                        </td>
                                    </tr>
                                    {section.features.map((feature, featureIdx) => (
                                        <tr key={featureIdx} className="hover:bg-gray-50 transition-colors">
                                            <td className="py-5 px-8 border-b border-gray-100 font-medium text-gray-700 flex items-center gap-2">
                                                {feature.name}
                                                {/* <Info className="w-3 h-3 text-gray-400 cursor-help" /> */}
                                            </td>
                                            <td className="py-5 px-6 border-b border-gray-100 text-center">
                                                {renderValue(feature.startup)}
                                            </td>
                                            <td className="py-5 px-6 border-b border-gray-100 text-center bg-brand-blue/[0.02]">
                                                {renderValue(feature.growth)}
                                            </td>
                                            <td className="py-5 px-6 border-b border-gray-100 text-center">
                                                {renderValue(feature.enterprise)}
                                            </td>
                                        </tr>
                                    ))}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

const renderValue = (value: any) => {
    if (value === true) return <Check className="w-6 h-6 text-green-500 mx-auto" />;
    if (value === false) return <X className="w-6 h-6 text-gray-300 mx-auto" />;
    return <span className="text-sm font-bold text-gray-600">{value}</span>;
};

export default PricingComparison;
