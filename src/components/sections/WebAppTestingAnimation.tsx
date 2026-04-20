"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const WebAppTestingAnimation = () => {
    const controls = useAnimation();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Corporate Color Palette (Web/Browser theme - Blue/Teal/Gray)
    const colors = {
        bg: "#f0f9ff",
        primary: "#2563eb",
        secondary: "#3b82f6",
        accent: "#06b6d4",
        chrome: "#4285f4",
        firefox: "#ff7139",
        safari: "#0fb5ee",
        edge: "#0078d4",
        success: "#10b981",
        error: "#ef4444",
        textPrimary: "#1e3a8a",
        textSecondary: "#64748b",
    };

    // Browser icons positions
    const browsers = [
        { id: "chrome", x: 320, y: 120, color: colors.chrome, label: "Chrome" },
        { id: "firefox", x: 420, y: 120, color: colors.firefox, label: "Firefox" },
        { id: "safari", x: 520, y: 120, color: colors.safari, label: "Safari" },
        { id: "edge", x: 420, y: 190, color: colors.edge, label: "Edge" },
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
                await controls.start("browsers");
                await controls.start("functional");
                await controls.start("uicheck");
                await controls.start("performance");
                await controls.start("defect");
                await controls.start("retest");
                await controls.start("complete");
                await new Promise(resolve => setTimeout(resolve, 3000));
            }
        };
        sequence();

        return () => { isMounted = false; };
    }, [controls, mounted]);

    if (!mounted) return <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-sky-100 shadow-xl border border-blue-200" />;

    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-sky-100 overflow-hidden relative shadow-xl border border-blue-200">
            <svg viewBox="0 0 640 480" className="w-full h-full relative z-10">
                <defs>
                    <filter id="web-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <filter id="web-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <linearGradient id="web-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor={colors.primary} />
                        <stop offset="100%" stopColor={colors.secondary} />
                    </linearGradient>
                </defs>

                {/* --- MAIN BROWSER WINDOW --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: -20 },
                        init: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                        engineer: { opacity: 1 },
                        browsers: { opacity: 1 },
                        functional: { opacity: 1 },
                        uicheck: { opacity: 1 },
                        performance: { opacity: 1 },
                        defect: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    {/* Browser chrome */}
                    <rect x="50" y="30" width="240" height="200" rx="10" fill="white" filter="url(#web-shadow)" />
                    <rect x="50" y="30" width="240" height="30" rx="10" fill="url(#web-gradient)" />
                    {/* Traffic lights */}
                    <circle cx="70" cy="45" r="6" fill="#ff6b6b" />
                    <circle cx="90" cy="45" r="6" fill="#ffd93d" />
                    <circle cx="110" cy="45" r="6" fill="#6bcb77" />
                    {/* URL bar */}
                    <rect x="130" y="38" width="140" height="16" rx="4" fill="white" opacity="0.9" />
                    <text x="200" y="50" textAnchor="middle" fontSize="8" fill={colors.textSecondary}>🔒 webapp.test</text>

                    {/* Page content mockup */}
                    <rect x="65" y="75" width="80" height="12" rx="2" fill="#e2e8f0" />
                    <rect x="65" y="95" width="200" height="8" rx="2" fill="#f1f5f9" />
                    <rect x="65" y="110" width="180" height="8" rx="2" fill="#f1f5f9" />
                    <rect x="65" y="125" width="200" height="8" rx="2" fill="#f1f5f9" />
                    {/* Button */}
                    <rect x="65" y="145" width="70" height="22" rx="4" fill={colors.primary} />
                    <text x="100" y="160" textAnchor="middle" fontSize="8" fill="white">Submit</text>
                    {/* Form field */}
                    <rect x="150" y="145" width="100" height="22" rx="4" fill="#f1f5f9" stroke="#e2e8f0" />
                    <text x="200" y="159" textAnchor="middle" fontSize="7" fill={colors.textSecondary}>Email input</text>
                </motion.g>

                {/* --- CROSS-BROWSER VIEW --- */}
                {browsers.map((browser, i) => (
                    <motion.g
                        key={browser.id}
                        initial="reset"
                        variants={{
                            reset: { opacity: 0, scale: 0 },
                            init: { opacity: 0 },
                            engineer: { opacity: 0 },
                            browsers: { opacity: 1, scale: 1, transition: { delay: i * 0.15, type: "spring" } },
                            functional: { opacity: 1 },
                            uicheck: { opacity: 1 },
                            performance: { opacity: 1 },
                            defect: i === 2 ? { opacity: 1 } : { opacity: 1 },
                            retest: { opacity: 1 },
                            complete: { opacity: 1 }
                        }}
                        animate={controls}
                    >
                        <circle cx={browser.x} cy={browser.y} r="28" fill="white" filter="url(#web-shadow)" />
                        <circle cx={browser.x} cy={browser.y} r="20" fill={browser.color} />
                        <text x={browser.x} y={browser.y + 4} textAnchor="middle" fontSize="14" fill="white">
                            {browser.id === "chrome" ? "G" : browser.id === "firefox" ? "🦊" : browser.id === "safari" ? "◎" : "E"}
                        </text>
                        <text x={browser.x} y={browser.y + 45} textAnchor="middle" fontSize="9" fontWeight="500" fill={colors.textPrimary}>{browser.label}</text>

                        {/* Check marks appear on browsers */}
                        <motion.circle
                            cx={browser.x + 20}
                            cy={browser.y - 20}
                            r="10"
                            fill={colors.success}
                            variants={{
                                reset: { scale: 0 },
                                browsers: { scale: 0 },
                                functional: { scale: 0 },
                                uicheck: { scale: 1, transition: { delay: i * 0.1 } },
                                performance: { scale: 1 },
                                defect: i === 2 ? { scale: 0 } : { scale: 1 },
                                retest: { scale: 1 },
                                complete: { scale: 1 }
                            }}
                            animate={controls}
                        />
                        <motion.text
                            x={browser.x + 20}
                            y={browser.y - 16}
                            textAnchor="middle"
                            fontSize="10"
                            fill="white"
                            variants={{
                                reset: { opacity: 0 },
                                uicheck: { opacity: 1, transition: { delay: i * 0.1 } },
                                defect: i === 2 ? { opacity: 0 } : { opacity: 1 },
                                retest: { opacity: 1 },
                                complete: { opacity: 1 }
                            }}
                            animate={controls}
                        >
                            ✓
                        </motion.text>
                    </motion.g>
                ))}

                {/* --- FUNCTIONAL FLOW INDICATORS --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 0 },
                        engineer: { opacity: 0 },
                        browsers: { opacity: 0 },
                        functional: { opacity: 1, transition: { duration: 0.5 } },
                        uicheck: { opacity: 0.5 },
                        performance: { opacity: 0.3 },
                        defect: { opacity: 0.3 },
                        retest: { opacity: 0.3 },
                        complete: { opacity: 0.3 }
                    }}
                    animate={controls}
                >
                    {/* Click indicator on button */}
                    <motion.circle
                        cx="100"
                        cy="156"
                        r="15"
                        fill="none"
                        stroke={colors.accent}
                        strokeWidth="2"
                        variants={{
                            functional: {
                                r: [15, 25, 15],
                                opacity: [1, 0, 1],
                                transition: { duration: 1, repeat: 1 }
                            }
                        }}
                        animate={controls}
                    />
                    <text x="170" y="180" fontSize="9" fill={colors.accent}>🖱️ Click Flow Testing</text>
                </motion.g>

                {/* --- PERFORMANCE METER --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, x: 30 },
                        init: { opacity: 0 },
                        engineer: { opacity: 0 },
                        browsers: { opacity: 0 },
                        functional: { opacity: 0 },
                        uicheck: { opacity: 0 },
                        performance: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                        defect: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 0.5 }
                    }}
                    animate={controls}
                >
                    <rect x="320" y="260" width="160" height="80" rx="10" fill="white" filter="url(#web-shadow)" />
                    <text x="400" y="285" textAnchor="middle" fontSize="11" fontWeight="700" fill={colors.textPrimary}>⚡ Performance</text>

                    {/* Speed meter arc */}
                    <path d="M 360 330 A 40 40 0 0 1 440 330" fill="none" stroke="#e2e8f0" strokeWidth="8" strokeLinecap="round" />
                    <motion.path
                        d="M 360 330 A 40 40 0 0 1 440 330"
                        fill="none"
                        stroke={colors.success}
                        strokeWidth="8"
                        strokeLinecap="round"
                        variants={{
                            performance: {
                                pathLength: [0, 0.85],
                                transition: { duration: 1 }
                            }
                        }}
                        animate={controls}
                    />
                    <text x="400" y="325" textAnchor="middle" fontSize="12" fontWeight="700" fill={colors.success}>85ms</text>
                </motion.g>

                {/* --- DEFECT INDICATOR --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, scale: 0 },
                        init: { opacity: 0 },
                        engineer: { opacity: 0 },
                        browsers: { opacity: 0 },
                        functional: { opacity: 0 },
                        uicheck: { opacity: 0 },
                        performance: { opacity: 0 },
                        defect: { opacity: 1, scale: 1, transition: { type: "spring" } },
                        retest: { opacity: 0, scale: 0 }
                    }}
                    animate={controls}
                >
                    <circle cx="520" cy="120" r="12" fill={colors.error} />
                    <text x="520" y="125" textAnchor="middle" fontSize="12" fill="white">!</text>
                    <rect x="490" y="140" width="80" height="24" rx="4" fill={colors.error} />
                    <text x="530" y="156" textAnchor="middle" fontSize="9" fontWeight="600" fill="white">Safari Issue</text>
                </motion.g>

                {/* --- RETEST SUCCESS --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, scale: 0 },
                        init: { opacity: 0 },
                        engineer: { opacity: 0 },
                        browsers: { opacity: 0 },
                        functional: { opacity: 0 },
                        uicheck: { opacity: 0 },
                        performance: { opacity: 0 },
                        defect: { opacity: 0 },
                        retest: { opacity: 1, scale: 1, transition: { type: "spring" } },
                        complete: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <circle cx="520" cy="120" r="12" fill={colors.success} />
                    <text x="520" y="125" textAnchor="middle" fontSize="10" fill="white">✓</text>
                    <rect x="485" y="140" width="90" height="24" rx="4" fill={colors.success} />
                    <text x="530" y="156" textAnchor="middle" fontSize="9" fontWeight="600" fill="white">Fixed & Verified</text>
                </motion.g>

                {/* --- QA ENGINEER --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, x: -30 },
                        init: { opacity: 0 },
                        engineer: { opacity: 1, x: 0, transition: { duration: 0.5, type: "spring" } },
                        browsers: { opacity: 1 },
                        functional: { opacity: 1 },
                        uicheck: { opacity: 1 },
                        performance: { opacity: 1 },
                        defect: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    {/* Desk */}
                    <rect x="30" y="420" width="580" height="12" rx="4" fill="#dbeafe" />
                    {/* Engineer Body */}
                    <ellipse cx="100" cy="410" rx="25" ry="8" fill={colors.primary} />
                    <circle cx="100" cy="390" r="16" fill={colors.secondary} />
                    {/* Laptop */}
                    <rect x="75" y="395" width="50" height="30" rx="4" fill="#334155" />
                    <rect x="78" y="398" width="44" height="24" rx="2" fill={colors.accent} opacity="0.3" />
                </motion.g>

                {/* --- TEST RESULTS PANEL --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: 20 },
                        init: { opacity: 0 },
                        engineer: { opacity: 0 },
                        browsers: { opacity: 0 },
                        functional: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                        uicheck: { opacity: 1 },
                        performance: { opacity: 1 },
                        defect: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="50" y="255" width="140" height="100" rx="8" fill="white" filter="url(#web-shadow)" />
                    <text x="120" y="280" textAnchor="middle" fontSize="10" fontWeight="700" fill={colors.textPrimary}>Test Coverage</text>

                    {[
                        { y: 295, label: "Functional", w: 110, color: colors.primary },
                        { y: 315, label: "UI/UX", w: 100, color: colors.accent },
                        { y: 335, label: "Security", w: 95, color: colors.success },
                    ].map((bar, i) => (
                        <React.Fragment key={`bar-${i}`}>
                            <text x="60" y={bar.y + 4} fontSize="8" fill={colors.textSecondary}>{bar.label}</text>
                            <rect x="60" y={bar.y + 8} width="115" height="6" rx="3" fill="#e2e8f0" />
                            <motion.rect
                                x="60"
                                y={bar.y + 8}
                                height="6"
                                rx="3"
                                fill={bar.color}
                                variants={{
                                    functional: { width: [0, bar.w], transition: { duration: 0.5, delay: i * 0.15 } }
                                }}
                                animate={controls}
                            />
                        </React.Fragment>
                    ))}
                </motion.g>

                {/* --- UI CONSISTENCY BADGE --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 0 },
                        engineer: { opacity: 0 },
                        browsers: { opacity: 0 },
                        functional: { opacity: 0 },
                        uicheck: { opacity: 1, transition: { duration: 0.5 } },
                        performance: { opacity: 1 },
                        defect: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 0.5 }
                    }}
                    animate={controls}
                >
                    <rect x="50" y="185" width="110" height="28" rx="6" fill={colors.accent} />
                    <text x="105" y="204" textAnchor="middle" fontSize="9" fontWeight="600" fill="white">✓ UI Consistent</text>
                </motion.g>

                {/* --- SUCCESS BANNER --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 0 },
                        engineer: { opacity: 0 },
                        browsers: { opacity: 0 },
                        functional: { opacity: 0 },
                        uicheck: { opacity: 0 },
                        performance: { opacity: 0 },
                        defect: { opacity: 0 },
                        retest: { opacity: 0 },
                        complete: { opacity: 1, transition: { delay: 0.5 } }
                    }}
                    animate={controls}
                >
                    <rect x="200" y="370" width="240" height="40" rx="10" fill={colors.success} filter="url(#web-shadow)" />
                    <text x="320" y="396" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">✓ Web App Fully Validated</text>
                </motion.g>

                {/* --- LIVE INDICATOR --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 1, transition: { delay: 0.5 } },
                        engineer: { opacity: 1 },
                        browsers: { opacity: 1 },
                        functional: { opacity: 1 },
                        uicheck: { opacity: 1 },
                        performance: { opacity: 1 },
                        defect: { opacity: 1 },
                        retest: { opacity: 1 },
                        complete: { opacity: 0 }
                    }}
                    animate={controls}
                >
                    <rect x="510" y="260" width="90" height="24" rx="12" fill={colors.primary} />
                    <motion.circle
                        cx="525"
                        cy="272"
                        r="5"
                        fill="white"
                        animate={{ opacity: [1, 0.4, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    />
                    <text x="565" y="277" textAnchor="middle" fontSize="9" fontWeight="600" fill="white">TESTING</text>
                </motion.g>

            </svg>
        </div>
    );
};

export default WebAppTestingAnimation;
