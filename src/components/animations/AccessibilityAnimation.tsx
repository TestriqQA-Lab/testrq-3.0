"use client";

import React from "react";

const AccessibilityAnimation: React.FC = () => {
    return (
        <div className="w-full h-auto max-w-lg mx-auto aspect-square relative flex items-center justify-center">
            {/* The SVG animation */}
            <svg
                viewBox="0 0 500 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Accessibility Testing Process Animation"
                className="w-full h-full drop-shadow-2xl"
            >
                <title>An animation showing accessibility testing of a digital interface</title>
                <style>
                    {`
                    @keyframes scanner {
                        0%, 10% { transform: translateY(0); opacity: 0; }
                        15% { opacity: 1; }
                        85% { opacity: 1; }
                        90%, 100% { transform: translateY(350px); opacity: 0; }
                    }
                    @keyframes focusRing {
                        0%, 15% { opacity: 0; transform: translate(0, 0); }
                        20%, 35% { opacity: 1; transform: translate(0, 0); } /* button 1 */
                        40%, 55% { opacity: 1; transform: translate(120px, 0); } /* button 2 */
                        60%, 75% { opacity: 1; transform: translate(240px, 0); } /* button 3 */
                        80%, 100% { opacity: 0; transform: translate(240px, 0); }
                    }
                    @keyframes audioWave {
                        0%, 100% { transform: scaleY(0.3); }
                        50% { transform: scaleY(1); }
                    }
                    @keyframes contrastShift {
                        0%, 65% { fill: #E2E8F0; }
                        70%, 100% { fill: #1E293B; }
                    }
                    @keyframes textContrastShift {
                        0%, 65% { fill: #94A3B8; }
                        70%, 100% { fill: #F8FAFC; }
                    }
                    @keyframes fixMarker {
                        0%, 75% { fill: #EF4444; transform: scale(1); }
                        80% { transform: scale(0); fill: #EF4444; }
                        85%, 100% { fill: #22C55E; transform: scale(1); }
                    }
                    @keyframes badgePop {
                        0%, 85% { transform: scale(0) rotate(-15deg); opacity: 0; }
                        90% { transform: scale(1.1) rotate(5deg); opacity: 1; }
                        95%, 100% { transform: scale(1) rotate(0deg); opacity: 1; }
                    }
                    
                    @media (prefers-reduced-motion: reduce) {
                        .anim-scanner, .anim-focus, .anim-wave, .anim-badge { animation: none !important; }
                        .anim-contrast { fill: #1E293B !important; }
                        .anim-text-contrast { fill: #F8FAFC !important; }
                        .anim-marker { fill: #22C55E !important; }
                        .anim-badge { transform: scale(1) rotate(0deg) !important; opacity: 1 !important; }
                    }

                    .anim-scanner { animation: scanner 10s infinite ease-in-out; }
                    .anim-focus { animation: focusRing 10s infinite step-end; }
                    .anim-wave-1 { animation: audioWave 1.2s infinite ease-in-out; transform-origin: center; }
                    .anim-wave-2 { animation: audioWave 1.2s infinite ease-in-out 0.2s; transform-origin: center; }
                    .anim-wave-3 { animation: audioWave 1.2s infinite ease-in-out 0.4s; transform-origin: center; }
                    .anim-contrast { animation: contrastShift 10s infinite; }
                    .anim-text-contrast { animation: textContrastShift 10s infinite; }
                    .anim-marker { animation: fixMarker 10s infinite; transform-origin: center; }
                    .anim-badge { animation: badgePop 10s infinite cubic-bezier(0.34, 1.56, 0.64, 1); transform-origin: center; }
                    `}
                </style>

                {/* Background Window */}
                <g opacity="0.95">
                    <rect x="25" y="25" width="450" height="400" rx="16" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
                    <rect x="25" y="25" width="450" height="40" rx="16" fill="#F1F5F9" />
                    <circle cx="50" cy="45" r="5" fill="#EF4444" />
                    <circle cx="70" cy="45" r="5" fill="#EAB308" />
                    <circle cx="90" cy="45" r="5" fill="#22C55E" />
                </g>

                {/* UI Elements Overview */}
                <rect x="60" y="90" width="150" height="20" rx="4" fill="#CBD5E1" />
                <rect x="60" y="120" width="300" height="12" rx="4" fill="#E2E8F0" />
                <rect x="60" y="140" width="250" height="12" rx="4" fill="#E2E8F0" />

                {/* Audio Waveform for Screen Reader */}
                <g transform="translate(380, 100)">
                    <rect x="0" y="0" width="6" height="24" rx="3" fill="#3B82F6" className="anim-wave-1" />
                    <rect x="10" y="-6" width="6" height="36" rx="3" fill="#3B82F6" className="anim-wave-2" />
                    <rect x="20" y="0" width="6" height="24" rx="3" fill="#3B82F6" className="anim-wave-3" />
                </g>

                {/* Focusable Buttons Area */}
                <g transform="translate(60, 200)">
                    <rect x="0" y="0" width="100" height="40" rx="8" fill="#E2E8F0" />
                    <rect x="20" y="15" width="60" height="10" rx="4" fill="#94A3B8" />

                    <rect x="120" y="0" width="100" height="40" rx="8" fill="#E2E8F0" />
                    <rect x="140" y="15" width="60" height="10" rx="4" fill="#94A3B8" />

                    <rect x="240" y="0" width="100" height="40" rx="8" fill="#E2E8F0" />
                    <rect x="260" y="15" width="60" height="10" rx="4" fill="#94A3B8" />

                    {/* Animated Focus Ring */}
                    <rect x="-4" y="-4" width="108" height="48" rx="12" fill="none" stroke="#2563EB" strokeWidth="4" strokeDasharray="4 4" className="anim-focus" />
                </g>

                {/* Contrast Shift Area */}
                <g transform="translate(60, 280)">
                    <rect x="0" y="0" width="380" height="100" rx="12" className="anim-contrast" />
                    <rect x="20" y="20" width="120" height="16" rx="4" className="anim-text-contrast" />
                    <rect x="20" y="50" width="200" height="10" rx="4" className="anim-text-contrast" opacity="0.8" />
                    <rect x="20" y="70" width="150" height="10" rx="4" className="anim-text-contrast" opacity="0.8" />
                </g>

                {/* Issue Marker (Turns from error to success) */}
                <g transform="translate(390, 310)">
                    <circle cx="20" cy="20" r="16" className="anim-marker" />
                    <path d="M12 20L18 26L28 14" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </g>

                {/* Laser Scanner */}
                <g className="anim-scanner">
                    <rect x="20" y="60" width="460" height="4" fill="#3B82F6" opacity="0.8" />
                    <rect x="20" y="20" width="460" height="40" fill="url(#laserGlow)" opacity="0.3" />
                </g>

                {/* Final Compliance Badge */}
                <g transform="translate(250, 225)">
                    <g className="anim-badge">
                        <circle cx="0" cy="0" r="60" fill="#22C55E" stroke="#166534" strokeWidth="4" />
                        <circle cx="0" cy="0" r="50" fill="none" stroke="white" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
                        <g transform="translate(-16, -16) scale(1.5)">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="white" transform="translate(-1.5, -1.5)" opacity="0" />
                            <path d="M15 11h2c0 2.21-1.79 4-4 4s-4-1.79-4-4h2c0 1.1.9 2 2 2s2-.9 2-2zM16 5h-2.53C12.82 3.82 11.51 3 10 3s-2.82.82-3.47 2H4v2h12V5zM10 5c.83 0 1.5-.67 1.5-1.5S10.83 2 10 2s-1.5.67-1.5 1.5S9.17 5 10 5zm-4.71 5H3.5v2h2.08c-.05-.33-.08-.66-.08-1s.03-.67.08-1zm11.42 0c.05.33.08.66.08 1s-.03.67-.08 1h2.08v-2h-1.79z" fill="white" transform="scale(0.8) translate(3, 4)" />
                        </g>
                    </g>
                </g>

                <defs>
                    <linearGradient id="laserGlow" x1="0" y1="1" x2="0" y2="0">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

export default AccessibilityAnimation;
