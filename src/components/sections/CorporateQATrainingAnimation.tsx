"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const CorporateQATrainingAnimation = () => {
    const controls = useAnimation();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Corporate Color Palette (Blue/Purple for Training)
    const colors = {
        bg: "#eff6ff",
        primary: "#2563eb",
        secondary: "#3b82f6",
        accent: "#60a5fa",
        purple: "#8b5cf6",
        success: "#10b981",
        error: "#ef4444",
        warning: "#f59e0b",
        textPrimary: "#1e3a8a",
        textSecondary: "#64748b",
        instructor: "#1d4ed8",
        trainee: "#6366f1",
        module: "#0ea5e9",
    };

    // Trainee positions (arranged in classroom)
    const trainees = [
        { id: "t1", x: 140, y: 320, label: "Trainee 1" },
        { id: "t2", x: 260, y: 320, label: "Trainee 2" },
        { id: "t3", x: 380, y: 320, label: "Trainee 3" },
        { id: "t4", x: 500, y: 320, label: "Trainee 4" },
        { id: "t5", x: 200, y: 400, label: "Trainee 5" },
        { id: "t6", x: 320, y: 400, label: "Trainee 6" },
        { id: "t7", x: 440, y: 400, label: "Trainee 7" },
    ];

    // Training modules
    const modules = [
        { id: "m1", x: 180, y: 130, label: "Manual Testing", color: colors.primary },
        { id: "m2", x: 320, y: 130, label: "Automation", color: colors.purple },
        { id: "m3", x: 460, y: 130, label: "Performance", color: colors.success },
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
                await controls.start("instructor");
                await controls.start("trainees");
                await controls.start("modules");
                await controls.start("practice");
                await controls.start("collaborate");
                await controls.start("assess");
                await controls.start("certify");
                await new Promise(resolve => setTimeout(resolve, 3000));
            }
        };
        sequence();

        return () => { isMounted = false; };
    }, [controls, mounted]);

    if (!mounted) return <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 shadow-xl border border-blue-200" />;

    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden relative shadow-xl border border-blue-200">
            <svg viewBox="0 0 640 480" className="w-full h-full relative z-10">
                <defs>
                    <filter id="training-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <filter id="training-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <linearGradient id="board-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1e3a8a" />
                        <stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                </defs>

                {/* --- CLASSROOM BACKGROUND --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 1, transition: { duration: 0.5 } },
                        instructor: { opacity: 1 },
                        trainees: { opacity: 1 },
                        modules: { opacity: 1 },
                        practice: { opacity: 1 },
                        collaborate: { opacity: 1 },
                        assess: { opacity: 1 },
                        certify: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    {/* Whiteboard/Screen */}
                    <rect x="100" y="60" width="440" height="120" rx="8" fill="url(#board-gradient)" filter="url(#training-shadow)" />
                    <rect x="110" y="70" width="420" height="100" rx="4" fill="#0f172a" />

                    {/* Floor */}
                    <rect x="50" y="440" width="540" height="15" rx="4" fill="#cbd5e1" />
                </motion.g>

                {/* --- INSTRUCTOR --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: 30 },
                        init: { opacity: 0 },
                        instructor: { opacity: 1, y: 0, transition: { duration: 0.5, type: "spring" } },
                        trainees: { opacity: 1 },
                        modules: { opacity: 1 },
                        practice: { opacity: 1 },
                        collaborate: { opacity: 1 },
                        assess: { opacity: 1 },
                        certify: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    {/* Podium */}
                    <rect x="280" y="200" width="80" height="50" rx="6" fill={colors.primary} filter="url(#training-shadow)" />
                    <rect x="290" y="210" width="60" height="30" rx="4" fill="#1e40af" />

                    {/* Instructor Body */}
                    <ellipse cx="320" cy="195" rx="25" ry="8" fill={colors.instructor} />
                    <circle cx="320" cy="175" r="18" fill={colors.secondary} />

                    {/* Instructor pointer animation */}
                    <motion.line
                        x1="340"
                        y1="180"
                        x2="380"
                        y2="140"
                        stroke={colors.accent}
                        strokeWidth="3"
                        strokeLinecap="round"
                        variants={{
                            modules: { x2: [380, 250, 380], transition: { duration: 2, repeat: 1 } }
                        }}
                        animate={controls}
                    />
                </motion.g>

                {/* --- TRAINING MODULES ON SCREEN --- */}
                {modules.map((module, i) => (
                    <motion.g
                        key={module.id}
                        initial="reset"
                        variants={{
                            reset: { opacity: 0, scale: 0 },
                            init: { opacity: 0 },
                            instructor: { opacity: 0 },
                            trainees: { opacity: 0 },
                            modules: { opacity: 1, scale: 1, transition: { delay: i * 0.2, type: "spring" } },
                            practice: { opacity: 1 },
                            collaborate: { opacity: 1 },
                            assess: { opacity: 1 },
                            certify: { opacity: 1 }
                        }}
                        animate={controls}
                    >
                        <rect
                            x={module.x - 50}
                            y={module.y - 30}
                            width="100"
                            height="50"
                            rx="6"
                            fill={module.color}
                            filter="url(#training-shadow)"
                        />
                        <text x={module.x} y={module.y - 5} textAnchor="middle" fontSize="10" fontWeight="600" fill="white">
                            {module.label}
                        </text>

                        {/* Progress bar */}
                        <rect x={module.x - 40} y={module.y + 8} width="80" height="6" rx="3" fill="rgba(255,255,255,0.3)" />
                        <motion.rect
                            x={module.x - 40}
                            y={module.y + 8}
                            height="6"
                            rx="3"
                            fill="rgba(255,255,255,0.9)"
                            variants={{
                                practice: { width: 80, transition: { duration: 1, delay: i * 0.3 } }
                            }}
                            initial={{ width: 0 }}
                            animate={controls}
                        />
                    </motion.g>
                ))}

                {/* --- TRAINEES --- */}
                {trainees.map((trainee, i) => (
                    <motion.g
                        key={trainee.id}
                        initial="reset"
                        variants={{
                            reset: { opacity: 0, y: 20 },
                            init: { opacity: 0 },
                            instructor: { opacity: 0 },
                            trainees: { opacity: 1, y: 0, transition: { delay: i * 0.08, type: "spring" } },
                            modules: { opacity: 1 },
                            practice: { opacity: 1 },
                            collaborate: { opacity: 1 },
                            assess: { opacity: 1 },
                            certify: { opacity: 1 }
                        }}
                        animate={controls}
                    >
                        {/* Desk */}
                        <rect
                            x={trainee.x - 30}
                            y={trainee.y + 15}
                            width="60"
                            height="20"
                            rx="4"
                            fill="#e2e8f0"
                            filter="url(#training-shadow)"
                        />

                        {/* Laptop */}
                        <motion.rect
                            x={trainee.x - 20}
                            y={trainee.y + 5}
                            width="40"
                            height="25"
                            rx="3"
                            fill="#334155"
                            variants={{
                                practice: { fill: colors.module, transition: { delay: i * 0.1 } },
                                assess: { fill: colors.warning, transition: { delay: i * 0.1 } },
                                certify: { fill: colors.success, transition: { delay: i * 0.1 } }
                            }}
                            animate={controls}
                        />

                        {/* Laptop screen glow */}
                        <motion.rect
                            x={trainee.x - 17}
                            y={trainee.y + 8}
                            width="34"
                            height="18"
                            rx="2"
                            fill="#0ea5e9"
                            opacity="0.3"
                            variants={{
                                practice: { opacity: [0.3, 0.7, 0.3], transition: { duration: 1, repeat: 2, delay: i * 0.1 } }
                            }}
                            animate={controls}
                        />

                        {/* Trainee Body */}
                        <ellipse cx={trainee.x} cy={trainee.y} rx="15" ry="5" fill={colors.trainee} />
                        <circle cx={trainee.x} cy={trainee.y - 12} r="10" fill="#818cf8" />
                    </motion.g>
                ))}

                {/* --- COLLABORATION BUBBLES --- */}
                {[trainees[1], trainees[2], trainees[5]].map((trainee, i) => (
                    <motion.g
                        key={`bubble-${i}`}
                        initial="reset"
                        variants={{
                            reset: { opacity: 0, scale: 0 },
                            init: { opacity: 0 },
                            instructor: { opacity: 0 },
                            trainees: { opacity: 0 },
                            modules: { opacity: 0 },
                            practice: { opacity: 0 },
                            collaborate: { opacity: 1, scale: 1, transition: { delay: i * 0.15, type: "spring" } },
                            assess: { opacity: 0.3 },
                            certify: { opacity: 0 }
                        }}
                        animate={controls}
                    >
                        <ellipse
                            cx={trainee.x + 25}
                            cy={trainee.y - 30}
                            rx="18"
                            ry="12"
                            fill="white"
                            stroke={colors.primary}
                            strokeWidth="2"
                        />
                        <text x={trainee.x + 25} y={trainee.y - 27} textAnchor="middle" fontSize="12">💬</text>
                    </motion.g>
                ))}

                {/* --- ASSESSMENT PANEL --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, x: 30 },
                        init: { opacity: 0 },
                        instructor: { opacity: 0 },
                        trainees: { opacity: 0 },
                        modules: { opacity: 0 },
                        practice: { opacity: 0 },
                        collaborate: { opacity: 0 },
                        assess: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                        certify: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="520" y="280" width="100" height="120" rx="8" fill="white" filter="url(#training-shadow)" />
                    <text x="570" y="305" textAnchor="middle" fontSize="10" fontWeight="700" fill={colors.textPrimary}>Assessment</text>

                    {/* Score bars */}
                    {[
                        { y: 320, w: 70, label: "Theory", color: colors.primary },
                        { y: 345, w: 85, label: "Practice", color: colors.purple },
                        { y: 370, w: 75, label: "Project", color: colors.success },
                    ].map((bar, i) => (
                        <React.Fragment key={`bar-${i}`}>
                            <text x="530" y={bar.y + 4} fontSize="8" fill={colors.textSecondary}>{bar.label}</text>
                            <rect x="530" y={bar.y + 8} width="80" height="8" rx="4" fill="#e2e8f0" />
                            <motion.rect
                                x="530"
                                y={bar.y + 8}
                                height="8"
                                rx="4"
                                fill={bar.color}
                                variants={{
                                    assess: { width: [0, bar.w], transition: { duration: 0.5, delay: 0.2 + i * 0.1 } }
                                }}
                                animate={controls}
                            />
                        </React.Fragment>
                    ))}
                </motion.g>

                {/* --- CERTIFICATION BADGES --- */}
                {trainees.slice(0, 5).map((trainee, i) => (
                    <motion.g
                        key={`cert-${i}`}
                        initial="reset"
                        variants={{
                            reset: { opacity: 0, scale: 0 },
                            init: { opacity: 0 },
                            instructor: { opacity: 0 },
                            trainees: { opacity: 0 },
                            modules: { opacity: 0 },
                            practice: { opacity: 0 },
                            collaborate: { opacity: 0 },
                            assess: { opacity: 0 },
                            certify: { opacity: 1, scale: 1, transition: { delay: i * 0.12, type: "spring" } }
                        }}
                        animate={controls}
                    >
                        <circle
                            cx={trainee.x}
                            cy={trainee.y - 35}
                            r="12"
                            fill={colors.success}
                            filter="url(#training-glow)"
                        />
                        <text
                            x={trainee.x}
                            y={trainee.y - 31}
                            textAnchor="middle"
                            fontSize="12"
                            fill="white"
                        >
                            ✓
                        </text>
                    </motion.g>
                ))}

                {/* --- SUCCESS BANNER --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 0 },
                        instructor: { opacity: 0 },
                        trainees: { opacity: 0 },
                        modules: { opacity: 0 },
                        practice: { opacity: 0 },
                        collaborate: { opacity: 0 },
                        assess: { opacity: 0 },
                        certify: { opacity: 1, transition: { delay: 0.8 } }
                    }}
                    animate={controls}
                >
                    <rect x="170" y="15" width="300" height="35" rx="8" fill={colors.success} filter="url(#training-shadow)" />
                    <text x="320" y="38" textAnchor="middle" fontSize="13" fontWeight="700" fill="white">🎓 Training Completed Successfully!</text>
                </motion.g>

                {/* --- LIVE INDICATOR --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 1, transition: { delay: 0.5 } },
                        instructor: { opacity: 1 },
                        trainees: { opacity: 1 },
                        modules: { opacity: 1 },
                        practice: { opacity: 1 },
                        collaborate: { opacity: 1 },
                        assess: { opacity: 1 },
                        certify: { opacity: 0 }
                    }}
                    animate={controls}
                >
                    <rect x="555" y="65" width="70" height="22" rx="11" fill={colors.error} />
                    <motion.circle
                        cx="570"
                        cy="76"
                        r="5"
                        fill="white"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    />
                    <text x="595" y="80" textAnchor="middle" fontSize="10" fontWeight="600" fill="white">LIVE</text>
                </motion.g>

            </svg>
        </div>
    );
};

export default CorporateQATrainingAnimation;
