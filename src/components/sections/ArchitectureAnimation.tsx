"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const ArchitectureAnimation = () => {
    const controls = useAnimation();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const colors = {
        bg: "#f8fafc",
        core: "#3b82f6",
        service: "#6366f1",
        database: "#10b981",
        connection: "#cbd5e1",
        alert: "#f59e0b",
        success: "#10b981",
        textPrimary: "#1e293b",
    };

    useEffect(() => {
        if (!mounted) return;

        let isMounted = true;
        const sequence = async () => {
            await new Promise(resolve => setTimeout(resolve, 500));

            while (isMounted) {
                await controls.start("reset");
                await controls.start("init");
                await controls.start("inspect");
                await controls.start("optimize");
                await controls.start("verify");
                await new Promise(resolve => setTimeout(resolve, 3000));
            }
        };
        sequence();

        return () => { isMounted = false; };
    }, [controls, mounted]);

    if (!mounted) return <div className="w-full aspect-[4/3] rounded-2xl bg-blue-50 shadow-xl border border-blue-100" />;

    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-white overflow-hidden relative shadow-xl border border-slate-200">
            <svg viewBox="0 0 800 500" className="w-full h-full relative z-10">
                <defs>
                    <filter id="arch-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.1" />
                    </filter>
                    <linearGradient id="arch-gradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                </defs>

                {/* --- MICROSERVICES MESH --- */}
                <g>
                    {[
                        { id: "s1", x: 200, y: 150 },
                        { id: "s2", x: 200, y: 350 },
                        { id: "s3", x: 400, y: 250 },
                        { id: "s4", x: 600, y: 150 },
                        { id: "s5", x: 600, y: 350 },
                    ].map((node, i) => (
                        <React.Fragment key={node.id}>
                            {/* Connections */}
                            <motion.line
                                x1={node.x} y1={node.y} x2={400} y2={250}
                                stroke={colors.connection} strokeWidth="1.5"
                                initial={{ pathLength: 0, opacity: 0 }}
                                variants={{
                                    init: { pathLength: 1, opacity: 0.4, transition: { duration: 0.8 } },
                                    inspect: { stroke: colors.core, opacity: 0.8 }
                                }}
                                animate={controls}
                            />
                            {/* Nodes */}
                            <motion.g
                                initial="reset"
                                variants={{
                                    reset: { opacity: 0, scale: 0 },
                                    init: { opacity: 1, scale: 1, transition: { delay: i * 0.1 } }
                                }}
                                animate={controls}
                            >
                                <circle cx={node.x} cy={node.y} r="25" fill="white" stroke={colors.service} strokeWidth="2" filter="url(#arch-shadow)" />
                                <motion.circle
                                    cx={node.x} cy={node.y} r="10" fill={colors.service}
                                    variants={{
                                        inspect: { scale: [1, 1.2, 1], transition: { duration: 0.4, repeat: 2 } }
                                    }}
                                    animate={controls}
                                />
                            </motion.g>
                        </React.Fragment>
                    ))}
                </g>

                {/* --- INSPECTION LENS --- */}
                <motion.g
                    initial={{ x: 50, y: 50, opacity: 0 }}
                    variants={{
                        inspect: { x: 350, y: 200, opacity: 1, transition: { duration: 1 } },
                        optimize: { x: 550, y: 100 },
                        verify: { opacity: 0 }
                    }}
                    animate={controls}
                >
                    <circle cx="50" cy="50" r="40" fill="none" stroke={colors.alert} strokeWidth="3" strokeDasharray="5 5" />
                    <motion.path
                        d="M80 80 L110 110" stroke={colors.alert} strokeWidth="4" strokeLinecap="round"
                    />
                    <text x="50" y="105" textAnchor="middle" fontSize="10" fontWeight="700" fill={colors.alert}>AUDIT ENGINE</text>
                </motion.g>

                {/* --- PERFORMANCE DASHBOARD --- */}
                <motion.g
                    initial={{ opacity: 0, y: 20 }}
                    variants={{
                        optimize: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                        reset: { opacity: 0 }
                    }}
                    animate={controls}
                >
                    <rect x="50" y="380" width="700" height="80" rx="12" fill="white" filter="url(#arch-shadow)" stroke="#e2e8f0" />
                    <text x="350" y="410" fontSize="14" fontWeight="700" fill={colors.textPrimary}>Resilience Score: </text>
                    <motion.text
                        x="470" y="410" fontSize="18" fontWeight="800" fill={colors.success}
                        variants={{ optimize: { opacity: [0, 1], transition: { delay: 0.5 } } }}
                        animate={controls}
                    >
                        98%
                    </motion.text>

                    <rect x="70" y="425" width="660" height="10" rx="5" fill="#f1f5f9" />
                    <motion.rect
                        x="70" y="425" width="0" height="10" rx="5" fill={colors.core}
                        variants={{ optimize: { width: 640, transition: { duration: 1.5 } } }}
                        animate={controls}
                    />
                </motion.g>

                {/* --- ARCHITECTURE BADGE --- */}
                <motion.g
                    initial={{ opacity: 0, scale: 0.5 }}
                    variants={{
                        verify: { opacity: 1, scale: 1, transition: { type: "spring" } },
                        reset: { opacity: 0 }
                    }}
                    animate={controls}
                >
                    <rect x="250" y="30" width="300" height="50" rx="25" fill={colors.success} />
                    <text x="400" y="62" textAnchor="middle" fontSize="16" fontWeight="800" fill="white">✓ ARCHITECTURE CERTIFIED</text>
                </motion.g>

            </svg>
        </div>
    );
};

export default ArchitectureAnimation;
