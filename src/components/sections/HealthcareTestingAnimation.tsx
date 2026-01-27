"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const HealthcareTestingAnimation = () => {
    const controls = useAnimation();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Healthcare Color Palette (Blues, Teals, Soft Greens)
    const colors = {
        bg: "#f0fdfa",
        primary: "#0891b2",
        secondary: "#06b6d4",
        accent: "#14b8a6",
        ehr: "#3b82f6",
        patient: "#10b981",
        security: "#8b5cf6",
        success: "#10b981",
        error: "#ef4444",
        textPrimary: "#134e4a",
        textSecondary: "#64748b",
        hipaa: "#f59e0b",
    };

    // EHR Systems
    const systems = [
        { id: "ehr", x: 120, y: 150, label: "EHR System", color: colors.ehr },
        { id: "lab", x: 280, y: 150, label: "Lab System", color: colors.accent },
        { id: "pharmacy", x: 440, y: 150, label: "Pharmacy", color: colors.patient },
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
                await controls.start("records");
                await controls.start("validate");
                await controls.start("interop");
                await controls.start("security");
                await controls.start("defect");
                await controls.start("retest");
                await controls.start("complete");
                await new Promise(resolve => setTimeout(resolve, 3000));
            }
        };
        sequence();

        return () => { isMounted = false; };
    }, [controls, mounted]);

    if (!mounted) return <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-100 shadow-xl border border-teal-200" />;

    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-100 overflow-hidden relative shadow-xl border border-teal-200">
            <svg viewBox="0 0 640 480" className="w-full h-full relative z-10">
                <defs>
                    <filter id="health-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <filter id="health-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <linearGradient id="health-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor={colors.primary} />
                        <stop offset="100%" stopColor={colors.secondary} />
                    </linearGradient>
                </defs>

                {/* --- HOSPITAL DASHBOARD HEADER --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: -20 },
                        init: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                        engineer: { opacity: 1 },
                        records: { opacity: 1 },
                        validate: { opacity: 1 },
                        interop: { opacity: 1 },
                        security: { opacity: 1 },
                        defect: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="50" y="30" width="540" height="50" rx="8" fill="white" filter="url(#health-shadow)" />
                    <rect x="60" y="42" width="130" height="26" rx="6" fill="url(#health-gradient)" />
                    <text x="125" y="59" textAnchor="middle" fontSize="10" fontWeight="700" fill="white">🏥 Healthcare HIS</text>

                    <text x="220" y="60" fontSize="10" fill={colors.textSecondary}>Dashboard</text>
                    <text x="300" y="60" fontSize="10" fontWeight="600" fill={colors.primary}>Patient Records</text>
                    <text x="410" y="60" fontSize="10" fill={colors.textSecondary}>Compliance</text>

                    {/* HIPAA Badge */}
                    <rect x="500" y="42" width="70" height="26" rx="13" fill={colors.hipaa} />
                    <text x="535" y="59" textAnchor="middle" fontSize="9" fontWeight="700" fill="white">HIPAA ✓</text>
                </motion.g>

                {/* --- EHR SYSTEM CARDS --- */}
                {systems.map((sys, i) => (
                    <motion.g
                        key={sys.id}
                        initial="reset"
                        variants={{
                            reset: { opacity: 0, y: 30 },
                            init: { opacity: 0 },
                            engineer: { opacity: 0 },
                            records: { opacity: 1, y: 0, transition: { delay: i * 0.15, type: "spring" } },
                            validate: { opacity: 1 },
                            interop: { opacity: 1 },
                            security: { opacity: 1 },
                            defect: { opacity: 1 },
                            retest: { opacity: 1 },
                            complete: { opacity: 1 }
                        }}
                        animate={controls}
                    >
                        <rect x={sys.x - 55} y={sys.y - 40} width="110" height="80" rx="10" fill="white" stroke={sys.color} strokeWidth="2" filter="url(#health-shadow)" />
                        <circle cx={sys.x} cy={sys.y - 15} r="18" fill={sys.color} opacity="0.15" />
                        <text x={sys.x} y={sys.y - 10} textAnchor="middle" fontSize="18">{sys.id === "ehr" ? "📋" : sys.id === "lab" ? "🔬" : "💊"}</text>
                        <text x={sys.x} y={sys.y + 15} textAnchor="middle" fontSize="9" fontWeight="600" fill={colors.textPrimary}>{sys.label}</text>

                        {/* Validation checkmarks */}
                        <motion.circle
                            cx={sys.x + 40}
                            cy={sys.y - 30}
                            r="10"
                            fill={colors.success}
                            variants={{
                                reset: { scale: 0 },
                                validate: { scale: 1, transition: { delay: i * 0.15 } }
                            }}
                            animate={controls}
                        />
                        <motion.text
                            x={sys.x + 40}
                            y={sys.y - 26}
                            textAnchor="middle"
                            fontSize="10"
                            fill="white"
                            variants={{
                                reset: { opacity: 0 },
                                validate: { opacity: 1, transition: { delay: i * 0.15 } }
                            }}
                            animate={controls}
                        >
                            ✓
                        </motion.text>
                    </motion.g>
                ))}

                {/* --- PATIENT DATA FLOW --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 0 },
                        engineer: { opacity: 0 },
                        records: { opacity: 0 },
                        validate: { opacity: 0 },
                        interop: { opacity: 1, transition: { duration: 0.5 } },
                        security: { opacity: 0.5 },
                        defect: { opacity: 0.5 },
                        retest: { opacity: 0.5 },
                        complete: { opacity: 0.3 }
                    }}
                    animate={controls}
                >
                    {/* Connection lines */}
                    <motion.line
                        x1="175"
                        y1="150"
                        x2="225"
                        y2="150"
                        stroke={colors.accent}
                        strokeWidth="3"
                        strokeDasharray="8,4"
                        variants={{
                            interop: { strokeDashoffset: [50, 0], transition: { duration: 1 } }
                        }}
                        animate={controls}
                    />
                    <motion.line
                        x1="335"
                        y1="150"
                        x2="385"
                        y2="150"
                        stroke={colors.accent}
                        strokeWidth="3"
                        strokeDasharray="8,4"
                        variants={{
                            interop: { strokeDashoffset: [50, 0], transition: { duration: 1, delay: 0.3 } }
                        }}
                        animate={controls}
                    />

                    {/* Data packet */}
                    <motion.g
                        variants={{
                            interop: {
                                x: [0, 110, 220],
                                transition: { duration: 1.5 }
                            }
                        }}
                        animate={controls}
                    >
                        <rect x="175" y="140" width="20" height="20" rx="4" fill={colors.patient} />
                        <text x="185" y="154" textAnchor="middle" fontSize="10" fill="white">📄</text>
                    </motion.g>

                    <text x="280" y="190" textAnchor="middle" fontSize="10" fill={colors.accent} fontWeight="600">HL7 FHIR Interoperability</text>
                </motion.g>

                {/* --- SECURITY SCAN --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, scale: 0.8 },
                        init: { opacity: 0 },
                        engineer: { opacity: 0 },
                        records: { opacity: 0 },
                        validate: { opacity: 0 },
                        interop: { opacity: 0 },
                        security: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
                        defect: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 0.5 }
                    }}
                    animate={controls}
                >
                    <rect x="50" y="230" width="180" height="100" rx="10" fill="white" filter="url(#health-shadow)" />
                    <text x="140" y="255" textAnchor="middle" fontSize="11" fontWeight="700" fill={colors.textPrimary}>🛡️ Security Scan</text>

                    {/* Shield animation */}
                    <motion.circle
                        cx="140"
                        cy="295"
                        r="25"
                        fill={colors.security}
                        opacity="0.2"
                        variants={{
                            security: {
                                r: [25, 35, 25],
                                opacity: [0.2, 0.4, 0.2],
                                transition: { duration: 1, repeat: 1 }
                            }
                        }}
                        animate={controls}
                    />
                    <circle cx="140" cy="295" r="18" fill={colors.security} />
                    <text x="140" y="300" textAnchor="middle" fontSize="14" fill="white">🔒</text>

                    <text x="140" y="330" textAnchor="middle" fontSize="8" fill={colors.textSecondary}>PHI Protected</text>
                </motion.g>

                {/* --- COMPLIANCE PANEL --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, x: 30 },
                        init: { opacity: 0 },
                        engineer: { opacity: 0 },
                        records: { opacity: 0 },
                        validate: { opacity: 0 },
                        interop: { opacity: 0 },
                        security: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                        defect: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="250" y="230" width="160" height="100" rx="10" fill="white" filter="url(#health-shadow)" />
                    <text x="330" y="255" textAnchor="middle" fontSize="10" fontWeight="700" fill={colors.textPrimary}>Compliance</text>

                    {[
                        { y: 270, label: "HIPAA", w: 130, color: colors.success },
                        { y: 290, label: "FDA 21 CFR", w: 110, color: colors.primary },
                        { y: 310, label: "SOC 2", w: 100, color: colors.accent },
                    ].map((bar, i) => (
                        <React.Fragment key={`compliance-${i}`}>
                            <text x="260" y={bar.y + 4} fontSize="8" fill={colors.textSecondary}>{bar.label}</text>
                            <rect x="260" y={bar.y + 8} width="130" height="6" rx="3" fill="#e2e8f0" />
                            <motion.rect
                                x="260"
                                y={bar.y + 8}
                                height="6"
                                rx="3"
                                fill={bar.color}
                                variants={{
                                    security: { width: [0, bar.w], transition: { duration: 0.5, delay: i * 0.15 } }
                                }}
                                animate={controls}
                            />
                        </React.Fragment>
                    ))}
                </motion.g>

                {/* --- DEFECT INDICATOR --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, scale: 0 },
                        init: { opacity: 0 },
                        engineer: { opacity: 0 },
                        records: { opacity: 0 },
                        validate: { opacity: 0 },
                        interop: { opacity: 0 },
                        security: { opacity: 0 },
                        defect: { opacity: 1, scale: 1, transition: { type: "spring" } },
                        retest: { opacity: 0, scale: 0 }
                    }}
                    animate={controls}
                >
                    <rect x="430" y="230" width="150" height="50" rx="8" fill={colors.error} filter="url(#health-shadow)" />
                    <text x="505" y="260" textAnchor="middle" fontSize="10" fontWeight="600" fill="white">⚠️ Data Sync Issue</text>
                </motion.g>

                {/* --- RETEST SUCCESS --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, scale: 0 },
                        init: { opacity: 0 },
                        engineer: { opacity: 0 },
                        records: { opacity: 0 },
                        validate: { opacity: 0 },
                        interop: { opacity: 0 },
                        security: { opacity: 0 },
                        defect: { opacity: 0 },
                        retest: { opacity: 1, scale: 1, transition: { type: "spring" } },
                        complete: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="430" y="230" width="150" height="50" rx="8" fill={colors.success} filter="url(#health-shadow)" />
                    <text x="505" y="260" textAnchor="middle" fontSize="10" fontWeight="600" fill="white">✓ Sync Verified</text>
                </motion.g>

                {/* --- QA ENGINEER --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, x: -30 },
                        init: { opacity: 0 },
                        engineer: { opacity: 1, x: 0, transition: { duration: 0.5, type: "spring" } },
                        records: { opacity: 1 },
                        validate: { opacity: 1 },
                        interop: { opacity: 1 },
                        security: { opacity: 1 },
                        defect: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="30" y="420" width="580" height="12" rx="4" fill="#ccfbf1" />
                    <ellipse cx="100" cy="410" rx="25" ry="8" fill={colors.primary} />
                    <circle cx="100" cy="390" r="16" fill={colors.secondary} />
                    <rect x="75" y="395" width="50" height="30" rx="4" fill="#334155" />
                    <rect x="78" y="398" width="44" height="24" rx="2" fill={colors.accent} opacity="0.3" />
                </motion.g>

                {/* --- SUCCESS BANNER --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 0 },
                        engineer: { opacity: 0 },
                        records: { opacity: 0 },
                        validate: { opacity: 0 },
                        interop: { opacity: 0 },
                        security: { opacity: 0 },
                        defect: { opacity: 0 },
                        retest: { opacity: 0 },
                        complete: { opacity: 1, transition: { delay: 0.5 } }
                    }}
                    animate={controls}
                >
                    <rect x="180" y="350" width="280" height="40" rx="10" fill={colors.success} filter="url(#health-shadow)" />
                    <text x="320" y="376" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">✓ Healthcare System Validated</text>
                </motion.g>

                {/* --- LIVE INDICATOR --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 1, transition: { delay: 0.5 } },
                        engineer: { opacity: 1 },
                        records: { opacity: 1 },
                        validate: { opacity: 1 },
                        interop: { opacity: 1 },
                        security: { opacity: 1 },
                        defect: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 0 }
                    }}
                    animate={controls}
                >
                    <rect x="500" y="350" width="90" height="24" rx="12" fill={colors.primary} />
                    <motion.circle
                        cx="515"
                        cy="362"
                        r="5"
                        fill="white"
                        animate={{ opacity: [1, 0.4, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    />
                    <text x="555" y="367" textAnchor="middle" fontSize="9" fontWeight="600" fill="white">TESTING</text>
                </motion.g>

            </svg>
        </div>
    );
};

export default HealthcareTestingAnimation;
