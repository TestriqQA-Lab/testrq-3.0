"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const SmartDeviceTestingAnimation = () => {
    const controls = useAnimation();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Corporate Color Palette
    const colors = {
        bg: "#f0fdf4",
        hubBg: "#16a34a",
        hubGlow: "rgba(22, 163, 74, 0.4)",
        accent: "#10b981",
        accentLight: "#6ee7b7",
        success: "#22c55e",
        error: "#ef4444",
        warning: "#f59e0b",
        textPrimary: "#166534",
        textSecondary: "#64748b",
        connection: "#34d399",
        wifi: "#3b82f6",
        bluetooth: "#6366f1",
    };

    // Smart devices positions
    const devices = [
        { id: "hub", x: 400, y: 230, label: "Smart Hub", color: colors.hubBg, size: 50, emoji: "🏠" },
        { id: "speaker", x: 200, y: 150, label: "Speaker", color: "#8b5cf6", size: 35, emoji: "🔊" },
        { id: "tv", x: 580, y: 120, label: "Smart TV", color: "#3b82f6", size: 35, emoji: "📺" },
        { id: "watch", x: 150, y: 320, label: "Wearable", color: "#f59e0b", size: 30, emoji: "⌚" },
        { id: "phone", x: 280, y: 380, label: "Phone", color: "#10b981", size: 32, emoji: "📱" },
        { id: "bulb", x: 520, y: 380, label: "Smart Light", color: "#eab308", size: 30, emoji: "💡" },
        { id: "camera", x: 650, y: 280, label: "Camera", color: "#ef4444", size: 32, emoji: "📷" },
    ];

    // Connections from hub to all devices
    const connections = devices.filter(d => d.id !== "hub").map(d => ({ from: "hub", to: d.id }));

    // Animation Sequence
    useEffect(() => {
        if (!mounted) return;

        let isMounted = true;
        const sequence = async () => {
            await new Promise(resolve => setTimeout(resolve, 500));

            while (isMounted) {
                await controls.start("reset");
                await controls.start("init");
                await controls.start("connect");
                await controls.start("test");
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

    if (!mounted) return <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 shadow-xl border border-green-200" />;

    const getDevicePos = (id: string) => devices.find(d => d.id === id)!;

    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 overflow-hidden relative shadow-xl border border-green-200">
            <svg viewBox="0 0 800 500" className="w-full h-full relative z-10">
                <defs>
                    <filter id="device-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <filter id="hub-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* --- CONNECTION LINES --- */}
                {connections.map((conn, i) => {
                    const from = getDevicePos(conn.from);
                    const to = getDevicePos(conn.to);
                    return (
                        <motion.line
                            key={`conn-${i}`}
                            x1={from.x} y1={from.y}
                            x2={to.x} y2={to.y}
                            stroke={colors.connection}
                            strokeWidth="2"
                            strokeDasharray="6 6"
                            initial="reset"
                            variants={{
                                reset: { opacity: 0, pathLength: 0 },
                                init: { opacity: 0.2 },
                                connect: { opacity: 1, pathLength: 1, transition: { duration: 0.5, delay: i * 0.1 } },
                                test: { opacity: 1 },
                                validate: { opacity: 1 },
                                anomaly: conn.to === "camera" ? { stroke: colors.error, opacity: 1 } : { opacity: 1 },
                                log: { opacity: 1 },
                                resolve: { stroke: colors.connection, opacity: 1 }
                            }}
                            animate={controls}
                        />
                    );
                })}

                {/* --- DATA PACKETS --- */}
                {connections.slice(0, 3).map((conn, i) => {
                    const from = getDevicePos(conn.from);
                    const to = getDevicePos(conn.to);
                    return (
                        <motion.circle
                            key={`packet-${i}`}
                            r="5"
                            fill={colors.wifi}
                            filter="url(#hub-glow)"
                            initial="reset"
                            variants={{
                                reset: { opacity: 0 },
                                connect: {
                                    opacity: [0, 1, 1, 0],
                                    cx: [from.x, to.x],
                                    cy: [from.y, to.y],
                                    transition: { duration: 0.8, delay: 0.5 + i * 0.2 }
                                },
                                test: { opacity: 0 },
                                validate: { opacity: 0 },
                                anomaly: { opacity: 0 },
                                log: { opacity: 0 },
                                resolve: { opacity: 0 }
                            }}
                            animate={controls}
                        />
                    );
                })}

                {/* --- SMART DEVICES --- */}
                {devices.map((device, i) => (
                    <motion.g
                        key={device.id}
                        initial="reset"
                        variants={{
                            reset: { opacity: 0, scale: 0 },
                            init: { opacity: 1, scale: 1, transition: { delay: i * 0.08, type: "spring" } },
                            connect: { opacity: 1 },
                            test: { opacity: 1 },
                            validate: { opacity: 1 },
                            anomaly: { opacity: 1 },
                            log: { opacity: 1 },
                            resolve: { opacity: 1 }
                        }}
                        animate={controls}
                    >
                        {/* Device Circle */}
                        <motion.circle
                            cx={device.x}
                            cy={device.y}
                            r={device.size}
                            fill="white"
                            stroke={device.color}
                            strokeWidth={device.id === "hub" ? 4 : 3}
                            filter={device.id === "hub" ? "url(#hub-glow)" : "url(#device-shadow)"}
                            variants={{
                                validate: { stroke: colors.success, transition: { delay: 0.5 + i * 0.1 } },
                                anomaly: device.id === "camera" ? { stroke: colors.error, strokeWidth: 4 } : { stroke: colors.success },
                                log: device.id === "camera" ? { stroke: colors.warning } : { stroke: colors.success },
                                resolve: { stroke: colors.success, transition: { delay: i * 0.08 } }
                            }}
                            animate={controls}
                        />

                        {/* Device Emoji/Icon */}
                        <text
                            x={device.x}
                            y={device.y + 6}
                            textAnchor="middle"
                            fontSize={device.id === "hub" ? 28 : 20}
                        >
                            {device.emoji}
                        </text>

                        {/* Device Label */}
                        <text
                            x={device.x}
                            y={device.y + device.size + 18}
                            textAnchor="middle"
                            fontSize="10"
                            fontWeight="600"
                            fill={colors.textPrimary}
                        >
                            {device.label}
                        </text>

                        {/* Status Indicator */}
                        {device.id !== "hub" && (
                            <motion.circle
                                cx={device.x + device.size * 0.7}
                                cy={device.y - device.size * 0.7}
                                r="8"
                                fill={colors.success}
                                stroke="white"
                                strokeWidth="2"
                                variants={{
                                    reset: { scale: 0 },
                                    validate: { scale: 1, transition: { delay: 0.8 + i * 0.1, type: "spring" } },
                                    anomaly: device.id === "camera" ? { fill: colors.error, scale: 1 } : { fill: colors.success, scale: 1 },
                                    log: device.id === "camera" ? { fill: colors.warning } : { fill: colors.success },
                                    resolve: { fill: colors.success, scale: 1 }
                                }}
                                animate={controls}
                            />
                        )}
                    </motion.g>
                ))}

                {/* --- HUB PULSE EFFECT --- */}
                <motion.circle
                    cx={400} cy={230} r="55"
                    fill="none"
                    stroke={colors.hubGlow}
                    strokeWidth="6"
                    animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />

                {/* --- QA ENGINEER --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: 30 },
                        init: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
                        connect: { opacity: 1 },
                        test: { opacity: 1 },
                        validate: { opacity: 1 },
                        anomaly: { opacity: 1 },
                        log: { opacity: 1 },
                        resolve: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="50" y="450" width="700" height="12" rx="4" fill="#bbf7d0" />
                    <ellipse cx="400" cy="440" rx="30" ry="10" fill="#16a34a" />
                    <circle cx="400" cy="420" r="18" fill="#22c55e" />
                </motion.g>

                {/* --- TESTING ACTIVITY PANEL --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, x: 30 },
                        init: { opacity: 0 },
                        connect: { opacity: 0 },
                        test: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                        validate: { opacity: 1 },
                        anomaly: { opacity: 1 },
                        log: { opacity: 1 },
                        resolve: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="620" y="380" width="160" height="90" rx="10" fill="white" filter="url(#device-shadow)" />
                    <text x="700" y="405" textAnchor="middle" fontSize="11" fontWeight="700" fill={colors.textPrimary}>Testing Status</text>

                    <text x="635" y="430" fontSize="9" fill={colors.textSecondary}>WiFi:</text>
                    <motion.rect x="665" y="422" width="100" height="8" rx="4" fill={colors.wifi}
                        variants={{ test: { width: [0, 100], transition: { duration: 0.5 } } }}
                        animate={controls}
                    />

                    <text x="635" y="452" fontSize="9" fill={colors.textSecondary}>BLE:</text>
                    <motion.rect x="665" y="444" width="90" height="8" rx="4" fill={colors.bluetooth}
                        variants={{ test: { width: [0, 90], transition: { duration: 0.5, delay: 0.2 } } }}
                        animate={controls}
                    />

                    <text x="635" y="474" fontSize="9" fill={colors.textSecondary}>Sync:</text>
                    <motion.rect x="665" y="466" width="95" height="8" rx="4" fill={colors.success}
                        variants={{ test: { width: [0, 95], transition: { duration: 0.5, delay: 0.4 } } }}
                        animate={controls}
                    />
                </motion.g>

                {/* --- ANOMALY ALERT --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, scale: 0 },
                        init: { opacity: 0 },
                        connect: { opacity: 0 },
                        test: { opacity: 0 },
                        validate: { opacity: 0 },
                        anomaly: { opacity: 1, scale: 1, transition: { type: "spring" } },
                        log: { opacity: 1 },
                        resolve: { opacity: 0, scale: 0 }
                    }}
                    animate={controls}
                >
                    <rect x="560" y="230" width="150" height="35" rx="8" fill={colors.error} />
                    <text x="635" y="252" textAnchor="middle" fontSize="11" fontWeight="600" fill="white">⚠ Camera Offline</text>
                </motion.g>

                {/* --- SUCCESS BADGE --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 0 },
                        connect: { opacity: 0 },
                        test: { opacity: 0 },
                        validate: { opacity: 0 },
                        anomaly: { opacity: 0 },
                        log: { opacity: 0 },
                        resolve: { opacity: 1, transition: { delay: 0.5 } }
                    }}
                    animate={controls}
                >
                    <rect x="280" y="40" width="240" height="45" rx="10" fill={colors.success} filter="url(#device-shadow)" />
                    <text x="400" y="68" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">✓ All Devices Validated</text>
                </motion.g>

            </svg>
        </div>
    );
};

export default SmartDeviceTestingAnimation;
