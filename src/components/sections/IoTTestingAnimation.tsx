"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const IoTTestingAnimation = () => {
    const controls = useAnimation();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Corporate Color Palette
    const colors = {
        bg: "#f0fdfa",
        cloudBg: "#0891b2",
        deviceBg: "#ffffff",
        accent: "#14b8a6",
        accentLight: "#5eead4",
        success: "#10b981",
        error: "#ef4444",
        warning: "#f59e0b",
        textPrimary: "#134e4a",
        textSecondary: "#64748b",
        connection: "#06b6d4",
    };

    // Device positions (arranged in a network topology)
    const devices = [
        { id: "cloud", x: 400, y: 80, label: "Cloud", color: colors.cloudBg, size: 50 },
        { id: "gateway", x: 400, y: 200, label: "Gateway", color: "#6366f1", size: 40 },
        { id: "sensor1", x: 200, y: 320, label: "Sensor", color: "#22c55e", size: 30 },
        { id: "thermo", x: 320, y: 380, label: "Thermostat", color: "#3b82f6", size: 30 },
        { id: "camera", x: 480, y: 380, label: "Camera", color: "#8b5cf6", size: 30 },
        { id: "lock", x: 600, y: 320, label: "Smart Lock", color: "#ef4444", size: 30 },
    ];

    // Connections between devices
    const connections = [
        { from: "cloud", to: "gateway" },
        { from: "gateway", to: "sensor1" },
        { from: "gateway", to: "thermo" },
        { from: "gateway", to: "camera" },
        { from: "gateway", to: "lock" },
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
                await controls.start("connect");
                await controls.start("dataflow");
                await controls.start("monitor");
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

    if (!mounted) return <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-100 shadow-xl border border-teal-200" />;

    const getDevicePos = (id: string) => devices.find(d => d.id === id)!;

    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-100 overflow-hidden relative shadow-xl border border-teal-200">
            <svg viewBox="0 0 800 500" className="w-full h-full relative z-10">
                <defs>
                    <filter id="iot-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <filter id="iot-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
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
                            strokeDasharray="5 5"
                            initial="reset"
                            variants={{
                                reset: { opacity: 0, pathLength: 0 },
                                init: { opacity: 0 },
                                connect: { opacity: 1, pathLength: 1, transition: { duration: 0.5, delay: i * 0.1 } },
                                dataflow: { opacity: 1 },
                                monitor: { opacity: 1 },
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
                {connections.map((conn, i) => {
                    const from = getDevicePos(conn.from);
                    const to = getDevicePos(conn.to);
                    return (
                        <motion.circle
                            key={`packet-${i}`}
                            r="4"
                            fill={colors.accentLight}
                            filter="url(#iot-glow)"
                            initial="reset"
                            variants={{
                                reset: { opacity: 0 },
                                init: { opacity: 0 },
                                connect: { opacity: 0 },
                                dataflow: {
                                    opacity: 1,
                                    cx: [from.x, to.x],
                                    cy: [from.y, to.y],
                                    transition: { duration: 1, delay: i * 0.2, repeat: 2, repeatType: "reverse" as const }
                                },
                                monitor: { opacity: 0 },
                                validate: { opacity: 0 },
                                anomaly: { opacity: 0 },
                                log: { opacity: 0 },
                                resolve: { opacity: 0 }
                            }}
                            animate={controls}
                        />
                    );
                })}

                {/* --- IOT DEVICES --- */}
                {devices.map((device, i) => (
                    <motion.g
                        key={device.id}
                        initial="reset"
                        variants={{
                            reset: { opacity: 0, scale: 0 },
                            init: { opacity: 1, scale: 1, transition: { delay: i * 0.1, type: "spring" } },
                            connect: { opacity: 1, scale: 1 },
                            dataflow: { opacity: 1, scale: 1 },
                            monitor: { opacity: 1, scale: 1 },
                            validate: { opacity: 1, scale: 1 },
                            anomaly: { opacity: 1, scale: 1 },
                            log: { opacity: 1, scale: 1 },
                            resolve: { opacity: 1, scale: 1 }
                        }}
                        animate={controls}
                    >
                        {/* Device Circle */}
                        <motion.circle
                            cx={device.x}
                            cy={device.y}
                            r={device.size}
                            fill={colors.deviceBg}
                            stroke={device.color}
                            strokeWidth="3"
                            filter="url(#iot-shadow)"
                            variants={{
                                validate: { stroke: colors.success, transition: { delay: 0.5 + i * 0.15 } },
                                anomaly: device.id === "camera" ? { stroke: colors.error, strokeWidth: 4 } : { stroke: colors.success },
                                log: device.id === "camera" ? { stroke: colors.warning } : { stroke: colors.success },
                                resolve: { stroke: colors.success, transition: { delay: i * 0.1 } }
                            }}
                            animate={controls}
                        />

                        {/* Device Icon (Simplified) */}
                        <motion.circle
                            cx={device.x}
                            cy={device.y}
                            r={device.size * 0.5}
                            fill={device.color}
                            variants={{
                                anomaly: device.id === "camera" ? { fill: colors.error } : {},
                                resolve: { fill: device.color }
                            }}
                            animate={controls}
                        />

                        {/* Device Label */}
                        <text
                            x={device.x}
                            y={device.y + device.size + 15}
                            textAnchor="middle"
                            fontSize="11"
                            fontWeight="600"
                            fill={colors.textPrimary}
                        >
                            {device.label}
                        </text>

                        {/* Status Indicator */}
                        <motion.circle
                            cx={device.x + device.size * 0.7}
                            cy={device.y - device.size * 0.7}
                            r="8"
                            fill={colors.success}
                            stroke="white"
                            strokeWidth="2"
                            variants={{
                                reset: { scale: 0 },
                                validate: { scale: 1, transition: { delay: 0.8 + i * 0.15, type: "spring" } },
                                anomaly: device.id === "camera" ? { fill: colors.error, scale: 1 } : { fill: colors.success, scale: 1 },
                                log: device.id === "camera" ? { fill: colors.warning } : { fill: colors.success },
                                resolve: { fill: colors.success, scale: 1 }
                            }}
                            animate={controls}
                        />
                    </motion.g>
                ))}

                {/* --- QA ENGINEER --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: 30 },
                        init: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                        connect: { opacity: 1 },
                        dataflow: { opacity: 1 },
                        monitor: { opacity: 1 },
                        validate: { opacity: 1 },
                        anomaly: { opacity: 1 },
                        log: { opacity: 1 },
                        resolve: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    {/* Desk */}
                    <rect x="50" y="460" width="700" height="12" rx="4" fill="#a7f3d0" />
                    {/* Person */}
                    <ellipse cx="400" cy="450" rx="30" ry="10" fill="#059669" />
                    <circle cx="400" cy="430" r="18" fill="#10b981" />
                </motion.g>

                {/* --- MONITORING PANEL --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, x: 30 },
                        init: { opacity: 0 },
                        connect: { opacity: 0 },
                        dataflow: { opacity: 0 },
                        monitor: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                        validate: { opacity: 1 },
                        anomaly: { opacity: 1 },
                        log: { opacity: 1 },
                        resolve: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="620" y="120" width="150" height="100" rx="8" fill="white" filter="url(#iot-shadow)" />
                    <text x="695" y="145" textAnchor="middle" fontSize="12" fontWeight="700" fill={colors.textPrimary}>Network Status</text>

                    {/* Mini bars */}
                    <rect x="640" y="160" width="110" height="10" rx="5" fill="#e2e8f0" />
                    <motion.rect x="640" y="160" width="100" height="10" rx="5" fill={colors.success}
                        variants={{
                            monitor: { width: [0, 100], transition: { duration: 0.5 } }
                        }}
                        animate={controls}
                    />
                    <text x="640" y="185" fontSize="9" fill={colors.textSecondary}>Latency: 12ms</text>

                    <rect x="640" y="195" width="110" height="10" rx="5" fill="#e2e8f0" />
                    <motion.rect x="640" y="195" width="105" height="10" rx="5" fill={colors.accent}
                        variants={{
                            monitor: { width: [0, 105], transition: { duration: 0.5, delay: 0.2 } }
                        }}
                        animate={controls}
                    />
                    <text x="640" y="220" fontSize="9" fill={colors.textSecondary}>Uptime: 99.9%</text>
                </motion.g>

                {/* --- ALERT BADGE --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, scale: 0 },
                        init: { opacity: 0 },
                        connect: { opacity: 0 },
                        dataflow: { opacity: 0 },
                        monitor: { opacity: 0 },
                        validate: { opacity: 0 },
                        anomaly: { opacity: 1, scale: 1, transition: { type: "spring" } },
                        log: { opacity: 1 },
                        resolve: { opacity: 0, scale: 0 }
                    }}
                    animate={controls}
                >
                    <rect x="420" y="340" width="120" height="35" rx="6" fill={colors.error} />
                    <text x="480" y="362" textAnchor="middle" fontSize="11" fontWeight="600" fill="white">⚠ Anomaly Detected</text>
                </motion.g>

                {/* --- SUCCESS BADGE --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 0 },
                        connect: { opacity: 0 },
                        dataflow: { opacity: 0 },
                        monitor: { opacity: 0 },
                        validate: { opacity: 0 },
                        anomaly: { opacity: 0 },
                        log: { opacity: 0 },
                        resolve: { opacity: 1, transition: { delay: 0.5 } }
                    }}
                    animate={controls}
                >
                    <rect x="300" y="30" width="200" height="40" rx="8" fill={colors.success} filter="url(#iot-shadow)" />
                    <text x="400" y="55" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">✓ All Systems Healthy</text>
                </motion.g>

            </svg>
        </div>
    );
};

export default IoTTestingAnimation;
