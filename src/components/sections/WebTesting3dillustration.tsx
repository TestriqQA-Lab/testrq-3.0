"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    FaServer,
    FaDatabase,
    FaNetworkWired,
    FaGlobe,
    FaShieldAlt,
    FaChrome,
    FaFirefox,
    FaSafari,
    FaCheckCircle,
    FaMobileAlt,
    FaTabletAlt,
    FaBug
} from "react-icons/fa";

const WebTesting3dillustration = () => {
    return (
        <div className="w-full h-[300px] sm:h-[400px] md:h-[650px] flex items-center justify-center relative overflow-visible perspective-1000">
            {/* 3D Scene Container - Absolute to prevent layout flow expansion */}
            <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] preserve-3d origin-center scale-[0.5] min-[375px]:scale-[0.6] sm:scale-[0.75] md:scale-100"
                initial={{ rotateX: 60, rotateZ: -30 }}
                animate={{ rotateX: 60, rotateZ: [-30, -30] }}
                style={{ transformStyle: "preserve-3d" }}
            >

                {/* === LAYER 1: INFRASTRUCTURE (Foundation) === */}
                {/* Dark Server Base Platform with Reflection */}
                <div className="absolute inset-0 bg-gray-900/95 rounded-[30px] border-2 border-slate-700 shadow-[0_0_50px_rgba(0,0,0,0.5)] transform translate-z-0 flex items-center justify-center">
                    {/* Glossy Reflection Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-[28px] pointer-events-none" />

                    {/* Server Rack Details - Animated */}
                    <div className="grid grid-cols-4 gap-3 opacity-60">
                        {[...Array(16)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="w-8 h-8 rounded bg-slate-800 border border-slate-500/50 flex items-center justify-center shadow-inner"
                                animate={{ borderColor: ["rgba(100,116,139,0.5)", "rgba(56,189,248,0.5)", "rgba(100,116,139,0.5)"] }}
                                transition={{ duration: Math.random() * 2 + 1, repeat: Infinity }}
                            >
                                <motion.div
                                    className={`w-1.5 h-1.5 rounded-full ${i % 3 === 0 ? 'bg-green-400' : i % 2 === 0 ? 'bg-blue-400' : 'bg-amber-400'}`}
                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                    transition={{ duration: Math.random() * 0.5 + 0.2, repeat: Infinity }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Floating Database Clusters */}
                <motion.div
                    className="absolute -top-10 right-0 w-28 h-28 bg-slate-800/90 rounded-2xl border border-blue-500/30 shadow-2xl flex flex-col items-center justify-center gap-1 group overflow-hidden"
                    style={{ transform: "translateZ(30px)" }}
                    animate={{ z: [30, 40, 30] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="absolute inset-0 bg-blue-500/10 blur-xl group-hover:bg-blue-500/20 transition-all duration-500" />
                    <FaDatabase className="text-blue-400 text-4xl" />
                    <div className="flex gap-0.5 mt-1">
                        <motion.div className="w-1 h-1 bg-blue-400 rounded-full" animate={{ opacity: [0, 1] }} transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 0.1 }} />
                        <motion.div className="w-1 h-1 bg-blue-400 rounded-full" animate={{ opacity: [0, 1] }} transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 0.2 }} />
                        <motion.div className="w-1 h-1 bg-blue-400 rounded-full" animate={{ opacity: [0, 1] }} transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 0.3 }} />
                    </div>
                    <span className="text-[10px] text-blue-200 font-mono tracking-wider">SQL-01</span>
                </motion.div>

                <motion.div
                    className="absolute bottom-0 -left-10 w-28 h-28 bg-slate-800/90 rounded-2xl border border-cyan-500/30 shadow-2xl flex flex-col items-center justify-center gap-1 overflow-hidden"
                    style={{ transform: "translateZ(30px)" }}
                    animate={{ z: [30, 40, 30] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                    <div className="absolute inset-0 bg-cyan-500/10 blur-xl" />
                    <FaServer className="text-cyan-400 text-4xl" />
                    <span className="text-[10px] text-cyan-200 font-mono tracking-wider">API-GW</span>
                </motion.div>


                {/* === LAYER 2: API MESH NETWORK (Middle) === */}
                {/* Holographic Plane */}
                <motion.div
                    className="absolute inset-4 bg-cyan-900/10 border border-cyan-500/20 rounded-[20px] backdrop-blur-[2px] flex items-center justify-center"
                    style={{ transform: "translateZ(80px)" }}
                    animate={{ z: [80, 90, 80] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                    {/* Animated Mesh Lines */}
                    <svg className="absolute inset-0 w-full h-full opacity-40">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="cyan" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>

                    <FaNetworkWired className="text-cyan-400 opacity-90 text-7xl drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]" />

                    {/* High-Speed Data Packets */}
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_white]"
                            initial={{ left: "50%", top: "50%", opacity: 0 }}
                            animate={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                opacity: [0, 1, 0]
                            }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: Math.random() * 2, ease: "linear" }}
                        />
                    ))}
                </motion.div>


                {/* === LAYER 3: UI INTERFACE (Top) === */}
                {/* Main Dashboard Window - Enhanced */}
                <motion.div
                    className="absolute inset-x-6 inset-y-10 bg-white/95 rounded-xl border-t-4 border-blue-500 shadow-[0_20px_50px_rgba(0,0,0,0.2)] flex flex-col overflow-hidden"
                    style={{ transform: "translateZ(140px)" }}
                    animate={{ z: [140, 155, 140], rotateX: [0, 3, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                    {/* Browser Bar */}
                    <div className="h-7 bg-gray-50 border-b flex items-center px-3 gap-2">
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                            <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                        </div>
                        <div className="flex-1 bg-white mx-2 h-5 rounded-md border border-gray-200 text-[9px] flex items-center px-2 text-gray-400 font-mono">
                            <FaShieldAlt className="mr-1 text-green-500" /> https://app.testriq.com/dashboard
                        </div>
                    </div>

                    {/* Dynamic UI Content */}
                    <div className="flex-1 p-4 grid grid-cols-12 gap-3 h-full relative overflow-hidden">
                        {/* Sidebar */}
                        <div className="col-span-3 bg-slate-50 rounded-lg h-full flex flex-col gap-2 p-2">
                            <div className="w-8 h-8 rounded-full bg-blue-100 mb-2" />
                            <div className="h-2 w-full bg-slate-200 rounded" />
                            <div className="h-2 w-3/4 bg-slate-200 rounded" />
                            <div className="h-2 w-full bg-slate-200 rounded mt-auto" />
                        </div>

                        {/* Main Content Area with SCROLLING CODE */}
                        <div className="col-span-9 flex flex-col gap-3">
                            {/* Header Chart Mockup */}
                            <div className="h-16 bg-blue-50 rounded-lg w-full relative overflow-hidden">
                                <svg className="absolute bottom-0 left-0 right-0 h-10 w-full" preserveAspectRatio="none">
                                    <motion.path
                                        d="M0,40 Q50,10 100,20 T200,30 T300,10 T400,20 V40 H0 Z"
                                        fill="rgba(59, 130, 246, 0.2)"
                                        animate={{ d: "M0,40 Q50,20 100,5 T200,20 T300,5 T400,25 V40 H0 Z" }}
                                        transition={{ duration: 3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                                    />
                                </svg>
                            </div>

                            {/* Code Block Area */}
                            <div className="flex-1 bg-slate-900 rounded-lg p-2 font-mono text-[6px] text-green-400 overflow-hidden relative">
                                <div className="absolute top-0 right-0 p-1 text-gray-500">BASH</div>
                                <motion.div
                                    animate={{ y: [-20, -100] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                >
                                    <p>$ npm run test:e2e</p>
                                    <p className="text-white">{'>'} Launching Cypress...</p>
                                    <p className="text-blue-300">ℹ Found 42 test files</p>
                                    <p>✔ Auth Spec (120ms)</p>
                                    <p>✔ Dashboard Spec (850ms)</p>
                                    <p>✔ Profile Spec (340ms)</p>
                                    <p className="text-yellow-300">⚠ API Latency detected</p>
                                    <p>✔ Settings Spec (210ms)</p>
                                    <p>✔ Payments Spec (1.2s)</p>
                                    <p className="text-green-300">✔ ALL TESTS PASSED</p>
                                    <p>$ _</p>
                                </motion.div>
                            </div>
                        </div>

                        {/* Scan Line Overlay inside window */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent pointer-events-none"
                            animate={{ top: ["-100%", "200%"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                    </div>
                </motion.div>

                {/* Login Pop-up (Secondary Window) */}
                <motion.div
                    className="absolute top-5 -right-8 w-36 h-44 bg-white/95 rounded-xl border-t-4 border-purple-500 shadow-xl flex flex-col z-20"
                    style={{ transform: "translateZ(160px)" }}
                    animate={{ z: [160, 175, 160], y: [-8, 8] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                    <div className="h-12 bg-purple-50 flex items-center justify-center rounded-t-lg">
                        <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center border-2 border-white">
                            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                        </div>
                    </div>
                    <div className="p-3 space-y-2">
                        <div className="h-2.5 bg-gray-100 rounded-full w-full" />
                        <div className="h-2.5 bg-gray-100 rounded-full w-full" />
                        <div className="h-7 bg-purple-600 rounded-md text-white text-[9px] flex items-center justify-center font-bold shadow-md mt-1">
                            SECURE LOGIN
                        </div>
                    </div>
                    {/* Verified Checkmark */}
                    <motion.div
                        className="absolute -bottom-3 -right-3 bg-green-500 text-white p-1.5 rounded-full shadow-lg border-2 border-white"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 2, type: "spring" }}
                    >
                        <FaCheckCircle size={12} />
                    </motion.div>
                </motion.div>

                {/* === ANIMATION: THE 3D SCANNER BEAM === */}
                <motion.div
                    className="absolute -inset-20 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent z-10 pointer-events-none border-t border-cyan-400/20"
                    style={{ transform: "translateZ(120px) rotateZ(35deg)" }}
                    animate={{
                        left: ["-150%", "250%"],
                        opacity: [0, 1, 1, 0]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.5 }}
                />


                {/* === ORBITING DEVICE SATELLITES (Responsive Testing) === */}
                <motion.div
                    className="absolute top-1/2 left-1/2 w-[380px] h-[380px] border border-dashed border-gray-400/30 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    style={{ transform: "translateZ(130px)" }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                    {/* Chrome */}
                    <motion.div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white p-1.5 rounded-full shadow-lg border border-gray-100" animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                        <FaChrome className="text-blue-500 text-2xl" />
                    </motion.div>

                    {/* Mobile (Responsive) */}
                    <motion.div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white p-2 rounded-xl shadow-lg border border-gray-100" animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                        <FaMobileAlt className="text-gray-700 text-xl" />
                    </motion.div>
                </motion.div>

                {/* Inner Ring - Firefox/Safari/Tablet */}
                <motion.div
                    className="absolute top-1/2 left-1/2 w-[280px] h-[280px] border border-blue-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    style={{ transform: "translateZ(110px)" }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                    {/* Firefox */}
                    <motion.div className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-1.5 rounded-full shadow-lg border border-gray-100" animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}>
                        <FaFirefox className="text-orange-500 text-2xl" />
                    </motion.div>

                    {/* Safari & Tablet Group */}
                    <motion.div className="absolute right-0 top-1/2 -translate-y-1/2 flex gap-2 bg-white p-1.5 rounded-2xl shadow-lg border border-gray-100" animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}>
                        <FaSafari className="text-blue-400 text-xl" />
                        <FaTabletAlt className="text-gray-600 text-xl" />
                    </motion.div>
                </motion.div>


                {/* === BUG ZAPPER (Interactive Detail) === */}
                <motion.div
                    className="absolute -bottom-4 right-10 z-30"
                    style={{ transform: "translateZ(170px)" }}
                    animate={{ y: [0, -10, 0], opacity: [0, 1, 0, 0] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                >
                    <div className="flex items-center gap-1 bg-red-100 text-red-600 px-2 py-1 rounded border border-red-200 shadow-sm">
                        <FaBug className="text-xs" />
                        <span className="text-[8px] font-bold">BUG BLOCKED</span>
                    </div>
                </motion.div>


                {/* === STATUS WIDGET (Glass Card) === */}
                <motion.div
                    className="absolute top-1/3 -left-16 bg-white/80 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-xl border-l-4 border-cyan-500"
                    style={{ transform: "translateZ(150px) rotateX(-60deg) rotateZ(30deg)" }}
                    animate={{ x: [-5, 5] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="flex items-center gap-3">
                        <div className="bg-cyan-100 p-1.5 rounded-full">
                            <FaGlobe className="text-cyan-600" />
                        </div>
                        <div>
                            <div className="text-[8px] text-gray-500 font-bold uppercase tracking-wide">Cross-Platform</div>
                            <div className="text-xs font-bold text-gray-800">100% Compatible</div>
                        </div>
                    </div>
                </motion.div>

            </motion.div>

            {/* === BACKGROUND AMBIENCE === */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-500/10 to-transparent blur-[80px] -z-10 pointer-events-none" />

            {/* Falling Matrix-like Code Drops (Background) */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-[1px] h-20 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent -z-10"
                    style={{
                        left: `${Math.random() * 80 + 10}%`,
                        top: `${Math.random() * 80}%`
                    }}
                    animate={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
                    transition={{ duration: Math.random() * 2 + 2, repeat: Infinity, delay: Math.random() * 2 }}
                />
            ))}

        </div>
    );
};

export default WebTesting3dillustration;
