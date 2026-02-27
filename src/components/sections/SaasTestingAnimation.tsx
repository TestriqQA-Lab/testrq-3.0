"use client";

import React, { useState, useEffect } from "react";

const SaasTestingAnimation: React.FC = () => {
    const [activeTenant, setActiveTenant] = useState(0);
    const [metrics, setMetrics] = useState({ users: 12847, uptime: 99.97, requests: 2.4 });

    const tenants = [
        { name: "HealthCo", color: "#06b6d4", users: "2.1K", status: "healthy" },
        { name: "FinServ", color: "#8b5cf6", users: "5.8K", status: "healthy" },
        { name: "RetailX", color: "#10b981", users: "3.2K", status: "healthy" },
        { name: "EduPlatform", color: "#f59e0b", users: "1.7K", status: "scaling" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTenant((prev) => (prev + 1) % tenants.length);
            setMetrics((prev) => ({
                users: prev.users + Math.floor(Math.random() * 10),
                uptime: 99.9 + Math.random() * 0.09,
                requests: 2 + Math.random() * 1,
            }));
        }, 2500);
        return () => clearInterval(interval);
    }, [tenants.length]);

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
                    <span className="text-xs font-mono text-gray-400">
                        SaaS QA Dashboard — Multi-Tenant
                    </span>
                </div>

                {/* Global Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                    <div className="bg-cyan-50 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-cyan-600">
                            {metrics.users.toLocaleString()}
                        </div>
                        <div className="text-[10px] text-cyan-700 font-medium">Active Users</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-green-600">
                            {metrics.uptime.toFixed(2)}%
                        </div>
                        <div className="text-[10px] text-green-700 font-medium">Uptime SLA</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-purple-600">
                            {metrics.requests.toFixed(1)}M
                        </div>
                        <div className="text-[10px] text-purple-700 font-medium">API Calls/hr</div>
                    </div>
                </div>

                {/* Tenant Cards */}
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Tenant Isolation Status
                </div>
                <div className="space-y-2 mb-5">
                    {tenants.map((tenant, index) => (
                        <div
                            key={tenant.name}
                            className={`flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-500 border-2 ${index === activeTenant
                                    ? "border-cyan-300 bg-cyan-50 shadow-md scale-[1.02]"
                                    : "border-gray-100 bg-gray-50"
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <div
                                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                                    style={{ backgroundColor: tenant.color }}
                                >
                                    {tenant.name[0]}
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-gray-800">
                                        {tenant.name}
                                    </div>
                                    <div className="text-[10px] text-gray-500">
                                        {tenant.users} users
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div
                                    className={`w-2 h-2 rounded-full ${tenant.status === "healthy"
                                            ? "bg-green-500"
                                            : "bg-yellow-500 animate-pulse"
                                        }`}
                                ></div>
                                <span className="text-[10px] font-medium text-gray-500 capitalize">
                                    {tenant.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Security Status */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-3 border border-green-100">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs">🔒</span>
                            </div>
                            <span className="text-xs font-semibold text-green-800">
                                Data Isolation: Verified
                            </span>
                        </div>
                        <span className="text-[10px] text-green-600 font-mono">
                            SOC2 | GDPR | HIPAA
                        </span>
                    </div>
                </div>
            </div>

            {/* Decorative */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-indigo-500/20 rounded-full blur-2xl"></div>
        </div>
    );
};

export default SaasTestingAnimation;
