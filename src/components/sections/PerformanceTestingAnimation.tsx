"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const PerformanceTestingAnimation = () => {
    const controls = useAnimation();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Corporate Color Palette
    const colors = {
        bg: "#fff7ed",
        primary: "#f97316",
        secondary: "#ef4444",
        accent: "#eab308",
        success: "#22c55e",
        error: "#ef4444",
        warning: "#f59e0b",
        textPrimary: "#1e293b",
        textSecondary: "#64748b",
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
                await controls.start("load");
                await controls.start("monitor");
                await controls.start("stable");
                await controls.start("bottleneck");
                await controls.start("log");
                await controls.start("optimize");
                await controls.start("complete");
                await new Promise(resolve => setTimeout(resolve, 3000));
            }
        };
        sequence();

        return () => { isMounted = false; };
    }, [controls, mounted]);

    if (!mounted) return <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 shadow-xl border border-orange-200" />;

    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 overflow-hidden relative shadow-xl border border-orange-200">
            <svg viewBox="0 0 800 500" className="w-full h-full relative z-10">
                <defs>
                    <filter id="perf-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <linearGradient id="orange-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#f97316" />
                        <stop offset="100%" stopColor="#ef4444" />
                    </linearGradient>
                </defs>

                {/* --- APPLICATION SERVER --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: -20 },
                        init: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                        load: { opacity: 1 },
                        monitor: { opacity: 1 },
                        stable: { opacity: 1 },
                        bottleneck: { opacity: 1 },
                        log: { opacity: 1 },
                        optimize: { opacity: 1 },
                        complete: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="300" y="40" width="200" height="100" rx="10" fill="white" filter="url(#perf-shadow)" />
                    <rect x="300" y="40" width="200" height="30" rx="10" fill="url(#orange-gradient)" />
                    <rect x="300" y="55" width="200" height="15" fill="url(#orange-gradient)" />
                    <text x="400" y="60" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">🖥️ Application Server</text>

                    {/* Server metrics */}
                    <motion.rect x="315" y="85" width="80" height="40" rx="5" fill="#fff7ed" stroke={colors.primary} strokeWidth="1"
                        variants={{
                            bottleneck: { fill: "#fef2f2", stroke: colors.error },
                            optimize: { fill: "#f0fdf4", stroke: colors.success },
                            complete: { fill: "#f0fdf4", stroke: colors.success }
                        }}
                        animate={controls}
                    />
                    <text x="355" y="100" textAnchor="middle" fontSize="8" fill={colors.textSecondary}>CPU</text>
                    <motion.text x="355" y="115" textAnchor="middle" fontSize="12" fontWeight="700"
                        variants={{
                            stable: { fill: colors.success },
                            bottleneck: { fill: colors.error },
                            optimize: { fill: colors.warning },
                            complete: { fill: colors.success }
                        }}
                        initial={{ fill: colors.primary }}
                        animate={controls}
                    >68%</motion.text>

                    <motion.rect x="405" y="85" width="80" height="40" rx="5" fill="#fff7ed" stroke={colors.primary} strokeWidth="1"
                        variants={{
                            bottleneck: { fill: "#fef2f2", stroke: colors.error },
                            optimize: { fill: "#f0fdf4", stroke: colors.success },
                            complete: { fill: "#f0fdf4", stroke: colors.success }
                        }}
                        animate={controls}
                    />
                    <text x="445" y="100" textAnchor="middle" fontSize="8" fill={colors.textSecondary}>Memory</text>
                    <motion.text x="445" y="115" textAnchor="middle" fontSize="12" fontWeight="700"
                        variants={{
                            stable: { fill: colors.success },
                            bottleneck: { fill: colors.error },
                            optimize: { fill: colors.warning },
                            complete: { fill: colors.success }
                        }}
                        initial={{ fill: colors.primary }}
                        animate={controls}
                    >72%</motion.text>
                </motion.g>

                {/* --- VIRTUAL USERS --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 0 },
                        load: { opacity: 1, transition: { staggerChildren: 0.1 } },
                        monitor: { opacity: 1 },
                        stable: { opacity: 1 },
                        bottleneck: { opacity: 1 },
                        log: { opacity: 1 },
                        optimize: { opacity: 1 },
                        complete: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    {[0, 1, 2, 3, 4].map((i) => (
                        <motion.g key={i}
                            variants={{
                                load: {
                                    opacity: 1,
                                    y: [20, 0],
                                    transition: { delay: i * 0.1 }
                                }
                            }}
                            initial={{ opacity: 0 }}
                            animate={controls}
                        >
                            <circle cx={100 + i * 40} cy="100" r="18" fill={colors.primary} filter="url(#perf-shadow)" />
                            <text x={100 + i * 40} y="105" textAnchor="middle" fontSize="10" fill="white">👤</text>
                        </motion.g>
                    ))}
                    <text x="180" y="140" textAnchor="middle" fontSize="10" fill={colors.textSecondary}>1,000 Virtual Users</text>

                    {/* Request arrows */}
                    {[0, 1, 2].map((i) => (
                        <motion.line key={`arrow-${i}`}
                            x1={130 + i * 40} y1="120"
                            x2="300" y2="90"
                            stroke={colors.primary}
                            strokeWidth="2"
                            strokeDasharray="4 2"
                            variants={{
                                load: { opacity: [0, 1], transition: { delay: 0.5 + i * 0.1 } }
                            }}
                            initial={{ opacity: 0 }}
                            animate={controls}
                        />
                    ))}
                </motion.g>

                {/* --- PERFORMANCE GRAPH --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: 30 },
                        init: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
                        load: { opacity: 1 },
                        monitor: { opacity: 1 },
                        stable: { opacity: 1 },
                        bottleneck: { opacity: 1 },
                        log: { opacity: 1 },
                        optimize: { opacity: 1 },
                        complete: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="50" y="180" width="700" height="180" rx="12" fill="white" filter="url(#perf-shadow)" />
                    <text x="70" y="208" fontSize="12" fontWeight="700" fill={colors.textPrimary}>📊 Response Time Graph</text>

                    {/* Graph grid */}
                    {[0, 1, 2, 3].map((i) => (
                        <line key={i} x1="70" y1={230 + i * 30} x2="720" y2={230 + i * 30} stroke="#e2e8f0" strokeWidth="1" />
                    ))}

                    {/* Y-axis labels */}
                    <text x="60" y="235" textAnchor="end" fontSize="8" fill={colors.textSecondary}>3s</text>
                    <text x="60" y="265" textAnchor="end" fontSize="8" fill={colors.textSecondary}>2s</text>
                    <text x="60" y="295" textAnchor="end" fontSize="8" fill={colors.textSecondary}>1s</text>
                    <text x="60" y="325" textAnchor="end" fontSize="8" fill={colors.textSecondary}>0s</text>

                    {/* Response time line - animated */}
                    <motion.path
                        d="M 70 320 L 150 310 L 230 305 L 310 300 L 390 310 L 470 340 L 550 310 L 630 295 L 720 290"
                        fill="none"
                        stroke={colors.primary}
                        strokeWidth="3"
                        strokeLinecap="round"
                        variants={{
                            monitor: { pathLength: [0, 1], transition: { duration: 1.5 } },
                            stable: { stroke: colors.success },
                            bottleneck: { stroke: colors.error, d: "M 70 320 L 150 310 L 230 305 L 310 300 L 390 250 L 470 220 L 550 230 L 630 240 L 720 235" },
                            optimize: { stroke: colors.warning },
                            complete: { stroke: colors.success, d: "M 70 315 L 150 310 L 230 308 L 310 305 L 390 302 L 470 300 L 550 298 L 630 295 L 720 290" }
                        }}
                        initial={{ pathLength: 0 }}
                        animate={controls}
                    />

                    {/* Throughput line */}
                    <motion.path
                        d="M 70 340 L 150 335 L 230 330 L 310 325 L 390 320 L 470 315 L 550 320 L 630 315 L 720 310"
                        fill="none"
                        stroke={colors.secondary}
                        strokeWidth="2"
                        strokeDasharray="5 3"
                        variants={{
                            monitor: { pathLength: [0, 1], transition: { duration: 1.5, delay: 0.3 } }
                        }}
                        initial={{ pathLength: 0 }}
                        animate={controls}
                    />

                    {/* Legend */}
                    <rect x="550" y="195" width="10" height="10" rx="2" fill={colors.primary} />
                    <text x="565" y="203" fontSize="9" fill={colors.textSecondary}>Response Time</text>
                    <rect x="650" y="195" width="10" height="10" rx="2" fill={colors.secondary} />
                    <text x="665" y="203" fontSize="9" fill={colors.textSecondary}>Throughput</text>
                </motion.g>

                {/* --- METRICS PANEL --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, x: 30 },
                        init: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3 } },
                        load: { opacity: 1 },
                        monitor: { opacity: 1 },
                        stable: { opacity: 1 },
                        bottleneck: { opacity: 1 },
                        log: { opacity: 1 },
                        optimize: { opacity: 1 },
                        complete: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="550" y="40" width="210" height="120" rx="10" fill="white" filter="url(#perf-shadow)" />
                    <text x="570" y="65" fontSize="11" fontWeight="700" fill={colors.textPrimary}>📈 Live Metrics</text>

                    {[
                        { label: "Requests/sec", value: "2,500", y: 85 },
                        { label: "Avg Response", value: "1.2s", y: 105 },
                        { label: "Error Rate", value: "0.02%", y: 125 },
                    ].map((metric, i) => (
                        <motion.g key={metric.label}
                            variants={{
                                monitor: { opacity: [0.5, 1], transition: { delay: i * 0.2 } },
                                stable: { opacity: 1 },
                                bottleneck: i === 2 ? { opacity: 1 } : { opacity: 1 },
                                complete: { opacity: 1 }
                            }}
                            animate={controls}
                        >
                            <text x="570" y={metric.y} fontSize="9" fill={colors.textSecondary}>{metric.label}</text>
                            <motion.text x="720" y={metric.y} textAnchor="end" fontSize="11" fontWeight="600"
                                variants={{
                                    stable: { fill: colors.success },
                                    bottleneck: i === 2 ? { fill: colors.error } : { fill: colors.success },
                                    optimize: { fill: colors.warning },
                                    complete: { fill: colors.success }
                                }}
                                initial={{ fill: colors.primary }}
                                animate={controls}
                            >{i === 2 && controls ? "4.5%" : metric.value}</motion.text>
                        </motion.g>
                    ))}
                </motion.g>

                {/* --- QA ENGINEER --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: 20 },
                        init: { opacity: 1, y: 0, transition: { delay: 0.5 } },
                        load: { opacity: 1 },
                        monitor: { opacity: 1 },
                        stable: { opacity: 1 },
                        bottleneck: { opacity: 1 },
                        log: { opacity: 1 },
                        optimize: { opacity: 1 },
                        complete: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="50" y="390" width="180" height="12" rx="4" fill="#fed7aa" />
                    <ellipse cx="140" cy="383" rx="25" ry="8" fill="#c2410c" />
                    <circle cx="140" cy="367" r="15" fill="#f97316" />
                </motion.g>

                {/* --- BOTTLENECK ALERT --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, scale: 0 },
                        init: { opacity: 0 },
                        load: { opacity: 0 },
                        monitor: { opacity: 0 },
                        stable: { opacity: 0 },
                        bottleneck: { opacity: 1, scale: 1, transition: { type: "spring" } },
                        log: { opacity: 1 },
                        optimize: { opacity: 0.5 },
                        complete: { opacity: 0, scale: 0 }
                    }}
                    animate={controls}
                >
                    <rect x="520" y="380" width="230" height="50" rx="8" fill={colors.error} />
                    <text x="635" y="400" textAnchor="middle" fontSize="10" fontWeight="600" fill="white">⚠ Performance Bottleneck</text>
                    <text x="635" y="418" textAnchor="middle" fontSize="9" fill="white" opacity="0.9">Response time exceeded 3s threshold</text>
                </motion.g>

                {/* --- SUCCESS BADGE --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 0 },
                        load: { opacity: 0 },
                        monitor: { opacity: 0 },
                        stable: { opacity: 0 },
                        bottleneck: { opacity: 0 },
                        log: { opacity: 0 },
                        optimize: { opacity: 0 },
                        complete: { opacity: 1, transition: { delay: 0.5 } }
                    }}
                    animate={controls}
                >
                    <rect x="520" y="380" width="230" height="50" rx="10" fill={colors.success} filter="url(#perf-shadow)" />
                    <text x="635" y="410" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">✓ Performance Optimized</text>
                </motion.g>

            </svg>
        </div>
    );
};

export default PerformanceTestingAnimation;
