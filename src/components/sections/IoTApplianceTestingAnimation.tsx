"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const IoTApplianceTestingAnimation = () => {
    const controls = useAnimation();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Corporate Color Palette - IoT / Connectivity Theme
    const colors = {
        bg: "#ecfeff",
        primary: "#25A8E0", // Testriq Brand Blue
        secondary: "#06b6d4", // Cyan
        accent: "#0891b2",
        success: "#22c55e",
        error: "#ef4444",
        warning: "#f59e0b",
        textPrimary: "#1e293b",
        textSecondary: "#64748b",
        deviceBg: "#1e293b",
        cloudBg: "#0ea5e9",
    };

    // Animation Sequence
    useEffect(() => {
        if (!mounted) return;

        let isMounted = true;
        const sequence = async () => {
            await new Promise((resolve) => setTimeout(resolve, 500));

            while (isMounted) {
                await controls.start("reset");
                await controls.start("envInit");
                await controls.start("qaAppear");
                await controls.start("devicesActivate");
                await controls.start("connectivity");
                await controls.start("sensorValidate");
                await controls.start("securityScan");
                await controls.start("defectDetect");
                await controls.start("retest");
                await controls.start("complete");
                await new Promise((resolve) => setTimeout(resolve, 3000));
            }
        };
        sequence();

        return () => {
            isMounted = false;
        };
    }, [controls, mounted]);

    // Static fallback for SSR/initial mount
    if (!mounted) {
        return (
            <div
                className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 shadow-xl border border-cyan-200"
                role="img"
                aria-label="IoT Appliance Testing Illustration"
            />
        );
    }

    return (
        <div
            className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 overflow-hidden relative shadow-xl border border-cyan-200"
            role="img"
            aria-label="Animated illustration showing the IoT appliance testing process"
        >
            <svg
                viewBox="0 0 800 600"
                className="w-full h-full relative z-10"
                aria-hidden="true"
            >
                <defs>
                    <filter id="iot-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <linearGradient id="iot-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#25A8E0" />
                        <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                    <linearGradient id="cloud-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0ea5e9" />
                        <stop offset="100%" stopColor="#0284c7" />
                    </linearGradient>
                </defs>

                {/* === SMART HOME ENVIRONMENT === */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        envInit: { opacity: 1, transition: { duration: 0.5 } },
                        qaAppear: { opacity: 1 },
                        devicesActivate: { opacity: 1 },
                        connectivity: { opacity: 1 },
                        sensorValidate: { opacity: 1 },
                        securityScan: { opacity: 1 },
                        defectDetect: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 1 },
                    }}
                    animate={controls}
                >
                    {/* House Outline */}
                    <path
                        d="M 400 80 L 600 180 L 600 380 L 200 380 L 200 180 Z"
                        fill="none"
                        stroke="#cbd5e1"
                        strokeWidth="2"
                        strokeDasharray="8 4"
                    />
                    {/* Roof */}
                    <path
                        d="M 180 180 L 400 60 L 620 180"
                        fill="none"
                        stroke="#94a3b8"
                        strokeWidth="3"
                    />
                </motion.g>

                {/* === CLOUD HUB === */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: -20 },
                        envInit: { opacity: 0 },
                        qaAppear: { opacity: 0 },
                        devicesActivate: { opacity: 0.5 },
                        connectivity: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                        sensorValidate: { opacity: 1 },
                        securityScan: { opacity: 1 },
                        defectDetect: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 1 },
                    }}
                    animate={controls}
                >
                    {/* Cloud Shape */}
                    <ellipse cx="400" cy="35" rx="70" ry="25" fill="url(#cloud-gradient)" filter="url(#iot-shadow)" />
                    <circle cx="350" cy="35" r="18" fill="url(#cloud-gradient)" />
                    <circle cx="450" cy="35" r="18" fill="url(#cloud-gradient)" />
                    <text x="400" y="40" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">
                        ☁ Cloud Hub
                    </text>
                </motion.g>

                {/* === QA ENGINEER WORKSTATION === */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, x: -30 },
                        envInit: { opacity: 0 },
                        qaAppear: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                        devicesActivate: { opacity: 1 },
                        connectivity: { opacity: 1 },
                        sensorValidate: { opacity: 1 },
                        securityScan: { opacity: 1 },
                        defectDetect: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 1 },
                    }}
                    animate={controls}
                >
                    {/* Desk */}
                    <rect x="30" y="320" width="140" height="10" rx="3" fill="#cbd5e1" />
                    {/* Monitor */}
                    <rect x="55" y="250" width="90" height="65" rx="5" fill="#1e293b" filter="url(#iot-shadow)" />
                    <rect x="62" y="257" width="76" height="45" rx="3" fill="#0f172a" />
                    {/* Dashboard on screen */}
                    <rect x="67" y="262" width="30" height="15" rx="2" fill={colors.primary} opacity="0.5" />
                    <rect x="102" y="262" width="30" height="15" rx="2" fill={colors.success} opacity="0.5" />
                    <rect x="67" y="282" width="66" height="8" rx="2" fill="#334155" />
                    {/* Monitor Stand */}
                    <rect x="92" y="315" width="16" height="8" fill="#64748b" />
                    {/* Engineer Silhouette */}
                    <ellipse cx="100" cy="350" rx="30" ry="10" fill="#94a3b8" />
                    <rect x="80" y="325" width="40" height="28" rx="10" fill={colors.primary} />
                    <circle cx="100" cy="310" r="16" fill={colors.primary} />
                    {/* Headset */}
                    <path d="M 86 305 Q 100 290 114 305" stroke={colors.secondary} strokeWidth="3" fill="none" />
                </motion.g>

                {/* === IOT DEVICES === */}

                {/* Thermostat */}
                <motion.g
                    variants={{
                        reset: { opacity: 0, scale: 0.8 },
                        envInit: { opacity: 0.3 },
                        qaAppear: { opacity: 0.3 },
                        devicesActivate: { opacity: 1, scale: 1, transition: { delay: 0 } },
                        connectivity: { opacity: 1 },
                        sensorValidate: { opacity: 1 },
                        securityScan: { opacity: 0.7 },
                        defectDetect: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 1 },
                    }}
                    animate={controls}
                >
                    <circle cx="280" cy="200" r="35" fill="white" filter="url(#iot-shadow)" stroke="#e2e8f0" strokeWidth="2" />
                    <circle cx="280" cy="200" r="25" fill={colors.deviceBg} />
                    <text x="280" y="205" textAnchor="middle" fontSize="12" fill={colors.secondary} fontWeight="bold">
                        72°
                    </text>
                    <text x="280" y="250" textAnchor="middle" fontSize="8" fill={colors.textSecondary}>
                        Thermostat
                    </text>
                </motion.g>

                {/* Smart Light */}
                <motion.g
                    variants={{
                        reset: { opacity: 0, scale: 0.8 },
                        envInit: { opacity: 0.3 },
                        qaAppear: { opacity: 0.3 },
                        devicesActivate: { opacity: 1, scale: 1, transition: { delay: 0.15 } },
                        connectivity: { opacity: 1 },
                        sensorValidate: { opacity: 1 },
                        securityScan: { opacity: 0.7 },
                        defectDetect: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 1 },
                    }}
                    animate={controls}
                >
                    <rect x="360" y="165" width="50" height="70" rx="8" fill="white" filter="url(#iot-shadow)" stroke="#e2e8f0" strokeWidth="2" />
                    <ellipse cx="385" cy="195" rx="15" ry="20" fill={colors.warning} opacity="0.8" />
                    <path d="M 375 220 L 395 220 L 390 235 L 380 235 Z" fill="#94a3b8" />
                    <text x="385" y="260" textAnchor="middle" fontSize="8" fill={colors.textSecondary}>
                        Smart Light
                    </text>
                </motion.g>

                {/* Smart Fridge */}
                <motion.g
                    variants={{
                        reset: { opacity: 0, scale: 0.8 },
                        envInit: { opacity: 0.3 },
                        qaAppear: { opacity: 0.3 },
                        devicesActivate: { opacity: 1, scale: 1, transition: { delay: 0.3 } },
                        connectivity: { opacity: 1 },
                        sensorValidate: { opacity: 1 },
                        securityScan: { opacity: 0.7 },
                        defectDetect: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 1 },
                    }}
                    animate={controls}
                >
                    <rect x="450" y="140" width="60" height="100" rx="6" fill="white" filter="url(#iot-shadow)" stroke="#e2e8f0" strokeWidth="2" />
                    <rect x="455" y="145" width="50" height="55" rx="3" fill={colors.deviceBg} />
                    <rect x="455" y="205" width="50" height="30" rx="3" fill="#475569" />
                    <circle cx="500" cy="170" r="3" fill={colors.secondary} />
                    <text x="480" y="260" textAnchor="middle" fontSize="8" fill={colors.textSecondary}>
                        Smart Fridge
                    </text>
                </motion.g>

                {/* Security Camera */}
                <motion.g
                    variants={{
                        reset: { opacity: 0, scale: 0.8 },
                        envInit: { opacity: 0.3 },
                        qaAppear: { opacity: 0.3 },
                        devicesActivate: { opacity: 1, scale: 1, transition: { delay: 0.45 } },
                        connectivity: { opacity: 1 },
                        sensorValidate: { opacity: 1 },
                        securityScan: { opacity: 0.7 },
                        defectDetect: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 1 },
                    }}
                    animate={controls}
                >
                    <rect x="545" y="175" width="55" height="40" rx="6" fill="white" filter="url(#iot-shadow)" stroke="#e2e8f0" strokeWidth="2" />
                    <circle cx="572" cy="195" r="12" fill={colors.deviceBg} />
                    <circle cx="572" cy="195" r="6" fill={colors.secondary} />
                    <rect x="555" y="215" width="10" height="25" fill="#94a3b8" />
                    <text x="572" y="260" textAnchor="middle" fontSize="8" fill={colors.textSecondary}>
                        Camera
                    </text>
                </motion.g>

                {/* Washing Machine - This one will have a defect */}
                <motion.g
                    variants={{
                        reset: { opacity: 0, scale: 0.8 },
                        envInit: { opacity: 0.3 },
                        qaAppear: { opacity: 0.3 },
                        devicesActivate: { opacity: 1, scale: 1, transition: { delay: 0.6 } },
                        connectivity: { opacity: 1 },
                        sensorValidate: { opacity: 1 },
                        securityScan: { opacity: 0.7 },
                        defectDetect: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 1 },
                    }}
                    animate={controls}
                >
                    <rect x="630" y="155" width="55" height="75" rx="6" fill="white" filter="url(#iot-shadow)" stroke="#e2e8f0" strokeWidth="2" />
                    <circle cx="657" cy="195" r="22" fill={colors.deviceBg} />
                    <circle cx="657" cy="195" r="15" fill="#475569" />
                    <circle cx="657" cy="195" r="8" fill="#64748b" />
                    <rect x="635" y="160" width="40" height="8" rx="2" fill="#334155" />
                    <text x="657" y="260" textAnchor="middle" fontSize="8" fill={colors.textSecondary}>
                        Washer
                    </text>
                </motion.g>

                {/* === CONNECTIVITY LINES === */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        envInit: { opacity: 0 },
                        qaAppear: { opacity: 0 },
                        devicesActivate: { opacity: 0 },
                        connectivity: { opacity: 1, transition: { duration: 0.5 } },
                        sensorValidate: { opacity: 1 },
                        securityScan: { opacity: 0.5 },
                        defectDetect: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 1 },
                    }}
                    animate={controls}
                >
                    {/* Lines from devices to cloud */}
                    <motion.path
                        d="M 280 165 Q 280 100 400 55"
                        stroke={colors.secondary}
                        strokeWidth="2"
                        strokeDasharray="6 3"
                        fill="none"
                        variants={{
                            connectivity: { pathLength: [0, 1], opacity: [0, 1], transition: { duration: 0.4 } },
                        }}
                        animate={controls}
                    />
                    <motion.path
                        d="M 385 165 Q 385 100 400 55"
                        stroke={colors.secondary}
                        strokeWidth="2"
                        strokeDasharray="6 3"
                        fill="none"
                        variants={{
                            connectivity: { pathLength: [0, 1], opacity: [0, 1], transition: { duration: 0.4, delay: 0.1 } },
                        }}
                        animate={controls}
                    />
                    <motion.path
                        d="M 480 140 Q 480 90 400 55"
                        stroke={colors.secondary}
                        strokeWidth="2"
                        strokeDasharray="6 3"
                        fill="none"
                        variants={{
                            connectivity: { pathLength: [0, 1], opacity: [0, 1], transition: { duration: 0.4, delay: 0.2 } },
                        }}
                        animate={controls}
                    />
                    <motion.path
                        d="M 572 175 Q 572 100 400 55"
                        stroke={colors.secondary}
                        strokeWidth="2"
                        strokeDasharray="6 3"
                        fill="none"
                        variants={{
                            connectivity: { pathLength: [0, 1], opacity: [0, 1], transition: { duration: 0.4, delay: 0.3 } },
                        }}
                        animate={controls}
                    />
                    <motion.path
                        d="M 657 155 Q 620 100 400 55"
                        stroke={colors.secondary}
                        strokeWidth="2"
                        strokeDasharray="6 3"
                        fill="none"
                        variants={{
                            connectivity: { pathLength: [0, 1], opacity: [0, 1], transition: { duration: 0.4, delay: 0.4 } },
                        }}
                        animate={controls}
                    />
                </motion.g>

                {/* === SENSOR DATA PULSES === */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        envInit: { opacity: 0 },
                        qaAppear: { opacity: 0 },
                        devicesActivate: { opacity: 0 },
                        connectivity: { opacity: 0 },
                        sensorValidate: { opacity: 1, transition: { duration: 0.3 } },
                        securityScan: { opacity: 0.5 },
                        defectDetect: { opacity: 0.5 },
                        retest: { opacity: 0.5 },
                        complete: { opacity: 0.8 },
                    }}
                    animate={controls}
                >
                    {[280, 385, 480, 572, 657].map((x, i) => (
                        <motion.circle
                            key={`pulse-${i}`}
                            cx={x}
                            cy={i === 2 ? 130 : i === 4 ? 145 : 155}
                            r="6"
                            fill={colors.success}
                            variants={{
                                sensorValidate: {
                                    r: [4, 8, 4],
                                    opacity: [0.5, 1, 0.5],
                                    transition: { duration: 0.6, delay: i * 0.1, repeat: 1 },
                                },
                            }}
                            animate={controls}
                        />
                    ))}
                </motion.g>

                {/* === SECURITY SCAN SHIELD === */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, x: 150 },
                        envInit: { opacity: 0 },
                        qaAppear: { opacity: 0 },
                        devicesActivate: { opacity: 0 },
                        connectivity: { opacity: 0 },
                        sensorValidate: { opacity: 0 },
                        securityScan: { opacity: 1, x: [150, 500], transition: { duration: 1.2, ease: "easeInOut" } },
                        defectDetect: { opacity: 0, x: 700 },
                        retest: { opacity: 0 },
                        complete: { opacity: 0 },
                    }}
                    animate={controls}
                >
                    <path
                        d="M 0 -25 L 20 -15 L 20 10 L 0 25 L -20 10 L -20 -15 Z"
                        fill={colors.primary}
                        transform="translate(280, 300)"
                    />
                    <text x="280" y="305" textAnchor="middle" fontSize="14" fill="white">
                        🛡
                    </text>
                </motion.g>

                {/* === DEFECT DETECTION ON WASHER === */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, scale: 0 },
                        envInit: { opacity: 0 },
                        qaAppear: { opacity: 0 },
                        devicesActivate: { opacity: 0 },
                        connectivity: { opacity: 0 },
                        sensorValidate: { opacity: 0 },
                        securityScan: { opacity: 0 },
                        defectDetect: { opacity: 1, scale: 1, transition: { type: "spring" } },
                        retest: { opacity: 0.5 },
                        complete: { opacity: 0 },
                    }}
                    animate={controls}
                >
                    <circle cx="685" cy="165" r="14" fill={colors.error} opacity="0.2" />
                    <circle cx="685" cy="165" r="10" fill={colors.error} />
                    <text x="685" y="170" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">
                        !
                    </text>
                    <rect x="620" y="275" width="90" height="22" rx="5" fill={colors.error} />
                    <text x="665" y="290" textAnchor="middle" fontSize="9" fill="white" fontWeight="600">
                        ⚠ Firmware Error
                    </text>
                </motion.g>

                {/* === SUCCESS INDICATORS AFTER RETEST === */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        envInit: { opacity: 0 },
                        qaAppear: { opacity: 0 },
                        devicesActivate: { opacity: 0 },
                        connectivity: { opacity: 0 },
                        sensorValidate: { opacity: 0 },
                        securityScan: { opacity: 0 },
                        defectDetect: { opacity: 0 },
                        retest: { opacity: 0 },
                        complete: { opacity: 1, transition: { duration: 0.5 } },
                    }}
                    animate={controls}
                >
                    {/* Success checkmarks on all devices */}
                    {[
                        { x: 305, y: 180 },
                        { x: 405, y: 175 },
                        { x: 505, y: 150 },
                        { x: 595, y: 180 },
                        { x: 680, y: 165 },
                    ].map((pos, i) => (
                        <motion.g key={`check-${i}`}>
                            <circle cx={pos.x} cy={pos.y} r="10" fill={colors.success} />
                            <text x={pos.x} y={pos.y + 4} textAnchor="middle" fontSize="10" fill="white">
                                ✓
                            </text>
                        </motion.g>
                    ))}
                </motion.g>

                {/* === COMPLETION SUCCESS BADGE === */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, scale: 0.8 },
                        envInit: { opacity: 0 },
                        qaAppear: { opacity: 0 },
                        devicesActivate: { opacity: 0 },
                        connectivity: { opacity: 0 },
                        sensorValidate: { opacity: 0 },
                        securityScan: { opacity: 0 },
                        defectDetect: { opacity: 0 },
                        retest: { opacity: 0 },
                        complete: { opacity: 1, scale: 1, transition: { delay: 0.3, type: "spring" } },
                    }}
                    animate={controls}
                >
                    <rect
                        x="230"
                        y="560"
                        width="340"
                        height="35"
                        rx="10"
                        fill={colors.success}
                        filter="url(#iot-shadow)"
                    />
                    <text
                        x="400"
                        y="583"
                        textAnchor="middle"
                        fontSize="13"
                        fontWeight="bold"
                        fill="white"
                    >
                        ✓ All Devices Verified - Ecosystem Ready!
                    </text>
                </motion.g>

                {/* === TESTING PHASES PANEL === */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        envInit: { opacity: 1, transition: { delay: 0.3 } },
                        qaAppear: { opacity: 1 },
                        devicesActivate: { opacity: 1 },
                        connectivity: { opacity: 1 },
                        sensorValidate: { opacity: 1 },
                        securityScan: { opacity: 1 },
                        defectDetect: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 1 },
                    }}
                    animate={controls}
                >
                    <rect x="30" y="400" width="140" height="150" rx="10" fill="white" filter="url(#iot-shadow)" />
                    <text x="100" y="425" textAnchor="middle" fontSize="10" fontWeight="bold" fill={colors.textPrimary}>
                        Testing Phase
                    </text>

                    {/* Phase Indicators */}
                    {[
                        { label: "Connectivity", phase: "connectivity" },
                        { label: "Sensor Data", phase: "sensorValidate" },
                        { label: "Security", phase: "securityScan" },
                        { label: "Firmware", phase: "defectDetect" },
                    ].map((item, i) => (
                        <motion.g key={item.phase}>
                            <motion.circle
                                cx="50"
                                cy={450 + i * 25}
                                r="6"
                                fill="#e2e8f0"
                                variants={{
                                    [item.phase]: { fill: colors.primary },
                                    complete: { fill: colors.success },
                                }}
                                animate={controls}
                            />
                            <text x="62" y={454 + i * 25} fontSize="9" fill={colors.textSecondary}>
                                {item.label}
                            </text>
                        </motion.g>
                    ))}
                </motion.g>
            </svg>
        </div>
    );
};

export default IoTApplianceTestingAnimation;
