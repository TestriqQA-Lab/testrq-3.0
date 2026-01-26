"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const DesktopTestingAnimation = () => {
    const controls = useAnimation();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Corporate Color Palette
    const colors = {
        bg: "#f8fafc", // Slate 50 (Light)
        windowBg: "#ffffff",
        windowBorder: "#e2e8f0", // Slate 200
        windowHeader: "#1e3a5f", // Deep Blue
        accent: "#0891b2", // Cyan 600
        success: "#10b981", // Emerald 500
        error: "#ef4444", // Red 500
        warning: "#f59e0b", // Amber 500
        textPrimary: "#1e293b", // Slate 800
        textSecondary: "#64748b", // Slate 500
        cursorGlow: "rgba(8, 145, 178, 0.5)",
    };

    // Animation Sequence
    useEffect(() => {
        if (!mounted) return;

        let isMounted = true;
        const sequence = async () => {
            await new Promise(resolve => setTimeout(resolve, 500));

            while (isMounted) {
                // Reset
                await controls.start("reset");

                // Scene 1 & 2: Initialize workspace
                await controls.start("init");

                // Scene 3: Test execution
                await controls.start("execute");

                // Scene 4: Validation
                await controls.start("validate");

                // Scene 5: Bug detected
                await controls.start("bug");

                // Scene 6: Log & fix
                await controls.start("log");

                // Scene 7 & 8: Resolve & Complete
                await controls.start("resolve");

                // Pause
                await new Promise(resolve => setTimeout(resolve, 3000));
            }
        };
        sequence();

        return () => { isMounted = false; };
    }, [controls, mounted]);

    if (!mounted) return <div className="w-full aspect-[4/3] rounded-2xl bg-slate-100 shadow-xl border border-slate-200" />;

    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden relative shadow-xl border border-slate-200">
            {/* Main SVG Scene */}
            <svg viewBox="0 0 800 600" className="w-full h-full relative z-10">
                <defs>
                    <filter id="desktop-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.1" />
                    </filter>
                    <linearGradient id="header-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#1e3a5f" />
                        <stop offset="100%" stopColor="#0891b2" />
                    </linearGradient>
                </defs>

                {/* --- MAIN APPLICATION WINDOW --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: 30 },
                        init: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
                        execute: { opacity: 1 },
                        validate: { opacity: 1 },
                        bug: { opacity: 1 },
                        log: { opacity: 1 },
                        resolve: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    {/* Window Frame */}
                    <rect x="100" y="80" width="600" height="420" rx="12" fill={colors.windowBg} stroke={colors.windowBorder} strokeWidth="2" filter="url(#desktop-shadow)" />

                    {/* Window Header */}
                    <rect x="100" y="80" width="600" height="40" rx="12" fill="url(#header-gradient)" />
                    <rect x="100" y="108" width="600" height="12" fill="url(#header-gradient)" />

                    {/* Window Controls */}
                    <circle cx="130" cy="100" r="6" fill="#ef4444" />
                    <circle cx="150" cy="100" r="6" fill="#f59e0b" />
                    <circle cx="170" cy="100" r="6" fill="#10b981" />

                    {/* Window Title */}
                    <text x="400" y="105" textAnchor="middle" fill="white" fontSize="14" fontFamily="system-ui" fontWeight="600">
                        Enterprise Application v3.2.1
                    </text>
                </motion.g>

                {/* --- SIDEBAR --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 1, transition: { delay: 0.3, duration: 0.5 } },
                        execute: { opacity: 1 },
                        validate: { opacity: 1 },
                        bug: { opacity: 1 },
                        log: { opacity: 1 },
                        resolve: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="100" y="120" width="150" height="380" fill="#f1f5f9" />
                    {/* Menu Items */}
                    {[0, 1, 2, 3, 4].map((i) => (
                        <motion.g key={`menu-${i}`}
                            variants={{
                                reset: { opacity: 0.5 },
                                execute: i === 2 ? { opacity: 1, fill: colors.accent } : { opacity: 0.6 },
                                validate: { opacity: 0.6 },
                                bug: i === 3 ? { opacity: 1 } : { opacity: 0.6 },
                                log: { opacity: 0.6 },
                                resolve: { opacity: 0.6 }
                            }}
                            animate={controls}
                        >
                            <rect x="115" y={140 + i * 50} width="120" height="35" rx="6" fill={i === 2 ? colors.accent : "#e2e8f0"} fillOpacity={i === 2 ? 0.2 : 1} />
                            <rect x="125" y={150 + i * 50} width="60" height="8" rx="4" fill={i === 2 ? colors.accent : colors.textSecondary} />
                            <rect x="125" y={162 + i * 50} width="40" height="6" rx="3" fill={colors.textSecondary} opacity="0.5" />
                        </motion.g>
                    ))}
                </motion.g>

                {/* --- MAIN CONTENT AREA --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 1, transition: { delay: 0.5, duration: 0.5 } },
                        execute: { opacity: 1 },
                        validate: { opacity: 1 },
                        bug: { opacity: 1 },
                        log: { opacity: 1 },
                        resolve: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    {/* Form Fields */}
                    {[0, 1, 2].map((i) => (
                        <motion.g key={`field-${i}`}
                            variants={{
                                reset: { opacity: 0.3 },
                                init: { opacity: 1 },
                                execute: { opacity: 1 },
                                validate: { opacity: 1 },
                                bug: i === 1 ? { opacity: 1 } : { opacity: 1 },
                                log: { opacity: 1 },
                                resolve: { opacity: 1 }
                            }}
                            animate={controls}
                        >
                            {/* Label */}
                            <rect x="280" y={150 + i * 80} width="80" height="10" rx="5" fill={colors.textSecondary} />

                            {/* Input Field */}
                            <motion.rect
                                x="280" y={170 + i * 80} width="380" height="40" rx="8"
                                fill={colors.windowBg}
                                stroke={colors.windowBorder}
                                strokeWidth="2"
                                variants={{
                                    validate: i < 2 ? { stroke: colors.success, transition: { delay: 0.5 + i * 0.3 } } : {},
                                    bug: i === 1 ? { stroke: colors.error, transition: { duration: 0.3 } } : i === 0 ? { stroke: colors.success } : {},
                                    log: i === 1 ? { stroke: colors.warning } : i < 2 ? { stroke: colors.success } : {},
                                    resolve: { stroke: colors.success, transition: { delay: i * 0.2 } }
                                }}
                                animate={controls}
                            />

                            {/* Input Text Placeholder */}
                            <rect x="295" y={185 + i * 80} width={120 + i * 30} height="10" rx="5" fill={colors.textSecondary} opacity="0.4" />
                        </motion.g>
                    ))}

                    {/* Submit Button */}
                    <motion.rect
                        x="280" y="420" width="150" height="45" rx="8"
                        fill={colors.accent}
                        variants={{
                            reset: { opacity: 0.5 },
                            init: { opacity: 1 },
                            execute: { scale: [1, 0.98, 1], transition: { duration: 0.2 } },
                            validate: { opacity: 1 },
                            bug: { opacity: 1 },
                            log: { opacity: 1 },
                            resolve: { opacity: 1 }
                        }}
                        animate={controls}
                    />
                    <text x="355" y="448" textAnchor="middle" fill="white" fontSize="14" fontWeight="600" fontFamily="system-ui">Submit</text>
                </motion.g>

                {/* --- CHECKMARKS FOR VALIDATION --- */}
                {[0, 2].map((i) => (
                    <motion.g key={`check-${i}`}
                        initial="reset"
                        variants={{
                            reset: { opacity: 0, scale: 0 },
                            init: { opacity: 0 },
                            execute: { opacity: 0 },
                            validate: { opacity: 1, scale: 1, transition: { delay: 0.8 + i * 0.3, type: "spring" } },
                            bug: { opacity: 1 },
                            log: { opacity: 1 },
                            resolve: { opacity: 1 }
                        }}
                        animate={controls}
                    >
                        <circle cx="675" cy={190 + i * 80} r="12" fill={colors.success} />
                        <path d={`M ${668} ${190 + i * 80} L ${673} ${195 + i * 80} L ${682} ${185 + i * 80}`} stroke="white" strokeWidth="2.5" fill="none" />
                    </motion.g>
                ))}

                {/* --- BUG INDICATOR (X mark) --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, scale: 0 },
                        init: { opacity: 0 },
                        execute: { opacity: 0 },
                        validate: { opacity: 0 },
                        bug: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 500 } },
                        log: { opacity: 1 },
                        resolve: { opacity: 0, scale: 0 }
                    }}
                    animate={controls}
                >
                    <circle cx="675" cy="270" r="12" fill={colors.error} />
                    <path d="M 670 265 L 680 275 M 680 265 L 670 275" stroke="white" strokeWidth="2.5" />
                </motion.g>

                {/* --- RESOLVED CHECKMARK (replaces bug) --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, scale: 0 },
                        init: { opacity: 0 },
                        execute: { opacity: 0 },
                        validate: { opacity: 0 },
                        bug: { opacity: 0 },
                        log: { opacity: 0 },
                        resolve: { opacity: 1, scale: 1, transition: { delay: 0.5, type: "spring" } }
                    }}
                    animate={controls}
                >
                    <circle cx="675" cy="270" r="12" fill={colors.success} />
                    <path d="M 668 270 L 673 275 L 682 265" stroke="white" strokeWidth="2.5" fill="none" />
                </motion.g>

                {/* --- CURSOR --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { x: 300, y: 100, opacity: 0 },
                        init: { x: 350, y: 180, opacity: 1, transition: { duration: 0.5 } },
                        execute: { x: [350, 350, 350], y: [180, 260, 340], transition: { duration: 2, times: [0, 0.5, 1] } },
                        validate: { x: 355, y: 445, transition: { duration: 0.5 } },
                        bug: { x: 600, y: 270, transition: { duration: 0.5 } },
                        log: { x: 500, y: 270, transition: { duration: 0.3 } },
                        resolve: { x: 355, y: 445, transition: { duration: 0.5 } }
                    }}
                    animate={controls}
                >
                    <path d="M 0 0 L 0 18 L 5 14 L 9 22 L 12 20 L 8 12 L 14 12 Z" fill={colors.textPrimary} stroke="white" strokeWidth="1" />
                </motion.g>

                {/* --- QA ENGINEER SILHOUETTE --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: 50 },
                        init: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
                        execute: { opacity: 1 },
                        validate: { opacity: 1 },
                        bug: { opacity: 1 },
                        log: { opacity: 1 },
                        resolve: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    {/* Desk */}
                    <rect x="50" y="530" width="700" height="20" rx="4" fill="#cbd5e1" />

                    {/* Chair Back */}
                    <ellipse cx="400" cy="560" rx="60" ry="30" fill="#475569" />

                    {/* Person (stylized) */}
                    <ellipse cx="400" cy="520" rx="40" ry="15" fill="#334155" /> {/* Shoulders */}
                    <circle cx="400" cy="490" r="25" fill="#475569" /> {/* Head */}
                </motion.g>

                {/* --- STATUS BADGE --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, x: 50 },
                        init: { opacity: 0 },
                        execute: { opacity: 0 },
                        validate: { opacity: 0 },
                        bug: { opacity: 0 },
                        log: { opacity: 0 },
                        resolve: { opacity: 1, x: 0, transition: { delay: 1, duration: 0.5 } }
                    }}
                    animate={controls}
                >
                    <rect x="550" y="420" width="130" height="45" rx="8" fill={colors.success} />
                    <text x="615" y="448" textAnchor="middle" fill="white" fontSize="14" fontWeight="600" fontFamily="system-ui">All Tests Passed</text>
                </motion.g>

            </svg>
        </div>
    );
};

export default DesktopTestingAnimation;
