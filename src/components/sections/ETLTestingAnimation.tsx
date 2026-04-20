"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const ETLTestingAnimation = () => {
    const controls = useAnimation();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Corporate Color Palette
    const colors = {
        bg: "#f0f9ff",
        extract: "#3b82f6",
        transform: "#8b5cf6",
        load: "#22c55e",
        warehouse: "#f59e0b",
        success: "#10b981",
        error: "#ef4444",
        warning: "#f59e0b",
        textPrimary: "#1e3a5f",
        textSecondary: "#64748b",
        dataFlow: "#60a5fa",
    };

    // Data source positions
    const sources = [
        { id: "db", x: 80, y: 120, label: "Database", color: colors.extract },
        { id: "api", x: 80, y: 230, label: "API", color: "#10b981" },
        { id: "csv", x: 80, y: 340, label: "Files", color: colors.transform },
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
                await controls.start("extract");
                await controls.start("transform");
                await controls.start("load");
                await controls.start("validate");
                await controls.start("anomaly");
                await controls.start("log");
                await controls.start("resolve");
                await new Promise(resolve => setTimeout(resolve, 3000));
            }
        };
        sequence();

        return () => { isMounted = false; };
    }, [controls, mounted]);

    if (!mounted) return <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-green-50 shadow-xl border border-blue-200" />;

    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden relative shadow-xl border border-blue-200">
            <svg viewBox="0 0 800 500" className="w-full h-full relative z-10">
                <defs>
                    <filter id="etl-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <linearGradient id="extract-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#60a5fa" />
                    </linearGradient>
                    <linearGradient id="transform-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#a78bfa" />
                    </linearGradient>
                    <linearGradient id="load-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#22c55e" />
                        <stop offset="100%" stopColor="#4ade80" />
                    </linearGradient>
                </defs>

                {/* --- DATA SOURCES --- */}
                {sources.map((source, i) => (
                    <motion.g
                        key={source.id}
                        initial="reset"
                        variants={{
                            reset: { opacity: 0, x: -30 },
                            init: { opacity: 1, x: 0, transition: { delay: i * 0.15, type: "spring" } },
                            extract: { opacity: 1 },
                            transform: { opacity: 1 },
                            load: { opacity: 1 },
                            validate: { opacity: 1 },
                            anomaly: { opacity: 1 },
                            log: { opacity: 1 },
                            resolve: { opacity: 1 }
                        }}
                        animate={controls}
                    >
                        <rect x={source.x - 35} y={source.y - 30} width="70" height="60" rx="10" fill="white" stroke={source.color} strokeWidth="3" filter="url(#etl-shadow)" />
                        <text x={source.x} y={source.y - 5} textAnchor="middle" fontSize="18">🗄️</text>
                        <text x={source.x} y={source.y + 20} textAnchor="middle" fontSize="10" fontWeight="600" fill={colors.textSecondary}>{source.label}</text>
                    </motion.g>
                ))}

                {/* --- EXTRACT STAGE --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 1, transition: { delay: 0.5 } },
                        extract: { opacity: 1 },
                        transform: { opacity: 1 },
                        load: { opacity: 1 },
                        validate: { opacity: 1 },
                        anomaly: { opacity: 1 },
                        log: { opacity: 1 },
                        resolve: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="200" y="160" width="100" height="140" rx="12" fill="url(#extract-gradient)" filter="url(#etl-shadow)" />
                    <text x="250" y="210" textAnchor="middle" fontSize="24">📤</text>
                    <text x="250" y="250" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">EXTRACT</text>
                    <motion.rect x="210" y="270" width="80" height="8" rx="4" fill="rgba(255,255,255,0.3)"
                        variants={{
                            extract: { width: [0, 80], transition: { duration: 0.8 } }
                        }}
                        animate={controls}
                    />
                </motion.g>

                {/* --- TRANSFORM STAGE --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 1, transition: { delay: 0.7 } },
                        extract: { opacity: 1 },
                        transform: { opacity: 1 },
                        load: { opacity: 1 },
                        validate: { opacity: 1 },
                        anomaly: { opacity: 1 },
                        log: { opacity: 1 },
                        resolve: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="350" y="160" width="100" height="140" rx="12" fill="url(#transform-gradient)" filter="url(#etl-shadow)" />
                    <text x="400" y="210" textAnchor="middle" fontSize="24">🔄</text>
                    <text x="400" y="250" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">TRANSFORM</text>
                    <motion.rect x="360" y="270" width="80" height="8" rx="4" fill="rgba(255,255,255,0.3)"
                        variants={{
                            transform: { width: [0, 80], transition: { duration: 0.8 } }
                        }}
                        animate={controls}
                    />
                </motion.g>

                {/* --- LOAD STAGE --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 1, transition: { delay: 0.9 } },
                        extract: { opacity: 1 },
                        transform: { opacity: 1 },
                        load: { opacity: 1 },
                        validate: { opacity: 1 },
                        anomaly: { opacity: 1 },
                        log: { opacity: 1 },
                        resolve: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="500" y="160" width="100" height="140" rx="12" fill="url(#load-gradient)" filter="url(#etl-shadow)" />
                    <text x="550" y="210" textAnchor="middle" fontSize="24">📥</text>
                    <text x="550" y="250" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">LOAD</text>
                    <motion.rect x="510" y="270" width="80" height="8" rx="4" fill="rgba(255,255,255,0.3)"
                        variants={{
                            load: { width: [0, 80], transition: { duration: 0.8 } }
                        }}
                        animate={controls}
                    />
                </motion.g>

                {/* --- DATA WAREHOUSE --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, x: 30 },
                        init: { opacity: 1, x: 0, transition: { delay: 1.1, type: "spring" } },
                        extract: { opacity: 1 },
                        transform: { opacity: 1 },
                        load: { opacity: 1 },
                        validate: { opacity: 1 },
                        anomaly: { opacity: 1 },
                        log: { opacity: 1 },
                        resolve: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="660" y="140" width="110" height="180" rx="15" fill="white" stroke={colors.warehouse} strokeWidth="4" filter="url(#etl-shadow)" />
                    <text x="715" y="210" textAnchor="middle" fontSize="32">🏛️</text>
                    <text x="715" y="255" textAnchor="middle" fontSize="11" fontWeight="700" fill={colors.textPrimary}>DATA</text>
                    <text x="715" y="275" textAnchor="middle" fontSize="11" fontWeight="700" fill={colors.textPrimary}>WAREHOUSE</text>

                    {/* Mini data rows */}
                    {[0, 1, 2].map((i) => (
                        <motion.rect
                            key={`row-${i}`}
                            x="675" y={295 + i * 12}
                            width="80" height="8" rx="2"
                            fill={colors.success}
                            variants={{
                                validate: { opacity: 1, transition: { delay: 0.5 + i * 0.1 } },
                                anomaly: i === 1 ? { fill: colors.error } : { fill: colors.success },
                                log: i === 1 ? { fill: colors.warning } : { fill: colors.success },
                                resolve: { fill: colors.success }
                            }}
                            initial={{ opacity: 0 }}
                            animate={controls}
                        />
                    ))}
                </motion.g>

                {/* --- FLOW ARROWS (Extract to Transform to Load to Warehouse) --- */}
                {/* Source to Extract */}
                {sources.map((source, i) => (
                    <motion.path
                        key={`flow-src-${i}`}
                        d={`M ${source.x + 35} ${source.y} L 200 230`}
                        fill="none"
                        stroke={colors.dataFlow}
                        strokeWidth="2"
                        strokeDasharray="6 4"
                        initial="reset"
                        variants={{
                            reset: { opacity: 0 },
                            extract: { opacity: 1, transition: { delay: i * 0.1 } },
                            transform: { opacity: 0.5 },
                            load: { opacity: 0.5 },
                            validate: { opacity: 0.3 },
                            anomaly: { opacity: 0.3 },
                            log: { opacity: 0.3 },
                            resolve: { opacity: 0.5 }
                        }}
                        animate={controls}
                    />
                ))}

                {/* Extract to Transform */}
                <motion.path
                    d="M 300 230 L 350 230"
                    fill="none"
                    stroke={colors.dataFlow}
                    strokeWidth="3"
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        extract: { opacity: 0.3 },
                        transform: { opacity: 1, transition: { duration: 0.5 } },
                        load: { opacity: 0.5 },
                        validate: { opacity: 0.5 },
                        anomaly: { opacity: 0.5 },
                        log: { opacity: 0.5 },
                        resolve: { opacity: 0.5 }
                    }}
                    animate={controls}
                />

                {/* Transform to Load */}
                <motion.path
                    d="M 450 230 L 500 230"
                    fill="none"
                    stroke={colors.dataFlow}
                    strokeWidth="3"
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        extract: { opacity: 0.3 },
                        transform: { opacity: 0.3 },
                        load: { opacity: 1, transition: { duration: 0.5 } },
                        validate: { opacity: 0.5 },
                        anomaly: { opacity: 0.5 },
                        log: { opacity: 0.5 },
                        resolve: { opacity: 0.5 }
                    }}
                    animate={controls}
                />

                {/* Load to Warehouse */}
                <motion.path
                    d="M 600 230 L 660 230"
                    fill="none"
                    stroke={colors.dataFlow}
                    strokeWidth="3"
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        extract: { opacity: 0.3 },
                        transform: { opacity: 0.3 },
                        load: { opacity: 1, transition: { duration: 0.5, delay: 0.3 } },
                        validate: { opacity: 0.5 },
                        anomaly: { opacity: 0.5 },
                        log: { opacity: 0.5 },
                        resolve: { opacity: 0.5 }
                    }}
                    animate={controls}
                />

                {/* --- DATA PACKETS --- */}
                <motion.circle
                    r="8"
                    fill={colors.extract}
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        extract: { opacity: 1, cx: [150, 250], cy: [230, 230], transition: { duration: 0.8 } },
                        transform: { cx: [250, 400], cy: 230, transition: { duration: 0.8 } },
                        load: { cx: [400, 550, 680], cy: 230, transition: { duration: 1 } },
                        validate: { opacity: 0 },
                        anomaly: { opacity: 0 },
                        log: { opacity: 0 },
                        resolve: { opacity: 0 }
                    }}
                    animate={controls}
                />

                {/* --- QA ENGINEER --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: 30 },
                        init: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
                        extract: { opacity: 1 },
                        transform: { opacity: 1 },
                        load: { opacity: 1 },
                        validate: { opacity: 1 },
                        anomaly: { opacity: 1 },
                        log: { opacity: 1 },
                        resolve: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="50" y="440" width="700" height="12" rx="4" fill="#dbeafe" />
                    <ellipse cx="400" cy="430" rx="30" ry="10" fill="#1e40af" />
                    <circle cx="400" cy="410" r="18" fill="#3b82f6" />
                </motion.g>

                {/* --- VALIDATION PANEL --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: 20 },
                        init: { opacity: 0 },
                        extract: { opacity: 0 },
                        transform: { opacity: 0 },
                        load: { opacity: 0 },
                        validate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                        anomaly: { opacity: 1 },
                        log: { opacity: 1 },
                        resolve: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="200" y="380" width="160" height="60" rx="10" fill="white" filter="url(#etl-shadow)" />
                    <text x="280" y="405" textAnchor="middle" fontSize="11" fontWeight="700" fill={colors.textPrimary}>Data Reconciliation</text>
                    <text x="280" y="425" textAnchor="middle" fontSize="10" fill={colors.success}>✓ 2.4M Records Validated</text>
                </motion.g>

                {/* --- ANOMALY ALERT --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, scale: 0 },
                        init: { opacity: 0 },
                        extract: { opacity: 0 },
                        transform: { opacity: 0 },
                        load: { opacity: 0 },
                        validate: { opacity: 0 },
                        anomaly: { opacity: 1, scale: 1, transition: { type: "spring" } },
                        log: { opacity: 1 },
                        resolve: { opacity: 0, scale: 0 }
                    }}
                    animate={controls}
                >
                    <rect x="400" y="380" width="160" height="40" rx="8" fill={colors.error} />
                    <text x="480" y="405" textAnchor="middle" fontSize="11" fontWeight="600" fill="white">⚠ Data Mismatch Found</text>
                </motion.g>

                {/* --- SUCCESS BADGE --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 0 },
                        extract: { opacity: 0 },
                        transform: { opacity: 0 },
                        load: { opacity: 0 },
                        validate: { opacity: 0 },
                        anomaly: { opacity: 0 },
                        log: { opacity: 0 },
                        resolve: { opacity: 1, transition: { delay: 0.5 } }
                    }}
                    animate={controls}
                >
                    <rect x="280" y="40" width="240" height="45" rx="10" fill={colors.success} filter="url(#etl-shadow)" />
                    <text x="400" y="68" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">✓ Pipeline Validated</text>
                </motion.g>

            </svg>
        </div>
    );
};

export default ETLTestingAnimation;
