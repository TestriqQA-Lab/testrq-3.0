"use client";

import React from "react";

const SaasTestingToolsTable: React.FC = () => {
    const tools = [
        { category: "Automation", tools: "Selenium, Cypress, Playwright", purpose: "Browser automation and UI testing", color: "cyan" },
        { category: "API Testing", tools: "Postman, REST Assured, Newman", purpose: "API validation and contract testing", color: "indigo" },
        { category: "Performance", tools: "JMeter, LoadRunner, K6, Gatling", purpose: "Load testing and performance analysis", color: "orange" },
        { category: "Security", tools: "Burp Suite, OWASP ZAP, Nessus", purpose: "Vulnerability scanning and penetration testing", color: "red" },
        { category: "CI/CD", tools: "Jenkins, GitLab CI, Azure DevOps", purpose: "Test orchestration and automation", color: "green" },
        { category: "Mobile", tools: "Appium, BrowserStack, Sauce Labs", purpose: "Cross-device testing", color: "purple" },
        { category: "Monitoring", tools: "Datadog, New Relic, Prometheus", purpose: "Production performance monitoring", color: "blue" },
    ];

    const getColorClasses = (color: string) => {
        const colorMap: { [key: string]: { bg: string; text: string } } = {
            cyan: { bg: "bg-cyan-50", text: "text-cyan-600" },
            indigo: { bg: "bg-indigo-50", text: "text-indigo-600" },
            orange: { bg: "bg-orange-50", text: "text-orange-600" },
            red: { bg: "bg-red-50", text: "text-red-600" },
            green: { bg: "bg-green-50", text: "text-green-600" },
            purple: { bg: "bg-purple-50", text: "text-purple-600" },
            blue: { bg: "bg-blue-50", text: "text-blue-600" },
        };
        return colorMap[color] || colorMap.cyan;
    };

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <span className="text-sm">● Tools & Technologies</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Testing Tools &{" "}
                        <span className="text-brand-blue">Technologies</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Modern SaaS testing services leverage industry-standard tools.
                        Tool selection depends on your technology stack, team expertise,
                        and specific requirements.
                    </p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
                        <thead>
                            <tr className="bg-gray-900 text-white">
                                <th className="px-6 py-4 text-left text-sm font-semibold">Category</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold">Tools</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold">Purpose</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tools.map((row, index) => {
                                const colors = getColorClasses(row.color);
                                return (
                                    <tr
                                        key={index}
                                        className={`border-b border-gray-100 ${index % 2 === 0 ? "bg-gray-50/50" : "bg-white"
                                            } hover:bg-gray-50 transition-colors`}
                                    >
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-sm font-semibold`}>
                                                {row.category}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-gray-800 font-medium text-sm">
                                                {row.tools}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-gray-600 text-sm">{row.purpose}</span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default SaasTestingToolsTable;
