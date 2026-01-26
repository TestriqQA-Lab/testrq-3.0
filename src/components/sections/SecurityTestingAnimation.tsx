"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const SecurityTestingAnimation = () => {
    const controls = useAnimation();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Corporate Color Palette
    const colors = {
        bg: "#fef2f2",
        primary: "#ef4444",
        secondary: "#ec4899",
        accent: "#8b5cf6",
        success: "#22c55e",
        error: "#ef4444",
        warning: "#f59e0b",
        textPrimary: "#1e293b",
        textSecondary: "#64748b",
    };

    // Threat types
    const threats = [
        { name: "SQL Injection", severity: "Critical", blocked: true },
        { name: "XSS Attack", severity: "High", blocked: true },
        { name: "CSRF Token", severity: "Medium", blocked: false },
        { name: "Auth Bypass", severity: "Critical", blocked: true },
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
                await controls.start("threats");
                await controls.start("scan");
                await controls.start("validate");
                await controls.start("vulnerability");
                await controls.start("log");
                await controls.start("fix");
                await controls.start("complete");
                await new Promise(resolve => setTimeout(resolve, 3000));
            }
        };
        sequence();

        return () => { isMounted = false; };
    }, [controls, mounted]);

    if (!mounted) return <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-red-50 to-pink-50 shadow-xl border border-red-200" />;

    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-red-50 to-pink-50 overflow-hidden relative shadow-xl border border-red-200">
            <svg viewBox="0 0 800 500" className="w-full h-full relative z-10">
                <defs>
                    <filter id="sec-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <linearGradient id="red-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#ef4444" />
                        <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                </defs>

                {/* --- PROTECTED SYSTEM --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, scale: 0.9 },
                        init: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
                        threats: { opacity: 1 },
                        scan: { opacity: 1 },
                        validate: { opacity: 1 },
                        vulnerability: { opacity: 1 },
                        log: { opacity: 1 },
                        fix: { opacity: 1 },
                        complete: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="300" y="80" width="200" height="160" rx="12" fill="white" filter="url(#sec-shadow)" />
                    <rect x="300" y="80" width="200" height="35" rx="12" fill="url(#red-gradient)" />
                    <rect x="300" y="100" width="200" height="15" fill="url(#red-gradient)" />
                    <text x="400" y="103" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">🔒 Protected System</text>

                    {/* System components */}
                    <rect x="315" y="130" width="80" height="45" rx="5" fill="#fef2f2" stroke={colors.primary} strokeWidth="1" />
                    <text x="355" y="150" textAnchor="middle" fontSize="8" fill={colors.textSecondary}>Database</text>
                    <text x="355" y="165" textAnchor="middle" fontSize="10" fill={colors.primary}>🗄️</text>

                    <rect x="405" y="130" width="80" height="45" rx="5" fill="#fef2f2" stroke={colors.primary} strokeWidth="1" />
                    <text x="445" y="150" textAnchor="middle" fontSize="8" fill={colors.textSecondary}>API Layer</text>
                    <text x="445" y="165" textAnchor="middle" fontSize="10" fill={colors.primary}>🔗</text>

                    <rect x="315" y="185" width="170" height="40" rx="5" fill="#fef2f2" stroke={colors.primary} strokeWidth="1" />
                    <text x="400" y="205" textAnchor="middle" fontSize="8" fill={colors.textSecondary}>Application Core</text>
                    <text x="400" y="218" textAnchor="middle" fontSize="10" fill={colors.primary}>⚙️</text>
                </motion.g>

                {/* --- SHIELD --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 0.3 },
                        threats: { opacity: 0.5 },
                        scan: { opacity: 0.7 },
                        validate: { opacity: 1, fill: colors.success },
                        vulnerability: { opacity: 0.5 },
                        log: { opacity: 0.5 },
                        fix: { opacity: 0.8 },
                        complete: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <motion.path
                        d="M400 50 L440 65 L440 100 C440 130 420 150 400 160 C380 150 360 130 360 100 L360 65 Z"
                        fill="url(#red-gradient)"
                        stroke="white"
                        strokeWidth="2"
                        filter="url(#sec-shadow)"
                        variants={{
                            validate: { fill: colors.success },
                            vulnerability: { fill: colors.warning },
                            complete: { fill: colors.success }
                        }}
                        animate={controls}
                    />
                    <motion.text x="400" y="115" textAnchor="middle" fontSize="20" fill="white"
                        variants={{
                            validate: { opacity: 1 },
                            vulnerability: { opacity: 0 },
                            fix: { opacity: 0.5 },
                            complete: { opacity: 1 }
                        }}
                        initial={{ opacity: 0 }}
                        animate={controls}
                    >🛡️</motion.text>
                </motion.g>

                {/* --- INCOMING THREATS --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 0 },
                        threats: { opacity: 1 },
                        scan: { opacity: 0.7 },
                        validate: { opacity: 0.3 },
                        vulnerability: { opacity: 0.3 },
                        log: { opacity: 0.3 },
                        fix: { opacity: 0 },
                        complete: { opacity: 0 }
                    }}
                    animate={controls}
                >
                    {[
                        { x: 50, y: 100, delay: 0 },
                        { x: 80, y: 150, delay: 0.2 },
                        { x: 50, y: 200, delay: 0.4 },
                    ].map((threat, i) => (
                        <motion.g key={i}
                            variants={{
                                threats: { x: [0, 200], opacity: [1, 0], transition: { delay: threat.delay, duration: 1 } }
                            }}
                            animate={controls}
                        >
                            <circle cx={threat.x} cy={threat.y} r="15" fill={colors.error} opacity="0.8" />
                            <text x={threat.x} y={threat.y + 4} textAnchor="middle" fontSize="12" fill="white">⚡</text>
                            <motion.line
                                x1={threat.x + 15} y1={threat.y}
                                x2={threat.x + 100} y2={threat.y}
                                stroke={colors.error}
                                strokeWidth="2"
                                strokeDasharray="4 2"
                                variants={{
                                    threats: { opacity: [1, 0], transition: { delay: threat.delay + 0.3, duration: 0.5 } }
                                }}
                                animate={controls}
                            />
                        </motion.g>
                    ))}
                    <text x="80" y="250" textAnchor="middle" fontSize="10" fill={colors.error}>Threat Vectors</text>
                </motion.g>

                {/* --- SCANNER GRID --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 0 },
                        threats: { opacity: 0 },
                        scan: { opacity: 1 },
                        validate: { opacity: 0.3 },
                        vulnerability: { opacity: 0.3 },
                        log: { opacity: 0 },
                        fix: { opacity: 0 },
                        complete: { opacity: 0 }
                    }}
                    animate={controls}
                >
                    <motion.rect
                        x="300" y="80"
                        width="10" height="160"
                        fill={colors.primary}
                        opacity="0.3"
                        variants={{
                            scan: { x: [300, 500], transition: { duration: 1.5, ease: "linear" } }
                        }}
                        animate={controls}
                    />
                </motion.g>

                {/* --- THREAT PANEL --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, x: 30 },
                        init: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
                        threats: { opacity: 1 },
                        scan: { opacity: 1 },
                        validate: { opacity: 1 },
                        vulnerability: { opacity: 1 },
                        log: { opacity: 1 },
                        fix: { opacity: 1 },
                        complete: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="550" y="80" width="210" height="180" rx="10" fill="white" filter="url(#sec-shadow)" />
                    <text x="570" y="105" fontSize="11" fontWeight="700" fill={colors.textPrimary}>🔍 Threat Detection</text>

                    {threats.map((threat, i) => (
                        <motion.g key={threat.name}
                            variants={{
                                scan: { opacity: [0.3, 1], transition: { delay: i * 0.15 } },
                                validate: { opacity: 1 },
                                vulnerability: { opacity: 1 },
                                log: { opacity: 1 },
                                fix: { opacity: 1 },
                                complete: { opacity: 1 }
                            }}
                            animate={controls}
                        >
                            <rect x="560" y={118 + i * 35} width="190" height="28" rx="4" fill={i % 2 === 0 ? "#fef2f2" : "#fdf2f8"} />
                            <text x="575" y={136 + i * 35} fontSize="9" fontWeight="500" fill={colors.textPrimary}>{threat.name}</text>

                            <motion.rect x="680" y={123 + i * 35} width="55" height="18" rx="3"
                                variants={{
                                    validate: { fill: threat.blocked ? colors.success : colors.error, transition: { delay: 0.3 + i * 0.1 } },
                                    vulnerability: i === 2 ? { fill: colors.error } : { fill: colors.success },
                                    fix: { fill: colors.warning },
                                    complete: { fill: colors.success }
                                }}
                                initial={{ fill: "#e2e8f0" }}
                                animate={controls}
                            />
                            <motion.text x="707" y={135 + i * 35} textAnchor="middle" fontSize="7" fontWeight="600"
                                variants={{
                                    validate: { fill: "white", transition: { delay: 0.3 + i * 0.1 } }
                                }}
                                initial={{ fill: colors.textSecondary }}
                                animate={controls}
                            >{threat.blocked ? "BLOCKED" : "DETECTED"}</motion.text>
                        </motion.g>
                    ))}
                </motion.g>

                {/* --- SECURITY METRICS --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: 30 },
                        init: { opacity: 1, y: 0, transition: { delay: 0.4 } },
                        threats: { opacity: 1 },
                        scan: { opacity: 1 },
                        validate: { opacity: 1 },
                        vulnerability: { opacity: 1 },
                        log: { opacity: 1 },
                        fix: { opacity: 1 },
                        complete: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="50" y="300" width="710" height="160" rx="12" fill="white" filter="url(#sec-shadow)" />
                    <text x="70" y="328" fontSize="12" fontWeight="700" fill={colors.textPrimary}>📊 Security Assessment</text>

                    {/* Risk meter */}
                    <rect x="70" y="350" width="200" height="80" rx="8" fill="#f8fafc" stroke={colors.primary} strokeWidth="1" />
                    <text x="170" y="375" textAnchor="middle" fontSize="10" fontWeight="600" fill={colors.textPrimary}>Risk Score</text>
                    <motion.text x="170" y="410" textAnchor="middle" fontSize="28" fontWeight="700"
                        variants={{
                            validate: { fill: colors.success },
                            vulnerability: { fill: colors.error },
                            fix: { fill: colors.warning },
                            complete: { fill: colors.success }
                        }}
                        initial={{ fill: colors.primary }}
                        animate={controls}
                    >7.8</motion.text>
                    <text x="170" y="425" textAnchor="middle" fontSize="9" fill={colors.textSecondary}>/10</text>

                    {/* Stats */}
                    {[
                        { label: "Vulnerabilities", value: "23", color: colors.error, x: 300 },
                        { label: "Threats Blocked", value: "847", color: colors.success, x: 450 },
                        { label: "Coverage", value: "96%", color: colors.accent, x: 600 },
                    ].map((stat) => (
                        <motion.g key={stat.label}
                            variants={{
                                validate: { opacity: 1, transition: { delay: 0.2 } }
                            }}
                            initial={{ opacity: 0.5 }}
                            animate={controls}
                        >
                            <rect x={stat.x} y="350" width="130" height="80" rx="8" fill="#f8fafc" stroke={stat.color} strokeWidth="2" />
                            <text x={stat.x + 65} y="390" textAnchor="middle" fontSize="20" fontWeight="700" fill={stat.color}>{stat.value}</text>
                            <text x={stat.x + 65} y="420" textAnchor="middle" fontSize="9" fill={colors.textSecondary}>{stat.label}</text>
                        </motion.g>
                    ))}
                </motion.g>

                {/* --- SECURITY ENGINEER --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: 20 },
                        init: { opacity: 1, y: 0, transition: { delay: 0.5 } },
                        threats: { opacity: 1 },
                        scan: { opacity: 1 },
                        validate: { opacity: 1 },
                        vulnerability: { opacity: 1 },
                        log: { opacity: 1 },
                        fix: { opacity: 1 },
                        complete: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="600" y="280" width="150" height="12" rx="4" fill="#fecaca" />
                    <ellipse cx="675" cy="273" rx="20" ry="6" fill="#991b1b" />
                    <circle cx="675" cy="260" r="12" fill="#ef4444" />
                </motion.g>

                {/* --- VULNERABILITY ALERT --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, scale: 0 },
                        init: { opacity: 0 },
                        threats: { opacity: 0 },
                        scan: { opacity: 0 },
                        validate: { opacity: 0 },
                        vulnerability: { opacity: 1, scale: 1, transition: { type: "spring" } },
                        log: { opacity: 1 },
                        fix: { opacity: 0.5 },
                        complete: { opacity: 0, scale: 0 }
                    }}
                    animate={controls}
                >
                    <rect x="520" y="270" width="200" height="45" rx="8" fill={colors.error} />
                    <text x="620" y="290" textAnchor="middle" fontSize="10" fontWeight="600" fill="white">⚠ Vulnerability Detected</text>
                    <text x="620" y="305" textAnchor="middle" fontSize="9" fill="white" opacity="0.9">CSRF Token Missing</text>
                </motion.g>

                {/* --- SUCCESS BADGE --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 0 },
                        threats: { opacity: 0 },
                        scan: { opacity: 0 },
                        validate: { opacity: 0 },
                        vulnerability: { opacity: 0 },
                        log: { opacity: 0 },
                        fix: { opacity: 0 },
                        complete: { opacity: 1, transition: { delay: 0.5 } }
                    }}
                    animate={controls}
                >
                    <rect x="520" y="270" width="200" height="45" rx="10" fill={colors.success} filter="url(#sec-shadow)" />
                    <text x="620" y="298" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">✓ System Secured</text>
                </motion.g>

            </svg>
        </div>
    );
};

export default SecurityTestingAnimation;
