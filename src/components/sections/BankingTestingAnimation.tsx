"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const BankingTestingAnimation = () => {
    const controls = useAnimation();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Corporate Color Palette (Banking - Navy/Blue/Green for trust and security)
    const colors = {
        bg: "#eff6ff",
        navy: "#1e3a5f",
        primary: "#0369a1",
        secondary: "#0284c7",
        accent: "#38bdf8",
        gold: "#f59e0b",
        success: "#10b981",
        error: "#ef4444",
        warning: "#f59e0b",
        textPrimary: "#0c4a6e",
        textSecondary: "#64748b",
        security: "#0891b2",
    };

    // Bank accounts for transaction flow
    const accounts = [
        { id: "a1", x: 120, y: 180, label: "Account A", balance: "$50,000" },
        { id: "a2", x: 520, y: 180, label: "Account B", balance: "$25,000" },
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
                await controls.start("engineer");
                await controls.start("transaction");
                await controls.start("validate");
                await controls.start("security");
                await controls.start("fraud");
                await controls.start("log");
                await controls.start("retest");
                await controls.start("complete");
                await new Promise(resolve => setTimeout(resolve, 3000));
            }
        };
        sequence();

        return () => { isMounted = false; };
    }, [controls, mounted]);

    if (!mounted) return <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-50 to-blue-100 shadow-xl border border-blue-200" />;

    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-50 to-blue-100 overflow-hidden relative shadow-xl border border-blue-200">
            <svg viewBox="0 0 640 480" className="w-full h-full relative z-10">
                <defs>
                    <filter id="bank-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <filter id="bank-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <linearGradient id="bank-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor={colors.navy} />
                        <stop offset="100%" stopColor={colors.primary} />
                    </linearGradient>
                </defs>

                {/* --- DASHBOARD HEADER --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: -20 },
                        init: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                        engineer: { opacity: 1 },
                        transaction: { opacity: 1 },
                        validate: { opacity: 1 },
                        security: { opacity: 1 },
                        fraud: { opacity: 1 },
                        log: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    {/* Header bar */}
                    <rect x="50" y="25" width="540" height="45" rx="8" fill="url(#bank-gradient)" filter="url(#bank-shadow)" />
                    <text x="80" y="53" fontSize="14" fontWeight="700" fill="white">🏦 Core Banking System</text>

                    {/* Status indicator */}
                    <circle cx="530" cy="47" r="8" fill={colors.success} />
                    <text x="545" y="52" fontSize="10" fill="white">Online</text>
                </motion.g>

                {/* --- ACCOUNT CARDS --- */}
                {accounts.map((account, i) => (
                    <motion.g
                        key={account.id}
                        initial="reset"
                        variants={{
                            reset: { opacity: 0, scale: 0.8 },
                            init: { opacity: 1, scale: 1, transition: { delay: i * 0.15, type: "spring" } },
                            engineer: { opacity: 1 },
                            transaction: { opacity: 1 },
                            validate: { opacity: 1 },
                            security: { opacity: 1 },
                            fraud: i === 1 ? { opacity: 1 } : { opacity: 1 },
                            log: { opacity: 1 },
                            retest: { opacity: 1 },
                            complete: { opacity: 1 }
                        }}
                        animate={controls}
                    >
                        <rect
                            x={account.x - 60}
                            y={account.y - 45}
                            width="120"
                            height="90"
                            rx="12"
                            fill="white"
                            stroke={colors.primary}
                            strokeWidth="2"
                            filter="url(#bank-shadow)"
                        />
                        <text x={account.x} y={account.y - 20} textAnchor="middle" fontSize="11" fontWeight="600" fill={colors.textPrimary}>{account.label}</text>
                        <text x={account.x} y={account.y + 5} textAnchor="middle" fontSize="16" fontWeight="700" fill={colors.navy}>{account.balance}</text>
                        <text x={account.x} y={account.y + 25} textAnchor="middle" fontSize="9" fill={colors.textSecondary}>Active • Verified</text>
                    </motion.g>
                ))}

                {/* --- TRANSACTION ARROW --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 0 },
                        transaction: { opacity: 1, transition: { duration: 0.5 } },
                        validate: { opacity: 1 },
                        security: { opacity: 1 },
                        fraud: { opacity: 1 },
                        log: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 0.5 }
                    }}
                    animate={controls}
                >
                    <line x1="190" y1="180" x2="450" y2="180" stroke={colors.accent} strokeWidth="3" strokeDasharray="8 4" />
                    <polygon points="450,175 465,180 450,185" fill={colors.accent} />
                    <text x="320" y="170" textAnchor="middle" fontSize="11" fontWeight="600" fill={colors.primary}>Transfer: $5,000</text>
                </motion.g>

                {/* --- MONEY PACKET ANIMATION --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        transaction: {
                            opacity: 1,
                            transition: { duration: 0.8 }
                        },
                        validate: { opacity: 0 }
                    }}
                    animate={controls}
                >
                    <motion.circle
                        r="15"
                        fill={colors.gold}
                        filter="url(#bank-glow)"
                        variants={{
                            transaction: {
                                cx: [190, 320, 450],
                                cy: [180, 160, 180],
                                transition: { duration: 1.2, ease: "easeInOut" }
                            }
                        }}
                        animate={controls}
                    />
                    <motion.text
                        fontSize="12"
                        fill="white"
                        fontWeight="700"
                        textAnchor="middle"
                        variants={{
                            transaction: {
                                x: [190, 320, 450],
                                y: [184, 164, 184],
                                transition: { duration: 1.2, ease: "easeInOut" }
                            }
                        }}
                        animate={controls}
                    >
                        $
                    </motion.text>
                </motion.g>

                {/* --- VALIDATION CHECKMARKS --- */}
                {accounts.map((account, i) => (
                    <motion.g
                        key={`check-${account.id}`}
                        initial="reset"
                        variants={{
                            reset: { opacity: 0, scale: 0 },
                            init: { opacity: 0 },
                            transaction: { opacity: 0 },
                            validate: { opacity: 1, scale: 1, transition: { delay: i * 0.2, type: "spring" } },
                            security: { opacity: 1 },
                            fraud: i === 1 ? { opacity: 0 } : { opacity: 1 },
                            log: i === 1 ? { opacity: 0 } : { opacity: 1 },
                            retest: { opacity: 1 },
                            complete: { opacity: 1 }
                        }}
                        animate={controls}
                    >
                        <circle
                            cx={account.x + 45}
                            cy={account.y - 35}
                            r="12"
                            fill={colors.success}
                            stroke="white"
                            strokeWidth="2"
                        />
                        <text x={account.x + 45} y={account.y - 31} textAnchor="middle" fontSize="12" fill="white">✓</text>
                    </motion.g>
                ))}

                {/* --- SECURITY SHIELD SCAN --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, scale: 0 },
                        init: { opacity: 0 },
                        transaction: { opacity: 0 },
                        validate: { opacity: 0 },
                        security: { opacity: 1, scale: 1, transition: { type: "spring" } },
                        fraud: { opacity: 1 },
                        log: { opacity: 0.5 },
                        retest: { opacity: 0.5 },
                        complete: { opacity: 0 }
                    }}
                    animate={controls}
                >
                    <rect x="260" y="260" width="120" height="50" rx="8" fill={colors.security} filter="url(#bank-shadow)" />
                    <text x="320" y="290" textAnchor="middle" fontSize="11" fontWeight="600" fill="white">🛡️ Security Scan</text>
                </motion.g>

                {/* --- SECURITY SCAN LINE --- */}
                <motion.line
                    x1="60"
                    y1="285"
                    x2="60"
                    y2="285"
                    stroke={colors.security}
                    strokeWidth="3"
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        security: {
                            opacity: [0, 1, 1, 0],
                            x1: [60, 580],
                            x2: [80, 600],
                            transition: { duration: 1.5 }
                        }
                    }}
                    animate={controls}
                />

                {/* --- FRAUD ALERT --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, scale: 0 },
                        init: { opacity: 0 },
                        transaction: { opacity: 0 },
                        validate: { opacity: 0 },
                        security: { opacity: 0 },
                        fraud: { opacity: 1, scale: 1, transition: { type: "spring" } },
                        log: { opacity: 1 },
                        retest: { opacity: 0, scale: 0 }
                    }}
                    animate={controls}
                >
                    <rect x="400" y="260" width="160" height="40" rx="8" fill={colors.error} />
                    <text x="480" y="285" textAnchor="middle" fontSize="10" fontWeight="600" fill="white">⚠️ Suspicious Activity</text>
                </motion.g>

                {/* --- DEFECT LOG PANEL --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, x: 30 },
                        init: { opacity: 0 },
                        transaction: { opacity: 0 },
                        validate: { opacity: 0 },
                        security: { opacity: 0 },
                        fraud: { opacity: 0 },
                        log: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                        retest: { opacity: 0.5 },
                        complete: { opacity: 0 }
                    }}
                    animate={controls}
                >
                    <rect x="450" y="330" width="150" height="90" rx="8" fill="white" filter="url(#bank-shadow)" />
                    <text x="525" y="355" textAnchor="middle" fontSize="10" fontWeight="700" fill={colors.textPrimary}>Issue Log</text>
                    <text x="460" y="375" fontSize="9" fill={colors.error}>• Unauthorized attempt</text>
                    <text x="460" y="390" fontSize="9" fill={colors.textSecondary}>IP: 192.168.x.x</text>
                    <text x="460" y="405" fontSize="9" fill={colors.warning}>Status: Investigating</text>
                </motion.g>

                {/* --- QA ENGINEER --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, x: -30 },
                        init: { opacity: 0 },
                        engineer: { opacity: 1, x: 0, transition: { duration: 0.5, type: "spring" } },
                        transaction: { opacity: 1 },
                        validate: { opacity: 1 },
                        security: { opacity: 1 },
                        fraud: { opacity: 1 },
                        log: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    {/* Desk */}
                    <rect x="30" y="420" width="580" height="12" rx="4" fill="#dbeafe" />
                    {/* Engineer Body */}
                    <ellipse cx="100" cy="410" rx="25" ry="8" fill={colors.navy} />
                    <circle cx="100" cy="390" r="16" fill={colors.primary} />
                    {/* Laptop */}
                    <rect x="75" y="395" width="50" height="30" rx="4" fill="#334155" />
                    <rect x="78" y="398" width="44" height="24" rx="2" fill={colors.accent} opacity="0.3" />
                </motion.g>

                {/* --- TEST RESULTS PANEL --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: 20 },
                        init: { opacity: 0 },
                        transaction: { opacity: 0 },
                        validate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                        security: { opacity: 1 },
                        fraud: { opacity: 1 },
                        log: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="50" y="320" width="140" height="95" rx="8" fill="white" filter="url(#bank-shadow)" />
                    <text x="120" y="345" textAnchor="middle" fontSize="10" fontWeight="700" fill={colors.textPrimary}>Compliance Check</text>

                    {[
                        { y: 360, label: "PCI DSS", w: 100, color: colors.success },
                        { y: 380, label: "SOX", w: 95, color: colors.success },
                        { y: 400, label: "GDPR", w: 90, color: colors.success },
                    ].map((bar, i) => (
                        <React.Fragment key={`bar-${i}`}>
                            <text x="60" y={bar.y + 4} fontSize="8" fill={colors.textSecondary}>{bar.label}</text>
                            <rect x="60" y={bar.y + 8} width="115" height="6" rx="3" fill="#e2e8f0" />
                            <motion.rect
                                x="60"
                                y={bar.y + 8}
                                height="6"
                                rx="3"
                                fill={bar.color}
                                variants={{
                                    validate: { width: [0, bar.w], transition: { duration: 0.5, delay: i * 0.1 } }
                                }}
                                animate={controls}
                            />
                        </React.Fragment>
                    ))}
                </motion.g>

                {/* --- SUCCESS BANNER --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 0 },
                        transaction: { opacity: 0 },
                        validate: { opacity: 0 },
                        security: { opacity: 0 },
                        fraud: { opacity: 0 },
                        log: { opacity: 0 },
                        retest: { opacity: 0 },
                        complete: { opacity: 1, transition: { delay: 0.5 } }
                    }}
                    animate={controls}
                >
                    <rect x="170" y="85" width="300" height="40" rx="10" fill={colors.success} filter="url(#bank-shadow)" />
                    <text x="320" y="111" textAnchor="middle" fontSize="13" fontWeight="700" fill="white">✓ Banking System Secured</text>
                </motion.g>

                {/* --- LIVE INDICATOR --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 1, transition: { delay: 0.5 } },
                        engineer: { opacity: 1 },
                        transaction: { opacity: 1 },
                        validate: { opacity: 1 },
                        security: { opacity: 1 },
                        fraud: { opacity: 1 },
                        log: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 0 }
                    }}
                    animate={controls}
                >
                    <rect x="500" y="85" width="90" height="24" rx="12" fill={colors.navy} />
                    <motion.circle
                        cx="515"
                        cy="97"
                        r="5"
                        fill={colors.success}
                        animate={{ opacity: [1, 0.4, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    />
                    <text x="555" y="102" textAnchor="middle" fontSize="9" fontWeight="600" fill="white">MONITORING</text>
                </motion.g>

            </svg>
        </div>
    );
};

export default BankingTestingAnimation;
