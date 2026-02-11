"use client";
import React from "react";
import { motion } from "framer-motion";

const UATAnimation = () => {
    return (
        <div className="relative w-full aspect-square flex items-center justify-center p-4">
            <svg
                viewBox="0 0 500 500"
                className="w-full h-full max-w-[450px]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Background Glow */}
                <circle cx="250" cy="250" r="150" fill="url(#glowGradient)" fillOpacity="0.2" />

                {/* Main Screen/App Representation */}
                <motion.rect
                    x="100" y="80" width="300" height="340"
                    rx="20"
                    stroke="currentColor"
                    strokeWidth="4"
                    className="text-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                />

                {/* Dashboard Elements */}
                <motion.rect
                    x="130" y="110" width="100" height="10"
                    rx="5" fill="#3B82F6"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5 }}
                />
                <motion.rect
                    x="130" y="135" width="240" height="40"
                    rx="8" fill="#F3F4F6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                />

                {/* User Icons (Bottom Group) */}
                <g>
                    {[0, 1, 2].map((i) => (
                        <motion.circle
                            key={i}
                            cx={180 + i * 70} cy="360" r="15"
                            fill="#3B82F6"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1 + i * 0.2, type: "spring" }}
                        />
                    ))}
                </g>

                {/* Checkmarks (The "Acceptance" part) */}
                <motion.path
                    d="M160 250 L200 290 L280 210"
                    stroke="#10B981"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.6 }}
                />

                {/* Floating Feedback Bubbles */}
                <motion.circle
                    cx="380" cy="150" r="25"
                    fill="#60A5FA"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.circle
                    cx="100" cy="280" r="20"
                    fill="#93C5FD"
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

                <defs>
                    <radialGradient id="glowGradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(250 250) rotate(90) scale(200)">
                        <stop stopColor="#3B82F6" />
                        <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
    );
};

export default UATAnimation;
