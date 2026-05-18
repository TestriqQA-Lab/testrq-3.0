"use client";

import React, { useEffect, useState } from "react";
const SapTestingAnimation = () => {    // Corporate Color Palette (SAP Blue/Orange theme)
    const colors = {
        bg: "#f0f9ff",
        sapBlue: "#0070f2",
        sapNavy: "#1e3a5f",
        finance: "#2563eb",
        hr: "#8b5cf6",
        scm: "#059669",
        sales: "#f59e0b",
        success: "#10b981",
        error: "#ef4444",
        warning: "#f59e0b",
        textPrimary: "#1e3a5f",
        textSecondary: "#64748b",
        dataFlow: "#60a5fa",
    };

    // SAP Modules positioned in a diamond/square pattern
    const modules = [
        { id: "finance", x: 320, y: 100, label: "Finance", emoji: "💰", color: colors.finance },
        { id: "hr", x: 160, y: 220, label: "HR", emoji: "👥", color: colors.hr },
        { id: "scm", x: 320, y: 340, label: "Supply Chain", emoji: "📦", color: colors.scm },
        { id: "sales", x: 480, y: 220, label: "Sales", emoji: "📊", color: colors.sales },
    ];

    // Central SAP Hub
    const hubCenter = { x: 320, y: 220 };

    // Animation Sequence    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden relative shadow-xl border border-blue-200">
            <svg viewBox="0 0 640 480" className="w-full h-full relative z-10">
                <defs>
                    <filter id="sap-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <filter id="sap-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <linearGradient id="sap-hub-gradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#0070f2" />
                        <stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                </defs>

                {/* --- SAP CENTRAL HUB --- */}
                <g>
                    {/* Hub outer ring */}
                    <circle cx={hubCenter.x} cy={hubCenter.y} r="65" fill="white" stroke={colors.sapBlue} strokeWidth="4" filter="url(#sap-shadow)" />
                    {/* Hub inner */}
                    <circle cx={hubCenter.x} cy={hubCenter.y} r="50" fill="url(#sap-hub-gradient)" />
                    {/* SAP Logo placeholder */}
                    <text x={hubCenter.x} y={hubCenter.y - 8} textAnchor="middle" fontSize="16" fontWeight="700" fill="white">SAP</text>
                    <text x={hubCenter.x} y={hubCenter.y + 12} textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.9)">S/4HANA</text>
                </g>

                {/* --- CONNECTION LINES TO MODULES --- */}
                {modules.map((module, i) => (
                    <line key={`line-${module.id}`} x1={hubCenter.x} y1={hubCenter.y} x2={module.x} y2={module.y} stroke={colors.dataFlow} strokeWidth="2" strokeDasharray="6 4" />
                ))}

                {/* --- SAP MODULES --- */}
                {modules.map((module, i) => (
                    <g key={module.id}>
                        {/* Module background */}
                        <rect x={module.x - 45} y={module.y - 35} width="90" height="70" rx="10" fill="white" stroke={module.color} strokeWidth="3" filter="url(#sap-shadow)" />

                        {/* Module icon */}
                        <text x={module.x} y={module.y - 5} textAnchor="middle" fontSize="22">{module.emoji}</text>

                        {/* Module label */}
                        <text x={module.x} y={module.y + 20} textAnchor="middle" fontSize="10" fontWeight="600" fill={colors.textPrimary}>
                            {module.label}
                        </text>

                        {/* Status indicator */}
                        <circle cx={module.x + 35} cy={module.y - 25} r="8" fill={colors.success} stroke="white" strokeWidth="2" />
                    </g>
                ))}

                {/* --- DATA FLOW PACKETS --- */}
                {modules.map((module, i) => (
                    <circle key={`packet-${module.id}`} r="5" fill={module.color} filter="url(#sap-glow)" />
                ))}

                {/* --- QA ENGINEER --- */}
                <g>
                    {/* Desk */}
                    <rect x="30" y="420" width="580" height="12" rx="4" fill="#dbeafe" />
                    {/* Engineer Body */}
                    <ellipse cx="100" cy="410" rx="25" ry="8" fill={colors.sapNavy} />
                    <circle cx="100" cy="390" r="16" fill={colors.sapBlue} />
                    {/* Laptop */}
                    <rect x="75" y="395" width="50" height="30" rx="4" fill="#334155" />
                    <rect x="78" y="398" width="44" height="24" rx="2" fill="#0ea5e9" opacity="0.3" />
                </g>

                {/* --- VALIDATION PANEL --- */}
                <g>
                    <rect x="500" y="60" width="120" height="100" rx="8" fill="white" filter="url(#sap-shadow)" />
                    <text x="560" y="85" textAnchor="middle" fontSize="10" fontWeight="700" fill={colors.textPrimary}>Test Results</text>

                    {/* Test result bars */}
                    {[
                        { y: 100, w: 90, label: "Integration", color: colors.success },
                        { y: 120, w: 85, label: "Regression", color: colors.success },
                        { y: 140, w: 70, label: "Performance", color: colors.warning },
                    ].map((bar, i) => (
                        <React.Fragment key={`result-${i}`}>
                            <text x="510" y={bar.y + 4} fontSize="8" fill={colors.textSecondary}>{bar.label}</text>
                            <rect x="510" y={bar.y + 8} width="100" height="6" rx="3" fill="#e2e8f0" />
                            <rect x="510" y={bar.y + 8} height="6" rx="3" fill={bar.color} />
                        </React.Fragment>
                    ))}
                </g>

                {/* --- DEFECT ALERT --- */}
                <g>
                    <rect x="240" y="380" width="160" height="40" rx="8" fill={colors.error} />
                    <text x="320" y="405" textAnchor="middle" fontSize="11" fontWeight="600" fill="white">⚠ SCM Defect Detected</text>
                </g>

                {/* --- DEFECT LOG PANEL --- */}
                <g>
                    <rect x="480" y="320" width="140" height="80" rx="8" fill="white" filter="url(#sap-shadow)" />
                    <text x="550" y="340" textAnchor="middle" fontSize="10" fontWeight="700" fill={colors.textPrimary}>Defect Log</text>
                    <text x="490" y="360" fontSize="9" fill={colors.error}>• SCM-4521: Data sync error</text>
                    <text x="490" y="375" fontSize="9" fill={colors.textSecondary}>Priority: High</text>
                    <text x="490" y="390" fontSize="9" fill={colors.warning}>Status: In Progress</text>
                </g>

                {/* --- SUCCESS BANNER --- */}
                <g>
                    <rect x="170" y="20" width="300" height="40" rx="10" fill={colors.success} filter="url(#sap-shadow)" />
                    <text x="320" y="46" textAnchor="middle" fontSize="13" fontWeight="700" fill="white">✓ SAP System Validated</text>
                </g>

                {/* --- LIVE INDICATOR --- */}
                <g>
                    <rect x="20" y="20" width="80" height="24" rx="12" fill={colors.sapBlue} />
                    <circle cx="35" cy="32" r="5" fill="white" />
                    <text x="65" y="37" textAnchor="middle" fontSize="10" fontWeight="600" fill="white">TESTING</text>
                </g>

            </svg>
        </div>
    );
};

export default SapTestingAnimation;
