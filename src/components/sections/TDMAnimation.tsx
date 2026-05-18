"use client";

import React, { useEffect, useState } from "react";
const TDMAnimation = () => {    const colors = {
        bg: "#f8fafc",
        production: "#ef4444",
        masked: "#10b981",
        synthetic: "#3b82f6",
        shield: "#6366f1",
        textPrimary: "#1e293b",
        textSecondary: "#64748b",
        connection: "#cbd5e1",
    };    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-white overflow-hidden relative shadow-xl border border-slate-200">
            <svg viewBox="0 0 800 500" className="w-full h-full relative z-10">
                <defs>
                    <filter id="tdm-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.1" />
                    </filter>
                    <linearGradient id="shield-gradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#4f46e5" />
                    </linearGradient>
                </defs>

                {/* --- PRODUCTION DATA HUB --- */}
                <g>
                    <rect x="50" y="150" width="180" height="200" rx="12" fill="#fff" stroke="#e2e8f0" strokeWidth="2" filter="url(#tdm-shadow)" />
                    <text x="140" y="180" textAnchor="middle" fontSize="14" fontWeight="700" fill={colors.textPrimary}>Production Data</text>

                    {[1, 2, 3].map((i) => (
                        <rect key={`prod-${i}`} x="70" y={200 + i * 35} width="140" height="25" rx="4" fill={colors.production} fillOpacity="0.1" stroke={colors.production} strokeWidth="1" />
                    ))}
                    <text x="140" y="270" textAnchor="middle" fontSize="10" fill={colors.production} opacity="0.8">Sensitive PII</text>
                </g>

                {/* --- DATA MASKING ENGINE --- */}
                <g>
                    <circle cx="400" cy="250" r="60" fill="url(#shield-gradient)" filter="url(#tdm-shadow)" />
                    <path d="M385 240 L400 225 L415 240 M400 225 L400 275" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    <text x="400" y="330" textAnchor="middle" fontSize="14" fontWeight="700" fill={colors.shield}>TDM Engine</text>
                </g>

                {/* --- MASKED QA DATA HUB --- */}
                <g>
                    <rect x="570" y="150" width="180" height="200" rx="12" fill="#fff" stroke="#e2e8f0" strokeWidth="2" filter="url(#tdm-shadow)" />
                    <text x="660" y="180" textAnchor="middle" fontSize="14" fontWeight="700" fill={colors.textPrimary}>Masked QA Data</text>

                    {[1, 2, 3].map((i) => (
                        <rect key={`masked-${i}`} x="590" y={200 + i * 35} width="140" height="25" rx="4" fill={colors.masked} fillOpacity="0.1" stroke={colors.masked} strokeWidth="1" />
                    ))}
                    <text x="660" y="270" textAnchor="middle" fontSize="10" fill={colors.masked} opacity="0.8">Secure & Compliant</text>
                </g>

                {/* --- SYNTHETIC DATA GENERATOR --- */}
                <g>
                    <rect x="310" y="50" width="180" height="80" rx="12" fill="#fff" stroke={colors.synthetic} strokeWidth="2" filter="url(#tdm-shadow)" />
                    <text x="400" y="80" textAnchor="middle" fontSize="12" fontWeight="700" fill={colors.synthetic}>AI Synthetic Gen</text>

                    <g>
                        {[(x: number) => x - 30, (x: number) => x, (x: number) => x + 30].map((fn, i) => (
                            <circle key={`syn-${i}`} cx={fn(400)} cy="105" r="5" fill={colors.synthetic} />
                        ))}
                    </g>
                </g>

                {/* --- COMPLIANCE STATUS --- */}
                <g>
                    <rect x="300" y="420" width="200" height="40" rx="20" fill={colors.masked} />
                    <text x="400" y="445" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">✓ GDPR & SOC2 Compliant</text>
                </g>

            </svg>
        </div>
    );
};

export default TDMAnimation;
