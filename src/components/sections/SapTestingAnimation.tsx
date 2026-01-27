"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const SapTestingAnimation = () => {
    const controls = useAnimation();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Corporate Color Palette (SAP Blue/Orange theme)
    const colors = {
        bg: "#f0f9ff",
        sapBlue: "#0070f2",
        sapNavy: "#1e3a5f",
        finance: "#2563eb",
        hr: "#8b5cf6",
        scm: "#059669",
        sales: "#f59e0b",
        success: "#10b981",
        error: "#ef4444",
        warning: "#f59e0b",
        textPrimary: "#1e3a5f",
        textSecondary: "#64748b",
        dataFlow: "#60a5fa",
    };

    // SAP Modules positioned in a diamond/square pattern
    const modules = [
        { id: "finance", x: 320, y: 100, label: "Finance", emoji: "💰", color: colors.finance },
        { id: "hr", x: 160, y: 220, label: "HR", emoji: "👥", color: colors.hr },
        { id: "scm", x: 320, y: 340, label: "Supply Chain", emoji: "📦", color: colors.scm },
        { id: "sales", x: 480, y: 220, label: "Sales", emoji: "📊", color: colors.sales },
    ];

    // Central SAP Hub
    const hubCenter = { x: 320, y: 220 };

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
                await controls.start("modules");
                await controls.start("dataflow");
                await controls.start("validate");
                await controls.start("defect");
                await controls.start("log");
                await controls.start("retest");
                await controls.start("complete");
                await new Promise(resolve => setTimeout(resolve, 3000));
            }
        };
        sequence();

        return () => { isMounted = false; };
    }, [controls, mounted]);

    if (!mounted) return <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 shadow-xl border border-blue-200" />;

    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden relative shadow-xl border border-blue-200">
            <svg viewBox="0 0 640 480" className="w-full h-full relative z-10">
                <defs>
                    <filter id="sap-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <filter id="sap-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <linearGradient id="sap-hub-gradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#0070f2" />
                        <stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                </defs>

                {/* --- SAP CENTRAL HUB --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, scale: 0 },
                        init: { opacity: 1, scale: 1, transition: { duration: 0.5, type: "spring" } },
                        engineer: { opacity: 1 },
                        modules: { opacity: 1 },
                        dataflow: { opacity: 1 },
                        validate: { opacity: 1 },
                        defect: { opacity: 1 },
                        log: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    {/* Hub outer ring */}
                    <circle cx={hubCenter.x} cy={hubCenter.y} r="65" fill="white" stroke={colors.sapBlue} strokeWidth="4" filter="url(#sap-shadow)" />
                    {/* Hub inner */}
                    <circle cx={hubCenter.x} cy={hubCenter.y} r="50" fill="url(#sap-hub-gradient)" />
                    {/* SAP Logo placeholder */}
                    <text x={hubCenter.x} y={hubCenter.y - 8} textAnchor="middle" fontSize="16" fontWeight="700" fill="white">SAP</text>
                    <text x={hubCenter.x} y={hubCenter.y + 12} textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.9)">S/4HANA</text>
                </motion.g>

                {/* --- CONNECTION LINES TO MODULES --- */}
                {modules.map((module, i) => (
                    <motion.line
                        key={`line-${module.id}`}
                        x1={hubCenter.x}
                        y1={hubCenter.y}
                        x2={module.x}
                        y2={module.y}
                        stroke={colors.dataFlow}
                        strokeWidth="2"
                        strokeDasharray="6 4"
                        initial="reset"
                        variants={{
                            reset: { opacity: 0 },
                            init: { opacity: 0.3 },
                            modules: { opacity: 1, transition: { delay: i * 0.1 } },
                            dataflow: { opacity: 1 },
                            validate: { opacity: 1 },
                            defect: module.id === "scm" ? { stroke: colors.error } : { opacity: 1 },
                            log: { opacity: 1 },
                            retest: { stroke: colors.dataFlow },
                            complete: { opacity: 1 }
                        }}
                        animate={controls}
                    />
                ))}

                {/* --- SAP MODULES --- */}
                {modules.map((module, i) => (
                    <motion.g
                        key={module.id}
                        initial="reset"
                        variants={{
                            reset: { opacity: 0, scale: 0 },
                            init: { opacity: 0 },
                            engineer: { opacity: 0 },
                            modules: { opacity: 1, scale: 1, transition: { delay: i * 0.15, type: "spring" } },
                            dataflow: { opacity: 1 },
                            validate: { opacity: 1 },
                            defect: { opacity: 1 },
                            log: { opacity: 1 },
                            retest: { opacity: 1 },
                            complete: { opacity: 1 }
                        }}
                        animate={controls}
                    >
                        {/* Module background */}
                        <motion.rect
                            x={module.x - 45}
                            y={module.y - 35}
                            width="90"
                            height="70"
                            rx="10"
                            fill="white"
                            stroke={module.color}
                            strokeWidth="3"
                            filter="url(#sap-shadow)"
                            variants={{
                                validate: { stroke: colors.success, transition: { delay: 0.3 + i * 0.1 } },
                                defect: module.id === "scm" ? { stroke: colors.error, strokeWidth: 4 } : { stroke: colors.success },
                                log: module.id === "scm" ? { stroke: colors.warning } : { stroke: colors.success },
                                retest: { stroke: colors.success, transition: { delay: i * 0.1 } },
                                complete: { stroke: colors.success }
                            }}
                            animate={controls}
                        />

                        {/* Module icon */}
                        <text x={module.x} y={module.y - 5} textAnchor="middle" fontSize="22">{module.emoji}</text>

                        {/* Module label */}
                        <text x={module.x} y={module.y + 20} textAnchor="middle" fontSize="10" fontWeight="600" fill={colors.textPrimary}>
                            {module.label}
                        </text>

                        {/* Status indicator */}
                        <motion.circle
                            cx={module.x + 35}
                            cy={module.y - 25}
                            r="8"
                            fill={colors.success}
                            stroke="white"
                            strokeWidth="2"
                            variants={{
                                reset: { scale: 0 },
                                validate: { scale: 1, transition: { delay: 0.5 + i * 0.1, type: "spring" } },
                                defect: module.id === "scm" ? { fill: colors.error } : { fill: colors.success },
                                log: module.id === "scm" ? { fill: colors.warning } : { fill: colors.success },
                                retest: { fill: colors.success, transition: { delay: i * 0.1 } },
                                complete: { fill: colors.success }
                            }}
                            animate={controls}
                        />
                    </motion.g>
                ))}

                {/* --- DATA FLOW PACKETS --- */}
                {modules.map((module, i) => (
                    <motion.circle
                        key={`packet-${module.id}`}
                        r="5"
                        fill={module.color}
                        filter="url(#sap-glow)"
                        initial="reset"
                        variants={{
                            reset: { opacity: 0 },
                            dataflow: {
                                opacity: 1,
                                cx: [hubCenter.x, module.x],
                                cy: [hubCenter.y, module.y],
                                transition: { duration: 0.8, delay: i * 0.2, repeat: 1, repeatType: "reverse" as const }
                            },
                            validate: { opacity: 0 },
                            defect: { opacity: 0 },
                            log: { opacity: 0 },
                            retest: { opacity: 0 },
                            complete: { opacity: 0 }
                        }}
                        animate={controls}
                    />
                ))}

                {/* --- QA ENGINEER --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, x: -30 },
                        init: { opacity: 0 },
                        engineer: { opacity: 1, x: 0, transition: { duration: 0.5, type: "spring" } },
                        modules: { opacity: 1 },
                        dataflow: { opacity: 1 },
                        validate: { opacity: 1 },
                        defect: { opacity: 1 },
                        log: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    {/* Desk */}
                    <rect x="30" y="420" width="580" height="12" rx="4" fill="#dbeafe" />
                    {/* Engineer Body */}
                    <ellipse cx="100" cy="410" rx="25" ry="8" fill={colors.sapNavy} />
                    <circle cx="100" cy="390" r="16" fill={colors.sapBlue} />
                    {/* Laptop */}
                    <rect x="75" y="395" width="50" height="30" rx="4" fill="#334155" />
                    <rect x="78" y="398" width="44" height="24" rx="2" fill="#0ea5e9" opacity="0.3" />
                </motion.g>

                {/* --- VALIDATION PANEL --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: 20 },
                        init: { opacity: 0 },
                        engineer: { opacity: 0 },
                        modules: { opacity: 0 },
                        dataflow: { opacity: 0 },
                        validate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                        defect: { opacity: 1 },
                        log: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="500" y="60" width="120" height="100" rx="8" fill="white" filter="url(#sap-shadow)" />
                    <text x="560" y="85" textAnchor="middle" fontSize="10" fontWeight="700" fill={colors.textPrimary}>Test Results</text>

                    {/* Test result bars */}
                    {[
                        { y: 100, w: 90, label: "Integration", color: colors.success },
                        { y: 120, w: 85, label: "Regression", color: colors.success },
                        { y: 140, w: 70, label: "Performance", color: colors.warning },
                    ].map((bar, i) => (
                        <React.Fragment key={`result-${i}`}>
                            <text x="510" y={bar.y + 4} fontSize="8" fill={colors.textSecondary}>{bar.label}</text>
                            <rect x="510" y={bar.y + 8} width="100" height="6" rx="3" fill="#e2e8f0" />
                            <motion.rect
                                x="510"
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

                {/* --- DEFECT ALERT --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, scale: 0 },
                        init: { opacity: 0 },
                        engineer: { opacity: 0 },
                        modules: { opacity: 0 },
                        dataflow: { opacity: 0 },
                        validate: { opacity: 0 },
                        defect: { opacity: 1, scale: 1, transition: { type: "spring" } },
                        log: { opacity: 1 },
                        retest: { opacity: 0, scale: 0 }
                    }}
                    animate={controls}
                >
                    <rect x="240" y="380" width="160" height="40" rx="8" fill={colors.error} />
                    <text x="320" y="405" textAnchor="middle" fontSize="11" fontWeight="600" fill="white">⚠ SCM Defect Detected</text>
                </motion.g>

                {/* --- DEFECT LOG PANEL --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, x: 30 },
                        init: { opacity: 0 },
                        engineer: { opacity: 0 },
                        modules: { opacity: 0 },
                        dataflow: { opacity: 0 },
                        validate: { opacity: 0 },
                        defect: { opacity: 0 },
                        log: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                        retest: { opacity: 0.5 },
                        complete: { opacity: 0 }
                    }}
                    animate={controls}
                >
                    <rect x="480" y="320" width="140" height="80" rx="8" fill="white" filter="url(#sap-shadow)" />
                    <text x="550" y="340" textAnchor="middle" fontSize="10" fontWeight="700" fill={colors.textPrimary}>Defect Log</text>
                    <text x="490" y="360" fontSize="9" fill={colors.error}>• SCM-4521: Data sync error</text>
                    <text x="490" y="375" fontSize="9" fill={colors.textSecondary}>Priority: High</text>
                    <text x="490" y="390" fontSize="9" fill={colors.warning}>Status: In Progress</text>
                </motion.g>

                {/* --- SUCCESS BANNER --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 0 },
                        engineer: { opacity: 0 },
                        modules: { opacity: 0 },
                        dataflow: { opacity: 0 },
                        validate: { opacity: 0 },
                        defect: { opacity: 0 },
                        log: { opacity: 0 },
                        retest: { opacity: 0 },
                        complete: { opacity: 1, transition: { delay: 0.5 } }
                    }}
                    animate={controls}
                >
                    <rect x="170" y="20" width="300" height="40" rx="10" fill={colors.success} filter="url(#sap-shadow)" />
                    <text x="320" y="46" textAnchor="middle" fontSize="13" fontWeight="700" fill="white">✓ SAP System Validated</text>
                </motion.g>

                {/* --- LIVE INDICATOR --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 1, transition: { delay: 0.5 } },
                        engineer: { opacity: 1 },
                        modules: { opacity: 1 },
                        dataflow: { opacity: 1 },
                        validate: { opacity: 1 },
                        defect: { opacity: 1 },
                        log: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 0 }
                    }}
                    animate={controls}
                >
                    <rect x="20" y="20" width="80" height="24" rx="12" fill={colors.sapBlue} />
                    <motion.circle
                        cx="35"
                        cy="32"
                        r="5"
                        fill="white"
                        animate={{ opacity: [1, 0.4, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    />
                    <text x="65" y="37" textAnchor="middle" fontSize="10" fontWeight="600" fill="white">TESTING</text>
                </motion.g>

            </svg>
        </div>
    );
};

export default SapTestingAnimation;
