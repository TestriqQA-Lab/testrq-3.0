"use client";

import React, { useState, useEffect } from "react";

const ManagedTestingAnimation: React.FC = () => {
    const [activeMetric, setActiveMetric] = useState(0);

    const metrics = [
        { label: "Test Cases Executed", value: "12,847", trend: "+18%", icon: "📝" },
        { label: "Defect Detection Rate", value: "97.3%", trend: "+2.1%", icon: "🎯" },
        { label: "SLA Compliance", value: "99.8%", trend: "On Target", icon: "✅" },
        { label: "Automation Coverage", value: "84%", trend: "+6%", icon: "🤖" },
    ];

    const teamMembers = [
        { role: "Test Lead", status: "active", initials: "TL" },
        { role: "Automation", status: "active", initials: "AE" },
        { role: "Performance", status: "active", initials: "PE" },
        { role: "Security", status: "idle", initials: "SE" },
        { role: "Manual QA", status: "active", initials: "QA" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveMetric((prev) => (prev + 1) % metrics.length);
        }, 2500);
        return () => clearInterval(interval);
    }, [metrics.length]);

    return (
        <div className="relative w-full max-w-lg mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <span className="text-xs font-mono text-gray-400">Managed QA Dashboard — Live</span>
                </div>

                {/* Team Status */}
                <div className="mb-5">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Dedicated Team</div>
                    <div className="flex justify-between">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white ${member.status === "active" ? "bg-gradient-to-br from-blue-500 to-indigo-600" : "bg-gray-300"}`}>
                                    {member.initials}
                                </div>
                                <div className={`w-2 h-2 rounded-full mt-1 ${member.status === "active" ? "bg-green-500" : "bg-gray-400"}`}></div>
                                <span className="text-[9px] text-gray-500 mt-0.5">{member.role}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                    {metrics.map((metric, index) => (
                        <div
                            key={index}
                            className={`rounded-xl p-3 transition-all duration-500 border-2 ${index === activeMetric
                                    ? "border-blue-300 bg-blue-50 shadow-md scale-[1.02]"
                                    : "border-gray-100 bg-gray-50"
                                }`}
                        >
                            <div className="flex items-center gap-1 mb-1">
                                <span className="text-sm">{metric.icon}</span>
                                <span className="text-[10px] text-gray-500 font-medium">{metric.label}</span>
                            </div>
                            <div className="text-lg font-bold text-gray-900">{metric.value}</div>
                            <span className={`text-[10px] font-semibold ${index === activeMetric ? "text-green-600" : "text-gray-400"}`}>
                                {metric.trend}
                            </span>
                        </div>
                    ))}
                </div>

                {/* SLA Status Bar */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 border border-green-200">
                    <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold text-green-700">SLA Status: All Green</span>
                        <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">100% Compliant</span>
                    </div>
                    <div className="w-full bg-green-200 rounded-full h-1.5">
                        <div className="bg-gradient-to-r from-green-500 to-emerald-400 h-1.5 rounded-full w-[99.8%]"></div>
                    </div>
                </div>
            </div>

            {/* Decorative */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-cyan-500/20 rounded-full blur-2xl"></div>
        </div>
    );
};

export default ManagedTestingAnimation;
