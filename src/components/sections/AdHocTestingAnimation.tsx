"use client";

import React, { useEffect, useState } from "react";
import { FaBug, FaSearch, FaMousePointer, FaQuestionCircle } from "react-icons/fa";

const AdHocTestingAnimation: React.FC = () => {
    const [activeProbes, setActiveProbes] = useState<{ id: number; x: number; y: number; type: string }[]>([]);
    const [foundBugs, setFoundBugs] = useState<{ id: number; x: number; y: number }[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            // Add a new random probe
            const newProbe = {
                id: Date.now(),
                x: Math.random() * 80 + 10,
                y: Math.random() * 80 + 10,
                type: Math.random() > 0.5 ? "search" : "click",
            };

            setActiveProbes(prev => [...prev.slice(-4), newProbe]);

            // Sometimes find a "bug"
            if (Math.random() > 0.7) {
                setTimeout(() => {
                    setFoundBugs(prev => [...prev.slice(-3), { id: Date.now(), x: newProbe.x, y: newProbe.y }]);
                }, 600);
            }
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[350px] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #3b82f6 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>

            {/* Header Bar */}
            <div className="absolute top-0 left-0 right-0 h-10 bg-slate-800 flex items-center px-4 gap-2 z-10">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-4 text-xs text-slate-400 font-mono tracking-wider">AD-HOC_TESTER_V1.0.exe</div>
            </div>

            {/* Main Content Area */}
            <div className="absolute inset-0 pt-10 px-8 flex flex-col justify-center items-center">
                <div className="text-center mb-8">
                    <h4 className="text-blue-400 font-mono text-sm mb-2">&gt; HEURISTIC_INITIALIZED</h4>
                    <p className="text-slate-400 text-xs">Probabilistic Error Guessing in Progress...</p>
                </div>

                <div className="relative w-full h-full">
                    {/* Floating Probes */}
                    {activeProbes.map(probe => (
                        <div
                            key={probe.id}
                            className="absolute transition-all duration-1000 ease-out flex flex-col items-center"
                            style={{ left: `${probe.x}%`, top: `${probe.y}%` }}
                        >
                            <div className="p-2 bg-blue-500/20 rounded-full animate-ping absolute inset-0"></div>
                            <div className="relative z-10 p-2 bg-blue-500 rounded-lg text-white text-xs shadow-lg">
                                {probe.type === 'search' ? <FaSearch size={14} /> : <FaMousePointer size={14} />}
                            </div>
                        </div>
                    ))}

                    {/* Found Bugs */}
                    {foundBugs.map(bug => (
                        <div
                            key={bug.id}
                            className="absolute animate-bounce"
                            style={{ left: `${bug.x}%`, top: `${bug.y}%` }}
                        >
                            <div className="flex flex-col items-center">
                                <div className="bg-red-500 text-white p-2 rounded-full shadow-lg shadow-red-500/50">
                                    <FaBug size={16} />
                                </div>
                                <span className="mt-1 text-[10px] font-bold text-red-400 bg-red-900/50 px-1 rounded uppercase">Bug found!</span>
                            </div>
                        </div>
                    ))}

                    {/* Central Node */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-500/10 rounded-full flex items-center justify-center border border-indigo-500/30 animate-pulse">
                        <div className="w-20 h-20 bg-indigo-500/20 rounded-full flex items-center justify-center border border-indigo-500/50">
                            <FaQuestionCircle className="text-indigo-400 text-3xl" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Status */}
            <div className="absolute bottom-4 left-6 flex items-center gap-4 text-xs font-mono">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-slate-300">SYSTEM: ACTIVE</span>
                </div>
                <div className="text-slate-500">LATENCY: 12ms</div>
                <div className="text-slate-500">COVERAGE: INTUITIVE</div>
            </div>
        </div>
    );
};

export default AdHocTestingAnimation;
