"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const ManualTestingAnimation = () => {
    const controls = useAnimation();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Corporate Color Palette
    const colors = {
        bg: "#f8fafc",
        primary: "#3b82f6",
        secondary: "#8b5cf6",
        success: "#22c55e",
        error: "#ef4444",
        warning: "#f59e0b",
        textPrimary: "#1e293b",
        textSecondary: "#64748b",
        cursor: "#3b82f6",
        formField: "#e2e8f0",
    };

    // Animation Sequence
    useEffect(() => {
        if (!mounted) return;

        let isMounted = true;
        const sequence = async () => {
            await new Promise(resolve => setTimeout(resolve, 500));

            while (isMounted) {
                await controls.start("reset");
                await controls.start("init");
                await controls.start("explore");
                await controls.start("execute");
                await controls.start("validate");
                await controls.start("defect");
                await controls.start("log");
                await controls.start("resolve");
                await new Promise(resolve => setTimeout(resolve, 3000));
            }
        };
        sequence();

        return () => { isMounted = false; };
    }, [controls, mounted]);

    if (!mounted) return <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 shadow-xl border border-blue-200" />;

    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden relative shadow-xl border border-blue-200">
            <svg viewBox="0 0 800 500" className="w-full h-full relative z-10">
                <defs>
                    <filter id="manual-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <linearGradient id="header-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                </defs>

                {/* --- APPLICATION WINDOW --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: 20 },
                        init: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                        explore: { opacity: 1 },
                        execute: { opacity: 1 },
                        validate: { opacity: 1 },
                        defect: { opacity: 1 },
                        log: { opacity: 1 },
                        resolve: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    {/* Window Frame */}
                    <rect x="100" y="50" width="450" height="360" rx="12" fill="white" filter="url(#manual-shadow)" />

                    {/* Window Header */}
                    <rect x="100" y="50" width="450" height="40" rx="12" fill="url(#header-gradient)" />
                    <rect x="100" y="70" width="450" height="20" fill="url(#header-gradient)" />

                    {/* Window Controls */}
                    <circle cx="125" cy="70" r="6" fill="#ef4444" />
                    <circle cx="145" cy="70" r="6" fill="#f59e0b" />
                    <circle cx="165" cy="70" r="6" fill="#22c55e" />
                    <text x="325" y="75" textAnchor="middle" fontSize="12" fontWeight="600" fill="white">Application Under Test</text>

                    {/* Sidebar */}
                    <rect x="100" y="90" width="100" height="320" fill="#f1f5f9" />

                    {/* Sidebar Menu Items */}
                    {["Dashboard", "Users", "Settings", "Reports"].map((item, i) => (
                        <motion.g key={item}
                            variants={{
                                explore: i < 2 ? { opacity: [0.5, 1, 0.5], transition: { duration: 0.3, delay: i * 0.2 } } : {}
                            }}
                            animate={controls}
                        >
                            <rect x="110" y={110 + i * 40} width="80" height="30" rx="5" fill={i === 0 ? colors.primary : "white"} />
                            <text x="150" y={130 + i * 40} textAnchor="middle" fontSize="9" fontWeight="500" fill={i === 0 ? "white" : colors.textSecondary}>{item}</text>
                        </motion.g>
                    ))}

                    {/* Main Content Area */}
                    <rect x="210" y="100" width="330" height="200" rx="8" fill="#f8fafc" />

                    {/* Form Title */}
                    <text x="230" y="125" fontSize="14" fontWeight="700" fill={colors.textPrimary}>User Registration Form</text>

                    {/* Form Fields */}
                    {/* Username Field */}
                    <text x="230" y="155" fontSize="10" fill={colors.textSecondary}>Username</text>
                    <motion.rect x="230" y="160" width="180" height="28" rx="4" fill="white" stroke={colors.formField} strokeWidth="2"
                        variants={{
                            execute: { stroke: colors.primary, transition: { delay: 0.2 } },
                            defect: { stroke: colors.formField },
                            resolve: { stroke: colors.formField }
                        }}
                        animate={controls}
                    />
                    <motion.text x="240" y="178" fontSize="10" fill={colors.textPrimary}
                        variants={{
                            execute: { opacity: [0, 1], transition: { delay: 0.3 } }
                        }}
                        initial={{ opacity: 0 }}
                        animate={controls}
                    >john_doe</motion.text>

                    {/* Email Field */}
                    <text x="230" y="210" fontSize="10" fill={colors.textSecondary}>Email</text>
                    <motion.rect x="230" y="215" width="180" height="28" rx="4" fill="white" stroke={colors.formField} strokeWidth="2"
                        variants={{
                            execute: { stroke: colors.primary, transition: { delay: 0.5 } },
                            defect: { stroke: colors.error, strokeWidth: 3 },
                            log: { stroke: colors.warning },
                            resolve: { stroke: colors.success }
                        }}
                        animate={controls}
                    />
                    <motion.text x="240" y="233" fontSize="10" fill={colors.textPrimary}
                        variants={{
                            execute: { opacity: [0, 1], transition: { delay: 0.6 } },
                            defect: { fill: colors.error },
                            resolve: { fill: colors.textPrimary }
                        }}
                        initial={{ opacity: 0 }}
                        animate={controls}
                    >invalid@email</motion.text>

                    {/* Submit Button */}
                    <motion.rect x="230" y="260" width="100" height="32" rx="6" fill={colors.primary}
                        variants={{
                            execute: { scale: [1, 0.95, 1], transition: { delay: 0.8, duration: 0.2 } }
                        }}
                        animate={controls}
                    />
                    <text x="280" y="280" textAnchor="middle" fontSize="11" fontWeight="600" fill="white">Submit</text>

                    {/* Validation Checkmarks */}
                    <motion.g
                        variants={{
                            reset: { opacity: 0 },
                            validate: { opacity: 1, transition: { delay: 0.5 } },
                            defect: { opacity: 1 },
                            log: { opacity: 1 },
                            resolve: { opacity: 1 }
                        }}
                        initial={{ opacity: 0 }}
                        animate={controls}
                    >
                        <circle cx="425" cy="174" r="10" fill={colors.success} />
                        <text x="425" y="178" textAnchor="middle" fontSize="10" fill="white">✓</text>
                    </motion.g>

                    <motion.g
                        variants={{
                            reset: { opacity: 0 },
                            validate: { opacity: 0 },
                            defect: { opacity: 1, transition: { type: "spring" } },
                            log: { opacity: 1 },
                            resolve: { opacity: 0 }
                        }}
                        initial={{ opacity: 0 }}
                        animate={controls}
                    >
                        <circle cx="425" cy="229" r="10" fill={colors.error} />
                        <text x="425" y="233" textAnchor="middle" fontSize="10" fill="white">✗</text>
                    </motion.g>

                    <motion.g
                        variants={{
                            reset: { opacity: 0 },
                            resolve: { opacity: 1, transition: { delay: 0.5 } }
                        }}
                        initial={{ opacity: 0 }}
                        animate={controls}
                    >
                        <circle cx="425" cy="229" r="10" fill={colors.success} />
                        <text x="425" y="233" textAnchor="middle" fontSize="10" fill="white">✓</text>
                    </motion.g>
                </motion.g>

                {/* --- CURSOR --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 1, x: 300, y: 200 },
                        explore: { x: [300, 150, 150, 150], y: [200, 130, 170, 210], transition: { duration: 1.5 } },
                        execute: { x: [150, 280, 280, 280], y: [210, 175, 230, 275], transition: { duration: 1.5 } },
                        validate: { x: 350, y: 250 },
                        defect: { x: 370, y: 229 },
                        log: { x: 650, y: 200 },
                        resolve: { x: 280, y: 230 }
                    }}
                    animate={controls}
                >
                    <polygon points="0,0 0,16 5,12 8,20 12,18 9,10 16,10" fill={colors.cursor} stroke="white" strokeWidth="1" />
                </motion.g>

                {/* --- QA ENGINEER --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: 30 },
                        init: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
                        explore: { opacity: 1 },
                        execute: { opacity: 1 },
                        validate: { opacity: 1 },
                        defect: { opacity: 1 },
                        log: { opacity: 1 },
                        resolve: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="100" y="430" width="500" height="15" rx="4" fill="#ddd6fe" />
                    <ellipse cx="350" cy="420" rx="30" ry="10" fill="#7c3aed" />
                    <circle cx="350" cy="400" r="18" fill="#8b5cf6" />
                </motion.g>

                {/* --- DEFECT LOG PANEL --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, x: 50 },
                        init: { opacity: 0 },
                        explore: { opacity: 0 },
                        execute: { opacity: 0 },
                        validate: { opacity: 0 },
                        defect: { opacity: 0 },
                        log: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                        resolve: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="580" y="100" width="190" height="200" rx="10" fill="white" filter="url(#manual-shadow)" />
                    <rect x="580" y="100" width="190" height="35" rx="10" fill={colors.error} />
                    <rect x="580" y="120" width="190" height="15" fill={colors.error} />
                    <text x="675" y="123" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">🐛 Defect Log</text>

                    <text x="595" y="155" fontSize="10" fontWeight="600" fill={colors.textPrimary}>ID: DEF-001</text>
                    <text x="595" y="175" fontSize="9" fill={colors.textSecondary}>Email validation error</text>
                    <text x="595" y="195" fontSize="9" fill={colors.textSecondary}>Severity: High</text>
                    <text x="595" y="215" fontSize="9" fill={colors.textSecondary}>Status: Open</text>

                    <rect x="595" y="235" width="80" height="25" rx="5" fill={colors.primary} />
                    <text x="635" y="252" textAnchor="middle" fontSize="9" fontWeight="600" fill="white">Mark Fixed</text>

                    <motion.rect x="595" y="270" width="160" height="20" rx="4" fill={colors.success} opacity="0.2"
                        variants={{
                            resolve: { opacity: 1 }
                        }}
                        animate={controls}
                    />
                    <motion.text x="675" y="284" textAnchor="middle" fontSize="9" fontWeight="600" fill={colors.success}
                        variants={{
                            log: { opacity: 0 },
                            resolve: { opacity: 1 }
                        }}
                        initial={{ opacity: 0 }}
                        animate={controls}
                    >✓ Verified Fixed</motion.text>
                </motion.g>

                {/* --- SUCCESS BADGE --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 0 },
                        explore: { opacity: 0 },
                        execute: { opacity: 0 },
                        validate: { opacity: 0 },
                        defect: { opacity: 0 },
                        log: { opacity: 0 },
                        resolve: { opacity: 1, transition: { delay: 0.8 } }
                    }}
                    animate={controls}
                >
                    <rect x="220" y="330" width="220" height="45" rx="10" fill={colors.success} filter="url(#manual-shadow)" />
                    <text x="330" y="358" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">✓ All Tests Passed</text>
                </motion.g>

            </svg>
        </div>
    );
};

export default ManualTestingAnimation;
