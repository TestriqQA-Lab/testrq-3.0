"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const MobileTestingAnimation = () => {
    const controls = useAnimation();
    const [mounted, setMounted] = useState(false);
    const [statusText, setStatusText] = useState("");

    useEffect(() => {
        setMounted(true);
    }, []);

    // Corporate Color Palette
    const colors = {
        bg: "#f8fafc",
        phoneBg: "#1e293b",
        screenBg: "#0f172a",
        accent: "#0891b2",
        accentLight: "#22d3ee",
        success: "#10b981",
        error: "#ef4444",
        warning: "#f59e0b",
        textPrimary: "#1e293b",
        textSecondary: "#64748b",
        ios: "#007aff",
        android: "#3ddc84",
    };

    // Animation Sequence
    useEffect(() => {
        if (!mounted) return;

        let isMounted = true;
        const sequence = async () => {
            await new Promise(resolve => setTimeout(resolve, 500));

            while (isMounted) {
                setStatusText(""); // Clear text on reset
                await controls.start("reset");
                await controls.start("init");
                await controls.start("launch");
                await controls.start("execute");
                await controls.start("validate");
                await controls.start("bug");

                setStatusText("Bug Logged");
                await controls.start("log");

                setStatusText("All Tests Passed");
                await controls.start("resolve");

                await new Promise(resolve => setTimeout(resolve, 3000));
            }
        };
        sequence();

        return () => { isMounted = false; };
    }, [controls, mounted]);

    if (!mounted) return <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 shadow-xl border border-slate-200" />;

    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden relative shadow-xl border border-slate-200">
            <svg viewBox="0 0 800 600" className="w-full h-full relative z-10">
                <defs>
                    <filter id="mobile-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.15" />
                    </filter>
                    <linearGradient id="ios-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#667eea" />
                        <stop offset="100%" stopColor="#764ba2" />
                    </linearGradient>
                    <linearGradient id="android-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#11998e" />
                        <stop offset="100%" stopColor="#38ef7d" />
                    </linearGradient>
                </defs>

                {/* --- iOS DEVICE (Left) --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, x: -50 },
                        init: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
                        launch: { opacity: 1 },
                        execute: { opacity: 1 },
                        validate: { opacity: 1 },
                        bug: { opacity: 1 },
                        log: { opacity: 1 },
                        resolve: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    {/* Phone Frame */}
                    <rect x="180" y="100" width="180" height="380" rx="24" fill={colors.phoneBg} filter="url(#mobile-shadow)" />
                    {/* Notch */}
                    <rect x="245" y="108" width="50" height="20" rx="10" fill={colors.screenBg} />
                    {/* Screen */}
                    <rect x="192" y="130" width="156" height="330" rx="4" fill={colors.screenBg} />

                    {/* iOS Label */}
                    <circle cx="350" cy="115" r="18" fill="white" filter="url(#mobile-shadow)" />
                    <text x="350" y="120" textAnchor="middle" fontSize="14" fontWeight="bold" fill={colors.ios}></text>

                    {/* App UI Elements */}
                    <motion.g
                        variants={{
                            reset: { opacity: 0 },
                            init: { opacity: 0 },
                            launch: { opacity: 1, transition: { duration: 0.5 } },
                            execute: { opacity: 1 },
                            validate: { opacity: 1 },
                            bug: { opacity: 1 },
                            log: { opacity: 1 },
                            resolve: { opacity: 1 }
                        }}
                        animate={controls}
                    >
                        {/* Header Bar */}
                        <rect x="192" y="130" width="156" height="40" fill="url(#ios-gradient)" />
                        <text x="270" y="155" textAnchor="middle" fontSize="12" fill="white" fontWeight="600">MyApp</text>

                        {/* List Items */}
                        {[0, 1, 2, 3].map((i) => (
                            <motion.g key={`ios-item-${i}`}
                                variants={{
                                    validate: i < 2 ? { opacity: 1 } : { opacity: 1 },
                                    bug: i === 2 ? { opacity: 1 } : { opacity: 1 },
                                    log: { opacity: 1 },
                                    resolve: { opacity: 1 }
                                }}
                                animate={controls}
                            >
                                <rect x="200" y={185 + i * 55} width="140" height="45" rx="8" fill="#1e293b" />
                                <rect x="210" y={195 + i * 55} width="80" height="8" rx="4" fill={colors.textSecondary} />
                                <rect x="210" y={210 + i * 55} width="50" height="6" rx="3" fill={colors.textSecondary} opacity="0.5" />

                                {/* Checkmarks for validated items */}
                                <motion.circle
                                    cx="325" cy={207 + i * 55} r="10"
                                    fill={i === 2 ? colors.error : colors.success}
                                    variants={{
                                        reset: { scale: 0, opacity: 0 },
                                        validate: i < 2 ? { scale: 1, opacity: 1, transition: { delay: 0.5 + i * 0.3 } } : { opacity: 0 },
                                        bug: i === 2 ? { scale: 1, opacity: 1, transition: { type: "spring" } } : i < 2 ? { scale: 1, opacity: 1 } : { opacity: 0 },
                                        log: { scale: 1, opacity: i <= 2 ? 1 : 0 },
                                        resolve: { scale: 1, opacity: 1, fill: colors.success, transition: { delay: i * 0.2 } }
                                    }}
                                    animate={controls}
                                />
                            </motion.g>
                        ))}
                    </motion.g>
                </motion.g>

                {/* --- ANDROID DEVICE (Right) --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, x: 50 },
                        init: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
                        launch: { opacity: 1 },
                        execute: { opacity: 1 },
                        validate: { opacity: 1 },
                        bug: { opacity: 1 },
                        log: { opacity: 1 },
                        resolve: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    {/* Phone Frame */}
                    <rect x="440" y="100" width="180" height="380" rx="20" fill="#374151" filter="url(#mobile-shadow)" />
                    {/* Screen */}
                    <rect x="450" y="115" width="160" height="350" rx="4" fill={colors.screenBg} />

                    {/* Android Label */}
                    <circle cx="610" cy="115" r="18" fill="white" filter="url(#mobile-shadow)" />
                    <text x="610" y="121" textAnchor="middle" fontSize="16">🤖</text>

                    {/* App UI Elements */}
                    <motion.g
                        variants={{
                            reset: { opacity: 0 },
                            init: { opacity: 0 },
                            launch: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
                            execute: { opacity: 1 },
                            validate: { opacity: 1 },
                            bug: { opacity: 1 },
                            log: { opacity: 1 },
                            resolve: { opacity: 1 }
                        }}
                        animate={controls}
                    >
                        {/* Header Bar */}
                        <rect x="450" y="115" width="160" height="45" fill="url(#android-gradient)" />
                        <text x="530" y="143" textAnchor="middle" fontSize="12" fill="white" fontWeight="600">TestApp</text>

                        {/* Cards */}
                        {[0, 1, 2].map((i) => (
                            <motion.g key={`android-card-${i}`}>
                                <rect x="458" y={175 + i * 75} width="144" height="60" rx="8" fill="#1e293b" />
                                <rect x="468" y={185 + i * 75} width="90" height="8" rx="4" fill={colors.textSecondary} />
                                <rect x="468" y={200 + i * 75} width="60" height="6" rx="3" fill={colors.textSecondary} opacity="0.5" />
                                <rect x="468" y={215 + i * 75} width="40" height="6" rx="3" fill={colors.textSecondary} opacity="0.3" />

                                {/* Status indicator */}
                                <motion.rect
                                    x="580" y={190 + i * 75} width="14" height="14" rx="3"
                                    variants={{
                                        reset: { fill: colors.textSecondary, opacity: 0.3 },
                                        validate: { fill: colors.success, opacity: 1, transition: { delay: 0.8 + i * 0.3 } },
                                        bug: { fill: colors.success, opacity: 1 },
                                        log: { fill: colors.success, opacity: 1 },
                                        resolve: { fill: colors.success, opacity: 1 }
                                    }}
                                    animate={controls}
                                />
                            </motion.g>
                        ))}
                    </motion.g>
                </motion.g>

                {/* --- TOUCH GESTURE INDICATOR --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 0 },
                        launch: { opacity: 0 },
                        execute: { opacity: 1, transition: { duration: 0.3 } },
                        validate: { opacity: 0 },
                        bug: { opacity: 0 },
                        log: { opacity: 0 },
                        resolve: { opacity: 0 }
                    }}
                    animate={controls}
                >
                    {/* Tap Ripple on iOS */}
                    <motion.circle
                        cx="270" cy="300" r="20"
                        fill={colors.accentLight}
                        opacity="0.3"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    />
                    <circle cx="270" cy="300" r="8" fill={colors.accentLight} />

                    {/* Swipe Gesture on Android */}
                    <motion.path
                        d="M 530 250 L 530 350"
                        stroke={colors.accentLight}
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray="10 5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </motion.g>

                {/* --- QA ENGINEER SILHOUETTE --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: 50 },
                        init: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                        launch: { opacity: 1 },
                        execute: { opacity: 1 },
                        validate: { opacity: 1 },
                        bug: { opacity: 1 },
                        log: { opacity: 1 },
                        resolve: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    {/* Desk */}
                    <rect x="100" y="520" width="600" height="15" rx="4" fill="#cbd5e1" />
                    {/* Chair */}
                    <ellipse cx="400" cy="555" rx="50" ry="25" fill="#475569" />
                    {/* Person */}
                    <ellipse cx="400" cy="510" rx="35" ry="12" fill="#334155" />
                    <circle cx="400" cy="485" r="22" fill="#475569" />
                </motion.g>

                {/* --- STATUS PANEL --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: 20 },
                        init: { opacity: 0 },
                        launch: { opacity: 0 },
                        execute: { opacity: 0 },
                        validate: { opacity: 0 },
                        bug: { opacity: 0 },
                        log: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                        resolve: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="300" y="30" width="200" height="50" rx="8" fill="white" filter="url(#mobile-shadow)" />
                    <motion.text
                        x="400" y="60"
                        textAnchor="middle"
                        fontSize="14"
                        fontWeight="600"
                        variants={{
                            reset: { opacity: 0 },
                            log: { opacity: 1, fill: colors.warning },
                            resolve: { opacity: 1, fill: colors.success }
                        }}
                        initial="reset"
                        animate={controls}
                    >
                        {statusText}
                    </motion.text>
                </motion.g>

            </svg>
        </div>
    );
};

export default MobileTestingAnimation;
