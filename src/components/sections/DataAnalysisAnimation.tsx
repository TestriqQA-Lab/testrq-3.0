"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const DataAnalysisAnimation = () => {
    const controls = useAnimation();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Corporate Color Palette (Purple/Blue theme for Data Analysis)
    const colors = {
        bg: "#faf5ff",
        primary: "#7c3aed",
        secondary: "#8b5cf6",
        accent: "#a78bfa",
        success: "#10b981",
        error: "#ef4444",
        warning: "#f59e0b",
        textPrimary: "#3b0764",
        textSecondary: "#64748b",
        dataFlow: "#c4b5fd",
        chart1: "#6366f1",
        chart2: "#8b5cf6",
        chart3: "#a855f7",
        chart4: "#d946ef",
    };

    // Data source positions
    const dataSources = [
        { id: "db", x: 80, y: 120, label: "Database", emoji: "🗄️" },
        { id: "api", x: 80, y: 230, label: "API", emoji: "🔌" },
        { id: "files", x: 80, y: 340, label: "Files", emoji: "📁" },
    ];

    // Analysis stages
    const stages = [
        { id: "collect", x: 220, y: 230, label: "Collect", color: colors.chart1 },
        { id: "clean", x: 370, y: 230, label: "Clean", color: colors.chart2 },
        { id: "analyze", x: 520, y: 230, label: "Analyze", color: colors.chart3 },
        { id: "insights", x: 670, y: 230, label: "Insights", color: colors.chart4 },
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
                await controls.start("collect");
                await controls.start("clean");
                await controls.start("analyze");
                await controls.start("insights");
                await controls.start("validate");
                await controls.start("anomaly");
                await controls.start("resolve");
                await new Promise(resolve => setTimeout(resolve, 3000));
            }
        };
        sequence();

        return () => { isMounted = false; };
    }, [controls, mounted]);

    if (!mounted) return <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-purple-50 to-violet-100 shadow-xl border border-purple-200" />;

    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-purple-50 to-violet-100 overflow-hidden relative shadow-xl border border-purple-200">
            <svg viewBox="0 0 800 500" className="w-full h-full relative z-10">
                <defs>
                    <filter id="data-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <linearGradient id="stage-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor={colors.chart1} />
                        <stop offset="100%" stopColor={colors.chart4} />
                    </linearGradient>
                    <filter id="data-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* --- DATA SOURCES --- */}
                {dataSources.map((source, i) => (
                    <motion.g
                        key={source.id}
                        initial="reset"
                        variants={{
                            reset: { opacity: 0, x: -30 },
                            init: { opacity: 1, x: 0, transition: { delay: i * 0.15, type: "spring" } },
                            collect: { opacity: 1 },
                            clean: { opacity: 1 },
                            analyze: { opacity: 1 },
                            insights: { opacity: 1 },
                            validate: { opacity: 1 },
                            anomaly: { opacity: 1 },
                            resolve: { opacity: 1 }
                        }}
                        animate={controls}
                    >
                        <rect
                            x={source.x - 35}
                            y={source.y - 30}
                            width="70"
                            height="60"
                            rx="10"
                            fill="white"
                            stroke={colors.primary}
                            strokeWidth="3"
                            filter="url(#data-shadow)"
                        />
                        <text x={source.x} y={source.y - 5} textAnchor="middle" fontSize="18">{source.emoji}</text>
                        <text x={source.x} y={source.y + 20} textAnchor="middle" fontSize="10" fontWeight="600" fill={colors.textSecondary}>{source.label}</text>
                    </motion.g>
                ))}

                {/* --- FLOW ARROWS from sources to Collect --- */}
                {dataSources.map((source, i) => (
                    <motion.path
                        key={`flow-${i}`}
                        d={`M ${source.x + 35} ${source.y} L 180 230`}
                        fill="none"
                        stroke={colors.dataFlow}
                        strokeWidth="2"
                        strokeDasharray="6 4"
                        initial="reset"
                        variants={{
                            reset: { opacity: 0 },
                            init: { opacity: 0.3 },
                            collect: { opacity: 1, transition: { delay: i * 0.1 } },
                            clean: { opacity: 0.5 },
                            analyze: { opacity: 0.5 },
                            insights: { opacity: 0.5 },
                            validate: { opacity: 0.3 },
                            anomaly: { opacity: 0.3 },
                            resolve: { opacity: 0.5 }
                        }}
                        animate={controls}
                    />
                ))}

                {/* --- PROCESSING STAGES --- */}
                {stages.map((stage, i) => (
                    <motion.g
                        key={stage.id}
                        initial="reset"
                        variants={{
                            reset: { opacity: 0, y: 20 },
                            init: { opacity: 1, y: 0, transition: { delay: 0.5 + i * 0.1, type: "spring" } },
                            collect: { opacity: 1 },
                            clean: { opacity: 1 },
                            analyze: { opacity: 1 },
                            insights: { opacity: 1 },
                            validate: { opacity: 1 },
                            anomaly: { opacity: 1 },
                            resolve: { opacity: 1 }
                        }}
                        animate={controls}
                    >
                        {/* Stage Box */}
                        <motion.rect
                            x={stage.x - 45}
                            y={stage.y - 50}
                            width="90"
                            height="100"
                            rx="12"
                            fill={stage.color}
                            filter="url(#data-shadow)"
                            variants={{
                                [stage.id]: { scale: 1.05, transition: { duration: 0.3 } },
                                validate: i === 3 ? { stroke: colors.success, strokeWidth: 4 } : {},
                                anomaly: i === 2 ? { fill: colors.error } : {},
                                resolve: { fill: stage.color }
                            }}
                            animate={controls}
                        />

                        {/* Stage Icon */}
                        <text
                            x={stage.x}
                            y={stage.y - 15}
                            textAnchor="middle"
                            fontSize="24"
                        >
                            {i === 0 ? "📥" : i === 1 ? "🧹" : i === 2 ? "🧠" : "📊"}
                        </text>

                        {/* Stage Label */}
                        <text x={stage.x} y={stage.y + 15} textAnchor="middle" fontSize="12" fontWeight="700" fill="white">
                            {stage.label.toUpperCase()}
                        </text>

                        {/* Progress Bar */}
                        <rect x={stage.x - 35} y={stage.y + 30} width="70" height="8" rx="4" fill="rgba(255,255,255,0.3)" />
                        <motion.rect
                            x={stage.x - 35}
                            y={stage.y + 30}
                            height="8"
                            rx="4"
                            fill="rgba(255,255,255,0.9)"
                            variants={{
                                reset: { width: 0 },
                                [stage.id]: { width: 70, transition: { duration: 0.8 } }
                            }}
                            animate={controls}
                        />
                    </motion.g>
                ))}

                {/* --- STAGE CONNECTIONS --- */}
                {[0, 1, 2].map(i => (
                    <motion.path
                        key={`conn-${i}`}
                        d={`M ${stages[i].x + 45} 230 L ${stages[i + 1].x - 45} 230`}
                        fill="none"
                        stroke={colors.dataFlow}
                        strokeWidth="3"
                        initial="reset"
                        variants={{
                            reset: { opacity: 0 },
                            [stages[i + 1].id]: { opacity: 1, transition: { duration: 0.5 } },
                            validate: { opacity: 0.5 },
                            anomaly: { opacity: 0.5 },
                            resolve: { opacity: 0.5 }
                        }}
                        animate={controls}
                    />
                ))}

                {/* --- DATA PACKET --- */}
                <motion.circle
                    r="8"
                    fill={colors.primary}
                    filter="url(#data-glow)"
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        collect: { opacity: 1, cx: [120, 220], cy: 230, transition: { duration: 0.8 } },
                        clean: { cx: [220, 370], cy: 230, transition: { duration: 0.8 } },
                        analyze: { cx: [370, 520], cy: 230, transition: { duration: 0.8 } },
                        insights: { cx: [520, 670], cy: 230, transition: { duration: 0.8 } },
                        validate: { opacity: 0 },
                        anomaly: { opacity: 0 },
                        resolve: { opacity: 0 }
                    }}
                    animate={controls}
                />

                {/* --- INSIGHTS CHART --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: 20 },
                        init: { opacity: 0 },
                        collect: { opacity: 0 },
                        clean: { opacity: 0 },
                        analyze: { opacity: 0 },
                        insights: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                        validate: { opacity: 1 },
                        anomaly: { opacity: 1 },
                        resolve: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="580" y="340" width="180" height="110" rx="10" fill="white" filter="url(#data-shadow)" />
                    <text x="670" y="365" textAnchor="middle" fontSize="11" fontWeight="700" fill={colors.textPrimary}>Analysis Results</text>

                    {/* Mini Bar Chart */}
                    {[
                        { x: 600, h: 50, color: colors.chart1 },
                        { x: 630, h: 70, color: colors.chart2 },
                        { x: 660, h: 55, color: colors.chart3 },
                        { x: 690, h: 80, color: colors.chart4 },
                        { x: 720, h: 65, color: colors.primary },
                    ].map((bar, i) => (
                        <motion.rect
                            key={`bar-${i}`}
                            x={bar.x}
                            y={430 - bar.h}
                            width="20"
                            height={bar.h}
                            rx="3"
                            fill={bar.color}
                            variants={{
                                insights: { height: [0, bar.h], y: [430, 430 - bar.h], transition: { duration: 0.5, delay: i * 0.1 } }
                            }}
                            animate={controls}
                        />
                    ))}
                </motion.g>

                {/* --- QA ENGINEER --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: 30 },
                        init: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
                        collect: { opacity: 1 },
                        clean: { opacity: 1 },
                        analyze: { opacity: 1 },
                        insights: { opacity: 1 },
                        validate: { opacity: 1 },
                        anomaly: { opacity: 1 },
                        resolve: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    {/* Desk */}
                    <rect x="50" y="460" width="500" height="12" rx="4" fill="#e9d5ff" />
                    {/* Person */}
                    <ellipse cx="300" cy="450" rx="30" ry="10" fill="#7c3aed" />
                    <circle cx="300" cy="430" r="18" fill="#8b5cf6" />
                </motion.g>

                {/* --- METRICS PANEL --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, x: -30 },
                        init: { opacity: 0 },
                        collect: { opacity: 0 },
                        clean: { opacity: 0 },
                        analyze: { opacity: 0 },
                        insights: { opacity: 0 },
                        validate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                        anomaly: { opacity: 1 },
                        resolve: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="50" y="340" width="150" height="100" rx="10" fill="white" filter="url(#data-shadow)" />
                    <text x="125" y="365" textAnchor="middle" fontSize="11" fontWeight="700" fill={colors.textPrimary}>Metrics</text>

                    <text x="70" y="390" fontSize="10" fill={colors.textSecondary}>Accuracy</text>
                    <rect x="70" y="395" width="110" height="8" rx="4" fill="#e2e8f0" />
                    <motion.rect
                        x="70"
                        y="395"
                        height="8"
                        rx="4"
                        fill={colors.success}
                        variants={{
                            validate: { width: [0, 105], transition: { duration: 0.5 } }
                        }}
                        animate={controls}
                    />
                    <text x="70" y="420" fontSize="9" fill={colors.success}>98.5%</text>

                    <text x="70" y="433" fontSize="10" fill={colors.textSecondary}>Completeness</text>
                </motion.g>

                {/* --- ANOMALY ALERT --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, scale: 0 },
                        init: { opacity: 0 },
                        collect: { opacity: 0 },
                        clean: { opacity: 0 },
                        analyze: { opacity: 0 },
                        insights: { opacity: 0 },
                        validate: { opacity: 0 },
                        anomaly: { opacity: 1, scale: 1, transition: { type: "spring" } },
                        resolve: { opacity: 0, scale: 0 }
                    }}
                    animate={controls}
                >
                    <rect x="460" y="140" width="140" height="40" rx="8" fill={colors.error} />
                    <text x="530" y="165" textAnchor="middle" fontSize="11" fontWeight="600" fill="white">⚠ Outlier Detected</text>
                </motion.g>

                {/* --- SUCCESS BADGE --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 0 },
                        collect: { opacity: 0 },
                        clean: { opacity: 0 },
                        analyze: { opacity: 0 },
                        insights: { opacity: 0 },
                        validate: { opacity: 0 },
                        anomaly: { opacity: 0 },
                        resolve: { opacity: 1, transition: { delay: 0.5 } }
                    }}
                    animate={controls}
                >
                    <rect x="280" y="40" width="240" height="45" rx="10" fill={colors.success} filter="url(#data-shadow)" />
                    <text x="400" y="68" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">✓ Analysis Complete</text>
                </motion.g>

            </svg>
        </div>
    );
};

export default DataAnalysisAnimation;
