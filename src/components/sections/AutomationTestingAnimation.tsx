"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const AutomationTestingAnimation = () => {
    const controls = useAnimation();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Corporate Color Palette
    const colors = {
        bg: "#f5f3ff",
        primary: "#7c3aed",
        secondary: "#6366f1",
        accent: "#4f46e5",
        success: "#22c55e",
        error: "#ef4444",
        warning: "#f59e0b",
        textPrimary: "#1e293b",
        textSecondary: "#64748b",
        codeBg: "#1e1b4b",
    };

    // Test cases
    const testCases = [
        { id: 1, name: "Login Flow", status: "pass" },
        { id: 2, name: "User Profile", status: "pass" },
        { id: 3, name: "Checkout", status: "fail" },
        { id: 4, name: "Payment", status: "pass" },
        { id: 5, name: "Dashboard", status: "pass" },
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
                await controls.start("script");
                await controls.start("run");
                await controls.start("validate");
                await controls.start("fail");
                await controls.start("log");
                await controls.start("retest");
                await controls.start("complete");
                await new Promise(resolve => setTimeout(resolve, 3000));
            }
        };
        sequence();

        return () => { isMounted = false; };
    }, [controls, mounted]);

    if (!mounted) return <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 shadow-xl border border-purple-200" />;

    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 overflow-hidden relative shadow-xl border border-purple-200">
            <svg viewBox="0 0 800 500" className="w-full h-full relative z-10">
                <defs>
                    <filter id="auto-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <linearGradient id="purple-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#7c3aed" />
                        <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                </defs>

                {/* --- CODE EDITOR --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, x: -30 },
                        init: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                        script: { opacity: 1 },
                        run: { opacity: 1 },
                        validate: { opacity: 1 },
                        fail: { opacity: 1 },
                        log: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="50" y="50" width="300" height="280" rx="10" fill={colors.codeBg} filter="url(#auto-shadow)" />

                    {/* Editor Header */}
                    <rect x="50" y="50" width="300" height="30" rx="10" fill="#312e81" />
                    <rect x="50" y="65" width="300" height="15" fill="#312e81" />
                    <circle cx="70" cy="65" r="5" fill="#ef4444" />
                    <circle cx="88" cy="65" r="5" fill="#f59e0b" />
                    <circle cx="106" cy="65" r="5" fill="#22c55e" />
                    <text x="200" y="70" textAnchor="middle" fontSize="10" fill="white" opacity="0.7">test_automation.js</text>

                    {/* Code Lines */}
                    {[
                        { text: "describe('Login Tests', () => {", color: "#c084fc" },
                        { text: "  it('should login', () => {", color: "#60a5fa" },
                        { text: "    cy.visit('/login');", color: "#4ade80" },
                        { text: "    cy.get('#email').type(..);", color: "#4ade80" },
                        { text: "    cy.get('#submit').click();", color: "#4ade80" },
                        { text: "    expect(result).toBe(true);", color: "#fbbf24" },
                        { text: "  });", color: "#60a5fa" },
                        { text: "});", color: "#c084fc" },
                    ].map((line, i) => (
                        <motion.text
                            key={`code-${i}`}
                            x="65"
                            y={105 + i * 25}
                            fontSize="11"
                            fontFamily="monospace"
                            fill={line.color}
                            variants={{
                                reset: { opacity: 0 },
                                init: { opacity: 0.4 },
                                script: { opacity: [0.4, 1, 0.4], transition: { duration: 0.2, delay: i * 0.1 } },
                                run: { opacity: 0.6 },
                                validate: { opacity: 0.6 },
                                fail: { opacity: 0.6 },
                                log: { opacity: 0.6 },
                                retest: { opacity: 0.6 },
                                complete: { opacity: 0.6 }
                            }}
                            animate={controls}
                        >
                            {line.text}
                        </motion.text>
                    ))}

                    {/* Play Button */}
                    <motion.g
                        variants={{
                            script: { opacity: [1, 0.5, 1], transition: { duration: 0.5, delay: 0.8 } }
                        }}
                        animate={controls}
                    >
                        <circle cx="320" cy="310" r="15" fill={colors.success} />
                        <polygon points="315,303 315,317 328,310" fill="white" />
                    </motion.g>
                </motion.g>

                {/* --- TEST RUNNER PANEL --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, x: 30 },
                        init: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
                        script: { opacity: 1 },
                        run: { opacity: 1 },
                        validate: { opacity: 1 },
                        fail: { opacity: 1 },
                        log: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="380" y="50" width="380" height="280" rx="10" fill="white" filter="url(#auto-shadow)" />

                    {/* Panel Header */}
                    <rect x="380" y="50" width="380" height="35" rx="10" fill="url(#purple-gradient)" />
                    <rect x="380" y="70" width="380" height="15" fill="url(#purple-gradient)" />
                    <text x="570" y="73" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">🚀 Test Runner</text>

                    {/* Test Cases */}
                    {testCases.map((test, i) => (
                        <motion.g key={test.id}
                            variants={{
                                reset: { opacity: 0 },
                                init: { opacity: 0.3 },
                                run: { opacity: [0.3, 1], transition: { delay: i * 0.15 } },
                                validate: { opacity: 1 },
                                fail: { opacity: 1 },
                                log: { opacity: 1 },
                                retest: { opacity: 1 },
                                complete: { opacity: 1 }
                            }}
                            animate={controls}
                        >
                            <rect x="395" y={100 + i * 40} width="350" height="32" rx="5" fill={i % 2 === 0 ? "#f5f3ff" : "#faf5ff"} />
                            <text x="420" y={120 + i * 40} fontSize="11" fontWeight="500" fill={colors.textPrimary}>{test.name}</text>

                            {/* Status Indicator */}
                            <motion.circle
                                cx="720" cy={116 + i * 40} r="10"
                                fill={colors.textSecondary}
                                variants={{
                                    validate: test.status === "pass" ? { fill: colors.success, transition: { delay: 0.5 + i * 0.1 } } : {},
                                    fail: test.status === "fail" ? { fill: colors.error, transition: { type: "spring" } } : { fill: colors.success },
                                    log: test.status === "fail" ? { fill: colors.warning } : { fill: colors.success },
                                    retest: { fill: colors.warning, transition: { delay: i * 0.05 } },
                                    complete: { fill: colors.success }
                                }}
                                animate={controls}
                            />
                            <motion.text
                                x="720" y={120 + i * 40}
                                textAnchor="middle"
                                fontSize="10"
                                fill="white"
                                variants={{
                                    validate: { opacity: 1, transition: { delay: 0.6 + i * 0.1 } }
                                }}
                                initial={{ opacity: 0 }}
                                animate={controls}
                            >
                                {test.status === "pass" ? "✓" : "✗"}
                            </motion.text>

                            {/* Progress bar for each test */}
                            <motion.rect
                                x="520" y={110 + i * 40}
                                width="0" height="12" rx="3"
                                fill={test.status === "pass" ? colors.success : colors.error}
                                opacity="0.3"
                                variants={{
                                    run: { width: [0, 80], transition: { duration: 0.3, delay: i * 0.15 } }
                                }}
                                animate={controls}
                            />
                        </motion.g>
                    ))}

                    {/* Summary */}
                    <motion.g
                        variants={{
                            validate: { opacity: 1 },
                            fail: { opacity: 1 },
                            log: { opacity: 1 },
                            retest: { opacity: 1 },
                            complete: { opacity: 1 }
                        }}
                        initial={{ opacity: 0 }}
                        animate={controls}
                    >
                        <text x="400" y="315" fontSize="10" fill={colors.textSecondary}>Tests: 5 | Passed: 4 | Failed: 1</text>
                    </motion.g>
                </motion.g>

                {/* --- CI/CD PIPELINE --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: 30 },
                        init: { opacity: 1, y: 0, transition: { delay: 0.4 } },
                        script: { opacity: 1 },
                        run: { opacity: 1 },
                        validate: { opacity: 1 },
                        fail: { opacity: 1 },
                        log: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="50" y="360" width="710" height="90" rx="10" fill="white" filter="url(#auto-shadow)" />
                    <text x="70" y="385" fontSize="12" fontWeight="700" fill={colors.textPrimary}>CI/CD Pipeline</text>

                    {/* Pipeline Stages */}
                    {["Build", "Test", "Deploy"].map((stage, i) => (
                        <motion.g key={stage}>
                            <motion.rect
                                x={90 + i * 240}
                                y="400"
                                width="180"
                                height="35"
                                rx="6"
                                fill={colors.primary}
                                opacity="0.2"
                                variants={{
                                    run: { opacity: [0.2, 0.8, 0.4], transition: { delay: i * 0.5, duration: 0.5 } },
                                    complete: i < 2 ? { opacity: 0.8 } : { opacity: [0.4, 0.8] }
                                }}
                                animate={controls}
                            />
                            <text x={180 + i * 240} y={422} textAnchor="middle" fontSize="11" fontWeight="600" fill={colors.primary}>{stage}</text>

                            {/* Arrow between stages */}
                            {i < 2 && (
                                <motion.path
                                    d={`M ${275 + i * 240} 418 L ${290 + i * 240} 418`}
                                    stroke={colors.primary}
                                    strokeWidth="2"
                                    fill="none"
                                    markerEnd="url(#arrowhead)"
                                    variants={{
                                        run: { opacity: [0, 1], transition: { delay: 0.3 + i * 0.5 } }
                                    }}
                                    initial={{ opacity: 0 }}
                                    animate={controls}
                                />
                            )}
                        </motion.g>
                    ))}
                </motion.g>

                {/* --- QA ENGINEER --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: 30 },
                        init: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
                        script: { opacity: 1 },
                        run: { opacity: 1 },
                        validate: { opacity: 1 },
                        fail: { opacity: 1 },
                        log: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="50" y="470" width="200" height="12" rx="4" fill="#ddd6fe" />
                    <ellipse cx="150" cy="462" rx="25" ry="8" fill="#7c3aed" />
                    <circle cx="150" cy="445" r="15" fill="#8b5cf6" />
                </motion.g>

                {/* --- FAILURE ALERT --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, scale: 0 },
                        init: { opacity: 0 },
                        script: { opacity: 0 },
                        run: { opacity: 0 },
                        validate: { opacity: 0 },
                        fail: { opacity: 1, scale: 1, transition: { type: "spring" } },
                        log: { opacity: 1 },
                        retest: { opacity: 0.5 },
                        complete: { opacity: 0, scale: 0 }
                    }}
                    animate={controls}
                >
                    <rect x="450" y="340" width="160" height="35" rx="8" fill={colors.error} />
                    <text x="530" y="362" textAnchor="middle" fontSize="11" fontWeight="600" fill="white">⚠ Checkout Failed</text>
                </motion.g>

                {/* --- SUCCESS BADGE --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 0 },
                        script: { opacity: 0 },
                        run: { opacity: 0 },
                        validate: { opacity: 0 },
                        fail: { opacity: 0 },
                        log: { opacity: 0 },
                        retest: { opacity: 0 },
                        complete: { opacity: 1, transition: { delay: 0.5 } }
                    }}
                    animate={controls}
                >
                    <rect x="500" y="340" width="240" height="50" rx="10" fill={colors.success} filter="url(#auto-shadow)" />
                    <text x="620" y="370" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">✓ All Tests Passing</text>
                </motion.g>

            </svg>
        </div>
    );
};

export default AutomationTestingAnimation;
