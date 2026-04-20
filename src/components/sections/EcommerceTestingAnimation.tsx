"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const EcommerceTestingAnimation = () => {
    const controls = useAnimation();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Corporate Color Palette (E-commerce theme - Blue/Purple/Green)
    const colors = {
        bg: "#f5f3ff",
        primary: "#6366f1",
        secondary: "#8b5cf6",
        accent: "#a78bfa",
        cart: "#f59e0b",
        payment: "#10b981",
        success: "#10b981",
        error: "#ef4444",
        textPrimary: "#1e1b4b",
        textSecondary: "#64748b",
        product: "#3b82f6",
    };

    // Product cards
    const products = [
        { id: "p1", x: 100, y: 140, emoji: "👕", label: "Shirt", price: "$49" },
        { id: "p2", x: 200, y: 140, emoji: "👟", label: "Shoes", price: "$129" },
        { id: "p3", x: 300, y: 140, emoji: "⌚", label: "Watch", price: "$299" },
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
                await controls.start("products");
                await controls.start("search");
                await controls.start("addToCart");
                await controls.start("checkout");
                await controls.start("payment");
                await controls.start("confirm");
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
                    <filter id="ecom-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                    </filter>
                    <filter id="ecom-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <linearGradient id="ecom-gradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                </defs>

                {/* --- STOREFRONT HEADER --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: -20 },
                        init: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                        engineer: { opacity: 1 },
                        products: { opacity: 1 },
                        search: { opacity: 1 },
                        addToCart: { opacity: 1 },
                        checkout: { opacity: 1 },
                        payment: { opacity: 1 },
                        confirm: { opacity: 1 },
                        complete: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    {/* Header bar */}
                    <rect x="50" y="30" width="540" height="50" rx="8" fill="white" filter="url(#ecom-shadow)" />
                    <rect x="60" y="45" width="80" height="20" rx="4" fill={colors.primary} />
                    <text x="100" y="59" textAnchor="middle" fontSize="10" fontWeight="700" fill="white">STORE</text>

                    {/* Search bar */}
                    <rect x="160" y="45" width="200" height="20" rx="10" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1" />
                    <text x="180" y="58" fontSize="9" fill="#94a3b8">🔍 Search products...</text>

                    {/* Cart icon */}
                    <circle cx="540" cy="55" r="15" fill={colors.cart} />
                    <text x="540" y="60" textAnchor="middle" fontSize="14">🛒</text>
                    <motion.circle
                        cx="550"
                        cy="45"
                        r="8"
                        fill={colors.error}
                        variants={{
                            addToCart: { scale: [0, 1.2, 1], transition: { duration: 0.3 } },
                            checkout: { scale: 1 },
                            payment: { scale: 1 },
                            confirm: { scale: 1 },
                            complete: { scale: 0 }
                        }}
                        initial={{ scale: 0 }}
                        animate={controls}
                    />
                    <motion.text
                        x="550"
                        y="49"
                        textAnchor="middle"
                        fontSize="9"
                        fontWeight="700"
                        fill="white"
                        variants={{
                            addToCart: { opacity: 1 },
                            complete: { opacity: 0 }
                        }}
                        initial={{ opacity: 0 }}
                        animate={controls}
                    >
                        1
                    </motion.text>
                </motion.g>

                {/* --- PRODUCT CARDS --- */}
                {products.map((product, i) => (
                    <motion.g
                        key={product.id}
                        initial="reset"
                        variants={{
                            reset: { opacity: 0, y: 30 },
                            init: { opacity: 0 },
                            engineer: { opacity: 0 },
                            products: { opacity: 1, y: 0, transition: { delay: i * 0.15, type: "spring" } },
                            search: { opacity: 1 },
                            addToCart: i === 2 ? { scale: 1.05, transition: { duration: 0.2 } } : { opacity: 1 },
                            checkout: { opacity: 0.5, scale: 0.9 },
                            payment: { opacity: 0.3 },
                            confirm: { opacity: 0.3 },
                            complete: { opacity: 1, scale: 1 }
                        }}
                        animate={controls}
                    >
                        <rect
                            x={product.x - 40}
                            y={product.y - 40}
                            width="80"
                            height="100"
                            rx="10"
                            fill="white"
                            stroke={i === 2 ? colors.primary : "#e2e8f0"}
                            strokeWidth={i === 2 ? "2" : "1"}
                            filter="url(#ecom-shadow)"
                        />
                        <text x={product.x} y={product.y} textAnchor="middle" fontSize="28">{product.emoji}</text>
                        <text x={product.x} y={product.y + 30} textAnchor="middle" fontSize="10" fontWeight="600" fill={colors.textPrimary}>{product.label}</text>
                        <text x={product.x} y={product.y + 45} textAnchor="middle" fontSize="11" fontWeight="700" fill={colors.primary}>{product.price}</text>
                    </motion.g>
                ))}

                {/* --- SEARCH HIGHLIGHT --- */}
                <motion.rect
                    x="160"
                    y="45"
                    width="200"
                    height="20"
                    rx="10"
                    fill="none"
                    stroke={colors.primary}
                    strokeWidth="2"
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        search: { opacity: 1, transition: { duration: 0.3 } },
                        addToCart: { opacity: 0 }
                    }}
                    animate={controls}
                />

                {/* --- CART ANIMATION (product flies to cart) --- */}
                <motion.circle
                    r="12"
                    fill={colors.primary}
                    filter="url(#ecom-glow)"
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        addToCart: {
                            opacity: [0, 1, 1, 0],
                            cx: [300, 400, 540],
                            cy: [140, 90, 55],
                            transition: { duration: 0.6 }
                        }
                    }}
                    animate={controls}
                />

                {/* --- CHECKOUT PANEL --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, x: 50 },
                        init: { opacity: 0 },
                        engineer: { opacity: 0 },
                        products: { opacity: 0 },
                        search: { opacity: 0 },
                        addToCart: { opacity: 0 },
                        checkout: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                        payment: { opacity: 1 },
                        confirm: { opacity: 1 },
                        complete: { opacity: 0 }
                    }}
                    animate={controls}
                >
                    <rect x="380" y="100" width="200" height="200" rx="12" fill="white" filter="url(#ecom-shadow)" />
                    <text x="480" y="125" textAnchor="middle" fontSize="12" fontWeight="700" fill={colors.textPrimary}>Checkout</text>

                    {/* Checkout steps */}
                    {[
                        { y: 150, label: "📍 Shipping", step: 1 },
                        { y: 185, label: "💳 Payment", step: 2 },
                        { y: 220, label: "📋 Review", step: 3 },
                    ].map((item, i) => (
                        <React.Fragment key={`checkout-${i}`}>
                            <motion.rect
                                x="395"
                                y={item.y - 12}
                                width="170"
                                height="28"
                                rx="6"
                                fill="#f8fafc"
                                stroke={colors.primary}
                                strokeWidth="1"
                                variants={{
                                    checkout: i === 0 ? { fill: "#ede9fe" } : {},
                                    payment: i === 1 ? { fill: "#ede9fe" } : {},
                                    confirm: i === 2 ? { fill: "#ede9fe" } : {}
                                }}
                                animate={controls}
                            />
                            <text x="410" y={item.y + 3} fontSize="11" fill={colors.textPrimary}>{item.label}</text>
                            <motion.circle
                                cx="550"
                                cy={item.y - 1}
                                r="8"
                                fill={colors.success}
                                variants={{
                                    checkout: i === 0 ? { scale: 1 } : { scale: 0 },
                                    payment: i <= 1 ? { scale: 1 } : { scale: 0 },
                                    confirm: { scale: 1 }
                                }}
                                initial={{ scale: 0 }}
                                animate={controls}
                            />
                        </React.Fragment>
                    ))}

                    {/* Order total */}
                    <rect x="395" y="255" width="170" height="35" rx="6" fill={colors.primary} />
                    <text x="480" y="277" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">Place Order - $299</text>
                </motion.g>

                {/* --- PAYMENT SECURE LOCK --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, scale: 0 },
                        init: { opacity: 0 },
                        engineer: { opacity: 0 },
                        products: { opacity: 0 },
                        search: { opacity: 0 },
                        addToCart: { opacity: 0 },
                        checkout: { opacity: 0 },
                        payment: { opacity: 1, scale: 1, transition: { type: "spring" } },
                        confirm: { opacity: 1 },
                        complete: { opacity: 0 }
                    }}
                    animate={controls}
                >
                    <rect x="420" y="320" width="120" height="30" rx="8" fill={colors.success} />
                    <text x="480" y="340" textAnchor="middle" fontSize="10" fontWeight="600" fill="white">🔒 Payment Secure</text>
                </motion.g>

                {/* --- QA ENGINEER --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, x: -30 },
                        init: { opacity: 0 },
                        engineer: { opacity: 1, x: 0, transition: { duration: 0.5, type: "spring" } },
                        products: { opacity: 1 },
                        search: { opacity: 1 },
                        addToCart: { opacity: 1 },
                        checkout: { opacity: 1 },
                        payment: { opacity: 1 },
                        confirm: { opacity: 1 },
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
                    <rect x="78" y="398" width="44" height="24" rx="2" fill="#6366f1" opacity="0.3" />
                </motion.g>

                {/* --- TEST RESULTS PANEL --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, y: 20 },
                        init: { opacity: 0 },
                        engineer: { opacity: 0 },
                        products: { opacity: 0 },
                        search: { opacity: 0 },
                        addToCart: { opacity: 0 },
                        checkout: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                        payment: { opacity: 1 },
                        confirm: { opacity: 1 },
                        complete: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="50" y="280" width="130" height="110" rx="8" fill="white" filter="url(#ecom-shadow)" />
                    <text x="115" y="305" textAnchor="middle" fontSize="10" fontWeight="700" fill={colors.textPrimary}>Test Results</text>

                    {[
                        { y: 325, label: "Cart Flow", w: 95, color: colors.success },
                        { y: 350, label: "Payment", w: 100, color: colors.success },
                        { y: 375, label: "Mobile", w: 85, color: colors.cart },
                    ].map((bar, i) => (
                        <React.Fragment key={`bar-${i}`}>
                            <text x="60" y={bar.y + 4} fontSize="8" fill={colors.textSecondary}>{bar.label}</text>
                            <rect x="60" y={bar.y + 8} width="110" height="6" rx="3" fill="#e2e8f0" />
                            <motion.rect
                                x="60"
                                y={bar.y + 8}
                                height="6"
                                rx="3"
                                fill={bar.color}
                                variants={{
                                    checkout: { width: [0, bar.w], transition: { duration: 0.5, delay: i * 0.1 } }
                                }}
                                animate={controls}
                            />
                        </React.Fragment>
                    ))}
                </motion.g>

                {/* --- ORDER CONFIRMATION --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0, scale: 0 },
                        init: { opacity: 0 },
                        engineer: { opacity: 0 },
                        products: { opacity: 0 },
                        search: { opacity: 0 },
                        addToCart: { opacity: 0 },
                        checkout: { opacity: 0 },
                        payment: { opacity: 0 },
                        confirm: { opacity: 1, scale: 1, transition: { type: "spring" } },
                        complete: { opacity: 1 }
                    }}
                    animate={controls}
                >
                    <rect x="200" y="280" width="160" height="80" rx="10" fill="white" filter="url(#ecom-shadow)" />
                    <circle cx="280" cy="310" r="18" fill={colors.success} />
                    <text x="280" y="316" textAnchor="middle" fontSize="16" fill="white">✓</text>
                    <text x="280" y="345" textAnchor="middle" fontSize="11" fontWeight="700" fill={colors.textPrimary}>Order Confirmed!</text>
                    <text x="280" y="358" textAnchor="middle" fontSize="9" fill={colors.textSecondary}>#ORD-2026-0127</text>
                </motion.g>

                {/* --- SUCCESS BANNER --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 0 },
                        engineer: { opacity: 0 },
                        products: { opacity: 0 },
                        search: { opacity: 0 },
                        addToCart: { opacity: 0 },
                        checkout: { opacity: 0 },
                        payment: { opacity: 0 },
                        confirm: { opacity: 0 },
                        complete: { opacity: 1, transition: { delay: 0.5 } }
                    }}
                    animate={controls}
                >
                    <rect x="150" y="10" width="340" height="40" rx="10" fill={colors.success} filter="url(#ecom-shadow)" />
                    <text x="320" y="36" textAnchor="middle" fontSize="13" fontWeight="700" fill="white">✓ E-commerce Flow Validated</text>
                </motion.g>

                {/* --- LIVE INDICATOR --- */}
                <motion.g
                    initial="reset"
                    variants={{
                        reset: { opacity: 0 },
                        init: { opacity: 1, transition: { delay: 0.5 } },
                        engineer: { opacity: 1 },
                        products: { opacity: 1 },
                        search: { opacity: 1 },
                        addToCart: { opacity: 1 },
                        checkout: { opacity: 1 },
                        payment: { opacity: 1 },
                        confirm: { opacity: 1 },
                        complete: { opacity: 0 }
                    }}
                    animate={controls}
                >
                    <rect x="510" y="10" width="80" height="22" rx="11" fill={colors.primary} />
                    <motion.circle
                        cx="525"
                        cy="21"
                        r="5"
                        fill="white"
                        animate={{ opacity: [1, 0.4, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    />
                    <text x="560" y="26" textAnchor="middle" fontSize="9" fontWeight="600" fill="white">TESTING</text>
                </motion.g>

            </svg>
        </div>
    );
};

export default EcommerceTestingAnimation;
