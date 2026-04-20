"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const RegressionTestingAnimation = () => {
    const controls = useAnimation();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Corporate Color Palette
    const colors = {
        bg: "#f0fdf4",
        primary: "#22c55e",
        secondary: "#14b8a6",
        accent: "#3b82f6",
        success: "#22c55e",
        error: "#ef4444",
        warning: "#f59e0b",
        textPrimary: "#1e293b",
        textSecondary: "#64748b",
    };

    // Test modules
    const testModules = [
        { name: "Login Module", tests: 45, status: "pass" },
        { name: "User Profile", tests: 32, status: "pass" },
        { name: "Payment Flow", tests: 28, status: "fail" },
        { name: "Dashboard", tests: 56, status: "pass" },
        { name: "Reports", tests: 41, status: "pass" },
    ];

    // Animation Sequence
    useEffect(() => {
        if (!mounted) return;

        let isMounted = true;
        const sequence = async () => {
            await new Promise(resolve => setTimeout(resolve, 500));

            while (isMounted) {
                await controls.start("reset");
                await controls.start("init");
                await controls.start("change");
                await controls.start("execute");
                await controls.start("validate");
                await controls.start("fail");
                await controls.start("log");
                await controls.start("retest");
                await controls.start("complete");
                await new Promise(resolve => setTimeout(resolve, 3000));
            }
        };
        sequence();

        return () => { isMounted = false; };
    }, [controls, mounted]);

    if (!mounted) return <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-green-50 to-teal-50 shadow-xl border border-green-200" />;

    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-green-50 to-teal-50 overflow-hidden relative shadow-xl border border-green-200">
            <svg viewBox="0 0 800 500" className="w-full h-full relative z-10">
                <defs>
                    <filter id="reg-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <linearGradient id="green-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#22c55e" />
                        <stop offset="100%" stopColor="#14b8a6" />
                    </linearGradient>
                </defs>

                {/* --- APPLICATION BASELINE --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: -20 },
                        init: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                        change: { opacity: 1 },
                        execute: { opacity: 1 },
                        validate: { opacity: 1 },
                        fail: { opacity: 1 },
                        log: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="50" y="40" width="320" height="200" rx="12" fill="white" filter="url(#reg-shadow)" />
                    <rect x="50" y="40" width="320" height="35" rx="12" fill="url(#green-gradient)" />
                    <rect x="50" y="60" width="320" height="15" fill="url(#green-gradient)" />
                    <text x="210" y="63" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">📱 Application v2.4.1</text>

                    {/* App components */}
                    <rect x="65" y="90" width="90" height="60" rx="6" fill="#f0fdf4" stroke={colors.primary} strokeWidth="1" />
                    <text x="110" y="125" textAnchor="middle" fontSize="9" fill={colors.textPrimary}>Header</text>

                    <rect x="165" y="90" width="90" height="60" rx="6" fill="#f0fdf4" stroke={colors.primary} strokeWidth="1" />
                    <text x="210" y="125" textAnchor="middle" fontSize="9" fill={colors.textPrimary}>Navigation</text>

                    <rect x="265" y="90" width="90" height="60" rx="6" fill="#f0fdf4" stroke={colors.primary} strokeWidth="1" />
                    <text x="310" y="125" textAnchor="middle" fontSize="9" fill={colors.textPrimary}>Content</text>

                    <rect x="65" y="160" width="140" height="60" rx="6" fill="#f0fdf4" stroke={colors.primary} strokeWidth="1" />
                    <text x="135" y="195" textAnchor="middle" fontSize="9" fill={colors.textPrimary}>Data Grid</text>

                    <rect x="215" y="160" width="140" height="60" rx="6" fill="#f0fdf4" stroke={colors.primary} strokeWidth="1" />
                    <text x="285" y="195" textAnchor="middle" fontSize="9" fill={colors.textPrimary}>Actions</text>
                </motion.g>

                {/* --- NEW CHANGE INDICATOR --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, scale: 0 },
                        init: { opacity: 0 },
                        change: { opacity: 1, scale: 1, transition: { type: "spring" } },
                        execute: { opacity: 0.6 },
                        validate: { opacity: 0.6 },
                        fail: { opacity: 0.6 },
                        log: { opacity: 0.6 },
                        retest: { opacity: 0.6 },
                        complete: { opacity: 0.6 }
                    }}
                    animate={controls}
                >
                    <rect x="265" y="160" width="90" height="60" rx="6" fill="#fef9c3" stroke={colors.warning} strokeWidth="2" />
                    <text x="310" y="185" textAnchor="middle" fontSize="9" fontWeight="600" fill={colors.warning}>NEW</text>
                    <text x="310" y="200" textAnchor="middle" fontSize="8" fill={colors.textSecondary}>Feature</text>

                    <circle cx="355" cy="160" r="12" fill={colors.warning} />
                    <text x="355" y="164" textAnchor="middle" fontSize="8" fontWeight="700" fill="white">!</text>
                </motion.g>

                {/* --- TEST MODULES PANEL --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, x: 30 },
                        init: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
                        change: { opacity: 1 },
                        execute: { opacity: 1 },
                        validate: { opacity: 1 },
                        fail: { opacity: 1 },
                        log: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="430" y="40" width="330" height="270" rx="12" fill="white" filter="url(#reg-shadow)" />
                    <rect x="430" y="40" width="330" height="35" rx="12" fill="#0f172a" />
                    <rect x="430" y="60" width="330" height="15" fill="#0f172a" />
                    <text x="595" y="63" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">🔄 Regression Suite</text>

                    {testModules.map((mod, i) => (
                        <motion.g key={mod.name}
                            variants={{
                                execute: { opacity: [0.3, 1], transition: { delay: i * 0.15 } },
                                validate: { opacity: 1 },
                                fail: { opacity: 1 },
                                log: { opacity: 1 },
                                retest: { opacity: 1 },
                                complete: { opacity: 1 }
                            }}
                            initial={{ opacity: 0.3 }}
                            animate={controls}
                        >
                            <rect x="445" y={90 + i * 42} width="300" height="35" rx="5" fill={i % 2 === 0 ? "#f0fdf4" : "#f0fdfa"} />
                            <text x="460" y={112 + i * 42} fontSize="11" fontWeight="500" fill={colors.textPrimary}>{mod.name}</text>
                            <text x="580" y={112 + i * 42} fontSize="9" fill={colors.textSecondary}>{mod.tests} tests</text>

                            {/* Progress bar */}
                            <motion.rect x="630" y={98 + i * 42} width="60" height="8" rx="2" fill="#e2e8f0"
                                variants={{
                                    execute: { fill: "#e2e8f0" }
                                }}
                                animate={controls}
                            />
                            <motion.rect x="630" y={98 + i * 42} width="0" height="8" rx="2"
                                variants={{
                                    execute: { width: [0, 60], transition: { delay: i * 0.15, duration: 0.3 } },
                                    validate: { fill: mod.status === "pass" ? colors.success : colors.success },
                                    fail: mod.status === "fail" ? { fill: colors.error } : { fill: colors.success },
                                    log: mod.status === "fail" ? { fill: colors.warning } : { fill: colors.success },
                                    retest: { fill: colors.warning },
                                    complete: { fill: colors.success }
                                }}
                                initial={{ fill: colors.secondary }}
                                animate={controls}
                            />

                            {/* Status indicator */}
                            <motion.circle cx="720" cy={107 + i * 42} r="10"
                                variants={{
                                    validate: { fill: mod.status === "pass" ? colors.success : colors.textSecondary, transition: { delay: 0.3 + i * 0.1 } },
                                    fail: mod.status === "fail" ? { fill: colors.error } : { fill: colors.success },
                                    log: mod.status === "fail" ? { fill: colors.warning } : { fill: colors.success },
                                    retest: { fill: colors.warning },
                                    complete: { fill: colors.success }
                                }}
                                initial={{ fill: colors.textSecondary }}
                                animate={controls}
                            />
                            <motion.text x="720" y={111 + i * 42} textAnchor="middle" fontSize="9" fill="white"
                                variants={{
                                    validate: { opacity: 1, transition: { delay: 0.4 + i * 0.1 } }
                                }}
                                initial={{ opacity: 0 }}
                                animate={controls}
                            >
                                {mod.status === "pass" ? "✓" : "✗"}
                            </motion.text>
                        </motion.g>
                    ))}
                </motion.g>

                {/* --- STATUS SUMMARY --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: 30 },
                        init: { opacity: 1, y: 0, transition: { delay: 0.4 } },
                        change: { opacity: 1 },
                        execute: { opacity: 1 },
                        validate: { opacity: 1 },
                        fail: { opacity: 1 },
                        log: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="50" y="330" width="710" height="130" rx="12" fill="white" filter="url(#reg-shadow)" />
                    <text x="70" y="358" fontSize="12" fontWeight="700" fill={colors.textPrimary}>Regression Summary</text>

                    {/* Stats boxes */}
                    {[
                        { label: "Total Tests", value: "1,247", color: colors.primary },
                        { label: "Passed", value: "1,231", color: colors.success },
                        { label: "Failed", value: "16", color: colors.error },
                        { label: "Coverage", value: "91%", color: colors.accent },
                    ].map((stat, i) => (
                        <motion.g key={stat.label}
                            variants={{
                                validate: { opacity: 1, transition: { delay: i * 0.1 } }
                            }}
                            initial={{ opacity: 0.5 }}
                            animate={controls}
                        >
                            <rect x={80 + i * 175} y="375" width="150" height="65" rx="8" fill="#f8fafc" stroke={stat.color} strokeWidth="2" />
                            <text x={155 + i * 175} y="415" textAnchor="middle" fontSize="18" fontWeight="700" fill={stat.color}>{stat.value}</text>
                            <text x={155 + i * 175} y="432" textAnchor="middle" fontSize="10" fill={colors.textSecondary}>{stat.label}</text>
                        </motion.g>
                    ))}
                </motion.g>

                {/* --- QA ENGINEER --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: 20 },
                        init: { opacity: 1, y: 0, transition: { delay: 0.5 } },
                        change: { opacity: 1 },
                        execute: { opacity: 1 },
                        validate: { opacity: 1 },
                        fail: { opacity: 1 },
                        log: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="50" y="275" width="180" height="12" rx="4" fill="#dcfce7" />
                    <ellipse cx="140" cy="268" rx="25" ry="8" fill="#15803d" />
                    <circle cx="140" cy="252" r="15" fill="#22c55e" />
                </motion.g>

                {/* --- REGRESSION FAILURE ALERT --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, scale: 0 },
                        init: { opacity: 0 },
                        change: { opacity: 0 },
                        execute: { opacity: 0 },
                        validate: { opacity: 0 },
                        fail: { opacity: 1, scale: 1, transition: { type: "spring" } },
                        log: { opacity: 1 },
                        retest: { opacity: 0.5 },
                        complete: { opacity: 0, scale: 0 }
                    }}
                    animate={controls}
                >
                    <rect x="250" y="255" width="200" height="45" rx="8" fill={colors.error} />
                    <text x="350" y="275" textAnchor="middle" fontSize="10" fontWeight="600" fill="white">⚠ Regression Detected</text>
                    <text x="350" y="290" textAnchor="middle" fontSize="9" fill="white" opacity="0.9">Payment Flow: 16 failures</text>
                </motion.g>

                {/* --- SUCCESS BADGE --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 0 },
                        change: { opacity: 0 },
                        execute: { opacity: 0 },
                        validate: { opacity: 0 },
                        fail: { opacity: 0 },
                        log: { opacity: 0 },
                        retest: { opacity: 0 },
                        complete: { opacity: 1, transition: { delay: 0.5 } }
                    }}
                    animate={controls}
                >
                    <rect x="270" y="255" width="260" height="50" rx="10" fill={colors.success} filter="url(#reg-shadow)" />
                    <text x="400" y="285" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">✓ All Regressions Resolved</text>
                </motion.g>

            </svg>
        </div>
    );
};

export default RegressionTestingAnimation;
