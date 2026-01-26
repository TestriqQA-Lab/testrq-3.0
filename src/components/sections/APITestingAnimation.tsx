"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const APITestingAnimation = () => {
    const controls = useAnimation();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Corporate Color Palette
    const colors = {
        bg: "#f0f9ff",
        primary: "#3b82f6",
        secondary: "#0ea5e9",
        success: "#22c55e",
        error: "#ef4444",
        warning: "#f59e0b",
        textPrimary: "#1e293b",
        textSecondary: "#64748b",
        get: "#22c55e",
        post: "#3b82f6",
        put: "#8b5cf6",
        delete: "#f97316",
    };

    // API Endpoints
    const endpoints = [
        { method: "GET", path: "/users", status: 200, time: "45ms", color: colors.get },
        { method: "POST", path: "/auth", status: 201, time: "32ms", color: colors.post },
        { method: "PUT", path: "/data", status: 200, time: "28ms", color: colors.put },
        { method: "DELETE", path: "/item", status: 500, time: "Error", color: colors.delete },
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
                await controls.start("request");
                await controls.start("process");
                await controls.start("response");
                await controls.start("validate");
                await controls.start("error");
                await controls.start("log");
                await controls.start("resolve");
                await new Promise(resolve => setTimeout(resolve, 3000));
            }
        };
        sequence();

        return () => { isMounted = false; };
    }, [controls, mounted]);

    if (!mounted) return <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 shadow-xl border border-blue-200" />;

    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 overflow-hidden relative shadow-xl border border-blue-200">
            <svg viewBox="0 0 800 500" className="w-full h-full relative z-10">
                <defs>
                    <filter id="api-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <linearGradient id="blue-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#0ea5e9" />
                    </linearGradient>
                </defs>

                {/* --- CLIENT APP --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, x: -30 },
                        init: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                        request: { opacity: 1 },
                        process: { opacity: 1 },
                        response: { opacity: 1 },
                        validate: { opacity: 1 },
                        error: { opacity: 1 },
                        log: { opacity: 1 },
                        resolve: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="50" y="150" width="150" height="160" rx="12" fill="white" filter="url(#api-shadow)" />
                    <rect x="50" y="150" width="150" height="35" rx="12" fill={colors.primary} />
                    <rect x="50" y="170" width="150" height="15" fill={colors.primary} />
                    <text x="125" y="173" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">📱 Client App</text>

                    {/* Request indicator */}
                    <rect x="65" y="200" width="120" height="25" rx="5" fill="#f0f9ff" />
                    <text x="125" y="217" textAnchor="middle" fontSize="10" fill={colors.textSecondary}>Request Ready</text>

                    <rect x="65" y="235" width="120" height="25" rx="5" fill="#f0fdf4" />
                    <text x="125" y="252" textAnchor="middle" fontSize="10" fill={colors.success}>Response: OK</text>

                    <rect x="65" y="270" width="120" height="25" rx="5" fill="#fef2f2" />
                    <text x="125" y="287" textAnchor="middle" fontSize="10" fill={colors.error}>Status: 500</text>
                </motion.g>

                {/* --- API GATEWAY --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, scale: 0.8 },
                        init: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } },
                        request: { opacity: 1 },
                        process: { opacity: 1 },
                        response: { opacity: 1 },
                        validate: { opacity: 1 },
                        error: { opacity: 1 },
                        log: { opacity: 1 },
                        resolve: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <circle cx="400" cy="230" r="60" fill="url(#blue-gradient)" filter="url(#api-shadow)" />
                    <text x="400" y="225" textAnchor="middle" fontSize="16" fontWeight="700" fill="white">API</text>
                    <text x="400" y="245" textAnchor="middle" fontSize="11" fill="white" opacity="0.9">Gateway</text>

                    {/* Animated rings */}
                    <motion.circle cx="400" cy="230" r="75" fill="none" stroke={colors.primary} strokeWidth="2" opacity="0.3"
                        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.circle cx="400" cy="230" r="90" fill="none" stroke={colors.primary} strokeWidth="1" opacity="0.2"
                        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                    />
                </motion.g>

                {/* --- BACKEND SERVICE --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, x: 30 },
                        init: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3 } },
                        request: { opacity: 1 },
                        process: { scale: [1, 1.05, 1], transition: { duration: 0.5 } },
                        response: { opacity: 1 },
                        validate: { opacity: 1 },
                        error: { opacity: 1 },
                        log: { opacity: 1 },
                        resolve: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="600" y="150" width="150" height="160" rx="12" fill="white" filter="url(#api-shadow)" />
                    <rect x="600" y="150" width="150" height="35" rx="12" fill="#0f172a" />
                    <rect x="600" y="170" width="150" height="15" fill="#0f172a" />
                    <text x="675" y="173" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">🖥️ Backend</text>

                    <rect x="615" y="200" width="120" height="20" rx="4" fill="#f1f5f9" />
                    <text x="675" y="214" textAnchor="middle" fontSize="9" fill={colors.textSecondary}>Database: Connected</text>

                    <rect x="615" y="230" width="120" height="20" rx="4" fill="#f1f5f9" />
                    <text x="675" y="244" textAnchor="middle" fontSize="9" fill={colors.textSecondary}>Auth: Verified</text>

                    <motion.rect x="615" y="260" width="120" height="20" rx="4" fill="#fef2f2"
                        variants={{
                            error: { fill: "#fef2f2" },
                            resolve: { fill: "#f0fdf4" }
                        }}
                        animate={controls}
                    />
                    <motion.text x="675" y="274" textAnchor="middle" fontSize="9"
                        variants={{
                            error: { fill: colors.error },
                            resolve: { fill: colors.success }
                        }}
                        initial={{ fill: colors.textSecondary }}
                        animate={controls}
                    >Service: Running</motion.text>
                </motion.g>

                {/* --- DATA PACKETS --- */}
                {/* Request packet (Client to API) */}
                <motion.circle
                    r="10"
                    fill={colors.primary}
                    filter="url(#api-shadow)"
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        request: { opacity: 1, cx: [180, 340], cy: 230, transition: { duration: 0.8 } },
                        process: { cx: [340, 600], cy: 230, transition: { duration: 0.8 } },
                        response: { opacity: 0 },
                        validate: { opacity: 0 },
                        error: { opacity: 0 },
                        log: { opacity: 0 },
                        resolve: { opacity: 0 }
                    }}
                    animate={controls}
                />

                {/* Response packet (Backend to Client) */}
                <motion.circle
                    r="10"
                    fill={colors.success}
                    filter="url(#api-shadow)"
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        request: { opacity: 0 },
                        process: { opacity: 0 },
                        response: { opacity: 1, cx: [600, 340, 180], cy: 230, transition: { duration: 1.2 } },
                        validate: { opacity: 0 },
                        error: { opacity: 0 },
                        log: { opacity: 0 },
                        resolve: { opacity: 0 }
                    }}
                    animate={controls}
                />

                {/* --- CONNECTION LINES --- */}
                <motion.line x1="200" y1="230" x2="340" y2="230" stroke={colors.primary} strokeWidth="2" strokeDasharray="8 4"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 0.3 },
                        request: { opacity: 1 },
                        process: { opacity: 0.5 },
                        response: { opacity: 0.8 },
                        validate: { opacity: 0.5 },
                        error: { opacity: 0.5 },
                        log: { opacity: 0.5 },
                        resolve: { opacity: 0.7 }
                    }}
                    animate={controls}
                />
                <motion.line x1="460" y1="230" x2="600" y2="230" stroke={colors.primary} strokeWidth="2" strokeDasharray="8 4"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 0.3 },
                        request: { opacity: 0.5 },
                        process: { opacity: 1 },
                        response: { opacity: 0.8 },
                        validate: { opacity: 0.5 },
                        error: { opacity: 0.5 },
                        log: { opacity: 0.5 },
                        resolve: { opacity: 0.7 }
                    }}
                    animate={controls}
                />

                {/* --- ENDPOINTS PANEL --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: 30 },
                        init: { opacity: 1, y: 0, transition: { delay: 0.4 } },
                        request: { opacity: 1 },
                        process: { opacity: 1 },
                        response: { opacity: 1 },
                        validate: { opacity: 1 },
                        error: { opacity: 1 },
                        log: { opacity: 1 },
                        resolve: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="50" y="350" width="700" height="120" rx="12" fill="white" filter="url(#api-shadow)" />
                    <text x="70" y="378" fontSize="12" fontWeight="700" fill={colors.textPrimary}>API Endpoints</text>

                    {endpoints.map((ep, i) => (
                        <motion.g key={i}
                            variants={{
                                validate: { opacity: 1, transition: { delay: i * 0.1 } },
                                error: i === 3 ? { opacity: 1 } : { opacity: 1 },
                                resolve: { opacity: 1 }
                            }}
                            animate={controls}
                        >
                            <rect x={70 + i * 170} y="395" width="155" height="55" rx="6" fill="#f8fafc" stroke={ep.color} strokeWidth="2" />
                            <rect x={70 + i * 170} y="395" width="50" height="20" rx="4" fill={ep.color} />
                            <text x={95 + i * 170} y="409" textAnchor="middle" fontSize="9" fontWeight="700" fill="white">{ep.method}</text>
                            <text x={147 + i * 170} y="420" textAnchor="middle" fontSize="10" fontWeight="600" fill={colors.textPrimary}>{ep.path}</text>

                            <motion.rect x={80 + i * 170} y="425" width="35" height="16" rx="3"
                                variants={{
                                    validate: { fill: i === 3 ? colors.error : colors.success, transition: { delay: 0.5 + i * 0.1 } },
                                    error: i === 3 ? { fill: colors.error } : { fill: colors.success },
                                    resolve: { fill: colors.success }
                                }}
                                initial={{ fill: "#e2e8f0" }}
                                animate={controls}
                            />
                            <motion.text x={97 + i * 170} y="437" textAnchor="middle" fontSize="8" fontWeight="600"
                                variants={{
                                    validate: { fill: "white", transition: { delay: 0.5 + i * 0.1 } }
                                }}
                                initial={{ fill: colors.textSecondary }}
                                animate={controls}
                            >{i === 3 ? "500" : ep.status}</motion.text>

                            <text x={170 + i * 170} y="437" textAnchor="middle" fontSize="8" fill={colors.textSecondary}>{ep.time}</text>
                        </motion.g>
                    ))}
                </motion.g>

                {/* --- QA ENGINEER --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: 20 },
                        init: { opacity: 1, y: 0, transition: { delay: 0.5 } },
                        request: { opacity: 1 },
                        process: { opacity: 1 },
                        response: { opacity: 1 },
                        validate: { opacity: 1 },
                        error: { opacity: 1 },
                        log: { opacity: 1 },
                        resolve: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="300" y="55" width="200" height="12" rx="4" fill="#dbeafe" />
                    <ellipse cx="400" cy="48" rx="25" ry="8" fill="#1e40af" />
                    <circle cx="400" cy="32" r="15" fill="#3b82f6" />
                </motion.g>

                {/* --- ERROR ALERT --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, scale: 0 },
                        init: { opacity: 0 },
                        request: { opacity: 0 },
                        process: { opacity: 0 },
                        response: { opacity: 0 },
                        validate: { opacity: 0 },
                        error: { opacity: 1, scale: 1, transition: { type: "spring" } },
                        log: { opacity: 1 },
                        resolve: { opacity: 0, scale: 0 }
                    }}
                    animate={controls}
                >
                    <rect x="550" y="320" width="180" height="40" rx="8" fill={colors.error} />
                    <text x="640" y="345" textAnchor="middle" fontSize="11" fontWeight="600" fill="white">⚠ DELETE /item: 500</text>
                </motion.g>

                {/* --- SUCCESS BADGE --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 0 },
                        request: { opacity: 0 },
                        process: { opacity: 0 },
                        response: { opacity: 0 },
                        validate: { opacity: 0 },
                        error: { opacity: 0 },
                        log: { opacity: 0 },
                        resolve: { opacity: 1, transition: { delay: 0.5 } }
                    }}
                    animate={controls}
                >
                    <rect x="280" y="90" width="240" height="45" rx="10" fill={colors.success} filter="url(#api-shadow)" />
                    <text x="400" y="118" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">✓ All APIs Healthy</text>
                </motion.g>

            </svg>
        </div>
    );
};

export default APITestingAnimation;
