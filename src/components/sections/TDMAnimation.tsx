"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const TDMAnimation = () => {
    const controls = useAnimation();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const colors = {
        bg: "#f8fafc",
        production: "#ef4444",
        masked: "#10b981",
        synthetic: "#3b82f6",
        shield: "#6366f1",
        textPrimary: "#1e293b",
        textSecondary: "#64748b",
        connection: "#cbd5e1",
    };

    useEffect(() => {
        if (!mounted) return;

        let isMounted = true;
        const sequence = async () => {
            await new Promise(resolve => setTimeout(resolve, 500));

            while (isMounted) {
                await controls.start("reset");
                await controls.start("init");
                await controls.start("masking");
                await controls.start("synthetic");
                await controls.start("security");
                await new Promise(resolve => setTimeout(resolve, 3000));
            }
        };
        sequence();

        return () => { isMounted = false; };
    }, [controls, mounted]);

    if (!mounted) return <div className="w-full aspect-[4/3] rounded-2xl bg-slate-50 shadow-xl border border-slate-200" />;

    return (
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
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, x: -50 },
                        init: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                    }}
                    animate={controls}
                >
                    <rect x="50" y="150" width="180" height="200" rx="12" fill="#fff" stroke="#e2e8f0" strokeWidth="2" filter="url(#tdm-shadow)" />
                    <text x="140" y="180" textAnchor="middle" fontSize="14" fontWeight="700" fill={colors.textPrimary}>Production Data</text>

                    {[1, 2, 3].map((i) => (
                        <motion.rect
                            key={`prod-${i}`}
                            x="70" y={200 + i * 35} width="140" height="25" rx="4"
                            fill={colors.production} fillOpacity="0.1" stroke={colors.production} strokeWidth="1"
                            variants={{
                                masking: { x: [0, 200], opacity: [1, 0], transition: { duration: 1, delay: i * 0.2 } }
                            }}
                            animate={controls}
                        />
                    ))}
                    <text x="140" y="270" textAnchor="middle" fontSize="10" fill={colors.production} opacity="0.8">Sensitive PII</text>
                </motion.g>

                {/* --- DATA MASKING ENGINE --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, scale: 0.8 },
                        init: { opacity: 1, scale: 1, transition: { delay: 0.3 } }
                    }}
                    animate={controls}
                >
                    <circle cx="400" cy="250" r="60" fill="url(#shield-gradient)" filter="url(#tdm-shadow)" />
                    <motion.path
                        d="M385 240 L400 225 L415 240 M400 225 L400 275"
                        stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"
                        animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                    <text x="400" y="330" textAnchor="middle" fontSize="14" fontWeight="700" fill={colors.shield}>TDM Engine</text>
                </motion.g>

                {/* --- MASKED QA DATA HUB --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, x: 50 },
                        init: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.6 } }
                    }}
                    animate={controls}
                >
                    <rect x="570" y="150" width="180" height="200" rx="12" fill="#fff" stroke="#e2e8f0" strokeWidth="2" filter="url(#tdm-shadow)" />
                    <text x="660" y="180" textAnchor="middle" fontSize="14" fontWeight="700" fill={colors.textPrimary}>Masked QA Data</text>

                    {[1, 2, 3].map((i) => (
                        <motion.rect
                            key={`masked-${i}`}
                            x="590" y={200 + i * 35} width="140" height="25" rx="4"
                            fill={colors.masked} fillOpacity="0.1" stroke={colors.masked} strokeWidth="1"
                            initial={{ opacity: 0 }}
                            variants={{
                                masking: { opacity: 1, transition: { delay: 1 + i * 0.2 } }
                            }}
                            animate={controls}
                        />
                    ))}
                    <text x="660" y="270" textAnchor="middle" fontSize="10" fill={colors.masked} opacity="0.8">Secure & Compliant</text>
                </motion.g>

                {/* --- SYNTHETIC DATA GENERATOR --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: 50 },
                        synthetic: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                    }}
                    animate={controls}
                >
                    <rect x="310" y="50" width="180" height="80" rx="12" fill="#fff" stroke={colors.synthetic} strokeWidth="2" filter="url(#tdm-shadow)" />
                    <text x="400" y="80" textAnchor="middle" fontSize="12" fontWeight="700" fill={colors.synthetic}>AI Synthetic Gen</text>

                    <motion.g
                        variants={{
                            synthetic: { opacity: [0, 1], transition: { delay: 0.5 } }
                        }}
                        animate={controls}
                    >
                        {[x => x - 30, x => x, x => x + 30].map((fn, i) => (
                            <motion.circle
                                key={`syn-${i}`}
                                cx={fn(400)} cy="105" r="5" fill={colors.synthetic}
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}
                            />
                        ))}
                    </motion.g>
                </motion.g>

                {/* --- COMPLIANCE STATUS --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        security: { opacity: 1, transition: { duration: 0.5 } }
                    }}
                    animate={controls}
                >
                    <rect x="300" y="420" width="200" height="40" rx="20" fill={colors.masked} />
                    <text x="400" y="445" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">✓ GDPR & SOC2 Compliant</text>
                </motion.g>

            </svg>
        </div>
    );
};

export default TDMAnimation;
