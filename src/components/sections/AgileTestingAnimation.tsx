"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const AgileTestingAnimation = () => {
    const controls = useAnimation();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const colors = {
        bg: "#f0f9ff",
        primary: "#0ea5e9", // sky-500
        secondary: "#6366f1", // indigo-500
        accent: "#f59e0b", // amber-500
        success: "#22c55e", // green-500
        text: "#0c4a6e", // sky-950
    };

    useEffect(() => {
        if (!mounted) return;

        const sequence = async () => {
            while (true) {
                await controls.start("sprintStart");
                await new Promise(resolve => setTimeout(resolve, 800));
                await controls.start("development");
                await new Promise(resolve => setTimeout(resolve, 800));
                await controls.start("testing");
                await new Promise(resolve => setTimeout(resolve, 800));
                await controls.start("deployment");
                await new Promise(resolve => setTimeout(resolve, 1500));
                await controls.start("reset");
            }
        };
        sequence();
    }, [controls, mounted]);

    if (!mounted) return <div className="w-full aspect-square md:aspect-[4/3] rounded-2xl bg-sky-50 animate-pulse" />;

    return (
        <div className="w-full aspect-square md:aspect-[4/3] rounded-3xl bg-gradient-to-br from-sky-50 to-indigo-50 border border-sky-100 shadow-2xl overflow-hidden relative p-8 flex items-center justify-center">
            <svg viewBox="0 0 400 300" className="w-full h-full">
                {/* Sprint Cycle Path */}
                <circle
                    cx="200" cy="150" r="100"
                    fill="none"
                    stroke="#e0f2fe"
                    strokeWidth="20"
                />

                {/* Progress Ring */}
                <motion.circle
                    cx="200" cy="150" r="100"
                    fill="none"
                    stroke={colors.primary}
                    strokeWidth="20"
                    strokeDasharray="628.3"
                    initial={{ strokeDashoffset: 628.3 }}
                    variants={{
                        sprintStart: { strokeDashoffset: 471.2 },
                        development: { strokeDashoffset: 314.1 },
                        testing: { strokeDashoffset: 157.0 },
                        deployment: { strokeDashoffset: 0 },
                        reset: { strokeDashoffset: 628.3 }
                    }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    animate={controls}
                />

                {/* Nodes on the cycle */}
                {[0, 90, 180, 270].map((angle, i) => {
                    const rad = (angle * Math.PI) / 180;
                    const x = 200 + 100 * Math.cos(rad);
                    const y = 150 + 100 * Math.sin(rad);
                    const labels = ["Deployment", "Testing", "Development", "Planning"];
                    return (
                        <g key={i}>
                            <motion.circle
                                cx={x} cy={y} r="12"
                                fill="white"
                                stroke={colors.primary}
                                strokeWidth="3"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: i * 0.2 }}
                            />
                            <text
                                x={x} y={y + 30}
                                textAnchor="middle"
                                fontSize="12"
                                fontWeight="600"
                                fill={colors.text}
                                className="font-sans"
                            >
                                {labels[i]}
                            </text>
                        </g>
                    );
                })}

                {/* Central Velocity Indicator */}
                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <text x="200" y="145" textAnchor="middle" fontSize="14" fill={colors.text} className="font-sans uppercase tracking-widest font-bold">Velocity</text>
                    <motion.text
                        x="200" y="175"
                        textAnchor="middle"
                        fontSize="32"
                        fontWeight="bold"
                        fill={colors.primary}
                        className="font-sans"
                        variants={{
                            sprintStart: { opacity: 1 },
                            development: { scale: 1.1 },
                            testing: { scale: 1.2, fill: colors.accent },
                            deployment: { scale: 1.3, fill: colors.success },
                            reset: { opacity: 0 }
                        }}
                        animate={controls}
                    >
                        100%
                    </motion.text>
                </motion.g>

                {/* Floating Elements (Agile artifacts) */}
                <motion.rect
                    x="50" y="50" width="40" height="50" rx="4"
                    fill="white" stroke={colors.secondary} strokeWidth="2"
                    animate={{ y: [50, 40, 50], rotate: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <text x="55" y="75" fontSize="8" fill={colors.secondary}>Backlog</text>

                <motion.circle
                    cx="330" cy="60" r="25"
                    fill="white" stroke={colors.accent} strokeWidth="2"
                    animate={{ y: [60, 70, 60], scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <text x="315" y="65" fontSize="8" fill={colors.accent}>Sprint</text>
            </svg>

            {/* Shift-Left Indicator */}
            <motion.div
                className="absolute left-8 bottom-8 bg-white/80 p-4 rounded-xl border border-sky-100 shadow-lg backdrop-blur-sm"
                variants={{
                    testing: { x: -20, opacity: 0 },
                    development: { x: 0, opacity: 1 }
                }}
                animate={controls}
            >
                <div className="text-xs font-bold text-sky-600 uppercase tracking-tighter">Methodology</div>
                <div className="text-lg font-black text-sky-950 italic">Shift-Left QA</div>
            </motion.div>
        </div>
    );
};

export default AgileTestingAnimation;
