"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaRocket, FaCheck, FaBolt, FaDatabase, FaServer, FaShieldAlt } from "react-icons/fa";

const LaunchFast3DIllustration = () => {
    return (
        <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center relative overflow-visible perspective-1000">
            {/* 3D Scene Container - Scaled Up */}
            <motion.div
                className="relative w-[340px] h-[340px] md:w-[500px] md:h-[500px] preserve-3d"
                initial={{ rotateX: 55, rotateZ: -40 }}
                animate={{ rotateX: 55, rotateZ: [-40, -40] }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* === LAYER 1: Base Platform === */}
                {/* Main Glass Platform */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 to-blue-900/20 rounded-[40px] border border-white/30 shadow-2xl backdrop-blur-md transform translate-z-0" />

                {/* Secondary Decorative Layer (Offset) */}
                <div className="absolute inset-4 border-2 border-dashed border-blue-400/20 rounded-[32px] transform translate-z-[5px]" />

                {/* Floating Grid Floor Effect */}
                <div
                    className="absolute -inset-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] rounded-full opacity-50 pointer-events-none"
                    style={{ transform: "translateZ(-40px) scale(1.5)" }}
                />

                {/* === LAYER 2: Infrastructure Nodes (Background) === */}
                {/* Database Node */}
                <motion.div
                    className="absolute top-10 right-10 w-16 h-16 bg-white/80 rounded-xl shadow-lg flex items-center justify-center border border-indigo-200"
                    style={{ transform: "translateZ(20px)" }}
                    animate={{ z: [20, 30, 20] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                    <FaDatabase className="text-indigo-400 text-2xl" />
                </motion.div>

                {/* Server Node */}
                <motion.div
                    className="absolute bottom-20 left-10 w-16 h-16 bg-white/80 rounded-xl shadow-lg flex items-center justify-center border border-slate-200"
                    style={{ transform: "translateZ(15px)" }}
                    animate={{ z: [15, 25, 15] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                    <FaServer className="text-slate-400 text-2xl" />
                </motion.div>


                {/* === Connectors / Pipes === */}
                <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" style={{ transform: "translateZ(10px)" }}>
                    {/* Main Flow Path */}
                    <path
                        d="M 60 60 C 60 200, 200 60, 200 200 C 200 350, 350 350, 400 350"
                        fill="none"
                        stroke="url(#gradient-main)"
                        strokeWidth="6"
                        strokeLinecap="round"
                        className="opacity-40 filter drop-shadow-lg"
                    />
                    {/* Secondary Connectors */}
                    <path d="M 360 80 L 300 150" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" strokeDasharray="5,5" />
                    <path d="M 80 340 L 150 250" stroke="rgba(148, 163, 184, 0.3)" strokeWidth="2" strokeDasharray="5,5" />

                    <defs>
                        <linearGradient id="gradient-main" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="50%" stopColor="#a855f7" />
                            <stop offset="100%" stopColor="#22c55e" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* === LAYER 3: Main Process Nodes === */}

                {/* Node 1: Development (Top Left) */}
                <motion.div
                    className="absolute top-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-white rounded-3xl shadow-2xl flex items-center justify-center border-2 border-blue-400/50"
                    style={{ transform: "translateZ(50px)" }}
                    animate={{ z: [50, 60, 50] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="relative w-full h-full flex flex-col items-center justify-center">
                        {/* 3D Depth Layer */}
                        <div className="absolute inset-0 bg-blue-100/50 rounded-3xl transform translate-z-[-15px] translate-x-2 translate-y-2" />

                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl shadow-lg mb-2 z-10">
                            <FaCode className="text-white text-3xl" />
                        </div>
                        <div className="text-sm font-bold text-gray-800 bg-white/90 px-3 py-1 rounded-full shadow-sm z-10 border border-blue-100">
                            CODE
                        </div>

                        {/* Orbiting Elements */}
                        <motion.div
                            className="absolute w-full h-full border border-blue-300/30 rounded-full"
                            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                            className="absolute -top-2 -right-2 bg-blue-500 rounded-full w-4 h-4"
                            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>
                </motion.div>

                {/* Node 2: Automated QA (Center) */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-48 md:h-48 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-purple-500/20 backdrop-blur-xl"
                    style={{ transform: "translateZ(70px)" }}
                    animate={{ z: [70, 85, 70] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                    {/* Spinning Scanner Rings */}
                    <motion.div
                        className="absolute inset-2 border-t-4 border-l-4 border-purple-500/40 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                        className="absolute inset-6 border-b-4 border-r-4 border-pink-500/40 rounded-full"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    />

                    <div className="flex flex-col items-center z-10">
                        <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-5 rounded-full shadow-lg mb-2 relative">
                            <FaBolt className="text-white text-4xl" />
                            <motion.div
                                className="absolute inset-0 bg-white rounded-full opacity-20"
                                animate={{ scale: [1, 1.5], opacity: [0.2, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                        </div>
                        <div className="text-sm font-bold text-gray-800 bg-white/90 px-3 py-1 rounded-full shadow-sm border border-purple-100">
                            QA AUTO
                        </div>
                    </div>

                    {/* Security Badge Float */}
                    <motion.div
                        className="absolute -right-8 top-0 bg-white p-2 rounded-lg shadow-lg flex items-center gap-1 border border-red-100"
                        animate={{ y: [-10, 10] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <FaShieldAlt className="text-red-500 text-sm" />
                        <span className="text-[10px] font-bold text-gray-600">SECURE</span>
                    </motion.div>
                </motion.div>

                {/* Node 3: Deployment (Bottom Right) */}
                <motion.div
                    className="absolute bottom-0 right-0 w-32 h-32 md:w-44 md:h-44 bg-white rounded-[30px] shadow-2xl flex items-center justify-center border-b-8 border-green-500"
                    style={{ transform: "translateZ(60px)" }}
                    animate={{ z: [60, 75, 60], y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                    <div className="flex flex-col items-center z-10">
                        <div className="bg-gradient-to-br from-green-400 to-emerald-600 p-4 rounded-2xl shadow-lg mb-2 relative overflow-hidden">
                            <motion.div
                                animate={{ y: [0, -50] }} // Rocket launch animation
                                transition={{ duration: 2.5, repeat: Infinity, ease: "anticipate" }}
                            >
                                <FaRocket className="text-white text-3xl" />
                            </motion.div>
                        </div>
                        <div className="text-sm font-bold text-gray-800 bg-white/90 px-3 py-1 rounded-full shadow-sm border border-green-100">
                            LAUNCH
                        </div>
                    </div>

                    {/* Launch Shockwaves */}
                    <motion.div
                        className="absolute -bottom-4 w-full h-4 bg-green-400/30 blur-md rounded-full"
                        animate={{ scaleX: [0.8, 1.2], opacity: [0.8, 0.2] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    />
                </motion.div>


                {/* === DATA PACKETS === */}
                {/* Packet 1: Code -> QA */}
                <motion.div
                    className="absolute w-8 h-8 bg-white rounded-xl shadow-[0_0_15px_rgba(59,130,246,0.6)] z-20 flex items-center justify-center border border-blue-200"
                    style={{ transform: "translateZ(90px)" }}
                    animate={{
                        left: ["10%", "50%"],
                        top: ["10%", "50%"],
                        scale: [1, 0.5],
                        opacity: [1, 0] // Disappear into the QA node
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <FaCode className="text-blue-500 text-xs" />
                </motion.div>

                {/* Packet 2: QA -> Launch */}
                <motion.div
                    className="absolute w-10 h-10 bg-white rounded-full shadow-[0_0_20px_rgba(34,197,94,0.6)] z-20 flex items-center justify-center border border-green-200"
                    style={{ transform: "translateZ(90px)" }}
                    animate={{
                        left: ["50%", "85%"],
                        top: ["50%", "85%"],
                        scale: [0.5, 1],
                        opacity: [0, 1] // Emerge from QA node
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                    <FaCheck className="text-green-500 text-sm" />
                </motion.div>

                {/* === FLOATING UI WIDGETS === */}
                {/* Success Rate Widget */}
                <motion.div
                    className="absolute top-1/4 -right-10 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-xl border-l-4 border-green-500"
                    style={{ transform: "translateZ(100px) rotateX(-50deg) rotateZ(40deg)" }}
                    animate={{ y: [-5, 5] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="text-[10px] text-gray-500 font-semibold uppercase">Success Rate</div>
                    <div className="text-xl font-bold text-gray-800">99.8%</div>
                </motion.div>

                {/* Velocity Widget */}
                <motion.div
                    className="absolute bottom-1/4 -left-10 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-xl border-l-4 border-blue-500"
                    style={{ transform: "translateZ(80px) rotateX(-50deg) rotateZ(40deg)" }}
                    animate={{ y: [5, -5] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                    <div className="text-[10px] text-gray-500 font-semibold uppercase">Velocity</div>
                    <div className="text-xl font-bold text-gray-800">2x Faster</div>
                </motion.div>
            </motion.div>

            {/* === BACKGROUND AMBIENCE === */}
            {/* Large Glowing Orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[80px] -z-10 animate-pulse pointer-events-none" />

            {/* Animated Particles in Background */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30"
                    initial={{
                        x: Math.random() * 400 - 200,
                        y: Math.random() * 400 - 200
                    }}
                    animate={{
                        y: [0, -100],
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        delay: Math.random() * 2
                    }}
                />
            ))}
        </div>
    );
};

export default LaunchFast3DIllustration;
