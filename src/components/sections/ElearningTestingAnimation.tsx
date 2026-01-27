"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const ElearningTestingAnimation = () => {
    const controls = useAnimation();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Corporate Color Palette (E-Learning - Indigo/Purple/Blue for education)
    const colors = {
        bg: "#eef2ff",
        primary: "#6366f1",
        secondary: "#8b5cf6",
        accent: "#a78bfa",
        course: "#3b82f6",
        quiz: "#10b981",
        video: "#ef4444",
        success: "#10b981",
        error: "#ef4444",
        progress: "#f59e0b",
        textPrimary: "#312e81",
        textSecondary: "#64748b",
        accessibility: "#0891b2",
    };

    // Course modules
    const modules = [
        { id: "m1", x: 100, y: 140, label: "Intro", progress: 100 },
        { id: "m2", x: 200, y: 140, label: "Basics", progress: 75 },
        { id: "m3", x: 300, y: 140, label: "Advanced", progress: 30 },
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
                await controls.start("engineer");
                await controls.start("modules");
                await controls.start("video");
                await controls.start("quiz");
                await controls.start("progress");
                await controls.start("accessibility");
                await controls.start("defect");
                await controls.start("complete");
                await new Promise(resolve => setTimeout(resolve, 3000));
            }
        };
        sequence();

        return () => { isMounted = false; };
    }, [controls, mounted]);

    if (!mounted) return <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-100 shadow-xl border border-indigo-200" />;

    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-100 overflow-hidden relative shadow-xl border border-indigo-200">
            <svg viewBox="0 0 640 480" className="w-full h-full relative z-10">
                <defs>
                    <filter id="learn-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <filter id="learn-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <linearGradient id="learn-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor={colors.primary} />
                        <stop offset="100%" stopColor={colors.secondary} />
                    </linearGradient>
                </defs>

                {/* --- LMS DASHBOARD HEADER --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: -20 },
                        init: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                        engineer: { opacity: 1 },
                        modules: { opacity: 1 },
                        video: { opacity: 1 },
                        quiz: { opacity: 1 },
                        progress: { opacity: 1 },
                        accessibility: { opacity: 1 },
                        defect: { opacity: 1 },
                        complete: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    {/* Header bar */}
                    <rect x="50" y="30" width="540" height="50" rx="8" fill="white" filter="url(#learn-shadow)" />
                    <rect x="60" y="42" width="100" height="26" rx="6" fill="url(#learn-gradient)" />
                    <text x="110" y="59" textAnchor="middle" fontSize="10" fontWeight="700" fill="white">🎓 LMS Portal</text>

                    {/* Navigation tabs */}
                    <text x="200" y="60" fontSize="10" fill={colors.textSecondary}>Dashboard</text>
                    <text x="280" y="60" fontSize="10" fontWeight="600" fill={colors.primary}>Courses</text>
                    <text x="355" y="60" fontSize="10" fill={colors.textSecondary}>Progress</text>

                    {/* User avatar */}
                    <circle cx="550" cy="55" r="15" fill={colors.accent} />
                    <text x="550" y="60" textAnchor="middle" fontSize="12">👤</text>
                </motion.g>

                {/* --- COURSE MODULES --- */}
                {modules.map((module, i) => (
                    <motion.g
                        key={module.id}
                        initial="reset"
                        variants={{
                            reset: { opacity: 0, y: 30 },
                            init: { opacity: 0 },
                            engineer: { opacity: 0 },
                            modules: { opacity: 1, y: 0, transition: { delay: i * 0.15, type: "spring" } },
                            video: { opacity: 1 },
                            quiz: { opacity: 1 },
                            progress: { opacity: 1 },
                            accessibility: { opacity: 1 },
                            defect: i === 2 ? { opacity: 1 } : { opacity: 1 },
                            complete: { opacity: 1 }
                        }}
                        animate={controls}
                    >
                        <rect
                            x={module.x - 40}
                            y={module.y - 35}
                            width="80"
                            height="90"
                            rx="10"
                            fill="white"
                            stroke={colors.primary}
                            strokeWidth="2"
                            filter="url(#learn-shadow)"
                        />
                        <text x={module.x} y={module.y - 10} textAnchor="middle" fontSize="22">📚</text>
                        <text x={module.x} y={module.y + 15} textAnchor="middle" fontSize="10" fontWeight="600" fill={colors.textPrimary}>{module.label}</text>

                        {/* Progress bar */}
                        <rect x={module.x - 30} y={module.y + 30} width="60" height="6" rx="3" fill="#e2e8f0" />
                        <motion.rect
                            x={module.x - 30}
                            y={module.y + 30}
                            height="6"
                            rx="3"
                            fill={module.progress === 100 ? colors.success : colors.progress}
                            variants={{
                                modules: { width: [0, module.progress * 0.6], transition: { duration: 0.5, delay: i * 0.2 } }
                            }}
                            animate={controls}
                        />
                        <text x={module.x} y={module.y + 48} textAnchor="middle" fontSize="8" fill={colors.textSecondary}>{module.progress}%</text>
                    </motion.g>
                ))}

                {/* --- VIDEO PLAYER --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, scale: 0.9 },
                        init: { opacity: 0 },
                        engineer: { opacity: 0 },
                        modules: { opacity: 0 },
                        video: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
                        quiz: { opacity: 0.5 },
                        progress: { opacity: 0.3 },
                        accessibility: { opacity: 0.3 },
                        defect: { opacity: 0.3 },
                        complete: { opacity: 0.3 }
                    }}
                    animate={controls}
                >
                    <rect x="400" y="100" width="180" height="110" rx="10" fill="#1e1b4b" filter="url(#learn-shadow)" />
                    <text x="490" y="140" textAnchor="middle" fontSize="10" fill="white" opacity="0.7">Video Lesson</text>

                    {/* Play button */}
                    <motion.circle
                        cx="490"
                        cy="165"
                        r="20"
                        fill={colors.video}
                        variants={{
                            video: {
                                scale: [1, 1.1, 1],
                                transition: { duration: 0.5, repeat: 1 }
                            }
                        }}
                        animate={controls}
                    />
                    <polygon points="485,157 485,173 500,165" fill="white" />

                    {/* Progress bar */}
                    <rect x="410" y="195" width="160" height="4" rx="2" fill="#374151" />
                    <motion.rect
                        x="410"
                        y="195"
                        height="4"
                        rx="2"
                        fill={colors.video}
                        variants={{
                            video: { width: [0, 100], transition: { duration: 1.5 } }
                        }}
                        animate={controls}
                    />
                </motion.g>

                {/* --- QUIZ SECTION --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, x: 30 },
                        init: { opacity: 0 },
                        engineer: { opacity: 0 },
                        modules: { opacity: 0 },
                        video: { opacity: 0 },
                        quiz: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                        progress: { opacity: 1 },
                        accessibility: { opacity: 0.5 },
                        defect: { opacity: 0.5 },
                        complete: { opacity: 0.5 }
                    }}
                    animate={controls}
                >
                    <rect x="400" y="230" width="180" height="100" rx="10" fill="white" filter="url(#learn-shadow)" />
                    <text x="490" y="255" textAnchor="middle" fontSize="11" fontWeight="700" fill={colors.textPrimary}>📝 Quiz</text>

                    {/* Quiz options */}
                    {["A", "B", "C"].map((opt, i) => (
                        <motion.g key={opt}>
                            <rect x="415" y={265 + i * 20} width="150" height="16" rx="4" fill="#f1f5f9" />
                            <text x="425" y={276 + i * 20} fontSize="9" fill={colors.textSecondary}>Option {opt}</text>
                            <motion.circle
                                cx="555"
                                cy={273 + i * 20}
                                r="6"
                                fill={i === 1 ? colors.success : "transparent"}
                                stroke={i === 1 ? colors.success : "#cbd5e1"}
                                strokeWidth="2"
                                variants={{
                                    quiz: i === 1 ? { scale: [0, 1.2, 1], transition: { delay: 0.5 } } : {}
                                }}
                                animate={controls}
                            />
                        </motion.g>
                    ))}
                </motion.g>

                {/* --- PROGRESS TRACKING --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: 20 },
                        init: { opacity: 0 },
                        engineer: { opacity: 0 },
                        modules: { opacity: 0 },
                        video: { opacity: 0 },
                        quiz: { opacity: 0 },
                        progress: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                        accessibility: { opacity: 1 },
                        defect: { opacity: 1 },
                        complete: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="50" y="250" width="150" height="90" rx="10" fill="white" filter="url(#learn-shadow)" />
                    <text x="125" y="275" textAnchor="middle" fontSize="10" fontWeight="700" fill={colors.textPrimary}>📊 Progress</text>

                    {/* Circular progress */}
                    <circle cx="125" cy="310" r="25" fill="none" stroke="#e2e8f0" strokeWidth="6" />
                    <motion.circle
                        cx="125"
                        cy="310"
                        r="25"
                        fill="none"
                        stroke={colors.success}
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray="157"
                        transform="rotate(-90 125 310)"
                        variants={{
                            progress: {
                                strokeDashoffset: [157, 47],
                                transition: { duration: 1 }
                            }
                        }}
                        animate={controls}
                    />
                    <text x="125" y="315" textAnchor="middle" fontSize="12" fontWeight="700" fill={colors.success}>70%</text>
                </motion.g>

                {/* --- ACCESSIBILITY CHECK --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, scale: 0 },
                        init: { opacity: 0 },
                        engineer: { opacity: 0 },
                        modules: { opacity: 0 },
                        video: { opacity: 0 },
                        quiz: { opacity: 0 },
                        progress: { opacity: 0 },
                        accessibility: { opacity: 1, scale: 1, transition: { type: "spring" } },
                        defect: { opacity: 1 },
                        complete: { opacity: 0.5 }
                    }}
                    animate={controls}
                >
                    <rect x="220" y="250" width="150" height="50" rx="8" fill={colors.accessibility} filter="url(#learn-shadow)" />
                    <text x="295" y="280" textAnchor="middle" fontSize="10" fontWeight="600" fill="white">♿ WCAG 2.1 AA ✓</text>
                </motion.g>

                {/* --- DEFECT INDICATOR --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, scale: 0 },
                        init: { opacity: 0 },
                        engineer: { opacity: 0 },
                        modules: { opacity: 0 },
                        video: { opacity: 0 },
                        quiz: { opacity: 0 },
                        progress: { opacity: 0 },
                        accessibility: { opacity: 0 },
                        defect: { opacity: 1, scale: 1, transition: { type: "spring" } },
                        complete: { opacity: 0, scale: 0 }
                    }}
                    animate={controls}
                >
                    <rect x="220" y="310" width="150" height="30" rx="6" fill={colors.error} />
                    <text x="295" y="330" textAnchor="middle" fontSize="9" fontWeight="600" fill="white">⚠️ Quiz Submit Issue</text>
                </motion.g>

                {/* --- RETEST SUCCESS --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, scale: 0 },
                        init: { opacity: 0 },
                        engineer: { opacity: 0 },
                        modules: { opacity: 0 },
                        video: { opacity: 0 },
                        quiz: { opacity: 0 },
                        progress: { opacity: 0 },
                        accessibility: { opacity: 0 },
                        defect: { opacity: 0 },
                        complete: { opacity: 1, scale: 1, transition: { type: "spring", delay: 0.3 } }
                    }}
                    animate={controls}
                >
                    <rect x="220" y="310" width="150" height="30" rx="6" fill={colors.success} />
                    <text x="295" y="330" textAnchor="middle" fontSize="9" fontWeight="600" fill="white">✓ Issue Resolved</text>
                </motion.g>

                {/* --- QA ENGINEER --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, x: -30 },
                        init: { opacity: 0 },
                        engineer: { opacity: 1, x: 0, transition: { duration: 0.5, type: "spring" } },
                        modules: { opacity: 1 },
                        video: { opacity: 1 },
                        quiz: { opacity: 1 },
                        progress: { opacity: 1 },
                        accessibility: { opacity: 1 },
                        defect: { opacity: 1 },
                        complete: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    {/* Desk */}
                    <rect x="30" y="420" width="580" height="12" rx="4" fill="#e0e7ff" />
                    {/* Engineer Body */}
                    <ellipse cx="100" cy="410" rx="25" ry="8" fill={colors.primary} />
                    <circle cx="100" cy="390" r="16" fill={colors.secondary} />
                    {/* Laptop */}
                    <rect x="75" y="395" width="50" height="30" rx="4" fill="#334155" />
                    <rect x="78" y="398" width="44" height="24" rx="2" fill={colors.accent} opacity="0.3" />
                </motion.g>

                {/* --- SUCCESS BANNER --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 0 },
                        engineer: { opacity: 0 },
                        modules: { opacity: 0 },
                        video: { opacity: 0 },
                        quiz: { opacity: 0 },
                        progress: { opacity: 0 },
                        accessibility: { opacity: 0 },
                        defect: { opacity: 0 },
                        complete: { opacity: 1, transition: { delay: 0.8 } }
                    }}
                    animate={controls}
                >
                    <rect x="180" y="360" width="280" height="40" rx="10" fill={colors.success} filter="url(#learn-shadow)" />
                    <text x="320" y="386" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">✓ E-Learning Platform Validated</text>
                </motion.g>

                {/* --- LIVE INDICATOR --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 1, transition: { delay: 0.5 } },
                        engineer: { opacity: 1 },
                        modules: { opacity: 1 },
                        video: { opacity: 1 },
                        quiz: { opacity: 1 },
                        progress: { opacity: 1 },
                        accessibility: { opacity: 1 },
                        defect: { opacity: 1 },
                        complete: { opacity: 0 }
                    }}
                    animate={controls}
                >
                    <rect x="500" y="350" width="90" height="24" rx="12" fill={colors.primary} />
                    <motion.circle
                        cx="515"
                        cy="362"
                        r="5"
                        fill="white"
                        animate={{ opacity: [1, 0.4, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    />
                    <text x="555" y="367" textAnchor="middle" fontSize="9" fontWeight="600" fill="white">TESTING</text>
                </motion.g>

            </svg>
        </div>
    );
};

export default ElearningTestingAnimation;
