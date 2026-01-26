"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const AITestingAnimation = () => {
    const controls = useAnimation();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Corporate Color Palette
    const colors = {
        bg: "#faf5ff",
        coreBg: "#7c3aed",
        coreGlow: "rgba(124, 58, 237, 0.4)",
        accent: "#8b5cf6",
        accentLight: "#c4b5fd",
        success: "#10b981",
        error: "#ef4444",
        warning: "#f59e0b",
        textPrimary: "#581c87",
        textSecondary: "#64748b",
        dataStream: "#a78bfa",
        neuron: "#6366f1",
    };

    // Neural network node positions
    const inputNodes = [
        { id: "i1", x: 100, y: 150 },
        { id: "i2", x: 100, y: 250 },
        { id: "i3", x: 100, y: 350 },
    ];

    const hiddenNodes = [
        { id: "h1", x: 300, y: 120 },
        { id: "h2", x: 300, y: 200 },
        { id: "h3", x: 300, y: 280 },
        { id: "h4", x: 300, y: 360 },
    ];

    const outputNodes = [
        { id: "o1", x: 500, y: 200 },
        { id: "o2", x: 500, y: 300 },
    ];

    // Core AI model position
    const corePos = { x: 650, y: 250 };

    // Animation Sequence
    useEffect(() => {
        if (!mounted) return;

        let isMounted = true;
        const sequence = async () => {
            await new Promise(resolve => setTimeout(resolve, 500));

            while (isMounted) {
                await controls.start("reset");
                await controls.start("init");
                await controls.start("dataInput");
                await controls.start("process");
                await controls.start("output");
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

    if (!mounted) return <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-100 shadow-xl border border-purple-200" />;

    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-100 overflow-hidden relative shadow-xl border border-purple-200">
            <svg viewBox="0 0 800 500" className="w-full h-full relative z-10">
                <defs>
                    <filter id="ai-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <filter id="ai-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <linearGradient id="core-gradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#7c3aed" />
                        <stop offset="100%" stopColor="#4f46e5" />
                    </linearGradient>
                </defs>

                {/* --- NEURAL NETWORK CONNECTIONS --- */}
                {/* Input to Hidden */}
                {inputNodes.map((input, i) =>
                    hiddenNodes.map((hidden, j) => (
                        <motion.line
                            key={`ih-${i}-${j}`}
                            x1={input.x} y1={input.y}
                            x2={hidden.x} y2={hidden.y}
                            stroke={colors.accentLight}
                            strokeWidth="1.5"
                            initial="reset"
                            variants={{
                                reset: { opacity: 0 },
                                init: { opacity: 0.3, transition: { delay: (i + j) * 0.05 } },
                                dataInput: { opacity: 0.3 },
                                process: { opacity: [0.3, 0.8, 0.3], stroke: [colors.accentLight, colors.dataStream, colors.accentLight], transition: { duration: 0.5, delay: (i + j) * 0.03 } },
                                output: { opacity: 0.3 },
                                validate: { opacity: 0.3 },
                                anomaly: { opacity: 0.3 },
                                log: { opacity: 0.3 },
                                resolve: { opacity: 0.3 }
                            }}
                            animate={controls}
                        />
                    ))
                )}

                {/* Hidden to Output */}
                {hiddenNodes.map((hidden, i) =>
                    outputNodes.map((output, j) => (
                        <motion.line
                            key={`ho-${i}-${j}`}
                            x1={hidden.x} y1={hidden.y}
                            x2={output.x} y2={output.y}
                            stroke={colors.accentLight}
                            strokeWidth="1.5"
                            initial="reset"
                            variants={{
                                reset: { opacity: 0 },
                                init: { opacity: 0.3, transition: { delay: 0.5 + (i + j) * 0.05 } },
                                dataInput: { opacity: 0.3 },
                                process: { opacity: [0.3, 0.8, 0.3], stroke: [colors.accentLight, colors.dataStream, colors.accentLight], transition: { duration: 0.5, delay: 0.3 + (i + j) * 0.03 } },
                                output: { opacity: 0.3 },
                                validate: { opacity: 0.3 },
                                anomaly: { opacity: 0.3 },
                                log: { opacity: 0.3 },
                                resolve: { opacity: 0.3 }
                            }}
                            animate={controls}
                        />
                    ))
                )}

                {/* Output to Core */}
                {outputNodes.map((output, i) => (
                    <motion.line
                        key={`oc-${i}`}
                        x1={output.x} y1={output.y}
                        x2={corePos.x} y2={corePos.y}
                        stroke={colors.accent}
                        strokeWidth="2"
                        initial="reset"
                        variants={{
                            reset: { opacity: 0 },
                            init: { opacity: 0.4, transition: { delay: 1 } },
                            dataInput: { opacity: 0.4 },
                            process: { opacity: 0.4 },
                            output: { opacity: [0.4, 1, 0.4], strokeWidth: [2, 4, 2], transition: { duration: 0.5, delay: i * 0.2 } },
                            validate: { opacity: 0.4 },
                            anomaly: { opacity: 0.4 },
                            log: { opacity: 0.4 },
                            resolve: { opacity: 0.4 }
                        }}
                        animate={controls}
                    />
                ))}

                {/* --- INPUT NODES --- */}
                {inputNodes.map((node, i) => (
                    <motion.g key={node.id}
                        initial="reset"
                        variants={{
                            reset: { opacity: 0, scale: 0 },
                            init: { opacity: 1, scale: 1, transition: { delay: i * 0.1, type: "spring" } },
                            dataInput: { opacity: 1 },
                            process: { opacity: 1 },
                            output: { opacity: 1 },
                            validate: { opacity: 1 },
                            anomaly: { opacity: 1 },
                            log: { opacity: 1 },
                            resolve: { opacity: 1 }
                        }}
                        animate={controls}
                    >
                        <circle cx={node.x} cy={node.y} r="18" fill="white" stroke={colors.neuron} strokeWidth="2" filter="url(#ai-shadow)" />
                        <motion.circle
                            cx={node.x} cy={node.y} r="10"
                            fill={colors.neuron}
                            variants={{
                                dataInput: { scale: [1, 1.3, 1], transition: { duration: 0.4, delay: i * 0.1 } }
                            }}
                            animate={controls}
                        />
                        <text x={node.x - 45} y={node.y + 4} fontSize="10" fill={colors.textSecondary}>Data {i + 1}</text>
                    </motion.g>
                ))}

                {/* --- HIDDEN NODES --- */}
                {hiddenNodes.map((node, i) => (
                    <motion.g key={node.id}
                        initial="reset"
                        variants={{
                            reset: { opacity: 0, scale: 0 },
                            init: { opacity: 1, scale: 1, transition: { delay: 0.3 + i * 0.1, type: "spring" } },
                            dataInput: { opacity: 1 },
                            process: { opacity: 1 },
                            output: { opacity: 1 },
                            validate: { opacity: 1 },
                            anomaly: { opacity: 1 },
                            log: { opacity: 1 },
                            resolve: { opacity: 1 }
                        }}
                        animate={controls}
                    >
                        <circle cx={node.x} cy={node.y} r="15" fill="white" stroke={colors.accent} strokeWidth="2" filter="url(#ai-shadow)" />
                        <motion.circle
                            cx={node.x} cy={node.y} r="8"
                            fill={colors.accent}
                            variants={{
                                process: { scale: [1, 1.4, 1], transition: { duration: 0.3, delay: i * 0.08 } }
                            }}
                            animate={controls}
                        />
                    </motion.g>
                ))}

                {/* --- OUTPUT NODES --- */}
                {outputNodes.map((node, i) => (
                    <motion.g key={node.id}
                        initial="reset"
                        variants={{
                            reset: { opacity: 0, scale: 0 },
                            init: { opacity: 1, scale: 1, transition: { delay: 0.6 + i * 0.1, type: "spring" } },
                            dataInput: { opacity: 1 },
                            process: { opacity: 1 },
                            output: { opacity: 1 },
                            validate: { opacity: 1 },
                            anomaly: { opacity: 1 },
                            log: { opacity: 1 },
                            resolve: { opacity: 1 }
                        }}
                        animate={controls}
                    >
                        <motion.circle
                            cx={node.x} cy={node.y} r="20"
                            fill="white"
                            stroke={colors.coreBg}
                            strokeWidth="3"
                            filter="url(#ai-shadow)"
                            variants={{
                                validate: { stroke: colors.success, transition: { delay: 0.5 + i * 0.2 } },
                                anomaly: i === 1 ? { stroke: colors.error } : { stroke: colors.success },
                                log: i === 1 ? { stroke: colors.warning } : { stroke: colors.success },
                                resolve: { stroke: colors.success, transition: { delay: i * 0.2 } }
                            }}
                            animate={controls}
                        />
                        <motion.circle
                            cx={node.x} cy={node.y} r="10"
                            fill={colors.coreBg}
                            variants={{
                                output: { scale: [1, 1.3, 1], transition: { duration: 0.4, delay: i * 0.15 } },
                                validate: { fill: colors.success },
                                anomaly: i === 1 ? { fill: colors.error } : { fill: colors.success },
                                log: i === 1 ? { fill: colors.warning } : { fill: colors.success },
                                resolve: { fill: colors.success }
                            }}
                            animate={controls}
                        />
                        <text x={node.x + 30} y={node.y + 4} fontSize="10" fill={colors.textSecondary}>
                            {i === 0 ? "Prediction" : "Confidence"}
                        </text>
                    </motion.g>
                ))}

                {/* --- AI CORE --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, scale: 0 },
                        init: { opacity: 1, scale: 1, transition: { delay: 0.8, type: "spring" } },
                        dataInput: { opacity: 1 },
                        process: { opacity: 1 },
                        output: { opacity: 1 },
                        validate: { opacity: 1 },
                        anomaly: { opacity: 1 },
                        log: { opacity: 1 },
                        resolve: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    {/* Glow Ring */}
                    <motion.circle
                        cx={corePos.x} cy={corePos.y} r="55"
                        fill="none"
                        stroke={colors.coreGlow}
                        strokeWidth="10"
                        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    {/* Core Circle */}
                    <circle cx={corePos.x} cy={corePos.y} r="45" fill="url(#core-gradient)" filter="url(#ai-glow)" />
                    <text x={corePos.x} y={corePos.y + 5} textAnchor="middle" fontSize="18" fontWeight="700" fill="white">AI</text>
                    <text x={corePos.x} y={corePos.y + 70} textAnchor="middle" fontSize="11" fill={colors.textPrimary}>Model Core</text>
                </motion.g>

                {/* --- QA ENGINEER --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: 30 },
                        init: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                        dataInput: { opacity: 1 },
                        process: { opacity: 1 },
                        output: { opacity: 1 },
                        validate: { opacity: 1 },
                        anomaly: { opacity: 1 },
                        log: { opacity: 1 },
                        resolve: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="50" y="450" width="700" height="12" rx="4" fill="#ddd6fe" />
                    <ellipse cx="400" cy="440" rx="30" ry="10" fill="#8b5cf6" />
                    <circle cx="400" cy="420" r="18" fill="#a78bfa" />
                </motion.g>

                {/* --- VALIDATION PANEL --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: 20 },
                        init: { opacity: 0 },
                        dataInput: { opacity: 0 },
                        process: { opacity: 0 },
                        output: { opacity: 0 },
                        validate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                        anomaly: { opacity: 1 },
                        log: { opacity: 1 },
                        resolve: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="620" y="380" width="150" height="80" rx="8" fill="white" filter="url(#ai-shadow)" />
                    <text x="695" y="405" textAnchor="middle" fontSize="11" fontWeight="700" fill={colors.textPrimary}>Validation</text>

                    <rect x="640" y="415" width="100" height="8" rx="4" fill="#e2e8f0" />
                    <motion.rect x="640" y="415" width="90" height="8" rx="4" fill={colors.success}
                        variants={{ validate: { width: [0, 90], transition: { duration: 0.5 } } }}
                        animate={controls}
                    />
                    <text x="640" y="435" fontSize="9" fill={colors.textSecondary}>Accuracy: 94%</text>

                    <rect x="640" y="445" width="100" height="8" rx="4" fill="#e2e8f0" />
                    <motion.rect x="640" y="445" width="95" height="8" rx="4" fill={colors.accent}
                        variants={{ validate: { width: [0, 95], transition: { duration: 0.5, delay: 0.2 } } }}
                        animate={controls}
                    />
                    <text x="640" y="465" fontSize="9" fill={colors.textSecondary}>Fairness: 97%</text>
                </motion.g>

                {/* --- ANOMALY ALERT --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, scale: 0 },
                        init: { opacity: 0 },
                        dataInput: { opacity: 0 },
                        process: { opacity: 0 },
                        output: { opacity: 0 },
                        validate: { opacity: 0 },
                        anomaly: { opacity: 1, scale: 1, transition: { type: "spring" } },
                        log: { opacity: 1 },
                        resolve: { opacity: 0, scale: 0 }
                    }}
                    animate={controls}
                >
                    <rect x="440" y="350" width="130" height="35" rx="6" fill={colors.error} />
                    <text x="505" y="372" textAnchor="middle" fontSize="11" fontWeight="600" fill="white">⚠ Bias Detected</text>
                </motion.g>

                {/* --- SUCCESS BADGE --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 0 },
                        dataInput: { opacity: 0 },
                        process: { opacity: 0 },
                        output: { opacity: 0 },
                        validate: { opacity: 0 },
                        anomaly: { opacity: 0 },
                        log: { opacity: 0 },
                        resolve: { opacity: 1, transition: { delay: 0.5 } }
                    }}
                    animate={controls}
                >
                    <rect x="300" y="30" width="200" height="40" rx="8" fill={colors.success} filter="url(#ai-shadow)" />
                    <text x="400" y="55" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">✓ Model Validated</text>
                </motion.g>

            </svg>
        </div>
    );
};

export default AITestingAnimation;
