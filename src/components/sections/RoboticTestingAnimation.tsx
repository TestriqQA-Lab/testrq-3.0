"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const RoboticTestingAnimation = () => {
    const controls = useAnimation();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Corporate Color Palette
    const colors = {
        bg: "#f0f9ff",
        armBase: "#475569",
        armJoint: "#1e40af",
        armSegment: "#64748b",
        accent: "#3b82f6",
        accentLight: "#93c5fd",
        success: "#10b981",
        error: "#ef4444",
        warning: "#f59e0b",
        textPrimary: "#1e293b",
        textSecondary: "#64748b",
        sensor: "#06b6d4",
        path: "#818cf8",
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
                await controls.start("execute");
                await controls.start("move");
                await controls.start("sensor");
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

    if (!mounted) return <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 shadow-xl border border-blue-200" />;

    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden relative shadow-xl border border-blue-200">
            <svg viewBox="0 0 800 500" className="w-full h-full relative z-10">
                <defs>
                    <filter id="robot-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <linearGradient id="arm-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#475569" />
                        <stop offset="100%" stopColor="#334155" />
                    </linearGradient>
                    <linearGradient id="joint-gradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                </defs>

                {/* --- CONTROL CONSOLE --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, x: -30 },
                        init: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                        execute: { opacity: 1 },
                        move: { opacity: 1 },
                        sensor: { opacity: 1 },
                        validate: { opacity: 1 },
                        anomaly: { opacity: 1 },
                        log: { opacity: 1 },
                        resolve: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="50" y="100" width="180" height="280" rx="10" fill="white" filter="url(#robot-shadow)" />
                    <rect x="50" y="100" width="180" height="40" rx="10" fill="url(#joint-gradient)" />
                    <text x="140" y="125" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">Control Panel</text>

                    {/* Code Lines */}
                    {[0, 1, 2, 3, 4].map((i) => (
                        <motion.g key={`code-${i}`}
                            variants={{
                                reset: { opacity: 0 },
                                init: { opacity: 0.3 },
                                execute: { opacity: [0.3, 1, 0.3], transition: { duration: 0.3, delay: i * 0.1 } },
                                move: { opacity: 0.3 },
                                sensor: { opacity: 0.3 },
                                validate: { opacity: 0.3 },
                                anomaly: { opacity: 0.3 },
                                log: { opacity: 0.3 },
                                resolve: { opacity: 0.3 }
                            }}
                            animate={controls}
                        >
                            <rect x="65" y={160 + i * 25} width={80 + (i % 3) * 20} height="10" rx="5" fill={colors.accent} opacity="0.5" />
                        </motion.g>
                    ))}

                    {/* Status Indicators */}
                    <motion.circle cx="200" cy="360" r="10" fill={colors.textSecondary}
                        variants={{
                            validate: { fill: colors.success },
                            anomaly: { fill: colors.error },
                            log: { fill: colors.warning },
                            resolve: { fill: colors.success }
                        }}
                        animate={controls}
                    />
                    <text x="190" y="380" fontSize="9" fill={colors.textSecondary}>Status</text>
                </motion.g>

                {/* --- ROBOTIC ARM PATH --- */}
                <motion.path
                    d="M 400 400 Q 500 200 600 300"
                    fill="none"
                    stroke={colors.path}
                    strokeWidth="2"
                    strokeDasharray="8 8"
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, pathLength: 0 },
                        init: { opacity: 0.3 },
                        execute: { opacity: 0.5 },
                        move: { opacity: 1, pathLength: 1, transition: { duration: 1.5 } },
                        sensor: { opacity: 0.5 },
                        validate: { opacity: 0.3 },
                        anomaly: { opacity: 0.3 },
                        log: { opacity: 0.3 },
                        resolve: { opacity: 0.5 }
                    }}
                    animate={controls}
                />

                {/* --- ROBOTIC ARM --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 1, transition: { duration: 0.8 } },
                        execute: { opacity: 1 },
                        move: { opacity: 1 },
                        sensor: { opacity: 1 },
                        validate: { opacity: 1 },
                        anomaly: { opacity: 1 },
                        log: { opacity: 1 },
                        resolve: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    {/* Base */}
                    <rect x="350" y="420" width="100" height="30" rx="5" fill="url(#arm-gradient)" filter="url(#robot-shadow)" />
                    <ellipse cx="400" cy="420" rx="40" ry="10" fill={colors.armJoint} />

                    {/* Arm Segment 1 */}
                    <motion.g
                        style={{ originX: "400px", originY: "420px" }}
                        variants={{
                            reset: { rotate: 0 },
                            move: { rotate: [-30, -60, -45], transition: { duration: 1.5 } },
                            anomaly: { rotate: -45 },
                            resolve: { rotate: -45 }
                        }}
                        animate={controls}
                    >
                        <rect x="385" y="320" width="30" height="100" rx="8" fill="url(#arm-gradient)" filter="url(#robot-shadow)" />

                        {/* Joint 1 */}
                        <motion.circle cx="400" cy="320" r="18" fill="url(#joint-gradient)" filter="url(#robot-shadow)"
                            variants={{
                                validate: { fill: colors.success },
                                anomaly: { fill: colors.error },
                                log: { fill: colors.warning },
                                resolve: { fill: colors.success }
                            }}
                            animate={controls}
                        />

                        {/* Arm Segment 2 */}
                        <motion.g
                            style={{ originX: "400px", originY: "320px" }}
                            variants={{
                                reset: { rotate: 0 },
                                move: { rotate: [0, 45, 30], transition: { duration: 1.5, delay: 0.3 } },
                                anomaly: { rotate: 30 },
                                resolve: { rotate: 30 }
                            }}
                            animate={controls}
                        >
                            <rect x="388" y="230" width="24" height="90" rx="6" fill={colors.armSegment} filter="url(#robot-shadow)" />

                            {/* Joint 2 */}
                            <motion.circle cx="400" cy="230" r="14" fill="url(#joint-gradient)"
                                variants={{
                                    validate: { fill: colors.success },
                                    anomaly: { fill: colors.error },
                                    log: { fill: colors.warning },
                                    resolve: { fill: colors.success }
                                }}
                                animate={controls}
                            />

                            {/* End Effector / Gripper */}
                            <motion.g
                                variants={{
                                    move: { scale: [1, 0.9, 1], transition: { duration: 0.5, delay: 1.2 } }
                                }}
                                animate={controls}
                            >
                                <rect x="390" y="200" width="8" height="35" rx="2" fill={colors.armBase} />
                                <rect x="402" y="200" width="8" height="35" rx="2" fill={colors.armBase} />
                                <rect x="385" y="195" width="30" height="10" rx="3" fill={colors.armJoint} />
                            </motion.g>
                        </motion.g>
                    </motion.g>
                </motion.g>

                {/* --- SENSOR READOUTS --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, x: 30 },
                        init: { opacity: 0 },
                        execute: { opacity: 0 },
                        move: { opacity: 0 },
                        sensor: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                        validate: { opacity: 1 },
                        anomaly: { opacity: 1 },
                        log: { opacity: 1 },
                        resolve: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="550" y="100" width="200" height="180" rx="10" fill="white" filter="url(#robot-shadow)" />
                    <text x="650" y="130" textAnchor="middle" fontSize="12" fontWeight="700" fill={colors.textPrimary}>Sensor Data</text>

                    {/* Sensor Bars */}
                    {[
                        { label: "Position", value: 95, color: colors.accent },
                        { label: "Torque", value: 78, color: colors.success },
                        { label: "Velocity", value: 88, color: "#8b5cf6" },
                    ].map((sensor, i) => (
                        <g key={`sensor-${i}`}>
                            <text x="565" y={165 + i * 45} fontSize="10" fill={colors.textSecondary}>{sensor.label}</text>
                            <rect x="565" y={175 + i * 45} width="170" height="12" rx="6" fill="#e2e8f0" />
                            <motion.rect
                                x="565" y={175 + i * 45} width="0" height="12" rx="6" fill={sensor.color}
                                variants={{
                                    sensor: { width: sensor.value * 1.7, transition: { duration: 0.5, delay: i * 0.15 } }
                                }}
                                animate={controls}
                            />
                            <text x="720" y={185 + i * 45} fontSize="10" fontWeight="600" fill={colors.textPrimary}>{sensor.value}%</text>
                        </g>
                    ))}
                </motion.g>

                {/* --- QA ENGINEER --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: 30 },
                        init: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
                        execute: { opacity: 1 },
                        move: { opacity: 1 },
                        sensor: { opacity: 1 },
                        validate: { opacity: 1 },
                        anomaly: { opacity: 1 },
                        log: { opacity: 1 },
                        resolve: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="50" y="420" width="150" height="10" rx="2" fill="#cbd5e1" />
                    <ellipse cx="125" cy="415" rx="25" ry="8" fill="#475569" />
                    <circle cx="125" cy="395" r="15" fill="#64748b" />
                </motion.g>

                {/* --- ANOMALY ALERT --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, scale: 0 },
                        init: { opacity: 0 },
                        execute: { opacity: 0 },
                        move: { opacity: 0 },
                        sensor: { opacity: 0 },
                        validate: { opacity: 0 },
                        anomaly: { opacity: 1, scale: 1, transition: { type: "spring" } },
                        log: { opacity: 1 },
                        resolve: { opacity: 0, scale: 0 }
                    }}
                    animate={controls}
                >
                    <rect x="320" y="130" width="160" height="40" rx="8" fill={colors.error} />
                    <text x="400" y="155" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">⚠ Joint Error Detected</text>
                </motion.g>

                {/* --- SUCCESS BADGE --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 0 },
                        execute: { opacity: 0 },
                        move: { opacity: 0 },
                        sensor: { opacity: 0 },
                        validate: { opacity: 0 },
                        anomaly: { opacity: 0 },
                        log: { opacity: 0 },
                        resolve: { opacity: 1, transition: { delay: 0.5 } }
                    }}
                    animate={controls}
                >
                    <rect x="280" y="50" width="240" height="45" rx="10" fill={colors.success} filter="url(#robot-shadow)" />
                    <text x="400" y="78" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">✓ Robot System Validated</text>
                </motion.g>

            </svg>
        </div>
    );
};

export default RoboticTestingAnimation;
