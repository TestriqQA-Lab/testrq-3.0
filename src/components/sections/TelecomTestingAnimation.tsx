"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const TelecomTestingAnimation = () => {
    const controls = useAnimation();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Corporate Color Palette - Telecom / Connectivity Theme
    const colors = {
        bg: "#eff6ff",
        primary: "#25A8E0", // Testriq Brand Blue
        secondary: "#6366f1", // Indigo
        accent: "#8b5cf6", // Purple
        success: "#22c55e",
        error: "#ef4444",
        warning: "#f59e0b",
        textPrimary: "#1e293b",
        textSecondary: "#64748b",
        towerBg: "#475569",
        dataCenterBg: "#1e293b",
    };

    // Animation Sequence
    useEffect(() => {
        if (!mounted) return;

        let isMounted = true;
        const sequence = async () => {
            await new Promise((resolve) => setTimeout(resolve, 500));

            while (isMounted) {
                await controls.start("reset");
                await controls.start("networkInit");
                await controls.start("qaAppear");
                await controls.start("commFlow");
                await controls.start("signalCheck");
                await controls.start("latencyTest");
                await controls.start("securityScan");
                await controls.start("faultDetect");
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
                className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 shadow-xl border border-blue-200"
                role="img"
                aria-label="Telecommunication Testing Illustration"
            />
        );
    }

    return (
        <div
            className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden relative shadow-xl border border-blue-200"
            role="img"
            aria-label="Animated illustration showing the telecommunication testing process"
        >
            <svg
                viewBox="0 0 800 600"
                className="w-full h-full relative z-10"
                aria-hidden="true"
            >
                <defs>
                    <filter id="telecom-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <linearGradient id="telecom-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#25A8E0" />
                        <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                    <linearGradient id="tower-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#475569" />
                        <stop offset="100%" stopColor="#334155" />
                    </linearGradient>
                </defs>

                {/* === CELL TOWER 1 (Left) === */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: 20 },
                        networkInit: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                        qaAppear: { opacity: 1 },
                        commFlow: { opacity: 1 },
                        signalCheck: { opacity: 1 },
                        latencyTest: { opacity: 1 },
                        securityScan: { opacity: 0.7 },
                        faultDetect: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 1 },
                    }}
                    animate={controls}
                >
                    {/* Tower Base */}
                    <rect x="100" y="350" width="40" height="10" rx="2" fill="#94a3b8" />
                    {/* Tower Pole */}
                    <rect x="115" y="180" width="10" height="170" fill="url(#tower-gradient)" />
                    {/* Tower Cross Arms */}
                    <rect x="95" y="190" width="50" height="6" rx="2" fill={colors.towerBg} />
                    <rect x="100" y="220" width="40" height="5" rx="2" fill={colors.towerBg} />
                    <rect x="105" y="250" width="30" height="4" rx="2" fill={colors.towerBg} />
                    {/* Signal Waves */}
                    <motion.g
                        variants={{
                            signalCheck: {
                                opacity: [0.3, 1, 0.3],
                                transition: { duration: 1, repeat: 1 },
                            },
                            complete: { opacity: 0.7 },
                        }}
                        animate={controls}
                    >
                        <path d="M 90 175 Q 120 155 150 175" fill="none" stroke={colors.primary} strokeWidth="2" opacity="0.6" />
                        <path d="M 80 165 Q 120 140 160 165" fill="none" stroke={colors.primary} strokeWidth="2" opacity="0.4" />
                        <path d="M 70 155 Q 120 125 170 155" fill="none" stroke={colors.primary} strokeWidth="2" opacity="0.2" />
                    </motion.g>
                    <text x="120" y="380" textAnchor="middle" fontSize="8" fill={colors.textSecondary}>
                        Tower A
                    </text>
                </motion.g>

                {/* === CELL TOWER 2 (Right) === */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: 20 },
                        networkInit: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
                        qaAppear: { opacity: 1 },
                        commFlow: { opacity: 1 },
                        signalCheck: { opacity: 1 },
                        latencyTest: { opacity: 1 },
                        securityScan: { opacity: 0.7 },
                        faultDetect: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 1 },
                    }}
                    animate={controls}
                >
                    <rect x="660" y="350" width="40" height="10" rx="2" fill="#94a3b8" />
                    <rect x="675" y="180" width="10" height="170" fill="url(#tower-gradient)" />
                    <rect x="655" y="190" width="50" height="6" rx="2" fill={colors.towerBg} />
                    <rect x="660" y="220" width="40" height="5" rx="2" fill={colors.towerBg} />
                    <rect x="665" y="250" width="30" height="4" rx="2" fill={colors.towerBg} />
                    <motion.g
                        variants={{
                            signalCheck: {
                                opacity: [0.3, 1, 0.3],
                                transition: { duration: 1, repeat: 1, delay: 0.2 },
                            },
                            complete: { opacity: 0.7 },
                        }}
                        animate={controls}
                    >
                        <path d="M 650 175 Q 680 155 710 175" fill="none" stroke={colors.primary} strokeWidth="2" opacity="0.6" />
                        <path d="M 640 165 Q 680 140 720 165" fill="none" stroke={colors.primary} strokeWidth="2" opacity="0.4" />
                        <path d="M 630 155 Q 680 125 730 155" fill="none" stroke={colors.primary} strokeWidth="2" opacity="0.2" />
                    </motion.g>
                    <text x="680" y="380" textAnchor="middle" fontSize="8" fill={colors.textSecondary}>
                        Tower B
                    </text>
                </motion.g>

                {/* === DATA CENTER === */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, scale: 0.9 },
                        networkInit: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.3 } },
                        qaAppear: { opacity: 1 },
                        commFlow: { opacity: 1 },
                        signalCheck: { opacity: 1 },
                        latencyTest: { opacity: 1 },
                        securityScan: { opacity: 0.7 },
                        faultDetect: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 1 },
                    }}
                    animate={controls}
                >
                    {/* Building */}
                    <rect x="350" y="120" width="100" height="120" rx="8" fill={colors.dataCenterBg} filter="url(#telecom-shadow)" />
                    {/* Server Racks */}
                    <rect x="360" y="135" width="30" height="90" rx="3" fill="#334155" />
                    <rect x="395" y="135" width="45" height="90" rx="3" fill="#334155" />
                    {/* Server Lights */}
                    {[0, 1, 2, 3].map((i) => (
                        <motion.circle
                            key={`server-${i}`}
                            cx="375"
                            cy={150 + i * 20}
                            r="3"
                            fill={colors.success}
                            variants={{
                                commFlow: {
                                    fill: [colors.success, colors.primary, colors.success],
                                    transition: { duration: 0.5, delay: i * 0.1 },
                                },
                            }}
                            animate={controls}
                        />
                    ))}
                    {/* Display Screen */}
                    <rect x="400" y="145" width="35" height="25" rx="2" fill="#0f172a" />
                    <motion.rect
                        x="403"
                        y="148"
                        width="29"
                        height="19"
                        rx="1"
                        fill={colors.primary}
                        opacity="0.3"
                        variants={{
                            latencyTest: { opacity: [0.3, 0.8, 0.3], transition: { duration: 0.8, repeat: 1 } },
                        }}
                        animate={controls}
                    />
                    <text x="400" y="255" textAnchor="middle" fontSize="9" fill={colors.textSecondary}>
                        Data Center
                    </text>
                </motion.g>

                {/* === NETWORK SWITCH NODE (Will have fault) === */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        networkInit: { opacity: 0.5 },
                        qaAppear: { opacity: 0.7 },
                        commFlow: { opacity: 1, transition: { delay: 0.3 } },
                        signalCheck: { opacity: 1 },
                        latencyTest: { opacity: 1 },
                        securityScan: { opacity: 0.7 },
                        faultDetect: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 1 },
                    }}
                    animate={controls}
                >
                    <rect x="540" y="300" width="70" height="45" rx="6" fill="white" filter="url(#telecom-shadow)" stroke="#e2e8f0" strokeWidth="2" />
                    <rect x="548" y="310" width="54" height="25" rx="3" fill={colors.dataCenterBg} />
                    {/* Port Lights */}
                    {[0, 1, 2, 3].map((i) => (
                        <circle key={`port-${i}`} cx={558 + i * 12} cy="328" r="3" fill={colors.success} />
                    ))}
                    <text x="575" y="360" textAnchor="middle" fontSize="8" fill={colors.textSecondary}>
                        Switch Node
                    </text>
                </motion.g>

                {/* === QA ENGINEER WORKSTATION === */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, x: -30 },
                        networkInit: { opacity: 0 },
                        qaAppear: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                        commFlow: { opacity: 1 },
                        signalCheck: { opacity: 1 },
                        latencyTest: { opacity: 1 },
                        securityScan: { opacity: 1 },
                        faultDetect: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 1 },
                    }}
                    animate={controls}
                >
                    {/* Desk */}
                    <rect x="200" y="420" width="140" height="10" rx="3" fill="#cbd5e1" />
                    {/* Monitor */}
                    <rect x="230" y="350" width="80" height="65" rx="5" fill="#1e293b" filter="url(#telecom-shadow)" />
                    <rect x="237" y="357" width="66" height="45" rx="3" fill="#0f172a" />
                    {/* Network Dashboard */}
                    <rect x="242" y="362" width="25" height="15" rx="2" fill={colors.primary} opacity="0.5" />
                    <rect x="272" y="362" width="25" height="15" rx="2" fill={colors.success} opacity="0.5" />
                    <rect x="242" y="382" width="56" height="8" rx="2" fill="#334155" />
                    {/* Monitor Stand */}
                    <rect x="262" y="415" width="16" height="8" fill="#64748b" />
                    {/* Engineer Silhouette */}
                    <ellipse cx="270" cy="455" rx="35" ry="12" fill="#94a3b8" />
                    <rect x="245" y="425" width="50" height="32" rx="12" fill={colors.primary} />
                    <circle cx="270" cy="408" r="18" fill={colors.primary} />
                    {/* Headset */}
                    <path d="M 254 402 Q 270 385 286 402" stroke={colors.secondary} strokeWidth="3" fill="none" />
                </motion.g>

                {/* === COMMUNICATION FLOW LINES === */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        networkInit: { opacity: 0 },
                        qaAppear: { opacity: 0 },
                        commFlow: { opacity: 1, transition: { duration: 0.5 } },
                        signalCheck: { opacity: 1 },
                        latencyTest: { opacity: 1 },
                        securityScan: { opacity: 0.5 },
                        faultDetect: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 1 },
                    }}
                    animate={controls}
                >
                    {/* Tower A to Data Center */}
                    <motion.path
                        d="M 145 190 Q 250 100 350 150"
                        stroke={colors.primary}
                        strokeWidth="2"
                        strokeDasharray="8 4"
                        fill="none"
                        variants={{
                            commFlow: { pathLength: [0, 1], opacity: [0, 1], transition: { duration: 0.5 } },
                        }}
                        animate={controls}
                    />
                    {/* Data Center to Tower B */}
                    <motion.path
                        d="M 450 150 Q 550 100 655 190"
                        stroke={colors.primary}
                        strokeWidth="2"
                        strokeDasharray="8 4"
                        fill="none"
                        variants={{
                            commFlow: { pathLength: [0, 1], opacity: [0, 1], transition: { duration: 0.5, delay: 0.2 } },
                        }}
                        animate={controls}
                    />
                    {/* Data Center to Switch */}
                    <motion.path
                        d="M 450 180 Q 500 260 540 310"
                        stroke={colors.secondary}
                        strokeWidth="2"
                        strokeDasharray="6 3"
                        fill="none"
                        variants={{
                            commFlow: { pathLength: [0, 1], opacity: [0, 1], transition: { duration: 0.4, delay: 0.4 } },
                        }}
                        animate={controls}
                    />
                </motion.g>

                {/* === DATA PACKETS === */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        commFlow: { opacity: 1 },
                        signalCheck: { opacity: 1 },
                        latencyTest: { opacity: 0.5 },
                        securityScan: { opacity: 0.3 },
                        faultDetect: { opacity: 0.5 },
                        retest: { opacity: 0.5 },
                        complete: { opacity: 0.8 },
                    }}
                    animate={controls}
                >
                    {/* Voice Packet */}
                    <motion.g
                        variants={{
                            commFlow: {
                                x: [0, 100, 200],
                                opacity: [0, 1, 0],
                                transition: { duration: 1.5, delay: 0.5 },
                            },
                        }}
                        animate={controls}
                    >
                        <circle cx="150" cy="140" r="8" fill={colors.success} />
                        <text x="150" y="143" textAnchor="middle" fontSize="8" fill="white">📞</text>
                    </motion.g>
                    {/* Data Packet */}
                    <motion.g
                        variants={{
                            commFlow: {
                                x: [0, 80, 160],
                                opacity: [0, 1, 0],
                                transition: { duration: 1.2, delay: 0.8 },
                            },
                        }}
                        animate={controls}
                    >
                        <rect x="180" cy="120" width="14" height="14" rx="3" fill={colors.primary} />
                        <text x="187" y="131" textAnchor="middle" fontSize="8" fill="white">📊</text>
                    </motion.g>
                    {/* Message Packet */}
                    <motion.g
                        variants={{
                            commFlow: {
                                x: [200, 100, 0],
                                opacity: [0, 1, 0],
                                transition: { duration: 1.3, delay: 1 },
                            },
                        }}
                        animate={controls}
                    >
                        <rect x="500" y="115" width="14" height="14" rx="3" fill={colors.warning} />
                        <text x="507" y="126" textAnchor="middle" fontSize="8" fill="white">💬</text>
                    </motion.g>
                </motion.g>

                {/* === SIGNAL STRENGTH BARS === */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        networkInit: { opacity: 0 },
                        qaAppear: { opacity: 0 },
                        commFlow: { opacity: 0 },
                        signalCheck: { opacity: 1, transition: { duration: 0.3 } },
                        latencyTest: { opacity: 0.7 },
                        securityScan: { opacity: 0.5 },
                        faultDetect: { opacity: 0.7 },
                        retest: { opacity: 0.7 },
                        complete: { opacity: 1 },
                    }}
                    animate={controls}
                >
                    <rect x="30" y="80" width="100" height="100" rx="10" fill="white" filter="url(#telecom-shadow)" />
                    <text x="80" y="100" textAnchor="middle" fontSize="9" fontWeight="bold" fill={colors.textPrimary}>
                        Signal Strength
                    </text>
                    {/* Signal Bars */}
                    {[0, 1, 2, 3, 4].map((i) => (
                        <motion.rect
                            key={`bar-${i}`}
                            x={45 + i * 16}
                            y={160 - (i + 1) * 12}
                            width="10"
                            height={(i + 1) * 12}
                            rx="2"
                            fill="#e2e8f0"
                            variants={{
                                signalCheck: {
                                    fill: colors.success,
                                    transition: { delay: i * 0.15, duration: 0.3 },
                                },
                                complete: { fill: colors.success },
                            }}
                            animate={controls}
                        />
                    ))}
                    <motion.text
                        x="80"
                        y="175"
                        textAnchor="middle"
                        fontSize="10"
                        fontWeight="bold"
                        fill={colors.success}
                        variants={{
                            signalCheck: { opacity: [0, 1], transition: { delay: 0.8 } },
                            complete: { opacity: 1 },
                        }}
                        initial={{ opacity: 0 }}
                        animate={controls}
                    >
                        Excellent
                    </motion.text>
                </motion.g>

                {/* === LATENCY METER === */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        networkInit: { opacity: 0 },
                        qaAppear: { opacity: 0 },
                        commFlow: { opacity: 0 },
                        signalCheck: { opacity: 0 },
                        latencyTest: { opacity: 1, transition: { duration: 0.3 } },
                        securityScan: { opacity: 0.5 },
                        faultDetect: { opacity: 0.7 },
                        retest: { opacity: 0.7 },
                        complete: { opacity: 1 },
                    }}
                    animate={controls}
                >
                    <rect x="670" y="400" width="110" height="80" rx="10" fill="white" filter="url(#telecom-shadow)" />
                    <text x="725" y="420" textAnchor="middle" fontSize="9" fontWeight="bold" fill={colors.textPrimary}>
                        Latency Test
                    </text>
                    {/* Speed Gauge */}
                    <circle cx="725" cy="455" r="25" fill="none" stroke="#e2e8f0" strokeWidth="6" />
                    <motion.circle
                        cx="725"
                        cy="455"
                        r="25"
                        fill="none"
                        stroke={colors.success}
                        strokeWidth="6"
                        strokeDasharray="120 160"
                        strokeLinecap="round"
                        variants={{
                            latencyTest: {
                                strokeDasharray: ["0 160", "120 160"],
                                transition: { duration: 0.8 },
                            },
                        }}
                        animate={controls}
                    />
                    <motion.text
                        x="725"
                        y="460"
                        textAnchor="middle"
                        fontSize="11"
                        fontWeight="bold"
                        fill={colors.success}
                        variants={{
                            latencyTest: { opacity: [0, 1], transition: { delay: 0.5 } },
                        }}
                        initial={{ opacity: 0 }}
                        animate={controls}
                    >
                        12ms
                    </motion.text>
                </motion.g>

                {/* === SECURITY SHIELD SCAN === */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, x: 100 },
                        networkInit: { opacity: 0 },
                        qaAppear: { opacity: 0 },
                        commFlow: { opacity: 0 },
                        signalCheck: { opacity: 0 },
                        latencyTest: { opacity: 0 },
                        securityScan: { opacity: 1, x: [100, 500], transition: { duration: 1.2, ease: "easeInOut" } },
                        faultDetect: { opacity: 0, x: 700 },
                        retest: { opacity: 0 },
                        complete: { opacity: 0 },
                    }}
                    animate={controls}
                >
                    <path
                        d="M 0 -30 L 24 -18 L 24 12 L 0 30 L -24 12 L -24 -18 Z"
                        fill={colors.secondary}
                        transform="translate(200, 280)"
                    />
                    <text x="200" y="285" textAnchor="middle" fontSize="16" fill="white">
                        🛡
                    </text>
                </motion.g>

                {/* === FAULT DETECTION ON SWITCH === */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, scale: 0 },
                        networkInit: { opacity: 0 },
                        qaAppear: { opacity: 0 },
                        commFlow: { opacity: 0 },
                        signalCheck: { opacity: 0 },
                        latencyTest: { opacity: 0 },
                        securityScan: { opacity: 0 },
                        faultDetect: { opacity: 1, scale: 1, transition: { type: "spring" } },
                        retest: { opacity: 0.5 },
                        complete: { opacity: 0 },
                    }}
                    animate={controls}
                >
                    <circle cx="610" cy="295" r="14" fill={colors.error} opacity="0.2" />
                    <circle cx="610" cy="295" r="10" fill={colors.error} />
                    <text x="610" y="300" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">
                        !
                    </text>
                    <rect x="530" y="380" width="90" height="22" rx="5" fill={colors.error} />
                    <text x="575" y="395" textAnchor="middle" fontSize="9" fill="white" fontWeight="600">
                        ⚠ Packet Loss
                    </text>
                </motion.g>

                {/* === SUCCESS CHECKMARKS === */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        networkInit: { opacity: 0 },
                        qaAppear: { opacity: 0 },
                        commFlow: { opacity: 0 },
                        signalCheck: { opacity: 0 },
                        latencyTest: { opacity: 0 },
                        securityScan: { opacity: 0 },
                        faultDetect: { opacity: 0 },
                        retest: { opacity: 0 },
                        complete: { opacity: 1, transition: { duration: 0.5 } },
                    }}
                    animate={controls}
                >
                    {/* Checkmarks on towers and data center */}
                    {[
                        { x: 145, y: 170 },
                        { x: 400, y: 110 },
                        { x: 680, y: 170 },
                        { x: 610, y: 295 },
                    ].map((pos, i) => (
                        <motion.g key={`check-${i}`}>
                            <circle cx={pos.x} cy={pos.y} r="12" fill={colors.success} />
                            <text x={pos.x} y={pos.y + 4} textAnchor="middle" fontSize="12" fill="white">
                                ✓
                            </text>
                        </motion.g>
                    ))}
                </motion.g>

                {/* === COMPLETION SUCCESS BADGE === */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, scale: 0.8 },
                        networkInit: { opacity: 0 },
                        qaAppear: { opacity: 0 },
                        commFlow: { opacity: 0 },
                        signalCheck: { opacity: 0 },
                        latencyTest: { opacity: 0 },
                        securityScan: { opacity: 0 },
                        faultDetect: { opacity: 0 },
                        retest: { opacity: 0 },
                        complete: { opacity: 1, scale: 1, transition: { delay: 0.3, type: "spring" } },
                    }}
                    animate={controls}
                >
                    <rect
                        x="230"
                        y="550"
                        width="340"
                        height="35"
                        rx="10"
                        fill={colors.success}
                        filter="url(#telecom-shadow)"
                    />
                    <text
                        x="400"
                        y="573"
                        textAnchor="middle"
                        fontSize="13"
                        fontWeight="bold"
                        fill="white"
                    >
                        ✓ Network Verified - All Systems Operational!
                    </text>
                </motion.g>

                {/* === TESTING PHASES PANEL === */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        networkInit: { opacity: 1, transition: { delay: 0.3 } },
                        qaAppear: { opacity: 1 },
                        commFlow: { opacity: 1 },
                        signalCheck: { opacity: 1 },
                        latencyTest: { opacity: 1 },
                        securityScan: { opacity: 1 },
                        faultDetect: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 1 },
                    }}
                    animate={controls}
                >
                    <rect x="30" y="200" width="130" height="130" rx="10" fill="white" filter="url(#telecom-shadow)" />
                    <text x="95" y="222" textAnchor="middle" fontSize="10" fontWeight="bold" fill={colors.textPrimary}>
                        Testing Phase
                    </text>

                    {/* Phase Indicators */}
                    {[
                        { label: "Signal", phase: "signalCheck" },
                        { label: "Latency", phase: "latencyTest" },
                        { label: "Security", phase: "securityScan" },
                        { label: "Fault Check", phase: "faultDetect" },
                    ].map((item, i) => (
                        <motion.g key={item.phase}>
                            <motion.circle
                                cx="50"
                                cy={248 + i * 22}
                                r="6"
                                fill="#e2e8f0"
                                variants={{
                                    [item.phase]: { fill: colors.primary },
                                    complete: { fill: colors.success },
                                }}
                                animate={controls}
                            />
                            <text x="62" y={252 + i * 22} fontSize="9" fill={colors.textSecondary}>
                                {item.label}
                            </text>
                        </motion.g>
                    ))}
                </motion.g>
            </svg>
        </div>
    );
};

export default TelecomTestingAnimation;
