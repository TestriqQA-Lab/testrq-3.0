"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const GamingTestingAnimation = () => {
    const controls = useAnimation();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Corporate Color Palette - Testriq Brand
    const colors = {
        bg: "#f0f9ff",
        primary: "#25A8E0", // Testriq Brand Blue
        secondary: "#6366f1",
        accent: "#8b5cf6",
        success: "#22c55e",
        error: "#ef4444",
        warning: "#f59e0b",
        textPrimary: "#1e293b",
        textSecondary: "#64748b",
        gameBg: "#0f172a",
        deviceBg: "#1e293b",
    };

    // Animation Sequence
    useEffect(() => {
        if (!mounted) return;

        let isMounted = true;
        const sequence = async () => {
            await new Promise((resolve) => setTimeout(resolve, 500));

            while (isMounted) {
                await controls.start("reset");
                await controls.start("gameInit");
                await controls.start("qaAppear");
                await controls.start("gameplay");
                await controls.start("controlTest");
                await controls.start("perfMonitor");
                await controls.start("deviceView");
                await controls.start("bugDetect");
                await controls.start("retest");
                await controls.start("complete");
                await new Promise((resolve) => setTimeout(resolve, 3000));
            }
        };
        sequence();

        return () => {
            isMounted = false;
        };
    }, [controls, mounted]);

    // Static fallback for SSR/initial mount
    if (!mounted) {
        return (
            <div
                className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50 shadow-xl border border-sky-200"
                role="img"
                aria-label="Gaming App Testing Illustration"
            />
        );
    }

    return (
        <div
            className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50 overflow-hidden relative shadow-xl border border-sky-200"
            role="img"
            aria-label="Animated illustration showing the gaming app testing process"
        >
            <svg
                viewBox="0 0 800 600"
                className="w-full h-full relative z-10"
                aria-hidden="true"
            >
                <defs>
                    <filter id="gaming-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <linearGradient id="gaming-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#25A8E0" />
                        <stop offset="100%" stopColor="#0ea5e9" />
                    </linearGradient>
                    <linearGradient id="screen-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1e293b" />
                        <stop offset="100%" stopColor="#0f172a" />
                    </linearGradient>
                </defs>

                {/* === MAIN GAME SCREEN === */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, scale: 0.9 },
                        gameInit: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
                        qaAppear: { opacity: 1 },
                        gameplay: { opacity: 1 },
                        controlTest: { opacity: 1 },
                        perfMonitor: { opacity: 1 },
                        deviceView: { opacity: 0.3, transition: { duration: 0.3 } },
                        bugDetect: { opacity: 0.3 },
                        retest: { opacity: 0.3 },
                        complete: { opacity: 0.3 },
                    }}
                    animate={controls}
                >
                    {/* Game Screen Frame */}
                    <rect
                        x="180"
                        y="40"
                        width="440"
                        height="280"
                        rx="12"
                        fill="url(#screen-gradient)"
                        filter="url(#gaming-shadow)"
                    />

                    {/* Screen Header */}
                    <rect x="180" y="40" width="440" height="30" rx="12" fill="#334155" />
                    <rect x="180" y="55" width="440" height="15" fill="#334155" />
                    <circle cx="200" cy="55" r="5" fill={colors.error} />
                    <circle cx="218" cy="55" r="5" fill={colors.warning} />
                    <circle cx="236" cy="55" r="5" fill={colors.success} />
                    <text
                        x="400"
                        y="60"
                        textAnchor="middle"
                        fontSize="10"
                        fill="white"
                        opacity="0.7"
                    >
                        🎮 Game Preview - v2.4.1
                    </text>

                    {/* Game Environment - Simple Platform */}
                    <rect x="200" y="280" width="400" height="20" rx="4" fill="#475569" />
                    <rect x="250" y="240" width="80" height="40" rx="4" fill="#64748b" />
                    <rect x="400" y="220" width="100" height="60" rx="4" fill="#64748b" />

                    {/* Game Character - Simple Player */}
                    <motion.g
                        variants={{
                            reset: { x: 0 },
                            gameInit: { x: 0 },
                            qaAppear: { x: 0 },
                            gameplay: {
                                x: [0, 50, 100, 150, 180],
                                transition: { duration: 1.5, ease: "easeInOut" },
                            },
                            controlTest: { x: 180 },
                            perfMonitor: { x: 180 },
                            deviceView: { x: 180 },
                            bugDetect: { x: 180 },
                            retest: { x: 180 },
                            complete: { x: 180 },
                        }}
                        animate={controls}
                    >
                        {/* Player Body */}
                        <rect x="220" y="230" width="25" height="35" rx="6" fill={colors.primary} />
                        {/* Player Head */}
                        <circle cx="232" cy="218" r="12" fill={colors.primary} />
                        {/* Player Eyes */}
                        <circle cx="228" cy="216" r="2" fill="white" />
                        <circle cx="236" cy="216" r="2" fill="white" />
                    </motion.g>

                    {/* Collectible Items */}
                    <motion.g
                        variants={{
                            reset: { opacity: 0 },
                            gameInit: { opacity: 1 },
                            qaAppear: { opacity: 1 },
                            gameplay: { opacity: [1, 1, 0.5, 0], transition: { duration: 1.5 } },
                            controlTest: { opacity: 0 },
                            perfMonitor: { opacity: 0 },
                            deviceView: { opacity: 0 },
                            bugDetect: { opacity: 0 },
                            retest: { opacity: 0 },
                            complete: { opacity: 0 },
                        }}
                        animate={controls}
                    >
                        <circle cx="320" cy="200" r="8" fill={colors.warning} />
                        <circle cx="380" cy="180" r="8" fill={colors.warning} />
                        <circle cx="440" cy="200" r="8" fill={colors.warning} />
                    </motion.g>

                    {/* Score Display */}
                    <rect x="540" y="85" width="70" height="25" rx="5" fill="#1e293b" />
                    <text x="575" y="102" textAnchor="middle" fontSize="12" fill={colors.warning} fontWeight="bold">
                        ⭐ 2450
                    </text>
                </motion.g>

                {/* === QA ENGINEER WORKSTATION === */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: 20 },
                        gameInit: { opacity: 0, y: 20 },
                        qaAppear: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                        gameplay: { opacity: 1 },
                        controlTest: { opacity: 1 },
                        perfMonitor: { opacity: 1 },
                        deviceView: { opacity: 1 },
                        bugDetect: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 1 },
                    }}
                    animate={controls}
                >
                    {/* Desk */}
                    <rect x="30" y="260" width="120" height="8" rx="2" fill="#cbd5e1" />
                    {/* Monitor */}
                    <rect x="50" y="200" width="80" height="55" rx="4" fill="#1e293b" />
                    <rect x="55" y="205" width="70" height="40" rx="2" fill="#0f172a" />
                    {/* Monitor Stand */}
                    <rect x="82" y="255" width="16" height="8" fill="#64748b" />
                    {/* Engineer Silhouette */}
                    <ellipse cx="90" cy="290" rx="25" ry="8" fill="#94a3b8" />
                    <rect x="75" y="265" width="30" height="25" rx="8" fill={colors.primary} />
                    <circle cx="90" cy="252" r="14" fill={colors.primary} />
                    {/* Headset */}
                    <path
                        d="M 78 248 Q 90 235 102 248"
                        stroke={colors.secondary}
                        strokeWidth="3"
                        fill="none"
                    />
                </motion.g>

                {/* === GAME CONTROLLER === */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        gameInit: { opacity: 0.3 },
                        qaAppear: { opacity: 0.5 },
                        gameplay: { opacity: 0.7 },
                        controlTest: { opacity: 1, transition: { duration: 0.3 } },
                        perfMonitor: { opacity: 0.7 },
                        deviceView: { opacity: 0.5 },
                        bugDetect: { opacity: 0.5 },
                        retest: { opacity: 0.5 },
                        complete: { opacity: 0.7 },
                    }}
                    animate={controls}
                >
                    {/* Controller Body */}
                    <rect x="650" y="80" width="120" height="70" rx="20" fill="#334155" filter="url(#gaming-shadow)" />
                    {/* D-Pad */}
                    <rect x="665" y="105" width="20" height="8" rx="2" fill="#475569" />
                    <rect x="671" y="99" width="8" height="20" rx="2" fill="#475569" />

                    {/* Action Buttons */}
                    <motion.circle
                        cx="740"
                        cy="100"
                        r="8"
                        fill={colors.success}
                        variants={{
                            controlTest: {
                                fill: [colors.success, "#fff", colors.success],
                                transition: { duration: 0.2, delay: 0.1 },
                            },
                        }}
                        animate={controls}
                    />
                    <motion.circle
                        cx="755"
                        cy="115"
                        r="8"
                        fill={colors.error}
                        variants={{
                            controlTest: {
                                fill: [colors.error, "#fff", colors.error],
                                transition: { duration: 0.2, delay: 0.3 },
                            },
                        }}
                        animate={controls}
                    />
                    <motion.circle
                        cx="725"
                        cy="115"
                        r="8"
                        fill={colors.warning}
                        variants={{
                            controlTest: {
                                fill: [colors.warning, "#fff", colors.warning],
                                transition: { duration: 0.2, delay: 0.5 },
                            },
                        }}
                        animate={controls}
                    />
                    <motion.circle
                        cx="740"
                        cy="130"
                        r="8"
                        fill={colors.secondary}
                        variants={{
                            controlTest: {
                                fill: [colors.secondary, "#fff", colors.secondary],
                                transition: { duration: 0.2, delay: 0.7 },
                            },
                        }}
                        animate={controls}
                    />

                    {/* Label */}
                    <text x="710" y="165" textAnchor="middle" fontSize="9" fill={colors.textSecondary}>
                        Input Testing
                    </text>
                </motion.g>

                {/* === FPS PERFORMANCE METER === */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        gameInit: { opacity: 0 },
                        qaAppear: { opacity: 0 },
                        gameplay: { opacity: 0 },
                        controlTest: { opacity: 0 },
                        perfMonitor: { opacity: 1, transition: { duration: 0.3 } },
                        deviceView: { opacity: 0.5 },
                        bugDetect: { opacity: 0.5 },
                        retest: { opacity: 0.5 },
                        complete: { opacity: 0.7 },
                    }}
                    animate={controls}
                >
                    {/* Meter Background */}
                    <rect x="650" y="200" width="120" height="80" rx="10" fill="white" filter="url(#gaming-shadow)" />
                    <text x="710" y="220" textAnchor="middle" fontSize="10" fontWeight="bold" fill={colors.textPrimary}>
                        Performance
                    </text>

                    {/* FPS Bar */}
                    <rect x="665" y="235" width="90" height="12" rx="4" fill="#e2e8f0" />
                    <motion.rect
                        x="665"
                        y="235"
                        width="0"
                        height="12"
                        rx="4"
                        fill={colors.success}
                        variants={{
                            perfMonitor: { width: [0, 85], transition: { duration: 0.8 } },
                            deviceView: { width: 85 },
                            bugDetect: { width: 85 },
                            retest: { width: 85 },
                            complete: { width: 85 },
                        }}
                        animate={controls}
                    />

                    {/* FPS Value */}
                    <motion.text
                        x="710"
                        y="263"
                        textAnchor="middle"
                        fontSize="14"
                        fontWeight="bold"
                        fill={colors.success}
                        variants={{
                            reset: { opacity: 0 },
                            perfMonitor: { opacity: 1 },
                            deviceView: { opacity: 1 },
                            bugDetect: { opacity: 1 },
                            retest: { opacity: 1 },
                            complete: { opacity: 1 },
                        }}
                        initial={{ opacity: 0 }}
                        animate={controls}
                    >
                        60 FPS ✓
                    </motion.text>
                </motion.g>

                {/* === CROSS-DEVICE VIEW === */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: 30 },
                        gameInit: { opacity: 0 },
                        qaAppear: { opacity: 0 },
                        gameplay: { opacity: 0 },
                        controlTest: { opacity: 0 },
                        perfMonitor: { opacity: 0 },
                        deviceView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                        bugDetect: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 1 },
                    }}
                    animate={controls}
                >
                    {/* Mobile Device */}
                    <rect x="120" y="360" width="100" height="180" rx="12" fill="#1e293b" filter="url(#gaming-shadow)" />
                    <rect x="128" y="375" width="84" height="145" rx="4" fill="#0f172a" />
                    <rect x="135" y="385" width="70" height="50" rx="3" fill="#334155" />
                    <text x="170" y="450" textAnchor="middle" fontSize="8" fill="#94a3b8">
                        Mobile
                    </text>

                    {/* Tablet Device */}
                    <rect x="260" y="350" width="180" height="200" rx="14" fill="#1e293b" filter="url(#gaming-shadow)" />
                    <rect x="270" y="362" width="160" height="170" rx="6" fill="#0f172a" />
                    <rect x="280" y="375" width="140" height="80" rx="4" fill="#334155" />
                    <text x="350" y="480" textAnchor="middle" fontSize="9" fill="#94a3b8">
                        Tablet
                    </text>

                    {/* Desktop Device */}
                    <rect x="480" y="340" width="220" height="150" rx="10" fill="#1e293b" filter="url(#gaming-shadow)" />
                    <rect x="488" y="350" width="204" height="125" rx="6" fill="#0f172a" />
                    <rect x="498" y="360" width="184" height="100" rx="4" fill="#334155" />
                    <rect x="560" y="490" width="60" height="15" rx="3" fill="#475569" />
                    <rect x="530" y="505" width="120" height="8" rx="2" fill="#64748b" />
                    <text x="590" y="530" textAnchor="middle" fontSize="9" fill="#94a3b8">
                        Desktop
                    </text>

                    {/* Bug Indicator on Tablet */}
                    <motion.g
                        variants={{
                            reset: { opacity: 0, scale: 0 },
                            deviceView: { opacity: 0 },
                            bugDetect: { opacity: 1, scale: 1, transition: { type: "spring" } },
                            retest: { opacity: 0.5 },
                            complete: { opacity: 0 },
                        }}
                        animate={controls}
                    >
                        <circle cx="410" cy="400" r="18" fill={colors.error} opacity="0.2" />
                        <circle cx="410" cy="400" r="12" fill={colors.error} />
                        <text x="410" y="405" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">
                            !
                        </text>
                        <rect x="350" y="425" width="120" height="20" rx="5" fill={colors.error} />
                        <text x="410" y="439" textAnchor="middle" fontSize="9" fill="white" fontWeight="600">
                            ⚠ UI Glitch Found
                        </text>
                    </motion.g>

                    {/* Success Indicators */}
                    <motion.g
                        variants={{
                            reset: { opacity: 0 },
                            deviceView: { opacity: 0 },
                            bugDetect: { opacity: 0 },
                            retest: { opacity: 0 },
                            complete: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.1 } },
                        }}
                        animate={controls}
                    >
                        {/* Mobile Success */}
                        <circle cx="170" cy="420" r="15" fill={colors.success} />
                        <text x="170" y="425" textAnchor="middle" fontSize="14" fill="white">
                            ✓
                        </text>
                        {/* Tablet Success */}
                        <circle cx="350" cy="420" r="15" fill={colors.success} />
                        <text x="350" y="425" textAnchor="middle" fontSize="14" fill="white">
                            ✓
                        </text>
                        {/* Desktop Success */}
                        <circle cx="590" cy="420" r="15" fill={colors.success} />
                        <text x="590" y="425" textAnchor="middle" fontSize="14" fill="white">
                            ✓
                        </text>
                    </motion.g>
                </motion.g>

                {/* === SUCCESS COMPLETION BADGE === */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, scale: 0.8 },
                        gameInit: { opacity: 0 },
                        qaAppear: { opacity: 0 },
                        gameplay: { opacity: 0 },
                        controlTest: { opacity: 0 },
                        perfMonitor: { opacity: 0 },
                        deviceView: { opacity: 0 },
                        bugDetect: { opacity: 0 },
                        retest: { opacity: 0 },
                        complete: { opacity: 1, scale: 1, transition: { delay: 0.3, type: "spring" } },
                    }}
                    animate={controls}
                >
                    <rect
                        x="250"
                        y="560"
                        width="300"
                        height="35"
                        rx="10"
                        fill={colors.success}
                        filter="url(#gaming-shadow)"
                    />
                    <text
                        x="400"
                        y="583"
                        textAnchor="middle"
                        fontSize="14"
                        fontWeight="bold"
                        fill="white"
                    >
                        ✓ All Platforms Verified - Ready for Launch!
                    </text>
                </motion.g>

                {/* === TESTING PHASES INDICATOR === */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        gameInit: { opacity: 1, transition: { delay: 0.3 } },
                        qaAppear: { opacity: 1 },
                        gameplay: { opacity: 1 },
                        controlTest: { opacity: 1 },
                        perfMonitor: { opacity: 1 },
                        deviceView: { opacity: 1 },
                        bugDetect: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 1 },
                    }}
                    animate={controls}
                >
                    <rect x="30" y="40" width="120" height="140" rx="10" fill="white" filter="url(#gaming-shadow)" />
                    <text x="90" y="60" textAnchor="middle" fontSize="10" fontWeight="bold" fill={colors.textPrimary}>
                        Testing Phase
                    </text>

                    {/* Phase Indicators */}
                    {[
                        { label: "Gameplay", phase: "gameplay" },
                        { label: "Controls", phase: "controlTest" },
                        { label: "Performance", phase: "perfMonitor" },
                        { label: "Cross-Device", phase: "deviceView" },
                    ].map((item, i) => (
                        <motion.g key={item.phase}>
                            <motion.circle
                                cx="50"
                                cy={82 + i * 25}
                                r="6"
                                fill="#e2e8f0"
                                variants={{
                                    [item.phase]: { fill: colors.primary },
                                    complete: { fill: colors.success },
                                }}
                                animate={controls}
                            />
                            <text x="62" y={86 + i * 25} fontSize="9" fill={colors.textSecondary}>
                                {item.label}
                            </text>
                        </motion.g>
                    ))}
                </motion.g>
            </svg>
        </div>
    );
};

export default GamingTestingAnimation;
