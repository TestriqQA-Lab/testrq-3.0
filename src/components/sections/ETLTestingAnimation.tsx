"use client";

import React, { useEffect, useState } from "react";
const ETLTestingAnimation = () => {    // Corporate Color Palette
    const colors = {
        bg: "#f0f9ff",
        extract: "#3b82f6",
        transform: "#8b5cf6",
        load: "#22c55e",
        warehouse: "#f59e0b",
        success: "#10b981",
        error: "#ef4444",
        warning: "#f59e0b",
        textPrimary: "#1e3a5f",
        textSecondary: "#64748b",
        dataFlow: "#60a5fa",
    };

    // Data source positions
    const sources = [
        { id: "db", x: 80, y: 120, label: "Database", color: colors.extract },
        { id: "api", x: 80, y: 230, label: "API", color: "#10b981" },
        { id: "csv", x: 80, y: 340, label: "Files", color: colors.transform },
    ];

    // Animation Sequence    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden relative shadow-xl border border-blue-200">
            <svg viewBox="0 0 800 500" className="w-full h-full relative z-10">
                <defs>
                    <filter id="etl-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <linearGradient id="extract-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#60a5fa" />
                    </linearGradient>
                    <linearGradient id="transform-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#a78bfa" />
                    </linearGradient>
                    <linearGradient id="load-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#22c55e" />
                        <stop offset="100%" stopColor="#4ade80" />
                    </linearGradient>
                </defs>

                {/* --- DATA SOURCES --- */}
                {sources.map((source, i) => (
                    <g key={source.id}>
                        <rect x={source.x - 35} y={source.y - 30} width="70" height="60" rx="10" fill="white" stroke={source.color} strokeWidth="3" filter="url(#etl-shadow)" />
                        <text x={source.x} y={source.y - 5} textAnchor="middle" fontSize="18">🗄️</text>
                        <text x={source.x} y={source.y + 20} textAnchor="middle" fontSize="10" fontWeight="600" fill={colors.textSecondary}>{source.label}</text>
                    </g>
                ))}

                {/* --- EXTRACT STAGE --- */}
                <g>
                    <rect x="200" y="160" width="100" height="140" rx="12" fill="url(#extract-gradient)" filter="url(#etl-shadow)" />
                    <text x="250" y="210" textAnchor="middle" fontSize="24">📤</text>
                    <text x="250" y="250" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">EXTRACT</text>
                    <rect x="210" y="270" width="80" height="8" rx="4" fill="rgba(255,255,255,0.3)" />
                </g>

                {/* --- TRANSFORM STAGE --- */}
                <g>
                    <rect x="350" y="160" width="100" height="140" rx="12" fill="url(#transform-gradient)" filter="url(#etl-shadow)" />
                    <text x="400" y="210" textAnchor="middle" fontSize="24">🔄</text>
                    <text x="400" y="250" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">TRANSFORM</text>
                    <rect x="360" y="270" width="80" height="8" rx="4" fill="rgba(255,255,255,0.3)" />
                </g>

                {/* --- LOAD STAGE --- */}
                <g>
                    <rect x="500" y="160" width="100" height="140" rx="12" fill="url(#load-gradient)" filter="url(#etl-shadow)" />
                    <text x="550" y="210" textAnchor="middle" fontSize="24">📥</text>
                    <text x="550" y="250" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">LOAD</text>
                    <rect x="510" y="270" width="80" height="8" rx="4" fill="rgba(255,255,255,0.3)" />
                </g>

                {/* --- DATA WAREHOUSE --- */}
                <g>
                    <rect x="660" y="140" width="110" height="180" rx="15" fill="white" stroke={colors.warehouse} strokeWidth="4" filter="url(#etl-shadow)" />
                    <text x="715" y="210" textAnchor="middle" fontSize="32">🏛️</text>
                    <text x="715" y="255" textAnchor="middle" fontSize="11" fontWeight="700" fill={colors.textPrimary}>DATA</text>
                    <text x="715" y="275" textAnchor="middle" fontSize="11" fontWeight="700" fill={colors.textPrimary}>WAREHOUSE</text>

                    {/* Mini data rows */}
                    {[0, 1, 2].map((i) => (
                        <rect key={`row-${i}`} x="675" y={295 + i * 12} width="80" height="8" rx="2" fill={colors.success} />
                    ))}
                </g>

                {/* --- FLOW ARROWS (Extract to Transform to Load to Warehouse) --- */}
                {/* Source to Extract */}
                {sources.map((source, i) => (
                    <path key={`flow-src-${i}`} d={`M ${source.x + 35} ${source.y} L 200 230`} fill="none" stroke={colors.dataFlow} strokeWidth="2" strokeDasharray="6 4" />
                ))}

                {/* Extract to Transform */}
                <path d="M 300 230 L 350 230" fill="none" stroke={colors.dataFlow} strokeWidth="3" />

                {/* Transform to Load */}
                <path d="M 450 230 L 500 230" fill="none" stroke={colors.dataFlow} strokeWidth="3" />

                {/* Load to Warehouse */}
                <path d="M 600 230 L 660 230" fill="none" stroke={colors.dataFlow} strokeWidth="3" />

                {/* --- DATA PACKETS --- */}
                <circle r="8" fill={colors.extract} />

                {/* --- QA ENGINEER --- */}
                <g>
                    <rect x="50" y="440" width="700" height="12" rx="4" fill="#dbeafe" />
                    <ellipse cx="400" cy="430" rx="30" ry="10" fill="#1e40af" />
                    <circle cx="400" cy="410" r="18" fill="#3b82f6" />
                </g>

                {/* --- VALIDATION PANEL --- */}
                <g>
                    <rect x="200" y="380" width="160" height="60" rx="10" fill="white" filter="url(#etl-shadow)" />
                    <text x="280" y="405" textAnchor="middle" fontSize="11" fontWeight="700" fill={colors.textPrimary}>Data Reconciliation</text>
                    <text x="280" y="425" textAnchor="middle" fontSize="10" fill={colors.success}>✓ 2.4M Records Validated</text>
                </g>

                {/* --- ANOMALY ALERT --- */}
                <g>
                    <rect x="400" y="380" width="160" height="40" rx="8" fill={colors.error} />
                    <text x="480" y="405" textAnchor="middle" fontSize="11" fontWeight="600" fill="white">⚠ Data Mismatch Found</text>
                </g>

                {/* --- SUCCESS BADGE --- */}
                <g>
                    <rect x="280" y="40" width="240" height="45" rx="10" fill={colors.success} filter="url(#etl-shadow)" />
                    <text x="400" y="68" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">✓ Pipeline Validated</text>
                </g>

            </svg>
        </div>
    );
};

export default ETLTestingAnimation;
