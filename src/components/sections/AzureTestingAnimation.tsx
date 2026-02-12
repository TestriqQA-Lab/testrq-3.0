"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaCloud, FaServer, FaShieldAlt, FaSync, FaMicrochip, FaCheckCircle, FaNetworkWired } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

const AzureTestingAnimation = () => {
    const controls = useAnimation();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Azure-themed Color Palette
    const colors = {
        bg: "#f0f9ff",
        azureBlue: "#0078d4",
        azureGlow: "rgba(0, 120, 212, 0.4)",
        indigo: "#4f46e5",
        sky: "#0ea5e9",
        success: "#10b981",
        error: "#ef4444",
        warning: "#f59e0b",
        textPrimary: "#0c4a6e",
        textSecondary: "#64748b",
        stream: "#38bdf8",
    };

    // Infrastructure nodes (Cloud, Server, Security, etc.)
    const nodes = [
        { id: "onprem", icon: <FaServer />, label: "On-Prem", x: 100, y: 150, color: colors.textSecondary },
        { id: "security", icon: <FaShieldAlt />, label: "Security", x: 100, y: 350, color: colors.error },
        { id: "devops", icon: <FaSync />, label: "DevOps", x: 300, y: 250, color: colors.indigo },
        { id: "azure", icon: <VscAzure />, label: "Azure", x: 550, y: 250, color: colors.azureBlue },
        { id: "ai", icon: <FaMicrochip />, label: "Azure AI", x: 700, y: 150, color: colors.sky },
        { id: "net", icon: <FaNetworkWired />, label: "VNet", x: 700, y: 350, color: colors.indigo },
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
                await controls.start("migrate");
                await controls.start("validate");
                await controls.start("secure");
                await controls.start("optimize");
                await controls.start("success");
                await new Promise(resolve => setTimeout(resolve, 3000));
            }
        };
        sequence();

        return () => { isMounted = false; };
    }, [controls, mounted]);

    if (!mounted) return <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-sky-50 to-indigo-100 shadow-xl border border-sky-200" />;

    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-sky-50 to-indigo-100 overflow-hidden relative shadow-xl border border-sky-200">
            <svg viewBox="0 0 800 500" className="w-full h-full relative z-10">
                <defs>
                    <filter id="azure-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <filter id="azure-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <linearGradient id="azure-gradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#0078d4" />
                        <stop offset="100%" stopColor="#00bcf2" />
                    </linearGradient>
                </defs>

                {/* --- CONNECTIONS --- */}
                {/* On-Prem to DevOps */}
                <motion.path
                    d="M 140 150 Q 200 150, 260 230"
                    fill="none"
                    stroke={colors.sky}
                    strokeWidth="3"
                    strokeDasharray="8 6"
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, pathLength: 0 },
                        init: { opacity: 0.3, pathLength: 1 },
                        migrate: { strokeDashoffset: -100, transition: { repeat: Infinity, ease: "linear", duration: 2 } }
                    }}
                    animate={controls}
                />

                {/* DevOps to Azure */}
                <motion.line
                    x1="340" y1="250" x2="510" y2="250"
                    stroke={colors.azureBlue}
                    strokeWidth="4"
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, scaleX: 0 },
                        init: { opacity: 0.2, scaleX: 1, originX: 0 },
                        validate: { opacity: 1, strokeWidth: [4, 8, 4], transition: { duration: 0.5 } }
                    }}
                    animate={controls}
                />

                {/* Azure to AI/Networking */}
                <motion.line x1="595" y1="250" x2="670" y2="180" stroke={colors.sky} strokeWidth="2" initial="reset" variants={{ reset: { opacity: 0 }, init: { opacity: 0.3 } }} animate={controls} />
                <motion.line x1="595" y1="250" x2="670" y2="320" stroke={colors.indigo} strokeWidth="2" initial="reset" variants={{ reset: { opacity: 0 }, init: { opacity: 0.3 } }} animate={controls} />

                {/* --- NODES --- */}
                {nodes.map((node) => (
                    <motion.g key={node.id}
                        initial="reset"
                        variants={{
                            reset: { opacity: 0, scale: 0 },
                            init: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } },
                            migrate: node.id === "onprem" ? { x: [0, 5, 0], transition: { repeat: Infinity, duration: 1 } } : {},
                            validate: node.id === "azure" ? { scale: [1, 1.1, 1], transition: { duration: 0.5 } } : {},
                            success: { opacity: 1, scale: 1 }
                        }}
                        animate={controls}
                    >
                        <circle cx={node.x} cy={node.y} r="35" fill="white" filter="url(#azure-shadow)" />
                        <motion.foreignObject x={node.x - 20} y={node.y - 20} width="40" height="40">
                            <div className="w-full h-full flex items-center justify-center text-2xl" style={{ color: node.color }}>
                                {node.icon}
                            </div>
                        </motion.foreignObject>
                        <text x={node.x} y={node.y + 55} textAnchor="middle" fontSize="11" fontWeight="700" fill={colors.textPrimary} className="uppercase tracking-wider">{node.label}</text>
                    </motion.g>
                ))}

                {/* --- DATA PACKETS --- */}
                <motion.circle
                    r="6" fill={colors.azureBlue}
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, x: 100, y: 150 },
                        migrate: {
                            opacity: [0, 1, 0],
                            x: [100, 300, 550],
                            y: [150, 250, 250],
                            transition: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                        }
                    }}
                    animate={controls}
                />

                {/* --- VALIDATION WAVES --- */}
                <motion.circle
                    cx="550" cy="250" r="40"
                    fill="none"
                    stroke={colors.success}
                    strokeWidth="2"
                    initial={{ scale: 0, opacity: 0 }}
                    variants={{
                        validate: { scale: [1, 2], opacity: [0.5, 0], transition: { repeat: 3, duration: 0.8 } }
                    }}
                    animate={controls}
                />

                {/* --- SECURITY SHIELD --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, scale: 0 },
                        secure: { opacity: 1, scale: 1, transition: { type: "spring" } },
                        success: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <path
                        d="M 550 200 Q 580 200, 580 230 L 580 270 Q 550 300, 520 270 L 520 230 Q 520 200, 550 200"
                        fill="rgba(16, 185, 129, 0.1)"
                        stroke={colors.success}
                        strokeWidth="2"
                    />
                    <motion.foreignObject x="540" y="240" width="20" height="20">
                        <div className="text-success text-xl">
                            <FaCheckCircle className="text-emerald-500" />
                        </div>
                    </motion.foreignObject>
                </motion.g>

                {/* --- SUCCESS OVERLAY --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: 50 },
                        success: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4 } }
                    }}
                    animate={controls}
                >
                    <rect x="250" y="50" width="300" height="50" rx="25" fill="white" filter="url(#azure-shadow)" />
                    <text x="400" y="82" textAnchor="middle" fontSize="16" fontWeight="800" fill={colors.azureBlue}>CLOUD-NATIVE QA VERIFIED</text>
                </motion.g>

            </svg>

            {/* Cloud Background Elements */}
            <motion.div
                className="absolute top-10 left-10 text-sky-200/40 text-6xl"
                animate={{ x: [0, 20, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
            >
                <FaCloud />
            </motion.div>
            <motion.div
                className="absolute bottom-20 right-10 text-indigo-200/30 text-8xl"
                animate={{ x: [0, -30, 0] }}
                transition={{ duration: 15, repeat: Infinity }}
            >
                <FaCloud />
            </motion.div>
        </div>
    );
};

export default AzureTestingAnimation;
